"""数据同步 / 抓取器控制 API（按用户隔离）"""
import threading
import time
import uuid
import json
from typing import Dict, List, Optional
from datetime import datetime
from pathlib import Path

from fastapi import APIRouter, UploadFile, File, Depends
from fastapi.responses import FileResponse
from pydantic import BaseModel

from ..auth import get_current_user, scope_user_id
from ..database import get_conn
from ..services import scraper
from ..services import live_review

router = APIRouter(prefix="/api/sync", tags=["sync"])


class ImportTextIn(BaseModel):
    text: str


class LiveCaptureIn(BaseModel):
    live_id: str
    source_url: Optional[str] = None
    points: List[Dict] = []
    evidence: List[Dict] = []


class CompetitorContentIn(BaseModel):
    platform: str
    account_name: str
    content_url: str
    title: str = ""
    published_at: Optional[str] = None
    likes: int = 0
    collects: int = 0
    views: int = 0
    comments: int = 0
    hook: str = ""
    topic: str = ""
    script_outline: str = ""

# 后台扫码登录任务状态（按用户维度）
_login_tasks = {}
_history_tasks = {}
_evidence_tasks = {}


def _run_login(user_id: str):
    _login_tasks[user_id] = {"running": True, "result": None, "qrcode_url": None}
    try:
        ok, msg, _qr = scraper.ensure_login(user_id, timeout_seconds=300)
        scrape_result = None
        if ok:
            # 登录态一旦保存就立即更新连接状态；后续概览抓取失败不能把已登录误显示为未连接。
            conn = get_conn()
            try:
                conn.execute(
                    "UPDATE channels SET login_state = '已登录', "
                    "last_login_at = ? WHERE user_id = ?",
                    (datetime.utcnow().isoformat(), user_id),
                )
                conn.commit()
            finally:
                conn.close()
            try:
                scrape_result = scraper.scrape_overview(user_id)
            except Exception as scrape_error:  # noqa: BLE001
                scrape_result = {"ok": False, "error": f"登录成功，概览同步稍后重试：{scrape_error}"}
        _login_tasks[user_id]["result"] = {
            "ok": ok, "message": msg,
            "scrape": scrape_result
        }
        if not ok:
            conn = get_conn()
            try:
                conn.execute(
                    "UPDATE channels SET login_state = '扫码失败' WHERE user_id = ?",
                    (user_id,),
                )
                conn.commit()
            finally:
                conn.close()
    except Exception as e:  # noqa: BLE001
        _login_tasks[user_id]["result"] = {"ok": False, "message": f"登录异常：{e}"}
    finally:
        # 即使没成功，qrcode 截图如果存在也保留
        qr = scraper.qrcode_path_for(user_id)
        if qr:
            # 直接拼成相对 URL（fastapi 静态文件需挂载，后面加）
            _login_tasks[user_id]["qrcode_url"] = f"/api/sync/qrcode?ts={int(time.time())}"
        _login_tasks[user_id]["running"] = False


def _run_history_sync(user_id: str):
    task = _history_tasks[user_id]
    task.update({"running": True, "status": "同步中", "message": "正在打开直播历史"})
    def progress(done, total, message):
        task.update({"done": done, "total": total, "message": message})
    try:
        result = scraper.scrape_live_history(user_id, progress)
        if result.get("ok"):
            _replace_live_sessions(user_id, result.get("lives", []))
        task.update({"result": result, "status": "完成" if result.get("ok") else "失败", "message": result.get("error") or f"发现 {result.get('live_count', 0)} 场直播"})
    except Exception as e:  # noqa: BLE001
        task.update({"status": "失败", "message": f"同步异常：{e}", "result": {"ok": False}})
    finally:
        task["running"] = False


def _run_live_evidence(user_id: str):
    task = _evidence_tasks[user_id]
    task.update({"running": True, "status": "采集中", "message": "正在逐场打开视频号后台数据详情"})
    def progress(done, total, message):
        task.update({"done": done, "total": total, "message": message})
    try:
        result = scraper.capture_live_replay_evidence(user_id, progress)
        task.update({"result": result, "status": "完成" if result.get("ok") else "失败",
                     "message": result.get("error") or f"已采集 {result.get('captured', 0)} 场真实回放证据"})
    except Exception as e:  # noqa: BLE001
        task.update({"status": "失败", "message": f"证据采集异常：{e}", "result": {"ok": False}})
    finally:
        task["running"] = False


def _replace_live_sessions(user_id: str, lives: list[dict]):
    """写入后台场次，并按日期把飞书人工复盘回填到对应直播。

    视频号负责真实指标；飞书「直播复盘（含销售记录）」是人工撰写的脚本、画面
    与备注来源。两者不能互相覆盖，使用开播自然日匹配（同日测试场按标题区分）。
    """
    conn = get_conn()
    try:
        # 在删除当前用户旧备注前，先从只读的飞书种子副本取出可匹配记录。
        feishu_rows = {
            row["date"]: dict(row) for row in conn.execute(
                "SELECT date,day,time,cards,remark,script,visual FROM live_notes WHERE user_id = ?",
                ("demo",),
            ).fetchall()
        }
        conn.execute("DELETE FROM live_sessions WHERE user_id = ?", (user_id,))
        conn.execute("DELETE FROM live_notes WHERE user_id = ?", (user_id,))
        for live in lives:
            visual = {
                "live_id": live["live_id"], "source_url": live["detail_url"],
                "cover_url": live.get("cover_url") or None,
                "energy": "已同步，等待回放证据采集",
            }
            conn.execute(
                """INSERT INTO live_sessions
                (date,title,dur,views,peak,hot,gmv,status,visual,user_id)
                VALUES (?,?,?,?,?,?,?,?,?,?)""",
                (live["date"], live["title"], live["dur"], live["views"], live["peak"],
                 live["hot"], live["gmv"], "已同步", json.dumps(visual, ensure_ascii=False), user_id),
            )
            date_key = live["date"].split(" ", 1)[0]
            # 飞书中为同日测流场使用 2025-11-07c 作为区分键。
            if live["title"].strip().lower() == "ceshi":
                date_key = f"{date_key}c"
            note = feishu_rows.get(date_key)
            if note:
                conn.execute(
                    """INSERT INTO live_notes (date,day,time,cards,remark,script,visual,user_id)
                    VALUES (?,?,?,?,?,?,?,?)""",
                    (live["date"], note["day"], note["time"], note["cards"], note["remark"],
                     note["script"], note["visual"], user_id),
                )
        conn.commit()
    finally:
        conn.close()


@router.get("/status")
def status(user=Depends(get_current_user)):
    uid = scope_user_id(user)
    task = _login_tasks.get(uid, {"running": False, "result": None})
    return {
        "login": scraper.login_status(uid),
        "last_sync": scraper.get_sync_state("last_scrape"),
        "login_task": task,
        "history_task": _history_tasks.get(uid, {"running": False, "status": "未开始", "done": 0, "total": 0}),
        "evidence_task": _evidence_tasks.get(uid, {"running": False, "status": "未开始", "done": 0, "total": 0}),
    }


@router.get("/qrcode")
def get_qrcode(user=Depends(get_current_user)):
    """返回当前用户最新的二维码截图（无头/有头扫码共用）。"""
    uid = scope_user_id(user)
    p = scraper.qrcode_path_for(uid)
    if not p:
        return {"ok": False, "message": "暂无二维码，请先触发扫码登录"}
    return FileResponse(str(p), media_type="image/png")


@router.post("/login")
def login(user=Depends(get_current_user)):
    """启动扫码登录（弹有头浏览器），后台执行；前端轮询 /status 看结果。"""
    uid = scope_user_id(user)
    conn = get_conn()
    try:
        bound = conn.execute("SELECT name FROM channels WHERE user_id = ? LIMIT 1", (uid,)).fetchone()
    finally:
        conn.close()
    if not bound:
        return {"started": False, "message": "请先绑定要登录的视频号名称；扫码后系统会据此选择目标账号"}
    task = _login_tasks.get(uid, {"running": False, "result": None})
    if task.get("running"):
        return {"started": False, "message": "登录任务进行中，请稍候"}
    if scraper._state_valid(uid):
        return {"started": False, "message": "登录态仍有效，无需重新扫码"}
    threading.Thread(target=_run_login, args=(uid,), daemon=True).start()
    return {"started": True, "message": "已启动扫码登录，请在弹出的浏览器窗口扫码（约 5 分钟有效）"}


@router.post("/scrape")
def scrape(user=Depends(get_current_user)):
    """抓取后台核心指标（需先登录产品账号 + 扫码登录视频号）。"""
    return scraper.scrape_overview(scope_user_id(user))


@router.post("/live-history")
def sync_live_history(user=Depends(get_current_user)):
    """启动全部历史直播的发现任务；需已完成视频号扫码登录。"""
    uid = scope_user_id(user)
    current = _history_tasks.get(uid)
    if current and current.get("running"):
        return {"started": False, "message": "历史直播同步正在进行"}
    if not scraper._state_valid(uid):
        return {"started": False, "message": "请先扫码登录视频号"}
    _history_tasks[uid] = {"id": str(uuid.uuid4()), "running": False, "status": "排队中", "done": 0, "total": 0, "message": "等待启动", "result": None}
    threading.Thread(target=_run_history_sync, args=(uid,), daemon=True).start()
    return {"started": True, "task": _history_tasks[uid]}


@router.post("/live-evidence")
def capture_live_evidence(user=Depends(get_current_user)):
    """逐场进入视频号后台详情并保存可见回放证据；不会下载完整直播视频。"""
    uid = scope_user_id(user)
    current = _evidence_tasks.get(uid)
    if current and current.get("running"):
        return {"started": False, "message": "逐场回放证据采集正在进行", "task": current}
    if not scraper._state_valid(uid):
        return {"started": False, "message": "请先扫码登录视频号"}
    _evidence_tasks[uid] = {"id": str(uuid.uuid4()), "running": False, "status": "排队中", "done": 0,
                            "total": 0, "message": "等待启动", "result": None}
    threading.Thread(target=_run_live_evidence, args=(uid,), daemon=True).start()
    return {"started": True, "task": _evidence_tasks[uid]}


@router.post("/live-capture")
def save_live_capture(body: LiveCaptureIn, user=Depends(get_current_user)):
    """同步助手从已登录后台提取曲线/回放证据后写入；不接收 Cookie 或视频文件。"""
    if not body.live_id:
        return {"ok": False, "error": "缺少直播 ID"}
    analysis = live_review.save_live_capture(scope_user_id(user), body.live_id, body.points, body.evidence, body.source_url)
    return {"ok": True, "analysis": analysis}


@router.get("/live-review/{live_id}")
def live_review_detail(live_id: str, user=Depends(get_current_user)):
    return live_review.get_review(scope_user_id(user), live_id)


@router.post("/competitor-content")
def save_competitor_content(body: CompetitorContentIn, user=Depends(get_current_user)):
    """只保存公开短视频快照，并统一执行爆款规则。"""
    uid = scope_user_id(user)
    viral, reason = live_review.viral_rule(body.likes, body.collects, body.views)
    conn = get_conn()
    try:
        conn.execute(
            """INSERT INTO competitor_contents
            (id,user_id,platform,account_name,content_url,title,published_at,likes,collects,views,comments,is_viral,viral_reason,hook,topic,script_outline,captured_at)
            VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
            ON CONFLICT(user_id,content_url) DO UPDATE SET likes=excluded.likes, collects=excluded.collects,
            views=excluded.views, comments=excluded.comments, is_viral=excluded.is_viral, viral_reason=excluded.viral_reason,
            hook=excluded.hook, topic=excluded.topic, script_outline=excluded.script_outline, captured_at=excluded.captured_at""",
            (str(__import__('uuid').uuid4()), uid, body.platform, body.account_name, body.content_url, body.title,
             body.published_at, body.likes, body.collects, body.views, body.comments, int(viral), reason,
             body.hook, body.topic, body.script_outline, datetime.utcnow().isoformat()),
        )
        conn.commit()
    finally:
        conn.close()
    return {"ok": True, "is_viral": viral, "reason": reason}


@router.post("/import")
def import_report(file: UploadFile = File(...), user=Depends(get_current_user)):
    """导入 CSV / XLSX 报表，归属当前用户。"""
    raw = file.file.read()
    result = scraper.import_report_bytes(raw, file.filename or "upload", scope_user_id(user))
    if result.get("ok"):
        scraper.set_sync_state("last_report_import", file.filename or "upload")
    return result


@router.post("/import-text")
def import_text(body: ImportTextIn, user=Depends(get_current_user)):
    """粘贴表格文本导入（CSV / TSV 自动识别，可从 Excel 或视频号后台直接复制）。"""
    return scraper.import_table_text(body.text or "", scope_user_id(user))
