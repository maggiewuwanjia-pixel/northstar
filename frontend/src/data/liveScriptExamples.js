export const liveScriptPrompts=['总结当前直播脚本的内容和节奏','优化当前直播脚本的开场与互动话术','把当前直播脚本的销售话术沉淀为 SOP','结合当前脚本生成下一场直播方案','把当前直播脚本加入下周二晚的直播排期']
export function liveScriptExample(question,ctx){
 const index=liveScriptPrompts.indexOf(question)
 if(index<0)return null
 if(!ctx?.sections?.length)return {text:'请先选择一份直播脚本，我会根据选中的正文整理答案。',sources:[],steps:[{name:'检查当前脚本',status:'done',detail:'尚未选择稿件，没有套用其他主题。'}]}
 const title=ctx.t||ctx.title,sections=ctx.sections,original=sections.map(([heading,body])=>`## ${heading}\n${body}`).join('\n\n')
 const source={number:1,title,locator:'当前选中直播脚本 · 全文',text:original}
 let text,draft
 if(index===0)text=`**《${title}》的内容与节奏**\n\n目标：${ctx.goal||'围绕当前主题展开讲解与答疑。'}\n\n`+sections.map(([h,b])=>`### ${h}\n${b.slice(0,240)}${b.length>240?'…':''}`).join('\n\n')+'\n\n**节奏建议**：开场先收集问题；方法讲解后插入一次理解检查；答疑围绕本场目标；收尾只留一个能立即执行的动作。以上调整为建议，原稿依据见 [1]。'
 if(index===1){
  const opening=`口播：“今晚我们围绕《${title}》解决一个具体问题。你现在最想解决的卡点是什么？请在评论里写下当前阶段，以及卡在什么步骤。”\n互动：先读取两条真实评论，把共性问题写在白板上；不预设观众已经留言。\n承诺：“今天先把一个方法讲清楚，结束时带走一个可以执行的动作。”`
  const revised=sections.map(([h,b],i)=>[h,i===0?opening:b+'\n【新增互动建议】讲解后暂停提问：“刚才哪一步最难理解？请说具体步骤。”收到评论后再示范，不代替观众编写反馈。'])
  text=`**《${title}》开场与互动优化稿**\n\n保留原稿目标：${ctx.goal||title}。[1]\n\n`+revised.map(([h,b])=>`## ${h}\n${b}`).join('\n\n')+'\n\n**修改理由**\n1. 开场用具体卡点收集替代泛泛寒暄。\n2. 讲解之间增加理解检查，让评论与当前方法关联。\n3. 保留原主题和原有教学方法，不替换成其他脚本。新增话术属于优化建议。'
  draft={title:title+' · 开场互动优化稿',content:text,type:'live'}
 }
 if(index===2){
  const sales=sections.filter(([,body])=>/课程|购买|价格|优惠|销售|福利/.test(body))
  text=`**《${title}》销售承接 SOP**\n\n`+(sales.length?'原稿相关片段：[1]\n\n'+sales.map(([h,b])=>`### ${h}\n${b}`).join('\n\n'):'原稿没有明确的销售段落，因此以下是可补充的承接建议，不冒充已有话术。[1]')+'\n\n**建议执行流程**\n1. 先完成本场方法演示，询问观众还有哪个具体困难。\n2. 仅对与课程适配的需求介绍课程；说明目标人群与内容，不承诺成绩或收益。\n3. 价格、服务与优惠以实际产品资料为准，资料缺失时先核对。\n4. 对真实问题答疑，不制造观众反馈或稀缺名额。\n5. 收尾给出学习行动和课程查看方式；直播后记录承接节点与实际表现，作为下一场复盘依据。'
  draft={title:title+' · 销售承接SOP',content:text,type:'document'}
 }
 if(index===3){
  text=`**下一场直播方案：${title} · 跟进与答疑**\n\n目标：围绕本场目标复查执行情况，再解决一个高频卡点。原稿目标：${ctx.goal||title}。[1]\n\n**0–5分钟｜收集进展**\n口播：“上次的行动你做到哪一步？请告诉我一个已经解决的问题和一个仍卡住的问题。”\n没有上场反馈时，用本场问题收集替代，不编造进展。\n\n**5–15分钟｜回顾原方法**\n复用原稿的核心讲解：\n`+(sections[1]?.[1]||sections[0][1])+'\n\n**15–35分钟｜方法应用与示范**\n选择实际收集到的一个问题，按原稿方法演示；每一步说明理由，再请观众尝试。教学案例与答案需提前核对。\n\n**35–55分钟｜分组答疑**\n按观众阶段和卡点分类，每类处理一个问题；其余记录到下次选题。\n\n**55–60分钟｜收尾行动**\n给出一个当天能完成的动作，并记录下一场需要验证的留存、互动与内容反馈。\n\n以上是基于当前稿件整理的下一场建议，不代表已经发布或执行。'
  draft={title:title+' · 下一场跟进方案',content:text,type:'live'}
 }
 if(index===4)return {schedule:true,title,content:original,source}
 return {text,draft,sources:[source],routeLabel:index===0?'直播脚本总结':'直播脚本内容整理',artifacts:draft?[{type:'script',label:index===2?'查看完整 SOP':'查看完整直播脚本'},{type:'document',label:'加入知识库'}]:[{type:'document',label:'加入知识库'}],steps:[{name:'定位当前直播稿件',status:'done',detail:title},{name:'读取正文与阶段安排',status:'done',detail:`读取 ${sections.length} 个环节，使用当前稿件，排除旧短视频上下文。`},{name:'整理本场结果',status:'done',execution:'依据当前正文与已准备模板 · 未调用模型',detail:'区分原稿和新增建议，保留引用。'}]}
}
