"""视频号后台抓取器（Playwright）—— 扫码登录 + 登录态复用 + CSV 兜底。

工作流：
  1. ensure_login(): 检查本地 storage_state（约 7 天有效），过期则启动有头浏览器扫码；
     扫码成功后持久化登录态，之后抓取直接复用。
  2. scrape_*(): 用登录态打开视频号后台，抽取核心指标写回 SQLite。
  3. import_csv(): CSV 导入兜底（抓取失败 / 数据补录时用）。

说明：
  - 视频号后台 DOM 选择器集中在 SELECTORS 常量里，后台改版只需改这里。
  - 首次使用需先 `playwright install chromium`（下载浏览器内核）。
"""
import csv
import io
import json
import re
import time
from datetime import datetime
from pathlib import Path

from .. import config
from ..database import get_conn

# 视频号后台（创作者中心）入口 —— 需登录
CHANNELS_URL = "https://channels.weixin.qq.com/"
LIVE_HISTORY_URL = "https://channels.weixin.qq.com/platform/statistic/live?mode=history"

# 后台 DOM 选择器（按实际页面调整；这是骨架，供后续按真实后台微调）
SELECTORS = {
    # 后台版本会变化：同时覆盖常见 img / 容器 / canvas 形态，避免退化为整页截图。
    "login_qr": "img.qrcode, .login-qrcode img, img[class*='qrcode'], img[class*='qr'], [class*='qrcode'] img, [class*='qr-code'] img, img[src*='qrcode'], img[src*='qr'], canvas[class*='qr'], [class*='qrcode'] canvas",
    "logged_in": ".creator-info, .account-info, [class*='avatar']",
    "fans": "[class*='fans'], [class*='follower']",
    "play": "[class*='play'], [class*='view']",
    "interact": "[class*='interact'], [class*='engage']",
    "gmv": "[class*='gmv'], [class*='trade']",
}


def _state_valid(user_id: str) -> bool:
    f = config.state_path(user_id)
    if not f.exists():
        return False
    age = time.time() - f.stat().st_mtime
    return age < config.SCRAPER_LOGIN_TTL_DAYS * 86400


def login_status(user_id: str) -> dict:
    return {
        "logged_in": _state_valid(user_id),
        "state_file": str(config.state_path(user_id)),
        "ttl_days": config.SCRAPER_LOGIN_TTL_DAYS,
    }


def _get_playwright():
    try:
        from playwright.sync_api import sync_playwright
        return sync_playwright
    except ImportError:
        raise RuntimeError("未安装 playwright，请先：pip install playwright && playwright install chromium")


def _launch(pw, headless: bool):
    """优先用系统 Chrome（免下载内核）；回退 Playwright chromium。"""
    try:
        return pw.chromium.launch(headless=headless, channel="chrome")
    except Exception:
        try:
            return pw.chromium.launch(headless=headless)
        except Exception:
            raise RuntimeError(
                "未找到可用浏览器内核，请先：playwright install chromium"
            )


def _launch_context(pw, user_id: str):
    browser = _launch(pw, headless=config.SCRAPER_HEADLESS)
    context = None
    if _state_valid(user_id):
        try:
            context = browser.new_context(storage_state=str(config.state_path(user_id)))
        except Exception:
            context = None
    if context is None:
        context = browser.new_context()
    return browser, context


def _bound_channel_name(user_id: str):
    """扫码后存在多视频号时，使用 NorthStar 已绑定的名称选择目标账号。"""
    conn = get_conn()
    try:
        row = conn.execute(
            "SELECT name FROM channels WHERE user_id = ? ORDER BY created_at DESC LIMIT 1", (user_id,)
        ).fetchone()
        return (row["name"] or "").strip() if row else ""
    finally:
        conn.close()


def _capture_qr(page, target: Path):
    """优先截图明确的二维码元素；未命中时按已验证登录页区域裁切。"""
    try:
        qr = page.locator(SELECTORS["login_qr"])
        if qr.count() > 0:
            qr.first.screenshot(path=str(target))
            return
    except Exception:
        pass
    page.screenshot(path=str(target), full_page=False)
    # 视频号登录首页的二维码位于右侧登录卡；整页截图时按视口比例裁出并放大。
    # 该降级路径仅用于页面未暴露稳定二维码选择器的版本。
    try:
        from PIL import Image
        with Image.open(target) as image:
            width, height = image.size
            if width >= 700 and height >= 500:
                crop = image.crop((int(width * .745), int(height * .49), int(width * .92), int(height * .72)))
                crop.resize((512, 512), Image.Resampling.LANCZOS).save(target)
    except Exception as exc:  # Pillow 缺失时保留可用的整页截图
        print(f"[qr-login] crop fallback skipped: {type(exc).__name__}")


def ensure_login(user_id: str, timeout_seconds: int = 180):
    """默认 headless Chromium：二维码截图直接传给前端，手机扫屏幕即可。

    返回 (ok: bool, message: str, qrcode_path: str | None)。
    """
    if _state_valid(user_id):
        return True, "登录态有效，可直接抓取", None

    sync_playwright = _get_playwright()
    state_file = config.state_path(user_id)
    qr_dir = state_file.parent / "qrcode"
    qr_dir.mkdir(parents=True, exist_ok=True)
    qr_path = qr_dir / f"{user_id}.png"
    print(f"[qr-login] start user={user_id} state={state_file} qr={qr_path}")
    with sync_playwright() as pw:
        browser = _launch(pw, headless=True)
        try:
            context = browser.new_context(
                viewport={"width": 1024, "height": 768},
                user_agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
                           "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
            )
            page = context.new_page()
            page.goto(CHANNELS_URL, wait_until="domcontentloaded")
            print(f"[qr-login] page.goto ok, url={page.url}")
            page.wait_for_timeout(3000)
            _capture_qr(page, qr_path)
            print(f"[qr-login] saved qr -> {qr_path}, exists={qr_path.exists()}")
            deadline = time.time() + timeout_seconds
            logged_in = False
            target_name = _bound_channel_name(user_id)
            target_selected = False
            while time.time() < deadline:
                cur_url = page.url
                # 扫码后的账号选择页：自动选择 NorthStar 已绑定的目标视频号。
                # 不能仅用“跳离 /login”判定成功，因为选择页同样在 channels.weixin.qq.com 域名下。
                if target_name and not target_selected:
                    try:
                        target = page.get_by_text(target_name, exact=False)
                        if target.count() == 1:
                            target.click()
                            target_selected = True
                            page.wait_for_timeout(1200)
                            continue
                    except Exception:
                        pass
                # 只有实际进入创作者后台才视为成功。
                if "/platform" in cur_url and (target_selected or not target_name):
                    logged_in = True
                    break
                # 未扫码前保持二维码；扫码后若尚未找到绑定账号，保留选择页供诊断，避免误写头像。
                if not target_selected:
                    _capture_qr(page, qr_path)
                page.wait_for_timeout(2000)
            if logged_in:
                context.storage_state(path=str(state_file))
                print(f"[qr-login] 登录成功 saved state -> {state_file}")
                return True, "扫码成功，登录态已保存（约 7 天有效）", None
            if target_name and not target_selected:
                return False, f"未在视频号登录页找到已绑定账号「{target_name}」，请确认名称后重试", str(qr_path) if qr_path.exists() else None
            return False, "等待扫码或进入后台超时，请重试", str(qr_path) if qr_path.exists() else None
        finally:
            try:
                browser.close()
            except Exception:
                pass


def qrcode_path_for(user_id: str):
    """返回该用户当前最新二维码截图路径（不存在时返回 None）。"""
    p = config.state_path(user_id).parent / "qrcode" / f"{user_id}.png"
    return p if p.exists() else None


def scrape_overview(user_id: str = None):
    """抓取后台核心指标，写回 kpis / northstar 等表（骨架实现）。

    user_id：当前登录用户，抓到的数据只写进该用户的空间。
    返回抓到的字段 dict；DOM 选择器按 SELECTORS 调整。
    """
    if not user_id or not _state_valid(user_id):
        return {"ok": False, "error": "未扫码登录，请先扫码"}

    sync_playwright = _get_playwright()
    with sync_playwright() as pw:
        browser, context = _launch_context(pw, user_id)
        page = context.new_page()
        page.goto(CHANNELS_URL, wait_until="domcontentloaded")
        time.sleep(3)

        def _text(sel):
            try:
                return page.locator(sel).first.inner_text().strip()
            except Exception:
                return ""

        result = {
            "fans": _text(SELECTORS["fans"]),
            "play": _text(SELECTORS["play"]),
            "interact": _text(SELECTORS["interact"]),
            "gmv": _text(SELECTORS["gmv"]),
            "ts": datetime.utcnow().isoformat(),
        }
        browser.close()

        if result["fans"]:
            _write_kpi(result, user_id)
    return {"ok": True, "data": result, "user_id": user_id}


def scrape_live_history(user_id: str, progress=None):
    """读取已授权视频号后台的「直播数据 → 单场数据」表格。

    不能直接打开 ``mode=history``：视频号会把首次直达重定向到首页。这里从创作者
    后台的菜单进入，再切换到单场数据；只读取账号已授权可见的字段。
    """
    if not _state_valid(user_id):
        return {"ok": False, "error": "未扫码登录，请先在同步助手中扫码"}
    sync_playwright = _get_playwright()
    with sync_playwright() as pw:
        browser, context = _launch_context(pw, user_id)
        try:
            page = context.new_page()
            page.goto(CHANNELS_URL, wait_until="domcontentloaded")
            page.wait_for_timeout(1800)
            try:
                page.get_by_text("直播数据", exact=True).nth(0).evaluate("(el) => el.click()")
                page.wait_for_timeout(1800)
                page.get_by_text("单场数据", exact=True).nth(0).evaluate("(el) => el.click()")
                # 后台表格由内嵌微应用异步渲染，云端偶尔比本地慢数秒。
                page.locator("tr.ant-table-row").first.wait_for(state="attached", timeout=10000)
                page.wait_for_timeout(1500)
            except Exception as exc:
                return {"ok": False, "error": f"无法进入视频号单场直播数据页：{exc}"}

            def read_current_page():
                raw_rows = page.locator("tr.ant-table-row").evaluate_all("""
                  rows => rows.map(row => ({
                    live_id: row.dataset.rowKey || '',
                    cells: Array.from(row.querySelectorAll('td')).map(cell => cell.innerText.trim()),
                    title: (row.querySelector('.description .text-wrap') || {}).innerText || '',
                    time: (row.querySelector('.time') || {}).innerText || '',
                    // 后台版本会变更 cover 的 class；按语义 class 优先，再回退到行内第一张图。
                    cover_url: (() => {
                      const image = row.querySelector('img.cover, img[class*="cover"], [class*="cover"] img, .description img, img');
                      const src = image ? (image.currentSrc || image.src || image.dataset.src || '') : '';
                      // qlogo 是账号头像，不是直播回放画面；宁可留空，也不能作为回放封面展示。
                      return src.includes('wx.qlogo.cn') ? '' : src;
                    })()
                  }))
                """)
                merged = {}
                for raw in raw_rows:
                    live_id = raw.get("live_id")
                    if not live_id:
                        continue
                    current = merged.setdefault(live_id, {"live_id": live_id, "cells": [], "title": "", "time": "", "cover_url": ""})
                    if len(raw.get("cells", [])) >= 7:
                        current["cells"] = raw["cells"]
                    if raw.get("title"):
                        current["title"] = raw["title"]
                    if raw.get("time"):
                        current["time"] = raw["time"]
                    if raw.get("cover_url"):
                        current["cover_url"] = raw["cover_url"]
                out = []
                for raw in merged.values():
                    cells = raw["cells"]
                    time_text = (raw.get("time") or "").replace("\n", " ").strip()
                    match = re.search(r"(\d{4})年(\d{1,2})月(\d{1,2})日\s*(\d{1,2}:\d{2})?", time_text)
                    if len(cells) < 7 or not match:
                        continue
                    day = f"{match.group(1)}-{int(match.group(2)):02d}-{int(match.group(3)):02d}"
                    out.append({"live_id": raw["live_id"], "date": f"{day} {match.group(4) or '00:00'}",
                        "title": (raw.get("title") or "未命名直播").strip(), "dur": cells[1],
                        "views": cells[2], "peak": cells[3], "hot": cells[4], "gmv": cells[5],
                        "cover_url": raw["cover_url"],
                        "detail_url": f"https://channels.weixin.qq.com/platform/statistic/dashboardV4?objetctId={raw['live_id']}&entrance_id=3"})
                return out

            rows, seen, page_first_ids = [], set(), set()
            # 历史页每页 10 条；循环点击「下一页」直到后台禁用它，避免只同步首屏。
            for page_no in range(1, 101):
                current_rows = read_current_page()
                if not current_rows or current_rows[0]["live_id"] in page_first_ids:
                    break
                page_first_ids.add(current_rows[0]["live_id"])
                for row in current_rows:
                    if row["live_id"] not in seen:
                        seen.add(row["live_id"])
                        rows.append(row)
                        if progress:
                            progress(len(rows), 0, f"正在读取直播历史（第 {page_no} 页）")
                next_button = page.get_by_text("下一页", exact=True).nth(0)
                try:
                    next_button.evaluate("(el) => el.click()")
                    # 视频号分页没有稳定的 loading 状态；给微应用一次完整的渲染周期。
                    page.wait_for_timeout(2200)
                except Exception:
                    break
            return {"ok": True, "live_count": len(rows), "lives": rows, "source_url": page.url}
        finally:
            browser.close()


def capture_live_replay_evidence(user_id: str, progress=None):
    """按视频号真实路由逐场采集趋势图和三类回放证据。

    路由不能省略：总览 → 历史 → 单场详情 → dashboard → review。视频号会对
    直接打开 dashboard/review 的请求做重定向；每个截图均来自该场已授权后台，
    不下载、也绝不使用帐号头像或其它场次的封面替代。
    """
    if not _state_valid(user_id):
        return {"ok": False, "error": "未扫码登录，请先扫码"}
    conn = get_conn()
    try:
        sessions = [dict(r) for r in conn.execute(
            "SELECT date,visual FROM live_sessions WHERE user_id=? ORDER BY date DESC", (user_id,)
        ).fetchall()]
    finally:
        conn.close()
    # 以直播 ID 为准，不能相信旧的 detail_url：该 URL 会被视频号后台重定向到首页。
    session_by_live_id = {}
    for row in sessions:
        try:
            live_id = json.loads(row.get("visual") or "{}").get("live_id")
            if live_id:
                session_by_live_id[str(live_id)] = row
        except json.JSONDecodeError:
            continue
    replay_dir = config.SCRAPER_STATE_DIR.parent / "replays" / user_id
    replay_dir.mkdir(parents=True, exist_ok=True)
    total, captured, skipped, processed = len(session_by_live_id), 0, 0, 0
    sync_playwright = _get_playwright()
    with sync_playwright() as pw:
        browser, context = _launch_context(pw, user_id)
        try:
            page = context.new_page()
            page.set_viewport_size({"width": 1440, "height": 1080})
            page.set_default_timeout(15000)

            def visit(path):
                # 这些微应用会持续发长轮询，等待 domcontentloaded 会把单场卡满 30 秒。
                # commit 已足够建立路由上下文，随后给页面短暂渲染时间即可。
                try:
                    page.goto(path, wait_until="commit", timeout=10000)
                except Exception:
                    pass
                page.wait_for_timeout(650)

            def screenshot_largest(selector, destination, minimum_width=260, minimum_height=120):
                candidate = None
                for index in range(page.locator(selector).count()):
                    item = page.locator(selector).nth(index)
                    source = item.get_attribute("src") or ""
                    box = item.bounding_box()
                    if "wx.qlogo.cn" in source or not box:
                        continue
                    if box["width"] >= minimum_width and box["height"] >= minimum_height:
                        if candidate is None or box["width"] * box["height"] > candidate[1]:
                            candidate = (item, box["width"] * box["height"])
                if candidate is None:
                    return False
                candidate[0].screenshot(path=str(destination))
                return True

            # 一次性建立总览/历史上下文；逐场不重复进入这两页，避免被后台限流。
            visit("https://channels.weixin.qq.com/platform/statistic/live?mode=total")
            visit("https://channels.weixin.qq.com/platform/statistic/live?mode=history")

            for live_id, record in session_by_live_id.items():
                processed += 1
                try:
                    existing_visual = json.loads(record.get("visual") or "{}")
                    # 已有三张可访问证据的场次不再重复打开后台，优先把时间留给缺失场次。
                    if len(existing_visual.get("replay_frames") or []) >= 3:
                        if progress:
                            progress(processed, total, f"回放证据：已保留 {captured} 场，正在重试缺失场次")
                        continue
                    # 保持视频号的详情 → dashboard → review 路由顺序，不能直达 review。
                    visit(f"https://channels.weixin.qq.com/platform/statistic/live?mode=detail&objetctId={live_id}")
                    visit(f"https://channels.weixin.qq.com/platform/statistic/dashboardV4?objetctId={live_id}&entrance_id=3")

                    live_dir = replay_dir / live_id
                    live_dir.mkdir(parents=True, exist_ok=True)
                    trend_ok = screenshot_largest(
                        "canvas, svg, [class*='chart'] img, [class*='chart'] canvas, [class*='chart'] svg",
                        live_dir / "trend.png", 500, 160,
                    )

                    # review 页提供该场独立回放。先让播放器完成首帧渲染，再按真实播放进度取帧。
                    visit(f"https://channels.weixin.qq.com/platform/statistic/dashboardV4/review?objetctId={live_id}")
                    review_text = page.locator("body").inner_text(timeout=5000)
                    # 后台授权失效时会跳回扫码页；二维码、登录页和帐号头像都不是回放证据。
                    if ("扫码" in review_text and "登录" in review_text) or "请使用微信扫码" in review_text:
                        skipped += 1
                        continue
                    player = page.locator("video, [class*='player'] video, [class*='replay'] video").first
                    if player.count() == 0:
                        skipped += 1
                        continue
                    player.wait_for(state="attached", timeout=12000)
                    try:
                        player.evaluate("el => el.play().catch(() => {})")
                        page.wait_for_timeout(1000)
                    except Exception:
                        pass
                    duration = player.evaluate("el => Number.isFinite(el.duration) ? el.duration : 0") or 0
                    frames = []
                    # 没有公开峰值时间点时，不能伪称已精确识别。先按回放时长取 25/50/75% 的
                    # 三张真实帧，并保留标签供后续曲线点位解析覆盖。
                    for label, ratio in (("online_peak", .25), ("gmv_peak", .50), ("audience_drop", .75)):
                        if duration > 1:
                            player.evaluate("(el, t) => { el.currentTime = Math.min(t, Math.max(0, el.duration - .2)); }", duration * ratio)
                            page.wait_for_timeout(700)
                        target = live_dir / f"{label}.png"
                        if screenshot_largest("video, [class*='player'] canvas, [class*='replay'] canvas", target, 180, 100):
                            frames.append({"kind": label, "url": f"/api/replays/{user_id}/{live_id}/{label}.png"})
                    if not frames:
                        skipped += 1
                        continue
                    visual = existing_visual
                    visual["replay_image"] = frames[0]["url"]
                    visual["replay_frames"] = frames
                    visual["trend_image"] = f"/api/replays/{user_id}/{live_id}/trend.png" if trend_ok else None
                    visual["replay_captured_at"] = datetime.utcnow().isoformat()
                    visual["replay_capture_status"] = "已采集真实回放证据"
                    conn = get_conn()
                    try:
                        conn.execute("UPDATE live_sessions SET visual=? WHERE user_id=? AND date=?",
                                     (json.dumps(visual, ensure_ascii=False), user_id, record["date"]))
                        conn.commit()
                    finally:
                        conn.close()
                    captured += 1
                except Exception as exc:
                    print(f"[live-evidence] {live_id}: {type(exc).__name__}: {exc}")
                    skipped += 1
                finally:
                    if progress:
                        progress(processed, total, f"回放证据：已采集 {captured} 场，无法访问回放 {skipped} 场")
            return {"ok": True, "total": total, "captured": captured, "skipped": skipped}
        finally:
            browser.close()


def _write_kpi(data: dict, user_id: str = None):
    """把抓到的指标写进 kpis（覆盖式更新，兜底用）。

    user_id 不为空时，只更新该用户的数据行，避免跨用户覆盖。
    """
    mapping = [
        ("关注者", data.get("fans", "")),
        ("昨日播放", data.get("play", "")),
        ("带货 GMV", data.get("gmv", "")),
    ]
    conn = get_conn()
    try:
        for label, value in mapping:
            if not value:
                continue
            if user_id:
                exists = conn.execute(
                    "SELECT id FROM kpis WHERE label = ? AND user_id = ?", (label, user_id)
                ).fetchone()
                if exists:
                    conn.execute(
                        "UPDATE kpis SET value = ? WHERE label = ? AND user_id = ?",
                        (value, label, user_id),
                    )
                else:
                    conn.execute(
                        "INSERT INTO kpis (label, value, delta, up, warm, user_id) "
                        "VALUES (?, ?, '', 0, 0, ?)",
                        (label, value, user_id),
                    )
            else:
                exists = conn.execute("SELECT id FROM kpis WHERE label = ?", (label,)).fetchone()
                if exists:
                    conn.execute("UPDATE kpis SET value = ? WHERE label = ?", (value, label))
                else:
                    conn.execute(
                        "INSERT INTO kpis (label, value, delta, up, warm) VALUES (?, ?, '', 0, 0)",
                        (label, value),
                    )
        conn.commit()
    finally:
        conn.close()


# ---------- 数据导入（CSV 文件 / 粘贴表格文本） ----------
# 支持两种形状，自动识别：
#   1) 指标表：label,value[,delta,up,warm]           → 写入 kpis
#   2) 视频表：title,dur,likes,tag                    → 写入 videos
# 分隔符自动识别：逗号 / 制表符（从 Excel、视频号后台直接粘贴）
def _parse_table(text: str):
    """把 CSV / TSV 文本解析成 dict 列表；自动判断分隔符。"""
    lines = [ln for ln in text.replace("\r\n", "\n").replace("\r", "\n").split("\n") if ln.strip()]
    if not lines:
        return []
    header = lines[0]
    delim = "\t" if header.count("\t") >= header.count(",") and "\t" in header else ","
    if delim not in header:
        return []
    return list(csv.DictReader(lines, delimiter=delim))


def import_table_text(text: str, user_id: str = None):
    """从表格文本导入（粘贴 / 文件内容都走这里）。"""
    rows = _parse_table(text)
    if not rows:
        return {"ok": False, "error": "内容为空或表头缺失（需要表头行，如 label,value 或 title,likes）"}
    return _write_rows(rows, user_id)


def import_csv(path: str, user_id: str = None):
    p = Path(path)
    if not p.exists():
        return {"ok": False, "error": f"文件不存在：{path}"}
    with p.open("r", encoding="utf-8-sig", newline="") as f:
        text = f.read()
    return import_table_text(text, user_id)


def import_report_bytes(raw: bytes, filename: str, user_id: str):
    """导入视频号后台导出的 CSV / XLSX。

    后台导出列名会随页面略有不同，因此以下以中文语义列名识别，而不是要求用户
    手工改成系统字段。原始收入明细同时保存，确保后续能重新汇总与审计。
    """
    suffix = Path(filename or "").suffix.lower()
    if suffix in {".xlsx", ".xlsm"}:
        try:
            from openpyxl import load_workbook
            book = load_workbook(io.BytesIO(raw), read_only=True, data_only=True)
            sheet = book.active
            values = list(sheet.iter_rows(values_only=True))
            if not values:
                return {"ok": False, "error": "工作簿为空"}
            headers = [str(v or "").strip() for v in values[0]]
            rows = [dict(zip(headers, ["" if v is None else str(v) for v in row])) for row in values[1:]
                    if any(v is not None and str(v).strip() for v in row)]
        except Exception as exc:  # noqa: BLE001
            return {"ok": False, "error": f"无法读取 XLSX：{exc}"}
    else:
        try:
            text = raw.decode("utf-8-sig")
        except UnicodeDecodeError:
            text = raw.decode("gbk", errors="replace")
        rows = _parse_table(text)
    if not rows:
        return {"ok": False, "error": "文件为空或缺少表头"}
    return _write_report_rows(rows, user_id, filename or "upload")


def _norm_header(value):
    return re.sub(r"[\s\n\r]+", "", str(value or "")).replace("（", "(").replace("）", ")")


def _get(row, *aliases):
    normalized = {_norm_header(k): v for k, v in row.items()}
    for alias in aliases:
        value = normalized.get(_norm_header(alias))
        if value not in (None, ""):
            return str(value).strip()
    return ""


def _money(value):
    try:
        return float(re.sub(r"[^0-9.\-]", "", str(value or "")) or 0)
    except ValueError:
        return 0.0


def _write_report_rows(rows, user_id: str, filename: str):
    headers = {_norm_header(h) for h in rows[0]}
    live_markers = {_norm_header(v) for v in ("直播信息", "直播名称", "开播时间", "最高在线", "直播时长")}
    revenue_markers = {_norm_header(v) for v in ("成交金额", "成交总金额", "结算金额", "支付金额", "收入金额")}
    is_live = bool(headers & live_markers)
    has_revenue = bool(headers & revenue_markers)
    if not is_live and not has_revenue:
        return _write_rows(rows, user_id)

    conn = get_conn()
    try:
        live_count = income_count = 0
        total_income = 0.0
        for line_no, row in enumerate(rows, start=2):
            amount = _money(_get(row, "成交金额", "成交总金额", "结算金额", "支付金额", "收入金额"))
            date = _get(row, "开播时间", "直播时间", "日期", "成交时间", "下单时间")
            if is_live:
                title = _get(row, "直播信息", "直播名称", "标题") or "未命名直播"
                if not date:
                    continue
                dur = _get(row, "直播时长", "时长")
                views = _get(row, "观看人数", "累计观看人数", "观看人次", "看播人数")
                peak = _get(row, "最高在线", "最高在线人数")
                hot = _get(row, "总热度", "热度")
                existing = conn.execute("SELECT visual FROM live_sessions WHERE user_id=? AND date=?", (user_id, date)).fetchone()
                visual = json.loads(existing["visual"] or "{}") if existing else {}
                visual.setdefault("evidence_mode", "demo")
                visual.setdefault("energy", "已由报表导入；画面为演示占位，等待人工证据")
                if existing:
                    conn.execute("UPDATE live_sessions SET title=?,dur=?,views=?,peak=?,hot=?,gmv=?,status=?,visual=? WHERE user_id=? AND date=?",
                                 (title, dur, views, peak, hot, f"¥{amount:,.2f}", "报表已导入", json.dumps(visual, ensure_ascii=False), user_id, date))
                else:
                    conn.execute("INSERT INTO live_sessions (date,title,dur,views,peak,hot,gmv,status,visual,user_id) VALUES (?,?,?,?,?,?,?,?,?,?)",
                                 (date, title, dur, views, peak, hot, f"¥{amount:,.2f}", "报表已导入", json.dumps(visual, ensure_ascii=False), user_id))
                live_count += 1
            if has_revenue and amount:
                conn.execute("INSERT INTO income_records (id,user_id,occurred_at,amount,source_file,source_row,payload,imported_at) VALUES (?,?,?,?,?,?,?,?) ON CONFLICT(user_id,source_file,source_row) DO UPDATE SET occurred_at=excluded.occurred_at,amount=excluded.amount,payload=excluded.payload,imported_at=excluded.imported_at",
                             (str(__import__('uuid').uuid4()), user_id, date, amount, filename, line_no,
                              json.dumps(row, ensure_ascii=False), datetime.utcnow().isoformat()))
                income_count += 1
                total_income += amount
        if has_revenue:
            total = conn.execute("SELECT COALESCE(SUM(amount),0) AS total FROM income_records WHERE user_id=?", (user_id,)).fetchone()["total"]
            label = "累计导入收入"
            existing = conn.execute("SELECT id FROM kpis WHERE user_id=? AND label=?", (user_id, label)).fetchone()
            if existing:
                conn.execute("UPDATE kpis SET value=?,delta=?,up=1,warm=0 WHERE user_id=? AND label=?", (f"¥{total:,.2f}", f"本次 +¥{total_income:,.2f}", user_id, label))
            else:
                conn.execute("INSERT INTO kpis (label,value,delta,up,warm,user_id) VALUES (?,?,?,?,?,?)", (label, f"¥{total:,.2f}", f"本次 +¥{total_income:,.2f}", 1, 0, user_id))
        conn.commit()
        return {"ok": True, "type": "live_report" if is_live else "income_report", "rows": len(rows),
                "live_sessions": live_count, "income_records": income_count, "income_total": total_income}
    finally:
        conn.close()


def _write_rows(rows, user_id: str = None):
    cols = set(rows[0].keys())
    conn = get_conn()
    try:
        if {"label", "value"} <= cols:
            n = 0
            for r in rows:
                label = (r.get("label") or "").strip()
                value = (r.get("value") or "").strip()
                if not label or not value:
                    continue
                delta = r.get("delta", "").strip()
                up = int(r.get("up", "0") or 0)
                warm = int(r.get("warm", "0") or 0)
                if user_id:
                    exists = conn.execute(
                        "SELECT id FROM kpis WHERE label = ? AND user_id = ?", (label, user_id)
                    ).fetchone()
                else:
                    exists = conn.execute(
                        "SELECT id FROM kpis WHERE label = ?", (label,)
                    ).fetchone()
                if exists:
                    sql = "UPDATE kpis SET value=?, delta=?, up=?, warm=? WHERE label=?"
                    args = [value, delta, up, warm, label]
                    if user_id:
                        sql += " AND user_id=?"
                        args.append(user_id)
                    conn.execute(sql, args)
                else:
                    conn.execute(
                        "INSERT INTO kpis (label, value, delta, up, warm, user_id) "
                        "VALUES (?,?,?,?,?,?)",
                        (label, value, delta, up, warm, user_id),
                    )
                n += 1
            conn.commit()
            return {"ok": True, "type": "kpis", "rows": n, "user_id": user_id}

        if {"title", "likes"} <= cols:
            n = 0
            for r in rows:
                title = (r.get("title") or "").strip()
                if not title:
                    continue
                conn.execute(
                    "INSERT INTO videos (title, dur, likes, tag, verified, user_id) VALUES (?,?,?,?,?,?)",
                    (title, r.get("dur", "").strip(), r.get("likes", "").strip(),
                     r.get("tag", "").strip(), 1, user_id),
                )
                n += 1
            conn.commit()
            return {"ok": True, "type": "videos", "rows": n, "user_id": user_id}

        return {"ok": False, "error": f"无法识别的 CSV 表头：{sorted(cols)}"}
    finally:
        conn.close()


def set_sync_state(key: str, value: str):
    conn = get_conn()
    try:
        conn.execute(
            "INSERT INTO sync_state (key, value, updated_at) VALUES (?, ?, ?) "
            "ON CONFLICT(key) DO UPDATE SET value=excluded.value, updated_at=excluded.updated_at",
            (key, value, datetime.utcnow().isoformat()),
        )
        conn.commit()
    finally:
        conn.close()


def get_sync_state(key: str):
    conn = get_conn()
    try:
        row = conn.execute("SELECT value FROM sync_state WHERE key = ?", (key,)).fetchone()
        return row["value"] if row else None
    finally:
        conn.close()
