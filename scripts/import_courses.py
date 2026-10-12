"""Import the four supplied course directories with originals and extracted text."""
from pathlib import Path
import hashlib,json,shutil,zipfile,xml.etree.ElementTree as ET
from collections import Counter
from pypdf import PdfReader
root=Path(__file__).resolve().parents[1]
source=Path('/Users/maggie/Desktop/2025/自媒体/精讲课')
destination=root/'frontend/public/product-courses'
destination.mkdir(parents=True,exist_ok=True)
docs=[]
errors=[]
for subject in ['数学','物理','英语','语文']:
 for file in sorted((source/subject).rglob('*')):
  if not file.is_file() or file.name.startswith('.'): continue
  relative=file.relative_to(source)
  digest=hashlib.sha256(str(relative).encode()).hexdigest()[:16]
  target=destination/digest/file.name
  target.parent.mkdir(parents=True,exist_ok=True)
  shutil.copy2(file,target)
  text=''
  sections=[]
  parse_error=''
  try:
   suffix=file.suffix.lower()
   if suffix=='.pdf':
    reader=PdfReader(file)
    text='\n\n'.join(f'第 {i+1} 页\n{p.extract_text() or ""}' for i,p in enumerate(reader.pages))
   elif suffix in ('.docx','.pptx'):
    with zipfile.ZipFile(file) as archive:
     names=['word/document.xml'] if suffix=='.docx' else sorted([n for n in archive.namelist() if n.startswith('ppt/slides/slide') and n.endswith('.xml')],key=lambda n:int(Path(n).stem.replace('slide','')))
     sections=[]
     for n in names:
      node=ET.fromstring(archive.read(n))
      paragraphs=[''.join(t.text or '' for t in p.iter() if t.tag.rsplit('}',1)[-1]=='t') for p in node.iter() if p.tag.rsplit('}',1)[-1]=='p']
      sections.append({'locator':f'第 {len(sections)+1} 页','text':'\n'.join(x for x in paragraphs if x)})
     text='\n\n'.join(s['locator']+'\n'+s['text'] for s in sections)
   elif suffix=='.xmind':
    with zipfile.ZipFile(file) as archive:
     if 'content.json' in archive.namelist():
      def titles(value):
       if isinstance(value,dict):
        if isinstance(value.get('title'),str): yield value['title']
        for child in value.values(): yield from titles(child)
       elif isinstance(value,list):
        for child in value: yield from titles(child)
      text='\n'.join(titles(json.loads(archive.read('content.json'))))
     elif 'content.xml' in archive.namelist():
      text='\n'.join(n.text or '' for n in ET.fromstring(archive.read('content.xml')).iter() if n.tag.rsplit('}',1)[-1]=='title')
   elif suffix in ('.txt','.md','.csv'): text=file.read_text(errors='replace')
  except Exception as exc:
   parse_error='文件已加密，无法读取正文，请上传未加密版本' if 'decrypt' in str(exc).lower() else str(exc)[:150]
   errors.append({'file':str(relative),'error':str(exc)[:150]})
  docs.append({'id':'course-'+digest,'title':file.name,'subspace':'产品课程','subject':subject,'relative_path':str(relative),'space_name':'清华优优 AI Wiki','doc_type':'document','uri':'/product-courses/'+digest+'/'+file.name,'size':file.stat().st_size,'local_content':text,'sections':sections,'parse_status':'failed' if parse_error else 'completed' if text.strip() else 'pending','parse_error':parse_error,'chunk_count':len(sections) or max(1,(len(text)+1199)//1200),'analyzed':False,'imported_file':True})
(destination/'manifest.json').write_text(json.dumps({'documents':docs,'subjects':dict(Counter(d['subject'] for d in docs))},ensure_ascii=False))
(root/'docs/product-course-import.json').write_text(json.dumps({'count':len(docs),'subjects':dict(Counter(d['subject'] for d in docs)),'formats':dict(Counter(Path(d['title']).suffix.lower() for d in docs)),'text_extracted':sum(bool(d['local_content'].strip()) for d in docs),'errors':errors},ensure_ascii=False,indent=2))
print((root/'docs/product-course-import.json').read_text())
