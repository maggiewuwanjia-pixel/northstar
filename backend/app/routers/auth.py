"""登录 / 多账号 API"""
import uuid
from datetime import datetime

from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel

from ..auth import (
    create_session,
    get_current_user,
    get_current_user_optional,
    hash_password,
    revoke_session,
    verify_password,
)
from ..database import get_conn, copy_user_data, DEMO_USER_ID

router = APIRouter(prefix="/api/auth", tags=["auth"])


class RegisterIn(BaseModel):
    username: str
    password: str
    display_name: str = ""
    account_key: str = ""


class LoginIn(BaseModel):
    username: str
    password: str


def _user_public(row):
    d = dict(row)
    d.pop("password_hash", None)
    return d


@router.post("/register")
def register(body: RegisterIn):
    username = body.username.strip()
    if not username or not body.password:
        raise HTTPException(status_code=400, detail="用户名和密码不能为空")
    if len(username) < 3 or len(username) > 32:
        raise HTTPException(status_code=400, detail="用户名需 3-32 个字符")
    if len(body.password) < 6:
        raise HTTPException(status_code=400, detail="密码至少 6 位")
    conn = get_conn()
    try:
        exists = conn.execute(
            "SELECT id FROM users WHERE username = ? COLLATE NOCASE", (username,)
        ).fetchone()
        if exists:
            raise HTTPException(status_code=409, detail="用户名已存在")
        uid = uuid.uuid4().hex
        conn.execute(
            "INSERT INTO users (id, username, password_hash, display_name, account_key, created_at) "
            "VALUES (?, ?, ?, ?, ?, ?)",
            (uid, username, hash_password(body.password),
             body.display_name or username, body.account_key, datetime.utcnow().isoformat()),
        )
        conn.commit()
        # 新用户初始化：复制 demo 模板数据，作为该用户的初始示例内容
        try:
            copy_user_data(DEMO_USER_ID, uid)
        except Exception as e:  # noqa: BLE001  初始化失败不影响注册成功
            print(f"[warn] 初始化用户数据失败：{e}")
        token = create_session(uid)
        return {"token": token, "user": {"id": uid, "username": username,
                "display_name": body.display_name or username, "account_key": body.account_key}}
    finally:
        conn.close()


@router.post("/login")
def login(body: LoginIn):
    conn = get_conn()
    try:
        row = conn.execute("SELECT * FROM users WHERE username = ?", (body.username.strip(),)).fetchone()
        if row is None or not verify_password(body.password, row["password_hash"]):
            raise HTTPException(status_code=401, detail="用户名或密码错误")
        token = create_session(row["id"])
        return {"token": token, "user": _user_public(row)}
    finally:
        conn.close()


@router.get("/me")
def me(user=Depends(get_current_user)):
    return {"user": user}


@router.post("/logout")
def logout(authorization: str = ""):
    token = ""
    if authorization.lower().startswith("bearer "):
        token = authorization[7:].strip()
    if token:
        revoke_session(token)
    return {"ok": True}


@router.get("/status")
def status(user=Depends(get_current_user_optional)):
    return {"logged_in": user is not None, "user": user}
