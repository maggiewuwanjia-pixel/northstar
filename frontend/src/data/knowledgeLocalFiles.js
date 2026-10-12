// Keep replacement originals and their parsed content across guest visits.
function database() {
 return new Promise((resolve,reject)=>{
  const request=indexedDB.open('northstar-knowledge-files',1)
  request.onupgradeneeded=()=>request.result.createObjectStore('replacements',{keyPath:'id'})
  request.onsuccess=()=>resolve(request.result)
  request.onerror=()=>reject(request.error)
 })
}
export async function saveReplacement(id,file,parsed) {
 const db=await database()
 try{await new Promise((resolve,reject)=>{
  const tx=db.transaction('replacements','readwrite')
  tx.objectStore('replacements').put({id,file,parsed,title:file.name,file_type:file.type})
  tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error)
 })}finally{db.close()}
}
export async function loadReplacements() {
 const db=await database()
 try{return await new Promise((resolve,reject)=>{
  const request=db.transaction('replacements').objectStore('replacements').getAll()
  request.onsuccess=()=>resolve(request.result.map(row=>({...row.parsed,id:row.id,title:row.title,file_type:row.file_type,uri:URL.createObjectURL(row.file),parse_status:'completed',parse_error:''})))
  request.onerror=()=>reject(request.error)
 })}finally{db.close()}
}
