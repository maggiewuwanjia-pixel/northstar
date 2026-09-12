"""对标账号 + 爆款抓取 API（按用户隔离）"""
from fastapi import APIRouter, Depends
from ..auth import get_current_user_optional, scope_user_id
from ..database import get_conn, table_rows

router = APIRouter()


@router.get("/api/bench")
def bench(user=Depends(get_current_user_optional)):
    uid = scope_user_id(user)
    conn = get_conn()
    try:
        return {
            "benchmarks": table_rows(conn, "benchmarks", uid),
            "virals": table_rows(conn, "virals", uid),
        }
    finally:
        conn.close()
