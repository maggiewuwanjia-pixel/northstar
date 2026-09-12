"""鉴权核心 —— 登录 / 多账号 / 会话（零第三方依赖，纯标准库）。

- 密码用 PBKDF2-HMAC-SHA256 + 随机盐哈希
- 会话 token 用 uuid4（hex），存 SQLite sessions 表，带过期时间
- 多账号：每个 user 绑定一个 account_key（对应视频号账号标识），数据按账号隔离的挂载点

设计原则：鉴权「可选」——未配置强制鉴权时，现有 5 个只读 API 保持开放，
便于演示；登录相关 API 始终可用，为后续「数据按账号隔离」留好接口。
"""
import hashlib
import hmac
import os
import secrets
import uuid
from datetime import datetime, timedelta

from fastapi import Header, HTTPException

from . import config
from .database import get_conn


# ---------- 密码哈希 ----------
def hash_password(password: str) -> str:
    salt = secrets.token_hex(16)
    digest = hashlib.pbkdf2_hmac(
        "sha256", password.encode("utf-8"), salt.encode("utf-8"), 120_000
    ).hex()
    return f"pbkdf2${salt}${digest}"


def verify_password(password: str, stored: str) -> bool:
    try:
        scheme, salt, digest = stored.split("$")
        if scheme != "pbkdf2":
            return False
        calc = hashlib.pbkdf2_hmac(
            "sha256", password.encode("utf-8"), salt.encode("utf-8"), 120_000
        ).hex()
        return hmac.compare_digest(calc, digest)
    except (ValueError, AttributeError):
        return False


# ---------- 会话 ----------
def create_session(user_id: str) -> str:
    token = uuid.uuid4().hex
    now = datetime.utcnow().isoformat()
    exp = (datetime.utcnow() + timedelta(days=config.SESSION_TTL_DAYS)).isoformat()
    conn = get_conn()
    try:
        conn.execute(
            "INSERT INTO sessions (token, user_id, created_at, expires_at) VALUES (?, ?, ?, ?)",
            (token, user_id, now, exp),
        )
        conn.commit()
    finally:
        conn.close()
    return token


def get_session_user(token: str):
    """根据 token 返回 user dict，无效/过期返回 None。"""
    if not token:
        return None
    conn = get_conn()
    try:
        row = conn.execute(
            "SELECT u.*, s.expires_at FROM sessions s JOIN users u ON u.id = s.user_id WHERE s.token = ?",
            (token,),
        ).fetchone()
        if row is None:
            return None
        exp = row["expires_at"]
        if exp and datetime.fromisoformat(exp) < datetime.utcnow():
            conn.execute("DELETE FROM sessions WHERE token = ?", (token,))
            conn.commit()
            return None
        d = dict(row)
        d.pop("password_hash", None)
        d.pop("expires_at", None)
        return d
    finally:
        conn.close()


def revoke_session(token: str):
    conn = get_conn()
    try:
        conn.execute("DELETE FROM sessions WHERE token = ?", (token,))
        conn.commit()
    finally:
        conn.close()


# ---------- 数据隔离 ----------
def scope_user_id(user):
    """把当前请求的用户映射为数据隔离用的 user_id。

    未登录（游客）读取 demo 模板数据，保证演示环境始终有内容。
    """
    if not user:
        from .database import DEMO_USER_ID
        return DEMO_USER_ID
    if isinstance(user, dict):
        return user["id"]
    return user.id


# ---------- FastAPI 依赖（可选鉴权） ----------
def get_current_user_optional(authorization: str = Header(default="")):
    """从 Authorization: Bearer <token> 解析当前用户；无 token 返回 None。"""
    token = ""
    if authorization.lower().startswith("bearer "):
        token = authorization[7:].strip()
    return get_session_user(token)


def get_current_user(authorization: str = Header(default="")):
    """强制鉴权：无 token / 无效 token 抛 401。"""
    user = get_current_user_optional(authorization)
    if user is None:
        raise HTTPException(status_code=401, detail="未登录或会话已过期")
    return user
