"""短视频脚本工作台 + 素材库 API（按用户隔离）"""
import uuid

from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel

from ..auth import get_current_user, get_current_user_optional, scope_user_id
from ..database import get_conn, table_rows

router = APIRouter()


@router.get("/api/scripts")
def scripts(user=Depends(get_current_user_optional)):
    uid = scope_user_id(user)
    conn = get_conn()
    try:
        return {
            "scripts": table_rows(conn, "scripts", uid),
            "library": table_rows(conn, "library", uid),
        }
    finally:
        conn.close()


class ScriptIn(BaseModel):
    t: str
    src: str = ""
    dur: str = "00:30"
    tag: str = ""


class LibraryIn(BaseModel):
    type: str = "link"
    name: str
    meta: str = ""
    url: str = ""


@router.post("/api/scripts")
def add_script(body: ScriptIn, user=Depends(get_current_user)):
    """新增脚本（写入当前用户空间）。"""
    uid = scope_user_id(user)
    title = body.t.strip()
    if not title:
        raise HTTPException(status_code=400, detail="脚本标题不能为空")
    sid = "s" + uuid.uuid4().hex[:10]
    conn = get_conn()
    try:
        conn.execute(
            "INSERT INTO scripts (id, t, src, dur, tag, user_id) VALUES (?,?,?,?,?,?)",
            (sid, title, body.src, body.dur, body.tag, uid),
        )
        conn.commit()
        return {"ok": True, "script": {"id": sid, "t": title, "src": body.src,
                                       "dur": body.dur, "tag": body.tag}}
    finally:
        conn.close()


@router.post("/api/library")
def add_library(body: LibraryIn, user=Depends(get_current_user)):
    """新增素材（写入当前用户空间）。"""
    uid = scope_user_id(user)
    name = body.name.strip()
    if not name:
        raise HTTPException(status_code=400, detail="素材名称不能为空")
    lid = "l" + uuid.uuid4().hex[:10]
    conn = get_conn()
    try:
        conn.execute(
            "INSERT INTO library (id, type, name, meta, url, user_id) VALUES (?,?,?,?,?,?)",
            (lid, body.type, name, body.meta, body.url, uid),
        )
        conn.commit()
        return {"ok": True, "item": {"id": lid, "type": body.type, "name": name,
                                     "meta": body.meta, "url": body.url}}
    finally:
        conn.close()


@router.delete("/api/library/{item_id}")
def delete_library(item_id: str, user=Depends(get_current_user)):
    """删除素材（只能删自己的）。"""
    uid = scope_user_id(user)
    conn = get_conn()
    try:
        cur = conn.execute(
            "DELETE FROM library WHERE id = ? AND user_id = ?", (item_id, uid)
        )
        conn.commit()
        if cur.rowcount == 0:
            raise HTTPException(status_code=404, detail="素材不存在或无权操作")
        return {"ok": True}
    finally:
        conn.close()
