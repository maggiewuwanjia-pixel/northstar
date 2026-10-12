"""用户绑定的视频号账号 + 素材库写入 API（按用户隔离）"""
import uuid
from datetime import datetime

from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel, Field
from typing import Literal

from ..auth import get_current_user, scope_user_id
from ..database import get_conn, table_rows

router = APIRouter(prefix="/api/channels", tags=["channels"])


class ChannelIn(BaseModel):
    name: str = Field(min_length=1, max_length=100)
    finder_uin: str = ""
    platform: Literal["wechat", "xiaohongshu"] = "wechat"
    profile: str = Field(default="", max_length=2000)


def migrate_platforms():
    with get_conn() as conn:
        columns = {r['name'] for r in conn.execute('PRAGMA table_info(channels)')}
        if 'platform' not in columns:
            conn.execute("ALTER TABLE channels ADD COLUMN platform TEXT NOT NULL DEFAULT 'wechat'")
        if 'profile' not in columns:
            conn.execute("ALTER TABLE channels ADD COLUMN profile TEXT NOT NULL DEFAULT ''")


@router.get("")
def list_channels(user=Depends(get_current_user)):
    """当前用户绑定的视频号账号列表。"""
    migrate_platforms()
    uid = scope_user_id(user)
    conn = get_conn()
    try:
        return {"channels": table_rows(conn, "channels", uid)}
    finally:
        conn.close()


@router.post("")
def create_channel(body: ChannelIn, user=Depends(get_current_user)):
    """绑定一个视频号账号到当前用户。"""
    migrate_platforms()
    uid = scope_user_id(user)
    name = body.name.strip()
    if not name:
        raise HTTPException(status_code=400, detail="账号名称不能为空")
    cid = uuid.uuid4().hex
    now = datetime.utcnow().isoformat()
    conn = get_conn()
    try:
        conn.execute(
            "INSERT INTO channels (id,user_id,name,finder_uin,login_state,last_login_at,created_at,platform,profile) VALUES (?,?,?,?,?,?,?,?,?)",
            (cid, uid, name, body.finder_uin.strip(), '未登录', None, now, body.platform, body.profile.strip()),
        )
        conn.commit()
        row = conn.execute("SELECT * FROM channels WHERE id=?", (cid,)).fetchone()
        return {"ok": True, "channel": dict(row)}

    finally:
        conn.close()


@router.delete("/{channel_id}")
def delete_channel(channel_id: str, user=Depends(get_current_user)):
    """解绑账号（只能删自己的）。"""
    migrate_platforms()
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
