import Foundation
import AVFoundation
import Vision
import AppKit
let url=URL(fileURLWithPath:CommandLine.arguments[1])
let asset=AVURLAsset(url:url)
let duration=CMTimeGetSeconds(asset.duration)
let generator=AVAssetImageGenerator(asset:asset)
generator.appliesPreferredTrackTransform=true
generator.maximumSize=CGSize(width:900,height:1600)
var rows:[[String:Any]]=[]
var keyframes:[[String:Any]]=[]
let interval=max(1.0,duration/180.0)
for t in stride(from:0.5,to:min(duration,1200),by:interval){
 do {
  let cg=try generator.copyCGImage(at:CMTime(seconds:t,preferredTimescale:600),actualTime:nil)
  if keyframes.count < 8 && t >= Double(keyframes.count) * min(duration,1200) / 8 {
   let bitmap=NSBitmapImageRep(cgImage:cg)
   if let jpeg=bitmap.representation(using:.jpeg,properties:[.compressionFactor:0.65]) {
    keyframes.append(["time":t,"image":"data:image/jpeg;base64,"+jpeg.base64EncodedString()])
   }
  }
  let request=VNRecognizeTextRequest()
  request.recognitionLevel = .accurate
  request.recognitionLanguages=["zh-Hans","en-US"]
  request.usesLanguageCorrection=false
  try VNImageRequestHandler(cgImage:cg).perform([request])
  let lines=(request.results ?? []).compactMap { ob -> [String:Any]? in
   guard let text=ob.topCandidates(1).first else{return nil}
   return ["text":text.string,"confidence":text.confidence,"y":ob.boundingBox.minY,"x":ob.boundingBox.minX]
  }
  rows.append(["time":t,"lines":lines])
 }catch{}
}
let data=try JSONSerialization.data(withJSONObject:["duration":duration,"frames":rows,"keyframes":keyframes],options:[.sortedKeys])
FileHandle.standardOutput.write(data)
