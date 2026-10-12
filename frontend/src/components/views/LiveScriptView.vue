<script setup>
import { computed, ref, watch } from 'vue'
import { store, LIVE_SCRIPT_DOC } from '../../store'
import { liveDraftFor } from '../../data/liveScriptDrafts'
const chosen=ref(null)
const scripts=computed(()=>store.liveScripts.length?store.liveScripts:[
 {t:'新学期第一场·高中数学',d:'10-08',len:'60m',blocks:'开场互动(5m) → 暑期复盘(10m) → 新学期规划(20m) → Q&A(25m)'},
 {t:'高二数学答疑',d:'10-12',len:'60m',blocks:'痛点收集(5m) → 一轮复习节奏(20m) → 现场答疑(35m)'},
 {t:'暑假收心专场',d:'10-18',len:'48m',blocks:'互动开场(3m) → 收心方法(15m) → 家长答疑(30m)'},
 {t:'高一家长会·破冰',d:'10-23',len:'50m',blocks:'高一现状数据(10m) → 家长最关心的 3 件事(20m) → Q&A(20m)'},
 {t:'高三一轮启动·直播脚本',d:'10-29',len:'90m',blocks:'开场送福利(5m) → 一轮节奏(25m) → 高频考点串讲(30m) → 现场答疑(30m)'}])
const detail=computed(()=>liveDraftFor(chosen.value))
watch([chosen,detail],([script,draft])=>{store.liveScriptContext=script?{...script,...draft}:null},{immediate:true})
</script>
<template><div><div class="src-line"><span>来源：</span><a :href="LIVE_SCRIPT_DOC" target="_blank">清华优优 · 直播脚本库</a><span class="src-tag">内容数据</span></div><div class="script-layout"><section><button v-for="s in scripts" :key="s.t" class="node-card script-card" :class="{on:chosen?.t===s.t}" @click="chosen=s"><div class="head"><span class="m">{{s.t}}</span><span class="pills"><span class="pill">{{s.d}}</span><span class="pill green">{{s.len}}</span></span></div><div class="headline">{{s.blocks}}</div><small>点击查看完整直播脚本 →</small></button></section><aside v-if="detail" class="card preview"><header><div><span class="eyebrow">LIVE SCRIPT · 脚本稿</span><h2>{{chosen.t}}</h2><p>{{detail.goal}}</p></div><button @click="chosen=null">×</button></header><article v-for="part in detail.sections" :key="part[0]"><h3>{{part[0]}}</h3><p>{{part[1]}}</p></article><div class="qa"><h3>预设 Q&A</h3><ul><li v-for="q in detail.qa" :key="q"><b>{{q[0]}}</b><p>{{q[1]}}</p></li></ul></div></aside></div></div></template>
<style scoped>.script-layout{display:grid;grid-template-columns:minmax(310px,1fr) minmax(360px,1.2fr);gap:18px}.script-card{display:block;width:100%;text-align:left;cursor:pointer}.script-card.on{border-color:#2b8751;box-shadow:0 0 0 2px #e4f3e8}.script-card small{display:block;margin-top:12px;color:#21814e}.preview{padding:22px;position:sticky;top:16px;align-self:start}.preview header{display:flex;justify-content:space-between;gap:10px;border-bottom:1px solid var(--border);padding-bottom:14px}.preview header button{border:0;background:transparent;font-size:28px;color:#68756b;cursor:pointer}.preview h2{margin:7px 0}.preview p{white-space:pre-line;color:var(--text-sub);line-height:1.75}.eyebrow{font-size:11px;color:#21814e;letter-spacing:.12em}.preview article{border-bottom:1px solid var(--border);padding:12px 0}.preview article h3,.qa h3{font-size:15px;margin:0}.qa li{color:var(--text-sub);margin:8px 0}@media(max-width:850px){.script-layout{grid-template-columns:1fr}.preview{position:static}}</style>
