<script setup>
import KnowledgeGraph from '../KnowledgeGraph.vue'
import SpreadsheetPreview from '../SpreadsheetPreview.vue'
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { knowledgeList, knowledgeDetail, knowledgeUpload, knowledgeText, knowledgeAnalyze, knowledgeDelete, knowledgeUpdate, knowledgeCreateSpace } from '../../api'
import { saveReplacement, loadReplacements } from '../../data/knowledgeLocalFiles'
import PresentationPreview from '../PresentationPreview.vue'
import { parseGuestFile, extractKnowledgePage } from '../../data/parsePresentation'
import { store, toast, loadCourseDocuments, loadBusinessDocuments } from '../../store'

const DEMO_DOCS = [
 {id:'demo-month-script',title:'11月短视频脚本.pdf',subspace:'短视频脚本',space_name:'清华优优 AI Wiki',doc_type:'document',chunk_count:8,analyzed:true,uri:'/demo-docs/11月短视频脚本.pdf'},
 {id:'demo-live-review',title:'优优账号X直播记录【咨询+精讲课产品销售】.pdf',subspace:'直播复盘',space_name:'清华优优 AI Wiki',doc_type:'document',chunk_count:6,analyzed:true,uri:'/demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf'},
 {id:'demo-live-sop',title:'直播SOP.pdf',subspace:'内容生产',space_name:'清华优优 AI Wiki',doc_type:'document',chunk_count:7,analyzed:true,uri:'/demo-docs/直播SOP.pdf'},
 {id:'demo-product-script',title:'精讲课塑品脚本.pdf',subspace:'转化变现',space_name:'清华优优 AI Wiki',doc_type:'document',chunk_count:5,analyzed:true,uri:'/demo-docs/精讲课塑品脚本.pdf'},
 {id:'demo-wang',title:'汪舅舅-教育内容脚本转写.txt',subspace:'竞品研究',space_name:'清华优优 AI Wiki',doc_type:'document',chunk_count:4,analyzed:true,uri:'/demo-docs/汪舅舅-教育内容脚本转写-演示.txt'},
 {id:'demo-xueli-video',source_group:'xueli-vocabulary',title:'雪梨老师-英语背单词开窍.mp4',subspace:'竞品研究',space_name:'清华优优 AI Wiki',doc_type:'document',chunk_count:4,analyzed:true,uri:'/competitor-videos/xueli-vocabulary.mp4',media_type:'video',duration:5.35,parse_method:'录屏字幕核验',local_content:'[0:00–0:05] 第195集：只用这1招，让你背单词突然开窍。\n画面可见：一找二切三拼；先找出元音字母（a e i o u）；元音前再找辅音。\n录屏长5.35秒，仅保留这一片段已核实的字幕。',parse_status:'completed'},
 {id:'demo-xueli',source_group:'xueli-vocabulary',title:'雪梨老师-英语背单词开窍.txt',subspace:'竞品研究',space_name:'清华优优 AI Wiki',doc_type:'transcript',chunk_count:1,analyzed:false,uri:'/demo-docs/雪梨老师-英语背单词开窍.txt'}
]
const DEMO_SOURCES = [
 {id:'demo-source-1',name:'11月短视频脚本.pdf',uri:'已同步 · 短视频脚本',source_type:'upload',space_name:'清华优优 AI Wiki',status:'ready',document_count:1},
 {id:'demo-source-2',name:'优优账号X直播记录【咨询+精讲课产品销售】.pdf',uri:'已同步 · 直播复盘',source_type:'upload',space_name:'清华优优 AI Wiki',status:'ready',document_count:1},
 {id:'demo-source-3',name:'直播SOP.pdf',uri:'已同步 · 内容生产',source_type:'upload',space_name:'清华优优 AI Wiki',status:'completed',document_count:1},
 {id:'demo-source-4',name:'精讲课塑品脚本.pdf',uri:'已同步 · 转化变现',source_type:'upload',space_name:'清华优优 AI Wiki',status:'ready',document_count:1},
 {id:'demo-source-5',name:'竞品脚本转写',uri:'已同步 · 竞品研究',source_type:'paste',space_name:'清华优优 AI Wiki',status:'completed',document_count:2}
]
const DEMO_GRAPH = {document_count:6,nodes:[{id:'g1',label:'月考复盘',kind:'概念'},{id:'g2',label:'错题分类',kind:'方法'},{id:'g3',label:'家长沟通',kind:'场景'},{id:'g4',label:'直播答疑',kind:'内容'},{id:'g5',label:'期中复习',kind:'选题'},{id:'g6',label:'精讲课转化',kind:'方法'},{id:'g7',label:'竞品钩子',kind:'概念'}],edges:[{source:'g1',target:'g2'},{source:'g1',target:'g3'},{source:'g2',target:'g5'},{source:'g3',target:'g4'},{source:'g4',target:'g6'},{source:'g7',target:'g1'}]}
const DEMO_DETAIL = {
 'demo-month-script':{body:'11 月可讲内容已按家长高频焦虑整理：月考后失分点、期中前复习节奏、家长如何看懂月考卷。每条可拆为 60 秒短视频，并在直播答疑承接评论区问题。',subspace:'短视频脚本'},
 'demo-live-review':{body:'这场咨询与精讲课产品销售直播中，高频问题集中在学习节奏、错题复盘和课程匹配。建议以问题收集、方法展示、案例证明、福利转化四段式复用。',subspace:'直播复盘'},
 'demo-live-sop':{body:'直播 SOP 覆盖预热、开场互动、核心讲解、评论区答疑和收尾转化。排期时可直接引用对应环节，形成选题到开播的执行清单。',subspace:'内容生产'},
 'demo-product-script':{body:'精讲课塑品脚本围绕目标人群、学习痛点、课程价值和行动引导展开，可用于直播中的产品介绍与短视频中的转化承接。',subspace:'转化变现'},
 'demo-wang':{body:'内容转写用于拆解教育内容的开场钩子、场景共鸣和方法交付结构，仅供内部竞品研究内部使用。',subspace:'竞品研究'},
 'demo-xueli':{body:'内容转写用于拆解英语学习内容的选题表达、步骤讲解和评论互动设计，仅供内部竞品研究内部使用。',subspace:'竞品研究'}
}
function demoDetail(id) { const d=DEMO_DOCS.find(x=>x.id===id); const info=DEMO_DETAIL[id]||{body:d.local_content||'',subspace:d.subspace}; return {...d,source:'已入库资料',source_name:'清华优优',chunks:[{id:id+'-1',position:1,locator:d.title,text:info.body}],analysis:{subspace:info.subspace,catalog:['选题','方法','行动'],concepts:['月考复盘','学习节奏','家长沟通'],entities:[{name:'清华优优',type:'内容账号'}],summary:info.body,framework:'诊断 → 拆解 → 执行 → 复盘',hook:'先问家长最焦虑的具体问题。',body:info.body,cta:'评论区领取本周行动卡。',nodes:[{id:'d1',label:'月考复盘'},{id:'d2',label:'内容选题'}],edges:[{source:'d1',target:'d2'}]}} }

const DEMO_SUBSPACES=[{id:'all',name:'全部文档',desc:'当前知识空间的全部资料'},{id:'经营数据',name:'经营数据',desc:'粉丝、视频、直播与成交报表'},{id:'短视频脚本',name:'短视频脚本',desc:'选题、钩子与口播稿'},{id:'直播复盘',name:'直播复盘',desc:'直播数据与画面复盘'},{id:'内容生产',name:'内容生产',desc:'排期、SOP 与执行清单'},{id:'转化变现',name:'转化变现',desc:'课程塑品与成交话术'},{id:'竞品研究',name:'竞品研究',desc:'竞品账号与爆款拆解'}]

const demoSubspaces=ref([...DEMO_SUBSPACES,{id:'产品课程',name:'产品课程',desc:'数学、物理、英语、语文课程资料'}])
const activeSubspace=ref('all'), courseSubject=ref('全部')
function isLocalDocument(id){return /^(demo-|local-|shared-save-|course-|business-)/.test(String(id))}
function dropLocalDocuments(ids){documents.value=documents.value.filter(doc=>!ids.includes(doc.id));store.demoKnowledgeDocuments=store.demoKnowledgeDocuments.filter(doc=>!ids.includes(doc.id));store.courseDocuments=store.courseDocuments.filter(doc=>!ids.includes(doc.id));store.businessDocuments=store.businessDocuments.filter(doc=>!ids.includes(doc.id))}

const page = ref('space'), documents = ref([]), spaces = ref([]), sources = ref([]), syncJobs = ref([]), network = ref({ nodes: [], edges: [] })
const selected = ref(null), query = ref(''), busy = ref(false), error = ref(''), ready = ref(false)
const mode = ref('file'), queue = ref([]), dragging = ref(false), fileInput = ref(null), title = ref(''), text = ref(''), tab = ref('chunks')
const newSpace = ref('')
const rawText=ref(''), rawLoading=ref(false), indexMode=ref('index')
const uploadPosition=ref({x:0,y:0})
let uploadDrag=null
function beginUploadMove(event){
  if(event.target.closest('button,input,select,textarea')) return
  event.preventDefault()
  uploadDrag={x:event.clientX,y:event.clientY,px:uploadPosition.value.x,py:uploadPosition.value.y}
  window.addEventListener('pointermove',moveUpload)
  window.addEventListener('pointerup',endUploadMove)
}
function moveUpload(event){if(uploadDrag)uploadPosition.value={x:uploadDrag.px+event.clientX-uploadDrag.x,y:uploadDrag.py+event.clientY-uploadDrag.y}}
function endUploadMove(){uploadDrag=null;window.removeEventListener('pointermove',moveUpload);window.removeEventListener('pointerup',endUploadMove)}
onUnmounted(endUploadMove)
const selectedIsPdf=computed(()=>/\.pdf(?:$|[?#])/i.test(selected.value?.uri||'')||selected.value?.file_type==='application/pdf')
const activityItems=computed(()=>catalogDocuments.value.map(doc=>({id:doc.id,title:doc.title,action:doc.media_type==='video'?'视频上传':(doc.doc_type==='transcript'||doc.subspace==='竞品研究')?'竞品转写':!doc.uri?'粘贴文本':'导入文件',kind:doc.media_type==='video'?'video':(doc.doc_type==='transcript'||doc.subspace==='竞品研究')?'transcript':!doc.uri?'text':'file',status:doc.parse_status||'completed',message:doc.parse_error,subspace:doc.subspace})))
const localSyncJobs=computed(()=>activityItems.value.map(doc=>({id:doc.id,source_name:doc.title,source_type:doc.action,status:doc.status,stage:doc.status==='failed'?'解析失败':doc.status==='pending'?'原件已保存，待文本解析':'已入库',progress:doc.status==='completed'?100:0,message:doc.message||''})))
const syncFilter=ref('all')
const displayedSyncJobs=computed(()=>[...syncJobs.value,...localSyncJobs.value].sort((a,b)=>({failed:0,pending:1}[a.status]??2)-({failed:0,pending:1}[b.status]??2)))
const filteredSyncJobs=computed(()=>displayedSyncJobs.value.filter(job=>syncFilter.value==='all'||job.status===syncFilter.value))
const syncFailed=computed(()=>displayedSyncJobs.value.some(job=>job.status==='failed') || queue.value.some(item=>item.status==='failed'))
const retryInput=ref(null),retryDocument=ref(null)
function retryFile(job){retryDocument.value=job.id;retryInput.value.click()}
async function replaceFailedFile(event){const file=event.target.files[0];event.target.value='';if(!file)return;run(async()=>{const parsed=await parseGuestFile(file);if(!parsed.local_content?.trim())throw new Error('没有提取到文字，请提供可读取的文件');const doc=catalogDocuments.value.find(d=>d.id===retryDocument.value);if(!doc)return;await saveReplacement(doc.id,file,parsed);Object.assign(doc,parsed,{uri:URL.createObjectURL(file),parse_status:'completed',parse_error:'',title:file.name});open(doc.id);toast('重新上传并解析成功')})}
watch(selected,async doc=>{
  rawText.value='';rawLoading.value=false
  if(!doc||doc.local_content||!doc.uri||!/\.(txt|md|csv|tsv|srt|vtt)(?:$|[?#])/i.test(doc.uri))return
  rawLoading.value=true
  try{const response=await fetch(doc.uri);if(!response.ok)throw new Error('无法读取原文件');const content=await response.text();if(selected.value?.id===doc.id)rawText.value=content}catch(e){error.value=e.message}finally{rawLoading.value=false}
})
const uploadOpen=ref(false), spaceManagerOpen=ref(false), subspaceEditor=ref(null), subspaceDraft=ref('')
const selectedIds = ref(new Set()), batchName = ref('')
const nav = [['space','知识空间'],['documents','文档'],['sources','数据源'],['sync','同步状态'],['graph','知识图谱']]
const statusLabels = { pending:'待上传', uploading:'正在解析', done:'已入库', failed:'失败', invalid:'无法上传', ready:'已同步', completed:'已完成', running:'进行中' }
const navHelp={documents:'文档是具体资料，如一份Excel、CSV、视频或脚本。这里查看原文件、解析正文与处理状态。',sources:'数据源是资料的来源，如上传文件、课程导入目录或连接的数据表。一个来源可以包含多份文档。'}
const sourceLabels = { upload:'文件 / 导入目录', paste:'粘贴文本', video:'视频' }

function addFiles(files) {
  if (busy.value) return
  const incoming = Array.from(files)
  if (queue.value.length + incoming.length > 50) { error.value = '最多选择 50 个文件'; return }
  for (const file of incoming) {
    const key = `${file.name}:${file.size}:${file.lastModified}`
    if (queue.value.some(item => item.key === key)) continue
    const isVideo=/\.(mp4|mov|webm|m4v)$/i.test(file.name)
    const invalid = !/\.(pdf|docx|xlsx|pptx|txt|md|csv|tsv|srt|vtt|mp4|mov|webm|m4v)$/i.test(file.name) ? '不支持此格式' : file.size > (isVideo?200:50) * 1024 * 1024 ? (isVideo?'视频超过 200 MB':'超过 50 MB') : ''
    queue.value.push({ key, file, status: invalid ? 'invalid' : 'pending', message: invalid })
  }
}
function chooseFiles(e) { addFiles(e.target.files); e.target.value = '' }
function dropFiles(e) { dragging.value = false; addFiles(e.dataTransfer.files) }
const canUpload = computed(() => queue.value.some(i => ['pending','failed'].includes(i.status)))
const progress = computed(() => `${queue.value.filter(i => i.status === 'done').length} / ${queue.value.length}`)
const spacePanel = ref('documents')
const catalogDocuments = computed(() => [...(documents.value.length ? documents.value : DEMO_DOCS), ...(store.demoKnowledgeDocuments || []), ...(store.courseDocuments || []), ...(store.businessDocuments || [])])
watch([()=>store.wikiDocumentRequest,catalogDocuments],([request,docs])=>{
 if(!request)return
 const doc=docs.find(doc=>request.id&&doc.id===request.id)||docs.find(doc=>doc.title===request.title)||docs.find(doc=>request.uri&&doc.uri===request.uri)
 if(!doc)return
 page.value='space';spacePanel.value='documents';indexMode.value='index';activeSubspace.value=doc.subspace||'all';courseSubject.value='全部';query.value='';open(doc.id);tab.value='chunks';store.wikiDocumentRequest=null
},{flush:'post'})
const catalogSources = computed(() => {
 const groups=new Map()
 for(const doc of catalogDocuments.value){
  const key=doc.source_group||(doc.imported_file&&doc.subject?'course-'+doc.subject:doc.id)
  if(!groups.has(key))groups.set(key,{id:key,name:doc.imported_file&&doc.subject?doc.subject+'课程导入目录':doc.title,uri:doc.imported_file&&doc.subject?'精讲课 / '+doc.subject:doc.uri||'粘贴文本',source_type:doc.media_type==='video'?'video':doc.uri?'upload':'paste',space_name:doc.space_name,document_count:0,status:'completed',titles:[]})
  const item=groups.get(key);item.document_count++;item.titles.push(doc.title);if(doc.parse_status==='failed')item.status='failed';else if(doc.parse_status==='pending'&&item.status!=='failed')item.status='pending'
 }
 return [...groups.values()]
})
const catalogGraph = computed(() => {
 const base=network.value.nodes?.length?network.value:DEMO_GRAPH
 const graph={...base,nodes:[...(base.nodes||[])],edges:[...(base.edges||[])]}
 const doc=catalogDocuments.value.find(d=>d.title==='英语课程ppt.pptx' && d.sections?.some(section=>section.text.includes('1+1+1')))
 if(doc){
  const section=doc.sections.find(section=>section.text.includes('1+1+1的背诵方法'))
  if(section){
   const id='course-method-111',course='course-english-method-source'
   if(!graph.nodes.some(n=>n.label==='1+1+1复习法'))graph.nodes.push({id,label:'1+1+1复习法',kind:'实体',description:'先背诵并录音，睡前听录音，第二天起床后再背诵。'})
   const entity=graph.nodes.find(n=>n.label==='1+1+1复习法')
   if(!graph.nodes.some(n=>n.id===course))graph.nodes.push({id:course,label:'英语课程',kind:'课程'})
   graph.edges.push({source:course,target:entity.id,relation:'介绍背诵方法',quote:section.text,document_id:doc.id,document_title:doc.title,chunk:doc.sections.indexOf(section)+1})
  }
 }
 return graph
})
const conceptItems = computed(() => catalogGraph.value.nodes.map(node => ({id:`concept-${node.id}`,title:node.label,subspace:node.kind,doc_type:'concept',chunk_count:catalogGraph.value.edges.filter(edge=>edge.source===node.id||edge.target===node.id).length,analyzed:true,node})))
const sourceItems = computed(() => catalogSources.value.map(source => ({id:`source-${source.id}`,title:source.name,subspace:`${sourceLabels[source.source_type]||source.source_type} · ${source.document_count} 份文档`,doc_type:'source',chunk_count:source.document_count,analyzed:true,source})))
const panelItems = computed(() => spacePanel.value==='concepts' ? conceptItems.value : spacePanel.value==='sources' ? sourceItems.value : catalogDocuments.value)
const visible = computed(() => panelItems.value.filter(d => (spacePanel.value!=='documents'||activeSubspace.value==='all'||d.subspace===activeSubspace.value) && (activeSubspace.value!=='产品课程'||courseSubject.value==='全部'||d.subject===courseSubject.value) && (d.title+' '+(d.relative_path||'')).toLowerCase().includes(query.value.toLowerCase())))
watch([visible, selected, indexMode, page], ([items, current, view, location]) => {
  if(location==='space' && view==='index' && items.length && !items.some(item=>item.id===current?.id)) open(items[0].id)
}, {immediate:true,flush:'post'})
const currentSubspace = computed(() => demoSubspaces.value.find(x=>x.id===activeSubspace.value)||demoSubspaces.value[0])
const panelTitle = computed(() => spacePanel.value==='concepts' ? '实体 / 概念' : spacePanel.value==='sources' ? '数据源' : currentSubspace.value.name)
function subspaceCount(id){return id==='all'?catalogDocuments.value.length:catalogDocuments.value.filter(d=>d.subspace===id).length}
function openSpaceManager(){ spaceManagerOpen.value=true; subspaceEditor.value=null; subspaceDraft.value='' }
function startSubspaceEdit(sub){ subspaceEditor.value=sub; subspaceDraft.value=sub?.name||'' }
function saveSubspace(){ const name=subspaceDraft.value.trim(); if(!name) return; if(subspaceEditor.value){ const target=demoSubspaces.value.find(item=>item.id===subspaceEditor.value.id); if(target){ target.name=name; target.desc='自定义知识子库'; if(activeSubspace.value===target.id) activeSubspace.value=target.id } } else { const id=`local-subspace-${Date.now()}`; demoSubspaces.value.push({id,name,desc:'自定义知识子库'}); activeSubspace.value=id } subspaceEditor.value=null; subspaceDraft.value='' }
function deleteSubspace(sub){ if(sub.id==='all') return; if(!window.confirm(`删除子库「${sub.name}」？资料不会被删除，会回到全部文档。`)) return; demoSubspaces.value=demoSubspaces.value.filter(item=>item.id!==sub.id); if(activeSubspace.value===sub.id) activeSubspace.value='all' }
function focusPanel(){ window.setTimeout(() => document.querySelector('.kb-docs')?.scrollIntoView({ behavior:'smooth', block:'start' }), 0) }
const activeNav = computed(() => page.value==='space' ? (spacePanel.value==='documents' ? 'space' : spacePanel.value==='sources' ? 'sources' : 'concepts') : page.value)
function openDocumentList() { page.value='space'; spacePanel.value='documents'; activeSubspace.value='all'; selected.value=null; focusPanel() }
function openConceptList() { page.value='space'; spacePanel.value='concepts'; selected.value=null; focusPanel() }
function openSourceList() { page.value='space'; spacePanel.value='sources'; selected.value=null; focusPanel() }
function selectPage(id) { if (id === 'space') { page.value='space'; spacePanel.value='documents'; selected.value=null; return } if (id === 'documents') return openDocumentList(); if (id === 'sources') return openSourceList(); if (id === 'graph') { page.value='graph'; selected.value=null; return } page.value=id }
const allVisibleSelected = computed(() => visible.value.length > 0 && visible.value.every(doc => selectedIds.value.has(doc.id)))
const activeSpace = computed(() => spaces.value[0] || null)
function layoutNodes(nodes, cx=380, cy=230, rx=270, ry=175) { return (nodes || []).map((n,i,a) => ({...n,x:cx+rx*Math.cos(i*2*Math.PI/Math.max(a.length,1)),y:cy+ry*Math.sin(i*2*Math.PI/Math.max(a.length,1))})) }
const graphNodes = computed(() => layoutNodes(catalogGraph.value.nodes))
const graphPositions = computed(() => Object.fromEntries(graphNodes.value.map(n => [n.id,n])))
const docGraph = computed(() => layoutNodes(selected.value?.analysis?.nodes,360,220,240,165))
const docPositions = computed(() => Object.fromEntries(docGraph.value.map(n => [n.id,n])))

async function load() {
  const r = await knowledgeList()
  documents.value=[...DEMO_DOCS,...(r.documents||[]).filter(d=>!DEMO_DOCS.some(demo=>demo.id===d.id))]; spaces.value=r.spaces||[]; sources.value=[...DEMO_SOURCES,...(r.sources||[]).filter(x=>!DEMO_SOURCES.some(demo=>demo.id===x.id))]; syncJobs.value=r.sync_jobs||[]; network.value=(r.graph&&r.graph.nodes&&r.graph.nodes.length)?r.graph:DEMO_GRAPH
  ready.value=r.ai_ready
}
async function run(fn) { if (busy.value) return; busy.value=true; error.value=''; try { await fn() } catch(e) { error.value=e.message } finally { busy.value=false } }
async function refresh() { selected.value=null; documents.value=DEMO_DOCS; sources.value=DEMO_SOURCES; network.value=DEMO_GRAPH; error.value=''; try { await Promise.all([loadCourseDocuments(),loadBusinessDocuments()]);const replacements=await loadReplacements();for(const item of replacements){const doc=catalogDocuments.value.find(d=>d.id===item.id);if(doc)Object.assign(doc,item);else store.demoKnowledgeDocuments.push({...item,subspace:item.subspace||'竞品研究',space_name:'清华优优 AI Wiki',doc_type:'document',chunk_count:item.sections?.length||1})} } catch(e) { error.value=e.message }; if (store.authUser) await run(load) }
onMounted(refresh); watch(() => store.authUser?.id, refresh)
function open(id) {
  indexMode.value='index';error.value=''
  if (spacePanel.value==='concepts') { const item=conceptItems.value.find(x=>x.id===id); selected.value={...item,space_name:'清华优优 AI Wiki',source_name:'知识关系',chunks:[{id:`${id}-1`,position:1,locator:item.subspace,text:item.node?.description||`「${item.title}」是清华优优内容资产中的${item.subspace}，可查看关联原文。`}],analysis:{subspace:'实体 / 概念',catalog:['内容资产','关联文档'],concepts:[item.title],entities:[{name:item.title,type:item.subspace}],summary:item.node?.description||`${item.title} 已关联 ${item.chunk_count} 条知识关系。`,framework:'概念 → 内容场景 → 执行动作',hook:'从家长真实场景切入。',body:'结合已有文档形成可复用内容。',cta:'加入下一次脚本或排期。',nodes:[{id:'c1',label:item.title}],edges:[]}}; tab.value='analysis'; return }
  if (spacePanel.value==='sources') { const item=sourceItems.value.find(x=>x.id===id);const source=item.source;selected.value={...item,space_name:source.space_name,source_name:source.uri,uri:source.source_type==='video'?source.uri:null,chunks:[{id:id+'-1',position:1,locator:'来源资料目录',text:source.titles.join('\n')}],local_content:'来源：'+source.uri+'\n状态：'+(statusLabels[source.status]||source.status)+'\n文档数：'+source.document_count+'\n\n'+source.titles.join('\n'),analysis:null};tab.value='chunks';return }
  const local=catalogDocuments.value.find(x=>x.id===id)
  if(local?.imported_file) { selected.value={...local,source_name:local.subject,chunks:local.sections?.length?local.sections.map((section,i)=>({id:id+'-'+i,position:i+1,...section})):[{id:id+'-1',position:1,locator:local.relative_path,text:local.local_content}],analysis:local.analysis||null}; tab.value='chunks'; return }
  if(local?.local_content || local?.uri?.startsWith('blob:')) { selected.value={...local,source:'本地保存',source_name:'清华优优',chunks:[{id:id+'-1',position:1,locator:local.title,text:local.local_content||''}],analysis:{subspace:local.subspace,catalog:['脚本','优化稿'],concepts:['脚本优化'],entities:[],summary:local.local_content,framework:'钩子 → 场景 → 方法 → CTA',hook:'可复用脚本钩子。',body:local.local_content,cta:'加入内容排期。',nodes:[],edges:[]}}; tab.value='chunks'; return }
  if(String(id).startsWith('demo-') || String(id).startsWith('local-') || String(id).startsWith('cue-')) { selected.value=demoDetail(id); tab.value='chunks'; return } run(async()=>{ selected.value=await knowledgeDetail(id); tab.value='chunks' }) }
function fallbackTitle(prefix,index=0) { const d=new Date(); return `${prefix}${index?` ${index}`:''} · ${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}` }

function upload() { run(async()=>{
  if (!store.authUser) {
    const subspace=currentSubspace.value.name==='全部文档'?'短视频脚本':currentSubspace.value.name
    if (mode.value==='file') {
      if (!canUpload.value) throw new Error('请选择可上传的文件')
      for (const item of queue.value) {
        if (!['pending','failed'].includes(item.status)) continue
        item.status='uploading'
        try {
          const parsed=await parseGuestFile(item.file)
          store.demoKnowledgeDocuments.unshift({id:'local-'+Date.now()+'-'+item.file.name,title:item.file.name,subspace,space_name:'清华优优 AI Wiki',doc_type:'document',chunk_count:1,uri:URL.createObjectURL(item.file),file_type:item.file.type,parse_status:parsed.local_content?'completed':'pending',...parsed})
          await saveReplacement(store.demoKnowledgeDocuments[0].id,item.file,{...parsed,subspace,space_name:'清华优优 AI Wiki'});item.status='done'
        } catch(e){item.status='failed';item.message=e.message;const id='local-failed-'+item.key;if(!store.demoKnowledgeDocuments.some(doc=>doc.id===id))store.demoKnowledgeDocuments.unshift({id,title:item.file.name,subspace,space_name:'清华优优 AI Wiki',doc_type:'document',uri:URL.createObjectURL(item.file),file_type:item.file.type,parse_status:'failed',parse_error:e.message,chunk_count:0})}

      }
      if(queue.value.some(item=>item.status==='failed'))throw new Error('部分文件未解析成功，失败原因见文件列表，可重试')
      queue.value=[]
    } else {
      if (!text.value.trim()) throw new Error('请粘贴资料正文')
      const docTitle=title.value.trim()||fallbackTitle(mode.value==='transcript'?'内容转写':'粘贴资料')
      const doc={id:`local-${Date.now()}`,title:docTitle,subspace,space_name:'清华优优 AI Wiki',doc_type:mode.value==='transcript'?'transcript':'document',chunk_count:Math.max(1,Math.ceil(text.value.length/300)),analyzed:true,local_content:text.value.trim()}
      store.demoKnowledgeDocuments.unshift(doc); selected.value={...doc,chunks:[{id:doc.id+'-1',position:1,locator:doc.title,text:doc.local_content}],analysis:{subspace,catalog:['资料','内容'],concepts:[],entities:[],summary:doc.local_content,framework:'导入 → 拆解 → 应用',hook:'从资料中提取可执行表达。',body:doc.local_content,cta:'用于下一次脚本或排期。',nodes:[],edges:[]}}
    }
    tab.value='chunks'; text.value=''; title.value=''; uploadOpen.value=false; toast('资料已加入知识库'); return
  }
  if (mode.value==='file') {
    if (!canUpload.value) throw new Error('请选择可上传的文件')
    for (const item of queue.value) { if (!['pending','failed'].includes(item.status)) continue; item.status='uploading'; try { selected.value=await knowledgeUpload(item.file); item.status='done' } catch(e) { item.status='failed'; item.message=e.message } }
  } else {
    if (!text.value.trim()) throw new Error('请粘贴资料正文')
    const transcript=mode.value==='transcript'
    selected.value=await knowledgeText({title:title.value.trim()||fallbackTitle(transcript?'竞品转写':'粘贴资料'),text:text.value.trim(),source:transcript?'竞品视频转写文本':'粘贴文本'})
  }
  await load(); tab.value='chunks'; text.value=''; title.value=''; uploadOpen.value=false
}) }
function analyze() { run(async()=>{
 if(isLocalDocument(selected.value.id)) {
   const doc=selected.value
   doc.analysis=extractKnowledgePage({...doc,local_content:doc.local_content||rawText.value})
   doc.analyzed=true
   const original=catalogDocuments.value.find(item=>item.id===doc.id)
   if(original){original.analysis=doc.analysis;original.analyzed=true}
   tab.value='analysis';return
 }
 selected.value=await knowledgeAnalyze(selected.value.id);tab.value='analysis';await load()
}) }

function remove() { if (!selected.value || !window.confirm('删除这份文档和所有切片？')) return; if (isLocalDocument(selected.value.id)) { dropLocalDocuments([selected.value.id]); selected.value=null; toast('文档已删除'); return } run(async()=>{ await knowledgeDelete(selected.value.id); selected.value=null; await load() }) }
function removeDocument(id, title) { if (!window.confirm(`删除《${title}》及其所有切片？`)) return; if (isLocalDocument(id)) { dropLocalDocuments([id]); if (selected.value?.id===id) selected.value=null; toast('文档已删除'); return } run(async()=>{ await knowledgeDelete(id); if (selected.value?.id===id) selected.value=null; await load(); toast('文档已删除') }) }
function toggleDocument(id) { const next=new Set(selectedIds.value); next.has(id)?next.delete(id):next.add(id); selectedIds.value=next }
function toggleAllVisible() { selectedIds.value=allVisibleSelected.value ? new Set() : new Set(visible.value.map(doc=>doc.id)) }
function clearSelection() { selectedIds.value=new Set(); batchName.value='' }
function deleteSelected() { const ids=[...selectedIds.value]; if (!ids.length || !window.confirm(`删除选中的 ${ids.length} 份文档及其所有切片？`)) return; const demoIds=ids.filter(isLocalDocument), remoteIds=ids.filter(id=>!isLocalDocument(id)); if (demoIds.length) dropLocalDocuments(demoIds); if (remoteIds.length) run(async()=>{ await Promise.all(remoteIds.map(id=>knowledgeDelete(id))); await load() }); if (selected.value&&ids.includes(selected.value.id)) selected.value=null; clearSelection(); toast(`已删除 ${ids.length} 份文档`) }
function renameSelected() { const ids=[...selectedIds.value], name=batchName.value.trim(); if (!ids.length || !name) { error.value='请先选择文档并输入新名称或名称前缀'; return } const demoIds=ids.filter(isLocalDocument), remoteIds=ids.filter(id=>!isLocalDocument(id)); demoIds.forEach((id,index)=>{ const doc=catalogDocuments.value.find(item=>item.id===id); if (doc) doc.title=ids.length===1?name:`${name} · ${index+1}` }); if (remoteIds.length) run(async()=>{ await Promise.all(remoteIds.map((id,index)=>knowledgeUpdate(id,{title:ids.length===1?name:`${name} · ${index+1}`}))); await load() }); clearSelection(); toast(`已重命名 ${ids.length} 份文档`) }
function createSpace() { run(async()=>{ if (!newSpace.value.trim()) throw new Error('请输入知识空间名称'); await knowledgeCreateSpace({name:newSpace.value.trim(),description:'独立知识空间',visibility:'private'}); newSpace.value=''; await load(); toast('知识空间已创建') }) }
</script>

<template>
<section class="real-kb">
  <header class="kb-title"><div><h2>知识库</h2><p>把手工 SOP、话术、复盘和经营报表沉淀为可检索、可引用的 AI Wiki。</p></div><div><span class="pill" :class="{green:ready}">{{ready?'AI 已配置':'AI 未配置'}}</span></div></header>
  <div v-if="error" class="kb-error">{{error}}</div>
  <div v-if="spaceManagerOpen" class="kb-modal-backdrop" @click.self="spaceManagerOpen=false"><section class="kb-modal card"><header><div><h3>管理知识空间与子库</h3><p>创建、重命名或删除子库；删除子库不会删除其中资料。</p></div><button @click="spaceManagerOpen=false">×</button></header><div class="subspace-editor"><input v-model="subspaceDraft" :placeholder="subspaceEditor?'子库名称':'新子库名称'"><button class="send" @click="saveSubspace">{{subspaceEditor?'保存修改':'创建子库'}}</button><button v-if="subspaceEditor" @click="subspaceEditor=null;subspaceDraft=''">取消</button></div><div v-for="sub in demoSubspaces" :key="sub.id" class="manage-subspace"><div><b>{{sub.name}}</b><small>{{sub.desc}}</small></div><div><button @click="startSubspaceEdit(sub)">编辑</button><button :disabled="sub.id==='all'" class="doc-delete" @click="deleteSubspace(sub)">删除</button></div></div></section></div>
  <nav class="kb-pages"><button v-for="item in nav" :key="item[0]" :class="{active:activeNav===item[0]}" @click="selectPage(item[0])">{{item[1]}}<span v-if="navHelp[item[0]]" class="kb-info" tabindex="0" :aria-label="navHelp[item[0]]" :title="navHelp[item[0]]" @click.stop @keydown.stop>i<span class="kb-tooltip" role="tooltip">{{navHelp[item[0]]}}</span></span><i v-if="item[0]==='sync' && syncFailed" class="sync-alert" aria-label="有同步失败"></i></button></nav>

  <template v-if="page==='space'">
    <div class="kb-space-summary card"><div><span>当前知识空间</span><h3>{{activeSpace?.name||'清华优优 AI Wiki'}}</h3><button class="space-manage" @click="openSpaceManager">管理知识空间</button><p>{{activeSpace?.description||'学习方法、家长沟通与内容生产的知识资产。'}}</p></div><button class="kb-stat" @click="openDocumentList"><b>{{catalogDocuments.length}}</b><small>文档</small></button><button class="kb-stat" @click="openConceptList"><b>{{catalogGraph.nodes?.length||0}}</b><small>实体 / 概念</small></button><button class="kb-stat" @click="openSourceList"><b>{{catalogSources.length}}</b><small>资料来源</small></button></div>
    <div class="kb-columns"><aside class="kb-subspaces card"><div class="subspace-head"><h3>知识库子库</h3><button title="管理子库" @click="openSpaceManager">＋</button></div><button v-for="sub in demoSubspaces" :key="sub.id" :class="{active:activeSubspace===sub.id}" @click="spacePanel='documents';activeSubspace=sub.id"><span><b>{{sub.name}}</b><small>{{sub.desc}}</small></span><em>{{subspaceCount(sub.id)}}</em></button></aside><aside class="kb-docs card"><div class="index-switch"><button :class="{active:indexMode==='index'}" @click="indexMode='index'">☷ 索引</button><button :class="{active:indexMode==='log'}" @click="indexMode='log';selected=null">◷ 日志</button></div><div class="doc-list-head"><div><h3>{{panelTitle}}</h3><small>{{visible.length}} {{spacePanel==='documents'?'份文档':'条记录'}}</small></div></div><input v-model="query" :placeholder="`搜索${panelTitle}`"><select v-if="activeSubspace==='产品课程'" v-model="courseSubject" aria-label="课程学科"><option v-for="subject in ['全部','数学','物理','英语','语文']" :key="subject">{{subject}}</option></select><div v-if="spacePanel==='documents'&&visible.length" class="batch-tools"><label><input type="checkbox" :checked="allVisibleSelected" @change="toggleAllVisible"> 全选</label><span v-if="selectedIds.size">已选 {{selectedIds.size}}</span></div><div v-if="spacePanel==='documents'&&selectedIds.size" class="batch-edit"><input v-model="batchName" placeholder="新名称 / 名称前缀"><button @click="renameSelected">批量重命名</button><button class="doc-delete" @click="deleteSelected">批量删除</button><button @click="clearSelection">取消</button></div><p v-if="!visible.length">当前列表暂无内容。</p><div v-for="d in visible" :key="d.id" class="kb-document" :class="{active:selected?.id===d.id}" @click="open(d.id)"><input v-if="spacePanel==='documents'" type="checkbox" :checked="selectedIds.has(d.id)" title="选择文档" @click.stop @change="toggleDocument(d.id)"><div class="doc-main"><b :title="d.title">{{d.title}}</b><small>{{d.subject||d.subspace||d.space_name||'默认子库'}} · {{d.doc_type==='concept'?'概念':d.doc_type==='source'?'数据源':d.doc_type==='dataset'?'数据表':'文档'}} · {{d.chunk_count}} 条</small><em>{{d.analyzed?'已 AI 整理':'待整理'}}</em></div><button v-if="spacePanel==='documents'" class="doc-delete" title="删除文档" @click.stop="removeDocument(d.id,d.title)">删除</button></div></aside><main><section v-if="indexMode==='log'" class="wiki-reading"><h2>知识库日志</h2><button v-for="entry in activityItems" :key="entry.id" class="activity-row" @click="spacePanel='documents';open(entry.id)"><span :class="['source-label',entry.kind]">{{entry.action}}</span><div><b>{{entry.title}}</b><small>{{entry.subspace}}</small></div><em :class="['status',entry.status]">{{entry.status==='failed'?'失败':entry.status==='pending'?'待解析':'成功'}}</em><em>查看正文 →</em></button></section><section v-else-if="!selected" class="wiki-reading"><p>当前列表暂无内容，请添加资料。</p></section><button v-if="spacePanel==='documents'&&!uploadOpen" class="kb-upload-trigger" @click="uploadOpen=true">＋ 添加资料</button><div v-if="spacePanel==='documents'&&uploadOpen" class="card kb-upload" :style="{marginLeft:uploadPosition.x+'px',marginTop:uploadPosition.y+'px'}"><header @pointerdown="beginUploadMove"><h3>添加资料</h3><button @click="uploadOpen=false">×</button></header><p class="upload-target">将资料加入「{{currentSubspace.name}}」</p><nav><button v-for="m in [{id:'file',label:'上传文件'},{id:'text',label:'粘贴文本'},{id:'transcript',label:'竞品转写'}]" :key="m.id" :class="{active:mode===m.id}" @click="mode=m.id">{{m.label}}</button></nav><template v-if="mode==='file'"><div class="kb-drop" :class="{dragging}" @dragover.prevent="dragging=!busy" @dragleave.prevent="dragging=false" @drop.prevent="dropFiles"><strong>拖拽文件到这里，或多选文件</strong><p>最多 50 个文件，每个最大 50 MB。支持 PDF、DOCX、XLSX、PPTX、TXT、MD、CSV、TSV、SRT、VTT，以及 MP4、MOV、WEBM、M4V 视频（视频最大 200 MB）。</p><button @click="fileInput.click()">选择文件</button><input ref="fileInput" type="file" multiple hidden accept=".pdf,.docx,.xlsx,.pptx,.txt,.md,.csv,.tsv,.srt,.vtt,.mp4,.mov,.webm,.m4v" @change="chooseFiles"></div><div v-if="queue.length" class="kb-queue"><header><span>已选择 {{queue.length}} / 50 · 已入库 {{progress}}</span><button @click="queue=[]">清空</button></header><div v-for="item in queue" :key="item.key" class="kb-queue-item"><div><b>{{item.file.name}}</b><small>{{statusLabels[item.status]}} {{item.message}}</small></div><button @click="queue=queue.filter(x=>x.key!==item.key)">移除</button></div></div></template><template v-else><input v-model="title" placeholder="资料名称"><textarea v-model="text" :placeholder="mode==='transcript'?'粘贴竞品视频字幕或转写…':'粘贴脚本、SOP、话术或复盘正文…'"></textarea></template><button class="send" :disabled="busy||(mode==='file'&&!canUpload)" @click="upload">{{busy?'处理中…':mode==='file'?'批量解析 / 重试失败文件':'解析并入库'}}</button></div><div v-if="selected" class="card kb-inspect"><header><div><h3>{{selected.title}}</h3><small>{{selected.space_name}} · {{selected.chunks.length}} 段 · {{selected.source_name||selected.source}}</small><a v-if="selected.uri" :href="selected.uri" target="_blank" class="source-open">打开原文件 ↗</a></div><div><button :disabled="busy || (!ready && !selected.local_content && !rawText)" @click="analyze">{{store.authUser?'AI 解析':'解析知识页'}}</button><button @click="remove">删除</button></div></header><nav><button :class="{active:tab==='chunks'}" @click="tab='chunks'">原始文件</button><button :class="{active:tab==='analysis'}" @click="tab='analysis'">AI 知识页</button><button :class="{active:tab==='graph'}" @click="tab='graph'">证据关系图</button></nav><div class="kb-inspect-body" :key="selected.id + ':' + tab" role="region" aria-label="文档内容，独立滚动" tabindex="0"><template v-if="tab==='chunks'"><PresentationPreview v-if="/\.pptx?$/i.test(selected.title||'') && selected.uri" :uri="selected.uri" :title="selected.title"/><SpreadsheetPreview v-else-if="selected.sheets?.length" :sheets="selected.sheets"/><template v-else-if="selected.media_type==='video'"><video :src="selected.uri" controls playsinline preload="metadata" class="knowledge-video"></video><p>{{selected.parse_method||'视频原件'}}</p><pre class="original-text">{{selected.local_content||selected.parse_error||'暂无字幕，原片可播放。'}}</pre></template><iframe v-else-if="selectedIsPdf" :src="selected.uri" class="original-file" :title="selected.title+'原始文件'"></iframe><img v-else-if="/\.(png|jpe?g|webp)$/i.test(selected.uri||'')" :src="selected.uri" :alt="selected.title" style="max-width:100%;height:auto"><p v-else-if="selected.imported_file && !selected.local_content">此文件已保留原件，可点击上方“打开原文件”查看。</p><pre v-else-if="selected.local_content || rawText" class="original-text">{{selected.local_content || rawText}}</pre><p v-else-if="rawLoading">正在读取原文…</p><p v-else-if="selected.uri">暂无可显示的原文，请主动点击上方链接下载原文件。</p><article v-else v-for="c in selected.chunks" :key="c.id" class="kb-chunk"><b>#{{c.position}} · {{c.locator}}</b><p>{{c.text}}</p></article></template><template v-else-if="!selected.analysis"><p>尚未 AI 解析。配置模型后可提取摘要、子库分类、目录框架、实体、概念和内容结构。</p></template><template v-else-if="tab==='analysis'"><p v-if="selected.analysis.extraction_method">{{selected.analysis.extraction_method}}</p><div class="analysis-grid"><article><span>子库分类</span><b>{{selected.analysis.subspace||'待确认'}}</b></article><article><span>框架目录</span><b>{{(selected.analysis.catalog||[]).join(' / ')||'待确认'}}</b></article><article><span>核心概念</span><b>{{(selected.analysis.concepts||[]).join(' · ')||'待确认'}}</b></article><article><span>实体</span><b>{{(selected.analysis.entities||[]).map(x=>`${x.name}${x.type?`（${x.type}）`:''}`).join(' · ')||'待确认'}}</b></article></div><article v-for="part in [{key:'summary',label:'摘要'},{key:'framework',label:'方法框架'},{key:'hook',label:'钩子'},{key:'body',label:'主体'},{key:'cta',label:'CTA'}]" :key="part.key" class="kb-chunk"><h4>{{part.label}}</h4><p>{{selected.analysis[part.key]||'—'}}</p></article></template><template v-else><p>关系只保留能回到原文连续引文的证据。</p><KnowledgeGraph :graph="{nodes:selected.analysis.nodes||[],edges:(selected.analysis.edges||[]).map(e=>({...e,document_id:selected.id,document_title:selected.title}))}" @open-document="request=>{spacePanel='documents';open(request.id)}" /></template></div></div></main></div>
  </template>

  <section v-else-if="page==='sources'" class="card tab-card"><header><div><h3>数据源</h3><p>文件与粘贴文本统一登记；每一份资料都可追溯解析状态。</p></div><button @click="page='space';mode='file'">上传文件</button></header><div class="table-head"><span>名称</span><span>类型</span><span>知识空间</span><span>同步状态</span><span>文档数</span></div><div v-for="s in catalogSources" :key="s.id" class="table-row"><div><b>{{s.name}}</b><small>{{s.uri||'本地导入'}}</small></div><span>{{sourceLabels[s.source_type]||s.source_type}}</span><span>{{s.space_name}}</span><span :class="['status',s.status]">{{statusLabels[s.status]||s.status}}<small v-if="s.error_message">{{s.error_message}}</small></span><b>{{s.document_count}}</b></div><p v-if="!catalogSources.length">暂无数据源。</p></section>
  <section v-else-if="page==='sync'" class="card tab-card"><input ref="retryInput" type="file" hidden accept=".pdf,.pptx,.docx,.txt,.md,.mp4,.mov,.webm,.m4v" @change="replaceFailedFile"><header><div><h3>同步状态</h3><p>展示解析、索引和错误阶段，便于重试与排障。</p></div><button @click="refresh">刷新</button></header><div class="sync-filters"><button v-for="f in [['all','全部'],['failed','失败'],['pending','待解析'],['completed','成功']]" :key="f[0]" :class="{active:syncFilter===f[0]}" @click="syncFilter=f[0]">{{f[1]}} · {{f[0]==='all'?displayedSyncJobs.length:displayedSyncJobs.filter(j=>j.status===f[0]).length}}</button></div><div v-for="job in filteredSyncJobs" :key="job.id" class="sync-row"><div><b>{{job.source_name}}</b><small>{{job.source_type}} · {{job.stage}}</small></div><div class="sync-progress"><i :style="{width:`${job.progress||0}%`}"></i></div><span :class="['status',job.status]">{{job.status==='failed'?'失败':job.status==='completed'?'成功':'待解析'}} · {{job.progress||0}}%</span><p>{{job.message}}</p><button v-if="job.status!=='completed' && isLocalDocument(job.id)" @click="retryFile(job)">重新上传</button></div><p v-if="!filteredSyncJobs.length">当前筛选下暂无同步任务。</p></section>
  <section v-else-if="page==='graph'" class="card tab-card"><header><div><h3>知识图谱</h3><p>跨文档聚合实体、概念及其有证据的关系。</p></div><span>{{catalogGraph.document_count||0}} 份已解析文档</span></header><KnowledgeGraph :graph="catalogGraph" @open-document="request=>{page='space';spacePanel='documents';activeSubspace='all';courseSubject='全部';query='';open(request.id)}" /></section>
  <section v-else class="card tab-card"><h3>知识空间</h3><p>按项目、账号或团队建立独立上下文。</p><div v-for="sp in spaces" :key="sp.id" class="space-row"><div><b>{{sp.name}}</b><small>{{sp.description||'私有空间'}}</small></div><span>{{sp.visibility==='team'?'团队':'私有'}} · {{sp.document_count}} 文档</span></div><div class="inline-form"><input v-model="newSpace" placeholder="新知识空间名称"><button @click="createSpace">创建</button></div></section>
</section>
</template>

<style scoped>
.analysis-grid b{display:-webkit-box!important;-webkit-box-orient:vertical;-webkit-line-clamp:4;overflow:hidden;line-height:1.6;max-height:6.4em;overflow-wrap:anywhere}

.kb-inspect-body{max-height:calc(100dvh - 360px);min-height:180px;overflow-y:auto;overflow-x:hidden;overscroll-behavior:contain;scrollbar-gutter:stable;padding-right:10px;touch-action:pan-y;overflow-wrap:anywhere}
.kb-inspect>header,.kb-inspect>nav{flex-shrink:0}
@media(max-height:650px){.kb-inspect-body{max-height:50dvh;min-height:120px}}
@media(max-width:760px){.kb-inspect-body{max-height:60dvh}}

.real-kb{max-width:1180px;margin:0 auto}.kb-title,.tab-card>header,.kb-inspect>header{display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap}.real-kb h2,.real-kb h3{margin:0 0 8px}.real-kb p{color:var(--text-sub);line-height:1.65}.pill{display:inline-block;margin-left:8px;padding:7px 12px;border:1px solid var(--border);border-radius:99px;font-size:11px}.pill.green{background:#eaf8ef;color:#08743f;border-color:#ccebd7}.kb-pages{display:flex;gap:6px;margin:18px 0;border-bottom:1px solid var(--border)}.real-kb button{cursor:pointer;padding:9px 12px;border:1px solid #ddd;border-radius:8px;background:white;margin:4px}.real-kb button.active,.real-kb button.send{background:#edf6ee;color:#21633e;border-color:#85b294}.real-kb button:disabled{opacity:.5}.kb-space-summary{display:grid;grid-template-columns:1fr repeat(3,110px);align-items:center;padding:18px 22px}.kb-space-summary p{margin:0}.space-manage{padding:4px 7px!important;font-size:10px;color:#176f43;border-color:#b8d7bf!important}.subspace-head{display:flex;align-items:center;justify-content:space-between}.subspace-head button{padding:3px 7px!important;margin:0!important;color:#176f43}.kb-stat{text-align:center;border-left:1px solid var(--border)}.kb-stat b,.kb-stat small{display:block}.kb-stat b{font-size:23px}.kb-stat small{color:var(--text-mute)}.kb-columns{display:grid;grid-template-columns:220px 290px minmax(0,1fr);gap:20px;margin-top:16px}.real-kb input,.real-kb textarea,.real-kb select{width:100%;padding:12px;border:1px solid #ddd;border-radius:8px;margin:6px 0;box-sizing:border-box;background:white}.real-kb textarea{min-height:140px;resize:vertical}.kb-subspaces,.kb-docs{align-self:start;padding:14px}.kb-subspaces h3,.doc-list-head h3{font-size:15px}.kb-subspaces button{display:flex;width:100%;justify-content:space-between;text-align:left;margin:2px 0;padding:11px 9px;border-color:transparent}.kb-subspaces button.active{background:#edf6ee;border-color:#85b294}.kb-subspaces button span,.kb-subspaces button small{display:block}.kb-subspaces button small{font-size:10px;color:#899389;margin-top:4px}.kb-subspaces button em{font-style:normal;color:#899389}.doc-list-head{display:flex;justify-content:space-between;align-items:center}.doc-list-head small,.upload-target{color:var(--text-mute);font-size:12px}.kb-docs{align-self:start}.kb-document{display:flex;width:100%;align-items:flex-start;gap:7px;text-align:left;overflow-wrap:anywhere;padding:10px;border:1px solid #ddd;border-radius:8px;background:white;margin:4px;box-sizing:border-box;cursor:pointer}.kb-document>input{width:auto;margin:4px 0}.doc-main{min-width:0;flex:1}.kb-document small,.kb-document em{display:block;margin-top:6px;color:#666;font-style:normal}.kb-document em{color:#21814e}.kb-document .doc-delete{flex:none;align-self:center;margin:0;padding:5px 7px;border-color:#ecc9c4;color:#a33c2c;font-size:10px}.batch-tools{display:flex;justify-content:space-between;align-items:center;color:#68756b;font-size:11px;margin:5px}.batch-tools input{width:auto;margin:0 3px 0 0}.batch-edit{margin:7px 4px;padding:8px;background:#f5f8f4;border-radius:7px}.batch-edit input{padding:7px;margin:0 0 4px;font-size:11px}.batch-edit button{padding:5px 6px;font-size:10px}.kb-upload,.kb-inspect,.kb-panel-intro,.tab-card{margin-bottom:20px;padding:20px}.kb-upload-trigger{width:100%;margin:0 0 12px!important;color:#176f43;border-color:#a9ceb1!important;background:#f5fbf6!important}.kb-upload{position:fixed;z-index:30;top:10vh;left:50%;transform:translateX(-50%);width:min(620px,calc(100vw - 40px));max-height:78vh;overflow:auto;box-shadow:0 18px 50px rgba(0,0,0,.22)}.kb-upload>header{display:flex;align-items:center;justify-content:space-between}.kb-modal-backdrop{position:fixed;z-index:40;inset:0;background:rgba(19,31,23,.34);display:grid;place-items:center;padding:20px}.kb-modal{width:min(620px,calc(100vw - 40px));max-height:78vh;overflow:auto;padding:20px}.kb-modal header{display:flex;justify-content:space-between;align-items:flex-start}.kb-modal header button{font-size:20px;border:0}.subspace-editor{display:flex;gap:8px;margin:14px 0}.subspace-editor input{margin:0}.manage-subspace{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:10px 0;border-top:1px solid #e5e9e4}.manage-subspace small{display:block;margin-top:4px;color:#778277;font-size:11px}.kb-drop{border:2px dashed #bbcdbf;border-radius:14px;padding:24px;margin:14px 0;text-align:center;background:#f8fbf7}.kb-drop.dragging{border-color:#21814e;background:#eaf6ee}.kb-queue{max-height:320px;overflow:auto;margin:12px 0}.kb-queue-item,.space-row{display:flex;justify-content:space-between;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid #eee}.kb-queue-item small,.space-row small{display:block;margin-top:5px;color:#777}.feishu-help{padding:10px 14px;border-radius:10px;background:#f7f8f4}.feishu-help small{display:block;color:#777}.kb-chunk{border-top:1px solid #e6e6df;padding:16px 0}.kb-chunk p{white-space:pre-wrap;margin:8px 0}.kb-graph{width:100%;background:#f7f8f4;border-radius:12px}.kb-graph.global{max-height:560px}.documents-page{padding:20px}.documents-header{display:flex;justify-content:space-between;align-items:center;gap:16px;margin-bottom:16px}.documents-header h3{margin:0 0 7px}.documents-header p{margin:0}.documents-manager{display:grid;grid-template-columns:minmax(300px,.9fr) minmax(420px,1.1fr);gap:20px;align-items:start}.documents-list-panel{padding:16px;max-height:680px;overflow:auto}.doc-type{display:inline-block;width:max-content;padding:3px 7px;border-radius:6px;background:#edf6ee;color:#197447;font-size:11px}.document-preview{padding:20px;margin-top:18px}.document-preview h4{margin:18px 0 8px}.document-preview p{white-space:pre-wrap}.preview-tags{display:flex;gap:7px;flex-wrap:wrap}.preview-tags span{padding:5px 8px;border-radius:99px;background:#f0f3ef;color:#526057;font-size:11px}.source-open{display:inline-block;margin-top:7px;color:#167447;font-size:12px}.kb-notice{padding:12px;background:#fff2db;border-radius:8px;margin:12px 0}.kb-error{padding:10px 12px;background:#fff3f1;border:1px solid #f0c9c2;color:#9b3427;border-radius:8px;margin:12px 0}.analysis-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:14px 0}.analysis-grid article{padding:13px;border-radius:10px;background:#f5f7f3}.analysis-grid span,.analysis-grid b{display:block}.analysis-grid span{font-size:10px;color:#777;margin-bottom:6px}.table-head,.table-row{display:grid;grid-template-columns:2fr .7fr 1fr 1.1fr .5fr;gap:14px;align-items:center;padding:11px}.table-head{background:#f5f6f3;color:#777;font-size:11px}.table-row{border-bottom:1px solid var(--border)}.table-row small,.status small{display:block;color:#777;margin-top:4px;overflow-wrap:anywhere}.status.ready,.status.completed{color:#08743f}.status.failed{color:#a33325}.sync-row{display:grid;grid-template-columns:1.4fr 1fr .8fr;gap:14px;align-items:center;padding:14px 0;border-bottom:1px solid var(--border)}.sync-row small{display:block;color:#777}.sync-row p{grid-column:1/-1;margin:0}.sync-progress{height:7px;background:#eee;border-radius:99px;overflow:hidden}.sync-progress i{display:block;height:100%;background:#38a869}.graph-empty{display:grid;place-items:center;min-height:340px;color:#777;background:#f7f8f4;border-radius:12px}.permissions-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px}.inline-form{display:flex;gap:8px;margin-top:12px}.inline-form input{flex:1}.inline-form select{width:110px}@media(max-width:1000px){.documents-manager{grid-template-columns:1fr}.kb-columns,.permissions-grid{grid-template-columns:1fr}.kb-space-summary{grid-template-columns:1fr repeat(3,80px)}.table-head{display:none}.table-row{grid-template-columns:1fr 1fr}.sync-row{grid-template-columns:1fr}.analysis-grid{grid-template-columns:1fr}}@media(max-width:560px){.documents-header{align-items:flex-start;flex-direction:column}.kb-space-summary{grid-template-columns:1fr 1fr}.kb-stat{border:0}.kb-pages{overflow:auto}.table-row{grid-template-columns:1fr}}

.real-kb{max-width:1600px;--kb-accent:#176f43;--kb-tint:#edf7ef}.kb-space-summary{background:linear-gradient(110deg,#f0f8f2,#fff);border:1px solid #dce7df;border-radius:12px}.kb-columns{grid-template-columns:160px 230px minmax(0,1fr);gap:0;border:1px solid #dce7df;border-radius:12px;background:white;overflow:hidden}.kb-columns>aside{border:0;border-radius:0;box-shadow:none;border-right:1px solid #dce7df;min-height:600px;margin:0}.kb-columns>main{min-width:0;padding:18px}.kb-docs{max-height:850px;overflow:auto}.kb-subspaces button.active,.real-kb button.active{background:var(--kb-tint);color:var(--kb-accent);border-color:#a4cbb0}.kb-document{border:0;border-radius:7px;margin:4px 0;padding:12px 8px}.kb-document.active{background:#edf7ef;box-shadow:inset 3px 0 var(--kb-accent)}.kb-inspect{box-shadow:none;border:0;padding:0;border-radius:0}.kb-inspect>header{border-bottom:1px solid #dce7df;padding:5px 0 16px}.kb-inspect nav{padding:12px 0}.original-file{display:block;width:100%;height:720px;border:1px solid #dce7df;border-radius:8px;background:#f5f8f5}.original-text{white-space:pre-wrap;overflow-wrap:anywhere;font-size:14px;line-height:1.95;color:#273d30;padding:20px;border:1px solid #dce7df;border-radius:8px;background:#fff}.kb-upload>header{cursor:move;touch-action:none;user-select:none}.kb-upload{resize:both;min-width:360px;min-height:360px;overflow:auto;max-width:90vw}.index-switch{display:flex;gap:6px;border-bottom:1px solid #dce7df;padding-bottom:8px;margin-bottom:12px}.index-switch button{flex:1}.wiki-reading{padding:12px 4px}.wiki-reading h2{font-size:23px;margin:10px 0}.wiki-reading p{font-size:13px}.wiki-eyebrow{font-size:10px;letter-spacing:1.5px;color:var(--kb-accent)}.overview-stats{display:flex;gap:28px;padding:20px;margin:20px 0;background:#edf7ef;border-radius:10px}.overview-stats article{display:grid;gap:5px}.overview-stats b{font-size:25px;color:var(--kb-accent)}.overview-stats span{font-size:11px;color:#7b897f}.topic-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.topic-grid button{text-align:left;padding:16px;margin:0;border-color:#dce7df;background:#fbfdfb}.topic-grid small{color:#7b897f}.activity-row{display:flex;align-items:center;gap:12px;width:100%;text-align:left}.activity-row>span{color:var(--kb-accent);background:#edf7ef;padding:5px;font-size:10px}.activity-row div{flex:1;display:grid;gap:5px}.activity-row small,.activity-row em{font-size:10px;color:#7b897f;font-style:normal}@media(max-width:1100px){.kb-columns{grid-template-columns:130px 190px minmax(0,1fr)}.topic-grid{grid-template-columns:1fr}.kb-columns>main{padding:12px}}@media(max-width:760px){.kb-columns{grid-template-columns:1fr}.kb-columns>aside{min-height:auto}.kb-docs{max-height:300px}.original-file{height:550px}}
</style>

<style scoped>.knowledge-video{width:100%;max-height:540px;background:#111;border-radius:12px}.activity-row .source-label.video{background:#e8f3fa;color:#27678b}.sync-filters{display:flex;gap:8px;margin:16px 0;flex-wrap:wrap}.sync-filters .active{color:#176f43;background:#edf7ef;border-color:#99c5a6}.sync-alert{display:inline-block;width:7px;height:7px;border-radius:50%;background:#e24c4c;margin-left:7px}.activity-row .source-label.text{background:#fff4db;color:#886013}.activity-row .source-label.transcript{background:#e8f3fa;color:#27678b}.status.failed{color:#c43c3c}.status.pending{color:#8b701e}.status.completed{color:#176f43}</style>

<style scoped>.kb-info{position:relative;display:inline-flex;align-items:center;justify-content:center;width:15px;height:15px;margin-left:7px;border:1px solid #95a49b;border-radius:50%;font-family:serif;font-size:11px;color:#62736a;cursor:help;vertical-align:middle}.kb-tooltip{display:none;position:absolute;top:24px;left:-80px;width:245px;padding:12px;text-align:left;background:#173d2b;color:white;font:12px/1.6 sans-serif;border-radius:9px;box-shadow:0 5px 18px #0002;z-index:30;white-space:normal}.kb-info:hover .kb-tooltip,.kb-info:focus .kb-tooltip{display:block}</style>

<style scoped>
.kb-docs{font-size:11px}.kb-docs .index-switch button{font-size:12px;padding:9px 8px}.kb-docs h3{font-size:14px}.kb-docs>input,.kb-docs>select{font-size:12px;padding:9px}.kb-docs .doc-list-head small,.kb-docs .batch-tools,.kb-docs .doc-main small,.kb-docs .doc-main em{font-size:11px;line-height:1.5}.kb-docs .kb-document{padding:9px 6px;gap:6px;position:relative}.kb-docs .doc-main{min-width:0;padding-right:0;grid-column:2}.kb-docs .kb-document:not(:has(>input[type="checkbox"])) .doc-main{grid-column:1/-1}.kb-docs .kb-document:not(:has(>input[type="checkbox"])) .doc-main small{padding-right:0}.kb-docs .doc-main b{font-size:12px;line-height:1.45;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;overflow-wrap:anywhere}.kb-docs .doc-delete{font-size:10px;padding:4px 6px;align-self:end}.kb-docs .kb-document{display:grid;grid-template-columns:15px minmax(0,1fr)}.kb-docs .kb-document>.doc-delete{grid-column:2;justify-self:end;margin-top:-22px}.kb-docs .doc-main small{padding-right:38px}
</style>

<style scoped>.kb-space-summary{background:linear-gradient(110deg,#dcefe2 0%,#e9f5ed 100%);border-color:#b9d8c4}</style>
