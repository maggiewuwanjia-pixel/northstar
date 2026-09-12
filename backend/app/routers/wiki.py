"""知识库 WIKI API（分类 + 文件 + 日历 + 热点，按用户隔离）"""
from fastapi import APIRouter, Depends
from ..auth import get_current_user_optional, scope_user_id
from ..database import get_conn, table_rows

router = APIRouter()


@router.get("/api/wiki")
def wiki(user=Depends(get_current_user_optional)):
    uid = scope_user_id(user)
    conn = get_conn()
    try:
        return {
            "trunks": table_rows(conn, "wiki_trunks", uid),
            "files": table_rows(conn, "wiki_files", uid),
            "calendar": table_rows(conn, "calendar", uid),
            "hotspots": table_rows(conn, "hotspots", uid),
        }
    finally:
        conn.close()
