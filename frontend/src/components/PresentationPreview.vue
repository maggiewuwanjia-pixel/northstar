<script setup>
import {ref,watch,onUnmounted} from 'vue'
const props=defineProps({uri:String,title:String})
const pdf=ref(''),error=ref(''),loading=ref(false)
let generation=0
watch(()=>props.uri,async(uri)=>{
 const current=++generation
 if(pdf.value)URL.revokeObjectURL(pdf.value)
 pdf.value='';error.value='';if(!uri)return;loading.value=true
 try{
  const source=await fetch(uri);if(!source.ok)throw Error('无法读取原始 PPT')
  const response=await fetch('/local-media/presentation',{method:'POST',headers:{'X-File-Extension':/\.ppt$/i.test(props.title)?'.ppt':'.pptx'},body:await source.blob()})
  if(!response.ok)throw Error((await response.json()).error||'预览失败')
  const blob=await response.blob();if(current===generation)pdf.value=URL.createObjectURL(blob)
 }catch(e){if(current===generation)error.value=e.message}
 finally{if(current===generation)loading.value=false}
},{immediate:true})
onUnmounted(()=>{generation++;if(pdf.value)URL.revokeObjectURL(pdf.value)})
</script>
<template><div class="presentation-preview"><p v-if="loading">正在生成原始幻灯片预览，保留图片、公式和版式…</p><p v-else-if="error" role="alert">{{error}} <a :href="uri" target="_blank">打开原文件 ↗</a></p><template v-else-if="pdf"><div class="preview-caption">原始幻灯片 · PDF 预览 <a :href="pdf" target="_blank">放大查看 ↗</a></div><iframe :src="pdf" :title="title+'幻灯片预览'"></iframe></template></div></template>
<style scoped>.presentation-preview{width:100%;min-height:150px}.presentation-preview iframe{width:100%;height:75vh;min-height:480px;border:1px solid #dce7df;border-radius:10px;background:#f3f6f3}.preview-caption{display:flex;justify-content:space-between;margin:12px 0;font-size:13px;color:#6f8174}.presentation-preview a{color:#177348}.presentation-preview p{padding:25px;background:#f1f8f3;border-radius:10px;color:#597161}</style>
