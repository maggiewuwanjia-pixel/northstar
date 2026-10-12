"""飞书开放平台接入 —— 拉取脚本库 / 直播总结 / 直播脚本文档。

- get_tenant_token(): 用 app_id/app_secret 换 tenant_access_token
- fetch_doc_text(url): 递归拉取 docx 文档 block 树，拼出纯文本
- 缺凭证时（config.feishu_ready() == False）返回 None，上层降级到种子数据
"""
import httpx

from .. import config

TOKEN_URL = "https://open.feishu.cn/open-apis/auth/v3/tenant_access_token/internal"


def feishu_ready() -> bool:
    return config.feishu_ready()


def get_tenant_token() -> str:
    """获取 tenant_access_token（约 2 小时有效，按需调用）。"""
    if not feishu_ready():
        raise RuntimeError("飞书未配置 app_id/app_secret")
    r = httpx.post(
        TOKEN_URL,
        json={"app_id": config.FEISHU_APP_ID, "app_secret": config.FEISHU_APP_SECRET},
        timeout=15,
    )
    r.raise_for_status()
    data = r.json()
    if data.get("code") != 0:
        raise RuntimeError(f"飞书 token 获取失败: {data.get('msg')}")
    return data["tenant_access_token"]


def extract_doc_token(url: str) -> str:
    """从飞书文档 URL 提取 document token（docx/ 之后的部分，去掉 ? 参数）。"""
    for sep in ("/docx/", "/docs/", "/wiki/"):
        if sep in url:
            tail = url.split(sep, 1)[1]
            return tail.split("?")[0].split("#")[0].strip("/")
    # 兜底：直接当 token 用
    return url.rstrip("/").split("/")[-1].split("?")[0]


def resolve_document_token(url: str, token: str) -> str:
    """Resolve a Feishu Wiki node to its underlying docx token."""
    if "/wiki/" not in url:
        return extract_doc_token(url)
    response = httpx.get(
        "https://open.feishu.cn/open-apis/wiki/v2/spaces/get_node",
        params={"token": extract_doc_token(url)},
        headers={"Authorization": f"Bearer {token}"}, timeout=20,
    )
    response.raise_for_status()
    data = response.json()
    if data.get("code") != 0:
        raise RuntimeError("飞书 Wiki 节点解析失败，请检查应用权限")
    node = data.get("data", {}).get("node", {})
    if node.get("obj_type") != "docx" or not node.get("obj_token"):
        raise ValueError("当前仅支持飞书 Wiki 中的文档节点；表格请导出 XLSX 上传")
    return node["obj_token"]


def fetch_doc_text(url: str, max_blocks: int = 5000) -> str:
    """Use the official raw_content endpoint; preserve complete document text."""
    token = get_tenant_token()
    doc_id = resolve_document_token(url, token)
    if not __import__('re').fullmatch(r'[A-Za-z0-9]+', doc_id):
        raise ValueError("Invalid document token")
    response = httpx.get(
        f"https://open.feishu.cn/open-apis/docx/v1/documents/{doc_id}/raw_content",
        headers={"Authorization": f"Bearer {token}"}, timeout=30,
    )
    response.raise_for_status()
    data = response.json()
    if data.get("code") != 0:
        raise RuntimeError("飞书文档读取失败，请检查应用权限")
    return data["data"]["content"]


def fetch_all_docs() -> dict:
    """拉取三个核心文档，返回 {script, live_summary, live_script} 的纯文本。

    未配置飞书凭证时返回 None，调用方降级到种子数据。
    """
    if not feishu_ready():
        return None
    return {
        "script": fetch_doc_text(config.FEISHU_SCRIPT_DOC),
        "live_summary": fetch_doc_text(config.FEISHU_LIVE_SUMMARY_DOC),
        "live_script": fetch_doc_text(config.FEISHU_LIVE_SCRIPT_DOC),
    }
