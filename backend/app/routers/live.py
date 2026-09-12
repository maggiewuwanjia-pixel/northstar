"""直播复盘 + 直播脚本 API（按用户隔离）"""
from fastapi import APIRouter, Depends
from ..auth import get_current_user_optional, scope_user_id
from ..database import get_conn, table_rows, reconcile_feishu_live_notes

router = APIRouter()


@router.get("/api/live")
def live(user=Depends(get_current_user_optional)):
    uid = scope_user_id(user)
    conn = get_conn()
    try:
        # 历史视频号直播已同步但人工飞书复盘尚未回填时，按日期自动补齐。
        reconcile_feishu_live_notes(conn, uid)
        return {
            "sessions": table_rows(conn, "live_sessions", uid),
            "notes": table_rows(conn, "live_notes", uid),
            "scripts": table_rows(conn, "live_scripts", uid),
        }
    finally:
        conn.close()
