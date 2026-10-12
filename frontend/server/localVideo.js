import { mkdtemp, writeFile, readFile, rm, stat } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'
import { execFile } from 'node:child_process'
import { promisify } from 'node:util'
const exec=promisify(execFile)
let compile
async function subtitleTool(){
 const source=resolve('../scripts/video_subtitles.swift'),binary=join(tmpdir(),'northstar-video-subtitles')
 if(!compile)compile=(async()=>{const [s,b]=await Promise.all([stat(source),stat(binary).catch(()=>null)]);if(!b||b.mtimeMs<s.mtimeMs)await exec('/usr/bin/swiftc',[source,'-o',binary],{timeout:60000});return binary})().catch(e=>{compile=null;throw e})
 return compile
}
export default function localVideo(){return {name:'northstar-local-video',configureServer(server){
 server.middlewares.use('/local-media/presentation',async(req,res)=>{
  if(req.method!=='POST'){res.statusCode=405;res.end();return}
  let directory
  try{
   const blocks=[];let size=0
   for await(const block of req){size+=block.length;if(size>500*1024*1024)throw new Error('文件最大500 MB');blocks.push(block)}
   directory=await mkdtemp(join(tmpdir(),'northstar-presentation-'))
   const suffix=['.ppt','.pptx','.xls'].includes(req.headers['x-file-extension'])?req.headers['x-file-extension']:'.pptx'
   const source=join(directory,'slides'+suffix);await writeFile(source,Buffer.concat(blocks))
   await exec('soffice',['-env:UserInstallation=file://'+join(directory,'profile'),'--headless','--convert-to','pdf','--outdir',directory,source],{timeout:120000,maxBuffer:1024*1024})
   const pdf=await readFile(join(directory,'slides.pdf'))
   res.setHeader('Content-Type','application/pdf');res.end(pdf)
  }catch(e){res.statusCode=422;res.setHeader('Content-Type','application/json');res.end(JSON.stringify({error:'幻灯片预览转换失败，请下载原文件查看或重试'}))}
  finally{if(directory)await rm(directory,{recursive:true,force:true})}
 })
 server.middlewares.use('/local-media/query',async(req,res)=>{
  try{
   const month=new URL(req.url,'http://localhost').searchParams.get('month')||'2026-09'
   if(!/^20\d{2}-(0[1-9]|1[0-2])$/.test(month))throw new Error('日期格式无效')
   const sql="SELECT COUNT(*) AS days, SUM(net) AS net, SUM(follows) AS follows, SUM(unfollows) AS unfollows FROM followers WHERE date >= '"+month+"-01' AND date < date('"+month+"-01','+1 month');"
   const {stdout}=await exec('/usr/bin/sqlite3',['-readonly','-json',resolve('../data/business.sqlite'),sql],{timeout:5000})
   res.setHeader('Content-Type','application/json');res.end(JSON.stringify({sql,result:JSON.parse(stdout)[0],mode:'live'}))
  }catch(e){res.statusCode=422;res.end(JSON.stringify({error:e.message}))}
 })
 server.middlewares.use('/local-media/websearch',async(req,res)=>{
  if(req.method!=='GET'){res.statusCode=405;res.end();return}
  const query=new URL(req.url,'http://localhost').searchParams.get('q')?.slice(0,200)||'2026 国庆 放假 收心'
  try{
   const response=await fetch('https://www.bing.com/search?format=rss&q='+encodeURIComponent(query+' site:gov.cn'),{signal:AbortSignal.timeout(8000)})
   if(!response.ok)throw new Error('搜索服务不可用')
   const xml=await response.text(),decode=s=>s.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g,'$1').replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/<[^>]+>/g,'')
   const items=[...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map(m=>{const read=tag=>decode(m[1].match(new RegExp('<'+tag+'>([\\s\\S]*?)</'+tag+'>'))?.[1]||'');return {title:read('title'),uri:read('link'),text:read('description')}}).filter(i=>{try{return new URL(i.uri).hostname.endsWith('.gov.cn')}catch{return false}}).slice(0,5)
   if(!items.length)throw new Error('未检索到可用的官方来源')
   res.setHeader('Content-Type','application/json');res.end(JSON.stringify({query,items,retrieved_at:new Date().toISOString(),mode:'live'}))
  }catch(e){res.statusCode=503;res.end(JSON.stringify({error:e.message}))}
 })
 server.middlewares.use('/local-media/transcribe',async(req,res)=>{
  if(req.method!=='POST'){res.statusCode=405;res.end();return}
  if(process.platform!=='darwin'){res.statusCode=503;res.end(JSON.stringify({error:'此环境没有配置视频字幕解析服务'}));return}
  let directory
  try{
   const blocks=[];let size=0
   for await(const block of req){size+=block.length;if(size>200*1024*1024)throw new Error('视频最大200 MB');blocks.push(block)}
   directory=await mkdtemp(join(tmpdir(),'northstar-media-'))
   const suffix=/^\.(mp4|mov|webm|m4v)$/i.test(req.headers['x-file-extension']||'')?req.headers['x-file-extension']:'.mp4'
   const path=join(directory,'video'+suffix);await writeFile(path,Buffer.concat(blocks))
   const binary=await subtitleTool()
   const {stdout}=await exec(binary,[path],{timeout:180000,maxBuffer:12*1024*1024})
   res.setHeader('Content-Type','application/json');res.end(stdout)
  }catch(e){res.statusCode=422;res.setHeader('Content-Type','application/json');res.end(JSON.stringify({error:e.killed?'字幕提取超时，请上传较短视频':e.message}))}
  finally{if(directory)await rm(directory,{recursive:true,force:true})}
 })
}}}
