<script setup>
import { computed, ref, reactive, watch, onUnmounted } from 'vue'
import { store, SCRIPT_DOC, toast } from '../../store'
const selected=ref(null)
onUnmounted(()=>{store.scriptContext=null})
const demoScripts=[
{id:'demo-script-1',t:'高中生压力大，送给他这 3 句话',from:'视频号脚本',dur:'00:60',tag:'亲子沟通',cover:'/assets/covers/pressure-3sentences.png',hook:'月考卷先别急着收起来：这 3 类失分，决定孩子接下来一个月能不能追上来。',points:['先把错题按“不会、会但错、时间不够”分成三类','每天只回炉一类题，连续坚持 7 天','家长只问一个问题：今天哪一类错题更少了？'],cta:'评论区回复「月考」，领取 7 天错题复盘表。',views:'12.8w',comments:'1,286',likes:'9,642',shares:'2,118'},
{id:'demo-script-2',t:'清华生活 vlog',from:'视频号脚本',dur:'00:50',tag:'清华生活',cover:'/assets/covers/qinghua-vlog.png',hook:'孩子考完只说“没发挥好”，家长看这 3 个位置，就知道问题到底在哪。',points:['看丢分分布：基础、计算还是综合题','看卷面痕迹：空白、涂改还是时间不足','把评价换成共同复盘：先问哪题最可惜'],cta:'收藏这条，下一次月考后照着问。',views:'8.7w',comments:'936',likes:'6,284',shares:'1,562'},
{id:'demo-script-3',t:'英语上 140，有哪几个步骤',from:'视频号脚本',dur:'00:45',tag:'英语学习',cover:'/assets/covers/english-140.png',hook:'期中前一周最危险的不是题没刷够，而是每天都在重复低效努力。',points:['周一到周三：用错题定位知识漏洞','周四到周五：做两套限时小卷','周末：只复盘错因和时间分配，不再开新战线'],cta:'需要一周计划模板，在评论区打「节奏」。',views:'10.4w',comments:'1,053',likes:'7,891',shares:'1,846'},
{id:'demo-script-4',t:'高一学生，是怎样毁掉自己的',from:'视频号脚本',dur:'00:55',tag:'高中学习',cover:'/assets/covers/gaoyi-mistakes.png',hook:'成绩一波动，家长最容易说的三句话，可能刚好让孩子更不想学习。',points:['不说“你怎么又退步了”','不说“隔壁谁谁考得多好”','把“你要努力”换成“我们一起找一个能改变的动作”'],cta:'转给需要的家长，下一条讲怎么开场。',views:'7.2w',comments:'824',likes:'5,376',shares:'1,204'}]
const scripts=computed(()=>store.scripts.length?store.scripts.filter(x=>x.from!=='Cue 生成'&&x.src!=='Cue 生成'):demoScripts)
watch(selected, value => { store.scriptContext = value ? { title:value.t, hook:value.hook || '从一个具体家长场景切入。', points:value.points || ['建立共鸣','给出方法','引导行动'], cta:value.cta || '评论区回复关键词领取行动卡。', duration:value.dur, body:`# ${value.t}\n\n## 0–3 秒｜钩子\n${value.hook||'先从一个具体的家长焦虑场景切入，再给出当天能执行的一步。'}\n\n## 3–12 秒｜建立共鸣\n很多家长一看到分数就开始着急，但真正要先看的，是孩子这张卷子里的失分模式。镜头切到试卷局部，字幕突出：不是分数，是失分模式。\n\n## 12–45 秒｜核心方法\n${(value.points||['用具体场景建立共鸣','给出三步可执行的方法','用评论互动承接下一步']).join('\n')}\n\n## 45–60 秒｜行动与 CTA\n${value.cta||'评论区回复关键词，领取本周行动卡。'}` } : null })
function openKnowledgeDialog() {
  if (!selected.value) return
  const current=selected.value
  store.knowledgeSaveDraft={title:current.t,subspace:'短视频脚本',content:`# ${current.t}

## 0–3 秒｜钩子
${current.hook || '先从一个具体的家长焦虑场景切入，再给出当天能执行的一步。'}

## 12–45 秒｜核心方法
${(current.points || ['用一个具体场景建立共鸣','给出三步可执行的方法','用评论互动承接下一步']).map((point,index)=>`${index+1}. ${point}`).join('\n')}

## 45–60 秒｜行动与 CTA
${current.cta || '评论区回复关键词，领取本周行动卡。'}`}
}
</script>
<template>
  <div class="scripts-page">
    <div class="src-line"><span>来源：</span><a :href="SCRIPT_DOC" target="_blank">视频号脚本</a><span class="src-tag">内容数据</span></div>
    <section v-if="!selected" class="video-grid script-grid">
      <button v-for="s in scripts" :key="s.id" class="video-card script-card" @click="selected=s"><div class="thumb"><img :src="s.cover" :alt="s.t"><span class="dur">{{s.dur}}</span></div><div class="meta"><div class="title"><span class="tag">{{s.tag}}</span>{{s.t}}</div><div class="metrics"><span>▶ {{s.views||'—'}}</span><span>◌ {{s.comments||'—'}}</span><span>♥ {{s.likes||'—'}}</span><span>↗ {{s.shares||'—'}}</span></div><div class="stats"><span>来源：{{s.from}}</span><b>查看完整脚本 →</b></div></div></button>
    </section>
    <section v-else class="script-workspace">
      <aside class="script-selected-panel">
        <button class="back-to-library" @click="selected=null">‹ 返回脚本库</button>
        <div class="selected-video-card"><div class="thumb"><img :src="selected.cover" :alt="selected.t"><span class="dur">{{selected.dur}}</span></div><div class="meta"><div class="title"><span class="tag">{{selected.tag}}</span>{{selected.t}}</div><div class="metrics"><span>▶ {{selected.views}}</span><span>◌ {{selected.comments}}</span><span>♥ {{selected.likes}}</span><span>↗ {{selected.shares}}</span></div><small>已选视频卡片</small></div></div>
      </aside>
      <main class="card script-detail">
        <header><div><span class="eyebrow">SHORT VIDEO SCRIPT · 脚本稿</span><h2>{{selected.t}}</h2><p>{{selected.from}} · {{selected.dur}} · 可直接用于拍摄</p></div><button class="close" title="返回脚本库" @click="selected=null">×</button></header>
        <div class="script-info"><div><span>目标</span><b>让家长获得一个当下就能执行的复盘动作，并承接评论区互动。</b></div><div><span>镜头</span><b>正面半身口播 + 手持月考卷 / 错题本 B-roll。</b></div></div>
        <article><h3>0–3 秒｜钩子</h3><p>{{selected.hook||'先从一个具体的家长焦虑场景切入，再给出当天能执行的一步。'}}</p></article><article><h3>3–12 秒｜建立共鸣</h3><p>“很多家长一看到分数就开始着急，但真正要先看的，是孩子这张卷子里的失分模式。”镜头切到试卷局部，字幕突出“不是分数，是失分模式”。</p></article><article><h3>12–45 秒｜核心方法</h3><ol><li v-for="point in (selected.points||['用具体场景建立共鸣','给出三步可执行的方法','用评论互动承接下一步'])" :key="point">{{point}}</li></ol></article><article><h3>45–60 秒｜行动与 CTA</h3><p>{{selected.cta||'评论区回复关键词，领取本周行动卡。'}}</p></article>
        <div class="detail-actions"><button class="knowledge-action" @click="openKnowledgeDialog">加入知识库</button><button @click="selected=null">返回脚本卡片</button></div>
        
      </main>
    </section>
  </div>
</template>

<style scoped>
.script-card .dur,.selected-video-card .dur{top:auto!important;bottom:9px!important;height:auto;line-height:1.3;min-height:0}
.script-card{display:flex;flex-direction:column;min-width:0;font-family:inherit}
.script-card .thumb{height:auto;aspect-ratio:9/12;flex:none}
.script-card .thumb img{object-fit:cover;object-position:top}
.script-card .meta{display:flex;flex-direction:column;flex:1;min-width:0}
.script-card .title{font-size:13px;line-height:1.5;min-height:40px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
.script-card .metrics{margin-top:auto;font-size:10px;gap:3px}
.script-card .stats{font-size:11px;flex-wrap:wrap}
</style>
<style scoped>.script-grid{grid-template-columns:repeat(auto-fill,minmax(220px,1fr))}.script-card{border:1px solid var(--border);background:#fff;border-radius:10px;padding:0;text-align:left;overflow:hidden;cursor:pointer}.script-card .thumb{position:relative;width:100%;height:190px;aspect-ratio:auto;display:block}.script-card .thumb img{width:100%;height:100%;object-fit:cover}.script-card .dur{position:absolute;right:9px;bottom:9px;background:#222c;color:#fff;padding:4px 7px;border-radius:5px;font-size:11px}.script-card .meta{padding:14px;min-height:132px;box-sizing:border-box}.metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:4px;margin:12px 0 10px;padding:9px 0;border-top:1px solid var(--border);border-bottom:1px solid var(--border);color:var(--text-sub);font-size:11px}.metrics span{text-align:center;white-space:nowrap}.script-card .stats{display:flex;justify-content:space-between;gap:8px;margin-top:9px;color:var(--text-mute);font-size:12px}.script-card .stats b{color:#21814e;font-weight:500}.script-workspace{display:grid;grid-template-columns:270px minmax(0,1fr);gap:22px;align-items:start}.script-selected-panel{position:sticky;top:18px}.back-to-library{display:block;margin:0 0 12px;padding:0;border:0;background:transparent;color:#387450;font-size:14px;cursor:pointer}.selected-video-card{overflow:hidden;border:1px solid var(--border);border-radius:12px;background:#fff}.selected-video-card .thumb{position:relative;height:320px}.selected-video-card .thumb img{width:100%;height:100%;object-fit:cover}.selected-video-card .dur{position:absolute;right:9px;bottom:9px;background:#222c;color:#fff;padding:4px 7px;border-radius:5px;font-size:11px}.selected-video-card .meta{padding:14px}.selected-video-card small{color:var(--text-mute);font-size:11px}.script-detail{max-width:none;padding:28px}.script-detail header{display:flex;justify-content:space-between;gap:16px;border-bottom:1px solid var(--border);padding-bottom:18px}.eyebrow{font-size:11px;letter-spacing:.12em;color:#21814e}.script-detail h2{margin:8px 0}.script-detail header p{margin:0;color:var(--text-mute)}.close{border:0;background:transparent;font-size:30px;color:var(--text-mute);cursor:pointer}.script-info{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:20px 0}.script-info div{padding:14px;background:#f5f8f4;border-radius:10px}.script-info span,.script-info b{display:block}.script-info span{font-size:11px;color:var(--text-mute);margin-bottom:6px}.script-detail article{padding:15px 0;border-top:1px solid var(--border)}.script-detail article h3{margin:0 0 8px;font-size:16px}.script-detail p,.script-detail li{color:var(--text-sub);line-height:1.8}.detail-actions{display:flex;gap:9px;flex-wrap:wrap;margin-top:20px}.detail-actions button{border:1px solid var(--border);background:#fff;border-radius:8px;padding:9px 13px;cursor:pointer}.detail-actions .knowledge-action{border-color:#79af8c;background:#edf7ef;color:#176c3e}.knowledge-float{display:none;position:fixed;z-index:50;right:32px;top:132px;width:min(430px,calc(100vw - 48px));max-height:calc(100vh - 164px);overflow:auto;padding:20px;border:1px solid #cbe3d0;border-radius:14px;background:#fff;box-shadow:0 20px 52px rgba(17,43,29,.22)}.knowledge-float header{display:flex;align-items:flex-start;justify-content:space-between;border:0;padding:0;margin-bottom:14px}.knowledge-float h3{margin:7px 0 0}.float-close{border:0;background:transparent;font-size:26px;color:var(--text-mute);cursor:pointer}.knowledge-float label{display:grid;gap:6px;margin:12px 0;font-size:12px;color:var(--text-sub)}.knowledge-float input,.knowledge-float textarea,.knowledge-float select{box-sizing:border-box;width:100%;padding:10px;border:1px solid var(--border);border-radius:8px;background:#fff;color:var(--text);font:inherit}.knowledge-float textarea{min-height:180px;resize:vertical;line-height:1.65}.knowledge-float footer{display:flex;justify-content:flex-end;gap:9px;margin-top:16px}.knowledge-float footer button{padding:9px 15px;border:1px solid var(--border);border-radius:8px;background:#fff;cursor:pointer}.knowledge-float .float-save{background:#176f40;border-color:#176f40;color:#fff}@media(max-width:800px){.script-workspace{grid-template-columns:1fr}.script-selected-panel{position:static}.selected-video-card{max-width:360px}.script-info{grid-template-columns:1fr}}</style>

<style scoped>
.script-grid .script-card .thumb{height:auto;aspect-ratio:9/16}
.script-grid .script-card .thumb img{object-fit:contain;object-position:center}
</style>
