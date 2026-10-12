"""Deterministic follower queries over complete, scoped reports, without an LLM."""
import calendar
import csv
import io
import json
import re
from datetime import date
from functools import lru_cache
from pathlib import Path

from ..database import get_conn

ROOT = Path(__file__).resolve().parents[3]


def is_follower_query(question):
    return bool(re.search(r'粉丝|关注者|涨粉|新增关注|净增关注', question)) and not bool(re.search(r'为什么|原因|建议|怎么涨|如何涨|哪类|哪种|话题|脚本', question))


def parse_rows(text):
    rows = {}
    # Both uploaded CSV chunks and imported "locator + pipe-separated row" formats.
    for line in text.splitlines():
        values = next(csv.reader([line.replace(' | ', ',').replace('\t', ',')]), [])
        if len(values) < 5:
            continue
        stamp = values[0].strip().lstrip('\ufeff')
        if not re.fullmatch(r'20\d{2}[-/]\d{1,2}[-/]\d{1,2}', stamp):
            continue
        try:
            y, m, d = map(int, re.split('[-/]', stamp))
            stamp = date(y, m, d).isoformat()
            net, follows, unfollows, total = [int(v.strip().replace(',', '')) for v in values[1:5]]
        except (ValueError, TypeError):
            continue
        rows[stamp] = {'date': stamp, 'net': net, 'follows': follows, 'unfollows': unfollows, 'total': total}
    return sorted(rows.values(), key=lambda row: row['date'])


@lru_cache(maxsize=4)
def _shared_report(path, modified):
    manifest = json.loads(Path(path).read_text())
    doc = next((d for d in manifest.get('documents', []) if d.get('title') == '视频号关注者增长详情数据.csv'), None)
    if not doc:
        return None
    return {'document_id': doc['id'], 'title': doc['title'], 'uri': doc.get('uri'), 'rows': parse_rows(doc.get('local_content', ''))}


def find_report(uid=None, document_ids=None, space_id=None):
    ids = document_ids or []
    if uid:
        sql = '''SELECT d.id,d.title,c.text FROM knowledge_documents d
                 JOIN knowledge_chunks c ON c.document_id=d.id
                 WHERE d.user_id=? AND (d.title LIKE '%关注%' OR d.title LIKE '%粉丝%')'''
        args = [uid]
        if space_id:
            sql += ' AND d.space_id=?'
            args.append(space_id)
        if ids:
            sql += ' AND d.id IN (' + ','.join('?' for _ in ids) + ')'
            args.extend(ids)
        sql += ' ORDER BY d.created_at DESC,c.position'
        with get_conn() as conn:
            records = conn.execute(sql, args).fetchall()
        grouped = {}
        for row in records:
            grouped.setdefault(row['id'], {'document_id': row['id'], 'title': row['title'], 'text': ''})['text'] += '\n' + row['text']
        for item in grouped.values():
            item['rows'] = parse_rows(item.pop('text'))
            if item['rows']:
                return item
        # An explicitly scoped private space must not silently use the demo account.
        if space_id:
            return None
    for public in (ROOT / 'frontend/dist', ROOT / 'frontend/public'):
        path = public / 'business-data/manifest.json'
        if path.exists():
            report = _shared_report(str(path), path.stat().st_mtime_ns)
            if report and (not ids or report['document_id'] in ids):
                return report
    return None


def monthly_rows(rows):
    by_date = {row['date']: row for row in rows}
    grouped = {}
    for row in rows:
        grouped.setdefault(row['date'][:7], []).append(row)
    result = []
    for month, items in sorted(grouped.items()):
        y, m = map(int, month.split('-'))
        complete = len(items) == calendar.monthrange(y, m)[1]
        previous = date.fromordinal(date(y, m, 1).toordinal() - 1).isoformat()
        prior = by_date.get(previous)
        net = sum(row['net'] for row in items)
        follows = sum(row['follows'] for row in items)
        unfollows = sum(row['unfollows'] for row in items)
        end = items[-1]['total']
        start = prior['total'] if prior else None
        result.append({'month': month, 'end_date': items[-1]['date'], 'total': end,
                       'net': net, 'follows': follows, 'unfollows': unfollows, 'days': len(items),
                       'start': start, 'complete': complete,
                       'consistent': net == follows - unfollows and (start is None or not complete or end - start == net)})
    return result


def answer_followers(question, uid=None, document_ids=None, space_id=None):
    if not is_follower_query(question):
        return None
    report = find_report(uid, document_ids, space_id)
    if not report or not report['rows']:
        return None
    months = monthly_rows(report['rows'])
    complete = [m for m in months if m['complete']]
    explicit = re.search(r'(20\d{2})\s*[-/年]\s*(\d{1,2})\s*月?', question)
    count_match = re.search(r'(?:过去|最近|近)\s*(\d{1,2}|[一二两三四五六七八九十])\s*(?:个)?月', question)
    digits = {'一': 1, '二': 2, '两': 2, '三': 3, '四': 4, '五': 5, '六': 6, '七': 7, '八': 8, '九': 9, '十': 10}
    count = min(24, max(1, int(count_match[1]) if count_match and count_match[1].isdigit() else digits.get(count_match[1], 1) if count_match else 6 if '半年' in question else 1))
    if explicit:
        month = f'{explicit[1]}-{int(explicit[2]):02d}'
        selected = [m for m in months if m['month'] == month]
    else:
        selected = complete[-count:]
    source = {'number': 1, 'document_id': report['document_id'], 'title': report['title'],
              'locator': '完整日记录聚合 · 月末关注者总数／月净增', 'uri': report.get('uri'),
              'text': json.dumps(selected, ensure_ascii=False)}
    steps = [
        {'name': '定位关注者历史报表', 'status': 'done', 'detail': report['title']},
        {'name': '按日期聚合并校验统计口径', 'status': 'done', 'detail': f'读取 {len(report["rows"])} 条日记录；使用月末总数、净增、新增和取消关注交叉核验。'},
        {'name': '输出趋势与来源', 'status': 'done', 'execution': '服务端数据计算 · 未调用模型'},
    ]
    if not selected:
        answer = f'这份报表覆盖 {report["rows"][0]["date"]} 至 {report["rows"][-1]["date"]}，没有所请求月份的记录。[1]'
    else:
        lo, hi = selected[0]['month'], selected[-1]['month']
        answer = f'**关注者历史趋势：{lo} 至 {hi}。**\n\n'
        if not explicit:
            answer += '“最近”按报表中最近的完整自然月计算；未满整月的记录不混入月度比较。\n\n'
        answer += '| 月末日期 | 关注者总数 | 月净增 | 新增关注 | 取消关注 |\n|---|---:|---:|---:|---:|\n'
        answer += '\n'.join(f'| {m["end_date"]} | {m["total"]:,} | {m["net"]:+,} | {m["follows"]:,} | {m["unfollows"]:,} |' for m in selected)
        answer += '\n\n粉丝量使用月末关注者总数；月净增＝新增关注－取消关注。[1]'
        if any(not m['consistent'] for m in selected):
            answer += '\n\n部分记录的净增与总数差存在不一致，请核对原始报表口径。'
        if any(not m['complete'] for m in selected):
            answer += '\n\n指定月份未覆盖全部日期，表中的净增仅统计已有记录。'
        if not explicit and len(selected) < count:
            answer += f'\n\n只找到 {len(selected)} 个完整月份，没有补造其余月份。'
    chart = {'title': '月末关注者总数', 'points': [{'label': m['month'], 'value': m['total']} for m in selected]} if len(selected) > 1 else None
    if chart:
        steps[-1]['chart'] = chart
    return {'ready': True, 'answer': answer, 'route': 'structured_query', 'route_label': '结构化数据查询',
            'sources': [source], 'steps': steps, 'artifacts': [{'type': 'document', 'label': '沉淀到知识库'}], 'chart': chart}
