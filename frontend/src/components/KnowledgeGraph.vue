<script setup>
import { computed, ref, watch } from 'vue'
const props=defineProps({ graph:Object })
const emit=defineEmits(['open-document'])
const query=ref(''),focus=ref('')
const nodes=computed(()=>props.graph?.nodes||[])
const edges=computed(()=>(props.graph?.edges||[]).filter(e=>e.quote?.trim()))
const byId=computed(()=>Object.fromEntries(nodes.value.map(n=>[n.id,n])))
const filtered=computed(()=>nodes.value.filter(n=>n.label.toLowerCase().includes(query.value.toLowerCase())))
watch(nodes,()=>{if(!byId.value[focus.value])focus.value=nodes.value.find(n=>n.label==='1+1+1复习法')?.id||nodes.value[0]?.id||''},{immediate:true})
const active=computed(()=>byId.value[focus.value])
const relations=computed(()=>edges.value.filter(e=>e.source===focus.value||e.target===focus.value))
const neighbors=computed(()=>[...new Set(relations.value.map(e=>e.source===focus.value?e.target:e.source))].map(id=>byId.value[id]).filter(Boolean).slice(0,8).map((n,i)=>({...n,x:i%2?555:15,y:35+Math.floor(i/2)*100})))
const short=value=>value.length>13?value.slice(0,12)+'…':value
</script>
<template>
 <div class="knowledge-explorer">
  <aside><input v-model="query" placeholder="搜索实体 / 概念" aria-label="搜索图谱节点"><div class="graph-node-list"><button v-for="n in filtered" :key="n.id" :class="{active:n.id===focus}" @click="focus=n.id">{{n.label}}<small>{{n.kind||'概念'}}</small></button></div></aside>
  <main v-if="active">
   <p class="graph-help">选中一个实体查看相邻关系；每条关系可展开核对原文。仅显示有引文的关系。</p>
   <div class="graph-diagram" role="group" :aria-label="active.label+'的关联关系'">
    <div class="graph-focus">{{active.label}}</div>
    <div v-if="neighbors.length" class="graph-branches"><button v-for="n in neighbors" :key="n.id" class="graph-neighbor-card" @click="focus=n.id"><span>{{n.label}}</span><small>{{n.kind||'概念'}}</small></button></div>
   </div>
   <p v-if="!relations.length">该实体暂无具备原文引文的关联关系。</p>
   <p v-else>{{relations.length}} 条有引文的关系<span v-if="new Set(relations.map(e=>e.source===focus?e.target:e.source)).size>8">，图中展示前 8 个相邻节点；完整关系见下方。</span></p>
   <details v-for="(e,i) in relations" :key="i" class="graph-evidence"><summary>{{byId[e.source]?.label}} → {{e.relation||'关联'}} → {{byId[e.target]?.label}}</summary><p class="graph-quote">{{e.quote}}</p><small>{{e.document_title||'当前文档'}}<span v-if="e.chunk"> · 片段 {{e.chunk}}</span> · 原文引用可核对，关系语义需结合上下文确认</small><button v-if="e.document_id" class="graph-source" @click="emit('open-document',{id:e.document_id,title:e.document_title})">查看知识库文档 ↗</button></details>
  </main><p v-else>尚无可展示的实体或概念。</p>
 </div>
</template>
<style scoped>
.knowledge-explorer{display:grid;grid-template-columns:210px minmax(0,1fr);gap:24px;margin-top:20px}.knowledge-explorer aside{min-width:0}.knowledge-explorer input{width:100%;box-sizing:border-box;padding:12px;border:1px solid #d9e5dc;border-radius:10px}.graph-node-list{max-height:600px;overflow:auto;margin-top:12px}.graph-node-list button{display:block;text-align:left;width:100%;padding:12px;border:0;background:transparent;border-radius:8px;color:#263b2e;overflow-wrap:anywhere}.graph-node-list button.active{background:#eaf6ee;color:#13733c}.graph-node-list small{display:block;color:#7a897f;margin-top:4px}.knowledge-explorer main{min-width:0}.knowledge-explorer svg{width:100%;height:auto;background:#fafcf9;border-radius:12px}.graph-diagram{padding:28px 18px;background:#fafcf9;border-radius:12px}.graph-focus{max-width:260px;margin:0 auto;padding:16px 22px;background:#173a27;color:white;border-radius:12px;text-align:center;font-size:16px;line-height:1.5;overflow-wrap:anywhere}.graph-branches{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:20px;margin-top:30px;border-top:1px solid #b4d6bf;padding-top:24px}.graph-neighbor-card{position:relative;border:1px solid #b4d6bf;background:#eff7f1;border-radius:10px;padding:14px;font-size:14px;line-height:1.6;overflow-wrap:anywhere;cursor:pointer}.graph-neighbor-card:before{content:"";position:absolute;left:50%;top:-25px;height:24px;border-left:1px solid #b4d6bf}.graph-neighbor-card small{display:block;color:#738177;font-size:12px}.graph-help{color:#78867d;font-size:13px;margin:0 0 12px}.graph-neighbor{cursor:pointer}.graph-evidence{padding:14px 0;border-top:1px solid #e3ece5}.graph-evidence summary{cursor:pointer;font-weight:600;line-height:1.6}.graph-quote{white-space:pre-wrap;background:#f4f8f4;padding:14px;border-radius:8px;line-height:1.7;overflow-wrap:anywhere}.graph-evidence small{color:#7a857d}.graph-source{display:block;border:0;background:transparent;color:#16824a;text-decoration:underline;padding:10px 0;cursor:pointer}@media(max-width:800px){.knowledge-explorer{grid-template-columns:1fr}.graph-node-list{max-height:160px}}
</style>
