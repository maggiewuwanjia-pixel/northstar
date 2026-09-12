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


def fetch_doc_text(url: str, max_blocks: int = 5000) -> str:
    """拉取一篇飞书 docx 文档，返回纯文本（block 递归拼接）。"""
    token = get_tenant_token()
    doc_id = extract_doc_token(url)
    headers = {"Authorization": f"Bearer {token}"}
    base = f"https://open.feishu.cn/open-apis/docx/v1/documents/{doc_id}"

    with httpx.Client(timeout=30) as client:
        # 1) 取文档块总数
        meta = client.get(base, headers=headers).json()
        if meta.get("code") != 0:
            raise RuntimeError(f"飞书文档打开失败: {meta.get('msg')}")
        doc = meta["data"]["document"]
        block_id = doc["block_id"]

        # 2) 递归拉块
        texts: list[str] = []
        stack = [block_id]
        seen = 0
        while stack and seen < max_blocks:
            cur = stack.pop()
            resp = client.get(
                f"{base}/blocks/{cur}/children",
                headers=headers,
                params={"page_size": 500},
            ).json()
            if resp.get("code") != 0:
                continue
            for item in resp.get("data", {}).get("items", []):
                seen += 1
                blk = item.get("block", {})
                bt = blk.get("block_type")
                # 文本块
                if bt in (2,):  # text
                    for el in blk.get("text", {}).get("elements", []):
                        if "text_run" in el:
                            texts.append(el["text_run"].get("content", ""))
                elif bt in (3, 4, 5, 6, 7, 8):  # heading 等标题块
                    for el in blk.get("text", {}).get("elements", []):
                        if "text_run" in el:
                            texts.append(el["text_run"].get("content", ""))
                elif bt in (14, 15, 16, 17, 18, 19, 20, 21, 22, 23):  # 列表块
                    for el in blk.get("text", {}).get("elements", []):
                        if "text_run" in el:
                            texts.append(el["text_run"].get("content", ""))
                # 有子块则入栈
                if blk.get("has_children"):
                    stack.append(blk.get("block_id"))

    return "\n".join(texts)


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
