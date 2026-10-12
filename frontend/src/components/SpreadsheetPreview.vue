<script setup>
import { ref,computed,watch } from 'vue'
const props=defineProps({sheets:{type:Array,default:()=>[]}})
const active=ref(0)
watch(()=>props.sheets,()=>active.value=0)
const sheet=computed(()=>props.sheets[active.value]||{rows:[]})
const columns=computed(()=>Math.max(1,...sheet.value.rows.map(row=>row.length)))
function letter(index){let n=index+1,out='';while(n){n--;out=String.fromCharCode(65+n%26)+out;n=Math.floor(n/26)}return out}
</script>
<template>
 <div class="sheet-preview">
  <div class="sheet-caption"><b>{{sheet.name}}</b><span>{{sheet.rows.length}} 行 · {{columns}} 列</span><span>原始表格预览</span></div>
  <div class="sheet-scroll"><table><thead><tr><th class="corner"></th><th v-for="(_,i) in columns" :key="i">{{letter(i)}}</th></tr></thead><tbody><tr v-for="(row,r) in sheet.rows" :key="r"><th>{{r+1}}</th><td v-for="(_,c) in columns" :key="c" :class="{heading:r===0,numeric:typeof row[c]==='number'}">{{row[c]??''}}</td></tr></tbody></table></div>
  <nav class="sheet-tabs" aria-label="工作表"><button v-for="(s,i) in sheets" :key="i" :class="{active:i===active}" @click="active=i">{{s.name}}</button></nav>
 </div>
</template>
<style scoped>
.sheet-preview{border:1px solid #d6e4dc;border-radius:10px;overflow:hidden;background:white}.sheet-caption{display:flex;gap:16px;padding:10px 14px;color:#5b7063;font-size:11px;background:#f5faf7;align-items:center}.sheet-caption b{color:#173d2b}.sheet-scroll{overflow:auto;max-height:580px}table{border-collapse:separate;border-spacing:0;font-size:12px;line-height:1.5;min-width:100%;table-layout:auto}th,td{border-right:1px solid #e1e8e3;border-bottom:1px solid #e1e8e3;padding:8px 12px;min-width:115px;max-width:300px;white-space:nowrap;color:#24372c}thead th{position:sticky;top:0;background:#eef5f0;color:#627568;font-weight:500;z-index:2;text-align:center}tbody th,.corner{position:sticky;left:0;min-width:38px;width:38px;background:#eef5f0;color:#627568;text-align:center;z-index:1}thead .corner{z-index:3}.heading{background:#f6faf7;font-weight:600}.numeric{text-align:right;font-variant-numeric:tabular-nums}tbody tr:hover td{background:#f0f8f3}.sheet-tabs{display:flex;gap:4px;padding:8px;overflow:auto;background:#f3f7f4;border-top:1px solid #d6e4dc}.sheet-tabs button{font-size:12px;padding:6px 12px;border:1px solid transparent;border-radius:5px;background:transparent;color:#64776a;white-space:nowrap}.sheet-tabs button.active{background:white;color:#176f43;border-color:#aecfba;font-weight:600}
</style>
