<script setup>
import { ref } from 'vue'
import points from '../data/live1115Curve.json'
const hover = ref(null)
const activeNode = ref(null)
const nodes = [
  { id:'A', fraction:36/118, value:131, title:'峰值 131 人 · 高光话题', detail:'中档题的重要性', tip:'金句：“不要跨阶段刷题”' },
  { id:'B', fraction:70/118, value:140, title:'成交高峰 · 有效销售', detail:'成交额破 3000，与观众互动、自然塑品', tip:'建议沉淀为互动 → 匹配需求 → 自然塑品 SOP' },
  { id:'C', fraction:47/118, value:90, title:'迅速掉人 · 风险点', detail:'计算问题，讲解节奏拖沓', tip:'建议换话题或切入互动，拉回在线人数' }
]
const x = p => 58+p[0]*884
const y = (v,max) => 310-v/max*250
const path = (column,max) => points.map((p,i)=>(i?'L':'M')+x(p).toFixed(1)+','+y(p[column],max).toFixed(1)).join(' ')
const times=['20:22','20:32','20:42','20:52','21:02','21:12','21:22','21:32','21:42','21:52','22:02','22:12']
function time(p){const minutes=20*60+22+Math.round(p[0]*118);return String(Math.floor(minutes/60)).padStart(2,'0')+':'+String(minutes%60).padStart(2,'0')}
function inspect(e){const box=e.currentTarget.getBoundingClientRect();const fraction=Math.max(0,Math.min(1,((e.clientX-box.left)/box.width*1000-58)/884));hover.value=points[Math.round(fraction*(points.length-1))]}
</script>
<template>
  <div class="native-live-chart">
    <header><strong>整场在线人数与成交金额趋势</strong><span>2025-11-15 · 20:22 开播</span></header>
    <div class="chart-metrics"><span>成交金额 <b>¥3,729</b></span><span>成交订单 <b>11</b></span><span>成交人数 <b>10</b></span><span>平均在线 <b>75</b></span><span>进房人数 <b>3,449</b></span><span>离开人数 <b>3,423</b></span></div>
    <div class="chart-legend"><span><i></i>在线人数（人）</span><span><i class="sale"></i>成交金额（元，右轴）</span></div>
    <svg viewBox="0 0 1000 365" role="img" aria-label="直播在线人数和成交金额双轴曲线" @pointermove="inspect" @pointerleave="hover=null">
      <defs><linearGradient id="live-area" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#24bd76" stop-opacity=".5"/><stop offset="1" stop-color="#16271d" stop-opacity=".1"/></linearGradient></defs>
      <g v-for="v in [0,20,40,60,80,100,120,140]" :key="v"><line x1="58" x2="942" :y1="y(v,140)" :y2="y(v,140)" stroke="#29352e"/><text x="47" :y="y(v,140)+4" text-anchor="end">{{v}}</text></g>
      <text v-for="v in [0,100,200,300,400,500,600]" :key="'money'+v" x="951" :y="y(v,600)+4">¥{{v}}</text>
      <path :d="path(1,140)+' L942,310 L58,310 Z'" fill="url(#live-area)"/>
      <path :d="path(1,140)" fill="none" stroke="#2bd888" stroke-width="2.5" stroke-linejoin="round"/>
      <path :d="path(2,600)" fill="none" stroke="#9be6bd" stroke-width="2" stroke-linejoin="round"/>
      <text v-for="(t,i) in times" :key="t" :x="58+i*10/118*884" y="334" text-anchor="middle">{{t}}</text>
      <g v-if="hover"><line :x1="x(hover)" :x2="x(hover)" y1="60" y2="310" stroke="#597766" stroke-dasharray="4 4"/><circle :cx="x(hover)" :cy="y(hover[1],140)" r="4" fill="#19a96a"/></g>
      <g v-for="node in nodes" :key="node.id" class="chart-node" role="button" tabindex="0" :aria-label="node.id+'：'+node.title" @pointerenter="activeNode=node" @pointerleave="activeNode=null" @focus="activeNode=node" @blur="activeNode=null" @click.stop="activeNode=node" @keydown.enter="activeNode=node" @keydown.space.prevent="activeNode=node">
        <line :x1="58+node.fraction*884" :x2="58+node.fraction*884" :y1="y(node.value,140)" y2="310" stroke="#176344" stroke-dasharray="4 4" opacity=".4"/>
        <circle :cx="58+node.fraction*884" :cy="y(node.value,140)" r="16" fill="#176344" stroke="white" stroke-width="3"/>
        <text :x="58+node.fraction*884" :y="y(node.value,140)+5" text-anchor="middle" class="node-letter">{{node.id}}</text>
      </g>
    </svg>
    <div v-if="activeNode" class="node-tooltip" role="status"><b>{{activeNode.id}} · {{activeNode.title}}</b><p>{{activeNode.detail}}</p><span>{{activeNode.tip}}</span></div>
    <footer>{{hover?time(hover)+' · 在线约 '+Math.round(hover[1])+' 人 · 成交金额约 ¥'+Math.round(hover[2]):'在线峰值 131 人 · 移动鼠标查看曲线节点'}}<small>曲线按后台截图提取，节点数值为截图估读；汇总指标沿用原始数据。</small></footer>
  </div>
</template>
<style scoped>
.native-live-chart{position:relative}.chart-node{cursor:pointer;outline:none}.chart-node:hover circle,.chart-node:focus circle{fill:#0c9e5c;stroke:#b8efd0;stroke-width:5}.native-live-chart svg .node-letter{fill:white;font-size:16px;font-weight:800}.node-tooltip{position:absolute;z-index:5;top:70px;right:20px;max-width:280px;padding:12px 15px;border:1px solid #a8d6bd;border-radius:10px;background:#f0faf4;box-shadow:0 8px 24px #143c2920;font-size:12px;pointer-events:none}.node-tooltip b{color:#176344}.node-tooltip p{margin:6px 0}.node-tooltip span{color:#587061}
.native-live-chart{width:100%;box-sizing:border-box;padding:14px;background:#fff;color:#183d2c}.native-live-chart header{display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap;font-size:13px}.native-live-chart header span{color:#87968c;font-size:11px}.chart-metrics{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px;margin:14px 0;font-size:11px;color:#7d8c82}.chart-metrics b{display:block;color:#176344;font-size:17px;margin-top:3px}.chart-legend{display:flex;gap:15px;font-size:11px}.chart-legend i{display:inline-block;width:15px;height:3px;background:#19a96a;vertical-align:middle;margin-right:5px}.chart-legend i.sale{background:#176344}.native-live-chart svg{display:block;width:100%;height:auto;min-height:180px}.native-live-chart svg text{font-size:12px;fill:#819087}.native-live-chart footer{font-size:12px;color:#176344}.native-live-chart small{display:block;font-size:10px;color:#8a968e;margin-top:5px}
</style>

<style scoped>
.native-live-chart svg{background:#111713;border-radius:10px;margin:12px 0;padding:6px 0;box-sizing:border-box}
.native-live-chart svg text{fill:#aabbb0}
.native-live-chart svg .node-letter{fill:#fff}
.chart-legend i{background:#2bd888}.chart-legend i.sale{background:#9be6bd}
</style>
