// 旧演示排期属于 2026 年 9 月；按绝对日期映射，不能随本周平移。
export function historicalTemplateLanes(lanes,start,index=0){
 const origin=new Date(2026,8,1);origin.setDate(origin.getDate()-(origin.getDay()+6)%7)
 const offset=Math.round((origin-start)/(7*86400000))-index*4
 return lanes.map(lane=>({...lane,items:(lane.items||[]).flatMap(item=>{
  const s=offset+Number(item.s||0),e=offset+Number(item.e??item.s??0)
  return e>=0&&s<4?[{...item,s:Math.max(0,s),e:Math.min(3,e),historical:true}]:[]
 })}))
}

// 用户授权编排的生产计划草案；与历史经营指标分开。
const topics={
 9:['开学收心与适应','新学期时间规划','家长沟通与自律','第一次月考准备'],
 10:['国庆后收心：三天找回节奏','月考错题：定位真正薄弱点','期中复习：两周计划','考前焦虑：家长怎样陪伴'],
 11:['期中复盘：试卷诊断','英语背词：拼读与间隔复习','数学卡题：条件到公式','月底自检：调整学习节奏'],
 12:['期末复习：知识清单','易错题：同类变式训练','考前时间：主科优先级','年度复盘：寒假目标']
}
export function productionPlanLanes(lanes,start,index=0){
 const historical=historicalTemplateLanes(lanes,start,index)
 return historical.map((lane,l)=>{
  const items=[...lane.items]
  const slots=l===0?[0,1,2,3]:l===1?[0,1,3]:l===2?[0,2,3]:[0,1,3]
  for(const w of slots){
   const date=new Date(start.getFullYear(),start.getMonth(),start.getDate()+(index*4+w)*7)
   if(date<new Date(2026,9,1)||date>=new Date(2027,0,1))continue
   const topic=topics[date.getMonth()+1][Math.min(3,Math.floor((date.getDate()-1)/7))]
   const short=topic.split('：')[0]
   const labels=[topic,short+'脚本',short+'（发布）',short+'专场',short+'开播']
   items.push({name:labels[l],s:w,e:l===2&&w===0?1:w,t:l===1?'draft':l>=3?'live':'video',notes:'内容生产计划草案。开场收集具体问题，结合知识库讲解一个可执行方法，结尾引导留言与答疑。'})
  }
  return {...lane,items}
 })
}
