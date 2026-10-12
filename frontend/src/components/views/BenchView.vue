<script setup>
import { computed, ref, watch } from 'vue'
import { store, convertToScript, toast, switchView } from '../../store'
const storageKey='northstar_benchmark_accounts'
let saved=null
try { saved=JSON.parse(localStorage.getItem(storageKey)||'null') } catch {}
const accounts=ref(saved || [...store.benchmarks])
watch(()=>store.benchmarks, rows=>{if(!saved && !accounts.value.length)accounts.value=[...rows]})
const sort=ref('custom'), editing=ref(false), checked=ref([]), editor=ref(null), form=ref({})
const fieldRows=ref([{key:'name',label:'账号名称'},{key:'fans',label:'粉丝量（如32.1w）'},{key:'update',label:'最新视频日期 / 更新时间'},{key:'viral',label:'爆款条数'},{key:'note',label:'备注'}])
function fans(value){ const n=parseFloat(String(value||'').replace(/,/g,''))||0;return n * (/w|万/i.test(value)?10000:1) }
function latest(value){const v=String(value||'');const date=Date.parse(v);if(!Number.isNaN(date))return date;if(/今日|今天/.test(v))return Date.now();if(/昨日|昨天/.test(v))return Date.now()-86400000;const n=parseFloat(v);return Number.isNaN(n)?0:Date.now()-n*86400000}
function sorted(rows){return rows.slice().sort((a,b)=>sort.value==='fans'?fans(b.fans)-fans(a.fans):sort.value==='viral'?Number(b.viral||0)-Number(a.viral||0):sort.value==='latest'?latest(b.update)-latest(a.update):0)}
const monitored=computed(()=>sorted(accounts.value.filter(b=>b.state==='监控中')))
const discovered=computed(()=>sorted(accounts.value.filter(b=>b.state==='AI 发现')))
const ranked=computed(()=>accounts.value.slice().sort((a,b)=>Number(b.viral||0)-Number(a.viral||0)))
const hotspots=computed(()=>[...new Set(store.virals.map(v=>v.t))].slice(0,3))
function commit(){saved=accounts.value;localStorage.setItem(storageKey,JSON.stringify(accounts.value));store.benchmarks=[...accounts.value]}
function compare(b){store.benchCompare=b;switchView('bench-compare')}
function monitor(b){b.state='监控中';b.note=b.note||b.why;commit();toast('已加入监控列表')}
function edit(b=null){editor.value=b||{};form.value=b?{...b}:{name:'',fans:'',update:'',viral:0,note:''}}
function save(){const name=String(form.value.name||'').trim();if(!name)return toast('请输入账号名称');if(accounts.value.some(b=>b!==editor.value && b.name===name))return toast('账号名称已存在');if(accounts.value.includes(editor.value))Object.assign(editor.value,form.value,{name});else accounts.value.push({...form.value,name,state:'监控中',health:'green'});commit();editor.value=null}
function removeSelected(){if(!checked.value.length)return;accounts.value=accounts.value.filter(b=>!checked.value.includes(b.name));checked.value=[];commit()}
function toggleAll(){checked.value=checked.value.length===monitored.value.length?[]:monitored.value.map(b=>b.name)}
function move(b,delta){const i=accounts.value.indexOf(b),j=i+delta;if(j<0||j>=accounts.value.length)return;[accounts.value[i],accounts.value[j]]=[accounts.value[j],accounts.value[i]];sort.value='custom';commit()}
function addField(){const label=window.prompt('自定义字段名称');if(!label?.trim())return;const key='custom_'+Date.now();fieldRows.value.push({key,label:label.trim()});form.value[key]=''}
</script>

<template>
  <div>
    <section class="bench-summary card"><h2>AI 总结 · 竞品观察</h2><p>当前内容关注：{{hotspots.join('；') || '暂未收集到视频内容'}}。</p><ol><li v-for="b in ranked.slice(0,3)" :key="b.name">{{b.name}}：已收集 {{b.viral||0}} 条爆款，{{b.note||b.why||'可继续查看视频内容与脚本结构'}}。</li></ol><small>依据当前账号列表与视频条目整理；热度是否上升需比较连续更新记录。</small></section>
    <div class="bench-tools"><label>排序 <select v-model="sort"><option value="custom">自定义顺序</option><option value="latest">最新视频日期</option><option value="fans">粉丝量</option><option value="viral">爆款条数</option></select></label><button @click="editing=!editing">{{editing?'完成编辑':'编辑账号'}}</button><button v-if="editing" @click="toggleAll">全选 / 取消</button><button v-if="editing" :disabled="!checked.length" @click="removeSelected">删除所选 {{checked.length||''}}</button></div>
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px">
      <span style="color:var(--text-mute);font-size:12px">监控中 {{ monitored.length }} · AI 发现 {{ discovered.length }}</span>
      <a style="cursor:pointer;color:var(--text-link);font-size:13px" @click="edit()">+ 添加对标</a>
    </div>

    <div class="section-h"><h2>监控中</h2></div>
    <div v-for="b in monitored" :key="b.name" class="acc-card">
      <input v-if="editing && b.state==='监控中'" type="checkbox" v-model="checked" :value="b.name" aria-label="选择账号"><div class="ava"><img v-if="b.img" :src="b.img" :alt="b.name"><template v-else>{{ b.name[0] }}</template></div>
      <div class="body">
        <div class="name">{{ b.name }}
          <span class="pill" :class="b.health === 'green' ? 'green' : 'warn'">{{ b.health === 'green' ? '健康' : '需关注' }}</span>
        </div>
        <div class="stat">{{ b.fans }} 粉 · {{ b.update }}更新 · 爆款 {{ b.viral }} 条{{ b.note ? ' · ' + b.note : '' }}</div>
      </div>
      <div class="actions"><button @click="compare(b)">对比</button><template v-if="editing"><button @click="edit(b)">编辑</button><button @click="move(b,-1)" :disabled="accounts.indexOf(b)===0">↑</button><button @click="move(b,1)" :disabled="accounts.indexOf(b)===accounts.length-1">↓</button></template></div>
    </div>

    <div class="section-h" style="margin-top:24px"><h2>AI 发现</h2><span class="meta">基于选题相似度推荐</span></div>
    <div v-for="b in discovered" :key="b.name" class="acc-card">
      <div class="ava"><img v-if="b.img" :src="b.img" :alt="b.name"><template v-else>{{ b.name[0] }}</template></div>
      <div class="body">
        <div class="name">{{ b.name }} <span class="pill green">AI 发现</span></div>
        <div class="stat">{{ b.fans }} 粉 · {{ b.update }}更新 · 爆款 {{ b.viral }} 条{{ b.why ? ' · ' + b.why : '' }}</div>
      </div>
      <div class="actions"><span class="pill" style="cursor:pointer" @click="monitor(b)">+ 监控</span></div>
    </div>

    <div v-if="editor" class="bench-overlay" @click.self="editor=null"><section class="card bench-editor"><header><h2>{{accounts.includes(editor)?'编辑账号':'添加对标'}}</h2><button @click="editor=null">×</button></header><label v-for="f in fieldRows" :key="f.key">{{f.label}}<input v-model="form[f.key]" :type="f.key==='viral'?'number':'text'" :min="f.key==='viral'?0:undefined"></label><button @click="addField">＋ 自定义字段</button><footer><button @click="editor=null">取消</button><button @click="save">保存</button></footer></section></div>
    <div class="section-h" style="margin-top:24px"><h2>爆款抓取</h2><span class="meta">仅公开短视频 · 点赞/收藏 ≥ 2 万，或播放 ≥ 100 万</span></div>
    <div class="video-grid">
      <div v-for="v in store.virals" :key="v.t" class="video-card">
        <div class="thumb"><img :src="v.cover" :alt="v.t" loading="lazy"><span class="dur">{{ v.dur }}</span></div>
        <div class="meta">
          <div class="title"><span class="tag">爆款</span>{{ v.t }}</div>
          <div class="stats">
            <span>♡ {{ v.like }} · {{ v.from }}</span>
            <a class="action" @click="convertToScript(v)">拆脚本</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bench-summary{padding:20px;margin-bottom:18px;background:#f0f8f2;border-color:#cde2d3}.bench-summary h2{font-size:18px;margin:0 0 10px}.bench-summary p,.bench-summary li{line-height:1.8}.bench-summary small{color:var(--text-mute)}.bench-tools{display:flex;gap:10px;align-items:center;flex-wrap:wrap;margin-bottom:16px}.bench-tools select,.bench-tools button,.actions button,.bench-editor button{border:1px solid var(--border);background:#fff;border-radius:8px;padding:7px 10px;cursor:pointer}.actions{display:flex;gap:5px;flex-wrap:wrap}.bench-overlay{position:fixed;inset:0;background:#14241b55;z-index:100;display:grid;place-items:center}.bench-editor{width:min(500px,90vw);max-height:85vh;overflow:auto;padding:24px}.bench-editor header,.bench-editor footer{display:flex;justify-content:space-between;align-items:center}.bench-editor label{display:grid;gap:5px;margin-bottom:12px}.bench-editor input{padding:10px;border:1px solid var(--border);border-radius:8px}.bench-editor footer{justify-content:flex-end;gap:10px;margin-top:16px}button:disabled{opacity:.4;cursor:default}
</style>
