"""Cue AI 问答 API（混元）"""
from fastapi import APIRouter
from pydantic import BaseModel

from ..services import hunyuan

router = APIRouter(prefix="/api/cue", tags=["cue"])


class CueIn(BaseModel):
    question: str
    context: str = ""
    mode: str = "chat"  # chat | actions | script


class CueOut(BaseModel):
    ready: bool
    answer: str = ""


@router.get("/status")
def status():
    return {"ready": hunyuan.hunyuan_ready()}


@router.post("", response_model=CueOut)
def cue(body: CueIn):
    if not hunyuan.hunyuan_ready():
        return {"ready": False, "answer": ""}
    try:
        if body.mode == "actions":
            answer = hunyuan.gen_three_actions(body.context or body.question)
        elif body.mode == "script":
            answer = hunyuan.break_script(body.question)
        else:
            answer = hunyuan.cue_answer(body.question, body.context)
        return {"ready": True, "answer": answer}
    except Exception as e:  # noqa: BLE001
        return {"ready": True, "answer": f"（混元调用失败：{e}）"}
