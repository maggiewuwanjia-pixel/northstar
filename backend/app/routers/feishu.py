"""飞书文档接入 API"""
from fastapi import APIRouter

from ..services import feishu

router = APIRouter(prefix="/api/feishu", tags=["feishu"])


@router.get("/status")
def status():
    return {
        "ready": feishu.feishu_ready(),
        "script_doc": feishu.config.FEISHU_SCRIPT_DOC,
        "live_summary_doc": feishu.config.FEISHU_LIVE_SUMMARY_DOC,
        "live_script_doc": feishu.config.FEISHU_LIVE_SCRIPT_DOC,
    }


@router.get("/docs")
def docs():
    """拉取三个核心文档文本。未配置飞书时返回 ready=False。"""
    if not feishu.feishu_ready():
        return {"ready": False, "message": "未配置飞书 app_id/app_secret，请在 .env 填入后重启"}
    try:
        data = feishu.fetch_all_docs()
        return {"ready": True, "docs": data}
    except Exception as e:  # noqa: BLE001
        return {"ready": True, "error": str(e)}
