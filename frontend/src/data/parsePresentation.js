import { unzipSync, strFromU8 } from 'fflate'
export async function parsePresentation(file) {
 const bytes=new Uint8Array(await file.arrayBuffer())
 const files=unzipSync(bytes,{filter:entry=>/^ppt\/(slides\/slide\d+|notesSlides\/notesSlide\d+)\.xml$/.test(entry.name) && entry.originalSize<10*1024*1024})
 if(Object.values(files).reduce((n,v)=>n+v.length,0)>200*1024*1024)throw new Error('文件展开后过大，请拆分')
 const names=Object.keys(files).filter(n=>/^ppt\/slides\/slide\d+\.xml$/.test(n)).sort((a,b)=>Number(a.match(/slide(\d+)/)[1])-Number(b.match(/slide(\d+)/)[1]))
 if(!names.length)throw new Error('没有找到幻灯片，请确认文件是有效的 PPTX')
 const read=bytes=>{const xml=new DOMParser().parseFromString(strFromU8(bytes),'application/xml');if(xml.getElementsByTagName('parsererror').length)throw new Error('幻灯片 XML 损坏');return [...xml.getElementsByTagNameNS('*','p')].map(p=>[...p.getElementsByTagNameNS('*','t')].map(t=>t.textContent).join('')).filter(Boolean).join('\n')}
 const sections=names.map((name,i)=>({locator:'第 '+(i+1)+' 页',text:read(files[name])}))
 const content=sections.map(s=>s.locator+'\n'+(s.text||'本页没有可提取的文字')).join('\n\n')
 if(content.length>200000)throw new Error('正文超过20万字，请拆分')
 return {local_content:content,sections,chunk_count:sections.length,analyzed:false}
}
export function extractKnowledgePage(doc){
 const sections=doc.sections?.filter(s=>s.text?.trim()) || (doc.local_content||'').split(/\n\s*\n/).filter(Boolean).map((text,i)=>({locator:'段落 '+(i+1),text}))
 if(!sections.length)throw new Error('当前文件没有可提取的文字，请先提供文本或OCR结果')
 const headings=[...new Set(sections.map(s=>s.text.split('\n').find(t=>t.trim())?.trim()).filter(Boolean))]
 return {subspace:doc.subspace,catalog:headings.slice(0,16),concepts:headings.filter(h=>h.length<=24).slice(0,8),entities:[],summary:sections.slice(0,3).map(s=>s.locator+'：'+s.text.slice(0,300)).join('\n\n'),framework:headings.map((h,i)=>(i+1)+'. '+h).join('\n'),body:sections.map(s=>s.locator+'\n'+s.text).join('\n\n'),hook:'',cta:'',nodes:[],edges:[],extraction_method:'原文提取与目录整理'}
}
export async function parseGuestFile(file) {
 if(/\.(mp4|mov|webm|m4v)$/i.test(file.name)){
  const base={media_type:'video',analyzed:false}
  try{
   const response=await fetch('/local-media/transcribe',{method:'POST',headers:{'Content-Type':'application/octet-stream','X-File-Extension':'.'+file.name.split('.').pop().toLowerCase()},body:file})
   if(!response.ok)throw new Error('视频已保存，字幕解析服务暂不可用，可补充字幕文本')
   const result=await response.json(),sections=[];let previous=''
   for(const frame of result.frames||[]){const line=frame.lines.filter(l=>l.y>.12&&l.y<.65&&l.confidence>.4).sort((a,b)=>b.y-a.y||a.x-b.x).map(l=>l.text).join(' / ');if(line&&line!==previous){sections.push({locator:Math.floor(frame.time/60)+':'+String(Math.floor(frame.time%60)).padStart(2,'0'),text:line});previous=line}}
   const subtitles=sections.map(s=>'['+s.locator+'] '+s.text).join('\n')
   const analysis=await fetch('/api/cue/video-analysis',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({title:file.name,duration:result.duration,frames:result.keyframes||[],subtitles:subtitles.slice(0,24000)})})
   const analyzed=await analysis.json()
   if(!analysis.ok)throw new Error(analyzed.detail||'视频理解失败，请重新解析')
   sections.push({locator:'AI 创意 · 视频脚本拆解',text:analyzed.answer})
   return {...base,duration:result.duration,sections,local_content:subtitles+'\n\n'+analyzed.answer,chunk_count:sections.length,parse_method:analyzed.method,parse_error:'',video_script:analyzed.answer}
  }catch(e){return {...base,local_content:'',parse_error:e.message}}
 }
 if(/\.(ppt|xls)$/i.test(file.name)){
  const response=await fetch('/local-media/presentation',{method:'POST',headers:{'Content-Type':'application/octet-stream','X-File-Extension':'.'+file.name.split('.').pop().toLowerCase()},body:file})
  if(!response.ok)throw new Error('旧版 Office 文件转换失败，请另存为 PPTX / XLSX')
  return parseGuestFile(new File([await response.blob()],file.name+'.pdf',{type:'application/pdf'}))
 }
 if(/\.pptx$/i.test(file.name))return parsePresentation(file)
 if(/\.pdf$/i.test(file.name)) {
  const pdfjs=await import('pdfjs-dist')
  const worker=await import('pdfjs-dist/build/pdf.worker.min.mjs?url')
  pdfjs.GlobalWorkerOptions.workerSrc=worker.default
  let pdf
  try{pdf=await pdfjs.getDocument({data:new Uint8Array(await file.arrayBuffer())}).promise}catch(e){if(e.name==='PasswordException')throw new Error('文件有密码锁，请上传未加密版本');throw e}
  try{
   if(pdf.numPages>500)throw new Error('页数超过500，请拆分')
   const sections=[]
   for(let i=1;i<=pdf.numPages;i++){const page=await pdf.getPage(i),text=await page.getTextContent();sections.push({locator:'第 '+i+' 页',text:text.items.map(t=>t.str||'').join(' ')})}
   return {sections,local_content:sections.map(s=>s.locator+'\n'+s.text).join('\n\n'),chunk_count:sections.length,analyzed:false}
  }finally{await pdf.destroy()}
 }
 if(/\.xlsx$/i.test(file.name)){
  const zip=unzipSync(new Uint8Array(await file.arrayBuffer()),{filter:e=>/^xl\/(workbook.xml|_rels\/workbook.xml.rels|sharedStrings.xml|worksheets\/sheet\d+.xml)$/.test(e.name)&&e.originalSize<20*1024*1024})
  const xml=name=>zip[name]?new DOMParser().parseFromString(strFromU8(zip[name]),'application/xml'):null
  const strings=[...(xml('xl/sharedStrings.xml')?.getElementsByTagNameNS('*','si')||[])].map(n=>[...n.getElementsByTagNameNS('*','t')].map(t=>t.textContent).join(''))
  const names=[...(xml('xl/workbook.xml')?.getElementsByTagNameNS('*','sheet')||[])].map(s=>s.getAttribute('name'))
  const paths=Object.keys(zip).filter(p=>/^xl\/worksheets\/sheet\d+.xml$/.test(p)).sort((a,b)=>Number(a.match(/sheet(\d+)/)[1])-Number(b.match(/sheet(\d+)/)[1]))
  if(!paths.length)throw new Error('没有找到有效工作表')
  const sheets=paths.map((path,i)=>({name:names[i]||'Sheet'+(i+1),rows:[...xml(path).getElementsByTagNameNS('*','row')].map(r=>{const row=[];for(const cell of r.getElementsByTagNameNS('*','c')){const ref=cell.getAttribute('r')||'A1';let col=0;for(const c of ref.replace(/\d/g,''))col=col*26+c.charCodeAt(0)-64;const value=cell.getElementsByTagNameNS('*','v')[0]?.textContent||'';const type=cell.getAttribute('t');row[col-1]=type==='s'?strings[Number(value)]||'':type==='inlineStr'?[...cell.getElementsByTagNameNS('*','t')].map(t=>t.textContent).join(''):type==='b'?value==='1':value}return row})}))
  const sections=sheets.flatMap(s=>s.rows.map((r,i)=>({locator:s.name+' · 第 '+(i+1)+' 行',text:r.map(v=>v??'').join(' | ')})))
  return {sheets,sections,local_content:sections.map(s=>s.locator+'\n'+s.text).join('\n'),chunk_count:sections.length,analyzed:false}
 }
 if(/\.docx$/i.test(file.name)) {
  const files=unzipSync(new Uint8Array(await file.arrayBuffer()),{filter:e=>e.name==='word/document.xml' && e.originalSize<20*1024*1024})
  if(!files['word/document.xml'])throw new Error('Word文件损坏')
  const xml=new DOMParser().parseFromString(strFromU8(files['word/document.xml']),'application/xml')
  const local_content=[...xml.getElementsByTagNameNS('*','p')].map(p=>[...p.getElementsByTagNameNS('*','t')].map(t=>t.textContent).join('')).join('\n')
  return {local_content,analyzed:false}
 }
 if(/\.(csv|tsv)$/i.test(file.name)){const text=await file.text();const delimiter=/\.tsv$/i.test(file.name)?'\t':',';const rows=[];let row=[],cell='',quoted=false;for(let i=0;i<text.length;i++){const c=text[i];if(c==='"'){if(quoted&&text[i+1]==='"'){cell+='"';i++}else quoted=!quoted}else if(c===delimiter&&!quoted){row.push(cell);cell=''}else if((c==='\n'||c==='\r')&&!quoted){if(c==='\r'&&text[i+1]==='\n')i++;row.push(cell);rows.push(row);row=[];cell=''}else cell+=c}if(cell||row.length){row.push(cell);rows.push(row)}return {local_content:text,sheets:[{name:'CSV',rows}],analyzed:false}}
 return {local_content:/\.(txt|md|srt|vtt)$/i.test(file.name)?await file.text():'',analyzed:false}
}
