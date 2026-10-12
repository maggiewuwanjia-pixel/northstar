<script setup>
import { computed } from 'vue'
const props = defineProps({ chart: Object })
const points = computed(() => (props.chart?.points || []).filter(p => Number.isFinite(p.value)))
const layout = computed(() => {
 const values=points.value.map(p=>p.value), low=Math.min(...values), high=Math.max(...values), range=Math.max(1,high-low)
 return points.value.map((p,i)=>({...p,x:55+i*450/Math.max(1,points.value.length-1),y:165-(p.value-low)*110/range}))
})
</script>
<template>
 <figure v-if="points.length>1" class="follower-trend">
  <figcaption>{{chart.title}}</figcaption>
  <svg viewBox="0 0 560 210" role="img" :aria-label="chart.title">
   <path d="M55 40V170H510" fill="none" stroke="#cddbd1" />
   <polyline :points="layout.map(p=>`${p.x},${p.y}`).join(' ')" fill="none" stroke="#078945" stroke-width="3" />
   <g v-for="p in layout" :key="p.label">
    <circle :cx="p.x" :cy="p.y" r="4" fill="#078945" />
    <text :x="p.x" :y="p.y-12" text-anchor="middle" font-size="12" fill="#203b2c">{{p.value.toLocaleString()}}</text>
    <text :x="p.x" y="193" text-anchor="middle" font-size="12" fill="#67756b">{{p.label}}</text>
   </g>
  </svg>
  <small>纵轴按本期数据范围展示；具体数值与统计口径见下表。</small>
 </figure>
</template>
<style scoped>
.follower-trend{margin:14px 0;padding:16px;border:1px solid #dbe9df;border-radius:12px;background:#fff}.follower-trend figcaption{font-weight:600}.follower-trend svg{display:block;width:100%;height:auto}.follower-trend small{color:#6c776f;font-size:12px}
</style>
