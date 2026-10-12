"""Production media helpers; raw files stream to temporary storage and are removed after processing."""
import asyncio
import base64
import json
import tempfile
from pathlib import Path
from fastapi import APIRouter, HTTPException, Request, Response

router = APIRouter(prefix='/local-media')

async def run(*args, timeout=180):
    proc = await asyncio.create_subprocess_exec(*args, stdout=asyncio.subprocess.PIPE, stderr=asyncio.subprocess.PIPE)
    try:
        out, err = await asyncio.wait_for(proc.communicate(), timeout)
    except asyncio.TimeoutError:
        proc.kill()
        await proc.wait()
        raise HTTPException(504, '文件解析超时，请拆分文件后重试。')
    if proc.returncode:
        raise HTTPException(422, '文件解析失败，请确认原文件可正常打开。')
    return out

async def save(request, path, maximum):
    size = 0
    with path.open('wb') as file:
        async for block in request.stream():
            size += len(block)
            if size > maximum * 1024 * 1024:
                raise HTTPException(413, f'文件不能超过 {maximum} MB')
            file.write(block)

@router.post('/presentation')
async def presentation(request: Request):
    suffix = request.headers.get('x-file-extension', '.pptx').lower()
    if suffix not in ('.ppt', '.pptx', '.xls'):
        raise HTTPException(422, '不支持的演示文稿格式')
    with tempfile.TemporaryDirectory(prefix='northstar-presentation-') as directory:
        root = Path(directory)
        source = root / ('slides' + suffix)
        await save(request, source, 500)
        await run('soffice', '-env:UserInstallation='+(root/'profile').as_uri(), '--headless', '--convert-to', 'pdf', '--outdir', str(root), str(source), timeout=180)
        pdf = root / 'slides.pdf'
        if not pdf.exists(): raise HTTPException(422, '文件转换失败')
        return Response(pdf.read_bytes(), media_type='application/pdf')

@router.post('/transcribe')
async def video(request: Request):
    suffix = request.headers.get('x-file-extension', '.mp4').lower()
    if suffix not in ('.mp4', '.mov', '.webm', '.m4v'): raise HTTPException(422, '视频格式不支持')
    with tempfile.TemporaryDirectory(prefix='northstar-video-') as directory:
        root = Path(directory)
        source = root / ('video'+suffix)
        await save(request, source, 200)
        probe = await run('ffprobe', '-v', 'error', '-show_entries', 'format=duration', '-of', 'json', str(source))
        duration = float(json.loads(probe)['format']['duration'])
        if not 0 < duration < 86400: raise HTTPException(422, '视频时长无效')
        frames = []
        for i in range(8):
            time = duration * (i + .5) / 8
            output = root / f'{i}.jpg'
            await run('ffmpeg', '-v', 'error', '-ss', str(time), '-i', str(source), '-frames:v', '1', '-vf', 'scale=1024:-2', '-y', str(output), timeout=30)
            if output.exists(): frames.append({'time': time, 'image': 'data:image/jpeg;base64,'+base64.b64encode(output.read_bytes()).decode()})
        return {'duration':duration, 'frames':[], 'keyframes':frames, 'method':'关键帧抽样（无音频转写）'}

@router.get('/query')
def query(month: str = '2026-09'):
    import re
    import sqlite3
    if not re.fullmatch(r'20\d{2}-(0[1-9]|1[0-2])', month): raise HTTPException(422, '日期格式无效')
    database = Path(__file__).resolve().parents[3] / 'data/business.sqlite'
    sql = "SELECT COUNT(*) AS days, SUM(net) AS net, SUM(follows) AS follows, SUM(unfollows) AS unfollows FROM followers WHERE date >= ? AND date < date(?,'+1 month')"
    with sqlite3.connect(f'file:{database}?mode=ro', uri=True) as connection:
        connection.row_factory = sqlite3.Row
        row = connection.execute(sql, (month+'-01',month+'-01')).fetchone()
    return {'sql':sql,'result':dict(row),'mode':'live'}
