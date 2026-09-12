"""配置层 —— 统一从环境变量 / .env 读取所有外部凭证。

所有第三方接入（飞书 / 混元 / 抓取器 / 登录密钥）都走这里，
缺省时自动降级到种子数据，保证「零配置也能跑」。

在 backend/ 目录放一个 .env（参考 .env.example）即可激活对应能力：
  FEISHU_APP_ID / FEISHU_APP_SECRET
  HUNYUAN_API_KEY
  JWT_SECRET（登录签名密钥，未设则用随机值，重启后会话失效）
"""
import os
from pathlib import Path

try:
    from dotenv import load_dotenv
    _ENV_FILE = Path(__file__).resolve().parent.parent / ".env"
    if _ENV_FILE.exists():
        load_dotenv(_ENV_FILE)
except ImportError:  # 未装 python-dotenv 时退化为纯环境变量
    pass


def _get(key: str, default: str = "") -> str:
    return os.environ.get(key, default).strip()


# ---------- 飞书开放平台 ----------
FEISHU_APP_ID = _get("FEISHU_APP_ID")
FEISHU_APP_SECRET = _get("FEISHU_APP_SECRET")
# 三个核心飞书文档（脚本库 / 直播总结 / 直播脚本）
FEISHU_SCRIPT_DOC = _get(
    "FEISHU_SCRIPT_DOC", "https://caocp410jp.feishu.cn/docx/WoKwdMyBYoIQpqxQH32cUVqmnic"
)
FEISHU_LIVE_SUMMARY_DOC = _get(
    "FEISHU_LIVE_SUMMARY_DOC", "https://caocp410jp.feishu.cn/docx/E6Vsd31qDoO9VXxAyQWcbFH8n4b"
)
FEISHU_LIVE_SCRIPT_DOC = _get(
    "FEISHU_LIVE_SCRIPT_DOC", "https://caocp410jp.feishu.cn/docx/OqMDd8DI0ouQdwxv5WlcWzqOnNg"
)

# ---------- 混元大模型 ----------
HUNYUAN_API_KEY = _get("HUNYUAN_API_KEY")
HUNYUAN_BASE_URL = _get("HUNYUAN_BASE_URL", "https://api.hunyuan.cloud.tencent.com/v1")
HUNYUAN_MODEL = _get("HUNYUAN_MODEL", "hunyuan-turbos-latest")

# ---------- 登录 / 会话 ----------
JWT_SECRET = _get("JWT_SECRET", "")
SESSION_TTL_DAYS = int(_get("SESSION_TTL_DAYS", "7") or "7")

# ---------- 视频号抓取器 ----------
# 登录态（Playwright storage_state）保存目录
# 每个用户一个 storage 文件：<dir>/<user_id>.json
SCRAPER_STATE_DIR = Path(_get("SCRAPER_STATE_DIR") or (Path(__file__).resolve().parent.parent / "data" / "browser"))
SCRAPER_STATE_DIR.mkdir(parents=True, exist_ok=True)
# 服务器没有图形桌面，采集任务默认无头运行；扫码二维码仍通过接口截图返回前端。
SCRAPER_HEADLESS = _get("SCRAPER_HEADLESS", "1") == "1"
SCRAPER_LOGIN_TTL_DAYS = int(_get("SCRAPER_LOGIN_TTL_DAYS", "7") or "7")


def state_path(user_id: str):
    """每个用户一份扫码登录态。"""
    return SCRAPER_STATE_DIR / f"{user_id}.json"


def feishu_ready() -> bool:
    return bool(FEISHU_APP_ID and FEISHU_APP_SECRET)


def hunyuan_ready() -> bool:
    return bool(HUNYUAN_API_KEY)
