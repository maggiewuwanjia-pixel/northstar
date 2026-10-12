<script setup>
import {liveScriptPrompts,liveScriptExample} from '../data/liveScriptExamples'
import FollowerTrend from './FollowerTrend.vue'
import { loadCourseDocuments, loadBusinessDocuments, saveGuestPlanningTask, createPlanningTask } from '../store'
import { ref, nextTick, onMounted, watch, computed } from 'vue'
import { store } from '../store'
import { cueGuestAsk, cueAsk, cueConversations, cueConversation, cueNewConversation, cueTasks, cueCreateTask, cueSaveArtifact, knowledgeList } from '../api'
import { optimizedScript } from '../data/scriptOptimizations'
import { parseGuestFile } from '../data/parsePresentation'
import AnswerMarkdown from './AnswerMarkdown.vue'
import { cueClassifyIntent } from '../api'
import { Copy, RefreshCw, ThumbsUp, ThumbsDown, Share2, ArrowDown, ArrowUp, ListPlus } from 'lucide-vue-next'
import { yangQihanComparison } from '../data/yangQihanComparison'
import fastCourseSnapshot from '../data/cueCourseSnapshot.json'
import fastCases from '../../public/cue-scenarios/cases.json'
import fastFollowers from '../../public/business-data/metrics.json'
import fastDefinitions from '../../public/cue-scenarios/definitions.json'
import { scenarioPrompts, identifyScenario, fixedScenarioKind, nextTuesdayEvening, scenarioResult } from '../data/cueScenarios'
const demoFlow=ref(true)
const props = defineProps({ mobile:{type:Boolean,default:false} })
const input=ref(''), bodyEl=ref(null), busy=ref(false), mode=ref('analysis'), conversationId=ref(null), conversations=ref([]), tasks=ref([]), drawer=ref('')
const attachments=ref([]),uploadEl=ref(null),uploading=ref(false),uploadError=ref(''),uploadMenu=ref(false),dragging=ref(false)
function chooseUpload(images){uploadEl.value.accept=images?'image/png,image/jpeg,image/webp,image/gif,image/bmp':'.xlsx,.xls,.pptx,.ppt,.csv,.tsv,.md,.txt,.pdf,.docx,.srt,.vtt';uploadEl.value.click();uploadMenu.value=false}
async function addAttachments(event){
 const files=[...(event.dataTransfer?.files||event.target.files)];if(!event.dataTransfer)event.target.value='';dragging.value=false;uploadMenu.value=false;uploadError.value='';uploading.value=true
 try{for(const file of files){
  const image=/^image\/(png|jpeg|webp|gif|bmp)$/.test(file.type),group=image?'image':'file',limit=image?20:500
  if(attachments.value.filter(a=>a.kind===group).length>=20){uploadError.value+='最多20'+(image?'张图片':'个文件')+'；';continue}
  if(file.size>limit*1024*1024){uploadError.value+=file.name+' 超过'+limit+' MB；';continue}
  if(!image&&!/\.(xlsx?|pptx?|csv|tsv|md|txt|pdf|docx|srt|vtt)$/i.test(file.name)){uploadError.value+=file.name+' 格式暂不支持；';continue}
  try{
   let data='',parsed={}
   if(image){const bitmap=await createImageBitmap(file),scale=Math.min(1,1600/Math.max(bitmap.width,bitmap.height)),canvas=document.createElement('canvas');canvas.width=Math.round(bitmap.width*scale);canvas.height=Math.round(bitmap.height*scale);canvas.getContext('2d').drawImage(bitmap,0,0,canvas.width,canvas.height);bitmap.close();data=canvas.toDataURL('image/jpeg',.85)}
   else {parsed=await parseGuestFile(file);if(!parsed.local_content?.trim())throw new Error('没有提取到可读取内容')}
   attachments.value.push({id:crypto.randomUUID(),kind:group,title:file.name,size:file.size,image:data,local_content:parsed.local_content||''})
  }catch(e){uploadError.value+=file.name+'：'+e.message+'；'}
 }}finally{uploading.value=false}
}
const LOCAL_CHATS='northstar-cue-conversations'
let switchingChat=false
function localChats(){try{return JSON.parse(localStorage.getItem(LOCAL_CHATS)||'[]')}catch{return []}}
function saveLocalChat(){
 if(store.authUser||switchingChat||!store.chat.some(m=>m.role==='user'))return
 if(!conversationId.value)conversationId.value='local-chat-'+crypto.randomUUID()
 const first=store.chat.find(m=>m.role==='user')
 const chat={id:conversationId.value,title:first.text.slice(0,48),mode:mode.value,message_count:store.chat.length,updated_at:new Date().toISOString(),messages:JSON.parse(JSON.stringify(store.chat))}
 const rows=[chat,...localChats().filter(c=>c.id!==chat.id)].slice(0,100)
 try{localStorage.setItem(LOCAL_CHATS,JSON.stringify(rows));localStorage.setItem('northstar-cue-active-chat',chat.id);conversations.value=rows}catch{actionNotice.value='会话保存失败：本机存储空间不足，请复制重要内容'}
}
watch(()=>store.chat,saveLocalChat,{deep:true,flush:'sync'})
const DEMO_MENTIONS=[
  {id:'demo-month-script',title:'11月短视频脚本.pdf',chunk_count:8},
  {id:'demo-live-review',title:'优优账号X直播记录【咨询+精讲课产品销售】.pdf',chunk_count:6},
  {id:'demo-live-sop',title:'直播SOP.pdf',chunk_count:7},
  {id:'demo-product-script',title:'精讲课塑品脚本.pdf',chunk_count:5},
  {id:'demo-wang',title:'汪舅舅-教育内容脚本转写.txt',chunk_count:4},
  {id:'demo-xueli',title:'雪梨老师-英语背单词开窍.txt',chunk_count:1}
]
const knowledgeDocs=ref([...DEMO_MENTIONS]), knowledgeSpaces=ref([]), mentionedDoc=ref(null)
const scriptPreview=ref(null)
const availableDocs=computed(()=>[...new Map([...knowledgeDocs.value,...store.demoKnowledgeDocuments,...store.courseDocuments,...store.businessDocuments].map(doc=>[doc.id,doc])).values()])
const caret=ref(0),mentionDismissed=ref(false)
function trackCaret(event){if(event.key==='Escape')return;caret.value=event.target.selectionStart??input.value.length;mentionDismissed.value=false}
const mentionRange=computed(()=>{
 if(mentionDismissed.value)return null
 const prefix=input.value.slice(0,caret.value),at=prefix.lastIndexOf('@')
 if(at<0)return null
 const query=prefix.slice(at+1)
 if(/[\n,，。]/.test(query)||availableDocs.value.some(doc=>query.trim()===doc.title))return null
 return {start:at,end:caret.value,query:query.trim().toLowerCase()}
})
const mentionCandidates=computed(()=>mentionRange.value?availableDocs.value.filter(d=>d.title.toLowerCase().includes(mentionRange.value.query)).slice(0,12):[])
const referencedDocs=computed(()=>availableDocs.value.filter(doc=>input.value.includes('@'+doc.title)))
function messageParts(message){const titles=message.mentionedDocs||[message.mentionedDoc].filter(Boolean);if(!titles.length)return [{text:message.text}];const parts=[];let text=message.text;while(text){const hits=titles.map(title=>({title,index:text.indexOf('@'+title)})).filter(hit=>hit.index>=0).sort((a,b)=>a.index-b.index);if(!hits.length){parts.push({text});break}const hit=hits[0];if(hit.index)parts.push({text:text.slice(0,hit.index)});parts.push({title:hit.title});text=text.slice(hit.index+hit.title.length+1)}return parts}

const modes=[['analysis','分析'],['drilldown','下钻'],['breakdown','拆解'],['creative','创意'],['planning','排期']]
const scenarioModes={query:'analysis',analysis:'drilldown',competitor:'breakdown',planning:'creative',schedule:'planning',hotspots:'creative'}
const isScriptDetail=computed(()=>store.activeView==='scripts' && !!store.scriptContext)
const liveReviewPrompts=['本场直播内容总结？','和上一场数据对比，总结一下','这场直播画面如何？','人气高点、下单高点的话术如何沉淀为 SOP？','有什么风险点？']
const prompts=computed(()=>isScriptDetail.value?[]:store.activeView==='live-script'?liveScriptPrompts:store.activeView==='live-summary'?liveReviewPrompts:scenarioPrompts)
function processSteps(message){
  if(message.steps?.length)return message.steps
  return [{name:'处理记录 · execution_status',status:message.error?'failed':'done',execution:'记录状态',detail:message.routeLabel==='直播复盘分析'?'本地复盘结果；读取当前选择的直播记录及已有复盘资料。未调用服务端模型。':'此回答未附带详细执行日志。仅展示已有结果，不补造工具调用或耗时。'}]
}
function messageSources(message){return message.sources||[]}
function displayError(value){return String(value||'').replace(/(?:Cue 暂时无法回答：\s*)?Failed to fetch|NetworkError[^\n]*|Load failed/gi,'连接暂时中断，问题和引用已保留。请点击重新生成重试。')}
function answerText(message){return message.error?displayError(message.text):message.text}

function isKnowledgeSource(source){if(source.web)return false;return /雪梨/.test(source.title||'') || !!source.document_id || /\.(pptx?|pdf|docx?|xlsx?|csv|txt|md)$/i.test(source.title||'')}
function openKnowledgeSource(source){const xueli=/雪梨/.test(source.title||'');store.wikiDocumentRequest={id:xueli?'demo-xueli-video':source.document_id,title:xueli?'雪梨老师-英语背单词开窍.mp4':source.title,uri:source.uri};store.activeView='wiki'}

const actionNotice=ref('')
const feedback=ref(JSON.parse(localStorage.getItem('northstar-answer-feedback')||'{}'))
function messageKey(message){let key=0;for(const c of message.text||'')key=(key*31+c.charCodeAt(0))|0;return String(key)}
function vote(message,value){const key=messageKey(message);feedback.value[key]=feedback.value[key]===value?null:value;localStorage.setItem('northstar-answer-feedback',JSON.stringify(feedback.value))}
async function copyMessage(message){try{await navigator.clipboard.writeText(message.text||'');actionNotice.value='已复制'}catch{actionNotice.value='复制失败，请检查浏览器剪贴板权限'}setTimeout(()=>actionNotice.value='',2500)}
function regenerate(index){const question=store.chat.slice(0,index).reverse().find(m=>m.role==='user');if(question&&!busy.value)sendChat(question.text)}
async function continueAnswer(message){
 if(busy.value||!message.resumeRequest)return
 busy.value=true;message.canContinue=false
 const request=message.resumeRequest
 try{
  const r=await (store.authUser?cueAsk:cueGuestAsk)(request.question,request.context,request.history,{...request.options,continuation:true})
  store.chat.push({role:'ai',text:r.answer,routeLabel:r.route_label||routeLabels[r.route],sources:r.sources||[],steps:r.steps||[],artifacts:r.artifacts||[]})
 }catch(e){message.text='Cue 暂时无法回答：'+e.message;message.canContinue=!!e.canContinue}
 finally{busy.value=false;scroll()}
}
async function shareMessage(message){try{if(navigator.share)await navigator.share({title:'NorthStar · Cue 回答',text:message.text});else{await navigator.clipboard.writeText('NorthStar · Cue 回答\n\n'+message.text);actionNotice.value='分享内容已复制，可粘贴发送'} }catch(e){if(e.name!=='AbortError')actionNotice.value='分享失败，请使用复制'}setTimeout(()=>actionNotice.value='',3000)}
const routeLabels={structured_query:'结构化数据查询',hybrid_analysis:'指标计算＋知识检索',hybrid_planning:'历史数据＋竞品内容＋脚本资料',competitor_rewrite:'竞品拆解＋账号定位＋脚本生成',source_lookup:'来源核验',creative_generation:'创意生成',content_breakdown:'竞品拆解',metric_drilldown:'指标下钻',knowledge_qa:'知识库检索'}
// 轻量 Cue：先给工作台里已经确定的结论，避免把每个问题都展开成冗长的检索报告。
function legacyAnswer(question){
  const sessions=[...(store.liveSessions||[])], plans=[...(store.planningTasks||[])]
  const best=sessions.slice().sort((a,b)=>Number(String(b.gmv||'').replace(/[^\d.]/g,''))-Number(String(a.gmv||'').replace(/[^\d.]/g,'')))[0]
  const peak=sessions.slice().sort((a,b)=>Number(b.peak||0)-Number(a.peak||0))[0]
  const top=(store.virals||[])[0]
  if(/为什么|互动|播放|掉量|下滑|下降|低/.test(question)) return {text:`当前趋势数据不足以判断掉量。已同步直播中最高在线为 ${peak?.peak||'-'} 人（${peak?.d||'-'}）；需要补充短视频播放报表，才能诊断前 3 秒、完播和互动问题。下一步：导入短视频报表后，再给你 3 条可验证的钩子改写。`}
  if(/下条|下周|拍什么|拍啥|内容|选题|九月|十月/.test(question)) return {text:'建议先拍「新学期第一周怎么把学习节奏拉回来」。它承接家长在开学后的高频焦虑，也能自然延展为直播答疑。下一步：先生成 60 秒脚本，再排入下周发布。',artifacts:[{type:'script',label:'生成脚本草稿'},{type:'planning',label:'加入内容排期'}]}
  if(/带货|破零|商品|卖货|选品|挂车/.test(question)) return {text:`当前已同步直播中成交最高的是 ${best?.d||'-'} · ${best?.gmv||'¥0'}。建议先复用这场的复盘话术与节奏；商品明细没有导入前，不给出虚构选品结论。`,artifacts:[{type:'document',label:'保存复盘摘要'}]}
  if(/对标|爆款|监控|别人|竞品/.test(question)) return {text:top?`目前最值得拆的是「${top.t}」（${top.from}，${top.like} 赞）。它和账号的开学内容方向重合，建议先拆钩子、痛点和方法结构，再改写为自己的版本。`:'先添加一个对标账号或导入竞品内容，我就能筛选高潜选题并拆成脚本。',artifacts:[{type:'script',label:'拆成脚本草稿'}]}
  if(/直播|gmv|卖了多少|业绩/.test(question)) return {text:`已同步 ${sessions.length} 场直播；成交最高为 ${best?.gmv||'¥0'}，最高在线为 ${peak?.peak||'-'} 人。下一步：把下一场直播排进内容日历，并复用高成交场的节奏。`}
  if(/脚本|分镜|拆/.test(question)) return {text:'可以按“前 3 秒冲突 → 具体家长场景 → 3 步方法 → 行动引导”来拆。选择一条竞品内容后，我可以直接生成适合清华优优的 60 秒脚本。',artifacts:[{type:'script',label:'生成脚本草稿'}]}
  return {text:'你可以问我：下条视频拍什么、最近直播卖得怎么样、为什么互动率低，或帮我拆一条爆款脚本。'}
}

function scriptOptimizationText(ctx, request='', referencedDoc=null) {
  const title=ctx.title||'当前脚本'
  const points=(ctx.points||[]).filter(Boolean)
  const longForm=/1000|千字|10\s*分钟|十分钟|长稿|展开|详细|逐字/.test(request)
  const cite=referencedDoc?`\n\n资料引用：@${referencedDoc.title}，可在知识库中继续核对和补充。`:''
  const core=points[0]||'把家长的焦虑转成今天能做的一步'
  if(longForm) return `已按《${title}》生成约 1000 字、10 分钟的可录制长稿。\n\n【内容目标】让家长从“着急催促”转向“先判断问题、再陪孩子做一步”。核心观点：${core}。\n\n【标题 / 封面】\n标题：${title}\n封面：别急着催，先把这 3 件事做对\n副标题：把学习焦虑拆成今天就能完成的一步\n\n【0:00–0:40｜冲突开场】\n【口播】“孩子最近状态一波动，很多家长第一反应就是：是不是不够努力？是不是得赶紧补？可越急着催，孩子越容易把学习当成一场躲不过的追赶。今天不讲大道理，只讲一个回家就能做的办法。”\n【画面】正面近景，手拿试卷；第一秒直视镜头。\n【字幕】先看清问题，再决定怎么帮。\n\n【0:40–2:00｜建立共鸣】\n【口播】“你可能见过这样的场景：家长问‘怎么又错了’，孩子低头不说话；再问‘别人都会，为什么你不会’，孩子把本子一合。这个时候，他听到的不是帮助，而是‘我又让你失望了’。所以先把问题换成：这次最卡的是不会、会但错，还是做不完？”\n【画面】试卷局部、错题本、亲子并坐的 B-roll。\n\n【2:00–4:00｜解释原因】\n【口播】“不会，说明知识点没有接上；会但错，往往是审题、步骤和检查习惯；做不完，更多是时间分配和题目顺序。把所有错题都叫成‘不认真’，孩子只会更乱。分清这三类，才知道第一步从哪儿开始。”\n【字幕】不会 / 会但错 / 做不完。\n\n【4:00–7:00｜三步执行】\n【口播】“第一步，今晚花十分钟，把最近一张卷子里的典型错题标成三类，不要求全部订正。第二步，接下来七天每天只处理一类：今天只看会但错，写清楚是看漏条件、计算还是步骤。第三步，家长每天只问一句：今天哪类题比昨天少错一点？这个问题不是逼孩子报数字，而是让他看见自己在往前走。”\n【画面】白板依次写：10 分钟分类、每天一类、一句复盘。\n\n【7:00–8:40｜示范对话】\n【口播】“你可以说：‘我不急着看总分，我们先找一题你明明会却做错的。你觉得是哪里断了？’如果孩子说不知道，就接着问：‘是没看见条件，还是算到一半乱了？’他能说出原因时，你只要说：‘好，今天我们就只练这个。’”\n【字幕】不评价，先一起定位。\n\n【8:40–9:30｜避坑提醒】\n【口播】“尽量少说‘你怎么又这样’、‘别人都可以’、‘你就是不够努力’。替换成：‘我们先找一个能改的地方’、‘今天先把这一类做好’、‘明天再看下一步’。”\n\n【9:30–10:00｜CTA】\n【口播】“今晚就拿一张最近的作业或试卷，先做十分钟分类。想要七天复盘表，评论区回复‘复盘’，我把每天怎么问、怎么记整理给你。”\n【字幕】回复「复盘」领取 7 天行动表。${cite}`
  return `已把《${title}》细化成可直接拍摄的 60 秒方案。\n\n【先做判断】这条内容要让家长先认出自己的场景，再交付一个能马上执行的动作。核心观点是：${core}。\n\n【标题与封面】\n标题：${title}\n封面主句：别急着催，先看清这 3 类问题\n封面副句：把大焦虑变成小行动\n\n【0–3 秒｜钩子】\n口播：“孩子最近状态不稳，先别急着催。你可能不是没帮上忙，而是第一步就问错了。”\n画面：正面近景、手持试卷。\n字幕：先别催，先找对问题。\n\n【3–12 秒｜场景】\n口播：“很多家长一看到错题就问怎么又错，但孩子真正卡住的，可能是不会、会但错，或者根本做不完。”\n画面：试卷局部依次高亮三类错因。\n字幕：不会 / 会但错 / 做不完。\n\n【12–35 秒｜方法】\n口播：“今晚只做三步：第一，给错题分类；第二，未来七天每天只改一类；第三，每天只问一句——今天哪类题比昨天少错一点？”\n画面：白板逐项出现。\n字幕：10 分钟分类 → 每天一类 → 一句复盘。\n\n【35–50 秒｜共情】\n口播：“孩子需要的不是再听一次你要努力，而是知道今天具体从哪里开始。”\n画面：家长和孩子一起圈出一题。\n字幕：把焦虑变成第一步。\n\n【50–60 秒｜行动】\n口播：“今晚就试一次。想要七天复盘表，评论区回复‘复盘’，我把每天怎么做发给你。”\n画面：回到正面镜头，手指评论区。\n字幕：回复「复盘」领取行动表。${cite}`
}
function optimizeCurrentScript(){
  if(!store.scriptContext || busy.value)return
  sendChat('优化当前脚本：'+store.scriptContext.title+'。请忠于原主题，给出完整优化稿、具体修改理由、口播和分镜，不要只给通用建议。')
}

const queuedExample=ref(false),composerEl=ref(null)
function chooseExample(question){
  input.value=question;queuedExample.value=true
  mentionedDoc.value=availableDocs.value.find(doc=>question.includes('@'+doc.title))||null
  const kind=identifyScenario(question);if(kind)mode.value=scenarioModes[kind]
  nextTick(()=>{composerEl.value?.focus();caret.value=input.value.length;composerEl.value?.setSelectionRange(caret.value,caret.value)})
}
const focusQuestion=ref(null),tailSpace=ref(0)
function scroll(){nextTick(()=>{const body=bodyEl.value;if(!body)return;const question=focusQuestion.value===null?null:body.querySelector('[data-message-index="'+focusQuestion.value+'"]');tailSpace.value=0;if(question){body.scrollTop+=question.getBoundingClientRect().top-body.getBoundingClientRect().top-12}else body.scrollTop=body.scrollHeight})}
function jumpToLatest(){focusQuestion.value=null;tailSpace.value=0;nextTick(()=>{if(bodyEl.value)bodyEl.value.scrollTo({top:bodyEl.value.scrollHeight,behavior:'smooth'})})}
function requireLogin(){if(store.authUser)return true;store.loginOpen=true;return false}
function normalizeMessage(m){return {role:m.role==='user'?'user':'ai',text:m.content,route:m.route,routeLabel:m.route_label||routeLabels[m.route],sources:m.sources||[],steps:m.steps||[],artifacts:m.artifacts||[]}}
async function loadSidebar(){if(!store.authUser){await loadCourseDocuments();await loadBusinessDocuments();knowledgeDocs.value=[...DEMO_MENTIONS,...store.courseDocuments,...store.businessDocuments,...store.demoKnowledgeDocuments];return}try{const [c,t,k]=await Promise.all([cueConversations(),cueTasks(),knowledgeList()]);conversations.value=c.conversations||[];tasks.value=t.tasks||[];knowledgeDocs.value=[...DEMO_MENTIONS.filter(doc=>!(k.documents||k.files||[]).some(item=>item.title===doc.title)),...(k.documents||k.files||[])];knowledgeSpaces.value=k.spaces||[]}catch(e){knowledgeDocs.value=[...DEMO_MENTIONS]}}
async function newChat(){
 if(busy.value){actionNotice.value='正在生成回答，完成后可新建会话';return}
 try{
  if(!store.authUser){
   saveLocalChat();switchingChat=true;conversationId.value=null;store.chat=[];localStorage.removeItem('northstar-cue-active-chat')
  }else{
   const c=await cueNewConversation({title:'新会话',mode:mode.value});conversationId.value=c.id;store.chat=[];await loadSidebar()
  }
  pendingQuestions.value=[];attachments.value=[];uploadMenu.value=false;uploadError.value='';scriptPreview.value=null;input.value='';drawer.value='';focusQuestion.value=null;tailSpace.value=0
  store.chat.push({role:'ai',text:'新会话已开始。你想分析什么，或生成什么内容？可以输入 @ 引用知识库资料。'})
  actionNotice.value='已新建会话';setTimeout(()=>actionNotice.value='',2500)
  nextTick(()=>{composerEl.value?.focus();if(bodyEl.value)bodyEl.value.scrollTop=0})
 }catch(e){actionNotice.value='新建会话失败：'+e.message}
 finally{switchingChat=false}
}

async function openChat(id){if(busy.value)return;if(!store.authUser){saveLocalChat();const chat=localChats().find(c=>c.id===id);if(!chat)return;switchingChat=true;conversationId.value=id;mode.value=chat.mode;store.chat=chat.messages;localStorage.setItem('northstar-cue-active-chat',id);scriptPreview.value=null;input.value='';drawer.value='';switchingChat=false;scroll();return}if(!requireLogin())return;busy.value=true;try{const r=await cueConversation(id);conversationId.value=id;mode.value=r.conversation.mode;store.chat=(r.messages||[]).map(normalizeMessage);drawer.value='';scroll()}finally{busy.value=false}}
function seedWelcome(){if(!store.chat.length)store.chat.push({role:'ai',text:'我是 Cue。选择下方五个问题，查看意图路由、数据计算、知识检索、内容产物与排期执行。可展开回答中的过程记录，查看工具执行与来源引用。'})}
function workbenchContext(referencedDoc){
  return JSON.stringify({
    current_script:store.activeView==='scripts'?store.scriptContext:null,
    competitor_comparison:store.benchAnalysisContext,
    current_live_script:store.activeView==='live-script'?store.liveScriptContext:null,
    current_live_review:store.activeView==='live-summary'?store.liveReviewContext:null,
    referenced_documents:(Array.isArray(referencedDoc)?referencedDoc:[referencedDoc].filter(Boolean)).map(doc=>({title:doc.title,text:(doc.local_content||'').slice(0,Math.min(16000,Math.floor(26000/Math.max(1,(Array.isArray(referencedDoc)?referencedDoc.length:1)))))})),
    account_kpis:(store.kpis||[]).map(item=>({label:item.label,value:item.value,delta:item.delta})),
    recent_live:(store.liveSessions||[]).slice(0,8).map(item=>({date:item.d,title:item.title,views:item.view,peak:item.peak,gmv:item.gmv})),
    planned_content:(store.planningTasks||[]).slice(0,16).map(item=>({title:item.title,planned_at:item.planned_at,type:item.type}))
  })
}
function demoScriptReply(text, referencedDoc) {
  const ctx=store.scriptContext
  if (!ctx) return legacyAnswer(text)
  return {text:scriptOptimizationText(ctx,text,referencedDoc),routeLabel:'当前脚本 AI 继续优化',artifacts:[{type:'script',label:'将优化稿加入知识库'}]}
}

function rememberScript(message){if(!message.draft?.content)return;localStorage.setItem('northstar-latest-cue-script',JSON.stringify({...message.draft,document:message.knowledgeDocument||null}))}
function latestScript(){
 const message=store.chat.slice(0,-2).slice().reverse().find(item=>!item.error&&(item.draft?.content||item.artifacts?.some(a=>a.type==='script')))
 if(message){const draft=message.draft||{title:'Cue 生成脚本',content:message.text,type:'video'};const doc=message.knowledgeDocument;return doc?{...draft,title:doc.title,content:doc.local_content||draft.content,document:doc}:draft}
 try{return JSON.parse(localStorage.getItem('northstar-latest-cue-script')||'null')}catch{return null}
}
function findDraftDocument(draft){return draft.document||store.demoKnowledgeDocuments.find(doc=>doc.title===draft.title||doc.local_content===draft.content)}
function planningNotes(draft){const doc=findDraftDocument(draft);return (doc?'@'+doc.title+'\n\n':'')+(doc?.local_content||draft.content)}
async function runScenario(text,kind){
  const labels={query:'结构化数据查询',analysis:'指标分析',competitor:'竞品拆解',planning:'内容规划',schedule:'加入内容排期',hotspots:'热点规划'}
  const message={role:'ai',text:'',routeLabel:labels[kind],traceMode:'思考过程',steps:[],sources:[]}
  store.chat.push(message)
  const current=store.chat[store.chat.length-1]
  busy.value=true;scroll()
  const start=performance.now()
  async function stage(name,operation,execution='实际执行'){
    const step={name,status:'running',execution,detail:''}; current.steps.push(step); const index=current.steps.length-1
    await nextTick();scroll();const began=performance.now()
    try{
      const result=await operation()
      Object.assign(current.steps[index],{status:'done',detail:result,elapsed:Math.round(performance.now()-began)})
    }catch(e){Object.assign(current.steps[index],{status:'failed',detail:e.message});throw e}
  }
  try{
    await stage('意图路由 · classify',()=> '本轮问题：'+text+'\n匹配任务：'+labels[kind]+'；打开的脚本不会覆盖本轮意图。')
    const plans={query:'解析统计月份 → 读取增长明细 → 只读SQL汇总 → 交叉核对 → 汇总答案与引用',analysis:'读取9月话题归因表 → 汇总关注占比与归因关注 → 联网核验开学期背景 → 区分内部演示数据与外部事实 → 汇总答案与引用',competitor:'定位@文件 → 核验原片字幕 → 检索英语课程 → 拆解钩子/演示/交付 → 编写新稿并绑定引用',planning:'解析月份与直播目标 → 联网核验节点 → 检索课程与既有资料 → 调用直播脚本技能 → 整理完整产物',schedule:'解析上一份脚本 → 解析北京时间 → 写入排期 → 查询任务核验',hotspots:'拆解热点需求 → 联网搜索官方节点 → 核验来源日期 → 检索账号课程 → 形成选题建议'}
    await stage('任务规划 · planner',()=>plans[kind],'规则规划')
    let data
    await stage('脚本工具 · load_case',async()=>{
      data=structuredClone(fastCases)
      if(kind==='query'){const response=await fetch('/business-data/metrics.json');if(!response.ok)throw new Error('增长数据读取失败');data.followers=await response.json()}
      return kind==='query'?'载入用户增长明细口径；接下来执行SQL汇总。':'读取当前任务对应的内容产物与资料索引。'
    })
    if(kind==='schedule'){
      const referenced=availableDocs.value.find(doc=>text.includes('@'+doc.title));const draft=referenced?.local_content?{title:referenced.title,content:referenced.local_content,document:referenced,type:/直播/.test(text)?'live':'video'}:latestScript()
      await stage('上下文工具 · resolve_artifact',()=>{
        if(!draft?.content)throw new Error('还没有可引用的脚本。请先生成一份脚本，或 @ 选择知识库中的脚本文档。')
        return '引用最近生成的脚本：'+draft.title+'；保留完整正文。'
      })
      const date=nextTuesdayEvening()
      let saved
      await stage('排期工具 · save_planning',async()=>{
        const task={type:/直播/.test(text)?'live':draft.type||'video',title:draft.title,planned_at:date,notes:planningNotes(draft),document_id:findDraftDocument(draft)?.id}
        saved=store.authUser?{...await createPlanningTask(task),created:true}:saveGuestPlanningTask(task)
        return (saved.created?'创建任务':'已存在相同任务，跳过重复创建')+'；时间 '+date.replace('T',' ')+'（北京时间）；'+(store.authUser?'保存到账户排期。':'写入本地持久排期。')
      })
      await stage('写入核验 · verify',()=>{
        if(!store.planningTasks.some(item=>item.id===saved.task.id))throw new Error('排期核验失败')
        return '任务 '+saved.task.id+' 已在排期列表，刷新后可恢复。'
      })
      current.text='已把《'+draft.title+'》加入 '+date.slice(0,10)+'（下周二）20:00 的直播排期。\n\n保存内容：完整直播脚本、直播类型、标题与时间。可在内容排期查看并修改。'
      current.planningId=saved.task.id
    }else{
      let result
      let definitions,webResult
      if(kind==='analysis'||kind==='planning'||kind==='hotspots'){
        await stage('联网搜索 · websearch',async()=>{
          const query=kind==='analysis'?'2026年9月 秋季开学 家长 适应期':'2026 10月 国庆 放假安排 收心'
          const fallback=kind==='analysis'?'/cue-scenarios/september-external.json':'/cue-scenarios/websearch.json'
          try{const r=await fetch('/local-media/websearch?q='+encodeURIComponent(query),{signal:AbortSignal.timeout(10000)});if(!r.ok)throw new Error('实时搜索不可用');webResult=await r.json();if(!webResult.items?.length)throw new Error('实时搜索无结果')}catch(e){const r=await fetch(fallback);if(!r.ok)throw e;webResult=await r.json();current.steps[current.steps.length-1].execution='已核验联网资料缓存'}
          return '查询：'+webResult.query+'\n来源：'+webResult.items.map(i=>i.title+'\n'+i.uri).join('\n')+'\n读取方式：'+(webResult.mode==='live'?'本轮联网检索':'2026-10-10核验的官方资料缓存；不是实时热搜榜')
        })
      }
      if(kind==='query')await stage('数据API · SQL_query',async()=>{
        const r=await fetch('/local-media/query?month='+data.followers.month)
        if(!r.ok){current.steps[current.steps.length-1].execution='已核验SQL计算结果';return '本轮SQL服务不可用，读取导入时已核验的30天统计：'+JSON.stringify(data.followers)}
        const query=await r.json();if(query.result.days!==30||query.result.net!==data.followers.end-data.followers.start)throw new Error('SQL汇总与月末月初余额不一致')
        Object.assign(data.followers,query.result)
        return '只读SQLite查询：\n'+query.sql+'\n结果：'+JSON.stringify(query.result)
      })
      if(kind==='competitor')await stage('来源核验 · resolve_video',async()=>{
        const r=await fetch('/demo-docs/雪梨老师-英语背单词开窍.txt');if(!r.ok)throw new Error('引用的字幕文件不可读取');return await r.text()
      })
      await stage(kind==='query'||kind==='analysis'?'数据工具 · aggregate':'知识库工具 · retrieve',async()=>{
        await loadCourseDocuments()
        if(kind==='query'){result=scenarioResult(kind,data,store.courseDocuments);return '筛选 month='+data.followers.month+'；end-start='+(data.followers.end-data.followers.start)+'；follows-unfollows='+(data.followers.follows-data.followers.unfollows)+'。'}
        if(kind==='analysis'){await loadBusinessDocuments();data.topicAnalysis=store.businessDocuments.find(d=>d.id==='business-demo-2026-09-topic-attribution');data.followerSource=store.businessDocuments.find(d=>d.title==='视频号关注者增长详情数据.csv');result=scenarioResult(kind,data,store.courseDocuments);return '读取经营数据 / '+data.topicAnalysis.title+'：5类话题、1,229次问题与评论提及、12条视频、1,269个内容归因新增关注；同时读取账号9月新增关注口径。'}
        if(kind==='hotspots')return '按假期节点与账号教学方向检索课程原文；避免把月考日期当作统一全国日程。'
        if(kind==='competitor')return '已读取用户上传的雪梨背单词录屏（5.35秒）：9月28日，第195集，一找二切三拼、先找元音、再找辅音。检索产品课程 / 英语原文；扩写与原片字幕分开展示。'
        return '检索 产品课程 / 数学课程ppt.pptx：限时训练、错题整理与刷题方法；读取原文件提取正文。'
      })
      if(kind==='query'||kind==='analysis'){
        await stage('查知识库 · metric_definitions',async()=>{
          const response=await fetch('/cue-scenarios/definitions.json')
          if(!response.ok)throw new Error('指标口径资料读取失败')
          definitions=await response.json()
          return definitions.content
        })
      }
      result ||= scenarioResult(kind,data,store.courseDocuments)
      if(definitions){const number=result.sources.length+1;result.sources.push({number,title:definitions.title,locator:'知识口径文档',uri:'/cue-scenarios/definitions.json',text:definitions.content});result.text+='\n\n统计口径依据：['+number+']。'}
      if(webResult){const numbers=[];for(const item of webResult.items.slice(0,kind==='analysis'?2:1)){const number=result.sources.length+1;numbers.push(number);result.sources.push({number,title:item.title,locator:webResult.mode==='live'?'本轮联网检索':'已核验官方资料缓存',uri:item.uri,text:item.text})}if(kind==='planning')result.text+='\n\n直播节点依据：['+numbers[0]+']。';if(kind==='analysis')result.text+='\n\n外部背景核验：教育部将开学前后界定为教学准备和心理状态调试期，相关报道也把开学第一个月视为适应期。这支持“开学适应”作为9月内容背景，但不用于证明内部31.4%的占比；该比例仍只来自演示归因表。'+numbers.map(number=>'['+number+']').join('、')+'。'}
      if(kind==='planning'||kind==='competitor'||kind==='hotspots')await stage('技能调用 · '+(kind==='competitor'?'video_breakdown':kind==='hotspots'?'topic_planning':'live_script'),()=>result.summary+'\n输出组织：'+(kind==='competitor'?'原片可核验内容、课程依据、新稿口播与镜头。':'目标、开场、方法、示范、互动与执行。'),'本地内容模板')
      await stage('大模型 · summarize',()=>result.summary,'预设生成结果 · 未调用 HY3')
      await stage('结果工具 · citations_and_artifact',()=> '绑定 '+result.sources.length+' 个引用；'+(result.draft?'生成完整直播脚本，可继续加入排期。':'输出与本轮任务对应的答案。'))
      Object.assign(current,result);rememberScript(current)
    }
    current.elapsed=Math.round(performance.now()-start)
  }catch(e){current.text=e.message;current.error=true}
  finally{busy.value=false;scroll()}
}

const pendingQuestions=ref([]),requestRunning=ref(false)
async function drainQueue(){
 if(requestRunning.value||busy.value||!pendingQuestions.value.length)return
 requestRunning.value=true
 try{
  while(pendingQuestions.value.length){
   const item=pendingQuestions.value.shift()
   try{await executeChat(item.text,item.attachments,item.context)}
   catch(e){store.chat.push({role:'ai',error:true,text:'任务执行失败：'+e.message,sources:[],steps:[]})}
  }
 }finally{requestRunning.value=false}
}
watch(busy,value=>{if(!value)nextTick(drainQueue)})
function sendChat(q){
 const text=(q||input.value).trim()||(attachments.value.length?'请分析上传的资料':'')
 if(!text||uploading.value)return
 const submitted=attachments.value.slice()
 const docs=[...availableDocs.value.filter(doc=>text.includes('@'+doc.title)),...submitted.filter(a=>a.kind==='file')]
 pendingQuestions.value.push({id:crypto.randomUUID(),text,attachments:submitted,context:workbenchContext(docs)})
 attachments.value=[];input.value='';mentionedDoc.value=null;mentionDismissed.value=true
 drainQueue()
}
watch(()=>store.cueRequest,request=>{if(request?.question){sendChat(request.question);store.cueRequest=null}})
async function executeChat(text,submitted,capturedContext){
  uploadMenu.value=false
  focusQuestion.value=queuedExample.value?store.chat.length:null;queuedExample.value=false;tailSpace.value=0
  const selectedDocs=[...availableDocs.value.filter(doc=>text.includes('@'+doc.title)),...submitted.filter(a=>a.kind==='file')];const selected=selectedDocs[0]
  const fixedKind=!submitted.length?fixedScenarioKind(text):null
  const fixedExample=!!fixedKind
  if(!fixedExample)for(const doc of selectedDocs){
    if(!doc.local_content && /\.(txt|md)$/i.test(doc.title||'')){
      try{const response=await fetch(doc.uri||('/demo-docs/'+encodeURIComponent(doc.title)));if(response.ok){const value=await response.text();if(!/^\s*<!doctype html/i.test(value))doc.local_content=value}}catch{}
    }
  }
  if(selectedDocs.length){
    try{const snapshot=JSON.parse(capturedContext);snapshot.referenced_documents=selectedDocs.map(doc=>({title:doc.title,text:(doc.local_content||'').slice(0,16000)}));capturedContext=JSON.stringify(snapshot)}catch{}
  }
  const question=selectedDocs.reduce((value,doc)=>value.replaceAll('@'+doc.title,''),text).trim()
  const liveIntent=/上一场|上场|对比/.test(question)?1:/SOP|沉淀|话术.*流程/i.test(question)?3:/风险|掉人|下滑/.test(question)?4:/画面|光线|服装/.test(question)?2:/总结|概括|内容摘要/.test(question)?0:-1
  const liveMetric=/时长|播了多久|直播多久|多长时间/.test(question)?['直播时长','raw_duration']:/观看人数|多少人看/.test(question)?['观看人数','view']:/峰值|最高在线/.test(question)?['最高在线人数','peak']:/成交额|成交金额|GMV/i.test(question)?['成交金额','gmv']:null
  const reviewPrompt=liveIntent>=0?liveReviewPrompts[liveIntent]:question
  const inferred=fixedKind||identifyScenario(text)
  const history=store.chat.slice(-10).filter(m=>!m.error).map(m=>({role:m.role==='user'?'user':'assistant',content:(m.text||'').slice(0,4000)}))
  store.chat.push({role:'user',text,attachments:submitted.map(a=>({title:a.title,kind:a.kind})),mentionedDoc:selected?.title,mentionedDocs:selectedDocs.map(doc=>doc.title)})
  if(store.activeView==='live-script' && liveScriptPrompts.includes(text) && !submitted.length){
    let ctx;try{ctx=JSON.parse(capturedContext).current_live_script}catch{}
    const result=liveScriptExample(text,ctx)
    if(result?.schedule){
      busy.value=true
      try{
        const task={type:'live',title:result.title,planned_at:nextTuesdayEvening(),notes:result.content}
        const saved=store.authUser?await createPlanningTask(task):saveGuestPlanningTask(task)
        if(!saved.task?.id || !store.planningTasks.some(t=>t.id===saved.task.id))throw new Error('未确认任务写入，请检查排期列表')
        store.chat.push({role:'ai',text:(saved.local?'云端暂未同步，已在本地保存《':'已将《')+result.title+'》加入 '+task.planned_at.replace('T',' ')+'（北京时间）的直播排期。请到内容排期核对。',planningId:saved.task.id,routeLabel:'加入内容排期',sources:[result.source],steps:[{name:'读取当前直播脚本',status:'done',detail:result.title},{name:'保存并核对排期任务',status:'done',detail:saved.task.id}]})
      }catch(e){store.chat.push({role:'ai',error:true,text:'排期未完成：'+e.message,steps:[],sources:[result.source]})}
      finally{busy.value=false}
    }else if(result){store.chat.push({role:'ai',...result});rememberScript(result)}
    scroll();return
  }
    if(store.activeView==='live-summary' && liveIntent>=0 && !selectedDocs.length && !submitted.length){
      let ctx;try{ctx=JSON.parse(capturedContext).current_live_review}catch{}
      const session=ctx?.session
      let answer='请先选择一场直播。'
      if(session){
        const intro='当前复盘：'+session.d+' · '+session.title+'。\n\n'
        const frames=session.visual?.replay_frames||[]
        if(reviewPrompt===liveReviewPrompts[0]){
          const notes=(ctx.review?.script||[]).map(s=>s.k+'：'+s.v).join('\n')
          answer=intro+'**经营表现**\n观看人数：'+session.view+'；在线峰值：'+session.peak+'；成交金额：'+session.gmv+'。[1]\n\n**本场内容与关键节点**\n'+(notes||'本场主题：'+session.title+'。')+'\n\n'+(frames.length?frames.map(f=>'### '+f.label+'\n话题：'+f.topic+'\n'+(f.quote?'已记录话术：“'+f.quote+'”\n':'')+f.analysis).join('\n\n'):'尚未绑定完整逐字稿或关键画面，不能仅凭经营表格还原所有讲解。')+'\n\n**下一场可执行建议**\n'+(frames.length?'保留有明确阶段判断的方法讲解；用真实评论承接互动；缩短连续讲解，在卡点插入理解检查。':'补充逐字稿或关键截图后，核对表现变化附近的话题和互动。')+'\n\n说明：节点是回看线索，不直接证明成交或掉人原因。在线曲线截图估读与原报表峰值应区分口径。'
        }else if(reviewPrompt===liveReviewPrompts[1]){
          const previous=store.liveSessions.filter(s=>s.d<session.d).sort((a,b)=>b.d.localeCompare(a.d))[0]
          const parse=v=>v==null||String(v).trim()===''?null:Number(String(v).replace(/[^\d.-]/g,''))
          const compare=(label,key)=>{const a=parse(session[key]),b=parse(previous[key]);if(!Number.isFinite(a)||!Number.isFinite(b))return label+'：本场 '+(session[key]??'未记录')+'；上一场 '+(previous[key]??'未记录')+'，缺失数据暂不计算变化。';const delta=a-b;return label+'：'+b.toLocaleString()+' → '+a.toLocaleString()+'，'+(delta>0?'增加 ':delta<0?'减少 ':'持平 ')+Math.abs(delta).toLocaleString()+(b?'（'+(delta>0?'+':'')+(delta/b*100).toFixed(1)+'%）':'（上一场为0，不计算增长率）')}
          answer=intro+(previous?'对比上一场：'+previous.d+' · '+previous.title+'。\n\n'+[['观看人数','view'],['在线峰值','peak'],['成交金额（元）','gmv']].map(([label,key])=>compare(label,key)).join('\n')+'\n\n以上为逐场数据对比，指标变化需要结合两场话题与直播时长进一步判断。':'暂无更早场次，无法进行上一场对比。')
        }else if(reviewPrompt===liveReviewPrompts[2])answer=intro+(frames.length?'已绑定本场关键画面：'+frames.map(f=>f.label+'；话题：'+f.topic).join('\n')+'\n\n画面采用正面书桌口播、暖色背景和纸笔道具，重点信息位于顶部；建议在手机预览中检查字幕与福利提示的遮挡。':'这场尚未提供可核验的回放画面，请先补充本场截图。')
        else if(reviewPrompt===liveReviewPrompts[3])answer=intro+frames.filter(f=>f.kind!=='audience_drop').map(f=>f.label+'\n'+(f.quote?'金句：“'+f.quote+'”\n':'')+f.analysis).join('\n\n')+'\n\n建议 SOP：提出具体学习问题 → 给出阶段判断和金句 → 回应观众问题 → 匹配产品内容 → 自然介绍适用范围 → 直播后核验成交与留存。'
        else answer=intro+(frames.find(f=>f.kind==='audience_drop')?.analysis||'本场没有绑定风险节点证据，暂无法判断具体掉人原因。')
      }
      const creative=reviewPrompt===liveReviewPrompts[3]
      if(creative)mode.value='creative'
      const sources=session?[{number:1,title:session.d+' 直播数据与复盘记录',locator:'当前选中场次',uri:session.source_uri,text:'观看 '+session.view+'；在线峰值 '+session.peak+'；成交 '+session.gmv},...(session.visual?.replay_frames||[]).map((f,i)=>({number:i+2,title:f.label,locator:'用户提供的本场截图',uri:f.url,text:f.topic+'；'+(f.quote||'')+'；'+f.analysis}))]:[]
      if(reviewPrompt===liveReviewPrompts[1]&&session){const prev=store.liveSessions.filter(s=>s.d<session.d).sort((a,b)=>b.d.localeCompare(a.d))[0];if(prev)sources.push({number:sources.length+1,title:prev.d+' 上一场直播数据',locator:'上一场对比依据',uri:prev.source_uri,text:'观看 '+prev.view+'；峰值 '+prev.peak+'；成交 '+prev.gmv})}
      store.chat.push({role:'ai',text:answer,routeLabel:creative?'创意 · SOP方案':'直播复盘分析',sources,artifacts:creative?[{type:'script',label:'查看完整 SOP'},{type:'document',label:'加入知识库'}]:[],draft:creative?{title:session?.d+' 直播互动与自然塑品 SOP',content:answer,type:'document'}:undefined,steps:[
        {name:'场次定位 · resolve_session',status:'done',execution:'本地执行',detail:session?session.d+' · '+session.title:'未选择场次'},
        {name:reviewPrompt===liveReviewPrompts[1]?'逐场指标计算 · compare':'复盘资料读取 · retrieve',status:'done',execution:'本地执行',detail:reviewPrompt===liveReviewPrompts[1]?'按日期查找前一场，比较观看人数、在线峰值和成交金额；上一场为0时不计算增长率。':'读取当前场次复盘文本和已绑定截图节点。'},
        {name:'结果组织 · summarize',status:'done',execution:'本地模板 · 未调用模型',detail:'依据本场资料组织回答，保留缺失数据和统计口径说明。'}
      ]});scroll();return
    }
  if(/请详细分析清华优优与.+的竞品差异/.test(text)&&!submitted.length){
    const name=text.match(/请详细分析清华优优与(.+?)的竞品差异/)?.[1]
    if(name?.includes('杨奇函')){mode.value='analysis';store.chat.push({role:'ai',...yangQihanComparison()});scroll();return}
    const context=capturedContext.competitor_comparison
    const matched=context?.peer?.name===name
    const structure=matched?context.content_structure:null
    mode.value='analysis'
    store.chat.push({role:'ai',routeLabel:'竞品分析',text:`## 清华优优 × ${name}：竞品差异与下一步

**建议优先测试“明确问题 → 方法演示 → 可执行清单”，用家长配合与直播答疑形成自己的内容路径。**

### 资料事实与边界
清华优优在工作台中的定位是高中学习方法、家长沟通与直播答疑。${matched?'当前对比页的数据为演示资料，不能作为已核验的真实经营成绩。':'当前没有与该账号名称一致的完整对比资料；不套用其他账号的数据或履历。'}
${matched?context.comparison.map(row=>`- ${row[0]}：清华优优 ${row[1]}；${name} ${row[3]}（演示数据）`).join('\n'):''}

### 内容结构与可借鉴方法
${structure?`当前页面展示：清华优优采用“${structure.own}”；对标示例采用“${structure.peer}”。这是页面示例结构，仍需原片核验。`:'尚未核验该账号原片，不推断其具体话术、镜头或转化链路。'}
建议一条内容只解决一个具体卡点，用例题或任务卡演示方法，再用评论问题引出直播答疑。

### 差异化机会
把学生学习方法延展为“家长怎样配合”的第二视角：学生得到练习步骤，家长得到提问与检查方法。此结论为策略建议，需发布后验证。

### 下一步选题与排期草案
- 第一周：《月考后先抓住这三个失分点》，交付错题分类卡；直播做案例诊断。
- 第二周：《订正后为什么还会错》，展示一次同类回测；直播答疑常见卡点。
- 第三周：《家长检查作业该问什么》，交付三句提问；直播演示沟通。
- 第四周：复盘前三周的播放、关注转化与评论问题，选择有效结构继续迭代。

这些是可编辑建议，尚未写入排期。真实粉丝数、实时互动率与成交数据未核验。`,sources:matched?[{number:1,title:`清华优优 vs ${name}｜当前对比资料`,locator:'工作台演示资料',text:context.data_note}]:[],steps:[{name:'核对当前对标账号',status:'done',detail:name},{name:'整理对比资料与来源边界',status:'done',detail:matched?'使用当前页面对比快照；标记演示数据。':'账号资料不足，不套用其他账号。'},{name:'输出内容与行动建议',status:'done',detail:'返回预先整理的示例方案，未实时调用大模型。'}],artifacts:[{type:'document',label:'加入知识库'},{type:'planning',label:'加入内容排期'}]});scroll();return
  }
  if(/杨奇函/.test(text)&&/竞品|对比|差异|分析/.test(text)&&!submitted.length){mode.value='analysis';store.chat.push({role:'ai',...yangQihanComparison()});scroll();return}
  if(fixedExample){
    mode.value=scenarioModes[inferred]||'analysis'
    if(inferred==='schedule'){await runScenario(text,inferred);return}
    const started=performance.now()
    const result=scenarioResult(inferred,{...fastCases,followers:fastFollowers},[...store.courseDocuments,...fastCourseSnapshot])
    if(result){
      if(inferred==='query'||inferred==='analysis'){
        const number=result.sources.length+1
        result.sources.push({number,title:fastDefinitions.title,locator:'预置指标口径',uri:'/cue-scenarios/definitions.json',text:fastDefinitions.content})
        result.text+='\n\n统计口径依据：['+number+']。'
      }
      const labels={query:'结构化数据查询',analysis:'指标分析',competitor:'竞品拆解',planning:'内容规划'}
      const message={role:'ai',...result,routeLabel:labels[inferred],traceMode:'思考过程',steps:[
        {name:'识别问题与任务',status:'done',execution:'规则匹配',detail:'匹配固定示例问题，选择'+labels[inferred]+'流程。'},
        {name:'定位资料与课程原文',status:'done',execution:'读取已解析资料快照',detail:result.sources.map(source=>source.title+' · '+source.locator).join('\n')},
        {name:'整理分析与产物',status:'done',execution:'预设流程摘要',detail:result.summary+'；本轮复用已有结果，未重新调用模型或联网检索。'},
        {name:'绑定引用与后续操作',status:'done',execution:'结果整理',detail:'保留'+result.sources.length+'个来源及对应知识库、脚本或排期入口。'}
      ]}
      store.chat.push(message);rememberScript(message);scroll();return
    }
  }
  busy.value=true;scroll()
  busy.value=true
  try{const intent=await cueClassifyIntent(question,store.activeView);mode.value=intent.mode}
  catch{mode.value=inferred?scenarioModes[inferred]:'analysis'}
  finally{busy.value=false}
  if(demoFlow.value&&!submitted.length){
    if(store.activeView==='live-summary'&&liveMetric&&liveIntent<0&&!selectedDocs.length){
      const session=store.liveReviewContext?.session
      const value=session?.[liveMetric[1]]??(liveMetric[1]==='raw_duration'?session?.dur:undefined)
      store.chat.push({role:'ai',routeLabel:'直播指标查询',text:session?'**本场'+liveMetric[0]+'：'+(value??'未记录')+'。**\n\n'+session.d+' · '+session.title:'请先选择一场直播。',sources:session?[{number:1,title:'视频号直播历史数据.csv',locator:'第 '+session.source_page+' 行 · '+liveMetric[0],uri:session.source_uri,text:liveMetric[0]+'：'+(value??'未记录')}]:[],steps:[{name:'定位当前场次',status:'done',detail:session?.d||'未选择场次'},{name:'读取报表对应字段',status:'done',detail:liveMetric[0]+'；不套用内容总结模板'}]})
      scroll();return
    }
    if(isScriptDetail.value && /^优化当前脚本/.test(text)){
      const result=optimizedScript(store.scriptContext)
      if(result){mode.value='creative';store.chat.push({role:'ai',...result});rememberScript(result);scroll();return}
    }
    const kind=identifyScenario(question)
    if(kind && !selectedDocs.length && (scenarioPrompts.includes(text)||kind==='schedule')){
      await runScenario(text,kind);return
    }
  }

  const resumeRequest={question:text,context:capturedContext,history,options:{mode:mode.value==='planning'?'creative':mode.value,conversation_id:conversationId.value,document_ids:selectedDocs.filter(doc=>!submitted.includes(doc)).map(doc=>doc.id).slice(0,20),images:submitted.filter(a=>a.kind==='image').map(a=>({title:a.title,url:a.image}))}}
  busy.value=true;scroll()
  try{
    // 所有问题都经后端路由与大模型处理；@资料额外收窄为指定文档检索。
    const r=await (store.authUser?cueAsk:cueGuestAsk)(text,resumeRequest.context,history,resumeRequest.options)
    if(/竞品差异/.test(text))r.artifacts=[{type:'document',label:'加入知识库'},{type:'planning',label:'加入内容排期'}]
    conversationId.value=r.conversation_id||conversationId.value
    store.chat.push({role:'ai',text:r.answer,chart:r.chart,route:r.route,routeLabel:r.route_label||routeLabels[r.route],sources:r.sources||[],steps:r.steps||[],artifacts:r.artifacts||[],traceMode:'服务端执行记录'})
    await loadSidebar()
  }catch(e){store.chat.push({role:'ai',text:'Cue 暂时无法回答：'+(e.message||'请稍后重试'),error:true,canContinue:!!e.canContinue,resumeRequest,sources:selectedDocs.map((doc,i)=>({number:i+1,title:doc.title,locator:'本轮指定资料 · 请求失败，尚未完成分析',uri:doc.uri,text:'引用已保留，可点击重新生成重试。'})),steps:[{name:'请求模型回答',status:'failed',detail:e.message||'连接失败；没有生成结论'}]})}
  finally{busy.value=false;scroll()}
}
function selectMention(doc){
 const range=mentionRange.value;if(!range)return
 input.value=input.value.slice(0,range.start)+'@'+doc.title+' '+input.value.slice(range.end)
 mentionedDoc.value=doc;caret.value=range.start+doc.title.length+2;mentionDismissed.value=true
 nextTick(()=>{composerEl.value?.focus();composerEl.value?.setSelectionRange(caret.value,caret.value)})
}
function removeMention(doc){input.value=input.value.replace('@'+doc.title,'');if(mentionedDoc.value?.id===doc.id)mentionedDoc.value=null;caret.value=Math.min(caret.value,input.value.length)}

function downloadMarkdown() {
  if (!scriptPreview.value) return
  const file=URL.createObjectURL(new Blob([scriptPreview.value.content],{type:'text/markdown;charset=utf-8'}))
  const a=document.createElement('a');a.href=file;a.download=scriptPreview.value.title+'.md';a.click();URL.revokeObjectURL(file)
}
async function saveArtifact(message,type){
  if(type==='script'&&message.draft?.type==='document'){scriptPreview.value={title:message.draft.title,content:message.draft.content,message,spaceId:knowledgeSpaces.value[0]?.id||'',saved:false};return}
  if(type==='document'){store.knowledgeSaveDraft={title:message.draft?.title||'Cue 分析',content:message.draft?.content||message.text,subspace:'内容生产',onSaved:doc=>{message.knowledgeDocument=doc;rememberScript(message);loadSidebar()}};return}
  if(!store.authUser&&type==='planning'){saveGuestPlanningTask({type:'video',title:'竞品分析后续选题',planned_at:nextTuesdayEvening(),notes:message.text});message.artifactNotice='已加入内容排期，可继续编辑。';store.activeView='planning';return}
  if(type!=='script'&&!requireLogin())return
  const title=message.draft?.title||`${type==='script'?'脚本':type==='planning'?'排期':'分析文档'} · ${new Date().toLocaleDateString('zh-CN')}`
  const content=message.draft?.content||message.text
  if(type==='script'){
    scriptPreview.value={title,content,message,spaceId:knowledgeSpaces.value[0]?.id||'',saved:false}
    return
  }
  try{
    const saved=await cueSaveArtifact({conversation_id:conversationId.value,title,artifact_type:type,content,sources:message.sources||[],save_to_knowledge:type==='document'||type==='script'})
    if(type==='planning'&&saved.task){if(!Array.isArray(store.planningTasks)) store.planningTasks=[];store.planningTasks.push(saved.task);store.activeView='planning';message.artifactNotice='已加入未来四周内容排期，可在甘特图中继续修改。'}
    if(type==='document'&&saved.document){store.activeView='wiki';message.artifactNotice='已保存到知识库。'}
  }catch(e){message.artifactNotice='保存失败：'+(e.message||'请稍后重试')}
}
async function savePreviewToKnowledge(){
  if(!scriptPreview.value||scriptPreview.value.saved)return
  {
    const preview=scriptPreview.value
    store.knowledgeSaveDraft={title:preview.title,content:preview.content,subspace:'短视频脚本',onSaved:doc=>{preview.message.knowledgeDocument=doc;rememberScript(preview.message);preview.saved=true;preview.message.artifactNotice='已保存到知识库。'}}
    return
  }
  try{
    const saved=await cueSaveArtifact({conversation_id:conversationId.value,title:scriptPreview.value.title,artifact_type:'script',content:scriptPreview.value.content,sources:scriptPreview.value.message.sources||[],save_to_knowledge:true,space_id:scriptPreview.value.spaceId||null})
    scriptPreview.value.saved=true
    scriptPreview.value.document=saved.document
    scriptPreview.value.message.artifactNotice='已保存到知识库。'
    await loadSidebar()
  }catch(e){scriptPreview.value.error='保存失败：'+(e.message||'请稍后重试')}
}
async function createTask(){if(!requireLogin())return;const prompt=input.value.trim()||'每周扫描教育类竞品公开内容，识别高潜选题并生成适合清华优优的脚本草稿';try{await cueCreateTask({title:'每周竞品爆款监控',prompt,cadence:'每周一 09:00'});input.value='';await loadSidebar();drawer.value='tasks'}catch(e){/* 旧版后端不支持定时任务时静默保留输入 */}}
function seedWelcomeAndLoad(){if(!store.authUser){conversations.value=localChats();const active=conversations.value.find(c=>c.id===localStorage.getItem('northstar-cue-active-chat'));if(active&&!store.chat.some(m=>m.role==='user')){switchingChat=true;conversationId.value=active.id;mode.value=active.mode;store.chat=active.messages;switchingChat=false}}seedWelcome();loadSidebar()}
onMounted(seedWelcomeAndLoad);watch(()=>store.authUser?.id,()=>{conversationId.value=null;store.chat=[];seedWelcomeAndLoad()})
</script>
<template>
<aside class="copilot-panel" :class="{collapsed:!store.copilotOpen&&!props.mobile,mobile:props.mobile}">
  <template v-if="!props.mobile"><div class="cp-toggle" @click="store.copilotOpen=!store.copilotOpen">{{store.copilotOpen?'◀':'▶'}}</div><div class="cp-collapsed-bar"><span class="vt">Cue · 分析与规划</span></div></template>
  <div class="cp-inner">
    <div class="cue-head"><div><span class="badge">✦</span><b>Cue</b></div><div><button @click="newChat" :disabled="busy" :title="busy?'正在生成回答':'新建会话'" aria-label="新建会话">＋</button><button @click="drawer=drawer==='history'?'':'history'">会话</button><button @click="drawer=drawer==='tasks'?'':'tasks'">任务</button></div></div>
    <div class="cue-modes"><button v-for="m in modes" :key="m[0]" :class="{active:mode===m[0]}" @click="mode=m[0]">{{m[1]}}</button></div>
    <div v-if="drawer==='history'" class="cue-drawer-mini"><header><b>历史会话</b><button @click="drawer=''">×</button></header><button v-for="c in conversations" :key="c.id" class="cue-list" @click="openChat(c.id)"><b>{{c.title}}</b><small>{{c.mode}} · {{c.message_count}} 条</small></button><p v-if="!conversations.length">暂无历史会话</p></div>
    <div v-if="drawer==='tasks'" class="cue-drawer-mini"><header><b>定时任务</b><button @click="drawer=''">×</button></header><button class="task-create" @click="createTask">＋ 创建每周竞品监控</button><article v-for="t in tasks" :key="t.id"><b>{{t.title}}</b><small>{{t.cadence}} · {{t.status}}</small><p>{{t.prompt}}</p></article></div>
    <div v-if="scriptPreview" class="script-preview"><header><div><small>MARKDOWN SCRIPT · {{scriptPreview.saved?'已保存到知识库':'预览草稿'}}</small><input v-model="scriptPreview.title" aria-label="文件名称"></div><button @click="scriptPreview=null">×</button></header><pre>{{scriptPreview.content}}</pre><p v-if="scriptPreview.error" class="preview-error">{{scriptPreview.error}}</p><footer><button :disabled="scriptPreview.saved" @click="savePreviewToKnowledge">{{scriptPreview.saved?'已加入知识库':'加入知识库'}}</button><button v-if="scriptPreview.saved" @click="store.activeView='wiki';scriptPreview=null">查看知识库</button><button @click="saveArtifact(scriptPreview.message,'planning')">加入内容排期</button><button class="download" @click="downloadMarkdown">下载 .md</button></footer></div>
    <div v-else class="cp-body" ref="bodyEl"><div v-for="(m,i) in store.chat" :key="i" :data-message-index="i" class="cp-msg" :class="m.role"><div class="role">{{m.role==='user'?'你':'Cue'}}</div><div v-if="m.routeLabel" class="route">{{m.routeLabel}}</div><details v-if="m.role!=='user'" class="cue-process"><summary>{{'思考过程'}} · {{processSteps(m).length}} 步<span v-if="m.elapsed!==undefined"> · {{m.elapsed}} ms</span></summary><ol><li v-for="(s,n) in processSteps(m)" :key="n"><span>{{s.status==='running'?'◌':s.status==='failed'?'!':'✓'}}</span><div><b>{{n+1}}. {{s.name}}</b><small v-if="s.execution">{{s.execution}}<template v-if="s.elapsed!==undefined"> · {{s.elapsed}} ms</template></small><details v-if="s.detail"><summary>输入与结果</summary><p>{{displayError(s.detail)}}</p></details></div></li></ol></details><div class="bubble" :class="{'cue-error':m.error}"><template v-if="m.role==='user'"><template v-for="(part,index) in messageParts(m)" :key="index"><span v-if="part.title" class="mention-token">▤ @{{part.title}}</span><template v-else>{{part.text}}</template></template></template><template v-else><FollowerTrend :chart="m.chart || m.steps?.find(s=>s.chart)?.chart" /><AnswerMarkdown :text="answerText(m)" /></template></div><button v-if="m.planningId" class="trace-plan-link" @click="store.activeView='planning'">查看直播排期 →</button>
      
      <details v-if="m.role!=='user'" class="cue-source"><summary>使用资料来源 · {{messageSources(m).length}}</summary><article v-for="s in messageSources(m)" :key="s.chunk_id||s.number"><b :title="s.title+' · '+(s.locator||'')">[{{s.number}}] {{s.title}} · {{s.locator}}</b><p>{{s.text}}</p><button v-if="isKnowledgeSource(s)" class="knowledge-source-link" @click="openKnowledgeSource(s)">查看知识库文档 ↗</button><a v-else-if="s.uri" :class="{'web-source-card':s.web}" :href="s.uri" target="_blank" rel="noopener">{{s.web?'↗ 查看联网资料 · '+s.title:'打开引用原文件 ↗'}}</a></article><p v-if="!messageSources(m).length">本条回答未提供可核验的资料引用。</p></details>
      <div v-if="m.attachments?.length" class="sent-attachments"><span v-for="(a,j) in m.attachments" :key="j">{{a.kind==='image'?'▧':'▤'}} {{a.title}}</span></div><button v-if="m.canContinue" class="continue-answer" :disabled="busy" @click="continueAnswer(m)">{{busy?'处理中…':'继续'}}</button><div class="message-toolbar"><button @click="copyMessage(m)" title="复制" aria-label="复制"><Copy :size="16" /></button><template v-if="m.role==='ai'"><button :disabled="busy||!store.chat.slice(0,i).some(item=>item.role==='user')" @click="regenerate(i)" title="重新生成" aria-label="重新生成"><RefreshCw :size="16" /></button><button :class="{chosen:feedback[messageKey(m)]==='up'}" :aria-pressed="feedback[messageKey(m)]==='up'" @click="vote(m,'up')" title="点赞" aria-label="点赞"><ThumbsUp :size="16" /></button><button :class="{chosen:feedback[messageKey(m)]==='down'}" :aria-pressed="feedback[messageKey(m)]==='down'" @click="vote(m,'down')" title="点踩" aria-label="点踩"><ThumbsDown :size="16" /></button><button @click="shareMessage(m)" title="分享" aria-label="分享"><Share2 :size="16" /></button></template></div>
      <div v-if="m.role==='ai'&&m.artifacts?.length" class="cue-actions"><button v-for="a in m.artifacts" :key="a.type" @click="saveArtifact(m,a.type)">{{a.label}}</button></div><p v-if="m.artifactNotice" class="artifact-notice">{{m.artifactNotice}}</p>
    </div><div v-if="busy" class="cp-msg ai">正在路由任务、调用资料并生成回答…</div></div>
    <div v-if="store.chat.some(m=>m.role==='user')" class="latest-message-control"><button title="回到底部" aria-label="回到底部，查看最新消息" @click="jumpToLatest"><ArrowDown :size="18" /></button></div><div v-if="actionNotice" class="message-notice" role="status">{{actionNotice}}</div><div class="quick"><button v-if="isScriptDetail" class="script-optimize" @click="optimizeCurrentScript">优化当前脚本</button><button v-for="q in prompts" :key="q" @click="chooseExample(q)">{{q}}</button></div>
    <div v-if="pendingQuestions.length" class="question-waitlist" aria-live="polite"><header><b>待发送 · {{pendingQuestions.length}}</b><small>当前回答结束后依次发送</small></header><div v-for="(item,index) in pendingQuestions" :key="item.id"><span>{{index+1}}. {{item.text}}<small v-if="item.attachments.length"> · {{item.attachments.length}} 个附件</small></span><button @click="pendingQuestions=pendingQuestions.filter(q=>q.id!==item.id)" :aria-label="'移除排队问题 '+(index+1)">×</button></div></div>
    <div v-for="doc in referencedDocs" :key="doc.id" class="mention-chip">@ {{doc.title}} <button @click="removeMention(doc)" :aria-label="'移除引用 '+doc.title">×</button></div><div class="attachment-list"><span v-for="a in attachments" :key="a.id"><img v-if="a.image" :src="a.image" alt="图片附件"><b>{{a.title}}</b><button @click="attachments=attachments.filter(item=>item.id!==a.id)" aria-label="移除附件">×</button></span></div><p v-if="uploadError" class="upload-error">{{uploadError}}</p><input ref="uploadEl" type="file" multiple accept="image/png,image/jpeg,image/webp,image/gif,image/bmp,.xlsx,.xls,.pptx,.ppt,.csv,.tsv,.md,.txt,.pdf,.docx,.srt,.vtt" hidden @change="addAttachments"><div class="composer-wrap" :class="{dragging}" @dragover.prevent="dragging=true" @dragleave.prevent="dragging=false" @drop.prevent="!uploading&&addAttachments($event)"><div class="cp-input"><textarea ref="composerEl" v-model="input" maxlength="4000" rows="2" aria-label="Cue 问题输入框" placeholder="输入问题，或拖拽图片和文件到这里；输入 @ 可引用知识库资料" @input="trackCaret" @click="trackCaret" @keyup="trackCaret" @keydown.esc="mentionDismissed=true" @keydown.enter.exact.prevent="mentionRange?mentionCandidates[0]&&selectMention(mentionCandidates[0]):sendChat()"></textarea><button class="send" :disabled="uploading||(!input.trim()&&!attachments.length)" :title="busy||requestRunning?'加入待发送队列':'发送'" :aria-label="busy||requestRunning?'加入待发送队列':'发送'" @click="sendChat()"><ListPlus v-if="busy||requestRunning" :size="22" /><ArrowUp v-else :size="23" :stroke-width="2.5" /></button></div><div class="composer-actions"><button class="attach-plus" :disabled="uploading" @click="uploadMenu=!uploadMenu" aria-label="上传附件" :aria-expanded="uploadMenu">＋</button><small v-if="uploading">解析附件中…</small><div v-if="uploadMenu" class="upload-menu"><button @click="chooseUpload(true)">上传图片 <small>最多20张 · 每张20 MB</small></button><button @click="chooseUpload(false)">上传文件 <small>最多20个 · 每个500 MB</small></button></div></div><div v-if="mentionRange" class="mention-menu"><button v-for="doc in mentionCandidates" :key="doc.id" @mousedown.prevent="selectMention(doc)"><b>{{doc.title}}</b><small>{{doc.subspace||'文档'}} · {{doc.chunk_count||0}} 段</small></button><p v-if="!mentionCandidates.length" class="mention-empty">没有匹配的知识库文档</p></div></div>
  </div>
</aside>
</template>
<style scoped>
.composer-wrap{position:relative;flex:none}.composer-wrap .mention-menu{bottom:calc(100% + 4px);max-height:240px}.mention-empty{padding:10px;font-size:12px;color:#68776e}

.cp-input{align-items:flex-end}.cp-input textarea{box-sizing:border-box;flex:0 1 auto;width:100%;min-width:120px;max-width:100%;height:56px;min-height:46px;max-height:45vh;resize:both;overflow:auto;border:1px solid var(--border);border-radius:10px;padding:10px 12px;background:white;color:var(--text);font:inherit;line-height:1.5}.cp-input textarea:focus{outline:2px solid #acd9bd;outline-offset:1px}

.cue-flow-switch{display:flex;gap:6px;padding:8px 12px;border-bottom:1px solid var(--border)}.cue-flow-switch button{flex:1;padding:7px;border:1px solid #dce4df;border-radius:7px;background:white;color:#68776e;cursor:pointer}.cue-flow-switch button.active{background:#eaf6ed;color:#176f43;border-color:#a4cbb0}.cue-process p{white-space:pre-wrap;line-height:1.6}.cue-process li>div{flex:1}.trace-plan-link{margin-top:10px;padding:8px;color:#176f43;background:#edf7ef;border:1px solid #bdd8c3;border-radius:7px;cursor:pointer}.cue-head{display:flex;justify-content:space-between;align-items:center;padding:12px 14px;border-bottom:1px solid var(--border)}.cue-head>div{display:flex;align-items:center;gap:7px}.cue-head button,.cue-modes button,.quick button,.cue-actions button,.cue-drawer-mini button{border:1px solid var(--border);border-radius:7px;background:#fff;padding:6px 8px;cursor:pointer;font-size:10px}.cue-modes{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:4px;padding:8px 12px;border-bottom:1px solid var(--border)}.cue-modes button.active{background:#173a27;color:#fff;border-color:#173a27}.bubble{white-space:pre-wrap}.route{display:inline-block;margin-bottom:6px;padding:3px 7px;border-radius:99px;background:#e8f5ec;color:#147142;font-size:10px}.cue-process,.cue-source{margin-top:8px;padding:8px;background:#f5f5f0;border-radius:8px;font-size:11px;overflow-wrap:anywhere}.cue-process summary,.cue-source summary{cursor:pointer;font-weight:700}.cue-process ol{padding:0;margin:9px 0;list-style:none}.cue-process li{display:flex;gap:8px;padding:5px 0}.cue-process li>span{color:#159250}.cue-process small{display:block;color:#777;margin-top:2px}.cue-source article{padding:8px 0;border-top:1px solid #ddd}.cue-source p{line-height:1.6;margin:4px 0;color:#666}.cue-error{color:#a33325}.cue-actions{display:flex;gap:5px;flex-wrap:wrap;margin-top:8px}.cue-actions button{background:#fff;color:#176f43}.artifact-notice{margin:7px 0 0;color:#177143;font-size:10px;line-height:1.45}.quick{display:flex;flex-direction:column;gap:6px;overflow:visible;padding:9px 10px;border-top:1px solid var(--border)}.quick button{white-space:normal;overflow-wrap:anywhere;text-align:left;width:100%;padding:8px 10px;line-height:1.5;color:#555;flex-shrink:0}.quick .script-optimize{color:#176f43;border-color:#9fc8aa;background:#f0f8f1}.cue-drawer-mini{position:absolute;z-index:8;top:50px;left:10px;right:10px;max-height:70%;overflow:auto;padding:10px;border:1px solid var(--border);border-radius:10px;background:#fff;box-shadow:0 12px 34px rgba(0,0,0,.16)}.cue-drawer-mini header{display:flex;justify-content:space-between;align-items:center}.cue-list{display:block!important;width:100%;text-align:left;margin-top:6px}.cue-list small,.cue-drawer-mini article small{display:block;color:#777;margin-top:3px}.cue-drawer-mini article{padding:10px 4px;border-bottom:1px solid #eee}.cue-drawer-mini article p{font-size:10px;color:#666}.task-create{width:100%;margin:8px 0;color:#167041}.cp-inner{position:relative;height:100%;display:flex;flex-direction:column}.cp-body{flex:1;overflow:auto}.cp-input{flex:none}.mention-chip{font-size:10px;color:#176f43;background:#eaf6ed;margin:0 10px 5px;padding:5px 7px;border-radius:7px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mention-chip button{float:right;border:0;background:transparent;color:#176f43}.mention-menu{position:absolute;z-index:10;bottom:48px;left:10px;right:10px;max-height:170px;overflow:auto;background:#fff;border:1px solid var(--border);border-radius:9px;box-shadow:0 8px 22px rgba(0,0,0,.12)}.mention-menu button{display:flex;width:100%;justify-content:space-between;gap:8px;text-align:left;border:0;border-bottom:1px solid #eee;background:#fff;padding:8px;font-size:10px}.mention-menu small{color:#777;white-space:nowrap}.script-preview{flex:1;min-height:0;display:flex;flex-direction:column;background:#fff}.script-preview header{display:flex;justify-content:space-between;gap:8px;padding:13px 14px;border-bottom:1px solid var(--border)}.script-preview header small{display:block;font-size:9px;color:#248356;letter-spacing:.6px}.script-preview header input{width:100%;margin-top:5px;border:0;padding:0;font-weight:700;font-size:12px;color:#202b24;background:transparent}.script-preview header button{border:0;background:transparent;font-size:20px;line-height:1;color:#68756b}.preview-space{display:flex;align-items:center;gap:7px;padding:8px 14px;border-bottom:1px solid var(--border);font-size:10px}.preview-space select{flex:1;min-width:0;border:1px solid var(--border);border-radius:5px;background:#fff;padding:5px;font-size:10px}.script-preview pre{flex:1;min-height:0;overflow:auto;margin:0;padding:15px;white-space:pre-wrap;font:11px/1.8 ui-monospace,SFMono-Regular,Menlo,monospace;color:#202b24;background:#fbfcfa}.preview-error{margin:0;padding:7px 14px;color:#a33325;font-size:10px}.script-preview footer{display:flex;gap:6px;flex-wrap:wrap;padding:10px;border-top:1px solid var(--border)}.script-preview footer button{border:1px solid #bdd8c3;border-radius:6px;background:#f3fbf5;color:#146e43;padding:6px 8px;font-size:10px}.script-preview footer .download{border-color:var(--border);background:#fff;color:#536057}
</style>

<style scoped>
.cp-input{align-items:flex-end}.cp-input textarea{box-sizing:border-box;flex:0 1 auto;width:100%;min-width:120px;max-width:100%;height:56px;min-height:46px;max-height:45vh;resize:both;overflow:auto;border:1px solid var(--border);border-radius:10px;padding:10px 12px;background:white;color:var(--text);font:inherit;line-height:1.5}.cp-input textarea:focus{outline:2px solid #acd9bd;outline-offset:1px}
.mention-token{display:inline-flex;padding:5px 9px;margin:0 5px 5px 0;border:1px solid #91bda1;background:#f7fcf8;border-radius:7px;color:#176f43;font-size:12px}.mention-chip{border:1px solid #91bda1;border-radius:7px}</style>

<style scoped>
.cue-source article{min-width:0}
.cue-source article b{display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.cue-source article p{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;overflow:hidden;white-space:normal;overflow-wrap:anywhere;line-height:1.6;max-height:4.8em}
</style>

<style scoped>
.message-toolbar{display:flex;align-items:center;gap:5px;margin:8px 0}.message-toolbar button{display:grid;place-items:center;padding:7px;border:0;border-radius:6px;background:transparent;color:#819087;cursor:pointer}.message-toolbar button:hover,.message-toolbar button.chosen{color:#177348;background:#e4f4e9}.message-toolbar button:disabled{opacity:.35;cursor:default}.cp-msg.user .message-toolbar{justify-content:flex-end}.message-notice{padding:7px 15px;background:#eaf6ee;color:#177348;font-size:12px}
</style>

<style scoped>
.latest-message-control{display:flex;justify-content:center;height:0;position:relative;z-index:8}.latest-message-control button{position:absolute;bottom:10px;width:34px;height:34px;border:1px solid #d8e8dd;border-radius:50%;display:grid;place-items:center;background:#fff;color:#177348;box-shadow:0 3px 12px #173c2920;cursor:pointer}.latest-message-control button:hover{background:#eaf6ee}.latest-message-control button:focus-visible{outline:3px solid #9bd0b3}
</style>

<style scoped>.continue-answer{margin:10px 0;padding:8px 18px;border:1px solid #177348;border-radius:8px;background:#177348;color:white;cursor:pointer}.continue-answer:disabled{opacity:.5}</style>

<style scoped>.attachment-list{display:flex;flex-wrap:wrap;gap:6px}.attachment-list span,.sent-attachments span{display:inline-flex;align-items:center;gap:6px;padding:6px;background:#e2f1e7;border-radius:8px;font-size:12px;max-width:100%}.attachment-list img{width:44px;height:44px;object-fit:contain}.attachment-list b{overflow:hidden;text-overflow:ellipsis;max-width:180px}.upload-attachment{color:#17643e;margin:8px 0;padding:6px 10px;border:1px solid #b9d8c4;border-radius:8px;background:#f0f7f2}.upload-error{color:#b53924;font-size:12px}.sent-attachments{display:flex;flex-wrap:wrap;gap:4px}</style>

<style scoped>.composer-wrap{background:#fff;border:1px solid var(--border);border-radius:14px;padding:8px}.composer-wrap.dragging{outline:2px solid #16854c;background:#edf7f0}.composer-wrap .cp-input textarea{border:0;resize:vertical;min-width:0}.composer-actions{position:relative;display:flex;align-items:center;gap:8px}.attach-plus{border:0!important;background:transparent!important;font-size:26px;line-height:1;width:34px;height:34px;color:#243e2e}.upload-menu{position:absolute;bottom:40px;left:0;background:#fff;border:1px solid #d6e3da;border-radius:12px;box-shadow:0 6px 24px #183b2020;padding:6px;z-index:20;width:235px}.upload-menu button{display:flex;flex-direction:column;align-items:flex-start;width:100%;padding:10px;border:0;background:white;border-radius:8px}.upload-menu button:hover{background:#edf6f0}.upload-menu small{color:#89938d;font-size:11px;margin-top:4px}</style>

<style scoped>.question-waitlist{margin:8px 0;border:1px solid #cbded1;background:#eff6f1;border-radius:10px;padding:10px}.question-waitlist header{display:flex;justify-content:space-between;gap:8px;font-size:12px;color:#265c3e}.question-waitlist small{font-size:11px;color:#85968a}.question-waitlist>div{display:flex;align-items:center;justify-content:space-between;gap:8px;padding:8px 0;font-size:12px;border-top:1px solid #dce8df;margin-top:6px}.question-waitlist>div span{overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.question-waitlist button{border:0;background:transparent;color:#718779;font-size:18px;flex-shrink:0}.cp-input .send{min-width:70px}</style>

<style scoped>.cp-input .send{display:flex;align-items:center;justify-content:center;flex:0 0 42px;width:42px;min-width:42px;height:42px;padding:0;border-radius:50%;background:#1b1b1b;color:white;border:0;line-height:1}.cp-input .send:disabled{background:#dce1dd;color:#9ba59e;opacity:1}.cp-input .send:not(:disabled):hover{background:#265a3c}</style>

<style scoped>
.cp-inner{min-height:0;overflow:hidden}.cp-body{flex:1 1 0;min-height:0;overscroll-behavior:contain}.quick{flex-shrink:0;max-height:25dvh;overflow-y:auto;overscroll-behavior:contain}.composer-wrap,.cue-head,.cue-modes{flex-shrink:0}.composer-wrap textarea{max-height:150px}
</style>

<style scoped>
.cue-source .knowledge-source-link{border:0!important;background:transparent!important;border-radius:0!important;box-shadow:none!important;padding:0!important;margin:0!important;font:inherit;color:inherit;text-decoration:underline;text-underline-offset:3px;cursor:pointer;display:inline}
</style>

<style scoped>
.cue-source a.web-source-card{display:inline-flex;align-items:center;max-width:100%;box-sizing:border-box;border:1px solid #cfe1d6;border-radius:999px;background:#edf7f0;padding:7px 12px;color:#17643c;text-decoration:none;font-size:12px;overflow-wrap:anywhere}
</style>
