"""用户绑定的视频号账号 + 素材库写入 API（按用户隔离）"""
import uuid
from datetime import datetime

from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel

from ..auth import get_current_user, scope_user_id
from ..database import get_conn, table_rows

router = APIRouter(prefix="/api/channels", tags=["channels"])


class ChannelIn(BaseModel):
    name: str
    finder_uin: str = ""
    login_state: str = "未登录"


@router.get("")
def list_channels(user=Depends(get_current_user)):
    """当前用户绑定的视频号账号列表。"""
    uid = scope_user_id(user)
    conn = get_conn()
    try:
        return {"channels": table_rows(conn, "channels", uid)}
    finally:
        conn.close()


@router.post("")
def create_channel(body: ChannelIn, user=Depends(get_current_user)):
    """绑定一个视频号账号到当前用户。"""
    uid = scope_user_id(user)
    name = body.name.strip()
    if not name:
        raise HTTPException(status_code=400, detail="账号名称不能为空")
    cid = uuid.uuid4().hex
    now = datetime.utcnow().isoformat()
    conn = get_conn()
    try:
        conn.execute(
            "INSERT INTO channels (id, user_id, name, finder_uin, login_state, "
            "last_login_at, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)",
            (cid, uid, name, body.finder_uin, body.login_state, None, now),
        )
        conn.commit()
        return {"ok": True, "channel": {"id": cid, "user_id": uid, "name": name,
                                        "finder_uin": body.finder_uin,
                                        "login_state": body.login_state,
                                        "created_at": now}}
    finally:
        conn.close()


@router.delete("/{channel_id}")
def delete_channel(channel_id: str, user=Depends(get_current_user)):
    """解绑账号（只能删自己的）。"""
    uid = scope_user_id(user)
    conn = get_conn()
    try:
        cur = conn.execute(
            "DELETE FROM channels WHERE id = ? AND user_id = ?", (channel_id, uid)
        )
        conn.commit()
        if cur.rowcount == 0:
            raise HTTPException(status_code=404, detail="账号不存在或无权操作")
        return {"ok": True}
    finally:
        conn.close()
