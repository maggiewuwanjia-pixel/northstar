"""经营看板 API（按用户隔离；未登录读 demo 模板数据）"""
import uuid
from datetime import datetime
from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel
from ..auth import get_current_user, get_current_user_optional, scope_user_id
from ..database import get_conn, table_rows

router = APIRouter()


@router.get("/api/dashboard")
def dashboard(user=Depends(get_current_user_optional)):
    uid = scope_user_id(user)
    conn = get_conn()
    try:
        return {
            "kpis": table_rows(conn, "kpis", uid),
            "trend": table_rows(conn, "trend", uid),
            "actions": table_rows(conn, "actions", uid),
            "northstar": table_rows(conn, "northstar", uid),
            "gantt_weeks": table_rows(conn, "gantt_weeks", uid),
            "gantt": table_rows(conn, "gantt", uid),
            "portraits": table_rows(conn, "portraits", uid),
            "top_videos": table_rows(conn, "videos", uid),
            "planning_tasks": table_rows(conn, "planning_tasks", uid),
        }
    finally:
        conn.close()


class PlanningTaskIn(BaseModel):
    type: str
    title: str
    planned_at: str
    notes: str = ""


@router.post("/api/planning-tasks")
def add_planning_task(body: PlanningTaskIn, user=Depends(get_current_user)):
    uid = scope_user_id(user)
    if body.type not in {"live", "video"}:
        raise HTTPException(status_code=400, detail="任务类型仅支持 live 或 video")
    if not body.title.strip() or not body.planned_at.strip():
        raise HTTPException(status_code=400, detail="请填写内容和计划时间")
    task = {"id": "p" + uuid.uuid4().hex[:12], "type": body.type, "title": body.title.strip(),
            "planned_at": body.planned_at.strip(), "status": "待准备", "notes": body.notes.strip(),
            "source": "manual", "created_at": datetime.utcnow().isoformat()}
    conn = get_conn()
    try:
        conn.execute("BEGIN IMMEDIATE")
        existing = conn.execute("SELECT * FROM planning_tasks WHERE user_id=? AND type=? AND title=? AND planned_at=? AND COALESCE(notes,'')=? LIMIT 1", (uid,task['type'],task['title'],task['planned_at'],task['notes'])).fetchone()
        if existing:
            return {"ok": True, "task": dict(existing)}
        conn.execute("INSERT INTO planning_tasks (id,user_id,type,title,planned_at,status,notes,source,created_at) VALUES (?,?,?,?,?,?,?,?,?)",
                     (task["id"], uid, task["type"], task["title"], task["planned_at"], task["status"], task["notes"], task["source"], task["created_at"]))
        conn.commit()
        return {"ok": True, "task": task}
    finally:
        conn.close()


@router.put("/api/planning-tasks/{task_id}")
def update_planning_task(task_id: str, body: PlanningTaskIn, user=Depends(get_current_user)):
    uid = scope_user_id(user)
    if body.type not in {"live", "video"} or not body.title.strip() or not body.planned_at.strip():
        raise HTTPException(status_code=400, detail="请填写有效的内容、类型和计划时间")
    conn = get_conn()
    try:
        current = conn.execute('SELECT id,status,source,created_at FROM planning_tasks WHERE id=? AND user_id=?', (task_id, uid)).fetchone()
        if not current:
            raise HTTPException(status_code=404, detail="排期任务不存在")
        task = {"id": task_id, "type": body.type, "title": body.title.strip(), "planned_at": body.planned_at.strip(), "status": current['status'], "notes": body.notes.strip(), "source": current['source'], "created_at": current['created_at']}
        conn.execute('UPDATE planning_tasks SET type=?,title=?,planned_at=?,notes=? WHERE id=? AND user_id=?', (task['type'], task['title'], task['planned_at'], task['notes'], task_id, uid))
        conn.commit()
        return {"ok": True, "task": task}
    finally:
        conn.close()


@router.delete("/api/planning-tasks/{task_id}")
def delete_planning_task(task_id: str, user=Depends(get_current_user)):
    uid = scope_user_id(user)
    conn = get_conn()
    try:
        deleted = conn.execute('DELETE FROM planning_tasks WHERE id=? AND user_id=?', (task_id, uid)).rowcount
        conn.commit()
        if not deleted:
            raise HTTPException(status_code=404, detail="排期任务不存在")
        return {"ok": True, "id": task_id}
    finally:
        conn.close()
