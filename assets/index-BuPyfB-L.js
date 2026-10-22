var Nc=Object.defineProperty;var xr=e=>{throw TypeError(e)};var Fc=(e,t,n)=>t in e?Nc(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var ot=(e,t,n)=>Fc(e,typeof t!="symbol"?t+"":t,n),zc=(e,t,n)=>t.has(e)||xr("Cannot "+n);var Sr=(e,t,n)=>t.has(e)?xr("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n);var $r=(e,t,n)=>(zc(e,t,"access private method"),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();/**
* @vue/shared v3.5.42
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Vl(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const at={},Ks=[],Hn=()=>{},eu=()=>!1,$o=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Co=e=>e.startsWith("onUpdate:"),Kt=Object.assign,Hl=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Uc=Object.prototype.hasOwnProperty,nt=(e,t)=>Uc.call(e,t),Me=Array.isArray,ms=e=>Mi(e)==="[object Map]",ns=e=>Mi(e)==="[object Set]",Cr=e=>Mi(e)==="[object Date]",Re=e=>typeof e=="function",yt=e=>typeof e=="string",qn=e=>typeof e=="symbol",it=e=>e!==null&&typeof e=="object",tu=e=>(it(e)||Re(e))&&Re(e.then)&&Re(e.catch),nu=Object.prototype.toString,Mi=e=>nu.call(e),jc=e=>Mi(e).slice(8,-1),su=e=>Mi(e)==="[object Object]",Wl=e=>yt(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,mi=Vl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),To=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},Bc=/-\w/g,tn=To(e=>e.replace(Bc,t=>t.slice(1).toUpperCase())),Vc=/\B([A-Z])/g,ys=To(e=>e.replace(Vc,"-$1").toLowerCase()),Ao=To(e=>e.charAt(0).toUpperCase()+e.slice(1)),Bo=To(e=>e?`on${Ao(e)}`:""),Bn=(e,t)=>!Object.is(e,t),to=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},iu=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},Eo=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Tr;const Do=()=>Tr||(Tr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Rt(e){if(Me(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],i=yt(s)?Kc(s):Rt(s);if(i)for(const l in i)t[l]=i[l]}return t}else if(yt(e)||it(e))return e}const Hc=/;(?![^(]*\))/g,Wc=/:([^]+)/,qc=/\/\*[^]*?\*\//g;function Kc(e){const t={};return e.replace(qc,"").split(Hc).forEach(n=>{if(n){const s=n.split(Wc);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function we(e){let t="";if(yt(e))t=e;else if(Me(e))for(let n=0;n<e.length;n++){const s=we(e[n]);s&&(t+=s+" ")}else if(it(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Gc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Xc=Vl(Gc);function ou(e){return!!e||e===""}function Yc(e,t){if(e.length!==t.length)return!1;let n=!0;for(let s=0;n&&s<e.length;s++)n=Mn(e[s],t[s]);return n}function Ar(e,t){if(e.size!==t.size)return!1;const n=Array.from(t),s=new Uint8Array(n.length);for(const i of e){let l=-1;for(let r=0;r<n.length;r++)if(!s[r]&&Mn(i,n[r])){l=r;break}if(l<0)return!1;s[l]=1}return!0}function Mn(e,t){if(e===t)return!0;let n=Cr(e),s=Cr(t);if(n||s)return n&&s?e.getTime()===t.getTime():!1;if(n=qn(e),s=qn(t),n||s)return e===t;if(n=Me(e),s=Me(t),n||s)return n&&s?Yc(e,t):!1;if(n=it(e),s=it(t),n||s){if(!n||!s)return!1;if(n=ms(e),s=ms(t),n||s||(n=ns(e),s=ns(t),n||s))return n&&s?Ar(e,t):!1;const i=Object.keys(e).length,l=Object.keys(t).length;if(i!==l)return!1;for(const r in e){const a=e.hasOwnProperty(r),u=t.hasOwnProperty(r);if(a&&!u||!a&&u||!Mn(e[r],t[r]))return!1}}return String(e)===String(t)}function ql(e,t){return e.findIndex(n=>Mn(n,t))}const lu=e=>!!(e&&e.__v_isRef===!0),v=e=>yt(e)?e:e==null?"":Me(e)||it(e)&&(e.toString===nu||!Re(e.toString))?lu(e)?v(e.value):JSON.stringify(e,ru,2):String(e),ru=(e,t)=>lu(t)?ru(e,t.value):ms(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,i],l)=>(n[Vo(s,l)+" =>"]=i,n),{})}:ns(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Vo(n))}:qn(t)?Vo(t):it(t)&&!Me(t)&&!su(t)?String(t):t,Vo=(e,t="")=>{var n;return qn(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.42
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let zt;class Jc{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&zt&&(zt.active?(this.parent=zt,this.index=(zt.scopes||(zt.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes){const s=this.scopes.slice();for(t=0,n=s.length;t<n;t++)s[t].pause()}for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes){const i=this.scopes.slice();for(t=0,n=i.length;t<n;t++)i[t].resume()}const s=this.effects.slice();for(t=0,n=s.length;t<n;t++)s[t].resume()}}run(t){if(this._active){const n=zt;try{return zt=this,t()}finally{zt=n}}}on(){++this._on===1&&(this.prevScope=zt,zt=this)}off(){if(this._on>0&&--this._on===0){if(zt===this)zt=this.prevScope;else{let t=zt;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const i=this.scopes.slice();for(n=0,s=i.length;n<s;n++)i[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Zc(){return zt}let ct;const Ho=new WeakSet;class au{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,zt&&(zt.active?zt.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ho.has(this)&&(Ho.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||cu(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Er(this),du(this);const t=ct,n=Dn;ct=this,Dn=!0;try{return this.fn()}finally{pu(this),ct=t,Dn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Xl(t);this.deps=this.depsTail=void 0,Er(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ho.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){vl(this)&&this.run()}get dirty(){return vl(this)}}let uu=0,gi,_i;function cu(e,t=!1){if(e.flags|=8,t){e.next=_i,_i=e;return}e.next=gi,gi=e}function Kl(){uu++}function Gl(){if(--uu>0)return;if(_i){let t=_i;for(_i=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;gi;){let t=gi;for(gi=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=n}}if(e)throw e}function du(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function pu(e){let t,n=e.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),Xl(s),Qc(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}e.deps=t,e.depsTail=n}function vl(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(fu(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function fu(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Si)||(e.globalVersion=Si,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!vl(e))))return;e.flags|=2;const t=e.dep,n=ct,s=Dn;ct=e,Dn=!0;try{du(e);const i=e.fn(e._value);(t.version===0||Bn(i,e._value))&&(e.flags|=128,e._value=i,t.version++)}catch(i){throw t.version++,i}finally{ct=n,Dn=s,pu(e),e.flags&=-3}}function Xl(e,t=!1){const{dep:n,prevSub:s,nextSub:i}=e;if(s&&(s.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=s,e.nextSub=void 0),n.subs===e&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let l=n.computed.deps;l;l=l.nextDep)Xl(l,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Qc(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Dn=!0;const vu=[];function ss(){vu.push(Dn),Dn=!1}function is(){const e=vu.pop();Dn=e===void 0?!0:e}function Er(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=ct;ct=void 0;try{t()}finally{ct=n}}}let Si=0;class e1{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Yl{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ct||!Dn||ct===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ct)n=this.activeLink=new e1(ct,this),ct.deps?(n.prevDep=ct.depsTail,ct.depsTail.nextDep=n,ct.depsTail=n):ct.deps=ct.depsTail=n,hu(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=ct.depsTail,n.nextDep=void 0,ct.depsTail.nextDep=n,ct.depsTail=n,ct.deps===n&&(ct.deps=s)}return n}trigger(t){this.version++,Si++,this.notify(t)}notify(t){Kl();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Gl()}}}function hu(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)hu(s)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const hl=new WeakMap,Ds=Symbol(""),ml=Symbol(""),$i=Symbol("");function Ht(e,t,n){if(Dn&&ct){let s=hl.get(e);s||hl.set(e,s=new Map);let i=s.get(n);i||(s.set(n,i=new Yl),i.map=s,i.key=n),i.track()}}function Qn(e,t,n,s,i,l){const r=hl.get(e);if(!r){Si++;return}const a=u=>{u&&u.trigger()};if(Kl(),t==="clear")r.forEach(a);else{const u=Me(e),p=u&&Wl(n);if(u&&n==="length"){const c=Number(s);r.forEach((h,m)=>{(m==="length"||m===$i||!qn(m)&&m>=c)&&a(h)})}else switch((n!==void 0||r.has(void 0))&&a(r.get(n)),p&&a(r.get($i)),t){case"add":u?p&&a(r.get("length")):(a(r.get(Ds)),ms(e)&&a(r.get(ml)));break;case"delete":u||(a(r.get(Ds)),ms(e)&&a(r.get(ml)));break;case"set":ms(e)&&a(r.get(Ds));break}}Gl()}function js(e){const t=tt(e);return t===e?t:(Ht(t,"iterate",$i),xn(e)?t:t.map(On))}function Mo(e){return Ht(e=tt(e),"iterate",$i),e}function Un(e,t){return os(e)?Js(Ms(e)?On(t):t):On(t)}const t1={__proto__:null,[Symbol.iterator](){return Wo(this,Symbol.iterator,e=>Un(this,e))},concat(...e){return js(this).concat(...e.map(t=>Me(t)?js(t):t))},entries(){return Wo(this,"entries",e=>(e[1]=Un(this,e[1]),e))},every(e,t){return Yn(this,"every",e,t,void 0,arguments)},filter(e,t){return Yn(this,"filter",e,t,n=>n.map(s=>Un(this,s)),arguments)},find(e,t){return Yn(this,"find",e,t,n=>Un(this,n),arguments)},findIndex(e,t){return Yn(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Yn(this,"findLast",e,t,n=>Un(this,n),arguments)},findLastIndex(e,t){return Yn(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Yn(this,"forEach",e,t,void 0,arguments)},includes(...e){return qo(this,"includes",e)},indexOf(...e){return qo(this,"indexOf",e)},join(e){return js(this).join(e)},lastIndexOf(...e){return qo(this,"lastIndexOf",e)},map(e,t){return Yn(this,"map",e,t,void 0,arguments)},pop(){return si(this,"pop")},push(...e){return si(this,"push",e)},reduce(e,...t){return Dr(this,"reduce",e,t)},reduceRight(e,...t){return Dr(this,"reduceRight",e,t)},shift(){return si(this,"shift")},some(e,t){return Yn(this,"some",e,t,void 0,arguments)},splice(...e){return si(this,"splice",e)},toReversed(){return js(this).toReversed()},toSorted(e){return js(this).toSorted(e)},toSpliced(...e){return js(this).toSpliced(...e)},unshift(...e){return si(this,"unshift",e)},values(){return Wo(this,"values",e=>Un(this,e))}};function Wo(e,t,n){const s=Mo(e),i=s[t]();return s!==e&&!xn(e)&&(i._next=i.next,i.next=()=>{const l=i._next();return l.done||(l.value=n(l.value)),l}),i}const n1=Array.prototype;function Yn(e,t,n,s,i,l){const r=Mo(e),a=r!==e&&!xn(e),u=r[t];if(u!==n1[t]){const h=u.apply(e,l);return a?On(h):h}let p=n;r!==e&&(a?p=function(h,m){return n.call(this,Un(e,h),m,e)}:n.length>2&&(p=function(h,m){return n.call(this,h,m,e)}));const c=u.call(r,p,s);return a&&i?i(c):c}function Dr(e,t,n,s){const i=Mo(e),l=i!==e&&!xn(e);let r=n,a=!1;i!==e&&(l?(a=s.length===0,r=function(p,c,h){return a&&(a=!1,p=Un(e,p)),n.call(this,p,Un(e,c),h,e)}):n.length>3&&(r=function(p,c,h){return n.call(this,p,c,h,e)}));const u=i[t](r,...s);return a?Un(e,u):u}function qo(e,t,n){const s=tt(e);Ht(s,"iterate",$i);const i=s[t](...n);return(i===-1||i===!1)&&Ql(n[0])?(n[0]=tt(n[0]),s[t](...n)):i}function si(e,t,n=[]){ss(),Kl();const s=tt(e)[t].apply(e,n);return Gl(),is(),s}const s1=Vl("__proto__,__v_isRef,__isVue"),mu=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(qn));function i1(e){qn(e)||(e=String(e));const t=tt(this);return Ht(t,"has",e),t.hasOwnProperty(e)}class gu{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){if(n==="__v_skip")return t.__v_skip;const i=this._isReadonly,l=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return l;if(n==="__v_raw")return s===(i?l?v1:wu:l?bu:yu).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const r=Me(t);if(!i){let u;if(r&&(u=t1[n]))return u;if(n==="hasOwnProperty")return i1}const a=Reflect.get(t,n,qt(t)?t:s);if((qn(n)?mu.has(n):s1(n))||(i||Ht(t,"get",n),l))return a;if(qt(a)){const u=r&&Wl(n)?a:a.value;return i&&it(u)?_l(u):u}return it(a)?i?_l(a):Rs(a):a}}class _u extends gu{constructor(t=!1){super(!1,t)}set(t,n,s,i){let l=t[n];const r=Me(t)&&Wl(n);if(!this._isShallow){const p=os(l);if(!xn(s)&&!os(s)&&(l=tt(l),s=tt(s)),!r&&qt(l)&&!qt(s))return p||(l.value=s),!0}const a=r?Number(n)<t.length:nt(t,n),u=Reflect.set(t,n,s,qt(t)?t:i);return t===tt(i)&&u&&(a?Bn(s,l)&&Qn(t,"set",n,s):Qn(t,"add",n,s)),u}deleteProperty(t,n){const s=nt(t,n);t[n];const i=Reflect.deleteProperty(t,n);return i&&s&&Qn(t,"delete",n,void 0),i}has(t,n){const s=Reflect.has(t,n);return(!qn(n)||!mu.has(n))&&Ht(t,"has",n),s}ownKeys(t){return Ht(t,"iterate",Me(t)?"length":Ds),Reflect.ownKeys(t)}}class o1 extends gu{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const l1=new _u,r1=new o1,a1=new _u(!0);const gl=e=>e,Bi=e=>Reflect.getPrototypeOf(e);function u1(e,t,n){return function(...s){const i=this.__v_raw,l=tt(i),r=ms(l),a=e==="entries"||e===Symbol.iterator&&r,u=e==="keys"&&r,p=i[e](...s),c=n?gl:t?Js:On;return!t&&Ht(l,"iterate",u?ml:Ds),Kt(Object.create(p),{next(){const{value:h,done:m}=p.next();return m?{value:h,done:m}:{value:a?[c(h[0]),c(h[1])]:c(h),done:m}}})}}function Vi(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function c1(e,t){const n={get(i){const l=this.__v_raw,r=tt(l),a=tt(i);e||(Bn(i,a)&&Ht(r,"get",i),Ht(r,"get",a));const{has:u}=Bi(r),p=t?gl:e?Js:On;if(u.call(r,i))return p(l.get(i));if(u.call(r,a))return p(l.get(a));l!==r&&l.get(i)},get size(){const i=this.__v_raw;return!e&&Ht(tt(i),"iterate",Ds),i.size},has(i){const l=this.__v_raw,r=tt(l),a=tt(i);return e||(Bn(i,a)&&Ht(r,"has",i),Ht(r,"has",a)),i===a?l.has(i):l.has(i)||l.has(a)},forEach(i,l){const r=this,a=r.__v_raw,u=tt(a),p=t?gl:e?Js:On;return!e&&Ht(u,"iterate",Ds),a.forEach((c,h)=>i.call(l,p(c),p(h),r))}};return Kt(n,e?{add:Vi("add"),set:Vi("set"),delete:Vi("delete"),clear:Vi("clear")}:{add(i){const l=tt(this),r=Bi(l),a=tt(i),u=!t&&!xn(i)&&!os(i)?a:i;return r.has.call(l,u)||Bn(i,u)&&r.has.call(l,i)||Bn(a,u)&&r.has.call(l,a)||(l.add(u),Qn(l,"add",u,u)),this},set(i,l){!t&&!xn(l)&&!os(l)&&(l=tt(l));const r=tt(this),{has:a,get:u}=Bi(r);let p=a.call(r,i);p||(i=tt(i),p=a.call(r,i));const c=u.call(r,i);return r.set(i,l),p?Bn(l,c)&&Qn(r,"set",i,l):Qn(r,"add",i,l),this},delete(i){const l=tt(this),{has:r,get:a}=Bi(l);let u=r.call(l,i);u||(i=tt(i),u=r.call(l,i)),a&&a.call(l,i);const p=l.delete(i);return u&&Qn(l,"delete",i,void 0),p},clear(){const i=tt(this),l=i.size!==0,r=i.clear();return l&&Qn(i,"clear",void 0,void 0),r}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=u1(i,e,t)}),n}function Jl(e,t){const n=c1(e,t);return(s,i,l)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?s:Reflect.get(nt(n,i)&&i in s?n:s,i,l)}const d1={get:Jl(!1,!1)},p1={get:Jl(!1,!0)},f1={get:Jl(!0,!1)};const yu=new WeakMap,bu=new WeakMap,wu=new WeakMap,v1=new WeakMap;function h1(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Rs(e){return os(e)?e:Zl(e,!1,l1,d1,yu)}function m1(e){return Zl(e,!1,a1,p1,bu)}function _l(e){return Zl(e,!0,r1,f1,wu)}function Zl(e,t,n,s,i){if(!it(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const l=i.get(e);if(l)return l;const r=h1(jc(e));if(r===0)return e;const a=new Proxy(e,r===2?s:n);return i.set(e,a),a}function Ms(e){return os(e)?Ms(e.__v_raw):!!(e&&e.__v_isReactive)}function os(e){return!!(e&&e.__v_isReadonly)}function xn(e){return!!(e&&e.__v_isShallow)}function Ql(e){return e?!!e.__v_raw:!1}function tt(e){const t=e&&e.__v_raw;return t?tt(t):e}function g1(e){return!nt(e,"__v_skip")&&Object.isExtensible(e)&&iu(e,"__v_skip",!0),e}const On=e=>it(e)?Rs(e):e,Js=e=>it(e)?_l(e):e;function qt(e){return e?e.__v_isRef===!0:!1}function K(e){return _1(e,!1)}function _1(e,t){return qt(e)?e:new y1(e,t)}class y1{constructor(t,n){this.dep=new Yl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:tt(t),this._value=n?t:On(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,s=this.__v_isShallow||xn(t)||os(t);t=s?t:tt(t),Bn(t,n)&&(this._rawValue=t,this._value=s?t:On(t),this.dep.trigger())}}function se(e){return qt(e)?e.value:e}const b1={get:(e,t,n)=>t==="__v_raw"?e:se(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const i=e[t];return qt(i)&&!qt(n)?(i.value=n,!0):Reflect.set(e,t,n,s)}};function ku(e){return Ms(e)?e:new Proxy(e,b1)}class w1{constructor(t,n,s){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Yl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Si-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&ct!==this)return cu(this,!0),!0}get value(){const t=this.dep.track();return fu(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function k1(e,t,n=!1){let s,i;return Re(e)?s=e:(s=e.get,i=e.set),new w1(s,i,n)}const Hi={},lo=new WeakMap;let Cs;function x1(e,t=!1,n=Cs){if(n){let s=lo.get(n);s||lo.set(n,s=[]),s.push(e)}}function S1(e,t,n=at){const{immediate:s,deep:i,once:l,scheduler:r,augmentJob:a,call:u}=n,p=ie=>i?ie:xn(ie)||i===!1||i===0?es(ie,1):es(ie);let c,h,m,C,O=!1,E=!1;if(qt(e)?(h=()=>e.value,O=xn(e)):Ms(e)?(h=()=>p(e),O=!0):Me(e)?(E=!0,O=e.some(ie=>Ms(ie)||xn(ie)),h=()=>e.map(ie=>{if(qt(ie))return ie.value;if(Ms(ie))return p(ie);if(Re(ie))return u?u(ie,2):ie()})):Re(e)?t?h=u?()=>u(e,2):e:h=()=>{if(m){ss();try{m()}finally{is()}}const ie=Cs;Cs=c;try{return u?u(e,3,[C]):e(C)}finally{Cs=ie}}:h=Hn,t&&i){const ie=h,Q=i===!0?1/0:i;h=()=>es(ie(),Q)}const I=Zc(),ee=()=>{c.stop(),I&&I.active&&Hl(I.effects,c)};if(l&&t){const ie=t;t=(...Q)=>{const j=ie(...Q);return ee(),j}}let R=E?new Array(e.length).fill(Hi):Hi;const te=ie=>{if(!(!(c.flags&1)||!c.dirty&&!ie))if(t){const Q=c.run();if(ie||i||O||(E?Q.some((j,D)=>Bn(j,R[D])):Bn(Q,R))){m&&m();const j=Cs;Cs=c;try{const D=[Q,R===Hi?void 0:E&&R[0]===Hi?[]:R,C];R=Q,u?u(t,3,D):t(...D)}finally{Cs=j}}}else c.run()};return a&&a(te),c=new au(h),c.scheduler=r?()=>r(te,!1):te,C=ie=>x1(ie,!1,c),m=c.onStop=()=>{const ie=lo.get(c);if(ie){if(u)u(ie,4);else for(const Q of ie)Q();lo.delete(c)}},t?s?te(!0):R=c.run():r?r(te.bind(null,!0),!0):c.run(),ee.pause=c.pause.bind(c),ee.resume=c.resume.bind(c),ee.stop=ee,ee}function es(e,t=1/0,n){if(t<=0||!it(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,qt(e))es(e.value,t,n);else if(Me(e))for(let s=0;s<e.length;s++)es(e[s],t,n);else if(ns(e)||ms(e))e.forEach(s=>{es(s,t,n)});else if(su(e)){for(const s in e)es(e[s],t,n);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&es(e[s],t,n)}return e}/**
* @vue/runtime-core v3.5.42
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Oi(e,t,n,s){try{return s?e(...s):e()}catch(i){Oo(i,t,n)}}function In(e,t,n,s){if(Re(e)){const i=Oi(e,t,n,s);return i&&tu(i)&&i.catch(l=>{Oo(l,t,n)}),i}if(Me(e)){const i=[];for(let l=0;l<e.length;l++)i.push(In(e[l],t,n,s));return i}}function Oo(e,t,n,s=!0){const i=t?t.vnode:null,{errorHandler:l,throwUnhandledErrorInProduction:r}=t&&t.appContext.config||at;if(t){let a=t.parent;const u=t.proxy,p=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const c=a.ec;if(c){for(let h=0;h<c.length;h++)if(c[h](e,u,p)===!1)return}a=a.parent}if(l){ss(),Oi(l,null,10,[e,u,p]),is();return}}$1(e,n,i,s,r)}function $1(e,t,n,s=!0,i=!1){if(i)throw e;console.error(e)}const en=[];let Fn=-1;const Gs=[];let hs=null,Hs=0;const xu=Promise.resolve();let ro=null;function zn(e){const t=ro||xu;return e?t.then(this?e.bind(this):e):t}function C1(e){let t=Fn+1,n=en.length;for(;t<n;){const s=t+n>>>1,i=en[s],l=Ci(i);l<e||l===e&&i.flags&2?t=s+1:n=s}return t}function er(e){if(!(e.flags&1)){const t=Ci(e),n=en[en.length-1];!n||!(e.flags&2)&&t>=Ci(n)?en.push(e):en.splice(C1(t),0,e),e.flags|=1,Su()}}function Su(){ro||(ro=xu.then(Cu))}function T1(e){if(!Me(e))hs&&e.id===-1?hs.splice(Hs+1,0,e):e.flags&1||(Gs.push(e),e.flags|=1);else for(let t=0;t<e.length;t++)Gs.push(e[t]);Su()}function Mr(e,t,n=Fn+1){for(;n<en.length;n++){const s=en[n];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;en.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function $u(e){if(Gs.length){const t=[...new Set(Gs)].sort((n,s)=>Ci(n)-Ci(s));if(Gs.length=0,hs){for(let n=0;n<t.length;n++)hs.push(t[n]);return}for(hs=t,Hs=0;Hs<hs.length;Hs++){const n=hs[Hs];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}hs=null,Hs=0}}const Ci=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Cu(e){try{for(Fn=0;Fn<en.length;Fn++){const t=en[Fn];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Oi(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Fn<en.length;Fn++){const t=en[Fn];t&&(t.flags&=-2)}Fn=-1,en.length=0,$u(),ro=null,(en.length||Gs.length)&&Cu()}}let hn=null,Tu=null;function ao(e){const t=hn;return hn=e,Tu=e&&e.type.__scopeId||null,t}function A1(e,t=hn,n){if(!t||e._n)return e;const s=(...i)=>{s._d&&po(-1);const l=ao(t),r=Os.length;let a;try{a=e(...i)}finally{for(let u=Os.length;u>r;u--)Ju();ao(l),s._d&&po(1)}return a};return s._n=!0,s._c=!0,s._d=!0,s}function Qe(e,t){if(hn===null)return e;const n=No(hn),s=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[l,r,a,u=at]=t[i];l&&(Re(l)&&(l={mounted:l,updated:l}),l.deep&&es(r),s.push({dir:l,instance:n,value:r,oldValue:void 0,arg:a,modifiers:u}))}return e}function Ss(e,t,n,s){const i=e.dirs,l=t&&t.dirs;for(let r=0;r<i.length;r++){const a=i[r];l&&(a.oldValue=l[r].value);let u=a.dir[s];u&&(ss(),In(u,n,8,[e.el,a,e,t]),is())}}function E1(e,t){if(Wt){let n=Wt.provides;const s=Wt.parent&&Wt.parent.provides;s===n&&(n=Wt.provides=Object.create(s)),n[e]=t}}function no(e,t,n=!1){const s=D0();if(s||Xs){let i=Xs?Xs._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&Re(t)?t.call(s&&s.proxy):t}}const D1=Symbol.for("v-scx"),M1=()=>no(D1);function dt(e,t,n){return Au(e,t,n)}function Au(e,t,n=at){const{immediate:s,deep:i,flush:l,once:r}=n,a=Kt({},n),u=t&&s||!t&&l!=="post";let p;if(Ei){if(l==="sync"){const C=M1();p=C.__watcherHandles||(C.__watcherHandles=[])}else if(!u){const C=()=>{};return C.stop=Hn,C.resume=Hn,C.pause=Hn,C}}const c=Wt;a.call=(C,O,E)=>In(C,c,O,E);let h=!1;l==="post"?a.scheduler=C=>{Qt(C,c&&c.suspense)}:l!=="sync"&&(h=!0,a.scheduler=(C,O)=>{O?C():er(C)}),a.augmentJob=C=>{t&&(C.flags|=4),h&&(C.flags|=2,c&&(C.id=c.uid,C.i=c))};const m=S1(e,t,a);return Ei&&(p?p.push(m):u&&m()),m}function O1(e,t,n){const s=this.proxy,i=yt(e)?e.includes(".")?Eu(s,e):()=>s[e]:e.bind(s,s);let l;Re(t)?l=t:(l=t.handler,n=t);const r=Ii(this),a=Au(i,l.bind(s),n);return r(),a}function Eu(e,t){const n=t.split(".");return()=>{let s=e;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const vs=new WeakMap,Du=Symbol("_vte"),Io=e=>e.__isTeleport,As=e=>e&&(e.disabled||e.disabled===""),I1=e=>e&&(e.defer||e.defer===""),Or=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Ir=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,yl=(e,t)=>{const n=e&&e.to;return yt(n)?t?t(n):null:n},R1={name:"Teleport",__isTeleport:!0,process(e,t,n,s,i,l,r,a,u,p){const{mc:c,pc:h,pbc:m,o:{insert:C,querySelector:O,createText:E,createComment:I,parentNode:ee}}=p,R=As(t.props);let{dynamicChildren:te}=t;const ie=(D,F,G)=>{D.shapeFlag&16&&c(D.children,F,G,i,l,r,a,u)},Q=(D=t)=>{const F=As(D.props),G=D.target=yl(D.props,O),H=bl(G,D,E,C);G&&(r!=="svg"&&Or(G)?r="svg":r!=="mathml"&&Ir(G)&&(r="mathml"),i&&i.isCE&&(i.ce._teleportTargets||(i.ce._teleportTargets=new Set)).add(G),F||(ie(D,G,H),di(D,!1)))},j=D=>{const F=()=>{if(vs.get(D)===F){if(vs.delete(D),As(D.props)){const G=ee(D.el)||n;ie(D,G,D.anchor),di(D,!0)}Q(D)}};vs.set(D,F),Qt(F,l)};if(e==null){const D=t.el=E(""),F=t.anchor=E("");if(C(D,n,s),C(F,n,s),I1(t.props)||l&&l.pendingBranch){j(t);return}R&&(ie(t,n,F),di(t,!0)),Q()}else{t.el=e.el;const D=t.anchor=e.anchor,F=vs.get(e);if(F){F.flags|=8,vs.delete(e),j(t);return}t.targetStart=e.targetStart;const G=t.target=e.target,H=t.targetAnchor=e.targetAnchor,q=As(e.props),me=q?n:G,Se=q?D:H;if(r==="svg"||Or(G)?r="svg":(r==="mathml"||Ir(G))&&(r="mathml"),te?(m(e.dynamicChildren,te,me,i,l,r,a),or(e,t,!0)):u||h(e,t,me,Se,i,l,r,a,!1),R)q?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):Wi(t,n,D,p,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const et=yl(t.props,O);et&&(t.target=et,Wi(t,et,null,p,0))}else q&&Wi(t,G,H,p,1);di(t,R)}},remove(e,t,n,{um:s,o:{remove:i}},l){const{shapeFlag:r,children:a,anchor:u,targetStart:p,targetAnchor:c,target:h,props:m}=e,C=As(m),O=l||!C,E=vs.get(e);if(E&&(E.flags|=8,vs.delete(e)),h&&(i(p),i(c)),l&&i(u),!E&&(C||h)&&r&16)for(let I=0;I<a.length;I++){const ee=a[I];s(ee,t,n,O,!!ee.dynamicChildren)}},move:Wi,hydrate:P1};function Wi(e,t,n,{o:{insert:s},m:i},l=2){l===0&&s(e.targetAnchor,t,n);const{el:r,anchor:a,shapeFlag:u,children:p,props:c}=e,h=l===2;if(h&&s(r,t,n),!vs.has(e)&&(!h||As(c))&&u&16)for(let m=0;m<p.length;m++)i(p[m],t,n,2);h&&s(a,t,n)}function P1(e,t,n,s,i,l,{o:{nextSibling:r,parentNode:a,querySelector:u,insert:p,createText:c}},h){function m(I,ee){let R=ee;for(;R;){if(R&&R.nodeType===8){if(R.data==="teleport start anchor")t.targetStart=R;else if(R.data==="teleport anchor"){t.targetAnchor=R,I._lpa=t.targetAnchor&&r(t.targetAnchor);break}}R=r(R)}}function C(I,ee){ee.anchor=h(r(I),ee,a(I),n,s,i,l)}const O=t.target=yl(t.props,u),E=As(t.props);if(O){const I=O._lpa||O.firstChild;t.shapeFlag&16&&(E?(C(e,t),m(O,I),t.targetAnchor||bl(O,t,c,p,a(e)===O?e:null)):(t.anchor=r(e),m(O,I),t.targetAnchor||bl(O,t,c,p),h(I&&r(I),t,O,n,s,i,l))),di(t,E)}else E&&t.shapeFlag&16&&(C(e,t),t.targetStart=e,t.targetAnchor=r(e));return t.anchor&&r(t.anchor)}const L1=R1;function di(e,t){const n=e.ctx;if(n&&n.ut){let s,i;for(t?(s=e.el,i=e.anchor):(s=e.targetStart,i=e.targetAnchor);s&&s!==i;)s.nodeType===1&&s.setAttribute("data-v-owner",n.uid),s=s.nextSibling;n.ut()}}function bl(e,t,n,s,i=null){const l=t.targetStart=n(""),r=t.targetAnchor=n("");return l[Du]=r,e&&(s(l,e,i),s(r,e,i)),r}const Ko=Symbol("_leaveCb");function N1(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==ls){t=n;break}}return t}function Mu(e){if(!nr(e))return Io(e.type)&&e.children?N1(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&Re(n.default))return n.default()}}function tr(e,t){if(e.shapeFlag&6&&e.component){e.transition=t;const n=e.component.subTree;tr(Io(n.type)&&Mu(n)||n,t)}else e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Ou(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Rr(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const uo=new WeakMap;function yi(e,t,n,s,i=!1){if(Me(e)){e.forEach((E,I)=>yi(E,t&&(Me(t)?t[I]:t),n,s,i));return}if(bi(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&yi(e,t,n,s.component.subTree);return}const l=s.shapeFlag&4?No(s.component):s.el,r=i?null:l,{i:a,r:u}=e,p=t&&t.r,c=a.refs===at?a.refs={}:a.refs,h=a.setupState,m=tt(h),C=h===at?eu:E=>Rr(c,E)?!1:nt(m,E),O=(E,I)=>!(I&&Rr(c,I));if(p!=null&&p!==u){if(Pr(t),yt(p))c[p]=null,C(p)&&(h[p]=null);else if(qt(p)){const E=t;O(p,E.k)&&(p.value=null),E.k&&(c[E.k]=null)}}if(Re(u))Oi(u,a,12,[r,c]);else{const E=yt(u),I=qt(u);if(E||I){const ee=()=>{if(e.f){const R=E?C(u)?h[u]:c[u]:O()||!e.k?u.value:c[e.k];if(i)Me(R)&&Hl(R,l);else if(Me(R))R.includes(l)||R.push(l);else if(E)c[u]=[l],C(u)&&(h[u]=c[u]);else{const te=[l];O(u,e.k)&&(u.value=te),e.k&&(c[e.k]=te)}}else E?(c[u]=r,C(u)&&(h[u]=r)):I&&(O(u,e.k)&&(u.value=r),e.k&&(c[e.k]=r))};if(r){const R=()=>{ee(),uo.delete(e)};R.id=-1,uo.set(e,R),Qt(R,n)}else Pr(e),ee()}}}function Pr(e){const t=uo.get(e);t&&(t.flags|=8,uo.delete(e))}Do().requestIdleCallback;Do().cancelIdleCallback;const bi=e=>!!e.type.__asyncLoader,nr=e=>e.type.__isKeepAlive;function F1(e,t){Iu(e,"a",t)}function z1(e,t){Iu(e,"da",t)}function Iu(e,t,n=Wt){const s=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(Ro(t,s,n),n){let i=n.parent;for(;i&&i.parent;)nr(i.parent.vnode)&&U1(s,t,n,i),i=i.parent}}function U1(e,t,n,s){const i=Ro(t,e,s,!0);Kn(()=>{Hl(s[t],i)},n)}function Ro(e,t,n=Wt,s=!1){if(n){const i=n[e]||(n[e]=[]),l=t.__weh||(t.__weh=(...r)=>{ss();const a=Ii(n),u=In(t,n,e,r);return a(),is(),u});return s?i.unshift(l):i.push(l),l}}const rs=e=>(t,n=Wt)=>{(!Ei||e==="sp")&&Ro(e,(...s)=>t(...s),n)},j1=rs("bm"),ei=rs("m"),B1=rs("bu"),V1=rs("u"),H1=rs("bum"),Kn=rs("um"),W1=rs("sp"),q1=rs("rtg"),K1=rs("rtc");function G1(e,t=Wt){Ro("ec",e,t)}const X1="components",Ru=Symbol.for("v-ndc");function Y1(e){return yt(e)?J1(X1,e,!1)||e:e||Ru}function J1(e,t,n=!0,s=!1){const i=hn||Wt;if(i){const l=i.type;{const a=P0(l,!1);if(a&&(a===t||a===tn(t)||a===Ao(tn(t))))return l}const r=Lr(i[e]||l[e],t)||Lr(i.appContext[e],t);return!r&&s?l:r}}function Lr(e,t){return e&&(e[t]||e[tn(t)]||e[Ao(tn(t))])}function le(e,t,n,s){let i;const l=n,r=Me(e);if(r||yt(e)){const a=r&&Ms(e);let u=!1,p=!1;a&&(u=!xn(e),p=os(e),e=Mo(e)),i=new Array(e.length);for(let c=0,h=e.length;c<h;c++)i[c]=t(u?p?Js(On(e[c])):On(e[c]):e[c],c,void 0,l)}else if(typeof e=="number"){i=new Array(e);for(let a=0;a<e;a++)i[a]=t(a+1,a,void 0,l)}else if(it(e))if(e[Symbol.iterator])i=Array.from(e,(a,u)=>t(a,u,void 0,l));else{const a=Object.keys(e);i=new Array(a.length);for(let u=0,p=a.length;u<p;u++){const c=a[u];i[u]=t(e[c],c,u,l)}}else i=[];return i}const wl=e=>e?ec(e)?No(e):wl(e.parent):null,wi=Kt(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>wl(e.parent),$root:e=>wl(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Lu(e),$forceUpdate:e=>e.f||(e.f=()=>{er(e.update)}),$nextTick:e=>e.n||(e.n=zn.bind(e.proxy)),$watch:e=>O1.bind(e)}),Go=(e,t)=>e!==at&&!e.__isScriptSetup&&nt(e,t),Z1={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:l,accessCache:r,type:a,appContext:u}=e;if(t[0]!=="$"){const m=r[t];if(m!==void 0)switch(m){case 1:return s[t];case 2:return i[t];case 4:return n[t];case 3:return l[t]}else{if(Go(s,t))return r[t]=1,s[t];if(i!==at&&nt(i,t))return r[t]=2,i[t];if(nt(l,t))return r[t]=3,l[t];if(n!==at&&nt(n,t))return r[t]=4,n[t];kl&&(r[t]=0)}}const p=wi[t];let c,h;if(p)return t==="$attrs"&&Ht(e.attrs,"get",""),p(e);if((c=a.__cssModules)&&(c=c[t]))return c;if(n!==at&&nt(n,t))return r[t]=4,n[t];if(h=u.config.globalProperties,nt(h,t))return h[t]},set({_:e},t,n){const{data:s,setupState:i,ctx:l}=e;return Go(i,t)?(i[t]=n,!0):s!==at&&nt(s,t)?(s[t]=n,!0):nt(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(l[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:i,props:l,type:r}},a){let u;return!!(n[a]||e!==at&&a[0]!=="$"&&nt(e,a)||Go(t,a)||nt(l,a)||nt(s,a)||nt(wi,a)||nt(i.config.globalProperties,a)||(u=r.__cssModules)&&u[a])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:nt(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Nr(e){return Me(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let kl=!0;function Q1(e){const t=Lu(e),n=e.proxy,s=e.ctx;kl=!1,t.beforeCreate&&Fr(t.beforeCreate,e,"bc");const{data:i,computed:l,methods:r,watch:a,provide:u,inject:p,created:c,beforeMount:h,mounted:m,beforeUpdate:C,updated:O,activated:E,deactivated:I,beforeDestroy:ee,beforeUnmount:R,destroyed:te,unmounted:ie,render:Q,renderTracked:j,renderTriggered:D,errorCaptured:F,serverPrefetch:G,expose:H,inheritAttrs:q,components:me,directives:Se,filters:et}=t;if(p&&e0(p,s,null),r)for(const Ae in r){const Ee=r[Ae];Re(Ee)&&(s[Ae]=Ee.bind(n))}if(i){const Ae=i.call(n,n);it(Ae)&&(e.data=Rs(Ae))}if(kl=!0,l)for(const Ae in l){const Ee=l[Ae],We=Re(Ee)?Ee.bind(n,n):Re(Ee.get)?Ee.get.bind(n,n):Hn,Ct=!Re(Ee)&&Re(Ee.set)?Ee.set.bind(n):Hn,bt=ce({get:We,set:Ct});Object.defineProperty(s,Ae,{enumerable:!0,configurable:!0,get:()=>bt.value,set:qe=>bt.value=qe})}if(a)for(const Ae in a)Pu(a[Ae],s,n,Ae);if(u){const Ae=Re(u)?u.call(n):u;Reflect.ownKeys(Ae).forEach(Ee=>{E1(Ee,Ae[Ee])})}c&&Fr(c,e,"c");function ke(Ae,Ee){Me(Ee)?Ee.forEach(We=>Ae(We.bind(n))):Ee&&Ae(Ee.bind(n))}if(ke(j1,h),ke(ei,m),ke(B1,C),ke(V1,O),ke(F1,E),ke(z1,I),ke(G1,F),ke(K1,j),ke(q1,D),ke(H1,R),ke(Kn,ie),ke(W1,G),Me(H))if(H.length){const Ae=e.exposed||(e.exposed={});H.forEach(Ee=>{Object.defineProperty(Ae,Ee,{get:()=>n[Ee],set:We=>n[Ee]=We,enumerable:!0})})}else e.exposed||(e.exposed={});Q&&e.render===Hn&&(e.render=Q),q!=null&&(e.inheritAttrs=q),me&&(e.components=me),Se&&(e.directives=Se),G&&Ou(e)}function e0(e,t,n=Hn){Me(e)&&(e=xl(e));for(const s in e){const i=e[s];let l;it(i)?"default"in i?l=no(i.from||s,i.default,!0):l=no(i.from||s):l=no(i),qt(l)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>l.value,set:r=>l.value=r}):t[s]=l}}function Fr(e,t,n){In(Me(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function Pu(e,t,n,s){let i=s.includes(".")?Eu(n,s):()=>n[s];if(yt(e)){const l=t[e];Re(l)&&dt(i,l)}else if(Re(e))dt(i,e.bind(n));else if(it(e))if(Me(e))e.forEach(l=>Pu(l,t,n,s));else{const l=Re(e.handler)?e.handler.bind(n):t[e.handler];Re(l)&&dt(i,l,e)}}function Lu(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:i,optionsCache:l,config:{optionMergeStrategies:r}}=e.appContext,a=l.get(t);let u;return a?u=a:!i.length&&!n&&!s?u=t:(u={},i.length&&i.forEach(p=>co(u,p,r,!0)),co(u,t,r)),it(t)&&l.set(t,u),u}function co(e,t,n,s=!1){const{mixins:i,extends:l}=t;l&&co(e,l,n,!0),i&&i.forEach(r=>co(e,r,n,!0));for(const r in t)if(!(s&&r==="expose")){const a=t0[r]||n&&n[r];e[r]=a?a(e[r],t[r]):t[r]}return e}const t0={data:zr,props:Ur,emits:Ur,methods:pi,computed:pi,beforeCreate:Zt,created:Zt,beforeMount:Zt,mounted:Zt,beforeUpdate:Zt,updated:Zt,beforeDestroy:Zt,beforeUnmount:Zt,destroyed:Zt,unmounted:Zt,activated:Zt,deactivated:Zt,errorCaptured:Zt,serverPrefetch:Zt,components:pi,directives:pi,watch:s0,provide:zr,inject:n0};function zr(e,t){return t?e?function(){return Kt(Re(e)?e.call(this,this):e,Re(t)?t.call(this,this):t)}:t:e}function n0(e,t){return pi(xl(e),xl(t))}function xl(e){if(Me(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Zt(e,t){return e?[...new Set([].concat(e,t))]:t}function pi(e,t){return e?Kt(Object.create(null),e,t):t}function Ur(e,t){return e?Me(e)&&Me(t)?[...new Set([...e,...t])]:Kt(Object.create(null),Nr(e),Nr(t??{})):t}function s0(e,t){if(!e)return t;if(!t)return e;const n=Kt(Object.create(null),e);for(const s in t)n[s]=Zt(e[s],t[s]);return n}function Nu(){return{app:null,config:{isNativeTag:eu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let i0=0;function o0(e,t){return function(s,i=null){Re(s)||(s=Kt({},s)),i!=null&&!it(i)&&(i=null);const l=Nu(),r=new WeakSet,a=[];let u=!1;const p=l.app={_uid:i0++,_component:s,_props:i,_container:null,_context:l,_instance:null,version:N0,get config(){return l.config},set config(c){},use(c,...h){return r.has(c)||(c&&Re(c.install)?(r.add(c),c.install(p,...h)):Re(c)&&(r.add(c),c(p,...h))),p},mixin(c){return l.mixins.includes(c)||l.mixins.push(c),p},component(c,h){return h?(l.components[c]=h,p):l.components[c]},directive(c,h){return h?(l.directives[c]=h,p):l.directives[c]},mount(c,h,m){if(!u){const C=p._ceVNode||st(s,i);return C.appContext=l,m===!0?m="svg":m===!1&&(m=void 0),e(C,c,m),u=!0,p._container=c,c.__vue_app__=p,No(C.component)}},onUnmount(c){a.push(c)},unmount(){u&&(In(a,p._instance,16),e(null,p._container),delete p._container.__vue_app__)},provide(c,h){return l.provides[c]=h,p},runWithContext(c){const h=Xs;Xs=p;try{return c()}finally{Xs=h}}};return p}}let Xs=null;const l0=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${tn(t)}Modifiers`]||e[`${ys(t)}Modifiers`];function r0(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||at;let i=n;const l=t.startsWith("update:"),r=l&&l0(s,t.slice(7));r&&(r.trim&&(i=n.map(c=>yt(c)?c.trim():c)),r.number&&(i=i.map(Eo)));let a,u=s[a=Bo(t)]||s[a=Bo(tn(t))];!u&&l&&(u=s[a=Bo(ys(t))]),u&&In(u,e,6,i);const p=s[a+"Once"];if(p){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,In(p,e,6,i)}}const a0=new WeakMap;function Fu(e,t,n=!1){const s=n?a0:t.emitsCache,i=s.get(e);if(i!==void 0)return i;const l=e.emits;let r={},a=!1;if(!Re(e)){const u=p=>{const c=Fu(p,t,!0);c&&(a=!0,Kt(r,c))};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}return!l&&!a?(it(e)&&s.set(e,null),null):(Me(l)?l.forEach(u=>r[u]=null):Kt(r,l),it(e)&&s.set(e,r),r)}function Po(e,t){return!e||!$o(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),nt(e,t[0].toLowerCase()+t.slice(1))||nt(e,ys(t))||nt(e,t))}function jr(e){const{type:t,vnode:n,proxy:s,withProxy:i,propsOptions:[l],slots:r,attrs:a,emit:u,render:p,renderCache:c,props:h,data:m,setupState:C,ctx:O,inheritAttrs:E}=e,I=ao(e);let ee,R;try{if(n.shapeFlag&4){const ie=i||s,Q=ie;ee=jn(p.call(Q,ie,c,h,C,m,O)),R=a}else{const ie=t;ee=jn(ie.length>1?ie(h,{attrs:a,slots:r,emit:u}):ie(h,null)),R=t.props?a:u0(a)}}catch(ie){Os.length=0,Oo(ie,e,1),ee=st(ls)}let te=ee;if(R&&E!==!1){const ie=Object.keys(R),{shapeFlag:Q}=te;ie.length&&Q&7&&(l&&ie.some(Co)&&(R=c0(R,l)),te=Zs(te,R,!1,!0))}if(n.dirs&&(te=Zs(te,null,!1,!0),te.dirs=te.dirs?te.dirs.concat(n.dirs):n.dirs),n.transition){const ie=Io(te.type)&&Mu(te)||te;tr(ie,n.transition)}return ee=te,ao(I),ee}const u0=e=>{let t;for(const n in e)(n==="class"||n==="style"||$o(n))&&((t||(t={}))[n]=e[n]);return t},c0=(e,t)=>{const n={};for(const s in e)(!Co(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function d0(e,t,n){const{props:s,children:i,component:l}=e,{props:r,children:a,patchFlag:u}=t,p=l.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&u>=0){if(u&1024)return!0;if(u&16)return s?Br(s,r,p):!!r;if(u&8){const c=t.dynamicProps;for(let h=0;h<c.length;h++){const m=c[h];if(zu(r,s,m)&&!Po(p,m))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===r?!1:s?r?Br(s,r,p):!0:!!r;return!1}function Br(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let i=0;i<s.length;i++){const l=s[i];if(zu(t,e,l)&&!Po(n,l))return!0}return!1}function zu(e,t,n){const s=e[n],i=t[n];return n==="style"&&it(s)&&it(i)?!Mn(s,i):s!==i}function p0({vnode:e,parent:t,suspense:n},s){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===e&&(i.suspense.vnode.el=i.el=s,e=i),i===e)(e=t.vnode).el=s,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=s)}const Uu={},ju=()=>Object.create(Uu),Bu=e=>Object.getPrototypeOf(e)===Uu;function f0(e,t,n,s=!1){const i={},l=ju();e.propsDefaults=Object.create(null),Vu(e,t,i,l);for(const r in e.propsOptions[0])r in i||(i[r]=void 0);n?e.props=s?i:m1(i):e.type.props?e.props=i:e.props=l,e.attrs=l}function v0(e,t,n,s){const{props:i,attrs:l,vnode:{patchFlag:r}}=e,a=tt(i),[u]=e.propsOptions;let p=!1;if((s||r>0)&&!(r&16)){if(r&8){const c=e.vnode.dynamicProps;for(let h=0;h<c.length;h++){let m=c[h];if(Po(e.emitsOptions,m))continue;const C=t[m];if(u)if(nt(l,m))C!==l[m]&&(l[m]=C,p=!0);else{const O=tn(m);i[O]=Sl(u,a,O,C,e,!1)}else C!==l[m]&&(l[m]=C,p=!0)}}}else{Vu(e,t,i,l)&&(p=!0);let c;for(const h in a)(!t||!nt(t,h)&&((c=ys(h))===h||!nt(t,c)))&&(u?n&&(n[h]!==void 0||n[c]!==void 0)&&(i[h]=Sl(u,a,h,void 0,e,!0)):delete i[h]);if(l!==a)for(const h in l)(!t||!nt(t,h))&&(delete l[h],p=!0)}p&&Qn(e.attrs,"set","")}function Vu(e,t,n,s){const[i,l]=e.propsOptions;let r=!1,a;if(t)for(let u in t){if(mi(u))continue;const p=t[u];let c;i&&nt(i,c=tn(u))?!l||!l.includes(c)?n[c]=p:(a||(a={}))[c]=p:Po(e.emitsOptions,u)||(!(u in s)||p!==s[u])&&(s[u]=p,r=!0)}if(l){const u=tt(n),p=a||at;for(let c=0;c<l.length;c++){const h=l[c];n[h]=Sl(i,u,h,p[h],e,!nt(p,h))}}return r}function Sl(e,t,n,s,i,l){const r=e[n];if(r!=null){const a=nt(r,"default");if(a&&s===void 0){const u=r.default;if(r.type!==Function&&!r.skipFactory&&Re(u)){const{propsDefaults:p}=i;if(n in p)s=p[n];else{const c=Ii(i);s=p[n]=u.call(null,t),c()}}else s=u;i.ce&&i.ce._setProp(n,s)}r[0]&&(l&&!a?s=!1:r[1]&&(s===""||s===ys(n))&&(s=!0))}return s}const h0=new WeakMap;function Hu(e,t,n=!1){const s=n?h0:t.propsCache,i=s.get(e);if(i)return i;const l=e.props,r={},a=[];let u=!1;if(!Re(e)){const c=h=>{u=!0;const[m,C]=Hu(h,t,!0);Kt(r,m),C&&a.push(...C)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!l&&!u)return it(e)&&s.set(e,Ks),Ks;if(Me(l))for(let c=0;c<l.length;c++){const h=tn(l[c]);Vr(h)&&(r[h]=at)}else if(l)for(const c in l){const h=tn(c);if(Vr(h)){const m=l[c],C=r[h]=Me(m)||Re(m)?{type:m}:Kt({},m),O=C.type;let E=!1,I=!0;if(Me(O))for(let ee=0;ee<O.length;++ee){const R=O[ee],te=Re(R)&&R.name;if(te==="Boolean"){E=!0;break}else te==="String"&&(I=!1)}else E=Re(O)&&O.name==="Boolean";C[0]=E,C[1]=I,(E||nt(C,"default"))&&a.push(h)}}const p=[r,a];return it(e)&&s.set(e,p),p}function Vr(e){return e[0]!=="$"&&!mi(e)}const sr=e=>e==="_"||e==="_ctx"||e==="$stable",ir=e=>Me(e)?e.map(jn):[jn(e)],m0=(e,t,n)=>{if(t._n)return t;const s=A1((...i)=>ir(t(...i)),n);return s._c=!1,s},Wu=(e,t,n)=>{const s=e._ctx;for(const i in e){if(sr(i))continue;const l=e[i];if(Re(l))t[i]=m0(i,l,s);else if(l!=null){const r=ir(l);t[i]=()=>r}}},qu=(e,t)=>{const n=ir(t);e.slots.default=()=>n},Ku=(e,t,n)=>{for(const s in t)(n||!sr(s))&&(e[s]=t[s])},g0=(e,t,n)=>{const s=e.slots=ju();if(e.vnode.shapeFlag&32){const i=t._;i?(Ku(s,t,n),n&&iu(s,"_",i,!0)):Wu(t,s)}else t&&qu(e,t)},_0=(e,t,n)=>{const{vnode:s,slots:i}=e;let l=!0,r=at;if(s.shapeFlag&32){const a=t._;a?n&&a===1?l=!1:Ku(i,t,n):(l=!t.$stable,Wu(t,i)),r=t}else t&&(qu(e,t),r={default:1});if(l)for(const a in i)!sr(a)&&r[a]==null&&delete i[a]},Qt=x0;function y0(e){return b0(e)}function b0(e,t){const n=Do();n.__VUE__=!0;const{insert:s,remove:i,patchProp:l,createElement:r,createText:a,createComment:u,setText:p,setElementText:c,parentNode:h,nextSibling:m,setScopeId:C=Hn,insertStaticContent:O}=e,E=(x,y,P,T=null,w=null,U=null,W=void 0,J=null,N=!!y.dynamicChildren)=>{if(x===y)return;x&&!ii(x,y)&&(T=wt(x),qe(x,w,U,!0),x=null),y.patchFlag===-2&&(N=!1,y.dynamicChildren=null);const{type:z,ref:ae,shapeFlag:oe}=y;switch(z){case Lo:I(x,y,P,T);break;case ls:ee(x,y,P,T);break;case so:x==null&&R(y,P,T,W);break;case X:me(x,y,P,T,w,U,W,J,N);break;default:oe&1?Q(x,y,P,T,w,U,W,J,N):oe&6?Se(x,y,P,T,w,U,W,J,N):(oe&64||oe&128)&&z.process(x,y,P,T,w,U,W,J,N,ge)}ae!=null&&w?yi(ae,x&&x.ref,U,y||x,!y):ae==null&&x&&x.ref!=null&&yi(x.ref,null,U,x,!0)},I=(x,y,P,T)=>{if(x==null)s(y.el=a(y.children),P,T);else{const w=y.el=x.el;y.children!==x.children&&p(w,y.children)}},ee=(x,y,P,T)=>{x==null?s(y.el=u(y.children||""),P,T):y.el=x.el},R=(x,y,P,T)=>{[x.el,x.anchor]=O(x.children,y,P,T,x.el,x.anchor)},te=({el:x,anchor:y},P,T)=>{let w;for(;x&&x!==y;)w=m(x),s(x,P,T),x=w;s(y,P,T)},ie=({el:x,anchor:y})=>{let P;for(;x&&x!==y;)P=m(x),i(x),x=P;i(y)},Q=(x,y,P,T,w,U,W,J,N)=>{if(y.type==="svg"?W="svg":y.type==="math"&&(W="mathml"),x==null)j(y,P,T,w,U,W,J,N);else{const z=x.el&&x.el._isVueCE?x.el:null;try{z&&z._beginPatch(),G(x,y,w,U,W,J,N)}finally{z&&z._endPatch()}}},j=(x,y,P,T,w,U,W,J)=>{let N,z;const{props:ae,shapeFlag:oe,transition:ve,dirs:fe}=x;if(N=x.el=r(x.type,U,ae&&ae.is,ae),oe&8?c(N,x.children):oe&16&&F(x.children,N,null,T,w,Xo(x,U),W,J),fe&&Ss(x,null,T,"created"),D(N,x,x.scopeId,W,T),ae){for(const Ie in ae)Ie!=="value"&&!mi(Ie)&&l(N,Ie,null,ae[Ie],U,T);"value"in ae&&l(N,"value",null,ae.value,U),(z=ae.onVnodeBeforeMount)&&Nn(z,T,x)}fe&&Ss(x,null,T,"beforeMount");const De=w0(w,ve);De&&ve.beforeEnter(N),s(N,y,P),((z=ae&&ae.onVnodeMounted)||De||fe)&&Qt(()=>{try{z&&Nn(z,T,x),De&&ve.enter(N),fe&&Ss(x,null,T,"mounted")}finally{}},w)},D=(x,y,P,T,w)=>{if(P&&C(x,P),T)for(let U=0;U<T.length;U++)C(x,T[U]);if(w){let U=w.subTree;if(y===U||Yu(U.type)&&(U.ssContent===y||U.ssFallback===y)){const W=w.vnode;D(x,W,W.scopeId,W.slotScopeIds,w.parent)}}},F=(x,y,P,T,w,U,W,J,N=0)=>{for(let z=N;z<x.length;z++){const ae=x[z]=J?Zn(x[z]):jn(x[z]);E(null,ae,y,P,T,w,U,W,J)}},G=(x,y,P,T,w,U,W)=>{const J=y.el=x.el;let{patchFlag:N,dynamicChildren:z,dirs:ae}=y;N|=x.patchFlag&16;const oe=x.props||at,ve=y.props||at;let fe;if(P&&$s(P,!1),(fe=ve.onVnodeBeforeUpdate)&&Nn(fe,P,y,x),ae&&Ss(y,x,P,"beforeUpdate"),P&&$s(P,!0),z&&(!x.dynamicChildren||x.dynamicChildren.length!==z.length)&&(N=0,W=!1,z=null),(oe.innerHTML&&ve.innerHTML==null||oe.textContent&&ve.textContent==null)&&c(J,""),z?H(x.dynamicChildren,z,J,P,T,Xo(y,w),U):W||Ee(x,y,J,null,P,T,Xo(y,w),U,!1),N>0){if(N&16)q(J,oe,ve,P,w);else if(N&2&&oe.class!==ve.class&&l(J,"class",null,ve.class,w),N&4&&l(J,"style",oe.style,ve.style,w),N&8){const De=y.dynamicProps;for(let Ie=0;Ie<De.length;Ie++){const Ne=De[Ie],xe=oe[Ne],je=ve[Ne];(je!==xe||Ne==="value")&&l(J,Ne,xe,je,w,P)}}N&1&&x.children!==y.children&&c(J,y.children)}else!W&&z==null&&q(J,oe,ve,P,w);((fe=ve.onVnodeUpdated)||ae)&&Qt(()=>{fe&&Nn(fe,P,y,x),ae&&Ss(y,x,P,"updated")},T)},H=(x,y,P,T,w,U,W)=>{for(let J=0;J<y.length;J++){const N=x[J],z=y[J],ae=N.el&&(N.type===X||!ii(N,z)||N.shapeFlag&198)?h(N.el):P;E(N,z,ae,null,T,w,U,W,!0)}},q=(x,y,P,T,w)=>{if(y!==P){if(y!==at)for(const U in y)!mi(U)&&!(U in P)&&l(x,U,y[U],null,w,T);for(const U in P){if(mi(U))continue;const W=P[U],J=y[U];W!==J&&U!=="value"&&l(x,U,J,W,w,T)}"value"in P&&l(x,"value",y.value,P.value,w)}},me=(x,y,P,T,w,U,W,J,N)=>{const z=y.el=x?x.el:a(""),ae=y.anchor=x?x.anchor:a("");let{patchFlag:oe,dynamicChildren:ve,slotScopeIds:fe}=y;fe&&(J=J?J.concat(fe):fe),x==null?(s(z,P,T),s(ae,P,T),F(y.children||[],P,ae,w,U,W,J,N)):oe>0&&oe&64&&ve&&x.dynamicChildren&&x.dynamicChildren.length===ve.length?(H(x.dynamicChildren,ve,P,w,U,W,J),(y.key!=null||w&&y===w.subTree)&&or(x,y,!0)):Ee(x,y,P,ae,w,U,W,J,N)},Se=(x,y,P,T,w,U,W,J,N)=>{y.slotScopeIds=J,x==null?y.shapeFlag&512?w.ctx.activate(y,P,T,W,N):et(y,P,T,w,U,W,N):Je(x,y,N)},et=(x,y,P,T,w,U,W)=>{const J=x.component=E0(x,T,w);if(nr(x)&&(J.ctx.renderer=ge),M0(J,!1,W),J.asyncDep){if(w&&w.registerDep(J,ke,W),!x.el){const N=J.subTree=st(ls);ee(null,N,y,P),x.placeholder=N.el}}else ke(J,x,y,P,w,U,W)},Je=(x,y,P)=>{const T=y.component=x.component;if(d0(x,y,P))if(T.asyncDep&&!T.asyncResolved){Ae(T,y,P);return}else T.next=y,T.update();else y.el=x.el,T.vnode=y},ke=(x,y,P,T,w,U,W)=>{const J=()=>{if(x.isMounted){let{next:oe,bu:ve,u:fe,parent:De,vnode:Ie}=x;{const xt=Gu(x);if(xt){oe&&(oe.el=Ie.el,Ae(x,oe,W)),xt.asyncDep.then(()=>{Qt(()=>{x.isUnmounted||z()},w)});return}}let Ne=oe,xe;$s(x,!1),oe?(oe.el=Ie.el,Ae(x,oe,W)):oe=Ie,ve&&to(ve),(xe=oe.props&&oe.props.onVnodeBeforeUpdate)&&Nn(xe,De,oe,Ie),$s(x,!0);const je=jr(x),kt=x.subTree;x.subTree=je,E(kt,je,h(kt.el),wt(kt),x,w,U),oe.el=je.el,Ne===null&&p0(x,je.el),fe&&Qt(fe,w),(xe=oe.props&&oe.props.onVnodeUpdated)&&Qt(()=>Nn(xe,De,oe,Ie),w)}else{let oe;const{el:ve,props:fe}=y,{bm:De,m:Ie,parent:Ne,root:xe,type:je}=x,kt=bi(y);$s(x,!1),De&&to(De),!kt&&(oe=fe&&fe.onVnodeBeforeMount)&&Nn(oe,Ne,y),$s(x,!0);{xe.ce&&xe.ce._hasShadowRoot()&&xe.ce._injectChildStyle(je,x.parent?x.parent.type:void 0);const xt=x.subTree=jr(x);E(null,xt,P,T,x,w,U),y.el=xt.el}if(Ie&&Qt(Ie,w),!kt&&(oe=fe&&fe.onVnodeMounted)){const xt=y;Qt(()=>Nn(oe,Ne,xt),w)}(y.shapeFlag&256||Ne&&bi(Ne.vnode)&&Ne.vnode.shapeFlag&256)&&x.a&&Qt(x.a,w),x.isMounted=!0,y=P=T=null}};x.scope.on();const N=x.effect=new au(J);x.scope.off();const z=x.update=N.run.bind(N),ae=x.job=N.runIfDirty.bind(N);ae.i=x,ae.id=x.uid,N.scheduler=()=>er(ae),$s(x,!0),z()},Ae=(x,y,P)=>{y.component=x;const T=x.vnode.props;x.vnode=y,x.next=null,v0(x,y.props,T,P),_0(x,y.children,P),ss(),Mr(x),is()},Ee=(x,y,P,T,w,U,W,J,N=!1)=>{const z=x&&x.children,ae=x?x.shapeFlag:0,oe=y.children,{patchFlag:ve,shapeFlag:fe}=y;if(ve>0){if(ve&128){Ct(z,oe,P,T,w,U,W,J,N);return}else if(ve&256){We(z,oe,P,T,w,U,W,J,N);return}}fe&8?(ae&16&&mt(z,w,U),oe!==z&&c(P,oe)):ae&16?fe&16?Ct(z,oe,P,T,w,U,W,J,N):mt(z,w,U,!0):(ae&8&&c(P,""),fe&16&&F(oe,P,T,w,U,W,J,N))},We=(x,y,P,T,w,U,W,J,N)=>{x=x||Ks,y=y||Ks;const z=x.length,ae=y.length,oe=Math.min(z,ae);let ve;for(ve=0;ve<oe;ve++){const fe=y[ve]=N?Zn(y[ve]):jn(y[ve]);E(x[ve],fe,P,null,w,U,W,J,N)}z>ae?mt(x,w,U,!0,!1,oe):F(y,P,T,w,U,W,J,N,oe)},Ct=(x,y,P,T,w,U,W,J,N)=>{let z=0;const ae=y.length;let oe=x.length-1,ve=ae-1;for(;z<=oe&&z<=ve;){const fe=x[z],De=y[z]=N?Zn(y[z]):jn(y[z]);if(ii(fe,De))E(fe,De,P,null,w,U,W,J,N);else break;z++}for(;z<=oe&&z<=ve;){const fe=x[oe],De=y[ve]=N?Zn(y[ve]):jn(y[ve]);if(ii(fe,De))E(fe,De,P,null,w,U,W,J,N);else break;oe--,ve--}if(z>oe){if(z<=ve){const fe=ve+1,De=fe<ae?y[fe].el:T;for(;z<=ve;)E(null,y[z]=N?Zn(y[z]):jn(y[z]),P,De,w,U,W,J,N),z++}}else if(z>ve)for(;z<=oe;)qe(x[z],w,U,!0),z++;else{const fe=z,De=z,Ie=new Map;for(z=De;z<=ve;z++){const St=y[z]=N?Zn(y[z]):jn(y[z]);St.key!=null&&Ie.set(St.key,z)}let Ne,xe=0;const je=ve-De+1;let kt=!1,xt=0;const Lt=new Array(je);for(z=0;z<je;z++)Lt[z]=0;for(z=fe;z<=oe;z++){const St=x[z];if(xe>=je){qe(St,w,U,!0);continue}let pt;if(St.key!=null)pt=Ie.get(St.key);else for(Ne=De;Ne<=ve;Ne++)if(Lt[Ne-De]===0&&ii(St,y[Ne])){pt=Ne;break}pt===void 0?qe(St,w,U,!0):(Lt[pt-De]=z+1,pt>=xt?xt=pt:kt=!0,E(St,y[pt],P,null,w,U,W,J,N),xe++)}const Nt=kt?k0(Lt):Ks;for(Ne=Nt.length-1,z=je-1;z>=0;z--){const St=De+z,pt=y[St],_n=y[St+1],Sn=St+1<ae?_n.el||Xu(_n):T;Lt[z]===0?E(null,pt,P,Sn,w,U,W,J,N):kt&&(Ne<0||z!==Nt[Ne]?bt(pt,P,Sn,2):Ne--)}}},bt=(x,y,P,T,w=null)=>{const{el:U,type:W,transition:J,children:N,shapeFlag:z}=x;if(z&6){bt(x.component.subTree,y,P,T);return}if(z&128){x.suspense.move(y,P,T);return}if(z&64){W.move(x,y,P,ge);return}if(W===X){s(U,y,P);for(let oe=0;oe<N.length;oe++)bt(N[oe],y,P,T);s(x.anchor,y,P);return}if(W===so){te(x,y,P);return}if(T!==2&&z&1&&J)if(T===0)J.persisted&&!U[Ko]?s(U,y,P):(J.beforeEnter(U),s(U,y,P),Qt(()=>J.enter(U),w));else{const{leave:oe,delayLeave:ve,afterLeave:fe}=J,De=()=>{x.ctx.isUnmounted?i(U):s(U,y,P)},Ie=()=>{const Ne=U._isLeaving||!!U[Ko];U._isLeaving&&U[Ko](!0),J.persisted&&!Ne?De():oe(U,()=>{De(),fe&&fe()})};ve?ve(U,De,Ie):Ie()}else s(U,y,P)},qe=(x,y,P,T=!1,w=!1)=>{const{type:U,props:W,ref:J,children:N,dynamicChildren:z,shapeFlag:ae,patchFlag:oe,dirs:ve,cacheIndex:fe,memo:De}=x;if(oe===-2&&(w=!1),J!=null&&(ss(),yi(J,null,P,x,!0),is()),fe!=null&&(y.renderCache[fe]=void 0),ae&256){y.ctx.deactivate(x);return}const Ie=ae&1&&ve,Ne=!bi(x);let xe;if(Ne&&(xe=W&&W.onVnodeBeforeUnmount)&&Nn(xe,y,x),ae&6)Mt(x.component,P,T);else{if(ae&128){x.suspense.unmount(P,T);return}Ie&&Ss(x,null,y,"beforeUnmount"),ae&64?x.type.remove(x,y,P,ge,T):z&&!z.hasOnce&&(U!==X||oe>0&&oe&64)?mt(z,y,P,!1,!0):(U===X&&oe&384||!w&&ae&16)&&mt(N,y,P),T&&Tt(x)}const je=De!=null&&fe==null;(Ne&&(xe=W&&W.onVnodeUnmounted)||Ie||je)&&Qt(()=>{xe&&Nn(xe,y,x),Ie&&Ss(x,null,y,"unmounted"),je&&(x.el=null)},P)},Tt=x=>{const{type:y,el:P,anchor:T,transition:w}=x;if(y===X){ze(P,T);return}if(y===so){ie(x);return}const U=()=>{i(P),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(x.shapeFlag&1&&w&&!w.persisted){const{leave:W,delayLeave:J}=w,N=()=>W(P,U);J?J(x.el,U,N):N()}else U()},ze=(x,y)=>{let P;for(;x!==y;)P=m(x),i(x),x=P;i(y)},Mt=(x,y,P)=>{const{bum:T,scope:w,job:U,subTree:W,um:J,m:N,a:z}=x;Hr(N),Hr(z),T&&to(T),w.stop(),U&&(U.flags|=8,qe(W,x,y,P)),J&&Qt(J,y),Qt(()=>{x.isUnmounted=!0},y)},mt=(x,y,P,T=!1,w=!1,U=0)=>{for(let W=U;W<x.length;W++)qe(x[W],y,P,T,w)},wt=x=>{if(x.shapeFlag&6)return wt(x.component.subTree);if(x.shapeFlag&128)return x.suspense.next();const y=m(x.anchor||x.el),P=y&&y[Du];return P?m(P):y};let Z=!1;const B=(x,y,P)=>{let T;x==null?y._vnode&&(qe(y._vnode,null,null,!0),T=y._vnode.component):E(y._vnode||null,x,y,null,null,null,P),y._vnode=x,Z||(Z=!0,Mr(T),$u(),Z=!1)},ge={p:E,um:qe,m:bt,r:Tt,mt:et,mc:F,pc:Ee,pbc:H,n:wt,o:e};return{render:B,hydrate:void 0,createApp:o0(B)}}function Xo({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function $s({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function w0(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function or(e,t,n=!1){const s=e.children,i=t.children;if(Me(s)&&Me(i))for(let l=0;l<s.length;l++){const r=s[l];let a=i[l];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[l]=Zn(i[l]),a.el=r.el),!n&&a.patchFlag!==-2&&or(r,a)),a.type===Lo&&(a.patchFlag===-1&&(a=i[l]=Zn(a)),a.el=r.el),a.type===ls&&!a.el&&(a.el=r.el)}}function k0(e){const t=e.slice(),n=[0];let s,i,l,r,a;const u=e.length;for(s=0;s<u;s++){const p=e[s];if(p!==0){if(i=n[n.length-1],e[i]<p){t[s]=i,n.push(s);continue}for(l=0,r=n.length-1;l<r;)a=l+r>>1,e[n[a]]<p?l=a+1:r=a;p<e[n[l]]&&(l>0&&(t[s]=n[l-1]),n[l]=s)}}for(l=n.length,r=n[l-1];l-- >0;)n[l]=r,r=t[r];return n}function Gu(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Gu(t)}function Hr(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Xu(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?Xu(t.subTree):null}const Yu=e=>e.__isSuspense;function x0(e,t){t&&t.pendingBranch?Me(e)?t.effects.push(...e):t.effects.push(e):T1(e)}const X=Symbol.for("v-fgt"),Lo=Symbol.for("v-txt"),ls=Symbol.for("v-cmt"),so=Symbol.for("v-stc"),Os=[];let mn=null;function d(e=!1){Os.push(mn=e?null:[])}function Ju(){Os.pop(),mn=Os[Os.length-1]||null}let Ti=1;function po(e,t=!1){Ti+=e,e<0&&mn&&t&&(mn.hasOnce=!0)}function Zu(e){return e.dynamicChildren=Ti>0?mn||Ks:null,Ju(),Ti>0&&mn&&mn.push(e),e}function f(e,t,n,s,i,l){return Zu(o(e,t,n,s,i,l,!0))}function En(e,t,n,s,i){return Zu(st(e,t,n,s,i,!0))}function fo(e){return e?e.__v_isVNode===!0:!1}function ii(e,t){return e.type===t.type&&e.key===t.key}const Qu=({key:e})=>e??null,io=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?yt(e)||qt(e)||Re(e)?{i:hn,r:e,k:t,f:!!n}:e:null);function o(e,t=null,n=null,s=0,i=null,l=e===X?0:1,r=!1,a=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Qu(t),ref:t&&io(t),scopeId:Tu,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:hn};return a?(ho(u,n),l&128&&e.normalize(u)):n&&(u.shapeFlag|=yt(n)?8:16),Ti>0&&!r&&mn&&(u.patchFlag>0||l&6)&&u.patchFlag!==32&&mn.push(u),u}const st=S0;function S0(e,t=null,n=null,s=0,i=null,l=!1){if((!e||e===Ru)&&(e=ls),fo(e)){const a=Zs(e,t,!0);return n&&ho(a,n),Ti>0&&!l&&mn&&(a.shapeFlag&6?mn[mn.indexOf(e)]=a:mn.push(a)),a.patchFlag=-2,a}if(L0(e)&&(e=e.__vccOpts),t){t=$0(t);let{class:a,style:u}=t;a&&!yt(a)&&(t.class=we(a)),it(u)&&(Ql(u)&&!Me(u)&&(u=Kt({},u)),t.style=Rt(u))}const r=yt(e)?1:Yu(e)?128:Io(e)?64:it(e)?4:Re(e)?2:0;return o(e,t,n,s,i,r,l,!0)}function $0(e){return e?Ql(e)||Bu(e)?Kt({},e):e:null}function Zs(e,t,n=!1,s=!1){const{props:i,ref:l,patchFlag:r,children:a,transition:u}=e,p=t?C0(i||{},t):i,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:p,key:p&&Qu(p),ref:t&&t.ref?n&&l?Me(l)?l.concat(io(t)):[l,io(t)]:io(t):l,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==X?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:u,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Zs(e.ssContent),ssFallback:e.ssFallback&&Zs(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return u&&s&&tr(c,u.clone(c)),c}function Te(e=" ",t=0){return st(Lo,null,e,t)}function vo(e,t){const n=st(so,null,e);return n.staticCount=t,n}function V(e="",t=!1){return t?(d(),En(ls,null,e)):st(ls,null,e)}function jn(e){return e==null||typeof e=="boolean"?st(ls):Me(e)?st(X,null,e.slice()):fo(e)?Zn(e):st(Lo,null,String(e))}function Zn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Zs(e)}function ho(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(Me(t))n=16;else if(typeof t=="object")if(s&65){const i=t.default;i&&(i._c&&(i._d=!1),ho(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!Bu(t)?t._ctx=hn:i===3&&hn&&(hn.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else if(Re(t)){if(s&65){ho(e,{default:t});return}t={default:t,_ctx:hn},n=32}else t=String(t),s&64?(n=16,t=[Te(t)]):n=8;e.children=t,e.shapeFlag|=n}function C0(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const i in s)if(i==="class")t.class!==s.class&&(t.class=we([t.class,s.class]));else if(i==="style")t.style=Rt([t.style,s.style]);else if($o(i)){const l=t[i],r=s[i];r&&l!==r&&!(Me(l)&&l.includes(r))?t[i]=l?[].concat(l,r):r:r==null&&l==null&&!Co(i)&&(t[i]=r)}else i!==""&&(t[i]=s[i])}return t}function Nn(e,t,n,s=null){In(e,t,7,[n,s])}const T0=Nu();let A0=0;function E0(e,t,n){const s=e.type,i=(t?t.appContext:e.appContext)||T0,l={uid:A0++,vnode:e,type:s,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Jc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Hu(s,i),emitsOptions:Fu(s,i),emit:null,emitted:null,propsDefaults:at,inheritAttrs:s.inheritAttrs,ctx:at,data:at,props:at,attrs:at,slots:at,refs:at,setupState:at,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return l.ctx={_:l},l.root=t?t.root:l,l.emit=r0.bind(null,l),e.ce&&e.ce(l),l}let Wt=null;const D0=()=>Wt||hn;let mo,Ai;{const e=Do(),t=(n,s)=>{let i;return(i=e[n])||(i=e[n]=[]),i.push(s),l=>{i.length>1?i.forEach(r=>r(l)):i[0](l)}};mo=t("__VUE_INSTANCE_SETTERS__",n=>Wt=n),Ai=t("__VUE_SSR_SETTERS__",n=>Ei=n)}const Ii=e=>{const t=Wt;return mo(e),e.scope.on(),()=>{e.scope.off(),mo(t)}},Wr=()=>{Wt&&Wt.scope.off(),mo(null)};function ec(e){return e.vnode.shapeFlag&4}let Ei=!1;function M0(e,t=!1,n=!1){t&&Ai(t);const{props:s,children:i}=e.vnode,l=ec(e);f0(e,s,l,t),g0(e,i,n||t);const r=l?O0(e,t):void 0;return t&&Ai(!1),r}function O0(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Z1);const{setup:s}=n;if(s){ss();const i=e.setupContext=s.length>1?R0(e):null,l=Ii(e),r=Oi(s,e,0,[e.props,i]),a=tu(r);if(is(),l(),(a||e.sp)&&!bi(e)&&Ou(e),a){if(r.then(Wr,Wr),t)return r.then(u=>{Ai(!0);try{qr(e,u,t)}finally{Ai(!1)}}).catch(u=>{Oo(u,e,0)});e.asyncDep=r}else qr(e,r)}else tc(e)}function qr(e,t,n){Re(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:it(t)&&(e.setupState=ku(t)),tc(e)}function tc(e,t,n){const s=e.type;e.render||(e.render=s.render||Hn);{const i=Ii(e);ss();try{Q1(e)}finally{is(),i()}}}const I0={get(e,t){return Ht(e,"get",""),e[t]}};function R0(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,I0),slots:e.slots,emit:e.emit,expose:t}}function No(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(ku(g1(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in wi)return wi[n](e)},has(t,n){return n in t||n in wi}})):e.proxy}function P0(e,t=!0){return Re(e)?e.displayName||e.name:e.name||t&&e.__name}function L0(e){return Re(e)&&"__vccOpts"in e}const ce=(e,t)=>k1(e,t,Ei);function $l(e,t,n){try{po(-1);const s=arguments.length;return s===2?it(t)&&!Me(t)?fo(t)?st(e,null,[t]):st(e,t):st(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&fo(n)&&(n=[n]),st(e,t,n))}finally{po(1)}}const N0="3.5.42";/**
* @vue/runtime-dom v3.5.42
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Cl;const Kr=typeof window<"u"&&window.trustedTypes;if(Kr)try{Cl=Kr.createPolicy("vue",{createHTML:e=>e})}catch{}const nc=Cl?e=>Cl.createHTML(e):e=>e,F0="http://www.w3.org/2000/svg",z0="http://www.w3.org/1998/Math/MathML",Jn=typeof document<"u"?document:null,Gr=Jn&&Jn.createElement("template"),U0={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const i=t==="svg"?Jn.createElementNS(F0,e):t==="mathml"?Jn.createElementNS(z0,e):n?Jn.createElement(e,{is:n}):Jn.createElement(e);return e==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:e=>Jn.createTextNode(e),createComment:e=>Jn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Jn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,i,l){const r=n?n.previousSibling:t.lastChild;if(i&&(i===l||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===l||!(i=i.nextSibling)););else{Gr.innerHTML=nc(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const a=Gr.content;if(s==="svg"||s==="mathml"){const u=a.firstChild;for(;u.firstChild;)a.appendChild(u.firstChild);a.removeChild(u)}t.insertBefore(a,n)}return[r?r.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},j0=Symbol("_vtc");function B0(e,t,n){const s=e[j0];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Xr=Symbol("_vod"),V0=Symbol("_vsh"),H0=Symbol(""),W0=/(?:^|;)\s*display\s*:/;function q0(e,t,n){const s=e.style,i=yt(n);let l=!1;if(n&&!i){if(t)if(yt(t))for(const r of t.split(";")){const a=r.slice(0,r.indexOf(":")).trim();n[a]==null&&fi(s,a,"")}else for(const r in t)n[r]==null&&fi(s,r,"");for(const r in n){r==="display"&&(l=!0);const a=n[r];a!=null?G0(e,r,!yt(t)&&t?t[r]:void 0,a)||fi(s,r,a):fi(s,r,"")}}else if(i){if(t!==n){const r=s[H0];r&&(n+=";"+r),s.cssText=n,l=W0.test(n)}}else t&&e.removeAttribute("style");Xr in e&&(e[Xr]=l?s.display:"",e[V0]&&(s.display="none"))}const qi=/\s*!important$/;function fi(e,t,n){if(Me(n))n.forEach(s=>fi(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))qi.test(n)?e.setProperty(t,n.replace(qi,""),"important"):e.setProperty(t,n);else{const s=K0(e,t);qi.test(n)?e.setProperty(ys(s),n.replace(qi,""),"important"):e[s]=n}}const Yr=["Webkit","Moz","ms"],Yo={};function K0(e,t){const n=Yo[t];if(n)return n;let s=tn(t);if(s!=="filter"&&s in e)return Yo[t]=s;s=Ao(s);for(let i=0;i<Yr.length;i++){const l=Yr[i]+s;if(l in e)return Yo[t]=l}return t}function G0(e,t,n,s){return e.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&yt(s)&&n===s}const Jr="http://www.w3.org/1999/xlink";function Zr(e,t,n,s,i,l=Xc(t)){s&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Jr,t.slice(6,t.length)):e.setAttributeNS(Jr,t,n):n==null||l&&!ou(n)?e.removeAttribute(t):e.setAttribute(t,l?"":qn(n)?String(n):n)}function Qr(e,t,n,s,i){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?nc(n):n);return}const l=e.tagName;if(t==="value"&&l!=="PROGRESS"&&!l.includes("-")){const a=l==="OPTION"?e.getAttribute("value")||"":e.value,u=n==null?e.type==="checkbox"?"on":"":String(n);(a!==u||!("_value"in e))&&(e.value=u),n==null&&e.removeAttribute(t),e._value=n;return}let r=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=ou(n):n==null&&a==="string"?(n="",r=!0):a==="number"&&(n=0,r=!0)}try{e[t]=n}catch{}r&&e.removeAttribute(i||t)}function ts(e,t,n,s){e.addEventListener(t,n,s)}function X0(e,t,n,s){e.removeEventListener(t,n,s)}const ea=Symbol("_vei");function Y0(e,t,n,s,i=null){const l=e[ea]||(e[ea]={}),r=l[t];if(s&&r)r.value=s;else{const[a,u]=Q0(t);if(s){const p=l[t]=nd(s,i);ts(e,a,p,u)}else r&&(X0(e,a,r,u),l[t]=void 0)}}const J0=/(Once|Passive|Capture)$/,Z0=/^on:?(?:Once|Passive|Capture)$/;function Q0(e){let t,n;for(;(n=e.match(J0))&&!Z0.test(e);)t||(t={}),e=e.slice(0,e.length-n[1].length),t[n[1].toLowerCase()]=!0;return[e[2]===":"?e.slice(3):ys(e.slice(2)),t]}let Jo=0;const ed=Promise.resolve(),td=()=>Jo||(ed.then(()=>Jo=0),Jo=Date.now());function nd(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;const i=n.value;if(Me(i)){const l=s.stopImmediatePropagation;s.stopImmediatePropagation=()=>{l.call(s),s._stopped=!0};const r=i.slice(),a=[s];for(let u=0;u<r.length&&!s._stopped;u++){const p=r[u];p&&In(p,t,5,a)}}else In(i,t,5,[s])};return n.value=e,n.attached=td(),n}const ta=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,sd=(e,t,n,s,i,l)=>{const r=i==="svg";t==="class"?B0(e,s,r):t==="style"?q0(e,n,s):$o(t)?Co(t)||Y0(e,t,n,s,l):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):id(e,t,s,r))?(Qr(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Zr(e,t,s,r,l,t!=="value")):e._isVueCE&&(od(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!yt(s)))?Qr(e,tn(t),s,l,t):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),Zr(e,t,s,r))};function id(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&ta(t)&&Re(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return ta(t)&&yt(n)?!1:t in e}function od(e,t){const n=e._def.props;if(!n)return!1;const s=tn(t);return Array.isArray(n)?n.some(i=>tn(i)===s):Object.keys(n).some(i=>tn(i)===s)}const _s=e=>{const t=e.props["onUpdate:modelValue"]||!1;return Me(t)?n=>to(t,n):t};function ld(e){e.target.composing=!0}function na(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const gn=Symbol("_assign"),Ki=Symbol("_initialValue");function Zo(e,t,n){return t&&(e=e.trim()),n&&(e=Eo(e)),e}const _t={created(e,{modifiers:{lazy:t,trim:n,number:s}},i){e.parentNode&&(e.type==="text"?e[Ki]=e.defaultValue.replace(/[\r\n]/g,""):e.type==="textarea"&&(e[Ki]=e.defaultValue.replace(/\r\n?/g,`
`))),e[gn]=_s(i);const l=s||i.props&&i.props.type==="number";ts(e,t?"change":"input",r=>{r.target.composing||e[gn](Zo(e.value,n,l))}),(n||l)&&ts(e,"change",()=>{e.value=Zo(e.value,n,l)}),t||(ts(e,"compositionstart",ld),ts(e,"compositionend",na),ts(e,"change",na))},mounted(e,{value:t,modifiers:{trim:n,number:s}}){const i=t??"",l=e[Ki];delete e[Ki],l!==void 0&&(e.type==="text"||e.type==="textarea")&&e.value!==l?e[gn](Zo(e.value,n,s)):e.value=i},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:s,trim:i,number:l}},r){if(e[gn]=_s(r),e.composing)return;const a=(l||e.type==="number")&&!/^0\d/.test(e.value)?Eo(e.value):e.value,u=t??"";if(a===u)return;const p=e.getRootNode();(p instanceof Document||p instanceof ShadowRoot)&&p.activeElement===e&&e.type!=="range"&&(s&&t===n||i&&e.value.trim()===u)||(e.value=u)}},sc={deep:!0,created(e,t,n){e[gn]=_s(n),ts(e,"change",()=>{const s=e._modelValue,i=Qs(e),l=e.checked,r=e[gn];if(Me(s)){const a=ql(s,i),u=a!==-1;if(l&&!u)r(s.concat(i));else if(!l&&u){const p=[...s];p.splice(a,1),r(p)}}else if(ns(s)){const a=new Set(s);l?a.add(i):a.delete(i),r(a)}else r(ic(e,l))})},mounted:sa,beforeUpdate(e,t,n){e[gn]=_s(n),sa(e,t,n)}};function sa(e,{value:t,oldValue:n},s){e._modelValue=t;let i;if(Me(t))i=ql(t,s.props.value)>-1;else if(ns(t))i=t.has(s.props.value);else{if(t===n)return;i=Mn(t,ic(e,!0))}e.checked!==i&&(e.checked=i)}const rd={created(e,{value:t},n){e.checked=Mn(t,n.props.value),e[gn]=_s(n),ts(e,"change",()=>{e[gn](Qs(e))})},beforeUpdate(e,{value:t,oldValue:n},s){e[gn]=_s(s),t!==n&&(e.checked=Mn(t,s.props.value))}},gs={deep:!0,created(e,{value:t,modifiers:{number:n}},s){e._modelValue=t,ts(e,"change",()=>{const i=Array.prototype.filter.call(e.options,u=>u.selected).map(u=>n?Eo(Qs(u)):Qs(u)),l=e.multiple,r=l?ns(e._modelValue)?new Set(i):i:i[0],a=e._pendingValue=[l,l?Me(r)?i.slice():i:r];try{e[gn](r)}finally{zn(()=>{e._pendingValue===a&&(e._pendingValue=void 0)})}}),e[gn]=_s(s)},mounted(e,{value:t}){ia(e,t)},beforeUpdate(e,{value:t},n){e._modelValue=t,e[gn]=_s(n)},updated(e,{value:t}){const n=e._pendingValue;e._pendingValue=void 0,(!n||n[0]!==e.multiple||!ad(t,n[1],n[0]))&&ia(e,t)}};function ad(e,t,n){if(!n||Me(e))return Mn(e,t);if(ns(e)){if(e.size!==t.length)return!1;for(const s of t)if(!e.has(s))return!1;return!0}return!1}function ia(e,t){const n=e.multiple,s=Me(t);if(!(n&&!s&&!ns(t))){for(let i=0,l=e.options.length;i<l;i++){const r=e.options[i],a=Qs(r);if(n)if(s){const u=typeof a;u==="string"||u==="number"?r.selected=t.some(p=>String(p)===String(a)):r.selected=ql(t,a)>-1}else r.selected=t.has(a);else if(Mn(Qs(r),t)){e.selectedIndex!==i&&(e.selectedIndex=i);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Qs(e){return"_value"in e?e._value:e.value}function ic(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const ud={created(e,t,n){Gi(e,t,n,null,"created")},mounted(e,t,n){Gi(e,t,n,null,"mounted")},beforeUpdate(e,t,n,s){Gi(e,t,n,s,"beforeUpdate")},updated(e,t,n,s){Gi(e,t,n,s,"updated")}};function cd(e,t){switch(e){case"SELECT":return gs;case"TEXTAREA":return _t;default:switch(t){case"checkbox":return sc;case"radio":return rd;default:return _t}}}function Gi(e,t,n,s,i){const r=cd(e.tagName,n.props&&n.props.type)[i];r&&r(e,t,n,s)}const dd=["ctrl","shift","alt","meta"],pd={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>dd.some(n=>e[`${n}Key`]&&!t.includes(n))},vt=(e,t)=>{if(!e)return e;const n=e._withMods||(e._withMods={}),s=t.join(".");return n[s]||(n[s]=((i,...l)=>{for(let r=0;r<t.length;r++){const a=pd[t[r]];if(a&&a(i,t))return}return e(i,...l)}))},fd={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Wn=(e,t)=>{const n=e._withKeys||(e._withKeys={}),s=t.join(".");return n[s]||(n[s]=(i=>{if(!("key"in i))return;const l=ys(i.key);if(t.some(r=>r===l||fd[r]===l))return e(i)}))},vd=Kt({patchProp:sd},U0);let oa;function hd(){return oa||(oa=y0(vd))}const md=((...e)=>{const t=hd().createApp(...e),{mount:n}=t;return t.mount=s=>{const i=_d(s);if(!i)return;const l=t._component;!Re(l)&&!l.render&&!l.template&&(l.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const r=n(i,!1,gd(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),r},t});function gd(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function _d(e){return yt(e)?document.querySelector(e):e}const Tl=[["月份","话题类型","家长问题及评论提及数","关注占比","发布视频数","播放量","内容归因新增关注","新增关注占比","播放关注率","数据性质"],["2026-09","开学收心与适应",386,"31.4%",4,284600,486,"38.3%","0.171%","演示数据"],["2026-09","学习规划与时间管理",302,"24.6%",3,213800,324,"25.5%","0.152%","演示数据"],["2026-09","月考备考与错题复盘",234,"19.0%",2,154200,251,"19.8%","0.163%","演示数据"],["2026-09","学科方法",184,"15.0%",2,121900,146,"11.5%","0.120%","演示数据"],["2026-09","亲子沟通",123,"10.0%",1,68100,62,"4.9%","0.091%","演示数据"],["2026-09","合计",1229,"100.0%",12,842600,1269,"100.0%","0.151%","演示数据"]],la=Tl.map((e,t)=>({locator:`话题归因 · 第 ${t+1} 行`,text:e.join(" | ")})),yd={id:"business-demo-2026-09-topic-attribution",title:"9月家长话题与视频涨粉归因（演示数据）.csv",subspace:"经营数据",space_name:"清华优优 AI Wiki",doc_type:"dataset",source_group:"demo-topic-analysis-2026-09",imported_file:!0,relative_path:"演示数据/9月家长话题与视频涨粉归因（演示数据）.csv",uri:"./business-data/demo/9月家长话题与视频涨粉归因（演示数据）.csv",chunk_count:Tl.length,sections:la,local_content:la.map(e=>`${e.locator}
${e.text}`).join(`
`),parse_status:"completed",analyzed:!1,is_demo_data:!0,sheets:[{name:"话题归因",rows:Tl}]},bd=JSON.parse('[{"id":"csv-live-0","date":"2025-11-15","start_time":"20:22","title":"清华学霸方法分享 初高中家长必听","dur":"1小时58分钟29秒","views":"3449","peak":"140","hot":"0","gmv":"¥3729","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":3,"source_text":"清华学霸方法分享 初高中家长必听 |   | 2025年11月15日 20:22 | 1小时58分钟29秒 | 3449 | 3794 | 140 | 2分钟16秒 | 1730 | 300 | 86 | 91 | 0 | 0 | 0 | ¥3729 | 11 | 10","follows":"91","orders":"11","buyers":"10"},{"id":"csv-live-1","date":"2025-11-14","start_time":"19:55","title":"清华学霸方法分享 初高中家长必听","dur":"1小时57分钟48秒","views":"2863","peak":"118","hot":"21","gmv":"¥2962","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":4,"source_text":"清华学霸方法分享 初高中家长必听 |   | 2025年11月14日 19:55 | 1小时57分钟48秒 | 2863 | 3367 | 118 | 2分钟23秒 | 1118 | 294 | 70 | 70 | 21 | 1 | 1 | ¥2962 | 8 | 8","follows":"70","orders":"8","buyers":"8"},{"id":"csv-live-2","date":"2025-11-13","start_time":"19:56","title":"清华学霸方法分享 初高中家长必听","dur":"1小时49分钟56秒","views":"3171","peak":"143","hot":"131","gmv":"¥3930","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":5,"source_text":"清华学霸方法分享 初高中家长必听 |   | 2025年11月13日 19:56 | 1小时49分钟56秒 | 3171 | 3627 | 143 | 2分钟17秒 | 4522 | 256 | 79 | 78 | 131 | 9 | 9 | ¥3930 | 10 | 9","follows":"78","orders":"10","buyers":"9"},{"id":"csv-live-3","date":"2025-11-11","start_time":"20:04","title":"清华学霸方法分享 初高中家长必听","dur":"1小时52分钟53秒","views":"2236","peak":"109","hot":"46","gmv":"¥1395","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":6,"source_text":"清华学霸方法分享 初高中家长必听 |   | 2025年11月11日 20:04 | 1小时52分钟53秒 | 2236 | 2709 | 109 | 2分钟37秒 | 1276 | 204 | 65 | 61 | 46 | 4 | 4 | ¥1395 | 5 | 5","follows":"61","orders":"5","buyers":"5"},{"id":"csv-live-4","date":"2025-11-10","start_time":"19:59","title":"清华学霸方法分享 初高中家长必听","dur":"1小时51分钟24秒","views":"3147","peak":"127","hot":"42","gmv":"¥199","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":7,"source_text":"清华学霸方法分享 初高中家长必听 |   | 2025年11月10日 19:59 | 1小时51分钟24秒 | 3147 | 3761 | 127 | 2分钟26秒 | 3073 | 241 | 64 | 105 | 42 | 2 | 2 | ¥199 | 1 | 1","follows":"105","orders":"1","buyers":"1"},{"id":"csv-live-5","date":"2025-11-08","start_time":"20:15","title":"清华学霸方法分享 初高中家长必听","dur":"1小时41分钟7秒","views":"2645","peak":"121","hot":"106","gmv":"¥2531","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":8,"source_text":"清华学霸方法分享 初高中家长必听 |   | 2025年11月08日 20:15 | 1小时41分钟7秒 | 2645 | 3210 | 121 | 2分钟23秒 | 1744 | 253 | 89 | 57 | 106 | 5 | 8 | ¥2531 | 9 | 9","follows":"57","orders":"9","buyers":"9"},{"id":"csv-live-6","date":"2025-11-07","start_time":"19:59","title":"清华学霸方法分享 初高中家长必听","dur":"1小时52分钟42秒","views":"2599","peak":"136","hot":"58","gmv":"¥597","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":9,"source_text":"清华学霸方法分享 初高中家长必听 |   | 2025年11月07日 19:59 | 1小时52分钟42秒 | 2599 | 3045 | 136 | 2分钟11秒 | 1311 | 302 | 70 | 78 | 58 | 4 | 4 | ¥597 | 3 | 3","follows":"78","orders":"3","buyers":"3"},{"id":"csv-live-7","date":"2025-11-07","start_time":"18:37","title":"ceshi","dur":"49分钟16秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":10,"source_text":"ceshi |   | 2025年11月07日 18:37 | 49分钟16秒 | 1 | 1 | 1 | 44分钟34秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-8","date":"2025-11-06","start_time":"20:01","title":"清华学霸方法分享 初高中家长必听","dur":"1小时49分钟28秒","views":"2172","peak":"86","hot":"92","gmv":"¥1795","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":11,"source_text":"清华学霸方法分享 初高中家长必听 |   | 2025年11月06日 20:01 | 1小时49分钟28秒 | 2172 | 2593 | 86 | 2分钟27秒 | 3078 | 222 | 59 | 53 | 92 | 7 | 7 | ¥1795 | 5 | 5","follows":"53","orders":"5","buyers":"5"},{"id":"csv-live-9","date":"2025-11-04","start_time":"20:12","title":"清华学霸方法分享 初高中家长必听","dur":"1小时53分钟21秒","views":"4212","peak":"288","hot":"23","gmv":"¥398","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":12,"source_text":"清华学霸方法分享 初高中家长必听 |   | 2025年11月04日 20:12 | 1小时53分钟21秒 | 4212 | 4860 | 288 | 1分钟45秒 | 4299 | 261 | 84 | 101 | 23 | 1 | 1 | ¥398 | 2 | 2","follows":"101","orders":"2","buyers":"2"},{"id":"csv-live-10","date":"2025-11-03","start_time":"20:37","title":"自学比补课强10倍 清华学霸方法","dur":"1小时39分钟49秒","views":"3288","peak":"131","hot":"3","gmv":"¥3727","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":13,"source_text":"自学比补课强10倍 清华学霸方法 |   | 2025年11月03日 20:37 | 1小时39分钟49秒 | 3288 | 3857 | 131 | 1分钟57秒 | 1178 | 297 | 85 | 96 | 3 | 1 | 1 | ¥3727 | 13 | 12","follows":"96","orders":"13","buyers":"12"},{"id":"csv-live-11","date":"2025-11-03","start_time":"18:30","title":"ceshi","dur":"2小时6分钟10秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":14,"source_text":"ceshi |   | 2025年11月03日 18:30 | 2小时6分钟10秒 | 1 | 2 | 1 | 15分钟53秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-12","date":"2025-11-01","start_time":"20:02","title":"自学比补课强10倍 清华学霸方法","dur":"1小时34分钟7秒","views":"3301","peak":"185","hot":"22","gmv":"¥398","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":15,"source_text":"自学比补课强10倍 清华学霸方法 |   | 2025年11月01日 20:02 | 1小时34分钟7秒 | 3301 | 3782 | 185 | 2分钟19秒 | 1521 | 285 | 100 | 126 | 22 | 2 | 2 | ¥398 | 2 | 2","follows":"126","orders":"2","buyers":"2"},{"id":"csv-live-13","date":"2025-10-31","start_time":"20:32","title":"清华学霸开学答疑 小初高家长必听","dur":"1小时30分钟12秒","views":"2991","peak":"128","hot":"37","gmv":"¥199","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":16,"source_text":"清华学霸开学答疑 小初高家长必听 |   | 2025年10月31日 20:32 | 1小时30分钟12秒 | 2991 | 3498 | 128 | 2分钟15秒 | 2162 | 272 | 85 | 88 | 37 | 3 | 3 | ¥199 | 1 | 1","follows":"88","orders":"1","buyers":"1"},{"id":"csv-live-14","date":"2025-10-31","start_time":"19:53","title":"清华学霸开学答疑 小初高家长必听","dur":"30分钟35秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":17,"source_text":"清华学霸开学答疑 小初高家长必听 |   | 2025年10月31日 19:53 | 30分钟35秒 | 1 | 1 | 1 | 29分钟43秒 | 0 | 2 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-15","date":"2025-10-30","start_time":"20:05","title":"清华学霸开学答疑 小初高家长必听","dur":"2小时2分钟32秒","views":"3432","peak":"216","hot":"141","gmv":"¥1594","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":18,"source_text":"清华学霸开学答疑 小初高家长必听 |   | 2025年10月30日 20:05 | 2小时2分钟32秒 | 3432 | 4077 | 216 | 2分钟47秒 | 4734 | 440 | 98 | 94 | 141 | 10 | 11 | ¥1594 | 6 | 6","follows":"94","orders":"6","buyers":"6"},{"id":"csv-live-16","date":"2025-10-30","start_time":"19:47","title":"清华学霸开学答疑 小初高家长必听","dur":"17分钟33秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":19,"source_text":"清华学霸开学答疑 小初高家长必听 |   | 2025年10月30日 19:47 | 17分钟33秒 | 1 | 1 | 1 | 15分钟22秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-17","date":"2025-10-28","start_time":"20:02","title":"清华学霸开学答疑 小初高家长必听","dur":"1小时46分钟56秒","views":"2413","peak":"114","hot":"3","gmv":"¥199","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":20,"source_text":"清华学霸开学答疑 小初高家长必听 |   | 2025年10月28日 20:02 | 1小时46分钟56秒 | 2413 | 2833 | 114 | 2分钟56秒 | 1932 | 317 | 59 | 73 | 3 | 3 | 3 | ¥199 | 1 | 1","follows":"73","orders":"1","buyers":"1"},{"id":"csv-live-18","date":"2025-10-28","start_time":"19:37","title":"清华学霸开学答疑 小初高家长必听","dur":"24分钟44秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":21,"source_text":"清华学霸开学答疑 小初高家长必听 |   | 2025年10月28日 19:37 | 24分钟44秒 | 1 | 2 | 1 | 13分钟9秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-19","date":"2025-10-27","start_time":"20:03","title":"清华学霸开学答疑 小初高家长必听","dur":"1小时40分钟54秒","views":"2311","peak":"116","hot":"45","gmv":"¥1167","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":22,"source_text":"清华学霸开学答疑 小初高家长必听 |   | 2025年10月27日 20:03 | 1小时40分钟54秒 | 2311 | 2546 | 116 | 2分钟54秒 | 1534 | 233 | 74 | 93 | 45 | 3 | 3 | ¥1167 | 3 | 2","follows":"93","orders":"3","buyers":"2"},{"id":"csv-live-20","date":"2025-10-27","start_time":"18:58","title":"ceshi","dur":"1小时5分钟19秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":23,"source_text":"ceshi |   | 2025年10月27日 18:58 | 1小时5分钟19秒 | 1 | 2 | 1 | 59分钟31秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-21","date":"2025-10-26","start_time":"20:02","title":"清华学霸 讲初高中自学","dur":"2小时18分钟50秒","views":"3143","peak":"99","hot":"70","gmv":"¥1167","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":24,"source_text":"清华学霸 讲初高中自学 |   | 2025年10月26日 20:02 | 2小时18分钟50秒 | 3143 | 3739 | 99 | 2分钟22秒 | 3240 | 354 | 87 | 84 | 70 | 5 | 6 | ¥1167 | 3 | 3","follows":"84","orders":"3","buyers":"3"},{"id":"csv-live-22","date":"2025-10-26","start_time":"19:10","title":"123","dur":"50分钟29秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":25,"source_text":"123 |   | 2025年10月26日 19:10 | 50分钟29秒 | 1 | 1 | 1 | 51分钟18秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-23","date":"2025-10-24","start_time":"20:13","title":"清华学霸开学答疑 小初高家长必听","dur":"1小时33分钟55秒","views":"1303","peak":"68","hot":"21","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":26,"source_text":"清华学霸开学答疑 小初高家长必听 |   | 2025年10月24日 20:13 | 1小时33分钟55秒 | 1303 | 1509 | 68 | 2分钟58秒 | 3818 | 182 | 29 | 20 | 21 | 1 | 1 | ¥0 | 0 | 0","follows":"20","orders":"0","buyers":"0"},{"id":"csv-live-24","date":"2025-10-24","start_time":"20:05","title":"清华学霸开学答疑 小初高家长必听","dur":"7分钟0秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":27,"source_text":"清华学霸开学答疑 小初高家长必听 |   | 2025年10月24日 20:05 | 7分钟0秒 | 1 | 1 | 1 | 1分钟29秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-25","date":"2025-10-24","start_time":"19:58","title":"清华学霸开学答疑 小初高家长必听","dur":"5分钟55秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":28,"source_text":"清华学霸开学答疑 小初高家长必听 |   | 2025年10月24日 19:58 | 5分钟55秒 | 1 | 1 | 1 | 4分钟37秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-26","date":"2025-10-23","start_time":"20:02","title":"清华学霸开学答疑 小初高家长必听","dur":"2小时12分钟32秒","views":"1793","peak":"71","hot":"44","gmv":"¥1797","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":29,"source_text":"清华学霸开学答疑 小初高家长必听 |   | 2025年10月23日 20:02 | 2小时12分钟32秒 | 1793 | 2153 | 71 | 3分钟28秒 | 1561 | 253 | 34 | 38 | 44 | 4 | 4 | ¥1797 | 3 | 3","follows":"38","orders":"3","buyers":"3"},{"id":"csv-live-27","date":"2025-10-23","start_time":"18:31","title":"ceshi","dur":"1小时29分钟3秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":30,"source_text":"ceshi |   | 2025年10月23日 18:31 | 1小时29分钟3秒 | 1 | 3 | 1 | 1小时48分钟56秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-28","date":"2025-10-21","start_time":"20:07","title":"清华学霸开学答疑 小初高家长必听","dur":"2小时11分钟40秒","views":"2153","peak":"88","hot":"48","gmv":"¥1198","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":31,"source_text":"清华学霸开学答疑 小初高家长必听 |   | 2025年10月21日 20:07 | 2小时11分钟40秒 | 2153 | 2535 | 88 | 3分钟18秒 | 5022 | 338 | 54 | 37 | 48 | 4 | 4 | ¥1198 | 2 | 2","follows":"37","orders":"2","buyers":"2"},{"id":"csv-live-29","date":"2025-10-21","start_time":"19:31","title":"清华学霸开学答疑 小初高家长必听","dur":"28分钟46秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":32,"source_text":"清华学霸开学答疑 小初高家长必听 |   | 2025年10月21日 19:31 | 28分钟46秒 | 1 | 1 | 1 | 34分钟7秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-30","date":"2025-10-21","start_time":"16:50","title":"ceshi2","dur":"1分钟46秒","views":"1","peak":"0","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":33,"source_text":"ceshi2 |   | 2025年10月21日 16:50 | 1分钟46秒 | 1 | 1 | 0 | 5秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-31","date":"2025-10-21","start_time":"16:03","title":"ceshi","dur":"4分钟28秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":34,"source_text":"ceshi |   | 2025年10月21日 16:03 | 4分钟28秒 | 1 | 2 | 1 | 2分钟25秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-32","date":"2025-10-20","start_time":"20:03","title":"清华学霸开学答疑 小初高家长必听","dur":"2小时22分钟41秒","views":"2570","peak":"84","hot":"29","gmv":"¥1766","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":35,"source_text":"清华学霸开学答疑 小初高家长必听 |   | 2025年10月20日 20:03 | 2小时22分钟41秒 | 2570 | 3017 | 84 | 2分钟46秒 | 1506 | 279 | 49 | 32 | 29 | 3 | 3 | ¥1766 | 4 | 4","follows":"32","orders":"4","buyers":"4"},{"id":"csv-live-33","date":"2025-10-20","start_time":"18:45","title":"测试","dur":"1小时16分钟1秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":36,"source_text":"测试 |   | 2025年10月20日 18:45 | 1小时16分钟1秒 | 1 | 2 | 1 | 41分钟29秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-34","date":"2025-10-18","start_time":"19:57","title":"清华学霸开学答疑 小初高家长必听","dur":"2小时10分钟39秒","views":"2139","peak":"75","hot":"22","gmv":"¥1565","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":37,"source_text":"清华学霸开学答疑 小初高家长必听 |   | 2025年10月18日 19:57 | 2小时10分钟39秒 | 2139 | 2551 | 75 | 0秒 | 6553 | 216 | 56 | 39 | 22 | 2 | 2 | ¥1565 | 5 | 3","follows":"39","orders":"5","buyers":"3"},{"id":"csv-live-35","date":"2025-10-18","start_time":"19:44","title":"清华学霸开学答疑 小初高家长必听","dur":"11分钟44秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":38,"source_text":"清华学霸开学答疑 小初高家长必听 |   | 2025年10月18日 19:44 | 11分钟44秒 | 1 | 1 | 1 | 7分钟54秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-36","date":"2025-10-17","start_time":"22:34","title":"ceshi","dur":"4分钟49秒","views":"2","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":39,"source_text":"ceshi |   | 2025年10月17日 22:34 | 4分钟49秒 | 2 | 2 | 1 | 44秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-37","date":"2025-10-17","start_time":"20:41","title":"清华学霸开心学答疑 小初高家长必","dur":"1小时47分钟31秒","views":"1916","peak":"70","hot":"52","gmv":"¥199","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":40,"source_text":"清华学霸开心学答疑 小初高家长必 |   | 2025年10月17日 20:41 | 1小时47分钟31秒 | 1916 | 2245 | 70 | 2分钟14秒 | 4350 | 122 | 36 | 28 | 52 | 2 | 3 | ¥199 | 1 | 1","follows":"28","orders":"1","buyers":"1"},{"id":"csv-live-38","date":"2025-10-17","start_time":"20:33","title":"清华学霸开学答疑 小初高家长必听","dur":"5分钟2秒","views":"85","peak":"38","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":41,"source_text":"清华学霸开学答疑 小初高家长必听 |   | 2025年10月17日 20:33 | 5分钟2秒 | 85 | 85 | 38 | 42秒 | 1 | 7 | 5 | 4 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"4","orders":"0","buyers":"0"},{"id":"csv-live-39","date":"2025-10-17","start_time":"20:04","title":"清华学霸开学答疑 小初高家长必听","dur":"3分钟30秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":42,"source_text":"清华学霸开学答疑 小初高家长必听 |   | 2025年10月17日 20:04 | 3分钟30秒 | 1 | 1 | 1 | 5分钟35秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-40","date":"2025-10-16","start_time":"20:19","title":"清华学霸开学答疑 小初高家长必听","dur":"2小时2分钟16秒","views":"2881","peak":"133","hot":"91","gmv":"¥3563","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":43,"source_text":"清华学霸开学答疑 小初高家长必听 |   | 2025年10月16日 20:19 | 2小时2分钟16秒 | 2881 | 3502 | 133 | 3分钟24秒 | 2762 | 317 | 91 | 90 | 91 | 9 | 9 | ¥3563 | 7 | 6","follows":"90","orders":"7","buyers":"6"},{"id":"csv-live-41","date":"2025-10-16","start_time":"20:15","title":"清华学霸开学答疑 小初高家长必听","dur":"2分钟57秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":44,"source_text":"清华学霸开学答疑 小初高家长必听 |   | 2025年10月16日 20:15 | 2分钟57秒 | 1 | 2 | 1 | 0秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-42","date":"2025-10-14","start_time":"20:05","title":"清华学霸开学答疑 小初高家长必听","dur":"1小时58分钟50秒","views":"2929","peak":"109","hot":"165","gmv":"¥3592","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":45,"source_text":"清华学霸开学答疑 小初高家长必听 |   | 2025年10月14日 20:05 | 1小时58分钟50秒 | 2929 | 3461 | 109 | 2分钟56秒 | 6330 | 312 | 61 | 71 | 165 | 9 | 9 | ¥3592 | 8 | 8","follows":"71","orders":"8","buyers":"8"},{"id":"csv-live-43","date":"2025-10-14","start_time":"19:03","title":"清华学霸开学答疑 小初高家长必听","dur":"59分钟10秒","views":"2","peak":"2","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":46,"source_text":"清华学霸开学答疑 小初高家长必听 |   | 2025年10月14日 19:03 | 59分钟10秒 | 2 | 3 | 2 | 41分钟3秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-44","date":"2025-10-14","start_time":"18:56","title":"ceshi2","dur":"27秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":47,"source_text":"ceshi2 |   | 2025年10月14日 18:56 | 27秒 | 1 | 1 | 1 | 27秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-45","date":"2025-10-14","start_time":"18:44","title":"123","dur":"9分钟34秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":48,"source_text":"123 |   | 2025年10月14日 18:44 | 9分钟34秒 | 1 | 1 | 1 | 2分钟36秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-46","date":"2025-10-14","start_time":"18:38","title":"ceshi","dur":"3分钟12秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":49,"source_text":"ceshi |   | 2025年10月14日 18:38 | 3分钟12秒 | 1 | 1 | 1 | 2分钟37秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-47","date":"2025-10-14","start_time":"18:18","title":"ceshi","dur":"5分钟24秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":50,"source_text":"ceshi |   | 2025年10月14日 18:18 | 5分钟24秒 | 1 | 1 | 1 | 6分钟3秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-48","date":"2025-10-13","start_time":"20:02","title":"清华学霸开学答疑 小初高家长必听","dur":"1小时58分钟27秒","views":"2839","peak":"116","hot":"45","gmv":"¥1196","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":51,"source_text":"清华学霸开学答疑 小初高家长必听 |   | 2025年10月13日 20:02 | 1小时58分钟27秒 | 2839 | 3426 | 116 | 3分钟1秒 | 7808 | 484 | 75 | 54 | 45 | 3 | 3 | ¥1196 | 4 | 4","follows":"54","orders":"4","buyers":"4"},{"id":"csv-live-49","date":"2025-10-11","start_time":"20:00","title":"清华学霸开学答疑 小初高家长必听","dur":"2小时1分钟28秒","views":"3627","peak":"134","hot":"171","gmv":"¥2394","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":52,"source_text":"清华学霸开学答疑 小初高家长必听 |   | 2025年10月11日 20:00 | 2小时1分钟28秒 | 3627 | 4397 | 134 | 2分钟47秒 | 6631 | 378 | 72 | 81 | 171 | 14 | 14 | ¥2394 | 6 | 6","follows":"81","orders":"6","buyers":"6"},{"id":"csv-live-50","date":"2025-10-11","start_time":"18:54","title":"2","dur":"7分钟25秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":53,"source_text":"2 |   | 2025年10月11日 18:54 | 7分钟25秒 | 1 | 2 | 1 | 7分钟15秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-51","date":"2025-10-10","start_time":"20:01","title":"清华学霸开学答疑 小初高家长必听","dur":"1小时42分钟29秒","views":"2944","peak":"113","hot":"44","gmv":"¥199","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":54,"source_text":"清华学霸开学答疑 小初高家长必听 |   | 2025年10月10日 20:01 | 1小时42分钟29秒 | 2944 | 3507 | 113 | 2分钟32秒 | 4088 | 229 | 85 | 77 | 44 | 4 | 4 | ¥199 | 1 | 1","follows":"77","orders":"1","buyers":"1"},{"id":"csv-live-52","date":"2025-10-09","start_time":"20:03","title":"清华学霸开学答疑 小初高家长必听","dur":"1小时27分钟1秒","views":"2864","peak":"144","hot":"130","gmv":"¥1167","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":55,"source_text":"清华学霸开学答疑 小初高家长必听 |   | 2025年10月09日 20:03 | 1小时27分钟1秒 | 2864 | 3250 | 144 | 2分钟30秒 | 2552 | 240 | 75 | 73 | 130 | 11 | 12 | ¥1167 | 3 | 3","follows":"73","orders":"3","buyers":"3"},{"id":"csv-live-53","date":"2025-10-07","start_time":"20:01","title":"清华学霸开学规划 小初高家长必听","dur":"1小时40分钟43秒","views":"3659","peak":"144","hot":"99","gmv":"¥1191","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":56,"source_text":"清华学霸开学规划 小初高家长必听 |   | 2025年10月07日 20:01 | 1小时40分钟43秒 | 3659 | 4275 | 144 | 2分钟28秒 | 4269 | 350 | 114 | 122 | 99 | 10 | 11 | ¥1191 | 4 | 4","follows":"122","orders":"4","buyers":"4"},{"id":"csv-live-54","date":"2025-10-07","start_time":"19:49","title":"清华学霸开学规划 小初高家长必听","dur":"10分钟5秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":57,"source_text":"清华学霸开学规划 小初高家长必听 |   | 2025年10月07日 19:49 | 10分钟5秒 | 1 | 1 | 1 | 7分钟7秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-55","date":"2025-10-06","start_time":"20:01","title":"清华学霸开学答疑 小初高家长必听","dur":"1小时28分钟23秒","views":"3436","peak":"92","hot":"32","gmv":"¥199","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":58,"source_text":"清华学霸开学答疑 小初高家长必听 |   | 2025年10月06日 20:01 | 1小时28分钟23秒 | 3436 | 3843 | 92 | 1分钟15秒 | 7836 | 163 | 65 | 58 | 32 | 6 | 6 | ¥199 | 1 | 1","follows":"58","orders":"1","buyers":"1"},{"id":"csv-live-56","date":"2025-10-06","start_time":"19:44","title":"清华学霸开学答疑 小初高家长必听","dur":"16分钟50秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":59,"source_text":"清华学霸开学答疑 小初高家长必听 |   | 2025年10月06日 19:44 | 16分钟50秒 | 1 | 1 | 1 | 12分钟14秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-57","date":"2025-10-05","start_time":"20:24","title":"清华学霸开学答疑 小初高家长必听","dur":"1小时45分钟15秒","views":"3370","peak":"89","hot":"34","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":60,"source_text":"清华学霸开学答疑 小初高家长必听 |   | 2025年10月05日 20:24 | 1小时45分钟15秒 | 3370 | 3837 | 89 | 1分钟33秒 | 1349 | 206 | 82 | 66 | 34 | 3 | 3 | ¥0 | 0 | 0","follows":"66","orders":"0","buyers":"0"},{"id":"csv-live-58","date":"2025-10-05","start_time":"20:22","title":"清华学霸开学答疑 小初高家长必听","dur":"57秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":61,"source_text":"清华学霸开学答疑 小初高家长必听 |   | 2025年10月05日 20:22 | 57秒 | 1 | 1 | 1 | 0秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-59","date":"2025-10-01","start_time":"20:06","title":"初高中必听 清华学姐 自学方法分享","dur":"1小时30分钟1秒","views":"1995","peak":"62","hot":"22","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":62,"source_text":"初高中必听 清华学姐 自学方法分享 |   | 2025年10月01日 20:06 | 1小时30分钟1秒 | 1995 | 2230 | 62 | 1分钟20秒 | 4791 | 161 | 27 | 26 | 22 | 2 | 2 | ¥0 | 0 | 0","follows":"26","orders":"0","buyers":"0"},{"id":"csv-live-60","date":"2025-09-30","start_time":"20:06","title":"清华学霸自学方法 初高中","dur":"1小时53分钟57秒","views":"2617","peak":"95","hot":"44","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":63,"source_text":"清华学霸自学方法 初高中 |   | 2025年09月30日 20:06 | 1小时53分钟57秒 | 2617 | 3047 | 95 | 2分钟30秒 | 3523 | 276 | 78 | 47 | 44 | 4 | 4 | ¥0 | 0 | 0","follows":"47","orders":"0","buyers":"0"},{"id":"csv-live-61","date":"2025-09-29","start_time":"20:12","title":"自学比补课强10倍","dur":"54分钟5秒","views":"1504","peak":"74","hot":"32","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":64,"source_text":"自学比补课强10倍 |   | 2025年09月29日 20:12 | 54分钟5秒 | 1504 | 1739 | 74 | 1分钟20秒 | 567 | 94 | 18 | 33 | 32 | 2 | 2 | ¥0 | 0 | 0","follows":"33","orders":"0","buyers":"0"},{"id":"csv-live-62","date":"2025-09-27","start_time":"20:21","title":"清华学霸自学方法 初高中","dur":"1小时52分钟37秒","views":"2752","peak":"116","hot":"74","gmv":"¥798","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":65,"source_text":"清华学霸自学方法 初高中 |   | 2025年09月27日 20:21 | 1小时52分钟37秒 | 2752 | 3280 | 116 | 2分钟50秒 | 4490 | 349 | 101 | 81 | 74 | 5 | 6 | ¥798 | 2 | 2","follows":"81","orders":"2","buyers":"2"},{"id":"csv-live-63","date":"2025-09-27","start_time":"20:16","title":"清华学霸自学方法 初高中","dur":"4分钟6秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":66,"source_text":"清华学霸自学方法 初高中 |   | 2025年09月27日 20:16 | 4分钟6秒 | 1 | 1 | 1 | 1分钟52秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-64","date":"2025-09-26","start_time":"20:13","title":"清华学霸自学方法 初高中","dur":"1小时41分钟1秒","views":"2898","peak":"126","hot":"93","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":67,"source_text":"清华学霸自学方法 初高中 |   | 2025年09月26日 20:13 | 1小时41分钟1秒 | 2898 | 3438 | 126 | 2分钟29秒 | 5100 | 265 | 68 | 93 | 93 | 7 | 7 | ¥0 | 0 | 0","follows":"93","orders":"0","buyers":"0"},{"id":"csv-live-65","date":"2025-09-25","start_time":"20:14","title":"清华学霸自学方法 初高中","dur":"1小时56分钟45秒","views":"2809","peak":"96","hot":"121","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":68,"source_text":"清华学霸自学方法 初高中 |   | 2025年09月25日 20:14 | 1小时56分钟45秒 | 2809 | 3268 | 96 | 2分钟40秒 | 5095 | 279 | 58 | 81 | 121 | 11 | 12 | ¥0 | 0 | 0","follows":"81","orders":"0","buyers":"0"},{"id":"csv-live-66","date":"2025-09-25","start_time":"20:03","title":"清华学霸自学方法 初高中","dur":"10分钟2秒","views":"0","peak":"0","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":69,"source_text":"清华学霸自学方法 初高中 |   | 2025年09月25日 20:03 | 10分钟2秒 | 0 | 0 | 0 | 0秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-67","date":"2025-09-25","start_time":"19:58","title":"清华学霸自学方法 初高中","dur":"3分钟57秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":70,"source_text":"清华学霸自学方法 初高中 |   | 2025年09月25日 19:58 | 3分钟57秒 | 1 | 2 | 1 | 1分钟7秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-68","date":"2025-09-23","start_time":"20:12","title":"清华学霸 初高中方法","dur":"1小时44分钟42秒","views":"2755","peak":"103","hot":"90","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":71,"source_text":"清华学霸 初高中方法 |   | 2025年09月23日 20:12 | 1小时44分钟42秒 | 2755 | 3140 | 103 | 1分钟58秒 | 2725 | 145 | 93 | 44 | 90 | 6 | 6 | ¥0 | 0 | 0","follows":"44","orders":"0","buyers":"0"},{"id":"csv-live-69","date":"2025-09-23","start_time":"20:06","title":"清华学霸 初高中方法","dur":"4分钟55秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":72,"source_text":"清华学霸 初高中方法 |   | 2025年09月23日 20:06 | 4分钟55秒 | 1 | 1 | 1 | 4分钟5秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-70","date":"2025-09-23","start_time":"19:44","title":"清华学霸 初高中方法","dur":"18分钟31秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":73,"source_text":"清华学霸 初高中方法 |   | 2025年09月23日 19:44 | 18分钟31秒 | 1 | 1 | 1 | 6分钟8秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-71","date":"2025-09-23","start_time":"19:42","title":"清华学霸 初高中方法","dur":"1分钟17秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":74,"source_text":"清华学霸 初高中方法 |   | 2025年09月23日 19:42 | 1分钟17秒 | 1 | 1 | 1 | 0秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-72","date":"2025-09-23","start_time":"19:17","title":"清华学霸 初高中方法","dur":"17分钟21秒","views":"3","peak":"3","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":75,"source_text":"清华学霸 初高中方法 |   | 2025年09月23日 19:17 | 17分钟21秒 | 3 | 4 | 3 | 6分钟28秒 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-73","date":"2025-09-22","start_time":"20:09","title":"清华学霸教你学习方法","dur":"1小时20分钟58秒","views":"1679","peak":"81","hot":"22","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":76,"source_text":"清华学霸教你学习方法 |   | 2025年09月22日 20:09 | 1小时20分钟58秒 | 1679 | 1958 | 81 | 2分钟13秒 | 2620 | 106 | 33 | 36 | 22 | 2 | 2 | ¥0 | 0 | 0","follows":"36","orders":"0","buyers":"0"},{"id":"csv-live-74","date":"2025-09-20","start_time":"20:13","title":"清华学霸教你自学","dur":"1小时33分钟7秒","views":"3458","peak":"164","hot":"100","gmv":"¥600","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":77,"source_text":"清华学霸教你自学 |   | 2025年09月20日 20:13 | 1小时33分钟7秒 | 3458 | 4005 | 164 | 2分钟15秒 | 4776 | 182 | 119 | 129 | 100 | 5 | 6 | ¥600 | 1 | 1","follows":"129","orders":"1","buyers":"1"},{"id":"csv-live-75","date":"2025-09-19","start_time":"20:26","title":"自学比补课强10倍 ","dur":"2小时10分钟6秒","views":"2812","peak":"98","hot":"72","gmv":"¥1200","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":78,"source_text":"自学比补课强10倍  |   | 2025年09月19日 20:26 | 2小时10分钟6秒 | 2812 | 3321 | 98 | 2分钟29秒 | 1436 | 306 | 77 | 65 | 72 | 5 | 24 | ¥1200 | 2 | 2","follows":"65","orders":"2","buyers":"2"},{"id":"csv-live-76","date":"2025-09-16","start_time":"19:58","title":"初高中学习方法 清华学霸指导","dur":"1小时55分钟26秒","views":"1685","peak":"69","hot":"506","gmv":"¥600","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":79,"source_text":"初高中学习方法 清华学霸指导 |   | 2025年09月16日 19:58 | 1小时55分钟26秒 | 1685 | 1946 | 69 | 2分钟29秒 | 11877 | 124 | 24 | 19 | 506 | 3 | 6 | ¥600 | 1 | 1","follows":"19","orders":"1","buyers":"1"},{"id":"csv-live-77","date":"2025-09-15","start_time":"20:26","title":"小初高家长都在听 学习方法","dur":"1小时40分钟14秒","views":"1742","peak":"81","hot":"21","gmv":"¥2400","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":80,"source_text":"小初高家长都在听 学习方法 |   | 2025年09月15日 20:26 | 1小时40分钟14秒 | 1742 | 2045 | 81 | 2分钟25秒 | 10286 | 142 | 24 | 32 | 21 | 1 | 1 | ¥2400 | 4 | 4","follows":"32","orders":"4","buyers":"4"},{"id":"csv-live-78","date":"2025-09-13","start_time":"22:42","title":"测试","dur":"16分钟41秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":81,"source_text":"测试 |   | 2025年09月13日 22:42 | 16分钟41秒 | 1 | 1 | 1 | 3分钟0秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-79","date":"2025-09-13","start_time":"20:01","title":"清华学霸学习方法 初高中家长都在听","dur":"1小时57分钟40秒","views":"2372","peak":"70","hot":"63","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":82,"source_text":"清华学霸学习方法 初高中家长都在听 |   | 2025年09月13日 20:01 | 1小时57分钟40秒 | 2372 | 2780 | 70 | 2分钟12秒 | 3960 | 205 | 54 | 41 | 63 | 5 | 5 | ¥0 | 0 | 0","follows":"41","orders":"0","buyers":"0"},{"id":"csv-live-80","date":"2025-09-13","start_time":"19:04","title":"训练","dur":"55分钟54秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":83,"source_text":"训练 |   | 2025年09月13日 19:04 | 55分钟54秒 | 1 | 1 | 1 | 54分钟20秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-81","date":"2025-09-12","start_time":"20:09","title":"清华学霸自学方法 初高中家长必听","dur":"1小时19分钟34秒","views":"1487","peak":"71","hot":"7","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":84,"source_text":"清华学霸自学方法 初高中家长必听 |   | 2025年09月12日 20:09 | 1小时19分钟34秒 | 1487 | 1719 | 71 | 2分钟4秒 | 5147 | 80 | 34 | 34 | 7 | 2 | 3 | ¥0 | 0 | 0","follows":"34","orders":"0","buyers":"0"},{"id":"csv-live-82","date":"2025-09-12","start_time":"19:29","title":"初高中自学方法","dur":"11分钟32秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":85,"source_text":"初高中自学方法 |   | 2025年09月12日 19:29 | 11分钟32秒 | 1 | 1 | 1 | 8分钟38秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-83","date":"2025-09-11","start_time":"20:11","title":"自学比补课强10倍","dur":"1小时53分钟14秒","views":"2162","peak":"69","hot":"23","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":86,"source_text":"自学比补课强10倍 |   | 2025年09月11日 20:11 | 1小时53分钟14秒 | 2162 | 2409 | 69 | 2分钟13秒 | 1379 | 114 | 35 | 47 | 23 | 3 | 3 | ¥0 | 0 | 0","follows":"47","orders":"0","buyers":"0"},{"id":"csv-live-84","date":"2025-09-11","start_time":"20:02","title":"小初高家长都在听 自学方法","dur":"5分钟55秒","views":"54","peak":"16","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":87,"source_text":"小初高家长都在听 自学方法 |   | 2025年09月11日 20:02 | 5分钟55秒 | 54 | 53 | 16 | 43秒 | 317 | 6 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-85","date":"2025-09-09","start_time":"20:13","title":"小初高开学规划","dur":"1小时53分钟26秒","views":"1799","peak":"53","hot":"22","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":88,"source_text":"小初高开学规划 |   | 2025年09月09日 20:13 | 1小时53分钟26秒 | 1799 | 1987 | 53 | 1分钟55秒 | 4296 | 72 | 22 | 18 | 22 | 2 | 2 | ¥0 | 0 | 0","follows":"18","orders":"0","buyers":"0"},{"id":"csv-live-86","date":"2025-09-08","start_time":"20:36","title":"自学比补课强10倍 清华学霸在线答疑","dur":"1小时24分钟22秒","views":"2353","peak":"95","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":89,"source_text":"自学比补课强10倍 清华学霸在线答疑 |   | 2025年09月08日 20:36 | 1小时24分钟22秒 | 2353 | 2671 | 95 | 1分钟34秒 | 1474 | 103 | 27 | 37 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"37","orders":"0","buyers":"0"},{"id":"csv-live-87","date":"2025-09-05","start_time":"20:01","title":"自学比补课强10倍","dur":"2小时23分钟7秒","views":"3009","peak":"111","hot":"11","gmv":"¥1800","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":90,"source_text":"自学比补课强10倍 |   | 2025年09月05日 20:01 | 2小时23分钟7秒 | 3009 | 3531 | 111 | 2分钟47秒 | 2346 | 315 | 51 | 75 | 11 | 3 | 3 | ¥1800 | 3 | 3","follows":"75","orders":"3","buyers":"3"},{"id":"csv-live-88","date":"2025-09-05","start_time":"18:33","title":"测试","dur":"1小时25分钟59秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":91,"source_text":"测试 |   | 2025年09月05日 18:33 | 1小时25分钟59秒 | 1 | 4 | 1 | 44分钟24秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-89","date":"2025-09-04","start_time":"20:08","title":"小初高学习方法 清华学霸分享","dur":"1小时29分钟25秒","views":"1442","peak":"58","hot":"105","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":92,"source_text":"小初高学习方法 清华学霸分享 |   | 2025年09月04日 20:08 | 1小时29分钟25秒 | 1442 | 1656 | 58 | 1分钟52秒 | 1661 | 65 | 21 | 17 | 105 | 5 | 5 | ¥0 | 0 | 0","follows":"17","orders":"0","buyers":"0"},{"id":"csv-live-90","date":"2025-09-02","start_time":"19:48","title":"清华学霸在线答疑","dur":"2小时17分钟50秒","views":"2270","peak":"63","hot":"44","gmv":"¥3000","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":93,"source_text":"清华学霸在线答疑 |   | 2025年09月02日 19:48 | 2小时17分钟50秒 | 2270 | 2714 | 63 | 2分钟30秒 | 2747 | 256 | 43 | 56 | 44 | 4 | 4 | ¥3000 | 5 | 5","follows":"56","orders":"5","buyers":"5"},{"id":"csv-live-91","date":"2025-09-01","start_time":"19:58","title":"自学比补课强10倍 小初高家长必听","dur":"2小时8分钟9秒","views":"2844","peak":"79","hot":"21","gmv":"¥2400","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":94,"source_text":"自学比补课强10倍 小初高家长必听 |   | 2025年09月01日 19:58 | 2小时8分钟9秒 | 2844 | 3221 | 79 | 1分钟50秒 | 1147 | 218 | 26 | 36 | 21 | 1 | 1 | ¥2400 | 4 | 4","follows":"36","orders":"4","buyers":"4"},{"id":"csv-live-92","date":"2025-09-01","start_time":"19:57","title":"测试","dur":"29秒","views":"1","peak":"0","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":95,"source_text":"测试 |   | 2025年09月01日 19:57 | 29秒 | 1 | 1 | 0 | 0秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-93","date":"2025-08-30","start_time":"20:17","title":"小初高妈妈都在听 清华自学方法","dur":"1小时52分钟19秒","views":"3992","peak":"129","hot":"267","gmv":"¥1200","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":96,"source_text":"小初高妈妈都在听 清华自学方法 |   | 2025年08月30日 20:17 | 1小时52分钟19秒 | 3992 | 4624 | 129 | 1分钟42秒 | 4033 | 277 | 75 | 100 | 267 | 7 | 14 | ¥1200 | 2 | 2","follows":"100","orders":"2","buyers":"2"},{"id":"csv-live-94","date":"2025-08-30","start_time":"20:11","title":"CESHI ","dur":"1分钟4秒","views":"1","peak":"0","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":97,"source_text":"CESHI  |   | 2025年08月30日 20:11 | 1分钟4秒 | 1 | 1 | 0 | 0秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-95","date":"2025-08-29","start_time":"19:59","title":"自学比补课强10倍 小初高妈妈都在听","dur":"2小时10分钟46秒","views":"4130","peak":"153","hot":"97","gmv":"¥9000","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":98,"source_text":"自学比补课强10倍 小初高妈妈都在听 |   | 2025年08月29日 19:59 | 2小时10分钟46秒 | 4130 | 4976 | 153 | 2分钟29秒 | 7530 | 409 | 122 | 113 | 97 | 6 | 9 | ¥9000 | 8 | 8","follows":"113","orders":"8","buyers":"8"},{"id":"csv-live-96","date":"2025-08-29","start_time":"19:43","title":"测试","dur":"9分钟35秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":99,"source_text":"测试 |   | 2025年08月29日 19:43 | 9分钟35秒 | 1 | 1 | 1 | 9分钟26秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-97","date":"2025-08-28","start_time":"20:04","title":"自学比补课强10倍 清华学霸答疑","dur":"2小时4分钟44秒","views":"3575","peak":"142","hot":"243","gmv":"¥4800","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":100,"source_text":"自学比补课强10倍 清华学霸答疑 |   | 2025年08月28日 20:04 | 2小时4分钟44秒 | 3575 | 4210 | 142 | 2分钟35秒 | 3665 | 390 | 97 | 102 | 243 | 15 | 18 | ¥4800 | 8 | 8","follows":"102","orders":"8","buyers":"8"},{"id":"csv-live-98","date":"2025-08-28","start_time":"19:14","title":"自学比补课强10倍 清华学霸答疑","dur":"49分钟56秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":101,"source_text":"自学比补课强10倍 清华学霸答疑 |   | 2025年08月28日 19:14 | 49分钟56秒 | 1 | 1 | 1 | 57分钟42秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-99","date":"2025-08-26","start_time":"20:00","title":"小初高妈妈都在听 自学方法","dur":"2小时13分钟58秒","views":"3889","peak":"258","hot":"145","gmv":"¥10800","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":102,"source_text":"小初高妈妈都在听 自学方法 |   | 2025年08月26日 20:00 | 2小时13分钟58秒 | 3889 | 4445 | 258 | 2分钟0秒 | 3237 | 259 | 60 | 66 | 145 | 7 | 7 | ¥10800 | 7 | 6","follows":"66","orders":"7","buyers":"6"},{"id":"csv-live-100","date":"2025-08-26","start_time":"19:41","title":"小初高妈妈都在听 自学方法","dur":"14分钟46秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":103,"source_text":"小初高妈妈都在听 自学方法 |   | 2025年08月26日 19:41 | 14分钟46秒 | 1 | 1 | 1 | 13分钟26秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-101","date":"2025-08-25","start_time":"20:07","title":"小初高妈妈都在听 清华学霸分享","dur":"1小时34分钟10秒","views":"3502","peak":"111","hot":"42","gmv":"¥600","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":104,"source_text":"小初高妈妈都在听 清华学霸分享 |   | 2025年08月25日 20:07 | 1小时34分钟10秒 | 3502 | 4011 | 111 | 1分钟42秒 | 2797 | 254 | 46 | 62 | 42 | 2 | 2 | ¥600 | 1 | 1","follows":"62","orders":"1","buyers":"1"},{"id":"csv-live-102","date":"2025-08-25","start_time":"19:58","title":"小初高妈妈都在听 清华学霸分享","dur":"4分钟20秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":105,"source_text":"小初高妈妈都在听 清华学霸分享 |   | 2025年08月25日 19:58 | 4分钟20秒 | 1 | 1 | 1 | 4分钟3秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-103","date":"2025-08-22","start_time":"20:06","title":"自学比补课强10倍 清华学霸答疑","dur":"1小时38分钟38秒","views":"4366","peak":"176","hot":"123","gmv":"¥1797","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":106,"source_text":"自学比补课强10倍 清华学霸答疑 |   | 2025年08月22日 20:06 | 1小时38分钟38秒 | 4366 | 5075 | 176 | 2分钟1秒 | 6985 | 435 | 83 | 123 | 123 | 9 | 9 | ¥1797 | 3 | 3","follows":"123","orders":"3","buyers":"3"},{"id":"csv-live-104","date":"2025-08-21","start_time":"20:03","title":"自学比补课强10倍 清华学霸答疑","dur":"2小时1分钟13秒","views":"3984","peak":"119","hot":"21","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":107,"source_text":"自学比补课强10倍 清华学霸答疑 |   | 2025年08月21日 20:03 | 2小时1分钟13秒 | 3984 | 4671 | 119 | 2分钟12秒 | 6475 | 219 | 55 | 59 | 21 | 1 | 1 | ¥0 | 0 | 0","follows":"59","orders":"0","buyers":"0"},{"id":"csv-live-105","date":"2025-08-21","start_time":"19:43","title":"自学比补课强10倍 清华学霸答疑","dur":"19分钟34秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":108,"source_text":"自学比补课强10倍 清华学霸答疑 |   | 2025年08月21日 19:43 | 19分钟34秒 | 1 | 1 | 1 | 21分钟11秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-106","date":"2025-08-20","start_time":"20:01","title":"自学比补课强10倍 清华学霸答疑","dur":"1小时58分钟30秒","views":"3549","peak":"122","hot":"126","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":109,"source_text":"自学比补课强10倍 清华学霸答疑 |   | 2025年08月20日 20:01 | 1小时58分钟30秒 | 3549 | 4181 | 122 | 2分钟14秒 | 3319 | 331 | 80 | 79 | 126 | 6 | 6 | ¥0 | 0 | 0","follows":"79","orders":"0","buyers":"0"},{"id":"csv-live-107","date":"2025-08-18","start_time":"20:04","title":"清华学霸在线答疑","dur":"1小时47分钟7秒","views":"3651","peak":"98","hot":"76","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":110,"source_text":"清华学霸在线答疑 |   | 2025年08月18日 20:04 | 1小时47分钟7秒 | 3651 | 4233 | 98 | 1分钟34秒 | 4974 | 195 | 63 | 71 | 76 | 6 | 6 | ¥0 | 0 | 0","follows":"71","orders":"0","buyers":"0"},{"id":"csv-live-108","date":"2025-08-18","start_time":"19:42","title":"测试","dur":"21分钟30秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":111,"source_text":"测试 |   | 2025年08月18日 19:42 | 21分钟30秒 | 1 | 1 | 1 | 24分钟11秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-109","date":"2025-08-16","start_time":"20:10","title":"自学比补课强10倍","dur":"1小时34分钟36秒","views":"3729","peak":"149","hot":"209","gmv":"¥1198","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":112,"source_text":"自学比补课强10倍 |   | 2025年08月16日 20:10 | 1小时34分钟36秒 | 3729 | 4357 | 149 | 2分钟5秒 | 7595 | 313 | 66 | 100 | 209 | 14 | 15 | ¥1198 | 2 | 2","follows":"100","orders":"2","buyers":"2"},{"id":"csv-live-110","date":"2025-08-16","start_time":"19:46","title":"自学比补课强10倍","dur":"23分钟40秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":113,"source_text":"自学比补课强10倍 |   | 2025年08月16日 19:46 | 23分钟40秒 | 1 | 1 | 1 | 24分钟35秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-111","date":"2025-08-15","start_time":"20:05","title":"自学比补课强10倍","dur":"1小时44分钟44秒","views":"4523","peak":"183","hot":"240","gmv":"¥4792","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":114,"source_text":"自学比补课强10倍 |   | 2025年08月15日 20:05 | 1小时44分钟44秒 | 4523 | 5297 | 183 | 2分钟13秒 | 5432 | 448 | 126 | 133 | 240 | 13 | 14 | ¥4792 | 8 | 8","follows":"133","orders":"8","buyers":"8"},{"id":"csv-live-112","date":"2025-08-15","start_time":"19:58","title":"自学比补课强10倍","dur":"7分钟28秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":115,"source_text":"自学比补课强10倍 |   | 2025年08月15日 19:58 | 7分钟28秒 | 1 | 1 | 1 | 7分钟12秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-113","date":"2025-08-14","start_time":"20:28","title":"自学比补课强10倍","dur":"1小时45分钟4秒","views":"4179","peak":"170","hot":"21","gmv":"¥2396","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":116,"source_text":"自学比补课强10倍 |   | 2025年08月14日 20:28 | 1小时45分钟4秒 | 4179 | 4843 | 170 | 1分钟59秒 | 2845 | 294 | 78 | 91 | 21 | 1 | 1 | ¥2396 | 4 | 4","follows":"91","orders":"4","buyers":"4"},{"id":"csv-live-114","date":"2025-08-13","start_time":"20:15","title":"自学比补课强10倍","dur":"1小时55分钟31秒","views":"5969","peak":"270","hot":"113","gmv":"¥599","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":117,"source_text":"自学比补课强10倍 |   | 2025年08月13日 20:15 | 1小时55分钟31秒 | 5969 | 7189 | 270 | 2分钟31秒 | 7041 | 580 | 159 | 250 | 113 | 9 | 9 | ¥599 | 1 | 1","follows":"250","orders":"1","buyers":"1"},{"id":"csv-live-115","date":"2025-08-11","start_time":"20:12","title":"自学比补课强10倍","dur":"1小时58分钟46秒","views":"6415","peak":"342","hot":"164","gmv":"¥1198","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":118,"source_text":"自学比补课强10倍 |   | 2025年08月11日 20:12 | 1小时58分钟46秒 | 6415 | 7687 | 342 | 2分钟44秒 | 7102 | 720 | 224 | 263 | 164 | 12 | 12 | ¥1198 | 2 | 2","follows":"263","orders":"2","buyers":"2"},{"id":"csv-live-116","date":"2025-08-09","start_time":"20:03","title":"自学比补课强10倍","dur":"2小时11分钟56秒","views":"4922","peak":"185","hot":"753","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":119,"source_text":"自学比补课强10倍 |   | 2025年08月09日 20:03 | 2小时11分钟56秒 | 4922 | 5996 | 185 | 2分钟54秒 | 24769 | 473 | 182 | 157 | 753 | 9 | 10 | ¥0 | 0 | 0","follows":"157","orders":"0","buyers":"0"},{"id":"csv-live-117","date":"2025-08-09","start_time":"19:33","title":"自学比补课强10倍","dur":"28分钟37秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":120,"source_text":"自学比补课强10倍 |   | 2025年08月09日 19:33 | 28分钟37秒 | 1 | 2 | 1 | 29分钟22秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-118","date":"2025-08-08","start_time":"20:15","title":"不补课 自学上名校","dur":"1小时43分钟8秒","views":"3735","peak":"106","hot":"89","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":121,"source_text":"不补课 自学上名校 |   | 2025年08月08日 20:15 | 1小时43分钟8秒 | 3735 | 4182 | 106 | 1分钟49秒 | 4968 | 405 | 41 | 38 | 89 | 5 | 5 | ¥0 | 0 | 0","follows":"38","orders":"0","buyers":"0"},{"id":"csv-live-119","date":"2025-08-05","start_time":"20:14","title":"自学比补课强10倍","dur":"2小时4分钟13秒","views":"4616","peak":"127","hot":"22","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":122,"source_text":"自学比补课强10倍 |   | 2025年08月05日 20:14 | 2小时4分钟13秒 | 4616 | 5481 | 127 | 2分钟18秒 | 4868 | 375 | 102 | 101 | 22 | 6 | 6 | ¥0 | 0 | 0","follows":"101","orders":"0","buyers":"0"},{"id":"csv-live-120","date":"2025-08-04","start_time":"20:11","title":"自学比补课强10倍","dur":"2小时2分钟52秒","views":"4924","peak":"165","hot":"76","gmv":"¥1198","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":123,"source_text":"自学比补课强10倍 |   | 2025年08月04日 20:11 | 2小时2分钟52秒 | 4924 | 5769 | 165 | 2分钟25秒 | 5020 | 388 | 130 | 143 | 76 | 5 | 6 | ¥1198 | 2 | 2","follows":"143","orders":"2","buyers":"2"},{"id":"csv-live-121","date":"2025-08-02","start_time":"20:00","title":"自学比补课强10倍","dur":"1小时43分钟53秒","views":"4954","peak":"181","hot":"93","gmv":"¥893","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":124,"source_text":"自学比补课强10倍 |   | 2025年08月02日 20:00 | 1小时43分钟53秒 | 4954 | 5759 | 181 | 1分钟57秒 | 7826 | 429 | 129 | 157 | 93 | 9 | 9 | ¥893 | 4 | 4","follows":"157","orders":"4","buyers":"4"},{"id":"csv-live-122","date":"2025-08-02","start_time":"19:51","title":"自学比补课强10倍","dur":"7分钟1秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":125,"source_text":"自学比补课强10倍 |   | 2025年08月02日 19:51 | 7分钟1秒 | 1 | 1 | 1 | 8分钟59秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-123","date":"2025-08-01","start_time":"20:02","title":"自学比补课强10倍 初高中家长必听","dur":"1小时55分钟52秒","views":"3396","peak":"196","hot":"120","gmv":"¥1895","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":126,"source_text":"自学比补课强10倍 初高中家长必听 |   | 2025年08月01日 20:02 | 1小时55分钟52秒 | 3396 | 4117 | 196 | 3分钟4秒 | 3594 | 442 | 109 | 86 | 120 | 8 | 9 | ¥1895 | 4 | 4","follows":"86","orders":"4","buyers":"4"},{"id":"csv-live-124","date":"2025-08-01","start_time":"19:51","title":"彩排","dur":"10分钟10秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":127,"source_text":"彩排 |   | 2025年08月01日 19:51 | 10分钟10秒 | 1 | 1 | 1 | 9分钟40秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-125","date":"2025-07-31","start_time":"19:55","title":"自学比补课强10倍","dur":"1小时59分钟48秒","views":"5451","peak":"177","hot":"192","gmv":"¥599","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":128,"source_text":"自学比补课强10倍 |   | 2025年07月31日 19:55 | 1小时59分钟48秒 | 5451 | 6440 | 177 | 2分钟12秒 | 14961 | 393 | 153 | 205 | 192 | 13 | 20 | ¥599 | 1 | 1","follows":"205","orders":"1","buyers":"1"},{"id":"csv-live-126","date":"2025-07-31","start_time":"19:20","title":"自学比补课强10倍","dur":"34分钟43秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":129,"source_text":"自学比补课强10倍 |   | 2025年07月31日 19:20 | 34分钟43秒 | 1 | 1 | 1 | 34分钟4秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-127","date":"2025-07-29","start_time":"20:11","title":"自学比补课强10倍","dur":"2小时16分钟8秒","views":"6873","peak":"270","hot":"375","gmv":"¥4492","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":130,"source_text":"自学比补课强10倍 |   | 2025年07月29日 20:11 | 2小时16分钟8秒 | 6873 | 8315 | 270 | 2分钟50秒 | 20692 | 812 | 320 | 326 | 375 | 22 | 23 | ¥4492 | 8 | 8","follows":"326","orders":"8","buyers":"8"},{"id":"csv-live-128","date":"2025-07-29","start_time":"19:44","title":"自学比补课强10倍","dur":"23分钟5秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":131,"source_text":"自学比补课强10倍 |   | 2025年07月29日 19:44 | 23分钟5秒 | 1 | 1 | 1 | 28分钟26秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-129","date":"2025-07-28","start_time":"20:12","title":"自学比补课强10倍","dur":"2小时26分钟22秒","views":"9387","peak":"366","hot":"181","gmv":"¥4291","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":132,"source_text":"自学比补课强10倍 |   | 2025年07月28日 20:12 | 2小时26分钟22秒 | 9387 | 11442 | 366 | 2分钟52秒 | 12800 | 805 | 381 | 470 | 181 | 14 | 15 | ¥4291 | 8 | 8","follows":"470","orders":"8","buyers":"8"},{"id":"csv-live-130","date":"2025-07-28","start_time":"19:37","title":"自学比补课强10倍","dur":"31分钟4秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":133,"source_text":"自学比补课强10倍 |   | 2025年07月28日 19:37 | 31分钟4秒 | 1 | 1 | 1 | 28分钟29秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-131","date":"2025-07-26","start_time":"20:08","title":"自学比补课强10倍","dur":"2小时1分钟14秒","views":"6142","peak":"275","hot":"243","gmv":"¥5085","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":134,"source_text":"自学比补课强10倍 |   | 2025年07月26日 20:08 | 2小时1分钟14秒 | 6142 | 7499 | 275 | 2分钟48秒 | 6336 | 536 | 183 | 247 | 243 | 14 | 15 | ¥5085 | 12 | 10","follows":"247","orders":"12","buyers":"10"},{"id":"csv-live-132","date":"2025-07-26","start_time":"15:38","title":"自学比补课强10倍 初高中家长必听","dur":"2小时6分钟23秒","views":"6258","peak":"228","hot":"185","gmv":"¥2592","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":135,"source_text":"自学比补课强10倍 初高中家长必听 |   | 2025年07月26日 15:38 | 2小时6分钟23秒 | 6258 | 7276 | 228 | 2分钟17秒 | 5598 | 429 | 150 | 229 | 185 | 9 | 9 | ¥2592 | 6 | 6","follows":"229","orders":"6","buyers":"6"},{"id":"csv-live-133","date":"2025-07-25","start_time":"20:09","title":"自学比补课强10倍","dur":"2小时19分钟57秒","views":"6086","peak":"178","hot":"263","gmv":"¥9372","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":136,"source_text":"自学比补课强10倍 |   | 2025年07月25日 20:09 | 2小时19分钟57秒 | 6086 | 7192 | 178 | 2分钟37秒 | 12020 | 617 | 174 | 245 | 263 | 17 | 17 | ¥9372 | 24 | 19","follows":"245","orders":"24","buyers":"19"},{"id":"csv-live-134","date":"2025-07-25","start_time":"19:24","title":"自学比补课强10倍","dur":"44分钟41秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":137,"source_text":"自学比补课强10倍 |   | 2025年07月25日 19:24 | 44分钟41秒 | 1 | 2 | 1 | 50分钟32秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-135","date":"2025-07-24","start_time":"20:04","title":"自学比补课强10倍","dur":"2小时5分钟20秒","views":"9140","peak":"324","hot":"437","gmv":"¥5880","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":138,"source_text":"自学比补课强10倍 |   | 2025年07月24日 20:04 | 2小时5分钟20秒 | 9140 | 10877 | 324 | 2分钟36秒 | 8870 | 840 | 331 | 468 | 437 | 28 | 33 | ¥5880 | 15 | 14","follows":"468","orders":"15","buyers":"14"},{"id":"csv-live-136","date":"2025-07-24","start_time":"18:29","title":"彩排","dur":"1小时34分钟19秒","views":"2","peak":"2","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":139,"source_text":"彩排 |   | 2025年07月24日 18:29 | 1小时34分钟19秒 | 2 | 3 | 2 | 50分钟6秒 | 0 | 2 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-137","date":"2025-07-22","start_time":"20:00","title":"自学比补课强10倍","dur":"2小时0分钟43秒","views":"7454","peak":"298","hot":"237","gmv":"¥3592","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":140,"source_text":"自学比补课强10倍 |   | 2025年07月22日 20:00 | 2小时0分钟43秒 | 7454 | 8923 | 298 | 2分钟28秒 | 8112 | 906 | 254 | 334 | 237 | 17 | 23 | ¥3592 | 8 | 8","follows":"334","orders":"8","buyers":"8"},{"id":"csv-live-138","date":"2025-07-22","start_time":"19:55","title":"自学比补课强10倍","dur":"1分钟59秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":141,"source_text":"自学比补课强10倍 |   | 2025年07月22日 19:55 | 1分钟59秒 | 1 | 1 | 1 | 2分钟8秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-139","date":"2025-07-21","start_time":"20:08","title":"自学比补课强10倍","dur":"1小时42分钟44秒","views":"9144","peak":"397","hot":"793","gmv":"¥11562","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":142,"source_text":"自学比补课强10倍 |   | 2025年07月21日 20:08 | 1小时42分钟44秒 | 9144 | 11121 | 397 | 2分钟25秒 | 13819 | 1198 | 353 | 503 | 793 | 54 | 56 | ¥11562 | 30 | 24","follows":"503","orders":"30","buyers":"24"},{"id":"csv-live-140","date":"2025-07-21","start_time":"19:40","title":"自学比补课强10倍","dur":"24分钟52秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":143,"source_text":"自学比补课强10倍 |   | 2025年07月21日 19:40 | 24分钟52秒 | 1 | 4 | 1 | 9分钟42秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-141","date":"2025-07-21","start_time":"18:48","title":"彩排","dur":"51分钟49秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":144,"source_text":"彩排 |   | 2025年07月21日 18:48 | 51分钟49秒 | 1 | 2 | 1 | 4分钟42秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-142","date":"2025-07-19","start_time":"20:03","title":"自学比补课强10倍","dur":"1小时52分钟40秒","views":"8593","peak":"333","hot":"338","gmv":"¥4187","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":145,"source_text":"自学比补课强10倍 |   | 2025年07月19日 20:03 | 1小时52分钟40秒 | 8593 | 10490 | 333 | 2分钟31秒 | 18563 | 888 | 355 | 407 | 338 | 23 | 28 | ¥4187 | 10 | 10","follows":"407","orders":"10","buyers":"10"},{"id":"csv-live-143","date":"2025-07-19","start_time":"17:18","title":"彩排","dur":"2小时45分钟0秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":146,"source_text":"彩排 |   | 2025年07月19日 17:18 | 2小时45分钟0秒 | 1 | 2 | 1 | 46分钟46秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-144","date":"2025-07-18","start_time":"20:00","title":"自学比补课强10倍","dur":"2小时0分钟22秒","views":"9329","peak":"373","hot":"300","gmv":"¥9869","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":147,"source_text":"自学比补课强10倍 |   | 2025年07月18日 20:00 | 2小时0分钟22秒 | 9329 | 11220 | 373 | 2分钟42秒 | 18191 | 977 | 392 | 507 | 300 | 22 | 22 | ¥9869 | 25 | 21","follows":"507","orders":"25","buyers":"21"},{"id":"csv-live-145","date":"2025-07-18","start_time":"19:41","title":"自学比补课强10倍","dur":"17分钟46秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":148,"source_text":"自学比补课强10倍 |   | 2025年07月18日 19:41 | 17分钟46秒 | 1 | 1 | 1 | 18分钟31秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-146","date":"2025-07-18","start_time":"18:47","title":"彩排","dur":"54分钟32秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":149,"source_text":"彩排 |   | 2025年07月18日 18:47 | 54分钟32秒 | 1 | 3 | 1 | 27分钟31秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-147","date":"2025-07-17","start_time":"19:30","title":"自学比补课强10倍","dur":"2小时0分钟20秒","views":"7003","peak":"269","hot":"483","gmv":"¥3593","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":150,"source_text":"自学比补课强10倍 |   | 2025年07月17日 19:30 | 2小时0分钟20秒 | 7003 | 8439 | 269 | 2分钟24秒 | 14995 | 724 | 290 | 362 | 483 | 29 | 29 | ¥3593 | 7 | 7","follows":"362","orders":"7","buyers":"7"},{"id":"csv-live-148","date":"2025-07-17","start_time":"18:10","title":"彩排","dur":"1小时20分钟16秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":151,"source_text":"彩排 |   | 2025年07月17日 18:10 | 1小时20分钟16秒 | 1 | 3 | 1 | 44分钟30秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-149","date":"2025-07-15","start_time":"20:31","title":"自学比补课强10倍 初高中家长必听","dur":"1小时58分钟54秒","views":"9966","peak":"383","hot":"336","gmv":"¥8083","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":152,"source_text":"自学比补课强10倍 初高中家长必听 |   | 2025年07月15日 20:31 | 1小时58分钟54秒 | 9966 | 11935 | 383 | 2分钟49秒 | 12726 | 959 | 424 | 500 | 336 | 24 | 27 | ¥8083 | 17 | 16","follows":"500","orders":"17","buyers":"16"},{"id":"csv-live-150","date":"2025-07-15","start_time":"20:25","title":"自学比补课强10倍 初高中家长必听","dur":"4分钟39秒","views":"2","peak":"2","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":153,"source_text":"自学比补课强10倍 初高中家长必听 |   | 2025年07月15日 20:25 | 4分钟39秒 | 2 | 2 | 2 | 1分钟23秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-151","date":"2025-07-14","start_time":"19:55","title":"自学比补课强10倍 初高中家长必听","dur":"2小时0分钟3秒","views":"12111","peak":"546","hot":"499","gmv":"¥8985","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":154,"source_text":"自学比补课强10倍 初高中家长必听 |   | 2025年07月14日 19:55 | 2小时0分钟3秒 | 12111 | 14541 | 546 | 2分钟40秒 | 14514 | 1255 | 609 | 806 | 499 | 33 | 36 | ¥8985 | 15 | 15","follows":"806","orders":"15","buyers":"15"},{"id":"csv-live-152","date":"2025-07-14","start_time":"19:34","title":"自学比补课强10倍 初高中家长必听","dur":"20分钟11秒","views":"3","peak":"3","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":155,"source_text":"自学比补课强10倍 初高中家长必听 |   | 2025年07月14日 19:34 | 20分钟11秒 | 3 | 3 | 3 | 8分钟54秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-153","date":"2025-07-12","start_time":"20:05","title":"自学比补课强10倍 初高中家长必听","dur":"2小时5分钟35秒","views":"6181","peak":"294","hot":"340","gmv":"¥3594","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":156,"source_text":"自学比补课强10倍 初高中家长必听 |   | 2025年07月12日 20:05 | 2小时5分钟35秒 | 6181 | 7329 | 294 | 2分钟32秒 | 14364 | 625 | 202 | 303 | 340 | 21 | 22 | ¥3594 | 6 | 6","follows":"303","orders":"6","buyers":"6"},{"id":"csv-live-154","date":"2025-07-12","start_time":"19:55","title":"自学比补课强10倍 初高中家长必听","dur":"9分钟4秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":157,"source_text":"自学比补课强10倍 初高中家长必听 |   | 2025年07月12日 19:55 | 9分钟4秒 | 1 | 1 | 1 | 4分钟27秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-155","date":"2025-07-11","start_time":"19:57","title":"自学比补课强10倍 初高中家长必听","dur":"2小时5分钟10秒","views":"7150","peak":"224","hot":"395","gmv":"¥4202.9","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":158,"source_text":"自学比补课强10倍 初高中家长必听 |   | 2025年07月11日 19:57 | 2小时5分钟10秒 | 7150 | 8507 | 224 | 2分钟11秒 | 15829 | 673 | 254 | 329 | 395 | 26 | 28 | ¥4202.9 | 8 | 8","follows":"329","orders":"8","buyers":"8"},{"id":"csv-live-156","date":"2025-07-11","start_time":"18:38","title":"彩排","dur":"1小时19分钟17秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":159,"source_text":"彩排 |   | 2025年07月11日 18:38 | 1小时19分钟17秒 | 1 | 2 | 1 | 40分钟57秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-157","date":"2025-07-10","start_time":"20:21","title":"初高中家长必听 自学比补课强10倍","dur":"1小时51分钟44秒","views":"5064","peak":"221","hot":"378","gmv":"¥4193","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":160,"source_text":"初高中家长必听 自学比补课强10倍 |   | 2025年07月10日 20:21 | 1小时51分钟44秒 | 5064 | 5996 | 221 | 2分钟4秒 | 12455 | 366 | 152 | 199 | 378 | 22 | 22 | ¥4193 | 7 | 7","follows":"199","orders":"7","buyers":"7"},{"id":"csv-live-158","date":"2025-07-10","start_time":"19:07","title":"测试","dur":"1小时11分钟17秒","views":"2","peak":"2","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":161,"source_text":"测试 |   | 2025年07月10日 19:07 | 1小时11分钟17秒 | 2 | 3 | 2 | 39分钟21秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-159","date":"2025-07-08","start_time":"20:12","title":"初高中家长必听 暑假自学方法","dur":"1小时37分钟28秒","views":"2259","peak":"90","hot":"44","gmv":"¥29.7","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":162,"source_text":"初高中家长必听 暑假自学方法 |   | 2025年07月08日 20:12 | 1小时37分钟28秒 | 2259 | 2667 | 90 | 2分钟12秒 | 8463 | 237 | 27 | 27 | 44 | 2 | 4 | ¥29.7 | 3 | 3","follows":"27","orders":"3","buyers":"3"},{"id":"csv-live-160","date":"2025-07-08","start_time":"19:38","title":"彩排","dur":"32分钟11秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":163,"source_text":"彩排 |   | 2025年07月08日 19:38 | 32分钟11秒 | 1 | 1 | 1 | 32分钟46秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-161","date":"2025-07-07","start_time":"20:16","title":"家长必听 初高中学习规划","dur":"1小时44分钟26秒","views":"2400","peak":"88","hot":"167","gmv":"¥657.4","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":164,"source_text":"家长必听 初高中学习规划 |   | 2025年07月07日 20:16 | 1小时44分钟26秒 | 2400 | 2786 | 88 | 2分钟3秒 | 5840 | 215 | 37 | 27 | 167 | 14 | 15 | ¥657.4 | 8 | 6","follows":"27","orders":"8","buyers":"6"},{"id":"csv-live-162","date":"2025-07-07","start_time":"20:04","title":"测试","dur":"10分钟36秒","views":"2","peak":"2","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":165,"source_text":"测试 |   | 2025年07月07日 20:04 | 10分钟36秒 | 2 | 4 | 2 | 6分钟20秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-163","date":"2025-07-05","start_time":"19:46","title":"初高中学习规划 家长必听","dur":"1小时43分钟52秒","views":"1758","peak":"71","hot":"130","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":166,"source_text":"初高中学习规划 家长必听 |   | 2025年07月05日 19:46 | 1小时43分钟52秒 | 1758 | 2033 | 71 | 2分钟25秒 | 3004 | 194 | 25 | 22 | 130 | 10 | 10 | ¥0 | 0 | 0","follows":"22","orders":"0","buyers":"0"},{"id":"csv-live-164","date":"2025-07-05","start_time":"19:36","title":"ceshi","dur":"9分钟13秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":167,"source_text":"ceshi |   | 2025年07月05日 19:36 | 9分钟13秒 | 1 | 1 | 1 | 8分钟52秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-165","date":"2025-07-04","start_time":"20:04","title":"初高中家长必听 暑假提分","dur":"1小时57分钟21秒","views":"1800","peak":"62","hot":"119","gmv":"¥1196","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":168,"source_text":"初高中家长必听 暑假提分 |   | 2025年07月04日 20:04 | 1小时57分钟21秒 | 1800 | 2087 | 62 | 2分钟30秒 | 8247 | 176 | 30 | 21 | 119 | 7 | 7 | ¥1196 | 4 | 4","follows":"21","orders":"4","buyers":"4"},{"id":"csv-live-166","date":"2025-07-04","start_time":"19:54","title":"测试","dur":"2分钟6秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":169,"source_text":"测试 |   | 2025年07月04日 19:54 | 2分钟6秒 | 1 | 1 | 1 | 1分钟58秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-167","date":"2025-07-04","start_time":"19:28","title":"彩排","dur":"8分钟16秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":170,"source_text":"彩排 |   | 2025年07月04日 19:28 | 8分钟16秒 | 1 | 1 | 1 | 7分钟5秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-168","date":"2025-07-03","start_time":"19:21","title":"初高中家长必听 学习方法规划","dur":"1小时51分钟15秒","views":"2124","peak":"79","hot":"160","gmv":"¥598","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":171,"source_text":"初高中家长必听 学习方法规划 |   | 2025年07月03日 19:21 | 1小时51分钟15秒 | 2124 | 2432 | 79 | 2分钟18秒 | 20063 | 170 | 21 | 15 | 160 | 10 | 11 | ¥598 | 2 | 1","follows":"15","orders":"2","buyers":"1"},{"id":"csv-live-169","date":"2025-07-03","start_time":"18:47","title":"彩排","dur":"34分钟14秒","views":"3","peak":"3","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":172,"source_text":"彩排 |   | 2025年07月03日 18:47 | 34分钟14秒 | 3 | 4 | 3 | 13分钟19秒 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-170","date":"2025-07-01","start_time":"22:17","title":"调整","dur":"28分钟46秒","views":"3","peak":"3","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":173,"source_text":"调整 |   | 2025年07月01日 22:17 | 28分钟46秒 | 3 | 5 | 3 | 25分钟45秒 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-171","date":"2025-07-01","start_time":"20:14","title":"初高中家长必听 学习方法规划","dur":"1小时27分钟41秒","views":"1665","peak":"56","hot":"202","gmv":"¥1196","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":174,"source_text":"初高中家长必听 学习方法规划 |   | 2025年07月01日 20:14 | 1小时27分钟41秒 | 1665 | 1833 | 56 | 1分钟46秒 | 1008 | 145 | 11 | 10 | 202 | 9 | 12 | ¥1196 | 4 | 2","follows":"10","orders":"4","buyers":"2"},{"id":"csv-live-172","date":"2025-07-01","start_time":"17:56","title":"彩排","dur":"2小时17分钟37秒","views":"2","peak":"2","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":175,"source_text":"彩排 |   | 2025年07月01日 17:56 | 2小时17分钟37秒 | 2 | 6 | 2 | 13分钟59秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-173","date":"2025-06-30","start_time":"20:11","title":"初高中家长都在听 初高学习方法","dur":"1小时59分钟14秒","views":"2169","peak":"89","hot":"171","gmv":"¥2691","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":176,"source_text":"初高中家长都在听 初高学习方法 |   | 2025年06月30日 20:11 | 1小时59分钟14秒 | 2169 | 2573 | 89 | 3分钟7秒 | 6723 | 267 | 42 | 47 | 171 | 9 | 11 | ¥2691 | 9 | 9","follows":"47","orders":"9","buyers":"9"},{"id":"csv-live-174","date":"2025-06-30","start_time":"19:56","title":"测","dur":"12分钟14秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":177,"source_text":"测 |   | 2025年06月30日 19:56 | 12分钟14秒 | 1 | 2 | 1 | 7分钟37秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-175","date":"2025-06-30","start_time":"18:03","title":"测试","dur":"1小时19分钟56秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":178,"source_text":"测试 |   | 2025年06月30日 18:03 | 1小时19分钟56秒 | 1 | 3 | 1 | 1小时45分钟20秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-176","date":"2025-06-28","start_time":"18:40","title":"初高中家长必听 暑假规划","dur":"1小时50分钟54秒","views":"1366","peak":"59","hot":"142","gmv":"¥299","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":179,"source_text":"初高中家长必听 暑假规划 |   | 2025年06月28日 18:40 | 1小时50分钟54秒 | 1366 | 1610 | 59 | 3分钟18秒 | 2957 | 111 | 22 | 25 | 142 | 8 | 9 | ¥299 | 1 | 1","follows":"25","orders":"1","buyers":"1"},{"id":"csv-live-177","date":"2025-06-28","start_time":"18:25","title":"测试","dur":"12分钟51秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":180,"source_text":"测试 |   | 2025年06月28日 18:25 | 12分钟51秒 | 1 | 1 | 1 | 7分钟51秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-178","date":"2025-06-27","start_time":"20:05","title":"初高中家长必听 暑假规划","dur":"1小时56分钟37秒","views":"2353","peak":"87","hot":"1308","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":181,"source_text":"初高中家长必听 暑假规划 |   | 2025年06月27日 20:05 | 1小时56分钟37秒 | 2353 | 2817 | 87 | 2分钟37秒 | 15022 | 141 | 54 | 48 | 1308 | 19 | 26 | ¥0 | 0 | 0","follows":"48","orders":"0","buyers":"0"},{"id":"csv-live-179","date":"2025-06-27","start_time":"19:56","title":"初高中家长必听 暑假规划方法","dur":"7分钟17秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":182,"source_text":"初高中家长必听 暑假规划方法 |   | 2025年06月27日 19:56 | 7分钟17秒 | 1 | 1 | 1 | 15分钟7秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-180","date":"2025-06-27","start_time":"18:28","title":"测","dur":"9分钟14秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":183,"source_text":"测 |   | 2025年06月27日 18:28 | 9分钟14秒 | 1 | 1 | 1 | 9分钟5秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-181","date":"2025-06-27","start_time":"18:03","title":"测试","dur":"23分钟32秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":184,"source_text":"测试 |   | 2025年06月27日 18:03 | 23分钟32秒 | 1 | 1 | 1 | 21分钟21秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-182","date":"2025-06-25","start_time":"20:25","title":"初高中家长必听 暑假规划方法","dur":"1小时23分钟53秒","views":"1410","peak":"49","hot":"103","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":185,"source_text":"初高中家长必听 暑假规划方法 |   | 2025年06月25日 20:25 | 1小时23分钟53秒 | 1410 | 1587 | 49 | 1分钟56秒 | 6433 | 122 | 9 | 11 | 103 | 7 | 7 | ¥0 | 0 | 0","follows":"11","orders":"0","buyers":"0"},{"id":"csv-live-183","date":"2025-06-25","start_time":"20:19","title":"ce","dur":"3分钟52秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":186,"source_text":"ce |   | 2025年06月25日 20:19 | 3分钟52秒 | 1 | 1 | 1 | 5分钟36秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-184","date":"2025-06-25","start_time":"20:11","title":"ceshi","dur":"6分钟59秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":187,"source_text":"ceshi |   | 2025年06月25日 20:11 | 6分钟59秒 | 1 | 1 | 1 | 7分钟43秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-185","date":"2025-06-25","start_time":"19:59","title":"初高中家长必听 清北学习方法","dur":"8分钟2秒","views":"2","peak":"2","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":188,"source_text":"初高中家长必听 清北学习方法 |   | 2025年06月25日 19:59 | 8分钟2秒 | 2 | 3 | 2 | 4分钟37秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-186","date":"2025-06-24","start_time":"18:03","title":"初高中家长必听 清北学习方法","dur":"1小时15分钟42秒","views":"1484","peak":"61","hot":"51","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":189,"source_text":"初高中家长必听 清北学习方法 |   | 2025年06月24日 18:03 | 1小时15分钟42秒 | 1484 | 1712 | 61 | 1分钟41秒 | 397 | 62 | 34 | 25 | 51 | 3 | 3 | ¥0 | 0 | 0","follows":"25","orders":"0","buyers":"0"},{"id":"csv-live-187","date":"2025-06-24","start_time":"17:58","title":"初高中家长必听 清北学习方法","dur":"3分钟52秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":190,"source_text":"初高中家长必听 清北学习方法 |   | 2025年06月24日 17:58 | 3分钟52秒 | 1 | 1 | 1 | 7分钟34秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-188","date":"2025-06-23","start_time":"20:22","title":"初高中家长必听 暑期规划","dur":"1小时28分钟57秒","views":"2036","peak":"74","hot":"312","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":191,"source_text":"初高中家长必听 暑期规划 |   | 2025年06月23日 20:22 | 1小时28分钟57秒 | 2036 | 2396 | 74 | 2分钟7秒 | 3421 | 167 | 39 | 41 | 312 | 19 | 22 | ¥0 | 0 | 0","follows":"41","orders":"0","buyers":"0"},{"id":"csv-live-189","date":"2025-06-23","start_time":"19:16","title":"粉丝团测试","dur":"1小时5分钟35秒","views":"3","peak":"2","hot":"21","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":192,"source_text":"粉丝团测试 |   | 2025年06月23日 19:16 | 1小时5分钟35秒 | 3 | 12 | 2 | 22分钟23秒 | 0 | 3 | 0 | 0 | 21 | 1 | 1 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-190","date":"2025-06-23","start_time":"17:40","title":"测试","dur":"32分钟59秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":193,"source_text":"测试 |   | 2025年06月23日 17:40 | 32分钟59秒 | 1 | 2 | 1 | 33分钟48秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-191","date":"2025-06-21","start_time":"20:08","title":"初高中家长必听 清北学习规划","dur":"1小时52分钟15秒","views":"1989","peak":"80","hot":"53","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":194,"source_text":"初高中家长必听 清北学习规划 |   | 2025年06月21日 20:08 | 1小时52分钟15秒 | 1989 | 2373 | 80 | 2分钟53秒 | 6678 | 283 | 29 | 34 | 53 | 4 | 5 | ¥0 | 0 | 0","follows":"34","orders":"0","buyers":"0"},{"id":"csv-live-192","date":"2025-06-21","start_time":"19:56","title":"ceshi","dur":"11分钟20秒","views":"3","peak":"2","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":195,"source_text":"ceshi |   | 2025年06月21日 19:56 | 11分钟20秒 | 3 | 3 | 2 | 6分钟56秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-193","date":"2025-06-20","start_time":"20:06","title":"小初高家长必听 清华学霸在线答疑","dur":"1小时20分钟25秒","views":"816","peak":"35","hot":"0","gmv":"¥9.9","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":196,"source_text":"小初高家长必听 清华学霸在线答疑 |   | 2025年06月20日 20:06 | 1小时20分钟25秒 | 816 | 948 | 35 | 2分钟15秒 | 2687 | 79 | 26 | 19 | 0 | 0 | 0 | ¥9.9 | 1 | 1","follows":"19","orders":"1","buyers":"1"},{"id":"csv-live-194","date":"2025-06-20","start_time":"19:07","title":"ceshi","dur":"57分钟1秒","views":"3","peak":"3","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":197,"source_text":"ceshi |   | 2025年06月20日 19:07 | 57分钟1秒 | 3 | 8 | 3 | 30分钟21秒 | 0 | 2 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-195","date":"2025-06-19","start_time":"20:06","title":"小初高家长必听  清华学霸在线答疑","dur":"1小时43分钟53秒","views":"1435","peak":"51","hot":"139","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":198,"source_text":"小初高家长必听  清华学霸在线答疑 |   | 2025年06月19日 20:06 | 1小时43分钟53秒 | 1435 | 1683 | 51 | 2分钟3秒 | 5519 | 117 | 11 | 28 | 139 | 5 | 9 | ¥0 | 0 | 0","follows":"28","orders":"0","buyers":"0"},{"id":"csv-live-196","date":"2025-06-19","start_time":"16:53","title":"测试","dur":"3小时12分钟34秒","views":"5","peak":"4","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":199,"source_text":"测试 |   | 2025年06月19日 16:53 | 3小时12分钟34秒 | 5 | 16 | 4 | 38分钟29秒 | 0 | 5 | 4 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-197","date":"2025-06-17","start_time":"19:54","title":"小初高家长必听 清华学霸在线答疑","dur":"1小时55分钟13秒","views":"1559","peak":"52","hot":"198","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":200,"source_text":"小初高家长必听 清华学霸在线答疑 |   | 2025年06月17日 19:54 | 1小时55分钟13秒 | 1559 | 1819 | 52 | 2分钟40秒 | 10702 | 188 | 32 | 29 | 198 | 4 | 6 | ¥0 | 0 | 0","follows":"29","orders":"0","buyers":"0"},{"id":"csv-live-198","date":"2025-06-17","start_time":"19:26","title":"测试","dur":"26分钟46秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":201,"source_text":"测试 |   | 2025年06月17日 19:26 | 26分钟46秒 | 1 | 2 | 1 | 28分钟10秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-199","date":"2025-06-14","start_time":"20:06","title":"小初高家长必听 清华学霸家庭教育","dur":"1小时34分钟16秒","views":"1366","peak":"47","hot":"182","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":202,"source_text":"小初高家长必听 清华学霸家庭教育 |   | 2025年06月14日 20:06 | 1小时34分钟16秒 | 1366 | 1570 | 47 | 2分钟5秒 | 2490 | 132 | 39 | 15 | 182 | 5 | 5 | ¥0 | 0 | 0","follows":"15","orders":"0","buyers":"0"},{"id":"csv-live-200","date":"2025-06-14","start_time":"20:05","title":"小初高家长必听 清华学霸家庭教育","dur":"7秒","views":"0","peak":"0","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":203,"source_text":"小初高家长必听 清华学霸家庭教育 |   | 2025年06月14日 20:05 | 7秒 | 0 | 0 | 0 | 0秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-201","date":"2025-06-14","start_time":"18:49","title":"测试2","dur":"1小时16分钟11秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":204,"source_text":"测试2 |   | 2025年06月14日 18:49 | 1小时16分钟11秒 | 1 | 1 | 1 | 1小时15分钟38秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-202","date":"2025-06-13","start_time":"19:55","title":"高认知家长必听 清华学霸访谈","dur":"1小时22分钟18秒","views":"964","peak":"41","hot":"51","gmv":"¥313.9","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":205,"source_text":"高认知家长必听 清华学霸访谈 |   | 2025年06月13日 19:55 | 1小时22分钟18秒 | 964 | 1135 | 41 | 2分钟19秒 | 486 | 46 | 17 | 9 | 51 | 2 | 2 | ¥313.9 | 4 | 3","follows":"9","orders":"4","buyers":"3"},{"id":"csv-live-203","date":"2025-06-13","start_time":"18:13","title":"测试2","dur":"1小时41分钟15秒","views":"2","peak":"2","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":206,"source_text":"测试2 |   | 2025年06月13日 18:13 | 1小时41分钟15秒 | 2 | 2 | 2 | 1小时2分钟32秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-204","date":"2025-06-13","start_time":"18:04","title":"测试","dur":"6分钟42秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":207,"source_text":"测试 |   | 2025年06月13日 18:04 | 6分钟42秒 | 1 | 1 | 1 | 7分钟54秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-205","date":"2025-06-12","start_time":"20:12","title":"清华学霸谈家庭教育","dur":"1小时25分钟23秒","views":"1377","peak":"63","hot":"129","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":208,"source_text":"清华学霸谈家庭教育 |   | 2025年06月12日 20:12 | 1小时25分钟23秒 | 1377 | 1581 | 63 | 2分钟30秒 | 1181 | 101 | 33 | 14 | 129 | 5 | 7 | ¥0 | 0 | 0","follows":"14","orders":"0","buyers":"0"},{"id":"csv-live-206","date":"2025-06-12","start_time":"17:58","title":"测试","dur":"2小时11分钟16秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":209,"source_text":"测试 |   | 2025年06月12日 17:58 | 2小时11分钟16秒 | 1 | 5 | 1 | 2小时6分钟58秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-207","date":"2025-06-11","start_time":"18:40","title":"测试","dur":"6分钟18秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":210,"source_text":"测试 |   | 2025年06月11日 18:40 | 6分钟18秒 | 1 | 1 | 1 | 7分钟2秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-208","date":"2025-06-09","start_time":"19:46","title":"高一高二家长必听 清北学霸面对面","dur":"1小时11分钟22秒","views":"896","peak":"37","hot":"33","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":211,"source_text":"高一高二家长必听 清北学霸面对面 |   | 2025年06月09日 19:46 | 1小时11分钟22秒 | 896 | 1045 | 37 | 1分钟59秒 | 2422 | 73 | 13 | 5 | 33 | 2 | 2 | ¥0 | 0 | 0","follows":"5","orders":"0","buyers":"0"},{"id":"csv-live-209","date":"2025-06-09","start_time":"19:39","title":"测试5","dur":"5分钟15秒","views":"2","peak":"2","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":212,"source_text":"测试5 |   | 2025年06月09日 19:39 | 5分钟15秒 | 2 | 2 | 2 | 4分钟22秒 | 0 | 2 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-210","date":"2025-06-09","start_time":"19:31","title":"测试3","dur":"57秒","views":"1","peak":"0","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":213,"source_text":"测试3 |   | 2025年06月09日 19:31 | 57秒 | 1 | 0 | 0 | 0秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-211","date":"2025-06-09","start_time":"19:27","title":"测试信号2","dur":"53秒","views":"1","peak":"0","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":214,"source_text":"测试信号2 |   | 2025年06月09日 19:27 | 53秒 | 1 | 1 | 0 | 27秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-212","date":"2025-06-09","start_time":"19:13","title":"高一高二家长必听 清北学霸面对面","dur":"5分钟19秒","views":"116","peak":"17","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":215,"source_text":"高一高二家长必听 清北学霸面对面 |   | 2025年06月09日 19:13 | 5分钟19秒 | 116 | 112 | 17 | 19秒 | 497 | 2 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-213","date":"2025-06-09","start_time":"19:12","title":"高一高二家长必听 清北学霸面对面","dur":"25秒","views":"0","peak":"0","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":216,"source_text":"高一高二家长必听 清北学霸面对面 |   | 2025年06月09日 19:12 | 25秒 | 0 | 0 | 0 | 0秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-214","date":"2025-06-09","start_time":"17:54","title":"6月8日开播测试","dur":"1小时16分钟28秒","views":"3","peak":"3","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":217,"source_text":"6月8日开播测试 |   | 2025年06月09日 17:54 | 1小时16分钟28秒 | 3 | 6 | 3 | 44分钟19秒 | 17 | 3 | 2 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-215","date":"2025-06-07","start_time":"20:02","title":"2025考情解析","dur":"1小时35分钟25秒","views":"1919","peak":"68","hot":"138","gmv":"¥691","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":218,"source_text":"2025考情解析 |   | 2025年06月07日 20:02 | 1小时35分钟25秒 | 1919 | 2281 | 68 | 2分钟15秒 | 2612 | 60 | 99 | 26 | 138 | 6 | 7 | ¥691 | 5 | 4","follows":"26","orders":"5","buyers":"4"},{"id":"csv-live-216","date":"2025-06-07","start_time":"19:38","title":"测试","dur":"22分钟17秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":219,"source_text":"测试 |   | 2025年06月07日 19:38 | 22分钟17秒 | 1 | 2 | 1 | 19分钟44秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-217","date":"2025-06-06","start_time":"20:50","title":"测试","dur":"43分钟35秒","views":"3","peak":"3","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":220,"source_text":"测试 |   | 2025年06月06日 20:50 | 43分钟35秒 | 3 | 6 | 3 | 20分钟32秒 | 0 | 0 | 3 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-218","date":"2025-06-06","start_time":"20:15","title":"初高中必听 备考冲刺","dur":"33分钟45秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":221,"source_text":"初高中必听 备考冲刺 |   | 2025年06月06日 20:15 | 33分钟45秒 | 1 | 3 | 1 | 24分钟15秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-219","date":"2025-06-05","start_time":"20:07","title":"初高中必听 备考冲刺","dur":"1小时16分钟15秒","views":"764","peak":"30","hot":"7","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":222,"source_text":"初高中必听 备考冲刺 |   | 2025年06月05日 20:07 | 1小时16分钟15秒 | 764 | 905 | 30 | 1分钟42秒 | 2328 | 57 | 9 | 8 | 7 | 1 | 1 | ¥0 | 0 | 0","follows":"8","orders":"0","buyers":"0"},{"id":"csv-live-220","date":"2025-06-04","start_time":"20:06","title":"初高中必听 考前冲刺","dur":"1小时42分钟1秒","views":"1013","peak":"36","hot":"5","gmv":"¥299","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":223,"source_text":"初高中必听 考前冲刺 |   | 2025年06月04日 20:06 | 1小时42分钟1秒 | 1013 | 1216 | 36 | 1分钟56秒 | 1120 | 60 | 8 | 14 | 5 | 1 | 3 | ¥299 | 1 | 1","follows":"14","orders":"1","buyers":"1"},{"id":"csv-live-221","date":"2025-06-03","start_time":"19:13","title":"备考冲刺 初高中妈妈必听（二）","dur":"59分钟17秒","views":"851","peak":"47","hot":"26","gmv":"¥299","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":224,"source_text":"备考冲刺 初高中妈妈必听（二） |   | 2025年06月03日 19:13 | 59分钟17秒 | 851 | 1006 | 47 | 2分钟5秒 | 3315 | 67 | 23 | 23 | 26 | 2 | 2 | ¥299 | 1 | 1","follows":"23","orders":"1","buyers":"1"},{"id":"csv-live-222","date":"2025-06-03","start_time":"17:29","title":"初高中提分秘诀 备考必听","dur":"49分钟22秒","views":"1049","peak":"55","hot":"0","gmv":"¥299","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":225,"source_text":"初高中提分秘诀 备考必听 |   | 2025年06月03日 17:29 | 49分钟22秒 | 1049 | 1191 | 55 | 1分钟13秒 | 69 | 58 | 13 | 23 | 0 | 0 | 0 | ¥299 | 1 | 1","follows":"23","orders":"1","buyers":"1"},{"id":"csv-live-223","date":"2025-06-02","start_time":"18:53","title":"清华学姐备考秘诀 初高中妈妈必听","dur":"2小时2分钟31秒","views":"1602","peak":"75","hot":"132","gmv":"¥598","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":226,"source_text":"清华学姐备考秘诀 初高中妈妈必听 |   | 2025年06月02日 18:53 | 2小时2分钟31秒 | 1602 | 1906 | 75 | 2分钟43秒 | 4092 | 78 | 37 | 22 | 132 | 5 | 6 | ¥598 | 2 | 2","follows":"22","orders":"2","buyers":"2"},{"id":"csv-live-224","date":"2025-06-01","start_time":"21:12","title":"初高中备考必听","dur":"41分钟31秒","views":"883","peak":"46","hot":"222","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":227,"source_text":"初高中备考必听 |   | 2025年06月01日 21:12 | 41分钟31秒 | 883 | 927 | 46 | 58秒 | 776 | 25 | 13 | 17 | 222 | 4 | 5 | ¥0 | 0 | 0","follows":"17","orders":"0","buyers":"0"},{"id":"csv-live-225","date":"2025-06-01","start_time":"18:35","title":"清华学姐备考秘诀 初高中冲刺必听","dur":"1小时58分钟0秒","views":"1302","peak":"67","hot":"227","gmv":"¥598","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":228,"source_text":"清华学姐备考秘诀 初高中冲刺必听 |   | 2025年06月01日 18:35 | 1小时58分钟0秒 | 1302 | 1580 | 67 | 2分钟58秒 | 950 | 100 | 17 | 19 | 227 | 3 | 3 | ¥598 | 2 | 2","follows":"19","orders":"2","buyers":"2"},{"id":"csv-live-226","date":"2025-05-31","start_time":"19:24","title":"语英提分 初高中家长必听","dur":"1小时23分钟12秒","views":"831","peak":"46","hot":"67","gmv":"¥598","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":229,"source_text":"语英提分 初高中家长必听 |   | 2025年05月31日 19:24 | 1小时23分钟12秒 | 831 | 1018 | 46 | 3分钟7秒 | 2957 | 77 | 20 | 5 | 67 | 3 | 3 | ¥598 | 2 | 2","follows":"5","orders":"2","buyers":"2"},{"id":"csv-live-227","date":"2025-05-30","start_time":"19:42","title":"数物考前冲刺 初高中家长必听","dur":"1小时9分钟3秒","views":"573","peak":"36","hot":"0","gmv":"¥598","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":230,"source_text":"数物考前冲刺 初高中家长必听 |   | 2025年05月30日 19:42 | 1小时9分钟3秒 | 573 | 703 | 36 | 2分钟25秒 | 1258 | 45 | 15 | 15 | 0 | 0 | 0 | ¥598 | 2 | 2","follows":"15","orders":"2","buyers":"2"},{"id":"csv-live-228","date":"2025-05-29","start_time":"19:48","title":"初高中家长必听 清北学霸面对面诊","dur":"1小时30分钟22秒","views":"777","peak":"35","hot":"37","gmv":"¥299","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":231,"source_text":"初高中家长必听 清北学霸面对面诊 |   | 2025年05月29日 19:48 | 1小时30分钟22秒 | 777 | 947 | 35 | 2分钟11秒 | 809 | 92 | 7 | 8 | 37 | 2 | 9 | ¥299 | 1 | 1","follows":"8","orders":"1","buyers":"1"},{"id":"csv-live-229","date":"2025-05-28","start_time":"18:58","title":"清北学霸一对一咨询 初高中家长必","dur":"1小时16分钟32秒","views":"555","peak":"36","hot":"0","gmv":"¥299","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":232,"source_text":"清北学霸一对一咨询 初高中家长必 |   | 2025年05月28日 18:58 | 1小时16分钟32秒 | 555 | 705 | 36 | 2分钟55秒 | 2191 | 75 | 24 | 4 | 0 | 0 | 0 | ¥299 | 1 | 1","follows":"4","orders":"1","buyers":"1"},{"id":"csv-live-230","date":"2025-05-28","start_time":"18:53","title":"清北学霸一对一诊断 家长必听","dur":"3分钟51秒","views":"2","peak":"2","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":233,"source_text":"清北学霸一对一诊断 家长必听 |   | 2025年05月28日 18:53 | 3分钟51秒 | 2 | 2 | 2 | 2分钟12秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-231","date":"2025-05-27","start_time":"18:48","title":"初高中家长必听 抓住提升机会","dur":"1小时7分钟29秒","views":"1171","peak":"49","hot":"221","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":234,"source_text":"初高中家长必听 抓住提升机会 |   | 2025年05月27日 18:48 | 1小时7分钟29秒 | 1171 | 1351 | 49 | 1分钟46秒 | 9316 | 33 | 19 | 20 | 221 | 4 | 4 | ¥0 | 0 | 0","follows":"20","orders":"0","buyers":"0"},{"id":"csv-live-232","date":"2025-05-27","start_time":"17:34","title":"彩排","dur":"1小时13分钟26秒","views":"2","peak":"2","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":235,"source_text":"彩排 |   | 2025年05月27日 17:34 | 1小时13分钟26秒 | 2 | 5 | 2 | 26分钟15秒 | 0 | 1 | 1 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-233","date":"2025-05-27","start_time":"11:13","title":"zi xu b","dur":"1小时10分钟55秒","views":"2","peak":"2","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":236,"source_text":"zi xu b |   | 2025年05月27日 11:13 | 1小时10分钟55秒 | 2 | 3 | 2 | 43分钟29秒 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-234","date":"2025-05-09","start_time":"19:59","title":"2025大考前家长必听的学习干货","dur":"1小时30分钟6秒","views":"928","peak":"61","hot":"0","gmv":"¥519.7","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":237,"source_text":"2025大考前家长必听的学习干货 |   | 2025年05月09日 19:59 | 1小时30分钟6秒 | 928 | 1136 | 61 | 4分钟4秒 | 4395 | 131 | 20 | 31 | 0 | 0 | 0 | ¥519.7 | 8 | 4","follows":"31","orders":"8","buyers":"4"},{"id":"csv-live-235","date":"2025-05-05","start_time":"20:22","title":"不补课提分 初高中家长必听","dur":"1小时35分钟7秒","views":"731","peak":"34","hot":"3","gmv":"¥107.9","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":238,"source_text":"不补课提分 初高中家长必听 |   | 2025年05月05日 20:22 | 1小时35分钟7秒 | 731 | 891 | 34 | 1分钟32秒 | 925 | 60 | 10 | 17 | 3 | 1 | 3 | ¥107.9 | 2 | 2","follows":"17","orders":"2","buyers":"2"},{"id":"csv-live-236","date":"2025-05-05","start_time":"18:06","title":"初高中不补课提分 家长必听","dur":"1小时55分钟31秒","views":"1386","peak":"51","hot":"0","gmv":"¥657.4","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":239,"source_text":"初高中不补课提分 家长必听 |   | 2025年05月05日 18:06 | 1小时55分钟31秒 | 1386 | 1688 | 51 | 2分钟49秒 | 9485 | 108 | 30 | 27 | 0 | 0 | 0 | ¥657.4 | 12 | 11","follows":"27","orders":"12","buyers":"11"},{"id":"csv-live-237","date":"2025-05-04","start_time":"20:04","title":"初高中学习 对症下药 在线答疑","dur":"1小时33分钟1秒","views":"698","peak":"35","hot":"3","gmv":"¥363.3","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":240,"source_text":"初高中学习 对症下药 在线答疑 |   | 2025年05月04日 20:04 | 1小时33分钟1秒 | 698 | 834 | 35 | 2分钟17秒 | 1724 | 54 | 13 | 11 | 3 | 1 | 1 | ¥363.3 | 10 | 9","follows":"11","orders":"10","buyers":"9"},{"id":"csv-live-238","date":"2025-05-04","start_time":"18:04","title":"初高中在线答疑 “对症下药”","dur":"1小时43分钟58秒","views":"1185","peak":"48","hot":"0","gmv":"¥725.7","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":241,"source_text":"初高中在线答疑 “对症下药” |   | 2025年05月04日 18:04 | 1小时43分钟58秒 | 1185 | 1451 | 48 | 2分钟20秒 | 4452 | 115 | 33 | 32 | 0 | 0 | 0 | ¥725.7 | 10 | 8","follows":"32","orders":"10","buyers":"8"},{"id":"csv-live-239","date":"2025-05-03","start_time":"20:14","title":"初高中学习 对症下药 在线答疑","dur":"1小时54分钟53秒","views":"1210","peak":"44","hot":"0","gmv":"¥961.2","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":242,"source_text":"初高中学习 对症下药 在线答疑 |   | 2025年05月03日 20:14 | 1小时54分钟53秒 | 1210 | 1487 | 44 | 2分钟46秒 | 1431 | 80 | 19 | 39 | 0 | 0 | 0 | ¥961.2 | 17 | 15","follows":"39","orders":"17","buyers":"15"},{"id":"csv-live-240","date":"2025-05-03","start_time":"18:33","title":"初高中学习 对症下药 在线答疑","dur":"1小时30分钟24秒","views":"1084","peak":"46","hot":"24","gmv":"¥245.5","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":243,"source_text":"初高中学习 对症下药 在线答疑 |   | 2025年05月03日 18:33 | 1小时30分钟24秒 | 1084 | 1295 | 46 | 2分钟0秒 | 1939 | 64 | 32 | 17 | 24 | 2 | 2 | ¥245.5 | 7 | 7","follows":"17","orders":"7","buyers":"7"},{"id":"csv-live-241","date":"2025-05-02","start_time":"20:08","title":"初高中学习 对症下药 在线答疑","dur":"1小时30分钟43秒","views":"1015","peak":"42","hot":"25","gmv":"¥715.7","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":244,"source_text":"初高中学习 对症下药 在线答疑 |   | 2025年05月02日 20:08 | 1小时30分钟43秒 | 1015 | 1221 | 42 | 2分钟5秒 | 1274 | 52 | 14 | 19 | 25 | 2 | 3 | ¥715.7 | 10 | 8","follows":"19","orders":"10","buyers":"8"},{"id":"csv-live-242","date":"2025-05-02","start_time":"18:05","title":"初高中学习 对症下药 在线答疑","dur":"1小时22分钟51秒","views":"980","peak":"46","hot":"0","gmv":"¥411.8","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":245,"source_text":"初高中学习 对症下药 在线答疑 |   | 2025年05月02日 18:05 | 1小时22分钟51秒 | 980 | 1176 | 46 | 2分钟10秒 | 1454 | 68 | 29 | 22 | 0 | 0 | 0 | ¥411.8 | 6 | 5","follows":"22","orders":"6","buyers":"5"},{"id":"csv-live-243","date":"2025-05-01","start_time":"18:35","title":"初高中学习“对症下药”，在线答疑","dur":"1小时23分钟22秒","views":"1125","peak":"55","hot":"21","gmv":"¥437.6","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":246,"source_text":"初高中学习“对症下药”，在线答疑 |   | 2025年05月01日 18:35 | 1小时23分钟22秒 | 1125 | 1409 | 55 | 2分钟31秒 | 3812 | 100 | 45 | 29 | 21 | 1 | 1 | ¥437.6 | 15 | 13","follows":"29","orders":"15","buyers":"13"},{"id":"csv-live-244","date":"2025-04-30","start_time":"18:16","title":"初高中在线答疑，“对症下药”","dur":"1小时55分钟22秒","views":"1467","peak":"61","hot":"53","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":247,"source_text":"初高中在线答疑，“对症下药” |   | 2025年04月30日 18:16 | 1小时55分钟22秒 | 1467 | 1781 | 61 | 3分钟3秒 | 6417 | 145 | 37 | 29 | 53 | 3 | 5 | ¥0 | 0 | 0","follows":"29","orders":"0","buyers":"0"},{"id":"csv-live-245","date":"2025-04-23","start_time":"18:51","title":"初高中家长必听 不补课提分分享","dur":"1小时49分钟21秒","views":"829","peak":"32","hot":"141","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":248,"source_text":"初高中家长必听 不补课提分分享 |   | 2025年04月23日 18:51 | 1小时49分钟21秒 | 829 | 1030 | 32 | 2分钟35秒 | 1519 | 104 | 12 | 11 | 141 | 2 | 3 | ¥0 | 0 | 0","follows":"11","orders":"0","buyers":"0"},{"id":"csv-live-246","date":"2025-04-23","start_time":"18:12","title":"123","dur":"10分钟25秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":249,"source_text":"123 |   | 2025年04月23日 18:12 | 10分钟25秒 | 1 | 1 | 1 | 11分钟10秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-247","date":"2025-04-22","start_time":"19:23","title":"初高中家长 考前必听 ","dur":"2小时0分钟29秒","views":"1088","peak":"43","hot":"66","gmv":"¥598","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":250,"source_text":"初高中家长 考前必听  |   | 2025年04月22日 19:23 | 2小时0分钟29秒 | 1088 | 1356 | 43 | 3分钟5秒 | 3851 | 163 | 24 | 17 | 66 | 3 | 3 | ¥598 | 2 | 1","follows":"17","orders":"2","buyers":"1"},{"id":"csv-live-248","date":"2025-04-22","start_time":"19:15","title":"初高中家长 考前必听 ","dur":"7分钟41秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":251,"source_text":"初高中家长 考前必听  |   | 2025年04月22日 19:15 | 7分钟41秒 | 1 | 2 | 1 | 6分钟17秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-249","date":"2025-04-22","start_time":"18:29","title":"初高中家长 考前必听 ","dur":"17分钟32秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":252,"source_text":"初高中家长 考前必听  |   | 2025年04月22日 18:29 | 17分钟32秒 | 1 | 3 | 1 | 12分钟15秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-250","date":"2025-04-20","start_time":"19:19","title":"初高中家长必听 不补课提分规划","dur":"1小时38分钟58秒","views":"1052","peak":"69","hot":"0","gmv":"¥318.9","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":253,"source_text":"初高中家长必听 不补课提分规划 |   | 2025年04月20日 19:19 | 1小时38分钟58秒 | 1052 | 1336 | 69 | 4分钟35秒 | 5115 | 189 | 29 | 18 | 0 | 0 | 0 | ¥318.9 | 2 | 2","follows":"18","orders":"2","buyers":"2"},{"id":"csv-live-251","date":"2025-04-12","start_time":"18:49","title":"初高中数物，听几分钟涨几分","dur":"2小时2分钟16秒","views":"1436","peak":"65","hot":"1264","gmv":"¥299","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":254,"source_text":"初高中数物，听几分钟涨几分 |   | 2025年04月12日 18:49 | 2小时2分钟16秒 | 1436 | 1826 | 65 | 3分钟53秒 | 12198 | 297 | 37 | 29 | 1264 | 4 | 5 | ¥299 | 1 | 1","follows":"29","orders":"1","buyers":"1"},{"id":"csv-live-252","date":"2025-04-11","start_time":"18:32","title":"初高中数、物学习方法，连麦答疑","dur":"3小时5分钟39秒","views":"1473","peak":"58","hot":"27","gmv":"¥299","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":255,"source_text":"初高中数、物学习方法，连麦答疑 |   | 2025年04月11日 18:32 | 3小时5分钟39秒 | 1473 | 1893 | 58 | 4分钟9秒 | 3549 | 275 | 32 | 33 | 27 | 3 | 6 | ¥299 | 1 | 1","follows":"33","orders":"1","buyers":"1"},{"id":"csv-live-253","date":"2025-04-10","start_time":"18:41","title":"初高中语、英学习方法，连麦答疑","dur":"2小时49分钟43秒","views":"1260","peak":"49","hot":"74","gmv":"¥338.8","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":256,"source_text":"初高中语、英学习方法，连麦答疑 |   | 2025年04月10日 18:41 | 2小时49分钟43秒 | 1260 | 1642 | 49 | 4分钟26秒 | 3742 | 146 | 19 | 25 | 74 | 5 | 6 | ¥338.8 | 3 | 3","follows":"25","orders":"3","buyers":"3"},{"id":"csv-live-254","date":"2025-04-08","start_time":"18:36","title":"初高中家长必听 高分冲刺秘籍","dur":"3小时20分钟2秒","views":"1180","peak":"60","hot":"260","gmv":"¥1813.9","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":257,"source_text":"初高中家长必听 高分冲刺秘籍 |   | 2025年04月08日 18:36 | 3小时20分钟2秒 | 1180 | 1648 | 60 | 6分钟21秒 | 18304 | 318 | 24 | 9 | 260 | 4 | 7 | ¥1813.9 | 7 | 4","follows":"9","orders":"7","buyers":"4"},{"id":"csv-live-255","date":"2025-04-06","start_time":"18:23","title":"语数英物 为家长免费连麦答疑","dur":"2小时29分钟16秒","views":"1493","peak":"71","hot":"52","gmv":"¥1853.7","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":258,"source_text":"语数英物 为家长免费连麦答疑 |   | 2025年04月06日 18:23 | 2小时29分钟16秒 | 1493 | 1957 | 71 | 4分钟45秒 | 11651 | 287 | 36 | 39 | 52 | 4 | 5 | ¥1853.7 | 9 | 6","follows":"39","orders":"9","buyers":"6"},{"id":"csv-live-256","date":"2025-04-06","start_time":"10:30","title":"语数英物 为家长免费连麦答疑","dur":"2小时25分钟12秒","views":"1349","peak":"57","hot":"191","gmv":"¥1235.8","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":259,"source_text":"语数英物 为家长免费连麦答疑 |   | 2025年04月06日 10:30 | 2小时25分钟12秒 | 1349 | 1804 | 57 | 4分钟31秒 | 2116 | 195 | 53 | 30 | 191 | 2 | 2 | ¥1235.8 | 6 | 5","follows":"30","orders":"6","buyers":"5"},{"id":"csv-live-257","date":"2025-04-04","start_time":"18:31","title":"期中关键时刻 家长必听","dur":"3小时21分钟53秒","views":"1758","peak":"76","hot":"82","gmv":"¥3966.6","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":260,"source_text":"期中关键时刻 家长必听 |   | 2025年04月04日 18:31 | 3小时21分钟53秒 | 1758 | 2454 | 76 | 5分钟18秒 | 14124 | 245 | 55 | 37 | 82 | 5 | 7 | ¥3966.6 | 17 | 13","follows":"37","orders":"17","buyers":"13"},{"id":"csv-live-258","date":"2025-04-03","start_time":"18:47","title":"不补课拿高分 学习分享","dur":"2小时56分钟47秒","views":"2155","peak":"98","hot":"432","gmv":"¥1554.7","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":261,"source_text":"不补课拿高分 学习分享 |   | 2025年04月03日 18:47 | 2小时56分钟47秒 | 2155 | 2862 | 98 | 5分钟1秒 | 18699 | 272 | 95 | 44 | 432 | 8 | 22 | ¥1554.7 | 8 | 5","follows":"44","orders":"8","buyers":"5"},{"id":"csv-live-259","date":"2025-04-02","start_time":"19:06","title":"初高中数物 酷状元秘籍，下周语英","dur":"2小时44分钟40秒","views":"1642","peak":"101","hot":"326","gmv":"¥99.5","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":262,"source_text":"初高中数物 酷状元秘籍，下周语英 |   | 2025年04月02日 19:06 | 2小时44分钟40秒 | 1642 | 2228 | 101 | 7分钟17秒 | 13698 | 415 | 82 | 42 | 326 | 7 | 10 | ¥99.5 | 5 | 4","follows":"42","orders":"5","buyers":"4"},{"id":"csv-live-260","date":"2025-04-01","start_time":"19:00","title":"初高中数物 酷状元秘籍 下周语英","dur":"2小时57分钟44秒","views":"1861","peak":"90","hot":"453","gmv":"¥1395","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":263,"source_text":"初高中数物 酷状元秘籍 下周语英 |   | 2025年04月01日 19:00 | 2小时57分钟44秒 | 1861 | 2479 | 90 | 6分钟3秒 | 7841 | 442 | 61 | 61 | 453 | 11 | 18 | ¥1395 | 14 | 10","follows":"61","orders":"14","buyers":"10"}]'),ra="https://northstar-copilot.com/api",Al="redcowork-replica-v2_token";function wd(){return localStorage.getItem(Al)||""}function lr(e){e?localStorage.setItem(Al,e):localStorage.removeItem(Al)}function oc(){const e=wd();return e?{Authorization:"Bearer "+e}:{}}async function Rn(e,t={}){var i,l,r;const n={...t,headers:{...oc(),...t.headers||{}}};let s;try{s=await fetch(ra+e,n)}catch(a){if(!["/cue/guest","/cue/intent"].includes(e))throw a;try{s=await fetch(ra+e,n)}catch{throw new Error("与本地服务的连接中断，请点击重新生成重试。问题和引用资料已保留。")}}if(!s.ok){const a=await s.json().catch(()=>({})),u=Array.isArray(a.detail)?a.detail.map(c=>{const h=Array.isArray(c.loc)?c.loc[c.loc.length-1]:"内容";return`${{title:"资料名称",text:"正文",source:"来源",url:"链接"}[h]||h}填写不完整`}).join("；"):"",p=new Error(typeof a.detail=="string"?a.detail:((i=a.detail)==null?void 0:i.message)||u||`接口 ${e} 返回 ${s.status}`);throw p.canContinue=((l=a.detail)==null?void 0:l.can_continue)===!0,p.code=(r=a.detail)==null?void 0:r.code,p}return s.json()}async function nn(e,t){return Rn(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})}async function lc(e){return Rn(e,{method:"DELETE"})}async function kd(){const e=await fetch("./data.json");if(!e.ok)throw new Error(`静态数据 data.json 返回 ${e.status}`);return e.json()}async function xd(){return{...await kd(),source:"static"}}async function Sd(e,t){const n=await nn("/auth/login",{username:e,password:t});return lr(n.token),n.user}async function $d(e,t,n){const s=await nn("/auth/register",{username:e,password:t,display_name:n});return lr(s.token),s.user}async function Cd(){try{await nn("/auth/logout",{})}catch{}lr("")}async function Td(){return null}async function Ad(e){try{return{ok:!0,script:(await nn("/scripts",e)).script}}catch(t){return{ok:!1,error:t.message}}}async function Ed(e){try{return{ok:!0,task:(await nn("/planning-tasks",e)).task}}catch(t){return{ok:!1,error:t.message}}}async function Dd(){try{return await Rn("/sync/status")}catch{return{login:{logged_in:!1},login_task:{running:!1}}}}async function Md(){try{return(await Rn("/channels")).channels||[]}catch{return[]}}async function Od(e,t="",n="wechat",s=""){return nn("/channels",{name:e,finder_uin:t,platform:n,profile:s})}async function Id(e){return lc("/channels/"+e)}async function Rd(){const e=await fetch("/api/sync/qrcode?ts="+Date.now(),{headers:oc()});if(!e.ok)throw new Error(`二维码返回 ${e.status}`);const t=await e.blob();return URL.createObjectURL(t)}const rc=()=>Rn("/knowledge"),Pd=e=>Rn("/knowledge/"+e),Ld=e=>nn("/knowledge/"+e+"/analyze",{}),Qo=e=>lc("/knowledge/"+e),Nd=(e,t)=>Rn("/knowledge/"+e,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),ac=e=>nn("/knowledge/text",e),Fd=e=>nn("/knowledge/spaces",e);async function zd(e){const t=new FormData;return t.append("file",e),Rn("/knowledge/upload",{method:"POST",body:t})}const aa=(e,t="",n=[],s={})=>nn("/cue",{question:e,context:t,history:n,...s}),Ud=()=>Rn("/cue/conversations"),jd=e=>Rn("/cue/conversations/"+e),Bd=e=>nn("/cue/conversations",e),Vd=()=>Rn("/cue/tasks"),Hd=e=>nn("/cue/tasks",e),Wd=e=>nn("/cue/artifacts",e),ua=(e,t="",n=[],s={})=>nn("/cue/guest",{question:e,context:t,history:n,...s}),qd=(e,t)=>nn("/cue/intent",{question:e,page:t}),Kd="https://caocp410jp.feishu.cn/docx/WoKwdMyBYoIQpqxQH32cUVqmnic",ca="https://caocp410jp.feishu.cn/docx/E6Vsd31qDoO9VXxAyQWcbFH8n4b",Gd="https://caocp410jp.feishu.cn/docx/OqMDd8DI0ouQdwxv5WlcWzqOnNg",Xd={dashboard:"经营看板",wiki:"知识库",scripts:"短视频脚本",planning:"内容排期","live-summary":"直播复盘","live-script":"直播脚本",bench:"对标账号","bench-compare":"竞品对比"},Yd={dashboard:"演示工作区 · 已载入历史资料与示例数据",wiki:"跨场景共享 · 分类 / 搜索 / 溯源 / AI 总结",scripts:"短视频脚本 · 持续沉淀",planning:"全量内容甘特 · 热点标注 · 下一步提醒","live-summary":"清华优优· 直播数据与画面复盘","live-script":"直播脚本模板",bench:"对标监控 + 爆款抓取","bench-compare":"账号、数据、内容与 AI 洞察（内容数据)"},go=["./assets/covers/qinghua-vlog.png","./assets/covers/xinhua-repost.png","./assets/covers/qinghua-effort.png","./assets/covers/pressure-3sentences.png","./assets/covers/english-140.png","./assets/covers/gaoyi-mistakes.png"],da={考清华是因为努力还是天赋:"./assets/covers/qinghua-effort.png",优优的学习方法被新华社转发:"./assets/covers/xinhua-repost.png","高中生压力大，送给他这3句话":"./assets/covers/pressure-3sentences.png",清华生活vlog:"./assets/covers/qinghua-vlog.png",英语上140:"./assets/covers/english-140.png",高一学生是怎样毁掉自己的:"./assets/covers/gaoyi-mistakes.png"},El=e=>{for(const t in da)if(e.includes(t))return da[t];return go[Math.abs([...e].reduce((t,n)=>t+n.charCodeAt(0),0))%go.length]},pa={汪舅舅:"./assets/bench/wangjiujiu.jpg",清华杨奇函语文说:"./assets/bench/yangqihan.jpg",杨奇函:"./assets/bench/yangqihan.jpg",学霸来了:"./assets/bench/xueba-laille.png",杨老师讲数学:"./assets/bench/yang-laoshi-math.png",清华爸带娃:"./assets/bench/qinghua-dad.png",高考冲刺日记:"./assets/bench/gaokao-diary.png"},el=e=>{for(const t in pa)if(e.includes(t))return pa[t];return null},Jd=e=>{const t=String(e||""),n=t.match(/(\d+)小时/),s=t.match(/(\d+)分钟/);return n?`${n[1]}h${s?s[1]:"0"}min`:s?`${s[1]}min`:t.match(/(\d+)秒/)?"<1min":t},Zd=[{t:"月考后，先抓住这 3 个失分点",dur:"00:60",like:"9,642",tag:"月考复盘",cover:"./assets/covers/pressure-3sentences.png"},{t:"家长如何看懂孩子的月考卷",dur:"00:50",like:"6,284",tag:"家长沟通",cover:"./assets/covers/qinghua-vlog.png"},{t:"期中前一周，复习节奏怎么排",dur:"00:45",like:"7,891",tag:"期中冲刺",cover:"./assets/covers/english-140.png"}],Qd=[{t:"新学期第一场·高中数学",d:"10-08",len:"60m",blocks:"开场互动(5m) → 暑期复盘(10m) → 新学期规划(20m) → Q&A(25m)"},{t:"高二数学答疑",d:"10-12",len:"60m",blocks:"痛点收集(5m) → 一轮复习节奏(20m) → 现场答疑(35m)"},{t:"暑假收心专场",d:"10-18",len:"48m",blocks:"互动开场(3m) → 收心方法(15m) → 家长答疑(30m)"},{t:"高一家长会·破冰",d:"10-23",len:"50m",blocks:"高一现状数据(10m) → 家长最关心的 3 件事(20m) → Q&A(20m)"},{t:"高三一轮启动·直播脚本",d:"10-29",len:"90m",blocks:"开场送福利(5m) → 一轮节奏(25m) → 高频考点串讲(30m) → 现场答疑(30m)"}];function e2(e,t,n,s,i){const l=(e.kpis||[]).map(I=>({...I,up:!!I.up,warm:!!I.warm})),r=(e.top_videos||[]).map(I=>({t:I.title,dur:I.dur,like:I.likes,tag:I.tag,cover:El(I.title)})),a=r.length?r:Zd,u=(e.gantt_weeks||[]).map(I=>({...I,cur:!!I.cur})),p=t.calendar||[],c=(s.benchmarks||[]).map(I=>({...I,update:I.updated,img:el(I.name)})),h=(s.virals||[]).map(I=>({t:I.t,from:I.src,like:I.likes,dur:I.dur,cover:el(I.src)||El(I.t)})),m=bd.map((I,ee)=>{var ie,Q;const te={...(n.sessions||[]).find(j=>j.date===I.date),...I};return{d:te.date,title:te.title,dur:Jd(te.dur),raw_duration:te.dur,view:te.views,id:te.id,start_time:te.start_time,peak:te.peak,hot:te.hot,gmv:te.gmv,status:te.status,source_text:te.source_text,source_page:te.source_page,source_uri:te.source_uri,visual:{thumb:((ie=te.visual)==null?void 0:ie.replay_image)||null,isDemoVisual:!1,demoTrendImage:null,shot:((Q=te.visual)==null?void 0:Q.dashboard_shot)||null,...te.visual||{},...te.date==="2025-11-15"?{trend_image:"./assets/live/1115/overview-chart.png",funnel:{flow:{title:"流量转化",overall:"0.29%",steps:[{label:"直播观看人数",value:"3,449",rate:"23.08%"},{label:"商品曝光人数",value:"796",rate:"13.07%"},{label:"商品点击人数",value:"104",rate:"12.50%"},{label:"创建订单数",value:"13",rate:"76.92%"},{label:"成交人数",value:"10",rate:""}]},product:{title:"商品转化",overall:"0.94%",steps:[{label:"商品曝光次数",value:"1,176",rate:"16.07%"},{label:"商品点击次数",value:"189",rate:"7.94%"},{label:"创建订单数",value:"15",rate:"73.33%"},{label:"成交订单数",value:"11",rate:""}]}},replay_frames:[{kind:"online_peak",label:"1 · 在线峰值 131人",url:"./assets/live/1115/peak-frame.png",topic:"中档题的重要性",quote:"不要跨阶段刷题",analysis:"高光话题：清晰的阶段判断与金句形成内容记忆点，建议保留并复用。"},{kind:"gmv_peak",label:"2 · 成交高峰 · 成交额破3000",url:"./assets/live/1115/sales-frame.png",topic:"与观众互动，自然塑品",analysis:"有效销售：互动承接学习需求，顺势介绍产品，建议沉淀为“回应观众 → 匹配需求 → 自然塑品”的 SOP。"},{kind:"audience_drop",label:"3 · 在线人数迅速下滑",url:"./assets/live/1115/drop-frame.png",topic:"计算问题，节奏拖沓",analysis:"风险点：建议及时改话题，或切换其他内容与互动拉回人数，缩短连续计算讲解。"}]}:{}}}}),C={};(n.notes||[]).forEach(I=>{C[I.date]={day:I.day,time:I.time,data:{cards:I.cards||[],remark:I.remark},script:I.script||[],visual:I.visual||{}}}),C["2025-11-15"]&&(C["2025-11-15"]={...C["2025-11-15"],data:{cards:[{k:"观看人数",v:"3,449",tip:"直播间累计观看"},{k:"峰值在线",v:"131",tip:"话题：中档题的重要性"},{k:"平均在线",v:"75",tip:"峰值后需及时换题"},{k:"成交金额",v:"¥3,729",tip:"11单 / 10位成交用户"}],remark:"峰值在线 131 人；计算问题段迅速掉人；成交额破 3000 的互动塑品段值得沉淀为 SOP。",highlight:"不要跨阶段刷题",aiAnalysis:"这句金句与“中档题的重要性”话题同时出现，在线峰值达到 131 人；建议保留为下次直播的高光话术。"},script:[{k:"高光话题",v:"中档题的重要性；金句“不要跨阶段刷题”，对应在线峰值 131 人。"},{k:"风险点",v:"计算问题段节奏拖沓，在线人数迅速下滑；建议改话题或切换到其他内容拉回人数。"},{k:"有效销售",v:"成交额破 3000 时与观众互动、自然塑品，形成 11 单 / 10 位成交；建议沉淀为销售 SOP。"},{k:"下次动作",v:"保留“中档题 → 金句 → 互动问答 → 自然塑品”链路，计算类内容拆成短段并设置换题节点。"}]});const O=(t.trunks||[]).map(I=>({key:I.key,name:I.name,desc:I.desc,group:I.grp})),E=(i.scripts||[]).map((I,ee)=>{const R=(I.src||"").replace(/^对标·/,"");return{id:I.id,t:I.t,from:I.src,dur:I.dur,tag:I.tag,cover:el(R)||go[ee%go.length]}});return{kpis:l,trend:e.trend||[],actions:e.actions||[],northstar:e.northstar||[],ganttWeeks:u,gantt:e.gantt||[],planningTasks:[...new Map([...e.planning_tasks||[],...Ri()].map(I=>[JSON.stringify([I.type,I.title,I.planned_at,I.notes||""]),I])).values()],portraits:e.portraits||[],videos:a,wikiTrunks:O,wikiFiles:t.files||[],calendar:p,hotspots:t.hotspots||[],liveSessions:m,liveNotes:C,liveScripts:n.scripts&&n.scripts.length?n.scripts:Qd,benchmarks:c,virals:h,scripts:E,library:i.library||[]}}const g=Rs({loading:!0,error:null,kpis:[],trend:[],actions:[],northstar:[],ganttWeeks:[],gantt:[],planningTasks:[],portraits:[],videos:[],wikiTrunks:[],wikiFiles:[],calendar:[],hotspots:[],liveSessions:[],liveNotes:{},liveScripts:[],benchCompare:null,benchmarks:[],virals:[],scripts:[],library:[],scriptContext:null,cueRequest:null,benchAnalysisContext:null,liveReviewContext:null,demoKnowledgeDocuments:[],wikiDocumentRequest:null,courseDocuments:[],businessDocuments:[],knowledgeSaveDraft:null,activeView:"dashboard",sidebarOpen:!1,copilotMobileOpen:!1,isMobile:!1,wikiTrunk:"all",wikiQuery:"",wikiSum:null,northStar:"fans",copilotOpen:!0,chat:[],authUser:null,loginOpen:!1,dataSource:"api",channels:[],channelsOpen:!1,syncAssistantOpen:!1,toasts:[],modal:null});async function t2(){const e=await Td();e&&(g.authUser=e,Fo())}function n2(e){g.authUser=e,g.loginOpen=!1,ki(!1),Fo()}function s2(){g.authUser=null,g.channels=[],ki(!1)}async function Fo(){if(!g.authUser){g.channels=[];return}g.channels=await Md()}function i2(){if(!g.authUser){g.loginOpen=!0,lt("请先登录再绑定视频号");return}g.channelsOpen=!0,Fo()}function oi(){g.channelsOpen=!1}async function o2(e,t,n="wechat",s=""){if(!e.trim()){lt("请填写账号名称");return}try{const i=await Od(e.trim(),t.trim(),n,s);return g.channels.push(i.channel||i),lt("已绑定「"+e.trim()+"」"),!0}catch(i){return lt("绑定失败："+(i.message||"请稍后重试")),!1}}async function l2(e){try{await Id(e),g.channels=g.channels.filter(t=>t.id!==e),lt("已解绑")}catch(t){lt("解绑失败："+(t.message||"请稍后重试"))}}const uc="redcowork-replica-v2_demo_planning_tasks";function Ri(){try{return JSON.parse(localStorage.getItem(uc)||"[]")}catch{return[]}}function zo(e){localStorage.setItem(uc,JSON.stringify(e))}async function Dl(e){const t=await Ed(e);if(t.ok)return g.planningTasks.push(t.task),lt("已加入内容排期"),t;const n={...e,id:"demo-local-"+Date.now(),source:"local-demo",status:"待准备",created_at:new Date().toISOString()};return g.planningTasks.push(n),zo([...Ri(),n]),lt("后端暂不可用，已保存到本地排期"),{ok:!0,task:n,local:!0}}const r2=768;function a2(){const e=window.matchMedia(`(max-width: ${r2}px)`),t=n=>{g.isMobile=n,n||(g.sidebarOpen=!1,g.copilotMobileOpen=!1)};t(e.matches),e.addEventListener?e.addEventListener("change",n=>t(n.matches)):(window.addEventListener("resize",()=>t(e.matches)),window.addEventListener("orientationchange",()=>t(e.matches)))}function fa(){g.sidebarOpen=!g.sidebarOpen}function Di(){g.sidebarOpen=!1}function va(){g.copilotMobileOpen=!g.copilotMobileOpen}function ha(){g.copilotMobileOpen=!1}function u2(e){rr(e),g.isMobile&&Di()}async function ki(e=!0){e&&(g.loading=!0),g.error=null;try{const{dashboard:t,wiki:n,live:s,bench:i,scripts:l,source:r}=await xd(),a=e2(t,n,s,i,l);Object.assign(g,a),g.dataSource=r||"api",g.wikiSum=null}catch(t){g.error=t.message}finally{g.loading=!1}}function lt(e){const t=Date.now()+Math.random();g.toasts.push({id:t,msg:e}),setTimeout(()=>{g.toasts=g.toasts.filter(n=>n.id!==t)},2200)}function Bs(){g.modal=null}function rr(e){g.activeView=e}function c2(e){const t="s"+Date.now();g.scripts.unshift({id:t,t:e.t,from:"对标·"+e.from,dur:e.dur,tag:"对标爆款",cover:e.cover||El(e.t)}),lt("已加入「短视频脚本」"),g.authUser&&Ad({t:e.t,src:"对标·"+e.from,dur:e.dur,tag:"对标爆款"}).then(n=>{if(n.ok&&n.script){const s=g.scripts.findIndex(i=>i.id===t);s>=0&&(g.scripts[s]={...g.scripts[s],id:n.script.id})}})}let Xi;function Ml(){return Xi||(Xi=fetch("https://northstar-copilot.com/product-courses/manifest.json").then(e=>{if(!e.ok)throw new Error("产品课程资料加载失败");return e.json()}).then(e=>(g.courseDocuments=e.documents||[],g.courseDocuments)).catch(e=>{throw Xi=null,e})),Xi}function tl(e){const t=g.planningTasks.find(i=>i.title===e.title&&i.planned_at===e.planned_at&&i.notes===e.notes);if(t)return{task:t,created:!1};const n={...e,id:"demo-local-"+Date.now(),source:"Cue",status:"待准备",created_at:new Date().toISOString()},s=[...Ri(),n];return zo(s),g.planningTasks.push(n),{task:n,created:!0}}let Yi;function Ol(){return Yi||(Yi=fetch("./business-data/manifest.json").then(e=>{if(!e.ok)throw new Error("经营数据加载失败");return e.json()}).then(e=>(g.businessDocuments=[yd,...e.documents||[]],g.businessDocuments)).catch(e=>{throw Yi=null,e})),Yi}function d2(e,t){const n=g.planningTasks.find(l=>l.id===e);n&&Object.assign(n,t);const s=Ri(),i=s.find(l=>l.id===e);i&&(Object.assign(i,t),zo(s))}function p2(e){const t=g.planningTasks.findIndex(n=>n.id===e);t>=0&&g.planningTasks.splice(t,1),zo(Ri().filter(n=>n.id!==e))}const f2={class:"side-nav"},v2=["onClick"],h2={key:0,class:"count"},m2={class:"side-foot"},g2={class:"ava"},_2={class:"u-info"},y2={class:"nm"},b2={class:"rl"},w2={__name:"Sidebar",setup(e){const t=[{key:"dashboard",label:"经营看板"},{key:"live-summary",label:"直播复盘",count:()=>g.liveSessions.length},{key:"wiki",label:"知识库",count:()=>g.wikiFiles.length},{key:"planning",label:"内容排期",count:()=>g.planningTasks.length},{key:"scripts",label:"短视频脚本",count:()=>g.scripts.length},{key:"live-script",label:"直播脚本",count:()=>g.liveScripts.length},{key:"bench",label:"对标账号",count:()=>g.benchmarks.length}],n=ce(()=>g.channels[0]||{name:"清华优优",login_state:"内容已加载",demo:!0}),s=ce(()=>n.value?n.value.name:"清华优优"),i=ce(()=>n.value.demo?"已预绑定 · 内容数据":"已绑定 · "+(n.value.login_state||"待扫码"));function l(a){u2(a),g.isMobile&&Di()}function r(){i2(),g.isMobile&&Di()}return(a,u)=>(d(),f("aside",{class:we(["sidebar",{open:se(g).sidebarOpen}])},[u[1]||(u[1]=o("div",{class:"side-brand"},[o("span",{class:"logo"},"小红书"),o("div",null,[o("div",{class:"nm"},"NorthStar"),o("div",{class:"sub"},"内容经营 · 灵感有方向")])],-1)),o("nav",f2,[(d(),f(X,null,le(t,p=>o("a",{key:p.key,class:we({active:se(g).activeView===p.key}),onClick:c=>l(p.key)},[Te(v(p.label)+" ",1),p.count?(d(),f("span",h2,v(p.count()),1)):V("",!0)],10,v2)),64))]),o("div",m2,[o("div",{class:"user clickable",onClick:r},[o("div",g2,v(s.value.slice(0,1)),1),o("div",_2,[o("div",y2,v(s.value),1),o("div",b2,v(i.value),1)]),u[0]||(u[0]=o("span",{class:"bind-ic"},"›",-1))])])],2))}},Il=["总结当前直播脚本的内容和节奏","优化当前直播脚本的开场与互动话术","把当前直播脚本的销售话术沉淀为 SOP","结合当前脚本生成下一场直播方案","把当前直播脚本加入下周二晚的直播排期"];function k2(e,t){var p,c;const n=Il.indexOf(e);if(n<0)return null;if(!((p=t==null?void 0:t.sections)!=null&&p.length))return{text:"请先选择一份直播脚本，我会根据选中的正文整理答案。",sources:[],steps:[{name:"检查当前脚本",status:"done",detail:"尚未选择稿件，没有套用其他主题。"}]};const s=t.t||t.title,i=t.sections,l=i.map(([h,m])=>`## ${h}
${m}`).join(`

`),r={number:1,title:s,locator:"当前选中直播脚本 · 全文",text:l};let a,u;if(n===0&&(a=`**《${s}》的内容与节奏**

目标：${t.goal||"围绕当前主题展开讲解与答疑。"}

`+i.map(([h,m])=>`### ${h}
${m.slice(0,240)}${m.length>240?"…":""}`).join(`

`)+`

**节奏建议**：开场先收集问题；方法讲解后插入一次理解检查；答疑围绕本场目标；收尾只留一个能立即执行的动作。以上调整为建议，原稿依据见 [1]。`),n===1){const h=`口播：“今晚我们围绕《${s}》解决一个具体问题。你现在最想解决的卡点是什么？请在评论里写下当前阶段，以及卡在什么步骤。”
互动：先读取两条真实评论，把共性问题写在白板上；不预设观众已经留言。
承诺：“今天先把一个方法讲清楚，结束时带走一个可以执行的动作。”`,m=i.map(([C,O],E)=>[C,E===0?h:O+`
【新增互动建议】讲解后暂停提问：“刚才哪一步最难理解？请说具体步骤。”收到评论后再示范，不代替观众编写反馈。`]);a=`**《${s}》开场与互动优化稿**

保留原稿目标：${t.goal||s}。[1]

`+m.map(([C,O])=>`## ${C}
${O}`).join(`

`)+`

**修改理由**
1. 开场用具体卡点收集替代泛泛寒暄。
2. 讲解之间增加理解检查，让评论与当前方法关联。
3. 保留原主题和原有教学方法，不替换成其他脚本。新增话术属于优化建议。`,u={title:s+" · 开场互动优化稿",content:a,type:"live"}}if(n===2){const h=i.filter(([,m])=>/课程|购买|价格|优惠|销售|福利/.test(m));a=`**《${s}》销售承接 SOP**

`+(h.length?`原稿相关片段：[1]

`+h.map(([m,C])=>`### ${m}
${C}`).join(`

`):"原稿没有明确的销售段落，因此以下是可补充的承接建议，不冒充已有话术。[1]")+`

**建议执行流程**
1. 先完成本场方法演示，询问观众还有哪个具体困难。
2. 仅对与课程适配的需求介绍课程；说明目标人群与内容，不承诺成绩或收益。
3. 价格、服务与优惠以实际产品资料为准，资料缺失时先核对。
4. 对真实问题答疑，不制造观众反馈或稀缺名额。
5. 收尾给出学习行动和课程查看方式；直播后记录承接节点与实际表现，作为下一场复盘依据。`,u={title:s+" · 销售承接SOP",content:a,type:"document"}}return n===3&&(a=`**下一场直播方案：${s} · 跟进与答疑**

目标：围绕本场目标复查执行情况，再解决一个高频卡点。原稿目标：${t.goal||s}。[1]

**0–5分钟｜收集进展**
口播：“上次的行动你做到哪一步？请告诉我一个已经解决的问题和一个仍卡住的问题。”
没有上场反馈时，用本场问题收集替代，不编造进展。

**5–15分钟｜回顾原方法**
复用原稿的核心讲解：
`+(((c=i[1])==null?void 0:c[1])||i[0][1])+`

**15–35分钟｜方法应用与示范**
选择实际收集到的一个问题，按原稿方法演示；每一步说明理由，再请观众尝试。教学案例与答案需提前核对。

**35–55分钟｜分组答疑**
按观众阶段和卡点分类，每类处理一个问题；其余记录到下次选题。

**55–60分钟｜收尾行动**
给出一个当天能完成的动作，并记录下一场需要验证的留存、互动与内容反馈。

以上是基于当前稿件整理的下一场建议，不代表已经发布或执行。`,u={title:s+" · 下一场跟进方案",content:a,type:"live"}),n===4?{schedule:!0,title:s,content:l,source:r}:{text:a,draft:u,sources:[r],routeLabel:n===0?"直播脚本总结":"直播脚本内容整理",artifacts:u?[{type:"script",label:n===2?"查看完整 SOP":"查看完整直播脚本"},{type:"document",label:"加入知识库"}]:[{type:"document",label:"加入知识库"}],steps:[{name:"定位当前直播稿件",status:"done",detail:s},{name:"读取正文与阶段安排",status:"done",detail:`读取 ${i.length} 个环节，使用当前稿件，排除旧短视频上下文。`},{name:"整理本场结果",status:"done",execution:"依据当前正文与已准备模板 · 未调用模型",detail:"区分原稿和新增建议，保留引用。"}]}}const Dt=(e,t)=>{const n=e.__vccOpts||e;for(const[s,i]of t)n[s]=i;return n},x2={key:0,class:"follower-trend"},S2=["aria-label"],$2=["points"],C2=["cx","cy"],T2=["x","y"],A2=["x"],E2={__name:"FollowerTrend",props:{chart:Object},setup(e){const t=e,n=ce(()=>{var i;return(((i=t.chart)==null?void 0:i.points)||[]).filter(l=>Number.isFinite(l.value))}),s=ce(()=>{const i=n.value.map(u=>u.value),l=Math.min(...i),r=Math.max(...i),a=Math.max(1,r-l);return n.value.map((u,p)=>({...u,x:55+p*450/Math.max(1,n.value.length-1),y:165-(u.value-l)*110/a}))});return(i,l)=>n.value.length>1?(d(),f("figure",x2,[o("figcaption",null,v(e.chart.title),1),(d(),f("svg",{viewBox:"0 0 560 210",role:"img","aria-label":e.chart.title},[l[0]||(l[0]=o("path",{d:"M55 40V170H510",fill:"none",stroke:"#dbcdd0"},null,-1)),o("polyline",{points:s.value.map(r=>`${r.x},${r.y}`).join(" "),fill:"none",stroke:"#BD2450","stroke-width":"3"},null,8,$2),(d(!0),f(X,null,le(s.value,r=>(d(),f("g",{key:r.label},[o("circle",{cx:r.x,cy:r.y,r:"4",fill:"#BD2450"},null,8,C2),o("text",{x:r.x,y:r.y-12,"text-anchor":"middle","font-size":"12",fill:"#3b2027"},v(r.value.toLocaleString()),9,T2),o("text",{x:r.x,y:"193","text-anchor":"middle","font-size":"12",fill:"#67756b"},v(r.label),9,A2)]))),128))],8,S2)),l[1]||(l[1]=o("small",null,"纵轴按本期数据范围展示；具体数值与统计口径见下表。",-1))])):V("",!0)}},D2=Dt(E2,[["__scopeId","data-v-4a664160"]]),M2=[{match:/压力|3\s*句话/,reason:"把月考错题内容改回压力与亲子沟通主题，以三句可直接使用的话承接标题。",hook:"孩子说“我撑不住了”，先别急着说“谁不累”。这三句话，比催他努力更有用。",scene:"很多孩子不是不想学习，而是暂时不知道怎么面对压力。你一开口讲道理，他就觉得自己的难受又被忽略了。",points:["第一句：“我看到你最近很累，你愿意告诉我哪件事最难吗？”先听完，不打断。","第二句：“这次的结果不等于你这个人，我们一起找一个能改的地方。”把成绩和自我评价分开。","第三句：“今晚不用把所有事解决，你选一件，我陪你从这里开始。”让孩子保留选择。"],end:"今晚先用第一句，认真听他回答。如果压力持续影响睡眠、饮食或上学，及时寻求学校和专业人员的支持。",shots:["正面近景，语速放慢，字幕突出“先听完”。","亲子并坐，镜头停留在倾听动作。","三句逐条上屏，每句留一秒阅读。","回到近景，以陪伴动作结束。"]},{match:/vlog|清华生活/i,reason:"用校园生活的具体镜头串联故事，删除与主题无关的月考复盘话术；不虚构地点与经历。",hook:"清华的一天，除了上课，还有哪些普通又值得记录的瞬间？今天跟着这几个镜头看看。",scene:"从早晨出门的脚步、课堂笔记，到午饭后的短暂休息。镜头里不只有忙，也有生活的节奏。",points:["第一段：保留一个真实的早晨镜头，字幕标注拍摄地点和时间，未核实的信息先不写。","第二段：用图书馆或课堂素材呈现学习状态，以环境声衔接，不编造课程和个人身份。","第三段：选一段散步、用餐或与同学相处的画面，用一句感受连接学习与生活。"],end:"你最想看校园里的哪一个角落？留言告诉我，下一次从那里开始。",shots:["校园或出门广角，环境声先入。","脚步、笔记与餐盘三组特写。","学习镜头与生活镜头交替，保留自然停顿。","用傍晚或离开的镜头收尾。"]},{match:/英语|140/,reason:"围绕英语学习路径展开，以诊断、词汇迁移和错因复盘替换泛化的期中计划，不承诺固定分数。",hook:"英语想冲更高分，先别只加大背单词量。你丢分的地方，决定下一步练什么。",scene:"有人单词认识，整句却读不懂；有人阅读不错，写作总重复同一种句型。问题不同，训练不能一样。",points:["第一步：拿最近一份卷子，把失分分成词义与语境、句子结构、题目判断和表达四类。","第二步：词汇放进例句里回忆，阅读每次解释一道错题的依据；不要只记选项。","第三步：写作改一段，把重复词、句子衔接和语法错误逐项修正，隔天脱稿再写一次。"],end:"今天先找到占比最高的一类失分，再安排一组针对性练习。评论区说说你最卡在哪一项。",shots:["近景展示试卷，不突出未经核实的高分成绩。","阅读原句与写作片段分别给特写。","分类表、例句与段落修改依次上屏。","用当天练习清单收尾。"]},{match:/高一|毁掉/,reason:"用高一学习习惯的具体问题替换家长月考模板，避免将一次成绩波动描述成不可逆失败。",hook:"高一最容易拖慢自己的三个习惯，往往看起来像“我已经很努力了”。",scene:"熬到深夜抄完作业，第二天听课跟不上；遇到不会的题马上看答案；计划列得满满的，却没有回看完成质量。",points:["第一个习惯：用熬夜补白天效率。先安排最重要的任务和合理休息，不把晚睡当努力的证明。","第二个习惯：看懂答案就算会。合上解析，独立写出第一步，再检查卡在哪里。","第三个习惯：只追进度不反馈。每天记一个解决的问题和一个待问问题，第二天带去课堂。"],end:"今晚先改一个习惯，不用同时改变所有事情。收藏这条，一周后看看哪一项变得更顺了。",shots:["近景说出“三个习惯”，字幕逐项出现。","夜间作业、看解析和计划本的细节。","独立落笔、提问便签和反馈清单。","一个习惯打勾，回到正面镜头。"]}];function O2(e){const t=M2.find(i=>i.match.test(e.title));if(!t)return null;const n=[["0–3 秒｜钩子",t.hook],["3–12 秒｜场景",t.scene],["12–50 秒｜主体",t.points.join(`
`)],["50–60 秒｜行动",t.end]],s="《"+e.title+`》优化稿

修改理由：`+t.reason+`

`+n.map((i,l)=>"【"+i[0]+`】
口播：`+i[1]+`
画面：`+t.shots[l]).join(`

`)+`

拍摄检查：口播按实际试读时长调整；字幕保留关键词，避免整段遮挡画面。`;return{text:s,draft:{title:e.title+" · 优化稿",content:s},artifacts:[{type:"script",label:"查看优化稿并加入知识库"}],routeLabel:"当前脚本优化",sources:[{title:e.title,locator:"当前打开的脚本",text:"基于当前标题与可见脚本编辑；优化稿为创作内容。"}],steps:[{name:"意图路由",status:"done",execution:"实际执行",detail:"当前脚本优化"},{name:"读取当前脚本",status:"done",execution:"实际执行",detail:JSON.stringify(e)},{name:"匹配主题编辑稿",status:"done",execution:"预设编辑稿 · 未调用 HY3",detail:t.reason}],traceMode:"脚本编辑流程"}}const I2="modulepreload",R2=function(e,t){return new URL(e,t).href},ma={},ga=function(t,n,s){let i=Promise.resolve();if(n&&n.length>0){let r=function(c){return Promise.all(c.map(h=>Promise.resolve(h).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};const a=document.getElementsByTagName("link"),u=document.querySelector("meta[property=csp-nonce]"),p=(u==null?void 0:u.nonce)||(u==null?void 0:u.getAttribute("nonce"));i=r(n.map(c=>{if(c=R2(c,s),c in ma)return;ma[c]=!0;const h=c.endsWith(".css"),m=h?'[rel="stylesheet"]':"";if(!!s)for(let E=a.length-1;E>=0;E--){const I=a[E];if(I.href===c&&(!h||I.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${m}`))return;const O=document.createElement("link");if(O.rel=h?"stylesheet":I2,h||(O.as="script"),O.crossOrigin="",O.href=c,p&&O.setAttribute("nonce",p),document.head.appendChild(O),h)return new Promise((E,I)=>{O.addEventListener("load",E),O.addEventListener("error",()=>I(new Error(`Unable to preload CSS for ${c}`)))})}))}function l(r){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=r,window.dispatchEvent(a),!a.defaultPrevented)throw r}return i.then(r=>{for(const a of r||[])a.status==="rejected"&&l(a.reason);return t().catch(l)})};var vn=Uint8Array,qs=Uint16Array,P2=Int32Array,cc=new vn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),dc=new vn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),L2=new vn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),pc=function(e,t){for(var n=new qs(31),s=0;s<31;++s)n[s]=t+=1<<e[s-1];for(var i=new P2(n[30]),s=1;s<30;++s)for(var l=n[s];l<n[s+1];++l)i[l]=l-n[s]<<5|s;return{b:n,r:i}},fc=pc(cc,2),vc=fc.b,N2=fc.r;vc[28]=258,N2[258]=28;var F2=pc(dc,0),z2=F2.b,Rl=new qs(32768);for(var ht=0;ht<32768;++ht){var cs=(ht&43690)>>1|(ht&21845)<<1;cs=(cs&52428)>>2|(cs&13107)<<2,cs=(cs&61680)>>4|(cs&3855)<<4,Rl[ht]=((cs&65280)>>8|(cs&255)<<8)>>1}var xi=(function(e,t,n){for(var s=e.length,i=0,l=new qs(t);i<s;++i)e[i]&&++l[e[i]-1];var r=new qs(t);for(i=1;i<t;++i)r[i]=r[i-1]+l[i-1]<<1;var a;if(n){a=new qs(1<<t);var u=15-t;for(i=0;i<s;++i)if(e[i])for(var p=i<<4|e[i],c=t-e[i],h=r[e[i]-1]++<<c,m=h|(1<<c)-1;h<=m;++h)a[Rl[h]>>u]=p}else for(a=new qs(s),i=0;i<s;++i)e[i]&&(a[i]=Rl[r[e[i]-1]++]>>15-e[i]);return a}),Pi=new vn(288);for(var ht=0;ht<144;++ht)Pi[ht]=8;for(var ht=144;ht<256;++ht)Pi[ht]=9;for(var ht=256;ht<280;++ht)Pi[ht]=7;for(var ht=280;ht<288;++ht)Pi[ht]=8;var hc=new vn(32);for(var ht=0;ht<32;++ht)hc[ht]=5;var U2=xi(Pi,9,1),j2=xi(hc,5,1),nl=function(e){for(var t=e[0],n=1;n<e.length;++n)e[n]>t&&(t=e[n]);return t},Cn=function(e,t,n){var s=t/8|0;return(e[s]|e[s+1]<<8)>>(t&7)&n},sl=function(e,t){var n=t/8|0;return(e[n]|e[n+1]<<8|e[n+2]<<16)>>(t&7)},B2=function(e){return(e+7)/8|0},ar=function(e,t,n){return(t==null||t<0)&&(t=0),(n==null||n>e.length)&&(n=e.length),new vn(e.subarray(t,n))},V2=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],fn=function(e,t,n){var s=new Error(t||V2[e]);if(s.code=e,Error.captureStackTrace&&Error.captureStackTrace(s,fn),!n)throw s;return s},H2=function(e,t,n,s){var i=e.length,l=s?s.length:0;if(!i||t.f&&!t.l)return n||new vn(0);var r=!n,a=r||t.i!=2,u=t.i;r&&(n=new vn(i*3));var p=function(Ue){var x=n.length;if(Ue>x){var y=new vn(Math.max(x*2,Ue));y.set(n),n=y}},c=t.f||0,h=t.p||0,m=t.b||0,C=t.l,O=t.d,E=t.m,I=t.n,ee=i*8;do{if(!C){c=Cn(e,h,1);var R=Cn(e,h+1,3);if(h+=3,R)if(R==1)C=U2,O=j2,E=9,I=5;else if(R==2){var j=Cn(e,h,31)+257,D=Cn(e,h+10,15)+4,F=j+Cn(e,h+5,31)+1;h+=14;for(var G=new vn(F),H=new vn(19),q=0;q<D;++q)H[L2[q]]=Cn(e,h+q*3,7);h+=D*3;for(var me=nl(H),Se=(1<<me)-1,et=xi(H,me,1),q=0;q<F;){var Je=et[Cn(e,h,Se)];h+=Je&15;var te=Je>>4;if(te<16)G[q++]=te;else{var ke=0,Ae=0;for(te==16?(Ae=3+Cn(e,h,3),h+=2,ke=G[q-1]):te==17?(Ae=3+Cn(e,h,7),h+=3):te==18&&(Ae=11+Cn(e,h,127),h+=7);Ae--;)G[q++]=ke}}var Ee=G.subarray(0,j),We=G.subarray(j);E=nl(Ee),I=nl(We),C=xi(Ee,E,1),O=xi(We,I,1)}else fn(1);else{var te=B2(h)+4,ie=e[te-4]|e[te-3]<<8,Q=te+ie;if(Q>i){u&&fn(0);break}a&&p(m+ie),n.set(e.subarray(te,Q),m),t.b=m+=ie,t.p=h=Q*8,t.f=c;continue}if(h>ee){u&&fn(0);break}}a&&p(m+131072);for(var Ct=(1<<E)-1,bt=(1<<I)-1,qe=h;;qe=h){var ke=C[sl(e,h)&Ct],Tt=ke>>4;if(h+=ke&15,h>ee){u&&fn(0);break}if(ke||fn(2),Tt<256)n[m++]=Tt;else if(Tt==256){qe=h,C=null;break}else{var ze=Tt-254;if(Tt>264){var q=Tt-257,Mt=cc[q];ze=Cn(e,h,(1<<Mt)-1)+vc[q],h+=Mt}var mt=O[sl(e,h)&bt],wt=mt>>4;mt||fn(3),h+=mt&15;var We=z2[wt];if(wt>3){var Mt=dc[wt];We+=sl(e,h)&(1<<Mt)-1,h+=Mt}if(h>ee){u&&fn(0);break}a&&p(m+131072);var Z=m+ze;if(m<We){var B=l-We,ge=Math.min(We,Z);for(B+m<0&&fn(3);m<ge;++m)n[m]=s[B+m]}for(;m<Z;++m)n[m]=n[m-We]}}t.l=C,t.p=qe,t.b=m,t.f=c,C&&(c=1,t.m=E,t.d=O,t.n=I)}while(!c);return m!=n.length&&r?ar(n,0,m):n.subarray(0,m)},W2=new vn(0),Vn=function(e,t){return e[t]|e[t+1]<<8},kn=function(e,t){return(e[t]|e[t+1]<<8|e[t+2]<<16|e[t+3]<<24)>>>0},il=function(e,t){return kn(e,t)+kn(e,t+4)*4294967296};function q2(e,t){return H2(e,{i:2},t&&t.out,t&&t.dictionary)}var Pl=typeof TextDecoder<"u"&&new TextDecoder,K2=0;try{Pl.decode(W2,{stream:!0}),K2=1}catch{}var G2=function(e){for(var t="",n=0;;){var s=e[n++],i=(s>127)+(s>223)+(s>239);if(n+i>e.length)return{s:t,r:ar(e,n-1)};i?i==3?(s=((s&15)<<18|(e[n++]&63)<<12|(e[n++]&63)<<6|e[n++]&63)-65536,t+=String.fromCharCode(55296|s>>10,56320|s&1023)):i&1?t+=String.fromCharCode((s&31)<<6|e[n++]&63):t+=String.fromCharCode((s&15)<<12|(e[n++]&63)<<6|e[n++]&63):t+=String.fromCharCode(s)}};function _o(e,t){if(t){for(var n="",s=0;s<e.length;s+=16384)n+=String.fromCharCode.apply(null,e.subarray(s,s+16384));return n}else{if(Pl)return Pl.decode(e);var i=G2(e),l=i.s,n=i.r;return n.length&&fn(8),l}}var X2=function(e,t){return t+30+Vn(e,t+26)+Vn(e,t+28)},Y2=function(e,t,n){var s=Vn(e,t+28),i=Vn(e,t+30),l=_o(e.subarray(t+46,t+46+s),!(Vn(e,t+8)&2048)),r=t+46+s,a=J2(e,r,i,n,kn(e,t+20),kn(e,t+24),kn(e,t+42)),u=a[0],p=a[1],c=a[2];return[Vn(e,t+10),u,p,l,r+i+Vn(e,t+32),c]},J2=function(e,t,n,s,i,l,r){var a=i==4294967295,u=l==4294967295,p=r==4294967295,c=t+n,h=a+u+p;if(s&&h){for(;t+4<c;t+=4+Vn(e,t+2))if(Vn(e,t)==1)return[a?il(e,t+4+8*u):i,u?il(e,t+4):l,p?il(e,t+4+8*(u+a)):r,1];s<2&&fn(13)}return[i,l,r,0]};function Ll(e,t){for(var n={},s=e.length-22;kn(e,s)!=101010256;--s)(!s||e.length-s>65558)&&fn(13);var i=Vn(e,s+8);if(!i)return{};var l=kn(e,s+16),r=kn(e,s-20)==117853008;if(r){var a=kn(e,s-12);r=kn(e,a)==101075792,r&&(i=kn(e,a+32),l=kn(e,a+48))}for(var u=t&&t.filter,p=0;p<i;++p){var c=Y2(e,l,r),h=c[0],m=c[1],C=c[2],O=c[3],E=c[4],I=c[5],ee=X2(e,I);l=E,(!u||u({name:O,size:m,originalSize:C,compression:h}))&&(h?h==8?n[O]=q2(e.subarray(ee,ee+m),{out:new vn(C)}):fn(14,"unknown compression type "+h):n[O]=ar(e,ee,ee+m))}return n}async function Z2(e){const t=new Uint8Array(await e.arrayBuffer()),n=Ll(t,{filter:a=>/^ppt\/(slides\/slide\d+|notesSlides\/notesSlide\d+)\.xml$/.test(a.name)&&a.originalSize<10*1024*1024});if(Object.values(n).reduce((a,u)=>a+u.length,0)>200*1024*1024)throw new Error("文件展开后过大，请拆分");const s=Object.keys(n).filter(a=>/^ppt\/slides\/slide\d+\.xml$/.test(a)).sort((a,u)=>Number(a.match(/slide(\d+)/)[1])-Number(u.match(/slide(\d+)/)[1]));if(!s.length)throw new Error("没有找到幻灯片，请确认文件是有效的 PPTX");const i=a=>{const u=new DOMParser().parseFromString(_o(a),"application/xml");if(u.getElementsByTagName("parsererror").length)throw new Error("幻灯片 XML 损坏");return[...u.getElementsByTagNameNS("*","p")].map(p=>[...p.getElementsByTagNameNS("*","t")].map(c=>c.textContent).join("")).filter(Boolean).join(`
`)},l=s.map((a,u)=>({locator:"第 "+(u+1)+" 页",text:i(n[a])})),r=l.map(a=>a.locator+`
`+(a.text||"本页没有可提取的文字")).join(`

`);if(r.length>2e5)throw new Error("正文超过20万字，请拆分");return{local_content:r,sections:l,chunk_count:l.length,analyzed:!1}}function Q2(e){var s;const t=((s=e.sections)==null?void 0:s.filter(i=>{var l;return(l=i.text)==null?void 0:l.trim()}))||(e.local_content||"").split(/\n\s*\n/).filter(Boolean).map((i,l)=>({locator:"段落 "+(l+1),text:i}));if(!t.length)throw new Error("当前文件没有可提取的文字，请先提供文本或OCR结果");const n=[...new Set(t.map(i=>{var l;return(l=i.text.split(`
`).find(r=>r.trim()))==null?void 0:l.trim()}).filter(Boolean))];return{subspace:e.subspace,catalog:n.slice(0,16),concepts:n.filter(i=>i.length<=24).slice(0,8),entities:[],summary:t.slice(0,3).map(i=>i.locator+"："+i.text.slice(0,300)).join(`

`),framework:n.map((i,l)=>l+1+". "+i).join(`
`),body:t.map(i=>i.locator+`
`+i.text).join(`

`),hook:"",cta:"",nodes:[],edges:[],extraction_method:"原文提取与目录整理"}}async function yo(e){var t,n;if(/\.(mp4|mov|webm|m4v)$/i.test(e.name)){const s={media_type:"video",analyzed:!1};try{const i=await fetch("https://northstar-copilot.com/local-media/transcribe",{method:"POST",headers:{"Content-Type":"application/octet-stream","X-File-Extension":"."+e.name.split(".").pop().toLowerCase()},body:e});if(!i.ok)throw new Error("视频已保存，字幕解析服务暂不可用，可补充字幕文本");const l=await i.json(),r=[];let a="";for(const h of l.frames||[]){const m=h.lines.filter(C=>C.y>.12&&C.y<.65&&C.confidence>.4).sort((C,O)=>O.y-C.y||C.x-O.x).map(C=>C.text).join(" / ");m&&m!==a&&(r.push({locator:Math.floor(h.time/60)+":"+String(Math.floor(h.time%60)).padStart(2,"0"),text:m}),a=m)}const u=r.map(h=>"["+h.locator+"] "+h.text).join(`
`),p=await fetch("/api/cue/video-analysis",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:e.name,duration:l.duration,frames:l.keyframes||[],subtitles:u.slice(0,24e3)})}),c=await p.json();if(!p.ok)throw new Error(c.detail||"视频理解失败，请重新解析");return r.push({locator:"AI 创意 · 视频脚本拆解",text:c.answer}),{...s,duration:l.duration,sections:r,local_content:u+`

`+c.answer,chunk_count:r.length,parse_method:c.method,parse_error:"",video_script:c.answer}}catch(i){return{...s,local_content:"",parse_error:i.message}}}if(/\.(ppt|xls)$/i.test(e.name)){const s=await fetch("https://northstar-copilot.com/local-media/presentation",{method:"POST",headers:{"Content-Type":"application/octet-stream","X-File-Extension":"."+e.name.split(".").pop().toLowerCase()},body:e});if(!s.ok)throw new Error("旧版 Office 文件转换失败，请另存为 PPTX / XLSX");return yo(new File([await s.blob()],e.name+".pdf",{type:"application/pdf"}))}if(/\.pptx$/i.test(e.name))return Z2(e);if(/\.pdf$/i.test(e.name)){const s=await ga(()=>import("./pdf-BtCWNl9F.js"),[],import.meta.url),i=await ga(()=>import("./pdf.worker.min-Dualf0xi.js"),[],import.meta.url);s.GlobalWorkerOptions.workerSrc=i.default;let l;try{l=await s.getDocument({data:new Uint8Array(await e.arrayBuffer())}).promise}catch(r){throw r.name==="PasswordException"?new Error("文件有密码锁，请上传未加密版本"):r}try{if(l.numPages>500)throw new Error("页数超过500，请拆分");const r=[];for(let a=1;a<=l.numPages;a++){const u=await l.getPage(a),p=await u.getTextContent();r.push({locator:"第 "+a+" 页",text:p.items.map(c=>c.str||"").join(" ")})}return{sections:r,local_content:r.map(a=>a.locator+`
`+a.text).join(`

`),chunk_count:r.length,analyzed:!1}}finally{await l.destroy()}}if(/\.xlsx$/i.test(e.name)){const s=Ll(new Uint8Array(await e.arrayBuffer()),{filter:c=>/^xl\/(workbook.xml|_rels\/workbook.xml.rels|sharedStrings.xml|worksheets\/sheet\d+.xml)$/.test(c.name)&&c.originalSize<20971520}),i=c=>s[c]?new DOMParser().parseFromString(_o(s[c]),"application/xml"):null,l=[...((t=i("xl/sharedStrings.xml"))==null?void 0:t.getElementsByTagNameNS("*","si"))||[]].map(c=>[...c.getElementsByTagNameNS("*","t")].map(h=>h.textContent).join("")),r=[...((n=i("xl/workbook.xml"))==null?void 0:n.getElementsByTagNameNS("*","sheet"))||[]].map(c=>c.getAttribute("name")),a=Object.keys(s).filter(c=>/^xl\/worksheets\/sheet\d+.xml$/.test(c)).sort((c,h)=>Number(c.match(/sheet(\d+)/)[1])-Number(h.match(/sheet(\d+)/)[1]));if(!a.length)throw new Error("没有找到有效工作表");const u=a.map((c,h)=>({name:r[h]||"Sheet"+(h+1),rows:[...i(c).getElementsByTagNameNS("*","row")].map(m=>{var O;const C=[];for(const E of m.getElementsByTagNameNS("*","c")){const I=E.getAttribute("r")||"A1";let ee=0;for(const ie of I.replace(/\d/g,""))ee=ee*26+ie.charCodeAt(0)-64;const R=((O=E.getElementsByTagNameNS("*","v")[0])==null?void 0:O.textContent)||"",te=E.getAttribute("t");C[ee-1]=te==="s"?l[Number(R)]||"":te==="inlineStr"?[...E.getElementsByTagNameNS("*","t")].map(ie=>ie.textContent).join(""):te==="b"?R==="1":R}return C})})),p=u.flatMap(c=>c.rows.map((h,m)=>({locator:c.name+" · 第 "+(m+1)+" 行",text:h.map(C=>C??"").join(" | ")})));return{sheets:u,sections:p,local_content:p.map(c=>c.locator+`
`+c.text).join(`
`),chunk_count:p.length,analyzed:!1}}if(/\.docx$/i.test(e.name)){const s=Ll(new Uint8Array(await e.arrayBuffer()),{filter:r=>r.name==="word/document.xml"&&r.originalSize<20971520});if(!s["word/document.xml"])throw new Error("Word文件损坏");return{local_content:[...new DOMParser().parseFromString(_o(s["word/document.xml"]),"application/xml").getElementsByTagNameNS("*","p")].map(r=>[...r.getElementsByTagNameNS("*","t")].map(a=>a.textContent).join("")).join(`
`),analyzed:!1}}if(/\.(csv|tsv)$/i.test(e.name)){const s=await e.text(),i=/\.tsv$/i.test(e.name)?"	":",",l=[];let r=[],a="",u=!1;for(let p=0;p<s.length;p++){const c=s[p];c==='"'?u&&s[p+1]==='"'?(a+='"',p++):u=!u:c===i&&!u?(r.push(a),a=""):(c===`
`||c==="\r")&&!u?(c==="\r"&&s[p+1]===`
`&&p++,r.push(a),l.push(r),r=[],a=""):a+=c}return(a||r.length)&&(r.push(a),l.push(r)),{local_content:s,sheets:[{name:"CSV",rows:l}],analyzed:!1}}return{local_content:/\.(txt|md|srt|vtt)$/i.test(e.name)?await e.text():"",analyzed:!1}}function ur(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Ls=ur();function mc(e){Ls=e}var Es={exec:()=>null};function Vs(e){let t=[];return n=>{let s=Math.max(0,Math.min(3,n-1)),i=t[s];return i||(i=e(s),t[s]=i),i}}function Le(e,t=""){let n=typeof e=="string"?e:e.source,s={replace:(i,l)=>{let r=typeof l=="string"?l:l.source;return r=r.replace(Ut.caret,"$1"),n=n.replace(i,r),s},getRegex:()=>new RegExp(n,t)};return s}var ep=((e="")=>{try{return!!new RegExp("(?<=1)(?<!1)"+e)}catch{return!1}})(),Ut={codeRemoveIndent:/^(?: {0,3}\t| {1,4})/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,endingSpaceTabChar:/[ \t]$/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,leadingSpaceTab:/^[ \t]+/,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,numericCharacterReference:/&#(?:(\d{1,7})|[Xx]([A-Fa-f0-9]{1,6}));/g,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:Vs(e=>new RegExp(`^ {0,${e}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:Vs(e=>new RegExp(`^ {0,${e}}((?:-[ 	]*){3,}|(?:_[ 	]*){3,}|(?:\\*[ 	]*){3,})(?:\\n+|$)`)),fencesBeginRegex:Vs(e=>new RegExp(`^ {0,${e}}(?:\`\`\`|~~~)`)),headingBeginRegex:Vs(e=>new RegExp(`^ {0,${e}}#`)),htmlBeginRegex:Vs(e=>new RegExp(`^ {0,${e}}(?:</?(?:${Ni})(?: +|$|/?>)|<(?:script|pre|style|textarea|!--))`,"i")),blockquoteBeginRegex:Vs(e=>new RegExp(`^ {0,${e}}>`))},tp=/^(?:[ \t]*(?:\n|$))+/,np=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,sp=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Li=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,ip=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,cr=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,gc=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |fences|blockquote|heading|hr|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_c=Le(gc).replace(/bull/g,cr).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/hr/g,/ {0,3}(?:(?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),op=Le(gc).replace(/bull/g,cr).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/hr/g,/ {0,3}(?:(?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),dr=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table|[ \t]+\n)[^\n]+)*)/,lp=/^[^\n]+/,pr=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,rp=Le(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",pr).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),ap=Le(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g,cr).getRegex(),Ni="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",fr=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,up=Le("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n*|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n*|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][a-z0-9-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][a-z0-9-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",fr).replace("tag",Ni).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),yc=e=>Le(dr).replace("hr",Li).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list",e).replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ni).getRegex(),cp=yc(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/),dp=yc(/ {0,3}(?:[*+-]|\d{1,9}[.)])(?:[ \t]|\n|$)/),pp=Le(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",dp).getRegex(),vr={blockquote:pp,code:np,def:rp,fences:sp,heading:ip,hr:Li,html:up,lheading:_c,list:ap,newline:tp,paragraph:cp,table:Es,text:lp},_a=Le("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Li).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ni).getRegex(),fp={...vr,lheading:op,table:_a,paragraph:Le(dr).replace("hr",Li).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",_a).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ni).getRegex()},vp={...vr,html:Le(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",fr).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Es,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Le(dr).replace("hr",Li).replace("heading",` *#{1,6} *[^
]`).replace("lheading",_c).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},hp=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,mp=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,bc=/^( {2,}|\\)\n(?!\s*$)[ \t]*/,gp=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,as=/[\p{P}\p{S}]/u,ti=/[\s\p{P}\p{S}]/u,Fi=/[^\s\p{P}\p{S}]/u,_p=Le(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,ti).getRegex(),yp=/[\p{Pi}\p{Ps}"']/u,wc=/(?!~)[\p{P}\p{S}]/u,bp=/(?!~)[\s\p{P}\p{S}]/u,wp=/(?:[^\s\p{P}\p{S}]|~)/u,kp=Le(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",ep?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),kc=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,xp=Le(kc,"u").replace(/punct/g,as).getRegex(),Sp=Le(kc,"u").replace(/punct/g,wc).getRegex(),$p=/^(?:\*+(?:((?!\*)(?!openQuote)punct)|([^\s*]))?)|^_+(?:((?!_)(?!openQuote)punct)|([^\s_]))?/,Cp=Le($p,"u").replace(/openQuote/g,yp).replace(/punct/g,as).getRegex(),xc="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Tp=Le(xc,"gu").replace(/notPunctSpace/g,Fi).replace(/punctSpace/g,ti).replace(/punct/g,as).getRegex(),Ap=Le(xc,"gu").replace(/notPunctSpace/g,wp).replace(/punctSpace/g,bp).replace(/punct/g,wc).getRegex(),Ep="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)[\\s](\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|(?:(?!\\*)punct|notPunctSpace)(\\*+)(?!\\*)(?=notPunctSpace)",Dp=Le(Ep,"gu").replace(/notPunctSpace/g,Fi).replace(/punctSpace/g,ti).replace(/punct/g,as).getRegex(),Mp=Le("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Fi).replace(/punctSpace/g,ti).replace(/punct/g,as).getRegex(),Op="^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)[\\s](_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)|(?:(?!_)punct|notPunctSpace)(_+)(?!_)(?=notPunctSpace)",Ip=Le(Op,"gu").replace(/notPunctSpace/g,Fi).replace(/punctSpace/g,ti).replace(/punct/g,as).getRegex(),Rp=Le(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,as).getRegex(),Pp="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",Lp=Le(Pp,"gu").replace(/notPunctSpace/g,Fi).replace(/punctSpace/g,ti).replace(/punct/g,as).getRegex(),Np=Le(/\\(punct)/,"gu").replace(/punct/g,as).getRegex(),Fp=Le(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),zp=Le(fr).replace("(?:-->|$)","-->").getRegex(),Up=Le("^comment|^</[a-zA-Z][a-zA-Z0-9-]*\\s*>|^<[a-zA-Z][a-zA-Z0-9-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",zp).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Sc=/\[(?:\\[\s\S]|[^\[\]\\])*\]/,bo=Le(/(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/).replace("brackets",Sc).getRegex(),jp=Le(/^!?\[(label)\]\([ \t\n]*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?[ \t\n]*\)/).replace("label",bo).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]+|(?=\))/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Bp=Le(/^!?\[(label)\]\[(ref)\]/).replace("label",bo).replace("ref",pr).getRegex(),Vp=Le(/^!?\[(ref)\](?:\[\])?/).replace("ref",pr).getRegex(),ya=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\]){1,999}/,Hp=Le(/(?:[^\[\]\\`]*(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\]))){0,999}?[^\[\]\\`]*?/).replace("brackets",Sc).getRegex(),Wp=Le("reflink|nolink(?!\\()","g").replace("reflink",Le(/^!?\[(label)\]\[(ref)\]/).replace("label",Hp).replace("ref",ya).getRegex()).replace("nolink",Le(/^!?\[(ref)\](?:\[\])?/).replace("ref",ya).getRegex()).getRegex(),ba=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,qp=/[A-Za-z0-9._+-]+@[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/,Kp=Le(/(?:mailto:email|xmpp:email(?:\/[A-Za-z0-9@.]+)?)/).replace(/email/g,qp).getRegex(),hr={_backpedal:Es,anyPunctuation:Np,autolink:Fp,blockSkip:kp,br:bc,code:mp,del:Es,delLDelim:Es,delRDelim:Es,emStrongLDelim:xp,emStrongRDelimAst:Tp,emStrongRDelimUnd:Mp,escape:hp,link:jp,nolink:Vp,punctuation:_p,reflink:Bp,reflinkSearch:Wp,tag:Up,text:gp,url:Es},Gp={...hr,emStrongLDelim:Cp,emStrongRDelimAst:Dp,emStrongRDelimUnd:Ip,link:Le(/^!?\[(label)\]\((.*?)\)/).replace("label",bo).getRegex(),reflink:Le(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",bo).getRegex()},Nl={...hr,emStrongRDelimAst:Ap,emStrongLDelim:Sp,delLDelim:Rp,delRDelim:Lp,url:Le(/^emailProtocol|^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("emailProtocol",Kp).replace("protocol",ba).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:Le(/^(?:[^a-zA-Z0-9](?=emailProtocol)|(`+|~+|[^`~])(?:(?=[`~])|(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9](?=emailProtocol)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))))/).replace("protocol",ba).replace(/emailProtocol/g,/(?:mailto|xmpp):/).getRegex()},Xp={...Nl,br:Le(bc).replace("{2,}","*").getRegex(),text:Le(Nl.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Ji={normal:vr,gfm:fp,pedantic:vp},li={normal:hr,gfm:Nl,breaks:Xp,pedantic:Gp},Yp={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},wa=e=>Yp[e];function dn(e,t){if(t){if(Ut.escapeTest.test(e))return e.replace(Ut.escapeReplace,wa)}else if(Ut.escapeTestNoEncode.test(e))return e.replace(Ut.escapeReplaceNoEncode,wa);return e}function Jp(e){return e.replace(Ut.numericCharacterReference,(t,n,s)=>{let i=n===void 0?Number.parseInt(s,16):Number.parseInt(n,10);return i===0||i>1114111||i>=55296&&i<=57343?"�":String.fromCodePoint(i)})}function ka(e){try{e=encodeURI(e).replace(Ut.percentDecode,"%")}catch{return null}return e}function xa(e,t){var l;let n=e.replace(Ut.findPipe,(r,a,u)=>{let p=!1,c=a;for(;--c>=0&&u[c]==="\\";)p=!p;return p?"|":" |"}),s=n.split(Ut.splitPipe),i=0;if(s[0].trim()||s.shift(),s.length>0&&!((l=s.at(-1))!=null&&l.trim())&&s.pop(),t)if(s.length>t)s.splice(t);else for(;s.length<t;)s.push("");for(;i<s.length;i++)s[i]=s[i].trim().replace(Ut.slashPipe,"|");return s}function ds(e,t,n){let s=e.length;if(s===0)return"";let i=0;for(;i<s&&e.charAt(s-i-1)===t;)i++;return e.slice(0,s-i)}function Sa(e){let t=e.split(`
`),n=t.length-1;for(;n>=0&&Ut.blankLine.test(t[n]);)n--;return t.length-n<=2?e:t.slice(0,n+1).join(`
`)}function wo(e){return e.trim().toLowerCase().toUpperCase().toLowerCase()}function $a(e,t){if(e.indexOf(t[0])===-1&&e.indexOf(t[1])===-1)return-1;let n=0;for(let s=0;s<e.length;s++)if(e[s]==="\\")s++;else if(e[s]===t[0])n++;else if(e[s]===t[1]&&(n--,n<0))return s;return n>0?-2:-1}function Ca(e,t=0){let n=t,s="";for(let i of e)if(i==="	"){let l=4-n%4;s+=" ".repeat(l),n+=l}else s+=i,n++;return s}function Ta(e,t,n,s,i){let l=t.href,r=t.title||null,a=e[1].replace(i.other.outputLinkReplace,"$1"),u=e[0].charAt(0)==="!";s.state.inLink=!0;let p=s.state.linkEmitted,c=s.state.inRawBlock;s.state.linkEmitted=!1;let h=s.inlineTokens(a),m=s.state.linkEmitted;if(s.state.linkEmitted=p,s.state.inLink=!1,!u){if(m){s.state.inRawBlock=c;return}s.state.linkEmitted=!0}return{type:u?"image":"link",raw:n,href:l,title:r,text:a,tokens:h}}function Zp(e,t,n){let s=e.match(n.other.indentCodeCompensation);if(s===null)return t;let i=s[1];return t.split(`
`).map(l=>{let r=l.match(n.other.beginningSpace);if(r===null)return l;let[a]=r;return l.slice(Math.min(a.length,i.length))}).join(`
`)}function Aa(e,t,n,s){if(!t.includes("<"))return!1;for(let i=0;i<t.length;i++){if(t[i]==="\\"){i++;continue}if(t[i]==="`"){let a=s.inline.code.exec(t.slice(i));if(a){i+=a[0].length-1;continue}}if(t[i]!=="<")continue;let l=e.slice(n+i),r=s.inline.tag.exec(l)||s.inline.autolink.exec(l);if(r){if(r[0].length>t.length-i)return!0;i+=r[0].length-1}}return!1}var ko=class{constructor(e){ot(this,"options");ot(this,"rules");ot(this,"lexer");this.options=e||Ls}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let n=this.options.pedantic?t[0]:Sa(t[0]),s=n.replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:n,codeBlockStyle:"indented",text:s}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let n=t[0],s=Zp(n,t[3]||"",this.rules);return{type:"code",raw:n,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:s}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(this.rules.other.endingHash.test(n)){let s=ds(n,"#");(this.options.pedantic||!s||this.rules.other.endingSpaceTabChar.test(s))&&(n=s.trim())}return{type:"heading",raw:ds(t[0],`
`),depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:ds(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let n=ds(t[0],`
`).split(`
`),s="",i="",l=[];for(;n.length>0;){let r=!1,a=[],u;for(u=0;u<n.length;u++)if(this.rules.other.blockquoteStart.test(n[u]))a.push(n[u]),r=!0;else if(!r)a.push(n[u]);else break;n=n.slice(u);let p=a.join(`
`),c=p.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");s=s?`${s}
${p}`:p,i=i?`${i}
${c}`:c;let h=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(c,l,!0),this.lexer.state.top=h,n.length===0)break;let m=l.at(-1);if((m==null?void 0:m.type)==="code")break;if((m==null?void 0:m.type)==="blockquote"){let C=m,O=n.join(`
`),E=C.raw+`
`+O.replace(this.rules.other.blockquoteSetextReplace2,""),I=this.blockquote(E);l[l.length-1]=I;let ee=E.substring(I.raw.length).replace(/^\n/,""),R=ee?ee.split(`
`).length:0,te=R?n.slice(0,-R):n;te.length>0&&(s=`${s}
${te.join(`
`)}`),i=i.substring(0,i.length-C.text.length)+I.text;break}else if((m==null?void 0:m.type)==="list"){let C=m,O=C.raw+`
`+n.join(`
`),E=this.list(O);l[l.length-1]=E,s=s.substring(0,s.length-m.raw.length)+E.raw,i=i.substring(0,i.length-C.raw.length)+E.raw,n=O.substring(l.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:s,tokens:l,text:i}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim(),s=n.length>1,i={type:"list",raw:"",ordered:s,start:s?+n.slice(0,-1):"",loose:!1,items:[]};n=s?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=s?n:"[*+-]");let l=this.rules.other.listItemRegex(n),r=!1;for(;e;){let u=!1,p="",c="";if(!(t=l.exec(e))||this.rules.block.hr.test(e))break;p=t[0],e=e.substring(p.length);let h=t[2].split(`
`,1)[0],m=t[1].length,C=this.options.pedantic?Ca(h,m):h.replace(this.rules.other.leadingSpaceTab,ee=>Ca(ee,m)),O=e.split(`
`,1)[0],E=!C.trim(),I=0;if(this.options.pedantic?(I=2,c=C.trimStart()):E?I=m+1:(I=C.search(this.rules.other.nonSpaceChar),I=I>4?1:I,c=C.slice(I),I+=m),E&&this.rules.other.blankLine.test(O)&&(p+=O+`
`,e=e.substring(O.length+1),u=!0),!u){let ee=this.rules.other.nextBulletRegex(I),R=this.rules.other.hrRegex(I),te=this.rules.other.fencesBeginRegex(I),ie=this.rules.other.headingBeginRegex(I),Q=this.rules.other.htmlBeginRegex(I),j=this.rules.other.blockquoteBeginRegex(I);for(;e;){let D=e.split(`
`,1)[0],F;if(O=D,this.options.pedantic?(O=O.replace(this.rules.other.listReplaceNesting,"  "),F=O):F=O.replace(this.rules.other.leadingSpaceTab,G=>G.replace(this.rules.other.tabCharGlobal,"    ")),te.test(O)||ie.test(O)||Q.test(O)||j.test(O)||ee.test(O)||R.test(O))break;if(F.search(this.rules.other.nonSpaceChar)>=I||!O.trim())c+=`
`+F.slice(I);else{if(E||C.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||te.test(C)||ie.test(C)||R.test(C))break;c+=`
`+O}E=!O.trim(),p+=D+`
`,e=e.substring(D.length+1),C=F.slice(I)}}i.loose||(r?i.loose=!0:this.rules.other.doubleBlankLine.test(p)&&(r=!0)),i.items.push({type:"list_item",raw:p,task:!!this.options.gfm&&this.rules.other.listIsTask.test(c),loose:!1,text:c,tokens:[]}),i.raw+=p}let a=i.items.at(-1);if(a)a.raw=a.raw.trimEnd(),a.text=a.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let u of i.items)if(this.lexer.state.top=!1,u.tokens=this.lexer.blockTokens(u.text,[]),!i.loose){let p=u.tokens.filter(h=>h.type==="space"),c=p.length>0&&p.some(h=>this.rules.other.anyLine.test(h.raw));i.loose=c}for(let u of i.items){let p=u.tokens[0];if(u.task&&((p==null?void 0:p.type)==="text"||(p==null?void 0:p.type)==="paragraph")){u.text=u.text.replace(this.rules.other.listReplaceTask,""),p.raw=p.raw.replace(this.rules.other.listReplaceTask,""),p.text=p.text.replace(this.rules.other.listReplaceTask,"");for(let h=this.lexer.inlineQueue.length-1;h>=0;h--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[h].src)){this.lexer.inlineQueue[h].src=this.lexer.inlineQueue[h].src.replace(this.rules.other.listReplaceTask,"");break}let c=this.rules.other.listTaskCheckbox.exec(u.raw);if(c){let h={type:"checkbox",raw:c[0]+" ",checked:c[0]!=="[ ]"};u.checked=h.checked,i.loose?u.tokens[0]&&["paragraph","text"].includes(u.tokens[0].type)&&"tokens"in u.tokens[0]&&u.tokens[0].tokens?(u.tokens[0].raw=h.raw+u.tokens[0].raw,u.tokens[0].text=h.raw+u.tokens[0].text,u.tokens[0].tokens.unshift(h)):u.tokens.unshift({type:"paragraph",raw:h.raw,text:h.raw,tokens:[h]}):u.tokens.unshift(h)}}else u.task&&(u.task=!1)}if(i.loose)for(let u of i.items){u.loose=!0;for(let p of u.tokens)p.type==="text"&&(p.type="paragraph")}return i}}html(e){let t=this.rules.block.html.exec(e);if(t){let n=Sa(t[0]);return{type:"html",block:!0,raw:n,pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:n}}}def(e){let t=this.rules.block.def.exec(e);if(t){if(!this.rules.other.startAngleBracket.test(t[2])&&$a(t[2],"()")!==-1)return;let n=wo(t[1]).replace(this.rules.other.multipleSpaceGlobal," "),s=t[2]?t[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",i=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:n,raw:ds(t[0],`
`),href:s,title:i}}}table(e){var r;let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let n=xa(t[1]),s=t[2].replace(this.rules.other.tableAlignChars,"").split("|"),i=(r=t[3])!=null&&r.trim()?t[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],l={type:"table",raw:ds(t[0],`
`),header:[],align:[],rows:[]};if(n.length===s.length){for(let a of s)this.rules.other.tableAlignRight.test(a)?l.align.push("right"):this.rules.other.tableAlignCenter.test(a)?l.align.push("center"):this.rules.other.tableAlignLeft.test(a)?l.align.push("left"):l.align.push(null);for(let a=0;a<n.length;a++)l.header.push({text:n[a],tokens:this.lexer.inline(n[a]),header:!0,align:l.align[a]});for(let a of i)l.rows.push(xa(a,l.header.length).map((u,p)=>({text:u,tokens:this.lexer.inline(u),header:!1,align:l.align[p]})));return l}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t){let n=t[1].trim();return{type:"heading",raw:ds(t[0],`
`),depth:t[2].charAt(0)==="="?1:2,text:n,tokens:this.lexer.inline(n)}}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){if(this.lexer.state.linkParenPossible===!1)return;let t=this.rules.inline.link.exec(e);if(t){let n=t[0].charAt(0)==="!"?2:1;if(!this.options.pedantic&&Aa(e,t[1],n,this.rules))return;let s=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(s)){if(!this.rules.other.endAngleBracket.test(s))return;let r=ds(s.slice(0,-1),"\\");if((s.length-r.length)%2===0)return}else{let r=$a(t[2],"()");if(r===-2)return;if(r>-1){let a=(t[0].indexOf("!")===0?5:4)+t[1].length+r;t[2]=t[2].substring(0,r),t[0]=t[0].substring(0,a).trim(),t[3]=""}}let i=t[2],l="";if(this.options.pedantic){let r=this.rules.other.pedanticHrefTitle.exec(i);r&&(i=r[1],l=r[3])}else l=t[3]?t[3].slice(1,-1):"";return i=i.trim(),this.rules.other.startAngleBracket.test(i)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(s)?i=i.slice(1):i=i.slice(1,-1)),Ta(t,{href:i&&i.replace(this.rules.inline.anyPunctuation,"$1"),title:l&&l.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let s=n[0].charAt(0)==="!"?2:1;if(!this.options.pedantic&&Aa(e,n[1],s,this.rules))return;let i=(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal," "),l=t[wo(i)];if(!l){let r=n[0].charAt(0);return{type:"text",raw:r,text:r}}return Ta(n,l,n[0],this.lexer,this.rules)}}emStrong(e,t,n=""){let s=this.rules.inline.emStrongLDelim.exec(e);if(!(!s||!s[1]&&!s[2]&&!s[3]&&!s[4]||s[4]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(s[1]||s[3])||!n||this.rules.inline.punctuation.exec(n))){let i=[...s[0]].length-1,l,r,a=i,u=0,p=s[0][0],c=n===p,h=p==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(h.lastIndex=0,t=t.slice(-1*e.length+i);(s=h.exec(t))!==null;){if(l=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!l)continue;if(r=[...l].length,s[3]||s[4]){a+=r;continue}else if(s[5]||s[6]){if(i%3&&!((i+r)%3)){u+=r;continue}if(c)break}if(a-=r,a>0)continue;r=Math.min(r,r+a+u);let m=[...s[0]][0].length,C=e.slice(0,i+s.index+m+r);if(Math.min(i,r)%2){let E=C.slice(1,-1);return{type:"em",raw:C,text:E,tokens:this.lexer.inlineTokens(E)}}let O=C.slice(2,-2);return{type:"strong",raw:C,text:O,tokens:this.lexer.inlineTokens(O)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(this.rules.other.newLineCharGlobal," "),s=this.rules.other.nonSpaceChar.test(n),i=this.rules.other.startingSpaceChar.test(n)&&this.rules.other.endingSpaceChar.test(n);return s&&i&&(n=n.substring(1,n.length-1)),{type:"codespan",raw:t[0],text:n}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e,t,n=""){let s=this.rules.inline.delLDelim.exec(e);if(s&&(!s[1]||!n||this.rules.inline.punctuation.exec(n))){let i=[...s[0]].length-1,l,r,a=i,u=this.rules.inline.delRDelim;for(u.lastIndex=0,t=t.slice(-1*e.length+i);(s=u.exec(t))!==null;){if(l=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!l||(r=[...l].length,r!==i))continue;if(s[3]||s[4]){a+=r;continue}if(a-=r,a>0)continue;r=Math.min(r,r+a);let p=[...s[0]][0].length,c=e.slice(0,i+s.index+p+r),h=c.slice(i,-i);return{type:"del",raw:c,text:h,tokens:this.lexer.inlineTokens(h)}}}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let n,s;return t[2]==="@"?(n=t[1],s="mailto:"+n):(n=t[1],s=n),{type:"link",raw:t[0],text:n,href:s,autolink:!0,tokens:[{type:"text",raw:n,text:n}]}}}url(e){var n;let t;if(t=this.rules.inline.url.exec(e)){let s,i;if(t[2]==="@")s=t[0],i="mailto:"+s;else{let l;do l=t[0],t[0]=((n=this.rules.inline._backpedal.exec(t[0]))==null?void 0:n[0])??"";while(l!==t[0]);s=t[0],t[1]==="www."?i="http://"+t[0]:i=t[0]}return{type:"link",raw:t[0],text:s,href:i,autolink:!0,tokens:[{type:"text",raw:s,text:s}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let n=this.lexer.state.inRawBlock;return{type:"text",raw:t[0],text:n?t[0]:Jp(t[0]),escaped:n}}}},So,$c,Is,Tn=(Is=class{constructor(t){Sr(this,So);ot(this,"tokens");ot(this,"options");ot(this,"state");ot(this,"inlineQueue");ot(this,"tokenizer");this.tokens=[],this.tokens.links=Object.create(null),this.options=t||Ls,this.options.tokenizer=this.options.tokenizer||new ko,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,linkEmitted:!1,linkParenPossible:!0,top:!0};let n={other:Ut,block:Ji.normal,inline:li.normal};this.options.pedantic?(n.block=Ji.pedantic,n.inline=li.pedantic):this.options.gfm&&(n.block=Ji.gfm,this.options.breaks?n.inline=li.breaks:n.inline=li.gfm),this.tokenizer.rules=n}static get rules(){return{block:Ji,inline:li}}static lex(t,n){return new Is(n).lex(t)}static lexInline(t,n){return new Is(n).inlineTokens(t)}lex(t){t=t.replace(Ut.carriageReturn,`
`),this.blockTokens(t,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){let s=this.inlineQueue[n];this.inlineTokens(s.src,s.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(t,n=[],s=!1){var l,r,a;this.tokenizer.lexer=this,this.options.pedantic&&(t=t.replace(Ut.tabCharGlobal,"    ").replace(Ut.spaceLine,""));let i=1/0;for(;t;){if(t.length<i)i=t.length;else{this.infiniteLoopError(t.charCodeAt(0));break}let u;if((r=(l=this.options.extensions)==null?void 0:l.block)!=null&&r.some(c=>(u=c.call({lexer:this},t,n))?(t=t.substring(u.raw.length),n.push(u),!0):!1))continue;if(u=this.tokenizer.space(t)){t=t.substring(u.raw.length);let c=n.at(-1);u.raw.length===1&&c!==void 0?c.raw+=`
`:n.push(u);continue}if(u=this.tokenizer.code(t)){t=t.substring(u.raw.length);let c=n.at(-1);(c==null?void 0:c.type)==="paragraph"||(c==null?void 0:c.type)==="text"?(c.raw+=(c.raw.endsWith(`
`)?"":`
`)+u.raw,c.text+=`
`+u.text,this.inlineQueue.at(-1).src=c.text):n.push(u);continue}if(u=this.tokenizer.fences(t)){t=t.substring(u.raw.length),n.push(u);continue}if(u=this.tokenizer.heading(t)){t=t.substring(u.raw.length),n.push(u);continue}if(u=this.tokenizer.hr(t)){t=t.substring(u.raw.length),n.push(u);continue}if(u=this.tokenizer.blockquote(t)){t=t.substring(u.raw.length),n.push(u);continue}if(u=this.tokenizer.list(t)){t=t.substring(u.raw.length),n.push(u);continue}if(u=this.tokenizer.html(t)){t=t.substring(u.raw.length),n.push(u);continue}if(u=this.tokenizer.def(t)){t=t.substring(u.raw.length);let c=n.at(-1);(c==null?void 0:c.type)==="paragraph"||(c==null?void 0:c.type)==="text"?(c.raw+=(c.raw.endsWith(`
`)?"":`
`)+u.raw,c.text+=`
`+u.raw,this.inlineQueue.at(-1).src=c.text):this.tokens.links[u.tag]||(this.tokens.links[u.tag]={href:u.href,title:u.title},n.push(u));continue}if(u=this.tokenizer.table(t)){t=t.substring(u.raw.length),n.push(u);continue}if(u=this.tokenizer.lheading(t)){t=t.substring(u.raw.length),n.push(u);continue}let p=t;if((a=this.options.extensions)!=null&&a.startBlock){let c=1/0,h=t.slice(1),m;this.options.extensions.startBlock.forEach(C=>{m=C.call({lexer:this},h),typeof m=="number"&&m>=0&&(c=Math.min(c,m))}),c<1/0&&c>=0&&(p=t.substring(0,c+1))}if(this.state.top&&(u=this.tokenizer.paragraph(p))){let c=n.at(-1);s&&(c==null?void 0:c.type)==="paragraph"?(c.raw+=(c.raw.endsWith(`
`)?"":`
`)+u.raw,c.text+=`
`+u.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=c.text):n.push(u),s=p.length!==t.length,t=t.substring(u.raw.length);continue}if(u=this.tokenizer.text(t)){t=t.substring(u.raw.length);let c=n.at(-1);(c==null?void 0:c.type)==="text"?(c.raw+=(c.raw.endsWith(`
`)?"":`
`)+u.raw,c.text+=`
`+u.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=c.text):n.push(u);continue}if(t){this.infiniteLoopError(t.charCodeAt(0));break}}return this.state.top=!0,n}inline(t,n=[]){return this.inlineQueue.push({src:t,tokens:n}),n}linkInText(t){if(!t.includes("["))return!1;let n=this.tokenizer.rules.inline.link;for(let s of t.matchAll(this.tokenizer.rules.inline.blockSkip))if(n.test(s[0])&&t.charAt(s.index-1)!=="!")return!0;for(let s of t.matchAll(this.tokenizer.rules.inline.reflinkSearch)){let i=s[0],l=i.lastIndexOf("[");if(!(i.charAt(0)==="!"||!Object.hasOwn(this.tokens.links,wo(i.slice(l+1,-1))))&&!(l>1&&this.linkInText(i.slice(1,l-1))))return!0}return!1}inlineTokens(t,n=[]){this.tokenizer.lexer=this;let s=this.state.linkParenPossible;this.state.linkParenPossible=s&&t.includes(")");try{return $r(this,So,$c).call(this,t,n)}finally{this.state.linkParenPossible=s}}infiniteLoopError(t){let n="Infinite loop on byte: "+t;if(this.options.silent)console.error(n);else throw new Error(n)}},So=new WeakSet,$c=function(t,n){var a,u,p,c,h;let s=t;if(this.tokens.links&&t.includes("[")){let m=this.tokenizer.rules.inline.reflinkSearch,C=O=>{let E=O.lastIndexOf("[");if(!Object.hasOwn(this.tokens.links,wo(O.slice(E+1,-1))))return O;if(E>1&&O.charAt(0)!=="!"){let I=O.slice(1,E-1);if(this.linkInText(I))return"["+I.replace(m,C)+"]["+"a".repeat(O.length-E-2)+"]"}return"["+"a".repeat(O.length-2)+"]"};s=s.replace(m,C)}s=s.replace(this.tokenizer.rules.inline.anyPunctuation,m=>"+".repeat(m.length)),s=s.replace(this.tokenizer.rules.inline.blockSkip,(m,C,O)=>{let E=O?O.length:0;return m.slice(0,E)+"["+"a".repeat(m.length-E-2)+"]"}),s=((u=(a=this.options.hooks)==null?void 0:a.emStrongMask)==null?void 0:u.call({lexer:this},s))??s;let i=!1,l="",r=1/0;for(;t;){if(t.length<r)r=t.length;else{this.infiniteLoopError(t.charCodeAt(0));break}i||(l=""),i=!1;let m;if((c=(p=this.options.extensions)==null?void 0:p.inline)!=null&&c.some(O=>(m=O.call({lexer:this},t,n))?(t=t.substring(m.raw.length),n.push(m),!0):!1))continue;if(m=this.tokenizer.escape(t)){t=t.substring(m.raw.length),n.push(m);continue}if(m=this.tokenizer.tag(t)){t=t.substring(m.raw.length),n.push(m);continue}if(m=this.tokenizer.link(t)){t=t.substring(m.raw.length),n.push(m);continue}if(m=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(m.raw.length);let O=n.at(-1);m.type==="text"&&(O==null?void 0:O.type)==="text"?(O.raw+=m.raw,O.text+=m.text):n.push(m);continue}if(m=this.tokenizer.emStrong(t,s,l)){t=t.substring(m.raw.length),n.push(m);continue}if(m=this.tokenizer.codespan(t)){t=t.substring(m.raw.length),n.push(m);continue}if(m=this.tokenizer.br(t)){t=t.substring(m.raw.length),n.push(m);continue}if(m=this.tokenizer.del(t,s,l)){t=t.substring(m.raw.length),n.push(m);continue}if(m=this.tokenizer.autolink(t)){t=t.substring(m.raw.length),n.push(m);continue}if(!this.state.inLink&&(m=this.tokenizer.url(t))){t=t.substring(m.raw.length),n.push(m);continue}let C=t;if((h=this.options.extensions)!=null&&h.startInline){let O=1/0,E=t.slice(1),I;this.options.extensions.startInline.forEach(ee=>{I=ee.call({lexer:this},E),typeof I=="number"&&I>=0&&(O=Math.min(O,I))}),O<1/0&&O>=0&&(C=t.substring(0,O+1))}if(m=this.tokenizer.inlineText(C)){t=t.substring(m.raw.length),m.raw.slice(-1)!=="_"&&(l=m.raw.slice(-1)),i=!0;let O=n.at(-1);(O==null?void 0:O.type)==="text"?(O.raw+=m.raw,O.text+=m.text):n.push(m);continue}if(t){this.infiniteLoopError(t.charCodeAt(0));break}}return n},Is),xo=class{constructor(e){ot(this,"options");ot(this,"parser");this.options=e||Ls}space(e){return""}code({text:e,lang:t,escaped:n}){var l;let s=(l=(t||"").match(Ut.notSpaceStart))==null?void 0:l[0],i=e?e.replace(Ut.endingNewline,"")+`
`:"";return s?'<pre><code class="language-'+dn(s)+'">'+(n?i:dn(i,!0))+`</code></pre>
`:"<pre><code>"+(n?i:dn(i,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}def(e){return""}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,n=e.start,s="";for(let r=0;r<e.items.length;r++){let a=e.items[r];s+=this.listitem(a)}let i=t?"ol":"ul",l=t&&n!==1?' start="'+n+'"':"";return"<"+i+l+`>
`+s+"</"+i+`>
`}listitem(e){return`<li>${this.parser.parse(e.tokens)}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t="",n="";for(let i=0;i<e.header.length;i++)n+=this.tablecell(e.header[i]);t+=this.tablerow({text:n});let s="";for(let i=0;i<e.rows.length;i++){let l=e.rows[i];n="";for(let r=0;r<l.length;r++)n+=this.tablecell(l[r]);s+=this.tablerow({text:n})}return s&&(s=`<tbody>${s}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+s+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),n=e.header?"th":"td";return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${dn(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,text:n,tokens:s,autolink:i}){let l=i?dn(n,!0):this.parser.parseInline(s),r=ka(e);if(r===null)return l;e=dn(r,i);let a='<a href="'+e+'"';return t&&(a+=' title="'+dn(t)+'"'),a+=">"+l+"</a>",a}image({href:e,title:t,text:n,tokens:s}){s&&(n=this.parser.parseInline(s,this.parser.textRenderer));let i=ka(e);if(i===null)return dn(n);e=i;let l=`<img src="${dn(e)}" alt="${dn(n)}"`;return t&&(l+=` title="${dn(t)}"`),l+=">",l}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:dn(e.text)}},mr=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}checkbox({raw:e}){return e}},An=class Fl{constructor(t){ot(this,"options");ot(this,"renderer");ot(this,"textRenderer");this.options=t||Ls,this.options.renderer=this.options.renderer||new xo,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new mr}static parse(t,n){return new Fl(n).parse(t)}static parseInline(t,n){return new Fl(n).parseInline(t)}parse(t){var s,i;this.renderer.parser=this;let n="";for(let l=0;l<t.length;l++){let r=t[l];if((i=(s=this.options.extensions)==null?void 0:s.renderers)!=null&&i[r.type]){let u=r,p=this.options.extensions.renderers[u.type].call({parser:this},u);if(p!==!1||!["space","hr","heading","code","table","blockquote","list","checkbox","html","def","paragraph","text"].includes(u.type)){n+=p||"";continue}}let a=r;switch(a.type){case"space":{n+=this.renderer.space(a);break}case"hr":{n+=this.renderer.hr(a);break}case"heading":{n+=this.renderer.heading(a);break}case"code":{n+=this.renderer.code(a);break}case"table":{n+=this.renderer.table(a);break}case"blockquote":{n+=this.renderer.blockquote(a);break}case"list":{n+=this.renderer.list(a);break}case"checkbox":{n+=this.renderer.checkbox(a);break}case"html":{n+=this.renderer.html(a);break}case"def":{n+=this.renderer.def(a);break}case"paragraph":{n+=this.renderer.paragraph(a);break}case"text":{n+=this.renderer.text(a);break}default:{let u='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(u),"";throw new Error(u)}}}return n}parseInline(t,n=this.renderer){var i,l;this.renderer.parser=this;let s="";for(let r=0;r<t.length;r++){let a=t[r];if((l=(i=this.options.extensions)==null?void 0:i.renderers)!=null&&l[a.type]){let p=this.options.extensions.renderers[a.type].call({parser:this},a);if(p!==!1||!["escape","html","link","image","checkbox","strong","em","codespan","br","del","text"].includes(a.type)){s+=p||"";continue}}let u=a;switch(u.type){case"escape":{s+=n.text(u);break}case"html":{s+=n.html(u);break}case"link":{s+=n.link(u);break}case"image":{s+=n.image(u);break}case"checkbox":{s+=n.checkbox(u);break}case"strong":{s+=n.strong(u);break}case"em":{s+=n.em(u);break}case"codespan":{s+=n.codespan(u);break}case"br":{s+=n.br(u);break}case"del":{s+=n.del(u);break}case"text":{s+=n.text(u);break}default:{let p='Token with "'+u.type+'" type was not found.';if(this.options.silent)return console.error(p),"";throw new Error(p)}}}return s}},eo,vi=(eo=class{constructor(e){ot(this,"options");ot(this,"block");this.options=e||Ls}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(e=this.block){return e?Tn.lex:Tn.lexInline}provideParser(e=this.block){return e?An.parse:An.parseInline}},ot(eo,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens","emStrongMask"])),ot(eo,"passThroughHooksRespectAsync",new Set(["preprocess","postprocess","processAllTokens"])),eo),Qp=class{constructor(...e){ot(this,"defaults",ur());ot(this,"options",this.setOptions);ot(this,"parse",this.parseMarkdown(!0));ot(this,"parseInline",this.parseMarkdown(!1));ot(this,"Parser",An);ot(this,"Renderer",xo);ot(this,"TextRenderer",mr);ot(this,"Lexer",Tn);ot(this,"Tokenizer",ko);ot(this,"Hooks",vi);this.use(...e)}walkTokens(e,t){var s,i;let n=[];for(let l of e)switch(n=n.concat(t.call(this,l)),l.type){case"table":{let r=l;for(let a of r.header)n=n.concat(this.walkTokens(a.tokens,t));for(let a of r.rows)for(let u of a)n=n.concat(this.walkTokens(u.tokens,t));break}case"list":{let r=l;n=n.concat(this.walkTokens(r.items,t));break}default:{let r=l;(i=(s=this.defaults.extensions)==null?void 0:s.childTokens)!=null&&i[r.type]?this.defaults.extensions.childTokens[r.type].forEach(a=>{let u=r[a].flat(1/0);n=n.concat(this.walkTokens(u,t))}):r.tokens&&(n=n.concat(this.walkTokens(r.tokens,t)))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(n=>{let s={...n};if(s.async=this.defaults.async||s.async||!1,n.extensions&&(n.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if("renderer"in i){let l=t.renderers[i.name];l?t.renderers[i.name]=function(...r){let a=i.renderer.apply(this,r);return a===!1&&(a=l.apply(this,r)),a}:t.renderers[i.name]=i.renderer}if("tokenizer"in i){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let l=t[i.level];l?l.unshift(i.tokenizer):t[i.level]=[i.tokenizer],i.start&&(i.level==="block"?t.startBlock?t.startBlock.push(i.start):t.startBlock=[i.start]:i.level==="inline"&&(t.startInline?t.startInline.push(i.start):t.startInline=[i.start]))}"childTokens"in i&&i.childTokens&&(t.childTokens[i.name]=i.childTokens)}),s.extensions=t),n.renderer){let i=this.defaults.renderer||new xo(this.defaults);for(let l in n.renderer){if(!(l in i))throw new Error(`renderer '${l}' does not exist`);if(["options","parser"].includes(l))continue;let r=l,a=n.renderer[r],u=i[r];i[r]=(...p)=>{let c=a.apply(i,p);return c===!1&&(c=u.apply(i,p)),c||""}}s.renderer=i}if(n.tokenizer){let i=this.defaults.tokenizer||new ko(this.defaults);for(let l in n.tokenizer){if(!(l in i))throw new Error(`tokenizer '${l}' does not exist`);if(["options","rules","lexer"].includes(l))continue;let r=l,a=n.tokenizer[r],u=i[r];i[r]=(...p)=>{let c=a.apply(i,p);return c===!1&&(c=u.apply(i,p)),c}}s.tokenizer=i}if(n.hooks){let i=this.defaults.hooks||new vi;for(let l in n.hooks){if(!(l in i))throw new Error(`hook '${l}' does not exist`);if(["options","block"].includes(l))continue;let r=l,a=n.hooks[r],u=i[r];vi.passThroughHooks.has(l)?i[r]=p=>{if(this.defaults.async&&vi.passThroughHooksRespectAsync.has(l))return(async()=>{let h=await a.call(i,p);return u.call(i,h)})();let c=a.call(i,p);return u.call(i,c)}:i[r]=(...p)=>{if(this.defaults.async)return(async()=>{let h=await a.apply(i,p);return h===!1&&(h=await u.apply(i,p)),h})();let c=a.apply(i,p);return c===!1&&(c=u.apply(i,p)),c}}s.hooks=i}if(n.walkTokens){let i=this.defaults.walkTokens,l=n.walkTokens;s.walkTokens=function(r){let a=[];return a.push(l.call(this,r)),i&&(a=a.concat(i.call(this,r))),a}}this.defaults={...this.defaults,...s}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return Tn.lex(e,t??this.defaults)}parser(e,t){return An.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{let s={...n},i={...this.defaults,...s},l=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&s.async===!1)return l(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof t>"u"||t===null)return l(new Error("marked(): input parameter is undefined or null"));if(typeof t!="string")return l(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));if(i.hooks&&(i.hooks.options=i,i.hooks.block=e),i.async)return(async()=>{let r=i.hooks?await i.hooks.preprocess(t):t,a=await(i.hooks?await i.hooks.provideLexer(e):e?Tn.lex:Tn.lexInline)(r,i),u=i.hooks?await i.hooks.processAllTokens(a):a;i.walkTokens&&await Promise.all(this.walkTokens(u,i.walkTokens));let p=await(i.hooks?await i.hooks.provideParser(e):e?An.parse:An.parseInline)(u,i);return i.hooks?await i.hooks.postprocess(p):p})().catch(l);try{i.hooks&&(t=i.hooks.preprocess(t));let r=(i.hooks?i.hooks.provideLexer(e):e?Tn.lex:Tn.lexInline)(t,i);i.hooks&&(r=i.hooks.processAllTokens(r)),i.walkTokens&&this.walkTokens(r,i.walkTokens);let a=(i.hooks?i.hooks.provideParser(e):e?An.parse:An.parseInline)(r,i);return i.hooks&&(a=i.hooks.postprocess(a)),a}catch(r){return l(r)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let s="<p>An error occurred:</p><pre>"+dn(n.message+"",!0)+"</pre>";return t?Promise.resolve(s):s}if(t)return Promise.reject(n);throw n}}},Ps=new Qp;function rt(e,t){return Ps.parse(e,t)}rt.options=rt.setOptions=function(e){return Ps.setOptions(e),rt.defaults=Ps.defaults,mc(rt.defaults),rt};rt.getDefaults=ur;rt.defaults=Ls;function ef(...e){return Ps.use(...e),rt.defaults=Ps.defaults,mc(rt.defaults),rt}rt.use=ef;rt.walkTokens=function(e,t){return Ps.walkTokens(e,t)};rt.parseInline=Ps.parseInline;rt.Parser=An;rt.parser=An.parse;rt.Renderer=xo;rt.TextRenderer=mr;rt.Lexer=Tn;rt.lexer=Tn.lex;rt.Tokenizer=ko;rt.Hooks=vi;rt.parse=rt;rt.options;rt.setOptions;rt.walkTokens;rt.parseInline;An.parse;Tn.lex;/*! @license DOMPurify 3.4.16 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.16/LICENSE */function Ea(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,s=Array(t);n<t;n++)s[n]=e[n];return s}function tf(e){if(Array.isArray(e))return e}function nf(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var s,i,l,r,a=[],u=!0,p=!1;try{if(l=(n=n.call(e)).next,t!==0)for(;!(u=(s=l.call(n)).done)&&(a.push(s.value),a.length!==t);u=!0);}catch(c){p=!0,i=c}finally{try{if(!u&&n.return!=null&&(r=n.return(),Object(r)!==r))return}finally{if(p)throw i}}return a}}function sf(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */function of(e,t){return tf(e)||nf(e,t)||lf(e,t)||sf()}function lf(e,t){if(e){if(typeof e=="string")return Ea(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ea(e,t):void 0}}const Cc=Object.entries,Da=Object.setPrototypeOf,rf=Object.isFrozen,af=Object.getPrototypeOf,uf=Object.getOwnPropertyDescriptor;let Ot=Object.freeze,Pt=Object.seal,Ws=Object.create,Tc=typeof Reflect<"u"&&Reflect,zl=Tc.apply,Ul=Tc.construct;Ot||(Ot=function(t){return t});Pt||(Pt=function(t){return t});zl||(zl=function(t,n){for(var s=arguments.length,i=new Array(s>2?s-2:0),l=2;l<s;l++)i[l-2]=arguments[l];return t.apply(n,i)});Ul||(Ul=function(t){for(var n=arguments.length,s=new Array(n>1?n-1:0),i=1;i<n;i++)s[i-1]=arguments[i];return new t(...s)});const Ts=Et(Array.prototype.forEach),cf=Et(Array.prototype.lastIndexOf),Ma=Et(Array.prototype.pop),ri=Et(Array.prototype.push),df=Et(Array.prototype.splice),Ys=Array.isArray,hi=Et(String.prototype.toLowerCase),ol=Et(String.prototype.toString),Oa=Et(String.prototype.match),ai=Et(String.prototype.replace),Ia=Et(String.prototype.indexOf),pf=Et(String.prototype.trim),ff=Et(Number.prototype.toString),vf=Et(Boolean.prototype.toString),Ra=typeof BigInt>"u"?null:Et(BigInt.prototype.toString),Pa=typeof Symbol>"u"?null:Et(Symbol.prototype.toString),on=Et(Object.prototype.hasOwnProperty),ui=Et(Object.prototype.toString),Vt=Et(RegExp.prototype.test),ps=hf(TypeError);function Et(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);for(var n=arguments.length,s=new Array(n>1?n-1:0),i=1;i<n;i++)s[i-1]=arguments[i];return zl(e,t,s)}}function hf(e){return function(){for(var t=arguments.length,n=new Array(t),s=0;s<t;s++)n[s]=arguments[s];return Ul(e,n)}}function Ye(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:hi;if(Da&&Da(e,null),!Ys(t))return e;let s=t.length;for(;s--;){let i=t[s];if(typeof i=="string"){const l=n(i);l!==i&&(rf(t)||(t[s]=l),i=l)}e[i]=!0}return e}function mf(e){for(let t=0;t<e.length;t++)on(e,t)||(e[t]=null);return e}function pn(e){const t=Ws(null);for(const s of Cc(e)){var n=of(s,2);const i=n[0],l=n[1];on(e,i)&&(Ys(l)?t[i]=mf(l):l&&typeof l=="object"&&l.constructor===Object?t[i]=pn(l):t[i]=l)}return t}function gf(e){switch(typeof e){case"string":return e;case"number":return ff(e);case"boolean":return vf(e);case"bigint":return Ra?Ra(e):"0";case"symbol":return Pa?Pa(e):"Symbol()";case"undefined":return ui(e);case"function":case"object":{if(e===null)return ui(e);const t=e,n=wn(t,"toString");if(typeof n=="function"){const s=n(t);return typeof s=="string"?s:ui(s)}return ui(e)}default:return ui(e)}}function wn(e,t){for(;e!==null;){const s=uf(e,t);if(s){if(s.get)return Et(s.get);if(typeof s.value=="function")return Et(s.value)}e=af(e)}function n(){return null}return n}function _f(e){try{return Vt(e,""),!0}catch{return!1}}const La=Ot(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),ll=Ot(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),rl=Ot(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),yf=Ot(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),al=Ot(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),bf=Ot(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Na=Ot(["#text"]),Fa=Ot(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","command","commandfor","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns"]),ul=Ot(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dominant-baseline","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","pointer-events","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-orientation","text-rendering","textlength","type","u1","u2","unicode","values","vector-effect","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),za=Ot(["accent","accentunder","align","bevelled","close","columnalign","columnlines","columnspacing","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lquote","lspace","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Zi=Ot(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),wf=Pt(/{{[\w\W]*|^[\w\W]*}}/g),kf=Pt(/<%[\w\W]*|^[\w\W]*%>/g),xf=Pt(/\${[\w\W]*/g),Sf=Pt(/^data-[\-\w.\u00B7-\uFFFF]+$/),$f=Pt(/^aria-[\-\w]+$/),Ua=Pt(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Cf=Pt(/^(?:\w+script|data):/i),Tf=Pt(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Af=Pt(/^html$/i),Ef=Pt(/^[a-z][.\w]*(-[.\w]+)+$/i),ja=Pt(/<[/\w!]/g),Ba=Pt(/<[/\w]/g),Df=Pt(/<\/no(script|embed|frames)/i),Mf=Pt(/\/>/i),cn={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,processingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},Ac=["style","script","xmp","iframe","noembed","noframes","plaintext","noscript"],Of=Ot(Ye({},Ac)),If=(function(){const e={};return Ts(Ac,t=>{e[t]=Pt(new RegExp("</"+t+"(?=[\\t\\n\\f\\r />])","i"))}),Ot(e)})(),Rf=function(){return typeof window>"u"?null:window},Pf=function(t,n){if(typeof t!="object"||typeof t.createPolicy!="function")return null;let s=null;const i="data-tt-policy-suffix";n&&n.hasAttribute(i)&&(s=n.getAttribute(i));const l="dompurify"+(s?"#"+s:"");try{return t.createPolicy(l,{createHTML(r){return r},createScriptURL(r){return r}})}catch{return console.warn("TrustedTypes policy "+l+" could not be created."),null}},Va=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},fs=function(t,n,s,i){return on(t,n)&&Ys(t[n])?Ye(i.base?pn(i.base):{},t[n],i.transform):s},cl=function(t,n,s){const i=on(t,n)?t[n]:void 0;return i&&typeof i=="object"?pn(i):s()};function Ec(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Rf();const t=re=>Ec(re);if(t.version="3.4.16",t.removed=[],!e||!e.document||e.document.nodeType!==cn.document||!e.Element)return t.isSupported=!1,t;let n=e.document;const s=n,i=s.currentScript;e.DocumentFragment;const l=e.HTMLTemplateElement,r=e.Node,a=e.Element,u=e.NodeFilter;e.NamedNodeMap===void 0&&(e.NamedNodeMap||e.MozNamedAttrMap),e.HTMLFormElement;const p=e.DOMParser,c=e.trustedTypes,h=a.prototype,m=wn(h,"cloneNode"),C=wn(h,"remove"),O=wn(h,"removeAttributeNode"),E=wn(h,"nextSibling"),I=wn(h,"childNodes"),ee=wn(h,"parentNode"),R=wn(h,"shadowRoot"),te=wn(h,"attributes"),ie=r&&r.prototype?wn(r.prototype,"nodeType"):null,Q=r&&r.prototype?wn(r.prototype,"nodeName"):null,j=r&&r.prototype?wn(r.prototype,"ownerDocument"):null,D=function(_){return ie?ie(_):_.nodeType},F=function(_){return Q?Q(_):_.nodeName};if(typeof l=="function"){const re=n.createElement("template");re.content&&re.content.ownerDocument&&(n=re.content.ownerDocument)}let G,H="",q,me=!1,Se=0;const et=function(){if(Se>0)throw ps('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.')},Je=function(_){et(),Se++;try{return G.createHTML(_)}finally{Se--}},ke=function(_){et(),Se++;try{return G.createScriptURL(_)}finally{Se--}},Ae=function(){return me||(q=Pf(c,i),me=!0),q},Ee=n,We=Ee.implementation,Ct=Ee.createNodeIterator,bt=Ee.createDocumentFragment,qe=Ee.getElementsByTagName,Tt=s.importNode;let ze=Va();t.isSupported=typeof Cc=="function"&&typeof ee=="function"&&We&&We.createHTMLDocument!==void 0;const Mt=wf,mt=kf,wt=xf,Z=Sf,B=$f,ge=Cf,Ue=Tf,x=Ef;let y=Ua,P=null;const T=Ye({},[...La,...ll,...rl,...al,...Na]);let w=null;const U=Ye({},[...Fa,...ul,...za,...Zi]);let W=Object.seal(Ws(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),J=null,N=null;const z=Object.seal(Ws(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let ae=!0,oe=!0,ve=!1,fe=!0,De=!1,Ie=!0,Ne=!1,xe=!1,je=null,kt=null,xt=!1,Lt=!1,Nt=!1,St=!1,pt=!0,_n=!1;const Sn="user-content-";let jt=!0,ln=!1,$n={},sn=null;const Ns=Ye({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","selectedcontent","style","svg","template","thead","title","video","xmp"]);let Gn=null;const Fs=Ye({},["audio","video","img","source","image","track"]);let ws=null;const ks=Ye({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Xn="http://www.w3.org/1998/Math/MathML",us="http://www.w3.org/2000/svg",Bt="http://www.w3.org/1999/xhtml";let A=Bt,S=!1,M=null;const he=Ye({},[Xn,us,Bt],ol),ye=Ot(["mi","mo","mn","ms","mtext"]);let Ze=Ye({},ye);const Be=Ot(["annotation-xml"]);let Ke=Ye({},Be);const de=Ye({},["title","style","font","a","script"]);let be=null;const Fe=["application/xhtml+xml","text/html"],Pe="text/html";let _e=null,Ve=null;const Gt=n.createElement("form"),Xt=function(_){return _ instanceof RegExp||_ instanceof Function},$=function(){let _=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(Ve&&Ve===_)return;(!_||typeof _!="object")&&(_={}),_=pn(_),be=Fe.indexOf(_.PARSER_MEDIA_TYPE)===-1?Pe:_.PARSER_MEDIA_TYPE,_e=be==="application/xhtml+xml"?ol:hi,P=fs(_,"ALLOWED_TAGS",T,{transform:_e}),w=fs(_,"ALLOWED_ATTR",U,{transform:_e}),M=fs(_,"ALLOWED_NAMESPACES",he,{transform:ol}),ws=fs(_,"ADD_URI_SAFE_ATTR",ks,{transform:_e,base:ks}),Gn=fs(_,"ADD_DATA_URI_TAGS",Fs,{transform:_e,base:Fs}),sn=fs(_,"FORBID_CONTENTS",Ns,{transform:_e}),J=fs(_,"FORBID_TAGS",pn({}),{transform:_e}),N=fs(_,"FORBID_ATTR",pn({}),{transform:_e}),$n=on(_,"USE_PROFILES")?_.USE_PROFILES&&typeof _.USE_PROFILES=="object"?pn(_.USE_PROFILES):_.USE_PROFILES:!1,ae=_.ALLOW_ARIA_ATTR!==!1,oe=_.ALLOW_DATA_ATTR!==!1,ve=_.ALLOW_UNKNOWN_PROTOCOLS||!1,fe=_.ALLOW_SELF_CLOSE_IN_ATTR!==!1,De=_.SAFE_FOR_TEMPLATES||!1,Ie=_.SAFE_FOR_XML!==!1,Ne=_.WHOLE_DOCUMENT||!1,Lt=_.RETURN_DOM||!1,Nt=_.RETURN_DOM_FRAGMENT||!1,St=_.RETURN_TRUSTED_TYPE||!1,xt=_.FORCE_BODY||!1,pt=_.SANITIZE_DOM!==!1,_n=_.SANITIZE_NAMED_PROPS||!1,jt=_.KEEP_CONTENT!==!1,ln=_.IN_PLACE||!1,y=_f(_.ALLOWED_URI_REGEXP)?_.ALLOWED_URI_REGEXP:Ua,A=typeof _.NAMESPACE=="string"?_.NAMESPACE:Bt,Ze=cl(_,"MATHML_TEXT_INTEGRATION_POINTS",()=>Ye({},ye)),Ke=cl(_,"HTML_INTEGRATION_POINTS",()=>Ye({},Be));const L=cl(_,"CUSTOM_ELEMENT_HANDLING",()=>Ws(null));if(W=Ws(null),on(L,"tagNameCheck")&&Xt(L.tagNameCheck)&&(W.tagNameCheck=L.tagNameCheck),on(L,"attributeNameCheck")&&Xt(L.attributeNameCheck)&&(W.attributeNameCheck=L.attributeNameCheck),on(L,"allowCustomizedBuiltInElements")&&typeof L.allowCustomizedBuiltInElements=="boolean"&&(W.allowCustomizedBuiltInElements=L.allowCustomizedBuiltInElements),Pt(W),De&&(oe=!1),Nt&&(Lt=!0),$n&&(P=Ye({},Na),w=Ws(null),$n.html===!0&&(Ye(P,La),Ye(w,Fa)),$n.svg===!0&&(Ye(P,ll),Ye(w,ul),Ye(w,Zi)),$n.svgFilters===!0&&(Ye(P,rl),Ye(w,ul),Ye(w,Zi)),$n.mathMl===!0&&(Ye(P,al),Ye(w,za),Ye(w,Zi))),z.tagCheck=null,z.attributeCheck=null,on(_,"ADD_TAGS")&&(typeof _.ADD_TAGS=="function"?z.tagCheck=_.ADD_TAGS:Ys(_.ADD_TAGS)&&(P===T&&(P=pn(P)),Ye(P,_.ADD_TAGS,_e))),on(_,"ADD_ATTR")&&(typeof _.ADD_ATTR=="function"?z.attributeCheck=_.ADD_ATTR:Ys(_.ADD_ATTR)&&(w===U&&(w=pn(w)),Ye(w,_.ADD_ATTR,_e))),on(_,"ADD_FORBID_CONTENTS")&&Ys(_.ADD_FORBID_CONTENTS)&&(sn===Ns&&(sn=pn(sn)),Ye(sn,_.ADD_FORBID_CONTENTS,_e)),jt&&(P["#text"]=!0),Ne&&Ye(P,["html","head","body"]),P.table&&(Ye(P,["tbody"]),delete J.tbody),_.TRUSTED_TYPES_POLICY){if(typeof _.TRUSTED_TYPES_POLICY.createHTML!="function")throw ps('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof _.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw ps('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');const ne=G;G=_.TRUSTED_TYPES_POLICY;try{H=Je("")}catch(pe){throw G=ne,pe}}else _.TRUSTED_TYPES_POLICY===null?(G=void 0,H=""):(G===void 0&&(G=Ae()),G&&typeof H=="string"&&(H=Je("")));Ot&&Ot(_),Ve=_},b=Ye({},[...ll,...rl,...yf]),ue=Ye({},[...al,...bf]),$e=function(_,L,ne){return L.namespaceURI===Bt?_==="svg":L.namespaceURI===Xn?_==="svg"&&(ne==="annotation-xml"||Ze[ne]):!!b[_]},Ge=function(_,L,ne){return L.namespaceURI===Bt?_==="math":L.namespaceURI===us?_==="math"&&Ke[ne]:!!ue[_]},ut=function(_,L,ne){return L.namespaceURI===us&&!Ke[ne]||L.namespaceURI===Xn&&!Ze[ne]?!1:!ue[_]&&(de[_]||!b[_])},k=function(_){let L=ee(_);(!L||!L.tagName)&&(L={namespaceURI:A,tagName:"template"});const ne=hi(_.tagName),pe=hi(L.tagName);return M[_.namespaceURI]?_.namespaceURI===us?$e(ne,L,pe):_.namespaceURI===Xn?Ge(ne,L,pe):_.namespaceURI===Bt?ut(ne,L,pe):!!(be==="application/xhtml+xml"&&M[_.namespaceURI]):!1},Y=function(_){ri(t.removed,{element:_});try{ee(_).removeChild(_)}catch{if(C(_),!ee(_))throw ps("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place")}},Oe=function(_,L,ne){try{O(_,L)}catch{try{_.removeAttribute(ne)}catch{}}},ft=function(_){It(_);const L=I(_);if(L){const pe=[];Ts(L,Ce=>{ri(pe,Ce)}),Ts(pe,Ce=>{try{C(Ce)}catch{}})}const ne=te(_);if(ne)for(let pe=ne.length-1;pe>=0;--pe){const Ce=ne[pe],He=Ce&&Ce.name;typeof He=="string"&&Oe(_,Ce,He)}},Ft=function(_,L,ne){if(!ne)try{ne=L.getAttributeNode(_)}catch{ne=null}ri(t.removed,{attribute:ne||null,from:L});try{ne?O(L,ne):L.removeAttribute(_)}catch{try{L.removeAttribute(_)}catch{}}if(_==="is")if(Lt||Nt)try{Y(L)}catch{}else try{L.setAttribute(_,"")}catch{}},At=function(_){const L=te(_);if(L)for(let ne=L.length-1;ne>=0;--ne){const pe=L[ne],Ce=pe&&pe.name;typeof Ce!="string"||w[_e(Ce)]||Oe(_,pe,Ce)}},It=function(_){const L=[_];for(;L.length>0;){const ne=L.pop();D(ne)===cn.element&&At(ne);const pe=I(ne);if(pe)for(let Ce=pe.length-1;Ce>=0;--Ce)L.push(pe[Ce])}},gt=function(_,L){return Ie?_==="patchsrc"?!0:_==="for"&&L!=="label"&&L!=="output":!1},rn=function(_){if(!Ie)return;const L=[_];for(;L.length>0;){const ne=L.pop(),pe=D(ne);if(pe===cn.processingInstruction||pe===cn.comment&&Vt(Ba,ne.data)){try{C(ne)}catch{}continue}if(pe===cn.element){const He=ne,Xe=_e(F(ne));try{He.hasAttribute&&He.hasAttribute("patchsrc")&&He.removeAttribute("patchsrc"),He.hasAttribute&&He.hasAttribute("for")&&gt("for",Xe)&&He.removeAttribute("for")}catch{}}const Ce=I(ne);if(Ce)for(let He=Ce.length-1;He>=0;--He)L.push(Ce[He])}},zi=function(_){let L=null,ne=null;if(xt)_="<remove></remove>"+_;else{const He=Oa(_,/^[\r\n\t ]+/);ne=He&&He[0]}be==="application/xhtml+xml"&&A===Bt&&(_='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+_+"</body></html>");const pe=G?Je(_):_;if(A===Bt)try{L=new p().parseFromString(pe,be)}catch{}if(!L||!L.documentElement){L=We.createDocument(A,"template",null);try{L.documentElement.innerHTML=S?H:pe}catch{}}const Ce=L.body||L.documentElement;return _&&ne&&Ce.insertBefore(n.createTextNode(ne),Ce.childNodes[0]||null),A===Bt?qe.call(L,Ne?"html":"body")[0]:Ne?L.documentElement:Ce},Yt=function(_){const L=j?j(_):_.ownerDocument;return Ct.call(L||_,_,u.SHOW_ELEMENT|u.SHOW_COMMENT|u.SHOW_TEXT|u.SHOW_PROCESSING_INSTRUCTION|u.SHOW_CDATA_SECTION,null)},an=function(_){return _=ai(_,Mt," "),_=ai(_,mt," "),_=ai(_,wt," "),_},xs=function(_){var L;_.normalize();const ne=j?j(_):_.ownerDocument,pe=Ct.call(ne||_,_,u.SHOW_TEXT|u.SHOW_COMMENT|u.SHOW_CDATA_SECTION|u.SHOW_PROCESSING_INSTRUCTION,null);let Ce=pe.nextNode();for(;Ce;)Ce.data=an(Ce.data),Ce=pe.nextNode();const He=(L=_.querySelectorAll)===null||L===void 0?void 0:L.call(_,"template");He&&Ts(He,Xe=>{yn(Xe.content)&&xs(Xe.content)})},Pn=function(_){const L=Q?Q(_):null;return typeof L!="string"||_e(L)!=="form"?!1:typeof _.nodeName!="string"||typeof _.textContent!="string"||typeof _.removeChild!="function"||_.attributes!==te(_)||typeof _.removeAttribute!="function"||typeof _.removeAttributeNode!="function"||typeof _.getAttributeNode!="function"||typeof _.setAttribute!="function"||typeof _.namespaceURI!="string"||typeof _.insertBefore!="function"||typeof _.hasChildNodes!="function"||_.nodeType!==ie(_)||_.childNodes!==I(_)},yn=function(_){if(!ie||typeof _!="object"||_===null)return!1;try{return ie(_)===cn.documentFragment}catch{return!1}},ni=function(_){if(!ie||typeof _!="object"||_===null)return!1;try{return typeof ie(_)=="number"}catch{return!1}};function Ln(re,_,L){re.length!==0&&Ts(re,ne=>{ne.call(t,_,L,Ve)})}const Oc=function(_,L){return!!(Ie&&_.hasChildNodes()&&!ni(_.firstElementChild)&&Vt(ja,_.textContent)&&Vt(ja,_.innerHTML)||Ie&&_.namespaceURI===Bt&&Of[L]&&(ni(_.firstElementChild)||typeof _.textContent=="string"&&Vt(If[L],_.textContent))||_.nodeType===cn.processingInstruction||Ie&&_.nodeType===cn.comment&&Vt(Ba,_.data))},Ui=function(_,L){if(_ instanceof RegExp)return Vt(_,L);if(_ instanceof Function){for(var ne=arguments.length,pe=new Array(ne>2?ne-2:0),Ce=2;Ce<ne;Ce++)pe[Ce-2]=arguments[Ce];return!!_(L,...pe)}return!1},Ic=function(_,L,ne){if(!J[L]&&br(L)&&Ui(W.tagNameCheck,L))return!1;if(jt&&!sn[L]){const pe=ee(_),Ce=I(_);if(Ce&&pe){const He=Ce.length;for(let Xe=He-1;Xe>=0;--Xe){const $t=_===ne?m(Ce[Xe],!0):Ce[Xe];pe.insertBefore($t,E(_))}}}return Y(_),!0},gr=function(_,L,ne,pe){return _.length===0?L:L===ne||L===pe?pn(L):L},zs=function(_,L){return _===L||ee(_)!==null?!1:(ln&&It(_),!0)},_r=function(_,L){if(Ln(ze.beforeSanitizeElements,_,null),zs(_,L))return!0;if(Pn(_))return Y(_),!0;const ne=_e(F(_));if(P=gr(ze.uponSanitizeElement,P,T,je),Ln(ze.uponSanitizeElement,_,{tagName:ne,allowedTags:P}),zs(_,L))return!0;if(Oc(_,ne))return Y(_),!0;if(J[ne]||!(z.tagCheck instanceof Function&&z.tagCheck(ne))&&!P[ne]){const pe=Ic(_,ne,L);return pe===!1&&(Ln(ze.afterSanitizeElements,_,null),zs(_,L))?!0:pe}if(D(_)===cn.element&&!k(_)||(ne==="noscript"||ne==="noembed"||ne==="noframes")&&Vt(Df,_.innerHTML))return Y(_),!0;if(De&&_.nodeType===cn.text){const pe=an(_.textContent);_.textContent!==pe&&(ri(t.removed,{element:_.cloneNode()}),_.textContent=pe)}return Ln(ze.afterSanitizeElements,_,null),zs(_,L)},yr=function(_,L,ne){if(N[L]||gt(L,_)||pt&&(L==="id"||L==="name")&&(ne in n||ne in Gt))return!1;const pe=w[L]||z.attributeCheck instanceof Function&&z.attributeCheck(L,_);return oe&&Vt(Z,L)||ae&&Vt(B,L)?!0:pe?ws[L]||Vt(y,ai(ne,Ue,""))||(L==="src"||L==="xlink:href"||L==="href")&&_!=="script"&&Ia(ne,"data:")===0&&Gn[_]||ve&&!Vt(ge,ai(ne,Ue,""))?!0:!ne:br(_)&&Ui(W.tagNameCheck,_)&&Ui(W.attributeNameCheck,L,_)||L==="is"&&W.allowCustomizedBuiltInElements&&Ui(W.tagNameCheck,ne)},Rc=Ye({},["annotation-xml","color-profile","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","missing-glyph"]),br=function(_){return!Rc[hi(_)]&&Vt(x,_)},Pc=function(_,L,ne,pe){if(G&&typeof c=="object"&&typeof c.getAttributeType=="function"&&!ne)switch(c.getAttributeType(_,L)){case"TrustedHTML":return Je(pe);case"TrustedScriptURL":return ke(pe)}return pe},Lc=function(_,L,ne,pe){try{return ne?_.setAttributeNS(ne,L,pe):_.setAttribute(L,pe),Pn(_)?(Y(_),!1):!0}catch{return Ft(L,_),!1}},wr=function(_,L){if(Ln(ze.beforeSanitizeAttributes,_,null),zs(_,L))return;const ne=_.attributes;if(!ne||Pn(_))return;w=gr(ze.uponSanitizeAttribute,w,U,kt);const pe={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:w,forceKeepAttr:void 0};let Ce=ne.length;const He=_e(_.nodeName);for(;Ce--;){const Xe=ne[Ce],$t=Xe.name,bn=Xe.namespaceURI,un=Xe.value,Us=_e($t),jo=un;let Jt=$t==="value"?jo:pf(jo),kr=!1;if(pe.attrName=Us,pe.attrValue=Jt,pe.keepAttr=!0,pe.forceKeepAttr=void 0,Ln(ze.uponSanitizeAttribute,_,pe),Jt=pe.attrValue,_n&&(Us==="id"||Us==="name")&&Ia(Jt,Sn)!==0&&(Ft($t,_,Xe),Jt=Sn+Jt,kr=!0),Ie&&Vt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,Jt)){Ft($t,_,Xe);continue}if(Us==="attributename"&&Oa(Jt,"href")){Ft($t,_,Xe);continue}if(!pe.forceKeepAttr){if(!pe.keepAttr){Ft($t,_,Xe);continue}if(!fe&&Vt(Mf,Jt)){Ft($t,_,Xe);continue}if(De&&(Jt=an(Jt)),!yr(He,Us,Jt)){Ft($t,_,Xe);continue}Jt=Pc(He,Us,bn,Jt),Jt!==jo&&Lc(_,$t,bn,Jt)&&kr&&Ma(t.removed)}}Ln(ze.afterSanitizeAttributes,_,null),zs(_,L)},ji=function(_){let L=null;const ne=Yt(_);for(Ln(ze.beforeSanitizeShadowDOM,_,null);L=ne.nextNode();)if(Ln(ze.uponSanitizeShadowNode,L,null),_r(L,_),wr(L,_),yn(L.content)&&ji(L.content),D(L)===cn.element){const pe=R(L);yn(pe)&&(Uo(pe),ji(pe))}Ln(ze.afterSanitizeShadowDOM,_,null)},Uo=function(_){const L=[{node:_,shadow:null}];for(;L.length>0;){const ne=L.pop();if(ne.shadow){ji(ne.shadow);continue}const pe=ne.node,Ce=D(pe)===cn.element,He=I(pe);if(He)for(let Xe=He.length-1;Xe>=0;--Xe)L.push({node:He[Xe],shadow:null});if(Ce){const Xe=Q?Q(pe):null;if(typeof Xe=="string"&&_e(Xe)==="template"){const $t=pe.content;yn($t)&&L.push({node:$t,shadow:null})}}if(Ce){const Xe=R(pe);yn(Xe)&&L.push({node:null,shadow:Xe},{node:Xe,shadow:null})}}};return t.sanitize=function(re){let _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},L=null,ne=null,pe=null,Ce=null;if(S=!re,S&&(re="<!-->"),typeof re!="string"&&!ni(re)&&(re=gf(re),typeof re!="string"))throw ps("dirty is not a string, aborting");if(!t.isSupported)return re;xe?(P=je,w=kt):$(_),(ze.uponSanitizeElement.length>0||ze.uponSanitizeAttribute.length>0)&&(P=pn(P)),ze.uponSanitizeAttribute.length>0&&(w=pn(w)),t.removed=[];const He=ln&&typeof re!="string"&&ni(re);if(He){rn(re);const bn=F(re);if(typeof bn=="string"){const un=_e(bn);if(!P[un]||J[un])throw ft(re),ps("root node is forbidden and cannot be sanitized in-place")}if(Pn(re))throw ft(re),ps("root node is clobbered and cannot be sanitized in-place");try{Uo(re)}catch(un){throw ft(re),un}}else if(ni(re))L=zi("<!---->"),ne=L.ownerDocument.importNode(re,!0),ne.nodeType===cn.element&&ne.nodeName==="BODY"||ne.nodeName==="HTML"?L=ne:L.appendChild(ne),Uo(L);else{if(!Lt&&!De&&!Ne&&re.indexOf("<")===-1)return G&&St?Je(re):re;if(L=zi(re),!L)return Lt?null:St?H:""}L&&xt&&Y(L.firstChild);const Xe=He?re:L;try{const bn=Yt(Xe);for(;pe=bn.nextNode();)_r(pe,Xe),wr(pe,Xe),yn(pe.content)&&ji(pe.content)}catch(bn){throw He&&(ft(re),Ts(t.removed,un=>{un.element&&It(un.element)})),bn}if(He){let bn=!1;if(Ts(t.removed,un=>{un.element&&(un.element===re&&(bn=!0),It(un.element))}),bn)throw ps("a node selected for removal could not be safely returned; refusing to sanitize in place");return De&&xs(re),re}if(Lt){if(De&&xs(L),Nt)for(Ce=bt.call(L.ownerDocument);L.firstChild;)Ce.appendChild(L.firstChild);else Ce=L;return(w.shadowroot||w.shadowrootmode)&&(Ce=Tt.call(s,Ce,!0)),Ce}let $t=Ne?L.outerHTML:L.innerHTML;return Ne&&P["!doctype"]&&L.ownerDocument&&L.ownerDocument.doctype&&L.ownerDocument.doctype.name&&Vt(Af,L.ownerDocument.doctype.name)&&($t="<!DOCTYPE "+L.ownerDocument.doctype.name+`>
`+$t),De&&($t=an($t)),G&&St?Je($t):$t},t.setConfig=function(){let re=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};$(re),xe=!0,je=P,kt=w},t.clearConfig=function(){Ve=null,xe=!1,je=null,kt=null,G=q,H=""},t.isValidAttribute=function(re,_,L){Ve||$({});const ne=_e(re),pe=_e(_);return yr(ne,pe,L)},t.addHook=function(re,_){typeof _=="function"&&on(ze,re)&&ri(ze[re],_)},t.removeHook=function(re,_){if(on(ze,re)){if(_!==void 0){const L=cf(ze[re],_);return L===-1?void 0:df(ze[re],L,1)[0]}return Ma(ze[re])}},t.removeHooks=function(re){on(ze,re)&&(ze[re]=[])},t.removeAllHooks=function(){ze=Va()},t}var Lf=Ec();const Nf={class:"answer-markdown"},Ff=["innerHTML"],zf={key:1},Uf=["aria-label"],jf={x:"4",y:"34"},Bf={x:"4",y:"183"},Vf=["d"],Hf=["cx","cy"],Wf=["x"],qf={__name:"AnswerMarkdown",props:{text:{type:String,default:""}},setup(e){const t=e,n=ce(()=>{const i=[];let l=0;const r=/```chart\s*\n([\s\S]*?)```/g;for(const a of t.text.matchAll(r)){i.push({html:s(t.text.slice(l,a.index))});try{const u=JSON.parse(a[1]);if(!Array.isArray(u.labels)||!Array.isArray(u.values)||u.labels.length!==u.values.length||u.values.length<2||u.values.length>100||!u.values.every(m=>typeof m=="number"&&Number.isFinite(m)))throw Error("invalid");const p=Math.min(0,...u.values),c=Math.max(...u.values),h=c-p||1;i.push({chart:{...u,low:p,high:c,path:u.values.map((m,C)=>(C?"L":"M")+(40+C/(u.values.length-1)*520)+","+(180-(m-p)/h*150)).join(" ")}})}catch{i.push({html:s(a[0])})}l=a.index+a[0].length}return i.push({html:s(t.text.slice(l))}),i});function s(i){return Lf.sanitize(rt.parse(i,{breaks:!0,gfm:!0}),{FORBID_TAGS:["style","iframe","script"]})}return(i,l)=>(d(),f("div",Nf,[(d(!0),f(X,null,le(n.value,(r,a)=>(d(),f(X,{key:a},[r.html?(d(),f("div",{key:0,innerHTML:r.html},null,8,Ff)):V("",!0),r.chart?(d(),f("figure",zf,[o("figcaption",null,[Te(v(r.chart.title||"数据趋势")+" ",1),o("small",null,v(r.chart.unit),1)]),(d(),f("svg",{viewBox:"0 0 600 220",role:"img","aria-label":r.chart.title||"数据趋势"},[l[0]||(l[0]=o("line",{x1:"40",x2:"560",y1:"180",y2:"180",stroke:"#dcccd0"},null,-1)),o("text",jf,v(r.chart.high),1),o("text",Bf,v(r.chart.low),1),o("path",{d:r.chart.path,fill:"none",stroke:"#941535","stroke-width":"3"},null,8,Vf),(d(!0),f(X,null,le(r.chart.values,(u,p)=>(d(),f("g",{key:p},[o("circle",{cx:40+p/(r.chart.values.length-1)*520,cy:180-(u-r.chart.low)/(r.chart.high-r.chart.low||1)*150,r:"4",fill:"#941535"},[o("title",null,v(r.chart.labels[p])+"："+v(u)+" "+v(r.chart.unit),1)],8,Hf),p===0||p===r.chart.values.length-1||r.chart.values.length<=8?(d(),f("text",{key:0,x:40+p/(r.chart.values.length-1)*520,y:"207","text-anchor":"middle"},v(r.chart.labels[p]),9,Wf)):V("",!0)]))),128))],8,Uf))])):V("",!0)],64))),128))]))}},Kf=Dt(qf,[["__scopeId","data-v-ab77ef50"]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gf=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ha=e=>e==="";/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xf=(...e)=>e.filter((t,n,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wa=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yf=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,s)=>s?s.toUpperCase():n.toLowerCase());/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jf=e=>{const t=Yf(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ci={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zf=({name:e,iconNode:t,absoluteStrokeWidth:n,"absolute-stroke-width":s,strokeWidth:i,"stroke-width":l,size:r=ci.width,color:a=ci.stroke,...u},{slots:p})=>$l("svg",{...ci,...u,width:r,height:r,stroke:a,"stroke-width":Ha(n)||Ha(s)||n===!0||s===!0?Number(i||l||ci["stroke-width"])*24/Number(r):i||l||ci["stroke-width"],class:Xf("lucide",u.class,...e?[`lucide-${Wa(Jf(e))}-icon`,`lucide-${Wa(e)}`]:["lucide-icon"]),...!p.default&&!Gf(u)&&{"aria-hidden":"true"}},[...t.map(c=>$l(...c)),...p.default?[p.default()]:[]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bs=(e,t)=>(n,{slots:s,attrs:i})=>$l(Zf,{...i,...n,iconNode:t,name:e},s);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qf=bs("arrow-down",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ev=bs("arrow-up",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tv=bs("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv=bs("list-plus",[["path",{d:"M16 5H3",key:"m91uny"}],["path",{d:"M11 12H3",key:"51ecnj"}],["path",{d:"M16 19H3",key:"zzsher"}],["path",{d:"M18 9v6",key:"1twb98"}],["path",{d:"M21 12h-6",key:"bt1uis"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv=bs("refresh-cw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv=bs("share-2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov=bs("thumbs-up",[["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",key:"emmmcr"}],["path",{d:"M7 10v12",key:"1qc93n"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=bs("thumbs-down",[["path",{d:"M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z",key:"m61m77"}],["path",{d:"M17 14V2",key:"8ymqnk"}]]);function qa(){return{routeLabel:"竞品分析",traceMode:"思考过程",text:`## 清华优优 × 清华杨奇函语文说：竞品差异与下一步

**结论：优先借鉴“明确学科痛点＋具体方法演示”的表达，把清华优优的学习规划与家长沟通做成可执行的系列。两者有教育受众交集，但不宜直接以粉丝量判断内容质量。**

### 1. 账号定位：专业语文入口与综合学习陪伴

公开账号资料显示，“清华杨奇函语文说”以杨奇函个人身份和清华背景建立识别，简介突出语文作文相关经历，账号有商品橱窗。这是公开简介的自我表述，并非独立核验其每项履历或成绩。[1]

清华优优在当前工作台中的定位是学习方法、家长沟通与直播答疑。相较专门的语文入口，可选择“家长怎样帮助孩子落实方法”作为差异化方向。

### 2. 内容结构：把痛点变成看得见的方法

检索到的公开短视频标题集中在语文学习、阅读和作文，常从明确问题或认知反差切入。[2][3] 本次未取得完整逐字稿，不把开场后的具体镜头、互动及转化链路写成已验证事实。

**建议借鉴的结构**：具体问题 → 一份材料或例题 → 方法演示 → 可执行练习 → 评论区答疑。它是基于标题线索和账号目标提出的创作方案，仍需原片核验。

### 3. 可以借鉴什么，怎样变成自己的表达

- 钩子从“大道理”改为具体卡点：例如“阅读都看懂了，为什么还拿不到分？”
- 一条内容只交付一个方法：拿同一段材料演示怎样找依据，避免只说“多阅读”。
- 让家长有明确动作：把方法转成一道可提问的问题或一张练习卡。
- 短视频引出问题，直播做完整示范；引用自己的课程原文，不复制竞品话术。

### 4. 差异化机会

清华优优可以围绕“家长如何识别卡点、如何陪孩子练一次”建立系列。内容包含学生方法和家长配合两个视角，并用直播答疑承接具体问题。这是策略建议，尚未通过发布结果验证。

### 5. 接下来四周怎么做

| 周期 | 短视频候选 | 直播主题 | 交付物 |
|---|---|---|---|
| 10/12–10/18 | 阅读看懂却答不全：先找原文依据 | 国庆后收心与学习卡点诊断 | 60秒脚本＋三天行动表 |
| 10/19–10/25 | 作文有素材却写不出：把经历拆成细节 | 期中前阅读与写作答疑 | 示例段落＋家长提问卡 |
| 10/26–11/1 | 错题订正后还错：做一次同类回测 | 月考复盘与下一周计划 | 错题复盘SOP |
| 11/2–11/8 | 家长检查作业：少问会不会，多问怎么想 | 家长陪伴与自主学习 | 互动话术＋周计划 |

以上是可编辑计划草案，不代表已经写入排期。建议先选一条，生成完整口播和分镜，再确认保存到知识库或加入排期。

### 6. 资料边界与评估

第三方页面可定位到“清华杨奇函语文说”，但页面统计时间异常；其他相近名称账号的抖音号不同，不能合并粉丝、点赞或成交数据。因此这次不比较实时粉丝量、GMV或增长率。[1]

先评估脚本是否被采用、是否完成发布；取得同口径数据后，再比较播放、关注转化和直播互动。**公开事实、工作台资料与策略建议分别使用，不把示例数据当作真实经营成绩。**`,sources:[{number:1,title:"清华杨奇函语文说｜公开账号资料",locator:"联网资料 · 2026-10-10整理",uri:"https://dy3.feigua.cn/bloggeropen/D7223858805269E64860A1195A005D49",web:!0,text:"第三方账号页展示账号名称、抖音号41623642069、简介与商品橱窗。统计时间异常，本分析不采用实时经营数值。"},{number:2,title:"语文学习与阅读｜公开内容标题",locator:"抖音公开页面 · 标题线索",uri:"https://www.douyin.com/video/7613966038979366186",web:!0,text:"检索页面涉及杨奇函语文教学、写作和阅读。未取得完整逐字稿，不据此推断完整内容结构。"},{number:3,title:"语文认知反差｜公开内容标题",locator:"抖音公开页面 · 标题线索",uri:"https://www.douyin.com/video/7613965192908655881",web:!0,text:"标题使用认知反差作为语文学习入口；属于公开内容参考，非全量账号表现。"}],steps:[{name:"识别竞品与账号范围",status:"done",execution:"规则匹配",detail:"匹配清华优优与清华杨奇函语文说的对比任务。"},{name:"联网资料核验",status:"done",execution:"提前检索资料 · 2026-10-10",detail:"核对公开账号名称、抖音号和内容标题；相近名称账号不合并统计。"},{name:"分析定位与内容机会",status:"done",execution:"预先整理的分析结果",detail:"本轮返回已整理答案，未实时调用模型；区分公开资料、工作台定位与创作建议。"},{name:"输出选题与执行方案",status:"done",execution:"缓存产物与来源",detail:"提供四周计划草案，附可打开的公开来源；确认后才加入知识库或排期。"}],artifacts:[{type:"document",label:"加入知识库"},{type:"planning",label:"加入内容排期"}]}}const rv=JSON.parse(`[{"id":"course-c4e68cbb933ba31d","title":"数学课程ppt.pptx","subspace":"产品课程","subject":"数学","relative_path":"数学/数学课程ppt.pptx","space_name":"清华优优 AI Wiki","doc_type":"document","uri":"https://northstar-copilot.com/product-courses/c4e68cbb933ba31d/数学课程ppt.pptx","size":22656126,"local_content":"第 1 页\\n\\n课程内容介绍Introduction\\n【努力也是一种天赋】\\n高考还远没有到拼天赋的程度，只有足够努力，才能不给自己找借口\\n1.优优学姐个人介绍\\n💡\\n高考裸分689——{分数与分数背后的故事}\\n数学分数——{142}\\n3.数学如何开窍\\n学习的核心——「问题」\\n方法——{听课/做题}\\n2.初高中数学时间规划\\n初中——{学什么}\\n高中——{学什么}\\n初中学习重点\\n高中学习重点\\n\\n第 2 页\\n\\n课程内容介绍Introduction\\n【努力也是一种天赋】\\n高考还远没有到拼天赋的程度，只有足够努力，才能不给自己找借口\\n4.计算问题如何解决\\n💡\\n计算的核心——{算得慢/算错}\\n算得慢——{限时训练}\\n算错——{计算习惯}\\n5.数学的思维导图\\n思维导图——{网状}\\n思维导图——{表格}\\n针对性重难点——{模块分析/备考建议}\\n6. 提分重点\\n必拿分——{题目类型/如何应对}/争取——{题型/策略}\\n不同分数段提分策略——{<90/90~120/120+}\\n\\n第 3 页\\n\\n课程内容介绍Introduction\\n【努力也是一种天赋】\\n高考还远没有到拼天赋的程度，只有足够努力，才能不给自己找借口\\n7.如何刷题、如何训练基础题\\n💡\\n题型分类——{基础、中档、压轴}\\n如何刷基础题——{方法、策略、时间}\\n8.如何刷中档题、压轴题\\n中档题——{方法/策略}\\n压轴题——{怎么练/考试策略}\\n9.刷题计划表与备考策略\\n刷题计划——{不同年级/每日/每周/寒暑假}\\n平时测试/大考的心态与时间分配\\n10.错题本\\n手把手教你整理错题——{题型怎么做？}\\n按板块梳理——{怎么针对自己的问题总结/一句话易错点}\\n\\n第 4 页\\nChapter-1\\n \\n优优学姐个人介绍\\n\\n第 5 页\\n\\n【优优学姐个人介绍】——高考裸分689/数学142\\n数学的分数是「熬」来的，刷题+理解才能不断进步\\n高考数学142\\n💡\\n优优 清华学姐/清华本硕 /高考四川省前50\\n英语146 数学142 物理满分\\n\\n\\n\\n\\n① 数学要掌握什么\\n可以看出：（数学的问题性+解题思维）是我们学习的重点，需要注意数学掌握什么+考什么\\n想像优优学姐一样拥有好成绩——「抓住学习方法+备考方法」才能百战百胜\\n②数学怎么学\\n基本概念\\n公式推导\\n知识点联系\\n题型解法\\n计算能力\\n\\n+\\n\\n\\n带着问题学习\\n思维导图\\n刷题\\n①、②、③、④、⑤、⑥、⑦、⑧、⑨、⑩、⑪、⑫、⑬、⑭、⑮、⑯、⑰、⑱、⑲、⑳\\n优优 清华学姐高考成绩查询页面\\n希望你也能收到这样的喜讯！\\n\\n第 6 页\\nChapter-2\\n \\n初高中数学学习规划\\n\\n第 7 页\\n\\n代数+几何的重点：{代数：方程+函数——带参数的思维}\\n{几何：定理的推导——平行、相交、全等、相似等}\\n\\n\\n从中考角度看初中数学？\\n💡\\n阶段性学习？2个重点\\n\\n① 初一——直线、方程\\n平行线、相交线\\n方程解法\\n\\n②初二——二+三四+一\\n二次根式\\n三角形\\n四边形\\n一次函数\\n\\n②初三——二+总\\n二次函数\\n总复习\\n\\n第 8 页\\n\\n可以看到，每一个新课阶段，我们的重点是不同的\\n高一：注重函数的学习\\n高二：数形结合的思维、复习函数\\n高三：策略与针对性提分\\n从高考角度看高中数学？\\n💡\\n分阶段？4个新课阶段\\n\\n① 高一上\\n集合、不等式、函数（指对幂、三角函数）\\n\\n① 高一下\\n平面向量、复数、立体几何、统计概率\\n\\n① 高二上\\n空间向量、圆锥曲线、数列\\n\\n① 高二下\\n计数原理、随机变量分布、数据统计分析、导数\\n\\n第 9 页\\nChapter-3\\n \\n数学如何开窍\\n\\n第 10 页\\n\\n\\n【数学开窍】：核心、方法、高分\\nPart1. 核心：\\n「问题」带着问题去学习\\n「策略」目标：带着问题+吃透：教材+熟练：例题\\n*：\\n数学的学习要从「听课」转移到「做题」\\n解决问题的思维是学习数学的核心\\nPart1. 核心\\n\\n💡\\n💡\\n\\n第 11 页\\n\\n\\n【数学开窍】：核心、方法、高分\\nPart2. 方法：\\n\\n「预习」学什么：公式、定理、概念\\n「听课」不把今天的问题留到明天\\n「例题」公式、定理如何在题目中使用、解出问题\\n例如：学习「函数」\\n问题：函数的定义？用来表示什么?\\n听课：定义域、值域、周期性、单调性—表示「函数」的什么性质、如何解决问题？\\n例题：一个具体的函数-怎么求解值域、极值……\\nPart2. 方法\\n💡\\n💡\\n\\n第 12 页\\n\\n\\n【数学开窍】：核心、方法、高分\\nPart3. 高分：\\n「思维导图」\\n公式推导、知识联系\\n\\n「刷题」\\n基础题：中档题：压轴难题=3:5:2\\n*：\\n「思维导图」列表/网状图\\n\\n「刷题」重在“精”——一道题=一类题\\nPart3. 高分\\n\\n💡\\n💡\\n\\n第 13 页\\nChapter-4\\n \\n计算问题如何解决\\n\\n第 14 页\\n\\n计算问题：\\n注意「计算习惯+计算速度」同样重要\\n原则1:\\n计算习惯\\n计算习惯是「算得准」的基础！！！\\n注重草稿管理\\n平时计算：用专门「草稿纸/草稿本」\\n考试计算：把草稿纸折成「四象限」分区使用\\n*靠谁能够有时间检查时，迅速定位题目-草稿位置\\n*计算步骤/竖式计算不省略——有效杜绝看错、抄错、写错的疏漏\\n熟练之后加快速度\\n\\n*：\\n不要在试卷上打草稿！\\n不要分散凌乱打草稿！\\n\\n第 15 页\\n\\n计算问题：\\n注意「计算习惯+计算速度」同样重要\\n原则2:\\n计算速度\\n计算速度是「算得快」的保证！！！\\n注重限时训练\\n平时计算：尽量不反复检查，保证一道题目连续算到结果\\n考试计算：善用排除法、特殊值法等，加快计算速度\\n*平常做到限时训练，考试才能游刃有余\\n*考试会更紧张，对于自己的易错点平常要加强「刻意训练」\\n\\n\\n*：\\n平常要养成专注计算的习惯！\\n每一次平时计算都当成考试——限时！\\n\\n第 16 页\\nChapter-5\\n \\n数学的思维导图\\n\\n第 17 页\\n\\n思维导图：\\n💡\\n方法1.网状思维导图\\n适用于知识点分散、有逻辑联系\\n用好教材！！！\\n\\n\\n【强调！】\\n\\n先理解分立知识点「概念、定义、图像…」——再把握知识点的联系「形成知识网」，善用「箭头」在自己头脑中推导！！\\n数\\n形\\n\\n第 18 页\\n\\n思维导图：\\n💡\\n方法2.表格状思维导图\\n适用于知识点需要对比\\n归纳总结！！！\\n\\n例如：\\n学习三角函数时\\n将「图像」与「性质」对应\\n系统性列表总结\\n\\n\\n【强调！】\\n\\n先理解概念的「共性」，通过「归纳」找出\\n相似点、易混点——明确差异、共同记忆！\\n\\n第 19 页\\n\\n{针对性重难点——{模块分析/备考建议}\\n命题模块分析：\\n1.【函数与导数】\\n考察题型——【 「选填」-函数、「解答」-导数综合运用】\\n高频考点：\\n函数的基本性质、利用导数研究函数极值与最值、导数的几何意义\\n次高频考点：\\n初等函数、不等式恒成立及存在性、函数与导数单调性、用导数解决函数与方程\\n\\n#学姐建议——重点做思维导图内容：\\n抽象函数基本性质：\\n奇偶性、单调性、图像对称性\\n函数零点\\n利用导数研究函数最值\\n*重难题型：\\n构造函数证明不等式\\n导数的几何意义\\n导数研究不等式恒成立/根据不等式恒成立求参数\\n💡\\n原则:\\n选填-【定义域优先原则】【基本性质与结论】\\n解答-【求导公式要牢记，细心求导、分类讨论】\\n\\n*【赋值法】【数形结合】【特殊与一般】\\n\\n第 20 页\\n\\n{针对性重难点——{模块分析/备考建议}\\n命题模块分析：\\n2.【三角函数、解三角形与平面向量】\\n考察题型——【 「选填」-诱导公式、三角恒等变换、平面向量，「解答」-正余弦定理、三角形面积公式】\\n高频考点：\\n三角恒等变换公式、解三角形、平面向量\\n次高频考点：\\n三角函数的图象与性质\\n\\n#学姐建议——重点做思维导图内容：\\n三角函数基础、平面向量的几何与代数形式：\\n三角函数的图象与性质（单调性、奇偶行、对称性、周期性）\\n正余弦定理解三角形\\n平面向量的数量积、模\\n*重难题型：\\n三角恒等变换\\n根据三角函数的性质（单调性、零点个数）求参\\n💡\\n原则:\\n选填-【两角和与差的三角函数公式、平面向量公式】\\n解答-【正余弦定理、三角形面积公式要牢记！】\\n\\n*【常用角的代换与公式变形】【多方观察选择合适方法】【平面向量解决数量、位置关系的应用】\\n\\n第 21 页\\n\\n{针对性重难点——{模块分析/备考建议}\\n命题模块分析：\\n3.【数列】\\n考察题型——【 「选填」-数列基本项计算，「解答」-递推公式、证明、通项公式等】\\n高频考点：\\n等差数列、数列的递推与求和公式\\n次高频考点：\\n等比数列\\n\\n#学姐建议——重点做思维导图内容：\\n数列递推公式、前n项和公式及性质：\\n数列的性质在应用时的限制（公比q取值、项数n取值）\\n错位相减法、裂项相消法（项数n的范围和对称性）\\n基本量计算（首项、公差、公比）\\n*重难题型：\\n数列新定义\\n数列与不等式的结合\\n💡\\n原则:\\n选填-【规律性，记牢公式，注意限制】\\n解答-【新定义/不等式/函数结合】\\n\\n*【构造等差与等比】【注意总结快速解题法】【新定义信息+求解】\\n\\n第 22 页\\n\\n{针对性重难点——{模块分析/备考建议}\\n命题模块分析：\\n4.【立体几何】\\n考察题型——【 「选填」-表面积和体积，「解答」-判定位置关系、空间角、向量方法与几何方法】\\n高频考点：\\n空间几何体的结构特征+表面积与体积、空间中位置关系\\n次高频考点：\\n二面角、线面角\\n\\n#学姐建议——重点做思维导图内容：\\n简单集合体结构特征、向量法与几何法：\\n点、直线、平面的位置关系\\n线面平行与垂直的判定、空间角\\n基本量计算（首项、公差、公比）\\n*重难题型：\\n空间动态问题\\n二面角最值、外接球、翻折问题\\n💡\\n原则:\\n选填-【牢记定理与转化条件】\\n解答-【灵活选择向量/几何方法】\\n\\n*【线面关系判定】【轨迹问题】【最值与范围问题】\\n\\n第 23 页\\n\\n{针对性重难点——{模块分析/备考建议}\\n命题模块分析：\\n5.【解析几何】\\n考察题型——【 「选填」-直线与圆，「解答」-数形结合】\\n高频考点：\\n椭圆、双曲线、抛物线\\n次高频考点：\\n直线与圆\\n\\n#学姐建议——重点做思维导图内容：\\n数列递推公式、前n项和公式及性质：\\n直线与圆的位置关系\\n圆锥曲线的离心率\\n圆锥曲线中的定值、定点、最值、范围\\n*重难题型：\\n椭圆与定点问题\\n双曲线的渐近线\\n抛物线与直线/线段\\n💡\\n原则:\\n选填-【定义、标准方程、几何性质】\\n解答-【综合性、计算能力、二级结论】\\n\\n*【运算量大】【与向量、解三角形、不等式综合应用】\\n\\n第 24 页\\n\\n{针对性重难点——{模块分析/备考建议}\\n命题模块分析：\\n6.【概率与统计】\\n考察题型——【 「选填」-排列组合、二项式定理、样本、条件概率，「解答」-经验回归方程、独立性检验、期望与方差】\\n高频考点：\\n排列组合、二项式定理、离散型随机变量、相互独立时间的概率\\n次高频考点：\\n古典概型、独立性检验、正态分布\\n\\n#学姐建议——重点做思维导图内容：\\n基础概念-相互独立事件的概率、条件概率：\\n排列组合、二项式定理\\n样本的数字特征\\n条件概率、相互独立事件概率\\n随机变量的分布与期望\\n*重难题型：\\n与数列、几何的结合\\n组合与二项式定理的结合\\n💡\\n原则:\\n选填-【牢记基础概念，理解到位】\\n解答-【与：导数、数列、集合结合，交叉运用】\\n\\n*【掌握模块内容】【多板块灵活理解运用】\\n\\n第 25 页\\nChapter-6\\n \\n提分重点\\n\\n第 26 页\\n\\n数学如何提分？\\n1）必拿分——{题目类型/如何应对}\\n题目类型：「必须拿到手的分数」，以总题数为19道的高考数学为例\\n1-8单选 + 9-10多选 + 12-13填空 + 15-17大题\\n\\n*：会做的——一道都不要错！——{应对}平时就做限时训练\\n2）争取分——{题型/策略}\\n题目类型：「争取拿到手的分数」，以总题数为19道的高考数学为例\\n11多选题的一个选项 + 14填空（考察思维） + 最后两大题步骤分\\n\\n*：保证读题与思考时间！——{策略}不放过+尽量多写步骤\\n\\n\\n第 27 页\\n提分策略？\\n不同分数段提分策略——{ < 90 }\\n核心方法——【根据自己的分数段针对性刷题】\\n\\n关键：明确当下问题，进行「刻意训练」\\n\\n💡\\n【当下分数】低于 90 分\\n{这一分数段没有达到及格线}\\n\\n基础有问题、基本概念不清晰\\n（做题的“砖”尚未扎实，无法进行数学体系的搭建）\\n\\n｜｜牢固基础：\\n\\n将书上的知识点画出「思维导图」\\n只练基础题\\n\\n*：进行限时训练！——检验：直到前8道选择+前两道多选能够\\n【限时全对】，蒙住答案迅速反应思路\\n\\n\\n第 28 页\\n提分策略？\\n不同分数段提分策略——{ 90 ~ 120 }\\n核心方法——【根据自己的分数段针对性刷题】\\n\\n关键：明确当下问题，进行「刻意训练」\\n\\n💡【2024河南省普通高中毕业班高考适应性测试】大题.17\\n\\n【当下分数】 90 ～ 120 分\\n{这一分数段达到及格线，但题型不熟练/考试速度上不去}\\n\\n√基础有问题、基本概念不清晰\\n× 题型掌握不熟练，考试时间分配不当，成绩不稳定\\n（做题的“砖”积累足够，数学体系的搭建方法不明确）\\n\\n｜｜熟练题型：\\n将基础题进一步强化「限时」——缩短5-10分钟训练\\n将中档题、压轴题做「熟」——蒙住答案迅速反应\\n\\n*压轴题往往：中档题的「组合」，更加复杂、计算更大—拆解！\\n中档题型熟练之后，留更多时间给压轴题——往往事半功倍\\n\\n\\n\\n\\n\\n\\nStep6:验证-\\n其他取值范围排除\\nStep1:明确问题-\\n导数求函数最值\\nStep2:步骤-\\n求导数\\nStep3:步骤-\\n明确单调性\\nStep4:步骤-\\n明确最值\\nStep5:步骤-\\n新设函数，解出参数\\n\\n\\n第 29 页\\n提分策略？\\n不同分数段提分策略——{ 120+ }\\n核心方法——【根据自己的分数段针对性刷题】\\n\\n关键：明确当下问题，进行「刻意训练」\\n\\n💡【2024广州市普通高中毕业班综合测试】多选题.11\\n\\n\\n【当下分数】 120 分以上\\n{这一分数段基础+中档常规题型可以处理，但是压轴没思路}\\n\\n√题型熟练、考试速度尚可\\n× 题型未能找到最优解，压轴题吃力\\n（数学体系的搭建完成，解题策略需要提升）\\n\\n｜｜题型精进+找最优解：\\n将题型做「精」—— 从考试错题积累思路\\n\\n*：与老师沟通，针对性应对「最容易失分」的问题！\\n不满足于「做出来」——寻找多种解法、最优解\\nStep6:验证-\\n其他取值范围排除\\nStep1:明确问题-\\n导数求函数最值\\nStep2:步骤-\\n求导数\\nStep3:步骤-\\n明确单调性\\nStep4:步骤-\\n明确最值\\nStep5:步骤-\\n新设函数，解出参数\\n\\n\\n第 30 页\\n提分策略？\\n\\n方法1:求切线\\n思路：联立求解\\n方法2：将参数转为未知常数\\n思路：构造新函数\\n化为‘方程的解’\\n计算简单数形结合大大提升做题速度\\n计算量略大\\n1）积累思路！多观察、思考题目的变形\\n2）牢记二级结论，大大简化做题步骤\\n\\n\\n\\n\\n\\n第 31 页\\nChapter-7\\n \\n如何刷题与训练基础题\\n\\n第 32 页\\n题型难度分布？\\n以：19题的高考试卷为例\\n基础题占比最大\\n\\n中档题分值较大\\n\\n压轴题难度较大\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n第 33 页\\n哪些是基础题？\\n\\n\\n\\n\\n\\n\\n以：19题的高考试卷为例\\n基础题占比最大\\n\\n中档题分值较大\\n\\n压轴题难度较大\\n\\n\\n\\n\\n\\n\\n\\n\\n牢记一个比例！\\n3:5:2——【 「基础题」、「中档题」、「压轴题」 】比例\\n分数低于90，先「只」刷基础；分数90以上，仍然要重视基础题「速度+正确率」——基础题是搞定数学分数的基础！！！\\n\\n\\n第 34 页\\n哪些是基础题？\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n以：19题的高考试卷为例\\n单选1-7、\\n多选9-10，\\n填空12-13，\\n大题15-16\\n大题17-19（第一小问）\\n是基础题\\n\\n第 35 页\\n哪些是基础题？\\n以：19题的高考试卷为例\\n单选1-7、\\n多选9-10，\\n填空12-13，\\n大题15-16\\n大题17-19（第一小问）\\n是基础题\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n第 36 页\\n\\n哪些是基础题？基础题怎么刷？\\n以：19题的高考试卷为例\\n单选1-7、多选9-10，填空12-13，大题15-16、大题17-19（第一小问）是基础题\\n*学姐经验：刷题计划的核心是——“限时+高频+复盘+总结”\\n对于成绩暂时在90分以下的同学来说，只有不断地在基础题上夯实概念、熟悉方法、提高速度，才能在后期应对更综合或难度更高的题目\\n💡刷题训练：\\n1.方法： ①选择题与填空题的限时训练｜ ②大题（解答题）的限时训练\\n2.时间： ③每日、每周、每月刷题 ｜\\n3.表格：  ④一个学期的规划 ｜ ⑤寒暑假｜⑥刷题打卡表（示例模板）\\n①、②、③、④、⑤、⑥、⑦、⑧、⑨、⑩、⑪、⑫、⑬、⑭、⑮、⑯、⑰、⑱、⑲、⑳\\n\\n第 37 页\\n①选择题与填空题的限时训练\\n\\n💡\\n限时方法：\\n\\n以单选、填空题为例：单选题：平均每题1~1.5分钟左右。\\n填空题：平均每题2~3分钟左右。\\n\\n举例：如果一次选取5道单选题和2道填空题，总时长可控制在15~20分钟内。可以进行计时，一旦时间到就停止作答，\\n未完成的题先标记出来。\\n\\n如何定时训练\\n选题范围\\n\\n\\n先从基础题（如新高考卷中的1-7单选题、9-10多选题、12-13填空题）入手。\\n\\n*建议一次选取【5~10道】此类基础题，难度以自己稍感吃力但经过努力能解决的题目为佳。\\n\\n\\n第 38 页\\n①选择题与填空题的限时训练\\n如何定时训练\\n\\n💡\\n训练频率\\n\\n每日：\\n    建议每天进行一次小规模的选择-填空组合限时训练(5~10题)。\\n每周：\\n    可以安排一次集中训练（例如周末），选择15-20道题，限时40-50分钟完成，模拟考试环境。\\n\\n及时回顾：\\n训练结束后，先对照答案，找出【错题】、【不会的题】和【超时的题】\\n*先搞清楚“错在哪里”与“正确思路是什么”，再着重查漏补缺。\\n\\n错题本或错题卡：\\n将错误题目、解题思路、正确答案写在错题本上。\\n\\n二次做题：\\n复盘后【第二天】再重新做一遍这些错题，巩固记忆。\\n对于【同一类型题】反复出错，要深入分析是概念不熟还是解题方法不熟练，及时补强相关知识点。\\n\\n第 39 页\\n②大题（解答题）的限时训练\\n\\n💡\\n限时方法：\\n\\n对于一道基础解答题，建议先给自己10~15分钟的思考和书写时间。若是两道基础解答题，整体控制在30分钟内完成。同样建议使用计时，严格在时间到后收笔，做标记。\\n\\n\\n如何定时训练\\n选题范围\\n\\n\\n从基础题或中档题开始，先确保自己能写全过程、能掌握常规解题方法。以新高考卷中15-16题为例（若这两题属于较基础或中档题），再慢慢延伸到更高难度的题目。\\n\\n第 40 页\\n②大题（解答题）的限时训练\\n如何定时训练\\n\\n💡\\n训练频率\\n每日：\\n    可每天选取1道大题进行限时训练(10~15分钟)，先保量不求多。\\n每周：\\n    可在周末做一次集中强化，选择2-3道解答题，控制在40-60分钟内完成，模拟考试。\\n过程检查\\n*训练后立即回顾自己的解题过程：\\n是否看懂了题意？\\n是否使用了恰当的方法？\\n哪一步耗时最多？\\n关键步骤是否缺乏明确的思路？\\n\\n思路对比\\n*与标准答案或老师讲解的思路对比，看看自己漏了哪些关键步骤，或者有没有多余的步骤。\\n\\n记录与回看\\n错题本上要写明：该题考查的知识点、自己的思路、正确思路、典型解法或技巧。\\n定期(如每周或每月)翻看错题本，进行二次或三次巩固。\\n\\n第 41 页\\nChapter-8\\n \\n如何刷中档题\\n与压轴题\\n\\n第 42 页\\n哪些是中档题？\\n以：19题的高考试卷为例\\n单选8、\\n多选11一个选项，\\n填空12-13，\\n大题17是中档题\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n第 43 页\\n哪些是基础题？\\n\\n\\n\\n\\n\\n\\n以：19题的高考试卷为例\\n单选8、\\n多选11一个选项，\\n填空12-13，\\n大题17是中档题\\n\\n第 44 页\\n\\n哪些是中档题？中档题怎么刷？\\n以：19题的高考试卷为例\\n单选8、多选11一个选项，填空12-13，大题17是中档题\\n*学姐经验：刷题计划的核心是——“限时+思路拆解”\\n对于成绩当前90~120分段最主要的提分点在于稳定基础分，同时提高中档题的正确率。保持解题速度，遇到中档题要多反思方法是否最优，灵活应用各类知识点。\\n💡刷题训练：\\n1.方法： ①选择题与填空题的限时训练｜ ②大题（解答题）的限时训练\\n2.时间： ③每日、每周、每月刷题 ｜\\n3.表格：  ④一个学期的规划 ｜ ⑤寒暑假｜⑥刷题打卡表（示例模板）\\n①、②、③、④、⑤、⑥、⑦、⑧、⑨、⑩、⑪、⑫、⑬、⑭、⑮、⑯、⑰、⑱、⑲、⑳\\n\\n第 45 页\\n①选择题与填空题的限时训练\\n\\n💡\\n限时方法：\\n\\n对于基础题，平均1分钟/单选题、2分钟/填空题。\\n对于中档题（例如单选8、多选11部分），可适当增加到3.5~5分钟/题，但不宜过长，以保持一定压力和速度感。\\n\\n举例：一次训练：8道单选（含1道中档题）+ 2道多选（含1道中档题）+ 12道填空，共耗时20～25分钟。\\n如何定时训练\\n选题范围\\n\\n\\n基础题：单选1～7，多选9～10，填空12～13。\\n中档题：单选第8题，多选第11的一个选项。\\n\\n一次训练可以组合“基础题+中档题”一起做，让自己在熟悉的环境下不断适应稍高难度的题。\\n\\n第 46 页\\n①选择题与填空题的限时训练\\n如何定时训练\\n\\n💡\\n训练频率\\n\\n每日：进行一次选择-填空的限时训练(约10~12题)。\\n每周：安排1~2次大规模的限时训练(15~20题，耗时40~50分钟)，模拟考试氛围。\\n及时回顾：\\n训练后立即核对答案，区分：哪些是“熟悉但粗心”导致的错误？哪些是“概念或方法不熟”导致的错误？\\n尤其关注中档题的错因，是否是解题思路不清晰、运算不熟练或知识点不牢固。\\n\\n错题本：\\n对于中档题，除了记录正确解法外，也要多角度思考：是否有其他简洁的方法？能否用坐标法、几何法、函数法等替代思路？\\n\\n二次做题：\\n一周后或数天后再重新做错题，检验是否真正掌握。若同一类型的题多次出错，务必进行专题复习（如函数、数列、三角、几何等）\\n\\n第 47 页\\n②大题（解答题）的限时训练\\n\\n💡\\n限时方法：\\n\\n基础解答题：每题控制在10分钟以内。中档解答题：每题可适当放宽到12~15分钟，但仍要计时。\\n\\n示例：一次训练做2道大题(1道基础+1道中档)，总用时25~30分钟。\\n\\n如何定时训练\\n选题范围\\n\\n\\n基础解答题：如卷子15-16题(若相对容易)，可继续保持熟练。\\n中档解答题：如17题，18-19题的第一问。先从17题、18题的前半部分入手，保证思路清晰；再慢慢触及后半部分或更综合的问法。\\n\\n第 48 页\\n②大题（解答题）的限时训练\\n如何定时训练\\n\\n💡\\n训练频率\\n每日：\\n    1道大题限时训练(含中档题或基础题混合)。\\n每周：\\n    集中做2~3道大题(1~2道中档+1道基础)，模拟考试节奏，耗时40~50分钟。\\n过程检查\\n*检查思路：读题是否准确，列式是否完整，关键步骤是否清晰。\\n*检查方法：对于中档题，常见的解题思路包括：方程法、几何法、函数法、向量法、数列递推等，要看自己是否熟练调用。\\n\\n思路对比\\n看标准答案或老师的讲解，比较自己的思路是否更繁琐、是否有更优解。\\n若有较大差异，要记录在错题本上，并尝试“再做一遍”或“换个方法做”。\\n\\n记录与回看\\n定期(如周末或月底)翻看错题，关注中档大题中反复出现的问题（如不等式求解、三角函数综合、圆锥曲线等），集中强化。\\n\\n第 49 页\\n哪些是压轴题？\\n以：19题的高考试卷为例\\n多选11（全部选项），\\n填空14，\\n大题18-19（除了第一问）是压轴题\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n第 50 页\\n哪些是压轴题？\\n\\n\\n\\n\\n\\n\\n\\n以：19题的高考试卷为例\\n多选11（全部选项），\\n填空14，\\n大题18-19（除了第一问）是压轴题\\n\\n第 51 页\\n\\n哪些是压轴题？压轴题怎么刷？\\n以：19题的高考试卷为例\\n多选11（全部选项），填空14，大题18-19（除了第一问）是压轴题\\n*学姐经验：刷题计划的核心是——“高效限时+多解思路”\\n分数在120分以上，说明基础题和中档题大部分能拿下。目标是冲击140分乃至更高分。\\n必须熟练掌握“考场时间分配”策略：先稳拿前面分数，再根据难度和自身情况合理安排解题顺序，力争多拿压轴题分数。\\n💡刷题训练：\\n1.方法： ①选择题与填空题的限时训练｜ ②大题（解答题）的限时训练\\n2.时间： ③每日、每周、每月刷题 \\n①、②、③、④、⑤、⑥、⑦、⑧、⑨、⑩、⑪、⑫、⑬、⑭、⑮、⑯、⑰、⑱、⑲、⑳\\n\\n第 52 页\\n①选择题与填空题的限时训练\\n\\n💡\\n限时方法：\\n\\n基础题：单选平均1分钟内完成，填空题2分钟左右。\\n多选第11（难选项）和填空14（难度较高）：适当放宽到2~3分钟/题，但仍要控制总时长。\\n\\n示例：一次训练可选10道题（含基础8道+2道难度较高的多选/填空），耗时20~25分钟。\\n如何定时训练\\n选题范围\\n\\n基础+中档：单选18，多选910，填空12~13等，确保不失分或少失分。\\n\\n压轴题涉及的多选：多选第11题可能存在较难的选项，要把它当成“中高难度”来做，进行针对性训练。\\n\\n压轴填空：如填空14。\\n\\n第 53 页\\n①选择题与填空题的限时训练\\n如何定时训练\\n\\n💡\\n训练频率\\n\\n每日：1次快速限时训练（约10～12题），包括1～2道难度较高的多选或填空14。\\n每周：1～2次大规模限时训练(15～20题)，耗时40～50分钟，严格模拟考试节奏。\\n快速核对+精细分析\\n对于基础和中档题，错题要立即找出概念或运算失误；\\n对于难度较高的多选11、填空14等，要深入分析解题思路、可能的多种解法，以及在哪一步出现思路卡顿或运算困难。\\n\\n思维拓展\\n复盘时多问自己：“能否用其他方法？”“是否有更简洁的思路？”\\n特别是压轴多选题，可能存在不同的思维路径，要将这些方法记录在错题本或思维导图中，培养发散思维。\\n\\n错题回炉\\n针对难度较高的错题，要在1~2天后或一周后再次做一遍，确保理解彻底。\\n若是同一知识点反复出错，务必进行专题复习（如圆锥曲线综合、导数与函数综合、三角与向量综合等）。\\n\\n第 54 页\\n②大题（解答题）的限时训练\\n\\n💡\\n限时方法：\\n\\n基础/中档题：每题8~10分钟左右。\\n压轴题：每道题（特别是后半部分）预留15~20分钟，但要注意整体效率，不可陷入无休止的“卡壳”。\\n\\n示例：一次训练做2道大题（含1道压轴18或19），总用时30~35分钟。\\n如何定时训练\\n选题范围\\n\\n\\n基础/中档解答题：如15~17题，仍需保持稳定拿分。\\n\\n压轴题：大题18和19，其中前面问法可能是中档，后面问法往往是压轴(难度最高)。\\n\\n在日常训练时，务必将后续问法或变形题也纳入练习范畴。\\n\\n第 55 页\\n②大题（解答题）的限时训练\\n如何定时训练\\n\\n💡\\n训练频率\\n每日：\\n    1道大题（可以是中档或压轴），10~20分钟限时完成。\\n每周：\\n    2～3道大题强化(其中至少1道压轴)，耗时40～60分钟，模拟正式考场节奏。\\n深度拆解\\n对于压轴题18-19，先把整道题分成若干小模块：\\n分析题意、列出条件；\\n可能使用的数学工具（函数、几何、向量、导数等）；\\n关键转折或技巧（如定义新函数、巧用几何变换、引入参数等）。\\n逐步排查每个模块是否掌握清楚。\\n\\n比较多种解法\\n压轴题往往有多解思路：如向量法vs.坐标法，函数法vs.不等式法。\\n复盘时可查看参考资料或讨论与老师、同学的不同解法，并记录在案。\\n\\n总结规律\\n高考压轴题常有一定“套路”或“命题热点”（如圆锥曲线与数列结合、三角函数的最值、导数与不等式结合等）。\\n做完后要总结：“本题考察了哪些综合知识点？涉及哪种常用技巧？”，并与历年真题或类似题进行对比，形成知识网络。\\n\\n第 56 页\\nChapter-9\\n \\n刷题计划表与备考策略\\n\\n第 57 页\\n每日、每周、每月刷题\\n学姐推荐：\\n按照周期刷题\\n及时总结+不断复盘！！！\\n\\n💡\\n每日计划：\\n早读/课间：快速回顾前一天的错题或难点。放学后/自习课：选择-填空限时训练：5-10题，15-20分钟。\\n立即对答案、标记错题，简要记下错因。\\n\\n晚自习/回家：大题限时训练：1道(10~15分钟)。\\n训练后快速对答案或参照解答思路，整理错题。\\n\\n睡前：用5分钟回想当天的错题或易错点，做好知识点巩固。\\n\\n\\n💡\\n每周计划：\\n周中（周三或周四）：安排一次稍大规模的选择填空训练：15-20题，限时40-50分钟。训练后深度复盘。\\n\\n周末：集中做2-3道大题，限时40-60分钟，模拟考试环境。\\n进行错题整理，对一周内反复出现的知识点进行查缺补漏。\\n可以做一份小测或阶段性测试卷（只做选择+填空或只做部分大题），检验一周学习效果。\\n💡\\n每月计划：\\n月初/月底：做一份完整的模拟卷(全卷)，限时120分钟，严格按照考试要求执行。\\n考后深度总结：对薄弱环节做专项补强。\\n\\n月度错题整理：将本月的错题再做一遍，并且将错题按知识点分类，形成专题整理。\\n针对薄弱章节(函数、三角、立体几何、解析几何等)，进行针对性的“回炉”训练。\\n\\n第 58 页\\n①一个学期的规划\\n学姐经验：\\n不同年级侧重点不同\\n\\n💡\\n高一阶段：\\n重点：打牢代数与函数基础(一次函数、二次函数)、基本几何知识(三角形)、不等式等。\\n\\n训练节奏：\\n每日5~10道选择-填空 + 1道基础大题。\\n每周小测巩固(选择+填空或少量大题)。\\n每月做一次完整测评，关注函数与代数的熟练度。\\n\\n策略：多花时间在概念理解、公式记忆、基础运算与规范书写上。\\n\\n\\n💡\\n高二阶段：\\n重点：函数综合(指数、对数、三角函数)、解析几何(直线与圆锥曲线)、立体几何(空间向量)、数列等。\\n\\n训练节奏：\\n每日5~10道选择-填空 + 1道中档大题(含综合知识点)。\\n每周专项训练：解析几何或立体几何等较难板块，进行集中练习。\\n每月一套综合模拟题，全面检测。\\n\\n策略：在高一打牢基础的前提下，开始练习多知识点综合题，并留意解题方法的灵活运用。\\n💡\\n高三阶段：\\n重点：真题/模拟题综合演练，提升解题速度和准确率。\\n\\n训练节奏：\\n每日限时训练：选择-填空(10~15题) + 2道大题，严格计时。\\n每周或每半周进行一次全真模拟(完整卷)。\\n不断复盘错题，按专题强化(函数、数列、几何、导数、概率统计等)。\\n\\n策略：加强考场节奏把控、错题回炉、强化综合解题思路。\\n\\n第 59 页\\n②寒暑假规划\\n寒假\\n\\n💡\\n不同年级\\n高一：\\n    预习70%，复习30%。\\n高二：\\n    当作“小高三”，联系真题。\\n高三：\\n    提分效率是关键——找到自己最薄弱处，专项训练\\n寒假\\n时间长度：一般2~3周左右的复习时间。\\n目标：查漏补缺 + 提前预习下学期关键知识点。\\n\\n计划：\\n每日：做1~2小时基础题(选择+填空) + 1小时大题专项训练。\\n每周：做一套模拟题或阶段测试卷。\\n重点复习：上一学期薄弱章节和错题集中区。\\n\\n\\n\\n第 60 页\\n②寒暑假规划\\n寒假\\n\\n💡\\n不同年级\\n高一：\\n    预习70%，复习30%。\\n高二：\\n    当作“小高三”，联系真题。\\n高三：\\n    提分效率是关键——找到自己最薄弱处，专项训练\\n暑假\\n时间长度：通常约4~6周可自主安排。\\n目标：系统复习已学知识 + 提前预习新学期重点内容(特别是高二升高三的暑假极为关键)。\\n\\n分阶段：\\n第一阶段(前2周)：全面梳理上一学年的知识点，每日3小时左右刷题，兼顾复盘。\\n第二阶段(中2周)：专项突破薄弱环节，每日2小时左右做专题训练(函数、几何等)。\\n第三阶段(后2周)：做综合模拟卷，每周2~3套，计时+总结。\\n\\n\\n第 61 页\\n刷题打卡表-每日\\n建议打印出来贴在书桌或用电子表格\\n\\n💡\\n使用方式：\\n\\n每日填写当天训练的题目数量、用时、正确率。\\n将错题对应到知识点，方便后续针对性复习。\\n记录当天复盘情况和心得，及时总结。\\n日期\\n选择/填空 (数量/用时)\\n正确率\\n大题 (数量/用时)\\n解题情况（耗时/正确率）\\n错题知识点\\n复盘完成(是/否)\\n备注/感想\\n3/10\\n8题/15分钟\\n6/8\\n1题/12分钟\\n1/1 正确\\n二次函数\\n是\\n需复习配方法\\n3/11\\n5题/10分钟\\n4/5\\n1题/10分钟\\n0/1 错\\n空间向量\\n否(待明日)\\n思路不熟\\n3/12\\n...\\n...\\n...\\n...\\n...\\n...\\n...\\n\\n第 62 页\\n刷题打卡表-每周\\n建议打印出来贴在书桌或用电子表格\\n\\n💡\\n使用方式：\\n\\n周日或下周一汇总本周所有刷题情况，统计正确率、主要错题分布。\\n根据周测/模拟成绩检验复习效果，明确下周的改进重点。\\n周次\\n选择填空合计 (数量/正确率)\\n大题合计 (数量/正确率)\\n周测/模拟成绩\\n主要错题知识点\\n下周改进方向\\n第1周\\n40题 / 70%\\n5题 / 60%\\n85/150\\n函数、数列\\n加强函数基础\\n第2周\\n45题 / 75%\\n6题 / 66%\\n90/150\\n三角函数\\n三角公式巩固\\n第3周\\n...\\n...\\n...\\n...\\n...\\n\\n\\n\\n第 63 页\\n\\n平时测试的心态与时间分配\\n心态准备\\n目标明确：平时测试的主要目的是检查阶段性学习成果、发现知识盲点、积累解题经验。\\n适度紧张：保持一定的紧张感有助于提升专注度，但不必过度焦虑。\\n培养考试习惯：平时测试要尽量模拟大考状态（限时、专注、答题顺序等），为大考做准备。\\n时间分配策略\\n\\n\\n\\n\\n#快速浏览：\\n    开考前1~2分钟，快速浏览试卷结构，了解题型和题量。\\n\\n\\n选择-填空：先易后难\\n    平均分配给每道选择题1～1.5分钟、填空题2～3分钟（视科目和难度略有调整）。\\n    先做容易、熟悉的题，保证基础分数，留下相对较难的题最后处理。\\n\\n💡\\n\\n第 64 页\\n\\n平时测试的心态与时间分配\\n心态准备\\n目标明确：平时测试的主要目的是检查阶段性学习成果、发现知识盲点、积累解题经验。\\n适度紧张：保持一定的紧张感有助于提升专注度，但不必过度焦虑。\\n培养考试习惯：平时测试要尽量模拟大考状态（限时、专注、答题顺序等），为大考做准备。\\n时间分配策略\\n\\n\\n\\n\\n大题部分\\n    对大题进行快速定位：看清题干、分值和难度，合理分配时间。\\n    每道大题根据难度可预设8~15分钟不等的时间上限，时间到后若仍未解出，也要先标记并暂时放下，确保整体进度。\\n\\n\\n\\n留出检查时间\\n    在平时测试中，最好预留3～5分钟进行检查，尤其关注计算题、填空题是否有漏写或简单算错。\\n💡\\n\\n第 65 页\\n\\n大考（如期末考、中考、高考）的心态与时间分配\\n考前准备\\n\\n调整作息：尽量在考前一周保持规律睡眠，避免熬夜刷题。\\n知识梳理：在最后阶段更注重查漏补缺和巩固主干知识，不要盲目海量刷新题。\\n心理暗示：适度给自己积极的心理暗示，如“我已经尽力准备”“只要稳住就能拿到理想成绩”。\\n物质准备：考试文具、准考证等提前检查；考前一天避免剧烈运动或情绪波动过大。\\n考中策略\\n\\n\\n\\n1.整体时间分配\\n\\n选择-填空：\\n快速扫题，先挑自己最有把握的题，稳拿分数。\\n对较难题目要合理分配时间，不可在单一题目上“死磕”太久。\\n\\n大题部分：\\n一般按分值高低及难度顺序分配时间。若总共有45道大题，可大致为每题1015分钟，具体视科目、分值而定。\\n遇到卡壳时，先记录已知条件、尝试列式或画图，若思路仍不清晰，就先跳过并在末尾时间回头再攻克。\\n\\n💡\\n\\n第 66 页\\n\\n大考（如期末考、中考、高考）的心态与时间分配\\n考前准备\\n\\n调整作息：尽量在考前一周保持规律睡眠，避免熬夜刷题。\\n知识梳理：在最后阶段更注重查漏补缺和巩固主干知识，不要盲目海量刷新题。\\n心理暗示：适度给自己积极的心理暗示，如“我已经尽力准备”“只要稳住就能拿到理想成绩”。\\n物质准备：考试文具、准考证等提前检查；考前一天避免剧烈运动或情绪波动过大。\\n考中策略\\n\\n2.先易后难、理性取舍\\n\\n先易后难：\\n先做能拿稳分数的题，确保基本分；\\n难题或不确定的题留到后面。\\n\\n遇到不会的题：\\n先看是否能从已知条件中推导部分结论，哪怕只能写出一部分过程，也可能拿到步骤分；\\n切忌“钻牛角尖”浪费过多时间。\\n\\n分段限时：\\n可以在试卷上标注各部分完成时间节点，如：\\n选择填空尽量在前30~40分钟完成；大题1~2道在后20分钟完成；\\n整场考试结束前3～5分钟检查漏写、抄错。\\n若某道题超过了预设时间上限，要果断先跳过或做标记，避免影响后续所有题目。\\n\\n💡\\n\\n第 67 页\\nChapter-10\\n \\n错题本\\n\\n第 68 页\\n数学错题本怎么做？\\n两个方面分别积累\\n\\n①按照【专题】——知识点\\n②按照自己的易错点——【一句话易错点】\\n\\n\\n\\n💡\\n【学姐数学错题本】详见附赠笔记\\n\\n{一共十个方面}\\n\\n*把错题✂️剪下来，黑笔写：解题步骤，红笔写：错因+知识点\\n\\n\\n\\n\\n｜｜订正一张卷子/一个练习：\\n\\n及时总结！绝不把今天的错题拖到明天！！！\\nPart 1\\nPart 2\\n\\n\\n\\n第 69 页\\nPart1: 数学错题题型——怎么做？\\n剪下题目/简略抄写\\n黑笔写题\\n红笔总结\\n\\n💡\\n写出错误原因\\n\\n\\n①画图分析\\n②详细写出解题过程\\n③对比多解法\\n\\n\\n每一步都要做到清晰！\\n做完复盘后：能够蒙住\\n解题过程反应解题思路\\n使用活页本\\n\\n\\n\\n\\n第 70 页\\nPart2: 按照易错点积累——怎么做？\\n\\ne.g.一句话易错点！\\n\\n💡\\n当在考试中遇到【自己容易错的地方】\\n按照题型整理完之后——「精」减成一句话！\\n\\n①“注意”***\\n\\n②“不要忘”***\\n\\n③“要看”***\\n\\n\\n考试易错点总结——重在精字！\\n{限制自己用一句话写出核心易错点，每一次考试之前不必翻阅完整错题，\\n直接反复看一句话易错点部分，将自己最容易错的点牢记}\\n使用活页本\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n第 71 页\\nChapter-11\\n \\n总结\\n\\n第 72 页\\n\\n【优优学姐个人介绍】——高考裸分689/数学142\\n数学的分数是「熬」来的，刷题+理解才能不断进步\\n高考数学142\\n💡\\n优优 清华学姐/清华本硕 /高考四川省前50\\n英语146 数学142 物理满分\\n\\n\\n可以看出：（数学的问题性+解题思维）是我们学习的重点，需要注意数学掌握什么+考什么\\n想像优优学姐一样拥有好成绩——\\n「抓住学习方法+备考方法」才能百战百胜\\n\\n①、②、③、④、⑤、⑥、⑦、⑧、⑨、⑩、⑪、⑫、⑬、⑭、⑮、⑯、⑰、⑱、⑲、⑳\\n优优 清华学姐高考成绩查询页面\\n希望你也能收到这样的喜讯！\\n「带着问题学习+学会刷题」才能不断进步！","chunk_count":72,"analyzed":false,"imported_file":true,"sections":[{"locator":"第 1 页","text":"\\n课程内容介绍Introduction\\n【努力也是一种天赋】\\n高考还远没有到拼天赋的程度，只有足够努力，才能不给自己找借口\\n1.优优学姐个人介绍\\n💡\\n高考裸分689——{分数与分数背后的故事}\\n数学分数——{142}\\n3.数学如何开窍\\n学习的核心——「问题」\\n方法——{听课/做题}\\n2.初高中数学时间规划\\n初中——{学什么}\\n高中——{学什么}\\n初中学习重点\\n高中学习重点"},{"locator":"第 2 页","text":"\\n课程内容介绍Introduction\\n【努力也是一种天赋】\\n高考还远没有到拼天赋的程度，只有足够努力，才能不给自己找借口\\n4.计算问题如何解决\\n💡\\n计算的核心——{算得慢/算错}\\n算得慢——{限时训练}\\n算错——{计算习惯}\\n5.数学的思维导图\\n思维导图——{网状}\\n思维导图——{表格}\\n针对性重难点——{模块分析/备考建议}\\n6. 提分重点\\n必拿分——{题目类型/如何应对}/争取——{题型/策略}\\n不同分数段提分策略——{<90/90~120/120+}"},{"locator":"第 3 页","text":"\\n课程内容介绍Introduction\\n【努力也是一种天赋】\\n高考还远没有到拼天赋的程度，只有足够努力，才能不给自己找借口\\n7.如何刷题、如何训练基础题\\n💡\\n题型分类——{基础、中档、压轴}\\n如何刷基础题——{方法、策略、时间}\\n8.如何刷中档题、压轴题\\n中档题——{方法/策略}\\n压轴题——{怎么练/考试策略}\\n9.刷题计划表与备考策略\\n刷题计划——{不同年级/每日/每周/寒暑假}\\n平时测试/大考的心态与时间分配\\n10.错题本\\n手把手教你整理错题——{题型怎么做？}\\n按板块梳理——{怎么针对自己的问题总结/一句话易错点}"},{"locator":"第 4 页","text":"Chapter-1\\n \\n优优学姐个人介绍"},{"locator":"第 5 页","text":"\\n【优优学姐个人介绍】——高考裸分689/数学142\\n数学的分数是「熬」来的，刷题+理解才能不断进步\\n高考数学142\\n💡\\n优优 清华学姐/清华本硕 /高考四川省前50\\n英语146 数学142 物理满分\\n\\n\\n\\n\\n① 数学要掌握什么\\n可以看出：（数学的问题性+解题思维）是我们学习的重点，需要注意数学掌握什么+考什么\\n想像优优学姐一样拥有好成绩——「抓住学习方法+备考方法」才能百战百胜\\n②数学怎么学\\n基本概念\\n公式推导\\n知识点联系\\n题型解法\\n计算能力\\n\\n+\\n\\n\\n带着问题学习\\n思维导图\\n刷题\\n①、②、③、④、⑤、⑥、⑦、⑧、⑨、⑩、⑪、⑫、⑬、⑭、⑮、⑯、⑰、⑱、⑲、⑳\\n优优 清华学姐高考成绩查询页面\\n希望你也能收到这样的喜讯！"},{"locator":"第 6 页","text":"Chapter-2\\n \\n初高中数学学习规划"},{"locator":"第 7 页","text":"\\n代数+几何的重点：{代数：方程+函数——带参数的思维}\\n{几何：定理的推导——平行、相交、全等、相似等}\\n\\n\\n从中考角度看初中数学？\\n💡\\n阶段性学习？2个重点\\n\\n① 初一——直线、方程\\n平行线、相交线\\n方程解法\\n\\n②初二——二+三四+一\\n二次根式\\n三角形\\n四边形\\n一次函数\\n\\n②初三——二+总\\n二次函数\\n总复习"},{"locator":"第 8 页","text":"\\n可以看到，每一个新课阶段，我们的重点是不同的\\n高一：注重函数的学习\\n高二：数形结合的思维、复习函数\\n高三：策略与针对性提分\\n从高考角度看高中数学？\\n💡\\n分阶段？4个新课阶段\\n\\n① 高一上\\n集合、不等式、函数（指对幂、三角函数）\\n\\n① 高一下\\n平面向量、复数、立体几何、统计概率\\n\\n① 高二上\\n空间向量、圆锥曲线、数列\\n\\n① 高二下\\n计数原理、随机变量分布、数据统计分析、导数"},{"locator":"第 9 页","text":"Chapter-3\\n \\n数学如何开窍"},{"locator":"第 10 页","text":"\\n\\n【数学开窍】：核心、方法、高分\\nPart1. 核心：\\n「问题」带着问题去学习\\n「策略」目标：带着问题+吃透：教材+熟练：例题\\n*：\\n数学的学习要从「听课」转移到「做题」\\n解决问题的思维是学习数学的核心\\nPart1. 核心\\n\\n💡\\n💡"},{"locator":"第 11 页","text":"\\n\\n【数学开窍】：核心、方法、高分\\nPart2. 方法：\\n\\n「预习」学什么：公式、定理、概念\\n「听课」不把今天的问题留到明天\\n「例题」公式、定理如何在题目中使用、解出问题\\n例如：学习「函数」\\n问题：函数的定义？用来表示什么?\\n听课：定义域、值域、周期性、单调性—表示「函数」的什么性质、如何解决问题？\\n例题：一个具体的函数-怎么求解值域、极值……\\nPart2. 方法\\n💡\\n💡"},{"locator":"第 12 页","text":"\\n\\n【数学开窍】：核心、方法、高分\\nPart3. 高分：\\n「思维导图」\\n公式推导、知识联系\\n\\n「刷题」\\n基础题：中档题：压轴难题=3:5:2\\n*：\\n「思维导图」列表/网状图\\n\\n「刷题」重在“精”——一道题=一类题\\nPart3. 高分\\n\\n💡\\n💡"},{"locator":"第 13 页","text":"Chapter-4\\n \\n计算问题如何解决"},{"locator":"第 14 页","text":"\\n计算问题：\\n注意「计算习惯+计算速度」同样重要\\n原则1:\\n计算习惯\\n计算习惯是「算得准」的基础！！！\\n注重草稿管理\\n平时计算：用专门「草稿纸/草稿本」\\n考试计算：把草稿纸折成「四象限」分区使用\\n*靠谁能够有时间检查时，迅速定位题目-草稿位置\\n*计算步骤/竖式计算不省略——有效杜绝看错、抄错、写错的疏漏\\n熟练之后加快速度\\n\\n*：\\n不要在试卷上打草稿！\\n不要分散凌乱打草稿！"},{"locator":"第 15 页","text":"\\n计算问题：\\n注意「计算习惯+计算速度」同样重要\\n原则2:\\n计算速度\\n计算速度是「算得快」的保证！！！\\n注重限时训练\\n平时计算：尽量不反复检查，保证一道题目连续算到结果\\n考试计算：善用排除法、特殊值法等，加快计算速度\\n*平常做到限时训练，考试才能游刃有余\\n*考试会更紧张，对于自己的易错点平常要加强「刻意训练」\\n\\n\\n*：\\n平常要养成专注计算的习惯！\\n每一次平时计算都当成考试——限时！"},{"locator":"第 16 页","text":"Chapter-5\\n \\n数学的思维导图"},{"locator":"第 17 页","text":"\\n思维导图：\\n💡\\n方法1.网状思维导图\\n适用于知识点分散、有逻辑联系\\n用好教材！！！\\n\\n\\n【强调！】\\n\\n先理解分立知识点「概念、定义、图像…」——再把握知识点的联系「形成知识网」，善用「箭头」在自己头脑中推导！！\\n数\\n形"},{"locator":"第 18 页","text":"\\n思维导图：\\n💡\\n方法2.表格状思维导图\\n适用于知识点需要对比\\n归纳总结！！！\\n\\n例如：\\n学习三角函数时\\n将「图像」与「性质」对应\\n系统性列表总结\\n\\n\\n【强调！】\\n\\n先理解概念的「共性」，通过「归纳」找出\\n相似点、易混点——明确差异、共同记忆！"},{"locator":"第 19 页","text":"\\n{针对性重难点——{模块分析/备考建议}\\n命题模块分析：\\n1.【函数与导数】\\n考察题型——【 「选填」-函数、「解答」-导数综合运用】\\n高频考点：\\n函数的基本性质、利用导数研究函数极值与最值、导数的几何意义\\n次高频考点：\\n初等函数、不等式恒成立及存在性、函数与导数单调性、用导数解决函数与方程\\n\\n#学姐建议——重点做思维导图内容：\\n抽象函数基本性质：\\n奇偶性、单调性、图像对称性\\n函数零点\\n利用导数研究函数最值\\n*重难题型：\\n构造函数证明不等式\\n导数的几何意义\\n导数研究不等式恒成立/根据不等式恒成立求参数\\n💡\\n原则:\\n选填-【定义域优先原则】【基本性质与结论】\\n解答-【求导公式要牢记，细心求导、分类讨论】\\n\\n*【赋值法】【数形结合】【特殊与一般】"},{"locator":"第 20 页","text":"\\n{针对性重难点——{模块分析/备考建议}\\n命题模块分析：\\n2.【三角函数、解三角形与平面向量】\\n考察题型——【 「选填」-诱导公式、三角恒等变换、平面向量，「解答」-正余弦定理、三角形面积公式】\\n高频考点：\\n三角恒等变换公式、解三角形、平面向量\\n次高频考点：\\n三角函数的图象与性质\\n\\n#学姐建议——重点做思维导图内容：\\n三角函数基础、平面向量的几何与代数形式：\\n三角函数的图象与性质（单调性、奇偶行、对称性、周期性）\\n正余弦定理解三角形\\n平面向量的数量积、模\\n*重难题型：\\n三角恒等变换\\n根据三角函数的性质（单调性、零点个数）求参\\n💡\\n原则:\\n选填-【两角和与差的三角函数公式、平面向量公式】\\n解答-【正余弦定理、三角形面积公式要牢记！】\\n\\n*【常用角的代换与公式变形】【多方观察选择合适方法】【平面向量解决数量、位置关系的应用】"},{"locator":"第 21 页","text":"\\n{针对性重难点——{模块分析/备考建议}\\n命题模块分析：\\n3.【数列】\\n考察题型——【 「选填」-数列基本项计算，「解答」-递推公式、证明、通项公式等】\\n高频考点：\\n等差数列、数列的递推与求和公式\\n次高频考点：\\n等比数列\\n\\n#学姐建议——重点做思维导图内容：\\n数列递推公式、前n项和公式及性质：\\n数列的性质在应用时的限制（公比q取值、项数n取值）\\n错位相减法、裂项相消法（项数n的范围和对称性）\\n基本量计算（首项、公差、公比）\\n*重难题型：\\n数列新定义\\n数列与不等式的结合\\n💡\\n原则:\\n选填-【规律性，记牢公式，注意限制】\\n解答-【新定义/不等式/函数结合】\\n\\n*【构造等差与等比】【注意总结快速解题法】【新定义信息+求解】"},{"locator":"第 22 页","text":"\\n{针对性重难点——{模块分析/备考建议}\\n命题模块分析：\\n4.【立体几何】\\n考察题型——【 「选填」-表面积和体积，「解答」-判定位置关系、空间角、向量方法与几何方法】\\n高频考点：\\n空间几何体的结构特征+表面积与体积、空间中位置关系\\n次高频考点：\\n二面角、线面角\\n\\n#学姐建议——重点做思维导图内容：\\n简单集合体结构特征、向量法与几何法：\\n点、直线、平面的位置关系\\n线面平行与垂直的判定、空间角\\n基本量计算（首项、公差、公比）\\n*重难题型：\\n空间动态问题\\n二面角最值、外接球、翻折问题\\n💡\\n原则:\\n选填-【牢记定理与转化条件】\\n解答-【灵活选择向量/几何方法】\\n\\n*【线面关系判定】【轨迹问题】【最值与范围问题】"},{"locator":"第 23 页","text":"\\n{针对性重难点——{模块分析/备考建议}\\n命题模块分析：\\n5.【解析几何】\\n考察题型——【 「选填」-直线与圆，「解答」-数形结合】\\n高频考点：\\n椭圆、双曲线、抛物线\\n次高频考点：\\n直线与圆\\n\\n#学姐建议——重点做思维导图内容：\\n数列递推公式、前n项和公式及性质：\\n直线与圆的位置关系\\n圆锥曲线的离心率\\n圆锥曲线中的定值、定点、最值、范围\\n*重难题型：\\n椭圆与定点问题\\n双曲线的渐近线\\n抛物线与直线/线段\\n💡\\n原则:\\n选填-【定义、标准方程、几何性质】\\n解答-【综合性、计算能力、二级结论】\\n\\n*【运算量大】【与向量、解三角形、不等式综合应用】"},{"locator":"第 24 页","text":"\\n{针对性重难点——{模块分析/备考建议}\\n命题模块分析：\\n6.【概率与统计】\\n考察题型——【 「选填」-排列组合、二项式定理、样本、条件概率，「解答」-经验回归方程、独立性检验、期望与方差】\\n高频考点：\\n排列组合、二项式定理、离散型随机变量、相互独立时间的概率\\n次高频考点：\\n古典概型、独立性检验、正态分布\\n\\n#学姐建议——重点做思维导图内容：\\n基础概念-相互独立事件的概率、条件概率：\\n排列组合、二项式定理\\n样本的数字特征\\n条件概率、相互独立事件概率\\n随机变量的分布与期望\\n*重难题型：\\n与数列、几何的结合\\n组合与二项式定理的结合\\n💡\\n原则:\\n选填-【牢记基础概念，理解到位】\\n解答-【与：导数、数列、集合结合，交叉运用】\\n\\n*【掌握模块内容】【多板块灵活理解运用】"},{"locator":"第 25 页","text":"Chapter-6\\n \\n提分重点"},{"locator":"第 26 页","text":"\\n数学如何提分？\\n1）必拿分——{题目类型/如何应对}\\n题目类型：「必须拿到手的分数」，以总题数为19道的高考数学为例\\n1-8单选 + 9-10多选 + 12-13填空 + 15-17大题\\n\\n*：会做的——一道都不要错！——{应对}平时就做限时训练\\n2）争取分——{题型/策略}\\n题目类型：「争取拿到手的分数」，以总题数为19道的高考数学为例\\n11多选题的一个选项 + 14填空（考察思维） + 最后两大题步骤分\\n\\n*：保证读题与思考时间！——{策略}不放过+尽量多写步骤\\n"},{"locator":"第 27 页","text":"提分策略？\\n不同分数段提分策略——{ < 90 }\\n核心方法——【根据自己的分数段针对性刷题】\\n\\n关键：明确当下问题，进行「刻意训练」\\n\\n💡\\n【当下分数】低于 90 分\\n{这一分数段没有达到及格线}\\n\\n基础有问题、基本概念不清晰\\n（做题的“砖”尚未扎实，无法进行数学体系的搭建）\\n\\n｜｜牢固基础：\\n\\n将书上的知识点画出「思维导图」\\n只练基础题\\n\\n*：进行限时训练！——检验：直到前8道选择+前两道多选能够\\n【限时全对】，蒙住答案迅速反应思路\\n"},{"locator":"第 28 页","text":"提分策略？\\n不同分数段提分策略——{ 90 ~ 120 }\\n核心方法——【根据自己的分数段针对性刷题】\\n\\n关键：明确当下问题，进行「刻意训练」\\n\\n💡【2024河南省普通高中毕业班高考适应性测试】大题.17\\n\\n【当下分数】 90 ～ 120 分\\n{这一分数段达到及格线，但题型不熟练/考试速度上不去}\\n\\n√基础有问题、基本概念不清晰\\n× 题型掌握不熟练，考试时间分配不当，成绩不稳定\\n（做题的“砖”积累足够，数学体系的搭建方法不明确）\\n\\n｜｜熟练题型：\\n将基础题进一步强化「限时」——缩短5-10分钟训练\\n将中档题、压轴题做「熟」——蒙住答案迅速反应\\n\\n*压轴题往往：中档题的「组合」，更加复杂、计算更大—拆解！\\n中档题型熟练之后，留更多时间给压轴题——往往事半功倍\\n\\n\\n\\n\\n\\n\\nStep6:验证-\\n其他取值范围排除\\nStep1:明确问题-\\n导数求函数最值\\nStep2:步骤-\\n求导数\\nStep3:步骤-\\n明确单调性\\nStep4:步骤-\\n明确最值\\nStep5:步骤-\\n新设函数，解出参数\\n"},{"locator":"第 29 页","text":"提分策略？\\n不同分数段提分策略——{ 120+ }\\n核心方法——【根据自己的分数段针对性刷题】\\n\\n关键：明确当下问题，进行「刻意训练」\\n\\n💡【2024广州市普通高中毕业班综合测试】多选题.11\\n\\n\\n【当下分数】 120 分以上\\n{这一分数段基础+中档常规题型可以处理，但是压轴没思路}\\n\\n√题型熟练、考试速度尚可\\n× 题型未能找到最优解，压轴题吃力\\n（数学体系的搭建完成，解题策略需要提升）\\n\\n｜｜题型精进+找最优解：\\n将题型做「精」—— 从考试错题积累思路\\n\\n*：与老师沟通，针对性应对「最容易失分」的问题！\\n不满足于「做出来」——寻找多种解法、最优解\\nStep6:验证-\\n其他取值范围排除\\nStep1:明确问题-\\n导数求函数最值\\nStep2:步骤-\\n求导数\\nStep3:步骤-\\n明确单调性\\nStep4:步骤-\\n明确最值\\nStep5:步骤-\\n新设函数，解出参数\\n"},{"locator":"第 30 页","text":"提分策略？\\n\\n方法1:求切线\\n思路：联立求解\\n方法2：将参数转为未知常数\\n思路：构造新函数\\n化为‘方程的解’\\n计算简单数形结合大大提升做题速度\\n计算量略大\\n1）积累思路！多观察、思考题目的变形\\n2）牢记二级结论，大大简化做题步骤\\n\\n\\n\\n"},{"locator":"第 31 页","text":"Chapter-7\\n \\n如何刷题与训练基础题"},{"locator":"第 32 页","text":"题型难度分布？\\n以：19题的高考试卷为例\\n基础题占比最大\\n\\n中档题分值较大\\n\\n压轴题难度较大\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n"},{"locator":"第 33 页","text":"哪些是基础题？\\n\\n\\n\\n\\n\\n\\n以：19题的高考试卷为例\\n基础题占比最大\\n\\n中档题分值较大\\n\\n压轴题难度较大\\n\\n\\n\\n\\n\\n\\n\\n\\n牢记一个比例！\\n3:5:2——【 「基础题」、「中档题」、「压轴题」 】比例\\n分数低于90，先「只」刷基础；分数90以上，仍然要重视基础题「速度+正确率」——基础题是搞定数学分数的基础！！！\\n"},{"locator":"第 34 页","text":"哪些是基础题？\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n以：19题的高考试卷为例\\n单选1-7、\\n多选9-10，\\n填空12-13，\\n大题15-16\\n大题17-19（第一小问）\\n是基础题"},{"locator":"第 35 页","text":"哪些是基础题？\\n以：19题的高考试卷为例\\n单选1-7、\\n多选9-10，\\n填空12-13，\\n大题15-16\\n大题17-19（第一小问）\\n是基础题\\n\\n\\n\\n\\n\\n\\n\\n\\n"},{"locator":"第 36 页","text":"\\n哪些是基础题？基础题怎么刷？\\n以：19题的高考试卷为例\\n单选1-7、多选9-10，填空12-13，大题15-16、大题17-19（第一小问）是基础题\\n*学姐经验：刷题计划的核心是——“限时+高频+复盘+总结”\\n对于成绩暂时在90分以下的同学来说，只有不断地在基础题上夯实概念、熟悉方法、提高速度，才能在后期应对更综合或难度更高的题目\\n💡刷题训练：\\n1.方法： ①选择题与填空题的限时训练｜ ②大题（解答题）的限时训练\\n2.时间： ③每日、每周、每月刷题 ｜\\n3.表格：  ④一个学期的规划 ｜ ⑤寒暑假｜⑥刷题打卡表（示例模板）\\n①、②、③、④、⑤、⑥、⑦、⑧、⑨、⑩、⑪、⑫、⑬、⑭、⑮、⑯、⑰、⑱、⑲、⑳"},{"locator":"第 37 页","text":"①选择题与填空题的限时训练\\n\\n💡\\n限时方法：\\n\\n以单选、填空题为例：单选题：平均每题1~1.5分钟左右。\\n填空题：平均每题2~3分钟左右。\\n\\n举例：如果一次选取5道单选题和2道填空题，总时长可控制在15~20分钟内。可以进行计时，一旦时间到就停止作答，\\n未完成的题先标记出来。\\n\\n如何定时训练\\n选题范围\\n\\n\\n先从基础题（如新高考卷中的1-7单选题、9-10多选题、12-13填空题）入手。\\n\\n*建议一次选取【5~10道】此类基础题，难度以自己稍感吃力但经过努力能解决的题目为佳。\\n"},{"locator":"第 38 页","text":"①选择题与填空题的限时训练\\n如何定时训练\\n\\n💡\\n训练频率\\n\\n每日：\\n    建议每天进行一次小规模的选择-填空组合限时训练(5~10题)。\\n每周：\\n    可以安排一次集中训练（例如周末），选择15-20道题，限时40-50分钟完成，模拟考试环境。\\n\\n及时回顾：\\n训练结束后，先对照答案，找出【错题】、【不会的题】和【超时的题】\\n*先搞清楚“错在哪里”与“正确思路是什么”，再着重查漏补缺。\\n\\n错题本或错题卡：\\n将错误题目、解题思路、正确答案写在错题本上。\\n\\n二次做题：\\n复盘后【第二天】再重新做一遍这些错题，巩固记忆。\\n对于【同一类型题】反复出错，要深入分析是概念不熟还是解题方法不熟练，及时补强相关知识点。"},{"locator":"第 39 页","text":"②大题（解答题）的限时训练\\n\\n💡\\n限时方法：\\n\\n对于一道基础解答题，建议先给自己10~15分钟的思考和书写时间。若是两道基础解答题，整体控制在30分钟内完成。同样建议使用计时，严格在时间到后收笔，做标记。\\n\\n\\n如何定时训练\\n选题范围\\n\\n\\n从基础题或中档题开始，先确保自己能写全过程、能掌握常规解题方法。以新高考卷中15-16题为例（若这两题属于较基础或中档题），再慢慢延伸到更高难度的题目。"},{"locator":"第 40 页","text":"②大题（解答题）的限时训练\\n如何定时训练\\n\\n💡\\n训练频率\\n每日：\\n    可每天选取1道大题进行限时训练(10~15分钟)，先保量不求多。\\n每周：\\n    可在周末做一次集中强化，选择2-3道解答题，控制在40-60分钟内完成，模拟考试。\\n过程检查\\n*训练后立即回顾自己的解题过程：\\n是否看懂了题意？\\n是否使用了恰当的方法？\\n哪一步耗时最多？\\n关键步骤是否缺乏明确的思路？\\n\\n思路对比\\n*与标准答案或老师讲解的思路对比，看看自己漏了哪些关键步骤，或者有没有多余的步骤。\\n\\n记录与回看\\n错题本上要写明：该题考查的知识点、自己的思路、正确思路、典型解法或技巧。\\n定期(如每周或每月)翻看错题本，进行二次或三次巩固。"},{"locator":"第 41 页","text":"Chapter-8\\n \\n如何刷中档题\\n与压轴题"},{"locator":"第 42 页","text":"哪些是中档题？\\n以：19题的高考试卷为例\\n单选8、\\n多选11一个选项，\\n填空12-13，\\n大题17是中档题\\n\\n\\n\\n\\n\\n\\n\\n\\n"},{"locator":"第 43 页","text":"哪些是基础题？\\n\\n\\n\\n\\n\\n\\n以：19题的高考试卷为例\\n单选8、\\n多选11一个选项，\\n填空12-13，\\n大题17是中档题"},{"locator":"第 44 页","text":"\\n哪些是中档题？中档题怎么刷？\\n以：19题的高考试卷为例\\n单选8、多选11一个选项，填空12-13，大题17是中档题\\n*学姐经验：刷题计划的核心是——“限时+思路拆解”\\n对于成绩当前90~120分段最主要的提分点在于稳定基础分，同时提高中档题的正确率。保持解题速度，遇到中档题要多反思方法是否最优，灵活应用各类知识点。\\n💡刷题训练：\\n1.方法： ①选择题与填空题的限时训练｜ ②大题（解答题）的限时训练\\n2.时间： ③每日、每周、每月刷题 ｜\\n3.表格：  ④一个学期的规划 ｜ ⑤寒暑假｜⑥刷题打卡表（示例模板）\\n①、②、③、④、⑤、⑥、⑦、⑧、⑨、⑩、⑪、⑫、⑬、⑭、⑮、⑯、⑰、⑱、⑲、⑳"},{"locator":"第 45 页","text":"①选择题与填空题的限时训练\\n\\n💡\\n限时方法：\\n\\n对于基础题，平均1分钟/单选题、2分钟/填空题。\\n对于中档题（例如单选8、多选11部分），可适当增加到3.5~5分钟/题，但不宜过长，以保持一定压力和速度感。\\n\\n举例：一次训练：8道单选（含1道中档题）+ 2道多选（含1道中档题）+ 12道填空，共耗时20～25分钟。\\n如何定时训练\\n选题范围\\n\\n\\n基础题：单选1～7，多选9～10，填空12～13。\\n中档题：单选第8题，多选第11的一个选项。\\n\\n一次训练可以组合“基础题+中档题”一起做，让自己在熟悉的环境下不断适应稍高难度的题。"},{"locator":"第 46 页","text":"①选择题与填空题的限时训练\\n如何定时训练\\n\\n💡\\n训练频率\\n\\n每日：进行一次选择-填空的限时训练(约10~12题)。\\n每周：安排1~2次大规模的限时训练(15~20题，耗时40~50分钟)，模拟考试氛围。\\n及时回顾：\\n训练后立即核对答案，区分：哪些是“熟悉但粗心”导致的错误？哪些是“概念或方法不熟”导致的错误？\\n尤其关注中档题的错因，是否是解题思路不清晰、运算不熟练或知识点不牢固。\\n\\n错题本：\\n对于中档题，除了记录正确解法外，也要多角度思考：是否有其他简洁的方法？能否用坐标法、几何法、函数法等替代思路？\\n\\n二次做题：\\n一周后或数天后再重新做错题，检验是否真正掌握。若同一类型的题多次出错，务必进行专题复习（如函数、数列、三角、几何等）"},{"locator":"第 47 页","text":"②大题（解答题）的限时训练\\n\\n💡\\n限时方法：\\n\\n基础解答题：每题控制在10分钟以内。中档解答题：每题可适当放宽到12~15分钟，但仍要计时。\\n\\n示例：一次训练做2道大题(1道基础+1道中档)，总用时25~30分钟。\\n\\n如何定时训练\\n选题范围\\n\\n\\n基础解答题：如卷子15-16题(若相对容易)，可继续保持熟练。\\n中档解答题：如17题，18-19题的第一问。先从17题、18题的前半部分入手，保证思路清晰；再慢慢触及后半部分或更综合的问法。"},{"locator":"第 48 页","text":"②大题（解答题）的限时训练\\n如何定时训练\\n\\n💡\\n训练频率\\n每日：\\n    1道大题限时训练(含中档题或基础题混合)。\\n每周：\\n    集中做2~3道大题(1~2道中档+1道基础)，模拟考试节奏，耗时40~50分钟。\\n过程检查\\n*检查思路：读题是否准确，列式是否完整，关键步骤是否清晰。\\n*检查方法：对于中档题，常见的解题思路包括：方程法、几何法、函数法、向量法、数列递推等，要看自己是否熟练调用。\\n\\n思路对比\\n看标准答案或老师的讲解，比较自己的思路是否更繁琐、是否有更优解。\\n若有较大差异，要记录在错题本上，并尝试“再做一遍”或“换个方法做”。\\n\\n记录与回看\\n定期(如周末或月底)翻看错题，关注中档大题中反复出现的问题（如不等式求解、三角函数综合、圆锥曲线等），集中强化。"},{"locator":"第 49 页","text":"哪些是压轴题？\\n以：19题的高考试卷为例\\n多选11（全部选项），\\n填空14，\\n大题18-19（除了第一问）是压轴题\\n\\n\\n\\n\\n\\n\\n\\n\\n"},{"locator":"第 50 页","text":"哪些是压轴题？\\n\\n\\n\\n\\n\\n\\n\\n以：19题的高考试卷为例\\n多选11（全部选项），\\n填空14，\\n大题18-19（除了第一问）是压轴题"},{"locator":"第 51 页","text":"\\n哪些是压轴题？压轴题怎么刷？\\n以：19题的高考试卷为例\\n多选11（全部选项），填空14，大题18-19（除了第一问）是压轴题\\n*学姐经验：刷题计划的核心是——“高效限时+多解思路”\\n分数在120分以上，说明基础题和中档题大部分能拿下。目标是冲击140分乃至更高分。\\n必须熟练掌握“考场时间分配”策略：先稳拿前面分数，再根据难度和自身情况合理安排解题顺序，力争多拿压轴题分数。\\n💡刷题训练：\\n1.方法： ①选择题与填空题的限时训练｜ ②大题（解答题）的限时训练\\n2.时间： ③每日、每周、每月刷题 \\n①、②、③、④、⑤、⑥、⑦、⑧、⑨、⑩、⑪、⑫、⑬、⑭、⑮、⑯、⑰、⑱、⑲、⑳"},{"locator":"第 52 页","text":"①选择题与填空题的限时训练\\n\\n💡\\n限时方法：\\n\\n基础题：单选平均1分钟内完成，填空题2分钟左右。\\n多选第11（难选项）和填空14（难度较高）：适当放宽到2~3分钟/题，但仍要控制总时长。\\n\\n示例：一次训练可选10道题（含基础8道+2道难度较高的多选/填空），耗时20~25分钟。\\n如何定时训练\\n选题范围\\n\\n基础+中档：单选18，多选910，填空12~13等，确保不失分或少失分。\\n\\n压轴题涉及的多选：多选第11题可能存在较难的选项，要把它当成“中高难度”来做，进行针对性训练。\\n\\n压轴填空：如填空14。"},{"locator":"第 53 页","text":"①选择题与填空题的限时训练\\n如何定时训练\\n\\n💡\\n训练频率\\n\\n每日：1次快速限时训练（约10～12题），包括1～2道难度较高的多选或填空14。\\n每周：1～2次大规模限时训练(15～20题)，耗时40～50分钟，严格模拟考试节奏。\\n快速核对+精细分析\\n对于基础和中档题，错题要立即找出概念或运算失误；\\n对于难度较高的多选11、填空14等，要深入分析解题思路、可能的多种解法，以及在哪一步出现思路卡顿或运算困难。\\n\\n思维拓展\\n复盘时多问自己：“能否用其他方法？”“是否有更简洁的思路？”\\n特别是压轴多选题，可能存在不同的思维路径，要将这些方法记录在错题本或思维导图中，培养发散思维。\\n\\n错题回炉\\n针对难度较高的错题，要在1~2天后或一周后再次做一遍，确保理解彻底。\\n若是同一知识点反复出错，务必进行专题复习（如圆锥曲线综合、导数与函数综合、三角与向量综合等）。"},{"locator":"第 54 页","text":"②大题（解答题）的限时训练\\n\\n💡\\n限时方法：\\n\\n基础/中档题：每题8~10分钟左右。\\n压轴题：每道题（特别是后半部分）预留15~20分钟，但要注意整体效率，不可陷入无休止的“卡壳”。\\n\\n示例：一次训练做2道大题（含1道压轴18或19），总用时30~35分钟。\\n如何定时训练\\n选题范围\\n\\n\\n基础/中档解答题：如15~17题，仍需保持稳定拿分。\\n\\n压轴题：大题18和19，其中前面问法可能是中档，后面问法往往是压轴(难度最高)。\\n\\n在日常训练时，务必将后续问法或变形题也纳入练习范畴。"},{"locator":"第 55 页","text":"②大题（解答题）的限时训练\\n如何定时训练\\n\\n💡\\n训练频率\\n每日：\\n    1道大题（可以是中档或压轴），10~20分钟限时完成。\\n每周：\\n    2～3道大题强化(其中至少1道压轴)，耗时40～60分钟，模拟正式考场节奏。\\n深度拆解\\n对于压轴题18-19，先把整道题分成若干小模块：\\n分析题意、列出条件；\\n可能使用的数学工具（函数、几何、向量、导数等）；\\n关键转折或技巧（如定义新函数、巧用几何变换、引入参数等）。\\n逐步排查每个模块是否掌握清楚。\\n\\n比较多种解法\\n压轴题往往有多解思路：如向量法vs.坐标法，函数法vs.不等式法。\\n复盘时可查看参考资料或讨论与老师、同学的不同解法，并记录在案。\\n\\n总结规律\\n高考压轴题常有一定“套路”或“命题热点”（如圆锥曲线与数列结合、三角函数的最值、导数与不等式结合等）。\\n做完后要总结：“本题考察了哪些综合知识点？涉及哪种常用技巧？”，并与历年真题或类似题进行对比，形成知识网络。"},{"locator":"第 56 页","text":"Chapter-9\\n \\n刷题计划表与备考策略"},{"locator":"第 57 页","text":"每日、每周、每月刷题\\n学姐推荐：\\n按照周期刷题\\n及时总结+不断复盘！！！\\n\\n💡\\n每日计划：\\n早读/课间：快速回顾前一天的错题或难点。放学后/自习课：选择-填空限时训练：5-10题，15-20分钟。\\n立即对答案、标记错题，简要记下错因。\\n\\n晚自习/回家：大题限时训练：1道(10~15分钟)。\\n训练后快速对答案或参照解答思路，整理错题。\\n\\n睡前：用5分钟回想当天的错题或易错点，做好知识点巩固。\\n\\n\\n💡\\n每周计划：\\n周中（周三或周四）：安排一次稍大规模的选择填空训练：15-20题，限时40-50分钟。训练后深度复盘。\\n\\n周末：集中做2-3道大题，限时40-60分钟，模拟考试环境。\\n进行错题整理，对一周内反复出现的知识点进行查缺补漏。\\n可以做一份小测或阶段性测试卷（只做选择+填空或只做部分大题），检验一周学习效果。\\n💡\\n每月计划：\\n月初/月底：做一份完整的模拟卷(全卷)，限时120分钟，严格按照考试要求执行。\\n考后深度总结：对薄弱环节做专项补强。\\n\\n月度错题整理：将本月的错题再做一遍，并且将错题按知识点分类，形成专题整理。\\n针对薄弱章节(函数、三角、立体几何、解析几何等)，进行针对性的“回炉”训练。"},{"locator":"第 58 页","text":"①一个学期的规划\\n学姐经验：\\n不同年级侧重点不同\\n\\n💡\\n高一阶段：\\n重点：打牢代数与函数基础(一次函数、二次函数)、基本几何知识(三角形)、不等式等。\\n\\n训练节奏：\\n每日5~10道选择-填空 + 1道基础大题。\\n每周小测巩固(选择+填空或少量大题)。\\n每月做一次完整测评，关注函数与代数的熟练度。\\n\\n策略：多花时间在概念理解、公式记忆、基础运算与规范书写上。\\n\\n\\n💡\\n高二阶段：\\n重点：函数综合(指数、对数、三角函数)、解析几何(直线与圆锥曲线)、立体几何(空间向量)、数列等。\\n\\n训练节奏：\\n每日5~10道选择-填空 + 1道中档大题(含综合知识点)。\\n每周专项训练：解析几何或立体几何等较难板块，进行集中练习。\\n每月一套综合模拟题，全面检测。\\n\\n策略：在高一打牢基础的前提下，开始练习多知识点综合题，并留意解题方法的灵活运用。\\n💡\\n高三阶段：\\n重点：真题/模拟题综合演练，提升解题速度和准确率。\\n\\n训练节奏：\\n每日限时训练：选择-填空(10~15题) + 2道大题，严格计时。\\n每周或每半周进行一次全真模拟(完整卷)。\\n不断复盘错题，按专题强化(函数、数列、几何、导数、概率统计等)。\\n\\n策略：加强考场节奏把控、错题回炉、强化综合解题思路。"},{"locator":"第 59 页","text":"②寒暑假规划\\n寒假\\n\\n💡\\n不同年级\\n高一：\\n    预习70%，复习30%。\\n高二：\\n    当作“小高三”，联系真题。\\n高三：\\n    提分效率是关键——找到自己最薄弱处，专项训练\\n寒假\\n时间长度：一般2~3周左右的复习时间。\\n目标：查漏补缺 + 提前预习下学期关键知识点。\\n\\n计划：\\n每日：做1~2小时基础题(选择+填空) + 1小时大题专项训练。\\n每周：做一套模拟题或阶段测试卷。\\n重点复习：上一学期薄弱章节和错题集中区。\\n\\n"},{"locator":"第 60 页","text":"②寒暑假规划\\n寒假\\n\\n💡\\n不同年级\\n高一：\\n    预习70%，复习30%。\\n高二：\\n    当作“小高三”，联系真题。\\n高三：\\n    提分效率是关键——找到自己最薄弱处，专项训练\\n暑假\\n时间长度：通常约4~6周可自主安排。\\n目标：系统复习已学知识 + 提前预习新学期重点内容(特别是高二升高三的暑假极为关键)。\\n\\n分阶段：\\n第一阶段(前2周)：全面梳理上一学年的知识点，每日3小时左右刷题，兼顾复盘。\\n第二阶段(中2周)：专项突破薄弱环节，每日2小时左右做专题训练(函数、几何等)。\\n第三阶段(后2周)：做综合模拟卷，每周2~3套，计时+总结。\\n"},{"locator":"第 61 页","text":"刷题打卡表-每日\\n建议打印出来贴在书桌或用电子表格\\n\\n💡\\n使用方式：\\n\\n每日填写当天训练的题目数量、用时、正确率。\\n将错题对应到知识点，方便后续针对性复习。\\n记录当天复盘情况和心得，及时总结。\\n日期\\n选择/填空 (数量/用时)\\n正确率\\n大题 (数量/用时)\\n解题情况（耗时/正确率）\\n错题知识点\\n复盘完成(是/否)\\n备注/感想\\n3/10\\n8题/15分钟\\n6/8\\n1题/12分钟\\n1/1 正确\\n二次函数\\n是\\n需复习配方法\\n3/11\\n5题/10分钟\\n4/5\\n1题/10分钟\\n0/1 错\\n空间向量\\n否(待明日)\\n思路不熟\\n3/12\\n...\\n...\\n...\\n...\\n...\\n...\\n..."},{"locator":"第 62 页","text":"刷题打卡表-每周\\n建议打印出来贴在书桌或用电子表格\\n\\n💡\\n使用方式：\\n\\n周日或下周一汇总本周所有刷题情况，统计正确率、主要错题分布。\\n根据周测/模拟成绩检验复习效果，明确下周的改进重点。\\n周次\\n选择填空合计 (数量/正确率)\\n大题合计 (数量/正确率)\\n周测/模拟成绩\\n主要错题知识点\\n下周改进方向\\n第1周\\n40题 / 70%\\n5题 / 60%\\n85/150\\n函数、数列\\n加强函数基础\\n第2周\\n45题 / 75%\\n6题 / 66%\\n90/150\\n三角函数\\n三角公式巩固\\n第3周\\n...\\n...\\n...\\n...\\n...\\n\\n"},{"locator":"第 63 页","text":"\\n平时测试的心态与时间分配\\n心态准备\\n目标明确：平时测试的主要目的是检查阶段性学习成果、发现知识盲点、积累解题经验。\\n适度紧张：保持一定的紧张感有助于提升专注度，但不必过度焦虑。\\n培养考试习惯：平时测试要尽量模拟大考状态（限时、专注、答题顺序等），为大考做准备。\\n时间分配策略\\n\\n\\n\\n\\n#快速浏览：\\n    开考前1~2分钟，快速浏览试卷结构，了解题型和题量。\\n\\n\\n选择-填空：先易后难\\n    平均分配给每道选择题1～1.5分钟、填空题2～3分钟（视科目和难度略有调整）。\\n    先做容易、熟悉的题，保证基础分数，留下相对较难的题最后处理。\\n\\n💡"},{"locator":"第 64 页","text":"\\n平时测试的心态与时间分配\\n心态准备\\n目标明确：平时测试的主要目的是检查阶段性学习成果、发现知识盲点、积累解题经验。\\n适度紧张：保持一定的紧张感有助于提升专注度，但不必过度焦虑。\\n培养考试习惯：平时测试要尽量模拟大考状态（限时、专注、答题顺序等），为大考做准备。\\n时间分配策略\\n\\n\\n\\n\\n大题部分\\n    对大题进行快速定位：看清题干、分值和难度，合理分配时间。\\n    每道大题根据难度可预设8~15分钟不等的时间上限，时间到后若仍未解出，也要先标记并暂时放下，确保整体进度。\\n\\n\\n\\n留出检查时间\\n    在平时测试中，最好预留3～5分钟进行检查，尤其关注计算题、填空题是否有漏写或简单算错。\\n💡"},{"locator":"第 65 页","text":"\\n大考（如期末考、中考、高考）的心态与时间分配\\n考前准备\\n\\n调整作息：尽量在考前一周保持规律睡眠，避免熬夜刷题。\\n知识梳理：在最后阶段更注重查漏补缺和巩固主干知识，不要盲目海量刷新题。\\n心理暗示：适度给自己积极的心理暗示，如“我已经尽力准备”“只要稳住就能拿到理想成绩”。\\n物质准备：考试文具、准考证等提前检查；考前一天避免剧烈运动或情绪波动过大。\\n考中策略\\n\\n\\n\\n1.整体时间分配\\n\\n选择-填空：\\n快速扫题，先挑自己最有把握的题，稳拿分数。\\n对较难题目要合理分配时间，不可在单一题目上“死磕”太久。\\n\\n大题部分：\\n一般按分值高低及难度顺序分配时间。若总共有45道大题，可大致为每题1015分钟，具体视科目、分值而定。\\n遇到卡壳时，先记录已知条件、尝试列式或画图，若思路仍不清晰，就先跳过并在末尾时间回头再攻克。\\n\\n💡"},{"locator":"第 66 页","text":"\\n大考（如期末考、中考、高考）的心态与时间分配\\n考前准备\\n\\n调整作息：尽量在考前一周保持规律睡眠，避免熬夜刷题。\\n知识梳理：在最后阶段更注重查漏补缺和巩固主干知识，不要盲目海量刷新题。\\n心理暗示：适度给自己积极的心理暗示，如“我已经尽力准备”“只要稳住就能拿到理想成绩”。\\n物质准备：考试文具、准考证等提前检查；考前一天避免剧烈运动或情绪波动过大。\\n考中策略\\n\\n2.先易后难、理性取舍\\n\\n先易后难：\\n先做能拿稳分数的题，确保基本分；\\n难题或不确定的题留到后面。\\n\\n遇到不会的题：\\n先看是否能从已知条件中推导部分结论，哪怕只能写出一部分过程，也可能拿到步骤分；\\n切忌“钻牛角尖”浪费过多时间。\\n\\n分段限时：\\n可以在试卷上标注各部分完成时间节点，如：\\n选择填空尽量在前30~40分钟完成；大题1~2道在后20分钟完成；\\n整场考试结束前3～5分钟检查漏写、抄错。\\n若某道题超过了预设时间上限，要果断先跳过或做标记，避免影响后续所有题目。\\n\\n💡"},{"locator":"第 67 页","text":"Chapter-10\\n \\n错题本"},{"locator":"第 68 页","text":"数学错题本怎么做？\\n两个方面分别积累\\n\\n①按照【专题】——知识点\\n②按照自己的易错点——【一句话易错点】\\n\\n\\n\\n💡\\n【学姐数学错题本】详见附赠笔记\\n\\n{一共十个方面}\\n\\n*把错题✂️剪下来，黑笔写：解题步骤，红笔写：错因+知识点\\n\\n\\n\\n\\n｜｜订正一张卷子/一个练习：\\n\\n及时总结！绝不把今天的错题拖到明天！！！\\nPart 1\\nPart 2\\n\\n"},{"locator":"第 69 页","text":"Part1: 数学错题题型——怎么做？\\n剪下题目/简略抄写\\n黑笔写题\\n红笔总结\\n\\n💡\\n写出错误原因\\n\\n\\n①画图分析\\n②详细写出解题过程\\n③对比多解法\\n\\n\\n每一步都要做到清晰！\\n做完复盘后：能够蒙住\\n解题过程反应解题思路\\n使用活页本\\n\\n\\n"},{"locator":"第 70 页","text":"Part2: 按照易错点积累——怎么做？\\n\\ne.g.一句话易错点！\\n\\n💡\\n当在考试中遇到【自己容易错的地方】\\n按照题型整理完之后——「精」减成一句话！\\n\\n①“注意”***\\n\\n②“不要忘”***\\n\\n③“要看”***\\n\\n\\n考试易错点总结——重在精字！\\n{限制自己用一句话写出核心易错点，每一次考试之前不必翻阅完整错题，\\n直接反复看一句话易错点部分，将自己最容易错的点牢记}\\n使用活页本\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n"},{"locator":"第 71 页","text":"Chapter-11\\n \\n总结"},{"locator":"第 72 页","text":"\\n【优优学姐个人介绍】——高考裸分689/数学142\\n数学的分数是「熬」来的，刷题+理解才能不断进步\\n高考数学142\\n💡\\n优优 清华学姐/清华本硕 /高考四川省前50\\n英语146 数学142 物理满分\\n\\n\\n可以看出：（数学的问题性+解题思维）是我们学习的重点，需要注意数学掌握什么+考什么\\n想像优优学姐一样拥有好成绩——\\n「抓住学习方法+备考方法」才能百战百胜\\n\\n①、②、③、④、⑤、⑥、⑦、⑧、⑨、⑩、⑪、⑫、⑬、⑭、⑮、⑯、⑰、⑱、⑲、⑳\\n优优 清华学姐高考成绩查询页面\\n希望你也能收到这样的喜讯！\\n「带着问题学习+学会刷题」才能不断进步！"}],"parse_status":"completed"},{"id":"course-a280e71a227b70aa","title":"英语课程ppt.pptx","subspace":"产品课程","subject":"英语","relative_path":"英语/英语课程ppt.pptx","space_name":"清华优优 AI Wiki","doc_type":"document","uri":"https://northstar-copilot.com/product-courses/a280e71a227b70aa/英语课程ppt.pptx","size":32689750,"local_content":"第 1 页\\n\\n课程内容介绍Introduction\\n【努力也是一种天赋】\\n高考还远没有到拼天赋的程度，只有足够努力，才能不给自己找借口\\n1.优优学姐个人介绍\\n💡\\n高考裸分689——{分数与分数背后的故事}\\n英语分数——{146}\\n3.阅读\\n提高阅读速度——{小说/阅读做题}\\n3只笔——{学会学姐阅读英文文章的笔记方法}\\n2.背单词\\n方法——{谐音记忆/联想记忆/关联记忆/读音}\\n拼读背诵——{会拼就会背}\\n周期——{3+7+21}\\n提高英语背诵能力的方法——{1+1+1}\\n\\n第 2 页\\n\\n课程内容介绍Introduction\\n【努力也是一种天赋】\\n高考还远没有到拼天赋的程度，只有足够努力，才能不给自己找借口\\n4.完形填空\\n💡\\n填哪些——{挖坑类型}\\n怎么练——{方法/实战/总结}\\n例题\\n5.七选五\\n怎么选——{逻辑结构/关键词}\\n排除方法+选最优解\\n例题\\n6. 听力\\n方法——{学会精听+速记}\\n精听+速记——{用好音频与原文/速记方法学习}\\n\\n第 3 页\\n\\n课程内容介绍Introduction\\n【努力也是一种天赋】\\n高考还远没有到拼天赋的程度，只有足够努力，才能不给自己找借口\\n7.语法\\n💡\\n语法结构——{时态/学习语法方法/划分长难句}\\n一首歌学会英文时态——{Love story}\\n8.口语\\n如何提高英语口语——{跟读/美剧}\\n实战中提高口语能力——{英文歌/英语角}\\n9.作文\\n学会英语的万能展开大法——{总分总+万能展开}\\n针对续写——{思路/实践}\\n10.错题本\\n手把手教你整理错题——{题型怎么做？}\\n按板块梳理——{怎么针对自己的问题总结}\\n\\n第 4 页\\nChapter-1\\n \\n优优学姐个人介绍\\n\\n第 5 页\\n\\n【优优学姐个人介绍】——高考裸分689/英语146\\n英语的分数是「捡」来的，每一分都要重视\\n高考英语146\\n💡\\n优优 清华学姐/清华本硕 /高考四川省前50\\n英语146 数学142 物理满分\\n\\n\\n\\n\\n① 英语要掌握什么\\n可以看出：（英语的语言性+工具性）是我们学习的重点，需要注意英语学什么+考什么\\n想像优优学姐一样拥有好成绩——「抓住学习方法+备考方法」才能百战百胜\\n② 英语怎么学\\n注重词汇积累\\n强化听力训练\\n阅读理解提升\\n写作技能培养\\n语法知识掌握\\n\\n\\n+\\n\\n高效记忆法应用\\n提高口语表达\\n多元化学习资源\\n①、②、③、④、⑤、⑥、⑦、⑧、⑨、⑩、⑪、⑫、⑬、⑭、⑮、⑯、⑰、⑱、⑲、⑳\\n优优 清华学姐高考成绩查询页面\\n希望你也能收到这样的喜讯！\\n\\n第 6 页\\nChapter-2\\n \\n背单词\\n\\n第 7 页\\n\\n1+1+1的背诵方法：{人们对于自己表达的东西记忆最深}\\n「自己先背一遍」+「录音」\\n「睡前」听一遍录音\\n「第二天起床后」再背一遍\\n\\n\\n背什么？\\n💡\\n单词要背哪些？4个方法\\n\\n① 初中——中考考纲1600词\\n记忆方法：\\n按照「话题」速记\\n\\n②高中——高考考纲3500词\\n记忆方法：\\n按照「乱序」+「少量多次」重复记忆\\n\\n*每天20个，坚持一个月>一天50个，不坚持\\n\\n第 8 页\\n\\n可以看到；「谐音记忆」+「联想记忆」就是我们经常用的方法，是中文谐音+英文引申义的结合，很多单词在记忆时都可以采用这样的方法\\n\\n是一种非常高效形象的记忆方法\\n\\n背单词的方法\\n💡\\n单词要怎么背？4个方法\\n\\n① 谐音记忆\\nTedious 冗长的、啰嗦的、单调乏味的 [踢地而死]\\nEndow 捐赠、资助 [银到]\\nDisgruntle 使不满 [diss光头]\\n\\n②联想记忆 \\nHideous 丑恶的、可怕的 [hide+ous 躲藏+多-因为令人讨厌而躲藏]\\nCasualty 事故、急诊室、伤亡 [因为太casual随意-造成了（事故）-（伤亡）很多，送到了（急诊室）]\\n\\n第 9 页\\n\\n可以看到；「关联记忆」可以让我们从一个词扩充到相关的许多词，「读音记忆」可以让我们准确又快速记住，是读音+拼写的结合，可以说——会读就会背，而且不会拼错\\n\\n怎么快速拼读？\\n背单词的方法\\n💡\\n如果不好谐音/联想怎么办？ 千万不要死记硬背\\n\\n③关联记忆\\nPlodding 沉重的 [plod v.n. 辛勤工作/沉重步伐；沉重地走/辛勤地工作]\\n* +谐音记忆：Plod 辛勤工作、沉重地走 [破锣的]\\n\\n\\n④读音记忆 \\n按照读音分节背，会读就会背：Too th some/de li cate\\n\\n第 10 页\\n\\n快速拼读\\n遇到新单词不知道怎么读？\\n\\n在这一部分里，我们需要总结单词的相似/相同音节：\\n\\n记住：「会读就会背」，不用死记硬背音标——从自己的积累中去总结相同的发音\\nx…e就读x(字母的发音) ：Ride fade pipe delicate\\n{请你跟读}\\n\\n\\nck就读k： pack back clock\\n{请你跟读}\\n\\n\\ntion/sion就读[ʃ(e)n]：situation examination creation passion mission constitution\\n{请你跟读}\\n  \\n\\n第 11 页\\nChapter-3\\n \\n阅读\\n\\n第 12 页\\n\\n\\n【阅读分为两部分】：平时阅读+考试阅读\\nPart1. 平时阅读：\\n「特点」时间多但时间碎、阅读多但杂\\n\\n\\n「策略」重在“广”\\nPart2. 考试阅读：\\n「特点」时间少但时间集中、阅读目的——为了做题\\n\\n\\n「策略」重在“精”\\nPart1. 平时阅读\\nPart2. 考试阅读\\n\\n💡\\n💡\\n\\n第 13 页\\n1.平时阅读：\\n\\n读什么？\\n课内文章\\n英文原著小说\\n\\n课内怎么读？\\n课内文章：课后单词/背诵全文/跟读磁带\\ne.g. 学姐的亲身经历：初中时，每个单元课文1短对话+1长文章：全文背诵「理解所有生词表单词在文中的意思」+「被动式学习语法，因为背诵的课文中本身包含了很多语法结构、时态」+「跟读每篇课文7遍以上，做到语言流畅、和范文抑扬顿挫一致」\\n课内文章三个目的：生词/语法/口语——通过背诵形成肌肉记忆\\n\\n课外怎么读？\\n选一本「自己喜欢」的英文小说\\n每周读10-15页，「查单词」+「理解情节」\\n课外小说两个目的：养成查单词的好习惯/养成阅读习惯\\n\\n\\n第 14 页\\n1.平时阅读：\\n\\n学姐推荐的十本英文小说\\n\\nThe Great Gatsby – 《了不起的盖茨比》 (F. Scott Fitzgerald)\\nTo Kill a Mockingbird – 《杀死一只知更鸟》 (Harper Lee)\\nGone with the Wind – 《飘》 (Margaret Mitchell)\\nA Game of Thrones – 《冰与火之歌》 (George R.R. Martin)\\nThe Chronicles of Narnia – 《纳尼亚传奇》 (C.S. Lewis)\\n1984 – 《一九八四》 (George Orwell)\\nBrave New World – 《美丽新世界》 (Aldous Huxley)\\nThe Catcher in the Rye – 《麦田里的守望者》 (J.D. Salinger)\\nLord of the Flies – 《蝇王》 (William Golding)\\nFrankenstein – 《弗兰肯斯坦》 (Mary Shelley)\\n\\n这些原著小说都具有深刻的思想性和文学价值，适合初、高中生和小学生进行阅读和思考。\\n\\n\\n第 15 页\\n\\n2.考试阅读：\\n💡\\nStep1.通读全文，划分内容 [一划分]\\n拿到文章，把文章通读一遍，重在「精」\\n按照学姐的「一纵几点」的方法，划分文章为几部分\\n每个段落用{//}划出，在其后总结大意，并在原文「标出」相应中心句\\nStep2.定位原文 [二定位]\\n拿到题目，迅速定位原文位置\\n无非三种题目：词义猜测/段落理解/细节理解\\nStep3.找上下文+段落逻辑=解题\\n先回顾自己「//」后的段落总结\\n寻找上下句/上下段，判断逻辑+语义，选出准确选项\\n\\n【强调！】\\n\\n一定要牢记 「不要一味追求阅读速度」——先学会「精」读一篇，再逐渐增加速度\\n\\n第 16 页\\n\\n考试阅读示范：\\n范文：2024高考全国一卷\\n英语真题\\n1）划分\\n2）定位\\n3）解题\\n\\n💡\\n【如何划分】\\n\\n一篇文章往往可以划分为：\\n\\n「头」\\n「脖子」\\n「身体」\\n「尾」\\n\\n每个部分用//划分\\n在左边列出纵向结构\\n\\n\\n第 17 页\\n\\n考试阅读示范：\\n范文：2024高考全国一卷\\n英语真题\\n1）划分\\n2）定位\\n3）解题\\n\\n💡\\n【如何划分】\\n\\n一篇文章往往可以划分为：\\n\\n「头」\\n「脖子」\\n「身体」\\n「尾」\\n\\n每个部分用//划分\\n在文中//后写出段落主题，在文中用（）划出主题定位在哪里\\n\\n\\n\\n\\n\\n\\n\\n第 18 页\\n\\n考试阅读示范：\\n范文：2024高考英语全国一卷\\n真题\\n1）划分\\n2）定位\\n3）解题\\n\\n💡\\n【如何定位】\\n\\n这道题：词义猜测\\n定位到文中，寻找上下文，「print」材料更好用来学习-因为更容易看，对应D\\n\\n每个部分用//划分\\n//后的段落主题，\\n\\n在做题时会直接作为提示！！做题速度自然提升\\n\\n\\n\\n\\n\\n\\n\\n第 19 页\\n\\n考试阅读示范：\\n范文：2024高考全国一卷\\n英语真题\\n1）划分\\n2）定位\\n3）解题\\n\\n💡\\n【如何定位】\\n\\n这道题：段落理解\\n定位到文中，有这一内容的位置-shallowing hypothesis \\n找上下文，后文解释：less mental effort\\n对应A\\n\\n每个部分用//划分\\n//后的段落主题，与问的段落内容直接相关\\n\\n\\n\\n\\n\\n\\n\\n第 20 页\\n\\n考试阅读示范：\\n范文：2024高考全国一卷\\n英语真题\\n1）划分\\n2）定位\\n3）解题\\n\\n💡\\n【如何定位】\\n\\n这道题：细节理解\\n定位到文中「尾」提出新现象段，寻找上下文，这一细节「用新技术教学为什么」因为上文「feel more engaging」，对应A\\n\\n每个部分用//划分\\n//后的段落主题，\\n直接指示段落中现象、细节\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n第 21 页\\n\\n考试阅读示范：\\n范文：2024高考全国一卷\\n英语真题\\n1）划分\\n2）定位\\n3）解题\\n\\n💡\\n【如何定位】\\n\\n这道题：段落理解\\n定位到最后一段，直接看//后自己总结内容，多观点总结，对应C\\n\\n每个部分用//划分\\n//后的段落主题，\\n\\n在做题时会直接作为提示！！做题速度自然提升\\n\\n\\n\\n\\n\\n\\n\\n第 22 页\\n\\n考试阅读示范：\\n范文：2024高考全国一卷\\n英语真题\\n1）划分\\n2）定位\\n3）解题\\n\\n💡\\n【如何解题】\\n\\n1）细节理解\\n2）段落理解\\n3）词义猜测\\n\\n*无非就是三种题目\\n\\n直接用\\n「划分」+「定位」\\n所有题目都可以直接找到相应位置，节约时间\\n+\\n//后的总结帮助理解\\n\\n\\n\\n\\n\\n\\n\\n第 23 页\\n\\n考试阅读示范：\\n范文：2024高考全国一卷\\n英语真题\\n\\n做完+订正后干什么？\\n💡\\n【用好一篇阅读】\\n\\n1）查出生词\\n2）理解长难句\\n3）整理错题\\n\\n*精=用好每一篇文本！\\n\\n「积累生词」+\\n「分析长难句」\\n\\n直接帮助我们增加词汇量、积累语法\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n第 24 页\\nChapter-4\\n \\n完形填空\\n\\n第 25 页\\n\\n完形填空：\\n注意易错类型「排除+选最优解」\\n原则1-4:\\n先看一遍文章，划分+总结大意\\n用阅读方法：{纵向划分+//后总结大意}\\n选出适合选项，「瞻前顾后」\\n上文、下文「瞻前顾后」：{上下文语义、对象、搭配}\\n\\n学会「排除」\\n排除：对象/搭配/语义\\n大胆排除！\\n解决掉80%的题目\\n拿不准的选项，选最优解\\n#最容易失分的部分！往往有2个选项都比较适合，但是一定有一个最优！\\n秘诀：情感态度/搭配「最适合」的项\\n\\n\\n第 26 页\\n\\n考试完形填空示范：\\n范文：2024高考全国一卷\\n英语真题\\n1）通读\\n2）排除\\n3）选择最优解\\n\\n💡\\n【如何通读】\\n\\n通读文章，只读一遍：这一遍要用学姐在阅读中的「划分」方法直接套用\\n\\n{纵向：总分总结构\\n+\\n//后总结内容}\\n\\n\\n首段：主题「人+事」\\n后续：描述过程\\n\\n\\n第 27 页\\n\\n考试完形填空示范：\\n范文：2024高考全国一卷\\n英语真题\\n1）通读\\n2）排除\\n3）选择最优解\\n\\n💡\\n【开始做题】\\n\\n养成一个好习惯！\\n\\n\\n*确定了选项之后把单词「填入文中」\\n\\n\\n\\n再读一遍看是否通顺+与上下文是否匹配\\n\\n第 28 页\\n\\n考试完形填空示范：\\n范文：2024高考全国一卷\\n英语真题\\n1）通读\\n2）排除\\n3）选择最优解\\n\\n💡\\n【如何排除】\\n\\n这一步完成80%的题目！\\n\\n*不正确的选项：\\n\\n\\n搭配x\\n语义x\\n事实/对象x\\n\\n\\n\\n\\n\\n\\n第 29 页\\n\\n考试完形填空示范：\\n范文：2024高考全国一卷\\n英语真题\\n1）通读\\n2）排除\\n3）选择最优解\\n\\n💡\\n【如何解决纠结选项】\\n\\n20%让人纠结、最容易选错的题目！\\n\\n*牢记：选择最优解\\n\\n重点——即：\\n\\n\\n{情感态度}最优\\n+\\n{搭配}最优\\n\\n\\n【搭配最优】纠结「way 跑步的方式」还是「reason 跑步的原因」呢？\\n46.根据上下文，这句话在「段」尾进行总结与解释 + 后半「句」if一种设想的情况，reason「表达：解释原因」更加合适\\n\\n\\n第 30 页\\n\\n考试完形填空示范：\\n范文：2024高考全国一卷\\n英语真题\\n1）通读\\n2）排除\\n3）选择最优解\\n\\n💡\\n【如何解决纠结选项】\\n\\n20%让人纠结、最容易选错的题目！\\n\\n*牢记：选择最优解\\n\\n重点——即：\\n\\n\\n{情感态度}最优\\n+\\n{搭配}最优\\n\\n【情感态度最优】纠结「such events 这样的事情」还是「such challenges 这样的挑战」呢？\\n51. 这个词在「概括」“我”骑车的不顺利经历 ，events「表达：较为中性的态度」，challenges「表达：遇到挑战-不顺利-感到困难」——具有情感色彩、作者态度，所以更加合适\\n\\n\\n\\n第 31 页\\n\\n\\n完形填空：\\n总结如何快速+准确做题\\n原则1-4:\\n先看一遍文章，划分+总结大意\\n选出适合选项，「瞻前顾后」——填入选项\\n学会「排除」\\n拿不准的选项，选最优解\\n\\n\\n\\n上文、下文「瞻前顾后」：{上下文语义、对象、搭配}\\n\\n排除：对象/搭配/语义\\n大胆排除！\\n解决掉80%的题目\\n#最容易失分的部分！往往有2个选项都比较适合，但是一定有一个最优！\\n秘诀：情感态度/搭配「最适合」的项\\n\\n排除+最优解方法:\\n\\n第 32 页\\nChapter-5\\n \\n七选五\\n\\n第 33 页\\n\\n七选五：\\n💡\\nStep1.首段看主题\\n读首段，抓全文关键词「谁+什么事」\\n全文主题一定据此展开！！！\\nStep2.看文章，划分过程\\n按照「阅读」中的划分方法\\n//后概括每部分大意\\nStep3.联系选项与文章=解题\\n找填空位置：段首/段中/段尾\\n题目无非四种：\\n1）段落转换-对应段首/段尾；2）同义对应/ 3）对比转折/ 4）解释原因-对应段中\\n\\n【强调！】\\n\\n一定要先阅读全文 「不要零散看选项」——把握文章「划分」，和文中「逻辑词」是上分秘诀！！\\n\\n第 34 页\\n\\n考试完形填空示范：\\n范文：2024高考全国一卷\\n英语真题\\n1）首段看主题\\n2）全文划分\\n3）联系选项与文章\\n💡\\n【首段】\\n\\n人+事+怎么了\\n\\n*theme：\\n作家-写作-拼写文字问题\\n\\n重点——即：\\n\\n\\n{全文围绕主题}\\n\\n\\n第 35 页\\n\\n考试完形填空示范：\\n范文：2024高考全国一卷\\n英语真题\\n1）首段看主题\\n2）全文划分\\n3）联系选项与文章\\n💡\\n【全文划分】\\n\\n按照阅读中的划分方法\\n//后总结段落意思\\n\\n*全文结构：\\n提出主题——1\\n词典的作用1——2\\n词点的作用2——3\\n举例论证——4&5\\n\\n\\n{结构清晰+内容概括}\\n\\n\\n\\n\\n\\n第 36 页\\n\\n考试完形填空示范：\\n范文：2024高考全国一卷\\n英语真题\\n1）首段看主题\\n2）全文划分\\n3）联系选项与文章\\n💡\\n【联系】\\n\\n先看段首/段尾\\n\\n\\n①段落转换\\n1）上一段+这一段讲了什么\\n2）有「段落转换」的选项\\n\\n{E: but-逻辑转折 + not only…内容联系上一段}\\n\\n\\n\\n第 37 页\\n\\n考试完形填空示范：\\n范文：2024高考全国一卷\\n英语真题\\n1）首段看主题\\n2）全文划分\\n3）联系选项与文章\\n💡\\n【联系】\\n\\n再看段中\\n\\n\\n*36.在段中：\\n②同义对应\\n\\n往往有\\nWhich means, that means, in other words, it equals to…\\n等等提示词！\\n\\n\\n\\n第 38 页\\n\\n考试完形填空示范：\\n范文：2024高考全国一卷\\n英语真题\\n1）首段看主题\\n2）全文划分\\n3）联系选项与文章\\n💡\\n【联系】\\n\\n再看段中\\n\\n*37.在段中：\\n\\n③解释原因\\n{前文有现象/态度+\\n后文有解释}\\n\\n往往有\\nBecause， why， the reason for…\\n等等提示词！\\n\\n\\n①、②、③、④、⑤、⑥、⑦、⑧、⑨、⑩、⑪、⑫、⑬、⑭、⑮、⑯、⑰、⑱、⑲、⑳\\n\\n第 39 页\\n\\n考试完形填空示范：\\n范文：2024高考全国一卷\\n英语真题\\n1）首段看主题\\n2）全文划分\\n3）联系选项与文章\\n💡\\n【联系】\\n\\n再看段中\\n\\n*40.在段中：\\n\\n④对比转折\\n{前文有情感态度+\\n后文有另一个情感态度}\\n\\n往往有\\nBut， however， nevertheless, in contrast…\\n等等提示词！\\n\\n\\n\\n第 40 页\\nChapter-6\\n \\n听力\\n\\n第 41 页\\n\\n为什么听力容易出错？\\n1）不会听\\n在「听」里，我们把发音/文本对应起来：\\n\\n记住：「学会精听」，先听2-3遍音频，再打开文本，一字一句对照听！\\n直到每个单词都听清\\n2）不会记\\n在「记」里，我们学会速记：\\n\\n为什么要速记：一句很长的话，信息点只有几个！\\n学会速记方法——不遗漏要点+节省时间\\n\\n第 42 页\\n究竟要听什么？\\n信息需要充分判断和取舍\\n核心方法就睡——【抓关键词】\\n\\n关键词：主谓宾结构\\n\\n💡\\n【2024全国高考一卷】text 8\\n\\n{These days you can see traffic jams around schools at drop-off and pick-up times. But it’s hard to blame the parents. They have good reasons for driving their kids to school, mostly to do with safety and convenience.}\\n\\n提炼主干，缩减到不能再缩减\\n（不改变原义，不考虑语法结构）\\n\\n｜｜这句话缩减速记：\\n\\ntraffic jams （上+放学时） x to blame parents \\nBec. ( safety and convenience)\\n\\n第 43 页\\n\\n和学姐学会速记方法：\\n注意不同词速记方法不同\\n速记举例:\\n符号\\n箭头 表示：导致、结果原因等/ ( )表示：原因、解释、修饰…\\n缩写（逻辑词）\\nBec. =because / ∴=so / B.= but/ 1st =first, 2nd=second, 3rd=third,…\\n首字母（名词）\\nSch=school / info=information / uni = university\\nM=man / W=woman\\n \\n重点音节\\nCps=campus / ASAP= as soon as possible\\n中文\\n山=mountain / 火= fire / 童=children\\n\\n第 44 页\\nChapter-7\\n \\n语法\\n\\n第 45 页\\n\\n\\n\\n\\n\\n\\n怎么练语法？——例子！例子！例子！\\n\\n第 46 页\\n\\n怎么练语法？——例子！例子！例子！\\n1）从英语课文里学习\\n很多人说——要系统的学习语法？\\n\\n*学姐经验：把每篇课文都能够背诵，课文中的语法自然能够通过内容被记住！\\ne.g.对话中，A向B描述ta已经做完的事——用{现在完成时}而不是{一般过去时}\\n2）从考试错题里面学习\\n在「考试错题」里，应该怎么高效利用：\\n\\n*学姐经验：把每一篇考试「阅读」、「完形」、「短文改错」、「七选五」里面的\\n长难句——有较多从句/修饰/逻辑连词的句子进行{划分+理解}\\n\\n第 47 页\\n怎么用好考试错题？\\n无论这篇文章有没有出错\\n核心方法——【 「阅读」、「完形」、「短文改错」、「七选五」 】文本\\n\\n全部过一遍——理解长难句\\n\\n💡\\n【2024全国高考一卷】text 8\\n{These days you can see traffic jams around schools at drop-off and pick-up times. But it’s hard to blame the parents. They have good reasons for driving their kids to school, mostly to do with safety and convenience.}\\n\\n长难句怎么理解？\\n找出主谓宾\\n判断句式\\n框出所有从句\\n\\n｜｜长难句划分后：\\n\\ntraffic jams （上+放学时） x to blame parents \\nBec. ( safety and convenience)\\n\\n第 48 页\\n\\n怎么生活中学习语法？\\n多听英文歌\\n核心方法——【 「听歌曲」、「看歌词」、「想象画面」、「理解语法」 】\\n\\n多遍重复——歌词中的语法&时态，理解才能记住！\\n\\n💡\\n/Love story/\\n【一般过去时——描述过去的画面】\\nWe were both young when I first saw you\\n\\n【过去的画面开启】\\n【一般现在时——描述现在的心情】\\nI close my eyes and the flashback starts\\n【一般进行时——描述当时的场景】\\nI'm standing there on a balcony in summer air\\nSee the lights see the party the ball gowns\\nSee you make your way through the crow\\nAnd say hello\\n倒装句\\nLittle did I know\\n【一般过去时——描述过去的画面】\\nThat you were Romeo \\n【过去进行时——过去的男孩正在做什么】\\nyou were throwing pebbles\\nAnd my daddy said\\n祈使句\\nStay away from Juliet\\n【过去进行时——过去的我正在做什么】\\nAnd I was crying on the staircase\\nBegging you please don't go\\nAnd I said\\n祈使句\\nRomeo take me somewhere we can be alone\\n【将来进行时——对未来爱情的想象】\\nI'll be waiting all there's left to do is run\\nYou'll be the prince and I'll be the princess\\nIt's a love story baby just say yes\\n学姐建议加入歌单【循环播放的歌曲】\\nYesterday once more – 一般过去时\\n\\nLemon tree – 现在进行时\\n\\nMonsters – 一般将来时\\n\\nLove story – 过去进行时\\n\\nCounting stars – 现在完成时\\n\\n和小伙伴一起听起来！\\n\\n第 49 页\\nChapter-8\\n \\n口语怎么说好？\\n\\n第 50 页\\n\\n{口语}\\n不同情况可以提高口语：\\n无交流对象——【「跟读课文」、「看无字幕美剧」、「听英文新闻」】\\n有交流对象——【 「英语角」、「英文歌」】\\n\\n输出的本质 = 足够的输入 + 足量的模仿！\\n我们要怎么做：\\n1.用好自己的课本\\n\\n#学姐亲身经历：\\n初中时，每篇课文听【7】遍以上\\n做到全文背诵+默写\\n跟读，模仿语调、抑扬顿挫、停顿\\n带语音语调去自己说一遍\\n*利用上学/放学/午饭后30min，碎片化时间重复\\n💡\\n\\n第 51 页\\n\\n{口语}\\n不同情况可以提高口语：\\n无交流对象——【「跟读课文」、「看无字幕美剧」、「听英文新闻」】\\n有交流对象——【 「听歌曲」、「看歌词」、「想象画面」、「理解语法」 】\\n\\n输出的本质 = 足够的输入 + 足量的模仿！\\n我们要怎么做：\\n2.用好「美剧、新闻」等输入材料\\n\\n#学姐建议：\\n无字幕看美剧 + 听英文新闻\\n模仿发音和语调：模仿演员或主播的发音、语调和节奏——提升【口音和流利度】\\n扩展词汇和表达：【不同情境】下表达\\n提高反应速度：快速反应剧情或新闻内容，【锻炼思维速度 + 口语表达的自信】\\n*做到不看字幕就能理解剧情/新闻！\\n\\n💡\\n\\n第 52 页\\n看哪些？\\n学姐推荐\\n5部美剧 + 5个网站\\n不依赖字幕，磨耳朵！！！\\n\\n💡\\n10美剧/动画推荐：\\nFriends - 语言自然且充满日常对话\\n\\nThe Simpsons - 幽默风趣，俚语和日常对话\\n\\nStranger Things - 紧张刺激，贴近青少年生活\\n\\nThe Big Bang Theory - 丰富的学术和幽默词汇\\n\\nSherlock - 英式侦探剧，虽语言偏难，但能够提升推理能力和语言组织能力\\n\\n和小伙伴一起看起来！\\n\\n💡\\n5个英文新闻网站：\\nBBC News - 提供全球新闻，语言标准\\n\\nCNN - 全球新闻为主，提升词汇和时事了解\\n\\nThe New York Times - 深度报道，进阶学习：复杂句式\\n\\nReuters - 简洁直接的报道见长，适合初学\\n\\nThe Guardian - 国际新闻，语言多样：提高写作和表达\\n\\n\\n在家和爸爸妈妈一起听起来！\\n\\n第 53 页\\n\\n{口语}\\n不同情况可以提高口语：\\n无交流对象——【「跟读课文」、「看无字幕美剧」、「听英文新闻」】\\n有交流对象——【 「英语角」、「英文歌」】\\n\\n交流 = 输入 + 输出的实践！\\n我们要怎么做：\\n多讲！多讲！多讲！\\n\\n#学姐亲身经历：\\n初中{每周3小时}和小伙伴学一首新的英文歌\\n备考托福时{每周2小时}参加全英讨论，每周看一部英文电影，讨论「情节、手法、感受」\\n在交流时：\\n大胆讲！开口已经达到了80%的进步！\\n用输出刺激输入，每次逼自己用一个「新」的表达来表达同一意思\\n\\n*在讨论的时候，保证自己每次都有「3次」以上的发言！！！\\n💡\\n\\n第 54 页\\nChapter-9\\n \\n作文\\n\\n第 55 页\\n\\n独立写作-{写作纲领}\\n哪些体裁——{重视要点}：\\n信件/邮件 —— 对人【道歉、感谢、建议】\\n信件/邮件 —— 对事【申请、投诉、推荐】\\n议论——【倡议书、报道、正反观点对比】\\n介绍——【传统节日/地点/人物】\\n怎么写：\\n\\n#正确的体裁：\\n格式！\\n【文体】【人称】【时态】\\n\\n观点+理由\\n* 布局\\n模仿范文！\\n💡\\n\\n第 56 页\\n\\n独立写作-{写作纲领}\\n用好范文——\\n\\n好作文 = 清晰的骨架 + 丰富的血肉 ！\\n高分的基础：\\n\\n#字数和书写：\\n字数要达到要求！\\n【独立写作不少于100字】【续写不少于180字】\\n\\n\\n💡\\n每天练字\\n* 学姐在高中时\\n每天抄写2篇范文\\n【积累句式】【高级表达】+【练习书写！！！】\\n坚持！坚持！作文需要积累，量变才能质变\\n\\n第 57 页\\n\\n独立写作-{写作纲领}\\n学会英语的万能展开大法——{总分总+并列展开}：\\n总分总——【「开头」、「中间段首句」、「结尾」】\\n并列展开——【 用好「逻辑词」、「高级句式」】\\n\\n好作文 = 清晰的骨架 + 丰富的血肉 ！\\n💡\\n范文怎么用？\\n红笔勾出优秀表达\\n黑笔抄写全文，练习书写\\n\\n第 58 页\\n\\n{万能展开大法}\\n学会英语的万能展开大法——{总分总+并列展开}：\\n总分总——【「开头」、「中间段首句」、「结尾」】\\n并列展开——【 用好「逻辑词」、「高级句式」】\\n\\n高分的结构：\\n\\n#总分总【三部分】：\\n提出要解决的问题或观点/时间、地点、人物、事件\\n摆出事实或论据/事情发展的经过\\n得出结论或阐述理由/抒发态度/展望未来\\n\\n首段、尾段必用高级表达！\\n第二部分【不要漏要点】+【尽量多用高级句式】！\\n💡\\n\\n第 59 页\\n\\n\\n#总分总【三部分】：\\n提出要解决的问题或观点/时间、地点、人物、事件\\n摆出事实或论据/事情发展的经过\\n得出结论或阐述理由/抒发态度/展望未来\\n\\n首段、尾段必用高级表达！\\n第二部分【不要漏要点】+【尽量多用高级句式】！\\n💡\\n2024高考全国一/二卷      英语作文真题\\n#【主题】分享经历；【要点】1.作品 2.感想\\n3.展望未来\\n1.提出话题\\n2.发展经过\\n\\n第 60 页\\n\\n{万能展开大法}\\n学会英语的万能展开大法——{总分总+并列展开}：\\n总分总——【「开头」、「中间段首句」、「结尾」】\\n并列展开——【 用好「逻辑词」、「高级句式」】\\n\\n高分的[并列展开]如何进行：【并列展开】——即把两个/三个独立的【要素】或【句子】连接在一起！\\n怎么连？——靠{逻辑}+{句式}\\n\\n#【逻辑词】：\\n1.多用时间逻辑/因果逻辑/对比逻辑\\ne.g. 时间: Firstly/Besides/ In addition/ What’s more/ Moreover\\n因果: because/ the reason why/ since/ as/ \\n对比: however/ nevertheless/ nonetheless/ in contrast/ on the contrary/ instead\\n\\n#【高级句式】：\\n2. 把一般句【组合/换顺序/变从句】换成高级句\\ne.g. A句 and B句 not only, but also… / with A句信息（变从句），B句\\n\\n💡\\n\\n第 61 页\\n\\n\\n#【中间段】怎么展开？：\\n\\n①三个要素并列【状态、动作、对象】\\n②用大量【非谓语动词/介词】引导的解释部分\\n\\n\\n万能展开！！！\\n💡\\n2024高考全国一/二卷      英语作文真题\\n#【展开的重点】：描述发展经过的{中间段}!!!\\n2.发展经过\\n\\n①、②、③、④、⑤、⑥、⑦、⑧、⑨、⑩、⑪、⑫、⑬、⑭、⑮、⑯、⑰、⑱、⑲、⑳\\n①\\n②\\n③\\n\\n第 62 页\\n\\n读后续写-{写作纲领}\\n重视要点：\\n情绪\\n动作\\n场景\\n怎么写：\\n\\n#四步写：\\n三读\\n【原文最后段】【续写句1】【续写句2】\\n找3要素：\\n【人物、事件、情绪】\\n💡\\n【人物】我和Gunter\\n【事件】求助\\n【情绪】着急\\n\\n【人物】我和Gunter\\n【事件】应约返回\\n【情绪】感激\\n\\n第 63 页\\n\\n读后续写-{写作纲领}\\n怎么写：\\n\\n#四步写：\\n三读\\n【原文最后段】【续写句1】【续写句2】\\n找3要素：\\n【人物、事件、情绪】\\n*标记线索+关键句！！！\\n动作线+情绪线+场景线\\n丰富内容\\n高级表达【动词、情绪词、句式】升华=高分！\\n💡\\n【动作线】求助-帮助-解决\\n【情绪线】着急-感激-感动\\n【场景线】车站-上车-远去\\n\\n变换场景【介词短语】+连续动作【动词】\\n+用从句/插入语【情绪】融合在一句话\\n=\\n丰富的高分表达！\\n\\n\\n第 64 页\\nChapter-10\\n \\n错题本\\n\\n第 65 页\\n英语错题本怎么做？\\n两个方面分别积累\\n\\n①按照题型\\n②按照语法、短语、单词、作文——【分板块积累】\\n\\n\\n\\n💡\\n【学姐英语错题本】详见附赠笔记\\n\\n{一共十一个方面}\\n\\n*把错题✂️剪下来，黑笔写：解题步骤，红笔写：错因+知识点\\n\\n\\n\\n\\n｜｜订正一张卷子/一个练习：\\n\\n及时总结！绝不把今天的错题拖到明天！！！\\nPart 1\\nPart 2\\n\\n第 66 页\\nPart1: 英语错题题型——怎么做？\\n\\n黑笔写题\\n红笔总结\\n\\n💡\\n写出错误原因\\n\\n\\n①保留相关文段\\n②对比正确、错误选项\\n③红笔订正，尽量简略\\n\\n\\n\\n用小三角高亮自己的易错点！\\n使用活页本\\n\\n第 67 页\\nPart2: 按照板块积累——怎么做？\\n\\ne.g.积累生词/短语\\n\\n💡\\n当在考试中遇到【词义猜测】【文段生词】\\n不要放过——「精」查词典！\\n\\n①写出词性\\n\\n②写出【英文】释义\\n*英文释义——是这个词最准确的意思！\\n\\n③给自己写一个例句\\n\\n\\n考试重点总结——重在精字！\\n{每次考试都是宝贵的积累机会，每天积累一篇阅读里的\\n生词，都是在为最后的考试做准备}\\n使用活页本\\n\\n\\n\\n\\n第 68 页\\nChapter-11\\n \\n总结\\n\\n第 69 页\\n\\n【优优学姐个人介绍】——高考裸分689/英语146\\n英语的分数是「捡」来的，每一分都要重视\\n高考英语146\\n💡\\n优优 清华学姐/清华本硕 /高考四川省前50\\n英语146 数学142 物理满分\\n\\n\\n可以看出：（英语的语言性+工具性）是我们学习的重点，需要注意英语学什么+考什么\\n想像优优学姐一样拥有好成绩——\\n\\n①、②、③、④、⑤、⑥、⑦、⑧、⑨、⑩、⑪、⑫、⑬、⑭、⑮、⑯、⑰、⑱、⑲、⑳\\n优优 清华学姐高考成绩查询页面\\n希望你也能收到这样的喜讯！\\n「抓住学习方法+备考方法」才能百战百胜！","chunk_count":69,"analyzed":false,"imported_file":true,"sections":[{"locator":"第 1 页","text":"\\n课程内容介绍Introduction\\n【努力也是一种天赋】\\n高考还远没有到拼天赋的程度，只有足够努力，才能不给自己找借口\\n1.优优学姐个人介绍\\n💡\\n高考裸分689——{分数与分数背后的故事}\\n英语分数——{146}\\n3.阅读\\n提高阅读速度——{小说/阅读做题}\\n3只笔——{学会学姐阅读英文文章的笔记方法}\\n2.背单词\\n方法——{谐音记忆/联想记忆/关联记忆/读音}\\n拼读背诵——{会拼就会背}\\n周期——{3+7+21}\\n提高英语背诵能力的方法——{1+1+1}"},{"locator":"第 2 页","text":"\\n课程内容介绍Introduction\\n【努力也是一种天赋】\\n高考还远没有到拼天赋的程度，只有足够努力，才能不给自己找借口\\n4.完形填空\\n💡\\n填哪些——{挖坑类型}\\n怎么练——{方法/实战/总结}\\n例题\\n5.七选五\\n怎么选——{逻辑结构/关键词}\\n排除方法+选最优解\\n例题\\n6. 听力\\n方法——{学会精听+速记}\\n精听+速记——{用好音频与原文/速记方法学习}"},{"locator":"第 3 页","text":"\\n课程内容介绍Introduction\\n【努力也是一种天赋】\\n高考还远没有到拼天赋的程度，只有足够努力，才能不给自己找借口\\n7.语法\\n💡\\n语法结构——{时态/学习语法方法/划分长难句}\\n一首歌学会英文时态——{Love story}\\n8.口语\\n如何提高英语口语——{跟读/美剧}\\n实战中提高口语能力——{英文歌/英语角}\\n9.作文\\n学会英语的万能展开大法——{总分总+万能展开}\\n针对续写——{思路/实践}\\n10.错题本\\n手把手教你整理错题——{题型怎么做？}\\n按板块梳理——{怎么针对自己的问题总结}"},{"locator":"第 4 页","text":"Chapter-1\\n \\n优优学姐个人介绍"},{"locator":"第 5 页","text":"\\n【优优学姐个人介绍】——高考裸分689/英语146\\n英语的分数是「捡」来的，每一分都要重视\\n高考英语146\\n💡\\n优优 清华学姐/清华本硕 /高考四川省前50\\n英语146 数学142 物理满分\\n\\n\\n\\n\\n① 英语要掌握什么\\n可以看出：（英语的语言性+工具性）是我们学习的重点，需要注意英语学什么+考什么\\n想像优优学姐一样拥有好成绩——「抓住学习方法+备考方法」才能百战百胜\\n② 英语怎么学\\n注重词汇积累\\n强化听力训练\\n阅读理解提升\\n写作技能培养\\n语法知识掌握\\n\\n\\n+\\n\\n高效记忆法应用\\n提高口语表达\\n多元化学习资源\\n①、②、③、④、⑤、⑥、⑦、⑧、⑨、⑩、⑪、⑫、⑬、⑭、⑮、⑯、⑰、⑱、⑲、⑳\\n优优 清华学姐高考成绩查询页面\\n希望你也能收到这样的喜讯！"},{"locator":"第 6 页","text":"Chapter-2\\n \\n背单词"},{"locator":"第 7 页","text":"\\n1+1+1的背诵方法：{人们对于自己表达的东西记忆最深}\\n「自己先背一遍」+「录音」\\n「睡前」听一遍录音\\n「第二天起床后」再背一遍\\n\\n\\n背什么？\\n💡\\n单词要背哪些？4个方法\\n\\n① 初中——中考考纲1600词\\n记忆方法：\\n按照「话题」速记\\n\\n②高中——高考考纲3500词\\n记忆方法：\\n按照「乱序」+「少量多次」重复记忆\\n\\n*每天20个，坚持一个月>一天50个，不坚持"},{"locator":"第 8 页","text":"\\n可以看到；「谐音记忆」+「联想记忆」就是我们经常用的方法，是中文谐音+英文引申义的结合，很多单词在记忆时都可以采用这样的方法\\n\\n是一种非常高效形象的记忆方法\\n\\n背单词的方法\\n💡\\n单词要怎么背？4个方法\\n\\n① 谐音记忆\\nTedious 冗长的、啰嗦的、单调乏味的 [踢地而死]\\nEndow 捐赠、资助 [银到]\\nDisgruntle 使不满 [diss光头]\\n\\n②联想记忆 \\nHideous 丑恶的、可怕的 [hide+ous 躲藏+多-因为令人讨厌而躲藏]\\nCasualty 事故、急诊室、伤亡 [因为太casual随意-造成了（事故）-（伤亡）很多，送到了（急诊室）]"},{"locator":"第 9 页","text":"\\n可以看到；「关联记忆」可以让我们从一个词扩充到相关的许多词，「读音记忆」可以让我们准确又快速记住，是读音+拼写的结合，可以说——会读就会背，而且不会拼错\\n\\n怎么快速拼读？\\n背单词的方法\\n💡\\n如果不好谐音/联想怎么办？ 千万不要死记硬背\\n\\n③关联记忆\\nPlodding 沉重的 [plod v.n. 辛勤工作/沉重步伐；沉重地走/辛勤地工作]\\n* +谐音记忆：Plod 辛勤工作、沉重地走 [破锣的]\\n\\n\\n④读音记忆 \\n按照读音分节背，会读就会背：Too th some/de li cate"},{"locator":"第 10 页","text":"\\n快速拼读\\n遇到新单词不知道怎么读？\\n\\n在这一部分里，我们需要总结单词的相似/相同音节：\\n\\n记住：「会读就会背」，不用死记硬背音标——从自己的积累中去总结相同的发音\\nx…e就读x(字母的发音) ：Ride fade pipe delicate\\n{请你跟读}\\n\\n\\nck就读k： pack back clock\\n{请你跟读}\\n\\n\\ntion/sion就读[ʃ(e)n]：situation examination creation passion mission constitution\\n{请你跟读}\\n  "},{"locator":"第 11 页","text":"Chapter-3\\n \\n阅读"},{"locator":"第 12 页","text":"\\n\\n【阅读分为两部分】：平时阅读+考试阅读\\nPart1. 平时阅读：\\n「特点」时间多但时间碎、阅读多但杂\\n\\n\\n「策略」重在“广”\\nPart2. 考试阅读：\\n「特点」时间少但时间集中、阅读目的——为了做题\\n\\n\\n「策略」重在“精”\\nPart1. 平时阅读\\nPart2. 考试阅读\\n\\n💡\\n💡"},{"locator":"第 13 页","text":"1.平时阅读：\\n\\n读什么？\\n课内文章\\n英文原著小说\\n\\n课内怎么读？\\n课内文章：课后单词/背诵全文/跟读磁带\\ne.g. 学姐的亲身经历：初中时，每个单元课文1短对话+1长文章：全文背诵「理解所有生词表单词在文中的意思」+「被动式学习语法，因为背诵的课文中本身包含了很多语法结构、时态」+「跟读每篇课文7遍以上，做到语言流畅、和范文抑扬顿挫一致」\\n课内文章三个目的：生词/语法/口语——通过背诵形成肌肉记忆\\n\\n课外怎么读？\\n选一本「自己喜欢」的英文小说\\n每周读10-15页，「查单词」+「理解情节」\\n课外小说两个目的：养成查单词的好习惯/养成阅读习惯\\n"},{"locator":"第 14 页","text":"1.平时阅读：\\n\\n学姐推荐的十本英文小说\\n\\nThe Great Gatsby – 《了不起的盖茨比》 (F. Scott Fitzgerald)\\nTo Kill a Mockingbird – 《杀死一只知更鸟》 (Harper Lee)\\nGone with the Wind – 《飘》 (Margaret Mitchell)\\nA Game of Thrones – 《冰与火之歌》 (George R.R. Martin)\\nThe Chronicles of Narnia – 《纳尼亚传奇》 (C.S. Lewis)\\n1984 – 《一九八四》 (George Orwell)\\nBrave New World – 《美丽新世界》 (Aldous Huxley)\\nThe Catcher in the Rye – 《麦田里的守望者》 (J.D. Salinger)\\nLord of the Flies – 《蝇王》 (William Golding)\\nFrankenstein – 《弗兰肯斯坦》 (Mary Shelley)\\n\\n这些原著小说都具有深刻的思想性和文学价值，适合初、高中生和小学生进行阅读和思考。\\n"},{"locator":"第 15 页","text":"\\n2.考试阅读：\\n💡\\nStep1.通读全文，划分内容 [一划分]\\n拿到文章，把文章通读一遍，重在「精」\\n按照学姐的「一纵几点」的方法，划分文章为几部分\\n每个段落用{//}划出，在其后总结大意，并在原文「标出」相应中心句\\nStep2.定位原文 [二定位]\\n拿到题目，迅速定位原文位置\\n无非三种题目：词义猜测/段落理解/细节理解\\nStep3.找上下文+段落逻辑=解题\\n先回顾自己「//」后的段落总结\\n寻找上下句/上下段，判断逻辑+语义，选出准确选项\\n\\n【强调！】\\n\\n一定要牢记 「不要一味追求阅读速度」——先学会「精」读一篇，再逐渐增加速度"},{"locator":"第 16 页","text":"\\n考试阅读示范：\\n范文：2024高考全国一卷\\n英语真题\\n1）划分\\n2）定位\\n3）解题\\n\\n💡\\n【如何划分】\\n\\n一篇文章往往可以划分为：\\n\\n「头」\\n「脖子」\\n「身体」\\n「尾」\\n\\n每个部分用//划分\\n在左边列出纵向结构\\n"},{"locator":"第 17 页","text":"\\n考试阅读示范：\\n范文：2024高考全国一卷\\n英语真题\\n1）划分\\n2）定位\\n3）解题\\n\\n💡\\n【如何划分】\\n\\n一篇文章往往可以划分为：\\n\\n「头」\\n「脖子」\\n「身体」\\n「尾」\\n\\n每个部分用//划分\\n在文中//后写出段落主题，在文中用（）划出主题定位在哪里\\n\\n\\n\\n\\n\\n"},{"locator":"第 18 页","text":"\\n考试阅读示范：\\n范文：2024高考英语全国一卷\\n真题\\n1）划分\\n2）定位\\n3）解题\\n\\n💡\\n【如何定位】\\n\\n这道题：词义猜测\\n定位到文中，寻找上下文，「print」材料更好用来学习-因为更容易看，对应D\\n\\n每个部分用//划分\\n//后的段落主题，\\n\\n在做题时会直接作为提示！！做题速度自然提升\\n\\n\\n\\n\\n\\n"},{"locator":"第 19 页","text":"\\n考试阅读示范：\\n范文：2024高考全国一卷\\n英语真题\\n1）划分\\n2）定位\\n3）解题\\n\\n💡\\n【如何定位】\\n\\n这道题：段落理解\\n定位到文中，有这一内容的位置-shallowing hypothesis \\n找上下文，后文解释：less mental effort\\n对应A\\n\\n每个部分用//划分\\n//后的段落主题，与问的段落内容直接相关\\n\\n\\n\\n\\n\\n"},{"locator":"第 20 页","text":"\\n考试阅读示范：\\n范文：2024高考全国一卷\\n英语真题\\n1）划分\\n2）定位\\n3）解题\\n\\n💡\\n【如何定位】\\n\\n这道题：细节理解\\n定位到文中「尾」提出新现象段，寻找上下文，这一细节「用新技术教学为什么」因为上文「feel more engaging」，对应A\\n\\n每个部分用//划分\\n//后的段落主题，\\n直接指示段落中现象、细节\\n\\n\\n\\n\\n\\n\\n\\n"},{"locator":"第 21 页","text":"\\n考试阅读示范：\\n范文：2024高考全国一卷\\n英语真题\\n1）划分\\n2）定位\\n3）解题\\n\\n💡\\n【如何定位】\\n\\n这道题：段落理解\\n定位到最后一段，直接看//后自己总结内容，多观点总结，对应C\\n\\n每个部分用//划分\\n//后的段落主题，\\n\\n在做题时会直接作为提示！！做题速度自然提升\\n\\n\\n\\n\\n\\n"},{"locator":"第 22 页","text":"\\n考试阅读示范：\\n范文：2024高考全国一卷\\n英语真题\\n1）划分\\n2）定位\\n3）解题\\n\\n💡\\n【如何解题】\\n\\n1）细节理解\\n2）段落理解\\n3）词义猜测\\n\\n*无非就是三种题目\\n\\n直接用\\n「划分」+「定位」\\n所有题目都可以直接找到相应位置，节约时间\\n+\\n//后的总结帮助理解\\n\\n\\n\\n\\n\\n"},{"locator":"第 23 页","text":"\\n考试阅读示范：\\n范文：2024高考全国一卷\\n英语真题\\n\\n做完+订正后干什么？\\n💡\\n【用好一篇阅读】\\n\\n1）查出生词\\n2）理解长难句\\n3）整理错题\\n\\n*精=用好每一篇文本！\\n\\n「积累生词」+\\n「分析长难句」\\n\\n直接帮助我们增加词汇量、积累语法\\n\\n\\n\\n\\n\\n\\n\\n\\n"},{"locator":"第 24 页","text":"Chapter-4\\n \\n完形填空"},{"locator":"第 25 页","text":"\\n完形填空：\\n注意易错类型「排除+选最优解」\\n原则1-4:\\n先看一遍文章，划分+总结大意\\n用阅读方法：{纵向划分+//后总结大意}\\n选出适合选项，「瞻前顾后」\\n上文、下文「瞻前顾后」：{上下文语义、对象、搭配}\\n\\n学会「排除」\\n排除：对象/搭配/语义\\n大胆排除！\\n解决掉80%的题目\\n拿不准的选项，选最优解\\n#最容易失分的部分！往往有2个选项都比较适合，但是一定有一个最优！\\n秘诀：情感态度/搭配「最适合」的项\\n"},{"locator":"第 26 页","text":"\\n考试完形填空示范：\\n范文：2024高考全国一卷\\n英语真题\\n1）通读\\n2）排除\\n3）选择最优解\\n\\n💡\\n【如何通读】\\n\\n通读文章，只读一遍：这一遍要用学姐在阅读中的「划分」方法直接套用\\n\\n{纵向：总分总结构\\n+\\n//后总结内容}\\n\\n\\n首段：主题「人+事」\\n后续：描述过程\\n"},{"locator":"第 27 页","text":"\\n考试完形填空示范：\\n范文：2024高考全国一卷\\n英语真题\\n1）通读\\n2）排除\\n3）选择最优解\\n\\n💡\\n【开始做题】\\n\\n养成一个好习惯！\\n\\n\\n*确定了选项之后把单词「填入文中」\\n\\n\\n\\n再读一遍看是否通顺+与上下文是否匹配"},{"locator":"第 28 页","text":"\\n考试完形填空示范：\\n范文：2024高考全国一卷\\n英语真题\\n1）通读\\n2）排除\\n3）选择最优解\\n\\n💡\\n【如何排除】\\n\\n这一步完成80%的题目！\\n\\n*不正确的选项：\\n\\n\\n搭配x\\n语义x\\n事实/对象x\\n\\n\\n\\n\\n"},{"locator":"第 29 页","text":"\\n考试完形填空示范：\\n范文：2024高考全国一卷\\n英语真题\\n1）通读\\n2）排除\\n3）选择最优解\\n\\n💡\\n【如何解决纠结选项】\\n\\n20%让人纠结、最容易选错的题目！\\n\\n*牢记：选择最优解\\n\\n重点——即：\\n\\n\\n{情感态度}最优\\n+\\n{搭配}最优\\n\\n\\n【搭配最优】纠结「way 跑步的方式」还是「reason 跑步的原因」呢？\\n46.根据上下文，这句话在「段」尾进行总结与解释 + 后半「句」if一种设想的情况，reason「表达：解释原因」更加合适\\n"},{"locator":"第 30 页","text":"\\n考试完形填空示范：\\n范文：2024高考全国一卷\\n英语真题\\n1）通读\\n2）排除\\n3）选择最优解\\n\\n💡\\n【如何解决纠结选项】\\n\\n20%让人纠结、最容易选错的题目！\\n\\n*牢记：选择最优解\\n\\n重点——即：\\n\\n\\n{情感态度}最优\\n+\\n{搭配}最优\\n\\n【情感态度最优】纠结「such events 这样的事情」还是「such challenges 这样的挑战」呢？\\n51. 这个词在「概括」“我”骑车的不顺利经历 ，events「表达：较为中性的态度」，challenges「表达：遇到挑战-不顺利-感到困难」——具有情感色彩、作者态度，所以更加合适\\n\\n"},{"locator":"第 31 页","text":"\\n\\n完形填空：\\n总结如何快速+准确做题\\n原则1-4:\\n先看一遍文章，划分+总结大意\\n选出适合选项，「瞻前顾后」——填入选项\\n学会「排除」\\n拿不准的选项，选最优解\\n\\n\\n\\n上文、下文「瞻前顾后」：{上下文语义、对象、搭配}\\n\\n排除：对象/搭配/语义\\n大胆排除！\\n解决掉80%的题目\\n#最容易失分的部分！往往有2个选项都比较适合，但是一定有一个最优！\\n秘诀：情感态度/搭配「最适合」的项\\n\\n排除+最优解方法:"},{"locator":"第 32 页","text":"Chapter-5\\n \\n七选五"},{"locator":"第 33 页","text":"\\n七选五：\\n💡\\nStep1.首段看主题\\n读首段，抓全文关键词「谁+什么事」\\n全文主题一定据此展开！！！\\nStep2.看文章，划分过程\\n按照「阅读」中的划分方法\\n//后概括每部分大意\\nStep3.联系选项与文章=解题\\n找填空位置：段首/段中/段尾\\n题目无非四种：\\n1）段落转换-对应段首/段尾；2）同义对应/ 3）对比转折/ 4）解释原因-对应段中\\n\\n【强调！】\\n\\n一定要先阅读全文 「不要零散看选项」——把握文章「划分」，和文中「逻辑词」是上分秘诀！！"},{"locator":"第 34 页","text":"\\n考试完形填空示范：\\n范文：2024高考全国一卷\\n英语真题\\n1）首段看主题\\n2）全文划分\\n3）联系选项与文章\\n💡\\n【首段】\\n\\n人+事+怎么了\\n\\n*theme：\\n作家-写作-拼写文字问题\\n\\n重点——即：\\n\\n\\n{全文围绕主题}\\n"},{"locator":"第 35 页","text":"\\n考试完形填空示范：\\n范文：2024高考全国一卷\\n英语真题\\n1）首段看主题\\n2）全文划分\\n3）联系选项与文章\\n💡\\n【全文划分】\\n\\n按照阅读中的划分方法\\n//后总结段落意思\\n\\n*全文结构：\\n提出主题——1\\n词典的作用1——2\\n词点的作用2——3\\n举例论证——4&5\\n\\n\\n{结构清晰+内容概括}\\n\\n\\n\\n"},{"locator":"第 36 页","text":"\\n考试完形填空示范：\\n范文：2024高考全国一卷\\n英语真题\\n1）首段看主题\\n2）全文划分\\n3）联系选项与文章\\n💡\\n【联系】\\n\\n先看段首/段尾\\n\\n\\n①段落转换\\n1）上一段+这一段讲了什么\\n2）有「段落转换」的选项\\n\\n{E: but-逻辑转折 + not only…内容联系上一段}\\n\\n"},{"locator":"第 37 页","text":"\\n考试完形填空示范：\\n范文：2024高考全国一卷\\n英语真题\\n1）首段看主题\\n2）全文划分\\n3）联系选项与文章\\n💡\\n【联系】\\n\\n再看段中\\n\\n\\n*36.在段中：\\n②同义对应\\n\\n往往有\\nWhich means, that means, in other words, it equals to…\\n等等提示词！\\n\\n"},{"locator":"第 38 页","text":"\\n考试完形填空示范：\\n范文：2024高考全国一卷\\n英语真题\\n1）首段看主题\\n2）全文划分\\n3）联系选项与文章\\n💡\\n【联系】\\n\\n再看段中\\n\\n*37.在段中：\\n\\n③解释原因\\n{前文有现象/态度+\\n后文有解释}\\n\\n往往有\\nBecause， why， the reason for…\\n等等提示词！\\n\\n\\n①、②、③、④、⑤、⑥、⑦、⑧、⑨、⑩、⑪、⑫、⑬、⑭、⑮、⑯、⑰、⑱、⑲、⑳"},{"locator":"第 39 页","text":"\\n考试完形填空示范：\\n范文：2024高考全国一卷\\n英语真题\\n1）首段看主题\\n2）全文划分\\n3）联系选项与文章\\n💡\\n【联系】\\n\\n再看段中\\n\\n*40.在段中：\\n\\n④对比转折\\n{前文有情感态度+\\n后文有另一个情感态度}\\n\\n往往有\\nBut， however， nevertheless, in contrast…\\n等等提示词！\\n\\n"},{"locator":"第 40 页","text":"Chapter-6\\n \\n听力"},{"locator":"第 41 页","text":"\\n为什么听力容易出错？\\n1）不会听\\n在「听」里，我们把发音/文本对应起来：\\n\\n记住：「学会精听」，先听2-3遍音频，再打开文本，一字一句对照听！\\n直到每个单词都听清\\n2）不会记\\n在「记」里，我们学会速记：\\n\\n为什么要速记：一句很长的话，信息点只有几个！\\n学会速记方法——不遗漏要点+节省时间"},{"locator":"第 42 页","text":"究竟要听什么？\\n信息需要充分判断和取舍\\n核心方法就睡——【抓关键词】\\n\\n关键词：主谓宾结构\\n\\n💡\\n【2024全国高考一卷】text 8\\n\\n{These days you can see traffic jams around schools at drop-off and pick-up times. But it’s hard to blame the parents. They have good reasons for driving their kids to school, mostly to do with safety and convenience.}\\n\\n提炼主干，缩减到不能再缩减\\n（不改变原义，不考虑语法结构）\\n\\n｜｜这句话缩减速记：\\n\\ntraffic jams （上+放学时） x to blame parents \\nBec. ( safety and convenience)"},{"locator":"第 43 页","text":"\\n和学姐学会速记方法：\\n注意不同词速记方法不同\\n速记举例:\\n符号\\n箭头 表示：导致、结果原因等/ ( )表示：原因、解释、修饰…\\n缩写（逻辑词）\\nBec. =because / ∴=so / B.= but/ 1st =first, 2nd=second, 3rd=third,…\\n首字母（名词）\\nSch=school / info=information / uni = university\\nM=man / W=woman\\n \\n重点音节\\nCps=campus / ASAP= as soon as possible\\n中文\\n山=mountain / 火= fire / 童=children"},{"locator":"第 44 页","text":"Chapter-7\\n \\n语法"},{"locator":"第 45 页","text":"\\n\\n\\n\\n\\n\\n怎么练语法？——例子！例子！例子！"},{"locator":"第 46 页","text":"\\n怎么练语法？——例子！例子！例子！\\n1）从英语课文里学习\\n很多人说——要系统的学习语法？\\n\\n*学姐经验：把每篇课文都能够背诵，课文中的语法自然能够通过内容被记住！\\ne.g.对话中，A向B描述ta已经做完的事——用{现在完成时}而不是{一般过去时}\\n2）从考试错题里面学习\\n在「考试错题」里，应该怎么高效利用：\\n\\n*学姐经验：把每一篇考试「阅读」、「完形」、「短文改错」、「七选五」里面的\\n长难句——有较多从句/修饰/逻辑连词的句子进行{划分+理解}"},{"locator":"第 47 页","text":"怎么用好考试错题？\\n无论这篇文章有没有出错\\n核心方法——【 「阅读」、「完形」、「短文改错」、「七选五」 】文本\\n\\n全部过一遍——理解长难句\\n\\n💡\\n【2024全国高考一卷】text 8\\n{These days you can see traffic jams around schools at drop-off and pick-up times. But it’s hard to blame the parents. They have good reasons for driving their kids to school, mostly to do with safety and convenience.}\\n\\n长难句怎么理解？\\n找出主谓宾\\n判断句式\\n框出所有从句\\n\\n｜｜长难句划分后：\\n\\ntraffic jams （上+放学时） x to blame parents \\nBec. ( safety and convenience)"},{"locator":"第 48 页","text":"\\n怎么生活中学习语法？\\n多听英文歌\\n核心方法——【 「听歌曲」、「看歌词」、「想象画面」、「理解语法」 】\\n\\n多遍重复——歌词中的语法&时态，理解才能记住！\\n\\n💡\\n/Love story/\\n【一般过去时——描述过去的画面】\\nWe were both young when I first saw you\\n\\n【过去的画面开启】\\n【一般现在时——描述现在的心情】\\nI close my eyes and the flashback starts\\n【一般进行时——描述当时的场景】\\nI'm standing there on a balcony in summer air\\nSee the lights see the party the ball gowns\\nSee you make your way through the crow\\nAnd say hello\\n倒装句\\nLittle did I know\\n【一般过去时——描述过去的画面】\\nThat you were Romeo \\n【过去进行时——过去的男孩正在做什么】\\nyou were throwing pebbles\\nAnd my daddy said\\n祈使句\\nStay away from Juliet\\n【过去进行时——过去的我正在做什么】\\nAnd I was crying on the staircase\\nBegging you please don't go\\nAnd I said\\n祈使句\\nRomeo take me somewhere we can be alone\\n【将来进行时——对未来爱情的想象】\\nI'll be waiting all there's left to do is run\\nYou'll be the prince and I'll be the princess\\nIt's a love story baby just say yes\\n学姐建议加入歌单【循环播放的歌曲】\\nYesterday once more – 一般过去时\\n\\nLemon tree – 现在进行时\\n\\nMonsters – 一般将来时\\n\\nLove story – 过去进行时\\n\\nCounting stars – 现在完成时\\n\\n和小伙伴一起听起来！"},{"locator":"第 49 页","text":"Chapter-8\\n \\n口语怎么说好？"},{"locator":"第 50 页","text":"\\n{口语}\\n不同情况可以提高口语：\\n无交流对象——【「跟读课文」、「看无字幕美剧」、「听英文新闻」】\\n有交流对象——【 「英语角」、「英文歌」】\\n\\n输出的本质 = 足够的输入 + 足量的模仿！\\n我们要怎么做：\\n1.用好自己的课本\\n\\n#学姐亲身经历：\\n初中时，每篇课文听【7】遍以上\\n做到全文背诵+默写\\n跟读，模仿语调、抑扬顿挫、停顿\\n带语音语调去自己说一遍\\n*利用上学/放学/午饭后30min，碎片化时间重复\\n💡"},{"locator":"第 51 页","text":"\\n{口语}\\n不同情况可以提高口语：\\n无交流对象——【「跟读课文」、「看无字幕美剧」、「听英文新闻」】\\n有交流对象——【 「听歌曲」、「看歌词」、「想象画面」、「理解语法」 】\\n\\n输出的本质 = 足够的输入 + 足量的模仿！\\n我们要怎么做：\\n2.用好「美剧、新闻」等输入材料\\n\\n#学姐建议：\\n无字幕看美剧 + 听英文新闻\\n模仿发音和语调：模仿演员或主播的发音、语调和节奏——提升【口音和流利度】\\n扩展词汇和表达：【不同情境】下表达\\n提高反应速度：快速反应剧情或新闻内容，【锻炼思维速度 + 口语表达的自信】\\n*做到不看字幕就能理解剧情/新闻！\\n\\n💡"},{"locator":"第 52 页","text":"看哪些？\\n学姐推荐\\n5部美剧 + 5个网站\\n不依赖字幕，磨耳朵！！！\\n\\n💡\\n10美剧/动画推荐：\\nFriends - 语言自然且充满日常对话\\n\\nThe Simpsons - 幽默风趣，俚语和日常对话\\n\\nStranger Things - 紧张刺激，贴近青少年生活\\n\\nThe Big Bang Theory - 丰富的学术和幽默词汇\\n\\nSherlock - 英式侦探剧，虽语言偏难，但能够提升推理能力和语言组织能力\\n\\n和小伙伴一起看起来！\\n\\n💡\\n5个英文新闻网站：\\nBBC News - 提供全球新闻，语言标准\\n\\nCNN - 全球新闻为主，提升词汇和时事了解\\n\\nThe New York Times - 深度报道，进阶学习：复杂句式\\n\\nReuters - 简洁直接的报道见长，适合初学\\n\\nThe Guardian - 国际新闻，语言多样：提高写作和表达\\n\\n\\n在家和爸爸妈妈一起听起来！"},{"locator":"第 53 页","text":"\\n{口语}\\n不同情况可以提高口语：\\n无交流对象——【「跟读课文」、「看无字幕美剧」、「听英文新闻」】\\n有交流对象——【 「英语角」、「英文歌」】\\n\\n交流 = 输入 + 输出的实践！\\n我们要怎么做：\\n多讲！多讲！多讲！\\n\\n#学姐亲身经历：\\n初中{每周3小时}和小伙伴学一首新的英文歌\\n备考托福时{每周2小时}参加全英讨论，每周看一部英文电影，讨论「情节、手法、感受」\\n在交流时：\\n大胆讲！开口已经达到了80%的进步！\\n用输出刺激输入，每次逼自己用一个「新」的表达来表达同一意思\\n\\n*在讨论的时候，保证自己每次都有「3次」以上的发言！！！\\n💡"},{"locator":"第 54 页","text":"Chapter-9\\n \\n作文"},{"locator":"第 55 页","text":"\\n独立写作-{写作纲领}\\n哪些体裁——{重视要点}：\\n信件/邮件 —— 对人【道歉、感谢、建议】\\n信件/邮件 —— 对事【申请、投诉、推荐】\\n议论——【倡议书、报道、正反观点对比】\\n介绍——【传统节日/地点/人物】\\n怎么写：\\n\\n#正确的体裁：\\n格式！\\n【文体】【人称】【时态】\\n\\n观点+理由\\n* 布局\\n模仿范文！\\n💡"},{"locator":"第 56 页","text":"\\n独立写作-{写作纲领}\\n用好范文——\\n\\n好作文 = 清晰的骨架 + 丰富的血肉 ！\\n高分的基础：\\n\\n#字数和书写：\\n字数要达到要求！\\n【独立写作不少于100字】【续写不少于180字】\\n\\n\\n💡\\n每天练字\\n* 学姐在高中时\\n每天抄写2篇范文\\n【积累句式】【高级表达】+【练习书写！！！】\\n坚持！坚持！作文需要积累，量变才能质变"},{"locator":"第 57 页","text":"\\n独立写作-{写作纲领}\\n学会英语的万能展开大法——{总分总+并列展开}：\\n总分总——【「开头」、「中间段首句」、「结尾」】\\n并列展开——【 用好「逻辑词」、「高级句式」】\\n\\n好作文 = 清晰的骨架 + 丰富的血肉 ！\\n💡\\n范文怎么用？\\n红笔勾出优秀表达\\n黑笔抄写全文，练习书写"},{"locator":"第 58 页","text":"\\n{万能展开大法}\\n学会英语的万能展开大法——{总分总+并列展开}：\\n总分总——【「开头」、「中间段首句」、「结尾」】\\n并列展开——【 用好「逻辑词」、「高级句式」】\\n\\n高分的结构：\\n\\n#总分总【三部分】：\\n提出要解决的问题或观点/时间、地点、人物、事件\\n摆出事实或论据/事情发展的经过\\n得出结论或阐述理由/抒发态度/展望未来\\n\\n首段、尾段必用高级表达！\\n第二部分【不要漏要点】+【尽量多用高级句式】！\\n💡"},{"locator":"第 59 页","text":"\\n\\n#总分总【三部分】：\\n提出要解决的问题或观点/时间、地点、人物、事件\\n摆出事实或论据/事情发展的经过\\n得出结论或阐述理由/抒发态度/展望未来\\n\\n首段、尾段必用高级表达！\\n第二部分【不要漏要点】+【尽量多用高级句式】！\\n💡\\n2024高考全国一/二卷      英语作文真题\\n#【主题】分享经历；【要点】1.作品 2.感想\\n3.展望未来\\n1.提出话题\\n2.发展经过"},{"locator":"第 60 页","text":"\\n{万能展开大法}\\n学会英语的万能展开大法——{总分总+并列展开}：\\n总分总——【「开头」、「中间段首句」、「结尾」】\\n并列展开——【 用好「逻辑词」、「高级句式」】\\n\\n高分的[并列展开]如何进行：【并列展开】——即把两个/三个独立的【要素】或【句子】连接在一起！\\n怎么连？——靠{逻辑}+{句式}\\n\\n#【逻辑词】：\\n1.多用时间逻辑/因果逻辑/对比逻辑\\ne.g. 时间: Firstly/Besides/ In addition/ What’s more/ Moreover\\n因果: because/ the reason why/ since/ as/ \\n对比: however/ nevertheless/ nonetheless/ in contrast/ on the contrary/ instead\\n\\n#【高级句式】：\\n2. 把一般句【组合/换顺序/变从句】换成高级句\\ne.g. A句 and B句 not only, but also… / with A句信息（变从句），B句\\n\\n💡"},{"locator":"第 61 页","text":"\\n\\n#【中间段】怎么展开？：\\n\\n①三个要素并列【状态、动作、对象】\\n②用大量【非谓语动词/介词】引导的解释部分\\n\\n\\n万能展开！！！\\n💡\\n2024高考全国一/二卷      英语作文真题\\n#【展开的重点】：描述发展经过的{中间段}!!!\\n2.发展经过\\n\\n①、②、③、④、⑤、⑥、⑦、⑧、⑨、⑩、⑪、⑫、⑬、⑭、⑮、⑯、⑰、⑱、⑲、⑳\\n①\\n②\\n③"},{"locator":"第 62 页","text":"\\n读后续写-{写作纲领}\\n重视要点：\\n情绪\\n动作\\n场景\\n怎么写：\\n\\n#四步写：\\n三读\\n【原文最后段】【续写句1】【续写句2】\\n找3要素：\\n【人物、事件、情绪】\\n💡\\n【人物】我和Gunter\\n【事件】求助\\n【情绪】着急\\n\\n【人物】我和Gunter\\n【事件】应约返回\\n【情绪】感激"},{"locator":"第 63 页","text":"\\n读后续写-{写作纲领}\\n怎么写：\\n\\n#四步写：\\n三读\\n【原文最后段】【续写句1】【续写句2】\\n找3要素：\\n【人物、事件、情绪】\\n*标记线索+关键句！！！\\n动作线+情绪线+场景线\\n丰富内容\\n高级表达【动词、情绪词、句式】升华=高分！\\n💡\\n【动作线】求助-帮助-解决\\n【情绪线】着急-感激-感动\\n【场景线】车站-上车-远去\\n\\n变换场景【介词短语】+连续动作【动词】\\n+用从句/插入语【情绪】融合在一句话\\n=\\n丰富的高分表达！\\n"},{"locator":"第 64 页","text":"Chapter-10\\n \\n错题本"},{"locator":"第 65 页","text":"英语错题本怎么做？\\n两个方面分别积累\\n\\n①按照题型\\n②按照语法、短语、单词、作文——【分板块积累】\\n\\n\\n\\n💡\\n【学姐英语错题本】详见附赠笔记\\n\\n{一共十一个方面}\\n\\n*把错题✂️剪下来，黑笔写：解题步骤，红笔写：错因+知识点\\n\\n\\n\\n\\n｜｜订正一张卷子/一个练习：\\n\\n及时总结！绝不把今天的错题拖到明天！！！\\nPart 1\\nPart 2"},{"locator":"第 66 页","text":"Part1: 英语错题题型——怎么做？\\n\\n黑笔写题\\n红笔总结\\n\\n💡\\n写出错误原因\\n\\n\\n①保留相关文段\\n②对比正确、错误选项\\n③红笔订正，尽量简略\\n\\n\\n\\n用小三角高亮自己的易错点！\\n使用活页本"},{"locator":"第 67 页","text":"Part2: 按照板块积累——怎么做？\\n\\ne.g.积累生词/短语\\n\\n💡\\n当在考试中遇到【词义猜测】【文段生词】\\n不要放过——「精」查词典！\\n\\n①写出词性\\n\\n②写出【英文】释义\\n*英文释义——是这个词最准确的意思！\\n\\n③给自己写一个例句\\n\\n\\n考试重点总结——重在精字！\\n{每次考试都是宝贵的积累机会，每天积累一篇阅读里的\\n生词，都是在为最后的考试做准备}\\n使用活页本\\n\\n\\n"},{"locator":"第 68 页","text":"Chapter-11\\n \\n总结"},{"locator":"第 69 页","text":"\\n【优优学姐个人介绍】——高考裸分689/英语146\\n英语的分数是「捡」来的，每一分都要重视\\n高考英语146\\n💡\\n优优 清华学姐/清华本硕 /高考四川省前50\\n英语146 数学142 物理满分\\n\\n\\n可以看出：（英语的语言性+工具性）是我们学习的重点，需要注意英语学什么+考什么\\n想像优优学姐一样拥有好成绩——\\n\\n①、②、③、④、⑤、⑥、⑦、⑧、⑨、⑩、⑪、⑫、⑬、⑭、⑮、⑯、⑰、⑱、⑲、⑳\\n优优 清华学姐高考成绩查询页面\\n希望你也能收到这样的喜讯！\\n「抓住学习方法+备考方法」才能百战百胜！"}],"parse_status":"completed"}]`),av={title:"国庆后收心：用三天把学习节奏拉回来",content:`直播主题：国庆后收心——用三天把学习节奏拉回来
受众：初高中学生家长；时长：约 30 分钟。
目标：让家长带走能执行的三天收心清单；先帮助解决问题，再匹配对应课程。

【0–3 分钟｜开场与问题收集】
口播：“假期结束了，孩子还在晚睡、刷手机，作业写两行就走神。今天先别急着贴‘懒’的标签。我们一起把三件事排好：什么时候睡、第一件做什么、手机什么时候收。最后给大家一张三天收心清单。”
互动：“你家最难的是 A 作息、B 手机，还是 C 作业？把年级和字母发在评论里。”
执行：助播记录高频问题，主持人选两种情况回应；只统计实际评论，不预设观众回答。

【3–8 分钟｜判断卡点】
口播：“收心不是马上把假期欠下的任务全部补完。先写下三条事实：昨晚几点睡、今天什么时候开始写作业、哪项任务最拖。不要写‘孩子不自觉’，要写‘九点打开作业，九点半还没开始第一题’。事实越具体，第一步越容易找。”
如果开始时间晚，调整启动流程；如果坐下就刷手机，讨论停放位置；如果遇到难题就停，拆成能完成的小块。以上是需要验证的可能原因，不直接给孩子下结论。
画面：展示“具体表现 / 可能卡点 / 今晚第一步”三列表。
互动：请观众写出一条具体表现。

【8–15 分钟｜第一天：重新启动】
口播：“今天只保住两个锚点：起床时间，以及晚上的第一段学习。选一个孩子同意的手机停放位置，家长也一起放下手机。先做熟悉的基础题，试着专注二十分钟，再休息五分钟；根据状态调整，不把计时变成惩罚。”
家长话术：“今晚不要求全部追回来。你挑一个容易开始的任务，我们先完成第一段。”
操作：写任务、开始时间和完成标准，例如“19:30 完成五道基础题并核对答案”。
避免：一边催促一边加任务；完成后立即要求加倍。

【15–21 分钟｜第二天：计划写具体】
口播：“不要只写‘复习数学’，改成‘回看一道没弄懂的例题，合上答案讲思路，再独立做同类题’。英语也不要只写‘背单词’，改成‘复习十个旧词，用三个词造句，遮住答案再回忆’。”
三步清单：
1. 列明天必须完成的学校任务。
2. 每科只选一个当前需要补上的小问题。
3. 标注完成标准和停止时间，为睡眠留出空间。
课程依据：产品课程中的数学资料包含限时训练、错题回看与不同分数段的训练方法，可按实际问题匹配章节。[1]
互动：请家长把一句模糊任务改成可检查的任务。

【21–26 分钟｜第三天：复盘与微调】
口播：“不只问‘做完没有’，还问‘哪一步开始容易了，哪一步还卡着’。只完成第一段，也先确认做对的地方，再调整难度。”
复盘三问：今天几点开始？哪个任务比昨天容易？明天保留哪一步、调整哪一步？
分年级：初中优先稳定作息与基础任务；高中对齐学校进度，选择薄弱知识点做针对性训练，避免额外任务挤占睡眠。
画面：展示填写后的三天表，留空表供观众照着填写。
助播：记录执行困难，为下一次答疑整理材料。

【26–30 分钟｜答疑与课程承接】
先回应评论最多的具体问题，再回应有明确年级和场景的问题。资料无法支持的个体情况，先补信息，不下确定结论。
口播：“如果能稳定开始，但数学不知道怎么刷题，可以看课程中的基础题、限时训练和错题整理章节；如果卡在英语词汇与阅读，就先匹配英语资料。先找问题再选内容，不需要四科一起加量。”
CTA：“今晚和孩子选一件能完成的小事。评论‘收心’，填写开始时间、任务与复盘结果。下次讲怎样检查计划有没有效果。”
结束前复述：一个作息锚点、一个启动任务、一次具体复盘。
准备清单：三天行动表、评论记录表、课程目录；仅展示已经确认的课程内容和服务信息。

【备用答疑话术｜根据评论选择】
问：“手机一收就吵，怎么办？”
答：“先别临时抢走。找双方情绪平稳的时候，讨论今天需要完成什么、娱乐什么时候结束、手机停在哪里。先试一个晚上，再检查约定是不是能执行。如果约定不断被打破，记录具体情形后重新协商，不把冲突简单归结为态度问题。”

问：“假期作业还没写完，要不要熬夜补？”
答：“先分清明天必须交的任务、可以和老师沟通的任务，以及复习加练。把剩下的任务按截止时间列出来，保留睡眠，再安排最优先的一项。不要用熬夜补全部任务来换第二天继续失去状态。学校要求和个体情况不同，需要按实际任务沟通。”

问：“孩子答应了还是拖。”
答：“看约定是否具体到‘何时开始、做哪几题、怎么检查’。如果只是‘今晚认真学习’，两个人可能理解不同。把第一步缩小到十分钟能开始的任务，完成之后再讨论下一步。家长也尽量遵守自己提出的安排。”

问：“国庆后要不要马上加课？”
答：“先判断是启动困难，还是具体知识没理解。如果启动都很难，先稳定学校任务与作息；如果能开始但一个知识点持续不会，再匹配课程章节。不能把每种困难都直接变成买课需求。”

【复盘记录】
直播后统计评论主题与有效问题；保存家长提问的去重版本。记录本场哪段互动最集中、哪份资料实际被引用；下次计划根据这些记录调整，不把案例中预设的问题数量当成本场真实表现。`},uv=`【原片拆解】
这条确实是背单词视频。《第195集｜只用这1招，让你背单词突然开窍》，画面账号为“英语雪梨老师”，标注9月28日。[1]
已核验录屏0:00–0:05：纸笔实操，画面强调“一找二切三拼”；第一步“先找出元音字母（a e i o u）”，再“元音前再找辅音”。钩子是“背单词开窍”，交付是可见的拼读操作。录屏只有约5秒，后续完整步骤与结尾未包含，不能当作完整逐字脚本。

【结合优优英语课程】
《英语课程ppt.pptx》第1页有“拼读背诵”，第7页给出“1+1+1”：自己先背一遍并录音、睡前听、第二天再背；同时提出“少量多次”。将竞品的纸笔示范方式与这些课程内容组合成下方新稿。[2]

【新脚本｜约75–90秒】
标题：单词会读却总忘？把拼读接上这三次复习
封面：先读准，再回忆；不只抄十遍

0–8秒｜正面近景、手持词卡
口播：“你家孩子单词当天会，第二天又忘？先别加抄写量。我们今天把读准、自己背、隔天再测，连成一个动作。”
字幕：当天会 ≠ 隔天能想起

8–25秒｜俯拍纸笔
口播：“拿一个简单词，比如cat。圈出元音a，看看它前后是什么字母，听标准音，再把音连起来。长单词要按真实读音和音节练，别给每个元音都机械切一刀。”
画面：圈a，依次指c、a、t；播放准确示范音，孩子跟读一次。
字幕：先听准，再拼读

25–45秒｜词卡遮挡操作
口播：“第一遍自己背，再录下读音和词义。合上词卡，自己说出来；卡住的词单独标记。记录的是能不能回忆，不是抄了几行。”
画面：正面读卡→遮住卡片→独立复述→标记卡住的词。

45–65秒｜复习时间卡
口播：“用我们课程里的1+1+1：今天自己背并录音，睡前听一遍，第二天起床后再背一次。每天少量多次，先做到能坚持，再逐步调整数量。”
字幕：自己背＋录音 → 睡前听 → 隔天再测

65–80秒｜放回短句
口播：“再把cat放进The cat is on the mat。能读出这个词、说出意思，再放回句子，才知道它能不能用。听对读音、独立回忆，比一直盯着词卡更能发现问题。”
画面：词卡切换短句，遮住cat再让孩子回忆。

80–90秒｜结束与互动
口播：“今晚挑几个最近总忘的词试一次。评论里告诉我，孩子卡在读音、意思，还是隔天想不起来？下一条我按你们的卡点继续示范。”

【拍摄准备】
词卡、遮挡纸、手机录音、标准读音、两张时间卡；每个动作至少一个操作特写。此稿是结合课程整理的新稿，扩写部分不是雪梨老师原话，也不保证传播表现。`,cv={month:"2026-09",start:21e4,end:224e3,follows:16800,unfollows:2800},dv=[{topic:"开学适应与学习节奏",questions:126,videos:6,follows:5600,views:28e4},{topic:"月考复盘与错题管理",questions:98,videos:5,follows:4200,views:21e4},{topic:"英语背词与阅读",questions:76,videos:4,follows:3600,views:24e4},{topic:"亲子沟通与情绪",questions:64,videos:4,follows:2400,views:2e5},{topic:"校园生活",questions:18,videos:2,follows:1e3,views:1e5}],Ka={live:av,competitor:uv,followers:cv,topics:dv},pv="2026-09",fv=223977,vv=225254,hv=1569,mv=292,gv=1277,_v=30,yv="视频号关注者增长详情数据.csv",bv="./business-data/bf95dc5ff784ae87/视频号关注者增长详情数据.csv",wv=3,kv={month:pv,start:fv,end:vv,follows:hv,unfollows:mv,net:gv,days:_v,source:yv,uri:bv,header_row:wv},xv="指标与话题统计口径",Sv="净增粉丝=期末粉丝-期初粉丝=新增关注-取消关注。视频归因新增关注为视频带来的关注次数，不能直接当作账号净增粉丝。家长关心的话题以去重问题条数衡量，不代表所有家长的观点。播放转关注率=归因新增关注/播放次数。分析不证明因果。",Ga={title:xv,content:Sv},jl=["最近一个月涨了多少粉丝？","9月家长们最关心的话题是什么？我的视频中，哪种类型的话题涨粉最多？","@雪梨老师-英语背单词开窍.txt，拆解成爆款脚本给我，结合我过去英语讲课的知识，完成新的脚本","帮我生成下一次直播的脚本，关注10月国庆假期收心","把刚刚生成的脚本，加入到下周二晚的直播排期中"];function $v(e){const t=i=>i.normalize("NFKC").replace(/\s+/g,"").replace(/(背单词开窍\.txt)(?:背单词开窍\.txt)+/g,"$1").replace(/[，,。.!！?？；;]/g,""),n=t(e),s=jl.find(i=>t(i)===n);return s?oo(s):null}function oo(e){return/热点|热搜|热门/.test(e)?"hotspots":/排期|排入|加入.*直播/.test(e)&&/脚本|刚刚|下周二/.test(e)?"schedule":/雪梨|竞品/.test(e)&&/拆|背单词|脚本/.test(e)?"competitor":/直播/.test(e)&&/收心|国庆|生成/.test(e)?"planning":/9月|九月/.test(e)&&/话题|关心|涨粉/.test(e)?"analysis":/最近一个月|上个月/.test(e)&&/粉|关注/.test(e)?"query":null}function dl(e=new Date){const t=new Date(e.toLocaleString("en-US",{timeZone:"Asia/Shanghai"}));return t.setDate(t.getDate()-(t.getDay()+6)%7+8),t.getFullYear()+"-"+String(t.getMonth()+1).padStart(2,"0")+"-"+String(t.getDate()).padStart(2,"0")+"T20:00:00"}function Qi(e,t,n=[]){var s,i,l,r,a;if(e==="query"){const u=t.followers;return{text:`“最近一个月”使用数据覆盖的最近一个完整自然月：2026 年 9 月（9/1–9/30）。

净增粉丝 `+(u.follows-u.unfollows).toLocaleString()+` 人。
• 月初：`+u.start.toLocaleString()+` 人
• 月末：`+u.end.toLocaleString()+` 人
• 新增关注：`+u.follows.toLocaleString()+` 人
• 取消关注：`+u.unfollows.toLocaleString()+` 人

净增 = 月末 − 月初 = 新增关注 − 取消关注；两个计算结果一致。新增关注与净增是不同口径。[1]`,sources:[{number:1,title:"视频号关注者增长详情数据.csv",locator:"2026-09-01–2026-09-30 / 原始CSV第3行表头",uri:u.uri||"./cue-scenarios/followers.csv",text:JSON.stringify(u)}],summary:"已实际计算期末减期初，并用关注减取消关注交叉校验。"}}if(e==="analysis")return{text:`基于经营数据里的补充演示归因表，9月家长最关心的是“开学收心与适应”：共 386 次问题及评论提及，占 31.4%。其次是学习规划与时间管理（24.6%）和月考备考与错题复盘（19.0%）。[1]

涨粉最多的也是“开学收心与适应”：4 条视频共带来 486 个内容归因新增关注，占样本归因关注的 38.3%；播放关注率为 0.171%，在五类话题中最高。学习规划与时间管理排第二，归因新增关注 324 人。[1]

这份表是为产品演示补充的数据，不代表平台真实归因结果。账号9月实际新增关注仍以《视频号关注者增长详情数据.csv》的 1,569 人为准；演示表中的 1,269 人只表示可归因到这12条内容的关注样本。[2]`,sources:[{number:1,title:((s=t.topicAnalysis)==null?void 0:s.title)||"9月家长话题与视频涨粉归因（演示数据）.csv",locator:"话题归因 · 第2–7行",uri:(i=t.topicAnalysis)==null?void 0:i.uri,text:"开学收心与适应：提及386次，占31.4%；4条视频播放284,600，内容归因新增关注486，占38.3%，播放关注率0.171%。"},{number:2,title:((l=t.followerSource)==null?void 0:l.title)||"视频号关注者增长详情数据.csv",locator:"2026-09-01–2026-09-30",uri:(r=t.followerSource)==null?void 0:r.uri,text:"9月账号新增关注1,569人，取消关注292人，净增1,277人。"}],summary:"汇总演示归因表的家长关注占比、内容归因新增关注与播放关注率，并与账号总关注口径区分。"};if(e==="hotspots")return{text:`10月可以优先围绕国庆后学习节奏恢复做内容。[1]

建议三条连续选题：
1. 假期后第一晚：只整理明天必须完成的任务，减少同时启动的事项。
2. 开学后一周：从一份最近的错题找出具体卡点，用短练习回测。
3. 直播答疑：收集作息、作业启动、错题复盘三个方向的问题，现场演示三天行动表。

这些是结合节假日节点和课程资料的内容建议。官方日历可以核验节点，但不能证明它们是热搜榜第一，也不能预测涨粉效果。`,sources:[],summary:"将官方日历节点与知识库方法结合，区分可核验时间与内容选题建议。"};if(e==="planning"){const u=n.find(p=>p.subject==="数学"&&p.title==="数学课程ppt.pptx");return{text:t.live.content,draft:{...t.live,type:"live"},sources:u?[{number:1,title:u.title,locator:"产品课程 / 数学",uri:u.uri,text:(a=u.local_content)==null?void 0:a.slice(0,700)}]:[],artifacts:[{type:"script",label:"查看完整直播脚本"},{type:"document",label:"加入知识库"}],summary:"把收心主题拆成开场、判断卡点、三天行动、答疑与课程承接。"}}return e==="competitor"?{text:t.competitor,draft:{title:"背单词开窍：拼读与1+1+1复习",content:t.competitor,type:"video"},sources:[{number:1,title:"雪梨老师｜背单词开窍",locator:"用户录屏 / 0:00–0:05",uri:"https://northstar-copilot.com/competitor-videos/xueli-vocabulary.mp4",text:"第195集：只用这1招，让你背单词突然开窍；一找二切三拼；先找出元音字母（a e i o u）；元音前再找辅音。"},...n.filter(u=>{var p;return u.title==="英语课程ppt.pptx"&&((p=u.local_content)==null?void 0:p.trim())}).slice(0,1).map(u=>{var p;return{number:2,title:u.title,locator:"产品课程 / 英语原文",uri:u.uri,text:((p=u.sections)==null?void 0:p.filter(c=>c.locator==="第 1 页"||c.locator==="第 7 页").map(c=>c.locator+"："+c.text).join(`
`).slice(0,1400))||u.local_content.slice(0,900)}})],artifacts:[{type:"script",label:"查看脚本稿"},{type:"document",label:"加入知识库"}],summary:"已核验5秒录屏的主题与可见字幕，结合英语课程原文组织扩写稿。"}:null}const Cv={class:"cp-inner"},Tv={class:"cue-head"},Av=["disabled","title"],Ev={class:"cue-modes"},Dv=["onClick"],Mv={key:0,class:"cue-drawer-mini"},Ov=["onClick"],Iv={key:0},Rv={key:1,class:"cue-drawer-mini"},Pv={key:2,class:"script-preview"},Lv={key:0,class:"preview-error"},Nv=["disabled"],Fv=["data-message-index"],zv={class:"role"},Uv={key:0,class:"route"},jv={key:1,class:"cue-process"},Bv={key:0},Vv={key:0},Hv={key:1},Wv={key:0,class:"mention-token"},qv={key:3,class:"cue-source"},Kv=["title"],Gv=["onClick"],Xv=["href"],Yv={key:0},Jv={key:4,class:"sent-attachments"},Zv=["disabled","onClick"],Qv={class:"message-toolbar"},eh=["onClick"],th=["disabled","onClick"],nh=["aria-pressed","onClick"],sh=["aria-pressed","onClick"],ih=["onClick"],oh={key:6,class:"cue-actions"},lh=["onClick"],rh={key:7,class:"artifact-notice"},ah={key:0,class:"cp-msg ai"},uh={key:4,class:"latest-message-control"},ch={key:5,class:"message-notice",role:"status"},dh={class:"quick"},ph=["onClick"],fh={key:6,class:"question-waitlist","aria-live":"polite"},vh={key:0},hh=["onClick","aria-label"],mh=["onClick","aria-label"],gh={class:"attachment-list"},_h=["src"],yh=["onClick"],bh={key:7,class:"upload-error"},wh={class:"cp-input"},kh=["disabled","title","aria-label"],xh={class:"composer-actions"},Sh=["disabled","aria-expanded"],$h={key:0},Ch={key:1,class:"upload-menu"},Th={key:0,class:"mention-menu"},Ah=["onMousedown"],Eh={key:0,class:"mention-empty"},Xa="redcowork-replica-v2-cue-conversations",Dh={__name:"CopilotPanel",props:{mobile:{type:Boolean,default:!1}},setup(e){const t=K(!0),n=e,s=K(""),i=K(null),l=K(!1),r=K("analysis"),a=K(null),u=K([]),p=K([]),c=K(""),h=K([]),m=K(null),C=K(!1),O=K(""),E=K(!1),I=K(!1);function ee(A){m.value.accept=A?"image/png,image/jpeg,image/webp,image/gif,image/bmp":".xlsx,.xls,.pptx,.ppt,.csv,.tsv,.md,.txt,.pdf,.docx,.srt,.vtt",m.value.click(),E.value=!1}async function R(A){var M,he;const S=[...((M=A.dataTransfer)==null?void 0:M.files)||A.target.files];A.dataTransfer||(A.target.value=""),I.value=!1,E.value=!1,O.value="",C.value=!0;try{for(const ye of S){const Ze=/^image\/(png|jpeg|webp|gif|bmp)$/.test(ye.type),Be=Ze?"image":"file",Ke=Ze?20:500;if(h.value.filter(de=>de.kind===Be).length>=20){O.value+="最多20"+(Ze?"张图片":"个文件")+"；";continue}if(ye.size>Ke*1024*1024){O.value+=ye.name+" 超过"+Ke+" MB；";continue}if(!Ze&&!/\.(xlsx?|pptx?|csv|tsv|md|txt|pdf|docx|srt|vtt)$/i.test(ye.name)){O.value+=ye.name+" 格式暂不支持；";continue}try{let de="",be={};if(Ze){const Fe=await createImageBitmap(ye),Pe=Math.min(1,1600/Math.max(Fe.width,Fe.height)),_e=document.createElement("canvas");_e.width=Math.round(Fe.width*Pe),_e.height=Math.round(Fe.height*Pe),_e.getContext("2d").drawImage(Fe,0,0,_e.width,_e.height),Fe.close(),de=_e.toDataURL("image/jpeg",.85)}else if(be=await yo(ye),!((he=be.local_content)!=null&&he.trim()))throw new Error("没有提取到可读取内容");h.value.push({id:crypto.randomUUID(),kind:Be,title:ye.name,size:ye.size,image:de,local_content:be.local_content||""})}catch(de){O.value+=ye.name+"："+de.message+"；"}}}finally{C.value=!1}}let te=!1;function ie(){try{return JSON.parse(localStorage.getItem(Xa)||"[]")}catch{return[]}}function Q(){if(g.authUser||te||!g.chat.some(he=>he.role==="user"))return;a.value||(a.value="local-chat-"+crypto.randomUUID());const A=g.chat.find(he=>he.role==="user"),S={id:a.value,title:A.text.slice(0,48),mode:r.value,message_count:g.chat.length,updated_at:new Date().toISOString(),messages:JSON.parse(JSON.stringify(g.chat))},M=[S,...ie().filter(he=>he.id!==S.id)].slice(0,100);try{localStorage.setItem(Xa,JSON.stringify(M)),localStorage.setItem("redcowork-replica-v2-cue-active-chat",S.id),u.value=M}catch{ge.value="会话保存失败：本机存储空间不足，请复制重要内容"}}dt(()=>g.chat,Q,{deep:!0,flush:"sync"});const j=[{id:"demo-month-script",title:"11月短视频脚本.pdf",chunk_count:8},{id:"demo-live-review",title:"优优账号X直播记录【咨询+精讲课产品销售】.pdf",chunk_count:6},{id:"demo-live-sop",title:"直播SOP.pdf",chunk_count:7},{id:"demo-product-script",title:"精讲课塑品脚本.pdf",chunk_count:5},{id:"demo-wang",title:"汪舅舅-教育内容脚本转写.txt",chunk_count:4},{id:"demo-xueli",title:"雪梨老师-英语背单词开窍.txt",chunk_count:1}],D=K([...j]),F=K([]),G=K(null),H=K(null),q=ce(()=>[...new Map([...D.value,...g.demoKnowledgeDocuments,...g.courseDocuments,...g.businessDocuments].map(A=>[A.id,A])).values()]),me=K(0),Se=K(!1);function et(A){A.key!=="Escape"&&(me.value=A.target.selectionStart??s.value.length,Se.value=!1)}const Je=ce(()=>{if(Se.value)return null;const A=s.value.slice(0,me.value),S=A.lastIndexOf("@");if(S<0)return null;const M=A.slice(S+1);return/[\n,，。]/.test(M)||q.value.some(he=>M.trim()===he.title)?null:{start:S,end:me.value,query:M.trim().toLowerCase()}}),ke=ce(()=>Je.value?q.value.filter(A=>A.title.toLowerCase().includes(Je.value.query)).slice(0,12):[]),Ae=ce(()=>q.value.filter(A=>s.value.includes("@"+A.title)));function Ee(A){const S=A.mentionedDocs||[A.mentionedDoc].filter(Boolean);if(!S.length)return[{text:A.text}];const M=[];let he=A.text;for(;he;){const ye=S.map(Be=>({title:Be,index:he.indexOf("@"+Be)})).filter(Be=>Be.index>=0).sort((Be,Ke)=>Be.index-Ke.index);if(!ye.length){M.push({text:he});break}const Ze=ye[0];Ze.index&&M.push({text:he.slice(0,Ze.index)}),M.push({title:Ze.title}),he=he.slice(Ze.index+Ze.title.length+1)}return M}const We=[["analysis","分析"],["drilldown","下钻"],["breakdown","拆解"],["creative","创意"],["planning","排期"]],Ct={query:"analysis",analysis:"drilldown",competitor:"breakdown",planning:"creative",schedule:"planning",hotspots:"creative"},bt=ce(()=>g.activeView==="scripts"&&!!g.scriptContext),qe=["本场直播内容总结？","和上一场数据对比，总结一下","这场直播画面如何？","人气高点、下单高点的话术如何沉淀为 SOP？","有什么风险点？"],Tt=ce(()=>bt.value?[]:g.activeView==="live-script"?Il:g.activeView==="live-summary"?qe:jl);function ze(A){var S;return(S=A.steps)!=null&&S.length?A.steps:[{name:"处理记录 · execution_status",status:A.error?"failed":"done",execution:"记录状态",detail:A.routeLabel==="直播复盘分析"?"本地复盘结果；读取当前选择的直播记录及已有复盘资料。未调用服务端模型。":"此回答未附带详细执行日志。仅展示已有结果，不补造工具调用或耗时。"}]}function Mt(A){return A.sources||[]}function mt(A){return String(A||"").replace(/(?:Cue 暂时无法回答：\s*)?Failed to fetch|NetworkError[^\n]*|Load failed/gi,"连接暂时中断，问题和引用已保留。请点击重新生成重试。")}function wt(A){return A.error?mt(A.text):A.text}function Z(A){return A.web?!1:/雪梨/.test(A.title||"")||!!A.document_id||/\.(pptx?|pdf|docx?|xlsx?|csv|txt|md)$/i.test(A.title||"")}function B(A){const S=/雪梨/.test(A.title||"");g.wikiDocumentRequest={id:S?"demo-xueli-video":A.document_id,title:S?"雪梨老师-英语背单词开窍.mp4":A.title,uri:A.uri},g.activeView="wiki"}const ge=K(""),Ue=K(JSON.parse(localStorage.getItem("redcowork-replica-v2-answer-feedback")||"{}"));function x(A){let S=0;for(const M of A.text||"")S=S*31+M.charCodeAt(0)|0;return String(S)}function y(A,S){const M=x(A);Ue.value[M]=Ue.value[M]===S?null:S,localStorage.setItem("redcowork-replica-v2-answer-feedback",JSON.stringify(Ue.value))}async function P(A){try{await navigator.clipboard.writeText(A.text||""),ge.value="已复制"}catch{ge.value="复制失败，请检查浏览器剪贴板权限"}setTimeout(()=>ge.value="",2500)}function T(A){const S=g.chat.slice(0,A).reverse().find(M=>M.role==="user");S&&!l.value&&sn(S.text)}async function w(A){if(l.value||!A.resumeRequest)return;l.value=!0,A.canContinue=!1;const S=A.resumeRequest;try{const M=await(g.authUser?aa:ua)(S.question,S.context,S.history,{...S.options,continuation:!0});g.chat.push({role:"ai",text:M.answer,routeLabel:M.route_label||W[M.route],sources:M.sources||[],steps:M.steps||[],artifacts:M.artifacts||[]})}catch(M){A.text="Cue 暂时无法回答："+M.message,A.canContinue=!!M.canContinue}finally{l.value=!1,fe()}}async function U(A){try{navigator.share?await navigator.share({title:"NorthStar · Cue 回答",text:A.text}):(await navigator.clipboard.writeText(`NorthStar · Cue 回答

`+A.text),ge.value="分享内容已复制，可粘贴发送")}catch(S){S.name!=="AbortError"&&(ge.value="分享失败，请使用复制")}setTimeout(()=>ge.value="",3e3)}const W={structured_query:"结构化数据查询",hybrid_analysis:"指标计算＋知识检索",hybrid_planning:"历史数据＋竞品内容＋脚本资料",competitor_rewrite:"竞品拆解＋账号定位＋脚本生成",source_lookup:"来源核验",creative_generation:"创意生成",content_breakdown:"竞品拆解",metric_drilldown:"指标下钻",knowledge_qa:"知识库检索"};function J(){!g.scriptContext||l.value||sn("优化当前脚本："+g.scriptContext.title+"。请忠于原主题，给出完整优化稿、具体修改理由、口播和分镜，不要只给通用建议。")}const N=K(!1),z=K(null);function ae(A){s.value=A,N.value=!0,G.value=q.value.find(M=>A.includes("@"+M.title))||null;const S=oo(A);S&&(r.value=Ct[S]),zn(()=>{var M,he;(M=z.value)==null||M.focus(),me.value=s.value.length,(he=z.value)==null||he.setSelectionRange(me.value,me.value)})}const oe=K(null),ve=K(0);function fe(){zn(()=>{const A=i.value;if(!A)return;const S=oe.value===null?null:A.querySelector('[data-message-index="'+oe.value+'"]');ve.value=0,S?A.scrollTop+=S.getBoundingClientRect().top-A.getBoundingClientRect().top-12:A.scrollTop=A.scrollHeight})}function De(){oe.value=null,ve.value=0,zn(()=>{i.value&&i.value.scrollTo({top:i.value.scrollHeight,behavior:"smooth"})})}function Ie(){return g.authUser?!0:(g.loginOpen=!0,!1)}function Ne(A){return{role:A.role==="user"?"user":"ai",text:A.content,route:A.route,routeLabel:A.route_label||W[A.route],sources:A.sources||[],steps:A.steps||[],artifacts:A.artifacts||[]}}async function xe(){if(!g.authUser){await Ml(),await Ol(),D.value=[...j,...g.courseDocuments,...g.businessDocuments,...g.demoKnowledgeDocuments];return}try{const[A,S,M]=await Promise.all([Ud(),Vd(),rc()]);u.value=A.conversations||[],p.value=S.tasks||[],D.value=[...j.filter(he=>!(M.documents||M.files||[]).some(ye=>ye.title===he.title)),...M.documents||M.files||[]],F.value=M.spaces||[]}catch{D.value=[...j]}}async function je(){if(l.value){ge.value="正在生成回答，完成后可新建会话";return}try{if(!g.authUser)Q(),te=!0,a.value=null,g.chat=[],localStorage.removeItem("redcowork-replica-v2-cue-active-chat");else{const A=await Bd({title:"新会话",mode:r.value});a.value=A.id,g.chat=[],await xe()}jt.value=[],h.value=[],E.value=!1,O.value="",H.value=null,s.value="",c.value="",oe.value=null,ve.value=0,g.chat.push({role:"ai",text:"新会话已开始。你想分析什么，或生成什么内容？可以输入 @ 引用知识库资料。"}),ge.value="已新建会话",setTimeout(()=>ge.value="",2500),zn(()=>{var A;(A=z.value)==null||A.focus(),i.value&&(i.value.scrollTop=0)})}catch(A){ge.value="新建会话失败："+A.message}finally{te=!1}}async function kt(A){if(!l.value){if(!g.authUser){Q();const S=ie().find(M=>M.id===A);if(!S)return;te=!0,a.value=A,r.value=S.mode,g.chat=S.messages,localStorage.setItem("redcowork-replica-v2-cue-active-chat",A),H.value=null,s.value="",c.value="",te=!1,fe();return}if(Ie()){l.value=!0;try{const S=await jd(A);a.value=A,r.value=S.conversation.mode,g.chat=(S.messages||[]).map(Ne),c.value="",fe()}finally{l.value=!1}}}}function xt(){g.chat.length||g.chat.push({role:"ai",text:"我是 Cue。选择下方五个问题，查看意图路由、数据计算、知识检索、内容产物与排期执行。可展开回答中的过程记录，查看工具执行与来源引用。"})}function Lt(A){return JSON.stringify({current_script:g.activeView==="scripts"?g.scriptContext:null,competitor_comparison:g.benchAnalysisContext,current_live_script:g.activeView==="live-script"?g.liveScriptContext:null,current_live_review:g.activeView==="live-summary"?g.liveReviewContext:null,referenced_documents:(Array.isArray(A)?A:[A].filter(Boolean)).map(S=>({title:S.title,text:(S.local_content||"").slice(0,Math.min(16e3,Math.floor(26e3/Math.max(1,Array.isArray(A)?A.length:1))))})),account_kpis:(g.kpis||[]).map(S=>({label:S.label,value:S.value,delta:S.delta})),recent_live:(g.liveSessions||[]).slice(0,8).map(S=>({date:S.d,title:S.title,views:S.view,peak:S.peak,gmv:S.gmv})),planned_content:(g.planningTasks||[]).slice(0,16).map(S=>({title:S.title,planned_at:S.planned_at,type:S.type}))})}function Nt(A){var S;(S=A.draft)!=null&&S.content&&localStorage.setItem("redcowork-replica-v2-latest-cue-script",JSON.stringify({...A.draft,document:A.knowledgeDocument||null}))}function St(){const A=g.chat.slice(0,-2).slice().reverse().find(S=>{var M,he;return!S.error&&(((M=S.draft)==null?void 0:M.content)||((he=S.artifacts)==null?void 0:he.some(ye=>ye.type==="script")))});if(A){const S=A.draft||{title:"Cue 生成脚本",content:A.text,type:"video"},M=A.knowledgeDocument;return M?{...S,title:M.title,content:M.local_content||S.content,document:M}:S}try{return JSON.parse(localStorage.getItem("redcowork-replica-v2-latest-cue-script")||"null")}catch{return null}}function pt(A){return A.document||g.demoKnowledgeDocuments.find(S=>S.title===A.title||S.local_content===A.content)}function _n(A){const S=pt(A);return(S?"@"+S.title+`

`:"")+((S==null?void 0:S.local_content)||A.content)}async function Sn(A,S){const M={query:"结构化数据查询",analysis:"指标分析",competitor:"竞品拆解",planning:"内容规划",schedule:"加入内容排期",hotspots:"热点规划"},he={role:"ai",text:"",routeLabel:M[S],traceMode:"思考过程",steps:[],sources:[]};g.chat.push(he);const ye=g.chat[g.chat.length-1];l.value=!0,fe();const Ze=performance.now();async function Be(Ke,de,be="实际执行"){const Fe={name:Ke,status:"running",execution:be,detail:""};ye.steps.push(Fe);const Pe=ye.steps.length-1;await zn(),fe();const _e=performance.now();try{const Ve=await de();Object.assign(ye.steps[Pe],{status:"done",detail:Ve,elapsed:Math.round(performance.now()-_e)})}catch(Ve){throw Object.assign(ye.steps[Pe],{status:"failed",detail:Ve.message}),Ve}}try{await Be("意图路由 · classify",()=>"本轮问题："+A+`
匹配任务：`+M[S]+"；打开的脚本不会覆盖本轮意图。");const Ke={query:"解析统计月份 → 读取增长明细 → 只读SQL汇总 → 交叉核对 → 汇总答案与引用",analysis:"读取9月话题归因表 → 汇总关注占比与归因关注 → 联网核验开学期背景 → 区分内部演示数据与外部事实 → 汇总答案与引用",competitor:"定位@文件 → 核验原片字幕 → 检索英语课程 → 拆解钩子/演示/交付 → 编写新稿并绑定引用",planning:"解析月份与直播目标 → 联网核验节点 → 检索课程与既有资料 → 调用直播脚本技能 → 整理完整产物",schedule:"解析上一份脚本 → 解析北京时间 → 写入排期 → 查询任务核验",hotspots:"拆解热点需求 → 联网搜索官方节点 → 核验来源日期 → 检索账号课程 → 形成选题建议"};await Be("任务规划 · planner",()=>Ke[S],"规则规划");let de;if(await Be("脚本工具 · load_case",async()=>{if(de=structuredClone(Ka),S==="query"){const be=await fetch("./business-data/metrics.json");if(!be.ok)throw new Error("增长数据读取失败");de.followers=await be.json()}return S==="query"?"载入用户增长明细口径；接下来执行SQL汇总。":"读取当前任务对应的内容产物与资料索引。"}),S==="schedule"){const be=q.value.find(Ve=>A.includes("@"+Ve.title)),Fe=be!=null&&be.local_content?{title:be.title,content:be.local_content,document:be,type:/直播/.test(A)?"live":"video"}:St();await Be("上下文工具 · resolve_artifact",()=>{if(!(Fe!=null&&Fe.content))throw new Error("还没有可引用的脚本。请先生成一份脚本，或 @ 选择知识库中的脚本文档。");return"引用最近生成的脚本："+Fe.title+"；保留完整正文。"});const Pe=dl();let _e;await Be("排期工具 · save_planning",async()=>{var Gt;const Ve={type:/直播/.test(A)?"live":Fe.type||"video",title:Fe.title,planned_at:Pe,notes:_n(Fe),document_id:(Gt=pt(Fe))==null?void 0:Gt.id};return _e=g.authUser?{...await Dl(Ve),created:!0}:tl(Ve),(_e.created?"创建任务":"已存在相同任务，跳过重复创建")+"；时间 "+Pe.replace("T"," ")+"（北京时间）；"+(g.authUser?"保存到账户排期。":"写入本地持久排期。")}),await Be("写入核验 · verify",()=>{if(!g.planningTasks.some(Ve=>Ve.id===_e.task.id))throw new Error("排期核验失败");return"任务 "+_e.task.id+" 已在排期列表，刷新后可恢复。"}),ye.text="已把《"+Fe.title+"》加入 "+Pe.slice(0,10)+`（下周二）20:00 的直播排期。

保存内容：完整直播脚本、直播类型、标题与时间。可在内容排期查看并修改。`,ye.planningId=_e.task.id}else{let be,Fe,Pe;if((S==="analysis"||S==="planning"||S==="hotspots")&&await Be("联网搜索 · websearch",async()=>{var Gt;const _e=S==="analysis"?"2026年9月 秋季开学 家长 适应期":"2026 10月 国庆 放假安排 收心",Ve=S==="analysis"?"./cue-scenarios/september-external.json":"./cue-scenarios/websearch.json";try{const Xt=await fetch("https://northstar-copilot.com/local-media/websearch?q="+encodeURIComponent(_e),{signal:AbortSignal.timeout(1e4)});if(!Xt.ok)throw new Error("实时搜索不可用");if(Pe=await Xt.json(),!((Gt=Pe.items)!=null&&Gt.length))throw new Error("实时搜索无结果")}catch(Xt){const $=await fetch(Ve);if(!$.ok)throw Xt;Pe=await $.json(),ye.steps[ye.steps.length-1].execution="已核验联网资料缓存"}return"查询："+Pe.query+`
来源：`+Pe.items.map(Xt=>Xt.title+`
`+Xt.uri).join(`
`)+`
读取方式：`+(Pe.mode==="live"?"本轮联网检索":"2026-10-10核验的官方资料缓存；不是实时热搜榜")}),S==="query"&&await Be("数据API · SQL_query",async()=>{const _e=await fetch("https://northstar-copilot.com/local-media/query?month="+de.followers.month);if(!_e.ok)return ye.steps[ye.steps.length-1].execution="已核验SQL计算结果","本轮SQL服务不可用，读取导入时已核验的30天统计："+JSON.stringify(de.followers);const Ve=await _e.json();if(Ve.result.days!==30||Ve.result.net!==de.followers.end-de.followers.start)throw new Error("SQL汇总与月末月初余额不一致");return Object.assign(de.followers,Ve.result),`只读SQLite查询：
`+Ve.sql+`
结果：`+JSON.stringify(Ve.result)}),S==="competitor"&&await Be("来源核验 · resolve_video",async()=>{const _e=await fetch("./demo-docs/雪梨老师-英语背单词开窍.txt");if(!_e.ok)throw new Error("引用的字幕文件不可读取");return await _e.text()}),await Be(S==="query"||S==="analysis"?"数据工具 · aggregate":"知识库工具 · retrieve",async()=>(await Ml(),S==="query"?(be=Qi(S,de,g.courseDocuments),"筛选 month="+de.followers.month+"；end-start="+(de.followers.end-de.followers.start)+"；follows-unfollows="+(de.followers.follows-de.followers.unfollows)+"。"):S==="analysis"?(await Ol(),de.topicAnalysis=g.businessDocuments.find(_e=>_e.id==="business-demo-2026-09-topic-attribution"),de.followerSource=g.businessDocuments.find(_e=>_e.title==="视频号关注者增长详情数据.csv"),be=Qi(S,de,g.courseDocuments),"读取经营数据 / "+de.topicAnalysis.title+"：5类话题、1,229次问题与评论提及、12条视频、1,269个内容归因新增关注；同时读取账号9月新增关注口径。"):S==="hotspots"?"按假期节点与账号教学方向检索课程原文；避免把月考日期当作统一全国日程。":S==="competitor"?"已读取用户上传的雪梨背单词录屏（5.35秒）：9月28日，第195集，一找二切三拼、先找元音、再找辅音。检索产品课程 / 英语原文；扩写与原片字幕分开展示。":"检索 产品课程 / 数学课程ppt.pptx：限时训练、错题整理与刷题方法；读取原文件提取正文。")),(S==="query"||S==="analysis")&&await Be("查知识库 · metric_definitions",async()=>{const _e=await fetch("./cue-scenarios/definitions.json");if(!_e.ok)throw new Error("指标口径资料读取失败");return Fe=await _e.json(),Fe.content}),be||(be=Qi(S,de,g.courseDocuments)),Fe){const _e=be.sources.length+1;be.sources.push({number:_e,title:Fe.title,locator:"知识口径文档",uri:"./cue-scenarios/definitions.json",text:Fe.content}),be.text+=`

统计口径依据：[`+_e+"]。"}if(Pe){const _e=[];for(const Ve of Pe.items.slice(0,S==="analysis"?2:1)){const Gt=be.sources.length+1;_e.push(Gt),be.sources.push({number:Gt,title:Ve.title,locator:Pe.mode==="live"?"本轮联网检索":"已核验官方资料缓存",uri:Ve.uri,text:Ve.text})}S==="planning"&&(be.text+=`

直播节点依据：[`+_e[0]+"]。"),S==="analysis"&&(be.text+=`

外部背景核验：教育部将开学前后界定为教学准备和心理状态调试期，相关报道也把开学第一个月视为适应期。这支持“开学适应”作为9月内容背景，但不用于证明内部31.4%的占比；该比例仍只来自演示归因表。`+_e.map(Ve=>"["+Ve+"]").join("、")+"。")}(S==="planning"||S==="competitor"||S==="hotspots")&&await Be("技能调用 · "+(S==="competitor"?"video_breakdown":S==="hotspots"?"topic_planning":"live_script"),()=>be.summary+`
输出组织：`+(S==="competitor"?"原片可核验内容、课程依据、新稿口播与镜头。":"目标、开场、方法、示范、互动与执行。"),"本地内容模板"),await Be("大模型 · summarize",()=>be.summary,"预设生成结果 · 未调用 HY3"),await Be("结果工具 · citations_and_artifact",()=>"绑定 "+be.sources.length+" 个引用；"+(be.draft?"生成完整直播脚本，可继续加入排期。":"输出与本轮任务对应的答案。")),Object.assign(ye,be),Nt(ye)}ye.elapsed=Math.round(performance.now()-Ze)}catch(Ke){ye.text=Ke.message,ye.error=!0}finally{l.value=!1,fe()}}const jt=K([]),ln=K(!1);async function $n(){if(!(ln.value||l.value||!jt.value.length)){ln.value=!0;try{for(;jt.value.length;){const A=jt.value.shift();try{await Ns(A.text,A.attachments,A.context)}catch(S){g.chat.push({role:"ai",error:!0,text:"任务执行失败："+S.message,sources:[],steps:[]})}}}finally{ln.value=!1}}}dt(l,A=>{A||zn($n)});function sn(A){const S=(A||s.value).trim()||(h.value.length?"请分析上传的资料":"");if(!S||C.value)return;const M=h.value.slice(),he=[...q.value.filter(ye=>S.includes("@"+ye.title)),...M.filter(ye=>ye.kind==="file")];jt.value.push({id:crypto.randomUUID(),text:S,attachments:M,context:Lt(he)}),h.value=[],s.value="",G.value=null,Se.value=!0,$n()}dt(()=>g.cueRequest,A=>{A!=null&&A.question&&(sn(A.question),g.cueRequest=null)});async function Ns(A,S,M){var Gt,Xt,$,b,ue,$e,Ge,ut;E.value=!1,oe.value=N.value?g.chat.length:null,N.value=!1,ve.value=0;const he=[...q.value.filter(k=>A.includes("@"+k.title)),...S.filter(k=>k.kind==="file")],ye=he[0],Ze=S.length?null:$v(A),Be=!!Ze;if(!Be){for(const k of he)if(!k.local_content&&/\.(txt|md)$/i.test(k.title||""))try{const Y=await fetch(k.uri||"./demo-docs/"+encodeURIComponent(k.title));if(Y.ok){const Oe=await Y.text();/^\s*<!doctype html/i.test(Oe)||(k.local_content=Oe)}}catch{}}if(he.length)try{const k=JSON.parse(M);k.referenced_documents=he.map(Y=>({title:Y.title,text:(Y.local_content||"").slice(0,16e3)})),M=JSON.stringify(k)}catch{}const Ke=he.reduce((k,Y)=>k.replaceAll("@"+Y.title,""),A).trim(),de=/上一场|上场|对比/.test(Ke)?1:/SOP|沉淀|话术.*流程/i.test(Ke)?3:/风险|掉人|下滑/.test(Ke)?4:/画面|光线|服装/.test(Ke)?2:/总结|概括|内容摘要/.test(Ke)?0:-1,be=/时长|播了多久|直播多久|多长时间/.test(Ke)?["直播时长","raw_duration"]:/观看人数|多少人看/.test(Ke)?["观看人数","view"]:/峰值|最高在线/.test(Ke)?["最高在线人数","peak"]:/成交额|成交金额|GMV/i.test(Ke)?["成交金额","gmv"]:null,Fe=de>=0?qe[de]:Ke,Pe=Ze||oo(A),_e=g.chat.slice(-10).filter(k=>!k.error).map(k=>({role:k.role==="user"?"user":"assistant",content:(k.text||"").slice(0,4e3)}));if(g.chat.push({role:"user",text:A,attachments:S.map(k=>({title:k.title,kind:k.kind})),mentionedDoc:ye==null?void 0:ye.title,mentionedDocs:he.map(k=>k.title)}),g.activeView==="live-script"&&Il.includes(A)&&!S.length){let k;try{k=JSON.parse(M).current_live_script}catch{}const Y=k2(A,k);if(Y!=null&&Y.schedule){l.value=!0;try{const Oe={type:"live",title:Y.title,planned_at:dl(),notes:Y.content},ft=g.authUser?await Dl(Oe):tl(Oe);if(!((Gt=ft.task)!=null&&Gt.id)||!g.planningTasks.some(Ft=>Ft.id===ft.task.id))throw new Error("未确认任务写入，请检查排期列表");g.chat.push({role:"ai",text:(ft.local?"云端暂未同步，已在本地保存《":"已将《")+Y.title+"》加入 "+Oe.planned_at.replace("T"," ")+"（北京时间）的直播排期。请到内容排期核对。",planningId:ft.task.id,routeLabel:"加入内容排期",sources:[Y.source],steps:[{name:"读取当前直播脚本",status:"done",detail:Y.title},{name:"保存并核对排期任务",status:"done",detail:ft.task.id}]})}catch(Oe){g.chat.push({role:"ai",error:!0,text:"排期未完成："+Oe.message,steps:[],sources:[Y.source]})}finally{l.value=!1}}else Y&&(g.chat.push({role:"ai",...Y}),Nt(Y));fe();return}if(g.activeView==="live-summary"&&de>=0&&!he.length&&!S.length){let k;try{k=JSON.parse(M).current_live_review}catch{}const Y=k==null?void 0:k.session;let Oe="请先选择一场直播。";if(Y){const At="当前复盘："+Y.d+" · "+Y.title+`。

`,It=((Xt=Y.visual)==null?void 0:Xt.replay_frames)||[];if(Fe===qe[0]){const gt=((($=k.review)==null?void 0:$.script)||[]).map(rn=>rn.k+"："+rn.v).join(`
`);Oe=At+`**经营表现**
观看人数：`+Y.view+"；在线峰值："+Y.peak+"；成交金额："+Y.gmv+`。[1]

**本场内容与关键节点**
`+(gt||"本场主题："+Y.title+"。")+`

`+(It.length?It.map(rn=>"### "+rn.label+`
话题：`+rn.topic+`
`+(rn.quote?"已记录话术：“"+rn.quote+`”
`:"")+rn.analysis).join(`

`):"尚未绑定完整逐字稿或关键画面，不能仅凭经营表格还原所有讲解。")+`

**下一场可执行建议**
`+(It.length?"保留有明确阶段判断的方法讲解；用真实评论承接互动；缩短连续讲解，在卡点插入理解检查。":"补充逐字稿或关键截图后，核对表现变化附近的话题和互动。")+`

说明：节点是回看线索，不直接证明成交或掉人原因。在线曲线截图估读与原报表峰值应区分口径。`}else if(Fe===qe[1]){const gt=g.liveSessions.filter(Yt=>Yt.d<Y.d).sort((Yt,an)=>an.d.localeCompare(Yt.d))[0],rn=Yt=>Yt==null||String(Yt).trim()===""?null:Number(String(Yt).replace(/[^\d.-]/g,"")),zi=(Yt,an)=>{const xs=rn(Y[an]),Pn=rn(gt[an]);if(!Number.isFinite(xs)||!Number.isFinite(Pn))return Yt+"：本场 "+(Y[an]??"未记录")+"；上一场 "+(gt[an]??"未记录")+"，缺失数据暂不计算变化。";const yn=xs-Pn;return Yt+"："+Pn.toLocaleString()+" → "+xs.toLocaleString()+"，"+(yn>0?"增加 ":yn<0?"减少 ":"持平 ")+Math.abs(yn).toLocaleString()+(Pn?"（"+(yn>0?"+":"")+(yn/Pn*100).toFixed(1)+"%）":"（上一场为0，不计算增长率）")};Oe=At+(gt?"对比上一场："+gt.d+" · "+gt.title+`。

`+[["观看人数","view"],["在线峰值","peak"],["成交金额（元）","gmv"]].map(([Yt,an])=>zi(Yt,an)).join(`
`)+`

以上为逐场数据对比，指标变化需要结合两场话题与直播时长进一步判断。`:"暂无更早场次，无法进行上一场对比。")}else Fe===qe[2]?Oe=At+(It.length?"已绑定本场关键画面："+It.map(gt=>gt.label+"；话题："+gt.topic).join(`
`)+`

画面采用正面书桌口播、暖色背景和纸笔道具，重点信息位于顶部；建议在手机预览中检查字幕与福利提示的遮挡。`:"这场尚未提供可核验的回放画面，请先补充本场截图。"):Fe===qe[3]?Oe=At+It.filter(gt=>gt.kind!=="audience_drop").map(gt=>gt.label+`
`+(gt.quote?"金句：“"+gt.quote+`”
`:"")+gt.analysis).join(`

`)+`

建议 SOP：提出具体学习问题 → 给出阶段判断和金句 → 回应观众问题 → 匹配产品内容 → 自然介绍适用范围 → 直播后核验成交与留存。`:Oe=At+(((b=It.find(gt=>gt.kind==="audience_drop"))==null?void 0:b.analysis)||"本场没有绑定风险节点证据，暂无法判断具体掉人原因。")}const ft=Fe===qe[3];ft&&(r.value="creative");const Ft=Y?[{number:1,title:Y.d+" 直播数据与复盘记录",locator:"当前选中场次",uri:Y.source_uri,text:"观看 "+Y.view+"；在线峰值 "+Y.peak+"；成交 "+Y.gmv},...(((ue=Y.visual)==null?void 0:ue.replay_frames)||[]).map((At,It)=>({number:It+2,title:At.label,locator:"用户提供的本场截图",uri:At.url,text:At.topic+"；"+(At.quote||"")+"；"+At.analysis}))]:[];if(Fe===qe[1]&&Y){const At=g.liveSessions.filter(It=>It.d<Y.d).sort((It,gt)=>gt.d.localeCompare(It.d))[0];At&&Ft.push({number:Ft.length+1,title:At.d+" 上一场直播数据",locator:"上一场对比依据",uri:At.source_uri,text:"观看 "+At.view+"；峰值 "+At.peak+"；成交 "+At.gmv})}g.chat.push({role:"ai",text:Oe,routeLabel:ft?"创意 · SOP方案":"直播复盘分析",sources:Ft,artifacts:ft?[{type:"script",label:"查看完整 SOP"},{type:"document",label:"加入知识库"}]:[],draft:ft?{title:(Y==null?void 0:Y.d)+" 直播互动与自然塑品 SOP",content:Oe,type:"document"}:void 0,steps:[{name:"场次定位 · resolve_session",status:"done",execution:"本地执行",detail:Y?Y.d+" · "+Y.title:"未选择场次"},{name:Fe===qe[1]?"逐场指标计算 · compare":"复盘资料读取 · retrieve",status:"done",execution:"本地执行",detail:Fe===qe[1]?"按日期查找前一场，比较观看人数、在线峰值和成交金额；上一场为0时不计算增长率。":"读取当前场次复盘文本和已绑定截图节点。"},{name:"结果组织 · summarize",status:"done",execution:"本地模板 · 未调用模型",detail:"依据本场资料组织回答，保留缺失数据和统计口径说明。"}]}),fe();return}if(/请详细分析清华优优与.+的竞品差异/.test(A)&&!S.length){const k=($e=A.match(/请详细分析清华优优与(.+?)的竞品差异/))==null?void 0:$e[1];if(k!=null&&k.includes("杨奇函")){r.value="analysis",g.chat.push({role:"ai",...qa()}),fe();return}const Y=M.competitor_comparison,Oe=((Ge=Y==null?void 0:Y.peer)==null?void 0:Ge.name)===k,ft=Oe?Y.content_structure:null;r.value="analysis",g.chat.push({role:"ai",routeLabel:"竞品分析",text:`## 清华优优 × ${k}：竞品差异与下一步

**建议优先测试“明确问题 → 方法演示 → 可执行清单”，用家长配合与直播答疑形成自己的内容路径。**

### 资料事实与边界
清华优优在工作台中的定位是高中学习方法、家长沟通与直播答疑。${Oe?"当前对比页的数据为演示资料，不能作为已核验的真实经营成绩。":"当前没有与该账号名称一致的完整对比资料；不套用其他账号的数据或履历。"}
${Oe?Y.comparison.map(Ft=>`- ${Ft[0]}：清华优优 ${Ft[1]}；${k} ${Ft[3]}（演示数据）`).join(`
`):""}

### 内容结构与可借鉴方法
${ft?`当前页面展示：清华优优采用“${ft.own}”；对标示例采用“${ft.peer}”。这是页面示例结构，仍需原片核验。`:"尚未核验该账号原片，不推断其具体话术、镜头或转化链路。"}
建议一条内容只解决一个具体卡点，用例题或任务卡演示方法，再用评论问题引出直播答疑。

### 差异化机会
把学生学习方法延展为“家长怎样配合”的第二视角：学生得到练习步骤，家长得到提问与检查方法。此结论为策略建议，需发布后验证。

### 下一步选题与排期草案
- 第一周：《月考后先抓住这三个失分点》，交付错题分类卡；直播做案例诊断。
- 第二周：《订正后为什么还会错》，展示一次同类回测；直播答疑常见卡点。
- 第三周：《家长检查作业该问什么》，交付三句提问；直播演示沟通。
- 第四周：复盘前三周的播放、关注转化与评论问题，选择有效结构继续迭代。

这些是可编辑建议，尚未写入排期。真实粉丝数、实时互动率与成交数据未核验。`,sources:Oe?[{number:1,title:`清华优优 vs ${k}｜当前对比资料`,locator:"工作台演示资料",text:Y.data_note}]:[],steps:[{name:"核对当前对标账号",status:"done",detail:k},{name:"整理对比资料与来源边界",status:"done",detail:Oe?"使用当前页面对比快照；标记演示数据。":"账号资料不足，不套用其他账号。"},{name:"输出内容与行动建议",status:"done",detail:"返回预先整理的示例方案，未实时调用大模型。"}],artifacts:[{type:"document",label:"加入知识库"},{type:"planning",label:"加入内容排期"}]}),fe();return}if(/杨奇函/.test(A)&&/竞品|对比|差异|分析/.test(A)&&!S.length){r.value="analysis",g.chat.push({role:"ai",...qa()}),fe();return}if(Be){if(r.value=Ct[Pe]||"analysis",Pe==="schedule"){await Sn(A,Pe);return}performance.now();const k=Qi(Pe,{...Ka,followers:kv},[...g.courseDocuments,...rv]);if(k){if(Pe==="query"||Pe==="analysis"){const ft=k.sources.length+1;k.sources.push({number:ft,title:Ga.title,locator:"预置指标口径",uri:"./cue-scenarios/definitions.json",text:Ga.content}),k.text+=`

统计口径依据：[`+ft+"]。"}const Y={query:"结构化数据查询",analysis:"指标分析",competitor:"竞品拆解",planning:"内容规划"},Oe={role:"ai",...k,routeLabel:Y[Pe],traceMode:"思考过程",steps:[{name:"识别问题与任务",status:"done",execution:"规则匹配",detail:"匹配固定示例问题，选择"+Y[Pe]+"流程。"},{name:"定位资料与课程原文",status:"done",execution:"读取已解析资料快照",detail:k.sources.map(ft=>ft.title+" · "+ft.locator).join(`
`)},{name:"整理分析与产物",status:"done",execution:"预设流程摘要",detail:k.summary+"；本轮复用已有结果，未重新调用模型或联网检索。"},{name:"绑定引用与后续操作",status:"done",execution:"结果整理",detail:"保留"+k.sources.length+"个来源及对应知识库、脚本或排期入口。"}]};g.chat.push(Oe),Nt(Oe),fe();return}}l.value=!0,fe(),l.value=!0;try{const k=await qd(Ke,g.activeView);r.value=k.mode}catch{r.value=Pe?Ct[Pe]:"analysis"}finally{l.value=!1}if(t.value&&!S.length){if(g.activeView==="live-summary"&&be&&de<0&&!he.length){const Y=(ut=g.liveReviewContext)==null?void 0:ut.session,Oe=(Y==null?void 0:Y[be[1]])??(be[1]==="raw_duration"?Y==null?void 0:Y.dur:void 0);g.chat.push({role:"ai",routeLabel:"直播指标查询",text:Y?"**本场"+be[0]+"："+(Oe??"未记录")+`。**

`+Y.d+" · "+Y.title:"请先选择一场直播。",sources:Y?[{number:1,title:"视频号直播历史数据.csv",locator:"第 "+Y.source_page+" 行 · "+be[0],uri:Y.source_uri,text:be[0]+"："+(Oe??"未记录")}]:[],steps:[{name:"定位当前场次",status:"done",detail:(Y==null?void 0:Y.d)||"未选择场次"},{name:"读取报表对应字段",status:"done",detail:be[0]+"；不套用内容总结模板"}]}),fe();return}if(bt.value&&/^优化当前脚本/.test(A)){const Y=O2(g.scriptContext);if(Y){r.value="creative",g.chat.push({role:"ai",...Y}),Nt(Y),fe();return}}const k=oo(Ke);if(k&&!he.length&&(jl.includes(A)||k==="schedule")){await Sn(A,k);return}}const Ve={question:A,context:M,history:_e,options:{mode:r.value==="planning"?"creative":r.value,conversation_id:a.value,document_ids:he.filter(k=>!S.includes(k)).map(k=>k.id).slice(0,20),images:S.filter(k=>k.kind==="image").map(k=>({title:k.title,url:k.image}))}};l.value=!0,fe();try{const k=await(g.authUser?aa:ua)(A,Ve.context,_e,Ve.options);/竞品差异/.test(A)&&(k.artifacts=[{type:"document",label:"加入知识库"},{type:"planning",label:"加入内容排期"}]),a.value=k.conversation_id||a.value,g.chat.push({role:"ai",text:k.answer,chart:k.chart,route:k.route,routeLabel:k.route_label||W[k.route],sources:k.sources||[],steps:k.steps||[],artifacts:k.artifacts||[],traceMode:"服务端执行记录"}),await xe()}catch(k){g.chat.push({role:"ai",text:"Cue 暂时无法回答："+(k.message||"请稍后重试"),error:!0,canContinue:!!k.canContinue,resumeRequest:Ve,sources:he.map((Y,Oe)=>({number:Oe+1,title:Y.title,locator:"本轮指定资料 · 请求失败，尚未完成分析",uri:Y.uri,text:"引用已保留，可点击重新生成重试。"})),steps:[{name:"请求模型回答",status:"failed",detail:k.message||"连接失败；没有生成结论"}]})}finally{l.value=!1,fe()}}function Gn(A){const S=Je.value;S&&(s.value=s.value.slice(0,S.start)+"@"+A.title+" "+s.value.slice(S.end),G.value=A,me.value=S.start+A.title.length+2,Se.value=!0,zn(()=>{var M,he;(M=z.value)==null||M.focus(),(he=z.value)==null||he.setSelectionRange(me.value,me.value)}))}function Fs(A){var S;s.value=s.value.replace("@"+A.title,""),((S=G.value)==null?void 0:S.id)===A.id&&(G.value=null),me.value=Math.min(me.value,s.value.length)}function ws(){if(!H.value)return;const A=URL.createObjectURL(new Blob([H.value.content],{type:"text/markdown;charset=utf-8"})),S=document.createElement("a");S.href=A,S.download=H.value.title+".md",S.click(),URL.revokeObjectURL(A)}async function ks(A,S){var ye,Ze,Be,Ke,de,be,Fe;if(S==="script"&&((ye=A.draft)==null?void 0:ye.type)==="document"){H.value={title:A.draft.title,content:A.draft.content,message:A,spaceId:((Ze=F.value[0])==null?void 0:Ze.id)||"",saved:!1};return}if(S==="document"){g.knowledgeSaveDraft={title:((Be=A.draft)==null?void 0:Be.title)||"Cue 分析",content:((Ke=A.draft)==null?void 0:Ke.content)||A.text,subspace:"内容生产",onSaved:Pe=>{A.knowledgeDocument=Pe,Nt(A),xe()}};return}if(!g.authUser&&S==="planning"){tl({type:"video",title:"竞品分析后续选题",planned_at:dl(),notes:A.text}),A.artifactNotice="已加入内容排期，可继续编辑。",g.activeView="planning";return}if(S!=="script"&&!Ie())return;const M=((de=A.draft)==null?void 0:de.title)||`${S==="script"?"脚本":S==="planning"?"排期":"分析文档"} · ${new Date().toLocaleDateString("zh-CN")}`,he=((be=A.draft)==null?void 0:be.content)||A.text;if(S==="script"){H.value={title:M,content:he,message:A,spaceId:((Fe=F.value[0])==null?void 0:Fe.id)||"",saved:!1};return}try{const Pe=await Wd({conversation_id:a.value,title:M,artifact_type:S,content:he,sources:A.sources||[],save_to_knowledge:S==="document"||S==="script"});S==="planning"&&Pe.task&&(Array.isArray(g.planningTasks)||(g.planningTasks=[]),g.planningTasks.push(Pe.task),g.activeView="planning",A.artifactNotice="已加入未来四周内容排期，可在甘特图中继续修改。"),S==="document"&&Pe.document&&(g.activeView="wiki",A.artifactNotice="已保存到知识库。")}catch(Pe){A.artifactNotice="保存失败："+(Pe.message||"请稍后重试")}}async function Xn(){if(!(!H.value||H.value.saved)){const A=H.value;g.knowledgeSaveDraft={title:A.title,content:A.content,subspace:"短视频脚本",onSaved:S=>{A.message.knowledgeDocument=S,Nt(A.message),A.saved=!0,A.message.artifactNotice="已保存到知识库。"}};return}}async function us(){if(!Ie())return;const A=s.value.trim()||"每周扫描教育类竞品公开内容，识别高潜选题并生成适合清华优优的脚本草稿";try{await Hd({title:"每周竞品爆款监控",prompt:A,cadence:"每周一 09:00"}),s.value="",await xe(),c.value="tasks"}catch{}}function Bt(){if(!g.authUser){u.value=ie();const A=u.value.find(S=>S.id===localStorage.getItem("redcowork-replica-v2-cue-active-chat"));A&&!g.chat.some(S=>S.role==="user")&&(te=!0,a.value=A.id,r.value=A.mode,g.chat=A.messages,te=!1)}xt(),xe()}return ei(Bt),dt(()=>{var A;return(A=g.authUser)==null?void 0:A.id},()=>{a.value=null,g.chat=[],Bt()}),(A,S)=>(d(),f("aside",{class:we(["copilot-panel",{collapsed:!se(g).copilotOpen&&!n.mobile,mobile:n.mobile}])},[n.mobile?V("",!0):(d(),f(X,{key:0},[o("div",{class:"cp-toggle",onClick:S[0]||(S[0]=M=>se(g).copilotOpen=!se(g).copilotOpen)},v(se(g).copilotOpen?"◀":"▶"),1),S[20]||(S[20]=o("div",{class:"cp-collapsed-bar"},[o("span",{class:"vt"},"Cue · 分析与规划")],-1))],64)),o("div",Cv,[o("div",Tv,[S[21]||(S[21]=o("div",null,[o("span",{class:"badge"},"✦"),o("b",null,"Cue")],-1)),o("div",null,[o("button",{onClick:je,disabled:l.value,title:l.value?"正在生成回答":"新建会话","aria-label":"新建会话"},"＋",8,Av),o("button",{onClick:S[1]||(S[1]=M=>c.value=c.value==="history"?"":"history")},"会话"),o("button",{onClick:S[2]||(S[2]=M=>c.value=c.value==="tasks"?"":"tasks")},"任务")])]),o("div",Ev,[(d(),f(X,null,le(We,M=>o("button",{key:M[0],class:we({active:r.value===M[0]}),onClick:he=>r.value=M[0]},v(M[1]),11,Dv)),64))]),c.value==="history"?(d(),f("div",Mv,[o("header",null,[S[22]||(S[22]=o("b",null,"历史会话",-1)),o("button",{onClick:S[3]||(S[3]=M=>c.value="")},"×")]),(d(!0),f(X,null,le(u.value,M=>(d(),f("button",{key:M.id,class:"cue-list",onClick:he=>kt(M.id)},[o("b",null,v(M.title),1),o("small",null,v(M.mode)+" · "+v(M.message_count)+" 条",1)],8,Ov))),128)),u.value.length?V("",!0):(d(),f("p",Iv,"暂无历史会话"))])):V("",!0),c.value==="tasks"?(d(),f("div",Rv,[o("header",null,[S[23]||(S[23]=o("b",null,"定时任务",-1)),o("button",{onClick:S[4]||(S[4]=M=>c.value="")},"×")]),o("button",{class:"task-create",onClick:us},"＋ 创建每周竞品监控"),(d(!0),f(X,null,le(p.value,M=>(d(),f("article",{key:M.id},[o("b",null,v(M.title),1),o("small",null,v(M.cadence)+" · "+v(M.status),1),o("p",null,v(M.prompt),1)]))),128))])):V("",!0),H.value?(d(),f("div",Pv,[o("header",null,[o("div",null,[o("small",null,"MARKDOWN SCRIPT · "+v(H.value.saved?"已保存到知识库":"预览草稿"),1),Qe(o("input",{"onUpdate:modelValue":S[5]||(S[5]=M=>H.value.title=M),"aria-label":"文件名称"},null,512),[[_t,H.value.title]])]),o("button",{onClick:S[6]||(S[6]=M=>H.value=null)},"×")]),o("pre",null,v(H.value.content),1),H.value.error?(d(),f("p",Lv,v(H.value.error),1)):V("",!0),o("footer",null,[o("button",{disabled:H.value.saved,onClick:Xn},v(H.value.saved?"已加入知识库":"加入知识库"),9,Nv),H.value.saved?(d(),f("button",{key:0,onClick:S[7]||(S[7]=M=>{se(g).activeView="wiki",H.value=null})},"查看知识库")):V("",!0),o("button",{onClick:S[8]||(S[8]=M=>ks(H.value.message,"planning"))},"加入内容排期"),o("button",{class:"download",onClick:ws},"下载 .md")])])):(d(),f("div",{key:3,class:"cp-body",ref_key:"bodyEl",ref:i},[(d(!0),f(X,null,le(se(g).chat,(M,he)=>{var ye,Ze,Be,Ke;return d(),f("div",{key:he,"data-message-index":he,class:we(["cp-msg",M.role])},[o("div",zv,v(M.role==="user"?"你":"Cue"),1),M.routeLabel?(d(),f("div",Uv,v(M.routeLabel),1)):V("",!0),M.role!=="user"?(d(),f("details",jv,[o("summary",null,[Te(v("思考过程")+" · "+v(ze(M).length)+" 步",1),M.elapsed!==void 0?(d(),f("span",Bv," · "+v(M.elapsed)+" ms",1)):V("",!0)]),o("ol",null,[(d(!0),f(X,null,le(ze(M),(de,be)=>(d(),f("li",{key:be},[o("span",null,v(de.status==="running"?"◌":de.status==="failed"?"!":"✓"),1),o("div",null,[o("b",null,v(be+1)+". "+v(de.name),1),de.execution?(d(),f("small",Vv,[Te(v(de.execution),1),de.elapsed!==void 0?(d(),f(X,{key:0},[Te(" · "+v(de.elapsed)+" ms",1)],64)):V("",!0)])):V("",!0),de.detail?(d(),f("details",Hv,[S[24]||(S[24]=o("summary",null,"输入与结果",-1)),o("p",null,v(mt(de.detail)),1)])):V("",!0)])]))),128))])])):V("",!0),o("div",{class:we(["bubble",{"cue-error":M.error}])},[M.role==="user"?(d(!0),f(X,{key:0},le(Ee(M),(de,be)=>(d(),f(X,{key:be},[de.title?(d(),f("span",Wv,"▤ @"+v(de.title),1)):(d(),f(X,{key:1},[Te(v(de.text),1)],64))],64))),128)):(d(),f(X,{key:1},[st(D2,{chart:M.chart||((Ze=(ye=M.steps)==null?void 0:ye.find(de=>de.chart))==null?void 0:Ze.chart)},null,8,["chart"]),st(Kf,{text:wt(M)},null,8,["text"])],64))],2),M.planningId?(d(),f("button",{key:2,class:"trace-plan-link",onClick:S[9]||(S[9]=de=>se(g).activeView="planning")},"查看直播排期 →")):V("",!0),M.role!=="user"?(d(),f("details",qv,[o("summary",null,"使用资料来源 · "+v(Mt(M).length),1),(d(!0),f(X,null,le(Mt(M),de=>(d(),f("article",{key:de.chunk_id||de.number},[o("b",{title:de.title+" · "+(de.locator||"")},"["+v(de.number)+"] "+v(de.title)+" · "+v(de.locator),9,Kv),o("p",null,v(de.text),1),Z(de)?(d(),f("button",{key:0,class:"knowledge-source-link",onClick:be=>B(de)},"查看知识库文档 ↗",8,Gv)):de.uri?(d(),f("a",{key:1,class:we({"web-source-card":de.web}),href:de.uri,target:"_blank",rel:"noopener"},v(de.web?"↗ 查看联网资料 · "+de.title:"打开引用原文件 ↗"),11,Xv)):V("",!0)]))),128)),Mt(M).length?V("",!0):(d(),f("p",Yv,"本条回答未提供可核验的资料引用。"))])):V("",!0),(Be=M.attachments)!=null&&Be.length?(d(),f("div",Jv,[(d(!0),f(X,null,le(M.attachments,(de,be)=>(d(),f("span",{key:be},v(de.kind==="image"?"▧":"▤")+" "+v(de.title),1))),128))])):V("",!0),M.canContinue?(d(),f("button",{key:5,class:"continue-answer",disabled:l.value,onClick:de=>w(M)},v(l.value?"处理中…":"继续"),9,Zv)):V("",!0),o("div",Qv,[o("button",{onClick:de=>P(M),title:"复制","aria-label":"复制"},[st(se(tv),{size:16})],8,eh),M.role==="ai"?(d(),f(X,{key:0},[o("button",{disabled:l.value||!se(g).chat.slice(0,he).some(de=>de.role==="user"),onClick:de=>T(he),title:"重新生成","aria-label":"重新生成"},[st(se(sv),{size:16})],8,th),o("button",{class:we({chosen:Ue.value[x(M)]==="up"}),"aria-pressed":Ue.value[x(M)]==="up",onClick:de=>y(M,"up"),title:"点赞","aria-label":"点赞"},[st(se(ov),{size:16})],10,nh),o("button",{class:we({chosen:Ue.value[x(M)]==="down"}),"aria-pressed":Ue.value[x(M)]==="down",onClick:de=>y(M,"down"),title:"点踩","aria-label":"点踩"},[st(se(lv),{size:16})],10,sh),o("button",{onClick:de=>U(M),title:"分享","aria-label":"分享"},[st(se(iv),{size:16})],8,ih)],64)):V("",!0)]),M.role==="ai"&&((Ke=M.artifacts)!=null&&Ke.length)?(d(),f("div",oh,[(d(!0),f(X,null,le(M.artifacts,de=>(d(),f("button",{key:de.type,onClick:be=>ks(M,de.type)},v(de.label),9,lh))),128))])):V("",!0),M.artifactNotice?(d(),f("p",rh,v(M.artifactNotice),1)):V("",!0)],10,Fv)}),128)),l.value?(d(),f("div",ah,"正在路由任务、调用资料并生成回答…")):V("",!0)],512)),se(g).chat.some(M=>M.role==="user")?(d(),f("div",uh,[o("button",{title:"回到底部","aria-label":"回到底部，查看最新消息",onClick:De},[st(se(Qf),{size:18})])])):V("",!0),ge.value?(d(),f("div",ch,v(ge.value),1)):V("",!0),o("div",dh,[bt.value?(d(),f("button",{key:0,class:"script-optimize",onClick:J},"优化当前脚本")):V("",!0),(d(!0),f(X,null,le(Tt.value,M=>(d(),f("button",{key:M,onClick:he=>ae(M)},v(M),9,ph))),128))]),jt.value.length?(d(),f("div",fh,[o("header",null,[o("b",null,"待发送 · "+v(jt.value.length),1),S[25]||(S[25]=o("small",null,"当前回答结束后依次发送",-1))]),(d(!0),f(X,null,le(jt.value,(M,he)=>(d(),f("div",{key:M.id},[o("span",null,[Te(v(he+1)+". "+v(M.text),1),M.attachments.length?(d(),f("small",vh," · "+v(M.attachments.length)+" 个附件",1)):V("",!0)]),o("button",{onClick:ye=>jt.value=jt.value.filter(Ze=>Ze.id!==M.id),"aria-label":"移除排队问题 "+(he+1)},"×",8,hh)]))),128))])):V("",!0),(d(!0),f(X,null,le(Ae.value,M=>(d(),f("div",{key:M.id,class:"mention-chip"},[Te("@ "+v(M.title)+" ",1),o("button",{onClick:he=>Fs(M),"aria-label":"移除引用 "+M.title},"×",8,mh)]))),128)),o("div",gh,[(d(!0),f(X,null,le(h.value,M=>(d(),f("span",{key:M.id},[M.image?(d(),f("img",{key:0,src:M.image,alt:"图片附件"},null,8,_h)):V("",!0),o("b",null,v(M.title),1),o("button",{onClick:he=>h.value=h.value.filter(ye=>ye.id!==M.id),"aria-label":"移除附件"},"×",8,yh)]))),128))]),O.value?(d(),f("p",bh,v(O.value),1)):V("",!0),o("input",{ref_key:"uploadEl",ref:m,type:"file",multiple:"",accept:"image/png,image/jpeg,image/webp,image/gif,image/bmp,.xlsx,.xls,.pptx,.ppt,.csv,.tsv,.md,.txt,.pdf,.docx,.srt,.vtt",hidden:"",onChange:R},null,544),o("div",{class:we(["composer-wrap",{dragging:I.value}]),onDragover:S[17]||(S[17]=vt(M=>I.value=!0,["prevent"])),onDragleave:S[18]||(S[18]=vt(M=>I.value=!1,["prevent"])),onDrop:S[19]||(S[19]=vt(M=>!C.value&&R(M),["prevent"]))},[o("div",wh,[Qe(o("textarea",{ref_key:"composerEl",ref:z,"onUpdate:modelValue":S[10]||(S[10]=M=>s.value=M),maxlength:"4000",rows:"2","aria-label":"Cue 问题输入框",placeholder:"输入问题，或拖拽图片和文件到这里；输入 @ 可引用知识库资料",onInput:et,onClick:et,onKeyup:et,onKeydown:[S[11]||(S[11]=Wn(M=>Se.value=!0,["esc"])),S[12]||(S[12]=Wn(vt(M=>Je.value?ke.value[0]&&Gn(ke.value[0]):sn(),["exact","prevent"]),["enter"]))]},null,544),[[_t,s.value]]),o("button",{class:"send",disabled:C.value||!s.value.trim()&&!h.value.length,title:l.value||ln.value?"加入待发送队列":"发送","aria-label":l.value||ln.value?"加入待发送队列":"发送",onClick:S[13]||(S[13]=M=>sn())},[l.value||ln.value?(d(),En(se(nv),{key:0,size:22})):(d(),En(se(ev),{key:1,size:23,"stroke-width":2.5}))],8,kh)]),o("div",xh,[o("button",{class:"attach-plus",disabled:C.value,onClick:S[14]||(S[14]=M=>E.value=!E.value),"aria-label":"上传附件","aria-expanded":E.value},"＋",8,Sh),C.value?(d(),f("small",$h,"解析附件中…")):V("",!0),E.value?(d(),f("div",Ch,[o("button",{onClick:S[15]||(S[15]=M=>ee(!0))},[...S[26]||(S[26]=[Te("上传图片 ",-1),o("small",null,"最多20张 · 每张20 MB",-1)])]),o("button",{onClick:S[16]||(S[16]=M=>ee(!1))},[...S[27]||(S[27]=[Te("上传文件 ",-1),o("small",null,"最多20个 · 每个500 MB",-1)])])])):V("",!0)]),Je.value?(d(),f("div",Th,[(d(!0),f(X,null,le(ke.value,M=>(d(),f("button",{key:M.id,onMousedown:vt(he=>Gn(M),["prevent"])},[o("b",null,v(M.title),1),o("small",null,v(M.subspace||"文档")+" · "+v(M.chunk_count||0)+" 段",1)],40,Ah))),128)),ke.value.length?V("",!0):(d(),f("p",Eh,"没有匹配的知识库文档"))])):V("",!0)],34)])],2))}},Ya=Dt(Dh,[["__scopeId","data-v-e2be308f"]]),Mh={class:"auth-card"},Oh={class:"auth-tabs"},Ih={class:"auth-field"},Rh={class:"auth-field"},Ph={key:0,class:"auth-field"},Lh={key:1,class:"auth-err"},Nh=["disabled"],Fh={__name:"LoginPanel",setup(e){const t=K("login"),n=K(""),s=K(""),i=K(""),l=K(""),r=K(!1);async function a(){if(!r.value){if(l.value="",!n.value.trim()||!s.value){l.value="请填写用户名和密码";return}r.value=!0;try{const p=t.value==="login"?await Sd(n.value.trim(),s.value):await $d(n.value.trim(),s.value,i.value.trim());n2(p)}catch(p){l.value=p.message||"操作失败"}finally{r.value=!1}}}function u(){g.loginOpen=!1}return(p,c)=>(d(),f("div",{class:"auth-mask",onClick:vt(u,["self"])},[o("div",Mh,[c[8]||(c[8]=o("div",{class:"auth-logo"},"✦ 北极星 NorthStar",-1)),c[9]||(c[9]=o("p",{class:"auth-sub"},"盯住那一颗星 · 登录后多账号数据隔离",-1)),o("div",Oh,[o("button",{class:we({on:t.value==="login"}),onClick:c[0]||(c[0]=h=>t.value="login")},"登录",2),o("button",{class:we({on:t.value==="register"}),onClick:c[1]||(c[1]=h=>t.value="register")},"注册",2)]),o("div",Ih,[c[5]||(c[5]=o("label",null,"用户名",-1)),Qe(o("input",{"onUpdate:modelValue":c[2]||(c[2]=h=>n.value=h),placeholder:"如 maggie",onKeydown:Wn(a,["enter"])},null,544),[[_t,n.value]])]),o("div",Rh,[c[6]||(c[6]=o("label",null,"密码",-1)),Qe(o("input",{"onUpdate:modelValue":c[3]||(c[3]=h=>s.value=h),type:"password",placeholder:"••••••••",onKeydown:Wn(a,["enter"])},null,544),[[_t,s.value]])]),t.value==="register"?(d(),f("div",Ph,[c[7]||(c[7]=o("label",null,"显示名（可选）",-1)),Qe(o("input",{"onUpdate:modelValue":c[4]||(c[4]=h=>i.value=h),placeholder:"昵称",onKeydown:Wn(a,["enter"])},null,544),[[_t,i.value]])])):V("",!0),l.value?(d(),f("p",Lh,v(l.value),1)):V("",!0),o("button",{class:"auth-btn primary",disabled:r.value,onClick:a},v(r.value?"请稍候…":t.value==="login"?"登录":"注册并登录"),9,Nh),o("button",{class:"auth-btn ghost",onClick:u},"以游客身份进入（仅浏览内容数据）")])]))}},zh=Dt(Fh,[["__scopeId","data-v-0814bac1"]]),Uh={class:"ch-card"},jh={class:"ch-head"},Bh={class:"ch-actions"},Vh=["onClick"],Hh={class:"ch-info"},Wh={class:"ch-name"},qh={class:"pill outline"},Kh={class:"ch-meta"},Gh={key:0,style:{"white-space":"pre-wrap","font-size":"13px"}},Xh=["onClick"],Yh={key:0,class:"ch-empty"},Jh={class:"ch-form"},Zh={class:"ch-field"},Qh={class:"ch-field"},em={class:"ch-field"},tm=["disabled"],nm={__name:"ChannelPanel",setup(e){const t=K("wechat"),n=K(""),s=K(""),i=K(""),l=K(!1),r={wechat:"视频号",xiaohongshu:"小红书"},a=ce(()=>g.channels.filter(h=>(h.platform||"wechat")===t.value));ei(Fo);async function u(){if(!l.value){l.value=!0;try{await o2(n.value,s.value,t.value,i.value)&&(n.value="",s.value="",i.value="")}finally{l.value=!1}}}function p(h){t.value=h,n.value="",s.value="",i.value=""}function c(h){window.confirm("解绑「"+h.name+"」？已导入的资料会保留。")&&l2(h.id)}return(h,m)=>(d(),f("div",{class:"ch-mask",onClick:m[5]||(m[5]=vt((...C)=>se(oi)&&se(oi)(...C),["self"]))},[o("div",Uh,[o("div",jh,[m[6]||(m[6]=o("div",null,[o("div",{class:"ch-eyebrow"},"NORTHSTAR ACCOUNTS"),o("div",{class:"ch-title"},"分平台管理账号"),o("p",{class:"ch-sub"},"登记账号资料，为内容经营建立清晰的来源。")],-1)),o("button",{class:"ch-close",onClick:m[0]||(m[0]=(...C)=>se(oi)&&se(oi)(...C))},"×")]),o("div",Bh,[(d(),f(X,null,le(r,(C,O)=>o("button",{key:O,class:"ch-sync",style:Rt(t.value===O?"background:#f6eaed;border-color:#a86979":""),onClick:E=>p(O)},v(C)+" · "+v(se(g).channels.filter(E=>(E.platform||"wechat")===O).length),13,Vh)),64))]),(d(!0),f(X,null,le(a.value,C=>(d(),f("div",{key:C.id,class:"ch-item"},[o("div",Hh,[o("div",Wh,[Te(v(C.name)+" ",1),o("span",qh,v(r[C.platform||"wechat"])+" · 已登记",1)]),o("div",Kh,v(C.finder_uin||"未填平台账号 ID"),1),C.profile?(d(),f("p",Gh,v(C.profile),1)):V("",!0)]),o("button",{class:"ch-unbind",onClick:O=>c(C)},"解绑",8,Xh)]))),128)),a.value.length?V("",!0):(d(),f("div",Yh,"尚未登记"+v(r[t.value])+"账号",1)),o("div",Jh,[o("div",Zh,[o("label",null,v(r[t.value])+"账号名称",1),Qe(o("input",{"onUpdate:modelValue":m[1]||(m[1]=C=>n.value=C),maxlength:"100",placeholder:"填写平台上的昵称"},null,512),[[_t,n.value]])]),o("div",Qh,[m[7]||(m[7]=o("label",null,"平台账号 ID（可选）",-1)),Qe(o("input",{"onUpdate:modelValue":m[2]||(m[2]=C=>s.value=C),placeholder:"填写视频号 ID 或小红书号"},null,512),[[_t,s.value]])]),o("div",em,[m[8]||(m[8]=o("label",null,"账号定位与目标（可选）",-1)),Qe(o("textarea",{"onUpdate:modelValue":m[3]||(m[3]=C=>i.value=C),class:"ch-textarea",maxlength:"2000",rows:"4",placeholder:"例如：家居博主，面向租房人群，希望提高收藏率；每周更新 3 条。"},null,512),[[_t,i.value]])]),o("button",{class:"ch-add",disabled:l.value||!n.value.trim(),onClick:u},v(l.value?"保存中…":"绑定"+r[t.value]+"账号"),9,tm)]),m[9]||(m[9]=o("p",{class:"ch-tip"},"绑定目前保存账号资料，不代表已授权连接平台后台。可从平台导出报表后导入；自动同步尚未验证。经营看板目前按 NorthStar 用户汇总，尚未按平台账号分开统计。",-1)),o("button",{class:"ch-sync",onClick:m[4]||(m[4]=C=>{se(oi)(),se(g).syncAssistantOpen=!0})},"查看报表导入入口")])]))}},sm=Dt(nm,[["__scopeId","data-v-ee400fc8"]]),im={class:"sa-card"},om={class:"sa-step"},lm={key:1,class:"qr"},rm=["src"],am={key:1},um={__name:"SyncAssistantPanel",setup(e){const t=K({login:{logged_in:!1},login_task:{running:!1},history_task:{status:"未开始"}}),n=K("");let s;async function i(){var r;if(t.value=await Dd(),(r=t.value.login_task)!=null&&r.running)try{const a=await Rd();n.value&&URL.revokeObjectURL(n.value),n.value=a}catch{}}ei(()=>{i(),s=setInterval(i,1800)}),Kn(()=>{clearInterval(s),n.value&&URL.revokeObjectURL(n.value)});const l=ce(()=>{var r;return(r=t.value.login_task)==null?void 0:r.running});return(r,a)=>(d(),f("div",{class:"sa-mask",onClick:a[2]||(a[2]=vt(u=>se(g).syncAssistantOpen=!1,["self"]))},[o("section",im,[o("header",null,[a[3]||(a[3]=o("div",null,[o("h2",null,"数据导入助手"),o("p",null,"当前不具备视频号官方数据接口权限，不能承诺自动同步历史短视频或下载视频文件。")],-1)),o("button",{onClick:a[0]||(a[0]=u=>se(g).syncAssistantOpen=!1)},"×")]),a[13]||(a[13]=o("div",{class:"sa-note"},[o("strong",null,"当前可用方式"),o("span",null,"从视频号后台导出 CSV / XLSX 后导入：直播场次、成交与收入会写入真实数据；短视频报表会写入已验证视频列表。视频画面仍需你提供本地文件或公开链接。")],-1)),o("div",om,[a[4]||(a[4]=o("b",null,"1",-1)),a[5]||(a[5]=o("div",null,[o("strong",null,"导入视频号后台报表"),o("span",null,"支持直播、商品、经营与短视频数据报表；无需扫码后再等待不确定的同步任务。")],-1)),o("button",{onClick:a[1]||(a[1]=u=>{se(g).syncAssistantOpen=!1,se(g).channelsOpen=!0})},"前往导入")]),V("",!0),l.value?(d(),f("div",lm,[n.value?(d(),f("img",{key:0,src:n.value,alt:"视频号登录二维码"},null,8,rm)):(d(),f("span",am,"正在生成二维码…")),a[8]||(a[8]=o("span",null,"请用微信扫一扫完成授权",-1))])):V("",!0),V("",!0),V("",!0),V("",!0),V("",!0),a[14]||(a[14]=o("div",{class:"sa-note"},[o("strong",null,"不会再做的事"),o("span",null,"不会再显示“逐场采集回放”任务，也不会使用占位封面冒充已同步视频。")],-1))])]))}},cm=Dt(um,[["__scopeId","data-v-09704b26"]]);function Dc(){return new Promise((e,t)=>{const n=indexedDB.open("redcowork-replica-v2-knowledge-files",1);n.onupgradeneeded=()=>n.result.createObjectStore("replacements",{keyPath:"id"}),n.onsuccess=()=>e(n.result),n.onerror=()=>t(n.error)})}async function Bl(e,t,n){const s=await Dc();try{await new Promise((i,l)=>{const r=s.transaction("replacements","readwrite");r.objectStore("replacements").put({id:e,file:t,parsed:n,title:t.name,file_type:t.type}),r.oncomplete=i,r.onerror=()=>l(r.error)})}finally{s.close()}}async function dm(){const e=await Dc();try{return await new Promise((t,n)=>{const s=e.transaction("replacements").objectStore("replacements").getAll();s.onsuccess=()=>t(s.result.map(i=>({...i.parsed,id:i.id,title:i.title,file_type:i.file_type,uri:URL.createObjectURL(i.file),parse_status:"completed",parse_error:""}))),s.onerror=()=>n(s.error)})}finally{e.close()}}const pm={class:"content-field"},fm={key:0,role:"alert"},vm=["disabled"],hm={__name:"KnowledgeSavePanel",setup(e){const t=K(!1),n=K(""),s=ce(()=>g.knowledgeSaveDraft),i=K({x:0,y:0}),l=K({w:430,h:520});let r=!1,a=!1,u=null;function p(E){E.target.closest("button,input,textarea,select")||(r=!0,u={x:E.clientX,y:E.clientY,px:i.value.x,py:i.value.y},window.addEventListener("pointermove",h),window.addEventListener("pointerup",m))}function c(E){E.preventDefault(),a=!0,u={x:E.clientX,y:E.clientY,w:l.value.w,h:l.value.h},window.addEventListener("pointermove",h),window.addEventListener("pointerup",m)}function h(E){r&&(i.value={x:u.px+E.clientX-u.x,y:u.py+E.clientY-u.y}),a&&(l.value={w:Math.max(360,u.w+E.clientX-u.x),h:Math.max(360,u.h+E.clientY-u.y)})}function m(){r=!1,a=!1,window.removeEventListener("pointermove",h),window.removeEventListener("pointerup",m)}function C(){g.knowledgeSaveDraft=null}async function O(){var I,ee;const E=s.value;if(!((I=E==null?void 0:E.title)!=null&&I.trim())||!((ee=E==null?void 0:E.content)!=null&&ee.trim()))return lt("请填写标题和内容");if(!t.value){t.value=!0,n.value="";try{let R;g.authUser?R={...await ac({title:E.title.trim(),text:E.content,source:"Cue 生成 · "+(E.subspace||"内容生产")}),subspace:E.subspace||"内容生产",local_content:E.content,parse_status:"completed"}:(R={id:`shared-save-${Date.now()}`,title:E.title.trim(),subspace:E.subspace||"短视频脚本",space_name:"清华优优 AI Wiki",doc_type:"document",chunk_count:1,analyzed:!1,local_content:E.content,parse_status:"completed"},await Bl(R.id,new File([R.local_content],R.title,{type:"text/plain"}),R)),g.demoKnowledgeDocuments.unshift(R),E.onSaved&&E.onSaved(R),lt(`《${E.title}》已保存到「${R.subspace}」`),C()}catch(R){n.value="保存失败："+R.message}finally{t.value=!1}}}return(E,I)=>s.value?(d(),f("section",{key:0,class:"knowledge-save-panel",style:Rt({transform:`translate(${i.value.x}px, ${i.value.y}px)`,width:`${l.value.w}px`,height:`${l.value.h}px`}),"aria-label":"保存到知识库"},[o("header",{onPointerdown:p},[I[3]||(I[3]=o("div",null,[o("span",null,"SAVE TO KNOWLEDGE"),o("h3",null,"保存到知识库"),o("small",null,"拖动此处移动卡片；右下角可调整大小")],-1)),o("button",{onClick:C},"×")],32),o("label",null,[I[4]||(I[4]=Te("标题",-1)),Qe(o("input",{"onUpdate:modelValue":I[0]||(I[0]=ee=>s.value.title=ee)},null,512),[[_t,s.value.title]])]),o("label",pm,[I[5]||(I[5]=Te("内容",-1)),Qe(o("textarea",{"onUpdate:modelValue":I[1]||(I[1]=ee=>s.value.content=ee)},null,512),[[_t,s.value.content]])]),o("label",null,[I[7]||(I[7]=Te("存入子库",-1)),Qe(o("select",{"onUpdate:modelValue":I[2]||(I[2]=ee=>s.value.subspace=ee)},[...I[6]||(I[6]=[o("option",null,"短视频脚本",-1),o("option",null,"直播复盘",-1),o("option",null,"内容生产",-1),o("option",null,"转化变现",-1),o("option",null,"竞品研究",-1)])],512),[[gs,s.value.subspace]])]),n.value?(d(),f("p",fm,v(n.value),1)):V("",!0),o("footer",null,[o("button",{onClick:C},"取消"),o("button",{class:"save",disabled:t.value,onClick:O},v(t.value?"保存中…":"保存"),9,vm)]),o("i",{class:"resize-handle",onPointerdown:c},null,32)],4)):V("",!0)}},mm=Dt(hm,[["__scopeId","data-v-96161c17"]]);function gm(e,t,n=0){const s=new Date(2026,8,1);s.setDate(s.getDate()-(s.getDay()+6)%7);const i=Math.round((s-t)/(7*864e5))-n*4;return e.map(l=>({...l,items:(l.items||[]).flatMap(r=>{const a=i+Number(r.s||0),u=i+Number(r.e??r.s??0);return u>=0&&a<4?[{...r,s:Math.max(0,a),e:Math.min(3,u),historical:!0}]:[]})}))}const _m={9:["开学收心与适应","新学期时间规划","家长沟通与自律","第一次月考准备"],10:["国庆后收心：三天找回节奏","月考错题：定位真正薄弱点","期中复习：两周计划","考前焦虑：家长怎样陪伴"],11:["期中复盘：试卷诊断","英语背词：拼读与间隔复习","数学卡题：条件到公式","月底自检：调整学习节奏"],12:["期末复习：知识清单","易错题：同类变式训练","考前时间：主科优先级","年度复盘：寒假目标"]};function Mc(e,t,n=0){return gm(e,t,n).map((i,l)=>{const r=[...i.items],a=l===0?[0,1,2,3]:l===1?[0,1,3]:l===2?[0,2,3]:[0,1,3];for(const u of a){const p=new Date(t.getFullYear(),t.getMonth(),t.getDate()+(n*4+u)*7);if(p<new Date(2026,9,1)||p>=new Date(2027,0,1))continue;const c=_m[p.getMonth()+1][Math.min(3,Math.floor((p.getDate()-1)/7))],h=c.split("：")[0],m=[c,h+"脚本",h+"（发布）",h+"专场",h+"开播"];r.push({name:m[l],s:u,e:l===2&&u===0?1:u,t:l===1?"draft":l>=3?"live":"video",notes:"内容生产计划草案。开场收集具体问题，结合知识库讲解一个可执行方法，结尾引导留言与答疑。"})}return{...i,items:r}})}const ym={class:"red-editorial-hero"},bm={class:"red-hero-copy"},wm={class:"actions-strip"},km={class:"tag"},xm={class:"title"},Sm={class:"num"},$m={class:"body"},Cm={class:"northstar"},Tm={class:"ns-head"},Am={class:"ns-label"},Em={class:"ns-value"},Dm={class:"ns-delta"},Mm={class:"ns-body"},Om={class:"ns-goal"},Im={class:"ns-bar"},Rm={class:"ns-switch"},Pm=["onClick"],Lm={class:"card"},Nm={class:"card-h"},Fm={class:"gantt"},zm={class:"gantt-head"},Um={class:"weeks"},jm={style:{"font-weight":"400","font-size":"11px",color:"var(--text-mute)"}},Bm={class:"lane"},Vm={class:"gantt-track"},Hm={class:"kpi-row"},Wm={class:"label"},qm={class:"value"},Km={class:"card"},Gm={class:"card-h"},Xm={style:{display:"flex",gap:"10px","align-items":"center"}},Ym={class:"sub"},Jm={class:"view-toggle"},Zm=["innerHTML"],Qm={key:1,class:"tbl-list"},eg={class:"n"},tg={class:"r n"},ng={class:"r"},sg={class:"r"},ig={style:{display:"grid","grid-template-columns":"1fr 1fr 1fr",gap:"16px","margin-bottom":"16px"}},og={class:"card-h"},lg={class:"view-toggle"},rg=["onClick"],ag=["onClick"],ug={class:"name"},cg={class:"bar"},dg={class:"val"},pg={key:1,class:"tbl-list"},fg={class:"n"},vg={class:"r n"},hg={class:"r"},mg={class:"r"},gg={class:"n",colspan:"2",style:{"font-weight":"600",background:"#FAFAFA"}},_g={class:"card"},yg={key:0,class:"video-grid"},bg={class:"thumb"},wg=["src","alt"],kg={class:"dur"},xg={class:"meta"},Sg={class:"title"},$g={class:"tag"},Cg={class:"stats"},Tg={key:1,class:"video-grid video-placeholders"},Ag={class:"thumb"},Eg=["alt"],Dg={class:"meta"},Mg={class:"title"},Og={__name:"DashboardView",setup(e){const t=ce(()=>{const Q=new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Shanghai",month:"numeric"}).format(new Date);return Number(Q)===10?[{num:1,tag:"下周",title:"下周该怎么做",body:"十月主线：国庆后恢复学习节奏、月考复盘与期中准备。优先从本月评论和直播提问中筛选痛点，再用播放、关注和留存数据验证选题。"},{num:2,tag:"下条",title:"下条视频怎么拍",body:"建议拍「月考后，先抓住这 3 个失分点」：区分知识漏洞、审题和计算失误，给出一周纠错安排。结尾邀请家长留言具体问题。"},{num:3,tag:"下场",title:"下场直播改什么话题",body:"建议讲「国庆后收心与期中备考」：先收集当前学习问题，再给出阶段判断与短步骤方法，穿插答疑。销售内容依据真实需求承接，直播后复盘留存与成交。"}]:g.actions||[]}),n=Rs({trend:"chart",portrait:{}}),s=Q=>n.portrait[Q]||"chart",i=ce(()=>g.northstar.find(Q=>Q.key===g.northStar)||g.northstar[0]||{}),l=ce(()=>Math.max(...g.trend.map(Q=>Q.v),1)),r=K(0),a=K(null);let u=!1;const p=ce(()=>{const Q=new Date,j=(Q.getDay()+6)%7;return new Date(Q.getFullYear(),Q.getMonth(),Q.getDate()-j)}),c=ce(()=>Array.from({length:12},(Q,j)=>{const D=new Date(p.value.getFullYear(),p.value.getMonth(),p.value.getDate()+j*7);return{t:j===0?"本周":`W${String(D.getMonth()+1).padStart(2,"0")}-${j+1}`,d:`${D.getMonth()+1}/${D.getDate()}`}}));function h(Q){return c.value.slice(Q*4,Q*4+4)}function m(Q){const j=new Date(String(Q.planned_at).replace(" ","T"));return Math.floor((new Date(j.getFullYear(),j.getMonth(),j.getDate())-p.value)/(7*864e5))}function C(Q){const j=Mc(g.gantt||[],p.value,Q);return g.planningTasks.forEach(D=>{const F=m(D)-Q*4,G=j[D.type==="live"?4:2];G&&F>=0&&F<4&&(G.items=G.items.filter(H=>!(H.s<=F&&H.e>=F)),G.items.push({name:D.title,s:F,e:F,t:D.type==="live"?"live":"video"}))}),j.map(D=>{const F=new Set;return{...D,items:D.items.filter(G=>{const H=Array.from({length:G.e-G.s+1},(q,me)=>G.s+me);return H.some(q=>F.has(q))?!1:(H.forEach(q=>F.add(q)),!0)})}})}function O(Q){r.value=Math.max(0,Math.min(2,r.value+Q))}function E(Q){Math.abs(Q.deltaX)<24||Math.abs(Q.deltaX)<Math.abs(Q.deltaY)||(Q.preventDefault(),!u&&(u=!0,O(Q.deltaX>0?1:-1),window.setTimeout(()=>{u=!1},280)))}function I(Q){var j;a.value=((j=Q.touches[0])==null?void 0:j.clientX)??null}function ee(Q){var D;if(a.value==null)return;const j=(((D=Q.changedTouches[0])==null?void 0:D.clientX)??a.value)-a.value;a.value=null,Math.abs(j)>=45&&O(j<0?1:-1)}function R(Q){const G=Math.max(...Q.map(ke=>ke.v))*1.15,H=ke=>28+ke*584/(Q.length-1),q=ke=>152-ke/G*124,me=Q.map((ke,Ae)=>`${H(Ae)},${q(ke.v)}`).join(" "),Se=`M${H(0)},152 L${me.split(" ").join(" L ")} L${H(Q.length-1)},152 Z`,et=[0,.25,.5,.75,1].map(ke=>`<line x1="28" x2="612" y1="${152-ke*124}" y2="${152-ke*124}" stroke="#F1F1ED"/>`).join(""),Je=Q.map((ke,Ae)=>`<circle cx="${H(Ae)}" cy="${q(ke.v)}" r="3.5" fill="#191919"/><text x="${H(Ae)}" y="168" font-size="11" text-anchor="middle" fill="#9BA0A6">${ke.d}</text><text x="${H(Ae)}" y="${q(ke.v)-8}" font-size="10" text-anchor="middle" fill="#5F6368">${ke.v}</text>`).join("");return`<svg viewBox="0 0 640 180" style="width:100%;height:180px">${et}<path d="${Se}" fill="#F4F4F1" fill-opacity=".9"/><polyline points="${me}" fill="none" stroke="#191919" stroke-width="2"/>${Je}</svg>`}function te(Q){const j=Math.max(...Q.data.map(D=>D[1]),1);return Q.data.map(D=>({...D,w:Math.max(4,D[1]/j*100)}))}function ie(Q){return Q.data.reduce((j,D)=>j+D[1],0)}return(Q,j)=>(d(),f("div",null,[o("section",ym,[o("div",bm,[j[9]||(j[9]=o("span",{class:"red-hero-eyebrow"},"小红书 × NORTHSTAR · 创作者工作台",-1)),j[10]||(j[10]=o("p",{class:"red-hero-kicker"},"你的下一步，从这里开始",-1)),j[11]||(j[11]=o("h2",null,[Te("好内容，"),o("br"),Te("每一场都有新方向。")],-1)),j[12]||(j[12]=o("p",{class:"red-hero-description"},[Te("把数据里的发现，变成下一次创作的灵感。"),o("br"),Te("和 Cue 一起，让每一份经验都值得被复用。")],-1)),o("button",{class:"red-hero-link",onClick:j[0]||(j[0]=D=>se(g).activeView="live-summary")},[...j[8]||(j[8]=[Te("去看看这场直播 ",-1),o("span",null,"↗",-1)])])]),j[13]||(j[13]=vo('<div class="red-hero-art" aria-hidden="true" data-v-4009d967><div class="red-orbit" data-v-4009d967></div><span class="red-spark" data-v-4009d967>✦</span><div class="red-editorial-note" data-v-4009d967><small data-v-4009d967>NORTHSTAR / CREATOR NOTES</small><strong data-v-4009d967>每一次<br data-v-4009d967>都有收获。</strong><div class="red-note-line" data-v-4009d967></div><span data-v-4009d967>复盘 · 灵感 · 下一步</span><i data-v-4009d967>Make your next move.</i></div><span class="red-edition" data-v-4009d967>01 / 内容经营新日常</span></div><div class="red-hero-watermark" aria-hidden="true" data-v-4009d967>NEXT MOVE</div>',2))]),o("div",wm,[(d(!0),f(X,null,le(t.value,D=>(d(),f("div",{key:D.num,class:"action-card"},[o("span",km,v(D.tag),1),o("div",xm,[o("span",Sm,v(D.num),1),Te(v(D.title),1)]),o("div",$m,v(D.body),1)]))),128))]),o("div",Cm,[o("div",Tm,[o("div",Am,"北极星指标 · "+v(i.value.label),1),o("div",Em,v(i.value.value),1),o("div",Dm,v(i.value.delta),1)]),o("div",Mm,[o("div",Om,[o("span",null,"目标 "+v(i.value.goal),1),o("span",null,"完成 "+v(i.value.pct)+"%",1)]),o("div",Im,[o("div",{class:"fill",style:Rt({width:i.value.pct+"%"})},null,4)])]),o("div",Rm,[(d(!0),f(X,null,le(se(g).northstar,D=>(d(),f("button",{key:D.key,class:we({on:D.key===se(g).northStar}),onClick:F=>se(g).northStar=D.key},v(D.label),11,Pm))),128))])]),o("div",Lm,[o("div",Nm,[j[14]||(j[14]=o("h3",null,"内容生产排期（未来 4 周）",-1)),o("a",{class:"sub",style:{cursor:"pointer"},onClick:j[1]||(j[1]=D=>se(g).activeView="planning")},"查看全量排期 ↗")]),o("div",{class:"gantt-carousel swipe-gantt home-gantt",onWheel:E,onTouchstart:I,onTouchend:ee},[o("div",{class:"gantt-slides",style:Rt({transform:`translateX(-${r.value*100}%)`})},[(d(),f(X,null,le(3,D=>o("div",{key:D,class:"gantt-slide"},[o("div",Fm,[o("div",zm,[j[15]||(j[15]=o("div",{class:"lane"},"生产任务",-1)),o("div",Um,[(d(!0),f(X,null,le(h(D-1),F=>(d(),f("div",{key:F.t,class:we(["w",{cur:F.t==="本周"}])},[o("div",null,v(F.t),1),o("div",jm,v(F.d),1)],2))),128))])]),(d(!0),f(X,null,le(C(D-1),F=>(d(),f("div",{key:F.lane,class:"gantt-row"},[o("div",Bm,v(F.lane),1),o("div",Vm,[(d(!0),f(X,null,le(F.items,(G,H)=>(d(),f("div",{key:`${G.name}-${H}`,class:we(["gantt-bar",G.t]),style:Rt({gridColumn:G.s+1+" / "+(G.e+2)})},v(G.name),7))),128))])]))),128))])])),64))],4)],32),j[16]||(j[16]=vo('<div class="gantt-legend" data-v-4009d967><span class="lg" data-v-4009d967><span class="sw" style="background:var(--green-deep);" data-v-4009d967></span>短视频</span><span class="lg" data-v-4009d967><span class="sw" style="background:var(--text);" data-v-4009d967></span>直播</span><span class="lg" data-v-4009d967><span class="sw" style="background:#C9CBC2;" data-v-4009d967></span>脚本筹备</span></div>',1))]),o("div",Hm,[(d(!0),f(X,null,le(se(g).kpis,D=>(d(),f("div",{key:D.label,class:"kpi"},[o("div",Wm,v(D.label),1),o("div",qm,v(D.value),1),o("div",{class:we(["delta",D.up?"up":D.warm?"warm":"down"])},v(D.delta),3)]))),128))]),o("div",Km,[o("div",Gm,[j[17]||(j[17]=o("h3",null,"近 7 日播放趋势",-1)),o("div",Xm,[o("span",Ym,"峰值 "+v(l.value)+" · 8/25",1),o("div",Jm,[o("button",{class:we({on:n.trend==="chart"}),onClick:j[2]||(j[2]=D=>n.trend="chart")},"图表",2),o("button",{class:we({on:n.trend==="list"}),onClick:j[3]||(j[3]=D=>n.trend="list")},"列表",2)])])]),n.trend==="chart"?(d(),f("div",{key:0,innerHTML:R(se(g).trend)},null,8,Zm)):(d(),f("table",Qm,[j[18]||(j[18]=o("thead",null,[o("tr",null,[o("th",null,"日期"),o("th",{class:"r"},"播放量"),o("th",{class:"r"},"占比"),o("th",{class:"r"},"热力")])],-1)),o("tbody",null,[(d(!0),f(X,null,le(se(g).trend,D=>(d(),f("tr",{key:D.d},[o("td",eg,v(D.d),1),o("td",tg,v(D.v.toLocaleString()),1),o("td",ng,v((D.v/l.value*100).toFixed(0))+"%",1),o("td",sg,v(D.v>=7500?"热":D.v>=6e3?"温":"冷"),1)]))),128))])]))]),o("div",ig,[(d(!0),f(X,null,le(se(g).portraits,D=>(d(),f("div",{key:D.title,class:"card"},[o("div",og,[o("h3",null,v(D.title),1),o("div",lg,[o("button",{class:we({on:s(D.title)==="chart"}),onClick:F=>n.portrait[D.title]="chart"},"图表",10,rg),o("button",{class:we({on:s(D.title)==="list"}),onClick:F=>n.portrait[D.title]="list"},"列表",10,ag)])]),s(D.title)==="chart"?(d(!0),f(X,{key:0},le(te(D),F=>(d(),f("div",{key:F[0],class:"bar-row"},[o("div",ug,v(F[0]),1),o("div",cg,[o("div",{class:"fill",style:Rt({width:F.w+"%"})},null,4)]),o("div",dg,v(F[1])+v(D.unit),1)]))),128)):(d(),f("table",pg,[j[20]||(j[20]=o("thead",null,[o("tr",null,[o("th",null,"分组"),o("th",{class:"r"},"占比"),o("th",{class:"r"},"人数估算"),o("th",{class:"r"},"条数")])],-1)),o("tbody",null,[(d(!0),f(X,null,le(D.data,F=>(d(),f("tr",{key:F[0]},[o("td",fg,v(F[0]),1),o("td",vg,v(F[1])+v(D.unit),1),o("td",hg,v(Math.round(F[1]/100*224e3).toLocaleString()),1),o("td",mg,v(Math.round(F[1]/100*187)),1)]))),128)),o("tr",null,[o("td",gg,"合计 "+v(D.data.length)+" 项 · "+v(ie(D).toFixed(2))+v(D.unit),1),j[19]||(j[19]=o("td",{class:"r",style:{background:"#FAFAFA"},colspan:"2"},"22.4w 粉 · 187 条视频",-1))])])]))]))),128))]),V("",!0),V("",!0),o("div",_g,[j[29]||(j[29]=o("div",{class:"card-h"},[o("h3",null,"内容表现 TOP"),o("span",{class:"sub"},"历史内容 · 演示数据")],-1)),se(g).videos.length?(d(),f("div",yg,[(d(!0),f(X,null,le(se(g).videos,D=>(d(),f("div",{key:D.t,class:"video-card"},[o("div",bg,[o("img",{src:D.cover,alt:D.t,loading:"lazy"},null,8,wg),o("span",kg,v(D.dur),1)]),o("div",xg,[o("div",Sg,[o("span",$g,v(D.tag),1),Te(v(D.t),1)]),o("div",Cg,[o("span",null,"♡ "+v(D.like)+" · 播放",1)])])]))),128))])):(d(),f("div",Tg,[(d(),f(X,null,le(["短视频截图占位 01","短视频截图占位 02","短视频截图占位 03"],D=>o("div",{key:D,class:"video-card placeholder-card"},[o("div",Ag,[o("img",{src:"./assets/live/demo-replay.svg",alt:D},null,8,Eg),j[26]||(j[26]=o("span",{class:"dur"},"待补充",-1))]),o("div",Dg,[o("div",Mg,[j[27]||(j[27]=o("span",{class:"tag"},"待导入",-1)),Te(v(D),1)]),j[28]||(j[28]=o("div",{class:"stats"},[o("span",null,"上传视频号短视频报表、文件或公开链接后替换")],-1))])])),64))]))])]))}},Ja=Dt(Og,[["__scopeId","data-v-4009d967"]]),Ig={class:"confirm-body"},Rg={id:"confirm-title"},Pg={id:"confirm-message"},Lg={__name:"ConfirmDialog",props:{open:Boolean,title:String,message:String,confirmLabel:{type:String,default:"确认"}},emits:["cancel","confirm"],setup(e,{emit:t}){const n=e,s=t,i=K(null),l=K(null);return dt(()=>n.open,async r=>{var a,u,p;await zn(),r?((a=i.value)==null||a.showModal(),(u=l.value)==null||u.focus()):(p=i.value)==null||p.close()}),(r,a)=>(d(),En(L1,{to:"body"},[o("dialog",{ref_key:"dialog",ref:i,class:"redcowork-replica-v2-confirm","aria-labelledby":"confirm-title","aria-describedby":"confirm-message",onCancel:a[3]||(a[3]=vt(u=>s("cancel"),["prevent"])),onClick:a[4]||(a[4]=u=>{u.target===i.value&&s("cancel")})},[o("div",Ig,[o("header",null,[a[5]||(a[5]=o("span",{class:"confirm-icon"},"!",-1)),o("button",{"aria-label":"关闭确认窗口",onClick:a[0]||(a[0]=u=>s("cancel"))},"×")]),o("h2",Rg,v(e.title),1),o("p",Pg,v(e.message),1),o("footer",null,[o("button",{ref_key:"cancelButton",ref:l,onClick:a[1]||(a[1]=u=>s("cancel"))},"取消",512),o("button",{class:"confirm-primary",onClick:a[2]||(a[2]=u=>s("confirm"))},v(e.confirmLabel),1)])])],544)]))}},Ng=Dt(Lg,[["__scopeId","data-v-1cdf398a"]]),Fg={class:"plan-page"},zg={class:"plan-hero"},Ug={class:"plan-summary"},jg={class:"plan-task-count",title:"统计所选月份内甘特图展示的全部排期卡片"},Bg={class:"card plan-create"},Vg={class:"plan-form"},Hg=["value"],Wg={class:"mention-wrap wide"},qg={key:0,class:"mention-menu"},Kg=["onMousedown"],Gg={key:0},Xg=["disabled"],Yg={class:"card"},Jg={class:"card-h"},Zg={class:"period-picker"},Qg=["value"],e5={key:0,value:"september"},t5={key:1,value:"current"},n5=["value"],s5={class:"gantt full-gantt"},i5={class:"gantt-head"},o5={class:"weeks"},l5={style:{"font-weight":"400","font-size":"11px",color:"var(--text-mute)"}},r5={class:"lane"},a5={class:"gantt-track"},u5=["onClick"],c5={key:0,class:"additional-plans"},d5=["onClick"],p5={class:"gantt-footer"},f5={class:"gantt-toolbar"},v5={key:1,class:"plan-empty"},h5={key:2,class:"gantt-editor"},m5={class:"gantt-editor-head"},g5={class:"gantt-editor-grid"},_5=["value"],y5={class:"editor-notes"},b5={class:"gantt-mention-wrap"},w5=["value"],k5={key:0,class:"gantt-mention-menu"},x5=["onMousedown"],S5={key:0},$5={class:"gantt-editor-actions"},C5={__name:"PlanningView",setup(e){const t=K(!1),n=new Date,s=K(`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}`),i=Rs({type:"video",title:"",dateChoice:"0",planned_at:"",notes:""}),l=K(!1),r=K(null),a=K(!1),u=Rs({name:"",type:"video",lane:"",notes:""}),p=K(!1),c=K(""),h=K(!1),m=K(""),C=K(new Set(JSON.parse(localStorage.getItem("redcowork-replica-v2-hidden-planning-templates")||"[]"))),O=[{label:"知识库 / 清华优优 AI Wiki",kind:"知识库"},{label:"短视频脚本",kind:"子库"},{label:"直播复盘",kind:"子库"},{label:"内容生产",kind:"子库"},{label:"转化变现",kind:"子库"},{label:"竞品研究",kind:"子库"},{label:"短视频脚本 / 11月短视频脚本.pdf",kind:"文档"},{label:"直播复盘 / 优优账号X直播记录【咨询+精讲课产品销售】.pdf",kind:"文档"},{label:"内容生产 / 直播SOP.pdf",kind:"文档"},{label:"转化变现 / 精讲课塑品脚本.pdf",kind:"文档"},{label:"竞品研究 / 汪舅舅-教育内容脚本转写.txt",kind:"文档"},{label:"竞品研究 / 雪梨老师-英语学习内容脚本转写.txt",kind:"文档"}],E=ce(()=>[...O,...g.demoKnowledgeDocuments.map(T=>({label:T.title,kind:"文档"}))]),I=ce(()=>{const T=c.value.trim().toLowerCase();return T?E.value.filter(w=>w.label.toLowerCase().includes(T)):E.value}),ee=ce(()=>{const T=m.value.trim().toLowerCase();return T?E.value.filter(w=>w.label.toLowerCase().includes(T)):E.value});function R(){const T=i.notes.lastIndexOf("@");p.value=T>=0,c.value=T>=0?i.notes.slice(T+1).trim():""}function te(T){const w=i.notes.lastIndexOf("@");i.notes=w>=0?`${i.notes.slice(0,w)}@${T.label} `:`${i.notes} @${T.label} `,p.value=!1}function ie(){const T=u.notes.lastIndexOf("@");h.value=T>=0,m.value=T>=0?u.notes.slice(T+1).trim():""}function Q(T){const w=u.notes.lastIndexOf("@");u.notes=w>=0?`${u.notes.slice(0,w)}@${T.label} `:`${u.notes} @${T.label} `,h.value=!1}const j=K(0),D=K(null);let F=!1;const G=ce(()=>[...g.planningTasks].sort((T,w)=>String(T.planned_at).localeCompare(String(w.planned_at)))),H=ce(()=>{const[T,w]=s.value.split("-").map(Number);if(T===n.getFullYear()&&w===n.getMonth()+1){const J=(n.getDay()+6)%7;return new Date(T,w-1,n.getDate()-J)}const W=(new Date(T,w-1,1).getDay()+6)%7;return new Date(T,w-1,1-W)});function q(T){return`${T.getMonth()+1}/${T.getDate()}`}function me(T){const w=new Date(String(T.planned_at).replace(" ","T"));return Math.floor((new Date(w.getFullYear(),w.getMonth(),w.getDate())-H.value)/(7*864e5))}const Se=ce(()=>Array.from({length:12},(T,w)=>{const U=new Date(H.value.getFullYear(),H.value.getMonth(),H.value.getDate()+w*7),W=new Date(n.getFullYear(),n.getMonth(),n.getDate()-(n.getDay()+6)%7);return{start:U,t:+U==+W?"本周":`W${String(U.getMonth()+1).padStart(2,"0")}-${w+1}`,d:q(U)}})),et=ce(()=>Math.ceil(Se.value.length/4));function Je(T){return Se.value.slice(T*4,T*4+4)}const ke=ce(()=>Array.from({length:et.value},(T,w)=>{const U=Se.value[w*4],W=Se.value[w*4+3],J=new Date(W.start.getFullYear(),W.start.getMonth(),W.start.getDate()+6),N=new Date(n.getFullYear(),n.getMonth(),n.getDate()),z=J<N?"历史周期":U.start>N?"后续周期":"当前周期";return{value:w,label:`${z} · ${U.d} – ${q(J)}`}})),Ae=ce(()=>Se.value.slice(j.value*4,j.value*4+4).map((T,w)=>({value:String(j.value*4+w),label:T.t+" · "+T.d+" 起"})));dt(j,()=>{i.dateChoice=String(j.value*4)}),dt(s,()=>{j.value=0,i.dateChoice="0"});function Ee(T){T==="september"?(s.value="2026-09",j.value=0):T==="current"?(s.value=`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}`,j.value=0):j.value=Number(T)}function We(T){const w=Mc(g.gantt||[],H.value,T).map((W,J)=>{const z=W.items.map(ae=>{const oe=`${T}:${J}:${ae.name}:${ae.s}:${ae.e}`;return{...ae,...ge.value[oe]||{},templateKey:oe}}).map(ae=>({...ae,templateKey:ae.templateKey})).filter(ae=>!C.value.has(ae.templateKey));return{...W,items:z}}),U=G.value.filter(W=>{const J=me(W)-T*4;return J>=0&&J<4});for(const W of["video","live"]){const J=w[W==="live"?4:2],N=U.filter(z=>z.type===W);for(let z=0;z<4;z++){const ae=N.filter(oe=>me(oe)-T*4===z).at(-1);ae&&(J.items=J.items.filter(oe=>!(oe.s<=z&&oe.e>=z)),J.items.push({taskId:ae.id,notes:ae.notes,document_id:ae.document_id,name:ae.title,s:z,e:z,t:W}))}}return w.map(W=>({...W,items:W.items.slice().sort((J,N)=>J.s-N.s)}))}const Ct=ce(()=>{const T=new Set(We(j.value).flatMap(w=>w.items.map(U=>U.taskId).filter(Boolean)));return G.value.filter(w=>me(w)>=j.value*4&&me(w)<j.value*4+4&&!T.has(w.id))}),bt=ce(()=>{var N,z;const[T,w]=s.value.split("-").map(Number),U=new Date(T,w-1,1),W=new Date(T,w,0,23,59,59,999);let J=0;for(let ae=0;ae<et.value;ae++)for(const oe of We(ae))for(const ve of oe.items||[]){const fe=(N=Se.value[ae*4+Number(ve.s||0)])==null?void 0:N.start,De=(z=Se.value[ae*4+Number(ve.e??ve.s??0)])==null?void 0:z.start;if(!fe||!De)continue;const Ie=new Date(De.getFullYear(),De.getMonth(),De.getDate()+6,23,59,59,999);fe<=W&&Ie>=U&&J++}return J});function qe(T){const w=Math.max(0,Math.min(et.value-1,j.value+T));w!==j.value&&(j.value=w)}function Tt(T){Math.abs(T.deltaX)<24||Math.abs(T.deltaX)<Math.abs(T.deltaY)||(T.preventDefault(),!F&&(F=!0,qe(T.deltaX>0?1:-1),window.setTimeout(()=>{F=!1},280)))}function ze(T){var w;D.value=((w=T.touches[0])==null?void 0:w.clientX)??null}function Mt(T){var U;if(D.value==null)return;const w=(((U=T.changedTouches[0])==null?void 0:U.clientX)??D.value)-D.value;D.value=null,Math.abs(w)>=45&&qe(w<0?1:-1)}function mt(){a.value=!a.value,r.value=null,lt(a.value?"已进入编辑态，请选择一张排期卡片":"已退出编辑态")}function wt(){var T;(T=document.querySelector(".plan-create"))==null||T.scrollIntoView({behavior:"smooth",block:"center"}),window.setTimeout(()=>{var w;return(w=document.querySelector(".plan-create input"))==null?void 0:w.focus()},350)}function Z(T){const w=r.value;return w?T.taskId||w.taskId?!!T.taskId&&T.taskId===w.taskId:!!T.templateKey&&T.templateKey===w.templateKey:!1}function B(T,w){a.value=!0,r.value=T,u.name=T.name,u.type=T.t==="live"?"live":"video",u.lane=w;const U=g.demoKnowledgeDocuments.find(W=>W.id===T.document_id||W.title===T.name||W.local_content===T.notes);u.notes=U?"@"+U.title+`

`+U.local_content:T.notes||`内容任务：${w}。可补充脚本链接、拍摄要求或 @ 知识库资料。`}const ge=K(JSON.parse(localStorage.getItem("redcowork-replica-v2-planning-template-edits")||"{}"));function Ue(){var U;if(!r.value)return;const T=r.value,w=`内容任务：${u.lane}。拍摄时先用一句问题建立共鸣，再给出一个可执行步骤；可 @ 引用知识库资料。`;T.name=u.name.trim()||T.name,T.t=u.type,T.notes=u.notes.trim()||T.notes||w;for(const W of g.gantt||[]){const J=(U=W.items)==null?void 0:U.find(N=>N===T||N.name===T.name);J&&(J.name=T.name,J.t=T.t,J.notes=T.notes)}T.templateKey&&(ge.value={...ge.value,[T.templateKey]:{name:T.name,t:T.t,notes:T.notes}},localStorage.setItem("redcowork-replica-v2-planning-template-edits",JSON.stringify(ge.value))),T.taskId&&d2(T.taskId,{title:T.name,type:T.t,notes:T.notes}),lt("排期卡片已更新")}function x(){r.value&&(t.value=!0)}function y(){if(!r.value)return;const T=r.value;t.value=!1,T.taskId?p2(T.taskId):T.templateKey&&(C.value=new Set([...C.value,T.templateKey]),localStorage.setItem("redcowork-replica-v2-hidden-planning-templates",JSON.stringify([...C.value]))),r.value=null,lt("排期已删除")}async function P(){const T=Se.value[Number(i.dateChoice)],w=i.dateChoice==="custom"?i.planned_at:T?T.start.getFullYear()+"-"+String(T.start.getMonth()+1).padStart(2,"0")+"-"+String(T.start.getDate()).padStart(2,"0")+"T20:00":"";if(!i.title.trim()||!w){lt("请填写标题，并选择计划日期");return}l.value=!0;const U=await Dl({type:i.type,title:i.title,planned_at:w,notes:i.notes});l.value=!1,U.ok&&(i.title="",i.planned_at="",i.notes="")}return(T,w)=>{var U,W,J;return d(),f(X,null,[o("div",Fg,[o("section",zg,[w[17]||(w[17]=o("div",null,[o("span",{class:"pill green"},"清华优优"),o("h2",null,"内容生产排期"),o("p",null,"短视频与直播落到同一条生产线；左右滑动即可查看后续周期。")],-1)),o("div",Ug,[o("label",null,[w[15]||(w[15]=Te("排期月份",-1)),Qe(o("input",{"onUpdate:modelValue":w[0]||(w[0]=N=>s.value=N),type:"month"},null,512),[[_t,s.value]])]),o("div",jg,[o("b",null,v(bt.value),1),w[16]||(w[16]=o("span",null,"本月排期任务",-1))])])]),o("section",Bg,[w[21]||(w[21]=o("div",{class:"card-h"},[o("h3",null,"新增内容"),o("span",{class:"sub"},"保存后立刻进入甘特与 Cue 提醒")],-1)),o("div",Vg,[Qe(o("select",{"onUpdate:modelValue":w[1]||(w[1]=N=>i.type=N),class:"plan-input"},[...w[18]||(w[18]=[o("option",{value:"video"},"短视频",-1),o("option",{value:"live"},"直播",-1)])],512),[[gs,i.type]]),Qe(o("select",{"onUpdate:modelValue":w[2]||(w[2]=N=>i.dateChoice=N),class:"plan-input"},[(d(!0),f(X,null,le(Ae.value,N=>(d(),f("option",{key:N.value,value:N.value},v(N.label),9,Hg))),128)),w[19]||(w[19]=o("option",{value:"custom"},"自选日期",-1))],512),[[gs,i.dateChoice]]),i.dateChoice==="custom"?Qe((d(),f("input",{key:0,"onUpdate:modelValue":w[3]||(w[3]=N=>i.planned_at=N),class:"plan-input",type:"date"},null,512)),[[_t,i.planned_at]]):V("",!0),Qe(o("input",{"onUpdate:modelValue":w[4]||(w[4]=N=>i.title=N),class:"plan-input wide",placeholder:"标题或直播主题"},null,512),[[_t,i.title]]),o("div",Wg,[Qe(o("input",{"onUpdate:modelValue":w[5]||(w[5]=N=>i.notes=N),class:"plan-input",placeholder:"输入 @ 引用知识库、子库或文档",onInput:R,onFocus:R,onKeydown:w[6]||(w[6]=Wn(N=>p.value=!1,["esc"]))},null,544),[[_t,i.notes]]),p.value?(d(),f("div",qg,[w[20]||(w[20]=o("div",{class:"mention-head"},[Te("引用知识库资料 "),o("small",null,"输入名称筛选")],-1)),(d(!0),f(X,null,le(I.value,N=>(d(),f("button",{key:N.label,type:"button",onMousedown:vt(z=>te(N),["prevent"])},[o("span",null,v(N.label),1),o("em",null,v(N.kind),1)],40,Kg))),128)),I.value.length?V("",!0):(d(),f("p",Gg,"没有匹配的知识库资料"))])):V("",!0)]),o("button",{class:"wiki-sum-btn",disabled:l.value,onClick:P},v(l.value?"保存中…":"加入排期"),9,Xg)])]),o("section",Yg,[o("div",Jg,[w[23]||(w[23]=o("div",null,[o("h3",null,"全量内容排期"),o("span",{class:"sub"},"双指左右滑动甘特表切换周期；每次聚焦 4 周")],-1)),o("label",Zg,[w[22]||(w[22]=o("span",null,"查看周期",-1)),o("select",{value:j.value,onChange:w[7]||(w[7]=N=>Ee(N.target.value))},[s.value!=="2026-09"?(d(),f("option",e5,"历史周期 · 九月（8/31 – 9/27）")):V("",!0),s.value==="2026-09"?(d(),f("option",t5,"当前周期 · 十月")):V("",!0),(d(!0),f(X,null,le(ke.value,N=>(d(),f("option",{key:N.value,value:N.value},v(N.label),9,n5))),128))],40,Qg)])]),o("div",{class:"gantt-carousel swipe-gantt",onWheel:Tt,onTouchstart:ze,onTouchend:Mt},[o("div",{class:"gantt-slides",style:Rt({transform:`translateX(-${j.value*100}%)`})},[(d(!0),f(X,null,le(ke.value,N=>(d(),f("div",{key:N.value,class:"gantt-slide"},[o("div",s5,[o("div",i5,[w[24]||(w[24]=o("div",{class:"lane"},"生产任务",-1)),o("div",o5,[(d(!0),f(X,null,le(Je(N.value),z=>(d(),f("div",{key:z.t,class:we(["w",{cur:z.t==="本周"}])},[o("div",null,v(z.t),1),o("div",l5,v(z.d),1)],2))),128))])]),(d(!0),f(X,null,le(We(N.value),z=>(d(),f("div",{key:z.lane,class:"gantt-row"},[o("div",r5,v(z.lane),1),o("div",a5,[(d(!0),f(X,null,le(z.items,(ae,oe)=>(d(),f("button",{key:`${ae.name}-${oe}`,type:"button",class:we(["gantt-bar",[ae.t,{muted:a.value&&!Z(ae),"editing-card":a.value&&Z(ae)}]]),style:Rt({gridColumn:ae.s+1+" / "+(ae.e+2)}),onClick:vt(ve=>B(ae,z.lane),["stop"])},v(ae.name),15,u5))),128))])]))),128))])]))),128))],4)],32),Ct.value.length?(d(),f("div",c5,[w[25]||(w[25]=o("span",null,"同周期其他任务",-1)),(d(!0),f(X,null,le(Ct.value,N=>(d(),f("button",{key:N.id,onClick:z=>B({taskId:N.id,name:N.title,t:N.type,notes:N.notes},N.type==="live"?"直播 · 开播":"短视频 · 拍摄发布")},v(N.title),9,d5))),128))])):V("",!0),o("div",p5,[w[26]||(w[26]=vo('<div class="gantt-legend" data-v-e5a0f5a6><span class="lg" data-v-e5a0f5a6><span class="sw" style="background:var(--green-deep);" data-v-e5a0f5a6></span>短视频</span><span class="lg" data-v-e5a0f5a6><span class="sw" style="background:var(--text);" data-v-e5a0f5a6></span>直播</span><span class="lg" data-v-e5a0f5a6><span class="sw" style="background:#C9CBC2;" data-v-e5a0f5a6></span>脚本筹备</span></div>',1)),o("div",f5,[o("button",{type:"button",class:we({active:a.value}),onClick:mt},v(a.value?"完成编辑":"编辑"),3),o("button",{type:"button",onClick:wt},"＋ 新增内容")])]),G.value.length?V("",!0):(d(),f("div",v5,"上方还未添加真实任务；当前展示的是内容模板，新增任务会自动放到对应周与生产线。")),r.value?(d(),f("section",h5,[o("div",m5,[o("div",null,[w[27]||(w[27]=o("span",{class:"pill green"},"正在编辑",-1)),o("h3",null,v(u.lane),1)]),o("button",{type:"button",class:"editor-close",onClick:w[8]||(w[8]=N=>r.value=null)},"取消选择")]),o("div",g5,[o("label",null,[w[28]||(w[28]=Te("内容标题",-1)),o("input",{value:u.name||((U=r.value)==null?void 0:U.name),onInput:w[9]||(w[9]=N=>u.name=N.target.value)},null,40,_5)]),o("label",null,[w[30]||(w[30]=Te("内容类型",-1)),Qe(o("select",{"onUpdate:modelValue":w[10]||(w[10]=N=>u.type=N)},[...w[29]||(w[29]=[o("option",{value:"video"},"短视频",-1),o("option",{value:"live"},"直播",-1),o("option",{value:"script"},"脚本筹备",-1)])],512),[[gs,u.type]])]),o("label",y5,[w[32]||(w[32]=Te("执行备注 / 资料引用",-1)),o("div",b5,[o("textarea",{value:u.notes||((W=r.value)==null?void 0:W.notes)||`内容任务：${u.lane}。拍摄时先用一句问题建立共鸣，再给出一个可执行步骤；可 @ 引用知识库资料。`,onInput:w[11]||(w[11]=N=>{u.notes=N.target.value,ie()}),placeholder:"可填写拍摄要求，或 @ 引用知识库资料",onFocus:ie,onKeydown:w[12]||(w[12]=Wn(N=>h.value=!1,["esc"]))},null,40,w5),h.value?(d(),f("div",k5,[w[31]||(w[31]=o("div",{class:"mention-head"},[Te("引用知识库资料 "),o("small",null,"输入名称筛选")],-1)),(d(!0),f(X,null,le(ee.value,N=>(d(),f("button",{key:N.label,type:"button",onMousedown:vt(z=>Q(N),["prevent"])},[o("span",null,v(N.label),1),o("em",null,v(N.kind),1)],40,x5))),128)),ee.value.length?V("",!0):(d(),f("p",S5,"没有匹配的知识库资料"))])):V("",!0)])])]),o("div",$5,[o("button",{type:"button",class:"editor-delete",onClick:x},"删除排期"),o("div",null,[o("button",{type:"button",onClick:w[13]||(w[13]=N=>r.value=null)},"取消"),o("button",{type:"button",class:"editor-save",onClick:Ue},"保存修改")])])])):V("",!0)])]),st(Ng,{open:t.value,title:"删除这条排期？",message:"将从内容排期中移除「"+(((J=r.value)==null?void 0:J.name)||"")+"」。","confirm-label":"确认删除",onCancel:w[14]||(w[14]=N=>t.value=!1),onConfirm:y},null,8,["open","message"])],64)}}},T5=Dt(C5,[["__scopeId","data-v-e5a0f5a6"]]),A5={class:"knowledge-explorer"},E5={class:"graph-node-list"},D5=["onClick"],M5={key:0},O5=["aria-label"],I5={class:"graph-focus"},R5={key:0,class:"graph-branches"},P5=["onClick"],L5={key:0},N5={key:1},F5={key:0},z5={class:"graph-quote"},U5={key:0},j5=["onClick"],B5={key:1},V5={__name:"KnowledgeGraph",props:{graph:Object},emits:["open-document"],setup(e,{emit:t}){const n=e,s=t,i=K(""),l=K(""),r=ce(()=>{var C;return((C=n.graph)==null?void 0:C.nodes)||[]}),a=ce(()=>{var C;return(((C=n.graph)==null?void 0:C.edges)||[]).filter(O=>{var E;return(E=O.quote)==null?void 0:E.trim()})}),u=ce(()=>Object.fromEntries(r.value.map(C=>[C.id,C]))),p=ce(()=>r.value.filter(C=>C.label.toLowerCase().includes(i.value.toLowerCase())));dt(r,()=>{var C,O;u.value[l.value]||(l.value=((C=r.value.find(E=>E.label==="1+1+1复习法"))==null?void 0:C.id)||((O=r.value[0])==null?void 0:O.id)||"")},{immediate:!0});const c=ce(()=>u.value[l.value]),h=ce(()=>a.value.filter(C=>C.source===l.value||C.target===l.value)),m=ce(()=>[...new Set(h.value.map(C=>C.source===l.value?C.target:C.source))].map(C=>u.value[C]).filter(Boolean).slice(0,8).map((C,O)=>({...C,x:O%2?555:15,y:35+Math.floor(O/2)*100})));return(C,O)=>(d(),f("div",A5,[o("aside",null,[Qe(o("input",{"onUpdate:modelValue":O[0]||(O[0]=E=>i.value=E),placeholder:"搜索实体 / 概念","aria-label":"搜索图谱节点"},null,512),[[_t,i.value]]),o("div",E5,[(d(!0),f(X,null,le(p.value,E=>(d(),f("button",{key:E.id,class:we({active:E.id===l.value}),onClick:I=>l.value=E.id},[Te(v(E.label),1),o("small",null,v(E.kind||"概念"),1)],10,D5))),128))])]),c.value?(d(),f("main",M5,[O[2]||(O[2]=o("p",{class:"graph-help"},"选中一个实体查看相邻关系；每条关系可展开核对原文。仅显示有引文的关系。",-1)),o("div",{class:"graph-diagram",role:"group","aria-label":c.value.label+"的关联关系"},[o("div",I5,v(c.value.label),1),m.value.length?(d(),f("div",R5,[(d(!0),f(X,null,le(m.value,E=>(d(),f("button",{key:E.id,class:"graph-neighbor-card",onClick:I=>l.value=E.id},[o("span",null,v(E.label),1),o("small",null,v(E.kind||"概念"),1)],8,P5))),128))])):V("",!0)],8,O5),h.value.length?(d(),f("p",N5,[Te(v(h.value.length)+" 条有引文的关系",1),new Set(h.value.map(E=>E.source===l.value?E.target:E.source)).size>8?(d(),f("span",F5,"，图中展示前 8 个相邻节点；完整关系见下方。")):V("",!0)])):(d(),f("p",L5,"该实体暂无具备原文引文的关联关系。")),(d(!0),f(X,null,le(h.value,(E,I)=>{var ee,R;return d(),f("details",{key:I,class:"graph-evidence"},[o("summary",null,v((ee=u.value[E.source])==null?void 0:ee.label)+" → "+v(E.relation||"关联")+" → "+v((R=u.value[E.target])==null?void 0:R.label),1),o("p",z5,v(E.quote),1),o("small",null,[Te(v(E.document_title||"当前文档"),1),E.chunk?(d(),f("span",U5," · 片段 "+v(E.chunk),1)):V("",!0),O[1]||(O[1]=Te(" · 原文引用可核对，关系语义需结合上下文确认",-1))]),E.document_id?(d(),f("button",{key:0,class:"graph-source",onClick:te=>s("open-document",{id:E.document_id,title:E.document_title})},"查看知识库文档 ↗",8,j5)):V("",!0)])}),128))])):(d(),f("p",B5,"尚无可展示的实体或概念。"))]))}},Za=Dt(V5,[["__scopeId","data-v-b94ce37c"]]),H5={class:"sheet-preview"},W5={class:"sheet-caption"},q5={class:"sheet-scroll"},K5={class:"sheet-tabs","aria-label":"工作表"},G5=["onClick"],X5={__name:"SpreadsheetPreview",props:{sheets:{type:Array,default:()=>[]}},setup(e){const t=e,n=K(0);dt(()=>t.sheets,()=>n.value=0);const s=ce(()=>t.sheets[n.value]||{rows:[]}),i=ce(()=>Math.max(1,...s.value.rows.map(r=>r.length)));function l(r){let a=r+1,u="";for(;a;)a--,u=String.fromCharCode(65+a%26)+u,a=Math.floor(a/26);return u}return(r,a)=>(d(),f("div",H5,[o("div",W5,[o("b",null,v(s.value.name),1),o("span",null,v(s.value.rows.length)+" 行 · "+v(i.value)+" 列",1),a[0]||(a[0]=o("span",null,"原始表格预览",-1))]),o("div",q5,[o("table",null,[o("thead",null,[o("tr",null,[a[1]||(a[1]=o("th",{class:"corner"},null,-1)),(d(!0),f(X,null,le(i.value,(u,p)=>(d(),f("th",{key:p},v(l(p)),1))),128))])]),o("tbody",null,[(d(!0),f(X,null,le(s.value.rows,(u,p)=>(d(),f("tr",{key:p},[o("th",null,v(p+1),1),(d(!0),f(X,null,le(i.value,(c,h)=>(d(),f("td",{key:h,class:we({heading:p===0,numeric:typeof u[h]=="number"})},v(u[h]??""),3))),128))]))),128))])])]),o("nav",K5,[(d(!0),f(X,null,le(e.sheets,(u,p)=>(d(),f("button",{key:p,class:we({active:p===n.value}),onClick:c=>n.value=p},v(u.name),11,G5))),128))])]))}},Y5=Dt(X5,[["__scopeId","data-v-dbd40008"]]),J5={class:"presentation-preview"},Z5={key:0},Q5={key:1,role:"alert"},e3=["href"],t3={class:"preview-caption"},n3=["href"],s3=["src","title"],i3={__name:"PresentationPreview",props:{uri:String,title:String},setup(e){const t=e,n=K(""),s=K(""),i=K(!1);let l=0;return dt(()=>t.uri,async r=>{const a=++l;if(n.value&&URL.revokeObjectURL(n.value),n.value="",s.value="",!!r){i.value=!0;try{const u=await fetch(r);if(!u.ok)throw Error("无法读取原始 PPT");const p=await fetch("https://northstar-copilot.com/local-media/presentation",{method:"POST",headers:{"X-File-Extension":/\.ppt$/i.test(t.title)?".ppt":".pptx"},body:await u.blob()});if(!p.ok)throw Error((await p.json()).error||"预览失败");const c=await p.blob();a===l&&(n.value=URL.createObjectURL(c))}catch(u){a===l&&(s.value=u.message)}finally{a===l&&(i.value=!1)}}},{immediate:!0}),Kn(()=>{l++,n.value&&URL.revokeObjectURL(n.value)}),(r,a)=>(d(),f("div",J5,[i.value?(d(),f("p",Z5,"正在生成原始幻灯片预览，保留图片、公式和版式…")):s.value?(d(),f("p",Q5,[Te(v(s.value)+" ",1),o("a",{href:e.uri,target:"_blank"},"打开原文件 ↗",8,e3)])):n.value?(d(),f(X,{key:2},[o("div",t3,[a[0]||(a[0]=Te("原始幻灯片 · PDF 预览 ",-1)),o("a",{href:n.value,target:"_blank"},"放大查看 ↗",8,n3)]),o("iframe",{src:n.value,title:e.title+"幻灯片预览"},null,8,s3)],64)):V("",!0)]))}},o3=Dt(i3,[["__scopeId","data-v-749a1735"]]),l3={class:"real-kb"},r3={class:"kb-title"},a3={key:0,class:"kb-error"},u3={class:"kb-modal card"},c3={class:"subspace-editor"},d3=["placeholder"],p3=["onClick"],f3=["disabled","onClick"],v3={class:"kb-pages"},h3=["onClick"],m3=["aria-label","title"],g3={class:"kb-tooltip",role:"tooltip"},_3={key:1,class:"sync-alert","aria-label":"有同步失败"},y3={class:"kb-space-summary card"},b3={class:"kb-columns"},w3={class:"kb-subspaces card"},k3=["onClick"],x3={class:"kb-docs card"},S3={class:"index-switch"},$3={class:"doc-list-head"},C3=["placeholder"],T3={key:1,class:"batch-tools"},A3=["checked"],E3={key:0},D3={key:2,class:"batch-edit"},M3={key:3},O3=["onClick"],I3=["checked","onChange"],R3={class:"doc-main"},P3=["title"],L3=["onClick"],N3={key:0,class:"wiki-reading"},F3=["onClick"],z3={key:1,class:"wiki-reading"},U3={class:"upload-target"},j3=["onClick"],B3={key:0,class:"kb-queue"},V3=["onClick"],H3=["placeholder"],W3=["disabled"],q3={key:4,class:"card kb-inspect"},K3=["href"],G3=["disabled"],X3=["src"],Y3={class:"original-text"},J3=["src","title"],Z3=["src","alt"],Q3={key:5},e_={key:6,class:"original-text"},t_={key:7},n_={key:8},s_={key:1},i_={key:0},o_={class:"analysis-grid"},l_={key:3,class:"card tab-card"},r_={key:0},a_={key:0},u_={key:4,class:"card tab-card"},c_={class:"sync-filters"},d_=["onClick"],p_={class:"sync-progress"},f_=["onClick"],v_={key:0},h_={key:5,class:"card tab-card"},m_={key:6,class:"card tab-card"},g_={class:"inline-form"},__={__name:"WikiView",setup(e){const t=[{id:"demo-month-script",title:"11月短视频脚本.pdf",subspace:"短视频脚本",space_name:"清华优优 AI Wiki",doc_type:"document",chunk_count:8,analyzed:!0,uri:"./demo-docs/11月短视频脚本.pdf"},{id:"demo-live-review",title:"优优账号X直播记录【咨询+精讲课产品销售】.pdf",subspace:"直播复盘",space_name:"清华优优 AI Wiki",doc_type:"document",chunk_count:6,analyzed:!0,uri:"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf"},{id:"demo-live-sop",title:"直播SOP.pdf",subspace:"内容生产",space_name:"清华优优 AI Wiki",doc_type:"document",chunk_count:7,analyzed:!0,uri:"./demo-docs/直播SOP.pdf"},{id:"demo-product-script",title:"精讲课塑品脚本.pdf",subspace:"转化变现",space_name:"清华优优 AI Wiki",doc_type:"document",chunk_count:5,analyzed:!0,uri:"./demo-docs/精讲课塑品脚本.pdf"},{id:"demo-wang",title:"汪舅舅-教育内容脚本转写.txt",subspace:"竞品研究",space_name:"清华优优 AI Wiki",doc_type:"document",chunk_count:4,analyzed:!0,uri:"./demo-docs/汪舅舅-教育内容脚本转写-演示.txt"},{id:"demo-xueli-video",source_group:"xueli-vocabulary",title:"雪梨老师-英语背单词开窍.mp4",subspace:"竞品研究",space_name:"清华优优 AI Wiki",doc_type:"document",chunk_count:4,analyzed:!0,uri:"https://northstar-copilot.com/competitor-videos/xueli-vocabulary.mp4",media_type:"video",duration:5.35,parse_method:"录屏字幕核验",local_content:`[0:00–0:05] 第195集：只用这1招，让你背单词突然开窍。
画面可见：一找二切三拼；先找出元音字母（a e i o u）；元音前再找辅音。
录屏长5.35秒，仅保留这一片段已核实的字幕。`,parse_status:"completed"},{id:"demo-xueli",source_group:"xueli-vocabulary",title:"雪梨老师-英语背单词开窍.txt",subspace:"竞品研究",space_name:"清华优优 AI Wiki",doc_type:"transcript",chunk_count:1,analyzed:!1,uri:"./demo-docs/雪梨老师-英语背单词开窍.txt"}],n=[{id:"demo-source-1",name:"11月短视频脚本.pdf",uri:"已同步 · 短视频脚本",source_type:"upload",space_name:"清华优优 AI Wiki",status:"ready",document_count:1},{id:"demo-source-2",name:"优优账号X直播记录【咨询+精讲课产品销售】.pdf",uri:"已同步 · 直播复盘",source_type:"upload",space_name:"清华优优 AI Wiki",status:"ready",document_count:1},{id:"demo-source-3",name:"直播SOP.pdf",uri:"已同步 · 内容生产",source_type:"upload",space_name:"清华优优 AI Wiki",status:"completed",document_count:1},{id:"demo-source-4",name:"精讲课塑品脚本.pdf",uri:"已同步 · 转化变现",source_type:"upload",space_name:"清华优优 AI Wiki",status:"ready",document_count:1},{id:"demo-source-5",name:"竞品脚本转写",uri:"已同步 · 竞品研究",source_type:"paste",space_name:"清华优优 AI Wiki",status:"completed",document_count:2}],s={document_count:6,nodes:[{id:"g1",label:"月考复盘",kind:"概念"},{id:"g2",label:"错题分类",kind:"方法"},{id:"g3",label:"家长沟通",kind:"场景"},{id:"g4",label:"直播答疑",kind:"内容"},{id:"g5",label:"期中复习",kind:"选题"},{id:"g6",label:"精讲课转化",kind:"方法"},{id:"g7",label:"竞品钩子",kind:"概念"}],edges:[{source:"g1",target:"g2"},{source:"g1",target:"g3"},{source:"g2",target:"g5"},{source:"g3",target:"g4"},{source:"g4",target:"g6"},{source:"g7",target:"g1"}]},i={"demo-month-script":{body:"11 月可讲内容已按家长高频焦虑整理：月考后失分点、期中前复习节奏、家长如何看懂月考卷。每条可拆为 60 秒短视频，并在直播答疑承接评论区问题。",subspace:"短视频脚本"},"demo-live-review":{body:"这场咨询与精讲课产品销售直播中，高频问题集中在学习节奏、错题复盘和课程匹配。建议以问题收集、方法展示、案例证明、福利转化四段式复用。",subspace:"直播复盘"},"demo-live-sop":{body:"直播 SOP 覆盖预热、开场互动、核心讲解、评论区答疑和收尾转化。排期时可直接引用对应环节，形成选题到开播的执行清单。",subspace:"内容生产"},"demo-product-script":{body:"精讲课塑品脚本围绕目标人群、学习痛点、课程价值和行动引导展开，可用于直播中的产品介绍与短视频中的转化承接。",subspace:"转化变现"},"demo-wang":{body:"内容转写用于拆解教育内容的开场钩子、场景共鸣和方法交付结构，仅供内部竞品研究内部使用。",subspace:"竞品研究"},"demo-xueli":{body:"内容转写用于拆解英语学习内容的选题表达、步骤讲解和评论互动设计，仅供内部竞品研究内部使用。",subspace:"竞品研究"}};function l($){const b=t.find($e=>$e.id===$),ue=i[$]||{body:b.local_content||"",subspace:b.subspace};return{...b,source:"已入库资料",source_name:"清华优优",chunks:[{id:$+"-1",position:1,locator:b.title,text:ue.body}],analysis:{subspace:ue.subspace,catalog:["选题","方法","行动"],concepts:["月考复盘","学习节奏","家长沟通"],entities:[{name:"清华优优",type:"内容账号"}],summary:ue.body,framework:"诊断 → 拆解 → 执行 → 复盘",hook:"先问家长最焦虑的具体问题。",body:ue.body,cta:"评论区领取本周行动卡。",nodes:[{id:"d1",label:"月考复盘"},{id:"d2",label:"内容选题"}],edges:[{source:"d1",target:"d2"}]}}}const a=K([...[{id:"all",name:"全部文档",desc:"当前知识空间的全部资料"},{id:"经营数据",name:"经营数据",desc:"粉丝、视频、直播与成交报表"},{id:"短视频脚本",name:"短视频脚本",desc:"选题、钩子与口播稿"},{id:"直播复盘",name:"直播复盘",desc:"直播数据与画面复盘"},{id:"内容生产",name:"内容生产",desc:"排期、SOP 与执行清单"},{id:"转化变现",name:"转化变现",desc:"课程塑品与成交话术"},{id:"竞品研究",name:"竞品研究",desc:"竞品账号与爆款拆解"}],{id:"产品课程",name:"产品课程",desc:"数学、物理、英语、语文课程资料"}]),u=K("all"),p=K("全部");function c($){return/^(demo-|local-|shared-save-|course-|business-)/.test(String($))}function h($){C.value=C.value.filter(b=>!$.includes(b.id)),g.demoKnowledgeDocuments=g.demoKnowledgeDocuments.filter(b=>!$.includes(b.id)),g.courseDocuments=g.courseDocuments.filter(b=>!$.includes(b.id)),g.businessDocuments=g.businessDocuments.filter(b=>!$.includes(b.id))}const m=K("space"),C=K([]),O=K([]),E=K([]),I=K([]),ee=K({nodes:[],edges:[]}),R=K(null),te=K(""),ie=K(!1),Q=K(""),j=K(!1),D=K("file"),F=K([]),G=K(!1),H=K(null),q=K(""),me=K(""),Se=K("chunks"),et=K(""),Je=K(""),ke=K(!1),Ae=K("index"),Ee=K({x:0,y:0});let We=null;function Ct($){$.target.closest("button,input,select,textarea")||($.preventDefault(),We={x:$.clientX,y:$.clientY,px:Ee.value.x,py:Ee.value.y},window.addEventListener("pointermove",bt),window.addEventListener("pointerup",qe))}function bt($){We&&(Ee.value={x:We.px+$.clientX-We.x,y:We.py+$.clientY-We.y})}function qe(){We=null,window.removeEventListener("pointermove",bt),window.removeEventListener("pointerup",qe)}Kn(qe);const Tt=ce(()=>{var $,b;return/\.pdf(?:$|[?#])/i.test((($=R.value)==null?void 0:$.uri)||"")||((b=R.value)==null?void 0:b.file_type)==="application/pdf"}),ze=ce(()=>je.value.map($=>({id:$.id,title:$.title,action:$.media_type==="video"?"视频上传":$.doc_type==="transcript"||$.subspace==="竞品研究"?"竞品转写":$.uri?"导入文件":"粘贴文本",kind:$.media_type==="video"?"video":$.doc_type==="transcript"||$.subspace==="竞品研究"?"transcript":$.uri?"file":"text",status:$.parse_status||"completed",message:$.parse_error,subspace:$.subspace}))),Mt=ce(()=>ze.value.map($=>({id:$.id,source_name:$.title,source_type:$.action,status:$.status,stage:$.status==="failed"?"解析失败":$.status==="pending"?"原件已保存，待文本解析":"已入库",progress:$.status==="completed"?100:0,message:$.message||""}))),mt=K("all"),wt=ce(()=>[...I.value,...Mt.value].sort(($,b)=>({failed:0,pending:1}[$.status]??2)-({failed:0,pending:1}[b.status]??2))),Z=ce(()=>wt.value.filter($=>mt.value==="all"||$.status===mt.value)),B=ce(()=>wt.value.some($=>$.status==="failed")||F.value.some($=>$.status==="failed")),ge=K(null),Ue=K(null);function x($){Ue.value=$.id,ge.value.click()}async function y($){const b=$.target.files[0];$.target.value="",b&&M(async()=>{var Ge;const ue=await yo(b);if(!((Ge=ue.local_content)!=null&&Ge.trim()))throw new Error("没有提取到文字，请提供可读取的文件");const $e=je.value.find(ut=>ut.id===Ue.value);$e&&(await Bl($e.id,b,ue),Object.assign($e,ue,{uri:URL.createObjectURL(b),parse_status:"completed",parse_error:"",title:b.name}),ye($e.id),lt("重新上传并解析成功"))})}dt(R,async $=>{var b;if(Je.value="",ke.value=!1,!(!$||$.local_content||!$.uri||!/\.(txt|md|csv|tsv|srt|vtt)(?:$|[?#])/i.test($.uri))){ke.value=!0;try{const ue=await fetch($.uri);if(!ue.ok)throw new Error("无法读取原文件");const $e=await ue.text();((b=R.value)==null?void 0:b.id)===$.id&&(Je.value=$e)}catch(ue){Q.value=ue.message}finally{ke.value=!1}}});const P=K(!1),T=K(!1),w=K(null),U=K(""),W=K(new Set),J=K(""),N=[["space","知识空间"],["documents","文档"],["sources","数据源"],["sync","同步状态"],["graph","知识图谱"]],z={pending:"待上传",uploading:"正在解析",done:"已入库",failed:"失败",invalid:"无法上传",ready:"已同步",completed:"已完成",running:"进行中"},ae={documents:"文档是具体资料，如一份Excel、CSV、视频或脚本。这里查看原文件、解析正文与处理状态。",sources:"数据源是资料的来源，如上传文件、课程导入目录或连接的数据表。一个来源可以包含多份文档。"},oe={upload:"文件 / 导入目录",paste:"粘贴文本",video:"视频"};function ve($){if(ie.value)return;const b=Array.from($);if(F.value.length+b.length>50){Q.value="最多选择 50 个文件";return}for(const ue of b){const $e=`${ue.name}:${ue.size}:${ue.lastModified}`;if(F.value.some(k=>k.key===$e))continue;const Ge=/\.(mp4|mov|webm|m4v)$/i.test(ue.name),ut=/\.(pdf|docx|xlsx|pptx|txt|md|csv|tsv|srt|vtt|mp4|mov|webm|m4v)$/i.test(ue.name)?ue.size>(Ge?200:50)*1024*1024?Ge?"视频超过 200 MB":"超过 50 MB":"":"不支持此格式";F.value.push({key:$e,file:ue,status:ut?"invalid":"pending",message:ut})}}function fe($){ve($.target.files),$.target.value=""}function De($){G.value=!1,ve($.dataTransfer.files)}const Ie=ce(()=>F.value.some($=>["pending","failed"].includes($.status))),Ne=ce(()=>`${F.value.filter($=>$.status==="done").length} / ${F.value.length}`),xe=K("documents"),je=ce(()=>[...C.value.length?C.value:t,...g.demoKnowledgeDocuments||[],...g.courseDocuments||[],...g.businessDocuments||[]]);dt([()=>g.wikiDocumentRequest,je],([$,b])=>{if(!$)return;const ue=b.find($e=>$.id&&$e.id===$.id)||b.find($e=>$e.title===$.title)||b.find($e=>$.uri&&$e.uri===$.uri);ue&&(m.value="space",xe.value="documents",Ae.value="index",u.value=ue.subspace||"all",p.value="全部",te.value="",ye(ue.id),Se.value="chunks",g.wikiDocumentRequest=null)},{flush:"post"});const kt=ce(()=>{const $=new Map;for(const b of je.value){const ue=b.source_group||(b.imported_file&&b.subject?"course-"+b.subject:b.id);$.has(ue)||$.set(ue,{id:ue,name:b.imported_file&&b.subject?b.subject+"课程导入目录":b.title,uri:b.imported_file&&b.subject?"精讲课 / "+b.subject:b.uri||"粘贴文本",source_type:b.media_type==="video"?"video":b.uri?"upload":"paste",space_name:b.space_name,document_count:0,status:"completed",titles:[]});const $e=$.get(ue);$e.document_count++,$e.titles.push(b.title),b.parse_status==="failed"?$e.status="failed":b.parse_status==="pending"&&$e.status!=="failed"&&($e.status="pending")}return[...$.values()]}),xt=ce(()=>{var $e;const $=($e=ee.value.nodes)!=null&&$e.length?ee.value:s,b={...$,nodes:[...$.nodes||[]],edges:[...$.edges||[]]},ue=je.value.find(Ge=>{var ut;return Ge.title==="英语课程ppt.pptx"&&((ut=Ge.sections)==null?void 0:ut.some(k=>k.text.includes("1+1+1")))});if(ue){const Ge=ue.sections.find(ut=>ut.text.includes("1+1+1的背诵方法"));if(Ge){const ut="course-method-111",k="course-english-method-source";b.nodes.some(Oe=>Oe.label==="1+1+1复习法")||b.nodes.push({id:ut,label:"1+1+1复习法",kind:"实体",description:"先背诵并录音，睡前听录音，第二天起床后再背诵。"});const Y=b.nodes.find(Oe=>Oe.label==="1+1+1复习法");b.nodes.some(Oe=>Oe.id===k)||b.nodes.push({id:k,label:"英语课程",kind:"课程"}),b.edges.push({source:k,target:Y.id,relation:"介绍背诵方法",quote:Ge.text,document_id:ue.id,document_title:ue.title,chunk:ue.sections.indexOf(Ge)+1})}}return b}),Lt=ce(()=>xt.value.nodes.map($=>({id:`concept-${$.id}`,title:$.label,subspace:$.kind,doc_type:"concept",chunk_count:xt.value.edges.filter(b=>b.source===$.id||b.target===$.id).length,analyzed:!0,node:$}))),Nt=ce(()=>kt.value.map($=>({id:`source-${$.id}`,title:$.name,subspace:`${oe[$.source_type]||$.source_type} · ${$.document_count} 份文档`,doc_type:"source",chunk_count:$.document_count,analyzed:!0,source:$}))),St=ce(()=>xe.value==="concepts"?Lt.value:xe.value==="sources"?Nt.value:je.value),pt=ce(()=>St.value.filter($=>(xe.value!=="documents"||u.value==="all"||$.subspace===u.value)&&(u.value!=="产品课程"||p.value==="全部"||$.subject===p.value)&&($.title+" "+($.relative_path||"")).toLowerCase().includes(te.value.toLowerCase())));dt([pt,R,Ae,m],([$,b,ue,$e])=>{$e==="space"&&ue==="index"&&$.length&&!$.some(Ge=>Ge.id===(b==null?void 0:b.id))&&ye($[0].id)},{immediate:!0,flush:"post"});const _n=ce(()=>a.value.find($=>$.id===u.value)||a.value[0]),Sn=ce(()=>xe.value==="concepts"?"实体 / 概念":xe.value==="sources"?"数据源":_n.value.name);function jt($){return $==="all"?je.value.length:je.value.filter(b=>b.subspace===$).length}function ln(){T.value=!0,w.value=null,U.value=""}function $n($){w.value=$,U.value=($==null?void 0:$.name)||""}function sn(){const $=U.value.trim();if($){if(w.value){const b=a.value.find(ue=>ue.id===w.value.id);b&&(b.name=$,b.desc="自定义知识子库",u.value===b.id&&(u.value=b.id))}else{const b=`local-subspace-${Date.now()}`;a.value.push({id:b,name:$,desc:"自定义知识子库"}),u.value=b}w.value=null,U.value=""}}function Ns($){$.id!=="all"&&window.confirm(`删除子库「${$.name}」？资料不会被删除，会回到全部文档。`)&&(a.value=a.value.filter(b=>b.id!==$.id),u.value===$.id&&(u.value="all"))}function Gn(){window.setTimeout(()=>{var $;return($=document.querySelector(".kb-docs"))==null?void 0:$.scrollIntoView({behavior:"smooth",block:"start"})},0)}const Fs=ce(()=>m.value==="space"?xe.value==="documents"?"space":xe.value==="sources"?"sources":"concepts":m.value);function ws(){m.value="space",xe.value="documents",u.value="all",R.value=null,Gn()}function ks(){m.value="space",xe.value="concepts",R.value=null,Gn()}function Xn(){m.value="space",xe.value="sources",R.value=null,Gn()}function us($){if($==="space"){m.value="space",xe.value="documents",R.value=null;return}if($==="documents")return ws();if($==="sources")return Xn();if($==="graph"){m.value="graph",R.value=null;return}m.value=$}const Bt=ce(()=>pt.value.length>0&&pt.value.every($=>W.value.has($.id))),A=ce(()=>O.value[0]||null);async function S(){const $=await rc();C.value=[...t,...($.documents||[]).filter(b=>!t.some(ue=>ue.id===b.id))],O.value=$.spaces||[],E.value=[...n,...($.sources||[]).filter(b=>!n.some(ue=>ue.id===b.id))],I.value=$.sync_jobs||[],ee.value=$.graph&&$.graph.nodes&&$.graph.nodes.length?$.graph:s,j.value=$.ai_ready}async function M($){if(!ie.value){ie.value=!0,Q.value="";try{await $()}catch(b){Q.value=b.message}finally{ie.value=!1}}}async function he(){var $;R.value=null,C.value=t,E.value=n,ee.value=s,Q.value="";try{await Promise.all([Ml(),Ol()]);const b=await dm();for(const ue of b){const $e=je.value.find(Ge=>Ge.id===ue.id);$e?Object.assign($e,ue):g.demoKnowledgeDocuments.push({...ue,subspace:ue.subspace||"竞品研究",space_name:"清华优优 AI Wiki",doc_type:"document",chunk_count:(($=ue.sections)==null?void 0:$.length)||1})}}catch(b){Q.value=b.message}g.authUser&&await M(S)}ei(he),dt(()=>{var $;return($=g.authUser)==null?void 0:$.id},he);function ye($){var ue,$e,Ge,ut;if(Ae.value="index",Q.value="",xe.value==="concepts"){const k=Lt.value.find(Y=>Y.id===$);R.value={...k,space_name:"清华优优 AI Wiki",source_name:"知识关系",chunks:[{id:`${$}-1`,position:1,locator:k.subspace,text:((ue=k.node)==null?void 0:ue.description)||`「${k.title}」是清华优优内容资产中的${k.subspace}，可查看关联原文。`}],analysis:{subspace:"实体 / 概念",catalog:["内容资产","关联文档"],concepts:[k.title],entities:[{name:k.title,type:k.subspace}],summary:(($e=k.node)==null?void 0:$e.description)||`${k.title} 已关联 ${k.chunk_count} 条知识关系。`,framework:"概念 → 内容场景 → 执行动作",hook:"从家长真实场景切入。",body:"结合已有文档形成可复用内容。",cta:"加入下一次脚本或排期。",nodes:[{id:"c1",label:k.title}],edges:[]}},Se.value="analysis";return}if(xe.value==="sources"){const k=Nt.value.find(Oe=>Oe.id===$),Y=k.source;R.value={...k,space_name:Y.space_name,source_name:Y.uri,uri:Y.source_type==="video"?Y.uri:null,chunks:[{id:$+"-1",position:1,locator:"来源资料目录",text:Y.titles.join(`
`)}],local_content:"来源："+Y.uri+`
状态：`+(z[Y.status]||Y.status)+`
文档数：`+Y.document_count+`

`+Y.titles.join(`
`),analysis:null},Se.value="chunks";return}const b=je.value.find(k=>k.id===$);if(b!=null&&b.imported_file){R.value={...b,source_name:b.subject,chunks:(Ge=b.sections)!=null&&Ge.length?b.sections.map((k,Y)=>({id:$+"-"+Y,position:Y+1,...k})):[{id:$+"-1",position:1,locator:b.relative_path,text:b.local_content}],analysis:b.analysis||null},Se.value="chunks";return}if(b!=null&&b.local_content||(ut=b==null?void 0:b.uri)!=null&&ut.startsWith("blob:")){R.value={...b,source:"本地保存",source_name:"清华优优",chunks:[{id:$+"-1",position:1,locator:b.title,text:b.local_content||""}],analysis:{subspace:b.subspace,catalog:["脚本","优化稿"],concepts:["脚本优化"],entities:[],summary:b.local_content,framework:"钩子 → 场景 → 方法 → CTA",hook:"可复用脚本钩子。",body:b.local_content,cta:"加入内容排期。",nodes:[],edges:[]}},Se.value="chunks";return}if(String($).startsWith("demo-")||String($).startsWith("local-")||String($).startsWith("cue-")){R.value=l($),Se.value="chunks";return}M(async()=>{R.value=await Pd($),Se.value="chunks"})}function Ze($,b=0){const ue=new Date;return`${$}${b?` ${b}`:""} · ${ue.getFullYear()}-${String(ue.getMonth()+1).padStart(2,"0")}-${String(ue.getDate()).padStart(2,"0")}`}function Be(){M(async()=>{if(!g.authUser){const $=_n.value.name==="全部文档"?"短视频脚本":_n.value.name;if(D.value==="file"){if(!Ie.value)throw new Error("请选择可上传的文件");for(const b of F.value)if(["pending","failed"].includes(b.status)){b.status="uploading";try{const ue=await yo(b.file);g.demoKnowledgeDocuments.unshift({id:"local-"+Date.now()+"-"+b.file.name,title:b.file.name,subspace:$,space_name:"清华优优 AI Wiki",doc_type:"document",chunk_count:1,uri:URL.createObjectURL(b.file),file_type:b.file.type,parse_status:ue.local_content?"completed":"pending",...ue}),await Bl(g.demoKnowledgeDocuments[0].id,b.file,{...ue,subspace:$,space_name:"清华优优 AI Wiki"}),b.status="done"}catch(ue){b.status="failed",b.message=ue.message;const $e="local-failed-"+b.key;g.demoKnowledgeDocuments.some(Ge=>Ge.id===$e)||g.demoKnowledgeDocuments.unshift({id:$e,title:b.file.name,subspace:$,space_name:"清华优优 AI Wiki",doc_type:"document",uri:URL.createObjectURL(b.file),file_type:b.file.type,parse_status:"failed",parse_error:ue.message,chunk_count:0})}}if(F.value.some(b=>b.status==="failed"))throw new Error("部分文件未解析成功，失败原因见文件列表，可重试");F.value=[]}else{if(!me.value.trim())throw new Error("请粘贴资料正文");const b=q.value.trim()||Ze(D.value==="transcript"?"内容转写":"粘贴资料"),ue={id:`local-${Date.now()}`,title:b,subspace:$,space_name:"清华优优 AI Wiki",doc_type:D.value==="transcript"?"transcript":"document",chunk_count:Math.max(1,Math.ceil(me.value.length/300)),analyzed:!0,local_content:me.value.trim()};g.demoKnowledgeDocuments.unshift(ue),R.value={...ue,chunks:[{id:ue.id+"-1",position:1,locator:ue.title,text:ue.local_content}],analysis:{subspace:$,catalog:["资料","内容"],concepts:[],entities:[],summary:ue.local_content,framework:"导入 → 拆解 → 应用",hook:"从资料中提取可执行表达。",body:ue.local_content,cta:"用于下一次脚本或排期。",nodes:[],edges:[]}}}Se.value="chunks",me.value="",q.value="",P.value=!1,lt("资料已加入知识库");return}if(D.value==="file"){if(!Ie.value)throw new Error("请选择可上传的文件");for(const $ of F.value)if(["pending","failed"].includes($.status)){$.status="uploading";try{R.value=await zd($.file),$.status="done"}catch(b){$.status="failed",$.message=b.message}}}else{if(!me.value.trim())throw new Error("请粘贴资料正文");const $=D.value==="transcript";R.value=await ac({title:q.value.trim()||Ze($?"竞品转写":"粘贴资料"),text:me.value.trim(),source:$?"竞品视频转写文本":"粘贴文本"})}await S(),Se.value="chunks",me.value="",q.value="",P.value=!1})}function Ke(){M(async()=>{if(c(R.value.id)){const $=R.value;$.analysis=Q2({...$,local_content:$.local_content||Je.value}),$.analyzed=!0;const b=je.value.find(ue=>ue.id===$.id);b&&(b.analysis=$.analysis,b.analyzed=!0),Se.value="analysis";return}R.value=await Ld(R.value.id),Se.value="analysis",await S()})}function de(){if(!(!R.value||!window.confirm("删除这份文档和所有切片？"))){if(c(R.value.id)){h([R.value.id]),R.value=null,lt("文档已删除");return}M(async()=>{await Qo(R.value.id),R.value=null,await S()})}}function be($,b){var ue;if(window.confirm(`删除《${b}》及其所有切片？`)){if(c($)){h([$]),((ue=R.value)==null?void 0:ue.id)===$&&(R.value=null),lt("文档已删除");return}M(async()=>{var $e;await Qo($),(($e=R.value)==null?void 0:$e.id)===$&&(R.value=null),await S(),lt("文档已删除")})}}function Fe($){const b=new Set(W.value);b.has($)?b.delete($):b.add($),W.value=b}function Pe(){W.value=Bt.value?new Set:new Set(pt.value.map($=>$.id))}function _e(){W.value=new Set,J.value=""}function Ve(){const $=[...W.value];if(!$.length||!window.confirm(`删除选中的 ${$.length} 份文档及其所有切片？`))return;const b=$.filter(c),ue=$.filter($e=>!c($e));b.length&&h(b),ue.length&&M(async()=>{await Promise.all(ue.map($e=>Qo($e))),await S()}),R.value&&$.includes(R.value.id)&&(R.value=null),_e(),lt(`已删除 ${$.length} 份文档`)}function Gt(){const $=[...W.value],b=J.value.trim();if(!$.length||!b){Q.value="请先选择文档并输入新名称或名称前缀";return}const ue=$.filter(c),$e=$.filter(Ge=>!c(Ge));ue.forEach((Ge,ut)=>{const k=je.value.find(Y=>Y.id===Ge);k&&(k.title=$.length===1?b:`${b} · ${ut+1}`)}),$e.length&&M(async()=>{await Promise.all($e.map((Ge,ut)=>Nd(Ge,{title:$.length===1?b:`${b} · ${ut+1}`}))),await S()}),_e(),lt(`已重命名 ${$.length} 份文档`)}function Xt(){M(async()=>{if(!et.value.trim())throw new Error("请输入知识空间名称");await Fd({name:et.value.trim(),description:"独立知识空间",visibility:"private"}),et.value="",await S(),lt("知识空间已创建")})}return($,b)=>{var ue,$e,Ge,ut;return d(),f("section",l3,[o("header",r3,[b[27]||(b[27]=o("div",null,[o("h2",null,"知识库"),o("p",null,"把手工 SOP、话术、复盘和经营报表沉淀为可检索、可引用的 AI Wiki。")],-1)),o("div",null,[o("span",{class:we(["pill",{green:j.value}])},v(j.value?"AI 已配置":"AI 未配置"),3)])]),Q.value?(d(),f("div",a3,v(Q.value),1)):V("",!0),T.value?(d(),f("div",{key:1,class:"kb-modal-backdrop",onClick:b[3]||(b[3]=vt(k=>T.value=!1,["self"]))},[o("section",u3,[o("header",null,[b[28]||(b[28]=o("div",null,[o("h3",null,"管理知识空间与子库"),o("p",null,"创建、重命名或删除子库；删除子库不会删除其中资料。")],-1)),o("button",{onClick:b[0]||(b[0]=k=>T.value=!1)},"×")]),o("div",c3,[Qe(o("input",{"onUpdate:modelValue":b[1]||(b[1]=k=>U.value=k),placeholder:w.value?"子库名称":"新子库名称"},null,8,d3),[[_t,U.value]]),o("button",{class:"send",onClick:sn},v(w.value?"保存修改":"创建子库"),1),w.value?(d(),f("button",{key:0,onClick:b[2]||(b[2]=k=>{w.value=null,U.value=""})},"取消")):V("",!0)]),(d(!0),f(X,null,le(a.value,k=>(d(),f("div",{key:k.id,class:"manage-subspace"},[o("div",null,[o("b",null,v(k.name),1),o("small",null,v(k.desc),1)]),o("div",null,[o("button",{onClick:Y=>$n(k)},"编辑",8,p3),o("button",{disabled:k.id==="all",class:"doc-delete",onClick:Y=>Ns(k)},"删除",8,f3)])]))),128))])])):V("",!0),o("nav",v3,[(d(),f(X,null,le(N,k=>o("button",{key:k[0],class:we({active:Fs.value===k[0]}),onClick:Y=>us(k[0])},[Te(v(k[1]),1),ae[k[0]]?(d(),f("span",{key:0,class:"kb-info",tabindex:"0","aria-label":ae[k[0]],title:ae[k[0]],onClick:b[4]||(b[4]=vt(()=>{},["stop"])),onKeydown:b[5]||(b[5]=vt(()=>{},["stop"]))},[b[29]||(b[29]=Te("i",-1)),o("span",g3,v(ae[k[0]]),1)],40,m3)):V("",!0),k[0]==="sync"&&B.value?(d(),f("i",_3)):V("",!0)],10,h3)),64))]),m.value==="space"?(d(),f(X,{key:2},[o("div",y3,[o("div",null,[b[30]||(b[30]=o("span",null,"当前知识空间",-1)),o("h3",null,v(((ue=A.value)==null?void 0:ue.name)||"清华优优 AI Wiki"),1),o("button",{class:"space-manage",onClick:ln},"管理知识空间"),o("p",null,v((($e=A.value)==null?void 0:$e.description)||"学习方法、家长沟通与内容生产的知识资产。"),1)]),o("button",{class:"kb-stat",onClick:ws},[o("b",null,v(je.value.length),1),b[31]||(b[31]=o("small",null,"文档",-1))]),o("button",{class:"kb-stat",onClick:ks},[o("b",null,v(((Ge=xt.value.nodes)==null?void 0:Ge.length)||0),1),b[32]||(b[32]=o("small",null,"实体 / 概念",-1))]),o("button",{class:"kb-stat",onClick:Xn},[o("b",null,v(kt.value.length),1),b[33]||(b[33]=o("small",null,"资料来源",-1))])]),o("div",b3,[o("aside",w3,[o("div",{class:"subspace-head"},[b[34]||(b[34]=o("h3",null,"知识库子库",-1)),o("button",{title:"管理子库",onClick:ln},"＋")]),(d(!0),f(X,null,le(a.value,k=>(d(),f("button",{key:k.id,class:we({active:u.value===k.id}),onClick:Y=>{xe.value="documents",u.value=k.id}},[o("span",null,[o("b",null,v(k.name),1),o("small",null,v(k.desc),1)]),o("em",null,v(jt(k.id)),1)],10,k3))),128))]),o("aside",x3,[o("div",S3,[o("button",{class:we({active:Ae.value==="index"}),onClick:b[6]||(b[6]=k=>Ae.value="index")},"☷ 索引",2),o("button",{class:we({active:Ae.value==="log"}),onClick:b[7]||(b[7]=k=>{Ae.value="log",R.value=null})},"◷ 日志",2)]),o("div",$3,[o("div",null,[o("h3",null,v(Sn.value),1),o("small",null,v(pt.value.length)+" "+v(xe.value==="documents"?"份文档":"条记录"),1)])]),Qe(o("input",{"onUpdate:modelValue":b[8]||(b[8]=k=>te.value=k),placeholder:`搜索${Sn.value}`},null,8,C3),[[_t,te.value]]),u.value==="产品课程"?Qe((d(),f("select",{key:0,"onUpdate:modelValue":b[9]||(b[9]=k=>p.value=k),"aria-label":"课程学科"},[(d(),f(X,null,le(["全部","数学","物理","英语","语文"],k=>o("option",{key:k},v(k),1)),64))],512)),[[gs,p.value]]):V("",!0),xe.value==="documents"&&pt.value.length?(d(),f("div",T3,[o("label",null,[o("input",{type:"checkbox",checked:Bt.value,onChange:Pe},null,40,A3),b[35]||(b[35]=Te(" 全选",-1))]),W.value.size?(d(),f("span",E3,"已选 "+v(W.value.size),1)):V("",!0)])):V("",!0),xe.value==="documents"&&W.value.size?(d(),f("div",D3,[Qe(o("input",{"onUpdate:modelValue":b[10]||(b[10]=k=>J.value=k),placeholder:"新名称 / 名称前缀"},null,512),[[_t,J.value]]),o("button",{onClick:Gt},"批量重命名"),o("button",{class:"doc-delete",onClick:Ve},"批量删除"),o("button",{onClick:_e},"取消")])):V("",!0),pt.value.length?V("",!0):(d(),f("p",M3,"当前列表暂无内容。")),(d(!0),f(X,null,le(pt.value,k=>{var Y;return d(),f("div",{key:k.id,class:we(["kb-document",{active:((Y=R.value)==null?void 0:Y.id)===k.id}]),onClick:Oe=>ye(k.id)},[xe.value==="documents"?(d(),f("input",{key:0,type:"checkbox",checked:W.value.has(k.id),title:"选择文档",onClick:b[11]||(b[11]=vt(()=>{},["stop"])),onChange:Oe=>Fe(k.id)},null,40,I3)):V("",!0),o("div",R3,[o("b",{title:k.title},v(k.title),9,P3),o("small",null,v(k.subject||k.subspace||k.space_name||"默认子库")+" · "+v(k.doc_type==="concept"?"概念":k.doc_type==="source"?"数据源":k.doc_type==="dataset"?"数据表":"文档")+" · "+v(k.chunk_count)+" 条",1),o("em",null,v(k.analyzed?"已 AI 整理":"待整理"),1)]),xe.value==="documents"?(d(),f("button",{key:1,class:"doc-delete",title:"删除文档",onClick:vt(Oe=>be(k.id,k.title),["stop"])},"删除",8,L3)):V("",!0)],10,O3)}),128))]),o("main",null,[Ae.value==="log"?(d(),f("section",N3,[b[37]||(b[37]=o("h2",null,"知识库日志",-1)),(d(!0),f(X,null,le(ze.value,k=>(d(),f("button",{key:k.id,class:"activity-row",onClick:Y=>{xe.value="documents",ye(k.id)}},[o("span",{class:we(["source-label",k.kind])},v(k.action),3),o("div",null,[o("b",null,v(k.title),1),o("small",null,v(k.subspace),1)]),o("em",{class:we(["status",k.status])},v(k.status==="failed"?"失败":k.status==="pending"?"待解析":"成功"),3),b[36]||(b[36]=o("em",null,"查看正文 →",-1))],8,F3))),128))])):R.value?V("",!0):(d(),f("section",z3,[...b[38]||(b[38]=[o("p",null,"当前列表暂无内容，请添加资料。",-1)])])),xe.value==="documents"&&!P.value?(d(),f("button",{key:2,class:"kb-upload-trigger",onClick:b[12]||(b[12]=k=>P.value=!0)},"＋ 添加资料")):V("",!0),xe.value==="documents"&&P.value?(d(),f("div",{key:3,class:"card kb-upload",style:Rt({marginLeft:Ee.value.x+"px",marginTop:Ee.value.y+"px"})},[o("header",{onPointerdown:Ct},[b[39]||(b[39]=o("h3",null,"添加资料",-1)),o("button",{onClick:b[13]||(b[13]=k=>P.value=!1)},"×")],32),o("p",U3,"将资料加入「"+v(_n.value.name)+"」",1),o("nav",null,[(d(),f(X,null,le([{id:"file",label:"上传文件"},{id:"text",label:"粘贴文本"},{id:"transcript",label:"竞品转写"}],k=>o("button",{key:k.id,class:we({active:D.value===k.id}),onClick:Y=>D.value=k.id},v(k.label),11,j3)),64))]),D.value==="file"?(d(),f(X,{key:0},[o("div",{class:we(["kb-drop",{dragging:G.value}]),onDragover:b[15]||(b[15]=vt(k=>G.value=!ie.value,["prevent"])),onDragleave:b[16]||(b[16]=vt(k=>G.value=!1,["prevent"])),onDrop:vt(De,["prevent"])},[b[40]||(b[40]=o("strong",null,"拖拽文件到这里，或多选文件",-1)),b[41]||(b[41]=o("p",null,"最多 50 个文件，每个最大 50 MB。支持 PDF、DOCX、XLSX、PPTX、TXT、MD、CSV、TSV、SRT、VTT，以及 MP4、MOV、WEBM、M4V 视频（视频最大 200 MB）。",-1)),o("button",{onClick:b[14]||(b[14]=k=>H.value.click())},"选择文件"),o("input",{ref_key:"fileInput",ref:H,type:"file",multiple:"",hidden:"",accept:".pdf,.docx,.xlsx,.pptx,.txt,.md,.csv,.tsv,.srt,.vtt,.mp4,.mov,.webm,.m4v",onChange:fe},null,544)],34),F.value.length?(d(),f("div",B3,[o("header",null,[o("span",null,"已选择 "+v(F.value.length)+" / 50 · 已入库 "+v(Ne.value),1),o("button",{onClick:b[17]||(b[17]=k=>F.value=[])},"清空")]),(d(!0),f(X,null,le(F.value,k=>(d(),f("div",{key:k.key,class:"kb-queue-item"},[o("div",null,[o("b",null,v(k.file.name),1),o("small",null,v(z[k.status])+" "+v(k.message),1)]),o("button",{onClick:Y=>F.value=F.value.filter(Oe=>Oe.key!==k.key)},"移除",8,V3)]))),128))])):V("",!0)],64)):(d(),f(X,{key:1},[Qe(o("input",{"onUpdate:modelValue":b[18]||(b[18]=k=>q.value=k),placeholder:"资料名称"},null,512),[[_t,q.value]]),Qe(o("textarea",{"onUpdate:modelValue":b[19]||(b[19]=k=>me.value=k),placeholder:D.value==="transcript"?"粘贴竞品视频字幕或转写…":"粘贴脚本、SOP、话术或复盘正文…"},null,8,H3),[[_t,me.value]])],64)),o("button",{class:"send",disabled:ie.value||D.value==="file"&&!Ie.value,onClick:Be},v(ie.value?"处理中…":D.value==="file"?"批量解析 / 重试失败文件":"解析并入库"),9,W3)],4)):V("",!0),R.value?(d(),f("div",q3,[o("header",null,[o("div",null,[o("h3",null,v(R.value.title),1),o("small",null,v(R.value.space_name)+" · "+v(R.value.chunks.length)+" 段 · "+v(R.value.source_name||R.value.source),1),R.value.uri?(d(),f("a",{key:0,href:R.value.uri,target:"_blank",class:"source-open"},"打开原文件 ↗",8,K3)):V("",!0)]),o("div",null,[o("button",{disabled:ie.value||!j.value&&!R.value.local_content&&!Je.value,onClick:Ke},v(se(g).authUser?"AI 解析":"解析知识页"),9,G3),o("button",{onClick:de},"删除")])]),o("nav",null,[o("button",{class:we({active:Se.value==="chunks"}),onClick:b[20]||(b[20]=k=>Se.value="chunks")},"原始文件",2),o("button",{class:we({active:Se.value==="analysis"}),onClick:b[21]||(b[21]=k=>Se.value="analysis")},"AI 知识页",2),o("button",{class:we({active:Se.value==="graph"}),onClick:b[22]||(b[22]=k=>Se.value="graph")},"证据关系图",2)]),(d(),f("div",{class:"kb-inspect-body",key:R.value.id+":"+Se.value,role:"region","aria-label":"文档内容，独立滚动",tabindex:"0"},[Se.value==="chunks"?(d(),f(X,{key:0},[/\.pptx?$/i.test(R.value.title||"")&&R.value.uri?(d(),En(o3,{key:0,uri:R.value.uri,title:R.value.title},null,8,["uri","title"])):(ut=R.value.sheets)!=null&&ut.length?(d(),En(Y5,{key:1,sheets:R.value.sheets},null,8,["sheets"])):R.value.media_type==="video"?(d(),f(X,{key:2},[o("video",{src:R.value.uri,controls:"",playsinline:"",preload:"metadata",class:"knowledge-video"},null,8,X3),o("p",null,v(R.value.parse_method||"视频原件"),1),o("pre",Y3,v(R.value.local_content||R.value.parse_error||"暂无字幕，原片可播放。"),1)],64)):Tt.value?(d(),f("iframe",{key:3,src:R.value.uri,class:"original-file",title:R.value.title+"原始文件"},null,8,J3)):/\.(png|jpe?g|webp)$/i.test(R.value.uri||"")?(d(),f("img",{key:4,src:R.value.uri,alt:R.value.title,style:{"max-width":"100%",height:"auto"}},null,8,Z3)):R.value.imported_file&&!R.value.local_content?(d(),f("p",Q3,"此文件已保留原件，可点击上方“打开原文件”查看。")):R.value.local_content||Je.value?(d(),f("pre",e_,v(R.value.local_content||Je.value),1)):ke.value?(d(),f("p",t_,"正在读取原文…")):R.value.uri?(d(),f("p",n_,"暂无可显示的原文，请主动点击上方链接下载原文件。")):(d(!0),f(X,{key:9},le(R.value.chunks,k=>(d(),f("article",{key:k.id,class:"kb-chunk"},[o("b",null,"#"+v(k.position)+" · "+v(k.locator),1),o("p",null,v(k.text),1)]))),128))],64)):R.value.analysis?Se.value==="analysis"?(d(),f(X,{key:2},[R.value.analysis.extraction_method?(d(),f("p",i_,v(R.value.analysis.extraction_method),1)):V("",!0),o("div",o_,[o("article",null,[b[42]||(b[42]=o("span",null,"子库分类",-1)),o("b",null,v(R.value.analysis.subspace||"待确认"),1)]),o("article",null,[b[43]||(b[43]=o("span",null,"框架目录",-1)),o("b",null,v((R.value.analysis.catalog||[]).join(" / ")||"待确认"),1)]),o("article",null,[b[44]||(b[44]=o("span",null,"核心概念",-1)),o("b",null,v((R.value.analysis.concepts||[]).join(" · ")||"待确认"),1)]),o("article",null,[b[45]||(b[45]=o("span",null,"实体",-1)),o("b",null,v((R.value.analysis.entities||[]).map(k=>`${k.name}${k.type?`（${k.type}）`:""}`).join(" · ")||"待确认"),1)])]),(d(),f(X,null,le([{key:"summary",label:"摘要"},{key:"framework",label:"方法框架"},{key:"hook",label:"钩子"},{key:"body",label:"主体"},{key:"cta",label:"CTA"}],k=>o("article",{key:k.key,class:"kb-chunk"},[o("h4",null,v(k.label),1),o("p",null,v(R.value.analysis[k.key]||"—"),1)])),64))],64)):(d(),f(X,{key:3},[b[46]||(b[46]=o("p",null,"关系只保留能回到原文连续引文的证据。",-1)),st(Za,{graph:{nodes:R.value.analysis.nodes||[],edges:(R.value.analysis.edges||[]).map(k=>({...k,document_id:R.value.id,document_title:R.value.title}))},onOpenDocument:b[23]||(b[23]=k=>{xe.value="documents",ye(k.id)})},null,8,["graph"])],64)):(d(),f("p",s_,"尚未 AI 解析。配置模型后可提取摘要、子库分类、目录框架、实体、概念和内容结构。"))]))])):V("",!0)])])],64)):m.value==="sources"?(d(),f("section",l_,[o("header",null,[b[47]||(b[47]=o("div",null,[o("h3",null,"数据源"),o("p",null,"文件与粘贴文本统一登记；每一份资料都可追溯解析状态。")],-1)),o("button",{onClick:b[24]||(b[24]=k=>{m.value="space",D.value="file"})},"上传文件")]),b[48]||(b[48]=o("div",{class:"table-head"},[o("span",null,"名称"),o("span",null,"类型"),o("span",null,"知识空间"),o("span",null,"同步状态"),o("span",null,"文档数")],-1)),(d(!0),f(X,null,le(kt.value,k=>(d(),f("div",{key:k.id,class:"table-row"},[o("div",null,[o("b",null,v(k.name),1),o("small",null,v(k.uri||"本地导入"),1)]),o("span",null,v(oe[k.source_type]||k.source_type),1),o("span",null,v(k.space_name),1),o("span",{class:we(["status",k.status])},[Te(v(z[k.status]||k.status),1),k.error_message?(d(),f("small",r_,v(k.error_message),1)):V("",!0)],2),o("b",null,v(k.document_count),1)]))),128)),kt.value.length?V("",!0):(d(),f("p",a_,"暂无数据源。"))])):m.value==="sync"?(d(),f("section",u_,[o("input",{ref_key:"retryInput",ref:ge,type:"file",hidden:"",accept:".pdf,.pptx,.docx,.txt,.md,.mp4,.mov,.webm,.m4v",onChange:y},null,544),o("header",null,[b[49]||(b[49]=o("div",null,[o("h3",null,"同步状态"),o("p",null,"展示解析、索引和错误阶段，便于重试与排障。")],-1)),o("button",{onClick:he},"刷新")]),o("div",c_,[(d(),f(X,null,le([["all","全部"],["failed","失败"],["pending","待解析"],["completed","成功"]],k=>o("button",{key:k[0],class:we({active:mt.value===k[0]}),onClick:Y=>mt.value=k[0]},v(k[1])+" · "+v(k[0]==="all"?wt.value.length:wt.value.filter(Y=>Y.status===k[0]).length),11,d_)),64))]),(d(!0),f(X,null,le(Z.value,k=>(d(),f("div",{key:k.id,class:"sync-row"},[o("div",null,[o("b",null,v(k.source_name),1),o("small",null,v(k.source_type)+" · "+v(k.stage),1)]),o("div",p_,[o("i",{style:Rt({width:`${k.progress||0}%`})},null,4)]),o("span",{class:we(["status",k.status])},v(k.status==="failed"?"失败":k.status==="completed"?"成功":"待解析")+" · "+v(k.progress||0)+"%",3),o("p",null,v(k.message),1),k.status!=="completed"&&c(k.id)?(d(),f("button",{key:0,onClick:Y=>x(k)},"重新上传",8,f_)):V("",!0)]))),128)),Z.value.length?V("",!0):(d(),f("p",v_,"当前筛选下暂无同步任务。"))])):m.value==="graph"?(d(),f("section",h_,[o("header",null,[b[50]||(b[50]=o("div",null,[o("h3",null,"知识图谱"),o("p",null,"跨文档聚合实体、概念及其有证据的关系。")],-1)),o("span",null,v(xt.value.document_count||0)+" 份已解析文档",1)]),st(Za,{graph:xt.value,onOpenDocument:b[25]||(b[25]=k=>{m.value="space",xe.value="documents",u.value="all",p.value="全部",te.value="",ye(k.id)})},null,8,["graph"])])):(d(),f("section",m_,[b[51]||(b[51]=o("h3",null,"知识空间",-1)),b[52]||(b[52]=o("p",null,"按项目、账号或团队建立独立上下文。",-1)),(d(!0),f(X,null,le(O.value,k=>(d(),f("div",{key:k.id,class:"space-row"},[o("div",null,[o("b",null,v(k.name),1),o("small",null,v(k.description||"私有空间"),1)]),o("span",null,v(k.visibility==="team"?"团队":"私有")+" · "+v(k.document_count)+" 文档",1)]))),128)),o("div",g_,[Qe(o("input",{"onUpdate:modelValue":b[26]||(b[26]=k=>et.value=k),placeholder:"新知识空间名称"},null,512),[[_t,et.value]]),o("button",{onClick:Xt},"创建")])]))])}}},y_=Dt(__,[["__scopeId","data-v-0f1a40dc"]]),b_={class:"scripts-page"},w_={class:"src-line"},k_=["href"],x_={key:0,class:"video-grid script-grid"},S_=["onClick"],$_={class:"thumb"},C_=["src","alt"],T_={class:"dur"},A_={class:"meta"},E_={class:"title"},D_={class:"tag"},M_={class:"metrics"},O_={class:"stats"},I_={key:1,class:"script-workspace"},R_={class:"script-selected-panel"},P_={class:"selected-video-card"},L_={class:"thumb"},N_=["src","alt"],F_={class:"dur"},z_={class:"meta"},U_={class:"title"},j_={class:"tag"},B_={class:"metrics"},V_={class:"card script-detail"},H_={class:"detail-actions"},W_={__name:"ScriptsView",setup(e){const t=K(null);Kn(()=>{g.scriptContext=null});const n=[{id:"demo-script-1",t:"高中生压力大，送给他这 3 句话",from:"视频号脚本",dur:"00:60",tag:"亲子沟通",cover:"./assets/covers/pressure-3sentences.png",hook:"月考卷先别急着收起来：这 3 类失分，决定孩子接下来一个月能不能追上来。",points:["先把错题按“不会、会但错、时间不够”分成三类","每天只回炉一类题，连续坚持 7 天","家长只问一个问题：今天哪一类错题更少了？"],cta:"评论区回复「月考」，领取 7 天错题复盘表。",views:"12.8w",comments:"1,286",likes:"9,642",shares:"2,118"},{id:"demo-script-2",t:"清华生活 vlog",from:"视频号脚本",dur:"00:50",tag:"清华生活",cover:"./assets/covers/qinghua-vlog.png",hook:"孩子考完只说“没发挥好”，家长看这 3 个位置，就知道问题到底在哪。",points:["看丢分分布：基础、计算还是综合题","看卷面痕迹：空白、涂改还是时间不足","把评价换成共同复盘：先问哪题最可惜"],cta:"收藏这条，下一次月考后照着问。",views:"8.7w",comments:"936",likes:"6,284",shares:"1,562"},{id:"demo-script-3",t:"英语上 140，有哪几个步骤",from:"视频号脚本",dur:"00:45",tag:"英语学习",cover:"./assets/covers/english-140.png",hook:"期中前一周最危险的不是题没刷够，而是每天都在重复低效努力。",points:["周一到周三：用错题定位知识漏洞","周四到周五：做两套限时小卷","周末：只复盘错因和时间分配，不再开新战线"],cta:"需要一周计划模板，在评论区打「节奏」。",views:"10.4w",comments:"1,053",likes:"7,891",shares:"1,846"},{id:"demo-script-4",t:"高一学生，是怎样毁掉自己的",from:"视频号脚本",dur:"00:55",tag:"高中学习",cover:"./assets/covers/gaoyi-mistakes.png",hook:"成绩一波动，家长最容易说的三句话，可能刚好让孩子更不想学习。",points:["不说“你怎么又退步了”","不说“隔壁谁谁考得多好”","把“你要努力”换成“我们一起找一个能改变的动作”"],cta:"转给需要的家长，下一条讲怎么开场。",views:"7.2w",comments:"824",likes:"5,376",shares:"1,204"}],s=ce(()=>g.scripts.length?g.scripts.filter(l=>l.from!=="Cue 生成"&&l.src!=="Cue 生成"):n);dt(t,l=>{g.scriptContext=l?{title:l.t,hook:l.hook||"从一个具体家长场景切入。",points:l.points||["建立共鸣","给出方法","引导行动"],cta:l.cta||"评论区回复关键词领取行动卡。",duration:l.dur,body:`# ${l.t}

## 0–3 秒｜钩子
${l.hook||"先从一个具体的家长焦虑场景切入，再给出当天能执行的一步。"}

## 3–12 秒｜建立共鸣
很多家长一看到分数就开始着急，但真正要先看的，是孩子这张卷子里的失分模式。镜头切到试卷局部，字幕突出：不是分数，是失分模式。

## 12–45 秒｜核心方法
${(l.points||["用具体场景建立共鸣","给出三步可执行的方法","用评论互动承接下一步"]).join(`
`)}

## 45–60 秒｜行动与 CTA
${l.cta||"评论区回复关键词，领取本周行动卡。"}`}:null});function i(){if(!t.value)return;const l=t.value;g.knowledgeSaveDraft={title:l.t,subspace:"短视频脚本",content:`# ${l.t}

## 0–3 秒｜钩子
${l.hook||"先从一个具体的家长焦虑场景切入，再给出当天能执行的一步。"}

## 12–45 秒｜核心方法
${(l.points||["用一个具体场景建立共鸣","给出三步可执行的方法","用评论互动承接下一步"]).map((r,a)=>`${a+1}. ${r}`).join(`
`)}

## 45–60 秒｜行动与 CTA
${l.cta||"评论区回复关键词，领取本周行动卡。"}`}}return(l,r)=>(d(),f("div",b_,[o("div",w_,[r[3]||(r[3]=o("span",null,"来源：",-1)),o("a",{href:se(Kd),target:"_blank"},"视频号脚本",8,k_),r[4]||(r[4]=o("span",{class:"src-tag"},"内容数据",-1))]),t.value?(d(),f("section",I_,[o("aside",R_,[o("button",{class:"back-to-library",onClick:r[0]||(r[0]=a=>t.value=null)},"‹ 返回脚本库"),o("div",P_,[o("div",L_,[o("img",{src:t.value.cover,alt:t.value.t},null,8,N_),o("span",F_,v(t.value.dur),1)]),o("div",z_,[o("div",U_,[o("span",j_,v(t.value.tag),1),Te(v(t.value.t),1)]),o("div",B_,[o("span",null,"▶ "+v(t.value.views),1),o("span",null,"◌ "+v(t.value.comments),1),o("span",null,"♥ "+v(t.value.likes),1),o("span",null,"↗ "+v(t.value.shares),1)]),r[6]||(r[6]=o("small",null,"已选视频卡片",-1))])])]),o("main",V_,[o("header",null,[o("div",null,[r[7]||(r[7]=o("span",{class:"eyebrow"},"SHORT VIDEO SCRIPT · 脚本稿",-1)),o("h2",null,v(t.value.t),1),o("p",null,v(t.value.from)+" · "+v(t.value.dur)+" · 可直接用于拍摄",1)]),o("button",{class:"close",title:"返回脚本库",onClick:r[1]||(r[1]=a=>t.value=null)},"×")]),r[11]||(r[11]=o("div",{class:"script-info"},[o("div",null,[o("span",null,"目标"),o("b",null,"让家长获得一个当下就能执行的复盘动作，并承接评论区互动。")]),o("div",null,[o("span",null,"镜头"),o("b",null,"正面半身口播 + 手持月考卷 / 错题本 B-roll。")])],-1)),o("article",null,[r[8]||(r[8]=o("h3",null,"0–3 秒｜钩子",-1)),o("p",null,v(t.value.hook||"先从一个具体的家长焦虑场景切入，再给出当天能执行的一步。"),1)]),r[12]||(r[12]=o("article",null,[o("h3",null,"3–12 秒｜建立共鸣"),o("p",null,"“很多家长一看到分数就开始着急，但真正要先看的，是孩子这张卷子里的失分模式。”镜头切到试卷局部，字幕突出“不是分数，是失分模式”。")],-1)),o("article",null,[r[9]||(r[9]=o("h3",null,"12–45 秒｜核心方法",-1)),o("ol",null,[(d(!0),f(X,null,le(t.value.points||["用具体场景建立共鸣","给出三步可执行的方法","用评论互动承接下一步"],a=>(d(),f("li",{key:a},v(a),1))),128))])]),o("article",null,[r[10]||(r[10]=o("h3",null,"45–60 秒｜行动与 CTA",-1)),o("p",null,v(t.value.cta||"评论区回复关键词，领取本周行动卡。"),1)]),o("div",H_,[o("button",{class:"knowledge-action",onClick:i},"加入知识库"),o("button",{onClick:r[2]||(r[2]=a=>t.value=null)},"返回脚本卡片")])])])):(d(),f("section",x_,[(d(!0),f(X,null,le(s.value,a=>(d(),f("button",{key:a.id,class:"video-card script-card",onClick:u=>t.value=a},[o("div",$_,[o("img",{src:a.cover,alt:a.t},null,8,C_),o("span",T_,v(a.dur),1)]),o("div",A_,[o("div",E_,[o("span",D_,v(a.tag),1),Te(v(a.t),1)]),o("div",M_,[o("span",null,"▶ "+v(a.views||"—"),1),o("span",null,"◌ "+v(a.comments||"—"),1),o("span",null,"♥ "+v(a.likes||"—"),1),o("span",null,"↗ "+v(a.shares||"—"),1)]),o("div",O_,[o("span",null,"来源："+v(a.from),1),r[5]||(r[5]=o("b",null,"查看完整脚本 →",-1))])])],8,S_))),128))]))]))}},q_=Dt(W_,[["__scopeId","data-v-af94ddab"]]),pl=[[0,5.1,0],[.0029,12.3,1],[.0058,23.6,1],[.0086,29.6,1],[.0115,33.4,1],[.0144,34.6,1],[.0173,34.9,1],[.0201,33.9,1],[.023,32.3,1],[.0259,31.2,1],[.0288,33.5,1],[.0316,37.5,1],[.0345,41.4,1],[.0374,44.6,1],[.0403,47.7,1],[.0431,52.2,1],[.046,57.8,1],[.0489,63.1,1],[.0518,66.8,1],[.0547,68.9,1],[.0575,69.8,1],[.0604,69.9,1],[.0633,69.2,1],[.0662,68.3,1],[.069,67.7,1],[.0719,67.4,1],[.0748,67.1,1],[.0777,67.6,1],[.0805,69.3,1],[.0834,71.3,1],[.0863,70.7,1],[.0892,67.6,1],[.092,65,1],[.0949,65.9,1],[.0978,70.1,1],[.1007,74.9,1],[.1035,80.3,1],[.1064,83.8,1],[.1093,86.5,1],[.1122,87.5,1],[.1151,87.7,1],[.1179,88.2,1],[.1208,89.5,1],[.1237,90.9,1],[.1266,91.8,1],[.1294,90.5,1],[.1323,88.7,1],[.1352,87.5,1],[.1381,89.9,1],[.1409,92.9,1],[.1438,94.4,1],[.1467,91.9,1],[.1496,88.7,1],[.1524,87.6,1],[.1553,90.6,1],[.1582,94.3,1],[.1611,97.9,1],[.164,100.2,1],[.1668,102.9,1],[.1697,106.5,1],[.1726,111.3,1],[.1755,115,1],[.1783,114.2,1],[.1812,111,1],[.1841,108.5,1],[.187,108.4,1],[.1898,109.2,1],[.1927,110.7,1],[.1956,113.3,1],[.1985,115.9,1],[.2013,118,1],[.2042,117.9,1],[.2071,117.5,1],[.21,117,1],[.2128,116.8,1],[.2157,116.3,1],[.2186,116.1,1],[.2215,116.8,1],[.2244,118.2,1],[.2272,120,1],[.2301,120.9,1],[.233,121.7,1],[.2359,121.9,1],[.2387,120.9,1],[.2416,119.1,1],[.2445,116.7,1],[.2474,114.8,1],[.2502,113.4,1],[.2531,113.1,1],[.256,113.4,1],[.2589,114.3,1],[.2617,115.6,1],[.2646,117.5,1],[.2675,119.8,1],[.2704,121.8,1],[.2733,123.6,1],[.2761,124.6,1],[.279,124.4,1],[.2819,123.4,1],[.2848,122.3,1],[.2876,122.1,1],[.2905,122.2,1],[.2934,122.9,1],[.2963,124.9,1],[.2991,128.2,1],[.302,130.7,1],[.3049,131,1],[.3078,131,1],[.3106,131,1],[.3135,130.7,1],[.3164,129.1,1],[.3193,127.4,1],[.3221,125.8,1],[.325,124.1,1],[.3279,123.2,1],[.3308,124.7,1],[.3337,127.3,1],[.3365,129.1,1],[.3394,124.7,1],[.3423,120.1,1],[.3452,117,1],[.348,117,1],[.3509,117,1],[.3538,117,1],[.3567,116.4,1],[.3595,115.7,1],[.3624,115,1],[.3653,114.8,1],[.3682,114.4,1],[.371,113.3,1],[.3739,111.3,1],[.3768,108.6,1],[.3797,106.1,9.2],[.3826,104,88.2],[.3854,102.1,202.1],[.3883,100.4,266.7],[.3912,99,336.4],[.3941,97.6,369.2],[.3969,95.8,369.2],[.3998,94.1,282.1],[.4027,91.8,24.6],[.4056,90,1],[.4084,88.3,1],[.4113,86.5,2.1],[.4142,84.7,31.8],[.4171,82.7,163.1],[.4199,81.4,200],[.4228,80.4,194.9],[.4257,79.8,82.1],[.4286,79.1,6.2],[.4314,77.8,1],[.4343,76.7,1],[.4372,76,1],[.4401,76,1],[.443,76,1],[.4458,76,10.3],[.4487,75.1,172.3],[.4516,0,572.3],[.4545,73.1,600],[.4573,0,530.3],[.4602,73.7,134.4],[.4631,73.8,4.1],[.466,72.2,1],[.4688,69.8,1],[.4717,68,9.2],[.4746,67.4,86.2],[.4775,67.1,196.9],[.4803,67.4,200],[.4832,69.5,144.6],[.4861,71.6,28.7],[.489,72.4,1],[.4919,70.6,1],[.4947,68.1,1],[.4976,66.4,1],[.5005,65.5,1],[.5034,65,1],[.5062,65,1],[.5091,65,1],[.512,65,1],[.5149,65,1],[.5177,64.6,1],[.5206,64.1,1],[.5235,63.8,1],[.5264,63.3,1],[.5292,63.1,1],[.5321,63.8,1],[.535,65.9,1],[.5379,67.5,1],[.5407,66.1,1],[.5436,63.9,1],[.5465,62.2,1],[.5494,62.5,1],[.5523,63.1,1],[.5551,64.3,1],[.558,65.6,1],[.5609,67.2,1],[.5638,67.8,1],[.5666,66.3,1],[.5695,64.4,1],[.5724,63.4,7.2],[.5753,65.5,81],[.5781,67.5,195.9],[.581,68.4,200],[.5839,66.9,179.5],[.5868,64.7,96.4],[.5896,64.4,55.4],[.5925,0,407.2],[.5954,0,596.9],[.5983,0,599],[.6012,0,390.8],[.604,64.9,70.8],[.6069,62,1],[.6098,58.6,1],[.6127,55.5,1],[.6155,54.9,1],[.6184,54.9,1],[.6213,54.9,1],[.6242,55.5,1],[.627,57.4,1],[.6299,59.4,1],[.6328,60.5,1],[.6357,60.9,1],[.6385,60.9,1],[.6414,60.8,1],[.6443,60.3,1],[.6472,60.2,1],[.65,60.4,1],[.6529,61.3,1],[.6558,61.9,1],[.6587,60.5,1],[.6616,58.9,1],[.6644,57.3,1],[.6673,57.9,1],[.6702,59.5,1],[.6731,61.3,1],[.6759,62.9,1],[.6788,64.4,1],[.6817,64.9,1],[.6846,64.1,1],[.6874,63.1,1],[.6903,61.6,1],[.6932,60.4,1],[.6961,59.5,1],[.6989,59.5,1],[.7018,61.3,1],[.7047,63.8,1],[.7076,65.2,1],[.7105,65.8,1],[.7133,65.9,1],[.7162,65.7,1],[.7191,64.4,1],[.722,62.8,1],[.7248,61.6,1],[.7277,60.9,1],[.7306,60.2,1],[.7335,59.6,1],[.7363,59,1],[.7392,58.3,1],[.7421,57.3,1],[.745,56.1,1],[.7478,55.3,1],[.7507,56.8,1],[.7536,59.1,1],[.7565,61.6,1],[.7593,61.4,1],[.7622,60.4,1],[.7651,59,1],[.768,56.5,1],[.7709,54.2,1],[.7737,53.1,1],[.7766,53.6,1],[.7795,54.6,1],[.7824,54.8,1],[.7852,54,1],[.7881,52.2,1],[.791,51.2,1],[.7939,52.9,1],[.7967,54.9,1],[.7996,55.5,21.5],[.8025,0,221.5],[.8054,0,366.2],[.8082,50.3,370.3],[.8111,0,304.6],[.814,0,218.5],[.8169,52.2,200],[.8198,52.4,200],[.8226,52.8,200],[.8255,53.8,200],[.8284,55.4,176.4],[.8313,56.7,27.7],[.8341,56.8,1],[.837,56.7,1],[.8399,56.2,1],[.8428,55.8,1],[.8456,55.4,1],[.8485,55.2,1],[.8514,55.6,1],[.8543,57.4,1],[.8571,59.5,1],[.86,60.8,1],[.8629,61.7,1],[.8658,61.9,1],[.8686,61.7,1],[.8715,61.5,1],[.8744,61,1],[.8773,63.2,1],[.8802,65.6,1],[.883,68,1],[.8859,67.8,1],[.8888,67.5,1],[.8917,66.9,17.4],[.8945,66.3,194.9],[.8974,0,587.7],[.9003,63.7,600],[.9032,0,526.2],[.906,60.3,86.2],[.9089,58.5,4.1],[.9118,56.6,1],[.9147,54.9,1],[.9175,54,1],[.9204,53.2,1],[.9233,53,1],[.9262,53,1],[.9291,53,1],[.9319,53,1],[.9348,53.2,1],[.9377,54.4,1],[.9406,57,1],[.9434,59.5,1],[.9463,62.5,1],[.9492,64.5,1],[.9521,63.8,1],[.9549,61.7,1],[.9578,59.7,1],[.9607,58.6,1],[.9636,58.5,1],[.9664,58,1],[.9693,56.7,1],[.9722,54.7,1],[.9751,53.2,1],[.9779,55,1],[.9808,57.2,1],[.9837,58.9,1],[.9866,59,1],[.9895,59,1],[.9923,59,1],[.9952,59.1,1],[.9981,59,1]],K_={class:"native-live-chart"},G_=["y1","y2"],X_=["y"],Y_=["y"],J_=["d"],Z_=["d"],Q_=["d"],e4=["x"],t4={key:0},n4=["x1","x2"],s4=["cx","cy"],i4=["aria-label","onPointerenter","onFocus","onClick","onKeydown"],o4=["x1","x2","y1"],l4=["cx","cy"],r4=["x","y"],a4={key:0,class:"node-tooltip",role:"status"},u4={__name:"LiveTrendChart",setup(e){const t=K(null),n=K(null),s=[{id:"A",fraction:36/118,value:131,title:"峰值 131 人 · 高光话题",detail:"中档题的重要性",tip:"金句：“不要跨阶段刷题”"},{id:"B",fraction:70/118,value:140,title:"成交高峰 · 有效销售",detail:"成交额破 3000，与观众互动、自然塑品",tip:"建议沉淀为互动 → 匹配需求 → 自然塑品 SOP"},{id:"C",fraction:47/118,value:90,title:"迅速掉人 · 风险点",detail:"计算问题，讲解节奏拖沓",tip:"建议换话题或切入互动，拉回在线人数"}],i=c=>58+c[0]*884,l=(c,h)=>310-c/h*250,r=(c,h)=>pl.map((m,C)=>(C?"L":"M")+i(m).toFixed(1)+","+l(m[c],h).toFixed(1)).join(" "),a=["20:22","20:32","20:42","20:52","21:02","21:12","21:22","21:32","21:42","21:52","22:02","22:12"];function u(c){const h=1222+Math.round(c[0]*118);return String(Math.floor(h/60)).padStart(2,"0")+":"+String(h%60).padStart(2,"0")}function p(c){const h=c.currentTarget.getBoundingClientRect(),m=Math.max(0,Math.min(1,((c.clientX-h.left)/h.width*1e3-58)/884));t.value=pl[Math.round(m*(pl.length-1))]}return(c,h)=>(d(),f("div",K_,[h[5]||(h[5]=vo('<header data-v-f68185fa><strong data-v-f68185fa>整场在线人数与成交金额趋势</strong><span data-v-f68185fa>2025-11-15 · 20:22 开播</span></header><div class="chart-metrics" data-v-f68185fa><span data-v-f68185fa>成交金额 <b data-v-f68185fa>¥3,729</b></span><span data-v-f68185fa>成交订单 <b data-v-f68185fa>11</b></span><span data-v-f68185fa>成交人数 <b data-v-f68185fa>10</b></span><span data-v-f68185fa>平均在线 <b data-v-f68185fa>75</b></span><span data-v-f68185fa>进房人数 <b data-v-f68185fa>3,449</b></span><span data-v-f68185fa>离开人数 <b data-v-f68185fa>3,423</b></span></div><div class="chart-legend" data-v-f68185fa><span data-v-f68185fa><i data-v-f68185fa></i>在线人数（人）</span><span data-v-f68185fa><i class="sale" data-v-f68185fa></i>成交金额（元，右轴）</span></div>',3)),(d(),f("svg",{viewBox:"0 0 1000 365",role:"img","aria-label":"直播在线人数和成交金额双轴曲线",onPointermove:p,onPointerleave:h[2]||(h[2]=m=>t.value=null)},[h[3]||(h[3]=o("defs",null,[o("linearGradient",{id:"live-area",x1:"0",y1:"0",x2:"0",y2:"1"},[o("stop",{offset:"0","stop-color":"#bd244a","stop-opacity":".5"}),o("stop",{offset:"1","stop-color":"#27161a","stop-opacity":".1"})])],-1)),(d(),f(X,null,le([0,20,40,60,80,100,120,140],m=>o("g",{key:m},[o("line",{x1:"58",x2:"942",y1:l(m,140),y2:l(m,140),stroke:"#35292c"},null,8,G_),o("text",{x:"47",y:l(m,140)+4,"text-anchor":"end"},v(m),9,X_)])),64)),(d(),f(X,null,le([0,100,200,300,400,500,600],m=>o("text",{key:"money"+m,x:"951",y:l(m,600)+4},"¥"+v(m),9,Y_)),64)),o("path",{d:r(1,140)+" L942,310 L58,310 Z",fill:"url(#live-area)"},null,8,J_),o("path",{d:r(1,140),fill:"none",stroke:"#d82b56","stroke-width":"2.5","stroke-linejoin":"round"},null,8,Z_),o("path",{d:r(2,600),fill:"none",stroke:"#e69bae","stroke-width":"2","stroke-linejoin":"round"},null,8,Q_),(d(),f(X,null,le(a,(m,C)=>o("text",{key:m,x:58+C*10/118*884,y:"334","text-anchor":"middle"},v(m),9,e4)),64)),t.value?(d(),f("g",t4,[o("line",{x1:i(t.value),x2:i(t.value),y1:"60",y2:"310",stroke:"#775960","stroke-dasharray":"4 4"},null,8,n4),o("circle",{cx:i(t.value),cy:l(t.value[1],140),r:"4",fill:"#a9193d"},null,8,s4)])):V("",!0),(d(),f(X,null,le(s,m=>o("g",{key:m.id,class:"chart-node",role:"button",tabindex:"0","aria-label":m.id+"："+m.title,onPointerenter:C=>n.value=m,onPointerleave:h[0]||(h[0]=C=>n.value=null),onFocus:C=>n.value=m,onBlur:h[1]||(h[1]=C=>n.value=null),onClick:vt(C=>n.value=m,["stop"]),onKeydown:[Wn(C=>n.value=m,["enter"]),Wn(vt(C=>n.value=m,["prevent"]),["space"])]},[o("line",{x1:58+m.fraction*884,x2:58+m.fraction*884,y1:l(m.value,140),y2:"310",stroke:"#63172a","stroke-dasharray":"4 4",opacity:".4"},null,8,o4),o("circle",{cx:58+m.fraction*884,cy:l(m.value,140),r:"16",fill:"#63172a",stroke:"white","stroke-width":"3"},null,8,l4),o("text",{x:58+m.fraction*884,y:l(m.value,140)+5,"text-anchor":"middle",class:"node-letter"},v(m.id),9,r4)],40,i4)),64))],32)),n.value?(d(),f("div",a4,[o("b",null,v(n.value.id)+" · "+v(n.value.title),1),o("p",null,v(n.value.detail),1),o("span",null,v(n.value.tip),1)])):V("",!0),o("footer",null,[Te(v(t.value?u(t.value)+" · 在线约 "+Math.round(t.value[1])+" 人 · 成交金额约 ¥"+Math.round(t.value[2]):"在线峰值 131 人 · 移动鼠标查看曲线节点"),1),h[4]||(h[4]=o("small",null,"曲线按后台截图提取，节点数值为截图估读；汇总指标沿用原始数据。",-1))])]))}},c4=Dt(u4,[["__scopeId","data-v-f68185fa"]]),d4={"2025-05-27":{page:1,text:`Day1-5.27

•
直播时间：1h10min
•
销售额：0
•
脚本总结：
◦
塑品不⾜，没有逼单话术
◦
不够强调稀缺性
◦
直播前期⼲货⽐较冗⻓
◦
讲：⾼考物理满分-流量陡升
◦
讲案例：每个部分太⻓
•
直播状态总结：
◦
直播声⾳⽐较紧、对产品不够熟悉
◦
不够⾃信

`},"2025-05-28":{page:1,text:`Day2-5.28

•
直播时间：1h20min
•
销售额：蝴蝶号299+抖抖299
•
脚本总结：
◦
塑品仍然不⾜
◦
稀缺性：还剩多少单
◦
场景化：找到清北学霸，上市公司的家⻓
也很难，想象⼀下⾃⼰孩⼦每周都能跟清
北学霸咨询复盘，⼏百块钱，⽐当地找⼀
个本科师范毕业的⽼师都便宜
•
Q&A：对于问学科的家⻓：直接告诉找优优学
姐，来⼀对⼀咨询
◦
把家⻓常问的问题，捋⼀下@佳贤、李云
⻰
◦
促品话术：可以⽤4个层次
▪
1v1咨询
▪
价格优惠
▪
送书
▪
售后：不是真⼈退款
•
直播状态总结：
◦
前半段需要更多和家⻓的互动
◦
不⽤和⽆关家⻓打招呼
◦
可以尝试助播交流
◦
⽬标脱稿-->增加表现⼒
`},"2025-05-29":{page:2,text:`Day3-5.29

•
直播时间：1h30min
•
销售额：蝴蝶号299+抖抖299
•
脚本总结：
◦
塑品仍然不⾜
`},"2025-05-30":{page:2,text:`Day4-5.30

•
直播时间：1h08min
•
销售额：蝴蝶号598+抖抖0
•
脚本总结：
◦
数学物理
`},"2025-05-31":{page:2,text:`Day5-5.31

•
直播时间：1h23min
•
销售额：蝴蝶号598+抖抖0
•
脚本总结：
◦
语⽂英语
`},"2025-06-01":{page:3,text:`Day6-6.1

•
直播时间：2h+44min（共两场，中间复盘）
•
销售额：蝴蝶号598+抖抖299
•
脚本总结：
◦
⼼态策略；脚本：造势+短视频脚本，卖关⼦；最重要：节奏要连续（流量话题）
◦
低速⾼频词输出：有经验⽼道；家⻓⻆度：⽅法、⼼态（举例⼦：泛泛的例⼦）
◦
点到家⻓：e.g.只要是正常发挥就已经是理想了
◦
内容为王：不要扯观众不感兴趣的点；数据好的内容继续延伸；让家⻓记下来、没记下来再讲
⼀遍
◦
塑品：建⽴信任-最后集中塑品（有层次）；加下⼀场直播预约信息
•
中间复盘之后第⼆场：
◦
流量话题不断，⼈数明显上涨；直播注意：热点话题连贯输出，时常Q家⻓Q产品（XX家⻓，这
个话题对您孩⼦有XX影响，建议你们拿笔或者⽤⼿机备忘录记录⼀下……//XX家⻓，有XX问
题，我⽤XX产品解决过，或者解决过更严重的问题……我后边再详细说。我先说……继续热点
话题），三句话以内别打断话题节奏，憋单再集中成单。
◦
热点话题，类似脚本，有层次的讲解，我们是需要总结规律的。塑品有层次的讲解，也有类似
规律。再者，就是两者的关联。
`},"2025-06-02":{page:3,text:`Day7-6.2（周⼀）

•
直播时间：2h2min
•
销售额：蝴蝶号598+抖抖
`},"2025-06-03":{page:3,text:`Day8-6.3（周⼆）

•
直播时间：50min+1h（共
两场，中间复盘）
•
销售额：蝴蝶号598+抖抖
•
脚本&直播状态总结：
◦
增加道具：kt板（⼲货
要点、塑品要点）
成交：咨询只有20个名额、课程⻓
期有效
成交：咨询定价，少买⼀件⾐服孩
⼦就可和顶级学霸⼀对⼀
`},"2025-06-04":{page:4,text:`Day9-6.4（周三）

•
直播时间：1h42min
•
销售额：蝴蝶号299+抖抖0
•
脚本总结：
◦
⼼态策略流量话题没问题
•
直播状态：
◦
太冲了，要加强亲和⼒
成交：举例-内驱⼒、看逆袭故事

`},"2025-06-05":{page:5,text:`Day10-6.5（周四）

•
直播时间：
•
销售额：蝴蝶号（0）+抖抖（0）
`},"2025-06-06":{page:5,text:`Day11-6.6（周五）

•
直播时间：NA（彩排对话）
•
销售额：蝴蝶号+抖抖（NA）
`},"2025-06-07":{page:5,text:`Day12-6.7（周六）

•
直播时间：1h35min（对话）
•
销售额：蝴蝶号（691）+抖抖（0）
•
脚本总结：
◦
佳贤的⾝份：访谈主持⼈
◦
和家⻓互动（容易回答、回答对和错）、点赞转发
◦
q家⻓：观点讲完以后回归家⻓
◦
之后预约后续直播，系列主题
•
产品调整：
◦
只塑⼀个品
◦
精细报告：⾼价产品
◦
每五min抽福利品（抽奖、福袋）-咨询、笔记（如：让家⻓666刷屏随机截取）
•
直播状态：
◦
佳贤-快慢结合
◦
宛珈-总分总（先抛出观点，加表情和动作）减少分析内容量（回归家⻓）
◦
⼗五秒：120/150没考到的、100分中80没拿到的，家⻓回复⼀下，告诉⼤家能解决，⽤我的课
已经解决过很多，后⾯再讲，现讲...
`},"2025-06-09":{page:5,text:`Day13-6.9（周⼀）

•
直播时间：1h35min（对话）
•
销售额：蝴蝶号（NA）
•
脚本&直播总结：
◦
两个⼈的配合有待加强，IP的⼈设不够强
◦
找流量话题，佳贤提问+总结，宛珈提出观点+讲故事
◦
ppt、背景要精致⼀些
◦
赠送体验课时
◦
规划⼀周的内容，每天预约固定时段
`},"2025-06-11":{page:6,text:`Day14-6.11（周三）

•
直播时间：彩排（聊话题）
•
脚本&直播总结：
◦
两个⼈的⼿势要丰富⼀点（X砍、劈、斩）
◦
桌⾯要⼲净
◦
前⾯放提词板
◦
强调结论、反复
`},"2025-06-12":{page:6,text:`Day15-6.12（周四）

•
直播时间：聊话题
📌
• 数据：
◦
有效进房率3.81%
（=进房后停留30s⼈/有效曝光
⼈数）
◦
⼈数：平均在线41
•
脚本&直播总结：
◦
镜头微调、板擦和笔⽤好⽤的
◦
前30min⽤好⿊板+不要读稿⼦
◦
贴⽚优化
◦
节奏：⼀个话题不超过2min
◦
前三个话题普遍性
◦
引导⽤⼾点赞、转发+录屏
◦
着装：正式⼀点+清华元素

◦
⾼中家⻓、学弟学妹>>中⼩学家
⻓/中⼩学的妈妈们/宝宝们
`},"2025-06-13":{page:7,text:`Day16-6.13（周五）

•
直播时间：聊话题
🎁
• 数据：
◦
有效进房率3% ⬇
◦
⼈数：平均在线28
•
脚本&直播总结：
◦
对话感加强，眼神明显看稿
◦
背景灯光不要有倒影
◦
贴⽚和⾊调偏暖⼀点
◦
话题>聊的质量，不要⼲货
◦
福利塑品：（快速close）-单数、时间
▪
⿊板上两次福利时间；5分钟；只有⼗
单+课程好评
▪
福利：和清北学霸⾯对⾯，倒计时
54321
▪
书：本⾝值98；咨询⼀年，免费送；
还有⼏单54321
▪
下架：10987654321
`},"2025-06-14":{page:7,text:`Day17-6.14（周六）

•
直播时间：聊话题
🎁
• 数据：
◦
有效进房率3.32% ⬇
◦
⼈数：平均在线31
•
脚本&直播总结：
◦
泛流量
◦
品牌：占领⽤⼾⼼智
▪
IP:亲切+教⼈⾃学的清华学姐
•
不补课、上名校；⾃学、⾃律
▪
课：优优亲授−三步成才法。效果：差
⽣逆袭，中等⽣突⻜猛进，优等⽣拔⾼
上清北
◦
话题要围绕IP本⾝：
▪
快乐学习、正能量、乐趣
▪
佳贤⼈设：朴实、阳光、抛出话题+共
鸣
◦
同⼀话题聊三天，新话题：
寒⻔出贵⼦是不是越来越难了？
国家志愿填报系统上线，张雪峰⽼师们要失业
了吗？
`},"2025-06-17":{page:8,text:`Day18-6.17（周⼆）

•
直播时间：聊话题
🎁
• 数据：
◦
有效进房率4% ⬆ *画⾯质感
◦
⼈数：平均在线40+
•
脚本&直播总结：
◦
泛流量
`},"2025-06-19":{page:9,text:`Day19-6.19（周四）

•
直播时间：聊话题
🎁
• 数据：
◦
有效进房率3.78% ⬇
◦
⼈数：平均在线28
•
脚本&直播总结：
◦
⻆⾊：佳贤/宛珈的话量-宛珈主导+佳贤总
结⾦句
◦
宛珈的信念感：眼神不要飘+家⻓听我的
（你的孩⼦会有改变）
◦
和家⻓：聊开⼼+感染⼒（让直播间氛围
好）+互动（家⻓听明⽩了吗？）
◦
开头：⽐较尴尬、⼈数少>>讲话题：备考
技巧、泛流量⼲货（考前⼼理/暑假）
◦
⾐服换红⾊
`},"2025-06-20":{page:10,text:`Day20-6.20（周五）

•
直播时间：聊话题+卖笔记/5min咨询
🎁
• 数据：1h20min
◦
有效进房率3.26% ⬇ ，平均停留：2min18
◦
⼈数：平均在线24，看播⼈数：816
•
脚本&直播总结：
◦
内容：⼲货讲太久
◦
布局：连⻨家⻓提前联系
◦
⼩⿊板 ✅
◦
可以试着换⼀种⽅式说实话：家⻓核⼼痛点不丢⼈
◦
跟着优优⽼师：先学精讲课，再跟着我⼀对⼀成为学霸
`},"2025-06-21":{page:11,text:`Day21-6.21（周六）

•
直播时间：聊话题+卖精讲课
🎁
• 数据：1h52min
◦
有效进房率3.98% ⬆ ，平均停
留：2min55
◦
⼈数：平均在线53，看播⼈数：
1989
•
脚本&直播总结：
◦
好：情绪状态ok
◦
佳贤：⿊板写完了没给镜头看
◦
内容：
◦
布局：连⻨家⻓提前联系
`},"2025-06-23":{page:11,text:`Day22-6.23（周⼀）

•
直播时间：聊话题
🎁
• 数据：1h28min
◦
有效进房率3.59% ⬆ ，平均停
留：2min8s
◦
⼈数：平均在线50，看播⼈数：
2036
`},"2025-06-24":{page:12,text:`Day23-6.24（周⼆）

•
直播时间：聊话题
🎁
• 数据：1h20min
◦
有效进房率3.07% ⬆ ，平均停
留：1min43s
◦
⼈数：平均在线38，看播⼈数：
1484
•
脚本&直播总结：
◦
连⻨开始就放塑品链接
◦
两个299产品（精讲课/咨询⼀对⼀）
◦
暖⾊背景、红⾊⾐服、说话要亲和⼀点；
话题中间转换再顺
◦
内容：通俗、包装
◦
让家⻓意识到⾃⼰有问题、产品对孩⼦好
◦
让家⻓觉得很重要、再不买就来不及
`},"2025-06-25":{page:13,text:`Day24-6.25（周三）

•
直播时间：聊话题
🎁
• 数据：1h23min
◦
有效进房率3.91% ⬆ ，平均停
留：1min57s
◦
⼈数：平均在线35，看播⼈数：
1410
•
脚本&直播总结：
◦
连⻨开始就放塑品链接
`},"2025-06-27":{page:14,text:`Day25-6.27（周五）

•
直播时间：聊话题
🎁
• 数据：1h56min
◦
有效进房率3.07% ⬇ ，平均停
留：2min38s
◦
⼈数：平均在线54，最⾼87，看
播⼈数：2353
•
脚本&直播总结：
◦
换⿊板 ✅
◦
推荐教辅-⼈数变多
`},"2025-06-28":{page:15,text:`Day26-6.28（周六）

•
直播时间：聊话题+塑品（精讲课、书）
🎁
• 数据：1h50min
◦
销售额299（精讲课）
◦
有效进房率2.74% ⬇ ，平均停
留：3min19s
◦
⼈数：平均在线42，最⾼59，看
播⼈数：1365
•
脚本&直播总结：
◦
还是有家⻓反应太快，⼀些点是否所有⼈
都懂，需要拆开
`},"2025-06-30":{page:16,text:`Day27-6.30（周⼀）

•
直播时间：聊话题+塑品（精讲课、书）
🎁
• 数据：1h59min
◦
销售额2691（精讲课）
◦
有效进房率2.92% ⬇ ，平均停
留：3min8s
◦
⼈数：平均在线58，最⾼89，看
播⼈数：2169，粉丝占⽐30%
•
脚本&直播总结：
◦
隔⼀段时间有⾦句拉流量，讲慢讲透
◦
画⾯⼈物要⼩、层次感
◦
塑品要憋单（特别想买的时候上架）
`},"2025-07-01":{page:17,text:`Day28-7.1（周⼆）

•
直播时间：聊话题+塑品（精讲课、书）
🎁
• 数据：1h27min
◦
销售额1196（精讲课）
◦
有效进房率3.70% ⬇ ，平均停
留：1min49s
◦
⼈数：平均在线34，最⾼56，看
播⼈数：1665，粉丝占⽐30%
•
脚本&直播总结：
◦
化点妆，不要暗、憔悴，穿玫红/格⼦衬衫
◦
佳贤不要总是背对镜头
◦
⽩皙-25
`},"2025-07-03":{page:18,text:`Day29-7.3（周四）

•
直播时间：聊话题+塑品（精讲课）
🎁
• 数据：
◦
销售额598（精讲课）
◦
有效进房率4.20% ⬇ ，平均停
留：2min19s
◦
⼈数：平均在线34，最⾼79，看
播⼈数：2124，粉丝占⽐28.1%
•
脚本&直播总结：
◦
塑品状态不好：佳贤不要背对镜头
`},"2025-07-04":{page:19,text:`Day30-7.4（周五）

•
直播时间：聊话题+塑品（精讲课）
🎁
• 数据：1h57min
◦
销售额1196（精讲课）
有效进房率4.20% ⬇ ，平均停留：2min28s
◦
⼈数：平均在线41，最⾼62，看播⼈数：1798，粉丝占⽐35.4%
•
脚本&直播总结：
◦
塑品需要⼀定时间
◦
引流课：导⼊私域>⼀定要联系⼀对⼀咨询>按分钟计费、学会学习

`},"2025-07-05":{page:20,text:`Day31-7.5（周六）

•
直播时间：聊话题+塑品（精讲课）
🎁
• 数据：1h43min
◦
销售额0
有效进房率3.50% ⬇ ，平均停留：
2min25s
◦
⼈数：平均在线42，最⾼71，看
播⼈数：1758，粉丝占⽐30.8%
•
脚本&直播总结：
◦
塑品需要⼀定时间
◦
引流课：导⼊私域

`},"2025-07-07":{page:20,text:`Day32-7.7（周⼀）

•
直播时间：聊话题+塑品（精讲课）
🎁
• 数据：1h44min
◦
销售额657.4（精讲课+⼀对⼀福
利）
有效进房率2.67% ⬇ ，平均停留：
2min2s
◦
⼈数：平均在线51，最⾼88，看
播⼈数：2400，粉丝占⽐35.8%
•
脚本&直播总结：
◦
两段塑品：学科⼲货-塑品精讲课->时间规
划-塑品1v1
◦
憋单不⽤讲，等到⼈数⾼的时候->第⼀段
塑品：每个课4个名额，以往都抢不到，直
接上架->第⼆段塑品：详细内容->第三
段：逼单
◦
⼀对⼀九块九->第⼀段塑品：只有⼗个名
额->第⼆段塑品：详细->第三段：不买下
架
`},"2025-07-08":{page:21,text:`Day33-7.8（周⼆）

•
直播时间：聊话题+塑品（精讲课）
🎁
• 数据：1h37min
◦
销售额29.7（⼀对⼀福利）
有效进房率2.84% ⬇ ，平均停留：2min15s
◦
⼈数：平均在线56，最⾼90，看播⼈数：2259，粉丝占⽐33.2%
•
脚本&直播总结：
◦
流量很好，卖不出去
`},"2025-07-10":{page:22,text:`Day34-7.10（周四）

•
直播时间：聊话题+塑品（精讲课4⻔）
🎁
• 数据：1h51min，点击128次+卖9单
◦
销售额4193（4⻔精讲）
有效进房率2.14% ⬇ ，平均停留：2min3s
◦
⼈数：平均在线102，最⾼221，看播⼈数：5064，粉丝占⽐25.4%
•
脚本&直播总结：
◦
定位：塑品⼀定要加⾃主学习，全⽹唯⼀可以把⾃主学习的体系，落地到各科的IP。语数英物
四⼤主科，都出了初⾼中的精讲课。相⽐较其他主播课程都是讲⼤⽽空的理论，没办法落地到
各科。全科599，可以管初⾼中六年。⼀年⼀百块钱。⼩学五六年级可以提前学。再⼩就不建议
了。
◦
塑品：宛珈讲课程内容，稀缺性（直播不到5%；不是虚的⽅法>带着孩⼦去学，其他直播间听
不到⾃学⽅法-知识点-真题，全学科）；佳贤憋单
◦
换贴⽚，流量好；画质
◦
卖完要给家⻓答疑，让家⻓预约下⼀场
◦
提醒加粉丝团

`},"2025-07-11":{page:23,text:`Day35-7.11（周五）

•
直播时间：聊话题+塑品（精讲课4⻔）
🎁
• 数据：2h5min，点击224次，下单10次
◦
销售额4202.9（4⻔精讲）
有效进房率2.53% ⬆ ，平均停留：2min12s
◦
⼈数：平均在线127，最⾼224，看播⼈数：7150，粉丝占⽐19.6%
•
脚本&直播总结：
◦
上品：佳贤上品后坐下，观感不好；上品前宛珈讲完了佳贤⼜讲⼀遍掉⼈
◦
佳贤塑品答疑：贴⽚放公屏
◦
塑品卖点：脚本化

`},"2025-07-12":{page:24,text:`Day36-7.12（周六）

•
直播时间：聊话题+塑品（精讲课4⻔）
🎁
• 数据：2h5min，点击160次，下单6次
◦
销售额3594（4⻔精讲）
有效进房率2.46% ⬇ ，平均停留：2min33s
◦
⼈数：平均在线133，最⾼294，看播⼈数：6181，粉丝占⽐20%
•
脚本&直播总结：
◦
第⼆段塑品：详细讲
◦
塑品⾦句
◦
塑品话术：解决家⻓痛点
◦
产品调整：2个⽉
◦
家⻓分层：基于 󾠮 / 󾠯 痛点-打击-去拍（对⽐其他直播间）
▪
⾃学：跟优优⽼师学会了⾃学能⼒，不⽤花钱；有没有花1w以上的/北京⼗⼏w
▪
别⼈都在补课：可能不能赢在起跑线、但不能掉队；好学校的⽼师教⽅法，现在普通的孩⼦
优优教你
▪
⽼师有⽤：课程得看跟谁学
▪
知识进不了脑⼦：⽅法不对+教完不管
▪
学完有问题，帮你解决：反馈
▪
课程完播率：100%
▪
e.g.降⻰⼗⼋掌，孩⼦像郭靖，课as秘籍递给孩⼦
`},"2025-07-14":{page:26,text:`Day37-7.14（周⼀）

•
直播时间：聊话题+塑品（精讲课4⻔）
🎁
• 数据：2h5min，点击224次，下单10次，uv价值617（千次观看成交⾦额）
◦
销售额3594（4⻔精讲）
有效进房率2.53% ⬆ ，平均停留：2min33s
◦
⼈数：平均在线127，最⾼294，看播⼈数：7150，粉丝占⽐20%
•
脚本&直播总结：
◦
第⼆段塑品：详细讲
`},"2025-07-15":{page:27,text:`Day38-7.15（周⼆）

•
直播时间：聊话题+塑品（精讲课4⻔）
🎁
• 数据：2h，uv价值677.25（千次观看成交⾦额）
◦
销售额：精讲课5990⼀对⼀咨询2392学霸笔记98
有效进房率1.96% ⬇ ，平均停留：2min41s
◦
⼈数：平均在线127，最⾼546，看播⼈数：1.2w，粉丝占⽐14.1%
•
脚本&直播总结：
◦
塑品：话术要再熟悉；宛珈要多互动，多点头、配合佳贤，中间有亲和⼒⼀点；
◦
塑品2:宛珈讲三位学霸稀缺性；⼀个⼩时，结果:哪⼀⻔最想提分，薄弱科⽬变成优势科⽬；学
霸诊断问题->把你薄弱点、失分点诊断出来，告诉你哪⾥能提分，⼀步步怎么提分
◦
加上书作为产品，不塑品；最后塑品
`},"2025-07-17":{page:27,text:`Day39-7.17（周四）

•
直播时间：聊话题+塑品（精讲课4⻔）
🎁
• 数据：2h，点击209⼈，下单7次，uv价值423.4（千次观看成交⾦额）
◦
销售额：4791（精讲课7单4193⼀对⼀咨询2单598）
有效进房率1.89% ⬇ ，平均停留：2min26s
◦
⼈数：平均在线153，最⾼269，看播⼈数：7003，粉丝占⽐17.3%
•
脚本&直播总结：
◦
塑品：1、3是精讲和咨询，⼀个品最多⼗分钟，到下个品，保证连贯
◦
学霸笔记作为2号链接，⼀起弹出，不讲
◦
宛珈不要低头看其他的，佳贤状态保持专注
`},"2025-07-18":{page:28,text:`Day40-7.18（周五）

•
直播时间：聊话题+塑品
🎁
• 数据：2h，点击387⼈，下单26次，uv价值873.05（千次观看成交⾦额）
◦
销售额：10500（精讲课13单、⼀对⼀咨询7单、书6单）
有效进房率1.89% ⬇ ，平均停留：2min43s
◦
⼈数：平均在线224，最⾼373，看播⼈数：9329，粉丝占⽐16.6%，涨粉507
•
脚本&直播总结：
◦
开始塑品，宛珈问：我讲的东西在我的⼲货⾥占了多少-只是我精讲课的5%；想听完整的再去
拍
◦
家⻓先占名额，再听了下单
◦
真正能给客⼾带来：准备好最想提分的⼀个科⽬；⽼师梳理薄弱点、失分点，会告诉你能提⼏
分、每⼀分怎么提+准备好10个以上的问题，⼀对⼀回答
◦
回答：讲⼀些课程精华点，⽤⼾不需要知道内容
◦
提醒家⻓预约明天
◦
时间要遵守预约时间
◦
350以上，上15个名额；塑品时也保持住状态
`},"2025-07-19":{page:28,text:`Day41-7.19（周六）

•
直播时间：聊话题+塑品
🎁
• 数据：1h55min，点击387⼈，下单26次，uv价值399.14（千次观看成交⾦额）
◦
销售额：4187（精讲课6单、⼀对⼀咨询1单、书3单）
有效进房率1.71% ⬇ ，平均停留：2min32s
◦
⼈数：平均在线207，最⾼333，看播⼈数：8593，粉丝占⽐17%，涨粉407
•
脚本&直播总结：
◦
中间掉⼈：宛珈不要⾃⼰讲废话，和佳贤互动、信息密度增加
◦
有可能其他主播抢流量
◦
测试⼀下周六讲两次，4-6点可以讲
◦
塑品：没付款的要清、不买的下架了；最多说两次
◦
学霸笔记：放在中间讲

`},"2025-07-21":{page:29,text:`Day42-7.21（周⼀）

•
直播时间：聊话题+塑品
🎁
• 数据：1h42min，下单31次，uv价值1039（千次观看成交⾦额）
◦
销售额：12161（精讲课15单、⼀对⼀咨询8单、书8单）
有效进房率1.87% ⬇ ，平均停留：2min26s
◦
⼈数：平均在线229，最⾼397，看播⼈数：8593，粉丝占⽐17.9%，涨粉503
•
脚本&直播总结：
◦
1h⼲货，40min塑品，上品前塑不要掉⼈
◦
讲完语⽂之后
`},"2025-07-22":{page:30,text:`Day43-7.22（周⼆）

•
直播时间：聊话题+两次塑品
🎁
• 数据：，点击313，下单31次，uv价值400（千次观看成交⾦额）
◦
销售额：3592（8单）
有效进房率1.87% ⬇ ，平均停留：2min29s
◦
⼈数：平均在线164，最⾼298，看播⼈数：8976，粉丝占⽐21.2%，涨粉334
•
脚本&直播总结：
◦
塑品：599课程内容模糊、299课程不知道是什么
◦
优优⽼师花了半年时间做的课
◦
领取笔记很复杂
◦
答疑+塑品
◦
加新的内容：和ip相关、和落地相关
`},"2025-07-24":{page:30,text:`Day44-7.24（周四）

•
直播时间：聊话题+两次塑品
🎁
• 数据：点击204，下单31次，uv价值1039（千次观看成交⾦额）
◦
销售额：5880（16单），平均停留：2min37s
◦
⼈数：平均在线204，最⾼324，看播⼈数：10900，粉丝占⽐19%，涨粉468
•
脚本&直播总结：
◦
塑品：
◦
1.⼲货+塑品节奏：⼲货讲80-90分钟，塑品30-40分钟；2.塑品：流畅度待提升，重点需要强
调，配合写在⽩板上更⾃然；3.抖⾳：在线达50⼈，画质与声⾳跟视频号差不多，购买2⽶+⻓
度充电线
◦
流量节点：20分钟到200⼈在线，不到200⼈需要放慢节奏让⼈数到300+；超过200⼈正常节
奏。
`},"2025-07-25":{page:31,text:`Day45-7.25（周五）

•
直播时间：聊话题+塑品
🎁
• 数据：，点击253，下单31次，uv价值1298（千次观看成交⾦额）
◦
销售额：
▪
🦋 9372（精讲课10单、⼀对⼀咨询10单、书6单）
▪
抖抖2659（观看⼈次：2047，平均在线64，⼈数最⾼97，停留3min07s，涨粉
156，千次观看成交996；5单，商品点击136）
有效进房率1.87% ⬇ ，平均停留：2min38s
◦
⼈数：平均在线113，最⾼178，看播⼈数：7220，粉丝占⽐24.3%，涨粉245
•
脚本&直播总结：
◦
塑品：讲清楚了，没有待付款
`},"2025-07-26":{page:31,text:`Day46-7.26（周六）下午，晚上

•
直播时间：聊话题+塑品
🎁
• 数据：点击171，下单8次，uv价值355（千次观看成交⾦额）
◦
销售额：
▪
🦋 3200（精讲课5单、⼀对⼀咨询0单、书2单）
▪
抖抖495（观看⼈次：1761，平均在线41，⼈数最⾼61，停留2min11s，涨粉
85，千次观看成交221.9；3单，商品点击98）
有效进房率1.87% ⬇ ，平均停留：2min18s
◦
⼈数：平均在线125，最⾼228，看播⼈数：7296，粉丝占⽐17.5%，涨粉229
•
脚本&直播总结：
◦
塑品：299⼆⼗多个省份，强调
🎁
• 数据：uv价值677（千次观看成交⾦额）
◦
🦋 销售额：
▪
5085（精讲课7单、⼀对⼀咨询2单、书3单）+场外599=5684
◦
平均停留：2min48s，⼈数：平均在线152，最⾼275，看播⼈数：6142，粉丝占⽐
17.5%，涨粉247
◦
抖抖销售额：
▪
599（精讲课1单）
▪
观看⼈次：2358，平均在线40，⼈数最⾼67，停留1min37s，涨粉95）
•
脚本&直播总结：
◦
⼲货太多，
▪
例如：举出更加简单的例⼦，推导公式：⼩学例⼦
◦
推导->公式是怎么来的
◦
表达直接出来：不要直接给答案；引导互动
◦
塑品⻆度：我讲了什么对你有⽤->你现在有什么问题
`},"2025-07-28":{page:32,text:`Day47-7.28（周⼀）

•
直播时间：聊话题+塑品
🎁
• 数据：uv价值375（千次观看成交⾦额）
◦
🦋 销售额：
▪
4291（精讲课7单、⼀对⼀咨询0单、书1单）+场外599=4890
◦
平均停留：2min53s，⼈数：平均在线201，最⾼366，看播⼈数：9387，粉丝占⽐
18%，涨粉470
◦
抖抖销售额：
▪
0
▪
观看⼈次：2507，平均在线28，⼈数最⾼80，停留2min11s，涨粉100）
•
脚本&直播总结：
◦
塑品：
▪
答疑断节奏
▪
uu答疑+佳贤控节奏
▪
塑品势能不够，299:uu携20+省份学霸，你在哪⾥都可以覆盖，全⽹找不到各个省考到清北-
相互了解、交朋友+树⽴榜样、爱学习+现场解决问题
▪
fsab：给家⻓画饼
`},"2025-07-29":{page:33,text:`Day48-7.29（周⼆）

•
直播时间：聊话题+塑品
🎁
• 数据：uv价值540（千次观看成交⾦额）
◦
🦋 销售额：
▪
4492（精讲课7单、⼀对⼀咨询0单、书1单）+场外0=4492
◦
平均停留：2min53s，⼈数：平均在线151，最⾼270，看播⼈数：6873，粉丝占⽐
20.8%，涨粉326
◦
抖抖销售额：
▪
2193（精讲课2单、⼀对⼀咨询3单、书1单）+场外599=2792
▪
观看⼈次：2300，平均在线50，⼈数最⾼78，停留2min2s）
•
脚本&直播总结：
◦
塑品：
▪
第⼆个产品塑品有问题
`},"2025-07-31":{page:33,text:`Day49-7.31（周四）

•
直播时间：聊话题+塑品
🎁
• 数据：uv价值92.7（千次观看成交⾦额）
◦
🦋 销售额：
▪
599（精讲课1单、⼀对⼀咨询0单、书0单）+场外0=599
◦
平均停留：2min13s，⼈数：平均在线11，最⾼177，看播⼈数：5448，粉丝占⽐
23.4%，涨粉205
◦
抖抖销售额：
▪
0（精讲课0单、⼀对⼀咨询0单、书0单）=0
▪
观看⼈次：1668，平均在线42，⼈数最⾼64，停留2min17s）
•
脚本&直播总结：
◦
塑品：
▪
塑品有问题、家⻓洗不动
`},"2025-08-01":{page:34,text:`Day50-8.1（周五）

•
直播时间：聊话题+塑品
🎁
• 数据：uv价值456（千次观看成交⾦额）
◦
🦋 销售额：
▪
1892（精讲课3单、⼀对⼀咨询0单、书1单）+场外0=1892
◦
平均停留：3min5s，⼈数：平均在线11，最⾼177，看播⼈数：3396，粉丝占⽐
34%，涨粉86
◦
抖抖销售额：
▪
0（精讲课3单、⼀对⼀咨询0单、书0单）=1797
▪
观看⼈次：2442，平均在线66，⼈数最⾼93，停留2min14s）
•
脚本&直播总结：
◦
塑品：
▪
家⻓洗不动；塑品优化，转化率可以
▪
需要新话题、新脚本；可以先替换⼀半
`},"2025-08-02":{page:34,text:`Day51-8.2（周六）

•
直播时间：聊话题+塑品
🎁
• 数据：uv价值154.7（千次观看成交⾦额）
◦
🦋 销售额：
▪
893（精讲课1单、⼀对⼀咨询0单、书3单）+场外0=893
◦
平均停留：1min58s，⼈数：平均在线106，最⾼181，看播⼈数：4954，粉丝占⽐
23%，涨粉157
◦
抖抖销售额：
▪
1595（精讲课2单、⼀对⼀咨询1单、书1单）=1595
▪
观看⼈次：5872，平均在线66，⼈数最⾼126，停留46s）
•
脚本&直播总结：
◦
换话题：热点话题
◦
换平台洗家⻓
`},"2025-08-04":{page:35,text:`Day52-8.4（周⼀）

•
直播时间：聊话题+塑品
🎁
• 数据：uv价值206.7（千次观看成交⾦额）
◦
🦋 销售额：
▪
1198（精讲课2单、⼀对⼀咨询0单、书0单）
◦
平均停留：2min27s，⼈数：平均在线109，最⾼165，看播⼈数：4924，粉丝占⽐
24.8%，涨粉143
◦
抖抖销售额：
▪
1198（精讲课2单、⼀对⼀咨询0单、书0单）
▪
观看⼈次：8724，平均在线88，⼈数最⾼146，停留50s）
•
脚本&直播总结：
◦
延续话题，加问答，搜集问题
◦
需要练习问答模版，证明可以现场回答问题
`},"2025-08-05":{page:35,text:`Day53-8.5（周⼆）

•
直播时间：聊话题+塑品
🎁
• 数据：uv价值0（千次观看成交⾦额）
◦
🦋 销售额：
▪
0
◦
抖抖销售额：
▪
98（书1单）
•
脚本&直播总结：
◦
看汪勋
◦
没有⼈⽐优优更懂我+她真的帮我解决了问题
◦
回答问题：家⻓最爱听的话
◦
家⻓不容易孩⼦不听话⼲货很重要-不要讲⼲货，调动家⻓的情绪
`},"2025-08-08":{page:36,text:`Day54-8.8（周五）

•
直播时间：聊话题
🎁
• 数据：uv价值0（千次观看成交⾦额）
◦
🦋 1min50s，观看⼈数3735，最⾼在线106，平均在线75，新增关注38
▪
0
◦
抖抖销售额：
▪
0
•
脚本&直播总结：
◦
换脚本，流量⼀般
◦
学科⽅法：基础知识需要⾮常扎实
`},"2025-08-09":{page:36,text:`Day55-8.9（周六）

•
直播时间：聊话题+连⻨
🎁
• 数据：
◦
🦋 观看时⻓2min55s，观看⼈数4922，最⾼在线185，平均在线118，新增关注157
▪
0
◦
抖抖观看时⻓29s，观看⼈数1.1w，最⾼在线86，平均在线51，新增关注50
▪
0
•
脚本&直播总结：
◦
⼲货+连⻨答疑
◦
眼睛要放镜头上、板书要规整⼀点
◦
强情绪点：佳贤唱⿊脸的度要加⼤
◦
缺的产品⼒：家⻓⽤了来报喜；家⻓不需要有认知
◦
直播⾥⾯：录课程
◦
研究品-调整脚本+家⻓报喜
▪
伴学答疑（家⻓没时间陪孩⼦、家⻓不会、家⻓不会教）
▪
三次课规划提10分：想短期内快速提分、很努⼒但是分数不⾼、⼀个坑⽼是踩
`},"2025-08-11":{page:37,text:`Day56-8.11（周⼀）

•
直播时间：聊话题+连⻨+塑品
🎁
• 数据：
◦
🦋 观看时⻓2min47s，观看⼈数6415，最⾼在线342，平均在线161，新增关注263
▪
1198（2单精讲课）
◦
抖抖观看时⻓29s，观看⼈数1.7w，最⾼在线164，平均在线97，新增关注120
▪
0
•
脚本&直播总结：
◦
⼲货+连⻨答疑
◦
应该先塑品再连⻨，连⻨的时候品继续挂着
◦
可以加化、⽣
`},"2025-08-13":{page:37,text:`Day57-8.13（周三）

•
直播时间：聊话题+连⻨+塑品
🎁
• 数据：
◦
🦋 观看时⻓2min32s，观看⼈数5969，最⾼在线270，平均在线142，新增关注250
▪
599（1单精讲课）
◦
抖抖观看时⻓34s，观看⼈数1.03w，最⾼在线127，平均在线74，新增关注81
▪
0
•
脚本&直播总结：
◦
⼀天讲两科可以了，塑品开始时间在60-75min
◦
答疑：要让家⻓觉得，我懂你
▪
所有⼈的问题都能流畅回答
▪
感同⾝受，同频回答（感受到家⻓的问题）
▪
问题泛化
◦
课程要提升
◦
⼀对⼀了解学⽅法课的家⻓学习的进度+⽤⼾⼀对⼀调研
◦
和汪⽼师学习
`},"2025-08-14":{page:38,text:`Day58-8.14（周四）

•
直播时间：聊话题+连⻨+塑品
🎁
• 数据：
◦
🦋 观看时⻓1min58s，观看⼈数4177，最⾼在线170，平均在线89，新增关注91
▪
2396（4单精讲课）
◦
抖抖观看时⻓49s，观看⼈数2219，最⾼在线33，平均在线22，新增关注22
▪
0
•
脚本&直播总结：
◦
开始讲化⽣
◦
⼿⾥有⼗⼏个话题，流量不好即使换
◦
准备流量话题：
▪
选科（赋分、师资、物化捆绑）
▪
择校（只针对初升⾼）
▪
⾛读和住校的规划

`},"2025-08-15":{page:39,text:`Day59-8.15（周五）

•
直播时间：聊话题+塑品
🎁
• 数据：
◦
🦋 观看时⻓2min14s，观看⼈数4523，最⾼在线183，平均在线108，新增关注133；
千次观看成交⾦额904.6
▪
4792（8单精讲课）
◦
抖抖观看时⻓28s，观看⼈数5282，最⾼在线78，平均在线33，新增关注19
▪
0
•
脚本&直播总结：
◦
78min开始塑品，⼤约60-70min开始塑品最好
◦
塑品开始：1、2、3的互动率⾮常重要，中间补充不要多，积攒势能
◦
优： 🥕 不能主动塑品推销、要更懂家⻓（懂孩⼦懒、粗⼼+孩⼦有希望+可怜天下⽗⺟⼼+关⼼
其他科⽬的情绪价值+你基础好/有⽅法就能提升；批评：想不想让他稳定、提升）；不要太多
讲⼲货和有⽤的东西
◦
贤： 😡 唱⿊脸+打击家⻓
◦
学习效果：家⻓档案+沟通（⼝碑）
◦
产品：满分思维（⾼途名师课程+专题学透）⼀个科⽬4-5个专题

`},"2025-08-16":{page:39,text:`Day60-8.16（周六）

•
直播时间：聊话题+塑品
🎁
• 数据：
◦
🦋 1h34min；观看时⻓2min7s，观看⼈数3729，最⾼在线149，平均在线92，新增
关注100；千次观看成交⾦额274.52
▪
1198（2单精讲课）
◦
抖抖观看时⻓30s，观看⼈数5768，最⾼在线75，平均在线43，新增关注43
▪
0
•
脚本&直播总结：
◦
化学⽣物会掉⼈
◦
变化脚本
◦
⽬前最多的是⼩学⽣家⻓：到四年级之后课程变难；家⻓想知道：现在该学什么
▪
不知道孩⼦缺什么
▪
以前都是快乐教育
▪
分班需要学什么
▪
家⻓经历
`},"2025-08-18":{page:40,text:`Day61-8.18（周⼀）

•
直播时间：聊话题
🎁
• 数据：
◦
🦋 1h47min；观看时⻓1min35s，观看⼈数3651，最⾼在线98，平均在线65，新增
关注71；粉丝占⽐25.1%
▪
0
◦
抖抖观看时⻓17s，观看⼈数9550，最⾼在线86，平均在线35，新增关注31
▪
0
•
脚本&直播总结：
◦
答疑，下⼀场可能再来
◦
q问题，直接给答案->态度太客观、很谨慎；⼯具⼈属性；
◦
语⾔上有态度、情绪不要外露
`},"2025-08-20":{page:40,text:`Day62-8.20（周三）

•
直播时间：聊话题
🎁
• 数据：
◦
🦋 1h58min；观看时⻓2min15s，观看⼈数3549，最⾼在线122，平均在线75，新增
关注79；粉丝占⽐27.2%
▪
0
◦
抖抖观看时⻓24s，观看⼈数6274，最⾼在线58，平均在线31，新增关注15
▪
0
•
脚本&直播总结：
◦
换了流量话题：⼿机
◦
⼈数拉不上来、互动不积极
`},"2025-08-21":{page:41,text:`Day63-8.21（周四）

•
直播时间：聊话题
🎁
• 数据：
◦
🦋 2h；观看时⻓2min13s，观看⼈数3984，最⾼在线119，平均在线81，新增关注
59；粉丝占⽐27%
▪
0
◦
抖抖观看时⻓24s，观看⼈数17278，最⾼在线196，平均在线60，新增关注12
▪
0
•
脚本&直播总结：
◦
停在痛点细化解决，不会掉⼈（类似汪勋&星星）；根据互动率了解家⻓对这个问题的关注度
◦
说话更像⾃然⼈，不套框架
◦
家⻓认知：⽐啥也不懂的⾼⼀点、但是听不懂具体知识点；初⾼中⽣的家⻓，有⼀定认知
▪
展开话题：考虑普遍性
◦
加上新品塑品
◦
新的选科贴⽚：作⽤不⼤
◦
英语的流量⼀直会往上⾛；只讲痛点
`},"2025-08-22":{page:41,text:`Day64-8.22（周五）

•
直播时间：聊话题
🎁
• 数据：
◦
🦋 1h38min；观看时⻓2min3s，观看⼈数4366，最⾼在线176，平均在线98，新增
关注123；粉丝占⽐24.1%
▪
1797（3精讲课）
◦
抖抖观看时⻓14s，观看⼈数1.25w，最⾼在线92，平均在线45，新增关注19
▪
599（1精讲课）
•
脚本&直播总结：
◦
加了物理
◦
计算、单词是痛点
◦
未来精讲课：开始着⼿，⾄少80-90%的好评
◦
画⾯质感提升
`},"2025-08-25":{page:42,text:`Day65-8.25（周⼀）

•
直播时间：聊话题+塑新品
🎁
• 数据：
◦
🦋 1h38min；观看时⻓1min43s，观看⼈数3502，最⾼在线111，平均在线74，新增
关注62；粉丝占⽐25%
▪
600（1⽉答疑）
◦
抖抖观看时⻓19s，观看⼈数4395，最⾼在线45，平均在线22，新增关注14
▪
0
•
脚本&直播总结：
◦
塑品要简短⼀点
◦
上贴图
◦
拥有铁粉：
▪
直播可以当场帮⼈解决很多问题
▪
品很有⽤，帮助别⼈解决具体问题
◦
前1h10min全部⼲货
◦
脚本-势能：流量到⼲货
▪
让⽤⼾觉得讲的东西越来越重要
•
初⾼中区别、补课
•
⾃学：所有⼈都能拿120以上的英语（拿100考单词）
•
最容易拉分：数学（预习+计算）、物理--每⼀科⼗⼏分钟
•
换v2：理解性记忆
•
*单科⾥⾯流量话题
◦
塑品：两分钟之内
◦
只吸纳⾼认知⾼势能的家⻓
`},"2025-08-26":{page:43,text:`Day66-8.26（周⼆）

•
直播时间：聊话题+塑新品
🎁
• 数据：
◦
🦋 2h13min；观看时⻓2min1s，观看⼈数3889，最⾼在线258，平均在线74，新增
关注67；粉丝占⽐25%
▪
10800（10⽉答疑+1年答疑）
◦
抖抖观看时⻓19s，观看⼈数4395，最⾼在线45，平均在线22，新增关注14
▪
4800
•
脚本&直播总结：
◦
前⾯⼲货：熟练的脚本
◦
转化塑品脚本：加强对话
◦
正常塑品没有掉⼈ ✅
◦
1v1连⻨or答疑：最好有报喜
`},"2025-08-28":{page:43,text:`Day67-8.28（周四）

•
直播时间：聊话题+塑新品+答疑
🎁
• 数据：
◦
🦋 2h4min；观看时⻓2min36s，观看⼈数3575，最⾼在线139，平均在线81，新增
关注102；粉丝占⽐31.3%
▪
4800（8⽉答疑）
◦
抖抖观看时⻓27s，观看⼈数3191，最⾼在线63，平均在线26，新增关注13
▪
600
•
脚本&直播总结：
◦
状态要再⽤⼒⼀点：抓着观众讲
◦
塑品：需要更有信念感
◦
⼀杯奶茶钱，清北学霸请回家、只有清北学霸能够带出清北的孩⼦、⼀定是真的清北学霸（避
免说⼀⼤堆信息，没有重点）
◦
需要很了解学霸的情况
◦
答疑：上升到普遍性问题，提到产品可以解决->你跟我聊的太少了，所以需要跟我多聊；避免
回答具体问题，只服务⼀个孩⼦的感觉
▪
精神可嘉类->⽅法调整类，刷题及时交流
▪
表扬提前类->提前学，怎么学，跟着清北学霸
•
差⽣：需要⼀点点补；
•
中等⽣：好像听懂了、但是不会；
•
优秀学⽣：不稳定，做不完（难题训练不够，解题能⼒、时间管理）

`},"2025-08-29":{page:44,text:`Day68-8.29（周五）

•
直播时间：聊话题+塑新品+答疑
🎁
• 数据：
◦
🦋 2h10min；观看时⻓2min30s，观看⼈数4130，最⾼在线153，平均在线86，新增
关注113；粉丝占⽐28.6%
▪
4200（7⽉答疑，成交9000）
◦
抖抖观看时⻓1min8s，观看⼈数801，最⾼在线18，平均在线10，新增关注10
▪
0
•
脚本&直播总结：
◦
前⾯讲解流量稍⾼，情绪拉⼈
◦
⾮常严肃，多讲学⽣提⾼的故事
`},"2025-08-30":{page:45,text:`Day69-8.30（周六）

•
直播时间：聊话题+塑新品+答疑
🎁
• 数据：
◦
🦋 1h52min；观看时⻓1min43s，观看⼈数3991，最⾼在线129，平均在线86，新增
关注100；粉丝占⽐26.9%
▪
1200（2⽉答疑）
◦
抖抖观看时⻓47s，观看⼈数1515，最⾼在线29，平均在线17，新增关注14
▪
0
•
脚本&直播总结：
◦
梳理问题，想回答
`},"2025-09-01":{page:45,text:`Day70-9.1（周⼀）

•
直播时间：聊话题+塑新品+答疑
🎁
• 数据：
◦
🦋 2h08min；观看时⻓1min53s，观看⼈数2844，最⾼在线129，平均在线47，新增
关注36；粉丝占⽐30.9%
▪
2400（8⽉答疑）
◦
抖抖观看时⻓1min5s，观看⼈数694，最⾼在线14，平均在线8，新增关注6
▪
600（1⽉答疑）
•
脚本&直播总结：
◦
交付产品：让孩⼦把题⽬写出来或者讲出来
`},"2025-09-02":{page:45,text:`Day71-9.2（周⼆）

•
直播时间：聊话题+塑新品+答疑
🎁
• 数据：
◦
🦋 2h31min；观看时⻓2min32s，观看⼈数2270，最⾼在线63，平均在线46，新增
关注56；粉丝占⽐38.5%
▪
3000（5⽉答疑）
◦
抖抖观看时⻓1min11s，观看⼈数499，最⾼在线13，平均在线6，新增关注3
▪
0（1⽉答疑）
•
脚本&直播总结：
◦
只答疑+塑品
`},"2025-09-04":{page:46,text:`Day72-9.4（周四）

•
直播时间：聊话题+塑新品+答疑
🎁
• 数据：
◦
🦋 1h29min；观看时⻓1min53s，观看⼈数1442，最⾼在线58，平均在线34，新增
关注17；粉丝占⽐38.6%
▪
0
◦
抖抖观看时⻓1min13s，观看⼈数445，最⾼在线17，平均在线9，新增关注7
▪
0
•
脚本&直播总结：
◦
换流量话题，前20min⼈很冷
◦
前期流量很重要，家⻓很功利（真正能为某个个⼈解决什么问题）
◦
⼲货数量+节奏：要⾮常密（退出去就可能错过很多⼲货）
◦
总结20问题：别⼈不问，⾃⼰回答
`},"2025-09-05":{page:46,text:`Day73-9.5（周五）

•
直播时间：聊话题+塑新品+答疑
🎁
• 数据：
◦
🦋 2h23min；观看时⻓2min49s，观看⼈数3009，最⾼在线111，平均在线64，新增
关注75；粉丝占⽐36.3%
▪
1800
◦
抖抖观看时⻓1min34s，观看⼈数470，最⾼在线15，平均在线8，新增关注4
▪
0
•
脚本&直播总结：
◦
讲⼲货脚本⽐较成熟；塑品不及格
`},"2025-09-08":{page:47,text:`Day74-9.8（周⼀）

•
直播时间：聊话题+塑品+答疑
🎁
• 数据：
◦
🦋 1h24min；观看时⻓1min35s，观看⼈数2353，最⾼在线95，平均在线53，新增
关注37；粉丝占⽐30.2%
▪
0
◦
抖抖观看时⻓1min15s，观看⼈数394，最⾼在线16，平均在线7，新增关注6
▪
0
•
脚本&直播总结：
◦
9-11⽉家⻓都在买东西+辅导孩⼦，填充孩⼦的所有时间
◦
问题+产品
◦
字要⼩⼀点，便于家⻓截图
◦
产品调整：
▪
线下答疑
▪
学霸在群⾥布置任务
`},"2025-09-09":{page:47,text:`Day75-9.9（周⼆）

•
直播时间：聊话题+塑品+答疑
🎁
• 数据：
◦
🦋 1h53min；观看时⻓1min56s，观看⼈数1799，最⾼在线53，平均在线35，新增
关注18；粉丝占⽐40%
▪
0
◦
抖抖观看时⻓2min2s，观看⼈数475，最⾼在线17，平均在线11，新增关注8
▪
0
•
脚本&直播总结：
◦
wj讲话问题：提供信息，但其实没有正中要害
◦
娱乐式讲题可以考虑
◦
结构化回答：给出结论（前置！前置！讲⼀个⾝边案例）
▪
e.g.要不要补课？（观点的展开：先丢结论+反向去说）
•
是⼀个⾮常好的问题，xxx问的很好。
•
⾦句论点：能不补就不补，迫不得已了才补
•
瞎补课，很多孩⼦背后骂家⻓，还骂⽼师。最有代表性的是看⽹课，玩游戏。
•
补课往往是家⻓的⼼理安慰。因为孩⼦真的觉得没有⽤。
•
什么时候需要补课？不愤不启，不悱不发。真正想要学的时候，⼀点就通、举⼀反三。
▪
e.g.粗⼼问题
•
不是科科满分的，都肯定粗⼼。
•
所有的粗⼼都要归类到错题上来，源于不会做错题归类
•
说说看粗⼼有⼏种，只讲最典型的：符号看错（圈圈画画）/打破常规（反套路：右视
图、空集）
•
错⼀道题总结出来，⼀类的题⽬都不会错了


`},"2025-09-11":{page:48,text:`Day76-9.11（周四）

•
直播时间：纯答疑
🎁
• 数据：
◦
🦋 1h53min；观看时⻓2min08s，观看⼈数2162，最⾼在线69，平均在线48，新增
关注47；粉丝占⽐39%
▪
0
◦
抖抖观看时⻓2min23s，观看⼈数468，最⾼在线17，平均在线10，新增关注8
▪
0
•
脚本&直播总结：
◦
佳贤先讲30s调动家⻓情绪
◦
✅ 每个问题节奏快、有清晰结论；打击痛点+具体做法
◦
❌ ：【注重可操作性】
▪
不要给舒适区内的答案-慢就是快/归纳总结--->>>⽤什么教辅+该怎么做
▪
⽂⾔⽂--->>>可操作：1⼩本本做实词虚词积累2古⽂逐字翻译
`},"2025-09-12":{page:49,text:`Day77-9.12（周五）

•
直播时间：纯答疑
🎁
• 数据：
◦
🦋 1h19min；观看时⻓2min05s，观看⼈数1487，最⾼在线71，平均在线43，新增
关注34；粉丝占⽐36.4%
▪
0
◦
抖抖观看时⻓2min3s，观看⼈数293，最⾼在线15，平均在线8，新增关注9
▪
0
•
脚本&直播总结：
◦
伴学产品调整：布置任务+聊天（4次）
◦
宛珈要到画⾯正中：30s共情也是宛珈讲+佳贤记笔记/reaction
◦
节奏需要更紧凑
◦
30s需要泛化
`},"2025-09-13":{page:49,text:`Day78-9.13（周六）

•
直播时间：纯答疑
🎁
• 数据：
◦
🦋 1h57min；观看时⻓2min13s，观看⼈数2369，最⾼在线70，平均在线51，新增
关注41；粉丝占⽐40%
▪
0
◦
抖抖观看时⻓1min40s，观看⼈数351，最⾼在线14，平均在线8，新增关注5
▪
0
•
脚本&直播总结：
◦
脚本：内容差不多
◦
佳贤配合⼀下
◦
表现⼒：
▪
情绪状态状态找到正常状态 ✅ （眼神不飘忽、⼿势⼤⽅、笑容积极）
▪
痛点（煽动性语⾔/场景化/拉⻓痛点）
▪
语势（学霸和普通⼈的差别/做到这⼀点就可以。。。）
▪
表演性
◦
答疑能⼒
◦
抖⾳画⾯放⼤+质感
`},"2025-09-15":{page:50,text:`Day79-9.15（周⼀）

•
直播时间：纯答疑
🎁
• 数据：
◦
🦋 1h40min；观看时⻓2min28s，观看⼈数2055，最⾼在线81，平均在线45，新增
关注32；粉丝占⽐38.5%
▪
2400
◦
抖抖观看时⻓2min22s，观看⼈数377，最⾼在线17，平均在线10，新增关注4
▪
0
•
脚本&直播总结：
◦
换贴⽚ ✅
◦
需要⿊板+背景要⼲净+⼿⾥⾯拿笔敲⿊板
◦
塑品：节奏不要断了；完整信息讲完之前不要答疑；所有塑品话术宛珈讲；塑品不要说每天答
疑
◦
佳贤只记笔记+附和
◦
画⾯：有前中后景；⼿写笔记；后景有书
◦
要和粉丝积极互动，q具体的⼈
◦
状态：笑的感染⼒+【不要⼀直皱眉头！！！】
◦
只讲问题、结论、原因，所有东西都直给

`},"2025-09-19":{page:51,text:`Day80-9.19（周五）

•
直播时间：纯答疑
🎁
• 数据：
◦
🦋 2h09min；观看时⻓2min30s，观看⼈数2812，最⾼在线98，平均在线61，新增
关注65；粉丝占⽐36.7%
▪
1200
◦
xhs观看时⻓50s，观看⼈数916，最⾼在线15，平均在线9，新增关注18
▪
0
•
脚本&直播总结：
◦
语⾔习惯，要多说精炼的短句；重复⾦句-信息到位
◦
眼神和动作要坚定
◦
可以⼀直⾃然地讲⼀个点--观点要清晰
◦
初⾼中：数字/种类-专业度【多少个实词虚词积累】
◦
如果只能推荐⼀本教辅的话：⽂⾔⽂全解
◦
塑品：不要贩卖焦虑；要真诚推荐、真诚帮忙
▪
关键词：迷茫（共鸣）、每周改变看得⻅（专项训练，监督孩⼦+正能量+循环）
▪
⽤⼾⾏为：购买+问细节
▪
先真诚地：优优⽼师⾃⼰做规划；我如果没空，让我的同学来帮孩⼦
▪
不⽤说清北学霸背景；直接说每周陪孩⼦15min
▪
不需要讲背景，省份和中学不需要信息；不要让家⻓选择

`},"2025-09-20":{page:52,text:`Day80-9.20（周六）

•
直播时间：纯答疑
🎁
• 数据：
◦
🦋 1h33min；观看时⻓2min18s，观看⼈数3458，最⾼在线164，平均在线92，新增
关注129；粉丝占⽐29.2%
▪
600
◦
抖观看时⻓2min02s，观看⼈数380，最⾼在线21，平均在线10，新增关注16
▪
0
•
脚本&直播总结：
◦
改⼀下塑品话术：
①清北学霸1对1全科规划4次
②清北学霸专项提升提升4次
③清北学霸1v1视频通话1⼩时
赠：全套⼿写笔记+优优学习⽅法课
`},"2025-09-22":{page:52,text:`Day81-9.22（周⼀）

•
直播时间：纯答疑
🎁
• 数据：
◦
🦋 1h20min；观看时⻓2min14s，观看⼈数1679，最⾼在线81，平均在线48，新增
关注36；粉丝占⽐37.6%
▪
0
◦
抖观看时⻓1min24s，观看⼈数298，最⾼在线24，平均在线7，新增关注5
▪
0
•
脚本&直播总结：
◦
情绪+服装：积极+学姐⼈设
◦
内容编排：
▪
先讲各个学科，数-英-语
▪
规划类放后⾯（初⼀初⼆初三）
`},"2025-09-23":{page:53,text:`Day82-9.23（周⼆）

•
直播时间：纯答疑
🎁
• 数据：
◦
🦋 1h44min；观看时⻓1min59s，观看⼈数2755，最⾼在线103，平均在线61，新增
关注44；粉丝占⽐35.1%
▪
0
◦
抖观看时⻓1min11s，观看⼈数395，最⾼在线14，平均在线8，新增关注12
▪
0
•
脚本&直播总结：
◦
情绪+服装：积极+学姐⼈设 ✅
◦
内容编排：精简结构+后期流畅答疑

`},"2025-09-25":{page:53,text:`Day83-9.25（周四）

◦
直播时间：纯答疑
🎁
• 数据：
◦
🦋 1h56min；观看时⻓2min41s，观看⼈数2809，最⾼在线96，平均在线70，新
增关注81；粉丝占⽐35.2%
▪
0
◦
抖观看时⻓2min37s，观看⼈数374，最⾼在线16，平均在线10，新增关注5
▪
0
◦
脚本&直播总结：
▪
⾮常⾃然，⼲货+答疑
▪
后续答疑没有掉⼈，互动⽐较多
▪
答疑反馈⽐较好
▪
精讲课没有塑品


`},"2025-09-26":{page:54,text:`Day84-9.26（周五）

•
直播时间：纯答疑
🎁
• 数据：
◦
🦋 1h41min；观看时⻓2min41s，观看⼈数2898，最⾼在线126，平均在线78，新增
关注93；粉丝占⽐30.8%
▪
0
◦
抖观看时⻓1min30s，观看⼈数333，最⾼在线11，平均在线6，新增关注7
▪
0
•
脚本&直播总结：
◦
推流不断上升，密度很⾼、只给结论
◦
英语放最前⾯；数学放第⼆个
◦
精讲课可以分开设置品类（单科199；两⻔369；全科599）
◦
下次播⼩红书
◦
⼈数拉到三百

`},"2025-09-27":{page:54,text:`Day85-9.27（周六）

•
直播时间：纯答疑
🎁
• 数据：
◦
🦋 1h53min；观看时⻓2min51s，观看⼈数2752，最⾼在线116，平均在线75，新增
关注81；粉丝占⽐32.7%
▪
1366（精讲课）
◦
抖观看时⻓1min40s，观看⼈数393，最⾼在线15，平均在线7，新增关注9
▪
0
•
脚本&直播总结：
◦
塑品约70-80⼈
◦
塑品时间可以拉⻓，可以【塑品+答疑】三次
◦
听⼒作⽂以后不讲了，拖太⻓
◦
初中⾼中替换陈⽼师版本+加速
`},"2025-09-29":{page:55,text:`Day86-9.29（周⼀）

•
直播时间：纯答疑
🎁
• 数据：
◦
🦋 （⼿机没电）54min；观看时⻓1min22s，观看⼈数1504，最⾼在线74，平均在线
40，新增关注33；粉丝占⽐30.0%
▪
0
◦
抖1h38min，观看时⻓2min15s，观看⼈数395，最⾼在线19，平均在线10，新增关
注18
▪
0
•
脚本&直播总结：
◦
⾳质有问题
◦
前⾯内容涨不上去⼈
◦
可以多积累⼏个博主前10min的内容
◦
语速要加快，⼲货密度要⼤；不要总是停，就会掉⼈
`},"2025-09-30":{page:55,text:`Day87-9.30（周⼆）

•
直播时间：纯答疑
🎁
• 数据：
◦
🦋 1h53min；观看时⻓2min31s，观看⼈数2616，最⾼在线92，平均在线65，新增
关注47；粉丝占⽐35.3%
▪
0
◦
抖观看时⻓1min2s，观看⼈数314，最⾼在线10，平均在线4，新增关注2
▪
0
•
脚本&直播总结：
◦
语⽂不讲（严重掉⼈）；加初⾼中规划+⼩四⻔
◦
复刻陈墨
◦
讲数学物理（理科）

`},"2025-10-01":{page:56,text:`Day88-10.1（周三）

•
直播时间：纯答疑
🎁
• 数据：
◦
🦋 1h30min；观看时⻓1min21s，观看⼈数1993，最⾼在线62，平均在线39，新增
关注26；粉丝占⽐38%
▪
0
◦
抖观看时⻓1min8s，观看⼈数329，最⾼在线12，平均在线6，新增关注5
▪
0
•
脚本&直播总结：
◦
换了新流量脚本
◦
流量较差（可能是国庆原因）
`},"2025-10-05":{page:56,text:`Day89-10.5（周⽇）

•
直播时间：纯答疑
🎁
• 数据：
◦
🦋 1h45min；观看时⻓1min35s，观看⼈数3370，最⾼在线89，平均在线60，新增
关注67；粉丝占⽐32.6%
▪
0
◦
抖没开
▪
0
•
脚本&直播总结：
◦
画⾯较暗，镜头要近⼀点
◦
中间掉⼈原因不明
`},"2025-10-06":{page:57,text:`Day90-10.6（周⼀）

•
直播时间：纯答疑
🎁
• 数据：
◦
🦋 1h28min；观看时⻓1min17s，观看⼈数3436，最⾼在线92，平均在线65，新增
关注58；粉丝占⽐28.4%
▪
199
◦
抖观看时⻓1min23s，观看⼈数435，最⾼在线17，平均在线8，新增关注13
▪
0
•
脚本&直播总结：
◦
画⾯已经调整
◦
保持原节奏，没有必要加快
◦
背稿感减少
◦
有效互动
◦
⾼中规划+物化⽣
◦
没有普遍性的问题不回答

`},"2025-10-07":{page:57,text:`Day91-10.7（周⼆）

•
直播时间：纯答疑
🎁
• 数据：
◦
🦋 1h40min；观看时⻓2min32s，观看⼈数3657，最⾼在线144，平均在线102，新
增关注122；粉丝占⽐33.3%
▪
1191
◦
⼩红书观看时⻓32s，观看⼈数949，最⾼在线17，平均在线9
▪
0
•
脚本&直播总结：
◦
状态好数据就会回来

`},"2025-10-09":{page:58,text:`Day92-10.9（周四）

•
直播时间：纯答疑
🎁
• 数据：
◦
🦋 1h27min；观看时⻓2min32s，观看⼈数2864，最⾼在线144，平均在线89，新增
关注74；粉丝占⽐29.4%
▪
1167
◦
⼩红书⽆
▪
0
•
脚本&直播总结：
◦
画像变成北京家⻓居多
◦
化学⽣物曲线会变平
◦
可以有两场直播变成颠覆式创新（结构要简单）

`},"2025-10-10":{page:59,text:`Day93-10.10（周五）

•
直播时间：纯答疑
🎁
• 数据：
🦋 1h42min；观看时⻓2min33s，观看⼈数2944，最⾼在线113，平均在线79，新增关
注77；粉丝占⽐34%
▪
199
◦
⼩红书⽆
▪
0
•
脚本&直播总结：
◦
⼀周⾥⾯有两天尝试颠覆式创新
◦
靠短视频可以拓展变现渠道/新的产品
`},"2025-10-11":{page:59,text:`Day94-10.11（周六）

•
直播时间：纯答疑
🎁
• 数据：
🦋 2h01min；观看时⻓2min48s，观看⼈数3627，最⾼在线134，平均在线93，新增关
注81；粉丝占⽐31.6%
▪
2993
◦
⼩红书⽆
▪
0
•
脚本&直播总结：
◦
多强调⾃⼰很⽜，我当时怎么样，我认为应该怎么样
◦
被评论区带跑，只回答普遍问题
◦
可以讲例⼦，场景表演；⼀连串贯⼝：解题/知识点/⽂⾔⽂
◦
灯光突出个⼈；画⾯要有质感（不等于好看）
◦
磨话题的⽅式：不⽤逐字稿，主要观点+⾦句；增加话题的⽣动度

`},"2025-10-13":{page:60,text:`Day95-10.13（周⼀）

•
直播时间：纯答疑
🎁
• 数据：
🦋 1h58min；观看时⻓3min2s，观看⼈数2839，最⾼在线116，平均在线76，新增关注
54；粉丝占⽐37.2%
▪
1196
◦
⼩红书⽆
▪
0
•
脚本&直播总结：
◦
数学中间掉⼈
◦
话题的切换可以更快速close
◦
要点和要点之间拉开差距
◦
不断打磨数学：赛⻢话题，选10个找爆款结构
`},"2025-10-14":{page:61,text:`Day96-10.14（周⼆）

•
直播时间：纯答疑
🎁
• 数据：
🦋 1h58min；观看时⻓3min28s，观看⼈数2927，最⾼在线109，平均在线79，新增关
注71；粉丝占⽐35%
▪
3563
◦
⼩红书观看时⻓28s，观看⼈数1143，最⾼在线17，新增关注10；粉丝占⽐26.9%
▪
0
•
脚本&直播总结：
◦
互动打⼀下年级
◦
塑品要塑清楚；课：孩⼦⼀定能看懂、⼀定能看完；付款的稳定性⽐较强；wj要清楚复习精讲
课⾥⾯有哪些内容
◦
回答问题：泛化问题
◦
下架之后回答问题，服务⼀点时间
◦
边回答问题边塑品
◦
下架之后在购物⻋/在后台找客服拍
◦
答疑不掉⼈，体现专业性很重要
◦
往专业⽅向去⾛：每⼀个话题做贴⽚，可以放ppt形式；内容有框架
◦
⼩红书可以上架产品
`},"2025-10-16":{page:62,text:`Day97-10.16（周四）

•
直播时间：纯答疑
🎁
• 数据：
🦋 1h58min；观看时⻓3min28s，观看⼈数2881，最⾼在线133，平均在线87，新增关
注90；粉丝占⽐33.6%
▪
3563
◦
⼩红书观看时⻓23s，观看⼈数1926，最⾼在线29，新增关注13；粉丝占⽐15.8%
▪
0
•
脚本&直播总结：
◦
加了⼲货贴⽚ ✅
◦
刚塑品的时候不放贴⽚，先冲动消费（前5min）+后放贴⽚+答疑、泛化痛点-引导产品
◦
599的产品上架要满⾜库存有10
`},"2025-10-17":{page:63,text:`Day98-10.17（周五）

•
直播时间：纯答疑
🎁
• 数据：
🦋 1h47min；观看时⻓2min17s，观看⼈数1916，最⾼在线70，平均在线44，新增关注
28；粉丝占⽐41.9%
▪
199
◦
⼩红书⽆
▪
0
•
脚本&直播总结：
◦
技术故障（⽤⼿机播的）
`},"2025-10-18":{page:63,text:`Day99-10.18（周六）

•
直播时间：纯答疑
🎁
• 数据：
🦋 2h10min；观看⼈数2139，最⾼在线75，平均在线52，新增关注39；粉丝占⽐39.1%
▪
1565
◦
⼩红书⽆
▪
0
•
脚本&直播总结：
◦
技术故障（⽤⼿机播的）
`},"2025-10-20":{page:64,text:`Day100-10.20（周⼀）

•
直播时间：纯答疑
🎁
• 数据：
🦋 2h22min；观看⼈数2569，观看时⻓2min47s，最⾼在线84，平均在线55，新增关注
32；粉丝占⽐35.8%
▪
1766
◦
⼩红书⽆
▪
0
•
脚本&直播总结：
◦
xhs上架
◦
接商单
◦
答疑点到家⻓痛点（答疑专场）
◦
更具体的⽤⼾画像；初⾼中分开/初三、⾼三分开
`},"2025-10-21":{page:64,text:`Day101-10.21（周⼆）

•
直播时间：纯答疑
🎁
• 数据：
🦋 2h11min；观看⼈数2153，观看时⻓3min19s，最⾼在线88，平均在线59，新增关注
37；粉丝占⽐37.5%
▪
1198
抖抖观看⼈数634，观看时⻓1.76min，最⾼在线22，平均在线14；
▪
0
•
脚本&直播总结：
◦
话题需要精进
◦
逼单和促单⽆效
◦
私域、⼴告收⼊；抖⾳画⾯
◦
话题要有灵魂（凸显IP）
◦
短视频要做流量（可复制性）
`},"2025-10-23":{page:65,text:`Day102-10.23（周四）

•
直播时间：纯答疑
🎁
• 数据：
🦋 2h12min；观看⼈数1793，观看时⻓3min27s，最⾼在线71，平均在线48，新增关注
39；粉丝占⽐36.1%
▪
1797
抖抖观看⼈数474，观看时⻓2min，最⾼在线14，平均在线9，新增粉丝4；
▪
599+199
•
脚本&直播总结：
◦
贴⽚和细节调整
◦
课代表要多⼀些，多互动；引发互动
◦
改⼀下流量话题：期中
◦
经常重复⾃我介绍*（可以改的清华元素）
`},"2025-10-24":{page:65,text:`Day103-10.24（周五）

•
直播时间：纯答疑
🎁
• 数据：
🦋 1h33min；观看⼈数1303，观看时⻓2min59s，最⾼在线68，平均在线44，新增关注
20；粉丝占⽐35.9%
▪
0
抖抖观看⼈数302，观看时⻓3min53s，最⾼在线10，平均在线5，新增粉丝0；
▪
0
•
脚本&直播总结：
◦
脚本需要调整话题
`},"2025-10-26":{page:66,text:`Day104-10.26（周⽇）

•
直播时间：纯答疑
🎁
• 数据：
🦋 2h18min；观看⼈数3143，观看时⻓2min24s，最⾼在线99，平均在线63，新增关注
84；粉丝占⽐29.2%
▪
1176
抖抖观看⼈数469，观看时⻓1min42s，最⾼在线13，平均在线7，新增粉丝6；
▪
0
•
脚本&直播总结：
◦
参考陈晶的痛点讲解
◦
换结构

`},"2025-10-27":{page:66,text:`Day105-10.27（周⼀）

•
直播时间：纯答疑
🎁
• 数据：
🦋 1h40min；观看⼈数2311，观看时⻓2min55s，最⾼在线116，平均在线70，新增关
注93；粉丝占⽐30.6%
▪
1167
抖抖观看⼈数488，观看时⻓1min23s，最⾼在线16，平均在线9，新增粉丝5；
▪
0
•
脚本&直播总结：
◦
前⾯换成痛点-分析-病因改造
◦
细化痛点
`},"2025-10-28":{page:67,text:`Day106-10.28（周⼆）

•
直播时间：纯答疑
🎁
• 数据：
🦋 1h46min；观看⼈数2413，观看时⻓2min55s，最⾼在线114，平均在线71，新增关
注73；粉丝占⽐30.6%
▪
199
抖抖观看⼈数488，观看时⻓1min23s，最⾼在线16，平均在线9，新增粉丝5；
▪
0
•
脚本&直播总结：
◦
换成只讲英语
◦
运营私域
`},"2025-10-30":{page:67,text:`Day107-10.30（周四）

•
直播时间：纯答疑
🎁
• 数据：
🦋 2h02min；观看⼈数3432，观看时⻓2min48s，最⾼在线216，平均在线88，新增关
注94；粉丝占⽐30.6%
▪
1594
抖抖观看⼈数410，观看时⻓2min12s，最⾼在线16，平均在线9，新增粉丝6；
▪
0
•
脚本&直播总结：
◦
引导点赞要引导分享；分享之后可以领东西
◦
接极速流（新粉，⾃我介绍）
◦
答疑期间回答其他科⽬问题
`},"2025-10-31":{page:68,text:`Day108-10.31（周五）

•
直播时间：纯答疑
🎁
• 数据：
🦋 1h30min；观看⼈数2991，观看时⻓2min16s，最⾼在线128，平均在线79，新增关
注88；粉丝占⽐
▪
199
抖抖观看⼈数447，观看时⻓mins，最⾼在线，平均在线，新增粉丝；
▪
0
•
脚本&直播总结：
◦
⼩标题还是⾮常必要：正在讲解/后续讲解
◦
语数英等全科答疑：所有问题，80%以上都还是在讲解决⽅案。具体内容不要讲太多；减少⼲
货
◦
解决⽅案都讲完了，家⻓听完就⽩嫖⾛了。
◦
联系客服，领取学霸笔记，做成贴⽚。
◦
⼝播可能违规。
◦
塑品：喜欢看/爱看/限额；其他直播间的课需要太⻓时间；+亲⾃答疑
◦
私域转化
`},"2025-11-01":{page:68,text:`Day109-11.1（周六）

•
直播时间：纯答疑
🎁
• 数据：
🦋 1h34min；观看⼈数3301，观看时⻓2min16s，最⾼在线185，平均在线92，新增关
注126；粉丝占⽐25.1%
▪
398
抖抖观看⼈数410，最⾼在线17，平均在线7，新增粉丝8；
▪
0
•
脚本&直播总结：
◦
塑品不⾏：
▪
专注提分数，稳定达到140
▪
没达到140，都可以找我的⽅法学
▪
提价格（两科优惠，四科更优惠）
▪
学习其他直播间塑品话术
◦
流量上涨
◦
扩充要点：只讲单词和阅读太少了
◦
快速答疑
`},"2025-11-03":{page:69,text:`Day110-11.3（周⼀）

•
直播时间：答疑+塑品（两轮）
🎁
• 数据：
🦋 1h39min；观看⼈数3288，观看时⻓1min55s，最⾼在线131，平均在线75，新增关
注96；粉丝占⽐25.1%
▪
3727
抖抖观看⼈数465，最⾼在线15，平均在线10，平均时⻓1min29s，新增粉丝7；
▪
0
•
脚本&直播总结：
◦
塑品调整：
▪
答疑：简洁清晰，不模糊
▪
q新⽼⽤⼾/课代表
▪
语速快，输出信息量
`},"2025-11-04":{page:69,text:`Day111-11.4（周⼆）

•
直播时间：答疑+塑品（两轮）
🎁
• 数据：
🦋 1h53min；观看⼈数4212，观看时⻓1min49s，最⾼在线131，平均在线81，新增关
注101；粉丝占⽐25.1%
▪
398
抖抖观看⼈数465，最⾼在线15，平均在线10，平均时⻓1min29s，新增粉丝7；
▪
0
•
脚本&直播总结：
◦
脚本调整：增加了听⼒+作⽂
◦
没有提问时：把塑品脚本继续讲
◦
视频：匹配直播的主题

`},"2025-11-06":{page:70,text:`Day112-11.6（周四）

•
直播时间：答疑+塑品（两轮）
🎁
• 数据：
🦋 1h49min；观看⼈数2172，观看时⻓2min28s，最⾼在线86，平均在线53，新增关注
53；粉丝占⽐29.9%
▪
1795
抖抖观看⼈数631，最⾼在线24，平均在线13，平均时⻓1min15s，新增粉丝8；
▪
0
•
脚本&直播总结：
◦
脚本流量下滑
◦
可以换数学
`},"2025-11-07":{page:70,text:`Day113-11.7（周五）

•
直播时间：答疑+塑品（两轮）
🎁
• 数据：
🦋 1h52min；观看⼈数2596，观看时⻓2min12s，最⾼在线136，平均在线59，新增关
注78；粉丝占⽐28.8%
▪
597
抖抖观看⼈数495，最⾼在线19，平均在线9，平均时⻓1min15s，新增粉丝6；
▪
897
•
脚本&直播总结：
◦
答疑回答：不要皱眉
◦
听稿会
`},"2025-11-08":{page:71,text:`Day114-11.8（周六）

•
直播时间：答疑+塑品（两轮）
🎁
• 数据：
🦋 1h41min；观看⼈数2645，观看时⻓2min24s，最⾼在线119，平均在线70，新增关
注57；粉丝占⽐33.2%
▪
2531
抖抖观看⼈数496，最⾼在线19，平均在线9，平均时⻓1min14s，新增粉丝7；
▪
199
•
脚本&直播总结：
◦
调整数学
◦
数学转化率⽐较⾼、家⻓刚需
◦
数学讲两遍⼲货，⽐答疑效果好
`},"2025-11-10":{page:71,text:`Day115-11.10（周⼀）

•
直播时间：答疑+塑品（两轮）
🎁
• 数据：
🦋 1h51min；观看⼈数3147，观看时⻓2min27s，最⾼在线127，平均在线77，新增关
注105；粉丝占⽐25.8%
▪
199+369=568
抖抖观看⼈数691，最⾼在线22，平均在线13，平均时⻓1min22s，新增粉丝6；
▪
597
•
脚本&直播总结：
◦
转化⽐较差

`},"2025-11-11":{page:72,text:`Day116-11.11（周⼆）

•
直播时间：答疑+塑品（两轮）
🎁
• 数据：
🦋 1h51min；观看⼈数2236，观看时⻓2min42s，最⾼在线109，平均在线58，新增关
注61；粉丝占⽐32.6%
▪
1395
抖抖观看⼈数1268，最⾼在线26，平均在线16，平均时⻓46s，新增粉丝15；
▪
0
•
脚本&直播总结：
◦
转化⽐较差
`},"2025-11-13":{page:72,text:`Day117-11.13（周四）

•
直播时间：答疑+塑品（两轮）
🎁
• 数据：
🦋 1h49min；观看⼈数3171，观看时⻓2min20s，最⾼在线143，平均在线75，新增关
注78；粉丝占⽐32.7%
▪
3930
抖抖观看⼈数1262，最⾼在线23，平均在线15，平均时⻓46s，新增粉丝17；
▪
599
•
脚本&直播总结：
◦
转化⽐较差
◦
⼀场数学⼀场英语，可能对转化有帮助
`},"2025-11-14":{page:73,text:`Day118-11.14（周五）

•
直播时间：答疑+塑品（两轮）
🎁
• 数据：
🦋 1h57min；观看⼈数2863，观看时⻓2min21s，最⾼在线118，平均在线65，新增关
注70；粉丝占⽐31.8%
▪
2962
抖抖观看⼈数1262，最⾼在线23，平均在线15，平均时⻓46s，新增粉丝17；
▪
199
•
脚本&直播总结：
◦
拍了以后要说怎么听
`},"2025-11-15":{page:73,text:`Day119-11.15（周六）

•
直播时间：答疑+塑品（两轮）
🎁
• 数据：
🦋 1h57min；观看⼈数3449，观看时⻓2min17s，最⾼在线131，平均在线75，新增关
注91；粉丝占⽐31.8%
▪
3729
抖抖观看⼈数1343，最⾼在线25，平均在线15，平均时⻓44s，新增粉丝23；
▪
199
•
脚本&直播总结：
◦
和拍下的家⻓互动、念名字有效
`}},p4={class:"src-line"},f4=["href"],v4={class:"live-toolbar"},h4={class:"live-analysis-tabs",role:"tablist","aria-label":"直播分析维度"},m4={class:"month-control"},g4=["value"],_4=["value"],y4={key:0,class:"month-control"},b4=["value"],w4={class:"month-control session-picker"},k4=["value"],x4=["value"],S4={class:"live-count"},$4={key:0,class:"live-left analysis-panel"},C4={class:"live-analysis-card"},T4={class:"live-analysis-head"},A4={class:"analysis-total"},E4={class:"live-analysis-kpis"},D4={class:"analysis-section-title"},M4={class:"live-trend","aria-label":"直播观看人数趋势"},O4=["onClick"],I4={class:"live-trend-bar"},R4={class:"month-gmv-compare"},P4={key:1,class:"live-left"},L4={class:"live-table-body"},N4=["onClick"],F4={class:"live-info"},z4=["src"],U4={key:1,class:"thumb-mini thumb-empty"},j4={class:"t-title"},B4={class:"t-sub"},V4={class:"gmv"},H4={class:"src-line",style:{margin:"10px 14px","font-size":"11px"}},W4={style:{color:"var(--text-mute)"}},q4={key:0,class:"live-pagination"},K4=["disabled"],G4=["disabled"],X4=["aria-valuenow"],Y4={class:"live-right"},J4={class:"detail-block"},Z4={class:"detail-cards"},Q4={class:"d-k"},ey={class:"d-v"},ty={key:0,class:"d-t"},ny={key:0,class:"detail-remark"},sy={key:1,class:"ai-highlight"},iy={key:2,class:"backend-shot"},oy={class:"bs-label"},ly=["src"],ry={class:"detail-block"},ay={class:"detail-h"},uy={class:"right-tag"},cy={key:0,class:"pic-row"},dy=["src"],py={key:1,class:"replay-pending"},fy={class:"pic-feats"},vy={class:"feat-k"},hy={class:"feat-v"},my={key:1,class:"demo-evidence-note"},gy={key:2,class:"replay-trend-proof"},_y={class:"proof-label"},yy=["src"],by={key:3,class:"replay-frame-grid"},wy=["src","alt"],ky={class:"node-analysis"},xy={key:0},Sy={key:4,class:"conversion-funnel"},$y={class:"detail-h"},Cy={class:"right-tag"},Ty={class:"funnel-grid"},Ay={class:"funnel-card-head"},Ey={class:"funnel-step-label"},Dy={class:"funnel-bar"},My={key:0},Oy={key:5,class:"vision-zone"},Iy={key:0,class:"vz-steps show"},Ry={key:0,class:"detail-block source-review"},Py=["href"],Ly={style:{"white-space":"pre-wrap","line-height":"1.8"}},Ny=["src","title"],Fy={key:1,class:"detail-block"},zy={class:"detail-h"},Uy=["href"],jy={class:"script-ul"},By={class:"li-k"},Vy={key:2,class:"detail-block detail-empty"},Hy={key:3,class:"detail-block source-review"},Wy=["href"],qy=["href"],Ky={key:2},Gy=["src","title"],Xy={style:{"white-space":"pre-wrap","line-height":"1.8"}},Yy="./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf",fl=6,Jy={__name:"LiveSummaryView",setup(e){var wt;const t=ce(()=>{var Z;return d4[(Z=c.value)==null?void 0:Z.d]||null}),n=ce(()=>{var Z;return encodeURI(Yy)+"#page="+(((Z=t.value)==null?void 0:Z.page)||1)}),s=K(Math.min(65,Math.max(35,Number(localStorage.getItem("redcowork-replica-v2-live-split"))||52))),i=K(null);function l(Z){var ge;const B=(ge=i.value)==null?void 0:ge.getBoundingClientRect();B&&(s.value=Math.min(72,Math.max(28,(Z.clientX-B.left)/B.width*100)))}function r(){window.removeEventListener("pointermove",l),window.removeEventListener("pointerup",r),localStorage.setItem("redcowork-replica-v2-live-split",String(s.value))}function a(Z){Z.preventDefault(),window.addEventListener("pointermove",l),window.addEventListener("pointerup",r)}function u(Z){(Z.key==="ArrowLeft"||Z.key==="ArrowRight")&&(Z.preventDefault(),s.value=Math.min(72,Math.max(28,s.value+(Z.key==="ArrowRight"?2:-2))),localStorage.setItem("redcowork-replica-v2-live-split",String(s.value)))}Kn(r);const p=K(((wt=g.liveSessions.find(Z=>Z.d==="2025-11-15"))==null?void 0:wt.d)||(g.liveSessions[2]?g.liveSessions[2].d:g.liveSessions[0]?g.liveSessions[0].d:"")),c=ce(()=>g.liveSessions.find(Z=>Z.d===p.value)||g.liveSessions[0]),h=ce(()=>c.value?g.liveNotes[c.value.d]||(t.value?{script:[{k:"手动复盘原文",v:t.value.text}],source_uri:n.value,source_page:t.value.page}:null):null);dt([c,h],([Z,B])=>{g.liveReviewContext=Z?{session:Z,review:B}:null},{immediate:!0});const m=K(g.liveSessions.some(Z=>Z.d.startsWith("2025-11"))?"2025-11":""),C=K(""),O=K(1),E=K("month"),I=ce(()=>[...new Set(g.liveSessions.map(Z=>Z.d.slice(0,7)).filter(Boolean))].sort().reverse()),ee=ce(()=>g.liveSessions.filter(Z=>Z.d.startsWith(m.value))),R=ce(()=>Math.max(1,Math.ceil(ee.value.length/fl))),te=ce(()=>ee.value.slice((O.value-1)*fl,O.value*fl));dt(I,Z=>{Z.includes(m.value)||(m.value=Z[0]||"")},{immediate:!0}),dt(m,()=>{var Z;O.value=1,p.value=((Z=ee.value[0])==null?void 0:Z.d)||""}),dt(O,()=>{var Z;te.value.some(B=>B.d===p.value)||(p.value=((Z=te.value[0])==null?void 0:Z.d)||"")});function ie(Z){m.value=Z.target.value}function Q(){O.value>1&&O.value--}function j(){O.value<R.value&&O.value++}function D(Z){p.value=Z}function F(Z){m.value=Z,E.value="week";const B=g.liveSessions.find(ge=>ge.d.startsWith(Z));B&&(p.value=B.d)}function G(Z){return Number(String(Z??"").replace(/[^\d.-]/g,""))||0}function H(Z){return Math.round(Z||0).toLocaleString("zh-CN")}function q(Z){return"¥"+H(Z)}function me(Z){const B=new Date(String(Z).slice(0,10)+"T12:00:00");if(Number.isNaN(B.getTime()))return"未知周";B.setHours(0,0,0,0),B.setDate(B.getDate()+3-(B.getDay()+6)%7);const ge=new Date(B.getFullYear(),0,4),Ue=1+Math.round(((B-ge)/864e5-3+(ge.getDay()+6)%7)/7);return`${B.getFullYear()} W${String(Ue).padStart(2,"0")}`}function Se(Z,B){const ge=B.reduce((y,P)=>y+G(P.view),0),Ue=B.reduce((y,P)=>y+G(P.gmv),0),x=B.map(y=>G(y.peak));return{label:Z,sessions:B.length,views:ge,gmv:Ue,peak:x.length?Math.max(...x):0,average:B.length?Math.round(ge/B.length):0}}function et(Z){const B=new Map;return g.liveSessions.forEach(ge=>{const Ue=Z(ge);Ue&&(B.has(Ue)||B.set(Ue,[]),B.get(Ue).push(ge))}),[...B.entries()].map(([ge,Ue])=>Se(ge,Ue)).sort((ge,Ue)=>Ue.label.localeCompare(ge.label))}const Je=ce(()=>et(Z=>Z.d.slice(0,7))),ke=ce(()=>{const Z=new Map;return g.liveSessions.filter(B=>!m.value||B.d.startsWith(m.value)).forEach(B=>{const ge=me(B.d);Z.has(ge)||Z.set(ge,[]),Z.get(ge).push(B)}),[...Z.entries()].map(([B,ge])=>Se(B,ge)).sort((B,ge)=>ge.label.localeCompare(B.label))}),Ae=ce(()=>ke.value.map(Z=>Z.label));dt(Ae,Z=>{Z.includes(C.value)||(C.value=Z[0]||"")},{immediate:!0}),dt(C,Z=>{if(E.value==="week"){const B=g.liveSessions.find(ge=>me(ge.d)===Z);B&&(p.value=B.d)}});const Ee=ce(()=>E.value==="month"?Je.value:ke.value),We=ce(()=>Math.max(...Ee.value.map(Z=>Z.views),1)),Ct=ce(()=>E.value==="month"?"按月直播经营分析":"按周直播经营分析"),bt=ce(()=>Je.value.slice().reverse().map(Z=>({label:Z.label,gmv:Z.gmv,current:Z.label===m.value}))),qe=ce(()=>Math.max(...bt.value.map(Z=>Z.gmv),1)),Tt=K([]);Kn(()=>{});const ze=ce(()=>{if(!c.value)return[];const Z=c.value,B=h.value;return B?[{k:"光线",v:(B.visual.light||"-")+" / 后台:"+(B.visual.setup||"-")},{k:"服装",v:B.visual.body||"-"},{k:"手势",v:B.visual.gesture||"-"},{k:"角色",v:B.visual.role||"-"}]:[{k:"光线",v:Z.visual.light},{k:"布场",v:Z.visual.setup},{k:"服装",v:Z.visual.body},{k:"手势",v:Z.visual.gesture},{k:"状态",v:Z.visual.energy||"-"}]}),Mt=ce(()=>{if(!c.value)return[];if(h.value)return h.value.data.cards;const Z=c.value;return[{k:"观看人数",v:Z.view??"未记录"},{k:"最高在线",v:Z.peak??"未记录"},{k:"总热度",v:Z.hot??"未记录"},{k:"成交金额",v:Z.gmv??"未记录"}]}),mt=ce(()=>{var Z,B,ge,Ue;return((B=(Z=c.value)==null?void 0:Z.visual)==null?void 0:B.trend_image)||((Ue=(ge=c.value)==null?void 0:ge.visual)==null?void 0:Ue.demoTrendImage)||null});return(Z,B)=>{var ge,Ue,x;return d(),f("div",null,[o("div",p4,[B[5]||(B[5]=o("span",null,"来源：",-1)),o("a",{href:se(ca),target:"_blank",rel:"noopener"},"打开飞书直播复盘文档 ↗",8,f4),B[6]||(B[6]=o("span",null,"· 清华优优直播复盘记录",-1)),B[7]||(B[7]=o("span",{class:"src-tag"},"视频号",-1))]),o("div",v4,[o("div",h4,[o("button",{class:we({on:E.value==="month"}),onClick:B[0]||(B[0]=y=>E.value="month")},"按月",2),o("button",{class:we({on:E.value==="week"}),onClick:B[1]||(B[1]=y=>E.value="week")},"按周",2),o("button",{class:we({on:E.value==="session"}),onClick:B[2]||(B[2]=y=>E.value="session")},"按场次",2)]),o("div",m4,[B[8]||(B[8]=o("span",null,"直播月份",-1)),o("select",{value:m.value,onChange:ie},[(d(!0),f(X,null,le(I.value,y=>(d(),f("option",{key:y,value:y},v(y),9,_4))),128))],40,g4)]),E.value==="week"?(d(),f("div",y4,[B[9]||(B[9]=o("span",null,"直播周",-1)),Qe(o("select",{"onUpdate:modelValue":B[3]||(B[3]=y=>C.value=y)},[(d(!0),f(X,null,le(Ae.value,y=>(d(),f("option",{key:y,value:y},v(y),9,b4))),128))],512),[[gs,C.value]])])):V("",!0),o("div",w4,[B[10]||(B[10]=o("span",null,"具体场次",-1)),o("select",{value:p.value,onChange:B[4]||(B[4]=y=>D(y.target.value))},[(d(!0),f(X,null,le(ee.value,y=>(d(),f("option",{key:y.d,value:y.d},v(y.d)+" · "+v(y.title),9,x4))),128))],40,k4)]),o("span",S4,v(ee.value.length)+" 条复盘记录",1)]),o("div",{ref_key:"liveGrid",ref:i,class:we(["live-grid",{"analysis-layout":E.value!=="session"}]),style:Rt({"--live-left-weight":s.value+"fr","--live-right-weight":100-s.value+"fr"})},[E.value!=="session"?(d(),f("div",$4,[o("section",C4,[o("div",T4,[o("div",null,[o("h2",null,v(Ct.value),1),o("span",null,"来源：视频号直播历史数据.csv · "+v(se(g).liveSessions.length)+" 场（含测试场）",1)]),o("span",A4,v(Ee.value.length)+" 个"+v(E.value==="month"?"月度":"自然周")+"周期",1)]),o("div",E4,[o("div",null,[B[11]||(B[11]=o("span",null,"报表场次",-1)),o("strong",null,v(Ee.value.reduce((y,P)=>y+P.sessions,0)),1)]),o("div",null,[B[12]||(B[12]=o("span",null,"累计观看人次",-1)),o("strong",null,v(H(Ee.value.reduce((y,P)=>y+P.views,0))),1)]),o("div",null,[B[13]||(B[13]=o("span",null,"最高在线峰值",-1)),o("strong",null,v(H(Math.max(...Ee.value.map(y=>y.peak),0))),1)]),o("div",null,[B[14]||(B[14]=o("span",null,"累计成交",-1)),o("strong",null,v(q(Ee.value.reduce((y,P)=>y+P.gmv,0))),1)])]),o("div",D4,[o("strong",null,v(E.value==="month"?"按月累计观看人次":"按周累计观看人次"),1),B[15]||(B[15]=o("span",null,"同一观众跨场会重复累计 · 点击周期查看场次",-1))]),o("div",M4,[(d(!0),f(X,null,le(Ee.value.slice().reverse(),y=>(d(),f("button",{key:y.label,class:we(["live-trend-row",{drillable:E.value==="month"}]),onClick:P=>E.value==="month"&&F(y.label)},[o("span",null,v(y.label),1),o("div",I4,[o("i",{style:Rt({width:y.views/We.value*100+"%"})},null,4)]),o("b",null,v(H(y.views)),1)],10,O4))),128))]),o("div",R4,[B[16]||(B[16]=o("header",null,[o("span",null,"按月成交金额对比"),o("small",null,"单位：元 · CSV 成交金额合计")],-1)),(d(!0),f(X,null,le(bt.value,y=>(d(),f("div",{key:y.label,class:we([{current:y.current},"gmv-compare-row"])},[o("span",null,v(y.label),1),o("div",null,[o("i",{style:Rt({width:y.gmv/qe.value*100+"%"})},null,4)]),o("b",null,"¥"+v(H(y.gmv)),1)],2))),128))])])])):(d(),f("div",P4,[B[17]||(B[17]=o("div",{class:"live-table-head"},[o("span",null,"直播信息"),o("span",null,"时长"),o("span",null,"观看"),o("span",null,"峰值"),o("span",null,"成交")],-1)),o("div",L4,[(d(!0),f(X,null,le(te.value,y=>(d(),f("div",{key:y.d,class:we(["live-row",{on:p.value===y.d}]),onClick:P=>D(y.d)},[o("div",F4,[y.visual.thumb?(d(),f("img",{key:0,class:"thumb-mini",src:y.visual.thumb,alt:"直播封面"},null,8,z4)):(d(),f("span",U4,"待")),o("div",null,[o("div",j4,v(y.title),1),o("div",B4,v(y.d),1)])]),o("span",null,v(y.dur),1),o("span",null,v(y.view),1),o("span",null,v(y.peak),1),o("span",V4,v(y.gmv),1)],10,N4))),128))]),o("div",H4,[o("span",W4,"共 "+v(ee.value.length)+" 场 · 当前筛选月份",1),R.value>1?(d(),f("div",q4,[o("button",{onClick:Q,disabled:O.value===1},"上一页",8,K4),o("span",null,v(O.value)+" / "+v(R.value),1),o("button",{onClick:j,disabled:O.value===R.value},"下一页",8,G4)])):V("",!0)])])),o("div",{class:"live-column-divider",role:"separator",tabindex:"0","aria-label":"调整直播经营分析与具体复盘宽度","aria-orientation":"vertical","aria-valuenow":Math.round(s.value),"aria-valuemin":"28","aria-valuemax":"72",onPointerdown:a,onKeydown:u},[...B[18]||(B[18]=[o("span",null,null,-1)])],40,X4),o("div",Y4,[B[37]||(B[37]=o("div",{class:"live-detail-head"},[o("span",{class:"hint"},"选择具体场次查看完整复盘")],-1)),c.value?(d(),f(X,{key:0},[o("div",J4,[B[20]||(B[20]=o("div",{class:"detail-h"},[o("span",{class:"bar"}),o("span",null,"数据")],-1)),o("div",Z4,[(d(!0),f(X,null,le(Mt.value,y=>(d(),f("div",{key:y.k,class:"d-card"},[o("div",Q4,v(y.k),1),o("div",ey,v(y.v),1),y.tip?(d(),f("div",ty,v(y.tip),1)):V("",!0)]))),128))]),h.value&&h.value.data.remark?(d(),f("div",ny,v(h.value.data.remark),1)):V("",!0),(ge=h.value)!=null&&ge.data.highlight?(d(),f("div",sy,[B[19]||(B[19]=o("span",{class:"ai-highlight-label"},"AI分析 · 金句高光",-1)),o("strong",null,"“"+v(h.value.data.highlight)+"”",1),o("p",null,v(h.value.data.aiAnalysis),1)])):V("",!0),c.value.visual.shot?(d(),f("div",iy,[o("div",oy,"视频号助手 · 后台数据截图（"+v(c.value.d)+"）",1),o("img",{src:c.value.visual.shot,alt:"视频号助手后台数据"},null,8,ly)])):V("",!0)]),o("div",ry,[o("div",ay,[B[21]||(B[21]=o("span",{class:"bar"},null,-1)),B[22]||(B[22]=o("span",null,"画面复盘",-1)),o("span",uy,"对应直播："+v(c.value.d),1)]),(Ue=c.value.visual.replay_frames)!=null&&Ue.length?V("",!0):(d(),f("div",cy,[c.value.visual.thumb?(d(),f("img",{key:0,class:"pic-frame",src:c.value.visual.thumb,alt:"该场直播回放画面"},null,8,dy)):(d(),f("div",py,[...B[23]||(B[23]=[o("div",{class:"replay-pending-icon"},"□",-1),o("strong",null,"该场尚无回放画面",-1),o("span",null,"完成视频号授权及逐场采集后显示",-1)])])),o("div",fy,[(d(!0),f(X,null,le(ze.value,y=>(d(),f("div",{key:y.k,class:"feat"},[o("span",vy,v(y.k),1),o("span",hy,v(y.v),1)]))),128))])])),c.value.visual.isDemoVisual?(d(),f("div",my,"回放画面：尚未上传该场真实回放截图，不作为复盘证据。")):V("",!0),mt.value?(d(),f("div",gy,[o("div",_y,v(c.value.visual.trend_image?"该场直播趋势图 · 视频号后台证据":"趋势图 · 等待后台截图"),1),c.value.d==="2025-11-15"?(d(),En(c4,{key:0})):(d(),f("img",{key:1,src:mt.value,alt:"该场直播趋势图"},null,8,yy))])):V("",!0),(x=c.value.visual.replay_frames)!=null&&x.length?(d(),f("div",by,[(d(!0),f(X,null,le(c.value.visual.replay_frames,y=>(d(),f("div",{key:y.kind,class:"replay-frame"},[o("span",null,v({online_peak:"A",gmv_peak:"B",audience_drop:"C"}[y.kind])+" · "+v((y.label||"回放画面").replace(/^\d+\s*·\s*/,"")),1),o("img",{src:y.url,alt:y.kind+" 回放证据"},null,8,wy),o("div",ky,[o("p",null,"话题："+v(y.topic),1),y.quote?(d(),f("strong",xy,"金句：“"+v(y.quote)+"”",1)):V("",!0),o("p",null,[B[24]||(B[24]=o("b",null,"AI分析：",-1)),Te(v(y.analysis),1)])])]))),128))])):V("",!0),c.value.visual.funnel?(d(),f("div",Sy,[o("div",$y,[B[25]||(B[25]=o("span",{class:"bar"},null,-1)),B[26]||(B[26]=o("span",null,"转化漏斗",-1)),o("span",Cy,"成交额 "+v(c.value.gmv),1)]),o("div",Ty,[(d(!0),f(X,null,le([c.value.visual.funnel.flow,c.value.visual.funnel.product],y=>(d(),f("div",{key:y.title,class:"funnel-card"},[o("div",Ay,[o("strong",null,v(y.title),1),o("span",null,"整体转化率 "+v(y.overall),1)]),(d(!0),f(X,null,le(y.steps,(P,T)=>(d(),f("div",{key:P.label,class:"funnel-step"},[o("div",Ey,[o("span",null,v(P.label),1),o("b",null,v(P.value),1)]),o("div",Dy,[o("i",{style:Rt({width:Math.max(24,100-T*(y.steps.length===5?17:22))+"%"})},null,4)]),P.rate?(d(),f("small",My,"→ "+v(P.rate),1)):V("",!0)]))),128))]))),128))])])):V("",!0),c.value.source_uri?V("",!0):(d(),f("div",Oy,[B[27]||(B[27]=o("div",{class:"vz-h"},[o("span",{class:"dot"}),Te("回放采集状态")],-1)),B[28]||(B[28]=o("div",{class:"vz-row"},[o("span",{class:"vz-note"},"仅当该场授权后台回放可访问时，才会写入对应画面与语音证据。")],-1)),Tt.value.length?(d(),f("div",Iy,[(d(!0),f(X,null,le(Tt.value,(y,P)=>(d(),f("div",{key:P,class:we({ok:y.startsWith("已完成")})},v(y),3))),128))])):V("",!0)]))]),t.value?(d(),f("section",Ry,[B[30]||(B[30]=o("h3",null,"手动复盘 · 原始 PDF",-1)),o("a",{href:n.value,target:"_blank",rel:"noopener"},"查看手动复盘 PDF · 第 "+v(t.value.page)+" 页 ↗",9,Py),o("pre",Ly,v(t.value.text),1),o("details",null,[B[29]||(B[29]=o("summary",null,"展开对应 PDF 页",-1)),o("iframe",{src:n.value,title:c.value.d+"手动复盘 PDF",style:{width:"100%",height:"540px",border:"1px solid #EDD6DC","margin-top":"12px"}},null,8,Ny)])])):V("",!0),h.value&&!t.value?(d(),f("div",Fy,[o("div",zy,[B[31]||(B[31]=o("span",{class:"bar"},null,-1)),B[32]||(B[32]=o("span",null,"脚本直播复盘",-1)),t.value?V("",!0):(d(),f("a",{key:0,class:"review-source-link",href:se(ca),target:"_blank",rel:"noopener"},"打开飞书复盘文档 ↗",8,Uy))]),o("ul",jy,[(d(!0),f(X,null,le(h.value.script,y=>(d(),f("li",{key:y.k},[o("span",By,v(y.k)+"：",1),o("span",null,v(y.v),1)]))),128))])])):t.value?V("",!0):(d(),f("div",Vy,[...B[33]||(B[33]=[o("div",{class:"detail-empty-inner"},[o("div",{class:"big"},"·"),o("div",{class:"t"},"这场还没有手动复盘"),o("div",{class:"sub"},"从视频号复盘回看同步，AI 自动抽取峰谷画面与话术")],-1)])])),c.value.source_uri?(d(),f("section",Hy,[B[36]||(B[36]=o("h3",null,"原始复盘记录与截图",-1)),/\.csv(?:$|[?#])/i.test(c.value.source_uri)?(d(),f("a",{key:0,href:c.value.source_uri,download:""},"下载原始 CSV",8,Wy)):(d(),f("a",{key:1,href:c.value.source_uri,target:"_blank"},"打开对应复盘页 · 第 "+v(c.value.source_page)+" 页 ↗",9,qy)),/\.pdf(?:$|[?#])/i.test(c.value.source_uri)?(d(),f("details",Ky,[B[34]||(B[34]=o("summary",null,"展开原始复盘页",-1)),o("iframe",{src:c.value.source_uri,title:c.value.d+"原始复盘",style:{width:"100%",height:"540px",border:"1px solid #EDD6DC","margin-top":"12px"}},null,8,Gy)])):V("",!0),o("details",null,[B[35]||(B[35]=o("summary",null,"查看完整文字记录",-1)),o("pre",Xy,v(c.value.source_text),1)])])):V("",!0)],64)):V("",!0)])],6)])}}},Zy={"新学期第一场·高中数学":{goal:"帮助高中生盘点暑期数学学习，并制定开学第一周可执行的学习安排。",sections:[["0–5 分钟｜开场互动",`口播：“新学期数学，不是买一本更难的练习册就能解决。先告诉我：你是高一、高二还是高三？暑假最卡的一章是什么？”
互动：请观众发送年级和章节，选取三个不同阶段的问题写在白板上。今天带走的是一张第一周数学任务表。`],["5–15 分钟｜暑期复盘",`口播：“先不要数做了多少题，拿出暑期的一份作业，圈一题独立完成、一题看提示后完成、一题仍不会的题。这三种状态决定开学后怎么安排。”
操作：展示一页函数练习，区分概念、推导和运算。看解析会做的题，要合上解析重新写一次，才能判断是否掌握。`],["15–35 分钟｜新学期规划",`口播：“第一周围绕学校当前章节走。课前用五分钟标出不懂的定义；课堂记下老师为什么这样变形；课后挑两题复述思路。”
白板：周一至周五每天记录一个概念、一题独立解答和一个待问问题。周末回做本周两道代表题。高一侧重集合与函数语言，高二跟随当前新课，高三按学校一轮进度安排。`],["35–60 分钟｜现场答疑与收尾",`问：“预习看不懂，还要继续吗？”答：“先标出不懂的词和步骤，不必把课提前自学完。带着问题听课，课后再检查是否解决。”
问：“作业太多还要加练吗？”答：“先保证校内作业质量，把额外题替换为一道有针对性的重做题。”
结束口播：“今晚先填第一天，不追求一周全满。下次带着一个解决了的问题和一个还卡住的问题回来。”`]],qa:[["暑期内容全忘了怎么办？","先用本学期相关的两道基础题检测，缺哪项补哪项，不从整本书第一页重刷。"],["高一要提前刷高考题吗？","先掌握概念表达、基本运算和课堂例题，综合题逐步增加。"]]},高二数学答疑:{goal:"围绕高二数学的条件识别、公式使用和完整表达，现场完成一次问题诊断。",sections:[["0–5 分钟｜痛点收集",`口播：“高二数学里，你是题目读不懂、公式选不准，还是最后算错？发出你最近一道题的章节和卡住的步骤，不只发一个分数。”
互动：将问题分成数列、三角与解析几何三组，优先处理共同的思路障碍。`],["5–25 分钟｜模块复习节奏",`口播：“高二先跟紧当前新课，不直接套高三一轮复习进度。数列要先识别相邻项关系；三角问题先看角和边的已知条件；解析几何先把几何条件翻译成方程。”
板书示范：等差数列已知第二项5、第五项14，先写a₂=a₁+d、a₅=a₁+4d，相减得3d=9，所以d=3、a₁=2。强调每一个式子的条件来源。
安排：当天复述一道例题，隔天做一道同类变式，周末重做一题并解释选方法的原因。`],["25–60 分钟｜现场答疑",`口播：“现在把‘我不会数列’缩小到一个步骤。是认不出数列类型，列不出条件，还是解不出方程？”
问：“公式背会了为什么仍不会？”答：“因为题目不直接告诉你套哪个公式。先写已知量与待求量，再判断需要通项还是前n项和。”
问：“解析几何算得太长怎么办？”答：“先检查有没有对称、垂直或中点条件可用，不能只靠省略步骤。”
结束：每人写下今天修正的一个错误步骤，下一次先看这个步骤能否独立完成。`]],qa:[["数列总分不清通项与求和？","求某一项用通项；求累计量先考虑求和。先把题意翻译成待求量再选公式。"],["高二就开始一轮吗？","以校内新课和阶段检测为主，补相关旧知识，避免挤占当前学习时间。"]]},暑假收心专场:{goal:"用三天建立返校作息与学习启动习惯，降低假期结束后的冲突。",sections:[["0–3 分钟｜互动开场",`口播：“暑假快结束，孩子迟迟不开工，先别给他贴懒惰的标签。现在最难的是起床、放下手机，还是坐下做第一道题？”
互动：评论区选择一个最难的环节，今天只解决启动，不要求一天恢复所有习惯。`],["3–18 分钟｜三天收心方法",`口播：“第一天盘点剩余任务，分成必须交、需要巩固、可以以后做。第二天把开始时间固定下来，用一个二十分钟任务找回启动感。第三天按返校起床时间试跑，检查书包和当天计划。”
画面：白板写出三天安排。手机管理由亲子共同约定使用时段和保管位置，学习结束后再查看。每次调整睡眠安排要留出适应时间，避免用熬夜突击换进度。`],["18–48 分钟｜家长答疑",`问：“暑假作业没写完，怎么办？”答：“先列出实际剩余量和截止时间，与孩子一起排序；必要时向老师说明情况，不能让抄答案代替完成。”
问：“每天都说马上，却一直拖？”答：“把马上改成明确时间和一个能开始的小任务：七点半先打开语文作业，做第一题。”
问：“手机收走就吵架？”答：“先解释学习时段规则，并约定家长也减少干扰。把违规后的处理提前说明，避免临时加码。”
收尾：“今晚一起确定明天几点开始、先做什么，做完如何检查。先跑通一天再延长。”`]],qa:[["收心要提前多久？","至少留出几天逐步调整，按家庭作息和返校时间安排，避免最后一晚突击。"],["作息调了又反弹？","先固定起床、第一段学习和睡前收尾三个节点，每天只检查这三个节点。"]]},"高一家长会·破冰":{goal:"解释初高中学习方式的变化，帮助家长建立支持而不代替的沟通方式。",sections:[["0–10 分钟｜认识高一变化",`口播：“进入高中，孩子可能仍然很努力，却发现原来的方法不够用了。今天不把一次成绩下降叫失败，先看知识抽象程度、课堂节奏和独立安排这三项变化。”
互动：请家长写出最近一次冲突发生在什么场景。只讨论行为与任务，不公布未经核实的年级排名或升学数字。`],["10–30 分钟｜家长最关心的三件事",`口播：“第一，成绩波动怎么判断？比较同一知识模块的掌握情况，而不只比较总分。第二，时间不够怎么做？把作业、复习和休息放进同一张表，先解决最挤的一段。第三，孩子不愿沟通怎么办？从‘你怎么又这样’改成‘今天哪一步最难，我能帮什么？’”
示范对话：孩子说数学听不懂，家长回应：“是定义不懂还是例题跟不上？我们先找出一页课堂笔记，把问题写清，再去问老师。”`],["30–50 分钟｜家长现场答疑",`问：“要不要每天检查作业？”答：“高一逐步让孩子承担检查责任。家长可以约定每周看一次完成情况和待解决问题，避免每天逐题审判。”
问：“选科该怎么决定？”答：“结合兴趣、学科表现和报考要求，核对学校及当地当年的选科安排，不能只凭一次考试。”
收尾：“本周约一次十五分钟家庭沟通，孩子先讲，家长只问一个能支持的问题。”`]],qa:[["孩子说自己不是学习的料？","先接住挫败感，再用一道已经会做的题看到进步，聚焦下一步行动。"],["家长不会高中知识怎么办？","帮助整理问题和寻找老师支持，无需代替孩子解题。"]]},"高三一轮启动·直播脚本":{goal:"将高三一轮复习拆成知识梳理、基础验证和阶段回测，跟随学校节奏推进。",sections:[["0–5 分钟｜开场与复习清单",`口播：“一轮最容易出现两种忙：每天刷题，却不知道漏洞在哪；忙着追难题，基础分还没拿稳。今天带你建立一张章节复习清单。”
互动：发送当前复习章节，并标记概念、运算或综合应用中最不稳定的一项。`],["5–30 分钟｜一轮节奏",`口播：“每个章节分三轮小动作：先凭记忆写知识关系，再用基础题检查，最后用综合题串联。不会的概念当天澄清，计算错误记录具体步骤，综合题先写可得到的前几步。”
安排：学校讲到哪一章就主攻哪一章；每周固定回测两道旧错题。进度表记录完成质量，不把做题数量当成唯一标准。`],["30–60 分钟｜高频知识串讲",`板书：函数题先看定义域，再看单调性与极值。用f(x)=x²−2x+3=(x−1)²+2演示：全体实数上最小值为2；限制x在[2,3]时，最小值为3。
口播：“同一表达式，条件一变答案就变。不要只记结果，先把定义域写在纸上。”
练习：请观众分别回答顶点位置、对称轴和区间端点，并解释为什么必须检查区间。`],["60–90 分钟｜答疑与行动",`问：“基础差能不能追进度？”答：“围绕学校当前章节补前置概念，先完成基础层，不同时开很多额外课程。”
问：“模考后要换计划吗？”答：“按失分来源调整练习比例，保持主进度稳定，不被单次排名打乱。”
结束：“明天选当前章节的三道基础题独立做，写出一道仍卡住的题和卡住原因。下次我们检查一周回测。”`]],qa:[["一轮刷难题越多越好吗？","先验证基础题稳定率，再增加综合题，难度要服务于具体漏洞。"],["错题本怎么不变成抄题本？","保留错误步骤、原因与一次独立重做结果，不重复抄整页解析。"]]},初三数学答疑专场:{goal:"围绕初三数学二次函数与几何推理，练习条件识别、规范步骤和自主复盘。",sections:[["0–5 分钟｜家长开场",`口播：“初三数学卡住，不一定是整门课不会。今天先分清：基础计算、二次函数还是几何证明？评论区写一个章节和一个具体困难。”
展示今日任务：完成一道二次函数题，并解释一道几何题的依据。`],["5–25 分钟｜复习范围与解题规范",`口播：“考试范围、题型和分值请以当地公布的要求为准。这里先讲能够迁移的基础：把题目给出的条件逐条圈出，图上的猜测不能当证明。”
白板：二次函数用顶点式识别顶点与对称轴；几何题写清平行、相等和垂直的来源。每一个结论后面要能回答‘依据是什么’。`],["25–40 分钟｜例题演练",`题目：y=x²−4x+3。先配方成y=(x−2)²−1，顶点为(2,−1)，对称轴x=2；令y=0得交点(1,0)、(3,0)。
口播：“不要只写四个答案。把配方、代入与求根的步骤写出。再问：当0≤x≤1时最小值是多少？在这个区间上函数递减，x=1时最小值为0。”
互动：先暂停二十秒让观众独立写，再逐行核对。`],["40–60 分钟｜答疑与家庭行动",`问：“几何证明不会开头？”答：“从要证明的结论反推需要什么条件，再找题中已有条件，不能凭图形看起来相等。”
问：“家长不懂怎么帮？”答：“让孩子讲出每一步依据，讲不出来的地方就是要问老师的地方。”
结束：“今晚只重做今天这题，再换一个区间，检查自己能否说明最值位置。”`]],qa:[["二次函数总看错对称轴？","先配成a(x−h)²+k，顶点是(h,k)，注意括号内符号与h相反。"],["证明题写了很多仍没分？","检查是否有明确依据与完整逻辑链，不用图上的直观代替条件。"]]},初一数学查漏补缺:{goal:"针对有理数和一元一次方程，定位符号、运算顺序与等式变形的常见漏洞。",sections:[["0–10 分钟｜学情诊断",`口播：“初一数学先别急着上难题。请独立算−3+5、−2×(−4)，再解2x−3=7。三道题能看出符号、乘法规则和方程变形是否稳定。”
互动：给出两分钟独立作答，再请观众说出每一步理由。答案依次是2、8和x=5。`],["10–25 分钟｜错题共性",`口播：“负号可能是数的符号，也可能是减法。去括号不是机械删括号，要看括号前的符号。”
板书：5−(2−3)=5−2+3=6；错误写法5−2−3忽略了减去整个括号。再演示3x+2=11，两边同时减2、再除3，得到x=3。
让孩子用等式性质解释‘移项’，不要只背‘过等号变号’。`],["25–45 分钟｜补缺练习与收尾",`口播：“同类题一次三道即可：一题讲步骤，一题独立做，一题隔天回测。错误只标出第一次出错的位置。”
练习：−6÷2+4=1；2(x+1)=10得x=4；用代入检查2×(4+1)=10。
问：“计算总粗心怎么办？”答：“先定位是符号、顺序还是抄写，不用‘认真点’代替具体纠正。”
收尾：建立一张符号检查卡，明天重做一题，能讲清规则才算补上。`]],qa:[["要不要大量刷口算？","按出错规则安排短练习，配合解释与检查，比无针对性重复更有效。"],["方程解完如何检查？","将答案代回原方程，两边相等才能通过。"]]},"11-13 高成交复刻·挂车版":{goal:"围绕学习需求展示教辅使用方式，说明适用边界与购买前核对事项。",sections:[["0–5 分钟｜开场与需求筛选",`口播：“今天先讲怎么选、怎么用，再决定要不要买。请告诉我孩子年级、教材版本和最想解决的知识点。资料不匹配，就不要为了活动价格下单。”
操作：展示目录与适用年级，不将历史成交表现包装成效果保证。`],["5–20 分钟｜使用场景",`口播：“如果孩子课堂概念能理解，但课后题目连接不上，先挑与当前章节匹配的一页，找一题独立做。若连概念也没掌握，需要先回到教材或寻求老师帮助。”
演示：打开目录定位章节，说明如何选基础、巩固与提升层。展示一周三次、每次一小组的使用安排，而不要求整本连续刷完。`],["20–40 分钟｜教辅讲解",`口播：“判断一本资料是否合适，看四件事：版本是否匹配、难度梯度是否清楚、解析有没有推导、是否方便回测。”
画面：展示实际商品页、目录和一页例题；没有核对的页码、配套服务、价格与库存不口头承诺。让观众先独立解答，再使用解析检查思路。
提醒：一本资料只解决它覆盖的练习需求，不能保证具体分数或升学结果。`],["40–60 分钟｜商品核对与答疑",`口播：“如需购买，请在商品页核对年级、版本、当前价格、发货和售后。优惠与截止时间以页面实际显示为准，不人为制造倒计时。”
问：“基础薄弱适合吗？”答：“先看基础层样题能否开始，再决定是否匹配；完全看不懂时先补前置内容。”
问：“买了没时间用？”答：“先安排一周两到三次具体时段，无法安排就先不增加资料。”
收尾：复述选书核对清单和第一周使用方法，购买与否由家庭需求决定。`]],qa:[["是否适合所有教材版本？","以商品页标明的版本为准，购买前核对，不能凭相似封面判断。"],["能保证提分吗？","不能保证分数，练习效果取决于匹配程度、执行与反馈。"]]}};function Qy(e){return(e==null?void 0:e.draft)||Zy[e==null?void 0:e.t]||null}const eb={class:"src-line"},tb=["href"],nb={class:"script-layout"},sb=["onClick"],ib={class:"head"},ob={class:"m"},lb={class:"pills"},rb={class:"pill"},ab={class:"pill green"},ub={class:"headline"},cb={key:0,class:"card preview"},db={class:"qa"},pb={__name:"LiveScriptView",setup(e){const t=K(null),n=ce(()=>g.liveScripts.length?g.liveScripts:[{t:"新学期第一场·高中数学",d:"10-08",len:"60m",blocks:"开场互动(5m) → 暑期复盘(10m) → 新学期规划(20m) → Q&A(25m)"},{t:"高二数学答疑",d:"10-12",len:"60m",blocks:"痛点收集(5m) → 一轮复习节奏(20m) → 现场答疑(35m)"},{t:"暑假收心专场",d:"10-18",len:"48m",blocks:"互动开场(3m) → 收心方法(15m) → 家长答疑(30m)"},{t:"高一家长会·破冰",d:"10-23",len:"50m",blocks:"高一现状数据(10m) → 家长最关心的 3 件事(20m) → Q&A(20m)"},{t:"高三一轮启动·直播脚本",d:"10-29",len:"90m",blocks:"开场送福利(5m) → 一轮节奏(25m) → 高频考点串讲(30m) → 现场答疑(30m)"}]),s=ce(()=>Qy(t.value));return dt([t,s],([i,l])=>{g.liveScriptContext=i?{...i,...l}:null},{immediate:!0}),(i,l)=>(d(),f("div",null,[o("div",eb,[l[1]||(l[1]=o("span",null,"来源：",-1)),o("a",{href:se(Gd),target:"_blank"},"清华优优 · 直播脚本库",8,tb),l[2]||(l[2]=o("span",{class:"src-tag"},"内容数据",-1))]),o("div",nb,[o("section",null,[(d(!0),f(X,null,le(n.value,r=>{var a;return d(),f("button",{key:r.t,class:we(["node-card script-card",{on:((a=t.value)==null?void 0:a.t)===r.t}]),onClick:u=>t.value=r},[o("div",ib,[o("span",ob,v(r.t),1),o("span",lb,[o("span",rb,v(r.d),1),o("span",ab,v(r.len),1)])]),o("div",ub,v(r.blocks),1),l[3]||(l[3]=o("small",null,"点击查看完整直播脚本 →",-1))],10,sb)}),128))]),s.value?(d(),f("aside",cb,[o("header",null,[o("div",null,[l[4]||(l[4]=o("span",{class:"eyebrow"},"LIVE SCRIPT · 脚本稿",-1)),o("h2",null,v(t.value.t),1),o("p",null,v(s.value.goal),1)]),o("button",{onClick:l[0]||(l[0]=r=>t.value=null)},"×")]),(d(!0),f(X,null,le(s.value.sections,r=>(d(),f("article",{key:r[0]},[o("h3",null,v(r[0]),1),o("p",null,v(r[1]),1)]))),128)),o("div",db,[l[5]||(l[5]=o("h3",null,"预设 Q&A",-1)),o("ul",null,[(d(!0),f(X,null,le(s.value.qa,r=>(d(),f("li",{key:r},[o("b",null,v(r[0]),1),o("p",null,v(r[1]),1)]))),128))])])])):V("",!0)])]))}},fb=Dt(pb,[["__scopeId","data-v-608ad4ea"]]),vb={class:"bench-summary card"},hb={class:"bench-tools"},mb=["disabled"],gb={style:{display:"flex","align-items":"center","justify-content":"space-between","margin-bottom":"16px"}},_b={style:{color:"var(--text-mute)","font-size":"12px"}},yb=["value"],bb={class:"ava"},wb=["src","alt"],kb={class:"body"},xb={class:"name"},Sb={class:"stat"},$b={class:"actions"},Cb=["onClick"],Tb=["onClick"],Ab=["onClick","disabled"],Eb=["onClick","disabled"],Db={class:"ava"},Mb=["src","alt"],Ob={class:"body"},Ib={class:"name"},Rb={class:"stat"},Pb={class:"actions"},Lb=["onClick"],Nb={class:"card bench-editor"},Fb=["onUpdate:modelValue","type","min"],zb={class:"video-grid"},Ub={class:"thumb"},jb=["src","alt"],Bb={class:"dur"},Vb={class:"meta"},Hb={class:"title"},Wb={class:"stats"},qb=["onClick"],Qa="redcowork-replica-v2_benchmark_accounts",Kb={__name:"BenchView",setup(e){let t=null;try{t=JSON.parse(localStorage.getItem(Qa)||"null")}catch{}const n=K(t||[...g.benchmarks]);dt(()=>g.benchmarks,G=>{!t&&!n.value.length&&(n.value=[...G])});const s=K("custom"),i=K(!1),l=K([]),r=K(null),a=K({}),u=K([{key:"name",label:"账号名称"},{key:"fans",label:"粉丝量（如32.1w）"},{key:"update",label:"最新视频日期 / 更新时间"},{key:"viral",label:"爆款条数"},{key:"note",label:"备注"}]);function p(G){return(parseFloat(String(G||"").replace(/,/g,""))||0)*(/w|万/i.test(G)?1e4:1)}function c(G){const H=String(G||""),q=Date.parse(H);if(!Number.isNaN(q))return q;if(/今日|今天/.test(H))return Date.now();if(/昨日|昨天/.test(H))return Date.now()-864e5;const me=parseFloat(H);return Number.isNaN(me)?0:Date.now()-me*864e5}function h(G){return G.slice().sort((H,q)=>s.value==="fans"?p(q.fans)-p(H.fans):s.value==="viral"?Number(q.viral||0)-Number(H.viral||0):s.value==="latest"?c(q.update)-c(H.update):0)}const m=ce(()=>h(n.value.filter(G=>G.state==="监控中"))),C=ce(()=>h(n.value.filter(G=>G.state==="AI 发现"))),O=ce(()=>n.value.slice().sort((G,H)=>Number(H.viral||0)-Number(G.viral||0))),E=ce(()=>[...new Set(g.virals.map(G=>G.t))].slice(0,3));function I(){t=n.value,localStorage.setItem(Qa,JSON.stringify(n.value)),g.benchmarks=[...n.value]}function ee(G){g.benchCompare=G,rr("bench-compare")}function R(G){G.state="监控中",G.note=G.note||G.why,I(),lt("已加入监控列表")}function te(G=null){r.value=G||{},a.value=G?{...G}:{name:"",fans:"",update:"",viral:0,note:""}}function ie(){const G=String(a.value.name||"").trim();if(!G)return lt("请输入账号名称");if(n.value.some(H=>H!==r.value&&H.name===G))return lt("账号名称已存在");n.value.includes(r.value)?Object.assign(r.value,a.value,{name:G}):n.value.push({...a.value,name:G,state:"监控中",health:"green"}),I(),r.value=null}function Q(){l.value.length&&(n.value=n.value.filter(G=>!l.value.includes(G.name)),l.value=[],I())}function j(){l.value=l.value.length===m.value.length?[]:m.value.map(G=>G.name)}function D(G,H){const q=n.value.indexOf(G),me=q+H;me<0||me>=n.value.length||([n.value[q],n.value[me]]=[n.value[me],n.value[q]],s.value="custom",I())}function F(){const G=window.prompt("自定义字段名称");if(!(G!=null&&G.trim()))return;const H="custom_"+Date.now();u.value.push({key:H,label:G.trim()}),a.value[H]=""}return(G,H)=>(d(),f("div",null,[o("section",vb,[H[7]||(H[7]=o("h2",null,"AI 总结 · 竞品观察",-1)),o("p",null,"当前内容关注："+v(E.value.join("；")||"暂未收集到视频内容")+"。",1),o("ol",null,[(d(!0),f(X,null,le(O.value.slice(0,3),q=>(d(),f("li",{key:q.name},v(q.name)+"：已收集 "+v(q.viral||0)+" 条爆款，"+v(q.note||q.why||"可继续查看视频内容与脚本结构")+"。",1))),128))]),H[8]||(H[8]=o("small",null,"依据当前账号列表与视频条目整理；热度是否上升需比较连续更新记录。",-1))]),o("div",hb,[o("label",null,[H[10]||(H[10]=Te("排序 ",-1)),Qe(o("select",{"onUpdate:modelValue":H[0]||(H[0]=q=>s.value=q)},[...H[9]||(H[9]=[o("option",{value:"custom"},"自定义顺序",-1),o("option",{value:"latest"},"最新视频日期",-1),o("option",{value:"fans"},"粉丝量",-1),o("option",{value:"viral"},"爆款条数",-1)])],512),[[gs,s.value]])]),o("button",{onClick:H[1]||(H[1]=q=>i.value=!i.value)},v(i.value?"完成编辑":"编辑账号"),1),i.value?(d(),f("button",{key:0,onClick:j},"全选 / 取消")):V("",!0),i.value?(d(),f("button",{key:1,disabled:!l.value.length,onClick:Q},"删除所选 "+v(l.value.length||""),9,mb)):V("",!0)]),o("div",gb,[o("span",_b,"监控中 "+v(m.value.length)+" · AI 发现 "+v(C.value.length),1),o("a",{style:{cursor:"pointer",color:"var(--text-link)","font-size":"13px"},onClick:H[2]||(H[2]=q=>te())},"+ 添加对标")]),H[13]||(H[13]=o("div",{class:"section-h"},[o("h2",null,"监控中")],-1)),(d(!0),f(X,null,le(m.value,q=>(d(),f("div",{key:q.name,class:"acc-card"},[i.value&&q.state==="监控中"?Qe((d(),f("input",{key:0,type:"checkbox","onUpdate:modelValue":H[3]||(H[3]=me=>l.value=me),value:q.name,"aria-label":"选择账号"},null,8,yb)),[[sc,l.value]]):V("",!0),o("div",bb,[q.img?(d(),f("img",{key:0,src:q.img,alt:q.name},null,8,wb)):(d(),f(X,{key:1},[Te(v(q.name[0]),1)],64))]),o("div",kb,[o("div",xb,[Te(v(q.name)+" ",1),o("span",{class:we(["pill",q.health==="green"?"green":"warn"])},v(q.health==="green"?"健康":"需关注"),3)]),o("div",Sb,v(q.fans)+" 粉 · "+v(q.update)+"更新 · 爆款 "+v(q.viral)+" 条"+v(q.note?" · "+q.note:""),1)]),o("div",$b,[o("button",{onClick:me=>ee(q)},"对比",8,Cb),i.value?(d(),f(X,{key:0},[o("button",{onClick:me=>te(q)},"编辑",8,Tb),o("button",{onClick:me=>D(q,-1),disabled:n.value.indexOf(q)===0},"↑",8,Ab),o("button",{onClick:me=>D(q,1),disabled:n.value.indexOf(q)===n.value.length-1},"↓",8,Eb)],64)):V("",!0)])]))),128)),H[14]||(H[14]=o("div",{class:"section-h",style:{"margin-top":"24px"}},[o("h2",null,"AI 发现"),o("span",{class:"meta"},"基于选题相似度推荐")],-1)),(d(!0),f(X,null,le(C.value,q=>(d(),f("div",{key:q.name,class:"acc-card"},[o("div",Db,[q.img?(d(),f("img",{key:0,src:q.img,alt:q.name},null,8,Mb)):(d(),f(X,{key:1},[Te(v(q.name[0]),1)],64))]),o("div",Ob,[o("div",Ib,[Te(v(q.name)+" ",1),H[11]||(H[11]=o("span",{class:"pill green"},"AI 发现",-1))]),o("div",Rb,v(q.fans)+" 粉 · "+v(q.update)+"更新 · 爆款 "+v(q.viral)+" 条"+v(q.why?" · "+q.why:""),1)]),o("div",Pb,[o("span",{class:"pill",style:{cursor:"pointer"},onClick:me=>R(q)},"+ 监控",8,Lb)])]))),128)),r.value?(d(),f("div",{key:0,class:"bench-overlay",onClick:H[6]||(H[6]=vt(q=>r.value=null,["self"]))},[o("section",Nb,[o("header",null,[o("h2",null,v(n.value.includes(r.value)?"编辑账号":"添加对标"),1),o("button",{onClick:H[4]||(H[4]=q=>r.value=null)},"×")]),(d(!0),f(X,null,le(u.value,q=>(d(),f("label",{key:q.key},[Te(v(q.label),1),Qe(o("input",{"onUpdate:modelValue":me=>a.value[q.key]=me,type:q.key==="viral"?"number":"text",min:q.key==="viral"?0:void 0},null,8,Fb),[[ud,a.value[q.key]]])]))),128)),o("button",{onClick:F},"＋ 自定义字段"),o("footer",null,[o("button",{onClick:H[5]||(H[5]=q=>r.value=null)},"取消"),o("button",{onClick:ie},"保存")])])])):V("",!0),H[15]||(H[15]=o("div",{class:"section-h",style:{"margin-top":"24px"}},[o("h2",null,"爆款抓取"),o("span",{class:"meta"},"仅公开短视频 · 点赞/收藏 ≥ 2 万，或播放 ≥ 100 万")],-1)),o("div",zb,[(d(!0),f(X,null,le(se(g).virals,q=>(d(),f("div",{key:q.t,class:"video-card"},[o("div",Ub,[o("img",{src:q.cover,alt:q.t,loading:"lazy"},null,8,jb),o("span",Bb,v(q.dur),1)]),o("div",Vb,[o("div",Hb,[H[12]||(H[12]=o("span",{class:"tag"},"爆款",-1)),Te(v(q.t),1)]),o("div",Wb,[o("span",null,"♡ "+v(q.like)+" · "+v(q.from),1),o("a",{class:"action",onClick:me=>se(c2)(q)},"拆脚本",8,qb)])])]))),128))])]))}},Gb=Dt(Kb,[["__scopeId","data-v-a4e3a561"]]),Xb={class:"compare"},Yb={class:"compare-hero"},Jb={class:"compare-grid"},Zb={class:"card"},Qb={class:"account"},e9={class:"card analysis-card"},t9={class:"card"},n9={class:"data-table"},s9={class:"card"},i9={class:"content-cols"},o9={__name:"BenchCompareView",setup(e){const t=ce(()=>g.benchCompare||g.benchmarks[0]||{name:"清华杨奇函语文说",fans:"18.7w",viral:5}),n=ce(()=>[["粉丝规模","22.4w","清华优优","18.7w",t.value.name],["近 30 日发布","12","短视频 + 直播","9","短视频为主"],["平均观看","4.8w","以选题带动","6.2w","爆款集中"],["互动率","7.6%","评论提问引导","9.1%","强钩子结构"]]);function s(){g.benchAnalysisContext={peer:{...t.value},comparison:n.value,content_structure:{own:"痛点提问 → 错题分类 → 7天行动卡 → 直播答疑预告",peer:"反常识钩子 → 典型案例 → 3步方法 → 收藏口令"},data_note:"页面中的对比为演示资料，未核验数据不得当作真实经营结论。"},g.copilotOpen=!0,g.isMobile&&(g.copilotMobileOpen=!0),g.cueRequest={id:crypto.randomUUID(),question:`请详细分析清华优优与${t.value.name}的竞品差异，结合当前对比资料，给出账号定位、内容结构、可借鉴方法、差异化机会，以及下一步选题和内容排期建议。区分资料事实与建议；未核验数据明确标记。`}}return(i,l)=>(d(),f("div",Xb,[o("button",{class:"back",onClick:l[0]||(l[0]=r=>se(rr)("bench"))},"← 返回对标账号"),o("section",Yb,[l[1]||(l[1]=o("span",{class:"pill green"},"内容数据",-1)),o("h2",null,"清华优优 vs "+v(t.value.name),1),l[2]||(l[2]=o("p",null,"从账号定位、经营数据、内容结构和 AI 洞察四个维度，竞品分析如何进入下一步选题。",-1))]),o("section",Jb,[o("article",Zb,[l[4]||(l[4]=o("h3",null,"账号对比",-1)),l[5]||(l[5]=o("div",{class:"account"},[o("b",null,"清华优优"),o("span",null,"高中学习方法 · 家长沟通 · 直播答疑"),o("small",null,"22.4w 粉 · 月均 12 条内容 · 1 场直播/周")],-1)),o("div",Qb,[o("b",null,v(t.value.name),1),l[3]||(l[3]=o("span",null,"语文学科方法 · 高分案例 · 结构化表达",-1)),o("small",null,v(t.value.fans)+" 粉 · 爆款 "+v(t.value.viral)+" 条 · 近 3 日更新",1)])]),o("article",e9,[l[7]||(l[7]=o("h3",null,"AI 分析结论",-1)),o("p",null,[l[6]||(l[6]=o("b",null,"可借鉴：",-1)),Te(v(t.value.name)+" 的“问题钩子 → 方法步骤 → 可收藏清单”结构在高频焦虑题材上转化更稳定。",1)]),l[8]||(l[8]=o("p",null,[o("b",null,"差异化机会："),Te("清华优优可把学科方法延展为“家长怎么配合”的第二视角，并用直播答疑承接评论区问题。")],-1)),o("div",{class:"analysis-footer"},[o("button",{class:"wiki-sum-btn",onClick:s},"查看 AI 详细分析 ↗")])])]),o("section",t9,[l[9]||(l[9]=o("h3",null,"数据对比",-1)),o("div",n9,[(d(!0),f(X,null,le(n.value,r=>(d(),f("div",{key:r[0]},[o("span",null,v(r[0]),1),o("b",null,v(r[1]),1),o("small",null,v(r[2]),1),o("b",null,v(r[3]),1),o("small",null,v(r[4]),1)]))),128))])]),o("section",s9,[l[14]||(l[14]=o("h3",null,"内容对比",-1)),o("div",i9,[l[13]||(l[13]=o("article",null,[o("h4",null,"清华优优"),o("b",null,"《月考后先抓住这 3 个失分点》"),o("p",null,"痛点提问 → 错题分类 → 7 天行动卡 → 直播答疑预告"),o("span",null,"优势：有后续服务路径；可补强前 3 秒钩子。")],-1)),o("article",null,[o("h4",null,v(t.value.name),1),l[10]||(l[10]=o("b",null,"《孩子语文总是 90 分，问题不在刷题》",-1)),l[11]||(l[11]=o("p",null,"反常识钩子 → 典型案例 → 3 步方法 → 收藏口令",-1)),l[12]||(l[12]=o("span",null,"优势：强情绪钩子；内容可沉淀为系列选题。",-1))])])])]))}},l9=Dt(o9,[["__scopeId","data-v-a282f9d7"]]),r9={key:0,class:"loading-box"},a9={key:1,class:"error-box"},u9=["aria-valuenow"],c9={class:"main"},d9={class:"workbench-head"},p9={class:"desc"},f9={class:"search-wrap"},v9={class:"search"},h9={key:0,class:"search-results"},m9=["onMousedown"],g9={key:0},_9={class:"auth-zone"},y9={class:"avatar"},b9={class:"uname"},w9={class:"content"},k9={key:3,class:"cue-drawer"},x9={class:"cd-head"},S9={class:"cd-body"},$9={class:"toast-host"},C9={key:0,class:"modal"},T9=["placeholder"],A9=["placeholder"],E9={class:"actions"},D9={__name:"App",setup(e){const t={dashboard:Ja,planning:T5,wiki:y_,scripts:q_,"live-summary":Jy,"live-script":fb,bench:Gb,"bench-compare":l9},n=ce(()=>t[g.activeView]||Ja),s=K(""),i=K(!1),l=K(Math.max(160,Math.min(360,Number(localStorage.getItem("redcowork-replica-v2_sidebar_width"))||210)));let r=!1;function a(j){const D=Math.max(160,Math.min(360,window.innerWidth-(g.copilotOpen?m.value:0)-420));l.value=Math.max(160,Math.min(D,j))}function u(j){r&&a(j.clientX)}function p(){r=!1,document.body.classList.remove("is-resizing-cue"),localStorage.setItem("redcowork-replica-v2_sidebar_width",String(Math.round(l.value))),window.removeEventListener("pointermove",u),window.removeEventListener("pointerup",p),window.removeEventListener("pointercancel",p)}function c(j){g.isMobile||(j.preventDefault(),r=!0,document.body.classList.add("is-resizing-cue"),window.addEventListener("pointermove",u),window.addEventListener("pointerup",p),window.addEventListener("pointercancel",p))}function h(j){["ArrowLeft","ArrowRight"].includes(j.key)&&(j.preventDefault(),a(l.value+(j.key==="ArrowRight"?10:-10)),localStorage.setItem("redcowork-replica-v2_sidebar_width",String(l.value)))}Kn(()=>{r&&p()});const m=K(Number(localStorage.getItem("redcowork-replica-v2_cue_width"))||360);let C=!1;function O(j){if(!C||g.isMobile||!g.copilotOpen)return;const D=Math.min(620,window.innerWidth-520);m.value=Math.max(280,Math.min(D,window.innerWidth-j.clientX))}function E(){C&&(C=!1,document.body.classList.remove("is-resizing-cue"),localStorage.setItem("redcowork-replica-v2_cue_width",String(Math.round(m.value))),window.removeEventListener("pointermove",O),window.removeEventListener("pointerup",E))}function I(j){g.isMobile||!g.copilotOpen||(j.preventDefault(),C=!0,document.body.classList.add("is-resizing-cue"),window.addEventListener("pointermove",O),window.addEventListener("pointerup",E))}const ee=ce(()=>{const j=s.value.trim().toLowerCase();return j?[...g.liveSessions.map(F=>({title:F.title,meta:F.d,view:"live-summary",kind:"直播复盘"})),...g.scripts.map(F=>({title:F.t,meta:F.from,view:"scripts",kind:"短视频脚本"})),...g.wikiFiles.map(F=>({title:F.name,meta:F.meta||"知识库",view:"wiki",kind:"知识库"})),...g.benchmarks.map(F=>({title:F.name,meta:F.note||"",view:"bench",kind:"对标账号"})),...g.planningTasks.map(F=>({title:F.title,meta:F.planned_at,view:"planning",kind:F.type==="live"?"直播排期":"短视频排期"}))].filter(F=>`${F.title} ${F.meta} ${F.kind}`.toLowerCase().includes(j)).slice(0,6):[]});function R(j){g.activeView=j.view,s.value="",i.value=!1}function te(){ee.value[0]?R(ee.value[0]):lt("没有找到已导入的真实内容")}ei(()=>{a2(),ie()}),Kn(E);async function ie(){await t2(),await ki()}async function Q(){await Cd(),s2(),lt("已退出登录")}return(j,D)=>(d(),f(X,null,[se(g).loading?(d(),f("div",r9,[...D[11]||(D[11]=[o("div",{class:"spin"},null,-1),o("span",null,"正在加载数据…",-1)])])):se(g).error?(d(),f("div",a9,[o("span",null,"数据加载失败："+v(se(g).error),1),D[12]||(D[12]=o("span",{style:{"font-size":"12px",color:"var(--text-mute)"}},"请确认后端已启动（uvicorn app.main:app --port 8000）",-1)),o("button",{class:"wiki-sum-btn",onClick:D[0]||(D[0]=(...F)=>se(ki)&&se(ki)(...F))},"重试")])):(d(),f("div",{key:2,class:we(["app",{"is-mobile":se(g).isMobile}]),style:Rt({"--cue-width":`${m.value}px`,"--sidebar-width":`${l.value}px`})},[se(g).isMobile&&se(g).sidebarOpen?(d(),f("div",{key:0,class:"drawer-mask",onClick:D[1]||(D[1]=(...F)=>se(Di)&&se(Di)(...F))})):V("",!0),st(w2),se(g).isMobile?V("",!0):(d(),f("div",{key:1,class:"sidebar-resizer",role:"separator","aria-label":"调整左侧导航宽度","aria-orientation":"vertical","aria-valuenow":l.value,"aria-valuemin":"160","aria-valuemax":"360",tabindex:"0",onPointerdown:c,onKeydown:h},[...D[13]||(D[13]=[o("i",null,null,-1)])],40,u9)),o("main",c9,[o("div",d9,[se(g).isMobile?(d(),f("button",{key:0,class:"mb-menu",onClick:D[2]||(D[2]=(...F)=>se(fa)&&se(fa)(...F)),"aria-label":"菜单"},[...D[14]||(D[14]=[o("span",null,null,-1),o("span",null,null,-1),o("span",null,null,-1)])])):V("",!0),o("h1",null,v(se(Xd)[se(g).activeView]),1),o("span",p9,v(se(Yd)[se(g).activeView]),1),o("div",f9,[o("div",v9,[D[15]||(D[15]=o("span",{class:"ic"},null,-1)),Qe(o("input",{"onUpdate:modelValue":D[3]||(D[3]=F=>s.value=F),placeholder:"搜索复盘、知识库、排期",onFocus:D[4]||(D[4]=F=>i.value=!0),onKeyup:Wn(te,["enter"])},null,544),[[_t,s.value]])]),i.value&&s.value?(d(),f("div",h9,[(d(!0),f(X,null,le(ee.value,(F,G)=>(d(),f("button",{key:`${F.kind}-${F.title}-${G}`,onMousedown:vt(H=>R(F),["prevent"])},[o("span",null,[o("b",null,v(F.title),1),o("small",null,v(F.meta),1)]),o("em",null,v(F.kind),1)],40,m9))),128)),ee.value.length?V("",!0):(d(),f("p",g9,"没有找到已导入的真实内容"))])):V("",!0)]),o("div",_9,[se(g).authUser?(d(),f("button",{key:0,class:"auth-link",onClick:D[5]||(D[5]=F=>se(g).channelsOpen=!0)},"账号管理")):V("",!0),se(g).authUser?(d(),f(X,{key:1},[o("span",y9,v((se(g).authUser.display_name||se(g).authUser.username||"U").slice(0,1)),1),o("span",b9,v(se(g).authUser.display_name||se(g).authUser.username),1),o("button",{class:"auth-link",onClick:Q},"退出")],64)):V("",!0)]),se(g).isMobile?(d(),f("button",{key:1,class:"mb-cue",onClick:D[6]||(D[6]=(...F)=>se(va)&&se(va)(...F)),"aria-label":"Cue 助手"},"✦")):V("",!0)]),o("div",w9,[(d(),En(Y1(n.value)))])]),!se(g).isMobile&&se(g).copilotOpen?(d(),f("div",{key:2,class:"cue-resizer",role:"separator","aria-label":"调整 Cue 宽度","aria-orientation":"vertical",onPointerdown:I},[...D[16]||(D[16]=[o("i",null,null,-1)])],32)):V("",!0),st(Ya),se(g).isMobile&&se(g).copilotMobileOpen?(d(),f("div",k9,[o("div",x9,[D[17]||(D[17]=o("span",{class:"cd-badge"},"✦",-1)),D[18]||(D[18]=o("span",{class:"cd-title"},"Cue 助手",-1)),o("button",{class:"cd-close",onClick:D[7]||(D[7]=(...F)=>se(ha)&&se(ha)(...F))},"×")]),o("div",S9,[st(Ya,{mobile:!0})])])):V("",!0)],6)),st(mm),se(g).loginOpen?(d(),En(zh,{key:3})):V("",!0),se(g).channelsOpen?(d(),En(sm,{key:4})):V("",!0),se(g).syncAssistantOpen?(d(),En(cm,{key:5})):V("",!0),o("div",$9,[(d(!0),f(X,null,le(se(g).toasts,F=>(d(),f("div",{key:F.id,class:"toast"},v(F.msg),1))),128))]),o("div",{class:we(["modal-bg",{open:se(g).modal}]),onClick:D[10]||(D[10]=vt((...F)=>se(Bs)&&se(Bs)(...F),["self"]))},[se(g).modal?(d(),f("div",C9,[o("h3",null,v(se(g).modal.title),1),(d(!0),f(X,null,le(se(g).modal.fields,F=>(d(),f("div",{class:"field",key:F.key},[o("label",null,v(F.label),1),F.type==="textarea"?(d(),f("textarea",{key:0,placeholder:F.placeholder},null,8,T9)):(d(),f("input",{key:1,placeholder:F.placeholder},null,8,A9))]))),128)),o("div",E9,[o("button",{onClick:D[8]||(D[8]=(...F)=>se(Bs)&&se(Bs)(...F))},"取消"),o("button",{class:"primary",onClick:D[9]||(D[9]=(...F)=>se(Bs)&&se(Bs)(...F))},"确认")])])):V("",!0)],2)],64))}},M9=Dt(D9,[["__scopeId","data-v-5b4ca15c"]]);md(M9).mount("#app");
