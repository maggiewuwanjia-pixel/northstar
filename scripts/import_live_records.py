"""Read date records from the supplied live review PDF, preserving page citations."""
from pathlib import Path
import re,json,unicodedata
from pypdf import PdfReader
root=Path(__file__).resolve().parents[1]
source=root/'frontend/public/demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf'
reader=PdfReader(source)
text='';pages=[]
for i,page in enumerate(reader.pages,1):
 pages.append((len(text),i));text+=unicodedata.normalize('NFKC',page.extract_text() or '').replace('\x01','')+'\n'
hits=list(re.finditer(r'Day\s*(\d+)\s*[-—]\s*(\d+)\.(\d+)',text))
path=root/'frontend/public/data.json';data=json.loads(path.read_text())
existing={s['date']:s for s in data['live']['sessions']}
for i,hit in enumerate(hits):
 date=f'2025-{int(hit[2]):02}-{int(hit[3]):02}'
 raw=text[hit.start():hits[i+1].start() if i+1<len(hits) else len(text)].strip()
 page=max(p for pos,p in pages if pos<=hit.start())
 def value(pattern):
  found=re.search(pattern,raw);return int(found[1].replace(',','')) if found else None
 views=value(r'看播人数[：:]?\s*([\d,]+)')
 peak=value(r'人数[：:]?\s*平均在线\s*\d+\s*[，,]\s*最高\s*([\d,]+)')
 avg=value(r'人数[：:]?\s*平均在线\s*([\d,]+)')
 gmv=value(r'销售额[：:]\s*([\d,]+)')
 dur=re.search(r'(\d+)h\s*(\d+)m\s*in',raw)
 s=existing.get(date,{'date':date,'title':f'{int(hit[2])}月{int(hit[3])}日 · 咨询与课程直播','dur':f'{dur[1]}小时{dur[2]}分钟' if dur else '未记录','views':views,'peak':peak,'hot':None,'gmv':f'¥{gmv:,}' if gmv is not None else None,'status':'直播复盘','visual':{}})
 s.update(source_text=raw,source_page=page,source_uri='/demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page='+str(page),record_day=int(hit[1]))
 if avg is not None:s['average_online']=avg
 existing[date]=s
# Keep source records, including notes that explicitly describe combined sessions or rehearsals.
data['live']['sessions']=sorted(existing.values(),key=lambda s:s['date'],reverse=True)
path.write_text(json.dumps(data,ensure_ascii=False))
print(f'Imported {len(hits)} dated records on {len(set(s["date"][:7] for s in existing.values()))} months; page links retained.')
