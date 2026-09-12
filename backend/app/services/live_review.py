"""直播复盘的标准化写入与可解释归因。

采集器只负责从用户已授权的视频号页面读取数据；此模块不保存 Cookie、密码或回放下载文件。
"""
import json
import uuid
from datetime import datetime, timezone

from ..database import get_conn


def _now():
    return datetime.now(timezone.utc).isoformat()


def viral_rule(likes=0, collects=0, views=0):
    """公开短视频爆款判定：互动强或规模强，规则在 API 中返回给前端展示。"""
    likes, collects, views = int(likes or 0), int(collects or 0), int(views or 0)
    if views >= 1_000_000:
        return True, "播放量 ≥ 100 万"
    if likes >= 20_000:
        return True, "点赞 ≥ 2 万"
    if collects >= 20_000:
        return True, "收藏 ≥ 2 万"
    if likes + collects >= 30_000:
        return True, "点赞与收藏合计 ≥ 3 万"
    return False, "未达到爆款阈值"


def save_live_capture(user_id, live_id, points, evidence, source_url=None):
    """保存一个直播的时间序列和回放页证据。输入均来自用户授权页面的可见/结构化数据。"""
    now = _now()
    conn = get_conn()
    try:
        for p in points:
            sec = int(p.get("at_seconds", 0))
            conn.execute(
                """INSERT INTO live_metric_points
                   (id,user_id,live_id,at_seconds,online,enter_count,leave_count,gmv,order_count,source_url,captured_at)
                   VALUES(?,?,?,?,?,?,?,?,?,?,?)
                   ON CONFLICT(user_id,live_id,at_seconds) DO UPDATE SET
                   online=excluded.online,enter_count=excluded.enter_count,leave_count=excluded.leave_count,
                   gmv=excluded.gmv,order_count=excluded.order_count,source_url=excluded.source_url,captured_at=excluded.captured_at""",
                (str(uuid.uuid4()), user_id, live_id, sec, p.get("online"), p.get("enter_count"),
                 p.get("leave_count"), p.get("gmv"), p.get("order_count"), source_url, now),
            )
        for e in evidence:
            conn.execute(
                "INSERT INTO live_evidence (id,user_id,live_id,at_seconds,type,label,content,asset_url,source_url,captured_at) VALUES(?,?,?,?,?,?,?,?,?,?)",
                (str(uuid.uuid4()), user_id, live_id, int(e.get("at_seconds", 0)), e.get("type", "event"),
                 e.get("label"), e.get("content"), e.get("asset_url"), source_url, now),
            )
        conn.commit()
    finally:
        conn.close()
    return analyse_live(user_id, live_id)


def analyse_live(user_id, live_id):
    """从相邻点增量检测峰谷，并以同时间窗口证据构成“相关性”结论。"""
    conn = get_conn()
    try:
        points = [dict(r) for r in conn.execute(
            "SELECT * FROM live_metric_points WHERE user_id=? AND live_id=? ORDER BY at_seconds", (user_id, live_id)
        ).fetchall()]
        evidence = [dict(r) for r in conn.execute(
            "SELECT * FROM live_evidence WHERE user_id=? AND live_id=? ORDER BY at_seconds", (user_id, live_id)
        ).fetchall()]
        findings = []
        for prev, cur in zip(points, points[1:]):
            a, b = prev.get("online") or 0, cur.get("online") or 0
            delta = b - a
            threshold = max(10, round(max(a, 1) * 0.2))
            if abs(delta) < threshold:
                continue
            nearby = [e for e in evidence if abs(e["at_seconds"] - cur["at_seconds"]) <= 90]
            kind = "拉升" if delta > 0 else "流失"
            findings.append({
                "at_seconds": cur["at_seconds"], "kind": kind, "delta_online": delta,
                "evidence": [{"type": e["type"], "label": e["label"], "content": e["content"], "asset_url": e["asset_url"]} for e in nearby],
                "confidence": "中" if nearby else "低",
                "conclusion": f"在线人数{kind} {abs(delta)} 人；{'已关联同时间段页面证据，属相关性判断。' if nearby else '暂无同时间段事件证据，暂不作归因。'}",
            })
        summary = f"已分析 {len(points)} 个曲线点，识别 {len(findings)} 个需复盘时段。"
        conn.execute("DELETE FROM live_analyses WHERE user_id=? AND live_id=?", (user_id, live_id))
        conn.execute(
            "INSERT INTO live_analyses (id,user_id,live_id,version,summary,findings,source_hash,created_at) VALUES(?,?,?,?,?,?,?,?)",
            (str(uuid.uuid4()), user_id, live_id, "rule-v1", summary, json.dumps(findings, ensure_ascii=False), None, _now()),
        )
        conn.commit()
        return {"live_id": live_id, "summary": summary, "findings": findings}
    finally:
        conn.close()


def get_review(user_id, live_id):
    conn = get_conn()
    try:
        points = [dict(r) for r in conn.execute("SELECT at_seconds,online,enter_count,leave_count,gmv,order_count FROM live_metric_points WHERE user_id=? AND live_id=? ORDER BY at_seconds", (user_id, live_id)).fetchall()]
        row = conn.execute("SELECT summary,findings,created_at FROM live_analyses WHERE user_id=? AND live_id=? ORDER BY created_at DESC LIMIT 1", (user_id, live_id)).fetchone()
        return {"live_id": live_id, "points": points, "analysis": {**dict(row), "findings": json.loads(row["findings"])} if row else None}
    finally:
        conn.close()
