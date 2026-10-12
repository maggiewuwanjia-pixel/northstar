"""Read supplied operating exports, preserve originals and source row locations."""
from pathlib import Path
import csv,json,hashlib,shutil,datetime,sqlite3
import openpyxl
root=Path(__file__).resolve().parents[1]
source=Path('/Users/maggie/Desktop/2026/AI demo/经营数据')
destination=root/'frontend/public/business-data'
destination.mkdir(parents=True,exist_ok=True)
documents=[];tables={}
for file in sorted(source.iterdir()):
 if file.suffix.lower() not in ['.csv','.xlsx']:continue
 digest=hashlib.sha256(file.name.encode()).hexdigest()[:16]
 target=destination/digest/file.name;target.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(file,target)
 sections=[];sheet_data=[]
 if file.suffix.lower()=='.csv':
  raw=file.read_bytes()
  for encoding in ['utf-8-sig','gb18030','utf-16']:
   try:text=raw.decode(encoding);break
   except UnicodeError:continue
  rows=list(csv.reader(text.splitlines()))
  sheet_data=[{'name':'CSV','rows':rows}]
 else:
  book=openpyxl.load_workbook(file,read_only=True,data_only=True)
  for sheet in book:
   rows=[[v.isoformat() if isinstance(v,(datetime.date,datetime.datetime)) else v for v in row] for row in sheet.values]
   sheet_data.append({'name':sheet.title,'rows':rows})
  book.close()
 for sheet in sheet_data:
  for i,row in enumerate(sheet['rows'],1):
   if any(v is not None and str(v).strip() for v in row):sections.append({'locator':sheet['name']+' · 第 '+str(i)+' 行','text':' | '.join('' if v is None else str(v) for v in row)})
 doc={'id':'business-'+digest,'title':file.name,'subspace':'经营数据','space_name':'清华优优 AI Wiki','doc_type':'dataset','imported_file':True,'relative_path':file.name,'uri':'/business-data/'+digest+'/'+file.name,'chunk_count':len(sections),'sections':sections,'local_content':'\n'.join(s['locator']+'\n'+s['text'] for s in sections),'parse_status':'completed','analyzed':False,'sheets':sheet_data}
 documents.append(doc);tables[file.name]=sheet_data
(destination/'manifest.json').write_text(json.dumps({'documents':documents},ensure_ascii=False))
followers=tables['视频号关注者增长详情数据.csv'][0]['rows'];header=next(i for i,r in enumerate(followers) if r and r[0]=='时间');rows=[dict(zip(followers[header],r)) for r in followers[header+1:] if r and r[0]]
month='2026/09';selected=sorted([r for r in rows if r['时间'].startswith(month)],key=lambda r:r['时间'])
prior=next(r for r in rows if r['时间']=='2026/08/31')
metrics={'month':'2026-09','start':int(prior['关注者总数']),'end':int(selected[-1]['关注者总数']),'follows':sum(int(r['新增关注']) for r in selected),'unfollows':sum(int(r['取消关注']) for r in selected),'net':sum(int(r['净增关注']) for r in selected),'days':len(selected),'source':'视频号关注者增长详情数据.csv','uri':next(d['uri'] for d in documents if d['title']=='视频号关注者增长详情数据.csv'),'header_row':header+1}
assert metrics['net']==metrics['follows']-metrics['unfollows']==metrics['end']-metrics['start']
(destination/'metrics.json').write_text(json.dumps(metrics,ensure_ascii=False,indent=2))
print(json.dumps({'files':len(documents),'rows':sum(d['chunk_count'] for d in documents),'followers':metrics},ensure_ascii=False))

dbpath=root/'data/business.sqlite'
dbpath.parent.mkdir(parents=True,exist_ok=True)
with sqlite3.connect(dbpath) as db:
 db.execute('DROP TABLE IF EXISTS followers')
 db.execute('CREATE TABLE followers(date TEXT PRIMARY KEY,net INTEGER,follows INTEGER,unfollows INTEGER,total INTEGER)')
 db.executemany('INSERT INTO followers VALUES(?,?,?,?,?)',[(r['时间'].replace('/','-'),int(r['净增关注']),int(r['新增关注']),int(r['取消关注']),int(r['关注者总数'])) for r in rows])
