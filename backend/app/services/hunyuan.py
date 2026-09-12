"""混元大模型接入 —— Cue 问答 / 三句结论 / 拆脚本。

走腾讯云混元的 OpenAI 兼容接口（https://api.hunyuan.cloud.tencent.com/v1）。
缺 API key 时（config.hunyuan_ready() == False）由上层降级到前端关键词规则。
"""
import httpx

from .. import config

SYSTEM_PROMPT = (
    "你是「北极星 NorthStar」里的 AI 助手 Cue，服务一位视频号教育博主（清华优优，22.4 万粉，"
    "粉丝以 40-49 岁妈妈为主、女性占 56%）。你负责提醒行动、给可落地的运营建议。"
    "回答要短、直接、带具体数字，少废话，用中文。"
)


def hunyuan_ready() -> bool:
    return config.hunyuan_ready()


def chat(messages: list[dict], temperature: float = 0.7, max_tokens: int = 1024) -> str:
    """调用混元 chat/completions，返回回复文本。"""
    if not hunyuan_ready():
        raise RuntimeError("混元未配置 API key")
    url = f"{config.HUNYUAN_BASE_URL}/chat/completions"
    payload = {
        "model": config.HUNYUAN_MODEL,
        "messages": messages,
        "temperature": temperature,
        "max_tokens": max_tokens,
    }
    r = httpx.post(
        url,
        json=payload,
        headers={"Authorization": f"Bearer {config.HUNYUAN_API_KEY}"},
        timeout=60,
    )
    r.raise_for_status()
    data = r.json()
    try:
        return data["choices"][0]["message"]["content"]
    except (KeyError, IndexError):
        raise RuntimeError(f"混元返回异常：{data}")


def cue_answer(question: str, context: str = "") -> str:
    """Cue 问答：把前端传来的问题 + 业务上下文交给混元。"""
    messages = [{"role": "system", "content": SYSTEM_PROMPT}]
    if context:
        messages.append({"role": "system", "content": f"当前账号数据上下文：\n{context}"})
    messages.append({"role": "user", "content": question})
    return chat(messages)


def gen_three_actions(context: str) -> str:
    """生成「下周/下条/下场」三句结论。"""
    messages = [
        {"role": "system", "content": SYSTEM_PROMPT},
        {"role": "user", "content": f"根据以下账号数据，给出三条行动建议（下周怎么做 / 下条视频怎么拍 / 下场直播改什么话题），每条一句话、带数字：\n{context}"},
    ]
    return chat(messages, temperature=0.5)


def break_script(video_title: str) -> str:
    """拆解一条爆款视频的脚本结构。"""
    messages = [
        {"role": "system", "content": SYSTEM_PROMPT},
        {"role": "user", "content": f"把这条视频《{video_title}》拆成 5 段脚本结构（前3秒钩子/痛点/方法/案例/行动引导），每段一句话。"},
    ]
    return chat(messages, temperature=0.6)
