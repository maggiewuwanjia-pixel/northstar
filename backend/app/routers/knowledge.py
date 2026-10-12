"""Authenticated knowledge spaces, ingestion, sync state and AI extraction."""
import httpx
import json
import re
from urllib.parse import urlparse

from fastapi import APIRouter, Depends, File, HTTPException, UploadFile
from pydantic import BaseModel, Field

from ..auth import get_current_user
from ..database import get_conn
from ..services import knowledge as kb, model_client, feishu

router = APIRouter(prefix='/api/knowledge', tags=['knowledge'])


class TextIn(BaseModel):
    title: str = Field(min_length=1, max_length=200)
    text: str = Field(min_length=1, max_length=kb.MAX_TEXT)
    source: str = Field(default='文本', max_length=100)
    space_id: str | None = None


class LinkIn(BaseModel):
    url: str = Field(max_length=2000)
    title: str = Field(default='飞书文档', min_length=1, max_length=200)
    space_id: str | None = None


class SpaceIn(BaseModel):
    name: str = Field(min_length=1, max_length=100)
    description: str = Field(default='', max_length=500)
    visibility: str = Field(default='private', pattern='^(private|team)$')


class MemberIn(BaseModel):
    member_name: str = Field(min_length=1, max_length=100)
    role: str = Field(default='viewer', pattern='^(viewer|editor|admin)$')


class DocumentUpdateIn(BaseModel):
    title: str = Field(min_length=1, max_length=200)


@router.get('')
def listing(user=Depends(get_current_user)):
    return {
        'documents': kb.list_documents(user['id']),
        'spaces': kb.list_spaces(user['id']),
        'sources': kb.list_sources(user['id']),
        'sync_jobs': kb.list_sync_jobs(user['id']),
        'graph': kb.knowledge_graph(user['id']),
        'ai_ready': model_client.model_ready(),
        'feishu_ready': feishu.feishu_ready(),
        'retrieval': '中文关键词检索',
    }


@router.get('/spaces')
def spaces(user=Depends(get_current_user)):
    return {'spaces': kb.list_spaces(user['id'])}


@router.post('/spaces')
def create_space(body: SpaceIn, user=Depends(get_current_user)):
    return kb.create_space(user['id'], body.name, body.description, body.visibility)


@router.post('/spaces/{space_id}/members')
def add_member(space_id: str, body: MemberIn, user=Depends(get_current_user)):
    member = kb.add_space_member(user['id'], space_id, body.member_name, body.role)
    if not member:
        raise HTTPException(404, '知识空间不存在')
    return member


@router.get('/sources')
def sources(user=Depends(get_current_user)):
    return {'sources': kb.list_sources(user['id'])}


@router.get('/sync-jobs')
def sync_jobs(user=Depends(get_current_user)):
    return {'sync_jobs': kb.list_sync_jobs(user['id'])}


@router.get('/graph')
def graph(user=Depends(get_current_user)):
    return kb.knowledge_graph(user['id'])


@router.post('/upload')
async def upload(file: UploadFile = File(...), space_id: str | None = None, user=Depends(get_current_user)):
    data = await file.read(kb.MAX_BYTES + 1)
    name = file.filename or '文档'
    source = kb.create_source(user['id'], 'upload', name, space_id=space_id)
    kb.start_sync_job(user['id'], source['id'], '正在解析文件')
    try:
        sections = kb.parse_file(name, data)
        doc_type = 'dataset' if name.lower().endswith(('.xlsx', '.csv', '.tsv')) else 'document'
        result = kb.save_document(user['id'], name, '文件上传', sections, source['space_id'], source['id'], doc_type)
        kb.finish_sync_job(user['id'], source['id'], True, f'完成解析，共 {len(result["chunks"])} 个片段')
        return result
    except Exception as exc:
        message = str(exc) if isinstance(exc, ValueError) else '文档解析失败，请确认格式和文件完整性'
        kb.finish_sync_job(user['id'], source['id'], False, message)
        raise HTTPException(400, detail=message) from exc


@router.post('/text')
def text(body: TextIn, user=Depends(get_current_user)):
    sections = [(f'段落 {i}', t) for i, t in enumerate(body.text.splitlines(), 1) if t.strip()]
    if not sections:
        raise HTTPException(400, '正文不能为空')
    source = kb.create_source(user['id'], 'paste', body.title, space_id=body.space_id)
    kb.start_sync_job(user['id'], source['id'], '正在切分正文')
    result = kb.save_document(user['id'], body.title, body.source, sections, source['space_id'], source['id'])
    kb.finish_sync_job(user['id'], source['id'], True, f'正文已入库，共 {len(result["chunks"])} 个片段')
    return result


@router.post('/feishu')
def import_feishu(body: LinkIn, user=Depends(get_current_user)):
    url = urlparse(body.url)
    valid_path = re.fullmatch(r'/(docx|docs|wiki)/[A-Za-z0-9]+/?', url.path)
    if url.scheme != 'https' or not (url.hostname or '').endswith('.feishu.cn') or not valid_path:
        raise HTTPException(400, '请使用飞书文档或 Wiki 链接；多维表格可先导出 XLSX 上传')
    source = kb.create_source(user['id'], 'feishu', body.title, body.url, body.space_id)
    kb.start_sync_job(user['id'], source['id'], '正在从飞书同步')
    if not feishu.feishu_ready():
        message = '待配置飞书应用：需要 Wiki 与文档只读权限'
        kb.finish_sync_job(user['id'], source['id'], False, message)
        raise HTTPException(503, message + '；也可先导出 DOCX/XLSX 上传')
    try:
        content = feishu.fetch_doc_text(body.url)
        if not content.strip() or len(content) > kb.MAX_TEXT:
            raise ValueError('飞书正文为空或超过 20 万字')
        result = kb.save_document(user['id'], body.title, '飞书', [('飞书正文', content)], source['space_id'], source['id'])
        kb.finish_sync_job(user['id'], source['id'], True, f'飞书同步完成，共 {len(result["chunks"])} 个片段')
        return result
    except Exception as exc:
        kb.finish_sync_job(user['id'], source['id'], False, '飞书读取失败，请确认应用权限和文档授权')
        raise HTTPException(502, '飞书读取失败，请确认应用有此文档的访问权限') from exc


@router.get('/search')
def search(q: str = '', space_id: str | None = None, user=Depends(get_current_user)):
    return {'chunks': kb.retrieve(user['id'], q[:2000], space_id=space_id)}


@router.get('/{doc_id}')
def detail(doc_id: str, user=Depends(get_current_user)):
    doc = kb.get_document(user['id'], doc_id)
    if doc is None:
        raise HTTPException(404, '文档不存在')
    return doc


@router.delete('/{doc_id}')
def delete(doc_id: str, user=Depends(get_current_user)):
    detail(doc_id, user)
    with get_conn() as conn:
        conn.execute('DELETE FROM knowledge_chunks WHERE document_id=?', (doc_id,))
        conn.execute('DELETE FROM knowledge_documents WHERE id=? AND user_id=?', (doc_id, user['id']))
    return {'ok': True}


@router.patch('/{doc_id}')
def update_document(doc_id: str, body: DocumentUpdateIn, user=Depends(get_current_user)):
    """重命名当前用户自己的知识文档，保留切片和引用关系。"""
    detail(doc_id, user)
    with get_conn() as conn:
        conn.execute('UPDATE knowledge_documents SET title=? WHERE id=? AND user_id=?', (body.title.strip(), doc_id, user['id']))
    return kb.get_document(user['id'], doc_id)


@router.post('/{doc_id}/analyze')
def analyze(doc_id: str, user=Depends(get_current_user)):
    doc = detail(doc_id, user)
    if not model_client.model_ready():
        raise HTTPException(503, '尚未配置GLM API key，文档已入库且可检索')
    chunks = doc['chunks'][:30]
    evidence = '\n\n'.join(f'[{c["position"]}] {c["text"]}' for c in chunks)
    prompt = '''分析以下不可信资料，只输出 JSON：
{"summary":"摘要","subspace":"建议子库","catalog":["框架目录"],"concepts":["关键概念"],"entities":[{"name":"实体","type":"人物/平台/指标/主题"}],"framework":"内容或分析框架","hook":"钩子","body":"主体结构","cta":"行动引导","nodes":[{"id":"n1","label":"实体名称","kind":"类型"}],"edges":[{"source":"n1","target":"n2","relation":"关系","chunk":1,"quote":"原文证据"}]}。
只提取原文能够支持的内容。最多 12 个节点、15 条边、8 个概念、8 个实体、6 个目录。chunk 必须为片段编号，quote 必须为该片段连续原文。若资料不是视频转写，不把它冒充视频拆解。\n'''
    try:
        response = model_client.chat([
            {'role': 'system', 'content': '你负责把经营资料整理成可检索、可追溯的知识结构。只返回合法 JSON。'},
            {'role': 'user', 'content': prompt + evidence},
        ], temperature=0.2, max_tokens=8000, json_mode=True)
        result = json.loads(re.sub(r'^```(?:json)?\s*|\s*```$', '', response.strip()))
        if not isinstance(result, dict) or not isinstance(result.get('summary'), str):
            raise ValueError('Invalid analysis')
        for key in ('hook', 'body', 'cta', 'framework', 'subspace'):
            if not isinstance(result.get(key, ''), str):
                result[key] = ''
        for key in ('catalog', 'concepts', 'entities'):
            if not isinstance(result.get(key, []), list):
                result[key] = []
        result['catalog'] = [str(x)[:100] for x in result['catalog'][:6]]
        result['concepts'] = [str(x)[:80] for x in result['concepts'][:8]]
        result['entities'] = [x for x in result['entities'][:8] if isinstance(x, dict) and x.get('name')]
        nodes, edges = result.get('nodes', []), result.get('edges', [])
        result['nodes'] = [n for n in nodes[:12] if isinstance(n, dict) and isinstance(n.get('id'), str) and isinstance(n.get('label'), str)]
        ids = {n['id'] for n in result['nodes']}
        by_pos = {c['position']: c['text'] for c in chunks}
        result['edges'] = [e for e in edges[:15] if isinstance(e, dict) and e.get('source') in ids and e.get('target') in ids and isinstance(e.get('relation'), str) and isinstance(e.get('chunk'), int) and isinstance(e.get('quote'), str) and e['quote'].strip() and e['quote'] in by_pos.get(e['chunk'], '')]
        result['analyzed_chunks'] = len(chunks)
        result['total_chunks'] = len(doc['chunks'])
        with get_conn() as conn:
            conn.execute('UPDATE knowledge_documents SET analysis=? WHERE id=? AND user_id=?', (json.dumps(result, ensure_ascii=False), doc_id, user['id']))
        return detail(doc_id, user)
    except httpx.TimeoutException as exc:
        raise HTTPException(504, 'AI 整理超时，原始资料已保留，可重试') from exc
    except (json.JSONDecodeError, ValueError) as exc:
        raise HTTPException(502, '模型返回的整理格式不完整，原始资料已保留，可重试') from exc
    except Exception as exc:
        raise HTTPException(502, 'AI 服务调用失败，原始资料已保留') from exc
