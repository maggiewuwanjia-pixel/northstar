<script setup>
import { computed } from 'vue'
import { marked } from 'marked'
import DOMPurify from 'dompurify'
const props=defineProps({text:{type:String,default:''}})
const parts=computed(()=>{
 const output=[];let start=0
 const expression=/```chart\s*\n([\s\S]*?)```/g
 for(const match of props.text.matchAll(expression)){
  output.push({html:render(props.text.slice(start,match.index))})
  try{
   const chart=JSON.parse(match[1])
   if(!Array.isArray(chart.labels)||!Array.isArray(chart.values)||chart.labels.length!==chart.values.length||chart.values.length<2||chart.values.length>100||!chart.values.every(v=>typeof v==='number'&&Number.isFinite(v)))throw Error('invalid')
   const low=Math.min(0,...chart.values),high=Math.max(...chart.values),range=high-low||1
   output.push({chart:{...chart,low,high,path:chart.values.map((v,i)=>(i?'L':'M')+(40+i/(chart.values.length-1)*520)+','+(180-(v-low)/range*150)).join(' ')}})
  }catch{output.push({html:render(match[0])})}
  start=match.index+match[0].length
 }
 output.push({html:render(props.text.slice(start))});return output
})
function render(text){return DOMPurify.sanitize(marked.parse(text,{breaks:true,gfm:true}),{FORBID_TAGS:['style','iframe','script']})}
</script>
<template><div class="answer-markdown"><template v-for="(part,i) in parts" :key="i"><div v-if="part.html" v-html="part.html"></div><figure v-if="part.chart"><figcaption>{{part.chart.title||'数据趋势'}} <small>{{part.chart.unit}}</small></figcaption><svg viewBox="0 0 600 220" role="img" :aria-label="part.chart.title||'数据趋势'"><line x1="40" x2="560" y1="180" y2="180" stroke="#ccdcd2"/><text x="4" y="34">{{part.chart.high}}</text><text x="4" y="183">{{part.chart.low}}</text><path :d="part.chart.path" fill="none" stroke="#15945b" stroke-width="3"/><g v-for="(value,j) in part.chart.values" :key="j"><circle :cx="40+j/(part.chart.values.length-1)*520" :cy="180-(value-part.chart.low)/(part.chart.high-part.chart.low||1)*150" r="4" fill="#15945b"><title>{{part.chart.labels[j]}}：{{value}} {{part.chart.unit}}</title></circle><text v-if="j===0||j===part.chart.values.length-1||part.chart.values.length<=8" :x="40+j/(part.chart.values.length-1)*520" y="207" text-anchor="middle">{{part.chart.labels[j]}}</text></g></svg></figure></template></div></template>
<style scoped>
.answer-markdown{white-space:normal;line-height:1.75;overflow-wrap:anywhere}.answer-markdown :deep(h1),.answer-markdown :deep(h2),.answer-markdown :deep(h3){font-size:1.12em;line-height:1.5;margin:1.2em 0 .55em;font-weight:700}.answer-markdown :deep(p){margin:.65em 0}.answer-markdown :deep(ul),.answer-markdown :deep(ol){padding-left:1.5em;margin:.65em 0}.answer-markdown :deep(li){margin:.4em 0}.answer-markdown :deep(table){display:block;max-width:100%;overflow:auto;border-collapse:collapse;font-size:.9em;margin:1em 0}.answer-markdown :deep(th),.answer-markdown :deep(td){border:1px solid #dce7df;padding:8px 10px;text-align:left;white-space:normal;min-width:60px}.answer-markdown :deep(th){background:#eaf5ee;font-weight:700}.answer-markdown :deep(pre){white-space:pre-wrap;background:#e9eee9;padding:12px;border-radius:8px}.answer-markdown :deep(blockquote){margin:1em 0;padding:0 12px;border-left:3px solid #2a9f66;color:#557060}.answer-markdown :deep(a){color:#177348}.answer-markdown figure{margin:15px 0;background:white;padding:10px;border:1px solid #dce7df;border-radius:10px}.answer-markdown svg{width:100%;display:block}.answer-markdown svg text{font-size:10px;fill:#63766b}.answer-markdown figcaption{font-weight:700}.answer-markdown small{font-weight:400;color:#7a8b81}
</style>
