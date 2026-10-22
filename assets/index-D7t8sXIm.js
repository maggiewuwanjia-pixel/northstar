var Nc=Object.defineProperty;var xr=e=>{throw TypeError(e)};var Fc=(e,n,t)=>n in e?Nc(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var an=(e,n,t)=>Fc(e,typeof n!="symbol"?n+"":n,t),zc=(e,n,t)=>n.has(e)||xr("Cannot "+t);var Sr=(e,n,t)=>n.has(e)?xr("Cannot add the same private member more than once"):n instanceof WeakSet?n.add(e):n.set(e,t);var $r=(e,n,t)=>(zc(e,n,"access private method"),t);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();/**
* @vue/shared v3.5.42
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Vo(e){const n=Object.create(null);for(const t of e.split(","))n[t]=1;return t=>t in n}const dn={},Gs=[],Wt=()=>{},eu=()=>!1,Sl=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),$l=e=>e.startsWith("onUpdate:"),Kn=Object.assign,Xo=(e,n)=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)},Uc=Object.prototype.hasOwnProperty,ln=(e,n)=>Uc.call(e,n),Me=Array.isArray,_s=e=>Mi(e)==="[object Map]",is=e=>Mi(e)==="[object Set]",Tr=e=>Mi(e)==="[object Date]",Pe=e=>typeof e=="function",wn=e=>typeof e=="string",qt=e=>typeof e=="symbol",rn=e=>e!==null&&typeof e=="object",nu=e=>(rn(e)||Pe(e))&&Pe(e.then)&&Pe(e.catch),tu=Object.prototype.toString,Mi=e=>tu.call(e),jc=e=>Mi(e).slice(8,-1),su=e=>Mi(e)==="[object Object]",Wo=e=>wn(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,gi=Vo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Tl=e=>{const n=Object.create(null);return(t=>n[t]||(n[t]=e(t)))},Bc=/-\w/g,st=Tl(e=>e.replace(Bc,n=>n.slice(1).toUpperCase())),Vc=/\B([A-Z])/g,ws=Tl(e=>e.replace(Vc,"-$1").toLowerCase()),Cl=Tl(e=>e.charAt(0).toUpperCase()+e.slice(1)),jl=Tl(e=>e?`on${Cl(e)}`:""),Vt=(e,n)=>!Object.is(e,n),nl=(e,...n)=>{for(let t=0;t<e.length;t++)e[t](...n)},iu=(e,n,t,s=!1)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,writable:s,value:t})},Dl=e=>{const n=parseFloat(e);return isNaN(n)?e:n};let Cr;const Al=()=>Cr||(Cr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Pn(e){if(Me(e)){const n={};for(let t=0;t<e.length;t++){const s=e[t],i=wn(s)?qc(s):Pn(s);if(i)for(const o in i)n[o]=i[o]}return n}else if(wn(e)||rn(e))return e}const Xc=/;(?![^(]*\))/g,Wc=/:([^]+)/,Hc=/\/\*[^]*?\*\//g;function qc(e){const n={};return e.replace(Hc,"").split(Xc).forEach(t=>{if(t){const s=t.split(Wc);s.length>1&&(n[s[0].trim()]=s[1].trim())}}),n}function we(e){let n="";if(wn(e))n=e;else if(Me(e))for(let t=0;t<e.length;t++){const s=we(e[t]);s&&(n+=s+" ")}else if(rn(e))for(const t in e)e[t]&&(n+=t+" ");return n.trim()}const Kc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Gc=Vo(Kc);function lu(e){return!!e||e===""}function Yc(e,n){if(e.length!==n.length)return!1;let t=!0;for(let s=0;t&&s<e.length;s++)t=Ot(e[s],n[s]);return t}function Dr(e,n){if(e.size!==n.size)return!1;const t=Array.from(n),s=new Uint8Array(t.length);for(const i of e){let o=-1;for(let r=0;r<t.length;r++)if(!s[r]&&Ot(i,t[r])){o=r;break}if(o<0)return!1;s[o]=1}return!0}function Ot(e,n){if(e===n)return!0;let t=Tr(e),s=Tr(n);if(t||s)return t&&s?e.getTime()===n.getTime():!1;if(t=qt(e),s=qt(n),t||s)return e===n;if(t=Me(e),s=Me(n),t||s)return t&&s?Yc(e,n):!1;if(t=rn(e),s=rn(n),t||s){if(!t||!s)return!1;if(t=_s(e),s=_s(n),t||s||(t=is(e),s=is(n),t||s))return t&&s?Dr(e,n):!1;const i=Object.keys(e).length,o=Object.keys(n).length;if(i!==o)return!1;for(const r in e){const a=e.hasOwnProperty(r),u=n.hasOwnProperty(r);if(a&&!u||!a&&u||!Ot(e[r],n[r]))return!1}}return String(e)===String(n)}function Ho(e,n){return e.findIndex(t=>Ot(t,n))}const ou=e=>!!(e&&e.__v_isRef===!0),f=e=>wn(e)?e:e==null?"":Me(e)||rn(e)&&(e.toString===tu||!Pe(e.toString))?ou(e)?f(e.value):JSON.stringify(e,ru,2):String(e),ru=(e,n)=>ou(n)?ru(e,n.value):_s(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((t,[s,i],o)=>(t[Bl(s,o)+" =>"]=i,t),{})}:is(n)?{[`Set(${n.size})`]:[...n.values()].map(t=>Bl(t))}:qt(n)?Bl(n):rn(n)&&!Me(n)&&!su(n)?String(n):n,Bl=(e,n="")=>{var t;return qt(e)?`Symbol(${(t=e.description)!=null?t:n})`:e};/**
* @vue/reactivity v3.5.42
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Un;class Qc{constructor(n=!1){this.detached=n,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!n&&Un&&(Un.active?(this.parent=Un,this.index=(Un.scopes||(Un.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let n,t;if(this.scopes){const s=this.scopes.slice();for(n=0,t=s.length;n<t;n++)s[n].pause()}for(n=0,t=this.effects.length;n<t;n++)this.effects[n].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let n,t;if(this.scopes){const i=this.scopes.slice();for(n=0,t=i.length;n<t;n++)i[n].resume()}const s=this.effects.slice();for(n=0,t=s.length;n<t;n++)s[n].resume()}}run(n){if(this._active){const t=Un;try{return Un=this,n()}finally{Un=t}}}on(){++this._on===1&&(this.prevScope=Un,Un=this)}off(){if(this._on>0&&--this._on===0){if(Un===this)Un=this.prevScope;else{let n=Un;for(;n;){if(n.prevScope===this){n.prevScope=this.prevScope;break}n=n.prevScope}}this.prevScope=void 0}}stop(n){if(this._active){this._active=!1;let t,s;for(t=0,s=this.effects.length;t<s;t++)this.effects[t].stop();for(this.effects.length=0,t=0,s=this.cleanups.length;t<s;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){const i=this.scopes.slice();for(t=0,s=i.length;t<s;t++)i[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!n){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Jc(){return Un}let fn;const Vl=new WeakSet;class au{constructor(n){this.fn=n,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Un&&(Un.active?Un.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Vl.has(this)&&(Vl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||cu(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ar(this),du(this);const n=fn,t=Mt;fn=this,Mt=!0;try{return this.fn()}finally{pu(this),fn=n,Mt=t,this.flags&=-3}}stop(){if(this.flags&1){for(let n=this.deps;n;n=n.nextDep)Go(n);this.deps=this.depsTail=void 0,Ar(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Vl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){fo(this)&&this.run()}get dirty(){return fo(this)}}let uu=0,_i,yi;function cu(e,n=!1){if(e.flags|=8,n){e.next=yi,yi=e;return}e.next=_i,_i=e}function qo(){uu++}function Ko(){if(--uu>0)return;if(yi){let n=yi;for(yi=void 0;n;){const t=n.next;n.next=void 0,n.flags&=-9,n=t}}let e;for(;_i;){let n=_i;for(_i=void 0;n;){const t=n.next;if(n.next=void 0,n.flags&=-9,n.flags&1)try{n.trigger()}catch(s){e||(e=s)}n=t}}if(e)throw e}function du(e){for(let n=e.deps;n;n=n.nextDep)n.version=-1,n.prevActiveLink=n.dep.activeLink,n.dep.activeLink=n}function pu(e){let n,t=e.depsTail,s=t;for(;s;){const i=s.prevDep;s.version===-1?(s===t&&(t=i),Go(s),Zc(s)):n=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}e.deps=n,e.depsTail=t}function fo(e){for(let n=e.deps;n;n=n.nextDep)if(n.dep.version!==n.version||n.dep.computed&&(vu(n.dep.computed)||n.dep.version!==n.version))return!0;return!!e._dirty}function vu(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===$i)||(e.globalVersion=$i,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!fo(e))))return;e.flags|=2;const n=e.dep,t=fn,s=Mt;fn=e,Mt=!0;try{du(e);const i=e.fn(e._value);(n.version===0||Vt(i,e._value))&&(e.flags|=128,e._value=i,n.version++)}catch(i){throw n.version++,i}finally{fn=t,Mt=s,pu(e),e.flags&=-3}}function Go(e,n=!1){const{dep:t,prevSub:s,nextSub:i}=e;if(s&&(s.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=s,e.nextSub=void 0),t.subs===e&&(t.subs=s,!s&&t.computed)){t.computed.flags&=-5;for(let o=t.computed.deps;o;o=o.nextDep)Go(o,!0)}!n&&!--t.sc&&t.map&&t.map.delete(t.key)}function Zc(e){const{prevDep:n,nextDep:t}=e;n&&(n.nextDep=t,e.prevDep=void 0),t&&(t.prevDep=n,e.nextDep=void 0)}let Mt=!0;const fu=[];function ls(){fu.push(Mt),Mt=!1}function os(){const e=fu.pop();Mt=e===void 0?!0:e}function Ar(e){const{cleanup:n}=e;if(e.cleanup=void 0,n){const t=fn;fn=void 0;try{n()}finally{fn=t}}}let $i=0;class e1{constructor(n,t){this.sub=n,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Yo{constructor(n){this.computed=n,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(n){if(!fn||!Mt||fn===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==fn)t=this.activeLink=new e1(fn,this),fn.deps?(t.prevDep=fn.depsTail,fn.depsTail.nextDep=t,fn.depsTail=t):fn.deps=fn.depsTail=t,hu(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const s=t.nextDep;s.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=s),t.prevDep=fn.depsTail,t.nextDep=void 0,fn.depsTail.nextDep=t,fn.depsTail=t,fn.deps===t&&(fn.deps=s)}return t}trigger(n){this.version++,$i++,this.notify(n)}notify(n){qo();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Ko()}}}function hu(e){if(e.dep.sc++,e.sub.flags&4){const n=e.dep.computed;if(n&&!e.dep.subs){n.flags|=20;for(let s=n.deps;s;s=s.nextDep)hu(s)}const t=e.dep.subs;t!==e&&(e.prevSub=t,t&&(t.nextSub=e)),e.dep.subs=e}}const ho=new WeakMap,Is=Symbol(""),mo=Symbol(""),Ti=Symbol("");function Wn(e,n,t){if(Mt&&fn){let s=ho.get(e);s||ho.set(e,s=new Map);let i=s.get(t);i||(s.set(t,i=new Yo),i.map=s,i.key=t),i.track()}}function ns(e,n,t,s,i,o){const r=ho.get(e);if(!r){$i++;return}const a=u=>{u&&u.trigger()};if(qo(),n==="clear")r.forEach(a);else{const u=Me(e),p=u&&Wo(t);if(u&&t==="length"){const c=Number(s);r.forEach((h,m)=>{(m==="length"||m===Ti||!qt(m)&&m>=c)&&a(h)})}else switch((t!==void 0||r.has(void 0))&&a(r.get(t)),p&&a(r.get(Ti)),n){case"add":u?p&&a(r.get("length")):(a(r.get(Is)),_s(e)&&a(r.get(mo)));break;case"delete":u||(a(r.get(Is)),_s(e)&&a(r.get(mo)));break;case"set":_s(e)&&a(r.get(Is));break}}Ko()}function Vs(e){const n=sn(e);return n===e?n:(Wn(n,"iterate",Ti),St(e)?n:n.map(Rt))}function El(e){return Wn(e=sn(e),"iterate",Ti),e}function jt(e,n){return rs(e)?Zs(Ms(e)?Rt(n):n):Rt(n)}const n1={__proto__:null,[Symbol.iterator](){return Xl(this,Symbol.iterator,e=>jt(this,e))},concat(...e){return Vs(this).concat(...e.map(n=>Me(n)?Vs(n):n))},entries(){return Xl(this,"entries",e=>(e[1]=jt(this,e[1]),e))},every(e,n){return Jt(this,"every",e,n,void 0,arguments)},filter(e,n){return Jt(this,"filter",e,n,t=>t.map(s=>jt(this,s)),arguments)},find(e,n){return Jt(this,"find",e,n,t=>jt(this,t),arguments)},findIndex(e,n){return Jt(this,"findIndex",e,n,void 0,arguments)},findLast(e,n){return Jt(this,"findLast",e,n,t=>jt(this,t),arguments)},findLastIndex(e,n){return Jt(this,"findLastIndex",e,n,void 0,arguments)},forEach(e,n){return Jt(this,"forEach",e,n,void 0,arguments)},includes(...e){return Wl(this,"includes",e)},indexOf(...e){return Wl(this,"indexOf",e)},join(e){return Vs(this).join(e)},lastIndexOf(...e){return Wl(this,"lastIndexOf",e)},map(e,n){return Jt(this,"map",e,n,void 0,arguments)},pop(){return ii(this,"pop")},push(...e){return ii(this,"push",e)},reduce(e,...n){return Er(this,"reduce",e,n)},reduceRight(e,...n){return Er(this,"reduceRight",e,n)},shift(){return ii(this,"shift")},some(e,n){return Jt(this,"some",e,n,void 0,arguments)},splice(...e){return ii(this,"splice",e)},toReversed(){return Vs(this).toReversed()},toSorted(e){return Vs(this).toSorted(e)},toSpliced(...e){return Vs(this).toSpliced(...e)},unshift(...e){return ii(this,"unshift",e)},values(){return Xl(this,"values",e=>jt(this,e))}};function Xl(e,n,t){const s=El(e),i=s[n]();return s!==e&&!St(e)&&(i._next=i.next,i.next=()=>{const o=i._next();return o.done||(o.value=t(o.value)),o}),i}const t1=Array.prototype;function Jt(e,n,t,s,i,o){const r=El(e),a=r!==e&&!St(e),u=r[n];if(u!==t1[n]){const h=u.apply(e,o);return a?Rt(h):h}let p=t;r!==e&&(a?p=function(h,m){return t.call(this,jt(e,h),m,e)}:t.length>2&&(p=function(h,m){return t.call(this,h,m,e)}));const c=u.call(r,p,s);return a&&i?i(c):c}function Er(e,n,t,s){const i=El(e),o=i!==e&&!St(e);let r=t,a=!1;i!==e&&(o?(a=s.length===0,r=function(p,c,h){return a&&(a=!1,p=jt(e,p)),t.call(this,p,jt(e,c),h,e)}):t.length>3&&(r=function(p,c,h){return t.call(this,p,c,h,e)}));const u=i[n](r,...s);return a?jt(e,u):u}function Wl(e,n,t){const s=sn(e);Wn(s,"iterate",Ti);const i=s[n](...t);return(i===-1||i===!1)&&Zo(t[0])?(t[0]=sn(t[0]),s[n](...t)):i}function ii(e,n,t=[]){ls(),qo();const s=sn(e)[n].apply(e,t);return Ko(),os(),s}const s1=Vo("__proto__,__v_isRef,__isVue"),mu=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(qt));function i1(e){qt(e)||(e=String(e));const n=sn(this);return Wn(n,"has",e),n.hasOwnProperty(e)}class gu{constructor(n=!1,t=!1){this._isReadonly=n,this._isShallow=t}get(n,t,s){if(t==="__v_skip")return n.__v_skip;const i=this._isReadonly,o=this._isShallow;if(t==="__v_isReactive")return!i;if(t==="__v_isReadonly")return i;if(t==="__v_isShallow")return o;if(t==="__v_raw")return s===(i?o?f1:wu:o?bu:yu).get(n)||Object.getPrototypeOf(n)===Object.getPrototypeOf(s)?n:void 0;const r=Me(n);if(!i){let u;if(r&&(u=n1[t]))return u;if(t==="hasOwnProperty")return i1}const a=Reflect.get(n,t,qn(n)?n:s);if((qt(t)?mu.has(t):s1(t))||(i||Wn(n,"get",t),o))return a;if(qn(a)){const u=r&&Wo(t)?a:a.value;return i&&rn(u)?_o(u):u}return rn(a)?i?_o(a):Ps(a):a}}class _u extends gu{constructor(n=!1){super(!1,n)}set(n,t,s,i){let o=n[t];const r=Me(n)&&Wo(t);if(!this._isShallow){const p=rs(o);if(!St(s)&&!rs(s)&&(o=sn(o),s=sn(s)),!r&&qn(o)&&!qn(s))return p||(o.value=s),!0}const a=r?Number(t)<n.length:ln(n,t),u=Reflect.set(n,t,s,qn(n)?n:i);return n===sn(i)&&u&&(a?Vt(s,o)&&ns(n,"set",t,s):ns(n,"add",t,s)),u}deleteProperty(n,t){const s=ln(n,t);n[t];const i=Reflect.deleteProperty(n,t);return i&&s&&ns(n,"delete",t,void 0),i}has(n,t){const s=Reflect.has(n,t);return(!qt(t)||!mu.has(t))&&Wn(n,"has",t),s}ownKeys(n){return Wn(n,"iterate",Me(n)?"length":Is),Reflect.ownKeys(n)}}class l1 extends gu{constructor(n=!1){super(!0,n)}set(n,t){return!0}deleteProperty(n,t){return!0}}const o1=new _u,r1=new l1,a1=new _u(!0);const go=e=>e,Bi=e=>Reflect.getPrototypeOf(e);function u1(e,n,t){return function(...s){const i=this.__v_raw,o=sn(i),r=_s(o),a=e==="entries"||e===Symbol.iterator&&r,u=e==="keys"&&r,p=i[e](...s),c=t?go:n?Zs:Rt;return!n&&Wn(o,"iterate",u?mo:Is),Kn(Object.create(p),{next(){const{value:h,done:m}=p.next();return m?{value:h,done:m}:{value:a?[c(h[0]),c(h[1])]:c(h),done:m}}})}}function Vi(e){return function(...n){return e==="delete"?!1:e==="clear"?void 0:this}}function c1(e,n){const t={get(i){const o=this.__v_raw,r=sn(o),a=sn(i);e||(Vt(i,a)&&Wn(r,"get",i),Wn(r,"get",a));const{has:u}=Bi(r),p=n?go:e?Zs:Rt;if(u.call(r,i))return p(o.get(i));if(u.call(r,a))return p(o.get(a));o!==r&&o.get(i)},get size(){const i=this.__v_raw;return!e&&Wn(sn(i),"iterate",Is),i.size},has(i){const o=this.__v_raw,r=sn(o),a=sn(i);return e||(Vt(i,a)&&Wn(r,"has",i),Wn(r,"has",a)),i===a?o.has(i):o.has(i)||o.has(a)},forEach(i,o){const r=this,a=r.__v_raw,u=sn(a),p=n?go:e?Zs:Rt;return!e&&Wn(u,"iterate",Is),a.forEach((c,h)=>i.call(o,p(c),p(h),r))}};return Kn(t,e?{add:Vi("add"),set:Vi("set"),delete:Vi("delete"),clear:Vi("clear")}:{add(i){const o=sn(this),r=Bi(o),a=sn(i),u=!n&&!St(i)&&!rs(i)?a:i;return r.has.call(o,u)||Vt(i,u)&&r.has.call(o,i)||Vt(a,u)&&r.has.call(o,a)||(o.add(u),ns(o,"add",u,u)),this},set(i,o){!n&&!St(o)&&!rs(o)&&(o=sn(o));const r=sn(this),{has:a,get:u}=Bi(r);let p=a.call(r,i);p||(i=sn(i),p=a.call(r,i));const c=u.call(r,i);return r.set(i,o),p?Vt(o,c)&&ns(r,"set",i,o):ns(r,"add",i,o),this},delete(i){const o=sn(this),{has:r,get:a}=Bi(o);let u=r.call(o,i);u||(i=sn(i),u=r.call(o,i)),a&&a.call(o,i);const p=o.delete(i);return u&&ns(o,"delete",i,void 0),p},clear(){const i=sn(this),o=i.size!==0,r=i.clear();return o&&ns(i,"clear",void 0,void 0),r}}),["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=u1(i,e,n)}),t}function Qo(e,n){const t=c1(e,n);return(s,i,o)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?s:Reflect.get(ln(t,i)&&i in s?t:s,i,o)}const d1={get:Qo(!1,!1)},p1={get:Qo(!1,!0)},v1={get:Qo(!0,!1)};const yu=new WeakMap,bu=new WeakMap,wu=new WeakMap,f1=new WeakMap;function h1(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ps(e){return rs(e)?e:Jo(e,!1,o1,d1,yu)}function m1(e){return Jo(e,!1,a1,p1,bu)}function _o(e){return Jo(e,!0,r1,v1,wu)}function Jo(e,n,t,s,i){if(!rn(e)||e.__v_raw&&!(n&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const o=i.get(e);if(o)return o;const r=h1(jc(e));if(r===0)return e;const a=new Proxy(e,r===2?s:t);return i.set(e,a),a}function Ms(e){return rs(e)?Ms(e.__v_raw):!!(e&&e.__v_isReactive)}function rs(e){return!!(e&&e.__v_isReadonly)}function St(e){return!!(e&&e.__v_isShallow)}function Zo(e){return e?!!e.__v_raw:!1}function sn(e){const n=e&&e.__v_raw;return n?sn(n):e}function g1(e){return!ln(e,"__v_skip")&&Object.isExtensible(e)&&iu(e,"__v_skip",!0),e}const Rt=e=>rn(e)?Ps(e):e,Zs=e=>rn(e)?_o(e):e;function qn(e){return e?e.__v_isRef===!0:!1}function K(e){return _1(e,!1)}function _1(e,n){return qn(e)?e:new y1(e,n)}class y1{constructor(n,t){this.dep=new Yo,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?n:sn(n),this._value=t?n:Rt(n),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(n){const t=this._rawValue,s=this.__v_isShallow||St(n)||rs(n);n=s?n:sn(n),Vt(n,t)&&(this._rawValue=n,this._value=s?n:Rt(n),this.dep.trigger())}}function se(e){return qn(e)?e.value:e}const b1={get:(e,n,t)=>n==="__v_raw"?e:se(Reflect.get(e,n,t)),set:(e,n,t,s)=>{const i=e[n];return qn(i)&&!qn(t)?(i.value=t,!0):Reflect.set(e,n,t,s)}};function ku(e){return Ms(e)?e:new Proxy(e,b1)}class w1{constructor(n,t,s){this.fn=n,this.setter=t,this._value=void 0,this.dep=new Yo(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=$i-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&fn!==this)return cu(this,!0),!0}get value(){const n=this.dep.track();return vu(this),n&&(n.version=this.dep.version),this._value}set value(n){this.setter&&this.setter(n)}}function k1(e,n,t=!1){let s,i;return Pe(e)?s=e:(s=e.get,i=e.set),new w1(s,i,t)}const Xi={},ol=new WeakMap;let Cs;function x1(e,n=!1,t=Cs){if(t){let s=ol.get(t);s||ol.set(t,s=[]),s.push(e)}}function S1(e,n,t=dn){const{immediate:s,deep:i,once:o,scheduler:r,augmentJob:a,call:u}=t,p=ie=>i?ie:St(ie)||i===!1||i===0?ts(ie,1):ts(ie);let c,h,m,S,M=!1,A=!1;if(qn(e)?(h=()=>e.value,M=St(e)):Ms(e)?(h=()=>p(e),M=!0):Me(e)?(A=!0,M=e.some(ie=>Ms(ie)||St(ie)),h=()=>e.map(ie=>{if(qn(ie))return ie.value;if(Ms(ie))return p(ie);if(Pe(ie))return u?u(ie,2):ie()})):Pe(e)?n?h=u?()=>u(e,2):e:h=()=>{if(m){ls();try{m()}finally{os()}}const ie=Cs;Cs=c;try{return u?u(e,3,[S]):e(S)}finally{Cs=ie}}:h=Wt,n&&i){const ie=h,Z=i===!0?1/0:i;h=()=>ts(ie(),Z)}const O=Jc(),ee=()=>{c.stop(),O&&O.active&&Xo(O.effects,c)};if(o&&n){const ie=n;n=(...Z)=>{const V=ie(...Z);return ee(),V}}let P=A?new Array(e.length).fill(Xi):Xi;const ne=ie=>{if(!(!(c.flags&1)||!c.dirty&&!ie))if(n){const Z=c.run();if(ie||i||M||(A?Z.some((V,E)=>Vt(V,P[E])):Vt(Z,P))){m&&m();const V=Cs;Cs=c;try{const E=[Z,P===Xi?void 0:A&&P[0]===Xi?[]:P,S];P=Z,u?u(n,3,E):n(...E)}finally{Cs=V}}}else c.run()};return a&&a(ne),c=new au(h),c.scheduler=r?()=>r(ne,!1):ne,S=ie=>x1(ie,!1,c),m=c.onStop=()=>{const ie=ol.get(c);if(ie){if(u)u(ie,4);else for(const Z of ie)Z();ol.delete(c)}},n?s?ne(!0):P=c.run():r?r(ne.bind(null,!0),!0):c.run(),ee.pause=c.pause.bind(c),ee.resume=c.resume.bind(c),ee.stop=ee,ee}function ts(e,n=1/0,t){if(n<=0||!rn(e)||e.__v_skip||(t=t||new Map,(t.get(e)||0)>=n))return e;if(t.set(e,n),n--,qn(e))ts(e.value,n,t);else if(Me(e))for(let s=0;s<e.length;s++)ts(e[s],n,t);else if(is(e)||_s(e))e.forEach(s=>{ts(s,n,t)});else if(su(e)){for(const s in e)ts(e[s],n,t);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&ts(e[s],n,t)}return e}/**
* @vue/runtime-core v3.5.42
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Oi(e,n,t,s){try{return s?e(...s):e()}catch(i){Il(i,n,t)}}function Pt(e,n,t,s){if(Pe(e)){const i=Oi(e,n,t,s);return i&&nu(i)&&i.catch(o=>{Il(o,n,t)}),i}if(Me(e)){const i=[];for(let o=0;o<e.length;o++)i.push(Pt(e[o],n,t,s));return i}}function Il(e,n,t,s=!0){const i=n?n.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:r}=n&&n.appContext.config||dn;if(n){let a=n.parent;const u=n.proxy,p=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const c=a.ec;if(c){for(let h=0;h<c.length;h++)if(c[h](e,u,p)===!1)return}a=a.parent}if(o){ls(),Oi(o,null,10,[e,u,p]),os();return}}$1(e,t,i,s,r)}function $1(e,n,t,s=!0,i=!1){if(i)throw e;console.error(e)}const tt=[];let zt=-1;const Ys=[];let gs=null,Hs=0;const xu=Promise.resolve();let rl=null;function Ut(e){const n=rl||xu;return e?n.then(this?e.bind(this):e):n}function T1(e){let n=zt+1,t=tt.length;for(;n<t;){const s=n+t>>>1,i=tt[s],o=Ci(i);o<e||o===e&&i.flags&2?n=s+1:t=s}return n}function er(e){if(!(e.flags&1)){const n=Ci(e),t=tt[tt.length-1];!t||!(e.flags&2)&&n>=Ci(t)?tt.push(e):tt.splice(T1(n),0,e),e.flags|=1,Su()}}function Su(){rl||(rl=xu.then(Tu))}function C1(e){if(!Me(e))gs&&e.id===-1?gs.splice(Hs+1,0,e):e.flags&1||(Ys.push(e),e.flags|=1);else for(let n=0;n<e.length;n++)Ys.push(e[n]);Su()}function Ir(e,n,t=zt+1){for(;t<tt.length;t++){const s=tt[t];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;tt.splice(t,1),t--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function $u(e){if(Ys.length){const n=[...new Set(Ys)].sort((t,s)=>Ci(t)-Ci(s));if(Ys.length=0,gs){for(let t=0;t<n.length;t++)gs.push(n[t]);return}for(gs=n,Hs=0;Hs<gs.length;Hs++){const t=gs[Hs];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}gs=null,Hs=0}}const Ci=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Tu(e){try{for(zt=0;zt<tt.length;zt++){const n=tt[zt];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),Oi(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;zt<tt.length;zt++){const n=tt[zt];n&&(n.flags&=-2)}zt=-1,tt.length=0,$u(),rl=null,(tt.length||Ys.length)&&Tu()}}let ht=null,Cu=null;function al(e){const n=ht;return ht=e,Cu=e&&e.type.__scopeId||null,n}function D1(e,n=ht,t){if(!n||e._n)return e;const s=(...i)=>{s._d&&dl(-1);const o=al(n),r=Os.length;let a;try{a=e(...i)}finally{for(let u=Os.length;u>r;u--)Qu();al(o),s._d&&dl(1)}return a};return s._n=!0,s._c=!0,s._d=!0,s}function en(e,n){if(ht===null)return e;const t=Ll(ht),s=e.dirs||(e.dirs=[]);for(let i=0;i<n.length;i++){let[o,r,a,u=dn]=n[i];o&&(Pe(o)&&(o={mounted:o,updated:o}),o.deep&&ts(r),s.push({dir:o,instance:t,value:r,oldValue:void 0,arg:a,modifiers:u}))}return e}function $s(e,n,t,s){const i=e.dirs,o=n&&n.dirs;for(let r=0;r<i.length;r++){const a=i[r];o&&(a.oldValue=o[r].value);let u=a.dir[s];u&&(ls(),Pt(u,t,8,[e.el,a,e,n]),os())}}function A1(e,n){if(Hn){let t=Hn.provides;const s=Hn.parent&&Hn.parent.provides;s===t&&(t=Hn.provides=Object.create(s)),t[e]=n}}function tl(e,n,t=!1){const s=E0();if(s||Qs){let i=Qs?Qs._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return t&&Pe(n)?n.call(s&&s.proxy):n}}const E1=Symbol.for("v-scx"),I1=()=>tl(E1);function hn(e,n,t){return Du(e,n,t)}function Du(e,n,t=dn){const{immediate:s,deep:i,flush:o,once:r}=t,a=Kn({},t),u=n&&s||!n&&o!=="post";let p;if(Ei){if(o==="sync"){const S=I1();p=S.__watcherHandles||(S.__watcherHandles=[])}else if(!u){const S=()=>{};return S.stop=Wt,S.resume=Wt,S.pause=Wt,S}}const c=Hn;a.call=(S,M,A)=>Pt(S,c,M,A);let h=!1;o==="post"?a.scheduler=S=>{nt(S,c&&c.suspense)}:o!=="sync"&&(h=!0,a.scheduler=(S,M)=>{M?S():er(S)}),a.augmentJob=S=>{n&&(S.flags|=4),h&&(S.flags|=2,c&&(S.id=c.uid,S.i=c))};const m=S1(e,n,a);return Ei&&(p?p.push(m):u&&m()),m}function M1(e,n,t){const s=this.proxy,i=wn(e)?e.includes(".")?Au(s,e):()=>s[e]:e.bind(s,s);let o;Pe(n)?o=n:(o=n.handler,t=n);const r=Ri(this),a=Du(i,o.bind(s),t);return r(),a}function Au(e,n){const t=n.split(".");return()=>{let s=e;for(let i=0;i<t.length&&s;i++)s=s[t[i]];return s}}const ms=new WeakMap,Eu=Symbol("_vte"),Ml=e=>e.__isTeleport,As=e=>e&&(e.disabled||e.disabled===""),O1=e=>e&&(e.defer||e.defer===""),Mr=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Or=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,yo=(e,n)=>{const t=e&&e.to;return wn(t)?n?n(t):null:t},R1={name:"Teleport",__isTeleport:!0,process(e,n,t,s,i,o,r,a,u,p){const{mc:c,pc:h,pbc:m,o:{insert:S,querySelector:M,createText:A,createComment:O,parentNode:ee}}=p,P=As(n.props);let{dynamicChildren:ne}=n;const ie=(E,z,G)=>{E.shapeFlag&16&&c(E.children,z,G,i,o,r,a,u)},Z=(E=n)=>{const z=As(E.props),G=E.target=yo(E.props,M),W=bo(G,E,A,S);G&&(r!=="svg"&&Mr(G)?r="svg":r!=="mathml"&&Or(G)&&(r="mathml"),i&&i.isCE&&(i.ce._teleportTargets||(i.ce._teleportTargets=new Set)).add(G),z||(ie(E,G,W),pi(E,!1)))},V=E=>{const z=()=>{if(ms.get(E)===z){if(ms.delete(E),As(E.props)){const G=ee(E.el)||t;ie(E,G,E.anchor),pi(E,!0)}Z(E)}};ms.set(E,z),nt(z,o)};if(e==null){const E=n.el=A(""),z=n.anchor=A("");if(S(E,t,s),S(z,t,s),O1(n.props)||o&&o.pendingBranch){V(n);return}P&&(ie(n,t,z),pi(n,!0)),Z()}else{n.el=e.el;const E=n.anchor=e.anchor,z=ms.get(e);if(z){z.flags|=8,ms.delete(e),V(n);return}n.targetStart=e.targetStart;const G=n.target=e.target,W=n.targetAnchor=e.targetAnchor,q=As(e.props),he=q?t:G,xe=q?E:W;if(r==="svg"||Mr(G)?r="svg":(r==="mathml"||Or(G))&&(r="mathml"),ne?(m(e.dynamicChildren,ne,he,i,o,r,a),lr(e,n,!0)):u||h(e,n,he,xe,i,o,r,a,!1),P)q?n.props&&e.props&&n.props.to!==e.props.to&&(n.props.to=e.props.to):Wi(n,t,E,p,1);else if((n.props&&n.props.to)!==(e.props&&e.props.to)){const nn=yo(n.props,M);nn&&(n.target=nn,Wi(n,nn,null,p,0))}else q&&Wi(n,G,W,p,1);pi(n,P)}},remove(e,n,t,{um:s,o:{remove:i}},o){const{shapeFlag:r,children:a,anchor:u,targetStart:p,targetAnchor:c,target:h,props:m}=e,S=As(m),M=o||!S,A=ms.get(e);if(A&&(A.flags|=8,ms.delete(e)),h&&(i(p),i(c)),o&&i(u),!A&&(S||h)&&r&16)for(let O=0;O<a.length;O++){const ee=a[O];s(ee,n,t,M,!!ee.dynamicChildren)}},move:Wi,hydrate:P1};function Wi(e,n,t,{o:{insert:s},m:i},o=2){o===0&&s(e.targetAnchor,n,t);const{el:r,anchor:a,shapeFlag:u,children:p,props:c}=e,h=o===2;if(h&&s(r,n,t),!ms.has(e)&&(!h||As(c))&&u&16)for(let m=0;m<p.length;m++)i(p[m],n,t,2);h&&s(a,n,t)}function P1(e,n,t,s,i,o,{o:{nextSibling:r,parentNode:a,querySelector:u,insert:p,createText:c}},h){function m(O,ee){let P=ee;for(;P;){if(P&&P.nodeType===8){if(P.data==="teleport start anchor")n.targetStart=P;else if(P.data==="teleport anchor"){n.targetAnchor=P,O._lpa=n.targetAnchor&&r(n.targetAnchor);break}}P=r(P)}}function S(O,ee){ee.anchor=h(r(O),ee,a(O),t,s,i,o)}const M=n.target=yo(n.props,u),A=As(n.props);if(M){const O=M._lpa||M.firstChild;n.shapeFlag&16&&(A?(S(e,n),m(M,O),n.targetAnchor||bo(M,n,c,p,a(e)===M?e:null)):(n.anchor=r(e),m(M,O),n.targetAnchor||bo(M,n,c,p),h(O&&r(O),n,M,t,s,i,o))),pi(n,A)}else A&&n.shapeFlag&16&&(S(e,n),n.targetStart=e,n.targetAnchor=r(e));return n.anchor&&r(n.anchor)}const L1=R1;function pi(e,n){const t=e.ctx;if(t&&t.ut){let s,i;for(n?(s=e.el,i=e.anchor):(s=e.targetStart,i=e.targetAnchor);s&&s!==i;)s.nodeType===1&&s.setAttribute("data-v-owner",t.uid),s=s.nextSibling;t.ut()}}function bo(e,n,t,s,i=null){const o=n.targetStart=t(""),r=n.targetAnchor=t("");return o[Eu]=r,e&&(s(o,e,i),s(r,e,i)),r}const Hl=Symbol("_leaveCb");function N1(e){let n=e[0];if(e.length>1){for(const t of e)if(t.type!==as){n=t;break}}return n}function Iu(e){if(!tr(e))return Ml(e.type)&&e.children?N1(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:n,children:t}=e;if(t){if(n&16)return t[0];if(n&32&&Pe(t.default))return t.default()}}function nr(e,n){if(e.shapeFlag&6&&e.component){e.transition=n;const t=e.component.subTree;nr(Ml(t.type)&&Iu(t)||t,n)}else e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function Mu(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Rr(e,n){let t;return!!((t=Object.getOwnPropertyDescriptor(e,n))&&!t.configurable)}const ul=new WeakMap;function bi(e,n,t,s,i=!1){if(Me(e)){e.forEach((A,O)=>bi(A,n&&(Me(n)?n[O]:n),t,s,i));return}if(wi(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&bi(e,n,t,s.component.subTree);return}const o=s.shapeFlag&4?Ll(s.component):s.el,r=i?null:o,{i:a,r:u}=e,p=n&&n.r,c=a.refs===dn?a.refs={}:a.refs,h=a.setupState,m=sn(h),S=h===dn?eu:A=>Rr(c,A)?!1:ln(m,A),M=(A,O)=>!(O&&Rr(c,O));if(p!=null&&p!==u){if(Pr(n),wn(p))c[p]=null,S(p)&&(h[p]=null);else if(qn(p)){const A=n;M(p,A.k)&&(p.value=null),A.k&&(c[A.k]=null)}}if(Pe(u))Oi(u,a,12,[r,c]);else{const A=wn(u),O=qn(u);if(A||O){const ee=()=>{if(e.f){const P=A?S(u)?h[u]:c[u]:M()||!e.k?u.value:c[e.k];if(i)Me(P)&&Xo(P,o);else if(Me(P))P.includes(o)||P.push(o);else if(A)c[u]=[o],S(u)&&(h[u]=c[u]);else{const ne=[o];M(u,e.k)&&(u.value=ne),e.k&&(c[e.k]=ne)}}else A?(c[u]=r,S(u)&&(h[u]=r)):O&&(M(u,e.k)&&(u.value=r),e.k&&(c[e.k]=r))};if(r){const P=()=>{ee(),ul.delete(e)};P.id=-1,ul.set(e,P),nt(P,t)}else Pr(e),ee()}}}function Pr(e){const n=ul.get(e);n&&(n.flags|=8,ul.delete(e))}Al().requestIdleCallback;Al().cancelIdleCallback;const wi=e=>!!e.type.__asyncLoader,tr=e=>e.type.__isKeepAlive;function F1(e,n){Ou(e,"a",n)}function z1(e,n){Ou(e,"da",n)}function Ou(e,n,t=Hn){const s=e.__wdc||(e.__wdc=()=>{let i=t;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(Ol(n,s,t),t){let i=t.parent;for(;i&&i.parent;)tr(i.parent.vnode)&&U1(s,n,t,i),i=i.parent}}function U1(e,n,t,s){const i=Ol(n,e,s,!0);Kt(()=>{Xo(s[n],i)},t)}function Ol(e,n,t=Hn,s=!1){if(t){const i=t[e]||(t[e]=[]),o=n.__weh||(n.__weh=(...r)=>{ls();const a=Ri(t),u=Pt(n,t,e,r);return a(),os(),u});return s?i.unshift(o):i.push(o),o}}const us=e=>(n,t=Hn)=>{(!Ei||e==="sp")&&Ol(e,(...s)=>n(...s),t)},j1=us("bm"),ti=us("m"),B1=us("bu"),V1=us("u"),X1=us("bum"),Kt=us("um"),W1=us("sp"),H1=us("rtg"),q1=us("rtc");function K1(e,n=Hn){Ol("ec",e,n)}const G1="components",Ru=Symbol.for("v-ndc");function Y1(e){return wn(e)?Q1(G1,e,!1)||e:e||Ru}function Q1(e,n,t=!0,s=!1){const i=ht||Hn;if(i){const o=i.type;{const a=P0(o,!1);if(a&&(a===n||a===st(n)||a===Cl(st(n))))return o}const r=Lr(i[e]||o[e],n)||Lr(i.appContext[e],n);return!r&&s?o:r}}function Lr(e,n){return e&&(e[n]||e[st(n)]||e[Cl(st(n))])}function oe(e,n,t,s){let i;const o=t,r=Me(e);if(r||wn(e)){const a=r&&Ms(e);let u=!1,p=!1;a&&(u=!St(e),p=rs(e),e=El(e)),i=new Array(e.length);for(let c=0,h=e.length;c<h;c++)i[c]=n(u?p?Zs(Rt(e[c])):Rt(e[c]):e[c],c,void 0,o)}else if(typeof e=="number"){i=new Array(e);for(let a=0;a<e;a++)i[a]=n(a+1,a,void 0,o)}else if(rn(e))if(e[Symbol.iterator])i=Array.from(e,(a,u)=>n(a,u,void 0,o));else{const a=Object.keys(e);i=new Array(a.length);for(let u=0,p=a.length;u<p;u++){const c=a[u];i[u]=n(e[c],c,u,o)}}else i=[];return i}const wo=e=>e?ec(e)?Ll(e):wo(e.parent):null,ki=Kn(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>wo(e.parent),$root:e=>wo(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Lu(e),$forceUpdate:e=>e.f||(e.f=()=>{er(e.update)}),$nextTick:e=>e.n||(e.n=Ut.bind(e.proxy)),$watch:e=>M1.bind(e)}),ql=(e,n)=>e!==dn&&!e.__isScriptSetup&&ln(e,n),J1={get({_:e},n){if(n==="__v_skip")return!0;const{ctx:t,setupState:s,data:i,props:o,accessCache:r,type:a,appContext:u}=e;if(n[0]!=="$"){const m=r[n];if(m!==void 0)switch(m){case 1:return s[n];case 2:return i[n];case 4:return t[n];case 3:return o[n]}else{if(ql(s,n))return r[n]=1,s[n];if(i!==dn&&ln(i,n))return r[n]=2,i[n];if(ln(o,n))return r[n]=3,o[n];if(t!==dn&&ln(t,n))return r[n]=4,t[n];ko&&(r[n]=0)}}const p=ki[n];let c,h;if(p)return n==="$attrs"&&Wn(e.attrs,"get",""),p(e);if((c=a.__cssModules)&&(c=c[n]))return c;if(t!==dn&&ln(t,n))return r[n]=4,t[n];if(h=u.config.globalProperties,ln(h,n))return h[n]},set({_:e},n,t){const{data:s,setupState:i,ctx:o}=e;return ql(i,n)?(i[n]=t,!0):s!==dn&&ln(s,n)?(s[n]=t,!0):ln(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(o[n]=t,!0)},has({_:{data:e,setupState:n,accessCache:t,ctx:s,appContext:i,props:o,type:r}},a){let u;return!!(t[a]||e!==dn&&a[0]!=="$"&&ln(e,a)||ql(n,a)||ln(o,a)||ln(s,a)||ln(ki,a)||ln(i.config.globalProperties,a)||(u=r.__cssModules)&&u[a])},defineProperty(e,n,t){return t.get!=null?e._.accessCache[n]=0:ln(t,"value")&&this.set(e,n,t.value,null),Reflect.defineProperty(e,n,t)}};function Nr(e){return Me(e)?e.reduce((n,t)=>(n[t]=null,n),{}):e}let ko=!0;function Z1(e){const n=Lu(e),t=e.proxy,s=e.ctx;ko=!1,n.beforeCreate&&Fr(n.beforeCreate,e,"bc");const{data:i,computed:o,methods:r,watch:a,provide:u,inject:p,created:c,beforeMount:h,mounted:m,beforeUpdate:S,updated:M,activated:A,deactivated:O,beforeDestroy:ee,beforeUnmount:P,destroyed:ne,unmounted:ie,render:Z,renderTracked:V,renderTriggered:E,errorCaptured:z,serverPrefetch:G,expose:W,inheritAttrs:q,components:he,directives:xe,filters:nn}=n;if(p&&e0(p,s,null),r)for(const Ee in r){const Ie=r[Ee];Pe(Ie)&&(s[Ee]=Ie.bind(t))}if(i){const Ee=i.call(t,t);rn(Ee)&&(e.data=Ps(Ee))}if(ko=!0,o)for(const Ee in o){const Ie=o[Ee],We=Pe(Ie)?Ie.bind(t,t):Pe(Ie.get)?Ie.get.bind(t,t):Wt,An=!Pe(Ie)&&Pe(Ie.set)?Ie.set.bind(t):Wt,_n=ue({get:We,set:An});Object.defineProperty(s,Ee,{enumerable:!0,configurable:!0,get:()=>_n.value,set:He=>_n.value=He})}if(a)for(const Ee in a)Pu(a[Ee],s,t,Ee);if(u){const Ee=Pe(u)?u.call(t):u;Reflect.ownKeys(Ee).forEach(Ie=>{A1(Ie,Ee[Ie])})}c&&Fr(c,e,"c");function ke(Ee,Ie){Me(Ie)?Ie.forEach(We=>Ee(We.bind(t))):Ie&&Ee(Ie.bind(t))}if(ke(j1,h),ke(ti,m),ke(B1,S),ke(V1,M),ke(F1,A),ke(z1,O),ke(K1,z),ke(q1,V),ke(H1,E),ke(X1,P),ke(Kt,ie),ke(W1,G),Me(W))if(W.length){const Ee=e.exposed||(e.exposed={});W.forEach(Ie=>{Object.defineProperty(Ee,Ie,{get:()=>t[Ie],set:We=>t[Ie]=We,enumerable:!0})})}else e.exposed||(e.exposed={});Z&&e.render===Wt&&(e.render=Z),q!=null&&(e.inheritAttrs=q),he&&(e.components=he),xe&&(e.directives=xe),G&&Mu(e)}function e0(e,n,t=Wt){Me(e)&&(e=xo(e));for(const s in e){const i=e[s];let o;rn(i)?"default"in i?o=tl(i.from||s,i.default,!0):o=tl(i.from||s):o=tl(i),qn(o)?Object.defineProperty(n,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:r=>o.value=r}):n[s]=o}}function Fr(e,n,t){Pt(Me(e)?e.map(s=>s.bind(n.proxy)):e.bind(n.proxy),n,t)}function Pu(e,n,t,s){let i=s.includes(".")?Au(t,s):()=>t[s];if(wn(e)){const o=n[e];Pe(o)&&hn(i,o)}else if(Pe(e))hn(i,e.bind(t));else if(rn(e))if(Me(e))e.forEach(o=>Pu(o,n,t,s));else{const o=Pe(e.handler)?e.handler.bind(t):n[e.handler];Pe(o)&&hn(i,o,e)}}function Lu(e){const n=e.type,{mixins:t,extends:s}=n,{mixins:i,optionsCache:o,config:{optionMergeStrategies:r}}=e.appContext,a=o.get(n);let u;return a?u=a:!i.length&&!t&&!s?u=n:(u={},i.length&&i.forEach(p=>cl(u,p,r,!0)),cl(u,n,r)),rn(n)&&o.set(n,u),u}function cl(e,n,t,s=!1){const{mixins:i,extends:o}=n;o&&cl(e,o,t,!0),i&&i.forEach(r=>cl(e,r,t,!0));for(const r in n)if(!(s&&r==="expose")){const a=n0[r]||t&&t[r];e[r]=a?a(e[r],n[r]):n[r]}return e}const n0={data:zr,props:Ur,emits:Ur,methods:vi,computed:vi,beforeCreate:et,created:et,beforeMount:et,mounted:et,beforeUpdate:et,updated:et,beforeDestroy:et,beforeUnmount:et,destroyed:et,unmounted:et,activated:et,deactivated:et,errorCaptured:et,serverPrefetch:et,components:vi,directives:vi,watch:s0,provide:zr,inject:t0};function zr(e,n){return n?e?function(){return Kn(Pe(e)?e.call(this,this):e,Pe(n)?n.call(this,this):n)}:n:e}function t0(e,n){return vi(xo(e),xo(n))}function xo(e){if(Me(e)){const n={};for(let t=0;t<e.length;t++)n[e[t]]=e[t];return n}return e}function et(e,n){return e?[...new Set([].concat(e,n))]:n}function vi(e,n){return e?Kn(Object.create(null),e,n):n}function Ur(e,n){return e?Me(e)&&Me(n)?[...new Set([...e,...n])]:Kn(Object.create(null),Nr(e),Nr(n??{})):n}function s0(e,n){if(!e)return n;if(!n)return e;const t=Kn(Object.create(null),e);for(const s in n)t[s]=et(e[s],n[s]);return t}function Nu(){return{app:null,config:{isNativeTag:eu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let i0=0;function l0(e,n){return function(s,i=null){Pe(s)||(s=Kn({},s)),i!=null&&!rn(i)&&(i=null);const o=Nu(),r=new WeakSet,a=[];let u=!1;const p=o.app={_uid:i0++,_component:s,_props:i,_container:null,_context:o,_instance:null,version:N0,get config(){return o.config},set config(c){},use(c,...h){return r.has(c)||(c&&Pe(c.install)?(r.add(c),c.install(p,...h)):Pe(c)&&(r.add(c),c(p,...h))),p},mixin(c){return o.mixins.includes(c)||o.mixins.push(c),p},component(c,h){return h?(o.components[c]=h,p):o.components[c]},directive(c,h){return h?(o.directives[c]=h,p):o.directives[c]},mount(c,h,m){if(!u){const S=p._ceVNode||on(s,i);return S.appContext=o,m===!0?m="svg":m===!1&&(m=void 0),e(S,c,m),u=!0,p._container=c,c.__vue_app__=p,Ll(S.component)}},onUnmount(c){a.push(c)},unmount(){u&&(Pt(a,p._instance,16),e(null,p._container),delete p._container.__vue_app__)},provide(c,h){return o.provides[c]=h,p},runWithContext(c){const h=Qs;Qs=p;try{return c()}finally{Qs=h}}};return p}}let Qs=null;const o0=(e,n)=>n==="modelValue"||n==="model-value"?e.modelModifiers:e[`${n}Modifiers`]||e[`${st(n)}Modifiers`]||e[`${ws(n)}Modifiers`];function r0(e,n,...t){if(e.isUnmounted)return;const s=e.vnode.props||dn;let i=t;const o=n.startsWith("update:"),r=o&&o0(s,n.slice(7));r&&(r.trim&&(i=t.map(c=>wn(c)?c.trim():c)),r.number&&(i=i.map(Dl)));let a,u=s[a=jl(n)]||s[a=jl(st(n))];!u&&o&&(u=s[a=jl(ws(n))]),u&&Pt(u,e,6,i);const p=s[a+"Once"];if(p){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Pt(p,e,6,i)}}const a0=new WeakMap;function Fu(e,n,t=!1){const s=t?a0:n.emitsCache,i=s.get(e);if(i!==void 0)return i;const o=e.emits;let r={},a=!1;if(!Pe(e)){const u=p=>{const c=Fu(p,n,!0);c&&(a=!0,Kn(r,c))};!t&&n.mixins.length&&n.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}return!o&&!a?(rn(e)&&s.set(e,null),null):(Me(o)?o.forEach(u=>r[u]=null):Kn(r,o),rn(e)&&s.set(e,r),r)}function Rl(e,n){return!e||!Sl(n)?!1:(n=n.slice(2),n=n==="Once"?n:n.replace(/Once$/,""),ln(e,n[0].toLowerCase()+n.slice(1))||ln(e,ws(n))||ln(e,n))}function jr(e){const{type:n,vnode:t,proxy:s,withProxy:i,propsOptions:[o],slots:r,attrs:a,emit:u,render:p,renderCache:c,props:h,data:m,setupState:S,ctx:M,inheritAttrs:A}=e,O=al(e);let ee,P;try{if(t.shapeFlag&4){const ie=i||s,Z=ie;ee=Bt(p.call(Z,ie,c,h,S,m,M)),P=a}else{const ie=n;ee=Bt(ie.length>1?ie(h,{attrs:a,slots:r,emit:u}):ie(h,null)),P=n.props?a:u0(a)}}catch(ie){Os.length=0,Il(ie,e,1),ee=on(as)}let ne=ee;if(P&&A!==!1){const ie=Object.keys(P),{shapeFlag:Z}=ne;ie.length&&Z&7&&(o&&ie.some($l)&&(P=c0(P,o)),ne=ei(ne,P,!1,!0))}if(t.dirs&&(ne=ei(ne,null,!1,!0),ne.dirs=ne.dirs?ne.dirs.concat(t.dirs):t.dirs),t.transition){const ie=Ml(ne.type)&&Iu(ne)||ne;nr(ie,t.transition)}return ee=ne,al(O),ee}const u0=e=>{let n;for(const t in e)(t==="class"||t==="style"||Sl(t))&&((n||(n={}))[t]=e[t]);return n},c0=(e,n)=>{const t={};for(const s in e)(!$l(s)||!(s.slice(9)in n))&&(t[s]=e[s]);return t};function d0(e,n,t){const{props:s,children:i,component:o}=e,{props:r,children:a,patchFlag:u}=n,p=o.emitsOptions;if(n.dirs||n.transition)return!0;if(t&&u>=0){if(u&1024)return!0;if(u&16)return s?Br(s,r,p):!!r;if(u&8){const c=n.dynamicProps;for(let h=0;h<c.length;h++){const m=c[h];if(zu(r,s,m)&&!Rl(p,m))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===r?!1:s?r?Br(s,r,p):!0:!!r;return!1}function Br(e,n,t){const s=Object.keys(n);if(s.length!==Object.keys(e).length)return!0;for(let i=0;i<s.length;i++){const o=s[i];if(zu(n,e,o)&&!Rl(t,o))return!0}return!1}function zu(e,n,t){const s=e[t],i=n[t];return t==="style"&&rn(s)&&rn(i)?!Ot(s,i):s!==i}function p0({vnode:e,parent:n,suspense:t},s){for(;n;){const i=n.subTree;if(i.suspense&&i.suspense.activeBranch===e&&(i.suspense.vnode.el=i.el=s,e=i),i===e)(e=n.vnode).el=s,n=n.parent;else break}t&&t.activeBranch===e&&(t.vnode.el=s)}const Uu={},ju=()=>Object.create(Uu),Bu=e=>Object.getPrototypeOf(e)===Uu;function v0(e,n,t,s=!1){const i={},o=ju();e.propsDefaults=Object.create(null),Vu(e,n,i,o);for(const r in e.propsOptions[0])r in i||(i[r]=void 0);t?e.props=s?i:m1(i):e.type.props?e.props=i:e.props=o,e.attrs=o}function f0(e,n,t,s){const{props:i,attrs:o,vnode:{patchFlag:r}}=e,a=sn(i),[u]=e.propsOptions;let p=!1;if((s||r>0)&&!(r&16)){if(r&8){const c=e.vnode.dynamicProps;for(let h=0;h<c.length;h++){let m=c[h];if(Rl(e.emitsOptions,m))continue;const S=n[m];if(u)if(ln(o,m))S!==o[m]&&(o[m]=S,p=!0);else{const M=st(m);i[M]=So(u,a,M,S,e,!1)}else S!==o[m]&&(o[m]=S,p=!0)}}}else{Vu(e,n,i,o)&&(p=!0);let c;for(const h in a)(!n||!ln(n,h)&&((c=ws(h))===h||!ln(n,c)))&&(u?t&&(t[h]!==void 0||t[c]!==void 0)&&(i[h]=So(u,a,h,void 0,e,!0)):delete i[h]);if(o!==a)for(const h in o)(!n||!ln(n,h))&&(delete o[h],p=!0)}p&&ns(e.attrs,"set","")}function Vu(e,n,t,s){const[i,o]=e.propsOptions;let r=!1,a;if(n)for(let u in n){if(gi(u))continue;const p=n[u];let c;i&&ln(i,c=st(u))?!o||!o.includes(c)?t[c]=p:(a||(a={}))[c]=p:Rl(e.emitsOptions,u)||(!(u in s)||p!==s[u])&&(s[u]=p,r=!0)}if(o){const u=sn(t),p=a||dn;for(let c=0;c<o.length;c++){const h=o[c];t[h]=So(i,u,h,p[h],e,!ln(p,h))}}return r}function So(e,n,t,s,i,o){const r=e[t];if(r!=null){const a=ln(r,"default");if(a&&s===void 0){const u=r.default;if(r.type!==Function&&!r.skipFactory&&Pe(u)){const{propsDefaults:p}=i;if(t in p)s=p[t];else{const c=Ri(i);s=p[t]=u.call(null,n),c()}}else s=u;i.ce&&i.ce._setProp(t,s)}r[0]&&(o&&!a?s=!1:r[1]&&(s===""||s===ws(t))&&(s=!0))}return s}const h0=new WeakMap;function Xu(e,n,t=!1){const s=t?h0:n.propsCache,i=s.get(e);if(i)return i;const o=e.props,r={},a=[];let u=!1;if(!Pe(e)){const c=h=>{u=!0;const[m,S]=Xu(h,n,!0);Kn(r,m),S&&a.push(...S)};!t&&n.mixins.length&&n.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!o&&!u)return rn(e)&&s.set(e,Gs),Gs;if(Me(o))for(let c=0;c<o.length;c++){const h=st(o[c]);Vr(h)&&(r[h]=dn)}else if(o)for(const c in o){const h=st(c);if(Vr(h)){const m=o[c],S=r[h]=Me(m)||Pe(m)?{type:m}:Kn({},m),M=S.type;let A=!1,O=!0;if(Me(M))for(let ee=0;ee<M.length;++ee){const P=M[ee],ne=Pe(P)&&P.name;if(ne==="Boolean"){A=!0;break}else ne==="String"&&(O=!1)}else A=Pe(M)&&M.name==="Boolean";S[0]=A,S[1]=O,(A||ln(S,"default"))&&a.push(h)}}const p=[r,a];return rn(e)&&s.set(e,p),p}function Vr(e){return e[0]!=="$"&&!gi(e)}const sr=e=>e==="_"||e==="_ctx"||e==="$stable",ir=e=>Me(e)?e.map(Bt):[Bt(e)],m0=(e,n,t)=>{if(n._n)return n;const s=D1((...i)=>ir(n(...i)),t);return s._c=!1,s},Wu=(e,n,t)=>{const s=e._ctx;for(const i in e){if(sr(i))continue;const o=e[i];if(Pe(o))n[i]=m0(i,o,s);else if(o!=null){const r=ir(o);n[i]=()=>r}}},Hu=(e,n)=>{const t=ir(n);e.slots.default=()=>t},qu=(e,n,t)=>{for(const s in n)(t||!sr(s))&&(e[s]=n[s])},g0=(e,n,t)=>{const s=e.slots=ju();if(e.vnode.shapeFlag&32){const i=n._;i?(qu(s,n,t),t&&iu(s,"_",i,!0)):Wu(n,s)}else n&&Hu(e,n)},_0=(e,n,t)=>{const{vnode:s,slots:i}=e;let o=!0,r=dn;if(s.shapeFlag&32){const a=n._;a?t&&a===1?o=!1:qu(i,n,t):(o=!n.$stable,Wu(n,i)),r=n}else n&&(Hu(e,n),r={default:1});if(o)for(const a in i)!sr(a)&&r[a]==null&&delete i[a]},nt=x0;function y0(e){return b0(e)}function b0(e,n){const t=Al();t.__VUE__=!0;const{insert:s,remove:i,patchProp:o,createElement:r,createText:a,createComment:u,setText:p,setElementText:c,parentNode:h,nextSibling:m,setScopeId:S=Wt,insertStaticContent:M}=e,A=(b,D,L,$=null,w=null,j=null,C=void 0,X=null,F=!!D.dynamicChildren)=>{if(b===D)return;b&&!li(b,D)&&($=kn(b),He(b,w,j,!0),b=null),D.patchFlag===-2&&(F=!1,D.dynamicChildren=null);const{type:B,ref:ae,shapeFlag:le}=D;switch(B){case Pl:O(b,D,L,$);break;case as:ee(b,D,L,$);break;case sl:b==null&&P(D,L,$,C);break;case Q:he(b,D,L,$,w,j,C,X,F);break;default:le&1?Z(b,D,L,$,w,j,C,X,F):le&6?xe(b,D,L,$,w,j,C,X,F):(le&64||le&128)&&B.process(b,D,L,$,w,j,C,X,F,Y)}ae!=null&&w?bi(ae,b&&b.ref,j,D||b,!D):ae==null&&b&&b.ref!=null&&bi(b.ref,null,j,b,!0)},O=(b,D,L,$)=>{if(b==null)s(D.el=a(D.children),L,$);else{const w=D.el=b.el;D.children!==b.children&&p(w,D.children)}},ee=(b,D,L,$)=>{b==null?s(D.el=u(D.children||""),L,$):D.el=b.el},P=(b,D,L,$)=>{[b.el,b.anchor]=M(b.children,D,L,$,b.el,b.anchor)},ne=({el:b,anchor:D},L,$)=>{let w;for(;b&&b!==D;)w=m(b),s(b,L,$),b=w;s(D,L,$)},ie=({el:b,anchor:D})=>{let L;for(;b&&b!==D;)L=m(b),i(b),b=L;i(D)},Z=(b,D,L,$,w,j,C,X,F)=>{if(D.type==="svg"?C="svg":D.type==="math"&&(C="mathml"),b==null)V(D,L,$,w,j,C,X,F);else{const B=b.el&&b.el._isVueCE?b.el:null;try{B&&B._beginPatch(),G(b,D,w,j,C,X,F)}finally{B&&B._endPatch()}}},V=(b,D,L,$,w,j,C,X)=>{let F,B;const{props:ae,shapeFlag:le,transition:me,dirs:_e}=b;if(F=b.el=r(b.type,j,ae&&ae.is,ae),le&8?c(F,b.children):le&16&&z(b.children,F,null,$,w,Kl(b,j),C,X),_e&&$s(b,null,$,"created"),E(F,b,b.scopeId,C,$),ae){for(const ye in ae)ye!=="value"&&!gi(ye)&&o(F,ye,null,ae[ye],j,$);"value"in ae&&o(F,"value",null,ae.value,j),(B=ae.onVnodeBeforeMount)&&Ft(B,$,b)}_e&&$s(b,null,$,"beforeMount");const Te=w0(w,me);Te&&me.beforeEnter(F),s(F,D,L),((B=ae&&ae.onVnodeMounted)||Te||_e)&&nt(()=>{try{B&&Ft(B,$,b),Te&&me.enter(F),_e&&$s(b,null,$,"mounted")}finally{}},w)},E=(b,D,L,$,w)=>{if(L&&S(b,L),$)for(let j=0;j<$.length;j++)S(b,$[j]);if(w){let j=w.subTree;if(D===j||Yu(j.type)&&(j.ssContent===D||j.ssFallback===D)){const C=w.vnode;E(b,C,C.scopeId,C.slotScopeIds,w.parent)}}},z=(b,D,L,$,w,j,C,X,F=0)=>{for(let B=F;B<b.length;B++){const ae=b[B]=X?es(b[B]):Bt(b[B]);A(null,ae,D,L,$,w,j,C,X)}},G=(b,D,L,$,w,j,C)=>{const X=D.el=b.el;let{patchFlag:F,dynamicChildren:B,dirs:ae}=D;F|=b.patchFlag&16;const le=b.props||dn,me=D.props||dn;let _e;if(L&&Ts(L,!1),(_e=me.onVnodeBeforeUpdate)&&Ft(_e,L,D,b),ae&&$s(D,b,L,"beforeUpdate"),L&&Ts(L,!0),B&&(!b.dynamicChildren||b.dynamicChildren.length!==B.length)&&(F=0,C=!1,B=null),(le.innerHTML&&me.innerHTML==null||le.textContent&&me.textContent==null)&&c(X,""),B?W(b.dynamicChildren,B,X,L,$,Kl(D,w),j):C||Ie(b,D,X,null,L,$,Kl(D,w),j,!1),F>0){if(F&16)q(X,le,me,L,w);else if(F&2&&le.class!==me.class&&o(X,"class",null,me.class,w),F&4&&o(X,"style",le.style,me.style,w),F&8){const Te=D.dynamicProps;for(let ye=0;ye<Te.length;ye++){const Ne=Te[ye],Ce=le[Ne],je=me[Ne];(je!==Ce||Ne==="value")&&o(X,Ne,Ce,je,w,L)}}F&1&&b.children!==D.children&&c(X,D.children)}else!C&&B==null&&q(X,le,me,L,w);((_e=me.onVnodeUpdated)||ae)&&nt(()=>{_e&&Ft(_e,L,D,b),ae&&$s(D,b,L,"updated")},$)},W=(b,D,L,$,w,j,C)=>{for(let X=0;X<D.length;X++){const F=b[X],B=D[X],ae=F.el&&(F.type===Q||!li(F,B)||F.shapeFlag&198)?h(F.el):L;A(F,B,ae,null,$,w,j,C,!0)}},q=(b,D,L,$,w)=>{if(D!==L){if(D!==dn)for(const j in D)!gi(j)&&!(j in L)&&o(b,j,D[j],null,w,$);for(const j in L){if(gi(j))continue;const C=L[j],X=D[j];C!==X&&j!=="value"&&o(b,j,X,C,w,$)}"value"in L&&o(b,"value",D.value,L.value,w)}},he=(b,D,L,$,w,j,C,X,F)=>{const B=D.el=b?b.el:a(""),ae=D.anchor=b?b.anchor:a("");let{patchFlag:le,dynamicChildren:me,slotScopeIds:_e}=D;_e&&(X=X?X.concat(_e):_e),b==null?(s(B,L,$),s(ae,L,$),z(D.children||[],L,ae,w,j,C,X,F)):le>0&&le&64&&me&&b.dynamicChildren&&b.dynamicChildren.length===me.length?(W(b.dynamicChildren,me,L,w,j,C,X),(D.key!=null||w&&D===w.subTree)&&lr(b,D,!0)):Ie(b,D,L,ae,w,j,C,X,F)},xe=(b,D,L,$,w,j,C,X,F)=>{D.slotScopeIds=X,b==null?D.shapeFlag&512?w.ctx.activate(D,L,$,C,F):nn(D,L,$,w,j,C,F):Je(b,D,F)},nn=(b,D,L,$,w,j,C)=>{const X=b.component=A0(b,$,w);if(tr(b)&&(X.ctx.renderer=Y),I0(X,!1,C),X.asyncDep){if(w&&w.registerDep(X,ke,C),!b.el){const F=X.subTree=on(as);ee(null,F,D,L),b.placeholder=F.el}}else ke(X,b,D,L,w,j,C)},Je=(b,D,L)=>{const $=D.component=b.component;if(d0(b,D,L))if($.asyncDep&&!$.asyncResolved){Ee($,D,L);return}else $.next=D,$.update();else D.el=b.el,$.vnode=D},ke=(b,D,L,$,w,j,C)=>{const X=()=>{if(b.isMounted){let{next:le,bu:me,u:_e,parent:Te,vnode:ye}=b;{const xn=Ku(b);if(xn){le&&(le.el=ye.el,Ee(b,le,C)),xn.asyncDep.then(()=>{nt(()=>{b.isUnmounted||B()},w)});return}}let Ne=le,Ce;Ts(b,!1),le?(le.el=ye.el,Ee(b,le,C)):le=ye,me&&nl(me),(Ce=le.props&&le.props.onVnodeBeforeUpdate)&&Ft(Ce,Te,le,ye),Ts(b,!0);const je=jr(b),pn=b.subTree;b.subTree=je,A(pn,je,h(pn.el),kn(pn),b,w,j),le.el=je.el,Ne===null&&p0(b,je.el),_e&&nt(_e,w),(Ce=le.props&&le.props.onVnodeUpdated)&&nt(()=>Ft(Ce,Te,le,ye),w)}else{let le;const{el:me,props:_e}=D,{bm:Te,m:ye,parent:Ne,root:Ce,type:je}=b,pn=wi(D);Ts(b,!1),Te&&nl(Te),!pn&&(le=_e&&_e.onVnodeBeforeMount)&&Ft(le,Ne,D),Ts(b,!0);{Ce.ce&&Ce.ce._hasShadowRoot()&&Ce.ce._injectChildStyle(je,b.parent?b.parent.type:void 0);const xn=b.subTree=jr(b);A(null,xn,L,$,b,w,j),D.el=xn.el}if(ye&&nt(ye,w),!pn&&(le=_e&&_e.onVnodeMounted)){const xn=D;nt(()=>Ft(le,Ne,xn),w)}(D.shapeFlag&256||Ne&&wi(Ne.vnode)&&Ne.vnode.shapeFlag&256)&&b.a&&nt(b.a,w),b.isMounted=!0,D=L=$=null}};b.scope.on();const F=b.effect=new au(X);b.scope.off();const B=b.update=F.run.bind(F),ae=b.job=F.runIfDirty.bind(F);ae.i=b,ae.id=b.uid,F.scheduler=()=>er(ae),Ts(b,!0),B()},Ee=(b,D,L)=>{D.component=b;const $=b.vnode.props;b.vnode=D,b.next=null,f0(b,D.props,$,L),_0(b,D.children,L),ls(),Ir(b),os()},Ie=(b,D,L,$,w,j,C,X,F=!1)=>{const B=b&&b.children,ae=b?b.shapeFlag:0,le=D.children,{patchFlag:me,shapeFlag:_e}=D;if(me>0){if(me&128){An(B,le,L,$,w,j,C,X,F);return}else if(me&256){We(B,le,L,$,w,j,C,X,F);return}}_e&8?(ae&16&&qe(B,w,j),le!==B&&c(L,le)):ae&16?_e&16?An(B,le,L,$,w,j,C,X,F):qe(B,w,j,!0):(ae&8&&c(L,""),_e&16&&z(le,L,$,w,j,C,X,F))},We=(b,D,L,$,w,j,C,X,F)=>{b=b||Gs,D=D||Gs;const B=b.length,ae=D.length,le=Math.min(B,ae);let me;for(me=0;me<le;me++){const _e=D[me]=F?es(D[me]):Bt(D[me]);A(b[me],_e,L,null,w,j,C,X,F)}B>ae?qe(b,w,j,!0,!1,le):z(D,L,$,w,j,C,X,F,le)},An=(b,D,L,$,w,j,C,X,F)=>{let B=0;const ae=D.length;let le=b.length-1,me=ae-1;for(;B<=le&&B<=me;){const _e=b[B],Te=D[B]=F?es(D[B]):Bt(D[B]);if(li(_e,Te))A(_e,Te,L,null,w,j,C,X,F);else break;B++}for(;B<=le&&B<=me;){const _e=b[le],Te=D[me]=F?es(D[me]):Bt(D[me]);if(li(_e,Te))A(_e,Te,L,null,w,j,C,X,F);else break;le--,me--}if(B>le){if(B<=me){const _e=me+1,Te=_e<ae?D[_e].el:$;for(;B<=me;)A(null,D[B]=F?es(D[B]):Bt(D[B]),L,Te,w,j,C,X,F),B++}}else if(B>me)for(;B<=le;)He(b[B],w,j,!0),B++;else{const _e=B,Te=B,ye=new Map;for(B=Te;B<=me;B++){const Sn=D[B]=F?es(D[B]):Bt(D[B]);Sn.key!=null&&ye.set(Sn.key,B)}let Ne,Ce=0;const je=me-Te+1;let pn=!1,xn=0;const zn=new Array(je);for(B=0;B<je;B++)zn[B]=0;for(B=_e;B<=le;B++){const Sn=b[B];if(Ce>=je){He(Sn,w,j,!0);continue}let tn;if(Sn.key!=null)tn=ye.get(Sn.key);else for(Ne=Te;Ne<=me;Ne++)if(zn[Ne-Te]===0&&li(Sn,D[Ne])){tn=Ne;break}tn===void 0?He(Sn,w,j,!0):(zn[tn-Te]=B+1,tn>=xn?xn=tn:pn=!0,A(Sn,D[tn],L,null,w,j,C,X,F),Ce++)}const _t=pn?k0(zn):Gs;for(Ne=_t.length-1,B=je-1;B>=0;B--){const Sn=Te+B,tn=D[Sn],yt=D[Sn+1],$t=Sn+1<ae?yt.el||Gu(yt):$;zn[B]===0?A(null,tn,L,$t,w,j,C,X,F):pn&&(Ne<0||B!==_t[Ne]?_n(tn,L,$t,2):Ne--)}}},_n=(b,D,L,$,w=null)=>{const{el:j,type:C,transition:X,children:F,shapeFlag:B}=b;if(B&6){_n(b.component.subTree,D,L,$);return}if(B&128){b.suspense.move(D,L,$);return}if(B&64){C.move(b,D,L,Y);return}if(C===Q){s(j,D,L);for(let le=0;le<F.length;le++)_n(F[le],D,L,$);s(b.anchor,D,L);return}if(C===sl){ne(b,D,L);return}if($!==2&&B&1&&X)if($===0)X.persisted&&!j[Hl]?s(j,D,L):(X.beforeEnter(j),s(j,D,L),nt(()=>X.enter(j),w));else{const{leave:le,delayLeave:me,afterLeave:_e}=X,Te=()=>{b.ctx.isUnmounted?i(j):s(j,D,L)},ye=()=>{const Ne=j._isLeaving||!!j[Hl];j._isLeaving&&j[Hl](!0),X.persisted&&!Ne?Te():le(j,()=>{Te(),_e&&_e()})};me?me(j,Te,ye):ye()}else s(j,D,L)},He=(b,D,L,$=!1,w=!1)=>{const{type:j,props:C,ref:X,children:F,dynamicChildren:B,shapeFlag:ae,patchFlag:le,dirs:me,cacheIndex:_e,memo:Te}=b;if(le===-2&&(w=!1),X!=null&&(ls(),bi(X,null,L,b,!0),os()),_e!=null&&(D.renderCache[_e]=void 0),ae&256){D.ctx.deactivate(b);return}const ye=ae&1&&me,Ne=!wi(b);let Ce;if(Ne&&(Ce=C&&C.onVnodeBeforeUnmount)&&Ft(Ce,D,b),ae&6)Mn(b.component,L,$);else{if(ae&128){b.suspense.unmount(L,$);return}ye&&$s(b,null,D,"beforeUnmount"),ae&64?b.type.remove(b,D,L,Y,$):B&&!B.hasOnce&&(j!==Q||le>0&&le&64)?qe(B,D,L,!1,!0):(j===Q&&le&384||!w&&ae&16)&&qe(F,D,L),$&&En(b)}const je=Te!=null&&_e==null;(Ne&&(Ce=C&&C.onVnodeUnmounted)||ye||je)&&nt(()=>{Ce&&Ft(Ce,D,b),ye&&$s(b,null,D,"unmounted"),je&&(b.el=null)},L)},En=b=>{const{type:D,el:L,anchor:$,transition:w}=b;if(D===Q){Ue(L,$);return}if(D===sl){ie(b);return}const j=()=>{i(L),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(b.shapeFlag&1&&w&&!w.persisted){const{leave:C,delayLeave:X}=w,F=()=>C(L,j);X?X(b.el,j,F):F()}else j()},Ue=(b,D)=>{let L;for(;b!==D;)L=m(b),i(b),b=L;i(D)},Mn=(b,D,L)=>{const{bum:$,scope:w,job:j,subTree:C,um:X,m:F,a:B}=b;Xr(F),Xr(B),$&&nl($),w.stop(),j&&(j.flags|=8,He(C,b,D,L)),X&&nt(X,D),nt(()=>{b.isUnmounted=!0},D)},qe=(b,D,L,$=!1,w=!1,j=0)=>{for(let C=j;C<b.length;C++)He(b[C],D,L,$,w)},kn=b=>{if(b.shapeFlag&6)return kn(b.component.subTree);if(b.shapeFlag&128)return b.suspense.next();const D=m(b.anchor||b.el),L=D&&D[Eu];return L?m(L):D};let On=!1;const Fn=(b,D,L)=>{let $;b==null?D._vnode&&(He(D._vnode,null,null,!0),$=D._vnode.component):A(D._vnode||null,b,D,null,null,null,L),D._vnode=b,On||(On=!0,Ir($),$u(),On=!1)},Y={p:A,um:He,m:_n,r:En,mt:nn,mc:z,pc:Ie,pbc:W,n:kn,o:e};return{render:Fn,hydrate:void 0,createApp:l0(Fn)}}function Kl({type:e,props:n},t){return t==="svg"&&e==="foreignObject"||t==="mathml"&&e==="annotation-xml"&&n&&n.encoding&&n.encoding.includes("html")?void 0:t}function Ts({effect:e,job:n},t){t?(e.flags|=32,n.flags|=4):(e.flags&=-33,n.flags&=-5)}function w0(e,n){return(!e||e&&!e.pendingBranch)&&n&&!n.persisted}function lr(e,n,t=!1){const s=e.children,i=n.children;if(Me(s)&&Me(i))for(let o=0;o<s.length;o++){const r=s[o];let a=i[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[o]=es(i[o]),a.el=r.el),!t&&a.patchFlag!==-2&&lr(r,a)),a.type===Pl&&(a.patchFlag===-1&&(a=i[o]=es(a)),a.el=r.el),a.type===as&&!a.el&&(a.el=r.el)}}function k0(e){const n=e.slice(),t=[0];let s,i,o,r,a;const u=e.length;for(s=0;s<u;s++){const p=e[s];if(p!==0){if(i=t[t.length-1],e[i]<p){n[s]=i,t.push(s);continue}for(o=0,r=t.length-1;o<r;)a=o+r>>1,e[t[a]]<p?o=a+1:r=a;p<e[t[o]]&&(o>0&&(n[s]=t[o-1]),t[o]=s)}}for(o=t.length,r=t[o-1];o-- >0;)t[o]=r,r=n[r];return t}function Ku(e){const n=e.subTree.component;if(n)return n.asyncDep&&!n.asyncResolved?n:Ku(n)}function Xr(e){if(e)for(let n=0;n<e.length;n++)e[n].flags|=8}function Gu(e){if(e.placeholder)return e.placeholder;const n=e.component;return n?Gu(n.subTree):null}const Yu=e=>e.__isSuspense;function x0(e,n){n&&n.pendingBranch?Me(e)?n.effects.push(...e):n.effects.push(e):C1(e)}const Q=Symbol.for("v-fgt"),Pl=Symbol.for("v-txt"),as=Symbol.for("v-cmt"),sl=Symbol.for("v-stc"),Os=[];let mt=null;function d(e=!1){Os.push(mt=e?null:[])}function Qu(){Os.pop(),mt=Os[Os.length-1]||null}let Di=1;function dl(e,n=!1){Di+=e,e<0&&mt&&n&&(mt.hasOnce=!0)}function Ju(e){return e.dynamicChildren=Di>0?mt||Gs:null,Qu(),Di>0&&mt&&mt.push(e),e}function v(e,n,t,s,i,o){return Ju(l(e,n,t,s,i,o,!0))}function It(e,n,t,s,i){return Ju(on(e,n,t,s,i,!0))}function pl(e){return e?e.__v_isVNode===!0:!1}function li(e,n){return e.type===n.type&&e.key===n.key}const Zu=({key:e})=>e??null,il=({ref:e,ref_key:n,ref_for:t})=>(typeof e=="number"&&(e=""+e),e!=null?wn(e)||qn(e)||Pe(e)?{i:ht,r:e,k:n,f:!!t}:e:null);function l(e,n=null,t=null,s=0,i=null,o=e===Q?0:1,r=!1,a=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&Zu(n),ref:n&&il(n),scopeId:Cu,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:ht};return a?(fl(u,t),o&128&&e.normalize(u)):t&&(u.shapeFlag|=wn(t)?8:16),Di>0&&!r&&mt&&(u.patchFlag>0||o&6)&&u.patchFlag!==32&&mt.push(u),u}const on=S0;function S0(e,n=null,t=null,s=0,i=null,o=!1){if((!e||e===Ru)&&(e=as),pl(e)){const a=ei(e,n,!0);return t&&fl(a,t),Di>0&&!o&&mt&&(a.shapeFlag&6?mt[mt.indexOf(e)]=a:mt.push(a)),a.patchFlag=-2,a}if(L0(e)&&(e=e.__vccOpts),n){n=$0(n);let{class:a,style:u}=n;a&&!wn(a)&&(n.class=we(a)),rn(u)&&(Zo(u)&&!Me(u)&&(u=Kn({},u)),n.style=Pn(u))}const r=wn(e)?1:Yu(e)?128:Ml(e)?64:rn(e)?4:Pe(e)?2:0;return l(e,n,t,s,i,r,o,!0)}function $0(e){return e?Zo(e)||Bu(e)?Kn({},e):e:null}function ei(e,n,t=!1,s=!1){const{props:i,ref:o,patchFlag:r,children:a,transition:u}=e,p=n?T0(i||{},n):i,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:p,key:p&&Zu(p),ref:n&&n.ref?t&&o?Me(o)?o.concat(il(n)):[o,il(n)]:il(n):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==Q?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:u,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ei(e.ssContent),ssFallback:e.ssFallback&&ei(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return u&&s&&nr(c,u.clone(c)),c}function Ae(e=" ",n=0){return on(Pl,null,e,n)}function vl(e,n){const t=on(sl,null,e);return t.staticCount=n,t}function H(e="",n=!1){return n?(d(),It(as,null,e)):on(as,null,e)}function Bt(e){return e==null||typeof e=="boolean"?on(as):Me(e)?on(Q,null,e.slice()):pl(e)?es(e):on(Pl,null,String(e))}function es(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:ei(e)}function fl(e,n){let t=0;const{shapeFlag:s}=e;if(n==null)n=null;else if(Me(n))t=16;else if(typeof n=="object")if(s&65){const i=n.default;i&&(i._c&&(i._d=!1),fl(e,i()),i._c&&(i._d=!0));return}else{t=32;const i=n._;!i&&!Bu(n)?n._ctx=ht:i===3&&ht&&(ht.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else if(Pe(n)){if(s&65){fl(e,{default:n});return}n={default:n,_ctx:ht},t=32}else n=String(n),s&64?(t=16,n=[Ae(n)]):t=8;e.children=n,e.shapeFlag|=t}function T0(...e){const n={};for(let t=0;t<e.length;t++){const s=e[t];for(const i in s)if(i==="class")n.class!==s.class&&(n.class=we([n.class,s.class]));else if(i==="style")n.style=Pn([n.style,s.style]);else if(Sl(i)){const o=n[i],r=s[i];r&&o!==r&&!(Me(o)&&o.includes(r))?n[i]=o?[].concat(o,r):r:r==null&&o==null&&!$l(i)&&(n[i]=r)}else i!==""&&(n[i]=s[i])}return n}function Ft(e,n,t,s=null){Pt(e,n,7,[t,s])}const C0=Nu();let D0=0;function A0(e,n,t){const s=e.type,i=(n?n.appContext:e.appContext)||C0,o={uid:D0++,vnode:e,type:s,parent:n,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Qc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(i.provides),ids:n?n.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Xu(s,i),emitsOptions:Fu(s,i),emit:null,emitted:null,propsDefaults:dn,inheritAttrs:s.inheritAttrs,ctx:dn,data:dn,props:dn,attrs:dn,slots:dn,refs:dn,setupState:dn,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=n?n.root:o,o.emit=r0.bind(null,o),e.ce&&e.ce(o),o}let Hn=null;const E0=()=>Hn||ht;let hl,Ai;{const e=Al(),n=(t,s)=>{let i;return(i=e[t])||(i=e[t]=[]),i.push(s),o=>{i.length>1?i.forEach(r=>r(o)):i[0](o)}};hl=n("__VUE_INSTANCE_SETTERS__",t=>Hn=t),Ai=n("__VUE_SSR_SETTERS__",t=>Ei=t)}const Ri=e=>{const n=Hn;return hl(e),e.scope.on(),()=>{e.scope.off(),hl(n)}},Wr=()=>{Hn&&Hn.scope.off(),hl(null)};function ec(e){return e.vnode.shapeFlag&4}let Ei=!1;function I0(e,n=!1,t=!1){n&&Ai(n);const{props:s,children:i}=e.vnode,o=ec(e);v0(e,s,o,n),g0(e,i,t||n);const r=o?M0(e,n):void 0;return n&&Ai(!1),r}function M0(e,n){const t=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,J1);const{setup:s}=t;if(s){ls();const i=e.setupContext=s.length>1?R0(e):null,o=Ri(e),r=Oi(s,e,0,[e.props,i]),a=nu(r);if(os(),o(),(a||e.sp)&&!wi(e)&&Mu(e),a){if(r.then(Wr,Wr),n)return r.then(u=>{Ai(!0);try{Hr(e,u,n)}finally{Ai(!1)}}).catch(u=>{Il(u,e,0)});e.asyncDep=r}else Hr(e,r)}else nc(e)}function Hr(e,n,t){Pe(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:rn(n)&&(e.setupState=ku(n)),nc(e)}function nc(e,n,t){const s=e.type;e.render||(e.render=s.render||Wt);{const i=Ri(e);ls();try{Z1(e)}finally{os(),i()}}}const O0={get(e,n){return Wn(e,"get",""),e[n]}};function R0(e){const n=t=>{e.exposed=t||{}};return{attrs:new Proxy(e.attrs,O0),slots:e.slots,emit:e.emit,expose:n}}function Ll(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(ku(g1(e.exposed)),{get(n,t){if(t in n)return n[t];if(t in ki)return ki[t](e)},has(n,t){return t in n||t in ki}})):e.proxy}function P0(e,n=!0){return Pe(e)?e.displayName||e.name:e.name||n&&e.__name}function L0(e){return Pe(e)&&"__vccOpts"in e}const ue=(e,n)=>k1(e,n,Ei);function $o(e,n,t){try{dl(-1);const s=arguments.length;return s===2?rn(n)&&!Me(n)?pl(n)?on(e,null,[n]):on(e,n):on(e,null,n):(s>3?t=Array.prototype.slice.call(arguments,2):s===3&&pl(t)&&(t=[t]),on(e,n,t))}finally{dl(1)}}const N0="3.5.42";/**
* @vue/runtime-dom v3.5.42
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let To;const qr=typeof window<"u"&&window.trustedTypes;if(qr)try{To=qr.createPolicy("vue",{createHTML:e=>e})}catch{}const tc=To?e=>To.createHTML(e):e=>e,F0="http://www.w3.org/2000/svg",z0="http://www.w3.org/1998/Math/MathML",Zt=typeof document<"u"?document:null,Kr=Zt&&Zt.createElement("template"),U0={insert:(e,n,t)=>{n.insertBefore(e,t||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,t,s)=>{const i=n==="svg"?Zt.createElementNS(F0,e):n==="mathml"?Zt.createElementNS(z0,e):t?Zt.createElement(e,{is:t}):Zt.createElement(e);return e==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:e=>Zt.createTextNode(e),createComment:e=>Zt.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Zt.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,t,s,i,o){const r=t?t.previousSibling:n.lastChild;if(i&&(i===o||i.nextSibling))for(;n.insertBefore(i.cloneNode(!0),t),!(i===o||!(i=i.nextSibling)););else{Kr.innerHTML=tc(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const a=Kr.content;if(s==="svg"||s==="mathml"){const u=a.firstChild;for(;u.firstChild;)a.appendChild(u.firstChild);a.removeChild(u)}n.insertBefore(a,t)}return[r?r.nextSibling:n.firstChild,t?t.previousSibling:n.lastChild]}},j0=Symbol("_vtc");function B0(e,n,t){const s=e[j0];s&&(n=(n?[n,...s]:[...s]).join(" ")),n==null?e.removeAttribute("class"):t?e.setAttribute("class",n):e.className=n}const Gr=Symbol("_vod"),V0=Symbol("_vsh"),X0=Symbol(""),W0=/(?:^|;)\s*display\s*:/;function H0(e,n,t){const s=e.style,i=wn(t);let o=!1;if(t&&!i){if(n)if(wn(n))for(const r of n.split(";")){const a=r.slice(0,r.indexOf(":")).trim();t[a]==null&&fi(s,a,"")}else for(const r in n)t[r]==null&&fi(s,r,"");for(const r in t){r==="display"&&(o=!0);const a=t[r];a!=null?K0(e,r,!wn(n)&&n?n[r]:void 0,a)||fi(s,r,a):fi(s,r,"")}}else if(i){if(n!==t){const r=s[X0];r&&(t+=";"+r),s.cssText=t,o=W0.test(t)}}else n&&e.removeAttribute("style");Gr in e&&(e[Gr]=o?s.display:"",e[V0]&&(s.display="none"))}const Hi=/\s*!important$/;function fi(e,n,t){if(Me(t))t.forEach(s=>fi(e,n,s));else if(t==null&&(t=""),n.startsWith("--"))Hi.test(t)?e.setProperty(n,t.replace(Hi,""),"important"):e.setProperty(n,t);else{const s=q0(e,n);Hi.test(t)?e.setProperty(ws(s),t.replace(Hi,""),"important"):e[s]=t}}const Yr=["Webkit","Moz","ms"],Gl={};function q0(e,n){const t=Gl[n];if(t)return t;let s=st(n);if(s!=="filter"&&s in e)return Gl[n]=s;s=Cl(s);for(let i=0;i<Yr.length;i++){const o=Yr[i]+s;if(o in e)return Gl[n]=o}return n}function K0(e,n,t,s){return e.tagName==="TEXTAREA"&&(n==="width"||n==="height")&&wn(s)&&t===s}const Qr="http://www.w3.org/1999/xlink";function Jr(e,n,t,s,i,o=Gc(n)){s&&n.startsWith("xlink:")?t==null?e.removeAttributeNS(Qr,n.slice(6,n.length)):e.setAttributeNS(Qr,n,t):t==null||o&&!lu(t)?e.removeAttribute(n):e.setAttribute(n,o?"":qt(t)?String(t):t)}function Zr(e,n,t,s,i){if(n==="innerHTML"||n==="textContent"){t!=null&&(e[n]=n==="innerHTML"?tc(t):t);return}const o=e.tagName;if(n==="value"&&o!=="PROGRESS"&&!o.includes("-")){const a=o==="OPTION"?e.getAttribute("value")||"":e.value,u=t==null?e.type==="checkbox"?"on":"":String(t);(a!==u||!("_value"in e))&&(e.value=u),t==null&&e.removeAttribute(n),e._value=t;return}let r=!1;if(t===""||t==null){const a=typeof e[n];a==="boolean"?t=lu(t):t==null&&a==="string"?(t="",r=!0):a==="number"&&(t=0,r=!0)}try{e[n]=t}catch{}r&&e.removeAttribute(i||n)}function ss(e,n,t,s){e.addEventListener(n,t,s)}function G0(e,n,t,s){e.removeEventListener(n,t,s)}const ea=Symbol("_vei");function Y0(e,n,t,s,i=null){const o=e[ea]||(e[ea]={}),r=o[n];if(s&&r)r.value=s;else{const[a,u]=Z0(n);if(s){const p=o[n]=td(s,i);ss(e,a,p,u)}else r&&(G0(e,a,r,u),o[n]=void 0)}}const Q0=/(Once|Passive|Capture)$/,J0=/^on:?(?:Once|Passive|Capture)$/;function Z0(e){let n,t;for(;(t=e.match(Q0))&&!J0.test(e);)n||(n={}),e=e.slice(0,e.length-t[1].length),n[t[1].toLowerCase()]=!0;return[e[2]===":"?e.slice(3):ws(e.slice(2)),n]}let Yl=0;const ed=Promise.resolve(),nd=()=>Yl||(ed.then(()=>Yl=0),Yl=Date.now());function td(e,n){const t=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=t.attached)return;const i=t.value;if(Me(i)){const o=s.stopImmediatePropagation;s.stopImmediatePropagation=()=>{o.call(s),s._stopped=!0};const r=i.slice(),a=[s];for(let u=0;u<r.length&&!s._stopped;u++){const p=r[u];p&&Pt(p,n,5,a)}}else Pt(i,n,5,[s])};return t.value=e,t.attached=nd(),t}const na=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,sd=(e,n,t,s,i,o)=>{const r=i==="svg";n==="class"?B0(e,s,r):n==="style"?H0(e,t,s):Sl(n)?$l(n)||Y0(e,n,t,s,o):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):id(e,n,s,r))?(Zr(e,n,s),!e.tagName.includes("-")&&(n==="value"||n==="checked"||n==="selected")&&Jr(e,n,s,r,o,n!=="value")):e._isVueCE&&(ld(e,n)||e._def.__asyncLoader&&(/[A-Z]/.test(n)||!wn(s)))?Zr(e,st(n),s,o,n):(n==="true-value"?e._trueValue=s:n==="false-value"&&(e._falseValue=s),Jr(e,n,s,r))};function id(e,n,t,s){if(s)return!!(n==="innerHTML"||n==="textContent"||n in e&&na(n)&&Pe(t));if(n==="spellcheck"||n==="draggable"||n==="translate"||n==="autocorrect"||n==="sandbox"&&e.tagName==="IFRAME"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA")return!1;if(n==="width"||n==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return na(n)&&wn(t)?!1:n in e}function ld(e,n){const t=e._def.props;if(!t)return!1;const s=st(n);return Array.isArray(t)?t.some(i=>st(i)===s):Object.keys(t).some(i=>st(i)===s)}const bs=e=>{const n=e.props["onUpdate:modelValue"]||!1;return Me(n)?t=>nl(n,t):n};function od(e){e.target.composing=!0}function ta(e){const n=e.target;n.composing&&(n.composing=!1,n.dispatchEvent(new Event("input")))}const gt=Symbol("_assign"),qi=Symbol("_initialValue");function Ql(e,n,t){return n&&(e=e.trim()),t&&(e=Dl(e)),e}const bn={created(e,{modifiers:{lazy:n,trim:t,number:s}},i){e.parentNode&&(e.type==="text"?e[qi]=e.defaultValue.replace(/[\r\n]/g,""):e.type==="textarea"&&(e[qi]=e.defaultValue.replace(/\r\n?/g,`
`))),e[gt]=bs(i);const o=s||i.props&&i.props.type==="number";ss(e,n?"change":"input",r=>{r.target.composing||e[gt](Ql(e.value,t,o))}),(t||o)&&ss(e,"change",()=>{e.value=Ql(e.value,t,o)}),n||(ss(e,"compositionstart",od),ss(e,"compositionend",ta),ss(e,"change",ta))},mounted(e,{value:n,modifiers:{trim:t,number:s}}){const i=n??"",o=e[qi];delete e[qi],o!==void 0&&(e.type==="text"||e.type==="textarea")&&e.value!==o?e[gt](Ql(e.value,t,s)):e.value=i},beforeUpdate(e,{value:n,oldValue:t,modifiers:{lazy:s,trim:i,number:o}},r){if(e[gt]=bs(r),e.composing)return;const a=(o||e.type==="number")&&!/^0\d/.test(e.value)?Dl(e.value):e.value,u=n??"";if(a===u)return;const p=e.getRootNode();(p instanceof Document||p instanceof ShadowRoot)&&p.activeElement===e&&e.type!=="range"&&(s&&n===t||i&&e.value.trim()===u)||(e.value=u)}},sc={deep:!0,created(e,n,t){e[gt]=bs(t),ss(e,"change",()=>{const s=e._modelValue,i=ni(e),o=e.checked,r=e[gt];if(Me(s)){const a=Ho(s,i),u=a!==-1;if(o&&!u)r(s.concat(i));else if(!o&&u){const p=[...s];p.splice(a,1),r(p)}}else if(is(s)){const a=new Set(s);o?a.add(i):a.delete(i),r(a)}else r(ic(e,o))})},mounted:sa,beforeUpdate(e,n,t){e[gt]=bs(t),sa(e,n,t)}};function sa(e,{value:n,oldValue:t},s){e._modelValue=n;let i;if(Me(n))i=Ho(n,s.props.value)>-1;else if(is(n))i=n.has(s.props.value);else{if(n===t)return;i=Ot(n,ic(e,!0))}e.checked!==i&&(e.checked=i)}const rd={created(e,{value:n},t){e.checked=Ot(n,t.props.value),e[gt]=bs(t),ss(e,"change",()=>{e[gt](ni(e))})},beforeUpdate(e,{value:n,oldValue:t},s){e[gt]=bs(s),n!==t&&(e.checked=Ot(n,s.props.value))}},ys={deep:!0,created(e,{value:n,modifiers:{number:t}},s){e._modelValue=n,ss(e,"change",()=>{const i=Array.prototype.filter.call(e.options,u=>u.selected).map(u=>t?Dl(ni(u)):ni(u)),o=e.multiple,r=o?is(e._modelValue)?new Set(i):i:i[0],a=e._pendingValue=[o,o?Me(r)?i.slice():i:r];try{e[gt](r)}finally{Ut(()=>{e._pendingValue===a&&(e._pendingValue=void 0)})}}),e[gt]=bs(s)},mounted(e,{value:n}){ia(e,n)},beforeUpdate(e,{value:n},t){e._modelValue=n,e[gt]=bs(t)},updated(e,{value:n}){const t=e._pendingValue;e._pendingValue=void 0,(!t||t[0]!==e.multiple||!ad(n,t[1],t[0]))&&ia(e,n)}};function ad(e,n,t){if(!t||Me(e))return Ot(e,n);if(is(e)){if(e.size!==n.length)return!1;for(const s of n)if(!e.has(s))return!1;return!0}return!1}function ia(e,n){const t=e.multiple,s=Me(n);if(!(t&&!s&&!is(n))){for(let i=0,o=e.options.length;i<o;i++){const r=e.options[i],a=ni(r);if(t)if(s){const u=typeof a;u==="string"||u==="number"?r.selected=n.some(p=>String(p)===String(a)):r.selected=Ho(n,a)>-1}else r.selected=n.has(a);else if(Ot(ni(r),n)){e.selectedIndex!==i&&(e.selectedIndex=i);return}}!t&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function ni(e){return"_value"in e?e._value:e.value}function ic(e,n){const t=n?"_trueValue":"_falseValue";return t in e?e[t]:n}const ud={created(e,n,t){Ki(e,n,t,null,"created")},mounted(e,n,t){Ki(e,n,t,null,"mounted")},beforeUpdate(e,n,t,s){Ki(e,n,t,s,"beforeUpdate")},updated(e,n,t,s){Ki(e,n,t,s,"updated")}};function cd(e,n){switch(e){case"SELECT":return ys;case"TEXTAREA":return bn;default:switch(n){case"checkbox":return sc;case"radio":return rd;default:return bn}}}function Ki(e,n,t,s,i){const r=cd(e.tagName,t.props&&t.props.type)[i];r&&r(e,n,t,s)}const dd=["ctrl","shift","alt","meta"],pd={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,n)=>dd.some(t=>e[`${t}Key`]&&!n.includes(t))},mn=(e,n)=>{if(!e)return e;const t=e._withMods||(e._withMods={}),s=n.join(".");return t[s]||(t[s]=((i,...o)=>{for(let r=0;r<n.length;r++){const a=pd[n[r]];if(a&&a(i,n))return}return e(i,...o)}))},vd={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Ht=(e,n)=>{const t=e._withKeys||(e._withKeys={}),s=n.join(".");return t[s]||(t[s]=(i=>{if(!("key"in i))return;const o=ws(i.key);if(n.some(r=>r===o||vd[r]===o))return e(i)}))},fd=Kn({patchProp:sd},U0);let la;function hd(){return la||(la=y0(fd))}const md=((...e)=>{const n=hd().createApp(...e),{mount:t}=n;return n.mount=s=>{const i=_d(s);if(!i)return;const o=n._component;!Pe(o)&&!o.render&&!o.template&&(o.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const r=t(i,!1,gd(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),r},n});function gd(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function _d(e){return wn(e)?document.querySelector(e):e}const Co=[["月份","话题类型","家长问题及评论提及数","关注占比","发布视频数","播放量","内容归因新增关注","新增关注占比","播放关注率","数据性质"],["2026-09","开学收心与适应",386,"31.4%",4,284600,486,"38.3%","0.171%","演示数据"],["2026-09","学习规划与时间管理",302,"24.6%",3,213800,324,"25.5%","0.152%","演示数据"],["2026-09","月考备考与错题复盘",234,"19.0%",2,154200,251,"19.8%","0.163%","演示数据"],["2026-09","学科方法",184,"15.0%",2,121900,146,"11.5%","0.120%","演示数据"],["2026-09","亲子沟通",123,"10.0%",1,68100,62,"4.9%","0.091%","演示数据"],["2026-09","合计",1229,"100.0%",12,842600,1269,"100.0%","0.151%","演示数据"]],oa=Co.map((e,n)=>({locator:`话题归因 · 第 ${n+1} 行`,text:e.join(" | ")})),yd={id:"business-demo-2026-09-topic-attribution",title:"9月家长话题与视频涨粉归因（演示数据）.csv",subspace:"经营数据",space_name:"清华优优 AI Wiki",doc_type:"dataset",source_group:"demo-topic-analysis-2026-09",imported_file:!0,relative_path:"演示数据/9月家长话题与视频涨粉归因（演示数据）.csv",uri:"./business-data/demo/9月家长话题与视频涨粉归因（演示数据）.csv",chunk_count:Co.length,sections:oa,local_content:oa.map(e=>`${e.locator}
${e.text}`).join(`
`),parse_status:"completed",analyzed:!1,is_demo_data:!0,sheets:[{name:"话题归因",rows:Co}]},bd=JSON.parse('[{"id":"csv-live-0","date":"2025-11-15","start_time":"20:22","title":"清华学霸方法分享 初高中家长必听","dur":"1小时58分钟29秒","views":"3449","peak":"140","hot":"0","gmv":"¥3729","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":3,"source_text":"清华学霸方法分享 初高中家长必听 |   | 2025年11月15日 20:22 | 1小时58分钟29秒 | 3449 | 3794 | 140 | 2分钟16秒 | 1730 | 300 | 86 | 91 | 0 | 0 | 0 | ¥3729 | 11 | 10","follows":"91","orders":"11","buyers":"10"},{"id":"csv-live-1","date":"2025-11-14","start_time":"19:55","title":"清华学霸方法分享 初高中家长必听","dur":"1小时57分钟48秒","views":"2863","peak":"118","hot":"21","gmv":"¥2962","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":4,"source_text":"清华学霸方法分享 初高中家长必听 |   | 2025年11月14日 19:55 | 1小时57分钟48秒 | 2863 | 3367 | 118 | 2分钟23秒 | 1118 | 294 | 70 | 70 | 21 | 1 | 1 | ¥2962 | 8 | 8","follows":"70","orders":"8","buyers":"8"},{"id":"csv-live-2","date":"2025-11-13","start_time":"19:56","title":"清华学霸方法分享 初高中家长必听","dur":"1小时49分钟56秒","views":"3171","peak":"143","hot":"131","gmv":"¥3930","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":5,"source_text":"清华学霸方法分享 初高中家长必听 |   | 2025年11月13日 19:56 | 1小时49分钟56秒 | 3171 | 3627 | 143 | 2分钟17秒 | 4522 | 256 | 79 | 78 | 131 | 9 | 9 | ¥3930 | 10 | 9","follows":"78","orders":"10","buyers":"9"},{"id":"csv-live-3","date":"2025-11-11","start_time":"20:04","title":"清华学霸方法分享 初高中家长必听","dur":"1小时52分钟53秒","views":"2236","peak":"109","hot":"46","gmv":"¥1395","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":6,"source_text":"清华学霸方法分享 初高中家长必听 |   | 2025年11月11日 20:04 | 1小时52分钟53秒 | 2236 | 2709 | 109 | 2分钟37秒 | 1276 | 204 | 65 | 61 | 46 | 4 | 4 | ¥1395 | 5 | 5","follows":"61","orders":"5","buyers":"5"},{"id":"csv-live-4","date":"2025-11-10","start_time":"19:59","title":"清华学霸方法分享 初高中家长必听","dur":"1小时51分钟24秒","views":"3147","peak":"127","hot":"42","gmv":"¥199","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":7,"source_text":"清华学霸方法分享 初高中家长必听 |   | 2025年11月10日 19:59 | 1小时51分钟24秒 | 3147 | 3761 | 127 | 2分钟26秒 | 3073 | 241 | 64 | 105 | 42 | 2 | 2 | ¥199 | 1 | 1","follows":"105","orders":"1","buyers":"1"},{"id":"csv-live-5","date":"2025-11-08","start_time":"20:15","title":"清华学霸方法分享 初高中家长必听","dur":"1小时41分钟7秒","views":"2645","peak":"121","hot":"106","gmv":"¥2531","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":8,"source_text":"清华学霸方法分享 初高中家长必听 |   | 2025年11月08日 20:15 | 1小时41分钟7秒 | 2645 | 3210 | 121 | 2分钟23秒 | 1744 | 253 | 89 | 57 | 106 | 5 | 8 | ¥2531 | 9 | 9","follows":"57","orders":"9","buyers":"9"},{"id":"csv-live-6","date":"2025-11-07","start_time":"19:59","title":"清华学霸方法分享 初高中家长必听","dur":"1小时52分钟42秒","views":"2599","peak":"136","hot":"58","gmv":"¥597","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":9,"source_text":"清华学霸方法分享 初高中家长必听 |   | 2025年11月07日 19:59 | 1小时52分钟42秒 | 2599 | 3045 | 136 | 2分钟11秒 | 1311 | 302 | 70 | 78 | 58 | 4 | 4 | ¥597 | 3 | 3","follows":"78","orders":"3","buyers":"3"},{"id":"csv-live-7","date":"2025-11-07","start_time":"18:37","title":"ceshi","dur":"49分钟16秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":10,"source_text":"ceshi |   | 2025年11月07日 18:37 | 49分钟16秒 | 1 | 1 | 1 | 44分钟34秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-8","date":"2025-11-06","start_time":"20:01","title":"清华学霸方法分享 初高中家长必听","dur":"1小时49分钟28秒","views":"2172","peak":"86","hot":"92","gmv":"¥1795","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":11,"source_text":"清华学霸方法分享 初高中家长必听 |   | 2025年11月06日 20:01 | 1小时49分钟28秒 | 2172 | 2593 | 86 | 2分钟27秒 | 3078 | 222 | 59 | 53 | 92 | 7 | 7 | ¥1795 | 5 | 5","follows":"53","orders":"5","buyers":"5"},{"id":"csv-live-9","date":"2025-11-04","start_time":"20:12","title":"清华学霸方法分享 初高中家长必听","dur":"1小时53分钟21秒","views":"4212","peak":"288","hot":"23","gmv":"¥398","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":12,"source_text":"清华学霸方法分享 初高中家长必听 |   | 2025年11月04日 20:12 | 1小时53分钟21秒 | 4212 | 4860 | 288 | 1分钟45秒 | 4299 | 261 | 84 | 101 | 23 | 1 | 1 | ¥398 | 2 | 2","follows":"101","orders":"2","buyers":"2"},{"id":"csv-live-10","date":"2025-11-03","start_time":"20:37","title":"自学比补课强10倍 清华学霸方法","dur":"1小时39分钟49秒","views":"3288","peak":"131","hot":"3","gmv":"¥3727","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":13,"source_text":"自学比补课强10倍 清华学霸方法 |   | 2025年11月03日 20:37 | 1小时39分钟49秒 | 3288 | 3857 | 131 | 1分钟57秒 | 1178 | 297 | 85 | 96 | 3 | 1 | 1 | ¥3727 | 13 | 12","follows":"96","orders":"13","buyers":"12"},{"id":"csv-live-11","date":"2025-11-03","start_time":"18:30","title":"ceshi","dur":"2小时6分钟10秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":14,"source_text":"ceshi |   | 2025年11月03日 18:30 | 2小时6分钟10秒 | 1 | 2 | 1 | 15分钟53秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-12","date":"2025-11-01","start_time":"20:02","title":"自学比补课强10倍 清华学霸方法","dur":"1小时34分钟7秒","views":"3301","peak":"185","hot":"22","gmv":"¥398","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":15,"source_text":"自学比补课强10倍 清华学霸方法 |   | 2025年11月01日 20:02 | 1小时34分钟7秒 | 3301 | 3782 | 185 | 2分钟19秒 | 1521 | 285 | 100 | 126 | 22 | 2 | 2 | ¥398 | 2 | 2","follows":"126","orders":"2","buyers":"2"},{"id":"csv-live-13","date":"2025-10-31","start_time":"20:32","title":"清华学霸开学答疑 小初高家长必听","dur":"1小时30分钟12秒","views":"2991","peak":"128","hot":"37","gmv":"¥199","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":16,"source_text":"清华学霸开学答疑 小初高家长必听 |   | 2025年10月31日 20:32 | 1小时30分钟12秒 | 2991 | 3498 | 128 | 2分钟15秒 | 2162 | 272 | 85 | 88 | 37 | 3 | 3 | ¥199 | 1 | 1","follows":"88","orders":"1","buyers":"1"},{"id":"csv-live-14","date":"2025-10-31","start_time":"19:53","title":"清华学霸开学答疑 小初高家长必听","dur":"30分钟35秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":17,"source_text":"清华学霸开学答疑 小初高家长必听 |   | 2025年10月31日 19:53 | 30分钟35秒 | 1 | 1 | 1 | 29分钟43秒 | 0 | 2 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-15","date":"2025-10-30","start_time":"20:05","title":"清华学霸开学答疑 小初高家长必听","dur":"2小时2分钟32秒","views":"3432","peak":"216","hot":"141","gmv":"¥1594","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":18,"source_text":"清华学霸开学答疑 小初高家长必听 |   | 2025年10月30日 20:05 | 2小时2分钟32秒 | 3432 | 4077 | 216 | 2分钟47秒 | 4734 | 440 | 98 | 94 | 141 | 10 | 11 | ¥1594 | 6 | 6","follows":"94","orders":"6","buyers":"6"},{"id":"csv-live-16","date":"2025-10-30","start_time":"19:47","title":"清华学霸开学答疑 小初高家长必听","dur":"17分钟33秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":19,"source_text":"清华学霸开学答疑 小初高家长必听 |   | 2025年10月30日 19:47 | 17分钟33秒 | 1 | 1 | 1 | 15分钟22秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-17","date":"2025-10-28","start_time":"20:02","title":"清华学霸开学答疑 小初高家长必听","dur":"1小时46分钟56秒","views":"2413","peak":"114","hot":"3","gmv":"¥199","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":20,"source_text":"清华学霸开学答疑 小初高家长必听 |   | 2025年10月28日 20:02 | 1小时46分钟56秒 | 2413 | 2833 | 114 | 2分钟56秒 | 1932 | 317 | 59 | 73 | 3 | 3 | 3 | ¥199 | 1 | 1","follows":"73","orders":"1","buyers":"1"},{"id":"csv-live-18","date":"2025-10-28","start_time":"19:37","title":"清华学霸开学答疑 小初高家长必听","dur":"24分钟44秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":21,"source_text":"清华学霸开学答疑 小初高家长必听 |   | 2025年10月28日 19:37 | 24分钟44秒 | 1 | 2 | 1 | 13分钟9秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-19","date":"2025-10-27","start_time":"20:03","title":"清华学霸开学答疑 小初高家长必听","dur":"1小时40分钟54秒","views":"2311","peak":"116","hot":"45","gmv":"¥1167","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":22,"source_text":"清华学霸开学答疑 小初高家长必听 |   | 2025年10月27日 20:03 | 1小时40分钟54秒 | 2311 | 2546 | 116 | 2分钟54秒 | 1534 | 233 | 74 | 93 | 45 | 3 | 3 | ¥1167 | 3 | 2","follows":"93","orders":"3","buyers":"2"},{"id":"csv-live-20","date":"2025-10-27","start_time":"18:58","title":"ceshi","dur":"1小时5分钟19秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":23,"source_text":"ceshi |   | 2025年10月27日 18:58 | 1小时5分钟19秒 | 1 | 2 | 1 | 59分钟31秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-21","date":"2025-10-26","start_time":"20:02","title":"清华学霸 讲初高中自学","dur":"2小时18分钟50秒","views":"3143","peak":"99","hot":"70","gmv":"¥1167","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":24,"source_text":"清华学霸 讲初高中自学 |   | 2025年10月26日 20:02 | 2小时18分钟50秒 | 3143 | 3739 | 99 | 2分钟22秒 | 3240 | 354 | 87 | 84 | 70 | 5 | 6 | ¥1167 | 3 | 3","follows":"84","orders":"3","buyers":"3"},{"id":"csv-live-22","date":"2025-10-26","start_time":"19:10","title":"123","dur":"50分钟29秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":25,"source_text":"123 |   | 2025年10月26日 19:10 | 50分钟29秒 | 1 | 1 | 1 | 51分钟18秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-23","date":"2025-10-24","start_time":"20:13","title":"清华学霸开学答疑 小初高家长必听","dur":"1小时33分钟55秒","views":"1303","peak":"68","hot":"21","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":26,"source_text":"清华学霸开学答疑 小初高家长必听 |   | 2025年10月24日 20:13 | 1小时33分钟55秒 | 1303 | 1509 | 68 | 2分钟58秒 | 3818 | 182 | 29 | 20 | 21 | 1 | 1 | ¥0 | 0 | 0","follows":"20","orders":"0","buyers":"0"},{"id":"csv-live-24","date":"2025-10-24","start_time":"20:05","title":"清华学霸开学答疑 小初高家长必听","dur":"7分钟0秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":27,"source_text":"清华学霸开学答疑 小初高家长必听 |   | 2025年10月24日 20:05 | 7分钟0秒 | 1 | 1 | 1 | 1分钟29秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-25","date":"2025-10-24","start_time":"19:58","title":"清华学霸开学答疑 小初高家长必听","dur":"5分钟55秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":28,"source_text":"清华学霸开学答疑 小初高家长必听 |   | 2025年10月24日 19:58 | 5分钟55秒 | 1 | 1 | 1 | 4分钟37秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-26","date":"2025-10-23","start_time":"20:02","title":"清华学霸开学答疑 小初高家长必听","dur":"2小时12分钟32秒","views":"1793","peak":"71","hot":"44","gmv":"¥1797","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":29,"source_text":"清华学霸开学答疑 小初高家长必听 |   | 2025年10月23日 20:02 | 2小时12分钟32秒 | 1793 | 2153 | 71 | 3分钟28秒 | 1561 | 253 | 34 | 38 | 44 | 4 | 4 | ¥1797 | 3 | 3","follows":"38","orders":"3","buyers":"3"},{"id":"csv-live-27","date":"2025-10-23","start_time":"18:31","title":"ceshi","dur":"1小时29分钟3秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":30,"source_text":"ceshi |   | 2025年10月23日 18:31 | 1小时29分钟3秒 | 1 | 3 | 1 | 1小时48分钟56秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-28","date":"2025-10-21","start_time":"20:07","title":"清华学霸开学答疑 小初高家长必听","dur":"2小时11分钟40秒","views":"2153","peak":"88","hot":"48","gmv":"¥1198","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":31,"source_text":"清华学霸开学答疑 小初高家长必听 |   | 2025年10月21日 20:07 | 2小时11分钟40秒 | 2153 | 2535 | 88 | 3分钟18秒 | 5022 | 338 | 54 | 37 | 48 | 4 | 4 | ¥1198 | 2 | 2","follows":"37","orders":"2","buyers":"2"},{"id":"csv-live-29","date":"2025-10-21","start_time":"19:31","title":"清华学霸开学答疑 小初高家长必听","dur":"28分钟46秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":32,"source_text":"清华学霸开学答疑 小初高家长必听 |   | 2025年10月21日 19:31 | 28分钟46秒 | 1 | 1 | 1 | 34分钟7秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-30","date":"2025-10-21","start_time":"16:50","title":"ceshi2","dur":"1分钟46秒","views":"1","peak":"0","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":33,"source_text":"ceshi2 |   | 2025年10月21日 16:50 | 1分钟46秒 | 1 | 1 | 0 | 5秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-31","date":"2025-10-21","start_time":"16:03","title":"ceshi","dur":"4分钟28秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":34,"source_text":"ceshi |   | 2025年10月21日 16:03 | 4分钟28秒 | 1 | 2 | 1 | 2分钟25秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-32","date":"2025-10-20","start_time":"20:03","title":"清华学霸开学答疑 小初高家长必听","dur":"2小时22分钟41秒","views":"2570","peak":"84","hot":"29","gmv":"¥1766","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":35,"source_text":"清华学霸开学答疑 小初高家长必听 |   | 2025年10月20日 20:03 | 2小时22分钟41秒 | 2570 | 3017 | 84 | 2分钟46秒 | 1506 | 279 | 49 | 32 | 29 | 3 | 3 | ¥1766 | 4 | 4","follows":"32","orders":"4","buyers":"4"},{"id":"csv-live-33","date":"2025-10-20","start_time":"18:45","title":"测试","dur":"1小时16分钟1秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":36,"source_text":"测试 |   | 2025年10月20日 18:45 | 1小时16分钟1秒 | 1 | 2 | 1 | 41分钟29秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-34","date":"2025-10-18","start_time":"19:57","title":"清华学霸开学答疑 小初高家长必听","dur":"2小时10分钟39秒","views":"2139","peak":"75","hot":"22","gmv":"¥1565","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":37,"source_text":"清华学霸开学答疑 小初高家长必听 |   | 2025年10月18日 19:57 | 2小时10分钟39秒 | 2139 | 2551 | 75 | 0秒 | 6553 | 216 | 56 | 39 | 22 | 2 | 2 | ¥1565 | 5 | 3","follows":"39","orders":"5","buyers":"3"},{"id":"csv-live-35","date":"2025-10-18","start_time":"19:44","title":"清华学霸开学答疑 小初高家长必听","dur":"11分钟44秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":38,"source_text":"清华学霸开学答疑 小初高家长必听 |   | 2025年10月18日 19:44 | 11分钟44秒 | 1 | 1 | 1 | 7分钟54秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-36","date":"2025-10-17","start_time":"22:34","title":"ceshi","dur":"4分钟49秒","views":"2","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":39,"source_text":"ceshi |   | 2025年10月17日 22:34 | 4分钟49秒 | 2 | 2 | 1 | 44秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-37","date":"2025-10-17","start_time":"20:41","title":"清华学霸开心学答疑 小初高家长必","dur":"1小时47分钟31秒","views":"1916","peak":"70","hot":"52","gmv":"¥199","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":40,"source_text":"清华学霸开心学答疑 小初高家长必 |   | 2025年10月17日 20:41 | 1小时47分钟31秒 | 1916 | 2245 | 70 | 2分钟14秒 | 4350 | 122 | 36 | 28 | 52 | 2 | 3 | ¥199 | 1 | 1","follows":"28","orders":"1","buyers":"1"},{"id":"csv-live-38","date":"2025-10-17","start_time":"20:33","title":"清华学霸开学答疑 小初高家长必听","dur":"5分钟2秒","views":"85","peak":"38","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":41,"source_text":"清华学霸开学答疑 小初高家长必听 |   | 2025年10月17日 20:33 | 5分钟2秒 | 85 | 85 | 38 | 42秒 | 1 | 7 | 5 | 4 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"4","orders":"0","buyers":"0"},{"id":"csv-live-39","date":"2025-10-17","start_time":"20:04","title":"清华学霸开学答疑 小初高家长必听","dur":"3分钟30秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":42,"source_text":"清华学霸开学答疑 小初高家长必听 |   | 2025年10月17日 20:04 | 3分钟30秒 | 1 | 1 | 1 | 5分钟35秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-40","date":"2025-10-16","start_time":"20:19","title":"清华学霸开学答疑 小初高家长必听","dur":"2小时2分钟16秒","views":"2881","peak":"133","hot":"91","gmv":"¥3563","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":43,"source_text":"清华学霸开学答疑 小初高家长必听 |   | 2025年10月16日 20:19 | 2小时2分钟16秒 | 2881 | 3502 | 133 | 3分钟24秒 | 2762 | 317 | 91 | 90 | 91 | 9 | 9 | ¥3563 | 7 | 6","follows":"90","orders":"7","buyers":"6"},{"id":"csv-live-41","date":"2025-10-16","start_time":"20:15","title":"清华学霸开学答疑 小初高家长必听","dur":"2分钟57秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":44,"source_text":"清华学霸开学答疑 小初高家长必听 |   | 2025年10月16日 20:15 | 2分钟57秒 | 1 | 2 | 1 | 0秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-42","date":"2025-10-14","start_time":"20:05","title":"清华学霸开学答疑 小初高家长必听","dur":"1小时58分钟50秒","views":"2929","peak":"109","hot":"165","gmv":"¥3592","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":45,"source_text":"清华学霸开学答疑 小初高家长必听 |   | 2025年10月14日 20:05 | 1小时58分钟50秒 | 2929 | 3461 | 109 | 2分钟56秒 | 6330 | 312 | 61 | 71 | 165 | 9 | 9 | ¥3592 | 8 | 8","follows":"71","orders":"8","buyers":"8"},{"id":"csv-live-43","date":"2025-10-14","start_time":"19:03","title":"清华学霸开学答疑 小初高家长必听","dur":"59分钟10秒","views":"2","peak":"2","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":46,"source_text":"清华学霸开学答疑 小初高家长必听 |   | 2025年10月14日 19:03 | 59分钟10秒 | 2 | 3 | 2 | 41分钟3秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-44","date":"2025-10-14","start_time":"18:56","title":"ceshi2","dur":"27秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":47,"source_text":"ceshi2 |   | 2025年10月14日 18:56 | 27秒 | 1 | 1 | 1 | 27秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-45","date":"2025-10-14","start_time":"18:44","title":"123","dur":"9分钟34秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":48,"source_text":"123 |   | 2025年10月14日 18:44 | 9分钟34秒 | 1 | 1 | 1 | 2分钟36秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-46","date":"2025-10-14","start_time":"18:38","title":"ceshi","dur":"3分钟12秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":49,"source_text":"ceshi |   | 2025年10月14日 18:38 | 3分钟12秒 | 1 | 1 | 1 | 2分钟37秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-47","date":"2025-10-14","start_time":"18:18","title":"ceshi","dur":"5分钟24秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":50,"source_text":"ceshi |   | 2025年10月14日 18:18 | 5分钟24秒 | 1 | 1 | 1 | 6分钟3秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-48","date":"2025-10-13","start_time":"20:02","title":"清华学霸开学答疑 小初高家长必听","dur":"1小时58分钟27秒","views":"2839","peak":"116","hot":"45","gmv":"¥1196","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":51,"source_text":"清华学霸开学答疑 小初高家长必听 |   | 2025年10月13日 20:02 | 1小时58分钟27秒 | 2839 | 3426 | 116 | 3分钟1秒 | 7808 | 484 | 75 | 54 | 45 | 3 | 3 | ¥1196 | 4 | 4","follows":"54","orders":"4","buyers":"4"},{"id":"csv-live-49","date":"2025-10-11","start_time":"20:00","title":"清华学霸开学答疑 小初高家长必听","dur":"2小时1分钟28秒","views":"3627","peak":"134","hot":"171","gmv":"¥2394","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":52,"source_text":"清华学霸开学答疑 小初高家长必听 |   | 2025年10月11日 20:00 | 2小时1分钟28秒 | 3627 | 4397 | 134 | 2分钟47秒 | 6631 | 378 | 72 | 81 | 171 | 14 | 14 | ¥2394 | 6 | 6","follows":"81","orders":"6","buyers":"6"},{"id":"csv-live-50","date":"2025-10-11","start_time":"18:54","title":"2","dur":"7分钟25秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":53,"source_text":"2 |   | 2025年10月11日 18:54 | 7分钟25秒 | 1 | 2 | 1 | 7分钟15秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-51","date":"2025-10-10","start_time":"20:01","title":"清华学霸开学答疑 小初高家长必听","dur":"1小时42分钟29秒","views":"2944","peak":"113","hot":"44","gmv":"¥199","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":54,"source_text":"清华学霸开学答疑 小初高家长必听 |   | 2025年10月10日 20:01 | 1小时42分钟29秒 | 2944 | 3507 | 113 | 2分钟32秒 | 4088 | 229 | 85 | 77 | 44 | 4 | 4 | ¥199 | 1 | 1","follows":"77","orders":"1","buyers":"1"},{"id":"csv-live-52","date":"2025-10-09","start_time":"20:03","title":"清华学霸开学答疑 小初高家长必听","dur":"1小时27分钟1秒","views":"2864","peak":"144","hot":"130","gmv":"¥1167","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":55,"source_text":"清华学霸开学答疑 小初高家长必听 |   | 2025年10月09日 20:03 | 1小时27分钟1秒 | 2864 | 3250 | 144 | 2分钟30秒 | 2552 | 240 | 75 | 73 | 130 | 11 | 12 | ¥1167 | 3 | 3","follows":"73","orders":"3","buyers":"3"},{"id":"csv-live-53","date":"2025-10-07","start_time":"20:01","title":"清华学霸开学规划 小初高家长必听","dur":"1小时40分钟43秒","views":"3659","peak":"144","hot":"99","gmv":"¥1191","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":56,"source_text":"清华学霸开学规划 小初高家长必听 |   | 2025年10月07日 20:01 | 1小时40分钟43秒 | 3659 | 4275 | 144 | 2分钟28秒 | 4269 | 350 | 114 | 122 | 99 | 10 | 11 | ¥1191 | 4 | 4","follows":"122","orders":"4","buyers":"4"},{"id":"csv-live-54","date":"2025-10-07","start_time":"19:49","title":"清华学霸开学规划 小初高家长必听","dur":"10分钟5秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":57,"source_text":"清华学霸开学规划 小初高家长必听 |   | 2025年10月07日 19:49 | 10分钟5秒 | 1 | 1 | 1 | 7分钟7秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-55","date":"2025-10-06","start_time":"20:01","title":"清华学霸开学答疑 小初高家长必听","dur":"1小时28分钟23秒","views":"3436","peak":"92","hot":"32","gmv":"¥199","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":58,"source_text":"清华学霸开学答疑 小初高家长必听 |   | 2025年10月06日 20:01 | 1小时28分钟23秒 | 3436 | 3843 | 92 | 1分钟15秒 | 7836 | 163 | 65 | 58 | 32 | 6 | 6 | ¥199 | 1 | 1","follows":"58","orders":"1","buyers":"1"},{"id":"csv-live-56","date":"2025-10-06","start_time":"19:44","title":"清华学霸开学答疑 小初高家长必听","dur":"16分钟50秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":59,"source_text":"清华学霸开学答疑 小初高家长必听 |   | 2025年10月06日 19:44 | 16分钟50秒 | 1 | 1 | 1 | 12分钟14秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-57","date":"2025-10-05","start_time":"20:24","title":"清华学霸开学答疑 小初高家长必听","dur":"1小时45分钟15秒","views":"3370","peak":"89","hot":"34","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":60,"source_text":"清华学霸开学答疑 小初高家长必听 |   | 2025年10月05日 20:24 | 1小时45分钟15秒 | 3370 | 3837 | 89 | 1分钟33秒 | 1349 | 206 | 82 | 66 | 34 | 3 | 3 | ¥0 | 0 | 0","follows":"66","orders":"0","buyers":"0"},{"id":"csv-live-58","date":"2025-10-05","start_time":"20:22","title":"清华学霸开学答疑 小初高家长必听","dur":"57秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":61,"source_text":"清华学霸开学答疑 小初高家长必听 |   | 2025年10月05日 20:22 | 57秒 | 1 | 1 | 1 | 0秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-59","date":"2025-10-01","start_time":"20:06","title":"初高中必听 清华学姐 自学方法分享","dur":"1小时30分钟1秒","views":"1995","peak":"62","hot":"22","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":62,"source_text":"初高中必听 清华学姐 自学方法分享 |   | 2025年10月01日 20:06 | 1小时30分钟1秒 | 1995 | 2230 | 62 | 1分钟20秒 | 4791 | 161 | 27 | 26 | 22 | 2 | 2 | ¥0 | 0 | 0","follows":"26","orders":"0","buyers":"0"},{"id":"csv-live-60","date":"2025-09-30","start_time":"20:06","title":"清华学霸自学方法 初高中","dur":"1小时53分钟57秒","views":"2617","peak":"95","hot":"44","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":63,"source_text":"清华学霸自学方法 初高中 |   | 2025年09月30日 20:06 | 1小时53分钟57秒 | 2617 | 3047 | 95 | 2分钟30秒 | 3523 | 276 | 78 | 47 | 44 | 4 | 4 | ¥0 | 0 | 0","follows":"47","orders":"0","buyers":"0"},{"id":"csv-live-61","date":"2025-09-29","start_time":"20:12","title":"自学比补课强10倍","dur":"54分钟5秒","views":"1504","peak":"74","hot":"32","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":64,"source_text":"自学比补课强10倍 |   | 2025年09月29日 20:12 | 54分钟5秒 | 1504 | 1739 | 74 | 1分钟20秒 | 567 | 94 | 18 | 33 | 32 | 2 | 2 | ¥0 | 0 | 0","follows":"33","orders":"0","buyers":"0"},{"id":"csv-live-62","date":"2025-09-27","start_time":"20:21","title":"清华学霸自学方法 初高中","dur":"1小时52分钟37秒","views":"2752","peak":"116","hot":"74","gmv":"¥798","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":65,"source_text":"清华学霸自学方法 初高中 |   | 2025年09月27日 20:21 | 1小时52分钟37秒 | 2752 | 3280 | 116 | 2分钟50秒 | 4490 | 349 | 101 | 81 | 74 | 5 | 6 | ¥798 | 2 | 2","follows":"81","orders":"2","buyers":"2"},{"id":"csv-live-63","date":"2025-09-27","start_time":"20:16","title":"清华学霸自学方法 初高中","dur":"4分钟6秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":66,"source_text":"清华学霸自学方法 初高中 |   | 2025年09月27日 20:16 | 4分钟6秒 | 1 | 1 | 1 | 1分钟52秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-64","date":"2025-09-26","start_time":"20:13","title":"清华学霸自学方法 初高中","dur":"1小时41分钟1秒","views":"2898","peak":"126","hot":"93","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":67,"source_text":"清华学霸自学方法 初高中 |   | 2025年09月26日 20:13 | 1小时41分钟1秒 | 2898 | 3438 | 126 | 2分钟29秒 | 5100 | 265 | 68 | 93 | 93 | 7 | 7 | ¥0 | 0 | 0","follows":"93","orders":"0","buyers":"0"},{"id":"csv-live-65","date":"2025-09-25","start_time":"20:14","title":"清华学霸自学方法 初高中","dur":"1小时56分钟45秒","views":"2809","peak":"96","hot":"121","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":68,"source_text":"清华学霸自学方法 初高中 |   | 2025年09月25日 20:14 | 1小时56分钟45秒 | 2809 | 3268 | 96 | 2分钟40秒 | 5095 | 279 | 58 | 81 | 121 | 11 | 12 | ¥0 | 0 | 0","follows":"81","orders":"0","buyers":"0"},{"id":"csv-live-66","date":"2025-09-25","start_time":"20:03","title":"清华学霸自学方法 初高中","dur":"10分钟2秒","views":"0","peak":"0","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":69,"source_text":"清华学霸自学方法 初高中 |   | 2025年09月25日 20:03 | 10分钟2秒 | 0 | 0 | 0 | 0秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-67","date":"2025-09-25","start_time":"19:58","title":"清华学霸自学方法 初高中","dur":"3分钟57秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":70,"source_text":"清华学霸自学方法 初高中 |   | 2025年09月25日 19:58 | 3分钟57秒 | 1 | 2 | 1 | 1分钟7秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-68","date":"2025-09-23","start_time":"20:12","title":"清华学霸 初高中方法","dur":"1小时44分钟42秒","views":"2755","peak":"103","hot":"90","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":71,"source_text":"清华学霸 初高中方法 |   | 2025年09月23日 20:12 | 1小时44分钟42秒 | 2755 | 3140 | 103 | 1分钟58秒 | 2725 | 145 | 93 | 44 | 90 | 6 | 6 | ¥0 | 0 | 0","follows":"44","orders":"0","buyers":"0"},{"id":"csv-live-69","date":"2025-09-23","start_time":"20:06","title":"清华学霸 初高中方法","dur":"4分钟55秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":72,"source_text":"清华学霸 初高中方法 |   | 2025年09月23日 20:06 | 4分钟55秒 | 1 | 1 | 1 | 4分钟5秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-70","date":"2025-09-23","start_time":"19:44","title":"清华学霸 初高中方法","dur":"18分钟31秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":73,"source_text":"清华学霸 初高中方法 |   | 2025年09月23日 19:44 | 18分钟31秒 | 1 | 1 | 1 | 6分钟8秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-71","date":"2025-09-23","start_time":"19:42","title":"清华学霸 初高中方法","dur":"1分钟17秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":74,"source_text":"清华学霸 初高中方法 |   | 2025年09月23日 19:42 | 1分钟17秒 | 1 | 1 | 1 | 0秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-72","date":"2025-09-23","start_time":"19:17","title":"清华学霸 初高中方法","dur":"17分钟21秒","views":"3","peak":"3","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":75,"source_text":"清华学霸 初高中方法 |   | 2025年09月23日 19:17 | 17分钟21秒 | 3 | 4 | 3 | 6分钟28秒 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-73","date":"2025-09-22","start_time":"20:09","title":"清华学霸教你学习方法","dur":"1小时20分钟58秒","views":"1679","peak":"81","hot":"22","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":76,"source_text":"清华学霸教你学习方法 |   | 2025年09月22日 20:09 | 1小时20分钟58秒 | 1679 | 1958 | 81 | 2分钟13秒 | 2620 | 106 | 33 | 36 | 22 | 2 | 2 | ¥0 | 0 | 0","follows":"36","orders":"0","buyers":"0"},{"id":"csv-live-74","date":"2025-09-20","start_time":"20:13","title":"清华学霸教你自学","dur":"1小时33分钟7秒","views":"3458","peak":"164","hot":"100","gmv":"¥600","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":77,"source_text":"清华学霸教你自学 |   | 2025年09月20日 20:13 | 1小时33分钟7秒 | 3458 | 4005 | 164 | 2分钟15秒 | 4776 | 182 | 119 | 129 | 100 | 5 | 6 | ¥600 | 1 | 1","follows":"129","orders":"1","buyers":"1"},{"id":"csv-live-75","date":"2025-09-19","start_time":"20:26","title":"自学比补课强10倍 ","dur":"2小时10分钟6秒","views":"2812","peak":"98","hot":"72","gmv":"¥1200","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":78,"source_text":"自学比补课强10倍  |   | 2025年09月19日 20:26 | 2小时10分钟6秒 | 2812 | 3321 | 98 | 2分钟29秒 | 1436 | 306 | 77 | 65 | 72 | 5 | 24 | ¥1200 | 2 | 2","follows":"65","orders":"2","buyers":"2"},{"id":"csv-live-76","date":"2025-09-16","start_time":"19:58","title":"初高中学习方法 清华学霸指导","dur":"1小时55分钟26秒","views":"1685","peak":"69","hot":"506","gmv":"¥600","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":79,"source_text":"初高中学习方法 清华学霸指导 |   | 2025年09月16日 19:58 | 1小时55分钟26秒 | 1685 | 1946 | 69 | 2分钟29秒 | 11877 | 124 | 24 | 19 | 506 | 3 | 6 | ¥600 | 1 | 1","follows":"19","orders":"1","buyers":"1"},{"id":"csv-live-77","date":"2025-09-15","start_time":"20:26","title":"小初高家长都在听 学习方法","dur":"1小时40分钟14秒","views":"1742","peak":"81","hot":"21","gmv":"¥2400","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":80,"source_text":"小初高家长都在听 学习方法 |   | 2025年09月15日 20:26 | 1小时40分钟14秒 | 1742 | 2045 | 81 | 2分钟25秒 | 10286 | 142 | 24 | 32 | 21 | 1 | 1 | ¥2400 | 4 | 4","follows":"32","orders":"4","buyers":"4"},{"id":"csv-live-78","date":"2025-09-13","start_time":"22:42","title":"测试","dur":"16分钟41秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":81,"source_text":"测试 |   | 2025年09月13日 22:42 | 16分钟41秒 | 1 | 1 | 1 | 3分钟0秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-79","date":"2025-09-13","start_time":"20:01","title":"清华学霸学习方法 初高中家长都在听","dur":"1小时57分钟40秒","views":"2372","peak":"70","hot":"63","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":82,"source_text":"清华学霸学习方法 初高中家长都在听 |   | 2025年09月13日 20:01 | 1小时57分钟40秒 | 2372 | 2780 | 70 | 2分钟12秒 | 3960 | 205 | 54 | 41 | 63 | 5 | 5 | ¥0 | 0 | 0","follows":"41","orders":"0","buyers":"0"},{"id":"csv-live-80","date":"2025-09-13","start_time":"19:04","title":"训练","dur":"55分钟54秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":83,"source_text":"训练 |   | 2025年09月13日 19:04 | 55分钟54秒 | 1 | 1 | 1 | 54分钟20秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-81","date":"2025-09-12","start_time":"20:09","title":"清华学霸自学方法 初高中家长必听","dur":"1小时19分钟34秒","views":"1487","peak":"71","hot":"7","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":84,"source_text":"清华学霸自学方法 初高中家长必听 |   | 2025年09月12日 20:09 | 1小时19分钟34秒 | 1487 | 1719 | 71 | 2分钟4秒 | 5147 | 80 | 34 | 34 | 7 | 2 | 3 | ¥0 | 0 | 0","follows":"34","orders":"0","buyers":"0"},{"id":"csv-live-82","date":"2025-09-12","start_time":"19:29","title":"初高中自学方法","dur":"11分钟32秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":85,"source_text":"初高中自学方法 |   | 2025年09月12日 19:29 | 11分钟32秒 | 1 | 1 | 1 | 8分钟38秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-83","date":"2025-09-11","start_time":"20:11","title":"自学比补课强10倍","dur":"1小时53分钟14秒","views":"2162","peak":"69","hot":"23","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":86,"source_text":"自学比补课强10倍 |   | 2025年09月11日 20:11 | 1小时53分钟14秒 | 2162 | 2409 | 69 | 2分钟13秒 | 1379 | 114 | 35 | 47 | 23 | 3 | 3 | ¥0 | 0 | 0","follows":"47","orders":"0","buyers":"0"},{"id":"csv-live-84","date":"2025-09-11","start_time":"20:02","title":"小初高家长都在听 自学方法","dur":"5分钟55秒","views":"54","peak":"16","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":87,"source_text":"小初高家长都在听 自学方法 |   | 2025年09月11日 20:02 | 5分钟55秒 | 54 | 53 | 16 | 43秒 | 317 | 6 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-85","date":"2025-09-09","start_time":"20:13","title":"小初高开学规划","dur":"1小时53分钟26秒","views":"1799","peak":"53","hot":"22","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":88,"source_text":"小初高开学规划 |   | 2025年09月09日 20:13 | 1小时53分钟26秒 | 1799 | 1987 | 53 | 1分钟55秒 | 4296 | 72 | 22 | 18 | 22 | 2 | 2 | ¥0 | 0 | 0","follows":"18","orders":"0","buyers":"0"},{"id":"csv-live-86","date":"2025-09-08","start_time":"20:36","title":"自学比补课强10倍 清华学霸在线答疑","dur":"1小时24分钟22秒","views":"2353","peak":"95","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":89,"source_text":"自学比补课强10倍 清华学霸在线答疑 |   | 2025年09月08日 20:36 | 1小时24分钟22秒 | 2353 | 2671 | 95 | 1分钟34秒 | 1474 | 103 | 27 | 37 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"37","orders":"0","buyers":"0"},{"id":"csv-live-87","date":"2025-09-05","start_time":"20:01","title":"自学比补课强10倍","dur":"2小时23分钟7秒","views":"3009","peak":"111","hot":"11","gmv":"¥1800","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":90,"source_text":"自学比补课强10倍 |   | 2025年09月05日 20:01 | 2小时23分钟7秒 | 3009 | 3531 | 111 | 2分钟47秒 | 2346 | 315 | 51 | 75 | 11 | 3 | 3 | ¥1800 | 3 | 3","follows":"75","orders":"3","buyers":"3"},{"id":"csv-live-88","date":"2025-09-05","start_time":"18:33","title":"测试","dur":"1小时25分钟59秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":91,"source_text":"测试 |   | 2025年09月05日 18:33 | 1小时25分钟59秒 | 1 | 4 | 1 | 44分钟24秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-89","date":"2025-09-04","start_time":"20:08","title":"小初高学习方法 清华学霸分享","dur":"1小时29分钟25秒","views":"1442","peak":"58","hot":"105","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":92,"source_text":"小初高学习方法 清华学霸分享 |   | 2025年09月04日 20:08 | 1小时29分钟25秒 | 1442 | 1656 | 58 | 1分钟52秒 | 1661 | 65 | 21 | 17 | 105 | 5 | 5 | ¥0 | 0 | 0","follows":"17","orders":"0","buyers":"0"},{"id":"csv-live-90","date":"2025-09-02","start_time":"19:48","title":"清华学霸在线答疑","dur":"2小时17分钟50秒","views":"2270","peak":"63","hot":"44","gmv":"¥3000","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":93,"source_text":"清华学霸在线答疑 |   | 2025年09月02日 19:48 | 2小时17分钟50秒 | 2270 | 2714 | 63 | 2分钟30秒 | 2747 | 256 | 43 | 56 | 44 | 4 | 4 | ¥3000 | 5 | 5","follows":"56","orders":"5","buyers":"5"},{"id":"csv-live-91","date":"2025-09-01","start_time":"19:58","title":"自学比补课强10倍 小初高家长必听","dur":"2小时8分钟9秒","views":"2844","peak":"79","hot":"21","gmv":"¥2400","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":94,"source_text":"自学比补课强10倍 小初高家长必听 |   | 2025年09月01日 19:58 | 2小时8分钟9秒 | 2844 | 3221 | 79 | 1分钟50秒 | 1147 | 218 | 26 | 36 | 21 | 1 | 1 | ¥2400 | 4 | 4","follows":"36","orders":"4","buyers":"4"},{"id":"csv-live-92","date":"2025-09-01","start_time":"19:57","title":"测试","dur":"29秒","views":"1","peak":"0","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":95,"source_text":"测试 |   | 2025年09月01日 19:57 | 29秒 | 1 | 1 | 0 | 0秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-93","date":"2025-08-30","start_time":"20:17","title":"小初高妈妈都在听 清华自学方法","dur":"1小时52分钟19秒","views":"3992","peak":"129","hot":"267","gmv":"¥1200","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":96,"source_text":"小初高妈妈都在听 清华自学方法 |   | 2025年08月30日 20:17 | 1小时52分钟19秒 | 3992 | 4624 | 129 | 1分钟42秒 | 4033 | 277 | 75 | 100 | 267 | 7 | 14 | ¥1200 | 2 | 2","follows":"100","orders":"2","buyers":"2"},{"id":"csv-live-94","date":"2025-08-30","start_time":"20:11","title":"CESHI ","dur":"1分钟4秒","views":"1","peak":"0","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":97,"source_text":"CESHI  |   | 2025年08月30日 20:11 | 1分钟4秒 | 1 | 1 | 0 | 0秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-95","date":"2025-08-29","start_time":"19:59","title":"自学比补课强10倍 小初高妈妈都在听","dur":"2小时10分钟46秒","views":"4130","peak":"153","hot":"97","gmv":"¥9000","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":98,"source_text":"自学比补课强10倍 小初高妈妈都在听 |   | 2025年08月29日 19:59 | 2小时10分钟46秒 | 4130 | 4976 | 153 | 2分钟29秒 | 7530 | 409 | 122 | 113 | 97 | 6 | 9 | ¥9000 | 8 | 8","follows":"113","orders":"8","buyers":"8"},{"id":"csv-live-96","date":"2025-08-29","start_time":"19:43","title":"测试","dur":"9分钟35秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":99,"source_text":"测试 |   | 2025年08月29日 19:43 | 9分钟35秒 | 1 | 1 | 1 | 9分钟26秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-97","date":"2025-08-28","start_time":"20:04","title":"自学比补课强10倍 清华学霸答疑","dur":"2小时4分钟44秒","views":"3575","peak":"142","hot":"243","gmv":"¥4800","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":100,"source_text":"自学比补课强10倍 清华学霸答疑 |   | 2025年08月28日 20:04 | 2小时4分钟44秒 | 3575 | 4210 | 142 | 2分钟35秒 | 3665 | 390 | 97 | 102 | 243 | 15 | 18 | ¥4800 | 8 | 8","follows":"102","orders":"8","buyers":"8"},{"id":"csv-live-98","date":"2025-08-28","start_time":"19:14","title":"自学比补课强10倍 清华学霸答疑","dur":"49分钟56秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":101,"source_text":"自学比补课强10倍 清华学霸答疑 |   | 2025年08月28日 19:14 | 49分钟56秒 | 1 | 1 | 1 | 57分钟42秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-99","date":"2025-08-26","start_time":"20:00","title":"小初高妈妈都在听 自学方法","dur":"2小时13分钟58秒","views":"3889","peak":"258","hot":"145","gmv":"¥10800","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":102,"source_text":"小初高妈妈都在听 自学方法 |   | 2025年08月26日 20:00 | 2小时13分钟58秒 | 3889 | 4445 | 258 | 2分钟0秒 | 3237 | 259 | 60 | 66 | 145 | 7 | 7 | ¥10800 | 7 | 6","follows":"66","orders":"7","buyers":"6"},{"id":"csv-live-100","date":"2025-08-26","start_time":"19:41","title":"小初高妈妈都在听 自学方法","dur":"14分钟46秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":103,"source_text":"小初高妈妈都在听 自学方法 |   | 2025年08月26日 19:41 | 14分钟46秒 | 1 | 1 | 1 | 13分钟26秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-101","date":"2025-08-25","start_time":"20:07","title":"小初高妈妈都在听 清华学霸分享","dur":"1小时34分钟10秒","views":"3502","peak":"111","hot":"42","gmv":"¥600","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":104,"source_text":"小初高妈妈都在听 清华学霸分享 |   | 2025年08月25日 20:07 | 1小时34分钟10秒 | 3502 | 4011 | 111 | 1分钟42秒 | 2797 | 254 | 46 | 62 | 42 | 2 | 2 | ¥600 | 1 | 1","follows":"62","orders":"1","buyers":"1"},{"id":"csv-live-102","date":"2025-08-25","start_time":"19:58","title":"小初高妈妈都在听 清华学霸分享","dur":"4分钟20秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":105,"source_text":"小初高妈妈都在听 清华学霸分享 |   | 2025年08月25日 19:58 | 4分钟20秒 | 1 | 1 | 1 | 4分钟3秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-103","date":"2025-08-22","start_time":"20:06","title":"自学比补课强10倍 清华学霸答疑","dur":"1小时38分钟38秒","views":"4366","peak":"176","hot":"123","gmv":"¥1797","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":106,"source_text":"自学比补课强10倍 清华学霸答疑 |   | 2025年08月22日 20:06 | 1小时38分钟38秒 | 4366 | 5075 | 176 | 2分钟1秒 | 6985 | 435 | 83 | 123 | 123 | 9 | 9 | ¥1797 | 3 | 3","follows":"123","orders":"3","buyers":"3"},{"id":"csv-live-104","date":"2025-08-21","start_time":"20:03","title":"自学比补课强10倍 清华学霸答疑","dur":"2小时1分钟13秒","views":"3984","peak":"119","hot":"21","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":107,"source_text":"自学比补课强10倍 清华学霸答疑 |   | 2025年08月21日 20:03 | 2小时1分钟13秒 | 3984 | 4671 | 119 | 2分钟12秒 | 6475 | 219 | 55 | 59 | 21 | 1 | 1 | ¥0 | 0 | 0","follows":"59","orders":"0","buyers":"0"},{"id":"csv-live-105","date":"2025-08-21","start_time":"19:43","title":"自学比补课强10倍 清华学霸答疑","dur":"19分钟34秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":108,"source_text":"自学比补课强10倍 清华学霸答疑 |   | 2025年08月21日 19:43 | 19分钟34秒 | 1 | 1 | 1 | 21分钟11秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-106","date":"2025-08-20","start_time":"20:01","title":"自学比补课强10倍 清华学霸答疑","dur":"1小时58分钟30秒","views":"3549","peak":"122","hot":"126","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":109,"source_text":"自学比补课强10倍 清华学霸答疑 |   | 2025年08月20日 20:01 | 1小时58分钟30秒 | 3549 | 4181 | 122 | 2分钟14秒 | 3319 | 331 | 80 | 79 | 126 | 6 | 6 | ¥0 | 0 | 0","follows":"79","orders":"0","buyers":"0"},{"id":"csv-live-107","date":"2025-08-18","start_time":"20:04","title":"清华学霸在线答疑","dur":"1小时47分钟7秒","views":"3651","peak":"98","hot":"76","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":110,"source_text":"清华学霸在线答疑 |   | 2025年08月18日 20:04 | 1小时47分钟7秒 | 3651 | 4233 | 98 | 1分钟34秒 | 4974 | 195 | 63 | 71 | 76 | 6 | 6 | ¥0 | 0 | 0","follows":"71","orders":"0","buyers":"0"},{"id":"csv-live-108","date":"2025-08-18","start_time":"19:42","title":"测试","dur":"21分钟30秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":111,"source_text":"测试 |   | 2025年08月18日 19:42 | 21分钟30秒 | 1 | 1 | 1 | 24分钟11秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-109","date":"2025-08-16","start_time":"20:10","title":"自学比补课强10倍","dur":"1小时34分钟36秒","views":"3729","peak":"149","hot":"209","gmv":"¥1198","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":112,"source_text":"自学比补课强10倍 |   | 2025年08月16日 20:10 | 1小时34分钟36秒 | 3729 | 4357 | 149 | 2分钟5秒 | 7595 | 313 | 66 | 100 | 209 | 14 | 15 | ¥1198 | 2 | 2","follows":"100","orders":"2","buyers":"2"},{"id":"csv-live-110","date":"2025-08-16","start_time":"19:46","title":"自学比补课强10倍","dur":"23分钟40秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":113,"source_text":"自学比补课强10倍 |   | 2025年08月16日 19:46 | 23分钟40秒 | 1 | 1 | 1 | 24分钟35秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-111","date":"2025-08-15","start_time":"20:05","title":"自学比补课强10倍","dur":"1小时44分钟44秒","views":"4523","peak":"183","hot":"240","gmv":"¥4792","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":114,"source_text":"自学比补课强10倍 |   | 2025年08月15日 20:05 | 1小时44分钟44秒 | 4523 | 5297 | 183 | 2分钟13秒 | 5432 | 448 | 126 | 133 | 240 | 13 | 14 | ¥4792 | 8 | 8","follows":"133","orders":"8","buyers":"8"},{"id":"csv-live-112","date":"2025-08-15","start_time":"19:58","title":"自学比补课强10倍","dur":"7分钟28秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":115,"source_text":"自学比补课强10倍 |   | 2025年08月15日 19:58 | 7分钟28秒 | 1 | 1 | 1 | 7分钟12秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-113","date":"2025-08-14","start_time":"20:28","title":"自学比补课强10倍","dur":"1小时45分钟4秒","views":"4179","peak":"170","hot":"21","gmv":"¥2396","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":116,"source_text":"自学比补课强10倍 |   | 2025年08月14日 20:28 | 1小时45分钟4秒 | 4179 | 4843 | 170 | 1分钟59秒 | 2845 | 294 | 78 | 91 | 21 | 1 | 1 | ¥2396 | 4 | 4","follows":"91","orders":"4","buyers":"4"},{"id":"csv-live-114","date":"2025-08-13","start_time":"20:15","title":"自学比补课强10倍","dur":"1小时55分钟31秒","views":"5969","peak":"270","hot":"113","gmv":"¥599","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":117,"source_text":"自学比补课强10倍 |   | 2025年08月13日 20:15 | 1小时55分钟31秒 | 5969 | 7189 | 270 | 2分钟31秒 | 7041 | 580 | 159 | 250 | 113 | 9 | 9 | ¥599 | 1 | 1","follows":"250","orders":"1","buyers":"1"},{"id":"csv-live-115","date":"2025-08-11","start_time":"20:12","title":"自学比补课强10倍","dur":"1小时58分钟46秒","views":"6415","peak":"342","hot":"164","gmv":"¥1198","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":118,"source_text":"自学比补课强10倍 |   | 2025年08月11日 20:12 | 1小时58分钟46秒 | 6415 | 7687 | 342 | 2分钟44秒 | 7102 | 720 | 224 | 263 | 164 | 12 | 12 | ¥1198 | 2 | 2","follows":"263","orders":"2","buyers":"2"},{"id":"csv-live-116","date":"2025-08-09","start_time":"20:03","title":"自学比补课强10倍","dur":"2小时11分钟56秒","views":"4922","peak":"185","hot":"753","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":119,"source_text":"自学比补课强10倍 |   | 2025年08月09日 20:03 | 2小时11分钟56秒 | 4922 | 5996 | 185 | 2分钟54秒 | 24769 | 473 | 182 | 157 | 753 | 9 | 10 | ¥0 | 0 | 0","follows":"157","orders":"0","buyers":"0"},{"id":"csv-live-117","date":"2025-08-09","start_time":"19:33","title":"自学比补课强10倍","dur":"28分钟37秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":120,"source_text":"自学比补课强10倍 |   | 2025年08月09日 19:33 | 28分钟37秒 | 1 | 2 | 1 | 29分钟22秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-118","date":"2025-08-08","start_time":"20:15","title":"不补课 自学上名校","dur":"1小时43分钟8秒","views":"3735","peak":"106","hot":"89","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":121,"source_text":"不补课 自学上名校 |   | 2025年08月08日 20:15 | 1小时43分钟8秒 | 3735 | 4182 | 106 | 1分钟49秒 | 4968 | 405 | 41 | 38 | 89 | 5 | 5 | ¥0 | 0 | 0","follows":"38","orders":"0","buyers":"0"},{"id":"csv-live-119","date":"2025-08-05","start_time":"20:14","title":"自学比补课强10倍","dur":"2小时4分钟13秒","views":"4616","peak":"127","hot":"22","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":122,"source_text":"自学比补课强10倍 |   | 2025年08月05日 20:14 | 2小时4分钟13秒 | 4616 | 5481 | 127 | 2分钟18秒 | 4868 | 375 | 102 | 101 | 22 | 6 | 6 | ¥0 | 0 | 0","follows":"101","orders":"0","buyers":"0"},{"id":"csv-live-120","date":"2025-08-04","start_time":"20:11","title":"自学比补课强10倍","dur":"2小时2分钟52秒","views":"4924","peak":"165","hot":"76","gmv":"¥1198","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":123,"source_text":"自学比补课强10倍 |   | 2025年08月04日 20:11 | 2小时2分钟52秒 | 4924 | 5769 | 165 | 2分钟25秒 | 5020 | 388 | 130 | 143 | 76 | 5 | 6 | ¥1198 | 2 | 2","follows":"143","orders":"2","buyers":"2"},{"id":"csv-live-121","date":"2025-08-02","start_time":"20:00","title":"自学比补课强10倍","dur":"1小时43分钟53秒","views":"4954","peak":"181","hot":"93","gmv":"¥893","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":124,"source_text":"自学比补课强10倍 |   | 2025年08月02日 20:00 | 1小时43分钟53秒 | 4954 | 5759 | 181 | 1分钟57秒 | 7826 | 429 | 129 | 157 | 93 | 9 | 9 | ¥893 | 4 | 4","follows":"157","orders":"4","buyers":"4"},{"id":"csv-live-122","date":"2025-08-02","start_time":"19:51","title":"自学比补课强10倍","dur":"7分钟1秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":125,"source_text":"自学比补课强10倍 |   | 2025年08月02日 19:51 | 7分钟1秒 | 1 | 1 | 1 | 8分钟59秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-123","date":"2025-08-01","start_time":"20:02","title":"自学比补课强10倍 初高中家长必听","dur":"1小时55分钟52秒","views":"3396","peak":"196","hot":"120","gmv":"¥1895","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":126,"source_text":"自学比补课强10倍 初高中家长必听 |   | 2025年08月01日 20:02 | 1小时55分钟52秒 | 3396 | 4117 | 196 | 3分钟4秒 | 3594 | 442 | 109 | 86 | 120 | 8 | 9 | ¥1895 | 4 | 4","follows":"86","orders":"4","buyers":"4"},{"id":"csv-live-124","date":"2025-08-01","start_time":"19:51","title":"彩排","dur":"10分钟10秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":127,"source_text":"彩排 |   | 2025年08月01日 19:51 | 10分钟10秒 | 1 | 1 | 1 | 9分钟40秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-125","date":"2025-07-31","start_time":"19:55","title":"自学比补课强10倍","dur":"1小时59分钟48秒","views":"5451","peak":"177","hot":"192","gmv":"¥599","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":128,"source_text":"自学比补课强10倍 |   | 2025年07月31日 19:55 | 1小时59分钟48秒 | 5451 | 6440 | 177 | 2分钟12秒 | 14961 | 393 | 153 | 205 | 192 | 13 | 20 | ¥599 | 1 | 1","follows":"205","orders":"1","buyers":"1"},{"id":"csv-live-126","date":"2025-07-31","start_time":"19:20","title":"自学比补课强10倍","dur":"34分钟43秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":129,"source_text":"自学比补课强10倍 |   | 2025年07月31日 19:20 | 34分钟43秒 | 1 | 1 | 1 | 34分钟4秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-127","date":"2025-07-29","start_time":"20:11","title":"自学比补课强10倍","dur":"2小时16分钟8秒","views":"6873","peak":"270","hot":"375","gmv":"¥4492","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":130,"source_text":"自学比补课强10倍 |   | 2025年07月29日 20:11 | 2小时16分钟8秒 | 6873 | 8315 | 270 | 2分钟50秒 | 20692 | 812 | 320 | 326 | 375 | 22 | 23 | ¥4492 | 8 | 8","follows":"326","orders":"8","buyers":"8"},{"id":"csv-live-128","date":"2025-07-29","start_time":"19:44","title":"自学比补课强10倍","dur":"23分钟5秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":131,"source_text":"自学比补课强10倍 |   | 2025年07月29日 19:44 | 23分钟5秒 | 1 | 1 | 1 | 28分钟26秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-129","date":"2025-07-28","start_time":"20:12","title":"自学比补课强10倍","dur":"2小时26分钟22秒","views":"9387","peak":"366","hot":"181","gmv":"¥4291","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":132,"source_text":"自学比补课强10倍 |   | 2025年07月28日 20:12 | 2小时26分钟22秒 | 9387 | 11442 | 366 | 2分钟52秒 | 12800 | 805 | 381 | 470 | 181 | 14 | 15 | ¥4291 | 8 | 8","follows":"470","orders":"8","buyers":"8"},{"id":"csv-live-130","date":"2025-07-28","start_time":"19:37","title":"自学比补课强10倍","dur":"31分钟4秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":133,"source_text":"自学比补课强10倍 |   | 2025年07月28日 19:37 | 31分钟4秒 | 1 | 1 | 1 | 28分钟29秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-131","date":"2025-07-26","start_time":"20:08","title":"自学比补课强10倍","dur":"2小时1分钟14秒","views":"6142","peak":"275","hot":"243","gmv":"¥5085","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":134,"source_text":"自学比补课强10倍 |   | 2025年07月26日 20:08 | 2小时1分钟14秒 | 6142 | 7499 | 275 | 2分钟48秒 | 6336 | 536 | 183 | 247 | 243 | 14 | 15 | ¥5085 | 12 | 10","follows":"247","orders":"12","buyers":"10"},{"id":"csv-live-132","date":"2025-07-26","start_time":"15:38","title":"自学比补课强10倍 初高中家长必听","dur":"2小时6分钟23秒","views":"6258","peak":"228","hot":"185","gmv":"¥2592","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":135,"source_text":"自学比补课强10倍 初高中家长必听 |   | 2025年07月26日 15:38 | 2小时6分钟23秒 | 6258 | 7276 | 228 | 2分钟17秒 | 5598 | 429 | 150 | 229 | 185 | 9 | 9 | ¥2592 | 6 | 6","follows":"229","orders":"6","buyers":"6"},{"id":"csv-live-133","date":"2025-07-25","start_time":"20:09","title":"自学比补课强10倍","dur":"2小时19分钟57秒","views":"6086","peak":"178","hot":"263","gmv":"¥9372","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":136,"source_text":"自学比补课强10倍 |   | 2025年07月25日 20:09 | 2小时19分钟57秒 | 6086 | 7192 | 178 | 2分钟37秒 | 12020 | 617 | 174 | 245 | 263 | 17 | 17 | ¥9372 | 24 | 19","follows":"245","orders":"24","buyers":"19"},{"id":"csv-live-134","date":"2025-07-25","start_time":"19:24","title":"自学比补课强10倍","dur":"44分钟41秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":137,"source_text":"自学比补课强10倍 |   | 2025年07月25日 19:24 | 44分钟41秒 | 1 | 2 | 1 | 50分钟32秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-135","date":"2025-07-24","start_time":"20:04","title":"自学比补课强10倍","dur":"2小时5分钟20秒","views":"9140","peak":"324","hot":"437","gmv":"¥5880","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":138,"source_text":"自学比补课强10倍 |   | 2025年07月24日 20:04 | 2小时5分钟20秒 | 9140 | 10877 | 324 | 2分钟36秒 | 8870 | 840 | 331 | 468 | 437 | 28 | 33 | ¥5880 | 15 | 14","follows":"468","orders":"15","buyers":"14"},{"id":"csv-live-136","date":"2025-07-24","start_time":"18:29","title":"彩排","dur":"1小时34分钟19秒","views":"2","peak":"2","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":139,"source_text":"彩排 |   | 2025年07月24日 18:29 | 1小时34分钟19秒 | 2 | 3 | 2 | 50分钟6秒 | 0 | 2 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-137","date":"2025-07-22","start_time":"20:00","title":"自学比补课强10倍","dur":"2小时0分钟43秒","views":"7454","peak":"298","hot":"237","gmv":"¥3592","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":140,"source_text":"自学比补课强10倍 |   | 2025年07月22日 20:00 | 2小时0分钟43秒 | 7454 | 8923 | 298 | 2分钟28秒 | 8112 | 906 | 254 | 334 | 237 | 17 | 23 | ¥3592 | 8 | 8","follows":"334","orders":"8","buyers":"8"},{"id":"csv-live-138","date":"2025-07-22","start_time":"19:55","title":"自学比补课强10倍","dur":"1分钟59秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":141,"source_text":"自学比补课强10倍 |   | 2025年07月22日 19:55 | 1分钟59秒 | 1 | 1 | 1 | 2分钟8秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-139","date":"2025-07-21","start_time":"20:08","title":"自学比补课强10倍","dur":"1小时42分钟44秒","views":"9144","peak":"397","hot":"793","gmv":"¥11562","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":142,"source_text":"自学比补课强10倍 |   | 2025年07月21日 20:08 | 1小时42分钟44秒 | 9144 | 11121 | 397 | 2分钟25秒 | 13819 | 1198 | 353 | 503 | 793 | 54 | 56 | ¥11562 | 30 | 24","follows":"503","orders":"30","buyers":"24"},{"id":"csv-live-140","date":"2025-07-21","start_time":"19:40","title":"自学比补课强10倍","dur":"24分钟52秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":143,"source_text":"自学比补课强10倍 |   | 2025年07月21日 19:40 | 24分钟52秒 | 1 | 4 | 1 | 9分钟42秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-141","date":"2025-07-21","start_time":"18:48","title":"彩排","dur":"51分钟49秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":144,"source_text":"彩排 |   | 2025年07月21日 18:48 | 51分钟49秒 | 1 | 2 | 1 | 4分钟42秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-142","date":"2025-07-19","start_time":"20:03","title":"自学比补课强10倍","dur":"1小时52分钟40秒","views":"8593","peak":"333","hot":"338","gmv":"¥4187","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":145,"source_text":"自学比补课强10倍 |   | 2025年07月19日 20:03 | 1小时52分钟40秒 | 8593 | 10490 | 333 | 2分钟31秒 | 18563 | 888 | 355 | 407 | 338 | 23 | 28 | ¥4187 | 10 | 10","follows":"407","orders":"10","buyers":"10"},{"id":"csv-live-143","date":"2025-07-19","start_time":"17:18","title":"彩排","dur":"2小时45分钟0秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":146,"source_text":"彩排 |   | 2025年07月19日 17:18 | 2小时45分钟0秒 | 1 | 2 | 1 | 46分钟46秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-144","date":"2025-07-18","start_time":"20:00","title":"自学比补课强10倍","dur":"2小时0分钟22秒","views":"9329","peak":"373","hot":"300","gmv":"¥9869","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":147,"source_text":"自学比补课强10倍 |   | 2025年07月18日 20:00 | 2小时0分钟22秒 | 9329 | 11220 | 373 | 2分钟42秒 | 18191 | 977 | 392 | 507 | 300 | 22 | 22 | ¥9869 | 25 | 21","follows":"507","orders":"25","buyers":"21"},{"id":"csv-live-145","date":"2025-07-18","start_time":"19:41","title":"自学比补课强10倍","dur":"17分钟46秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":148,"source_text":"自学比补课强10倍 |   | 2025年07月18日 19:41 | 17分钟46秒 | 1 | 1 | 1 | 18分钟31秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-146","date":"2025-07-18","start_time":"18:47","title":"彩排","dur":"54分钟32秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":149,"source_text":"彩排 |   | 2025年07月18日 18:47 | 54分钟32秒 | 1 | 3 | 1 | 27分钟31秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-147","date":"2025-07-17","start_time":"19:30","title":"自学比补课强10倍","dur":"2小时0分钟20秒","views":"7003","peak":"269","hot":"483","gmv":"¥3593","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":150,"source_text":"自学比补课强10倍 |   | 2025年07月17日 19:30 | 2小时0分钟20秒 | 7003 | 8439 | 269 | 2分钟24秒 | 14995 | 724 | 290 | 362 | 483 | 29 | 29 | ¥3593 | 7 | 7","follows":"362","orders":"7","buyers":"7"},{"id":"csv-live-148","date":"2025-07-17","start_time":"18:10","title":"彩排","dur":"1小时20分钟16秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":151,"source_text":"彩排 |   | 2025年07月17日 18:10 | 1小时20分钟16秒 | 1 | 3 | 1 | 44分钟30秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-149","date":"2025-07-15","start_time":"20:31","title":"自学比补课强10倍 初高中家长必听","dur":"1小时58分钟54秒","views":"9966","peak":"383","hot":"336","gmv":"¥8083","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":152,"source_text":"自学比补课强10倍 初高中家长必听 |   | 2025年07月15日 20:31 | 1小时58分钟54秒 | 9966 | 11935 | 383 | 2分钟49秒 | 12726 | 959 | 424 | 500 | 336 | 24 | 27 | ¥8083 | 17 | 16","follows":"500","orders":"17","buyers":"16"},{"id":"csv-live-150","date":"2025-07-15","start_time":"20:25","title":"自学比补课强10倍 初高中家长必听","dur":"4分钟39秒","views":"2","peak":"2","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":153,"source_text":"自学比补课强10倍 初高中家长必听 |   | 2025年07月15日 20:25 | 4分钟39秒 | 2 | 2 | 2 | 1分钟23秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-151","date":"2025-07-14","start_time":"19:55","title":"自学比补课强10倍 初高中家长必听","dur":"2小时0分钟3秒","views":"12111","peak":"546","hot":"499","gmv":"¥8985","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":154,"source_text":"自学比补课强10倍 初高中家长必听 |   | 2025年07月14日 19:55 | 2小时0分钟3秒 | 12111 | 14541 | 546 | 2分钟40秒 | 14514 | 1255 | 609 | 806 | 499 | 33 | 36 | ¥8985 | 15 | 15","follows":"806","orders":"15","buyers":"15"},{"id":"csv-live-152","date":"2025-07-14","start_time":"19:34","title":"自学比补课强10倍 初高中家长必听","dur":"20分钟11秒","views":"3","peak":"3","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":155,"source_text":"自学比补课强10倍 初高中家长必听 |   | 2025年07月14日 19:34 | 20分钟11秒 | 3 | 3 | 3 | 8分钟54秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-153","date":"2025-07-12","start_time":"20:05","title":"自学比补课强10倍 初高中家长必听","dur":"2小时5分钟35秒","views":"6181","peak":"294","hot":"340","gmv":"¥3594","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":156,"source_text":"自学比补课强10倍 初高中家长必听 |   | 2025年07月12日 20:05 | 2小时5分钟35秒 | 6181 | 7329 | 294 | 2分钟32秒 | 14364 | 625 | 202 | 303 | 340 | 21 | 22 | ¥3594 | 6 | 6","follows":"303","orders":"6","buyers":"6"},{"id":"csv-live-154","date":"2025-07-12","start_time":"19:55","title":"自学比补课强10倍 初高中家长必听","dur":"9分钟4秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":157,"source_text":"自学比补课强10倍 初高中家长必听 |   | 2025年07月12日 19:55 | 9分钟4秒 | 1 | 1 | 1 | 4分钟27秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-155","date":"2025-07-11","start_time":"19:57","title":"自学比补课强10倍 初高中家长必听","dur":"2小时5分钟10秒","views":"7150","peak":"224","hot":"395","gmv":"¥4202.9","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":158,"source_text":"自学比补课强10倍 初高中家长必听 |   | 2025年07月11日 19:57 | 2小时5分钟10秒 | 7150 | 8507 | 224 | 2分钟11秒 | 15829 | 673 | 254 | 329 | 395 | 26 | 28 | ¥4202.9 | 8 | 8","follows":"329","orders":"8","buyers":"8"},{"id":"csv-live-156","date":"2025-07-11","start_time":"18:38","title":"彩排","dur":"1小时19分钟17秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":159,"source_text":"彩排 |   | 2025年07月11日 18:38 | 1小时19分钟17秒 | 1 | 2 | 1 | 40分钟57秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-157","date":"2025-07-10","start_time":"20:21","title":"初高中家长必听 自学比补课强10倍","dur":"1小时51分钟44秒","views":"5064","peak":"221","hot":"378","gmv":"¥4193","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":160,"source_text":"初高中家长必听 自学比补课强10倍 |   | 2025年07月10日 20:21 | 1小时51分钟44秒 | 5064 | 5996 | 221 | 2分钟4秒 | 12455 | 366 | 152 | 199 | 378 | 22 | 22 | ¥4193 | 7 | 7","follows":"199","orders":"7","buyers":"7"},{"id":"csv-live-158","date":"2025-07-10","start_time":"19:07","title":"测试","dur":"1小时11分钟17秒","views":"2","peak":"2","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":161,"source_text":"测试 |   | 2025年07月10日 19:07 | 1小时11分钟17秒 | 2 | 3 | 2 | 39分钟21秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-159","date":"2025-07-08","start_time":"20:12","title":"初高中家长必听 暑假自学方法","dur":"1小时37分钟28秒","views":"2259","peak":"90","hot":"44","gmv":"¥29.7","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":162,"source_text":"初高中家长必听 暑假自学方法 |   | 2025年07月08日 20:12 | 1小时37分钟28秒 | 2259 | 2667 | 90 | 2分钟12秒 | 8463 | 237 | 27 | 27 | 44 | 2 | 4 | ¥29.7 | 3 | 3","follows":"27","orders":"3","buyers":"3"},{"id":"csv-live-160","date":"2025-07-08","start_time":"19:38","title":"彩排","dur":"32分钟11秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":163,"source_text":"彩排 |   | 2025年07月08日 19:38 | 32分钟11秒 | 1 | 1 | 1 | 32分钟46秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-161","date":"2025-07-07","start_time":"20:16","title":"家长必听 初高中学习规划","dur":"1小时44分钟26秒","views":"2400","peak":"88","hot":"167","gmv":"¥657.4","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":164,"source_text":"家长必听 初高中学习规划 |   | 2025年07月07日 20:16 | 1小时44分钟26秒 | 2400 | 2786 | 88 | 2分钟3秒 | 5840 | 215 | 37 | 27 | 167 | 14 | 15 | ¥657.4 | 8 | 6","follows":"27","orders":"8","buyers":"6"},{"id":"csv-live-162","date":"2025-07-07","start_time":"20:04","title":"测试","dur":"10分钟36秒","views":"2","peak":"2","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":165,"source_text":"测试 |   | 2025年07月07日 20:04 | 10分钟36秒 | 2 | 4 | 2 | 6分钟20秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-163","date":"2025-07-05","start_time":"19:46","title":"初高中学习规划 家长必听","dur":"1小时43分钟52秒","views":"1758","peak":"71","hot":"130","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":166,"source_text":"初高中学习规划 家长必听 |   | 2025年07月05日 19:46 | 1小时43分钟52秒 | 1758 | 2033 | 71 | 2分钟25秒 | 3004 | 194 | 25 | 22 | 130 | 10 | 10 | ¥0 | 0 | 0","follows":"22","orders":"0","buyers":"0"},{"id":"csv-live-164","date":"2025-07-05","start_time":"19:36","title":"ceshi","dur":"9分钟13秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":167,"source_text":"ceshi |   | 2025年07月05日 19:36 | 9分钟13秒 | 1 | 1 | 1 | 8分钟52秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-165","date":"2025-07-04","start_time":"20:04","title":"初高中家长必听 暑假提分","dur":"1小时57分钟21秒","views":"1800","peak":"62","hot":"119","gmv":"¥1196","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":168,"source_text":"初高中家长必听 暑假提分 |   | 2025年07月04日 20:04 | 1小时57分钟21秒 | 1800 | 2087 | 62 | 2分钟30秒 | 8247 | 176 | 30 | 21 | 119 | 7 | 7 | ¥1196 | 4 | 4","follows":"21","orders":"4","buyers":"4"},{"id":"csv-live-166","date":"2025-07-04","start_time":"19:54","title":"测试","dur":"2分钟6秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":169,"source_text":"测试 |   | 2025年07月04日 19:54 | 2分钟6秒 | 1 | 1 | 1 | 1分钟58秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-167","date":"2025-07-04","start_time":"19:28","title":"彩排","dur":"8分钟16秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":170,"source_text":"彩排 |   | 2025年07月04日 19:28 | 8分钟16秒 | 1 | 1 | 1 | 7分钟5秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-168","date":"2025-07-03","start_time":"19:21","title":"初高中家长必听 学习方法规划","dur":"1小时51分钟15秒","views":"2124","peak":"79","hot":"160","gmv":"¥598","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":171,"source_text":"初高中家长必听 学习方法规划 |   | 2025年07月03日 19:21 | 1小时51分钟15秒 | 2124 | 2432 | 79 | 2分钟18秒 | 20063 | 170 | 21 | 15 | 160 | 10 | 11 | ¥598 | 2 | 1","follows":"15","orders":"2","buyers":"1"},{"id":"csv-live-169","date":"2025-07-03","start_time":"18:47","title":"彩排","dur":"34分钟14秒","views":"3","peak":"3","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":172,"source_text":"彩排 |   | 2025年07月03日 18:47 | 34分钟14秒 | 3 | 4 | 3 | 13分钟19秒 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-170","date":"2025-07-01","start_time":"22:17","title":"调整","dur":"28分钟46秒","views":"3","peak":"3","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":173,"source_text":"调整 |   | 2025年07月01日 22:17 | 28分钟46秒 | 3 | 5 | 3 | 25分钟45秒 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-171","date":"2025-07-01","start_time":"20:14","title":"初高中家长必听 学习方法规划","dur":"1小时27分钟41秒","views":"1665","peak":"56","hot":"202","gmv":"¥1196","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":174,"source_text":"初高中家长必听 学习方法规划 |   | 2025年07月01日 20:14 | 1小时27分钟41秒 | 1665 | 1833 | 56 | 1分钟46秒 | 1008 | 145 | 11 | 10 | 202 | 9 | 12 | ¥1196 | 4 | 2","follows":"10","orders":"4","buyers":"2"},{"id":"csv-live-172","date":"2025-07-01","start_time":"17:56","title":"彩排","dur":"2小时17分钟37秒","views":"2","peak":"2","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":175,"source_text":"彩排 |   | 2025年07月01日 17:56 | 2小时17分钟37秒 | 2 | 6 | 2 | 13分钟59秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-173","date":"2025-06-30","start_time":"20:11","title":"初高中家长都在听 初高学习方法","dur":"1小时59分钟14秒","views":"2169","peak":"89","hot":"171","gmv":"¥2691","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":176,"source_text":"初高中家长都在听 初高学习方法 |   | 2025年06月30日 20:11 | 1小时59分钟14秒 | 2169 | 2573 | 89 | 3分钟7秒 | 6723 | 267 | 42 | 47 | 171 | 9 | 11 | ¥2691 | 9 | 9","follows":"47","orders":"9","buyers":"9"},{"id":"csv-live-174","date":"2025-06-30","start_time":"19:56","title":"测","dur":"12分钟14秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":177,"source_text":"测 |   | 2025年06月30日 19:56 | 12分钟14秒 | 1 | 2 | 1 | 7分钟37秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-175","date":"2025-06-30","start_time":"18:03","title":"测试","dur":"1小时19分钟56秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":178,"source_text":"测试 |   | 2025年06月30日 18:03 | 1小时19分钟56秒 | 1 | 3 | 1 | 1小时45分钟20秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-176","date":"2025-06-28","start_time":"18:40","title":"初高中家长必听 暑假规划","dur":"1小时50分钟54秒","views":"1366","peak":"59","hot":"142","gmv":"¥299","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":179,"source_text":"初高中家长必听 暑假规划 |   | 2025年06月28日 18:40 | 1小时50分钟54秒 | 1366 | 1610 | 59 | 3分钟18秒 | 2957 | 111 | 22 | 25 | 142 | 8 | 9 | ¥299 | 1 | 1","follows":"25","orders":"1","buyers":"1"},{"id":"csv-live-177","date":"2025-06-28","start_time":"18:25","title":"测试","dur":"12分钟51秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":180,"source_text":"测试 |   | 2025年06月28日 18:25 | 12分钟51秒 | 1 | 1 | 1 | 7分钟51秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-178","date":"2025-06-27","start_time":"20:05","title":"初高中家长必听 暑假规划","dur":"1小时56分钟37秒","views":"2353","peak":"87","hot":"1308","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":181,"source_text":"初高中家长必听 暑假规划 |   | 2025年06月27日 20:05 | 1小时56分钟37秒 | 2353 | 2817 | 87 | 2分钟37秒 | 15022 | 141 | 54 | 48 | 1308 | 19 | 26 | ¥0 | 0 | 0","follows":"48","orders":"0","buyers":"0"},{"id":"csv-live-179","date":"2025-06-27","start_time":"19:56","title":"初高中家长必听 暑假规划方法","dur":"7分钟17秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":182,"source_text":"初高中家长必听 暑假规划方法 |   | 2025年06月27日 19:56 | 7分钟17秒 | 1 | 1 | 1 | 15分钟7秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-180","date":"2025-06-27","start_time":"18:28","title":"测","dur":"9分钟14秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":183,"source_text":"测 |   | 2025年06月27日 18:28 | 9分钟14秒 | 1 | 1 | 1 | 9分钟5秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-181","date":"2025-06-27","start_time":"18:03","title":"测试","dur":"23分钟32秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":184,"source_text":"测试 |   | 2025年06月27日 18:03 | 23分钟32秒 | 1 | 1 | 1 | 21分钟21秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-182","date":"2025-06-25","start_time":"20:25","title":"初高中家长必听 暑假规划方法","dur":"1小时23分钟53秒","views":"1410","peak":"49","hot":"103","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":185,"source_text":"初高中家长必听 暑假规划方法 |   | 2025年06月25日 20:25 | 1小时23分钟53秒 | 1410 | 1587 | 49 | 1分钟56秒 | 6433 | 122 | 9 | 11 | 103 | 7 | 7 | ¥0 | 0 | 0","follows":"11","orders":"0","buyers":"0"},{"id":"csv-live-183","date":"2025-06-25","start_time":"20:19","title":"ce","dur":"3分钟52秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":186,"source_text":"ce |   | 2025年06月25日 20:19 | 3分钟52秒 | 1 | 1 | 1 | 5分钟36秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-184","date":"2025-06-25","start_time":"20:11","title":"ceshi","dur":"6分钟59秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":187,"source_text":"ceshi |   | 2025年06月25日 20:11 | 6分钟59秒 | 1 | 1 | 1 | 7分钟43秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-185","date":"2025-06-25","start_time":"19:59","title":"初高中家长必听 清北学习方法","dur":"8分钟2秒","views":"2","peak":"2","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":188,"source_text":"初高中家长必听 清北学习方法 |   | 2025年06月25日 19:59 | 8分钟2秒 | 2 | 3 | 2 | 4分钟37秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-186","date":"2025-06-24","start_time":"18:03","title":"初高中家长必听 清北学习方法","dur":"1小时15分钟42秒","views":"1484","peak":"61","hot":"51","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":189,"source_text":"初高中家长必听 清北学习方法 |   | 2025年06月24日 18:03 | 1小时15分钟42秒 | 1484 | 1712 | 61 | 1分钟41秒 | 397 | 62 | 34 | 25 | 51 | 3 | 3 | ¥0 | 0 | 0","follows":"25","orders":"0","buyers":"0"},{"id":"csv-live-187","date":"2025-06-24","start_time":"17:58","title":"初高中家长必听 清北学习方法","dur":"3分钟52秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":190,"source_text":"初高中家长必听 清北学习方法 |   | 2025年06月24日 17:58 | 3分钟52秒 | 1 | 1 | 1 | 7分钟34秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-188","date":"2025-06-23","start_time":"20:22","title":"初高中家长必听 暑期规划","dur":"1小时28分钟57秒","views":"2036","peak":"74","hot":"312","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":191,"source_text":"初高中家长必听 暑期规划 |   | 2025年06月23日 20:22 | 1小时28分钟57秒 | 2036 | 2396 | 74 | 2分钟7秒 | 3421 | 167 | 39 | 41 | 312 | 19 | 22 | ¥0 | 0 | 0","follows":"41","orders":"0","buyers":"0"},{"id":"csv-live-189","date":"2025-06-23","start_time":"19:16","title":"粉丝团测试","dur":"1小时5分钟35秒","views":"3","peak":"2","hot":"21","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":192,"source_text":"粉丝团测试 |   | 2025年06月23日 19:16 | 1小时5分钟35秒 | 3 | 12 | 2 | 22分钟23秒 | 0 | 3 | 0 | 0 | 21 | 1 | 1 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-190","date":"2025-06-23","start_time":"17:40","title":"测试","dur":"32分钟59秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":193,"source_text":"测试 |   | 2025年06月23日 17:40 | 32分钟59秒 | 1 | 2 | 1 | 33分钟48秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-191","date":"2025-06-21","start_time":"20:08","title":"初高中家长必听 清北学习规划","dur":"1小时52分钟15秒","views":"1989","peak":"80","hot":"53","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":194,"source_text":"初高中家长必听 清北学习规划 |   | 2025年06月21日 20:08 | 1小时52分钟15秒 | 1989 | 2373 | 80 | 2分钟53秒 | 6678 | 283 | 29 | 34 | 53 | 4 | 5 | ¥0 | 0 | 0","follows":"34","orders":"0","buyers":"0"},{"id":"csv-live-192","date":"2025-06-21","start_time":"19:56","title":"ceshi","dur":"11分钟20秒","views":"3","peak":"2","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":195,"source_text":"ceshi |   | 2025年06月21日 19:56 | 11分钟20秒 | 3 | 3 | 2 | 6分钟56秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-193","date":"2025-06-20","start_time":"20:06","title":"小初高家长必听 清华学霸在线答疑","dur":"1小时20分钟25秒","views":"816","peak":"35","hot":"0","gmv":"¥9.9","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":196,"source_text":"小初高家长必听 清华学霸在线答疑 |   | 2025年06月20日 20:06 | 1小时20分钟25秒 | 816 | 948 | 35 | 2分钟15秒 | 2687 | 79 | 26 | 19 | 0 | 0 | 0 | ¥9.9 | 1 | 1","follows":"19","orders":"1","buyers":"1"},{"id":"csv-live-194","date":"2025-06-20","start_time":"19:07","title":"ceshi","dur":"57分钟1秒","views":"3","peak":"3","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":197,"source_text":"ceshi |   | 2025年06月20日 19:07 | 57分钟1秒 | 3 | 8 | 3 | 30分钟21秒 | 0 | 2 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-195","date":"2025-06-19","start_time":"20:06","title":"小初高家长必听  清华学霸在线答疑","dur":"1小时43分钟53秒","views":"1435","peak":"51","hot":"139","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":198,"source_text":"小初高家长必听  清华学霸在线答疑 |   | 2025年06月19日 20:06 | 1小时43分钟53秒 | 1435 | 1683 | 51 | 2分钟3秒 | 5519 | 117 | 11 | 28 | 139 | 5 | 9 | ¥0 | 0 | 0","follows":"28","orders":"0","buyers":"0"},{"id":"csv-live-196","date":"2025-06-19","start_time":"16:53","title":"测试","dur":"3小时12分钟34秒","views":"5","peak":"4","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":199,"source_text":"测试 |   | 2025年06月19日 16:53 | 3小时12分钟34秒 | 5 | 16 | 4 | 38分钟29秒 | 0 | 5 | 4 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-197","date":"2025-06-17","start_time":"19:54","title":"小初高家长必听 清华学霸在线答疑","dur":"1小时55分钟13秒","views":"1559","peak":"52","hot":"198","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":200,"source_text":"小初高家长必听 清华学霸在线答疑 |   | 2025年06月17日 19:54 | 1小时55分钟13秒 | 1559 | 1819 | 52 | 2分钟40秒 | 10702 | 188 | 32 | 29 | 198 | 4 | 6 | ¥0 | 0 | 0","follows":"29","orders":"0","buyers":"0"},{"id":"csv-live-198","date":"2025-06-17","start_time":"19:26","title":"测试","dur":"26分钟46秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":201,"source_text":"测试 |   | 2025年06月17日 19:26 | 26分钟46秒 | 1 | 2 | 1 | 28分钟10秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-199","date":"2025-06-14","start_time":"20:06","title":"小初高家长必听 清华学霸家庭教育","dur":"1小时34分钟16秒","views":"1366","peak":"47","hot":"182","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":202,"source_text":"小初高家长必听 清华学霸家庭教育 |   | 2025年06月14日 20:06 | 1小时34分钟16秒 | 1366 | 1570 | 47 | 2分钟5秒 | 2490 | 132 | 39 | 15 | 182 | 5 | 5 | ¥0 | 0 | 0","follows":"15","orders":"0","buyers":"0"},{"id":"csv-live-200","date":"2025-06-14","start_time":"20:05","title":"小初高家长必听 清华学霸家庭教育","dur":"7秒","views":"0","peak":"0","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":203,"source_text":"小初高家长必听 清华学霸家庭教育 |   | 2025年06月14日 20:05 | 7秒 | 0 | 0 | 0 | 0秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-201","date":"2025-06-14","start_time":"18:49","title":"测试2","dur":"1小时16分钟11秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":204,"source_text":"测试2 |   | 2025年06月14日 18:49 | 1小时16分钟11秒 | 1 | 1 | 1 | 1小时15分钟38秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-202","date":"2025-06-13","start_time":"19:55","title":"高认知家长必听 清华学霸访谈","dur":"1小时22分钟18秒","views":"964","peak":"41","hot":"51","gmv":"¥313.9","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":205,"source_text":"高认知家长必听 清华学霸访谈 |   | 2025年06月13日 19:55 | 1小时22分钟18秒 | 964 | 1135 | 41 | 2分钟19秒 | 486 | 46 | 17 | 9 | 51 | 2 | 2 | ¥313.9 | 4 | 3","follows":"9","orders":"4","buyers":"3"},{"id":"csv-live-203","date":"2025-06-13","start_time":"18:13","title":"测试2","dur":"1小时41分钟15秒","views":"2","peak":"2","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":206,"source_text":"测试2 |   | 2025年06月13日 18:13 | 1小时41分钟15秒 | 2 | 2 | 2 | 1小时2分钟32秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-204","date":"2025-06-13","start_time":"18:04","title":"测试","dur":"6分钟42秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":207,"source_text":"测试 |   | 2025年06月13日 18:04 | 6分钟42秒 | 1 | 1 | 1 | 7分钟54秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-205","date":"2025-06-12","start_time":"20:12","title":"清华学霸谈家庭教育","dur":"1小时25分钟23秒","views":"1377","peak":"63","hot":"129","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":208,"source_text":"清华学霸谈家庭教育 |   | 2025年06月12日 20:12 | 1小时25分钟23秒 | 1377 | 1581 | 63 | 2分钟30秒 | 1181 | 101 | 33 | 14 | 129 | 5 | 7 | ¥0 | 0 | 0","follows":"14","orders":"0","buyers":"0"},{"id":"csv-live-206","date":"2025-06-12","start_time":"17:58","title":"测试","dur":"2小时11分钟16秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":209,"source_text":"测试 |   | 2025年06月12日 17:58 | 2小时11分钟16秒 | 1 | 5 | 1 | 2小时6分钟58秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-207","date":"2025-06-11","start_time":"18:40","title":"测试","dur":"6分钟18秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":210,"source_text":"测试 |   | 2025年06月11日 18:40 | 6分钟18秒 | 1 | 1 | 1 | 7分钟2秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-208","date":"2025-06-09","start_time":"19:46","title":"高一高二家长必听 清北学霸面对面","dur":"1小时11分钟22秒","views":"896","peak":"37","hot":"33","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":211,"source_text":"高一高二家长必听 清北学霸面对面 |   | 2025年06月09日 19:46 | 1小时11分钟22秒 | 896 | 1045 | 37 | 1分钟59秒 | 2422 | 73 | 13 | 5 | 33 | 2 | 2 | ¥0 | 0 | 0","follows":"5","orders":"0","buyers":"0"},{"id":"csv-live-209","date":"2025-06-09","start_time":"19:39","title":"测试5","dur":"5分钟15秒","views":"2","peak":"2","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":212,"source_text":"测试5 |   | 2025年06月09日 19:39 | 5分钟15秒 | 2 | 2 | 2 | 4分钟22秒 | 0 | 2 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-210","date":"2025-06-09","start_time":"19:31","title":"测试3","dur":"57秒","views":"1","peak":"0","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":213,"source_text":"测试3 |   | 2025年06月09日 19:31 | 57秒 | 1 | 0 | 0 | 0秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-211","date":"2025-06-09","start_time":"19:27","title":"测试信号2","dur":"53秒","views":"1","peak":"0","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":214,"source_text":"测试信号2 |   | 2025年06月09日 19:27 | 53秒 | 1 | 1 | 0 | 27秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-212","date":"2025-06-09","start_time":"19:13","title":"高一高二家长必听 清北学霸面对面","dur":"5分钟19秒","views":"116","peak":"17","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":215,"source_text":"高一高二家长必听 清北学霸面对面 |   | 2025年06月09日 19:13 | 5分钟19秒 | 116 | 112 | 17 | 19秒 | 497 | 2 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-213","date":"2025-06-09","start_time":"19:12","title":"高一高二家长必听 清北学霸面对面","dur":"25秒","views":"0","peak":"0","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":216,"source_text":"高一高二家长必听 清北学霸面对面 |   | 2025年06月09日 19:12 | 25秒 | 0 | 0 | 0 | 0秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-214","date":"2025-06-09","start_time":"17:54","title":"6月8日开播测试","dur":"1小时16分钟28秒","views":"3","peak":"3","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":217,"source_text":"6月8日开播测试 |   | 2025年06月09日 17:54 | 1小时16分钟28秒 | 3 | 6 | 3 | 44分钟19秒 | 17 | 3 | 2 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-215","date":"2025-06-07","start_time":"20:02","title":"2025考情解析","dur":"1小时35分钟25秒","views":"1919","peak":"68","hot":"138","gmv":"¥691","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":218,"source_text":"2025考情解析 |   | 2025年06月07日 20:02 | 1小时35分钟25秒 | 1919 | 2281 | 68 | 2分钟15秒 | 2612 | 60 | 99 | 26 | 138 | 6 | 7 | ¥691 | 5 | 4","follows":"26","orders":"5","buyers":"4"},{"id":"csv-live-216","date":"2025-06-07","start_time":"19:38","title":"测试","dur":"22分钟17秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":219,"source_text":"测试 |   | 2025年06月07日 19:38 | 22分钟17秒 | 1 | 2 | 1 | 19分钟44秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-217","date":"2025-06-06","start_time":"20:50","title":"测试","dur":"43分钟35秒","views":"3","peak":"3","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":220,"source_text":"测试 |   | 2025年06月06日 20:50 | 43分钟35秒 | 3 | 6 | 3 | 20分钟32秒 | 0 | 0 | 3 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-218","date":"2025-06-06","start_time":"20:15","title":"初高中必听 备考冲刺","dur":"33分钟45秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":221,"source_text":"初高中必听 备考冲刺 |   | 2025年06月06日 20:15 | 33分钟45秒 | 1 | 3 | 1 | 24分钟15秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-219","date":"2025-06-05","start_time":"20:07","title":"初高中必听 备考冲刺","dur":"1小时16分钟15秒","views":"764","peak":"30","hot":"7","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":222,"source_text":"初高中必听 备考冲刺 |   | 2025年06月05日 20:07 | 1小时16分钟15秒 | 764 | 905 | 30 | 1分钟42秒 | 2328 | 57 | 9 | 8 | 7 | 1 | 1 | ¥0 | 0 | 0","follows":"8","orders":"0","buyers":"0"},{"id":"csv-live-220","date":"2025-06-04","start_time":"20:06","title":"初高中必听 考前冲刺","dur":"1小时42分钟1秒","views":"1013","peak":"36","hot":"5","gmv":"¥299","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":223,"source_text":"初高中必听 考前冲刺 |   | 2025年06月04日 20:06 | 1小时42分钟1秒 | 1013 | 1216 | 36 | 1分钟56秒 | 1120 | 60 | 8 | 14 | 5 | 1 | 3 | ¥299 | 1 | 1","follows":"14","orders":"1","buyers":"1"},{"id":"csv-live-221","date":"2025-06-03","start_time":"19:13","title":"备考冲刺 初高中妈妈必听（二）","dur":"59分钟17秒","views":"851","peak":"47","hot":"26","gmv":"¥299","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":224,"source_text":"备考冲刺 初高中妈妈必听（二） |   | 2025年06月03日 19:13 | 59分钟17秒 | 851 | 1006 | 47 | 2分钟5秒 | 3315 | 67 | 23 | 23 | 26 | 2 | 2 | ¥299 | 1 | 1","follows":"23","orders":"1","buyers":"1"},{"id":"csv-live-222","date":"2025-06-03","start_time":"17:29","title":"初高中提分秘诀 备考必听","dur":"49分钟22秒","views":"1049","peak":"55","hot":"0","gmv":"¥299","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":225,"source_text":"初高中提分秘诀 备考必听 |   | 2025年06月03日 17:29 | 49分钟22秒 | 1049 | 1191 | 55 | 1分钟13秒 | 69 | 58 | 13 | 23 | 0 | 0 | 0 | ¥299 | 1 | 1","follows":"23","orders":"1","buyers":"1"},{"id":"csv-live-223","date":"2025-06-02","start_time":"18:53","title":"清华学姐备考秘诀 初高中妈妈必听","dur":"2小时2分钟31秒","views":"1602","peak":"75","hot":"132","gmv":"¥598","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":226,"source_text":"清华学姐备考秘诀 初高中妈妈必听 |   | 2025年06月02日 18:53 | 2小时2分钟31秒 | 1602 | 1906 | 75 | 2分钟43秒 | 4092 | 78 | 37 | 22 | 132 | 5 | 6 | ¥598 | 2 | 2","follows":"22","orders":"2","buyers":"2"},{"id":"csv-live-224","date":"2025-06-01","start_time":"21:12","title":"初高中备考必听","dur":"41分钟31秒","views":"883","peak":"46","hot":"222","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":227,"source_text":"初高中备考必听 |   | 2025年06月01日 21:12 | 41分钟31秒 | 883 | 927 | 46 | 58秒 | 776 | 25 | 13 | 17 | 222 | 4 | 5 | ¥0 | 0 | 0","follows":"17","orders":"0","buyers":"0"},{"id":"csv-live-225","date":"2025-06-01","start_time":"18:35","title":"清华学姐备考秘诀 初高中冲刺必听","dur":"1小时58分钟0秒","views":"1302","peak":"67","hot":"227","gmv":"¥598","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":228,"source_text":"清华学姐备考秘诀 初高中冲刺必听 |   | 2025年06月01日 18:35 | 1小时58分钟0秒 | 1302 | 1580 | 67 | 2分钟58秒 | 950 | 100 | 17 | 19 | 227 | 3 | 3 | ¥598 | 2 | 2","follows":"19","orders":"2","buyers":"2"},{"id":"csv-live-226","date":"2025-05-31","start_time":"19:24","title":"语英提分 初高中家长必听","dur":"1小时23分钟12秒","views":"831","peak":"46","hot":"67","gmv":"¥598","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":229,"source_text":"语英提分 初高中家长必听 |   | 2025年05月31日 19:24 | 1小时23分钟12秒 | 831 | 1018 | 46 | 3分钟7秒 | 2957 | 77 | 20 | 5 | 67 | 3 | 3 | ¥598 | 2 | 2","follows":"5","orders":"2","buyers":"2"},{"id":"csv-live-227","date":"2025-05-30","start_time":"19:42","title":"数物考前冲刺 初高中家长必听","dur":"1小时9分钟3秒","views":"573","peak":"36","hot":"0","gmv":"¥598","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":230,"source_text":"数物考前冲刺 初高中家长必听 |   | 2025年05月30日 19:42 | 1小时9分钟3秒 | 573 | 703 | 36 | 2分钟25秒 | 1258 | 45 | 15 | 15 | 0 | 0 | 0 | ¥598 | 2 | 2","follows":"15","orders":"2","buyers":"2"},{"id":"csv-live-228","date":"2025-05-29","start_time":"19:48","title":"初高中家长必听 清北学霸面对面诊","dur":"1小时30分钟22秒","views":"777","peak":"35","hot":"37","gmv":"¥299","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":231,"source_text":"初高中家长必听 清北学霸面对面诊 |   | 2025年05月29日 19:48 | 1小时30分钟22秒 | 777 | 947 | 35 | 2分钟11秒 | 809 | 92 | 7 | 8 | 37 | 2 | 9 | ¥299 | 1 | 1","follows":"8","orders":"1","buyers":"1"},{"id":"csv-live-229","date":"2025-05-28","start_time":"18:58","title":"清北学霸一对一咨询 初高中家长必","dur":"1小时16分钟32秒","views":"555","peak":"36","hot":"0","gmv":"¥299","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":232,"source_text":"清北学霸一对一咨询 初高中家长必 |   | 2025年05月28日 18:58 | 1小时16分钟32秒 | 555 | 705 | 36 | 2分钟55秒 | 2191 | 75 | 24 | 4 | 0 | 0 | 0 | ¥299 | 1 | 1","follows":"4","orders":"1","buyers":"1"},{"id":"csv-live-230","date":"2025-05-28","start_time":"18:53","title":"清北学霸一对一诊断 家长必听","dur":"3分钟51秒","views":"2","peak":"2","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":233,"source_text":"清北学霸一对一诊断 家长必听 |   | 2025年05月28日 18:53 | 3分钟51秒 | 2 | 2 | 2 | 2分钟12秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-231","date":"2025-05-27","start_time":"18:48","title":"初高中家长必听 抓住提升机会","dur":"1小时7分钟29秒","views":"1171","peak":"49","hot":"221","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":234,"source_text":"初高中家长必听 抓住提升机会 |   | 2025年05月27日 18:48 | 1小时7分钟29秒 | 1171 | 1351 | 49 | 1分钟46秒 | 9316 | 33 | 19 | 20 | 221 | 4 | 4 | ¥0 | 0 | 0","follows":"20","orders":"0","buyers":"0"},{"id":"csv-live-232","date":"2025-05-27","start_time":"17:34","title":"彩排","dur":"1小时13分钟26秒","views":"2","peak":"2","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":235,"source_text":"彩排 |   | 2025年05月27日 17:34 | 1小时13分钟26秒 | 2 | 5 | 2 | 26分钟15秒 | 0 | 1 | 1 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-233","date":"2025-05-27","start_time":"11:13","title":"zi xu b","dur":"1小时10分钟55秒","views":"2","peak":"2","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":236,"source_text":"zi xu b |   | 2025年05月27日 11:13 | 1小时10分钟55秒 | 2 | 3 | 2 | 43分钟29秒 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-234","date":"2025-05-09","start_time":"19:59","title":"2025大考前家长必听的学习干货","dur":"1小时30分钟6秒","views":"928","peak":"61","hot":"0","gmv":"¥519.7","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":237,"source_text":"2025大考前家长必听的学习干货 |   | 2025年05月09日 19:59 | 1小时30分钟6秒 | 928 | 1136 | 61 | 4分钟4秒 | 4395 | 131 | 20 | 31 | 0 | 0 | 0 | ¥519.7 | 8 | 4","follows":"31","orders":"8","buyers":"4"},{"id":"csv-live-235","date":"2025-05-05","start_time":"20:22","title":"不补课提分 初高中家长必听","dur":"1小时35分钟7秒","views":"731","peak":"34","hot":"3","gmv":"¥107.9","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":238,"source_text":"不补课提分 初高中家长必听 |   | 2025年05月05日 20:22 | 1小时35分钟7秒 | 731 | 891 | 34 | 1分钟32秒 | 925 | 60 | 10 | 17 | 3 | 1 | 3 | ¥107.9 | 2 | 2","follows":"17","orders":"2","buyers":"2"},{"id":"csv-live-236","date":"2025-05-05","start_time":"18:06","title":"初高中不补课提分 家长必听","dur":"1小时55分钟31秒","views":"1386","peak":"51","hot":"0","gmv":"¥657.4","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":239,"source_text":"初高中不补课提分 家长必听 |   | 2025年05月05日 18:06 | 1小时55分钟31秒 | 1386 | 1688 | 51 | 2分钟49秒 | 9485 | 108 | 30 | 27 | 0 | 0 | 0 | ¥657.4 | 12 | 11","follows":"27","orders":"12","buyers":"11"},{"id":"csv-live-237","date":"2025-05-04","start_time":"20:04","title":"初高中学习 对症下药 在线答疑","dur":"1小时33分钟1秒","views":"698","peak":"35","hot":"3","gmv":"¥363.3","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":240,"source_text":"初高中学习 对症下药 在线答疑 |   | 2025年05月04日 20:04 | 1小时33分钟1秒 | 698 | 834 | 35 | 2分钟17秒 | 1724 | 54 | 13 | 11 | 3 | 1 | 1 | ¥363.3 | 10 | 9","follows":"11","orders":"10","buyers":"9"},{"id":"csv-live-238","date":"2025-05-04","start_time":"18:04","title":"初高中在线答疑 “对症下药”","dur":"1小时43分钟58秒","views":"1185","peak":"48","hot":"0","gmv":"¥725.7","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":241,"source_text":"初高中在线答疑 “对症下药” |   | 2025年05月04日 18:04 | 1小时43分钟58秒 | 1185 | 1451 | 48 | 2分钟20秒 | 4452 | 115 | 33 | 32 | 0 | 0 | 0 | ¥725.7 | 10 | 8","follows":"32","orders":"10","buyers":"8"},{"id":"csv-live-239","date":"2025-05-03","start_time":"20:14","title":"初高中学习 对症下药 在线答疑","dur":"1小时54分钟53秒","views":"1210","peak":"44","hot":"0","gmv":"¥961.2","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":242,"source_text":"初高中学习 对症下药 在线答疑 |   | 2025年05月03日 20:14 | 1小时54分钟53秒 | 1210 | 1487 | 44 | 2分钟46秒 | 1431 | 80 | 19 | 39 | 0 | 0 | 0 | ¥961.2 | 17 | 15","follows":"39","orders":"17","buyers":"15"},{"id":"csv-live-240","date":"2025-05-03","start_time":"18:33","title":"初高中学习 对症下药 在线答疑","dur":"1小时30分钟24秒","views":"1084","peak":"46","hot":"24","gmv":"¥245.5","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":243,"source_text":"初高中学习 对症下药 在线答疑 |   | 2025年05月03日 18:33 | 1小时30分钟24秒 | 1084 | 1295 | 46 | 2分钟0秒 | 1939 | 64 | 32 | 17 | 24 | 2 | 2 | ¥245.5 | 7 | 7","follows":"17","orders":"7","buyers":"7"},{"id":"csv-live-241","date":"2025-05-02","start_time":"20:08","title":"初高中学习 对症下药 在线答疑","dur":"1小时30分钟43秒","views":"1015","peak":"42","hot":"25","gmv":"¥715.7","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":244,"source_text":"初高中学习 对症下药 在线答疑 |   | 2025年05月02日 20:08 | 1小时30分钟43秒 | 1015 | 1221 | 42 | 2分钟5秒 | 1274 | 52 | 14 | 19 | 25 | 2 | 3 | ¥715.7 | 10 | 8","follows":"19","orders":"10","buyers":"8"},{"id":"csv-live-242","date":"2025-05-02","start_time":"18:05","title":"初高中学习 对症下药 在线答疑","dur":"1小时22分钟51秒","views":"980","peak":"46","hot":"0","gmv":"¥411.8","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":245,"source_text":"初高中学习 对症下药 在线答疑 |   | 2025年05月02日 18:05 | 1小时22分钟51秒 | 980 | 1176 | 46 | 2分钟10秒 | 1454 | 68 | 29 | 22 | 0 | 0 | 0 | ¥411.8 | 6 | 5","follows":"22","orders":"6","buyers":"5"},{"id":"csv-live-243","date":"2025-05-01","start_time":"18:35","title":"初高中学习“对症下药”，在线答疑","dur":"1小时23分钟22秒","views":"1125","peak":"55","hot":"21","gmv":"¥437.6","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":246,"source_text":"初高中学习“对症下药”，在线答疑 |   | 2025年05月01日 18:35 | 1小时23分钟22秒 | 1125 | 1409 | 55 | 2分钟31秒 | 3812 | 100 | 45 | 29 | 21 | 1 | 1 | ¥437.6 | 15 | 13","follows":"29","orders":"15","buyers":"13"},{"id":"csv-live-244","date":"2025-04-30","start_time":"18:16","title":"初高中在线答疑，“对症下药”","dur":"1小时55分钟22秒","views":"1467","peak":"61","hot":"53","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":247,"source_text":"初高中在线答疑，“对症下药” |   | 2025年04月30日 18:16 | 1小时55分钟22秒 | 1467 | 1781 | 61 | 3分钟3秒 | 6417 | 145 | 37 | 29 | 53 | 3 | 5 | ¥0 | 0 | 0","follows":"29","orders":"0","buyers":"0"},{"id":"csv-live-245","date":"2025-04-23","start_time":"18:51","title":"初高中家长必听 不补课提分分享","dur":"1小时49分钟21秒","views":"829","peak":"32","hot":"141","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":248,"source_text":"初高中家长必听 不补课提分分享 |   | 2025年04月23日 18:51 | 1小时49分钟21秒 | 829 | 1030 | 32 | 2分钟35秒 | 1519 | 104 | 12 | 11 | 141 | 2 | 3 | ¥0 | 0 | 0","follows":"11","orders":"0","buyers":"0"},{"id":"csv-live-246","date":"2025-04-23","start_time":"18:12","title":"123","dur":"10分钟25秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":249,"source_text":"123 |   | 2025年04月23日 18:12 | 10分钟25秒 | 1 | 1 | 1 | 11分钟10秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-247","date":"2025-04-22","start_time":"19:23","title":"初高中家长 考前必听 ","dur":"2小时0分钟29秒","views":"1088","peak":"43","hot":"66","gmv":"¥598","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":250,"source_text":"初高中家长 考前必听  |   | 2025年04月22日 19:23 | 2小时0分钟29秒 | 1088 | 1356 | 43 | 3分钟5秒 | 3851 | 163 | 24 | 17 | 66 | 3 | 3 | ¥598 | 2 | 1","follows":"17","orders":"2","buyers":"1"},{"id":"csv-live-248","date":"2025-04-22","start_time":"19:15","title":"初高中家长 考前必听 ","dur":"7分钟41秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":251,"source_text":"初高中家长 考前必听  |   | 2025年04月22日 19:15 | 7分钟41秒 | 1 | 2 | 1 | 6分钟17秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-249","date":"2025-04-22","start_time":"18:29","title":"初高中家长 考前必听 ","dur":"17分钟32秒","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":252,"source_text":"初高中家长 考前必听  |   | 2025年04月22日 18:29 | 17分钟32秒 | 1 | 3 | 1 | 12分钟15秒 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ¥0 | 0 | 0","follows":"0","orders":"0","buyers":"0"},{"id":"csv-live-250","date":"2025-04-20","start_time":"19:19","title":"初高中家长必听 不补课提分规划","dur":"1小时38分钟58秒","views":"1052","peak":"69","hot":"0","gmv":"¥318.9","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":253,"source_text":"初高中家长必听 不补课提分规划 |   | 2025年04月20日 19:19 | 1小时38分钟58秒 | 1052 | 1336 | 69 | 4分钟35秒 | 5115 | 189 | 29 | 18 | 0 | 0 | 0 | ¥318.9 | 2 | 2","follows":"18","orders":"2","buyers":"2"},{"id":"csv-live-251","date":"2025-04-12","start_time":"18:49","title":"初高中数物，听几分钟涨几分","dur":"2小时2分钟16秒","views":"1436","peak":"65","hot":"1264","gmv":"¥299","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":254,"source_text":"初高中数物，听几分钟涨几分 |   | 2025年04月12日 18:49 | 2小时2分钟16秒 | 1436 | 1826 | 65 | 3分钟53秒 | 12198 | 297 | 37 | 29 | 1264 | 4 | 5 | ¥299 | 1 | 1","follows":"29","orders":"1","buyers":"1"},{"id":"csv-live-252","date":"2025-04-11","start_time":"18:32","title":"初高中数、物学习方法，连麦答疑","dur":"3小时5分钟39秒","views":"1473","peak":"58","hot":"27","gmv":"¥299","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":255,"source_text":"初高中数、物学习方法，连麦答疑 |   | 2025年04月11日 18:32 | 3小时5分钟39秒 | 1473 | 1893 | 58 | 4分钟9秒 | 3549 | 275 | 32 | 33 | 27 | 3 | 6 | ¥299 | 1 | 1","follows":"33","orders":"1","buyers":"1"},{"id":"csv-live-253","date":"2025-04-10","start_time":"18:41","title":"初高中语、英学习方法，连麦答疑","dur":"2小时49分钟43秒","views":"1260","peak":"49","hot":"74","gmv":"¥338.8","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":256,"source_text":"初高中语、英学习方法，连麦答疑 |   | 2025年04月10日 18:41 | 2小时49分钟43秒 | 1260 | 1642 | 49 | 4分钟26秒 | 3742 | 146 | 19 | 25 | 74 | 5 | 6 | ¥338.8 | 3 | 3","follows":"25","orders":"3","buyers":"3"},{"id":"csv-live-254","date":"2025-04-08","start_time":"18:36","title":"初高中家长必听 高分冲刺秘籍","dur":"3小时20分钟2秒","views":"1180","peak":"60","hot":"260","gmv":"¥1813.9","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":257,"source_text":"初高中家长必听 高分冲刺秘籍 |   | 2025年04月08日 18:36 | 3小时20分钟2秒 | 1180 | 1648 | 60 | 6分钟21秒 | 18304 | 318 | 24 | 9 | 260 | 4 | 7 | ¥1813.9 | 7 | 4","follows":"9","orders":"7","buyers":"4"},{"id":"csv-live-255","date":"2025-04-06","start_time":"18:23","title":"语数英物 为家长免费连麦答疑","dur":"2小时29分钟16秒","views":"1493","peak":"71","hot":"52","gmv":"¥1853.7","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":258,"source_text":"语数英物 为家长免费连麦答疑 |   | 2025年04月06日 18:23 | 2小时29分钟16秒 | 1493 | 1957 | 71 | 4分钟45秒 | 11651 | 287 | 36 | 39 | 52 | 4 | 5 | ¥1853.7 | 9 | 6","follows":"39","orders":"9","buyers":"6"},{"id":"csv-live-256","date":"2025-04-06","start_time":"10:30","title":"语数英物 为家长免费连麦答疑","dur":"2小时25分钟12秒","views":"1349","peak":"57","hot":"191","gmv":"¥1235.8","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":259,"source_text":"语数英物 为家长免费连麦答疑 |   | 2025年04月06日 10:30 | 2小时25分钟12秒 | 1349 | 1804 | 57 | 4分钟31秒 | 2116 | 195 | 53 | 30 | 191 | 2 | 2 | ¥1235.8 | 6 | 5","follows":"30","orders":"6","buyers":"5"},{"id":"csv-live-257","date":"2025-04-04","start_time":"18:31","title":"期中关键时刻 家长必听","dur":"3小时21分钟53秒","views":"1758","peak":"76","hot":"82","gmv":"¥3966.6","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":260,"source_text":"期中关键时刻 家长必听 |   | 2025年04月04日 18:31 | 3小时21分钟53秒 | 1758 | 2454 | 76 | 5分钟18秒 | 14124 | 245 | 55 | 37 | 82 | 5 | 7 | ¥3966.6 | 17 | 13","follows":"37","orders":"17","buyers":"13"},{"id":"csv-live-258","date":"2025-04-03","start_time":"18:47","title":"不补课拿高分 学习分享","dur":"2小时56分钟47秒","views":"2155","peak":"98","hot":"432","gmv":"¥1554.7","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":261,"source_text":"不补课拿高分 学习分享 |   | 2025年04月03日 18:47 | 2小时56分钟47秒 | 2155 | 2862 | 98 | 5分钟1秒 | 18699 | 272 | 95 | 44 | 432 | 8 | 22 | ¥1554.7 | 8 | 5","follows":"44","orders":"8","buyers":"5"},{"id":"csv-live-259","date":"2025-04-02","start_time":"19:06","title":"初高中数物 酷状元秘籍，下周语英","dur":"2小时44分钟40秒","views":"1642","peak":"101","hot":"326","gmv":"¥99.5","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":262,"source_text":"初高中数物 酷状元秘籍，下周语英 |   | 2025年04月02日 19:06 | 2小时44分钟40秒 | 1642 | 2228 | 101 | 7分钟17秒 | 13698 | 415 | 82 | 42 | 326 | 7 | 10 | ¥99.5 | 5 | 4","follows":"42","orders":"5","buyers":"4"},{"id":"csv-live-260","date":"2025-04-01","start_time":"19:00","title":"初高中数物 酷状元秘籍 下周语英","dur":"2小时57分钟44秒","views":"1861","peak":"90","hot":"453","gmv":"¥1395","status":"报表数据","source_uri":"./business-data/live-history-original/视频号直播历史数据.csv","source_page":263,"source_text":"初高中数物 酷状元秘籍 下周语英 |   | 2025年04月01日 19:00 | 2小时57分钟44秒 | 1861 | 2479 | 90 | 6分钟3秒 | 7841 | 442 | 61 | 61 | 453 | 11 | 18 | ¥1395 | 14 | 10","follows":"61","orders":"14","buyers":"10"}]'),wd={kpis:[{id:1,label:"关注者",value:"22.4w",delta:"+1.2% 较上周",up:1,warm:0},{id:2,label:"昨日播放",value:"7123",delta:"+2.1%",up:1,warm:0},{id:3,label:"互动率",value:"0.58%",delta:"低于 0.85% 同行",up:0,warm:1},{id:4,label:"带货 GMV",value:"¥0",delta:"尚未破零",up:0,warm:1}],trend:[{id:1,d:"08/22",v:5210},{id:2,d:"08/23",v:6890},{id:3,d:"08/24",v:7100},{id:4,d:"08/25",v:8230},{id:5,d:"08/26",v:6450},{id:6,d:"08/27",v:7990},{id:7,d:"08/28",v:6011}],actions:[{id:1,num:1,tag:"下周",title:"下周该怎么做",body:'主线回归「涨粉」北极星：押 9 月开学季选题，前 3 秒统一改成"妈妈焦虑"钩子，把 40-49 岁妈妈（占 55%）的完播率从 31% 拉到 45% 以上。'},{id:2,num:2,tag:"下条",title:"下条视频怎么拍",body:'拍「开学前 7 天收心计划」：0-3s 抛"你家孩子这学期会掉队吗"，中段给 6 周节奏表 + "评论区扣 1 领模板"，结尾引导关注蹲直播。'},{id:3,num:3,tag:"下场",title:"下场直播改什么话题",body:'别讲"复习方法"（近 8 场互动最低），改聊"月考后家长怎么做"——40-49 妈妈最高频咨询话题前置，挂车卖 9 月学习规划表。'}],northstar:[{key:"fans",label:"涨粉",goal:"30w 粉",value:"22.4w",delta:"+287/日 · 还差 7.6w",pct:75},{key:"gmv",label:"GMV",goal:"1w/月",value:"¥0",delta:"尚未破零 · 先挂车",pct:0},{key:"play",label:"播放",goal:"1w/日",value:"6,011",delta:"-3.4% · 距目标 40%",pct:60}],gantt_weeks:[{id:1,t:"本周",d:"8/29",cur:1},{id:2,t:"W36",d:"9/5",cur:0},{id:3,t:"W37",d:"9/12",cur:0},{id:4,t:"W38",d:"9/19",cur:0}],gantt:[{id:1,lane:"短视频 · 选题",items:[{name:"开学收心 · 前3秒钩子",s:0,e:0,t:"video"},{name:"新学期第一周怎么过",s:1,e:1,t:"video"},{name:"9 月自律清单",s:2,e:2,t:"video"},{name:"第一次月考怎么准备",s:3,e:3,t:"video"}]},{id:2,lane:"短视频 · 脚本",items:[{name:"收心计划脚本",s:0,e:0,t:"draft"},{name:"新学期规划脚本",s:1,e:1,t:"draft"},{name:"月考准备脚本",s:3,e:3,t:"draft"}]},{id:3,lane:"短视频 · 拍摄发布",items:[{name:"收心计划（发布）",s:0,e:1,t:"video"},{name:"新学期规划（发布）",s:2,e:2,t:"video"}]},{id:4,lane:"直播 · 选题脚本",items:[{name:"暑假收心专场",s:0,e:0,t:"live"},{name:"新学期第一场",s:1,e:1,t:"live"},{name:"月考答疑专场",s:3,e:3,t:"live"}]},{id:5,lane:"直播 · 开播",items:[{name:"收心专场开播",s:0,e:0,t:"live"},{name:"新学期开播",s:1,e:1,t:"live"}]}],portraits:[{id:1,title:"年龄分布",unit:"%",data:[["40-49",55.11],["30-39",24.34],["18-29",12.45],["50+",8.1]]},{id:2,title:"地域 TOP 5",unit:"%",data:[["广东",14.67],["江苏",8.92],["山东",7.85],["浙江",6.73],["四川",5.92]]},{id:3,title:"性别",unit:"%",data:[["女",56.11],["男",43.89]]}],top_videos:[{id:13,title:"考清华是因为努力还是天赋",dur:"00:47",likes:"6.8w",tag:"热门"},{id:14,title:"优优的学习方法被新华社转发",dur:"01:05",likes:"8.8k",tag:"里程碑"},{id:15,title:"高中生压力大，送给他这3句话",dur:"00:54",likes:"5.6k",tag:"情感"},{id:16,title:"清华生活vlog：优优学姐的一天",dur:"02:21",likes:"4.4k",tag:"日常"},{id:17,title:"英语上140，有哪几个步骤",dur:"01:12",likes:"3.9k",tag:"干货"},{id:18,title:"高一学生是怎样毁掉自己的",dur:"00:37",likes:"2.1k",tag:"避坑"}]},kd={trunks:[{key:"all",name:"全部",desc:"知识库所有文件",grp:null},{key:"video.script",name:"短视频脚本",desc:"脚本合集 / 选题",grp:"短视频"},{key:"video.calendar",name:"选题日历",desc:"全年教育节点",grp:"短视频"},{key:"video.hot",name:"热点",desc:"实时热点 / 政策",grp:"短视频"},{key:"video.bench",name:"对标爆款",desc:"对标账号 / 爆款",grp:"短视频"},{key:"live.script",name:"直播脚本",desc:"直播脚本模板",grp:"直播"},{key:"live.summary",name:"直播复盘",desc:"复盘 / 高光片段",grp:"直播"},{key:"live.sales",name:"销售记录",desc:"GMV / 转化明细",grp:"直播"}],files:[{id:"f1",trunk:"video.script",name:"短视频脚本库（187 个脚本合集）",src:"feishu",url:"https://caocp410jp.feishu.cn/docx/WoKwdMyBYoIQpqxQH32cUVqmnic",time:"更新于 09-01",meta:"飞书文档 · 187 条"},{id:"f2",trunk:"live.summary",name:"直播复盘（含销售记录）",src:"feishu",url:"https://caocp410jp.feishu.cn/docx/E6Vsd31qDoO9VXxAyQWcbFH8n4b",time:"更新于 08-25",meta:"飞书文档 · 12 场"},{id:"f3",trunk:"live.script",name:"直播脚本模板",src:"feishu",url:"https://caocp410jp.feishu.cn/docx/OqMDd8DI0ouQdwxv5WlcWzqOnNg",time:"更新于 08-25",meta:"飞书文档 · 3 套"},{id:"f4",trunk:"video.calendar",name:"全年教育节点日历",src:"local",url:null,time:"内置",meta:"12 个月 · 36 条选题"},{id:"f5",trunk:"video.hot",name:"教育热点榜（可接 ima）",src:"ima",url:null,time:"实时",meta:"5 条 · 政策/热点"},{id:"f6",trunk:"video.bench",name:"对标账号监控库",src:"local",url:null,time:"更新于 昨日",meta:"3 监控 + 2 发现"},{id:"f7",trunk:"video.bench",name:"对标爆款抓取",src:"local",url:null,time:"更新于 昨日",meta:"12 条爆款"},{id:"f8",trunk:"video.script",name:"选题拆脚本记录",src:"local",url:null,time:"持续更新",meta:"来自 WIKI/对标"},{id:"f9",trunk:"video.hot",name:"高考志愿填报资料包",src:"ima",url:null,time:"6 月节点",meta:"ima 知识库"},{id:"f10",trunk:"video.calendar",name:"新教材改版解读",src:"local",url:null,time:"9 月节点",meta:"选题素材"},{id:"f11",trunk:"live.summary",name:"直播高光片段（待剪辑）",src:"local",url:null,time:"更新于 08-13",meta:"8 段素材"},{id:"f12",trunk:"video.script",name:"爆款钩子改写合集",src:"local",url:null,time:"持续更新",meta:"23 条钩子"},{id:"f13",trunk:"live.sales",name:"直播销售记录（11 月明细）",src:"local",url:null,time:"更新于 11-15",meta:"8 场 · GMV/转化"},{id:"f14",trunk:"video.script",name:"9 月开学季脚本模板",src:"local",url:null,time:"09-01",meta:"4 个主题分支"},{id:"f15",trunk:"video.script",name:"年终盘点脚本（家长/学生向）",src:"local",url:null,time:"12-15",meta:"6 个主题"},{id:"f16",trunk:"live.script",name:"11-13 高成交场复刻话术",src:"local",url:null,time:"11-14",meta:"话术 + 挂车方案"},{id:"f17",trunk:"video.hot",name:"高考政策跟踪表",src:"ima",url:null,time:"实时",meta:"教育部门官网 · 抓取"},{id:"f18",trunk:"live.summary",name:"直播场次健康度月报",src:"local",url:null,time:"每月",meta:"8 项指标 · 周对比"}],calendar:[{id:1,m:"1月",type:"假期",name:"寒假弯道超车",current:0,topics:[{t:"寒假计划模板（6周节奏）",why:"家长搜索量 +180%"},{t:"薄弱学科补救清单",why:"评论高频痛点"},{t:"春节家庭学习氛围",why:"情感共鸣 + 完播高"}]},{id:2,m:"2月",type:"开学",name:"春季开学·一轮启动",current:0,topics:[{t:"新学期第一周怎么过",why:"家长焦虑高峰"},{t:"一轮复习时间表",why:"高三刚需"},{t:"错题本使用方法",why:"评论高频"}]},{id:3,m:"3月",type:"考试",name:"月考·一模",current:0,topics:[{t:"月考复盘模板",why:"刚需工具"},{t:"一模冲刺 30 天",why:"高三转化高峰"},{t:"数学大题答题套路",why:"高互动选题"}]},{id:4,m:"4月",type:"考试",name:"期中考试",current:0,topics:[{t:"期中前 7 天逆袭计划",why:"搜索量 +220%"},{t:"家长如何应对期中考",why:"C 端共鸣"},{t:"语文作文素材包",why:"高收藏率"}]},{id:5,m:"5月",type:"冲刺",name:"二轮复习·模考",current:0,topics:[{t:"二轮重点题型精讲",why:"刚需提分"},{t:"模考心理调节",why:"评论高频"},{t:"理综答题节奏",why:"干货必备"}]},{id:6,m:"6月",type:"考试",name:"高考·中考季",current:0,topics:[{t:"高考前 3 天清单",why:"搜索量 x10"},{t:"高考志愿填报指南",why:"强转化节点"},{t:"中考家长陪伴指南",why:"C 端共鸣"}]},{id:7,m:"7月",type:"假期",name:"暑假·新高一衔接",current:0,topics:[{t:"新高一衔接计划",why:"衔接期痛点"},{t:"暑假自律表",why:"家长刚需"},{t:"中考后心理过渡",why:"情感刚需"}]},{id:8,m:"8月",type:"开学",name:"暑假收心·秋季开学",current:1,topics:[{t:"开学前 7 天收心计划",why:"当下最高搜索"},{t:"新学期第一天怎么过",why:"C 端共鸣"},{t:"高三一轮启动清单",why:"高三家长刚需"}]},{id:9,m:"9月",type:"开学",name:"秋季学期·月考",current:0,topics:[{t:"第一次月考怎么准备",why:"高一/高三通用"},{t:"9 月自律清单",why:"C 端共鸣"},{t:"一轮复习节奏表",why:"高三刚需"}]},{id:10,m:"10月",type:"考试",name:"月考·期中",current:0,topics:[{t:"期中考前 14 天计划",why:"搜索量高峰"},{t:"理综/文综答题套路",why:"干货提分"},{t:"家长如何与孩子沟通",why:"情感共鸣"}]},{id:11,m:"11月",type:"考试",name:"期中考试·一模",current:0,topics:[{t:"一模冲刺 30 天",why:"强转化节点"},{t:"期中复盘模板",why:"刚需工具"},{t:"数学压轴题套路",why:"高完播"}]},{id:12,m:"12月",type:"冲刺",name:"期末冲刺·模考",current:0,topics:[{t:"期末前 14 天逆袭",why:"搜索量高峰"},{t:"期末复习时间表",why:"刚需工具"},{t:"一模心理调节",why:"情感刚需"}]}],hotspots:[{id:1,t:"教育部新规：AI 进课堂",tag:"政策",ts:"2h",cls:"green"},{id:2,t:"防沉迷新规出台",tag:"热点",ts:"5h",cls:"warn"},{id:3,t:"2026 高考报名开始",tag:"政策",ts:"1d",cls:"green"},{id:4,t:"新高考 3+1+2 落地",tag:"政策",ts:"2d",cls:"green"},{id:5,t:"清华北大强基计划",tag:"热点",ts:"3d",cls:"warn"},{id:6,t:"中考分流新规，家长焦虑",tag:"热点",ts:"6h",cls:"warn"},{id:7,t:"高考数学试卷结构改革",tag:"政策",ts:"12h",cls:"green"},{id:8,t:"清华开学典礼回放刷屏",tag:"热点",ts:"1d",cls:"green"},{id:9,t:"985 高校新增 AI 专业",tag:"热点",ts:"2d",cls:"green"},{id:10,t:"教育部禁教师有偿补课",tag:"政策",ts:"3d",cls:"warn"}]},xd=JSON.parse('{"sessions":[{"date":"2025-11-15","title":"清华学霸分享 初中...","dur":"1h58m29s","views":"3449","peak":"140","hot":"3729","gmv":"¥0","status":"未开播","visual":{"light":"台灯暖光","setup":"卧室书桌 + 绿植","body":"白T恤·盘腿","gesture":"讲题时手指点习题册","role":"单人主播","energy":"平稳"},"source_text":"Day119-11.15(周六)\\n•\\n直播时间:答疑+塑品(两轮)\\n🎁\\n•数据:\\n🦋 1h57m in;观看人数3449,观看时⻓2m in17s,最高在线131,平均在线75,新增关\\n注91;粉丝占比31.8% \\n▪\\n3729\\n抖抖观看人数1343,最高在线25,平均在线15,平均时⻓44s,新增粉丝23;\\n▪\\n199\\n•\\n脚本&直播总结:\\n◦\\n和拍下的家⻓互动、念名字有效","source_page":73,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=73","record_day":119},{"date":"2025-11-14","title":"清华学霸分享 初中...","dur":"1h57m48s","views":"2863","peak":"118","hot":"21","gmv":"¥0","status":"已结束","visual":{"light":"白炽灯","setup":"书桌前","body":"白衬衫","gesture":"双手交叉抱胸","role":"单人主播","energy":"略疲"},"source_text":"Day118-11.14(周五)\\n•\\n直播时间:答疑+塑品(两轮)\\n🎁\\n•数据:\\n🦋 1h57m in;观看人数2863,观看时⻓2m in21s,最高在线118,平均在线65,新增关\\n注70;粉丝占比31.8% \\n▪\\n2962\\n抖抖观看人数1262,最高在线23,平均在线15,平均时⻓46s,新增粉丝17;\\n▪\\n199\\n•\\n脚本&直播总结:\\n◦\\n拍了以后要说怎么听","source_page":73,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=73","record_day":118},{"date":"2025-11-13","title":"清华学霸分享 初中...","dur":"1h49m56s","views":"3171","peak":"143","hot":"131","gmv":"¥3930","status":"已结束","visual":{"light":"正面日光灯","setup":"书桌 + 黑板贴纸","body":"黑框眼镜·白T恤","gesture":"拿笔指黑板","role":"单人"},"source_text":"Day117-11.13(周四)\\n•\\n直播时间:答疑+塑品(两轮)\\n🎁\\n•数据:\\n🦋 1h49m in;观看人数3171,观看时⻓2m in20s,最高在线143,平均在线75,新增关\\n注78;粉丝占比32.7% \\n▪\\n3930\\n抖抖观看人数1262,最高在线23,平均在线15,平均时⻓46s,新增粉丝17;\\n▪\\n599\\n•\\n脚本&直播总结:\\n◦\\n转化比较差\\n◦\\n一场数学一场英语,可能对转化有帮助","source_page":72,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=72","record_day":117},{"date":"2025-11-11","title":"清华学霸分享 初中...","dur":"1h52m53s","views":"2236","peak":"109","hot":"46","gmv":"¥1395","status":"已结束","visual":{"light":"暖光台灯","setup":"书桌","body":"盘发·白T","gesture":"比划举例","role":"单人"},"source_text":"Day116-11.11(周二)\\n•\\n直播时间:答疑+塑品(两轮)\\n🎁\\n•数据:\\n🦋 1h51m in;观看人数2236,观看时⻓2m in42s,最高在线109,平均在线58,新增关\\n注61;粉丝占比32.6% \\n▪\\n1395\\n抖抖观看人数1268,最高在线26,平均在线16,平均时⻓46s,新增粉丝15;\\n▪\\n0\\n•\\n脚本&直播总结:\\n◦\\n转化比较差","source_page":72,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=72","record_day":116},{"date":"2025-11-10","title":"清华学霸分享 初中...","dur":"1h51m24s","views":"3147","peak":"127","hot":"42","gmv":"¥199","status":"已结束","visual":{"light":"偏暗暖光","setup":"背景书墙","body":"米色针织衫","gesture":"托腮讲解","role":"单人","energy":"缓"},"source_text":"Day115-11.10(周一)\\n•\\n直播时间:答疑+塑品(两轮)\\n🎁\\n•数据:\\n🦋 1h51m in;观看人数3147,观看时⻓2m in27s,最高在线127,平均在线77,新增关\\n注105;粉丝占比25.8% \\n▪\\n199+369=568\\n抖抖观看人数691,最高在线22,平均在线13,平均时⻓1m in22s,新增粉丝6;\\n▪\\n597\\n•\\n脚本&直播总结:\\n◦\\n转化比较差","source_page":71,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=71","record_day":115},{"date":"2025-11-08","title":"清华学霸分享 初中...","dur":"1h41m57s","views":"2645","peak":"121","hot":"106","gmv":"¥2531","status":"已结束","visual":{"light":"白光","setup":"书桌+绿植","body":"高马尾·蓝条纹衬衫","gesture":"侧头看屏","role":"单人"},"source_text":"Day114-11.8(周六)\\n•\\n直播时间:答疑+塑品(两轮)\\n🎁\\n•数据:\\n🦋 1h41m in;观看人数2645,观看时⻓2m in24s,最高在线119,平均在线70,新增关\\n注57;粉丝占比33.2% \\n▪\\n2531\\n抖抖观看人数496,最高在线19,平均在线9,平均时⻓1m in14s,新增粉丝7;\\n▪\\n199\\n•\\n脚本&直播总结:\\n◦\\n调整数学\\n◦\\n数学转化率比较高、家⻓刚需\\n◦\\n数学讲两遍干货,比答疑效果好","source_page":71,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=71","record_day":114},{"date":"2025-11-07c","title":"ceshi","dur":"49m18s","views":"1","peak":"1","hot":"0","gmv":"¥0","status":"测流","visual":{"light":"白","setup":"白墙","body":"黑T恤","gesture":"试光线","role":"单人","energy":"测试"}},{"date":"2025-11-07","title":"清华学霸分享 初中...","dur":"1h52m42s","views":"2599","peak":"136","hot":"58","gmv":"¥597","status":"已结束","visual":{"light":"顶灯偏冷","setup":"客厅书桌","body":"白衬衫","gesture":"翻习题册","role":"单人","energy":"较好"},"source_text":"Day113-11.7(周五)\\n•\\n直播时间:答疑+塑品(两轮)\\n🎁\\n•数据:\\n🦋 1h52m in;观看人数2596,观看时⻓2m in12s,最高在线136,平均在线59,新增关\\n注78;粉丝占比28.8% \\n▪\\n597\\n抖抖观看人数495,最高在线19,平均在线9,平均时⻓1m in15s,新增粉丝6;\\n▪\\n897\\n•\\n脚本&直播总结:\\n◦\\n答疑回答:不要皱眉\\n◦\\n听稿会","source_page":70,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=70","record_day":113},{"date":"2025-11-06","title":"11月6日 · 咨询与课程直播","dur":"1小时49分钟","views":null,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day112-11.6(周四)\\n•\\n直播时间:答疑+塑品(两轮)\\n🎁\\n•数据:\\n🦋 1h49m in;观看人数2172,观看时⻓2m in28s,最高在线86,平均在线53,新增关注\\n53;粉丝占比29.9% \\n▪\\n1795\\n抖抖观看人数631,最高在线24,平均在线13,平均时⻓1m in15s,新增粉丝8;\\n▪\\n0\\n•\\n脚本&直播总结:\\n◦\\n脚本流量下滑\\n◦\\n可以换数学","source_page":70,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=70","record_day":112},{"date":"2025-11-04","title":"11月4日 · 咨询与课程直播","dur":"1小时53分钟","views":null,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day111-11.4(周二)\\n•\\n直播时间:答疑+塑品(两轮)\\n🎁\\n•数据:\\n🦋 1h53m in;观看人数4212,观看时⻓1m in49s,最高在线131,平均在线81,新增关\\n注101;粉丝占比25.1% \\n▪\\n398\\n抖抖观看人数465,最高在线15,平均在线10,平均时⻓1m in29s,新增粉丝7;\\n▪\\n0\\n•\\n脚本&直播总结:\\n◦\\n脚本调整:增加了听力+作文\\n◦\\n没有提问时:把塑品脚本继续讲\\n◦\\n视频:匹配直播的主题","source_page":69,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=69","record_day":111},{"date":"2025-11-03","title":"11月3日 · 咨询与课程直播","dur":"1小时39分钟","views":null,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day110-11.3(周一)\\n•\\n直播时间:答疑+塑品(两轮)\\n🎁\\n•数据:\\n🦋 1h39m in;观看人数3288,观看时⻓1m in55s,最高在线131,平均在线75,新增关\\n注96;粉丝占比25.1% \\n▪\\n3727\\n抖抖观看人数465,最高在线15,平均在线10,平均时⻓1m in29s,新增粉丝7;\\n▪\\n0\\n•\\n脚本&直播总结:\\n◦\\n塑品调整:\\n▪\\n答疑:简洁清晰,不模糊\\n▪\\nq新老用戶/课代表\\n▪\\n语速快,输出信息量","source_page":69,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=69","record_day":110},{"date":"2025-11-01","title":"11月1日 · 咨询与课程直播","dur":"1小时34分钟","views":null,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day109-11.1(周六)\\n•\\n直播时间:纯答疑\\n🎁\\n•数据:\\n🦋 1h34m in;观看人数3301,观看时⻓2m in16s,最高在线185,平均在线92,新增关\\n注126;粉丝占比25.1% \\n▪\\n398\\n抖抖观看人数410,最高在线17,平均在线7,新增粉丝8;\\n▪\\n0\\n•\\n脚本&直播总结:\\n◦\\n塑品不行:\\n▪\\n专注提分数,稳定达到140\\n▪\\n没达到140,都可以找我的方法学\\n▪\\n提价格(两科优惠,四科更优惠)\\n▪\\n学习其他直播间塑品话术\\n◦\\n流量上涨\\n◦\\n扩充要点:只讲单词和阅读太少了\\n◦\\n快速答疑","source_page":68,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=68","record_day":109},{"date":"2025-10-31","title":"10月31日 · 咨询与课程直播","dur":"1小时30分钟","views":null,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day108-10.31(周五)\\n•\\n直播时间:纯答疑\\n🎁\\n•数据:\\n🦋 1h30m in;观看人数2991,观看时⻓2m in16s,最高在线128,平均在线79,新增关\\n注88;粉丝占比\\n▪\\n199\\n抖抖观看人数447,观看时⻓m ins,最高在线,平均在线,新增粉丝;\\n▪\\n0\\n•\\n脚本&直播总结:\\n◦\\n小标题还是非常必要:正在讲解/后续讲解\\n◦\\n语数英等全科答疑:所有问题,80% 以上都还是在讲解决方案。具体内容不要讲太多;减少干\\n货\\n◦\\n解决方案都讲完了,家⻓听完就白嫖走了。\\n◦\\n联系客服,领取学霸笔记,做成贴片。\\n◦\\n口播可能违规。\\n◦\\n塑品:喜欢看/爱看/限额;其他直播间的课需要太⻓时间;+亲自答疑\\n◦\\n私域转化","source_page":68,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=68","record_day":108},{"date":"2025-10-30","title":"10月30日 · 咨询与课程直播","dur":"2小时02分钟","views":null,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day107-10.30(周四)\\n•\\n直播时间:纯答疑\\n🎁\\n•数据:\\n🦋 2h02m in;观看人数3432,观看时⻓2m in48s,最高在线216,平均在线88,新增关\\n注94;粉丝占比30.6% \\n▪\\n1594\\n抖抖观看人数410,观看时⻓2m in12s,最高在线16,平均在线9,新增粉丝6;\\n▪\\n0\\n•\\n脚本&直播总结:\\n◦\\n引导点赞要引导分享;分享之后可以领东西\\n◦\\n接极速流(新粉,自我介绍)\\n◦\\n答疑期间回答其他科目问题","source_page":67,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=67","record_day":107},{"date":"2025-10-28","title":"10月28日 · 咨询与课程直播","dur":"1小时46分钟","views":null,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day106-10.28(周二)\\n•\\n直播时间:纯答疑\\n🎁\\n•数据:\\n🦋 1h46m in;观看人数2413,观看时⻓2m in55s,最高在线114,平均在线71,新增关\\n注73;粉丝占比30.6% \\n▪\\n199\\n抖抖观看人数488,观看时⻓1m in23s,最高在线16,平均在线9,新增粉丝5;\\n▪\\n0\\n•\\n脚本&直播总结:\\n◦\\n换成只讲英语\\n◦\\n运营私域","source_page":67,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=67","record_day":106},{"date":"2025-10-27","title":"10月27日 · 咨询与课程直播","dur":"1小时40分钟","views":null,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day105-10.27(周一)\\n•\\n直播时间:纯答疑\\n🎁\\n•数据:\\n🦋 1h40m in;观看人数2311,观看时⻓2m in55s,最高在线116,平均在线70,新增关\\n注93;粉丝占比30.6% \\n▪\\n1167\\n抖抖观看人数488,观看时⻓1m in23s,最高在线16,平均在线9,新增粉丝5;\\n▪\\n0\\n•\\n脚本&直播总结:\\n◦\\n前面换成痛点-分析-病因改造\\n◦\\n细化痛点","source_page":66,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=66","record_day":105},{"date":"2025-10-26","title":"10月26日 · 咨询与课程直播","dur":"2小时18分钟","views":null,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day104-10.26(周日)\\n•\\n直播时间:纯答疑\\n🎁\\n•数据:\\n🦋 2h18m in;观看人数3143,观看时⻓2m in24s,最高在线99,平均在线63,新增关注\\n84;粉丝占比29.2% \\n▪\\n1176\\n抖抖观看人数469,观看时⻓1m in42s,最高在线13,平均在线7,新增粉丝6;\\n▪\\n0\\n•\\n脚本&直播总结:\\n◦\\n参考陈晶的痛点讲解\\n◦\\n换结构","source_page":66,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=66","record_day":104},{"date":"2025-10-24","title":"10月24日 · 咨询与课程直播","dur":"1小时33分钟","views":null,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day103-10.24(周五)\\n•\\n直播时间:纯答疑\\n🎁\\n•数据:\\n🦋 1h33m in;观看人数1303,观看时⻓2m in59s,最高在线68,平均在线44,新增关注\\n20;粉丝占比35.9% \\n▪\\n0\\n抖抖观看人数302,观看时⻓3m in53s,最高在线10,平均在线5,新增粉丝0;\\n▪\\n0\\n•\\n脚本&直播总结:\\n◦\\n脚本需要调整话题","source_page":65,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=65","record_day":103},{"date":"2025-10-23","title":"10月23日 · 咨询与课程直播","dur":"2小时12分钟","views":null,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day102-10.23(周四)\\n•\\n直播时间:纯答疑\\n🎁\\n•数据:\\n🦋 2h12m in;观看人数1793,观看时⻓3m in27s,最高在线71,平均在线48,新增关注\\n39;粉丝占比36.1% \\n▪\\n1797\\n抖抖观看人数474,观看时⻓2m in,最高在线14,平均在线9,新增粉丝4;\\n▪\\n599+199\\n•\\n脚本&直播总结:\\n◦\\n贴片和细节调整\\n◦\\n课代表要多一些,多互动;引发互动\\n◦\\n改一下流量话题:期中\\n◦\\n经常重复自我介绍*(可以改的清华元素)","source_page":65,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=65","record_day":102},{"date":"2025-10-21","title":"10月21日 · 咨询与课程直播","dur":"2小时11分钟","views":null,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day101-10.21(周二)\\n•\\n直播时间:纯答疑\\n🎁\\n•数据:\\n🦋 2h11m in;观看人数2153,观看时⻓3m in19s,最高在线88,平均在线59,新增关注\\n37;粉丝占比37.5% \\n▪\\n1198\\n抖抖观看人数634,观看时⻓1.76m in,最高在线22,平均在线14;\\n▪\\n0\\n•\\n脚本&直播总结:\\n◦\\n话题需要精进\\n◦\\n逼单和促单无效\\n◦\\n私域、广告收入;抖音画面\\n◦\\n话题要有灵魂(凸显IP)\\n◦\\n短视频要做流量(可复制性)","source_page":64,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=64","record_day":101},{"date":"2025-10-20","title":"10月20日 · 咨询与课程直播","dur":"2小时22分钟","views":null,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day100-10.20(周一)\\n•\\n直播时间:纯答疑\\n🎁\\n•数据:\\n🦋 2h22m in;观看人数2569,观看时⻓2m in47s,最高在线84,平均在线55,新增关注\\n32;粉丝占比35.8% \\n▪\\n1766\\n◦\\n小红书无\\n▪\\n0\\n•\\n脚本&直播总结:\\n◦\\nxhs上架\\n◦\\n接商单\\n◦\\n答疑点到家⻓痛点(答疑专场)\\n◦\\n更具体的用戶画像;初高中分开/初三、高三分开","source_page":64,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=64","record_day":100},{"date":"2025-10-18","title":"10月18日 · 咨询与课程直播","dur":"2小时10分钟","views":null,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day99-10.18(周六)\\n•\\n直播时间:纯答疑\\n🎁\\n•数据:\\n🦋 2h10m in;观看人数2139,最高在线75,平均在线52,新增关注39;粉丝占比39.1% \\n▪\\n1565\\n◦\\n小红书无\\n▪\\n0\\n•\\n脚本&直播总结:\\n◦\\n技术故障(用手机播的)","source_page":63,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=63","record_day":99},{"date":"2025-10-17","title":"10月17日 · 咨询与课程直播","dur":"1小时47分钟","views":null,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day98-10.17(周五)\\n•\\n直播时间:纯答疑\\n🎁\\n•数据:\\n🦋 1h47m in;观看时⻓2m in17s,观看人数1916,最高在线70,平均在线44,新增关注\\n28;粉丝占比41.9% \\n▪\\n199\\n◦\\n小红书无\\n▪\\n0\\n•\\n脚本&直播总结:\\n◦\\n技术故障(用手机播的)","source_page":63,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=63","record_day":98},{"date":"2025-10-16","title":"10月16日 · 咨询与课程直播","dur":"1小时58分钟","views":null,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day97-10.16(周四)\\n•\\n直播时间:纯答疑\\n🎁\\n•数据:\\n🦋 1h58m in;观看时⻓3m in28s,观看人数2881,最高在线133,平均在线87,新增关\\n注90;粉丝占比33.6% \\n▪\\n3563\\n◦\\n小红书观看时⻓23s,观看人数1926,最高在线29,新增关注13;粉丝占比15.8% \\n▪\\n0\\n•\\n脚本&直播总结:\\n◦\\n加了干货贴片 ✅\\n◦\\n刚塑品的时候不放贴片,先冲动消费(前5m in)+后放贴片+答疑、泛化痛点-引导产品\\n◦\\n599的产品上架要满足库存有10","source_page":62,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=62","record_day":97},{"date":"2025-10-14","title":"10月14日 · 咨询与课程直播","dur":"1小时58分钟","views":null,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day96-10.14(周二)\\n•\\n直播时间:纯答疑\\n🎁\\n•数据:\\n🦋 1h58m in;观看时⻓3m in28s,观看人数2927,最高在线109,平均在线79,新增关\\n注71;粉丝占比35% \\n▪\\n3563\\n◦\\n小红书观看时⻓28s,观看人数1143,最高在线17,新增关注10;粉丝占比26.9% \\n▪\\n0\\n•\\n脚本&直播总结:\\n◦\\n互动打一下年级\\n◦\\n塑品要塑清楚;课:孩子一定能看懂、一定能看完;付款的稳定性比较强;wj要清楚复习精讲\\n课里面有哪些内容\\n◦\\n回答问题:泛化问题\\n◦\\n下架之后回答问题,服务一点时间\\n◦\\n边回答问题边塑品\\n◦\\n下架之后在购物⻋/在后台找客服拍\\n◦\\n答疑不掉人,体现专业性很重要\\n◦\\n往专业方向去走:每一个话题做贴片,可以放ppt形式;内容有框架\\n◦\\n小红书可以上架产品","source_page":61,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=61","record_day":96},{"date":"2025-10-13","title":"10月13日 · 咨询与课程直播","dur":"1小时58分钟","views":null,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day95-10.13(周一)\\n•\\n直播时间:纯答疑\\n🎁\\n•数据:\\n🦋 1h58m in;观看时⻓3m in2s,观看人数2839,最高在线116,平均在线76,新增关注\\n54;粉丝占比37.2% \\n▪\\n1196\\n◦\\n小红书无\\n▪\\n0\\n•\\n脚本&直播总结:\\n◦\\n数学中间掉人\\n◦\\n话题的切换可以更快速close\\n◦\\n要点和要点之间拉开差距\\n◦\\n不断打磨数学:赛⻢话题,选10个找爆款结构","source_page":60,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=60","record_day":95},{"date":"2025-10-11","title":"10月11日 · 咨询与课程直播","dur":"2小时01分钟","views":null,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day94-10.11(周六)\\n•\\n直播时间:纯答疑\\n🎁\\n•数据:\\n🦋 2h01m in;观看时⻓2m in48s,观看人数3627,最高在线134,平均在线93,新增关\\n注81;粉丝占比31.6% \\n▪\\n2993\\n◦\\n小红书无\\n▪\\n0\\n•\\n脚本&直播总结:\\n◦\\n多强调自己很牛,我当时怎么样,我认为应该怎么样\\n◦\\n被评论区带跑,只回答普遍问题\\n◦\\n可以讲例子,场景表演;一连串贯口:解题/知识点/文言文\\n◦\\n灯光突出个人;画面要有质感(不等于好看)\\n◦\\n磨话题的方式:不用逐字稿,主要观点+金句;增加话题的生动度","source_page":59,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=59","record_day":94},{"date":"2025-10-10","title":"10月10日 · 咨询与课程直播","dur":"1小时42分钟","views":null,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day93-10.10(周五)\\n•\\n直播时间:纯答疑\\n🎁\\n•数据:\\n🦋 1h42m in;观看时⻓2m in33s,观看人数2944,最高在线113,平均在线79,新增关\\n注77;粉丝占比34% \\n▪\\n199\\n◦\\n小红书无\\n▪\\n0\\n•\\n脚本&直播总结:\\n◦\\n一周里面有两天尝试颠覆式创新\\n◦\\n靠短视频可以拓展变现渠道/新的产品","source_page":59,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=59","record_day":93},{"date":"2025-10-09","title":"10月9日 · 咨询与课程直播","dur":"1小时27分钟","views":null,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day92-10.9(周四)\\n•\\n直播时间:纯答疑\\n🎁\\n•数据:\\n◦\\n🦋 1h27m in;观看时⻓2m in32s,观看人数2864,最高在线144,平均在线89,新增\\n关注74;粉丝占比29.4% \\n▪\\n1167\\n◦\\n小红书无\\n▪\\n0\\n•\\n脚本&直播总结:\\n◦\\n画像变成北京家⻓居多\\n◦\\n化学生物曲线会变平\\n◦\\n可以有两场直播变成颠覆式创新(结构要简单)","source_page":58,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=58","record_day":92},{"date":"2025-10-07","title":"10月7日 · 咨询与课程直播","dur":"1小时40分钟","views":null,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day91-10.7(周二)\\n•\\n直播时间:纯答疑\\n🎁\\n•数据:\\n◦\\n🦋 1h40m in;观看时⻓2m in32s,观看人数3657,最高在线144,平均在线102,新\\n增关注122;粉丝占比33.3% \\n▪\\n1191\\n◦\\n小红书观看时⻓32s,观看人数949,最高在线17,平均在线9\\n▪\\n0\\n•\\n脚本&直播总结:\\n◦\\n状态好数据就会回来","source_page":57,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=57","record_day":91},{"date":"2025-10-06","title":"10月6日 · 咨询与课程直播","dur":"1小时28分钟","views":null,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day90-10.6(周一)\\n•\\n直播时间:纯答疑\\n🎁\\n•数据:\\n◦\\n🦋 1h28m in;观看时⻓1m in17s,观看人数3436,最高在线92,平均在线65,新增\\n关注58;粉丝占比28.4% \\n▪\\n199\\n◦\\n抖观看时⻓1m in23s,观看人数435,最高在线17,平均在线8,新增关注13\\n▪\\n0\\n•\\n脚本&直播总结:\\n◦\\n画面已经调整\\n◦\\n保持原节奏,没有必要加快\\n◦\\n背稿感减少\\n◦\\n有效互动\\n◦\\n高中规划+物化生\\n◦\\n没有普遍性的问题不回答","source_page":57,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=57","record_day":90},{"date":"2025-10-05","title":"10月5日 · 咨询与课程直播","dur":"1小时45分钟","views":null,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day89-10.5(周日)\\n•\\n直播时间:纯答疑\\n🎁\\n•数据:\\n◦\\n🦋 1h45m in;观看时⻓1m in35s,观看人数3370,最高在线89,平均在线60,新增\\n关注67;粉丝占比32.6% \\n▪\\n0\\n◦\\n抖没开\\n▪\\n0\\n•\\n脚本&直播总结:\\n◦\\n画面较暗,镜头要近一点\\n◦\\n中间掉人原因不明","source_page":56,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=56","record_day":89},{"date":"2025-10-01","title":"10月1日 · 咨询与课程直播","dur":"1小时30分钟","views":null,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day88-10.1(周三)\\n•\\n直播时间:纯答疑\\n🎁\\n•数据:\\n◦\\n🦋 1h30m in;观看时⻓1m in21s,观看人数1993,最高在线62,平均在线39,新增\\n关注26;粉丝占比38% \\n▪\\n0\\n◦\\n抖观看时⻓1m in8s,观看人数329,最高在线12,平均在线6,新增关注5\\n▪\\n0\\n•\\n脚本&直播总结:\\n◦\\n换了新流量脚本\\n◦\\n流量较差(可能是国庆原因)","source_page":56,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=56","record_day":88},{"date":"2025-09-30","title":"9月30日 · 咨询与课程直播","dur":"1小时53分钟","views":null,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day87-9.30(周二)\\n•\\n直播时间:纯答疑\\n🎁\\n•数据:\\n◦\\n🦋 1h53m in;观看时⻓2m in31s,观看人数2616,最高在线92,平均在线65,新增\\n关注47;粉丝占比35.3% \\n▪\\n0\\n◦\\n抖观看时⻓1m in2s,观看人数314,最高在线10,平均在线4,新增关注2\\n▪\\n0\\n•\\n脚本&直播总结:\\n◦\\n语文不讲(严重掉人);加初高中规划+小四⻔\\n◦\\n复刻陈墨\\n◦\\n讲数学物理(理科)","source_page":55,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=55","record_day":87},{"date":"2025-09-29","title":"9月29日 · 咨询与课程直播","dur":"1小时38分钟","views":null,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day86-9.29(周一)\\n•\\n直播时间:纯答疑\\n🎁\\n•数据:\\n◦\\n🦋 (手机没电)54m in;观看时⻓1m in22s,观看人数1504,最高在线74,平均在线\\n40,新增关注33;粉丝占比30.0% \\n▪\\n0\\n◦\\n抖1h38m in,观看时⻓2m in15s,观看人数395,最高在线19,平均在线10,新增关\\n注18\\n▪\\n0\\n•\\n脚本&直播总结:\\n◦\\n音质有问题\\n◦\\n前面内容涨不上去人\\n◦\\n可以多积累几个博主前10m in的内容\\n◦\\n语速要加快,干货密度要大;不要总是停,就会掉人","source_page":55,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=55","record_day":86},{"date":"2025-09-27","title":"9月27日 · 咨询与课程直播","dur":"1小时53分钟","views":null,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day85-9.27(周六)\\n•\\n直播时间:纯答疑\\n🎁\\n•数据:\\n◦\\n🦋 1h53m in;观看时⻓2m in51s,观看人数2752,最高在线116,平均在线75,新增\\n关注81;粉丝占比32.7% \\n▪\\n1366(精讲课)\\n◦\\n抖观看时⻓1m in40s,观看人数393,最高在线15,平均在线7,新增关注9\\n▪\\n0\\n•\\n脚本&直播总结:\\n◦\\n塑品约70-80人\\n◦\\n塑品时间可以拉⻓,可以【塑品+答疑】三次\\n◦\\n听力作文以后不讲了,拖太⻓\\n◦\\n初中高中替换陈老师版本+加速","source_page":54,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=54","record_day":85},{"date":"2025-09-26","title":"9月26日 · 咨询与课程直播","dur":"1小时41分钟","views":null,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day84-9.26(周五)\\n•\\n直播时间:纯答疑\\n🎁\\n•数据:\\n◦\\n🦋 1h41m in;观看时⻓2m in41s,观看人数2898,最高在线126,平均在线78,新增\\n关注93;粉丝占比30.8% \\n▪\\n0\\n◦\\n抖观看时⻓1m in30s,观看人数333,最高在线11,平均在线6,新增关注7\\n▪\\n0\\n•\\n脚本&直播总结:\\n◦\\n推流不断上升,密度很高、只给结论\\n◦\\n英语放最前面;数学放第二个\\n◦\\n精讲课可以分开设置品类(单科199;两⻔369;全科599)\\n◦\\n下次播小红书\\n◦\\n人数拉到三百","source_page":54,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=54","record_day":84},{"date":"2025-09-25","title":"9月25日 · 咨询与课程直播","dur":"1小时56分钟","views":null,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day83-9.25(周四)\\n◦\\n直播时间:纯答疑\\n🎁\\n•数据:\\n◦\\n🦋 1h56m in;观看时⻓2m in41s,观看人数2809,最高在线96,平均在线70,新\\n增关注81;粉丝占比35.2% \\n▪\\n0\\n◦\\n抖观看时⻓2m in37s,观看人数374,最高在线16,平均在线10,新增关注5\\n▪\\n0\\n◦\\n脚本&直播总结:\\n▪\\n非常自然,干货+答疑\\n▪\\n后续答疑没有掉人,互动比较多\\n▪\\n答疑反馈比较好\\n▪\\n精讲课没有塑品","source_page":53,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=53","record_day":83},{"date":"2025-09-23","title":"9月23日 · 咨询与课程直播","dur":"1小时44分钟","views":null,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day82-9.23(周二)\\n•\\n直播时间:纯答疑\\n🎁\\n•数据:\\n◦\\n🦋 1h44m in;观看时⻓1m in59s,观看人数2755,最高在线103,平均在线61,新增\\n关注44;粉丝占比35.1% \\n▪\\n0\\n◦\\n抖观看时⻓1m in11s,观看人数395,最高在线14,平均在线8,新增关注12\\n▪\\n0\\n•\\n脚本&直播总结:\\n◦\\n情绪+服装:积极+学姐人设 ✅\\n◦\\n内容编排:精简结构+后期流畅答疑","source_page":53,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=53","record_day":82},{"date":"2025-09-22","title":"9月22日 · 咨询与课程直播","dur":"1小时20分钟","views":null,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day81-9.22(周一)\\n•\\n直播时间:纯答疑\\n🎁\\n•数据:\\n◦\\n🦋 1h20m in;观看时⻓2m in14s,观看人数1679,最高在线81,平均在线48,新增\\n关注36;粉丝占比37.6% \\n▪\\n0\\n◦\\n抖观看时⻓1m in24s,观看人数298,最高在线24,平均在线7,新增关注5\\n▪\\n0\\n•\\n脚本&直播总结:\\n◦\\n情绪+服装:积极+学姐人设\\n◦\\n内容编排:\\n▪\\n先讲各个学科,数-英-语\\n▪\\n规划类放后面(初一初二初三)","source_page":52,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=52","record_day":81},{"date":"2025-09-20","title":"9月20日 · 咨询与课程直播","dur":"1小时33分钟","views":null,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day80-9.20(周六)\\n•\\n直播时间:纯答疑\\n🎁\\n•数据:\\n◦\\n🦋 1h33m in;观看时⻓2m in18s,观看人数3458,最高在线164,平均在线92,新增\\n关注129;粉丝占比29.2% \\n▪\\n600\\n◦\\n抖观看时⻓2m in02s,观看人数380,最高在线21,平均在线10,新增关注16\\n▪\\n0\\n•\\n脚本&直播总结:\\n◦\\n改一下塑品话术:\\n1清北学霸1对1全科规划4次\\n2清北学霸专项提升提升4次\\n3清北学霸1v1视频通话1小时\\n赠:全套手写笔记+优优学习方法课","source_page":52,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=52","record_day":80},{"date":"2025-09-19","title":"9月19日 · 咨询与课程直播","dur":"2小时09分钟","views":null,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day80-9.19(周五)\\n•\\n直播时间:纯答疑\\n🎁\\n•数据:\\n◦\\n🦋 2h09m in;观看时⻓2m in30s,观看人数2812,最高在线98,平均在线61,新增\\n关注65;粉丝占比36.7% \\n▪\\n1200\\n◦\\nxhs观看时⻓50s,观看人数916,最高在线15,平均在线9,新增关注18\\n▪\\n0\\n•\\n脚本&直播总结:\\n◦\\n语言习惯,要多说精炼的短句;重复金句-信息到位\\n◦\\n眼神和动作要坚定\\n◦\\n可以一直自然地讲一个点--观点要清晰\\n◦\\n初高中:数字/种类-专业度【多少个实词虚词积累】\\n◦\\n如果只能推荐一本教辅的话:文言文全解\\n◦\\n塑品:不要贩卖焦虑;要真诚推荐、真诚帮忙\\n▪\\n关键词:迷茫(共鸣)、每周改变看得⻅(专项训练,监督孩子+正能量+循环)\\n▪\\n用戶行为:购买+问细节\\n▪\\n先真诚地:优优老师自己做规划;我如果没空,让我的同学来帮孩子\\n▪\\n不用说清北学霸背景;直接说每周陪孩子15m in\\n▪\\n不需要讲背景,省份和中学不需要信息;不要让家⻓选择","source_page":51,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=51","record_day":80},{"date":"2025-09-15","title":"9月15日 · 咨询与课程直播","dur":"1小时40分钟","views":null,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day79-9.15(周一)\\n•\\n直播时间:纯答疑\\n🎁\\n•数据:\\n◦\\n🦋 1h40m in;观看时⻓2m in28s,观看人数2055,最高在线81,平均在线45,新增\\n关注32;粉丝占比38.5% \\n▪\\n2400\\n◦\\n抖抖观看时⻓2m in22s,观看人数377,最高在线17,平均在线10,新增关注4\\n▪\\n0\\n•\\n脚本&直播总结:\\n◦\\n换贴片 ✅\\n◦\\n需要黑板+背景要干净+手里面拿笔敲黑板\\n◦\\n塑品:节奏不要断了;完整信息讲完之前不要答疑;所有塑品话术宛珈讲;塑品不要说每天答\\n疑\\n◦\\n佳贤只记笔记+附和\\n◦\\n画面:有前中后景;手写笔记;后景有书\\n◦\\n要和粉丝积极互动,q具体的人\\n◦\\n状态:笑的感染力+【不要一直皱眉头!!!】\\n◦\\n只讲问题、结论、原因,所有东西都直给","source_page":50,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=50","record_day":79},{"date":"2025-09-13","title":"9月13日 · 咨询与课程直播","dur":"1小时57分钟","views":null,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day78-9.13(周六)\\n•\\n直播时间:纯答疑\\n🎁\\n•数据:\\n◦\\n🦋 1h57m in;观看时⻓2m in13s,观看人数2369,最高在线70,平均在线51,新增\\n关注41;粉丝占比40% \\n▪\\n0\\n◦\\n抖抖观看时⻓1m in40s,观看人数351,最高在线14,平均在线8,新增关注5\\n▪\\n0\\n•\\n脚本&直播总结:\\n◦\\n脚本:内容差不多\\n◦\\n佳贤配合一下\\n◦\\n表现力:\\n▪\\n情绪状态状态找到正常状态 ✅ (眼神不飘忽、手势大方、笑容积极)\\n▪\\n痛点(煽动性语言/场景化/拉⻓痛点)\\n▪\\n语势(学霸和普通人的差别/做到这一点就可以。。。)\\n▪\\n表演性\\n◦\\n答疑能力\\n◦\\n抖音画面放大+质感","source_page":49,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=49","record_day":78},{"date":"2025-09-12","title":"9月12日 · 咨询与课程直播","dur":"1小时19分钟","views":null,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day77-9.12(周五)\\n•\\n直播时间:纯答疑\\n🎁\\n•数据:\\n◦\\n🦋 1h19m in;观看时⻓2m in05s,观看人数1487,最高在线71,平均在线43,新增\\n关注34;粉丝占比36.4% \\n▪\\n0\\n◦\\n抖抖观看时⻓2m in3s,观看人数293,最高在线15,平均在线8,新增关注9\\n▪\\n0\\n•\\n脚本&直播总结:\\n◦\\n伴学产品调整:布置任务+聊天(4次)\\n◦\\n宛珈要到画面正中:30s共情也是宛珈讲+佳贤记笔记/reaction\\n◦\\n节奏需要更紧凑\\n◦\\n30s需要泛化","source_page":49,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=49","record_day":77},{"date":"2025-09-11","title":"9月11日 · 咨询与课程直播","dur":"1小时53分钟","views":null,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day76-9.11(周四)\\n•\\n直播时间:纯答疑\\n🎁\\n•数据:\\n◦\\n🦋 1h53m in;观看时⻓2m in08s,观看人数2162,最高在线69,平均在线48,新增\\n关注47;粉丝占比39% \\n▪\\n0\\n◦\\n抖抖观看时⻓2m in23s,观看人数468,最高在线17,平均在线10,新增关注8\\n▪\\n0\\n•\\n脚本&直播总结:\\n◦\\n佳贤先讲30s调动家⻓情绪\\n◦\\n✅ 每个问题节奏快、有清晰结论;打击痛点+具体做法\\n◦\\n❌ :【注重可操作性】\\n▪\\n不要给舒适区内的答案-慢就是快/归纳总结--->>>用什么教辅+该怎么做\\n▪\\n文言文--->>>可操作:1小本本做实词虚词积累2古文逐字翻译","source_page":48,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=48","record_day":76},{"date":"2025-09-09","title":"9月9日 · 咨询与课程直播","dur":"1小时53分钟","views":null,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day75-9.9(周二)\\n•\\n直播时间:聊话题+塑品+答疑\\n🎁\\n•数据:\\n◦\\n🦋 1h53m in;观看时⻓1m in56s,观看人数1799,最高在线53,平均在线35,新增\\n关注18;粉丝占比40% \\n▪\\n0\\n◦\\n抖抖观看时⻓2m in2s,观看人数475,最高在线17,平均在线11,新增关注8\\n▪\\n0\\n•\\n脚本&直播总结:\\n◦\\nwj讲话问题:提供信息,但其实没有正中要害\\n◦\\n娱乐式讲题可以考虑\\n◦\\n结构化回答:给出结论(前置!前置!讲一个身边案例)\\n▪\\ne.g.要不要补课?(观点的展开:先丢结论+反向去说)\\n•\\n是一个非常好的问题,xxx问的很好。\\n•\\n金句论点:能不补就不补,迫不得已了才补\\n•\\n瞎补课,很多孩子背后骂家⻓,还骂老师。最有代表性的是看网课,玩游戏。\\n•\\n补课往往是家⻓的心理安慰。因为孩子真的觉得没有用。\\n•\\n什么时候需要补课?不愤不启,不悱不发。真正想要学的时候,一点就通、举一反三。\\n▪\\ne.g.粗心问题\\n•\\n不是科科满分的,都肯定粗心。\\n•\\n所有的粗心都要归类到错题上来,源于不会做错题归类\\n•\\n说说看粗心有几种,只讲最典型的:符号看错(圈圈画画)/打破常规(反套路:右视\\n图、空集)\\n•\\n错一道题总结出来,一类的题目都不会错了","source_page":47,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=47","record_day":75},{"date":"2025-09-08","title":"9月8日 · 咨询与课程直播","dur":"1小时24分钟","views":null,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day74-9.8(周一)\\n•\\n直播时间:聊话题+塑品+答疑\\n🎁\\n•数据:\\n◦\\n🦋 1h24m in;观看时⻓1m in35s,观看人数2353,最高在线95,平均在线53,新增\\n关注37;粉丝占比30.2% \\n▪\\n0\\n◦\\n抖抖观看时⻓1m in15s,观看人数394,最高在线16,平均在线7,新增关注6\\n▪\\n0\\n•\\n脚本&直播总结:\\n◦\\n9-11月家⻓都在买东西+辅导孩子,填充孩子的所有时间\\n◦\\n问题+产品\\n◦\\n字要小一点,便于家⻓截图\\n◦\\n产品调整:\\n▪\\n线下答疑\\n▪\\n学霸在群里布置任务","source_page":47,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=47","record_day":74},{"date":"2025-09-05","title":"9月5日 · 咨询与课程直播","dur":"2小时23分钟","views":null,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day73-9.5(周五)\\n•\\n直播时间:聊话题+塑新品+答疑\\n🎁\\n•数据:\\n◦\\n🦋 2h23m in;观看时⻓2m in49s,观看人数3009,最高在线111,平均在线64,新增\\n关注75;粉丝占比36.3% \\n▪\\n1800\\n◦\\n抖抖观看时⻓1m in34s,观看人数470,最高在线15,平均在线8,新增关注4\\n▪\\n0\\n•\\n脚本&直播总结:\\n◦\\n讲干货脚本比较成熟;塑品不及格","source_page":46,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=46","record_day":73},{"date":"2025-09-04","title":"9月4日 · 咨询与课程直播","dur":"1小时29分钟","views":null,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day72-9.4(周四)\\n•\\n直播时间:聊话题+塑新品+答疑\\n🎁\\n•数据:\\n◦\\n🦋 1h29m in;观看时⻓1m in53s,观看人数1442,最高在线58,平均在线34,新增\\n关注17;粉丝占比38.6% \\n▪\\n0\\n◦\\n抖抖观看时⻓1m in13s,观看人数445,最高在线17,平均在线9,新增关注7\\n▪\\n0\\n•\\n脚本&直播总结:\\n◦\\n换流量话题,前20m in人很冷\\n◦\\n前期流量很重要,家⻓很功利(真正能为某个个人解决什么问题)\\n◦\\n干货数量+节奏:要非常密(退出去就可能错过很多干货)\\n◦\\n总结20问题:别人不问,自己回答","source_page":46,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=46","record_day":72},{"date":"2025-09-02","title":"9月2日 · 咨询与课程直播","dur":"2小时31分钟","views":null,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day71-9.2(周二)\\n•\\n直播时间:聊话题+塑新品+答疑\\n🎁\\n•数据:\\n◦\\n🦋 2h31m in;观看时⻓2m in32s,观看人数2270,最高在线63,平均在线46,新增\\n关注56;粉丝占比38.5% \\n▪\\n3000(5月答疑)\\n◦\\n抖抖观看时⻓1m in11s,观看人数499,最高在线13,平均在线6,新增关注3\\n▪\\n0(1月答疑)\\n•\\n脚本&直播总结:\\n◦\\n只答疑+塑品","source_page":45,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=45","record_day":71},{"date":"2025-09-01","title":"9月1日 · 咨询与课程直播","dur":"2小时08分钟","views":null,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day70-9.1(周一)\\n•\\n直播时间:聊话题+塑新品+答疑\\n🎁\\n•数据:\\n◦\\n🦋 2h08m in;观看时⻓1m in53s,观看人数2844,最高在线129,平均在线47,新增\\n关注36;粉丝占比30.9% \\n▪\\n2400(8月答疑)\\n◦\\n抖抖观看时⻓1m in5s,观看人数694,最高在线14,平均在线8,新增关注6\\n▪\\n600(1月答疑)\\n•\\n脚本&直播总结:\\n◦\\n交付产品:让孩子把题目写出来或者讲出来","source_page":45,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=45","record_day":70},{"date":"2025-08-30","title":"8月30日 · 咨询与课程直播","dur":"1小时52分钟","views":null,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day69-8.30(周六)\\n•\\n直播时间:聊话题+塑新品+答疑\\n🎁\\n•数据:\\n◦\\n🦋 1h52m in;观看时⻓1m in43s,观看人数3991,最高在线129,平均在线86,新增\\n关注100;粉丝占比26.9% \\n▪\\n1200(2月答疑)\\n◦\\n抖抖观看时⻓47s,观看人数1515,最高在线29,平均在线17,新增关注14\\n▪\\n0\\n•\\n脚本&直播总结:\\n◦\\n梳理问题,想回答","source_page":45,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=45","record_day":69},{"date":"2025-08-29","title":"8月29日 · 咨询与课程直播","dur":"2小时10分钟","views":null,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day68-8.29(周五)\\n•\\n直播时间:聊话题+塑新品+答疑\\n🎁\\n•数据:\\n◦\\n🦋 2h10m in;观看时⻓2m in30s,观看人数4130,最高在线153,平均在线86,新增\\n关注113;粉丝占比28.6% \\n▪\\n4200(7月答疑,成交9000)\\n◦\\n抖抖观看时⻓1m in8s,观看人数801,最高在线18,平均在线10,新增关注10\\n▪\\n0\\n•\\n脚本&直播总结:\\n◦\\n前面讲解流量稍高,情绪拉人\\n◦\\n非常严肃,多讲学生提高的故事","source_page":44,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=44","record_day":68},{"date":"2025-08-28","title":"8月28日 · 咨询与课程直播","dur":"2小时4分钟","views":null,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day67-8.28(周四)\\n•\\n直播时间:聊话题+塑新品+答疑\\n🎁\\n•数据:\\n◦\\n🦋 2h4m in;观看时⻓2m in36s,观看人数3575,最高在线139,平均在线81,新增\\n关注102;粉丝占比31.3% \\n▪\\n4800(8月答疑)\\n◦\\n抖抖观看时⻓27s,观看人数3191,最高在线63,平均在线26,新增关注13\\n▪\\n600\\n•\\n脚本&直播总结:\\n◦\\n状态要再用力一点:抓着观众讲\\n◦\\n塑品:需要更有信念感\\n◦\\n一杯奶茶钱,清北学霸请回家、只有清北学霸能够带出清北的孩子、一定是真的清北学霸(避\\n免说一大堆信息,没有重点)\\n◦\\n需要很了解学霸的情况\\n◦\\n答疑:上升到普遍性问题,提到产品可以解决->你跟我聊的太少了,所以需要跟我多聊;避免\\n回答具体问题,只服务一个孩子的感觉\\n▪\\n精神可嘉类->方法调整类,刷题及时交流\\n▪\\n表扬提前类->提前学,怎么学,跟着清北学霸\\n•\\n差生:需要一点点补;\\n•\\n中等生:好像听懂了、但是不会;\\n•\\n优秀学生:不稳定,做不完(难题训练不够,解题能力、时间管理)","source_page":43,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=43","record_day":67},{"date":"2025-08-26","title":"8月26日 · 咨询与课程直播","dur":"2小时13分钟","views":null,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day66-8.26(周二)\\n•\\n直播时间:聊话题+塑新品\\n🎁\\n•数据:\\n◦\\n🦋 2h13m in;观看时⻓2m in1s,观看人数3889,最高在线258,平均在线74,新增\\n关注67;粉丝占比25% \\n▪\\n10800(10月答疑+1年答疑)\\n◦\\n抖抖观看时⻓19s,观看人数4395,最高在线45,平均在线22,新增关注14\\n▪\\n4800\\n•\\n脚本&直播总结:\\n◦\\n前面干货:熟练的脚本\\n◦\\n转化塑品脚本:加强对话\\n◦\\n正常塑品没有掉人 ✅\\n◦\\n1v1连⻨or答疑:最好有报喜","source_page":43,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=43","record_day":66},{"date":"2025-08-25","title":"8月25日 · 咨询与课程直播","dur":"1小时38分钟","views":null,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day65-8.25(周一)\\n•\\n直播时间:聊话题+塑新品\\n🎁\\n•数据:\\n◦\\n🦋 1h38m in;观看时⻓1m in43s,观看人数3502,最高在线111,平均在线74,新增\\n关注62;粉丝占比25% \\n▪\\n600(1月答疑)\\n◦\\n抖抖观看时⻓19s,观看人数4395,最高在线45,平均在线22,新增关注14\\n▪\\n0\\n•\\n脚本&直播总结:\\n◦\\n塑品要简短一点\\n◦\\n上贴图\\n◦\\n拥有铁粉:\\n▪\\n直播可以当场帮人解决很多问题\\n▪\\n品很有用,帮助别人解决具体问题\\n◦\\n前1h10m in全部干货\\n◦\\n脚本-势能:流量到干货\\n▪\\n让用戶觉得讲的东西越来越重要\\n•\\n初高中区别、补课\\n•\\n自学:所有人都能拿120以上的英语(拿100考单词)\\n•\\n最容易拉分:数学(预习+计算)、物理--每一科十几分钟\\n•\\n换v2:理解性记忆\\n•\\n*单科里面流量话题\\n◦\\n塑品:两分钟之内\\n◦\\n只吸纳高认知高势能的家⻓","source_page":42,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=42","record_day":65},{"date":"2025-08-22","title":"8月22日 · 咨询与课程直播","dur":"1小时38分钟","views":null,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day64-8.22(周五)\\n•\\n直播时间:聊话题\\n🎁\\n•数据:\\n◦\\n🦋 1h38m in;观看时⻓2m in3s,观看人数4366,最高在线176,平均在线98,新增\\n关注123;粉丝占比24.1% \\n▪\\n1797(3精讲课)\\n◦\\n抖抖观看时⻓14s,观看人数1.25w,最高在线92,平均在线45,新增关注19\\n▪\\n599(1精讲课)\\n•\\n脚本&直播总结:\\n◦\\n加了物理\\n◦\\n计算、单词是痛点\\n◦\\n未来精讲课:开始着手,至少80-90% 的好评\\n◦\\n画面质感提升","source_page":41,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=41","record_day":64},{"date":"2025-08-21","title":"8月21日 · 咨询与课程直播","dur":"未记录","views":null,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day63-8.21(周四)\\n•\\n直播时间:聊话题\\n🎁\\n•数据:\\n◦\\n🦋 2h;观看时⻓2m in13s,观看人数3984,最高在线119,平均在线81,新增关注\\n59;粉丝占比27% \\n▪\\n0\\n◦\\n抖抖观看时⻓24s,观看人数17278,最高在线196,平均在线60,新增关注12\\n▪\\n0\\n•\\n脚本&直播总结:\\n◦\\n停在痛点细化解决,不会掉人(类似汪勋&星星);根据互动率了解家⻓对这个问题的关注度\\n◦\\n说话更像自然人,不套框架\\n◦\\n家⻓认知:比啥也不懂的高一点、但是听不懂具体知识点;初高中生的家⻓,有一定认知\\n▪\\n展开话题:考虑普遍性\\n◦\\n加上新品塑品\\n◦\\n新的选科贴片:作用不大\\n◦\\n英语的流量一直会往上走;只讲痛点","source_page":41,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=41","record_day":63},{"date":"2025-08-20","title":"8月20日 · 咨询与课程直播","dur":"1小时58分钟","views":null,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day62-8.20(周三)\\n•\\n直播时间:聊话题\\n🎁\\n•数据:\\n◦\\n🦋 1h58m in;观看时⻓2m in15s,观看人数3549,最高在线122,平均在线75,新增\\n关注79;粉丝占比27.2% \\n▪\\n0\\n◦\\n抖抖观看时⻓24s,观看人数6274,最高在线58,平均在线31,新增关注15\\n▪\\n0\\n•\\n脚本&直播总结:\\n◦\\n换了流量话题:手机\\n◦\\n人数拉不上来、互动不积极","source_page":40,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=40","record_day":62},{"date":"2025-08-18","title":"8月18日 · 咨询与课程直播","dur":"1小时47分钟","views":null,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day61-8.18(周一)\\n•\\n直播时间:聊话题\\n🎁\\n•数据:\\n◦\\n🦋 1h47m in;观看时⻓1m in35s,观看人数3651,最高在线98,平均在线65,新增\\n关注71;粉丝占比25.1% \\n▪\\n0\\n◦\\n抖抖观看时⻓17s,观看人数9550,最高在线86,平均在线35,新增关注31\\n▪\\n0\\n•\\n脚本&直播总结:\\n◦\\n答疑,下一场可能再来\\n◦\\nq问题,直接给答案->态度太客观、很谨慎;工具人属性;\\n◦\\n语言上有态度、情绪不要外露","source_page":40,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=40","record_day":61},{"date":"2025-08-16","title":"8月16日 · 咨询与课程直播","dur":"1小时34分钟","views":null,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day60-8.16(周六)\\n•\\n直播时间:聊话题+塑品\\n🎁\\n•数据:\\n◦\\n🦋 1h34m in;观看时⻓2m in7s,观看人数3729,最高在线149,平均在线92,新增\\n关注100;千次观看成交金额274.52\\n▪\\n1198(2单精讲课)\\n◦\\n抖抖观看时⻓30s,观看人数5768,最高在线75,平均在线43,新增关注43\\n▪\\n0\\n•\\n脚本&直播总结:\\n◦\\n化学生物会掉人\\n◦\\n变化脚本\\n◦\\n目前最多的是小学生家⻓:到四年级之后课程变难;家⻓想知道:现在该学什么\\n▪\\n不知道孩子缺什么\\n▪\\n以前都是快乐教育\\n▪\\n分班需要学什么\\n▪\\n家⻓经历","source_page":39,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=39","record_day":60},{"date":"2025-08-15","title":"8月15日 · 咨询与课程直播","dur":"未记录","views":null,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day59-8.15(周五)\\n•\\n直播时间:聊话题+塑品\\n🎁\\n•数据:\\n◦\\n🦋 观看时⻓2m in14s,观看人数4523,最高在线183,平均在线108,新增关注133;\\n千次观看成交金额904.6\\n▪\\n4792(8单精讲课)\\n◦\\n抖抖观看时⻓28s,观看人数5282,最高在线78,平均在线33,新增关注19\\n▪\\n0\\n•\\n脚本&直播总结:\\n◦\\n78m in开始塑品,大约60-70m in开始塑品最好\\n◦\\n塑品开始:1、2、3的互动率非常重要,中间补充不要多,积攒势能\\n◦\\n优: 🥕 不能主动塑品推销、要更懂家⻓(懂孩子懒、粗心+孩子有希望+可怜天下父母心+关心\\n其他科目的情绪价值+你基础好/有方法就能提升;批评:想不想让他稳定、提升);不要太多\\n讲干货和有用的东西\\n◦\\n贤: 😡 唱黑脸+打击家⻓\\n◦\\n学习效果:家⻓档案+沟通(口碑)\\n◦\\n产品:满分思维(高途名师课程+专题学透)一个科目4-5个专题","source_page":39,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=39","record_day":59},{"date":"2025-08-14","title":"8月14日 · 咨询与课程直播","dur":"未记录","views":null,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day58-8.14(周四)\\n•\\n直播时间:聊话题+连⻨+塑品\\n🎁\\n•数据:\\n◦\\n🦋 观看时⻓1m in58s,观看人数4177,最高在线170,平均在线89,新增关注91\\n▪\\n2396(4单精讲课)\\n◦\\n抖抖观看时⻓49s,观看人数2219,最高在线33,平均在线22,新增关注22\\n▪\\n0\\n•\\n脚本&直播总结:\\n◦\\n开始讲化生\\n◦\\n手里有十几个话题,流量不好即使换\\n◦\\n准备流量话题:\\n▪\\n选科(赋分、师资、物化捆绑)\\n▪\\n择校(只针对初升高)\\n▪\\n走读和住校的规划","source_page":38,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=38","record_day":58},{"date":"2025-08-13","title":"8月13日 · 咨询与课程直播","dur":"未记录","views":null,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day57-8.13(周三)\\n•\\n直播时间:聊话题+连⻨+塑品\\n🎁\\n•数据:\\n◦\\n🦋 观看时⻓2m in32s,观看人数5969,最高在线270,平均在线142,新增关注250\\n▪\\n599(1单精讲课)\\n◦\\n抖抖观看时⻓34s,观看人数1.03w,最高在线127,平均在线74,新增关注81\\n▪\\n0\\n•\\n脚本&直播总结:\\n◦\\n一天讲两科可以了,塑品开始时间在60-75m in\\n◦\\n答疑:要让家⻓觉得,我懂你\\n▪\\n所有人的问题都能流畅回答\\n▪\\n感同身受,同频回答(感受到家⻓的问题)\\n▪\\n问题泛化\\n◦\\n课程要提升\\n◦\\n一对一了解学方法课的家⻓学习的进度+用戶一对一调研\\n◦\\n和汪老师学习","source_page":37,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=37","record_day":57},{"date":"2025-08-11","title":"8月11日 · 咨询与课程直播","dur":"未记录","views":null,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day56-8.11(周一)\\n•\\n直播时间:聊话题+连⻨+塑品\\n🎁\\n•数据:\\n◦\\n🦋 观看时⻓2m in47s,观看人数6415,最高在线342,平均在线161,新增关注263\\n▪\\n1198(2单精讲课)\\n◦\\n抖抖观看时⻓29s,观看人数1.7w,最高在线164,平均在线97,新增关注120\\n▪\\n0\\n•\\n脚本&直播总结:\\n◦\\n干货+连⻨答疑\\n◦\\n应该先塑品再连⻨,连⻨的时候品继续挂着\\n◦\\n可以加化、生","source_page":37,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=37","record_day":56},{"date":"2025-08-09","title":"8月9日 · 咨询与课程直播","dur":"未记录","views":null,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day55-8.9(周六)\\n•\\n直播时间:聊话题+连⻨\\n🎁\\n•数据:\\n◦\\n🦋 观看时⻓2m in55s,观看人数4922,最高在线185,平均在线118,新增关注157\\n▪\\n0\\n◦\\n抖抖观看时⻓29s,观看人数1.1w,最高在线86,平均在线51,新增关注50\\n▪\\n0\\n•\\n脚本&直播总结:\\n◦\\n干货+连⻨答疑\\n◦\\n眼睛要放镜头上、板书要规整一点\\n◦\\n强情绪点:佳贤唱黑脸的度要加大\\n◦\\n缺的产品力:家⻓用了来报喜;家⻓不需要有认知\\n◦\\n直播里面:录课程\\n◦\\n研究品-调整脚本+家⻓报喜\\n▪\\n伴学答疑(家⻓没时间陪孩子、家⻓不会、家⻓不会教)\\n▪\\n三次课规划提10分:想短期内快速提分、很努力但是分数不高、一个坑老是踩","source_page":36,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=36","record_day":55},{"date":"2025-08-08","title":"8月8日 · 咨询与课程直播","dur":"未记录","views":null,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day54-8.8(周五)\\n•\\n直播时间:聊话题\\n🎁\\n•数据:uv价值0(千次观看成交金额)\\n◦\\n🦋 1m in50s,观看人数3735,最高在线106,平均在线75,新增关注38\\n▪\\n0\\n◦\\n抖抖销售额:\\n▪\\n0\\n•\\n脚本&直播总结:\\n◦\\n换脚本,流量一般\\n◦\\n学科方法:基础知识需要非常扎实","source_page":36,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=36","record_day":54},{"date":"2025-08-05","title":"8月5日 · 咨询与课程直播","dur":"未记录","views":null,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day53-8.5(周二)\\n•\\n直播时间:聊话题+塑品\\n🎁\\n•数据:uv价值0(千次观看成交金额)\\n◦\\n🦋 销售额:\\n▪\\n0\\n◦\\n抖抖销售额:\\n▪\\n98(书1单)\\n•\\n脚本&直播总结:\\n◦\\n看汪勋\\n◦\\n没有人比优优更懂我+她真的帮我解决了问题\\n◦\\n回答问题:家⻓最爱听的话\\n◦\\n家⻓不容易孩子不听话干货很重要-不要讲干货,调动家⻓的情绪","source_page":35,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=35","record_day":53},{"date":"2025-08-04","title":"8月4日 · 咨询与课程直播","dur":"未记录","views":4924,"peak":165,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day52-8.4(周一)\\n•\\n直播时间:聊话题+塑品\\n🎁\\n•数据:uv价值206.7(千次观看成交金额)\\n◦\\n🦋 销售额:\\n▪\\n1198(精讲课2单、一对一咨询0单、书0单)\\n◦\\n平均停留:2m in27s,人数:平均在线109,最高165,看播人数:4924,粉丝占比\\n24.8% ,涨粉143\\n◦\\n抖抖销售额:\\n▪\\n1198(精讲课2单、一对一咨询0单、书0单)\\n▪\\n观看人次:8724,平均在线88,人数最高146,停留50s)\\n•\\n脚本&直播总结:\\n◦\\n延续话题,加问答,搜集问题\\n◦\\n需要练习问答模版,证明可以现场回答问题","source_page":35,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=35","record_day":52,"average_online":109},{"date":"2025-08-02","title":"8月2日 · 咨询与课程直播","dur":"未记录","views":4954,"peak":181,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day51-8.2(周六)\\n•\\n直播时间:聊话题+塑品\\n🎁\\n•数据:uv价值154.7(千次观看成交金额)\\n◦\\n🦋 销售额:\\n▪\\n893(精讲课1单、一对一咨询0单、书3单)+场外0=893\\n◦\\n平均停留:1m in58s,人数:平均在线106,最高181,看播人数:4954,粉丝占比\\n23% ,涨粉157\\n◦\\n抖抖销售额:\\n▪\\n1595(精讲课2单、一对一咨询1单、书1单)=1595\\n▪\\n观看人次:5872,平均在线66,人数最高126,停留46s)\\n•\\n脚本&直播总结:\\n◦\\n换话题:热点话题\\n◦\\n换平台洗家⻓","source_page":34,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=34","record_day":51,"average_online":106},{"date":"2025-08-01","title":"8月1日 · 咨询与课程直播","dur":"未记录","views":3396,"peak":177,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day50-8.1(周五)\\n•\\n直播时间:聊话题+塑品\\n🎁\\n•数据:uv价值456(千次观看成交金额)\\n◦\\n🦋 销售额:\\n▪\\n1892(精讲课3单、一对一咨询0单、书1单)+场外0=1892\\n◦\\n平均停留:3m in5s,人数:平均在线11,最高177,看播人数:3396,粉丝占比\\n34% ,涨粉86\\n◦\\n抖抖销售额:\\n▪\\n0(精讲课3单、一对一咨询0单、书0单)=1797\\n▪\\n观看人次:2442,平均在线66,人数最高93,停留2m in14s)\\n•\\n脚本&直播总结:\\n◦\\n塑品:\\n▪\\n家⻓洗不动;塑品优化,转化率可以\\n▪\\n需要新话题、新脚本;可以先替换一半","source_page":34,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=34","record_day":50,"average_online":11},{"date":"2025-07-31","title":"7月31日 · 咨询与课程直播","dur":"未记录","views":5448,"peak":177,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day49-7.31(周四)\\n•\\n直播时间:聊话题+塑品\\n🎁\\n•数据:uv价值92.7(千次观看成交金额)\\n◦\\n🦋 销售额:\\n▪\\n599(精讲课1单、一对一咨询0单、书0单)+场外0=599\\n◦\\n平均停留:2m in13s,人数:平均在线11,最高177,看播人数:5448,粉丝占比\\n23.4% ,涨粉205\\n◦\\n抖抖销售额:\\n▪\\n0(精讲课0单、一对一咨询0单、书0单)=0\\n▪\\n观看人次:1668,平均在线42,人数最高64,停留2m in17s)\\n•\\n脚本&直播总结:\\n◦\\n塑品:\\n▪\\n塑品有问题、家⻓洗不动","source_page":33,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=33","record_day":49,"average_online":11},{"date":"2025-07-29","title":"7月29日 · 咨询与课程直播","dur":"未记录","views":6873,"peak":270,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day48-7.29(周二)\\n•\\n直播时间:聊话题+塑品\\n🎁\\n•数据:uv价值540(千次观看成交金额)\\n◦\\n🦋 销售额:\\n▪\\n4492(精讲课7单、一对一咨询0单、书1单)+场外0=4492\\n◦\\n平均停留:2m in53s,人数:平均在线151,最高270,看播人数:6873,粉丝占比\\n20.8% ,涨粉326\\n◦\\n抖抖销售额:\\n▪\\n2193(精讲课2单、一对一咨询3单、书1单)+场外599=2792\\n▪\\n观看人次:2300,平均在线50,人数最高78,停留2m in2s)\\n•\\n脚本&直播总结:\\n◦\\n塑品:\\n▪\\n第二个产品塑品有问题","source_page":33,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=33","record_day":48,"average_online":151},{"date":"2025-07-28","title":"7月28日 · 咨询与课程直播","dur":"未记录","views":9387,"peak":366,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day47-7.28(周一)\\n•\\n直播时间:聊话题+塑品\\n🎁\\n•数据:uv价值375(千次观看成交金额)\\n◦\\n🦋 销售额:\\n▪\\n4291(精讲课7单、一对一咨询0单、书1单)+场外599=4890\\n◦\\n平均停留:2m in53s,人数:平均在线201,最高366,看播人数:9387,粉丝占比\\n18% ,涨粉470\\n◦\\n抖抖销售额:\\n▪\\n0\\n▪\\n观看人次:2507,平均在线28,人数最高80,停留2m in11s,涨粉100)\\n•\\n脚本&直播总结:\\n◦\\n塑品:\\n▪\\n答疑断节奏\\n▪\\nuu答疑+佳贤控节奏\\n▪\\n塑品势能不够,299:uu携20+省份学霸,你在哪里都可以覆盖,全网找不到各个省考到清北-\\n相互了解、交朋友+树立榜样、爱学习+现场解决问题\\n▪\\nfsab:给家⻓画饼","source_page":32,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=32","record_day":47,"average_online":201},{"date":"2025-07-26","title":"7月26日 · 咨询与课程直播","dur":"未记录","views":7296,"peak":228,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day46-7.26(周六)下午,晚上\\n•\\n直播时间:聊话题+塑品\\n🎁\\n•数据:点击171,下单8次,uv价值355(千次观看成交金额)\\n◦\\n销售额:\\n▪\\n🦋 3200(精讲课5单、一对一咨询0单、书2单)\\n▪\\n抖抖495(观看人次:1761,平均在线41,人数最高61,停留2m in11s,涨粉\\n85,千次观看成交221.9;3单,商品点击98)\\n有效进房率1.87% ⬇ ,平均停留:2m in18s\\n◦\\n人数:平均在线125,最高228,看播人数:7296,粉丝占比17.5% ,涨粉229\\n•\\n脚本&直播总结:\\n◦\\n塑品:299二十多个省份,强调\\n🎁\\n•数据:uv价值677(千次观看成交金额)\\n◦\\n🦋 销售额:\\n▪\\n5085(精讲课7单、一对一咨询2单、书3单)+场外599=5684\\n◦\\n平均停留:2m in48s,人数:平均在线152,最高275,看播人数:6142,粉丝占比\\n17.5% ,涨粉247\\n◦\\n抖抖销售额:\\n▪\\n599(精讲课1单)\\n▪\\n观看人次:2358,平均在线40,人数最高67,停留1m in37s,涨粉95)\\n•\\n脚本&直播总结:\\n◦\\n干货太多,\\n▪\\n例如:举出更加简单的例子,推导公式:小学例子\\n◦\\n推导->公式是怎么来的\\n◦\\n表达直接出来:不要直接给答案;引导互动\\n◦\\n塑品⻆度:我讲了什么对你有用->你现在有什么问题","source_page":31,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=31","record_day":46,"average_online":125},{"date":"2025-07-25","title":"7月25日 · 咨询与课程直播","dur":"未记录","views":7220,"peak":178,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day45-7.25(周五)\\n•\\n直播时间:聊话题+塑品\\n🎁\\n•数据:,点击253,下单31次,uv价值1298(千次观看成交金额)\\n◦\\n销售额:\\n▪\\n🦋 9372(精讲课10单、一对一咨询10单、书6单)\\n▪\\n抖抖2659(观看人次:2047,平均在线64,人数最高97,停留3m in07s,涨粉\\n156,千次观看成交996;5单,商品点击136)\\n有效进房率1.87% ⬇ ,平均停留:2m in38s\\n◦\\n人数:平均在线113,最高178,看播人数:7220,粉丝占比24.3% ,涨粉245\\n•\\n脚本&直播总结:\\n◦\\n塑品:讲清楚了,没有待付款","source_page":31,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=31","record_day":45,"average_online":113},{"date":"2025-07-24","title":"7月24日 · 咨询与课程直播","dur":"未记录","views":10900,"peak":324,"hot":null,"gmv":"¥5,880","status":"直播复盘","visual":{},"source_text":"Day44-7.24(周四)\\n•\\n直播时间:聊话题+两次塑品\\n🎁\\n•数据:点击204,下单31次,uv价值1039(千次观看成交金额)\\n◦\\n销售额:5880(16单),平均停留:2m in37s\\n◦\\n人数:平均在线204,最高324,看播人数:10900,粉丝占比19% ,涨粉468\\n•\\n脚本&直播总结:\\n◦\\n塑品:\\n◦\\n1.干货+塑品节奏:干货讲80-90分钟,塑品30-40分钟;2.塑品:流畅度待提升,重点需要强\\n调,配合写在白板上更自然;3.抖音:在线达50人,画质与声音跟视频号差不多,购买2米+⻓\\n度充电线\\n◦\\n流量节点:20分钟到200人在线,不到200人需要放慢节奏让人数到300+;超过200人正常节\\n奏。","source_page":30,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=30","record_day":44,"average_online":204},{"date":"2025-07-22","title":"7月22日 · 咨询与课程直播","dur":"未记录","views":8976,"peak":298,"hot":null,"gmv":"¥3,592","status":"直播复盘","visual":{},"source_text":"Day43-7.22(周二)\\n•\\n直播时间:聊话题+两次塑品\\n🎁\\n•数据:,点击313,下单31次,uv价值400(千次观看成交金额)\\n◦\\n销售额:3592(8单)\\n有效进房率1.87% ⬇ ,平均停留:2m in29s\\n◦\\n人数:平均在线164,最高298,看播人数:8976,粉丝占比21.2% ,涨粉334\\n•\\n脚本&直播总结:\\n◦\\n塑品:599课程内容模糊、299课程不知道是什么\\n◦\\n优优老师花了半年时间做的课\\n◦\\n领取笔记很复杂\\n◦\\n答疑+塑品\\n◦\\n加新的内容:和ip相关、和落地相关","source_page":30,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=30","record_day":43,"average_online":164},{"date":"2025-07-21","title":"7月21日 · 咨询与课程直播","dur":"1小时42分钟","views":8593,"peak":397,"hot":null,"gmv":"¥12,161","status":"直播复盘","visual":{},"source_text":"Day42-7.21(周一)\\n•\\n直播时间:聊话题+塑品\\n🎁\\n•数据:1h42m in,下单31次,uv价值1039(千次观看成交金额)\\n◦\\n销售额:12161(精讲课15单、一对一咨询8单、书8单)\\n有效进房率1.87% ⬇ ,平均停留:2m in26s\\n◦\\n人数:平均在线229,最高397,看播人数:8593,粉丝占比17.9% ,涨粉503\\n•\\n脚本&直播总结:\\n◦\\n1h干货,40m in塑品,上品前塑不要掉人\\n◦\\n讲完语文之后","source_page":29,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=29","record_day":42,"average_online":229},{"date":"2025-07-19","title":"7月19日 · 咨询与课程直播","dur":"1小时55分钟","views":8593,"peak":333,"hot":null,"gmv":"¥4,187","status":"直播复盘","visual":{},"source_text":"Day41-7.19(周六)\\n•\\n直播时间:聊话题+塑品\\n🎁\\n•数据:1h55m in,点击387人,下单26次,uv价值399.14(千次观看成交金额)\\n◦\\n销售额:4187(精讲课6单、一对一咨询1单、书3单)\\n有效进房率1.71% ⬇ ,平均停留:2m in32s\\n◦\\n人数:平均在线207,最高333,看播人数:8593,粉丝占比17% ,涨粉407\\n•\\n脚本&直播总结:\\n◦\\n中间掉人:宛珈不要自己讲废话,和佳贤互动、信息密度增加\\n◦\\n有可能其他主播抢流量\\n◦\\n测试一下周六讲两次,4-6点可以讲\\n◦\\n塑品:没付款的要清、不买的下架了;最多说两次\\n◦\\n学霸笔记:放在中间讲","source_page":28,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=28","record_day":41,"average_online":207},{"date":"2025-07-18","title":"7月18日 · 咨询与课程直播","dur":"未记录","views":9329,"peak":373,"hot":null,"gmv":"¥10,500","status":"直播复盘","visual":{},"source_text":"Day40-7.18(周五)\\n•\\n直播时间:聊话题+塑品\\n🎁\\n•数据:2h,点击387人,下单26次,uv价值873.05(千次观看成交金额)\\n◦\\n销售额:10500(精讲课13单、一对一咨询7单、书6单)\\n有效进房率1.89% ⬇ ,平均停留:2m in43s\\n◦\\n人数:平均在线224,最高373,看播人数:9329,粉丝占比16.6% ,涨粉507\\n•\\n脚本&直播总结:\\n◦\\n开始塑品,宛珈问:我讲的东西在我的干货里占了多少-只是我精讲课的5% ;想听完整的再去\\n拍\\n◦\\n家⻓先占名额,再听了下单\\n◦\\n真正能给客戶带来:准备好最想提分的一个科目;老师梳理薄弱点、失分点,会告诉你能提几\\n分、每一分怎么提+准备好10个以上的问题,一对一回答\\n◦\\n回答:讲一些课程精华点,用戶不需要知道内容\\n◦\\n提醒家⻓预约明天\\n◦\\n时间要遵守预约时间\\n◦\\n350以上,上15个名额;塑品时也保持住状态","source_page":28,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=28","record_day":40,"average_online":224},{"date":"2025-07-17","title":"7月17日 · 咨询与课程直播","dur":"未记录","views":7003,"peak":269,"hot":null,"gmv":"¥4,791","status":"直播复盘","visual":{},"source_text":"Day39-7.17(周四)\\n•\\n直播时间:聊话题+塑品(精讲课4⻔)\\n🎁\\n•数据:2h,点击209人,下单7次,uv价值423.4(千次观看成交金额)\\n◦\\n销售额:4791(精讲课7单4193一对一咨询2单598)\\n有效进房率1.89% ⬇ ,平均停留:2m in26s\\n◦\\n人数:平均在线153,最高269,看播人数:7003,粉丝占比17.3% \\n•\\n脚本&直播总结:\\n◦\\n塑品:1、3是精讲和咨询,一个品最多十分钟,到下个品,保证连贯\\n◦\\n学霸笔记作为2号链接,一起弹出,不讲\\n◦\\n宛珈不要低头看其他的,佳贤状态保持专注","source_page":27,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=27","record_day":39,"average_online":153},{"date":"2025-07-15","title":"7月15日 · 咨询与课程直播","dur":"未记录","views":1,"peak":546,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day38-7.15(周二)\\n•\\n直播时间:聊话题+塑品(精讲课4⻔)\\n🎁\\n•数据:2h,uv价值677.25(千次观看成交金额)\\n◦\\n销售额:精讲课5990一对一咨询2392学霸笔记98\\n有效进房率1.96% ⬇ ,平均停留:2m in41s\\n◦\\n人数:平均在线127,最高546,看播人数:1.2w,粉丝占比14.1% \\n•\\n脚本&直播总结:\\n◦\\n塑品:话术要再熟悉;宛珈要多互动,多点头、配合佳贤,中间有亲和力一点;\\n◦\\n塑品2:宛珈讲三位学霸稀缺性;一个小时,结果:哪一⻔最想提分,薄弱科目变成优势科目;学\\n霸诊断问题->把你薄弱点、失分点诊断出来,告诉你哪里能提分,一步步怎么提分\\n◦\\n加上书作为产品,不塑品;最后塑品","source_page":27,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=27","record_day":38,"average_online":127},{"date":"2025-07-14","title":"7月14日 · 咨询与课程直播","dur":"2小时5分钟","views":7150,"peak":294,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day37-7.14(周一)\\n•\\n直播时间:聊话题+塑品(精讲课4⻔)\\n🎁\\n•数据:2h5m in,点击224次,下单10次,uv价值617(千次观看成交金额)\\n◦\\n销售额3594(4⻔精讲)\\n有效进房率2.53% ⬆ ,平均停留:2m in33s\\n◦\\n人数:平均在线127,最高294,看播人数:7150,粉丝占比20% \\n•\\n脚本&直播总结:\\n◦\\n第二段塑品:详细讲","source_page":26,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=26","record_day":37,"average_online":127},{"date":"2025-07-12","title":"7月12日 · 咨询与课程直播","dur":"2小时5分钟","views":6181,"peak":294,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day36-7.12(周六)\\n•\\n直播时间:聊话题+塑品(精讲课4⻔)\\n🎁\\n•数据:2h5m in,点击160次,下单6次\\n◦\\n销售额3594(4⻔精讲)\\n有效进房率2.46% ⬇ ,平均停留:2m in33s\\n◦\\n人数:平均在线133,最高294,看播人数:6181,粉丝占比20% \\n•\\n脚本&直播总结:\\n◦\\n第二段塑品:详细讲\\n◦\\n塑品金句\\n◦\\n塑品话术:解决家⻓痛点\\n◦\\n产品调整:2个月\\n◦\\n家⻓分层:基于 󾠮 / 󾠯 痛点-打击-去拍(对比其他直播间)\\n▪\\n自学:跟优优老师学会了自学能力,不用花钱;有没有花1w以上的/北京十几w\\n▪\\n别人都在补课:可能不能赢在起跑线、但不能掉队;好学校的老师教方法,现在普通的孩子\\n优优教你\\n▪\\n老师有用:课程得看跟谁学\\n▪\\n知识进不了脑子:方法不对+教完不管\\n▪\\n学完有问题,帮你解决:反馈\\n▪\\n课程完播率:100% \\n▪\\ne.g.降⻰十八掌,孩子像郭靖,课as秘籍递给孩子","source_page":24,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=24","record_day":36,"average_online":133},{"date":"2025-07-11","title":"7月11日 · 咨询与课程直播","dur":"2小时5分钟","views":7150,"peak":224,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day35-7.11(周五)\\n•\\n直播时间:聊话题+塑品(精讲课4⻔)\\n🎁\\n•数据:2h5m in,点击224次,下单10次\\n◦\\n销售额4202.9(4⻔精讲)\\n有效进房率2.53% ⬆ ,平均停留:2m in12s\\n◦\\n人数:平均在线127,最高224,看播人数:7150,粉丝占比19.6% \\n•\\n脚本&直播总结:\\n◦\\n上品:佳贤上品后坐下,观感不好;上品前宛珈讲完了佳贤又讲一遍掉人\\n◦\\n佳贤塑品答疑:贴片放公屏\\n◦\\n塑品卖点:脚本化","source_page":23,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=23","record_day":35,"average_online":127},{"date":"2025-07-10","title":"7月10日 · 咨询与课程直播","dur":"1小时51分钟","views":5064,"peak":221,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day34-7.10(周四)\\n•\\n直播时间:聊话题+塑品(精讲课4⻔)\\n🎁\\n•数据:1h51m in,点击128次+卖9单\\n◦\\n销售额4193(4⻔精讲)\\n有效进房率2.14% ⬇ ,平均停留:2m in3s\\n◦\\n人数:平均在线102,最高221,看播人数:5064,粉丝占比25.4% \\n•\\n脚本&直播总结:\\n◦\\n定位:塑品一定要加自主学习,全网唯一可以把自主学习的体系,落地到各科的IP。语数英物\\n四大主科,都出了初高中的精讲课。相比较其他主播课程都是讲大而空的理论,没办法落地到\\n各科。全科599,可以管初高中六年。一年一百块钱。小学五六年级可以提前学。再小就不建议\\n了。\\n◦\\n塑品:宛珈讲课程内容,稀缺性(直播不到5% ;不是虚的方法>带着孩子去学,其他直播间听\\n不到自学方法-知识点-真题,全学科);佳贤憋单\\n◦\\n换贴片,流量好;画质\\n◦\\n卖完要给家⻓答疑,让家⻓预约下一场\\n◦\\n提醒加粉丝团","source_page":22,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=22","record_day":34,"average_online":102},{"date":"2025-07-08","title":"7月8日 · 咨询与课程直播","dur":"1小时37分钟","views":2259,"peak":90,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day33-7.8(周二)\\n•\\n直播时间:聊话题+塑品(精讲课)\\n🎁\\n•数据:1h37m in\\n◦\\n销售额29.7(一对一福利)\\n有效进房率2.84% ⬇ ,平均停留:2m in15s\\n◦\\n人数:平均在线56,最高90,看播人数:2259,粉丝占比33.2% \\n•\\n脚本&直播总结:\\n◦\\n流量很好,卖不出去","source_page":21,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=21","record_day":33,"average_online":56},{"date":"2025-07-07","title":"7月7日 · 咨询与课程直播","dur":"1小时44分钟","views":null,"peak":88,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day32-7.7(周一)\\n•\\n直播时间:聊话题+塑品(精讲课)\\n🎁\\n•数据:1h44m in\\n◦\\n销售额657.4(精讲课+一对一福\\n利)\\n有效进房率2.67% ⬇ ,平均停留:\\n2m in2s\\n◦\\n人数:平均在线51,最高88,看\\n播人数:2400,粉丝占比35.8% \\n•\\n脚本&直播总结:\\n◦\\n两段塑品:学科干货-塑品精讲课->时间规\\n划-塑品1v1\\n◦\\n憋单不用讲,等到人数高的时候->第一段\\n塑品:每个课4个名额,以往都抢不到,直\\n接上架->第二段塑品:详细内容->第三\\n段:逼单\\n◦\\n一对一九块九->第一段塑品:只有十个名\\n额->第二段塑品:详细->第三段:不买下\\n架","source_page":20,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=20","record_day":32,"average_online":51},{"date":"2025-07-05","title":"7月5日 · 咨询与课程直播","dur":"1小时43分钟","views":null,"peak":71,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day31-7.5(周六)\\n•\\n直播时间:聊话题+塑品(精讲课)\\n🎁\\n•数据:1h43m in\\n◦\\n销售额0\\n有效进房率3.50% ⬇ ,平均停留:\\n2m in25s\\n◦\\n人数:平均在线42,最高71,看\\n播人数:1758,粉丝占比30.8% \\n•\\n脚本&直播总结:\\n◦\\n塑品需要一定时间\\n◦\\n引流课:导入私域","source_page":20,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=20","record_day":31,"average_online":42},{"date":"2025-07-04","title":"7月4日 · 咨询与课程直播","dur":"1小时57分钟","views":1798,"peak":62,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day30-7.4(周五)\\n•\\n直播时间:聊话题+塑品(精讲课)\\n🎁\\n•数据:1h57m in\\n◦\\n销售额1196(精讲课)\\n有效进房率4.20% ⬇ ,平均停留:2m in28s\\n◦\\n人数:平均在线41,最高62,看播人数:1798,粉丝占比35.4% \\n•\\n脚本&直播总结:\\n◦\\n塑品需要一定时间\\n◦\\n引流课:导入私域>一定要联系一对一咨询>按分钟计费、学会学习","source_page":19,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=19","record_day":30,"average_online":41},{"date":"2025-07-03","title":"7月3日 · 咨询与课程直播","dur":"未记录","views":null,"peak":79,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day29-7.3(周四)\\n•\\n直播时间:聊话题+塑品(精讲课)\\n🎁\\n•数据:\\n◦\\n销售额598(精讲课)\\n◦\\n有效进房率4.20% ⬇ ,平均停\\n留:2m in19s\\n◦\\n人数:平均在线34,最高79,看\\n播人数:2124,粉丝占比28.1% \\n•\\n脚本&直播总结:\\n◦\\n塑品状态不好:佳贤不要背对镜头","source_page":18,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=18","record_day":29,"average_online":34},{"date":"2025-07-01","title":"7月1日 · 咨询与课程直播","dur":"1小时27分钟","views":null,"peak":56,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day28-7.1(周二)\\n•\\n直播时间:聊话题+塑品(精讲课、书)\\n🎁\\n•数据:1h27m in\\n◦\\n销售额1196(精讲课)\\n◦\\n有效进房率3.70% ⬇ ,平均停\\n留:1m in49s\\n◦\\n人数:平均在线34,最高56,看\\n播人数:1665,粉丝占比30% \\n•\\n脚本&直播总结:\\n◦\\n化点妆,不要暗、憔悴,穿玫红/格子衬衫\\n◦\\n佳贤不要总是背对镜头\\n◦\\n白皙-25","source_page":17,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=17","record_day":28,"average_online":34},{"date":"2025-06-30","title":"6月30日 · 咨询与课程直播","dur":"1小时59分钟","views":null,"peak":89,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day27-6.30(周一)\\n•\\n直播时间:聊话题+塑品(精讲课、书)\\n🎁\\n•数据:1h59m in\\n◦\\n销售额2691(精讲课)\\n◦\\n有效进房率2.92% ⬇ ,平均停\\n留:3m in8s\\n◦\\n人数:平均在线58,最高89,看\\n播人数:2169,粉丝占比30% \\n•\\n脚本&直播总结:\\n◦\\n隔一段时间有金句拉流量,讲慢讲透\\n◦\\n画面人物要小、层次感\\n◦\\n塑品要憋单(特别想买的时候上架)","source_page":16,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=16","record_day":27,"average_online":58},{"date":"2025-06-28","title":"6月28日 · 咨询与课程直播","dur":"1小时50分钟","views":null,"peak":59,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day26-6.28(周六)\\n•\\n直播时间:聊话题+塑品(精讲课、书)\\n🎁\\n•数据:1h50m in\\n◦\\n销售额299(精讲课)\\n◦\\n有效进房率2.74% ⬇ ,平均停\\n留:3m in19s\\n◦\\n人数:平均在线42,最高59,看\\n播人数:1365\\n•\\n脚本&直播总结:\\n◦\\n还是有家⻓反应太快,一些点是否所有人\\n都懂,需要拆开","source_page":15,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=15","record_day":26,"average_online":42},{"date":"2025-06-27","title":"6月27日 · 咨询与课程直播","dur":"1小时56分钟","views":null,"peak":87,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day25-6.27(周五)\\n•\\n直播时间:聊话题\\n🎁\\n•数据:1h56m in\\n◦\\n有效进房率3.07% ⬇ ,平均停\\n留:2m in38s\\n◦\\n人数:平均在线54,最高87,看\\n播人数:2353\\n•\\n脚本&直播总结:\\n◦\\n换黑板 ✅\\n◦\\n推荐教辅-人数变多","source_page":14,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=14","record_day":25,"average_online":54},{"date":"2025-06-25","title":"6月25日 · 咨询与课程直播","dur":"1小时23分钟","views":1410,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day24-6.25(周三)\\n•\\n直播时间:聊话题\\n🎁\\n•数据:1h23m in\\n◦\\n有效进房率3.91% ⬆ ,平均停\\n留:1m in57s\\n◦\\n人数:平均在线35,看播人数:\\n1410\\n•\\n脚本&直播总结:\\n◦\\n连⻨开始就放塑品链接","source_page":13,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=13","record_day":24,"average_online":35},{"date":"2025-06-24","title":"6月24日 · 咨询与课程直播","dur":"1小时20分钟","views":1484,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day23-6.24(周二)\\n•\\n直播时间:聊话题\\n🎁\\n•数据:1h20m in\\n◦\\n有效进房率3.07% ⬆ ,平均停\\n留:1m in43s\\n◦\\n人数:平均在线38,看播人数:\\n1484\\n•\\n脚本&直播总结:\\n◦\\n连⻨开始就放塑品链接\\n◦\\n两个299产品(精讲课/咨询一对一)\\n◦\\n暖色背景、红色衣服、说话要亲和一点;\\n话题中间转换再顺\\n◦\\n内容:通俗、包装\\n◦\\n让家⻓意识到自己有问题、产品对孩子好\\n◦\\n让家⻓觉得很重要、再不买就来不及","source_page":12,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=12","record_day":23,"average_online":38},{"date":"2025-06-23","title":"6月23日 · 咨询与课程直播","dur":"1小时28分钟","views":2036,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day22-6.23(周一)\\n•\\n直播时间:聊话题\\n🎁\\n•数据:1h28m in\\n◦\\n有效进房率3.59% ⬆ ,平均停\\n留:2m in8s\\n◦\\n人数:平均在线50,看播人数:\\n2036","source_page":11,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=11","record_day":22,"average_online":50},{"date":"2025-06-21","title":"6月21日 · 咨询与课程直播","dur":"1小时52分钟","views":1989,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day21-6.21(周六)\\n•\\n直播时间:聊话题+卖精讲课\\n🎁\\n•数据:1h52m in\\n◦\\n有效进房率3.98% ⬆ ,平均停\\n留:2m in55\\n◦\\n人数:平均在线53,看播人数:\\n1989\\n•\\n脚本&直播总结:\\n◦\\n好:情绪状态ok\\n◦\\n佳贤:黑板写完了没给镜头看\\n◦\\n内容:\\n◦\\n布局:连⻨家⻓提前联系","source_page":11,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=11","record_day":21,"average_online":53},{"date":"2025-06-20","title":"6月20日 · 咨询与课程直播","dur":"1小时20分钟","views":816,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day20-6.20(周五)\\n•\\n直播时间:聊话题+卖笔记/5m in咨询\\n🎁\\n•数据:1h20m in\\n◦\\n有效进房率3.26% ⬇ ,平均停留:2m in18\\n◦\\n人数:平均在线24,看播人数:816\\n•\\n脚本&直播总结:\\n◦\\n内容:干货讲太久\\n◦\\n布局:连⻨家⻓提前联系\\n◦\\n小黑板 ✅\\n◦\\n可以试着换一种方式说实话:家⻓核心痛点不丢人\\n◦\\n跟着优优老师:先学精讲课,再跟着我一对一成为学霸","source_page":10,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=10","record_day":20,"average_online":24},{"date":"2025-06-19","title":"6月19日 · 咨询与课程直播","dur":"未记录","views":null,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day19-6.19(周四)\\n•\\n直播时间:聊话题\\n🎁\\n•数据:\\n◦\\n有效进房率3.78% ⬇\\n◦\\n人数:平均在线28\\n•\\n脚本&直播总结:\\n◦\\n⻆色:佳贤/宛珈的话量-宛珈主导+佳贤总\\n结金句\\n◦\\n宛珈的信念感:眼神不要飘+家⻓听我的\\n(你的孩子会有改变)\\n◦\\n和家⻓:聊开心+感染力(让直播间氛围\\n好)+互动(家⻓听明白了吗?)\\n◦\\n开头:比较尴尬、人数少>>讲话题:备考\\n技巧、泛流量干货(考前心理/暑假)\\n◦\\n衣服换红色","source_page":9,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=9","record_day":19,"average_online":28},{"date":"2025-06-17","title":"6月17日 · 咨询与课程直播","dur":"未记录","views":null,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day18-6.17(周二)\\n•\\n直播时间:聊话题\\n🎁\\n•数据:\\n◦\\n有效进房率4% ⬆ *画面质感\\n◦\\n人数:平均在线40+\\n•\\n脚本&直播总结:\\n◦\\n泛流量","source_page":8,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=8","record_day":18,"average_online":40},{"date":"2025-06-14","title":"6月14日 · 咨询与课程直播","dur":"未记录","views":null,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day17-6.14(周六)\\n•\\n直播时间:聊话题\\n🎁\\n•数据:\\n◦\\n有效进房率3.32% ⬇\\n◦\\n人数:平均在线31\\n•\\n脚本&直播总结:\\n◦\\n泛流量\\n◦\\n品牌:占领用戶心智\\n▪\\nIP:亲切+教人自学的清华学姐\\n•\\n不补课、上名校;自学、自律\\n▪\\n课:优优亲授−三步成才法。效果:差\\n生逆袭,中等生突⻜猛进,优等生拔高\\n上清北\\n◦\\n话题要围绕IP本身:\\n▪\\n快乐学习、正能量、乐趣\\n▪\\n佳贤人设:朴实、阳光、抛出话题+共\\n鸣\\n◦\\n同一话题聊三天,新话题:\\n寒⻔出贵子是不是越来越难了?\\n国家志愿填报系统上线,张雪峰老师们要失业\\n了吗?","source_page":7,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=7","record_day":17,"average_online":31},{"date":"2025-06-13","title":"6月13日 · 咨询与课程直播","dur":"未记录","views":null,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day16-6.13(周五)\\n•\\n直播时间:聊话题\\n🎁\\n•数据:\\n◦\\n有效进房率3% ⬇\\n◦\\n人数:平均在线28\\n•\\n脚本&直播总结:\\n◦\\n对话感加强,眼神明显看稿\\n◦\\n背景灯光不要有倒影\\n◦\\n贴片和色调偏暖一点\\n◦\\n话题>聊的质量,不要干货\\n◦\\n福利塑品:(快速close)-单数、时间\\n▪\\n黑板上两次福利时间;5分钟;只有十\\n单+课程好评\\n▪\\n福利:和清北学霸面对面,倒计时\\n54321\\n▪\\n书:本身值98;咨询一年,免费送;\\n还有几单54321\\n▪\\n下架:10987654321","source_page":7,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=7","record_day":16,"average_online":28},{"date":"2025-06-12","title":"6月12日 · 咨询与课程直播","dur":"未记录","views":null,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day15-6.12(周四)\\n•\\n直播时间:聊话题\\n📌\\n•数据:\\n◦\\n有效进房率3.81% \\n(=进房后停留30s人/有效曝光\\n人数)\\n◦\\n人数:平均在线41\\n•\\n脚本&直播总结:\\n◦\\n镜头微调、板擦和笔用好用的\\n◦\\n前30m in用好黑板+不要读稿子\\n◦\\n贴片优化\\n◦\\n节奏:一个话题不超过2m in\\n◦\\n前三个话题普遍性\\n◦\\n引导用戶点赞、转发+录屏\\n◦\\n着装:正式一点+清华元素\\n\\n◦\\n高中家⻓、学弟学妹>>中小学家\\n⻓/中小学的妈妈们/宝宝们","source_page":6,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=6","record_day":15,"average_online":41},{"date":"2025-06-11","title":"6月11日 · 咨询与课程直播","dur":"未记录","views":null,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day14-6.11(周三)\\n•\\n直播时间:彩排(聊话题)\\n•\\n脚本&直播总结:\\n◦\\n两个人的手势要丰富一点(X砍、劈、斩)\\n◦\\n桌面要干净\\n◦\\n前面放提词板\\n◦\\n强调结论、反复","source_page":6,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=6","record_day":14},{"date":"2025-06-09","title":"6月9日 · 咨询与课程直播","dur":"1小时35分钟","views":null,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day13-6.9(周一)\\n•\\n直播时间:1h35m in(对话)\\n•\\n销售额:蝴蝶号(NA)\\n•\\n脚本&直播总结:\\n◦\\n两个人的配合有待加强,IP的人设不够强\\n◦\\n找流量话题,佳贤提问+总结,宛珈提出观点+讲故事\\n◦\\nppt、背景要精致一些\\n◦\\n赠送体验课时\\n◦\\n规划一周的内容,每天预约固定时段","source_page":5,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=5","record_day":13},{"date":"2025-06-07","title":"6月7日 · 咨询与课程直播","dur":"1小时35分钟","views":null,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day12-6.7(周六)\\n•\\n直播时间:1h35m in(对话)\\n•\\n销售额:蝴蝶号(691)+抖抖(0)\\n•\\n脚本总结:\\n◦\\n佳贤的身份:访谈主持人\\n◦\\n和家⻓互动(容易回答、回答对和错)、点赞转发\\n◦\\nq家⻓:观点讲完以后回归家⻓\\n◦\\n之后预约后续直播,系列主题\\n•\\n产品调整:\\n◦\\n只塑一个品\\n◦\\n精细报告:高价产品\\n◦\\n每五m in抽福利品(抽奖、福袋)-咨询、笔记(如:让家⻓666刷屏随机截取)\\n•\\n直播状态:\\n◦\\n佳贤-快慢结合\\n◦\\n宛珈-总分总(先抛出观点,加表情和动作)减少分析内容量(回归家⻓)\\n◦\\n十五秒:120/150没考到的、100分中80没拿到的,家⻓回复一下,告诉大家能解决,用我的课\\n已经解决过很多,后面再讲,现讲...","source_page":5,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=5","record_day":12},{"date":"2025-06-06","title":"6月6日 · 咨询与课程直播","dur":"未记录","views":null,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day11-6.6(周五)\\n•\\n直播时间:NA(彩排对话)\\n•\\n销售额:蝴蝶号+抖抖(NA)","source_page":5,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=5","record_day":11},{"date":"2025-06-05","title":"6月5日 · 咨询与课程直播","dur":"未记录","views":null,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day10-6.5(周四)\\n•\\n直播时间:\\n•\\n销售额:蝴蝶号(0)+抖抖(0)","source_page":5,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=5","record_day":10},{"date":"2025-06-04","title":"6月4日 · 咨询与课程直播","dur":"1小时42分钟","views":null,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day9-6.4(周三)\\n•\\n直播时间:1h42m in\\n•\\n销售额:蝴蝶号299+抖抖0\\n•\\n脚本总结:\\n◦\\n心态策略流量话题没问题\\n•\\n直播状态:\\n◦\\n太冲了,要加强亲和力\\n成交:举例-内驱力、看逆袭故事","source_page":4,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=4","record_day":9},{"date":"2025-06-03","title":"6月3日 · 咨询与课程直播","dur":"未记录","views":null,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day8-6.3(周二)\\n•\\n直播时间:50m in+1h(共\\n两场,中间复盘)\\n•\\n销售额:蝴蝶号598+抖抖\\n•\\n脚本&直播状态总结:\\n◦\\n增加道具:kt板(干货\\n要点、塑品要点)\\n成交:咨询只有20个名额、课程⻓\\n期有效\\n成交:咨询定价,少买一件衣服孩\\n子就可和顶级学霸一对一","source_page":3,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=3","record_day":8},{"date":"2025-06-02","title":"6月2日 · 咨询与课程直播","dur":"2小时2分钟","views":null,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day7-6.2(周一)\\n•\\n直播时间:2h2m in\\n•\\n销售额:蝴蝶号598+抖抖","source_page":3,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=3","record_day":7},{"date":"2025-06-01","title":"6月1日 · 咨询与课程直播","dur":"未记录","views":null,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day6-6.1\\n•\\n直播时间:2h+44m in(共两场,中间复盘)\\n•\\n销售额:蝴蝶号598+抖抖299\\n•\\n脚本总结:\\n◦\\n心态策略;脚本:造势+短视频脚本,卖关子;最重要:节奏要连续(流量话题)\\n◦\\n低速高频词输出:有经验老道;家⻓⻆度:方法、心态(举例子:泛泛的例子)\\n◦\\n点到家⻓:e.g.只要是正常发挥就已经是理想了\\n◦\\n内容为王:不要扯观众不感兴趣的点;数据好的内容继续延伸;让家⻓记下来、没记下来再讲\\n一遍\\n◦\\n塑品:建立信任-最后集中塑品(有层次);加下一场直播预约信息\\n•\\n中间复盘之后第二场:\\n◦\\n流量话题不断,人数明显上涨;直播注意:热点话题连贯输出,时常Q家⻓Q产品(XX家⻓,这\\n个话题对您孩子有XX影响,建议你们拿笔或者用手机备忘录记录一下......//XX家⻓,有XX问\\n题,我用XX产品解决过,或者解决过更严重的问题......我后边再详细说。我先说......继续热点\\n话题),三句话以内别打断话题节奏,憋单再集中成单。\\n◦\\n热点话题,类似脚本,有层次的讲解,我们是需要总结规律的。塑品有层次的讲解,也有类似\\n规律。再者,就是两者的关联。","source_page":3,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=3","record_day":6},{"date":"2025-05-31","title":"5月31日 · 咨询与课程直播","dur":"1小时23分钟","views":null,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day5-5.31\\n•\\n直播时间:1h23m in\\n•\\n销售额:蝴蝶号598+抖抖0\\n•\\n脚本总结:\\n◦\\n语文英语","source_page":2,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=2","record_day":5},{"date":"2025-05-30","title":"5月30日 · 咨询与课程直播","dur":"1小时08分钟","views":null,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day4-5.30\\n•\\n直播时间:1h08m in\\n•\\n销售额:蝴蝶号598+抖抖0\\n•\\n脚本总结:\\n◦\\n数学物理","source_page":2,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=2","record_day":4},{"date":"2025-05-29","title":"5月29日 · 咨询与课程直播","dur":"1小时30分钟","views":null,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day3-5.29\\n•\\n直播时间:1h30m in\\n•\\n销售额:蝴蝶号299+抖抖299\\n•\\n脚本总结:\\n◦\\n塑品仍然不足","source_page":2,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=2","record_day":3},{"date":"2025-05-28","title":"5月28日 · 咨询与课程直播","dur":"1小时20分钟","views":null,"peak":null,"hot":null,"gmv":null,"status":"直播复盘","visual":{},"source_text":"Day2-5.28\\n•\\n直播时间:1h20m in\\n•\\n销售额:蝴蝶号299+抖抖299\\n•\\n脚本总结:\\n◦\\n塑品仍然不足\\n◦\\n稀缺性:还剩多少单\\n◦\\n场景化:找到清北学霸,上市公司的家⻓\\n也很难,想象一下自己孩子每周都能跟清\\n北学霸咨询复盘,几百块钱,比当地找一\\n个本科师范毕业的老师都便宜\\n•\\nQ&A:对于问学科的家⻓:直接告诉找优优学\\n姐,来一对一咨询\\n◦\\n把家⻓常问的问题,捋一下@ 佳贤、李云\\n⻰\\n◦\\n促品话术:可以用4个层次\\n▪\\n1v1咨询\\n▪\\n价格优惠\\n▪\\n送书\\n▪\\n售后:不是真人退款\\n•\\n直播状态总结:\\n◦\\n前半段需要更多和家⻓的互动\\n◦\\n不用和无关家⻓打招呼\\n◦\\n可以尝试助播交流\\n◦\\n目标脱稿-->增加表现力","source_page":1,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=1","record_day":2},{"date":"2025-05-27","title":"5月27日 · 咨询与课程直播","dur":"1小时10分钟","views":null,"peak":null,"hot":null,"gmv":"¥0","status":"直播复盘","visual":{},"source_text":"Day1-5.27\\n•\\n直播时间:1h10m in\\n•\\n销售额:0\\n•\\n脚本总结:\\n◦\\n塑品不足,没有逼单话术\\n◦\\n不够强调稀缺性\\n◦\\n直播前期干货比较冗⻓\\n◦\\n讲:高考物理满分-流量陡升\\n◦\\n讲案例:每个部分太⻓\\n•\\n直播状态总结:\\n◦\\n直播声音比较紧、对产品不够熟悉\\n◦\\n不够自信","source_page":1,"source_uri":"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf#page=1","record_day":1}],"notes":[{"date":"2025-11-15","day":"Day20-11.15 · 周六","time":"1h58m","cards":[{"k":"有效送牌","v":"2%","tip":"低于同档 -1.4pp"},{"k":"峰值在线","v":"140","tip":"对比 11-13 持平"},{"k":"平均在线","v":"37","tip":"中段掉量明显"},{"k":"成交金额","v":"¥0","tip":"未挂车"}],"remark":"周中段流量一般，后半段灰度高，互动率仅 0.31%","script":[{"k":"主题","v":"周回顾 + 下周预告 · 未挂车"},{"k":"角色·表现","v":"主播语速稳定，但 30m 后肢体动作减少"},{"k":"互动钩子","v":"设置\\"这周最有感的题\\"提问，回复量 +34%"},{"k":"布场","v":"白墙 + 绿植，背景偏单调"}],"visual":{"light":"台灯暖光(偏弱)","setup":"卧室书桌+绿植","body":"白T恤·盘腿","gesture":"讲题时手指点习题册"}},{"date":"2025-11-14","day":"Day19-11.14 · 周五","time":"1h57m","cards":[{"k":"有效送牌","v":"2.6%","tip":""},{"k":"峰值在线","v":"118","tip":"中段"},{"k":"平均在线","v":"31","tip":"前 30m 较好"},{"k":"成交金额","v":"¥0","tip":"未挂车"}],"remark":"周五晚高峰预期更高，但因开学季用户注意力分散在线仅比周二低","script":[{"k":"主题","v":"错题类型分类 + 答疑 · 信息密度大"},{"k":"角色·表现","v":"语速快，学员跟读部分略弱"},{"k":"互动钩子","v":"抽 3 位连麦答疑，停留 +28%"},{"k":"布场","v":"白炽灯偏黄，色温不统一"}],"visual":{"light":"白炽灯偏黄","setup":"书桌前","body":"白衬衫","gesture":"双手交叉抱胸"}},{"date":"2025-11-13","day":"Day18-11.13 · 周四","time":"1h49m","cards":[{"k":"有效送牌","v":"4%","tip":"高于同档 +2.1pp"},{"k":"峰值在线","v":"143","tip":"全场 Top 25%"},{"k":"平均在线","v":"40+","tip":""},{"k":"成交金额","v":"¥3930","tip":"本月新高"}],"remark":"开局流量一般但有效送牌率高，结尾变阵告成","script":[{"k":"还流量","v":"用\\"小明妈妈\\"案例铺垫，激发家长焦虑"},{"k":"角色·表现","v":"主聊表情自然，偶有翻页停顿"},{"k":"收益话术","v":"强调\\"同桌都在用\\"\\"班级前三都在用\\""},{"k":"小琳桥段","v":"插入\\"小琳妈当场咨询\\"引发群内追评"},{"k":"布场","v":"背景加\\"清华录取截图\\"贴纸"}],"visual":{"light":"顶光偏白·均匀","setup":"卧室书桌 + 书架","body":"白T恤·盘发","gesture":"笔指屏幕"}},{"date":"2025-11-11","day":"Day17-11.11 · 周二","time":"1h52m","cards":[{"k":"有效送牌","v":"3.2%","tip":""},{"k":"峰值在线","v":"109","tip":"中等"},{"k":"平均在线","v":"33","tip":""},{"k":"成交金额","v":"¥1395","tip":"中位数"}],"remark":"选品挂车 1 件（教辅），转化依赖一句话钩子","script":[{"k":"主题","v":"高一数学 → 教辅书推荐"},{"k":"收益话术","v":"提到\\"清华附中同款\\"购买意愿 +27%"},{"k":"布场","v":"讲台摆教辅实物，转化最显眼"},{"k":"互动钩子","v":"限时优惠口令 + 福利券"}],"visual":{"light":"暖光台灯(中)","setup":"书桌","body":"盘发·白T","gesture":"比划举例"}},{"date":"2025-11-10","day":"Day16-11.10 · 周一","time":"1h51m","cards":[{"k":"有效送牌","v":"2.4%","tip":""},{"k":"峰值在线","v":"127","tip":""},{"k":"平均在线","v":"34","tip":""},{"k":"成交金额","v":"¥199","tip":"挂车未走心"}],"remark":"周一晚高峰预期达 127，但互动深度不足，30m 后流失快","script":[{"k":"主题","v":"新教材改版 · 对比解读"},{"k":"角色·表现","v":"主播略显疲惫(开场即抱头)"},{"k":"互动钩子","v":"投票题\\"你们新教材是哪个版本\\"互动 +18%"},{"k":"布场","v":"背景书墙略显杂乱"}],"visual":{"light":"偏暗暖光","setup":"背景书墙","body":"米色针织衫","gesture":"托腮讲解"}},{"date":"2025-11-08","day":"Day15-11.08 · 周六","time":"1h41m","cards":[{"k":"有效送牌","v":"3.4%","tip":""},{"k":"峰值在线","v":"121","tip":""},{"k":"平均在线","v":"39","tip":"留存好"},{"k":"成交金额","v":"¥2531","tip":"第二高"}],"remark":"保留推荐路径：主聊 + 学员 + 实时弹幕反馈，效果突出","script":[{"k":"主题","v":"高二一轮复习启动 · 答疑场"},{"k":"收益话术","v":"现场连麦 3 位家长，痛点匹配精准"},{"k":"互动钩子","v":"弹幕抽奖(2 名 1v1 答疑)"},{"k":"布场","v":"书桌+绿植，光线明亮，背景干净"}],"visual":{"light":"白光(均匀)","setup":"书桌+绿植","body":"高马尾·蓝条纹衬衫","gesture":"侧头看屏"}},{"date":"2025-11-07","day":"Day14-11.07 · 周五","time":"1h52m","cards":[{"k":"有效送牌","v":"2.8%","tip":""},{"k":"峰值在线","v":"136","tip":"本周前列"},{"k":"平均在线","v":"38","tip":""},{"k":"成交金额","v":"¥597","tip":"中等"}],"remark":"开局流量大，但中途未及时挂车，错过转化峰值","script":[{"k":"主题","v":"初中数学思维 · 试听场"},{"k":"角色·表现","v":"活力足，手势幅度大"},{"k":"互动钩子","v":"举\\"豆豆妈\\"真实案例，激发共鸣"},{"k":"布场","v":"客厅书桌，光线略冷"}],"visual":{"light":"顶灯偏冷","setup":"客厅书桌","body":"白衬衫","gesture":"翻习题册"}},{"date":"2025-11-07c","day":"测流场 · 临时","time":"49m","cards":[{"k":"有效送牌","v":"0%","tip":"测流无人"},{"k":"峰值在线","v":"1","tip":"自身测试"},{"k":"平均在线","v":"1","tip":""},{"k":"成交金额","v":"¥0","tip":""}],"remark":"内部设备/网络测试，不计入内容场次","script":[{"k":"主题","v":"画面 + 麦克风测流"},{"k":"互动钩子","v":"无"},{"k":"布场","v":"白墙，无布景"}],"visual":{"light":"白光","setup":"白墙","body":"黑T","gesture":"挥手示意"}}],"scripts":[{"id":1,"t":"新学期第一场·高中数学","d":"08-25","len":"1h","blocks":"开场互动(5m) → 暑期复盘(10m) → 新学期规划(20m) → Q&A(25m)"},{"id":2,"t":"高二数学答疑","d":"08-20","len":"1h","blocks":"痛点收集(5m) → 一轮复习节奏(20m) → 现场答疑(35m)"},{"id":3,"t":"暑假收心专场","d":"08-15","len":"48m","blocks":"互动开场(3m) → 收心方法(15m) → 家长答疑(30m)"},{"id":4,"t":"高一家长会·破冰","d":"09-02","len":"50m","blocks":"高一现状数据(10m) → 家长最关心的 3 件事(20m) → Q&A(20m)"},{"id":5,"t":"高三一轮启动·直播脚本","d":"09-10","len":"90m","blocks":"开场送福利(5m) → 一轮节奏(25m) → 高频考点串讲(30m) → 现场答疑(30m)"},{"id":6,"t":"初三数学答疑专场","d":"10-15","len":"1h","blocks":"家长开场(5m) → 中考考情(20m) → 真题演练(15m) → Q&A(20m)"},{"id":7,"t":"初一数学查漏补缺","d":"11-02","len":"45m","blocks":"学情诊断(10m) → 错题共性(15m) → 提分方法(20m)"},{"id":8,"t":"11-13 高成交复刻·挂车版","d":"11-13","len":"1h","blocks":"开场送牌(5m) → 案例铺垫(15m) → 教辅讲解(20m) → 限时福利(20m)"}]}'),Sd={benchmarks:[{id:1,name:"汪舅舅",fans:"32.1w",updated:"昨日",viral:3,health:"green",state:"监控中",note:"知识类大号 · 选题逻辑高度匹配",why:null},{id:2,name:"清华杨奇函语文说",fans:"18.7w",updated:"3 天前",viral:5,health:"green",state:"监控中",note:"清华系账号 · 钩子结构可借鉴",why:null},{id:3,name:"学霸来了",fans:"12.4w",updated:"昨日",viral:2,health:"warn",state:"监控中",note:"小学家长市场 · 可作关联账号",why:null},{id:4,name:"小数学家日记",fans:"5.6w",updated:"今日",viral:1,health:"green",state:"AI 发现",note:null,why:"选题结构与你高度相似"},{id:5,name:"清华爸带娃",fans:"8.2w",updated:"昨日",viral:2,health:"green",state:"AI 发现",note:null,why:"评论区互动高，转化潜力大"},{id:6,name:"初中家长圈",fans:"6.7w",updated:"今日",viral:1,health:"green",state:"AI 发现",note:null,why:"初中家长群高频转发"},{id:7,name:"杨老师讲数学",fans:"14.2w",updated:"2 天前",viral:3,health:"green",state:"监控中",note:"干货派 · 时长较长结构稳定",why:null},{id:8,name:"高考冲刺日记",fans:"9.8w",updated:"昨日",viral:2,health:"warn",state:"AI 发现",note:null,why:"情感向 · 完播率结构好"}],virals:[{id:13,t:"清华学霸到底有多牛？天才只是见我的门槛",src:"清华杨奇函语文说",likes:"10w+",dur:"03:44"},{id:14,t:"家和万事兴的真正含义",src:"汪舅舅",likes:"9w",dur:"03:12"},{id:15,t:"高中作息时间表",src:"高考冲刺日记",likes:"7.1k",dur:"02:12"},{id:16,t:"小学三步法",src:"学霸来了",likes:"5.6k",dur:"02:48"},{id:17,t:"数学130错题本模板",src:"杨老师讲数学",likes:"5.4k",dur:"04:50"},{id:18,t:"高三家长最容易犯的错",src:"清华爸带娃",likes:"3.9k",dur:"03:18"}]},$d={scripts:[{id:"s1",t:"清华学霸的学习方法",src:"历史",dur:"00:47",tag:"干货"},{id:"s2",t:"高一学生避坑指南",src:"历史",dur:"00:37",tag:"避坑"},{id:"s3",t:"开学前 7 天收心计划",src:"对标·汪舅舅",dur:"03:30",tag:"工具"},{id:"s4",t:"数学想考 130 全流程",src:"对标·杨奇函",dur:"04:25",tag:"干货"},{id:"s5",t:"高三家长最容易犯的错",src:"对标·清华爸带娃",dur:"03:18",tag:"情感"},{id:"s6",t:"语文作文万能结构",src:"对标·杨奇函",dur:"05:02",tag:"干货"},{id:"s7",t:"初二两极分化元凶",src:"对标·初中家长圈",dur:"03:46",tag:"避坑"},{id:"s8",t:"考试粗心其实是能力问题",src:"历史",dur:"01:42",tag:"干货"},{id:"s9",t:"新学期语数英如何规划",src:"对标·汪舅舅",dur:"04:11",tag:"工具"},{id:"s10",t:"清华学霸到底有多牛",src:"对标·杨奇函",dur:"03:44",tag:"热门"},{id:"s11",t:"初三家长群答疑·高频 5",src:"WIKI·11 月",dur:"02:20",tag:"答疑"},{id:"s12",t:"9 月开学第一周怎么过",src:"WIKI·9 月",dur:"01:50",tag:"情感"}],library:[{id:"l1",type:"feishu",name:"短视频脚本库（飞书）",meta:"187 个脚本 · 09-01 更新",url:"https://caocp410jp.feishu.cn/docx/WoKwdMyBYoIQpqxQH32cUVqmnic"},{id:"l2",type:"feishu",name:"直播复盘（飞书）",meta:"12 场直播 · 含销售记录",url:"https://caocp410jp.feishu.cn/docx/E6Vsd31qDoO9VXxAyQWcbFH8n4b"},{id:"l3",type:"feishu",name:"直播脚本（飞书）",meta:"8 套模板",url:"https://caocp410jp.feishu.cn/docx/OqMDd8DI0ouQdwxv5WlcWzqOnNg"},{id:"l4",type:"feishu",name:"对标账号汇总表",meta:"8 个对标账号 · 含备注",url:"https://caocp410jp.feishu.cn/docx/WoKwdMyBYoIQpqxQH32cUVqmnic"},{id:"l5",type:"file",name:"双 11 直播回放.mp4",meta:"4.2 GB · 11-13 场",url:null},{id:"l6",type:"link",name:"抖音·汪舅舅主页",meta:"短视频对标参考",url:"https://www.douyin.com/"},{id:"l7",type:"file",name:"9 月选题日历.xlsx",meta:"12 个月节点",url:null},{id:"l8",type:"link",name:"小红书·学习方法合集",meta:"热门笔记参考",url:"https://www.xiaohongshu.com/"}]},Td={dashboard:wd,wiki:kd,live:xd,bench:Sd,scripts:$d},ra="https://northstar-copilot.com/api",Do="redcowork-replica-v2_token";function Cd(){return localStorage.getItem(Do)||""}function or(e){e?localStorage.setItem(Do,e):localStorage.removeItem(Do)}function lc(){const e=Cd();return e?{Authorization:"Bearer "+e}:{}}async function Lt(e,n={}){var i,o,r;const t={...n,headers:{...lc(),...n.headers||{}}};let s;try{s=await fetch(ra+e,t)}catch(a){if(!["/cue/guest","/cue/intent"].includes(e))throw a;try{s=await fetch(ra+e,t)}catch{throw new Error("与本地服务的连接中断，请点击重新生成重试。问题和引用资料已保留。")}}if(!s.ok){const a=await s.json().catch(()=>({})),u=Array.isArray(a.detail)?a.detail.map(c=>{const h=Array.isArray(c.loc)?c.loc[c.loc.length-1]:"内容";return`${{title:"资料名称",text:"正文",source:"来源",url:"链接"}[h]||h}填写不完整`}).join("；"):"",p=new Error(typeof a.detail=="string"?a.detail:((i=a.detail)==null?void 0:i.message)||u||`接口 ${e} 返回 ${s.status}`);throw p.canContinue=((o=a.detail)==null?void 0:o.can_continue)===!0,p.code=(r=a.detail)==null?void 0:r.code,p}return s.json()}async function it(e,n){return Lt(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})}async function oc(e){return Lt(e,{method:"DELETE"})}async function Dd(){return Td}async function Ad(){return{...await Dd(),source:"static"}}async function Ed(e,n){const t=await it("/auth/login",{username:e,password:n});return or(t.token),t.user}async function Id(e,n,t){const s=await it("/auth/register",{username:e,password:n,display_name:t});return or(s.token),s.user}async function Md(){try{await it("/auth/logout",{})}catch{}or("")}async function Od(){return null}async function Rd(e){try{return{ok:!0,script:(await it("/scripts",e)).script}}catch(n){return{ok:!1,error:n.message}}}async function Pd(e){try{return{ok:!0,task:(await it("/planning-tasks",e)).task}}catch(n){return{ok:!1,error:n.message}}}async function Ld(){try{return await Lt("/sync/status")}catch{return{login:{logged_in:!1},login_task:{running:!1}}}}async function Nd(){try{return(await Lt("/channels")).channels||[]}catch{return[]}}async function Fd(e,n="",t="wechat",s=""){return it("/channels",{name:e,finder_uin:n,platform:t,profile:s})}async function zd(e){return oc("/channels/"+e)}async function Ud(){const e=await fetch("/api/sync/qrcode?ts="+Date.now(),{headers:lc()});if(!e.ok)throw new Error(`二维码返回 ${e.status}`);const n=await e.blob();return URL.createObjectURL(n)}const rc=()=>Lt("/knowledge"),jd=e=>Lt("/knowledge/"+e),Bd=e=>it("/knowledge/"+e+"/analyze",{}),Jl=e=>oc("/knowledge/"+e),Vd=(e,n)=>Lt("/knowledge/"+e,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}),ac=e=>it("/knowledge/text",e),Xd=e=>it("/knowledge/spaces",e);async function Wd(e){const n=new FormData;return n.append("file",e),Lt("/knowledge/upload",{method:"POST",body:n})}const aa=(e,n="",t=[],s={})=>it("/cue",{question:e,context:n,history:t,...s}),Hd=()=>Lt("/cue/conversations"),qd=e=>Lt("/cue/conversations/"+e),Kd=e=>it("/cue/conversations",e),Gd=()=>Lt("/cue/tasks"),Yd=e=>it("/cue/tasks",e),Qd=e=>it("/cue/artifacts",e),ua=(e,n="",t=[],s={})=>it("/cue/guest",{question:e,context:n,history:t,...s}),Jd=(e,n)=>it("/cue/intent",{question:e,page:n}),Zd="https://caocp410jp.feishu.cn/docx/WoKwdMyBYoIQpqxQH32cUVqmnic",ca="https://caocp410jp.feishu.cn/docx/E6Vsd31qDoO9VXxAyQWcbFH8n4b",e2="https://caocp410jp.feishu.cn/docx/OqMDd8DI0ouQdwxv5WlcWzqOnNg",n2={dashboard:"经营看板",wiki:"知识库",scripts:"短视频脚本",planning:"内容排期","live-summary":"直播复盘","live-script":"直播脚本",bench:"对标账号","bench-compare":"竞品对比"},t2={dashboard:"演示工作区 · 已载入历史资料与示例数据",wiki:"跨场景共享 · 分类 / 搜索 / 溯源 / AI 总结",scripts:"短视频脚本 · 持续沉淀",planning:"全量内容甘特 · 热点标注 · 下一步提醒","live-summary":"清华优优· 直播数据与画面复盘","live-script":"直播脚本模板",bench:"对标监控 + 爆款抓取","bench-compare":"账号、数据、内容与 AI 洞察（内容数据)"},ml=["./assets/covers/qinghua-vlog.png","./assets/covers/xinhua-repost.png","./assets/covers/qinghua-effort.png","./assets/covers/pressure-3sentences.png","./assets/covers/english-140.png","./assets/covers/gaoyi-mistakes.png"],da={考清华是因为努力还是天赋:"./assets/covers/qinghua-effort.png",优优的学习方法被新华社转发:"./assets/covers/xinhua-repost.png","高中生压力大，送给他这3句话":"./assets/covers/pressure-3sentences.png",清华生活vlog:"./assets/covers/qinghua-vlog.png",英语上140:"./assets/covers/english-140.png",高一学生是怎样毁掉自己的:"./assets/covers/gaoyi-mistakes.png"},Ao=e=>{for(const n in da)if(e.includes(n))return da[n];return ml[Math.abs([...e].reduce((n,t)=>n+t.charCodeAt(0),0))%ml.length]},pa={汪舅舅:"./assets/bench/wangjiujiu.jpg",清华杨奇函语文说:"./assets/bench/yangqihan.jpg",杨奇函:"./assets/bench/yangqihan.jpg",学霸来了:"./assets/bench/xueba-laille.png",杨老师讲数学:"./assets/bench/yang-laoshi-math.png",清华爸带娃:"./assets/bench/qinghua-dad.png",高考冲刺日记:"./assets/bench/gaokao-diary.png"},Zl=e=>{for(const n in pa)if(e.includes(n))return pa[n];return null},s2=e=>{const n=String(e||""),t=n.match(/(\d+)小时/),s=n.match(/(\d+)分钟/);return t?`${t[1]}h${s?s[1]:"0"}min`:s?`${s[1]}min`:n.match(/(\d+)秒/)?"<1min":n},i2=[{t:"月考后，先抓住这 3 个失分点",dur:"00:60",like:"9,642",tag:"月考复盘",cover:"./assets/covers/pressure-3sentences.png"},{t:"家长如何看懂孩子的月考卷",dur:"00:50",like:"6,284",tag:"家长沟通",cover:"./assets/covers/qinghua-vlog.png"},{t:"期中前一周，复习节奏怎么排",dur:"00:45",like:"7,891",tag:"期中冲刺",cover:"./assets/covers/english-140.png"}],l2=[{t:"新学期第一场·高中数学",d:"10-08",len:"60m",blocks:"开场互动(5m) → 暑期复盘(10m) → 新学期规划(20m) → Q&A(25m)"},{t:"高二数学答疑",d:"10-12",len:"60m",blocks:"痛点收集(5m) → 一轮复习节奏(20m) → 现场答疑(35m)"},{t:"暑假收心专场",d:"10-18",len:"48m",blocks:"互动开场(3m) → 收心方法(15m) → 家长答疑(30m)"},{t:"高一家长会·破冰",d:"10-23",len:"50m",blocks:"高一现状数据(10m) → 家长最关心的 3 件事(20m) → Q&A(20m)"},{t:"高三一轮启动·直播脚本",d:"10-29",len:"90m",blocks:"开场送福利(5m) → 一轮节奏(25m) → 高频考点串讲(30m) → 现场答疑(30m)"}];function o2(e,n,t,s,i){const o=(e.kpis||[]).map(O=>({...O,up:!!O.up,warm:!!O.warm})),r=(e.top_videos||[]).map(O=>({t:O.title,dur:O.dur,like:O.likes,tag:O.tag,cover:Ao(O.title)})),a=r.length?r:i2,u=(e.gantt_weeks||[]).map(O=>({...O,cur:!!O.cur})),p=n.calendar||[],c=(s.benchmarks||[]).map(O=>({...O,update:O.updated,img:Zl(O.name)})),h=(s.virals||[]).map(O=>({t:O.t,from:O.src,like:O.likes,dur:O.dur,cover:Zl(O.src)||Ao(O.t)})),m=bd.map((O,ee)=>{var ie,Z;const ne={...(t.sessions||[]).find(V=>V.date===O.date),...O};return{d:ne.date,title:ne.title,dur:s2(ne.dur),raw_duration:ne.dur,view:ne.views,id:ne.id,start_time:ne.start_time,peak:ne.peak,hot:ne.hot,gmv:ne.gmv,status:ne.status,source_text:ne.source_text,source_page:ne.source_page,source_uri:ne.source_uri,visual:{thumb:((ie=ne.visual)==null?void 0:ie.replay_image)||null,isDemoVisual:!1,demoTrendImage:null,shot:((Z=ne.visual)==null?void 0:Z.dashboard_shot)||null,...ne.visual||{},...ne.date==="2025-11-15"?{trend_image:"./assets/live/1115/overview-chart.png",funnel:{flow:{title:"流量转化",overall:"0.29%",steps:[{label:"直播观看人数",value:"3,449",rate:"23.08%"},{label:"商品曝光人数",value:"796",rate:"13.07%"},{label:"商品点击人数",value:"104",rate:"12.50%"},{label:"创建订单数",value:"13",rate:"76.92%"},{label:"成交人数",value:"10",rate:""}]},product:{title:"商品转化",overall:"0.94%",steps:[{label:"商品曝光次数",value:"1,176",rate:"16.07%"},{label:"商品点击次数",value:"189",rate:"7.94%"},{label:"创建订单数",value:"15",rate:"73.33%"},{label:"成交订单数",value:"11",rate:""}]}},replay_frames:[{kind:"online_peak",label:"1 · 在线峰值 131人",url:"./assets/live/1115/peak-frame.png",topic:"中档题的重要性",quote:"不要跨阶段刷题",analysis:"高光话题：清晰的阶段判断与金句形成内容记忆点，建议保留并复用。"},{kind:"gmv_peak",label:"2 · 成交高峰 · 成交额破3000",url:"./assets/live/1115/sales-frame.png",topic:"与观众互动，自然塑品",analysis:"有效销售：互动承接学习需求，顺势介绍产品，建议沉淀为“回应观众 → 匹配需求 → 自然塑品”的 SOP。"},{kind:"audience_drop",label:"3 · 在线人数迅速下滑",url:"./assets/live/1115/drop-frame.png",topic:"计算问题，节奏拖沓",analysis:"风险点：建议及时改话题，或切换其他内容与互动拉回人数，缩短连续计算讲解。"}]}:{}}}}),S={};(t.notes||[]).forEach(O=>{S[O.date]={day:O.day,time:O.time,data:{cards:O.cards||[],remark:O.remark},script:O.script||[],visual:O.visual||{}}}),S["2025-11-15"]&&(S["2025-11-15"]={...S["2025-11-15"],data:{cards:[{k:"观看人数",v:"3,449",tip:"直播间累计观看"},{k:"峰值在线",v:"131",tip:"话题：中档题的重要性"},{k:"平均在线",v:"75",tip:"峰值后需及时换题"},{k:"成交金额",v:"¥3,729",tip:"11单 / 10位成交用户"}],remark:"峰值在线 131 人；计算问题段迅速掉人；成交额破 3000 的互动塑品段值得沉淀为 SOP。",highlight:"不要跨阶段刷题",aiAnalysis:"这句金句与“中档题的重要性”话题同时出现，在线峰值达到 131 人；建议保留为下次直播的高光话术。"},script:[{k:"高光话题",v:"中档题的重要性；金句“不要跨阶段刷题”，对应在线峰值 131 人。"},{k:"风险点",v:"计算问题段节奏拖沓，在线人数迅速下滑；建议改话题或切换到其他内容拉回人数。"},{k:"有效销售",v:"成交额破 3000 时与观众互动、自然塑品，形成 11 单 / 10 位成交；建议沉淀为销售 SOP。"},{k:"下次动作",v:"保留“中档题 → 金句 → 互动问答 → 自然塑品”链路，计算类内容拆成短段并设置换题节点。"}]});const M=(n.trunks||[]).map(O=>({key:O.key,name:O.name,desc:O.desc,group:O.grp})),A=(i.scripts||[]).map((O,ee)=>{const P=(O.src||"").replace(/^对标·/,"");return{id:O.id,t:O.t,from:O.src,dur:O.dur,tag:O.tag,cover:Zl(P)||ml[ee%ml.length]}});return{kpis:o,trend:e.trend||[],actions:e.actions||[],northstar:e.northstar||[],ganttWeeks:u,gantt:e.gantt||[],planningTasks:[...new Map([...e.planning_tasks||[],...Pi()].map(O=>[JSON.stringify([O.type,O.title,O.planned_at,O.notes||""]),O])).values()],portraits:e.portraits||[],videos:a,wikiTrunks:M,wikiFiles:n.files||[],calendar:p,hotspots:n.hotspots||[],liveSessions:m,liveNotes:S,liveScripts:t.scripts&&t.scripts.length?t.scripts:l2,benchmarks:c,virals:h,scripts:A,library:i.library||[]}}const g=Ps({loading:!0,error:null,kpis:[],trend:[],actions:[],northstar:[],ganttWeeks:[],gantt:[],planningTasks:[],portraits:[],videos:[],wikiTrunks:[],wikiFiles:[],calendar:[],hotspots:[],liveSessions:[],liveNotes:{},liveScripts:[],benchCompare:null,benchmarks:[],virals:[],scripts:[],library:[],scriptContext:null,cueRequest:null,benchAnalysisContext:null,liveReviewContext:null,demoKnowledgeDocuments:[],wikiDocumentRequest:null,courseDocuments:[],businessDocuments:[],knowledgeSaveDraft:null,activeView:"dashboard",sidebarOpen:!1,copilotMobileOpen:!1,isMobile:!1,wikiTrunk:"all",wikiQuery:"",wikiSum:null,northStar:"fans",copilotOpen:!0,chat:[],authUser:null,loginOpen:!1,dataSource:"api",channels:[],channelsOpen:!1,syncAssistantOpen:!1,toasts:[],modal:null});async function r2(){const e=await Od();e&&(g.authUser=e,Nl())}function a2(e){g.authUser=e,g.loginOpen=!1,xi(!1),Nl()}function u2(){g.authUser=null,g.channels=[],xi(!1)}async function Nl(){if(!g.authUser){g.channels=[];return}g.channels=await Nd()}function c2(){if(!g.authUser){g.loginOpen=!0,un("请先登录再绑定视频号");return}g.channelsOpen=!0,Nl()}function oi(){g.channelsOpen=!1}async function d2(e,n,t="wechat",s=""){if(!e.trim()){un("请填写账号名称");return}try{const i=await Fd(e.trim(),n.trim(),t,s);return g.channels.push(i.channel||i),un("已绑定「"+e.trim()+"」"),!0}catch(i){return un("绑定失败："+(i.message||"请稍后重试")),!1}}async function p2(e){try{await zd(e),g.channels=g.channels.filter(n=>n.id!==e),un("已解绑")}catch(n){un("解绑失败："+(n.message||"请稍后重试"))}}const uc="redcowork-replica-v2_demo_planning_tasks";function Pi(){try{return JSON.parse(localStorage.getItem(uc)||"[]")}catch{return[]}}function Fl(e){localStorage.setItem(uc,JSON.stringify(e))}async function Eo(e){const n=await Pd(e);if(n.ok)return g.planningTasks.push(n.task),un("已加入内容排期"),n;const t={...e,id:"demo-local-"+Date.now(),source:"local-demo",status:"待准备",created_at:new Date().toISOString()};return g.planningTasks.push(t),Fl([...Pi(),t]),un("后端暂不可用，已保存到本地排期"),{ok:!0,task:t,local:!0}}const v2=768;function f2(){const e=window.matchMedia(`(max-width: ${v2}px)`),n=t=>{g.isMobile=t,t||(g.sidebarOpen=!1,g.copilotMobileOpen=!1)};n(e.matches),e.addEventListener?e.addEventListener("change",t=>n(t.matches)):(window.addEventListener("resize",()=>n(e.matches)),window.addEventListener("orientationchange",()=>n(e.matches)))}function va(){g.sidebarOpen=!g.sidebarOpen}function Ii(){g.sidebarOpen=!1}function fa(){g.copilotMobileOpen=!g.copilotMobileOpen}function ha(){g.copilotMobileOpen=!1}function h2(e){rr(e),g.isMobile&&Ii()}async function xi(e=!0){e&&(g.loading=!0),g.error=null;try{const{dashboard:n,wiki:t,live:s,bench:i,scripts:o,source:r}=await Ad(),a=o2(n,t,s,i,o);Object.assign(g,a),g.dataSource=r||"api",g.wikiSum=null}catch(n){g.error=n.message}finally{g.loading=!1}}function un(e){const n=Date.now()+Math.random();g.toasts.push({id:n,msg:e}),setTimeout(()=>{g.toasts=g.toasts.filter(t=>t.id!==n)},2200)}function Xs(){g.modal=null}function rr(e){g.activeView=e}function m2(e){const n="s"+Date.now();g.scripts.unshift({id:n,t:e.t,from:"对标·"+e.from,dur:e.dur,tag:"对标爆款",cover:e.cover||Ao(e.t)}),un("已加入「短视频脚本」"),g.authUser&&Rd({t:e.t,src:"对标·"+e.from,dur:e.dur,tag:"对标爆款"}).then(t=>{if(t.ok&&t.script){const s=g.scripts.findIndex(i=>i.id===n);s>=0&&(g.scripts[s]={...g.scripts[s],id:t.script.id})}})}let Gi;function Io(){return Gi||(Gi=fetch("./product-courses/manifest.json").then(e=>{if(!e.ok)throw new Error("产品课程资料加载失败");return e.json()}).then(e=>(g.courseDocuments=e.documents||[],g.courseDocuments)).catch(e=>{throw Gi=null,e})),Gi}function eo(e){const n=g.planningTasks.find(i=>i.title===e.title&&i.planned_at===e.planned_at&&i.notes===e.notes);if(n)return{task:n,created:!1};const t={...e,id:"demo-local-"+Date.now(),source:"Cue",status:"待准备",created_at:new Date().toISOString()},s=[...Pi(),t];return Fl(s),g.planningTasks.push(t),{task:t,created:!0}}let Yi;function Mo(){return Yi||(Yi=fetch("./business-data/manifest.json").then(e=>{if(!e.ok)throw new Error("经营数据加载失败");return e.json()}).then(e=>(g.businessDocuments=[yd,...e.documents||[]],g.businessDocuments)).catch(e=>{throw Yi=null,e})),Yi}function g2(e,n){const t=g.planningTasks.find(o=>o.id===e);t&&Object.assign(t,n);const s=Pi(),i=s.find(o=>o.id===e);i&&(Object.assign(i,n),Fl(s))}function _2(e){const n=g.planningTasks.findIndex(t=>t.id===e);n>=0&&g.planningTasks.splice(n,1),Fl(Pi().filter(t=>t.id!==e))}const y2={class:"side-nav"},b2=["onClick"],w2={key:0,class:"count"},k2={class:"side-foot"},x2={class:"ava"},S2={class:"u-info"},$2={class:"nm"},T2={class:"rl"},C2={__name:"Sidebar",setup(e){const n=[{key:"dashboard",label:"经营看板"},{key:"live-summary",label:"直播复盘",count:()=>g.liveSessions.length},{key:"wiki",label:"知识库",count:()=>g.wikiFiles.length},{key:"planning",label:"内容排期",count:()=>g.planningTasks.length},{key:"scripts",label:"短视频脚本",count:()=>g.scripts.length},{key:"live-script",label:"直播脚本",count:()=>g.liveScripts.length},{key:"bench",label:"对标账号",count:()=>g.benchmarks.length}],t=ue(()=>g.channels[0]||{name:"清华优优",login_state:"内容已加载",demo:!0}),s=ue(()=>t.value?t.value.name:"清华优优"),i=ue(()=>t.value.demo?"已预绑定 · 内容数据":"已绑定 · "+(t.value.login_state||"待扫码"));function o(a){h2(a),g.isMobile&&Ii()}function r(){c2(),g.isMobile&&Ii()}return(a,u)=>(d(),v("aside",{class:we(["sidebar",{open:se(g).sidebarOpen}])},[u[1]||(u[1]=l("div",{class:"side-brand"},[l("span",{class:"logo"},"小红书"),l("div",null,[l("div",{class:"nm"},"NorthStar"),l("div",{class:"sub"},"内容经营 · 灵感有方向")])],-1)),l("nav",y2,[(d(),v(Q,null,oe(n,p=>l("a",{key:p.key,class:we({active:se(g).activeView===p.key}),onClick:c=>o(p.key)},[Ae(f(p.label)+" ",1),p.count?(d(),v("span",w2,f(p.count()),1)):H("",!0)],10,b2)),64))]),l("div",k2,[l("div",{class:"user clickable",onClick:r},[l("div",x2,f(s.value.slice(0,1)),1),l("div",S2,[l("div",$2,f(s.value),1),l("div",T2,f(i.value),1)]),u[0]||(u[0]=l("span",{class:"bind-ic"},"›",-1))])])],2))}},Oo=["总结当前直播脚本的内容和节奏","优化当前直播脚本的开场与互动话术","把当前直播脚本的销售话术沉淀为 SOP","结合当前脚本生成下一场直播方案","把当前直播脚本加入下周二晚的直播排期"];function D2(e,n){var p,c;const t=Oo.indexOf(e);if(t<0)return null;if(!((p=n==null?void 0:n.sections)!=null&&p.length))return{text:"请先选择一份直播脚本，我会根据选中的正文整理答案。",sources:[],steps:[{name:"检查当前脚本",status:"done",detail:"尚未选择稿件，没有套用其他主题。"}]};const s=n.t||n.title,i=n.sections,o=i.map(([h,m])=>`## ${h}
${m}`).join(`

`),r={number:1,title:s,locator:"当前选中直播脚本 · 全文",text:o};let a,u;if(t===0&&(a=`**《${s}》的内容与节奏**

目标：${n.goal||"围绕当前主题展开讲解与答疑。"}

`+i.map(([h,m])=>`### ${h}
${m.slice(0,240)}${m.length>240?"…":""}`).join(`

`)+`

**节奏建议**：开场先收集问题；方法讲解后插入一次理解检查；答疑围绕本场目标；收尾只留一个能立即执行的动作。以上调整为建议，原稿依据见 [1]。`),t===1){const h=`口播：“今晚我们围绕《${s}》解决一个具体问题。你现在最想解决的卡点是什么？请在评论里写下当前阶段，以及卡在什么步骤。”
互动：先读取两条真实评论，把共性问题写在白板上；不预设观众已经留言。
承诺：“今天先把一个方法讲清楚，结束时带走一个可以执行的动作。”`,m=i.map(([S,M],A)=>[S,A===0?h:M+`
【新增互动建议】讲解后暂停提问：“刚才哪一步最难理解？请说具体步骤。”收到评论后再示范，不代替观众编写反馈。`]);a=`**《${s}》开场与互动优化稿**

保留原稿目标：${n.goal||s}。[1]

`+m.map(([S,M])=>`## ${S}
${M}`).join(`

`)+`

**修改理由**
1. 开场用具体卡点收集替代泛泛寒暄。
2. 讲解之间增加理解检查，让评论与当前方法关联。
3. 保留原主题和原有教学方法，不替换成其他脚本。新增话术属于优化建议。`,u={title:s+" · 开场互动优化稿",content:a,type:"live"}}if(t===2){const h=i.filter(([,m])=>/课程|购买|价格|优惠|销售|福利/.test(m));a=`**《${s}》销售承接 SOP**

`+(h.length?`原稿相关片段：[1]

`+h.map(([m,S])=>`### ${m}
${S}`).join(`

`):"原稿没有明确的销售段落，因此以下是可补充的承接建议，不冒充已有话术。[1]")+`

**建议执行流程**
1. 先完成本场方法演示，询问观众还有哪个具体困难。
2. 仅对与课程适配的需求介绍课程；说明目标人群与内容，不承诺成绩或收益。
3. 价格、服务与优惠以实际产品资料为准，资料缺失时先核对。
4. 对真实问题答疑，不制造观众反馈或稀缺名额。
5. 收尾给出学习行动和课程查看方式；直播后记录承接节点与实际表现，作为下一场复盘依据。`,u={title:s+" · 销售承接SOP",content:a,type:"document"}}return t===3&&(a=`**下一场直播方案：${s} · 跟进与答疑**

目标：围绕本场目标复查执行情况，再解决一个高频卡点。原稿目标：${n.goal||s}。[1]

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

以上是基于当前稿件整理的下一场建议，不代表已经发布或执行。`,u={title:s+" · 下一场跟进方案",content:a,type:"live"}),t===4?{schedule:!0,title:s,content:o,source:r}:{text:a,draft:u,sources:[r],routeLabel:t===0?"直播脚本总结":"直播脚本内容整理",artifacts:u?[{type:"script",label:t===2?"查看完整 SOP":"查看完整直播脚本"},{type:"document",label:"加入知识库"}]:[{type:"document",label:"加入知识库"}],steps:[{name:"定位当前直播稿件",status:"done",detail:s},{name:"读取正文与阶段安排",status:"done",detail:`读取 ${i.length} 个环节，使用当前稿件，排除旧短视频上下文。`},{name:"整理本场结果",status:"done",execution:"依据当前正文与已准备模板 · 未调用模型",detail:"区分原稿和新增建议，保留引用。"}]}}const Dn=(e,n)=>{const t=e.__vccOpts||e;for(const[s,i]of n)t[s]=i;return t},A2={key:0,class:"follower-trend"},E2=["aria-label"],I2=["points"],M2=["cx","cy"],O2=["x","y"],R2=["x"],P2={__name:"FollowerTrend",props:{chart:Object},setup(e){const n=e,t=ue(()=>{var i;return(((i=n.chart)==null?void 0:i.points)||[]).filter(o=>Number.isFinite(o.value))}),s=ue(()=>{const i=t.value.map(u=>u.value),o=Math.min(...i),r=Math.max(...i),a=Math.max(1,r-o);return t.value.map((u,p)=>({...u,x:55+p*450/Math.max(1,t.value.length-1),y:165-(u.value-o)*110/a}))});return(i,o)=>t.value.length>1?(d(),v("figure",A2,[l("figcaption",null,f(e.chart.title),1),(d(),v("svg",{viewBox:"0 0 560 210",role:"img","aria-label":e.chart.title},[o[0]||(o[0]=l("path",{d:"M55 40V170H510",fill:"none",stroke:"#dbcdd0"},null,-1)),l("polyline",{points:s.value.map(r=>`${r.x},${r.y}`).join(" "),fill:"none",stroke:"#BD2450","stroke-width":"3"},null,8,I2),(d(!0),v(Q,null,oe(s.value,r=>(d(),v("g",{key:r.label},[l("circle",{cx:r.x,cy:r.y,r:"4",fill:"#BD2450"},null,8,M2),l("text",{x:r.x,y:r.y-12,"text-anchor":"middle","font-size":"12",fill:"#3b2027"},f(r.value.toLocaleString()),9,O2),l("text",{x:r.x,y:"193","text-anchor":"middle","font-size":"12",fill:"#67756b"},f(r.label),9,R2)]))),128))],8,E2)),o[1]||(o[1]=l("small",null,"纵轴按本期数据范围展示；具体数值与统计口径见下表。",-1))])):H("",!0)}},L2=Dn(P2,[["__scopeId","data-v-4a664160"]]),N2=[{match:/压力|3\s*句话/,reason:"把月考错题内容改回压力与亲子沟通主题，以三句可直接使用的话承接标题。",hook:"孩子说“我撑不住了”，先别急着说“谁不累”。这三句话，比催他努力更有用。",scene:"很多孩子不是不想学习，而是暂时不知道怎么面对压力。你一开口讲道理，他就觉得自己的难受又被忽略了。",points:["第一句：“我看到你最近很累，你愿意告诉我哪件事最难吗？”先听完，不打断。","第二句：“这次的结果不等于你这个人，我们一起找一个能改的地方。”把成绩和自我评价分开。","第三句：“今晚不用把所有事解决，你选一件，我陪你从这里开始。”让孩子保留选择。"],end:"今晚先用第一句，认真听他回答。如果压力持续影响睡眠、饮食或上学，及时寻求学校和专业人员的支持。",shots:["正面近景，语速放慢，字幕突出“先听完”。","亲子并坐，镜头停留在倾听动作。","三句逐条上屏，每句留一秒阅读。","回到近景，以陪伴动作结束。"]},{match:/vlog|清华生活/i,reason:"用校园生活的具体镜头串联故事，删除与主题无关的月考复盘话术；不虚构地点与经历。",hook:"清华的一天，除了上课，还有哪些普通又值得记录的瞬间？今天跟着这几个镜头看看。",scene:"从早晨出门的脚步、课堂笔记，到午饭后的短暂休息。镜头里不只有忙，也有生活的节奏。",points:["第一段：保留一个真实的早晨镜头，字幕标注拍摄地点和时间，未核实的信息先不写。","第二段：用图书馆或课堂素材呈现学习状态，以环境声衔接，不编造课程和个人身份。","第三段：选一段散步、用餐或与同学相处的画面，用一句感受连接学习与生活。"],end:"你最想看校园里的哪一个角落？留言告诉我，下一次从那里开始。",shots:["校园或出门广角，环境声先入。","脚步、笔记与餐盘三组特写。","学习镜头与生活镜头交替，保留自然停顿。","用傍晚或离开的镜头收尾。"]},{match:/英语|140/,reason:"围绕英语学习路径展开，以诊断、词汇迁移和错因复盘替换泛化的期中计划，不承诺固定分数。",hook:"英语想冲更高分，先别只加大背单词量。你丢分的地方，决定下一步练什么。",scene:"有人单词认识，整句却读不懂；有人阅读不错，写作总重复同一种句型。问题不同，训练不能一样。",points:["第一步：拿最近一份卷子，把失分分成词义与语境、句子结构、题目判断和表达四类。","第二步：词汇放进例句里回忆，阅读每次解释一道错题的依据；不要只记选项。","第三步：写作改一段，把重复词、句子衔接和语法错误逐项修正，隔天脱稿再写一次。"],end:"今天先找到占比最高的一类失分，再安排一组针对性练习。评论区说说你最卡在哪一项。",shots:["近景展示试卷，不突出未经核实的高分成绩。","阅读原句与写作片段分别给特写。","分类表、例句与段落修改依次上屏。","用当天练习清单收尾。"]},{match:/高一|毁掉/,reason:"用高一学习习惯的具体问题替换家长月考模板，避免将一次成绩波动描述成不可逆失败。",hook:"高一最容易拖慢自己的三个习惯，往往看起来像“我已经很努力了”。",scene:"熬到深夜抄完作业，第二天听课跟不上；遇到不会的题马上看答案；计划列得满满的，却没有回看完成质量。",points:["第一个习惯：用熬夜补白天效率。先安排最重要的任务和合理休息，不把晚睡当努力的证明。","第二个习惯：看懂答案就算会。合上解析，独立写出第一步，再检查卡在哪里。","第三个习惯：只追进度不反馈。每天记一个解决的问题和一个待问问题，第二天带去课堂。"],end:"今晚先改一个习惯，不用同时改变所有事情。收藏这条，一周后看看哪一项变得更顺了。",shots:["近景说出“三个习惯”，字幕逐项出现。","夜间作业、看解析和计划本的细节。","独立落笔、提问便签和反馈清单。","一个习惯打勾，回到正面镜头。"]}];function F2(e){const n=N2.find(i=>i.match.test(e.title));if(!n)return null;const t=[["0–3 秒｜钩子",n.hook],["3–12 秒｜场景",n.scene],["12–50 秒｜主体",n.points.join(`
`)],["50–60 秒｜行动",n.end]],s="《"+e.title+`》优化稿

修改理由：`+n.reason+`

`+t.map((i,o)=>"【"+i[0]+`】
口播：`+i[1]+`
画面：`+n.shots[o]).join(`

`)+`

拍摄检查：口播按实际试读时长调整；字幕保留关键词，避免整段遮挡画面。`;return{text:s,draft:{title:e.title+" · 优化稿",content:s},artifacts:[{type:"script",label:"查看优化稿并加入知识库"}],routeLabel:"当前脚本优化",sources:[{title:e.title,locator:"当前打开的脚本",text:"基于当前标题与可见脚本编辑；优化稿为创作内容。"}],steps:[{name:"意图路由",status:"done",execution:"实际执行",detail:"当前脚本优化"},{name:"读取当前脚本",status:"done",execution:"实际执行",detail:JSON.stringify(e)},{name:"匹配主题编辑稿",status:"done",execution:"预设编辑稿 · 未调用 HY3",detail:n.reason}],traceMode:"脚本编辑流程"}}const z2="modulepreload",U2=function(e,n){return new URL(e,n).href},ma={},ga=function(n,t,s){let i=Promise.resolve();if(t&&t.length>0){let r=function(c){return Promise.all(c.map(h=>Promise.resolve(h).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};const a=document.getElementsByTagName("link"),u=document.querySelector("meta[property=csp-nonce]"),p=(u==null?void 0:u.nonce)||(u==null?void 0:u.getAttribute("nonce"));i=r(t.map(c=>{if(c=U2(c,s),c in ma)return;ma[c]=!0;const h=c.endsWith(".css"),m=h?'[rel="stylesheet"]':"";if(!!s)for(let A=a.length-1;A>=0;A--){const O=a[A];if(O.href===c&&(!h||O.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${m}`))return;const M=document.createElement("link");if(M.rel=h?"stylesheet":z2,h||(M.as="script"),M.crossOrigin="",M.href=c,p&&M.setAttribute("nonce",p),document.head.appendChild(M),h)return new Promise((A,O)=>{M.addEventListener("load",A),M.addEventListener("error",()=>O(new Error(`Unable to preload CSS for ${c}`)))})}))}function o(r){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=r,window.dispatchEvent(a),!a.defaultPrevented)throw r}return i.then(r=>{for(const a of r||[])a.status==="rejected"&&o(a.reason);return n().catch(o)})};var ft=Uint8Array,Ks=Uint16Array,j2=Int32Array,cc=new ft([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),dc=new ft([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),B2=new ft([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),pc=function(e,n){for(var t=new Ks(31),s=0;s<31;++s)t[s]=n+=1<<e[s-1];for(var i=new j2(t[30]),s=1;s<30;++s)for(var o=t[s];o<t[s+1];++o)i[o]=o-t[s]<<5|s;return{b:t,r:i}},vc=pc(cc,2),fc=vc.b,V2=vc.r;fc[28]=258,V2[258]=28;var X2=pc(dc,0),W2=X2.b,Ro=new Ks(32768);for(var gn=0;gn<32768;++gn){var ps=(gn&43690)>>1|(gn&21845)<<1;ps=(ps&52428)>>2|(ps&13107)<<2,ps=(ps&61680)>>4|(ps&3855)<<4,Ro[gn]=((ps&65280)>>8|(ps&255)<<8)>>1}var Si=(function(e,n,t){for(var s=e.length,i=0,o=new Ks(n);i<s;++i)e[i]&&++o[e[i]-1];var r=new Ks(n);for(i=1;i<n;++i)r[i]=r[i-1]+o[i-1]<<1;var a;if(t){a=new Ks(1<<n);var u=15-n;for(i=0;i<s;++i)if(e[i])for(var p=i<<4|e[i],c=n-e[i],h=r[e[i]-1]++<<c,m=h|(1<<c)-1;h<=m;++h)a[Ro[h]>>u]=p}else for(a=new Ks(s),i=0;i<s;++i)e[i]&&(a[i]=Ro[r[e[i]-1]++]>>15-e[i]);return a}),Li=new ft(288);for(var gn=0;gn<144;++gn)Li[gn]=8;for(var gn=144;gn<256;++gn)Li[gn]=9;for(var gn=256;gn<280;++gn)Li[gn]=7;for(var gn=280;gn<288;++gn)Li[gn]=8;var hc=new ft(32);for(var gn=0;gn<32;++gn)hc[gn]=5;var H2=Si(Li,9,1),q2=Si(hc,5,1),no=function(e){for(var n=e[0],t=1;t<e.length;++t)e[t]>n&&(n=e[t]);return n},Dt=function(e,n,t){var s=n/8|0;return(e[s]|e[s+1]<<8)>>(n&7)&t},to=function(e,n){var t=n/8|0;return(e[t]|e[t+1]<<8|e[t+2]<<16)>>(n&7)},K2=function(e){return(e+7)/8|0},ar=function(e,n,t){return(n==null||n<0)&&(n=0),(t==null||t>e.length)&&(t=e.length),new ft(e.subarray(n,t))},G2=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],vt=function(e,n,t){var s=new Error(n||G2[e]);if(s.code=e,Error.captureStackTrace&&Error.captureStackTrace(s,vt),!t)throw s;return s},Y2=function(e,n,t,s){var i=e.length,o=s?s.length:0;if(!i||n.f&&!n.l)return t||new ft(0);var r=!t,a=r||n.i!=2,u=n.i;r&&(t=new ft(i*3));var p=function(U){var b=t.length;if(U>b){var D=new ft(Math.max(b*2,U));D.set(t),t=D}},c=n.f||0,h=n.p||0,m=n.b||0,S=n.l,M=n.d,A=n.m,O=n.n,ee=i*8;do{if(!S){c=Dt(e,h,1);var P=Dt(e,h+1,3);if(h+=3,P)if(P==1)S=H2,M=q2,A=9,O=5;else if(P==2){var V=Dt(e,h,31)+257,E=Dt(e,h+10,15)+4,z=V+Dt(e,h+5,31)+1;h+=14;for(var G=new ft(z),W=new ft(19),q=0;q<E;++q)W[B2[q]]=Dt(e,h+q*3,7);h+=E*3;for(var he=no(W),xe=(1<<he)-1,nn=Si(W,he,1),q=0;q<z;){var Je=nn[Dt(e,h,xe)];h+=Je&15;var ne=Je>>4;if(ne<16)G[q++]=ne;else{var ke=0,Ee=0;for(ne==16?(Ee=3+Dt(e,h,3),h+=2,ke=G[q-1]):ne==17?(Ee=3+Dt(e,h,7),h+=3):ne==18&&(Ee=11+Dt(e,h,127),h+=7);Ee--;)G[q++]=ke}}var Ie=G.subarray(0,V),We=G.subarray(V);A=no(Ie),O=no(We),S=Si(Ie,A,1),M=Si(We,O,1)}else vt(1);else{var ne=K2(h)+4,ie=e[ne-4]|e[ne-3]<<8,Z=ne+ie;if(Z>i){u&&vt(0);break}a&&p(m+ie),t.set(e.subarray(ne,Z),m),n.b=m+=ie,n.p=h=Z*8,n.f=c;continue}if(h>ee){u&&vt(0);break}}a&&p(m+131072);for(var An=(1<<A)-1,_n=(1<<O)-1,He=h;;He=h){var ke=S[to(e,h)&An],En=ke>>4;if(h+=ke&15,h>ee){u&&vt(0);break}if(ke||vt(2),En<256)t[m++]=En;else if(En==256){He=h,S=null;break}else{var Ue=En-254;if(En>264){var q=En-257,Mn=cc[q];Ue=Dt(e,h,(1<<Mn)-1)+fc[q],h+=Mn}var qe=M[to(e,h)&_n],kn=qe>>4;qe||vt(3),h+=qe&15;var We=W2[kn];if(kn>3){var Mn=dc[kn];We+=to(e,h)&(1<<Mn)-1,h+=Mn}if(h>ee){u&&vt(0);break}a&&p(m+131072);var On=m+Ue;if(m<We){var Fn=o-We,Y=Math.min(We,On);for(Fn+m<0&&vt(3);m<Y;++m)t[m]=s[Fn+m]}for(;m<On;++m)t[m]=t[m-We]}}n.l=S,n.p=He,n.b=m,n.f=c,S&&(c=1,n.m=A,n.d=M,n.n=O)}while(!c);return m!=t.length&&r?ar(t,0,m):t.subarray(0,m)},Q2=new ft(0),Xt=function(e,n){return e[n]|e[n+1]<<8},xt=function(e,n){return(e[n]|e[n+1]<<8|e[n+2]<<16|e[n+3]<<24)>>>0},so=function(e,n){return xt(e,n)+xt(e,n+4)*4294967296};function J2(e,n){return Y2(e,{i:2},n&&n.out,n&&n.dictionary)}var Po=typeof TextDecoder<"u"&&new TextDecoder,Z2=0;try{Po.decode(Q2,{stream:!0}),Z2=1}catch{}var ep=function(e){for(var n="",t=0;;){var s=e[t++],i=(s>127)+(s>223)+(s>239);if(t+i>e.length)return{s:n,r:ar(e,t-1)};i?i==3?(s=((s&15)<<18|(e[t++]&63)<<12|(e[t++]&63)<<6|e[t++]&63)-65536,n+=String.fromCharCode(55296|s>>10,56320|s&1023)):i&1?n+=String.fromCharCode((s&31)<<6|e[t++]&63):n+=String.fromCharCode((s&15)<<12|(e[t++]&63)<<6|e[t++]&63):n+=String.fromCharCode(s)}};function gl(e,n){if(n){for(var t="",s=0;s<e.length;s+=16384)t+=String.fromCharCode.apply(null,e.subarray(s,s+16384));return t}else{if(Po)return Po.decode(e);var i=ep(e),o=i.s,t=i.r;return t.length&&vt(8),o}}var np=function(e,n){return n+30+Xt(e,n+26)+Xt(e,n+28)},tp=function(e,n,t){var s=Xt(e,n+28),i=Xt(e,n+30),o=gl(e.subarray(n+46,n+46+s),!(Xt(e,n+8)&2048)),r=n+46+s,a=sp(e,r,i,t,xt(e,n+20),xt(e,n+24),xt(e,n+42)),u=a[0],p=a[1],c=a[2];return[Xt(e,n+10),u,p,o,r+i+Xt(e,n+32),c]},sp=function(e,n,t,s,i,o,r){var a=i==4294967295,u=o==4294967295,p=r==4294967295,c=n+t,h=a+u+p;if(s&&h){for(;n+4<c;n+=4+Xt(e,n+2))if(Xt(e,n)==1)return[a?so(e,n+4+8*u):i,u?so(e,n+4):o,p?so(e,n+4+8*(u+a)):r,1];s<2&&vt(13)}return[i,o,r,0]};function Lo(e,n){for(var t={},s=e.length-22;xt(e,s)!=101010256;--s)(!s||e.length-s>65558)&&vt(13);var i=Xt(e,s+8);if(!i)return{};var o=xt(e,s+16),r=xt(e,s-20)==117853008;if(r){var a=xt(e,s-12);r=xt(e,a)==101075792,r&&(i=xt(e,a+32),o=xt(e,a+48))}for(var u=n&&n.filter,p=0;p<i;++p){var c=tp(e,o,r),h=c[0],m=c[1],S=c[2],M=c[3],A=c[4],O=c[5],ee=np(e,O);o=A,(!u||u({name:M,size:m,originalSize:S,compression:h}))&&(h?h==8?t[M]=J2(e.subarray(ee,ee+m),{out:new ft(S)}):vt(14,"unknown compression type "+h):t[M]=ar(e,ee,ee+m))}return t}async function ip(e){const n=new Uint8Array(await e.arrayBuffer()),t=Lo(n,{filter:a=>/^ppt\/(slides\/slide\d+|notesSlides\/notesSlide\d+)\.xml$/.test(a.name)&&a.originalSize<10*1024*1024});if(Object.values(t).reduce((a,u)=>a+u.length,0)>200*1024*1024)throw new Error("文件展开后过大，请拆分");const s=Object.keys(t).filter(a=>/^ppt\/slides\/slide\d+\.xml$/.test(a)).sort((a,u)=>Number(a.match(/slide(\d+)/)[1])-Number(u.match(/slide(\d+)/)[1]));if(!s.length)throw new Error("没有找到幻灯片，请确认文件是有效的 PPTX");const i=a=>{const u=new DOMParser().parseFromString(gl(a),"application/xml");if(u.getElementsByTagName("parsererror").length)throw new Error("幻灯片 XML 损坏");return[...u.getElementsByTagNameNS("*","p")].map(p=>[...p.getElementsByTagNameNS("*","t")].map(c=>c.textContent).join("")).filter(Boolean).join(`
`)},o=s.map((a,u)=>({locator:"第 "+(u+1)+" 页",text:i(t[a])})),r=o.map(a=>a.locator+`
`+(a.text||"本页没有可提取的文字")).join(`

`);if(r.length>2e5)throw new Error("正文超过20万字，请拆分");return{local_content:r,sections:o,chunk_count:o.length,analyzed:!1}}function lp(e){var s;const n=((s=e.sections)==null?void 0:s.filter(i=>{var o;return(o=i.text)==null?void 0:o.trim()}))||(e.local_content||"").split(/\n\s*\n/).filter(Boolean).map((i,o)=>({locator:"段落 "+(o+1),text:i}));if(!n.length)throw new Error("当前文件没有可提取的文字，请先提供文本或OCR结果");const t=[...new Set(n.map(i=>{var o;return(o=i.text.split(`
`).find(r=>r.trim()))==null?void 0:o.trim()}).filter(Boolean))];return{subspace:e.subspace,catalog:t.slice(0,16),concepts:t.filter(i=>i.length<=24).slice(0,8),entities:[],summary:n.slice(0,3).map(i=>i.locator+"："+i.text.slice(0,300)).join(`

`),framework:t.map((i,o)=>o+1+". "+i).join(`
`),body:n.map(i=>i.locator+`
`+i.text).join(`

`),hook:"",cta:"",nodes:[],edges:[],extraction_method:"原文提取与目录整理"}}async function _l(e){var n,t;if(/\.(mp4|mov|webm|m4v)$/i.test(e.name)){const s={media_type:"video",analyzed:!1};try{const i=await fetch("https://northstar-copilot.com/local-media/transcribe",{method:"POST",headers:{"Content-Type":"application/octet-stream","X-File-Extension":"."+e.name.split(".").pop().toLowerCase()},body:e});if(!i.ok)throw new Error("视频已保存，字幕解析服务暂不可用，可补充字幕文本");const o=await i.json(),r=[];let a="";for(const h of o.frames||[]){const m=h.lines.filter(S=>S.y>.12&&S.y<.65&&S.confidence>.4).sort((S,M)=>M.y-S.y||S.x-M.x).map(S=>S.text).join(" / ");m&&m!==a&&(r.push({locator:Math.floor(h.time/60)+":"+String(Math.floor(h.time%60)).padStart(2,"0"),text:m}),a=m)}const u=r.map(h=>"["+h.locator+"] "+h.text).join(`
`),p=await fetch("/api/cue/video-analysis",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:e.name,duration:o.duration,frames:o.keyframes||[],subtitles:u.slice(0,24e3)})}),c=await p.json();if(!p.ok)throw new Error(c.detail||"视频理解失败，请重新解析");return r.push({locator:"AI 创意 · 视频脚本拆解",text:c.answer}),{...s,duration:o.duration,sections:r,local_content:u+`

`+c.answer,chunk_count:r.length,parse_method:c.method,parse_error:"",video_script:c.answer}}catch(i){return{...s,local_content:"",parse_error:i.message}}}if(/\.(ppt|xls)$/i.test(e.name)){const s=await fetch("https://northstar-copilot.com/local-media/presentation",{method:"POST",headers:{"Content-Type":"application/octet-stream","X-File-Extension":"."+e.name.split(".").pop().toLowerCase()},body:e});if(!s.ok)throw new Error("旧版 Office 文件转换失败，请另存为 PPTX / XLSX");return _l(new File([await s.blob()],e.name+".pdf",{type:"application/pdf"}))}if(/\.pptx$/i.test(e.name))return ip(e);if(/\.pdf$/i.test(e.name)){const s=await ga(()=>import("./pdf-BtCWNl9F.js"),[],import.meta.url),i=await ga(()=>import("./pdf.worker.min-Dualf0xi.js"),[],import.meta.url);s.GlobalWorkerOptions.workerSrc=i.default;let o;try{o=await s.getDocument({data:new Uint8Array(await e.arrayBuffer())}).promise}catch(r){throw r.name==="PasswordException"?new Error("文件有密码锁，请上传未加密版本"):r}try{if(o.numPages>500)throw new Error("页数超过500，请拆分");const r=[];for(let a=1;a<=o.numPages;a++){const u=await o.getPage(a),p=await u.getTextContent();r.push({locator:"第 "+a+" 页",text:p.items.map(c=>c.str||"").join(" ")})}return{sections:r,local_content:r.map(a=>a.locator+`
`+a.text).join(`

`),chunk_count:r.length,analyzed:!1}}finally{await o.destroy()}}if(/\.xlsx$/i.test(e.name)){const s=Lo(new Uint8Array(await e.arrayBuffer()),{filter:c=>/^xl\/(workbook.xml|_rels\/workbook.xml.rels|sharedStrings.xml|worksheets\/sheet\d+.xml)$/.test(c.name)&&c.originalSize<20971520}),i=c=>s[c]?new DOMParser().parseFromString(gl(s[c]),"application/xml"):null,o=[...((n=i("xl/sharedStrings.xml"))==null?void 0:n.getElementsByTagNameNS("*","si"))||[]].map(c=>[...c.getElementsByTagNameNS("*","t")].map(h=>h.textContent).join("")),r=[...((t=i("xl/workbook.xml"))==null?void 0:t.getElementsByTagNameNS("*","sheet"))||[]].map(c=>c.getAttribute("name")),a=Object.keys(s).filter(c=>/^xl\/worksheets\/sheet\d+.xml$/.test(c)).sort((c,h)=>Number(c.match(/sheet(\d+)/)[1])-Number(h.match(/sheet(\d+)/)[1]));if(!a.length)throw new Error("没有找到有效工作表");const u=a.map((c,h)=>({name:r[h]||"Sheet"+(h+1),rows:[...i(c).getElementsByTagNameNS("*","row")].map(m=>{var M;const S=[];for(const A of m.getElementsByTagNameNS("*","c")){const O=A.getAttribute("r")||"A1";let ee=0;for(const ie of O.replace(/\d/g,""))ee=ee*26+ie.charCodeAt(0)-64;const P=((M=A.getElementsByTagNameNS("*","v")[0])==null?void 0:M.textContent)||"",ne=A.getAttribute("t");S[ee-1]=ne==="s"?o[Number(P)]||"":ne==="inlineStr"?[...A.getElementsByTagNameNS("*","t")].map(ie=>ie.textContent).join(""):ne==="b"?P==="1":P}return S})})),p=u.flatMap(c=>c.rows.map((h,m)=>({locator:c.name+" · 第 "+(m+1)+" 行",text:h.map(S=>S??"").join(" | ")})));return{sheets:u,sections:p,local_content:p.map(c=>c.locator+`
`+c.text).join(`
`),chunk_count:p.length,analyzed:!1}}if(/\.docx$/i.test(e.name)){const s=Lo(new Uint8Array(await e.arrayBuffer()),{filter:r=>r.name==="word/document.xml"&&r.originalSize<20971520});if(!s["word/document.xml"])throw new Error("Word文件损坏");return{local_content:[...new DOMParser().parseFromString(gl(s["word/document.xml"]),"application/xml").getElementsByTagNameNS("*","p")].map(r=>[...r.getElementsByTagNameNS("*","t")].map(a=>a.textContent).join("")).join(`
`),analyzed:!1}}if(/\.(csv|tsv)$/i.test(e.name)){const s=await e.text(),i=/\.tsv$/i.test(e.name)?"	":",",o=[];let r=[],a="",u=!1;for(let p=0;p<s.length;p++){const c=s[p];c==='"'?u&&s[p+1]==='"'?(a+='"',p++):u=!u:c===i&&!u?(r.push(a),a=""):(c===`
`||c==="\r")&&!u?(c==="\r"&&s[p+1]===`
`&&p++,r.push(a),o.push(r),r=[],a=""):a+=c}return(a||r.length)&&(r.push(a),o.push(r)),{local_content:s,sheets:[{name:"CSV",rows:o}],analyzed:!1}}return{local_content:/\.(txt|md|srt|vtt)$/i.test(e.name)?await e.text():"",analyzed:!1}}function ur(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Ns=ur();function mc(e){Ns=e}var Es={exec:()=>null};function Ws(e){let n=[];return t=>{let s=Math.max(0,Math.min(3,t-1)),i=n[s];return i||(i=e(s),n[s]=i),i}}function Le(e,n=""){let t=typeof e=="string"?e:e.source,s={replace:(i,o)=>{let r=typeof o=="string"?o:o.source;return r=r.replace(jn.caret,"$1"),t=t.replace(i,r),s},getRegex:()=>new RegExp(t,n)};return s}var op=((e="")=>{try{return!!new RegExp("(?<=1)(?<!1)"+e)}catch{return!1}})(),jn={codeRemoveIndent:/^(?: {0,3}\t| {1,4})/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,endingSpaceTabChar:/[ \t]$/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,leadingSpaceTab:/^[ \t]+/,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,numericCharacterReference:/&#(?:(\d{1,7})|[Xx]([A-Fa-f0-9]{1,6}));/g,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:Ws(e=>new RegExp(`^ {0,${e}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:Ws(e=>new RegExp(`^ {0,${e}}((?:-[ 	]*){3,}|(?:_[ 	]*){3,}|(?:\\*[ 	]*){3,})(?:\\n+|$)`)),fencesBeginRegex:Ws(e=>new RegExp(`^ {0,${e}}(?:\`\`\`|~~~)`)),headingBeginRegex:Ws(e=>new RegExp(`^ {0,${e}}#`)),htmlBeginRegex:Ws(e=>new RegExp(`^ {0,${e}}(?:</?(?:${Fi})(?: +|$|/?>)|<(?:script|pre|style|textarea|!--))`,"i")),blockquoteBeginRegex:Ws(e=>new RegExp(`^ {0,${e}}>`))},rp=/^(?:[ \t]*(?:\n|$))+/,ap=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,up=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Ni=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,cp=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,cr=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,gc=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |fences|blockquote|heading|hr|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_c=Le(gc).replace(/bull/g,cr).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/hr/g,/ {0,3}(?:(?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),dp=Le(gc).replace(/bull/g,cr).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/hr/g,/ {0,3}(?:(?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),dr=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table|[ \t]+\n)[^\n]+)*)/,pp=/^[^\n]+/,pr=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,vp=Le(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",pr).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),fp=Le(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g,cr).getRegex(),Fi="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",vr=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,hp=Le("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n*|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n*|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][a-z0-9-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][a-z0-9-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",vr).replace("tag",Fi).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),yc=e=>Le(dr).replace("hr",Ni).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list",e).replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Fi).getRegex(),mp=yc(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/),gp=yc(/ {0,3}(?:[*+-]|\d{1,9}[.)])(?:[ \t]|\n|$)/),_p=Le(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",gp).getRegex(),fr={blockquote:_p,code:ap,def:vp,fences:up,heading:cp,hr:Ni,html:hp,lheading:_c,list:fp,newline:rp,paragraph:mp,table:Es,text:pp},_a=Le("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Ni).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Fi).getRegex(),yp={...fr,lheading:dp,table:_a,paragraph:Le(dr).replace("hr",Ni).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",_a).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Fi).getRegex()},bp={...fr,html:Le(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",vr).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Es,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Le(dr).replace("hr",Ni).replace("heading",` *#{1,6} *[^
]`).replace("lheading",_c).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},wp=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,kp=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,bc=/^( {2,}|\\)\n(?!\s*$)[ \t]*/,xp=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,cs=/[\p{P}\p{S}]/u,si=/[\s\p{P}\p{S}]/u,zi=/[^\s\p{P}\p{S}]/u,Sp=Le(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,si).getRegex(),$p=/[\p{Pi}\p{Ps}"']/u,wc=/(?!~)[\p{P}\p{S}]/u,Tp=/(?!~)[\s\p{P}\p{S}]/u,Cp=/(?:[^\s\p{P}\p{S}]|~)/u,Dp=Le(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",op?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),kc=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,Ap=Le(kc,"u").replace(/punct/g,cs).getRegex(),Ep=Le(kc,"u").replace(/punct/g,wc).getRegex(),Ip=/^(?:\*+(?:((?!\*)(?!openQuote)punct)|([^\s*]))?)|^_+(?:((?!_)(?!openQuote)punct)|([^\s_]))?/,Mp=Le(Ip,"u").replace(/openQuote/g,$p).replace(/punct/g,cs).getRegex(),xc="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Op=Le(xc,"gu").replace(/notPunctSpace/g,zi).replace(/punctSpace/g,si).replace(/punct/g,cs).getRegex(),Rp=Le(xc,"gu").replace(/notPunctSpace/g,Cp).replace(/punctSpace/g,Tp).replace(/punct/g,wc).getRegex(),Pp="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)[\\s](\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|(?:(?!\\*)punct|notPunctSpace)(\\*+)(?!\\*)(?=notPunctSpace)",Lp=Le(Pp,"gu").replace(/notPunctSpace/g,zi).replace(/punctSpace/g,si).replace(/punct/g,cs).getRegex(),Np=Le("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,zi).replace(/punctSpace/g,si).replace(/punct/g,cs).getRegex(),Fp="^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)[\\s](_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)|(?:(?!_)punct|notPunctSpace)(_+)(?!_)(?=notPunctSpace)",zp=Le(Fp,"gu").replace(/notPunctSpace/g,zi).replace(/punctSpace/g,si).replace(/punct/g,cs).getRegex(),Up=Le(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,cs).getRegex(),jp="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",Bp=Le(jp,"gu").replace(/notPunctSpace/g,zi).replace(/punctSpace/g,si).replace(/punct/g,cs).getRegex(),Vp=Le(/\\(punct)/,"gu").replace(/punct/g,cs).getRegex(),Xp=Le(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Wp=Le(vr).replace("(?:-->|$)","-->").getRegex(),Hp=Le("^comment|^</[a-zA-Z][a-zA-Z0-9-]*\\s*>|^<[a-zA-Z][a-zA-Z0-9-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Wp).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Sc=/\[(?:\\[\s\S]|[^\[\]\\])*\]/,yl=Le(/(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/).replace("brackets",Sc).getRegex(),qp=Le(/^!?\[(label)\]\([ \t\n]*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?[ \t\n]*\)/).replace("label",yl).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]+|(?=\))/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Kp=Le(/^!?\[(label)\]\[(ref)\]/).replace("label",yl).replace("ref",pr).getRegex(),Gp=Le(/^!?\[(ref)\](?:\[\])?/).replace("ref",pr).getRegex(),ya=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\]){1,999}/,Yp=Le(/(?:[^\[\]\\`]*(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\]))){0,999}?[^\[\]\\`]*?/).replace("brackets",Sc).getRegex(),Qp=Le("reflink|nolink(?!\\()","g").replace("reflink",Le(/^!?\[(label)\]\[(ref)\]/).replace("label",Yp).replace("ref",ya).getRegex()).replace("nolink",Le(/^!?\[(ref)\](?:\[\])?/).replace("ref",ya).getRegex()).getRegex(),ba=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,Jp=/[A-Za-z0-9._+-]+@[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/,Zp=Le(/(?:mailto:email|xmpp:email(?:\/[A-Za-z0-9@.]+)?)/).replace(/email/g,Jp).getRegex(),hr={_backpedal:Es,anyPunctuation:Vp,autolink:Xp,blockSkip:Dp,br:bc,code:kp,del:Es,delLDelim:Es,delRDelim:Es,emStrongLDelim:Ap,emStrongRDelimAst:Op,emStrongRDelimUnd:Np,escape:wp,link:qp,nolink:Gp,punctuation:Sp,reflink:Kp,reflinkSearch:Qp,tag:Hp,text:xp,url:Es},ev={...hr,emStrongLDelim:Mp,emStrongRDelimAst:Lp,emStrongRDelimUnd:zp,link:Le(/^!?\[(label)\]\((.*?)\)/).replace("label",yl).getRegex(),reflink:Le(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",yl).getRegex()},No={...hr,emStrongRDelimAst:Rp,emStrongLDelim:Ep,delLDelim:Up,delRDelim:Bp,url:Le(/^emailProtocol|^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("emailProtocol",Zp).replace("protocol",ba).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:Le(/^(?:[^a-zA-Z0-9](?=emailProtocol)|(`+|~+|[^`~])(?:(?=[`~])|(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9](?=emailProtocol)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))))/).replace("protocol",ba).replace(/emailProtocol/g,/(?:mailto|xmpp):/).getRegex()},nv={...No,br:Le(bc).replace("{2,}","*").getRegex(),text:Le(No.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Qi={normal:fr,gfm:yp,pedantic:bp},ri={normal:hr,gfm:No,breaks:nv,pedantic:ev},tv={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},wa=e=>tv[e];function dt(e,n){if(n){if(jn.escapeTest.test(e))return e.replace(jn.escapeReplace,wa)}else if(jn.escapeTestNoEncode.test(e))return e.replace(jn.escapeReplaceNoEncode,wa);return e}function sv(e){return e.replace(jn.numericCharacterReference,(n,t,s)=>{let i=t===void 0?Number.parseInt(s,16):Number.parseInt(t,10);return i===0||i>1114111||i>=55296&&i<=57343?"�":String.fromCodePoint(i)})}function ka(e){try{e=encodeURI(e).replace(jn.percentDecode,"%")}catch{return null}return e}function xa(e,n){var o;let t=e.replace(jn.findPipe,(r,a,u)=>{let p=!1,c=a;for(;--c>=0&&u[c]==="\\";)p=!p;return p?"|":" |"}),s=t.split(jn.splitPipe),i=0;if(s[0].trim()||s.shift(),s.length>0&&!((o=s.at(-1))!=null&&o.trim())&&s.pop(),n)if(s.length>n)s.splice(n);else for(;s.length<n;)s.push("");for(;i<s.length;i++)s[i]=s[i].trim().replace(jn.slashPipe,"|");return s}function vs(e,n,t){let s=e.length;if(s===0)return"";let i=0;for(;i<s&&e.charAt(s-i-1)===n;)i++;return e.slice(0,s-i)}function Sa(e){let n=e.split(`
`),t=n.length-1;for(;t>=0&&jn.blankLine.test(n[t]);)t--;return n.length-t<=2?e:n.slice(0,t+1).join(`
`)}function bl(e){return e.trim().toLowerCase().toUpperCase().toLowerCase()}function $a(e,n){if(e.indexOf(n[0])===-1&&e.indexOf(n[1])===-1)return-1;let t=0;for(let s=0;s<e.length;s++)if(e[s]==="\\")s++;else if(e[s]===n[0])t++;else if(e[s]===n[1]&&(t--,t<0))return s;return t>0?-2:-1}function Ta(e,n=0){let t=n,s="";for(let i of e)if(i==="	"){let o=4-t%4;s+=" ".repeat(o),t+=o}else s+=i,t++;return s}function Ca(e,n,t,s,i){let o=n.href,r=n.title||null,a=e[1].replace(i.other.outputLinkReplace,"$1"),u=e[0].charAt(0)==="!";s.state.inLink=!0;let p=s.state.linkEmitted,c=s.state.inRawBlock;s.state.linkEmitted=!1;let h=s.inlineTokens(a),m=s.state.linkEmitted;if(s.state.linkEmitted=p,s.state.inLink=!1,!u){if(m){s.state.inRawBlock=c;return}s.state.linkEmitted=!0}return{type:u?"image":"link",raw:t,href:o,title:r,text:a,tokens:h}}function iv(e,n,t){let s=e.match(t.other.indentCodeCompensation);if(s===null)return n;let i=s[1];return n.split(`
`).map(o=>{let r=o.match(t.other.beginningSpace);if(r===null)return o;let[a]=r;return o.slice(Math.min(a.length,i.length))}).join(`
`)}function Da(e,n,t,s){if(!n.includes("<"))return!1;for(let i=0;i<n.length;i++){if(n[i]==="\\"){i++;continue}if(n[i]==="`"){let a=s.inline.code.exec(n.slice(i));if(a){i+=a[0].length-1;continue}}if(n[i]!=="<")continue;let o=e.slice(t+i),r=s.inline.tag.exec(o)||s.inline.autolink.exec(o);if(r){if(r[0].length>n.length-i)return!0;i+=r[0].length-1}}return!1}var wl=class{constructor(e){an(this,"options");an(this,"rules");an(this,"lexer");this.options=e||Ns}space(e){let n=this.rules.block.newline.exec(e);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(e){let n=this.rules.block.code.exec(e);if(n){let t=this.options.pedantic?n[0]:Sa(n[0]),s=t.replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t,codeBlockStyle:"indented",text:s}}}fences(e){let n=this.rules.block.fences.exec(e);if(n){let t=n[0],s=iv(t,n[3]||"",this.rules);return{type:"code",raw:t,lang:n[2]?n[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):n[2],text:s}}}heading(e){let n=this.rules.block.heading.exec(e);if(n){let t=n[2].trim();if(this.rules.other.endingHash.test(t)){let s=vs(t,"#");(this.options.pedantic||!s||this.rules.other.endingSpaceTabChar.test(s))&&(t=s.trim())}return{type:"heading",raw:vs(n[0],`
`),depth:n[1].length,text:t,tokens:this.lexer.inline(t)}}}hr(e){let n=this.rules.block.hr.exec(e);if(n)return{type:"hr",raw:vs(n[0],`
`)}}blockquote(e){let n=this.rules.block.blockquote.exec(e);if(n){let t=vs(n[0],`
`).split(`
`),s="",i="",o=[];for(;t.length>0;){let r=!1,a=[],u;for(u=0;u<t.length;u++)if(this.rules.other.blockquoteStart.test(t[u]))a.push(t[u]),r=!0;else if(!r)a.push(t[u]);else break;t=t.slice(u);let p=a.join(`
`),c=p.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");s=s?`${s}
${p}`:p,i=i?`${i}
${c}`:c;let h=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(c,o,!0),this.lexer.state.top=h,t.length===0)break;let m=o.at(-1);if((m==null?void 0:m.type)==="code")break;if((m==null?void 0:m.type)==="blockquote"){let S=m,M=t.join(`
`),A=S.raw+`
`+M.replace(this.rules.other.blockquoteSetextReplace2,""),O=this.blockquote(A);o[o.length-1]=O;let ee=A.substring(O.raw.length).replace(/^\n/,""),P=ee?ee.split(`
`).length:0,ne=P?t.slice(0,-P):t;ne.length>0&&(s=`${s}
${ne.join(`
`)}`),i=i.substring(0,i.length-S.text.length)+O.text;break}else if((m==null?void 0:m.type)==="list"){let S=m,M=S.raw+`
`+t.join(`
`),A=this.list(M);o[o.length-1]=A,s=s.substring(0,s.length-m.raw.length)+A.raw,i=i.substring(0,i.length-S.raw.length)+A.raw,t=M.substring(o.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:s,tokens:o,text:i}}}list(e){let n=this.rules.block.list.exec(e);if(n){let t=n[1].trim(),s=t.length>1,i={type:"list",raw:"",ordered:s,start:s?+t.slice(0,-1):"",loose:!1,items:[]};t=s?`\\d{1,9}\\${t.slice(-1)}`:`\\${t}`,this.options.pedantic&&(t=s?t:"[*+-]");let o=this.rules.other.listItemRegex(t),r=!1;for(;e;){let u=!1,p="",c="";if(!(n=o.exec(e))||this.rules.block.hr.test(e))break;p=n[0],e=e.substring(p.length);let h=n[2].split(`
`,1)[0],m=n[1].length,S=this.options.pedantic?Ta(h,m):h.replace(this.rules.other.leadingSpaceTab,ee=>Ta(ee,m)),M=e.split(`
`,1)[0],A=!S.trim(),O=0;if(this.options.pedantic?(O=2,c=S.trimStart()):A?O=m+1:(O=S.search(this.rules.other.nonSpaceChar),O=O>4?1:O,c=S.slice(O),O+=m),A&&this.rules.other.blankLine.test(M)&&(p+=M+`
`,e=e.substring(M.length+1),u=!0),!u){let ee=this.rules.other.nextBulletRegex(O),P=this.rules.other.hrRegex(O),ne=this.rules.other.fencesBeginRegex(O),ie=this.rules.other.headingBeginRegex(O),Z=this.rules.other.htmlBeginRegex(O),V=this.rules.other.blockquoteBeginRegex(O);for(;e;){let E=e.split(`
`,1)[0],z;if(M=E,this.options.pedantic?(M=M.replace(this.rules.other.listReplaceNesting,"  "),z=M):z=M.replace(this.rules.other.leadingSpaceTab,G=>G.replace(this.rules.other.tabCharGlobal,"    ")),ne.test(M)||ie.test(M)||Z.test(M)||V.test(M)||ee.test(M)||P.test(M))break;if(z.search(this.rules.other.nonSpaceChar)>=O||!M.trim())c+=`
`+z.slice(O);else{if(A||S.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||ne.test(S)||ie.test(S)||P.test(S))break;c+=`
`+M}A=!M.trim(),p+=E+`
`,e=e.substring(E.length+1),S=z.slice(O)}}i.loose||(r?i.loose=!0:this.rules.other.doubleBlankLine.test(p)&&(r=!0)),i.items.push({type:"list_item",raw:p,task:!!this.options.gfm&&this.rules.other.listIsTask.test(c),loose:!1,text:c,tokens:[]}),i.raw+=p}let a=i.items.at(-1);if(a)a.raw=a.raw.trimEnd(),a.text=a.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let u of i.items)if(this.lexer.state.top=!1,u.tokens=this.lexer.blockTokens(u.text,[]),!i.loose){let p=u.tokens.filter(h=>h.type==="space"),c=p.length>0&&p.some(h=>this.rules.other.anyLine.test(h.raw));i.loose=c}for(let u of i.items){let p=u.tokens[0];if(u.task&&((p==null?void 0:p.type)==="text"||(p==null?void 0:p.type)==="paragraph")){u.text=u.text.replace(this.rules.other.listReplaceTask,""),p.raw=p.raw.replace(this.rules.other.listReplaceTask,""),p.text=p.text.replace(this.rules.other.listReplaceTask,"");for(let h=this.lexer.inlineQueue.length-1;h>=0;h--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[h].src)){this.lexer.inlineQueue[h].src=this.lexer.inlineQueue[h].src.replace(this.rules.other.listReplaceTask,"");break}let c=this.rules.other.listTaskCheckbox.exec(u.raw);if(c){let h={type:"checkbox",raw:c[0]+" ",checked:c[0]!=="[ ]"};u.checked=h.checked,i.loose?u.tokens[0]&&["paragraph","text"].includes(u.tokens[0].type)&&"tokens"in u.tokens[0]&&u.tokens[0].tokens?(u.tokens[0].raw=h.raw+u.tokens[0].raw,u.tokens[0].text=h.raw+u.tokens[0].text,u.tokens[0].tokens.unshift(h)):u.tokens.unshift({type:"paragraph",raw:h.raw,text:h.raw,tokens:[h]}):u.tokens.unshift(h)}}else u.task&&(u.task=!1)}if(i.loose)for(let u of i.items){u.loose=!0;for(let p of u.tokens)p.type==="text"&&(p.type="paragraph")}return i}}html(e){let n=this.rules.block.html.exec(e);if(n){let t=Sa(n[0]);return{type:"html",block:!0,raw:t,pre:n[1]==="pre"||n[1]==="script"||n[1]==="style",text:t}}}def(e){let n=this.rules.block.def.exec(e);if(n){if(!this.rules.other.startAngleBracket.test(n[2])&&$a(n[2],"()")!==-1)return;let t=bl(n[1]).replace(this.rules.other.multipleSpaceGlobal," "),s=n[2]?n[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",i=n[3]?n[3].substring(1,n[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):n[3];return{type:"def",tag:t,raw:vs(n[0],`
`),href:s,title:i}}}table(e){var r;let n=this.rules.block.table.exec(e);if(!n||!this.rules.other.tableDelimiter.test(n[2]))return;let t=xa(n[1]),s=n[2].replace(this.rules.other.tableAlignChars,"").split("|"),i=(r=n[3])!=null&&r.trim()?n[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],o={type:"table",raw:vs(n[0],`
`),header:[],align:[],rows:[]};if(t.length===s.length){for(let a of s)this.rules.other.tableAlignRight.test(a)?o.align.push("right"):this.rules.other.tableAlignCenter.test(a)?o.align.push("center"):this.rules.other.tableAlignLeft.test(a)?o.align.push("left"):o.align.push(null);for(let a=0;a<t.length;a++)o.header.push({text:t[a],tokens:this.lexer.inline(t[a]),header:!0,align:o.align[a]});for(let a of i)o.rows.push(xa(a,o.header.length).map((u,p)=>({text:u,tokens:this.lexer.inline(u),header:!1,align:o.align[p]})));return o}}lheading(e){let n=this.rules.block.lheading.exec(e);if(n){let t=n[1].trim();return{type:"heading",raw:vs(n[0],`
`),depth:n[2].charAt(0)==="="?1:2,text:t,tokens:this.lexer.inline(t)}}}paragraph(e){let n=this.rules.block.paragraph.exec(e);if(n){let t=n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1];return{type:"paragraph",raw:n[0],text:t,tokens:this.lexer.inline(t)}}}text(e){let n=this.rules.block.text.exec(e);if(n)return{type:"text",raw:n[0],text:n[0],tokens:this.lexer.inline(n[0])}}escape(e){let n=this.rules.inline.escape.exec(e);if(n)return{type:"escape",raw:n[0],text:n[1]}}tag(e){let n=this.rules.inline.tag.exec(e);if(n)return!this.lexer.state.inLink&&this.rules.other.startATag.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:n[0]}}link(e){if(this.lexer.state.linkParenPossible===!1)return;let n=this.rules.inline.link.exec(e);if(n){let t=n[0].charAt(0)==="!"?2:1;if(!this.options.pedantic&&Da(e,n[1],t,this.rules))return;let s=n[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(s)){if(!this.rules.other.endAngleBracket.test(s))return;let r=vs(s.slice(0,-1),"\\");if((s.length-r.length)%2===0)return}else{let r=$a(n[2],"()");if(r===-2)return;if(r>-1){let a=(n[0].indexOf("!")===0?5:4)+n[1].length+r;n[2]=n[2].substring(0,r),n[0]=n[0].substring(0,a).trim(),n[3]=""}}let i=n[2],o="";if(this.options.pedantic){let r=this.rules.other.pedanticHrefTitle.exec(i);r&&(i=r[1],o=r[3])}else o=n[3]?n[3].slice(1,-1):"";return i=i.trim(),this.rules.other.startAngleBracket.test(i)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(s)?i=i.slice(1):i=i.slice(1,-1)),Ca(n,{href:i&&i.replace(this.rules.inline.anyPunctuation,"$1"),title:o&&o.replace(this.rules.inline.anyPunctuation,"$1")},n[0],this.lexer,this.rules)}}reflink(e,n){let t;if((t=this.rules.inline.reflink.exec(e))||(t=this.rules.inline.nolink.exec(e))){let s=t[0].charAt(0)==="!"?2:1;if(!this.options.pedantic&&Da(e,t[1],s,this.rules))return;let i=(t[2]||t[1]).replace(this.rules.other.multipleSpaceGlobal," "),o=n[bl(i)];if(!o){let r=t[0].charAt(0);return{type:"text",raw:r,text:r}}return Ca(t,o,t[0],this.lexer,this.rules)}}emStrong(e,n,t=""){let s=this.rules.inline.emStrongLDelim.exec(e);if(!(!s||!s[1]&&!s[2]&&!s[3]&&!s[4]||s[4]&&t.match(this.rules.other.unicodeAlphaNumeric))&&(!(s[1]||s[3])||!t||this.rules.inline.punctuation.exec(t))){let i=[...s[0]].length-1,o,r,a=i,u=0,p=s[0][0],c=t===p,h=p==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(h.lastIndex=0,n=n.slice(-1*e.length+i);(s=h.exec(n))!==null;){if(o=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!o)continue;if(r=[...o].length,s[3]||s[4]){a+=r;continue}else if(s[5]||s[6]){if(i%3&&!((i+r)%3)){u+=r;continue}if(c)break}if(a-=r,a>0)continue;r=Math.min(r,r+a+u);let m=[...s[0]][0].length,S=e.slice(0,i+s.index+m+r);if(Math.min(i,r)%2){let A=S.slice(1,-1);return{type:"em",raw:S,text:A,tokens:this.lexer.inlineTokens(A)}}let M=S.slice(2,-2);return{type:"strong",raw:S,text:M,tokens:this.lexer.inlineTokens(M)}}}}codespan(e){let n=this.rules.inline.code.exec(e);if(n){let t=n[2].replace(this.rules.other.newLineCharGlobal," "),s=this.rules.other.nonSpaceChar.test(t),i=this.rules.other.startingSpaceChar.test(t)&&this.rules.other.endingSpaceChar.test(t);return s&&i&&(t=t.substring(1,t.length-1)),{type:"codespan",raw:n[0],text:t}}}br(e){let n=this.rules.inline.br.exec(e);if(n)return{type:"br",raw:n[0]}}del(e,n,t=""){let s=this.rules.inline.delLDelim.exec(e);if(s&&(!s[1]||!t||this.rules.inline.punctuation.exec(t))){let i=[...s[0]].length-1,o,r,a=i,u=this.rules.inline.delRDelim;for(u.lastIndex=0,n=n.slice(-1*e.length+i);(s=u.exec(n))!==null;){if(o=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!o||(r=[...o].length,r!==i))continue;if(s[3]||s[4]){a+=r;continue}if(a-=r,a>0)continue;r=Math.min(r,r+a);let p=[...s[0]][0].length,c=e.slice(0,i+s.index+p+r),h=c.slice(i,-i);return{type:"del",raw:c,text:h,tokens:this.lexer.inlineTokens(h)}}}}autolink(e){let n=this.rules.inline.autolink.exec(e);if(n){let t,s;return n[2]==="@"?(t=n[1],s="mailto:"+t):(t=n[1],s=t),{type:"link",raw:n[0],text:t,href:s,autolink:!0,tokens:[{type:"text",raw:t,text:t}]}}}url(e){var t;let n;if(n=this.rules.inline.url.exec(e)){let s,i;if(n[2]==="@")s=n[0],i="mailto:"+s;else{let o;do o=n[0],n[0]=((t=this.rules.inline._backpedal.exec(n[0]))==null?void 0:t[0])??"";while(o!==n[0]);s=n[0],n[1]==="www."?i="http://"+n[0]:i=n[0]}return{type:"link",raw:n[0],text:s,href:i,autolink:!0,tokens:[{type:"text",raw:s,text:s}]}}}inlineText(e){let n=this.rules.inline.text.exec(e);if(n){let t=this.lexer.state.inRawBlock;return{type:"text",raw:n[0],text:t?n[0]:sv(n[0]),escaped:t}}}},xl,$c,Rs,At=(Rs=class{constructor(n){Sr(this,xl);an(this,"tokens");an(this,"options");an(this,"state");an(this,"inlineQueue");an(this,"tokenizer");this.tokens=[],this.tokens.links=Object.create(null),this.options=n||Ns,this.options.tokenizer=this.options.tokenizer||new wl,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,linkEmitted:!1,linkParenPossible:!0,top:!0};let t={other:jn,block:Qi.normal,inline:ri.normal};this.options.pedantic?(t.block=Qi.pedantic,t.inline=ri.pedantic):this.options.gfm&&(t.block=Qi.gfm,this.options.breaks?t.inline=ri.breaks:t.inline=ri.gfm),this.tokenizer.rules=t}static get rules(){return{block:Qi,inline:ri}}static lex(n,t){return new Rs(t).lex(n)}static lexInline(n,t){return new Rs(t).inlineTokens(n)}lex(n){n=n.replace(jn.carriageReturn,`
`),this.blockTokens(n,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){let s=this.inlineQueue[t];this.inlineTokens(s.src,s.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(n,t=[],s=!1){var o,r,a;this.tokenizer.lexer=this,this.options.pedantic&&(n=n.replace(jn.tabCharGlobal,"    ").replace(jn.spaceLine,""));let i=1/0;for(;n;){if(n.length<i)i=n.length;else{this.infiniteLoopError(n.charCodeAt(0));break}let u;if((r=(o=this.options.extensions)==null?void 0:o.block)!=null&&r.some(c=>(u=c.call({lexer:this},n,t))?(n=n.substring(u.raw.length),t.push(u),!0):!1))continue;if(u=this.tokenizer.space(n)){n=n.substring(u.raw.length);let c=t.at(-1);u.raw.length===1&&c!==void 0?c.raw+=`
`:t.push(u);continue}if(u=this.tokenizer.code(n)){n=n.substring(u.raw.length);let c=t.at(-1);(c==null?void 0:c.type)==="paragraph"||(c==null?void 0:c.type)==="text"?(c.raw+=(c.raw.endsWith(`
`)?"":`
`)+u.raw,c.text+=`
`+u.text,this.inlineQueue.at(-1).src=c.text):t.push(u);continue}if(u=this.tokenizer.fences(n)){n=n.substring(u.raw.length),t.push(u);continue}if(u=this.tokenizer.heading(n)){n=n.substring(u.raw.length),t.push(u);continue}if(u=this.tokenizer.hr(n)){n=n.substring(u.raw.length),t.push(u);continue}if(u=this.tokenizer.blockquote(n)){n=n.substring(u.raw.length),t.push(u);continue}if(u=this.tokenizer.list(n)){n=n.substring(u.raw.length),t.push(u);continue}if(u=this.tokenizer.html(n)){n=n.substring(u.raw.length),t.push(u);continue}if(u=this.tokenizer.def(n)){n=n.substring(u.raw.length);let c=t.at(-1);(c==null?void 0:c.type)==="paragraph"||(c==null?void 0:c.type)==="text"?(c.raw+=(c.raw.endsWith(`
`)?"":`
`)+u.raw,c.text+=`
`+u.raw,this.inlineQueue.at(-1).src=c.text):this.tokens.links[u.tag]||(this.tokens.links[u.tag]={href:u.href,title:u.title},t.push(u));continue}if(u=this.tokenizer.table(n)){n=n.substring(u.raw.length),t.push(u);continue}if(u=this.tokenizer.lheading(n)){n=n.substring(u.raw.length),t.push(u);continue}let p=n;if((a=this.options.extensions)!=null&&a.startBlock){let c=1/0,h=n.slice(1),m;this.options.extensions.startBlock.forEach(S=>{m=S.call({lexer:this},h),typeof m=="number"&&m>=0&&(c=Math.min(c,m))}),c<1/0&&c>=0&&(p=n.substring(0,c+1))}if(this.state.top&&(u=this.tokenizer.paragraph(p))){let c=t.at(-1);s&&(c==null?void 0:c.type)==="paragraph"?(c.raw+=(c.raw.endsWith(`
`)?"":`
`)+u.raw,c.text+=`
`+u.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=c.text):t.push(u),s=p.length!==n.length,n=n.substring(u.raw.length);continue}if(u=this.tokenizer.text(n)){n=n.substring(u.raw.length);let c=t.at(-1);(c==null?void 0:c.type)==="text"?(c.raw+=(c.raw.endsWith(`
`)?"":`
`)+u.raw,c.text+=`
`+u.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=c.text):t.push(u);continue}if(n){this.infiniteLoopError(n.charCodeAt(0));break}}return this.state.top=!0,t}inline(n,t=[]){return this.inlineQueue.push({src:n,tokens:t}),t}linkInText(n){if(!n.includes("["))return!1;let t=this.tokenizer.rules.inline.link;for(let s of n.matchAll(this.tokenizer.rules.inline.blockSkip))if(t.test(s[0])&&n.charAt(s.index-1)!=="!")return!0;for(let s of n.matchAll(this.tokenizer.rules.inline.reflinkSearch)){let i=s[0],o=i.lastIndexOf("[");if(!(i.charAt(0)==="!"||!Object.hasOwn(this.tokens.links,bl(i.slice(o+1,-1))))&&!(o>1&&this.linkInText(i.slice(1,o-1))))return!0}return!1}inlineTokens(n,t=[]){this.tokenizer.lexer=this;let s=this.state.linkParenPossible;this.state.linkParenPossible=s&&n.includes(")");try{return $r(this,xl,$c).call(this,n,t)}finally{this.state.linkParenPossible=s}}infiniteLoopError(n){let t="Infinite loop on byte: "+n;if(this.options.silent)console.error(t);else throw new Error(t)}},xl=new WeakSet,$c=function(n,t){var a,u,p,c,h;let s=n;if(this.tokens.links&&n.includes("[")){let m=this.tokenizer.rules.inline.reflinkSearch,S=M=>{let A=M.lastIndexOf("[");if(!Object.hasOwn(this.tokens.links,bl(M.slice(A+1,-1))))return M;if(A>1&&M.charAt(0)!=="!"){let O=M.slice(1,A-1);if(this.linkInText(O))return"["+O.replace(m,S)+"]["+"a".repeat(M.length-A-2)+"]"}return"["+"a".repeat(M.length-2)+"]"};s=s.replace(m,S)}s=s.replace(this.tokenizer.rules.inline.anyPunctuation,m=>"+".repeat(m.length)),s=s.replace(this.tokenizer.rules.inline.blockSkip,(m,S,M)=>{let A=M?M.length:0;return m.slice(0,A)+"["+"a".repeat(m.length-A-2)+"]"}),s=((u=(a=this.options.hooks)==null?void 0:a.emStrongMask)==null?void 0:u.call({lexer:this},s))??s;let i=!1,o="",r=1/0;for(;n;){if(n.length<r)r=n.length;else{this.infiniteLoopError(n.charCodeAt(0));break}i||(o=""),i=!1;let m;if((c=(p=this.options.extensions)==null?void 0:p.inline)!=null&&c.some(M=>(m=M.call({lexer:this},n,t))?(n=n.substring(m.raw.length),t.push(m),!0):!1))continue;if(m=this.tokenizer.escape(n)){n=n.substring(m.raw.length),t.push(m);continue}if(m=this.tokenizer.tag(n)){n=n.substring(m.raw.length),t.push(m);continue}if(m=this.tokenizer.link(n)){n=n.substring(m.raw.length),t.push(m);continue}if(m=this.tokenizer.reflink(n,this.tokens.links)){n=n.substring(m.raw.length);let M=t.at(-1);m.type==="text"&&(M==null?void 0:M.type)==="text"?(M.raw+=m.raw,M.text+=m.text):t.push(m);continue}if(m=this.tokenizer.emStrong(n,s,o)){n=n.substring(m.raw.length),t.push(m);continue}if(m=this.tokenizer.codespan(n)){n=n.substring(m.raw.length),t.push(m);continue}if(m=this.tokenizer.br(n)){n=n.substring(m.raw.length),t.push(m);continue}if(m=this.tokenizer.del(n,s,o)){n=n.substring(m.raw.length),t.push(m);continue}if(m=this.tokenizer.autolink(n)){n=n.substring(m.raw.length),t.push(m);continue}if(!this.state.inLink&&(m=this.tokenizer.url(n))){n=n.substring(m.raw.length),t.push(m);continue}let S=n;if((h=this.options.extensions)!=null&&h.startInline){let M=1/0,A=n.slice(1),O;this.options.extensions.startInline.forEach(ee=>{O=ee.call({lexer:this},A),typeof O=="number"&&O>=0&&(M=Math.min(M,O))}),M<1/0&&M>=0&&(S=n.substring(0,M+1))}if(m=this.tokenizer.inlineText(S)){n=n.substring(m.raw.length),m.raw.slice(-1)!=="_"&&(o=m.raw.slice(-1)),i=!0;let M=t.at(-1);(M==null?void 0:M.type)==="text"?(M.raw+=m.raw,M.text+=m.text):t.push(m);continue}if(n){this.infiniteLoopError(n.charCodeAt(0));break}}return t},Rs),kl=class{constructor(e){an(this,"options");an(this,"parser");this.options=e||Ns}space(e){return""}code({text:e,lang:n,escaped:t}){var o;let s=(o=(n||"").match(jn.notSpaceStart))==null?void 0:o[0],i=e?e.replace(jn.endingNewline,"")+`
`:"";return s?'<pre><code class="language-'+dt(s)+'">'+(t?i:dt(i,!0))+`</code></pre>
`:"<pre><code>"+(t?i:dt(i,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}def(e){return""}heading({tokens:e,depth:n}){return`<h${n}>${this.parser.parseInline(e)}</h${n}>
`}hr(e){return`<hr>
`}list(e){let n=e.ordered,t=e.start,s="";for(let r=0;r<e.items.length;r++){let a=e.items[r];s+=this.listitem(a)}let i=n?"ol":"ul",o=n&&t!==1?' start="'+t+'"':"";return"<"+i+o+`>
`+s+"</"+i+`>
`}listitem(e){return`<li>${this.parser.parse(e.tokens)}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let n="",t="";for(let i=0;i<e.header.length;i++)t+=this.tablecell(e.header[i]);n+=this.tablerow({text:t});let s="";for(let i=0;i<e.rows.length;i++){let o=e.rows[i];t="";for(let r=0;r<o.length;r++)t+=this.tablecell(o[r]);s+=this.tablerow({text:t})}return s&&(s=`<tbody>${s}</tbody>`),`<table>
<thead>
`+n+`</thead>
`+s+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let n=this.parser.parseInline(e.tokens),t=e.header?"th":"td";return(e.align?`<${t} align="${e.align}">`:`<${t}>`)+n+`</${t}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${dt(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:n,text:t,tokens:s,autolink:i}){let o=i?dt(t,!0):this.parser.parseInline(s),r=ka(e);if(r===null)return o;e=dt(r,i);let a='<a href="'+e+'"';return n&&(a+=' title="'+dt(n)+'"'),a+=">"+o+"</a>",a}image({href:e,title:n,text:t,tokens:s}){s&&(t=this.parser.parseInline(s,this.parser.textRenderer));let i=ka(e);if(i===null)return dt(t);e=i;let o=`<img src="${dt(e)}" alt="${dt(t)}"`;return n&&(o+=` title="${dt(n)}"`),o+=">",o}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:dt(e.text)}},mr=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}checkbox({raw:e}){return e}},Et=class Fo{constructor(n){an(this,"options");an(this,"renderer");an(this,"textRenderer");this.options=n||Ns,this.options.renderer=this.options.renderer||new kl,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new mr}static parse(n,t){return new Fo(t).parse(n)}static parseInline(n,t){return new Fo(t).parseInline(n)}parse(n){var s,i;this.renderer.parser=this;let t="";for(let o=0;o<n.length;o++){let r=n[o];if((i=(s=this.options.extensions)==null?void 0:s.renderers)!=null&&i[r.type]){let u=r,p=this.options.extensions.renderers[u.type].call({parser:this},u);if(p!==!1||!["space","hr","heading","code","table","blockquote","list","checkbox","html","def","paragraph","text"].includes(u.type)){t+=p||"";continue}}let a=r;switch(a.type){case"space":{t+=this.renderer.space(a);break}case"hr":{t+=this.renderer.hr(a);break}case"heading":{t+=this.renderer.heading(a);break}case"code":{t+=this.renderer.code(a);break}case"table":{t+=this.renderer.table(a);break}case"blockquote":{t+=this.renderer.blockquote(a);break}case"list":{t+=this.renderer.list(a);break}case"checkbox":{t+=this.renderer.checkbox(a);break}case"html":{t+=this.renderer.html(a);break}case"def":{t+=this.renderer.def(a);break}case"paragraph":{t+=this.renderer.paragraph(a);break}case"text":{t+=this.renderer.text(a);break}default:{let u='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(u),"";throw new Error(u)}}}return t}parseInline(n,t=this.renderer){var i,o;this.renderer.parser=this;let s="";for(let r=0;r<n.length;r++){let a=n[r];if((o=(i=this.options.extensions)==null?void 0:i.renderers)!=null&&o[a.type]){let p=this.options.extensions.renderers[a.type].call({parser:this},a);if(p!==!1||!["escape","html","link","image","checkbox","strong","em","codespan","br","del","text"].includes(a.type)){s+=p||"";continue}}let u=a;switch(u.type){case"escape":{s+=t.text(u);break}case"html":{s+=t.html(u);break}case"link":{s+=t.link(u);break}case"image":{s+=t.image(u);break}case"checkbox":{s+=t.checkbox(u);break}case"strong":{s+=t.strong(u);break}case"em":{s+=t.em(u);break}case"codespan":{s+=t.codespan(u);break}case"br":{s+=t.br(u);break}case"del":{s+=t.del(u);break}case"text":{s+=t.text(u);break}default:{let p='Token with "'+u.type+'" type was not found.';if(this.options.silent)return console.error(p),"";throw new Error(p)}}}return s}},el,hi=(el=class{constructor(e){an(this,"options");an(this,"block");this.options=e||Ns}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(e=this.block){return e?At.lex:At.lexInline}provideParser(e=this.block){return e?Et.parse:Et.parseInline}},an(el,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens","emStrongMask"])),an(el,"passThroughHooksRespectAsync",new Set(["preprocess","postprocess","processAllTokens"])),el),lv=class{constructor(...e){an(this,"defaults",ur());an(this,"options",this.setOptions);an(this,"parse",this.parseMarkdown(!0));an(this,"parseInline",this.parseMarkdown(!1));an(this,"Parser",Et);an(this,"Renderer",kl);an(this,"TextRenderer",mr);an(this,"Lexer",At);an(this,"Tokenizer",wl);an(this,"Hooks",hi);this.use(...e)}walkTokens(e,n){var s,i;let t=[];for(let o of e)switch(t=t.concat(n.call(this,o)),o.type){case"table":{let r=o;for(let a of r.header)t=t.concat(this.walkTokens(a.tokens,n));for(let a of r.rows)for(let u of a)t=t.concat(this.walkTokens(u.tokens,n));break}case"list":{let r=o;t=t.concat(this.walkTokens(r.items,n));break}default:{let r=o;(i=(s=this.defaults.extensions)==null?void 0:s.childTokens)!=null&&i[r.type]?this.defaults.extensions.childTokens[r.type].forEach(a=>{let u=r[a].flat(1/0);t=t.concat(this.walkTokens(u,n))}):r.tokens&&(t=t.concat(this.walkTokens(r.tokens,n)))}}return t}use(...e){let n=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(t=>{let s={...t};if(s.async=this.defaults.async||s.async||!1,t.extensions&&(t.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if("renderer"in i){let o=n.renderers[i.name];o?n.renderers[i.name]=function(...r){let a=i.renderer.apply(this,r);return a===!1&&(a=o.apply(this,r)),a}:n.renderers[i.name]=i.renderer}if("tokenizer"in i){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let o=n[i.level];o?o.unshift(i.tokenizer):n[i.level]=[i.tokenizer],i.start&&(i.level==="block"?n.startBlock?n.startBlock.push(i.start):n.startBlock=[i.start]:i.level==="inline"&&(n.startInline?n.startInline.push(i.start):n.startInline=[i.start]))}"childTokens"in i&&i.childTokens&&(n.childTokens[i.name]=i.childTokens)}),s.extensions=n),t.renderer){let i=this.defaults.renderer||new kl(this.defaults);for(let o in t.renderer){if(!(o in i))throw new Error(`renderer '${o}' does not exist`);if(["options","parser"].includes(o))continue;let r=o,a=t.renderer[r],u=i[r];i[r]=(...p)=>{let c=a.apply(i,p);return c===!1&&(c=u.apply(i,p)),c||""}}s.renderer=i}if(t.tokenizer){let i=this.defaults.tokenizer||new wl(this.defaults);for(let o in t.tokenizer){if(!(o in i))throw new Error(`tokenizer '${o}' does not exist`);if(["options","rules","lexer"].includes(o))continue;let r=o,a=t.tokenizer[r],u=i[r];i[r]=(...p)=>{let c=a.apply(i,p);return c===!1&&(c=u.apply(i,p)),c}}s.tokenizer=i}if(t.hooks){let i=this.defaults.hooks||new hi;for(let o in t.hooks){if(!(o in i))throw new Error(`hook '${o}' does not exist`);if(["options","block"].includes(o))continue;let r=o,a=t.hooks[r],u=i[r];hi.passThroughHooks.has(o)?i[r]=p=>{if(this.defaults.async&&hi.passThroughHooksRespectAsync.has(o))return(async()=>{let h=await a.call(i,p);return u.call(i,h)})();let c=a.call(i,p);return u.call(i,c)}:i[r]=(...p)=>{if(this.defaults.async)return(async()=>{let h=await a.apply(i,p);return h===!1&&(h=await u.apply(i,p)),h})();let c=a.apply(i,p);return c===!1&&(c=u.apply(i,p)),c}}s.hooks=i}if(t.walkTokens){let i=this.defaults.walkTokens,o=t.walkTokens;s.walkTokens=function(r){let a=[];return a.push(o.call(this,r)),i&&(a=a.concat(i.call(this,r))),a}}this.defaults={...this.defaults,...s}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,n){return At.lex(e,n??this.defaults)}parser(e,n){return Et.parse(e,n??this.defaults)}parseMarkdown(e){return(n,t)=>{let s={...t},i={...this.defaults,...s},o=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&s.async===!1)return o(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof n>"u"||n===null)return o(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));if(i.hooks&&(i.hooks.options=i,i.hooks.block=e),i.async)return(async()=>{let r=i.hooks?await i.hooks.preprocess(n):n,a=await(i.hooks?await i.hooks.provideLexer(e):e?At.lex:At.lexInline)(r,i),u=i.hooks?await i.hooks.processAllTokens(a):a;i.walkTokens&&await Promise.all(this.walkTokens(u,i.walkTokens));let p=await(i.hooks?await i.hooks.provideParser(e):e?Et.parse:Et.parseInline)(u,i);return i.hooks?await i.hooks.postprocess(p):p})().catch(o);try{i.hooks&&(n=i.hooks.preprocess(n));let r=(i.hooks?i.hooks.provideLexer(e):e?At.lex:At.lexInline)(n,i);i.hooks&&(r=i.hooks.processAllTokens(r)),i.walkTokens&&this.walkTokens(r,i.walkTokens);let a=(i.hooks?i.hooks.provideParser(e):e?Et.parse:Et.parseInline)(r,i);return i.hooks&&(a=i.hooks.postprocess(a)),a}catch(r){return o(r)}}}onError(e,n){return t=>{if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let s="<p>An error occurred:</p><pre>"+dt(t.message+"",!0)+"</pre>";return n?Promise.resolve(s):s}if(n)return Promise.reject(t);throw t}}},Ls=new lv;function cn(e,n){return Ls.parse(e,n)}cn.options=cn.setOptions=function(e){return Ls.setOptions(e),cn.defaults=Ls.defaults,mc(cn.defaults),cn};cn.getDefaults=ur;cn.defaults=Ns;function ov(...e){return Ls.use(...e),cn.defaults=Ls.defaults,mc(cn.defaults),cn}cn.use=ov;cn.walkTokens=function(e,n){return Ls.walkTokens(e,n)};cn.parseInline=Ls.parseInline;cn.Parser=Et;cn.parser=Et.parse;cn.Renderer=kl;cn.TextRenderer=mr;cn.Lexer=At;cn.lexer=At.lex;cn.Tokenizer=wl;cn.Hooks=hi;cn.parse=cn;cn.options;cn.setOptions;cn.walkTokens;cn.parseInline;Et.parse;At.lex;/*! @license DOMPurify 3.4.16 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.16/LICENSE */function Aa(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,s=Array(n);t<n;t++)s[t]=e[t];return s}function rv(e){if(Array.isArray(e))return e}function av(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var s,i,o,r,a=[],u=!0,p=!1;try{if(o=(t=t.call(e)).next,n!==0)for(;!(u=(s=o.call(t)).done)&&(a.push(s.value),a.length!==n);u=!0);}catch(c){p=!0,i=c}finally{try{if(!u&&t.return!=null&&(r=t.return(),Object(r)!==r))return}finally{if(p)throw i}}return a}}function uv(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */function cv(e,n){return rv(e)||av(e,n)||dv(e,n)||uv()}function dv(e,n){if(e){if(typeof e=="string")return Aa(e,n);var t={}.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Aa(e,n):void 0}}const Tc=Object.entries,Ea=Object.setPrototypeOf,pv=Object.isFrozen,vv=Object.getPrototypeOf,fv=Object.getOwnPropertyDescriptor;let Ln=Object.freeze,Nn=Object.seal,qs=Object.create,Cc=typeof Reflect<"u"&&Reflect,zo=Cc.apply,Uo=Cc.construct;Ln||(Ln=function(n){return n});Nn||(Nn=function(n){return n});zo||(zo=function(n,t){for(var s=arguments.length,i=new Array(s>2?s-2:0),o=2;o<s;o++)i[o-2]=arguments[o];return n.apply(t,i)});Uo||(Uo=function(n){for(var t=arguments.length,s=new Array(t>1?t-1:0),i=1;i<t;i++)s[i-1]=arguments[i];return new n(...s)});const Ds=In(Array.prototype.forEach),hv=In(Array.prototype.lastIndexOf),Ia=In(Array.prototype.pop),ai=In(Array.prototype.push),mv=In(Array.prototype.splice),Js=Array.isArray,mi=In(String.prototype.toLowerCase),io=In(String.prototype.toString),Ma=In(String.prototype.match),ui=In(String.prototype.replace),Oa=In(String.prototype.indexOf),gv=In(String.prototype.trim),_v=In(Number.prototype.toString),yv=In(Boolean.prototype.toString),Ra=typeof BigInt>"u"?null:In(BigInt.prototype.toString),Pa=typeof Symbol>"u"?null:In(Symbol.prototype.toString),rt=In(Object.prototype.hasOwnProperty),ci=In(Object.prototype.toString),Xn=In(RegExp.prototype.test),fs=bv(TypeError);function In(e){return function(n){n instanceof RegExp&&(n.lastIndex=0);for(var t=arguments.length,s=new Array(t>1?t-1:0),i=1;i<t;i++)s[i-1]=arguments[i];return zo(e,n,s)}}function bv(e){return function(){for(var n=arguments.length,t=new Array(n),s=0;s<n;s++)t[s]=arguments[s];return Uo(e,t)}}function Qe(e,n){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:mi;if(Ea&&Ea(e,null),!Js(n))return e;let s=n.length;for(;s--;){let i=n[s];if(typeof i=="string"){const o=t(i);o!==i&&(pv(n)||(n[s]=o),i=o)}e[i]=!0}return e}function wv(e){for(let n=0;n<e.length;n++)rt(e,n)||(e[n]=null);return e}function pt(e){const n=qs(null);for(const s of Tc(e)){var t=cv(s,2);const i=t[0],o=t[1];rt(e,i)&&(Js(o)?n[i]=wv(o):o&&typeof o=="object"&&o.constructor===Object?n[i]=pt(o):n[i]=o)}return n}function kv(e){switch(typeof e){case"string":return e;case"number":return _v(e);case"boolean":return yv(e);case"bigint":return Ra?Ra(e):"0";case"symbol":return Pa?Pa(e):"Symbol()";case"undefined":return ci(e);case"function":case"object":{if(e===null)return ci(e);const n=e,t=kt(n,"toString");if(typeof t=="function"){const s=t(n);return typeof s=="string"?s:ci(s)}return ci(e)}default:return ci(e)}}function kt(e,n){for(;e!==null;){const s=fv(e,n);if(s){if(s.get)return In(s.get);if(typeof s.value=="function")return In(s.value)}e=vv(e)}function t(){return null}return t}function xv(e){try{return Xn(e,""),!0}catch{return!1}}const La=Ln(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),lo=Ln(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),oo=Ln(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Sv=Ln(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),ro=Ln(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),$v=Ln(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Na=Ln(["#text"]),Fa=Ln(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","command","commandfor","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns"]),ao=Ln(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dominant-baseline","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","pointer-events","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-orientation","text-rendering","textlength","type","u1","u2","unicode","values","vector-effect","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),za=Ln(["accent","accentunder","align","bevelled","close","columnalign","columnlines","columnspacing","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lquote","lspace","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Ji=Ln(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Tv=Nn(/{{[\w\W]*|^[\w\W]*}}/g),Cv=Nn(/<%[\w\W]*|^[\w\W]*%>/g),Dv=Nn(/\${[\w\W]*/g),Av=Nn(/^data-[\-\w.\u00B7-\uFFFF]+$/),Ev=Nn(/^aria-[\-\w]+$/),Ua=Nn(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Iv=Nn(/^(?:\w+script|data):/i),Mv=Nn(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Ov=Nn(/^html$/i),Rv=Nn(/^[a-z][.\w]*(-[.\w]+)+$/i),ja=Nn(/<[/\w!]/g),Ba=Nn(/<[/\w]/g),Pv=Nn(/<\/no(script|embed|frames)/i),Lv=Nn(/\/>/i),ct={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,processingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},Dc=["style","script","xmp","iframe","noembed","noframes","plaintext","noscript"],Nv=Ln(Qe({},Dc)),Fv=(function(){const e={};return Ds(Dc,n=>{e[n]=Nn(new RegExp("</"+n+"(?=[\\t\\n\\f\\r />])","i"))}),Ln(e)})(),zv=function(){return typeof window>"u"?null:window},Uv=function(n,t){if(typeof n!="object"||typeof n.createPolicy!="function")return null;let s=null;const i="data-tt-policy-suffix";t&&t.hasAttribute(i)&&(s=t.getAttribute(i));const o="dompurify"+(s?"#"+s:"");try{return n.createPolicy(o,{createHTML(r){return r},createScriptURL(r){return r}})}catch{return console.warn("TrustedTypes policy "+o+" could not be created."),null}},Va=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},hs=function(n,t,s,i){return rt(n,t)&&Js(n[t])?Qe(i.base?pt(i.base):{},n[t],i.transform):s},uo=function(n,t,s){const i=rt(n,t)?n[t]:void 0;return i&&typeof i=="object"?pt(i):s()};function Ac(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:zv();const n=ce=>Ac(ce);if(n.version="3.4.16",n.removed=[],!e||!e.document||e.document.nodeType!==ct.document||!e.Element)return n.isSupported=!1,n;let t=e.document;const s=t,i=s.currentScript;e.DocumentFragment;const o=e.HTMLTemplateElement,r=e.Node,a=e.Element,u=e.NodeFilter;e.NamedNodeMap===void 0&&(e.NamedNodeMap||e.MozNamedAttrMap),e.HTMLFormElement;const p=e.DOMParser,c=e.trustedTypes,h=a.prototype,m=kt(h,"cloneNode"),S=kt(h,"remove"),M=kt(h,"removeAttributeNode"),A=kt(h,"nextSibling"),O=kt(h,"childNodes"),ee=kt(h,"parentNode"),P=kt(h,"shadowRoot"),ne=kt(h,"attributes"),ie=r&&r.prototype?kt(r.prototype,"nodeType"):null,Z=r&&r.prototype?kt(r.prototype,"nodeName"):null,V=r&&r.prototype?kt(r.prototype,"ownerDocument"):null,E=function(_){return ie?ie(_):_.nodeType},z=function(_){return Z?Z(_):_.nodeName};if(typeof o=="function"){const ce=t.createElement("template");ce.content&&ce.content.ownerDocument&&(t=ce.content.ownerDocument)}let G,W="",q,he=!1,xe=0;const nn=function(){if(xe>0)throw fs('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.')},Je=function(_){nn(),xe++;try{return G.createHTML(_)}finally{xe--}},ke=function(_){nn(),xe++;try{return G.createScriptURL(_)}finally{xe--}},Ee=function(){return he||(q=Uv(c,i),he=!0),q},Ie=t,We=Ie.implementation,An=Ie.createNodeIterator,_n=Ie.createDocumentFragment,He=Ie.getElementsByTagName,En=s.importNode;let Ue=Va();n.isSupported=typeof Tc=="function"&&typeof ee=="function"&&We&&We.createHTMLDocument!==void 0;const Mn=Tv,qe=Cv,kn=Dv,On=Av,Fn=Ev,Y=Iv,U=Mv,b=Rv;let D=Ua,L=null;const $=Qe({},[...La,...lo,...oo,...ro,...Na]);let w=null;const j=Qe({},[...Fa,...ao,...za,...Ji]);let C=Object.seal(qs(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),X=null,F=null;const B=Object.seal(qs(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let ae=!0,le=!0,me=!1,_e=!0,Te=!1,ye=!0,Ne=!1,Ce=!1,je=null,pn=null,xn=!1,zn=!1,_t=!1,Sn=!1,tn=!0,yt=!1;const $t="user-content-";let xs=!0,Gt=!1,Rn={},Gn=null;const Ss=Qe({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","selectedcontent","style","svg","template","thead","title","video","xmp"]);let bt=null;const Fs=Qe({},["audio","video","img","source","image","track"]);let ds=null;const zs=Qe({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Yt="http://www.w3.org/1998/Math/MathML",Qt="http://www.w3.org/2000/svg",Yn="http://www.w3.org/1999/xhtml";let Tt=Yn,Qn=!1,T=null;const x=Qe({},[Yt,Qt,Yn],io),I=Ln(["mi","mo","mn","ms","mtext"]);let fe=Qe({},I);const be=Ln(["annotation-xml"]);let Ze=Qe({},be);const Fe=Qe({},["title","style","font","a","script"]);let ze=null;const pe=["application/xhtml+xml","text/html"],Se="text/html";let ge=null,Oe=null;const Re=t.createElement("form"),Ge=function(_){return _ instanceof RegExp||_ instanceof Function},k=function(){let _=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(Oe&&Oe===_)return;(!_||typeof _!="object")&&(_={}),_=pt(_),ze=pe.indexOf(_.PARSER_MEDIA_TYPE)===-1?Se:_.PARSER_MEDIA_TYPE,ge=ze==="application/xhtml+xml"?io:mi,L=hs(_,"ALLOWED_TAGS",$,{transform:ge}),w=hs(_,"ALLOWED_ATTR",j,{transform:ge}),T=hs(_,"ALLOWED_NAMESPACES",x,{transform:io}),ds=hs(_,"ADD_URI_SAFE_ATTR",zs,{transform:ge,base:zs}),bt=hs(_,"ADD_DATA_URI_TAGS",Fs,{transform:ge,base:Fs}),Gn=hs(_,"FORBID_CONTENTS",Ss,{transform:ge}),X=hs(_,"FORBID_TAGS",pt({}),{transform:ge}),F=hs(_,"FORBID_ATTR",pt({}),{transform:ge}),Rn=rt(_,"USE_PROFILES")?_.USE_PROFILES&&typeof _.USE_PROFILES=="object"?pt(_.USE_PROFILES):_.USE_PROFILES:!1,ae=_.ALLOW_ARIA_ATTR!==!1,le=_.ALLOW_DATA_ATTR!==!1,me=_.ALLOW_UNKNOWN_PROTOCOLS||!1,_e=_.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Te=_.SAFE_FOR_TEMPLATES||!1,ye=_.SAFE_FOR_XML!==!1,Ne=_.WHOLE_DOCUMENT||!1,zn=_.RETURN_DOM||!1,_t=_.RETURN_DOM_FRAGMENT||!1,Sn=_.RETURN_TRUSTED_TYPE||!1,xn=_.FORCE_BODY||!1,tn=_.SANITIZE_DOM!==!1,yt=_.SANITIZE_NAMED_PROPS||!1,xs=_.KEEP_CONTENT!==!1,Gt=_.IN_PLACE||!1,D=xv(_.ALLOWED_URI_REGEXP)?_.ALLOWED_URI_REGEXP:Ua,Tt=typeof _.NAMESPACE=="string"?_.NAMESPACE:Yn,fe=uo(_,"MATHML_TEXT_INTEGRATION_POINTS",()=>Qe({},I)),Ze=uo(_,"HTML_INTEGRATION_POINTS",()=>Qe({},be));const N=uo(_,"CUSTOM_ELEMENT_HANDLING",()=>qs(null));if(C=qs(null),rt(N,"tagNameCheck")&&Ge(N.tagNameCheck)&&(C.tagNameCheck=N.tagNameCheck),rt(N,"attributeNameCheck")&&Ge(N.attributeNameCheck)&&(C.attributeNameCheck=N.attributeNameCheck),rt(N,"allowCustomizedBuiltInElements")&&typeof N.allowCustomizedBuiltInElements=="boolean"&&(C.allowCustomizedBuiltInElements=N.allowCustomizedBuiltInElements),Nn(C),Te&&(le=!1),_t&&(zn=!0),Rn&&(L=Qe({},Na),w=qs(null),Rn.html===!0&&(Qe(L,La),Qe(w,Fa)),Rn.svg===!0&&(Qe(L,lo),Qe(w,ao),Qe(w,Ji)),Rn.svgFilters===!0&&(Qe(L,oo),Qe(w,ao),Qe(w,Ji)),Rn.mathMl===!0&&(Qe(L,ro),Qe(w,za),Qe(w,Ji))),B.tagCheck=null,B.attributeCheck=null,rt(_,"ADD_TAGS")&&(typeof _.ADD_TAGS=="function"?B.tagCheck=_.ADD_TAGS:Js(_.ADD_TAGS)&&(L===$&&(L=pt(L)),Qe(L,_.ADD_TAGS,ge))),rt(_,"ADD_ATTR")&&(typeof _.ADD_ATTR=="function"?B.attributeCheck=_.ADD_ATTR:Js(_.ADD_ATTR)&&(w===j&&(w=pt(w)),Qe(w,_.ADD_ATTR,ge))),rt(_,"ADD_FORBID_CONTENTS")&&Js(_.ADD_FORBID_CONTENTS)&&(Gn===Ss&&(Gn=pt(Gn)),Qe(Gn,_.ADD_FORBID_CONTENTS,ge)),xs&&(L["#text"]=!0),Ne&&Qe(L,["html","head","body"]),L.table&&(Qe(L,["tbody"]),delete X.tbody),_.TRUSTED_TYPES_POLICY){if(typeof _.TRUSTED_TYPES_POLICY.createHTML!="function")throw fs('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof _.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw fs('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');const te=G;G=_.TRUSTED_TYPES_POLICY;try{W=Je("")}catch(ve){throw G=te,ve}}else _.TRUSTED_TYPES_POLICY===null?(G=void 0,W=""):(G===void 0&&(G=Ee()),G&&typeof W=="string"&&(W=Je("")));Ln&&Ln(_),Oe=_},y=Qe({},[...lo,...oo,...Sv]),re=Qe({},[...ro,...$v]),$e=function(_,N,te){return N.namespaceURI===Yn?_==="svg":N.namespaceURI===Yt?_==="svg"&&(te==="annotation-xml"||fe[te]):!!y[_]},Ke=function(_,N,te){return N.namespaceURI===Yn?_==="math":N.namespaceURI===Qt?_==="math"&&Ze[te]:!!re[_]},vn=function(_,N,te){return N.namespaceURI===Qt&&!Ze[te]||N.namespaceURI===Yt&&!fe[te]?!1:!re[_]&&(Fe[_]||!y[_])},Be=function(_){let N=ee(_);(!N||!N.tagName)&&(N={namespaceURI:Tt,tagName:"template"});const te=mi(_.tagName),ve=mi(N.tagName);return T[_.namespaceURI]?_.namespaceURI===Qt?$e(te,N,ve):_.namespaceURI===Yt?Ke(te,N,ve):_.namespaceURI===Yn?vn(te,N,ve):!!(ze==="application/xhtml+xml"&&T[_.namespaceURI]):!1},R=function(_){ai(n.removed,{element:_});try{ee(_).removeChild(_)}catch{if(S(_),!ee(_))throw fs("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place")}},J=function(_,N,te){try{M(_,N)}catch{try{_.removeAttribute(te)}catch{}}},de=function(_){lt(_);const N=O(_);if(N){const ve=[];Ds(N,De=>{ai(ve,De)}),Ds(ve,De=>{try{S(De)}catch{}})}const te=ne(_);if(te)for(let ve=te.length-1;ve>=0;--ve){const De=te[ve],Xe=De&&De.name;typeof Xe=="string"&&J(_,De,Xe)}},Ve=function(_,N,te){if(!te)try{te=N.getAttributeNode(_)}catch{te=null}ai(n.removed,{attribute:te||null,from:N});try{te?M(N,te):N.removeAttribute(_)}catch{try{N.removeAttribute(_)}catch{}}if(_==="is")if(zn||_t)try{R(N)}catch{}else try{N.setAttribute(_,"")}catch{}},$n=function(_){const N=ne(_);if(N)for(let te=N.length-1;te>=0;--te){const ve=N[te],De=ve&&ve.name;typeof De!="string"||w[ge(De)]||J(_,ve,De)}},lt=function(_){const N=[_];for(;N.length>0;){const te=N.pop();E(te)===ct.element&&$n(te);const ve=O(te);if(ve)for(let De=ve.length-1;De>=0;--De)N.push(ve[De])}},Cn=function(_,N){return ye?_==="patchsrc"?!0:_==="for"&&N!=="label"&&N!=="output":!1},Jn=function(_){if(!ye)return;const N=[_];for(;N.length>0;){const te=N.pop(),ve=E(te);if(ve===ct.processingInstruction||ve===ct.comment&&Xn(Ba,te.data)){try{S(te)}catch{}continue}if(ve===ct.element){const Xe=te,Ye=ge(z(te));try{Xe.hasAttribute&&Xe.hasAttribute("patchsrc")&&Xe.removeAttribute("patchsrc"),Xe.hasAttribute&&Xe.hasAttribute("for")&&Cn("for",Ye)&&Xe.removeAttribute("for")}catch{}}const De=O(te);if(De)for(let Xe=De.length-1;Xe>=0;--Xe)N.push(De[Xe])}},yn=function(_){let N=null,te=null;if(xn)_="<remove></remove>"+_;else{const Xe=Ma(_,/^[\r\n\t ]+/);te=Xe&&Xe[0]}ze==="application/xhtml+xml"&&Tt===Yn&&(_='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+_+"</body></html>");const ve=G?Je(_):_;if(Tt===Yn)try{N=new p().parseFromString(ve,ze)}catch{}if(!N||!N.documentElement){N=We.createDocument(Tt,"template",null);try{N.documentElement.innerHTML=Qn?W:ve}catch{}}const De=N.body||N.documentElement;return _&&te&&De.insertBefore(t.createTextNode(te),De.childNodes[0]||null),Tt===Yn?He.call(N,Ne?"html":"body")[0]:Ne?N.documentElement:De},ot=function(_){const N=V?V(_):_.ownerDocument;return An.call(N||_,_,u.SHOW_ELEMENT|u.SHOW_COMMENT|u.SHOW_TEXT|u.SHOW_PROCESSING_INSTRUCTION|u.SHOW_CDATA_SECTION,null)},Us=function(_){return _=ui(_,Mn," "),_=ui(_,qe," "),_=ui(_,kn," "),_},Bn=function(_){var N;_.normalize();const te=V?V(_):_.ownerDocument,ve=An.call(te||_,_,u.SHOW_TEXT|u.SHOW_COMMENT|u.SHOW_CDATA_SECTION|u.SHOW_PROCESSING_INSTRUCTION,null);let De=ve.nextNode();for(;De;)De.data=Us(De.data),De=ve.nextNode();const Xe=(N=_.querySelectorAll)===null||N===void 0?void 0:N.call(_,"template");Xe&&Ds(Xe,Ye=>{Nt(Ye.content)&&Bn(Ye.content)})},at=function(_){const N=Z?Z(_):null;return typeof N!="string"||ge(N)!=="form"?!1:typeof _.nodeName!="string"||typeof _.textContent!="string"||typeof _.removeChild!="function"||_.attributes!==ne(_)||typeof _.removeAttribute!="function"||typeof _.removeAttributeNode!="function"||typeof _.getAttributeNode!="function"||typeof _.setAttribute!="function"||typeof _.namespaceURI!="string"||typeof _.insertBefore!="function"||typeof _.hasChildNodes!="function"||_.nodeType!==ie(_)||_.childNodes!==O(_)},Nt=function(_){if(!ie||typeof _!="object"||_===null)return!1;try{return ie(_)===ct.documentFragment}catch{return!1}},Ct=function(_){if(!ie||typeof _!="object"||_===null)return!1;try{return typeof ie(_)=="number"}catch{return!1}};function Vn(ce,_,N){ce.length!==0&&Ds(ce,te=>{te.call(n,_,N,Oe)})}const Mc=function(_,N){return!!(ye&&_.hasChildNodes()&&!Ct(_.firstElementChild)&&Xn(ja,_.textContent)&&Xn(ja,_.innerHTML)||ye&&_.namespaceURI===Yn&&Nv[N]&&(Ct(_.firstElementChild)||typeof _.textContent=="string"&&Xn(Fv[N],_.textContent))||_.nodeType===ct.processingInstruction||ye&&_.nodeType===ct.comment&&Xn(Ba,_.data))},Ui=function(_,N){if(_ instanceof RegExp)return Xn(_,N);if(_ instanceof Function){for(var te=arguments.length,ve=new Array(te>2?te-2:0),De=2;De<te;De++)ve[De-2]=arguments[De];return!!_(N,...ve)}return!1},Oc=function(_,N,te){if(!X[N]&&br(N)&&Ui(C.tagNameCheck,N))return!1;if(xs&&!Gn[N]){const ve=ee(_),De=O(_);if(De&&ve){const Xe=De.length;for(let Ye=Xe-1;Ye>=0;--Ye){const Tn=_===te?m(De[Ye],!0):De[Ye];ve.insertBefore(Tn,A(_))}}}return R(_),!0},gr=function(_,N,te,ve){return _.length===0?N:N===te||N===ve?pt(N):N},js=function(_,N){return _===N||ee(_)!==null?!1:(Gt&&lt(_),!0)},_r=function(_,N){if(Vn(Ue.beforeSanitizeElements,_,null),js(_,N))return!0;if(at(_))return R(_),!0;const te=ge(z(_));if(L=gr(Ue.uponSanitizeElement,L,$,je),Vn(Ue.uponSanitizeElement,_,{tagName:te,allowedTags:L}),js(_,N))return!0;if(Mc(_,te))return R(_),!0;if(X[te]||!(B.tagCheck instanceof Function&&B.tagCheck(te))&&!L[te]){const ve=Oc(_,te,N);return ve===!1&&(Vn(Ue.afterSanitizeElements,_,null),js(_,N))?!0:ve}if(E(_)===ct.element&&!Be(_)||(te==="noscript"||te==="noembed"||te==="noframes")&&Xn(Pv,_.innerHTML))return R(_),!0;if(Te&&_.nodeType===ct.text){const ve=Us(_.textContent);_.textContent!==ve&&(ai(n.removed,{element:_.cloneNode()}),_.textContent=ve)}return Vn(Ue.afterSanitizeElements,_,null),js(_,N)},yr=function(_,N,te){if(F[N]||Cn(N,_)||tn&&(N==="id"||N==="name")&&(te in t||te in Re))return!1;const ve=w[N]||B.attributeCheck instanceof Function&&B.attributeCheck(N,_);return le&&Xn(On,N)||ae&&Xn(Fn,N)?!0:ve?ds[N]||Xn(D,ui(te,U,""))||(N==="src"||N==="xlink:href"||N==="href")&&_!=="script"&&Oa(te,"data:")===0&&bt[_]||me&&!Xn(Y,ui(te,U,""))?!0:!te:br(_)&&Ui(C.tagNameCheck,_)&&Ui(C.attributeNameCheck,N,_)||N==="is"&&C.allowCustomizedBuiltInElements&&Ui(C.tagNameCheck,te)},Rc=Qe({},["annotation-xml","color-profile","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","missing-glyph"]),br=function(_){return!Rc[mi(_)]&&Xn(b,_)},Pc=function(_,N,te,ve){if(G&&typeof c=="object"&&typeof c.getAttributeType=="function"&&!te)switch(c.getAttributeType(_,N)){case"TrustedHTML":return Je(ve);case"TrustedScriptURL":return ke(ve)}return ve},Lc=function(_,N,te,ve){try{return te?_.setAttributeNS(te,N,ve):_.setAttribute(N,ve),at(_)?(R(_),!1):!0}catch{return Ve(N,_),!1}},wr=function(_,N){if(Vn(Ue.beforeSanitizeAttributes,_,null),js(_,N))return;const te=_.attributes;if(!te||at(_))return;w=gr(Ue.uponSanitizeAttribute,w,j,pn);const ve={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:w,forceKeepAttr:void 0};let De=te.length;const Xe=ge(_.nodeName);for(;De--;){const Ye=te[De],Tn=Ye.name,wt=Ye.namespaceURI,ut=Ye.value,Bs=ge(Tn),Ul=ut;let Zn=Tn==="value"?Ul:gv(Ul),kr=!1;if(ve.attrName=Bs,ve.attrValue=Zn,ve.keepAttr=!0,ve.forceKeepAttr=void 0,Vn(Ue.uponSanitizeAttribute,_,ve),Zn=ve.attrValue,yt&&(Bs==="id"||Bs==="name")&&Oa(Zn,$t)!==0&&(Ve(Tn,_,Ye),Zn=$t+Zn,kr=!0),ye&&Xn(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,Zn)){Ve(Tn,_,Ye);continue}if(Bs==="attributename"&&Ma(Zn,"href")){Ve(Tn,_,Ye);continue}if(!ve.forceKeepAttr){if(!ve.keepAttr){Ve(Tn,_,Ye);continue}if(!_e&&Xn(Lv,Zn)){Ve(Tn,_,Ye);continue}if(Te&&(Zn=Us(Zn)),!yr(Xe,Bs,Zn)){Ve(Tn,_,Ye);continue}Zn=Pc(Xe,Bs,wt,Zn),Zn!==Ul&&Lc(_,Tn,wt,Zn)&&kr&&Ia(n.removed)}}Vn(Ue.afterSanitizeAttributes,_,null),js(_,N)},ji=function(_){let N=null;const te=ot(_);for(Vn(Ue.beforeSanitizeShadowDOM,_,null);N=te.nextNode();)if(Vn(Ue.uponSanitizeShadowNode,N,null),_r(N,_),wr(N,_),Nt(N.content)&&ji(N.content),E(N)===ct.element){const ve=P(N);Nt(ve)&&(zl(ve),ji(ve))}Vn(Ue.afterSanitizeShadowDOM,_,null)},zl=function(_){const N=[{node:_,shadow:null}];for(;N.length>0;){const te=N.pop();if(te.shadow){ji(te.shadow);continue}const ve=te.node,De=E(ve)===ct.element,Xe=O(ve);if(Xe)for(let Ye=Xe.length-1;Ye>=0;--Ye)N.push({node:Xe[Ye],shadow:null});if(De){const Ye=Z?Z(ve):null;if(typeof Ye=="string"&&ge(Ye)==="template"){const Tn=ve.content;Nt(Tn)&&N.push({node:Tn,shadow:null})}}if(De){const Ye=P(ve);Nt(Ye)&&N.push({node:null,shadow:Ye},{node:Ye,shadow:null})}}};return n.sanitize=function(ce){let _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},N=null,te=null,ve=null,De=null;if(Qn=!ce,Qn&&(ce="<!-->"),typeof ce!="string"&&!Ct(ce)&&(ce=kv(ce),typeof ce!="string"))throw fs("dirty is not a string, aborting");if(!n.isSupported)return ce;Ce?(L=je,w=pn):k(_),(Ue.uponSanitizeElement.length>0||Ue.uponSanitizeAttribute.length>0)&&(L=pt(L)),Ue.uponSanitizeAttribute.length>0&&(w=pt(w)),n.removed=[];const Xe=Gt&&typeof ce!="string"&&Ct(ce);if(Xe){Jn(ce);const wt=z(ce);if(typeof wt=="string"){const ut=ge(wt);if(!L[ut]||X[ut])throw de(ce),fs("root node is forbidden and cannot be sanitized in-place")}if(at(ce))throw de(ce),fs("root node is clobbered and cannot be sanitized in-place");try{zl(ce)}catch(ut){throw de(ce),ut}}else if(Ct(ce))N=yn("<!---->"),te=N.ownerDocument.importNode(ce,!0),te.nodeType===ct.element&&te.nodeName==="BODY"||te.nodeName==="HTML"?N=te:N.appendChild(te),zl(N);else{if(!zn&&!Te&&!Ne&&ce.indexOf("<")===-1)return G&&Sn?Je(ce):ce;if(N=yn(ce),!N)return zn?null:Sn?W:""}N&&xn&&R(N.firstChild);const Ye=Xe?ce:N;try{const wt=ot(Ye);for(;ve=wt.nextNode();)_r(ve,Ye),wr(ve,Ye),Nt(ve.content)&&ji(ve.content)}catch(wt){throw Xe&&(de(ce),Ds(n.removed,ut=>{ut.element&&lt(ut.element)})),wt}if(Xe){let wt=!1;if(Ds(n.removed,ut=>{ut.element&&(ut.element===ce&&(wt=!0),lt(ut.element))}),wt)throw fs("a node selected for removal could not be safely returned; refusing to sanitize in place");return Te&&Bn(ce),ce}if(zn){if(Te&&Bn(N),_t)for(De=_n.call(N.ownerDocument);N.firstChild;)De.appendChild(N.firstChild);else De=N;return(w.shadowroot||w.shadowrootmode)&&(De=En.call(s,De,!0)),De}let Tn=Ne?N.outerHTML:N.innerHTML;return Ne&&L["!doctype"]&&N.ownerDocument&&N.ownerDocument.doctype&&N.ownerDocument.doctype.name&&Xn(Ov,N.ownerDocument.doctype.name)&&(Tn="<!DOCTYPE "+N.ownerDocument.doctype.name+`>
`+Tn),Te&&(Tn=Us(Tn)),G&&Sn?Je(Tn):Tn},n.setConfig=function(){let ce=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};k(ce),Ce=!0,je=L,pn=w},n.clearConfig=function(){Oe=null,Ce=!1,je=null,pn=null,G=q,W=""},n.isValidAttribute=function(ce,_,N){Oe||k({});const te=ge(ce),ve=ge(_);return yr(te,ve,N)},n.addHook=function(ce,_){typeof _=="function"&&rt(Ue,ce)&&ai(Ue[ce],_)},n.removeHook=function(ce,_){if(rt(Ue,ce)){if(_!==void 0){const N=hv(Ue[ce],_);return N===-1?void 0:mv(Ue[ce],N,1)[0]}return Ia(Ue[ce])}},n.removeHooks=function(ce){rt(Ue,ce)&&(Ue[ce]=[])},n.removeAllHooks=function(){Ue=Va()},n}var jv=Ac();const Bv={class:"answer-markdown"},Vv=["innerHTML"],Xv={key:1},Wv=["aria-label"],Hv={x:"4",y:"34"},qv={x:"4",y:"183"},Kv=["d"],Gv=["cx","cy"],Yv=["x"],Qv={__name:"AnswerMarkdown",props:{text:{type:String,default:""}},setup(e){const n=e,t=ue(()=>{const i=[];let o=0;const r=/```chart\s*\n([\s\S]*?)```/g;for(const a of n.text.matchAll(r)){i.push({html:s(n.text.slice(o,a.index))});try{const u=JSON.parse(a[1]);if(!Array.isArray(u.labels)||!Array.isArray(u.values)||u.labels.length!==u.values.length||u.values.length<2||u.values.length>100||!u.values.every(m=>typeof m=="number"&&Number.isFinite(m)))throw Error("invalid");const p=Math.min(0,...u.values),c=Math.max(...u.values),h=c-p||1;i.push({chart:{...u,low:p,high:c,path:u.values.map((m,S)=>(S?"L":"M")+(40+S/(u.values.length-1)*520)+","+(180-(m-p)/h*150)).join(" ")}})}catch{i.push({html:s(a[0])})}o=a.index+a[0].length}return i.push({html:s(n.text.slice(o))}),i});function s(i){return jv.sanitize(cn.parse(i,{breaks:!0,gfm:!0}),{FORBID_TAGS:["style","iframe","script"]})}return(i,o)=>(d(),v("div",Bv,[(d(!0),v(Q,null,oe(t.value,(r,a)=>(d(),v(Q,{key:a},[r.html?(d(),v("div",{key:0,innerHTML:r.html},null,8,Vv)):H("",!0),r.chart?(d(),v("figure",Xv,[l("figcaption",null,[Ae(f(r.chart.title||"数据趋势")+" ",1),l("small",null,f(r.chart.unit),1)]),(d(),v("svg",{viewBox:"0 0 600 220",role:"img","aria-label":r.chart.title||"数据趋势"},[o[0]||(o[0]=l("line",{x1:"40",x2:"560",y1:"180",y2:"180",stroke:"#dcccd0"},null,-1)),l("text",Hv,f(r.chart.high),1),l("text",qv,f(r.chart.low),1),l("path",{d:r.chart.path,fill:"none",stroke:"#941535","stroke-width":"3"},null,8,Kv),(d(!0),v(Q,null,oe(r.chart.values,(u,p)=>(d(),v("g",{key:p},[l("circle",{cx:40+p/(r.chart.values.length-1)*520,cy:180-(u-r.chart.low)/(r.chart.high-r.chart.low||1)*150,r:"4",fill:"#941535"},[l("title",null,f(r.chart.labels[p])+"："+f(u)+" "+f(r.chart.unit),1)],8,Gv),p===0||p===r.chart.values.length-1||r.chart.values.length<=8?(d(),v("text",{key:0,x:40+p/(r.chart.values.length-1)*520,y:"207","text-anchor":"middle"},f(r.chart.labels[p]),9,Yv)):H("",!0)]))),128))],8,Wv))])):H("",!0)],64))),128))]))}},Jv=Dn(Qv,[["__scopeId","data-v-ab77ef50"]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=e=>{for(const n in e)if(n.startsWith("aria-")||n==="role"||n==="title")return!0;return!1};/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xa=e=>e==="";/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ef=(...e)=>e.filter((n,t,s)=>!!n&&n.trim()!==""&&s.indexOf(n)===t).join(" ").trim();/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wa=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nf=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(n,t,s)=>s?s.toUpperCase():t.toLowerCase());/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tf=e=>{const n=nf(e);return n.charAt(0).toUpperCase()+n.slice(1)};/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var di={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sf=({name:e,iconNode:n,absoluteStrokeWidth:t,"absolute-stroke-width":s,strokeWidth:i,"stroke-width":o,size:r=di.width,color:a=di.stroke,...u},{slots:p})=>$o("svg",{...di,...u,width:r,height:r,stroke:a,"stroke-width":Xa(t)||Xa(s)||t===!0||s===!0?Number(i||o||di["stroke-width"])*24/Number(r):i||o||di["stroke-width"],class:ef("lucide",u.class,...e?[`lucide-${Wa(tf(e))}-icon`,`lucide-${Wa(e)}`]:["lucide-icon"]),...!p.default&&!Zv(u)&&{"aria-hidden":"true"}},[...n.map(c=>$o(...c)),...p.default?[p.default()]:[]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ks=(e,n)=>(t,{slots:s,attrs:i})=>$o(sf,{...i,...t,iconNode:n,name:e},s);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lf=ks("arrow-down",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const of=ks("arrow-up",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rf=ks("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const af=ks("list-plus",[["path",{d:"M16 5H3",key:"m91uny"}],["path",{d:"M11 12H3",key:"51ecnj"}],["path",{d:"M16 19H3",key:"zzsher"}],["path",{d:"M18 9v6",key:"1twb98"}],["path",{d:"M21 12h-6",key:"bt1uis"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uf=ks("refresh-cw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cf=ks("share-2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const df=ks("thumbs-up",[["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",key:"emmmcr"}],["path",{d:"M7 10v12",key:"1qc93n"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pf=ks("thumbs-down",[["path",{d:"M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z",key:"m61m77"}],["path",{d:"M17 14V2",key:"8ymqnk"}]]);function Ha(){return{routeLabel:"竞品分析",traceMode:"思考过程",text:`## 清华优优 × 清华杨奇函语文说：竞品差异与下一步

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

先评估脚本是否被采用、是否完成发布；取得同口径数据后，再比较播放、关注转化和直播互动。**公开事实、工作台资料与策略建议分别使用，不把示例数据当作真实经营成绩。**`,sources:[{number:1,title:"清华杨奇函语文说｜公开账号资料",locator:"联网资料 · 2026-10-10整理",uri:"https://dy3.feigua.cn/bloggeropen/D7223858805269E64860A1195A005D49",web:!0,text:"第三方账号页展示账号名称、抖音号41623642069、简介与商品橱窗。统计时间异常，本分析不采用实时经营数值。"},{number:2,title:"语文学习与阅读｜公开内容标题",locator:"抖音公开页面 · 标题线索",uri:"https://www.douyin.com/video/7613966038979366186",web:!0,text:"检索页面涉及杨奇函语文教学、写作和阅读。未取得完整逐字稿，不据此推断完整内容结构。"},{number:3,title:"语文认知反差｜公开内容标题",locator:"抖音公开页面 · 标题线索",uri:"https://www.douyin.com/video/7613965192908655881",web:!0,text:"标题使用认知反差作为语文学习入口；属于公开内容参考，非全量账号表现。"}],steps:[{name:"识别竞品与账号范围",status:"done",execution:"规则匹配",detail:"匹配清华优优与清华杨奇函语文说的对比任务。"},{name:"联网资料核验",status:"done",execution:"提前检索资料 · 2026-10-10",detail:"核对公开账号名称、抖音号和内容标题；相近名称账号不合并统计。"},{name:"分析定位与内容机会",status:"done",execution:"预先整理的分析结果",detail:"本轮返回已整理答案，未实时调用模型；区分公开资料、工作台定位与创作建议。"},{name:"输出选题与执行方案",status:"done",execution:"缓存产物与来源",detail:"提供四周计划草案，附可打开的公开来源；确认后才加入知识库或排期。"}],artifacts:[{type:"document",label:"加入知识库"},{type:"planning",label:"加入内容排期"}]}}const vf=JSON.parse(`[{"id":"course-c4e68cbb933ba31d","title":"数学课程ppt.pptx","subspace":"产品课程","subject":"数学","relative_path":"数学/数学课程ppt.pptx","space_name":"清华优优 AI Wiki","doc_type":"document","uri":"https://northstar-copilot.com/product-courses/c4e68cbb933ba31d/数学课程ppt.pptx","size":22656126,"local_content":"第 1 页\\n\\n课程内容介绍Introduction\\n【努力也是一种天赋】\\n高考还远没有到拼天赋的程度，只有足够努力，才能不给自己找借口\\n1.优优学姐个人介绍\\n💡\\n高考裸分689——{分数与分数背后的故事}\\n数学分数——{142}\\n3.数学如何开窍\\n学习的核心——「问题」\\n方法——{听课/做题}\\n2.初高中数学时间规划\\n初中——{学什么}\\n高中——{学什么}\\n初中学习重点\\n高中学习重点\\n\\n第 2 页\\n\\n课程内容介绍Introduction\\n【努力也是一种天赋】\\n高考还远没有到拼天赋的程度，只有足够努力，才能不给自己找借口\\n4.计算问题如何解决\\n💡\\n计算的核心——{算得慢/算错}\\n算得慢——{限时训练}\\n算错——{计算习惯}\\n5.数学的思维导图\\n思维导图——{网状}\\n思维导图——{表格}\\n针对性重难点——{模块分析/备考建议}\\n6. 提分重点\\n必拿分——{题目类型/如何应对}/争取——{题型/策略}\\n不同分数段提分策略——{<90/90~120/120+}\\n\\n第 3 页\\n\\n课程内容介绍Introduction\\n【努力也是一种天赋】\\n高考还远没有到拼天赋的程度，只有足够努力，才能不给自己找借口\\n7.如何刷题、如何训练基础题\\n💡\\n题型分类——{基础、中档、压轴}\\n如何刷基础题——{方法、策略、时间}\\n8.如何刷中档题、压轴题\\n中档题——{方法/策略}\\n压轴题——{怎么练/考试策略}\\n9.刷题计划表与备考策略\\n刷题计划——{不同年级/每日/每周/寒暑假}\\n平时测试/大考的心态与时间分配\\n10.错题本\\n手把手教你整理错题——{题型怎么做？}\\n按板块梳理——{怎么针对自己的问题总结/一句话易错点}\\n\\n第 4 页\\nChapter-1\\n \\n优优学姐个人介绍\\n\\n第 5 页\\n\\n【优优学姐个人介绍】——高考裸分689/数学142\\n数学的分数是「熬」来的，刷题+理解才能不断进步\\n高考数学142\\n💡\\n优优 清华学姐/清华本硕 /高考四川省前50\\n英语146 数学142 物理满分\\n\\n\\n\\n\\n① 数学要掌握什么\\n可以看出：（数学的问题性+解题思维）是我们学习的重点，需要注意数学掌握什么+考什么\\n想像优优学姐一样拥有好成绩——「抓住学习方法+备考方法」才能百战百胜\\n②数学怎么学\\n基本概念\\n公式推导\\n知识点联系\\n题型解法\\n计算能力\\n\\n+\\n\\n\\n带着问题学习\\n思维导图\\n刷题\\n①、②、③、④、⑤、⑥、⑦、⑧、⑨、⑩、⑪、⑫、⑬、⑭、⑮、⑯、⑰、⑱、⑲、⑳\\n优优 清华学姐高考成绩查询页面\\n希望你也能收到这样的喜讯！\\n\\n第 6 页\\nChapter-2\\n \\n初高中数学学习规划\\n\\n第 7 页\\n\\n代数+几何的重点：{代数：方程+函数——带参数的思维}\\n{几何：定理的推导——平行、相交、全等、相似等}\\n\\n\\n从中考角度看初中数学？\\n💡\\n阶段性学习？2个重点\\n\\n① 初一——直线、方程\\n平行线、相交线\\n方程解法\\n\\n②初二——二+三四+一\\n二次根式\\n三角形\\n四边形\\n一次函数\\n\\n②初三——二+总\\n二次函数\\n总复习\\n\\n第 8 页\\n\\n可以看到，每一个新课阶段，我们的重点是不同的\\n高一：注重函数的学习\\n高二：数形结合的思维、复习函数\\n高三：策略与针对性提分\\n从高考角度看高中数学？\\n💡\\n分阶段？4个新课阶段\\n\\n① 高一上\\n集合、不等式、函数（指对幂、三角函数）\\n\\n① 高一下\\n平面向量、复数、立体几何、统计概率\\n\\n① 高二上\\n空间向量、圆锥曲线、数列\\n\\n① 高二下\\n计数原理、随机变量分布、数据统计分析、导数\\n\\n第 9 页\\nChapter-3\\n \\n数学如何开窍\\n\\n第 10 页\\n\\n\\n【数学开窍】：核心、方法、高分\\nPart1. 核心：\\n「问题」带着问题去学习\\n「策略」目标：带着问题+吃透：教材+熟练：例题\\n*：\\n数学的学习要从「听课」转移到「做题」\\n解决问题的思维是学习数学的核心\\nPart1. 核心\\n\\n💡\\n💡\\n\\n第 11 页\\n\\n\\n【数学开窍】：核心、方法、高分\\nPart2. 方法：\\n\\n「预习」学什么：公式、定理、概念\\n「听课」不把今天的问题留到明天\\n「例题」公式、定理如何在题目中使用、解出问题\\n例如：学习「函数」\\n问题：函数的定义？用来表示什么?\\n听课：定义域、值域、周期性、单调性—表示「函数」的什么性质、如何解决问题？\\n例题：一个具体的函数-怎么求解值域、极值……\\nPart2. 方法\\n💡\\n💡\\n\\n第 12 页\\n\\n\\n【数学开窍】：核心、方法、高分\\nPart3. 高分：\\n「思维导图」\\n公式推导、知识联系\\n\\n「刷题」\\n基础题：中档题：压轴难题=3:5:2\\n*：\\n「思维导图」列表/网状图\\n\\n「刷题」重在“精”——一道题=一类题\\nPart3. 高分\\n\\n💡\\n💡\\n\\n第 13 页\\nChapter-4\\n \\n计算问题如何解决\\n\\n第 14 页\\n\\n计算问题：\\n注意「计算习惯+计算速度」同样重要\\n原则1:\\n计算习惯\\n计算习惯是「算得准」的基础！！！\\n注重草稿管理\\n平时计算：用专门「草稿纸/草稿本」\\n考试计算：把草稿纸折成「四象限」分区使用\\n*靠谁能够有时间检查时，迅速定位题目-草稿位置\\n*计算步骤/竖式计算不省略——有效杜绝看错、抄错、写错的疏漏\\n熟练之后加快速度\\n\\n*：\\n不要在试卷上打草稿！\\n不要分散凌乱打草稿！\\n\\n第 15 页\\n\\n计算问题：\\n注意「计算习惯+计算速度」同样重要\\n原则2:\\n计算速度\\n计算速度是「算得快」的保证！！！\\n注重限时训练\\n平时计算：尽量不反复检查，保证一道题目连续算到结果\\n考试计算：善用排除法、特殊值法等，加快计算速度\\n*平常做到限时训练，考试才能游刃有余\\n*考试会更紧张，对于自己的易错点平常要加强「刻意训练」\\n\\n\\n*：\\n平常要养成专注计算的习惯！\\n每一次平时计算都当成考试——限时！\\n\\n第 16 页\\nChapter-5\\n \\n数学的思维导图\\n\\n第 17 页\\n\\n思维导图：\\n💡\\n方法1.网状思维导图\\n适用于知识点分散、有逻辑联系\\n用好教材！！！\\n\\n\\n【强调！】\\n\\n先理解分立知识点「概念、定义、图像…」——再把握知识点的联系「形成知识网」，善用「箭头」在自己头脑中推导！！\\n数\\n形\\n\\n第 18 页\\n\\n思维导图：\\n💡\\n方法2.表格状思维导图\\n适用于知识点需要对比\\n归纳总结！！！\\n\\n例如：\\n学习三角函数时\\n将「图像」与「性质」对应\\n系统性列表总结\\n\\n\\n【强调！】\\n\\n先理解概念的「共性」，通过「归纳」找出\\n相似点、易混点——明确差异、共同记忆！\\n\\n第 19 页\\n\\n{针对性重难点——{模块分析/备考建议}\\n命题模块分析：\\n1.【函数与导数】\\n考察题型——【 「选填」-函数、「解答」-导数综合运用】\\n高频考点：\\n函数的基本性质、利用导数研究函数极值与最值、导数的几何意义\\n次高频考点：\\n初等函数、不等式恒成立及存在性、函数与导数单调性、用导数解决函数与方程\\n\\n#学姐建议——重点做思维导图内容：\\n抽象函数基本性质：\\n奇偶性、单调性、图像对称性\\n函数零点\\n利用导数研究函数最值\\n*重难题型：\\n构造函数证明不等式\\n导数的几何意义\\n导数研究不等式恒成立/根据不等式恒成立求参数\\n💡\\n原则:\\n选填-【定义域优先原则】【基本性质与结论】\\n解答-【求导公式要牢记，细心求导、分类讨论】\\n\\n*【赋值法】【数形结合】【特殊与一般】\\n\\n第 20 页\\n\\n{针对性重难点——{模块分析/备考建议}\\n命题模块分析：\\n2.【三角函数、解三角形与平面向量】\\n考察题型——【 「选填」-诱导公式、三角恒等变换、平面向量，「解答」-正余弦定理、三角形面积公式】\\n高频考点：\\n三角恒等变换公式、解三角形、平面向量\\n次高频考点：\\n三角函数的图象与性质\\n\\n#学姐建议——重点做思维导图内容：\\n三角函数基础、平面向量的几何与代数形式：\\n三角函数的图象与性质（单调性、奇偶行、对称性、周期性）\\n正余弦定理解三角形\\n平面向量的数量积、模\\n*重难题型：\\n三角恒等变换\\n根据三角函数的性质（单调性、零点个数）求参\\n💡\\n原则:\\n选填-【两角和与差的三角函数公式、平面向量公式】\\n解答-【正余弦定理、三角形面积公式要牢记！】\\n\\n*【常用角的代换与公式变形】【多方观察选择合适方法】【平面向量解决数量、位置关系的应用】\\n\\n第 21 页\\n\\n{针对性重难点——{模块分析/备考建议}\\n命题模块分析：\\n3.【数列】\\n考察题型——【 「选填」-数列基本项计算，「解答」-递推公式、证明、通项公式等】\\n高频考点：\\n等差数列、数列的递推与求和公式\\n次高频考点：\\n等比数列\\n\\n#学姐建议——重点做思维导图内容：\\n数列递推公式、前n项和公式及性质：\\n数列的性质在应用时的限制（公比q取值、项数n取值）\\n错位相减法、裂项相消法（项数n的范围和对称性）\\n基本量计算（首项、公差、公比）\\n*重难题型：\\n数列新定义\\n数列与不等式的结合\\n💡\\n原则:\\n选填-【规律性，记牢公式，注意限制】\\n解答-【新定义/不等式/函数结合】\\n\\n*【构造等差与等比】【注意总结快速解题法】【新定义信息+求解】\\n\\n第 22 页\\n\\n{针对性重难点——{模块分析/备考建议}\\n命题模块分析：\\n4.【立体几何】\\n考察题型——【 「选填」-表面积和体积，「解答」-判定位置关系、空间角、向量方法与几何方法】\\n高频考点：\\n空间几何体的结构特征+表面积与体积、空间中位置关系\\n次高频考点：\\n二面角、线面角\\n\\n#学姐建议——重点做思维导图内容：\\n简单集合体结构特征、向量法与几何法：\\n点、直线、平面的位置关系\\n线面平行与垂直的判定、空间角\\n基本量计算（首项、公差、公比）\\n*重难题型：\\n空间动态问题\\n二面角最值、外接球、翻折问题\\n💡\\n原则:\\n选填-【牢记定理与转化条件】\\n解答-【灵活选择向量/几何方法】\\n\\n*【线面关系判定】【轨迹问题】【最值与范围问题】\\n\\n第 23 页\\n\\n{针对性重难点——{模块分析/备考建议}\\n命题模块分析：\\n5.【解析几何】\\n考察题型——【 「选填」-直线与圆，「解答」-数形结合】\\n高频考点：\\n椭圆、双曲线、抛物线\\n次高频考点：\\n直线与圆\\n\\n#学姐建议——重点做思维导图内容：\\n数列递推公式、前n项和公式及性质：\\n直线与圆的位置关系\\n圆锥曲线的离心率\\n圆锥曲线中的定值、定点、最值、范围\\n*重难题型：\\n椭圆与定点问题\\n双曲线的渐近线\\n抛物线与直线/线段\\n💡\\n原则:\\n选填-【定义、标准方程、几何性质】\\n解答-【综合性、计算能力、二级结论】\\n\\n*【运算量大】【与向量、解三角形、不等式综合应用】\\n\\n第 24 页\\n\\n{针对性重难点——{模块分析/备考建议}\\n命题模块分析：\\n6.【概率与统计】\\n考察题型——【 「选填」-排列组合、二项式定理、样本、条件概率，「解答」-经验回归方程、独立性检验、期望与方差】\\n高频考点：\\n排列组合、二项式定理、离散型随机变量、相互独立时间的概率\\n次高频考点：\\n古典概型、独立性检验、正态分布\\n\\n#学姐建议——重点做思维导图内容：\\n基础概念-相互独立事件的概率、条件概率：\\n排列组合、二项式定理\\n样本的数字特征\\n条件概率、相互独立事件概率\\n随机变量的分布与期望\\n*重难题型：\\n与数列、几何的结合\\n组合与二项式定理的结合\\n💡\\n原则:\\n选填-【牢记基础概念，理解到位】\\n解答-【与：导数、数列、集合结合，交叉运用】\\n\\n*【掌握模块内容】【多板块灵活理解运用】\\n\\n第 25 页\\nChapter-6\\n \\n提分重点\\n\\n第 26 页\\n\\n数学如何提分？\\n1）必拿分——{题目类型/如何应对}\\n题目类型：「必须拿到手的分数」，以总题数为19道的高考数学为例\\n1-8单选 + 9-10多选 + 12-13填空 + 15-17大题\\n\\n*：会做的——一道都不要错！——{应对}平时就做限时训练\\n2）争取分——{题型/策略}\\n题目类型：「争取拿到手的分数」，以总题数为19道的高考数学为例\\n11多选题的一个选项 + 14填空（考察思维） + 最后两大题步骤分\\n\\n*：保证读题与思考时间！——{策略}不放过+尽量多写步骤\\n\\n\\n第 27 页\\n提分策略？\\n不同分数段提分策略——{ < 90 }\\n核心方法——【根据自己的分数段针对性刷题】\\n\\n关键：明确当下问题，进行「刻意训练」\\n\\n💡\\n【当下分数】低于 90 分\\n{这一分数段没有达到及格线}\\n\\n基础有问题、基本概念不清晰\\n（做题的“砖”尚未扎实，无法进行数学体系的搭建）\\n\\n｜｜牢固基础：\\n\\n将书上的知识点画出「思维导图」\\n只练基础题\\n\\n*：进行限时训练！——检验：直到前8道选择+前两道多选能够\\n【限时全对】，蒙住答案迅速反应思路\\n\\n\\n第 28 页\\n提分策略？\\n不同分数段提分策略——{ 90 ~ 120 }\\n核心方法——【根据自己的分数段针对性刷题】\\n\\n关键：明确当下问题，进行「刻意训练」\\n\\n💡【2024河南省普通高中毕业班高考适应性测试】大题.17\\n\\n【当下分数】 90 ～ 120 分\\n{这一分数段达到及格线，但题型不熟练/考试速度上不去}\\n\\n√基础有问题、基本概念不清晰\\n× 题型掌握不熟练，考试时间分配不当，成绩不稳定\\n（做题的“砖”积累足够，数学体系的搭建方法不明确）\\n\\n｜｜熟练题型：\\n将基础题进一步强化「限时」——缩短5-10分钟训练\\n将中档题、压轴题做「熟」——蒙住答案迅速反应\\n\\n*压轴题往往：中档题的「组合」，更加复杂、计算更大—拆解！\\n中档题型熟练之后，留更多时间给压轴题——往往事半功倍\\n\\n\\n\\n\\n\\n\\nStep6:验证-\\n其他取值范围排除\\nStep1:明确问题-\\n导数求函数最值\\nStep2:步骤-\\n求导数\\nStep3:步骤-\\n明确单调性\\nStep4:步骤-\\n明确最值\\nStep5:步骤-\\n新设函数，解出参数\\n\\n\\n第 29 页\\n提分策略？\\n不同分数段提分策略——{ 120+ }\\n核心方法——【根据自己的分数段针对性刷题】\\n\\n关键：明确当下问题，进行「刻意训练」\\n\\n💡【2024广州市普通高中毕业班综合测试】多选题.11\\n\\n\\n【当下分数】 120 分以上\\n{这一分数段基础+中档常规题型可以处理，但是压轴没思路}\\n\\n√题型熟练、考试速度尚可\\n× 题型未能找到最优解，压轴题吃力\\n（数学体系的搭建完成，解题策略需要提升）\\n\\n｜｜题型精进+找最优解：\\n将题型做「精」—— 从考试错题积累思路\\n\\n*：与老师沟通，针对性应对「最容易失分」的问题！\\n不满足于「做出来」——寻找多种解法、最优解\\nStep6:验证-\\n其他取值范围排除\\nStep1:明确问题-\\n导数求函数最值\\nStep2:步骤-\\n求导数\\nStep3:步骤-\\n明确单调性\\nStep4:步骤-\\n明确最值\\nStep5:步骤-\\n新设函数，解出参数\\n\\n\\n第 30 页\\n提分策略？\\n\\n方法1:求切线\\n思路：联立求解\\n方法2：将参数转为未知常数\\n思路：构造新函数\\n化为‘方程的解’\\n计算简单数形结合大大提升做题速度\\n计算量略大\\n1）积累思路！多观察、思考题目的变形\\n2）牢记二级结论，大大简化做题步骤\\n\\n\\n\\n\\n\\n第 31 页\\nChapter-7\\n \\n如何刷题与训练基础题\\n\\n第 32 页\\n题型难度分布？\\n以：19题的高考试卷为例\\n基础题占比最大\\n\\n中档题分值较大\\n\\n压轴题难度较大\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n第 33 页\\n哪些是基础题？\\n\\n\\n\\n\\n\\n\\n以：19题的高考试卷为例\\n基础题占比最大\\n\\n中档题分值较大\\n\\n压轴题难度较大\\n\\n\\n\\n\\n\\n\\n\\n\\n牢记一个比例！\\n3:5:2——【 「基础题」、「中档题」、「压轴题」 】比例\\n分数低于90，先「只」刷基础；分数90以上，仍然要重视基础题「速度+正确率」——基础题是搞定数学分数的基础！！！\\n\\n\\n第 34 页\\n哪些是基础题？\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n以：19题的高考试卷为例\\n单选1-7、\\n多选9-10，\\n填空12-13，\\n大题15-16\\n大题17-19（第一小问）\\n是基础题\\n\\n第 35 页\\n哪些是基础题？\\n以：19题的高考试卷为例\\n单选1-7、\\n多选9-10，\\n填空12-13，\\n大题15-16\\n大题17-19（第一小问）\\n是基础题\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n第 36 页\\n\\n哪些是基础题？基础题怎么刷？\\n以：19题的高考试卷为例\\n单选1-7、多选9-10，填空12-13，大题15-16、大题17-19（第一小问）是基础题\\n*学姐经验：刷题计划的核心是——“限时+高频+复盘+总结”\\n对于成绩暂时在90分以下的同学来说，只有不断地在基础题上夯实概念、熟悉方法、提高速度，才能在后期应对更综合或难度更高的题目\\n💡刷题训练：\\n1.方法： ①选择题与填空题的限时训练｜ ②大题（解答题）的限时训练\\n2.时间： ③每日、每周、每月刷题 ｜\\n3.表格：  ④一个学期的规划 ｜ ⑤寒暑假｜⑥刷题打卡表（示例模板）\\n①、②、③、④、⑤、⑥、⑦、⑧、⑨、⑩、⑪、⑫、⑬、⑭、⑮、⑯、⑰、⑱、⑲、⑳\\n\\n第 37 页\\n①选择题与填空题的限时训练\\n\\n💡\\n限时方法：\\n\\n以单选、填空题为例：单选题：平均每题1~1.5分钟左右。\\n填空题：平均每题2~3分钟左右。\\n\\n举例：如果一次选取5道单选题和2道填空题，总时长可控制在15~20分钟内。可以进行计时，一旦时间到就停止作答，\\n未完成的题先标记出来。\\n\\n如何定时训练\\n选题范围\\n\\n\\n先从基础题（如新高考卷中的1-7单选题、9-10多选题、12-13填空题）入手。\\n\\n*建议一次选取【5~10道】此类基础题，难度以自己稍感吃力但经过努力能解决的题目为佳。\\n\\n\\n第 38 页\\n①选择题与填空题的限时训练\\n如何定时训练\\n\\n💡\\n训练频率\\n\\n每日：\\n    建议每天进行一次小规模的选择-填空组合限时训练(5~10题)。\\n每周：\\n    可以安排一次集中训练（例如周末），选择15-20道题，限时40-50分钟完成，模拟考试环境。\\n\\n及时回顾：\\n训练结束后，先对照答案，找出【错题】、【不会的题】和【超时的题】\\n*先搞清楚“错在哪里”与“正确思路是什么”，再着重查漏补缺。\\n\\n错题本或错题卡：\\n将错误题目、解题思路、正确答案写在错题本上。\\n\\n二次做题：\\n复盘后【第二天】再重新做一遍这些错题，巩固记忆。\\n对于【同一类型题】反复出错，要深入分析是概念不熟还是解题方法不熟练，及时补强相关知识点。\\n\\n第 39 页\\n②大题（解答题）的限时训练\\n\\n💡\\n限时方法：\\n\\n对于一道基础解答题，建议先给自己10~15分钟的思考和书写时间。若是两道基础解答题，整体控制在30分钟内完成。同样建议使用计时，严格在时间到后收笔，做标记。\\n\\n\\n如何定时训练\\n选题范围\\n\\n\\n从基础题或中档题开始，先确保自己能写全过程、能掌握常规解题方法。以新高考卷中15-16题为例（若这两题属于较基础或中档题），再慢慢延伸到更高难度的题目。\\n\\n第 40 页\\n②大题（解答题）的限时训练\\n如何定时训练\\n\\n💡\\n训练频率\\n每日：\\n    可每天选取1道大题进行限时训练(10~15分钟)，先保量不求多。\\n每周：\\n    可在周末做一次集中强化，选择2-3道解答题，控制在40-60分钟内完成，模拟考试。\\n过程检查\\n*训练后立即回顾自己的解题过程：\\n是否看懂了题意？\\n是否使用了恰当的方法？\\n哪一步耗时最多？\\n关键步骤是否缺乏明确的思路？\\n\\n思路对比\\n*与标准答案或老师讲解的思路对比，看看自己漏了哪些关键步骤，或者有没有多余的步骤。\\n\\n记录与回看\\n错题本上要写明：该题考查的知识点、自己的思路、正确思路、典型解法或技巧。\\n定期(如每周或每月)翻看错题本，进行二次或三次巩固。\\n\\n第 41 页\\nChapter-8\\n \\n如何刷中档题\\n与压轴题\\n\\n第 42 页\\n哪些是中档题？\\n以：19题的高考试卷为例\\n单选8、\\n多选11一个选项，\\n填空12-13，\\n大题17是中档题\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n第 43 页\\n哪些是基础题？\\n\\n\\n\\n\\n\\n\\n以：19题的高考试卷为例\\n单选8、\\n多选11一个选项，\\n填空12-13，\\n大题17是中档题\\n\\n第 44 页\\n\\n哪些是中档题？中档题怎么刷？\\n以：19题的高考试卷为例\\n单选8、多选11一个选项，填空12-13，大题17是中档题\\n*学姐经验：刷题计划的核心是——“限时+思路拆解”\\n对于成绩当前90~120分段最主要的提分点在于稳定基础分，同时提高中档题的正确率。保持解题速度，遇到中档题要多反思方法是否最优，灵活应用各类知识点。\\n💡刷题训练：\\n1.方法： ①选择题与填空题的限时训练｜ ②大题（解答题）的限时训练\\n2.时间： ③每日、每周、每月刷题 ｜\\n3.表格：  ④一个学期的规划 ｜ ⑤寒暑假｜⑥刷题打卡表（示例模板）\\n①、②、③、④、⑤、⑥、⑦、⑧、⑨、⑩、⑪、⑫、⑬、⑭、⑮、⑯、⑰、⑱、⑲、⑳\\n\\n第 45 页\\n①选择题与填空题的限时训练\\n\\n💡\\n限时方法：\\n\\n对于基础题，平均1分钟/单选题、2分钟/填空题。\\n对于中档题（例如单选8、多选11部分），可适当增加到3.5~5分钟/题，但不宜过长，以保持一定压力和速度感。\\n\\n举例：一次训练：8道单选（含1道中档题）+ 2道多选（含1道中档题）+ 12道填空，共耗时20～25分钟。\\n如何定时训练\\n选题范围\\n\\n\\n基础题：单选1～7，多选9～10，填空12～13。\\n中档题：单选第8题，多选第11的一个选项。\\n\\n一次训练可以组合“基础题+中档题”一起做，让自己在熟悉的环境下不断适应稍高难度的题。\\n\\n第 46 页\\n①选择题与填空题的限时训练\\n如何定时训练\\n\\n💡\\n训练频率\\n\\n每日：进行一次选择-填空的限时训练(约10~12题)。\\n每周：安排1~2次大规模的限时训练(15~20题，耗时40~50分钟)，模拟考试氛围。\\n及时回顾：\\n训练后立即核对答案，区分：哪些是“熟悉但粗心”导致的错误？哪些是“概念或方法不熟”导致的错误？\\n尤其关注中档题的错因，是否是解题思路不清晰、运算不熟练或知识点不牢固。\\n\\n错题本：\\n对于中档题，除了记录正确解法外，也要多角度思考：是否有其他简洁的方法？能否用坐标法、几何法、函数法等替代思路？\\n\\n二次做题：\\n一周后或数天后再重新做错题，检验是否真正掌握。若同一类型的题多次出错，务必进行专题复习（如函数、数列、三角、几何等）\\n\\n第 47 页\\n②大题（解答题）的限时训练\\n\\n💡\\n限时方法：\\n\\n基础解答题：每题控制在10分钟以内。中档解答题：每题可适当放宽到12~15分钟，但仍要计时。\\n\\n示例：一次训练做2道大题(1道基础+1道中档)，总用时25~30分钟。\\n\\n如何定时训练\\n选题范围\\n\\n\\n基础解答题：如卷子15-16题(若相对容易)，可继续保持熟练。\\n中档解答题：如17题，18-19题的第一问。先从17题、18题的前半部分入手，保证思路清晰；再慢慢触及后半部分或更综合的问法。\\n\\n第 48 页\\n②大题（解答题）的限时训练\\n如何定时训练\\n\\n💡\\n训练频率\\n每日：\\n    1道大题限时训练(含中档题或基础题混合)。\\n每周：\\n    集中做2~3道大题(1~2道中档+1道基础)，模拟考试节奏，耗时40~50分钟。\\n过程检查\\n*检查思路：读题是否准确，列式是否完整，关键步骤是否清晰。\\n*检查方法：对于中档题，常见的解题思路包括：方程法、几何法、函数法、向量法、数列递推等，要看自己是否熟练调用。\\n\\n思路对比\\n看标准答案或老师的讲解，比较自己的思路是否更繁琐、是否有更优解。\\n若有较大差异，要记录在错题本上，并尝试“再做一遍”或“换个方法做”。\\n\\n记录与回看\\n定期(如周末或月底)翻看错题，关注中档大题中反复出现的问题（如不等式求解、三角函数综合、圆锥曲线等），集中强化。\\n\\n第 49 页\\n哪些是压轴题？\\n以：19题的高考试卷为例\\n多选11（全部选项），\\n填空14，\\n大题18-19（除了第一问）是压轴题\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n第 50 页\\n哪些是压轴题？\\n\\n\\n\\n\\n\\n\\n\\n以：19题的高考试卷为例\\n多选11（全部选项），\\n填空14，\\n大题18-19（除了第一问）是压轴题\\n\\n第 51 页\\n\\n哪些是压轴题？压轴题怎么刷？\\n以：19题的高考试卷为例\\n多选11（全部选项），填空14，大题18-19（除了第一问）是压轴题\\n*学姐经验：刷题计划的核心是——“高效限时+多解思路”\\n分数在120分以上，说明基础题和中档题大部分能拿下。目标是冲击140分乃至更高分。\\n必须熟练掌握“考场时间分配”策略：先稳拿前面分数，再根据难度和自身情况合理安排解题顺序，力争多拿压轴题分数。\\n💡刷题训练：\\n1.方法： ①选择题与填空题的限时训练｜ ②大题（解答题）的限时训练\\n2.时间： ③每日、每周、每月刷题 \\n①、②、③、④、⑤、⑥、⑦、⑧、⑨、⑩、⑪、⑫、⑬、⑭、⑮、⑯、⑰、⑱、⑲、⑳\\n\\n第 52 页\\n①选择题与填空题的限时训练\\n\\n💡\\n限时方法：\\n\\n基础题：单选平均1分钟内完成，填空题2分钟左右。\\n多选第11（难选项）和填空14（难度较高）：适当放宽到2~3分钟/题，但仍要控制总时长。\\n\\n示例：一次训练可选10道题（含基础8道+2道难度较高的多选/填空），耗时20~25分钟。\\n如何定时训练\\n选题范围\\n\\n基础+中档：单选18，多选910，填空12~13等，确保不失分或少失分。\\n\\n压轴题涉及的多选：多选第11题可能存在较难的选项，要把它当成“中高难度”来做，进行针对性训练。\\n\\n压轴填空：如填空14。\\n\\n第 53 页\\n①选择题与填空题的限时训练\\n如何定时训练\\n\\n💡\\n训练频率\\n\\n每日：1次快速限时训练（约10～12题），包括1～2道难度较高的多选或填空14。\\n每周：1～2次大规模限时训练(15～20题)，耗时40～50分钟，严格模拟考试节奏。\\n快速核对+精细分析\\n对于基础和中档题，错题要立即找出概念或运算失误；\\n对于难度较高的多选11、填空14等，要深入分析解题思路、可能的多种解法，以及在哪一步出现思路卡顿或运算困难。\\n\\n思维拓展\\n复盘时多问自己：“能否用其他方法？”“是否有更简洁的思路？”\\n特别是压轴多选题，可能存在不同的思维路径，要将这些方法记录在错题本或思维导图中，培养发散思维。\\n\\n错题回炉\\n针对难度较高的错题，要在1~2天后或一周后再次做一遍，确保理解彻底。\\n若是同一知识点反复出错，务必进行专题复习（如圆锥曲线综合、导数与函数综合、三角与向量综合等）。\\n\\n第 54 页\\n②大题（解答题）的限时训练\\n\\n💡\\n限时方法：\\n\\n基础/中档题：每题8~10分钟左右。\\n压轴题：每道题（特别是后半部分）预留15~20分钟，但要注意整体效率，不可陷入无休止的“卡壳”。\\n\\n示例：一次训练做2道大题（含1道压轴18或19），总用时30~35分钟。\\n如何定时训练\\n选题范围\\n\\n\\n基础/中档解答题：如15~17题，仍需保持稳定拿分。\\n\\n压轴题：大题18和19，其中前面问法可能是中档，后面问法往往是压轴(难度最高)。\\n\\n在日常训练时，务必将后续问法或变形题也纳入练习范畴。\\n\\n第 55 页\\n②大题（解答题）的限时训练\\n如何定时训练\\n\\n💡\\n训练频率\\n每日：\\n    1道大题（可以是中档或压轴），10~20分钟限时完成。\\n每周：\\n    2～3道大题强化(其中至少1道压轴)，耗时40～60分钟，模拟正式考场节奏。\\n深度拆解\\n对于压轴题18-19，先把整道题分成若干小模块：\\n分析题意、列出条件；\\n可能使用的数学工具（函数、几何、向量、导数等）；\\n关键转折或技巧（如定义新函数、巧用几何变换、引入参数等）。\\n逐步排查每个模块是否掌握清楚。\\n\\n比较多种解法\\n压轴题往往有多解思路：如向量法vs.坐标法，函数法vs.不等式法。\\n复盘时可查看参考资料或讨论与老师、同学的不同解法，并记录在案。\\n\\n总结规律\\n高考压轴题常有一定“套路”或“命题热点”（如圆锥曲线与数列结合、三角函数的最值、导数与不等式结合等）。\\n做完后要总结：“本题考察了哪些综合知识点？涉及哪种常用技巧？”，并与历年真题或类似题进行对比，形成知识网络。\\n\\n第 56 页\\nChapter-9\\n \\n刷题计划表与备考策略\\n\\n第 57 页\\n每日、每周、每月刷题\\n学姐推荐：\\n按照周期刷题\\n及时总结+不断复盘！！！\\n\\n💡\\n每日计划：\\n早读/课间：快速回顾前一天的错题或难点。放学后/自习课：选择-填空限时训练：5-10题，15-20分钟。\\n立即对答案、标记错题，简要记下错因。\\n\\n晚自习/回家：大题限时训练：1道(10~15分钟)。\\n训练后快速对答案或参照解答思路，整理错题。\\n\\n睡前：用5分钟回想当天的错题或易错点，做好知识点巩固。\\n\\n\\n💡\\n每周计划：\\n周中（周三或周四）：安排一次稍大规模的选择填空训练：15-20题，限时40-50分钟。训练后深度复盘。\\n\\n周末：集中做2-3道大题，限时40-60分钟，模拟考试环境。\\n进行错题整理，对一周内反复出现的知识点进行查缺补漏。\\n可以做一份小测或阶段性测试卷（只做选择+填空或只做部分大题），检验一周学习效果。\\n💡\\n每月计划：\\n月初/月底：做一份完整的模拟卷(全卷)，限时120分钟，严格按照考试要求执行。\\n考后深度总结：对薄弱环节做专项补强。\\n\\n月度错题整理：将本月的错题再做一遍，并且将错题按知识点分类，形成专题整理。\\n针对薄弱章节(函数、三角、立体几何、解析几何等)，进行针对性的“回炉”训练。\\n\\n第 58 页\\n①一个学期的规划\\n学姐经验：\\n不同年级侧重点不同\\n\\n💡\\n高一阶段：\\n重点：打牢代数与函数基础(一次函数、二次函数)、基本几何知识(三角形)、不等式等。\\n\\n训练节奏：\\n每日5~10道选择-填空 + 1道基础大题。\\n每周小测巩固(选择+填空或少量大题)。\\n每月做一次完整测评，关注函数与代数的熟练度。\\n\\n策略：多花时间在概念理解、公式记忆、基础运算与规范书写上。\\n\\n\\n💡\\n高二阶段：\\n重点：函数综合(指数、对数、三角函数)、解析几何(直线与圆锥曲线)、立体几何(空间向量)、数列等。\\n\\n训练节奏：\\n每日5~10道选择-填空 + 1道中档大题(含综合知识点)。\\n每周专项训练：解析几何或立体几何等较难板块，进行集中练习。\\n每月一套综合模拟题，全面检测。\\n\\n策略：在高一打牢基础的前提下，开始练习多知识点综合题，并留意解题方法的灵活运用。\\n💡\\n高三阶段：\\n重点：真题/模拟题综合演练，提升解题速度和准确率。\\n\\n训练节奏：\\n每日限时训练：选择-填空(10~15题) + 2道大题，严格计时。\\n每周或每半周进行一次全真模拟(完整卷)。\\n不断复盘错题，按专题强化(函数、数列、几何、导数、概率统计等)。\\n\\n策略：加强考场节奏把控、错题回炉、强化综合解题思路。\\n\\n第 59 页\\n②寒暑假规划\\n寒假\\n\\n💡\\n不同年级\\n高一：\\n    预习70%，复习30%。\\n高二：\\n    当作“小高三”，联系真题。\\n高三：\\n    提分效率是关键——找到自己最薄弱处，专项训练\\n寒假\\n时间长度：一般2~3周左右的复习时间。\\n目标：查漏补缺 + 提前预习下学期关键知识点。\\n\\n计划：\\n每日：做1~2小时基础题(选择+填空) + 1小时大题专项训练。\\n每周：做一套模拟题或阶段测试卷。\\n重点复习：上一学期薄弱章节和错题集中区。\\n\\n\\n\\n第 60 页\\n②寒暑假规划\\n寒假\\n\\n💡\\n不同年级\\n高一：\\n    预习70%，复习30%。\\n高二：\\n    当作“小高三”，联系真题。\\n高三：\\n    提分效率是关键——找到自己最薄弱处，专项训练\\n暑假\\n时间长度：通常约4~6周可自主安排。\\n目标：系统复习已学知识 + 提前预习新学期重点内容(特别是高二升高三的暑假极为关键)。\\n\\n分阶段：\\n第一阶段(前2周)：全面梳理上一学年的知识点，每日3小时左右刷题，兼顾复盘。\\n第二阶段(中2周)：专项突破薄弱环节，每日2小时左右做专题训练(函数、几何等)。\\n第三阶段(后2周)：做综合模拟卷，每周2~3套，计时+总结。\\n\\n\\n第 61 页\\n刷题打卡表-每日\\n建议打印出来贴在书桌或用电子表格\\n\\n💡\\n使用方式：\\n\\n每日填写当天训练的题目数量、用时、正确率。\\n将错题对应到知识点，方便后续针对性复习。\\n记录当天复盘情况和心得，及时总结。\\n日期\\n选择/填空 (数量/用时)\\n正确率\\n大题 (数量/用时)\\n解题情况（耗时/正确率）\\n错题知识点\\n复盘完成(是/否)\\n备注/感想\\n3/10\\n8题/15分钟\\n6/8\\n1题/12分钟\\n1/1 正确\\n二次函数\\n是\\n需复习配方法\\n3/11\\n5题/10分钟\\n4/5\\n1题/10分钟\\n0/1 错\\n空间向量\\n否(待明日)\\n思路不熟\\n3/12\\n...\\n...\\n...\\n...\\n...\\n...\\n...\\n\\n第 62 页\\n刷题打卡表-每周\\n建议打印出来贴在书桌或用电子表格\\n\\n💡\\n使用方式：\\n\\n周日或下周一汇总本周所有刷题情况，统计正确率、主要错题分布。\\n根据周测/模拟成绩检验复习效果，明确下周的改进重点。\\n周次\\n选择填空合计 (数量/正确率)\\n大题合计 (数量/正确率)\\n周测/模拟成绩\\n主要错题知识点\\n下周改进方向\\n第1周\\n40题 / 70%\\n5题 / 60%\\n85/150\\n函数、数列\\n加强函数基础\\n第2周\\n45题 / 75%\\n6题 / 66%\\n90/150\\n三角函数\\n三角公式巩固\\n第3周\\n...\\n...\\n...\\n...\\n...\\n\\n\\n\\n第 63 页\\n\\n平时测试的心态与时间分配\\n心态准备\\n目标明确：平时测试的主要目的是检查阶段性学习成果、发现知识盲点、积累解题经验。\\n适度紧张：保持一定的紧张感有助于提升专注度，但不必过度焦虑。\\n培养考试习惯：平时测试要尽量模拟大考状态（限时、专注、答题顺序等），为大考做准备。\\n时间分配策略\\n\\n\\n\\n\\n#快速浏览：\\n    开考前1~2分钟，快速浏览试卷结构，了解题型和题量。\\n\\n\\n选择-填空：先易后难\\n    平均分配给每道选择题1～1.5分钟、填空题2～3分钟（视科目和难度略有调整）。\\n    先做容易、熟悉的题，保证基础分数，留下相对较难的题最后处理。\\n\\n💡\\n\\n第 64 页\\n\\n平时测试的心态与时间分配\\n心态准备\\n目标明确：平时测试的主要目的是检查阶段性学习成果、发现知识盲点、积累解题经验。\\n适度紧张：保持一定的紧张感有助于提升专注度，但不必过度焦虑。\\n培养考试习惯：平时测试要尽量模拟大考状态（限时、专注、答题顺序等），为大考做准备。\\n时间分配策略\\n\\n\\n\\n\\n大题部分\\n    对大题进行快速定位：看清题干、分值和难度，合理分配时间。\\n    每道大题根据难度可预设8~15分钟不等的时间上限，时间到后若仍未解出，也要先标记并暂时放下，确保整体进度。\\n\\n\\n\\n留出检查时间\\n    在平时测试中，最好预留3～5分钟进行检查，尤其关注计算题、填空题是否有漏写或简单算错。\\n💡\\n\\n第 65 页\\n\\n大考（如期末考、中考、高考）的心态与时间分配\\n考前准备\\n\\n调整作息：尽量在考前一周保持规律睡眠，避免熬夜刷题。\\n知识梳理：在最后阶段更注重查漏补缺和巩固主干知识，不要盲目海量刷新题。\\n心理暗示：适度给自己积极的心理暗示，如“我已经尽力准备”“只要稳住就能拿到理想成绩”。\\n物质准备：考试文具、准考证等提前检查；考前一天避免剧烈运动或情绪波动过大。\\n考中策略\\n\\n\\n\\n1.整体时间分配\\n\\n选择-填空：\\n快速扫题，先挑自己最有把握的题，稳拿分数。\\n对较难题目要合理分配时间，不可在单一题目上“死磕”太久。\\n\\n大题部分：\\n一般按分值高低及难度顺序分配时间。若总共有45道大题，可大致为每题1015分钟，具体视科目、分值而定。\\n遇到卡壳时，先记录已知条件、尝试列式或画图，若思路仍不清晰，就先跳过并在末尾时间回头再攻克。\\n\\n💡\\n\\n第 66 页\\n\\n大考（如期末考、中考、高考）的心态与时间分配\\n考前准备\\n\\n调整作息：尽量在考前一周保持规律睡眠，避免熬夜刷题。\\n知识梳理：在最后阶段更注重查漏补缺和巩固主干知识，不要盲目海量刷新题。\\n心理暗示：适度给自己积极的心理暗示，如“我已经尽力准备”“只要稳住就能拿到理想成绩”。\\n物质准备：考试文具、准考证等提前检查；考前一天避免剧烈运动或情绪波动过大。\\n考中策略\\n\\n2.先易后难、理性取舍\\n\\n先易后难：\\n先做能拿稳分数的题，确保基本分；\\n难题或不确定的题留到后面。\\n\\n遇到不会的题：\\n先看是否能从已知条件中推导部分结论，哪怕只能写出一部分过程，也可能拿到步骤分；\\n切忌“钻牛角尖”浪费过多时间。\\n\\n分段限时：\\n可以在试卷上标注各部分完成时间节点，如：\\n选择填空尽量在前30~40分钟完成；大题1~2道在后20分钟完成；\\n整场考试结束前3～5分钟检查漏写、抄错。\\n若某道题超过了预设时间上限，要果断先跳过或做标记，避免影响后续所有题目。\\n\\n💡\\n\\n第 67 页\\nChapter-10\\n \\n错题本\\n\\n第 68 页\\n数学错题本怎么做？\\n两个方面分别积累\\n\\n①按照【专题】——知识点\\n②按照自己的易错点——【一句话易错点】\\n\\n\\n\\n💡\\n【学姐数学错题本】详见附赠笔记\\n\\n{一共十个方面}\\n\\n*把错题✂️剪下来，黑笔写：解题步骤，红笔写：错因+知识点\\n\\n\\n\\n\\n｜｜订正一张卷子/一个练习：\\n\\n及时总结！绝不把今天的错题拖到明天！！！\\nPart 1\\nPart 2\\n\\n\\n\\n第 69 页\\nPart1: 数学错题题型——怎么做？\\n剪下题目/简略抄写\\n黑笔写题\\n红笔总结\\n\\n💡\\n写出错误原因\\n\\n\\n①画图分析\\n②详细写出解题过程\\n③对比多解法\\n\\n\\n每一步都要做到清晰！\\n做完复盘后：能够蒙住\\n解题过程反应解题思路\\n使用活页本\\n\\n\\n\\n\\n第 70 页\\nPart2: 按照易错点积累——怎么做？\\n\\ne.g.一句话易错点！\\n\\n💡\\n当在考试中遇到【自己容易错的地方】\\n按照题型整理完之后——「精」减成一句话！\\n\\n①“注意”***\\n\\n②“不要忘”***\\n\\n③“要看”***\\n\\n\\n考试易错点总结——重在精字！\\n{限制自己用一句话写出核心易错点，每一次考试之前不必翻阅完整错题，\\n直接反复看一句话易错点部分，将自己最容易错的点牢记}\\n使用活页本\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n第 71 页\\nChapter-11\\n \\n总结\\n\\n第 72 页\\n\\n【优优学姐个人介绍】——高考裸分689/数学142\\n数学的分数是「熬」来的，刷题+理解才能不断进步\\n高考数学142\\n💡\\n优优 清华学姐/清华本硕 /高考四川省前50\\n英语146 数学142 物理满分\\n\\n\\n可以看出：（数学的问题性+解题思维）是我们学习的重点，需要注意数学掌握什么+考什么\\n想像优优学姐一样拥有好成绩——\\n「抓住学习方法+备考方法」才能百战百胜\\n\\n①、②、③、④、⑤、⑥、⑦、⑧、⑨、⑩、⑪、⑫、⑬、⑭、⑮、⑯、⑰、⑱、⑲、⑳\\n优优 清华学姐高考成绩查询页面\\n希望你也能收到这样的喜讯！\\n「带着问题学习+学会刷题」才能不断进步！","chunk_count":72,"analyzed":false,"imported_file":true,"sections":[{"locator":"第 1 页","text":"\\n课程内容介绍Introduction\\n【努力也是一种天赋】\\n高考还远没有到拼天赋的程度，只有足够努力，才能不给自己找借口\\n1.优优学姐个人介绍\\n💡\\n高考裸分689——{分数与分数背后的故事}\\n数学分数——{142}\\n3.数学如何开窍\\n学习的核心——「问题」\\n方法——{听课/做题}\\n2.初高中数学时间规划\\n初中——{学什么}\\n高中——{学什么}\\n初中学习重点\\n高中学习重点"},{"locator":"第 2 页","text":"\\n课程内容介绍Introduction\\n【努力也是一种天赋】\\n高考还远没有到拼天赋的程度，只有足够努力，才能不给自己找借口\\n4.计算问题如何解决\\n💡\\n计算的核心——{算得慢/算错}\\n算得慢——{限时训练}\\n算错——{计算习惯}\\n5.数学的思维导图\\n思维导图——{网状}\\n思维导图——{表格}\\n针对性重难点——{模块分析/备考建议}\\n6. 提分重点\\n必拿分——{题目类型/如何应对}/争取——{题型/策略}\\n不同分数段提分策略——{<90/90~120/120+}"},{"locator":"第 3 页","text":"\\n课程内容介绍Introduction\\n【努力也是一种天赋】\\n高考还远没有到拼天赋的程度，只有足够努力，才能不给自己找借口\\n7.如何刷题、如何训练基础题\\n💡\\n题型分类——{基础、中档、压轴}\\n如何刷基础题——{方法、策略、时间}\\n8.如何刷中档题、压轴题\\n中档题——{方法/策略}\\n压轴题——{怎么练/考试策略}\\n9.刷题计划表与备考策略\\n刷题计划——{不同年级/每日/每周/寒暑假}\\n平时测试/大考的心态与时间分配\\n10.错题本\\n手把手教你整理错题——{题型怎么做？}\\n按板块梳理——{怎么针对自己的问题总结/一句话易错点}"},{"locator":"第 4 页","text":"Chapter-1\\n \\n优优学姐个人介绍"},{"locator":"第 5 页","text":"\\n【优优学姐个人介绍】——高考裸分689/数学142\\n数学的分数是「熬」来的，刷题+理解才能不断进步\\n高考数学142\\n💡\\n优优 清华学姐/清华本硕 /高考四川省前50\\n英语146 数学142 物理满分\\n\\n\\n\\n\\n① 数学要掌握什么\\n可以看出：（数学的问题性+解题思维）是我们学习的重点，需要注意数学掌握什么+考什么\\n想像优优学姐一样拥有好成绩——「抓住学习方法+备考方法」才能百战百胜\\n②数学怎么学\\n基本概念\\n公式推导\\n知识点联系\\n题型解法\\n计算能力\\n\\n+\\n\\n\\n带着问题学习\\n思维导图\\n刷题\\n①、②、③、④、⑤、⑥、⑦、⑧、⑨、⑩、⑪、⑫、⑬、⑭、⑮、⑯、⑰、⑱、⑲、⑳\\n优优 清华学姐高考成绩查询页面\\n希望你也能收到这样的喜讯！"},{"locator":"第 6 页","text":"Chapter-2\\n \\n初高中数学学习规划"},{"locator":"第 7 页","text":"\\n代数+几何的重点：{代数：方程+函数——带参数的思维}\\n{几何：定理的推导——平行、相交、全等、相似等}\\n\\n\\n从中考角度看初中数学？\\n💡\\n阶段性学习？2个重点\\n\\n① 初一——直线、方程\\n平行线、相交线\\n方程解法\\n\\n②初二——二+三四+一\\n二次根式\\n三角形\\n四边形\\n一次函数\\n\\n②初三——二+总\\n二次函数\\n总复习"},{"locator":"第 8 页","text":"\\n可以看到，每一个新课阶段，我们的重点是不同的\\n高一：注重函数的学习\\n高二：数形结合的思维、复习函数\\n高三：策略与针对性提分\\n从高考角度看高中数学？\\n💡\\n分阶段？4个新课阶段\\n\\n① 高一上\\n集合、不等式、函数（指对幂、三角函数）\\n\\n① 高一下\\n平面向量、复数、立体几何、统计概率\\n\\n① 高二上\\n空间向量、圆锥曲线、数列\\n\\n① 高二下\\n计数原理、随机变量分布、数据统计分析、导数"},{"locator":"第 9 页","text":"Chapter-3\\n \\n数学如何开窍"},{"locator":"第 10 页","text":"\\n\\n【数学开窍】：核心、方法、高分\\nPart1. 核心：\\n「问题」带着问题去学习\\n「策略」目标：带着问题+吃透：教材+熟练：例题\\n*：\\n数学的学习要从「听课」转移到「做题」\\n解决问题的思维是学习数学的核心\\nPart1. 核心\\n\\n💡\\n💡"},{"locator":"第 11 页","text":"\\n\\n【数学开窍】：核心、方法、高分\\nPart2. 方法：\\n\\n「预习」学什么：公式、定理、概念\\n「听课」不把今天的问题留到明天\\n「例题」公式、定理如何在题目中使用、解出问题\\n例如：学习「函数」\\n问题：函数的定义？用来表示什么?\\n听课：定义域、值域、周期性、单调性—表示「函数」的什么性质、如何解决问题？\\n例题：一个具体的函数-怎么求解值域、极值……\\nPart2. 方法\\n💡\\n💡"},{"locator":"第 12 页","text":"\\n\\n【数学开窍】：核心、方法、高分\\nPart3. 高分：\\n「思维导图」\\n公式推导、知识联系\\n\\n「刷题」\\n基础题：中档题：压轴难题=3:5:2\\n*：\\n「思维导图」列表/网状图\\n\\n「刷题」重在“精”——一道题=一类题\\nPart3. 高分\\n\\n💡\\n💡"},{"locator":"第 13 页","text":"Chapter-4\\n \\n计算问题如何解决"},{"locator":"第 14 页","text":"\\n计算问题：\\n注意「计算习惯+计算速度」同样重要\\n原则1:\\n计算习惯\\n计算习惯是「算得准」的基础！！！\\n注重草稿管理\\n平时计算：用专门「草稿纸/草稿本」\\n考试计算：把草稿纸折成「四象限」分区使用\\n*靠谁能够有时间检查时，迅速定位题目-草稿位置\\n*计算步骤/竖式计算不省略——有效杜绝看错、抄错、写错的疏漏\\n熟练之后加快速度\\n\\n*：\\n不要在试卷上打草稿！\\n不要分散凌乱打草稿！"},{"locator":"第 15 页","text":"\\n计算问题：\\n注意「计算习惯+计算速度」同样重要\\n原则2:\\n计算速度\\n计算速度是「算得快」的保证！！！\\n注重限时训练\\n平时计算：尽量不反复检查，保证一道题目连续算到结果\\n考试计算：善用排除法、特殊值法等，加快计算速度\\n*平常做到限时训练，考试才能游刃有余\\n*考试会更紧张，对于自己的易错点平常要加强「刻意训练」\\n\\n\\n*：\\n平常要养成专注计算的习惯！\\n每一次平时计算都当成考试——限时！"},{"locator":"第 16 页","text":"Chapter-5\\n \\n数学的思维导图"},{"locator":"第 17 页","text":"\\n思维导图：\\n💡\\n方法1.网状思维导图\\n适用于知识点分散、有逻辑联系\\n用好教材！！！\\n\\n\\n【强调！】\\n\\n先理解分立知识点「概念、定义、图像…」——再把握知识点的联系「形成知识网」，善用「箭头」在自己头脑中推导！！\\n数\\n形"},{"locator":"第 18 页","text":"\\n思维导图：\\n💡\\n方法2.表格状思维导图\\n适用于知识点需要对比\\n归纳总结！！！\\n\\n例如：\\n学习三角函数时\\n将「图像」与「性质」对应\\n系统性列表总结\\n\\n\\n【强调！】\\n\\n先理解概念的「共性」，通过「归纳」找出\\n相似点、易混点——明确差异、共同记忆！"},{"locator":"第 19 页","text":"\\n{针对性重难点——{模块分析/备考建议}\\n命题模块分析：\\n1.【函数与导数】\\n考察题型——【 「选填」-函数、「解答」-导数综合运用】\\n高频考点：\\n函数的基本性质、利用导数研究函数极值与最值、导数的几何意义\\n次高频考点：\\n初等函数、不等式恒成立及存在性、函数与导数单调性、用导数解决函数与方程\\n\\n#学姐建议——重点做思维导图内容：\\n抽象函数基本性质：\\n奇偶性、单调性、图像对称性\\n函数零点\\n利用导数研究函数最值\\n*重难题型：\\n构造函数证明不等式\\n导数的几何意义\\n导数研究不等式恒成立/根据不等式恒成立求参数\\n💡\\n原则:\\n选填-【定义域优先原则】【基本性质与结论】\\n解答-【求导公式要牢记，细心求导、分类讨论】\\n\\n*【赋值法】【数形结合】【特殊与一般】"},{"locator":"第 20 页","text":"\\n{针对性重难点——{模块分析/备考建议}\\n命题模块分析：\\n2.【三角函数、解三角形与平面向量】\\n考察题型——【 「选填」-诱导公式、三角恒等变换、平面向量，「解答」-正余弦定理、三角形面积公式】\\n高频考点：\\n三角恒等变换公式、解三角形、平面向量\\n次高频考点：\\n三角函数的图象与性质\\n\\n#学姐建议——重点做思维导图内容：\\n三角函数基础、平面向量的几何与代数形式：\\n三角函数的图象与性质（单调性、奇偶行、对称性、周期性）\\n正余弦定理解三角形\\n平面向量的数量积、模\\n*重难题型：\\n三角恒等变换\\n根据三角函数的性质（单调性、零点个数）求参\\n💡\\n原则:\\n选填-【两角和与差的三角函数公式、平面向量公式】\\n解答-【正余弦定理、三角形面积公式要牢记！】\\n\\n*【常用角的代换与公式变形】【多方观察选择合适方法】【平面向量解决数量、位置关系的应用】"},{"locator":"第 21 页","text":"\\n{针对性重难点——{模块分析/备考建议}\\n命题模块分析：\\n3.【数列】\\n考察题型——【 「选填」-数列基本项计算，「解答」-递推公式、证明、通项公式等】\\n高频考点：\\n等差数列、数列的递推与求和公式\\n次高频考点：\\n等比数列\\n\\n#学姐建议——重点做思维导图内容：\\n数列递推公式、前n项和公式及性质：\\n数列的性质在应用时的限制（公比q取值、项数n取值）\\n错位相减法、裂项相消法（项数n的范围和对称性）\\n基本量计算（首项、公差、公比）\\n*重难题型：\\n数列新定义\\n数列与不等式的结合\\n💡\\n原则:\\n选填-【规律性，记牢公式，注意限制】\\n解答-【新定义/不等式/函数结合】\\n\\n*【构造等差与等比】【注意总结快速解题法】【新定义信息+求解】"},{"locator":"第 22 页","text":"\\n{针对性重难点——{模块分析/备考建议}\\n命题模块分析：\\n4.【立体几何】\\n考察题型——【 「选填」-表面积和体积，「解答」-判定位置关系、空间角、向量方法与几何方法】\\n高频考点：\\n空间几何体的结构特征+表面积与体积、空间中位置关系\\n次高频考点：\\n二面角、线面角\\n\\n#学姐建议——重点做思维导图内容：\\n简单集合体结构特征、向量法与几何法：\\n点、直线、平面的位置关系\\n线面平行与垂直的判定、空间角\\n基本量计算（首项、公差、公比）\\n*重难题型：\\n空间动态问题\\n二面角最值、外接球、翻折问题\\n💡\\n原则:\\n选填-【牢记定理与转化条件】\\n解答-【灵活选择向量/几何方法】\\n\\n*【线面关系判定】【轨迹问题】【最值与范围问题】"},{"locator":"第 23 页","text":"\\n{针对性重难点——{模块分析/备考建议}\\n命题模块分析：\\n5.【解析几何】\\n考察题型——【 「选填」-直线与圆，「解答」-数形结合】\\n高频考点：\\n椭圆、双曲线、抛物线\\n次高频考点：\\n直线与圆\\n\\n#学姐建议——重点做思维导图内容：\\n数列递推公式、前n项和公式及性质：\\n直线与圆的位置关系\\n圆锥曲线的离心率\\n圆锥曲线中的定值、定点、最值、范围\\n*重难题型：\\n椭圆与定点问题\\n双曲线的渐近线\\n抛物线与直线/线段\\n💡\\n原则:\\n选填-【定义、标准方程、几何性质】\\n解答-【综合性、计算能力、二级结论】\\n\\n*【运算量大】【与向量、解三角形、不等式综合应用】"},{"locator":"第 24 页","text":"\\n{针对性重难点——{模块分析/备考建议}\\n命题模块分析：\\n6.【概率与统计】\\n考察题型——【 「选填」-排列组合、二项式定理、样本、条件概率，「解答」-经验回归方程、独立性检验、期望与方差】\\n高频考点：\\n排列组合、二项式定理、离散型随机变量、相互独立时间的概率\\n次高频考点：\\n古典概型、独立性检验、正态分布\\n\\n#学姐建议——重点做思维导图内容：\\n基础概念-相互独立事件的概率、条件概率：\\n排列组合、二项式定理\\n样本的数字特征\\n条件概率、相互独立事件概率\\n随机变量的分布与期望\\n*重难题型：\\n与数列、几何的结合\\n组合与二项式定理的结合\\n💡\\n原则:\\n选填-【牢记基础概念，理解到位】\\n解答-【与：导数、数列、集合结合，交叉运用】\\n\\n*【掌握模块内容】【多板块灵活理解运用】"},{"locator":"第 25 页","text":"Chapter-6\\n \\n提分重点"},{"locator":"第 26 页","text":"\\n数学如何提分？\\n1）必拿分——{题目类型/如何应对}\\n题目类型：「必须拿到手的分数」，以总题数为19道的高考数学为例\\n1-8单选 + 9-10多选 + 12-13填空 + 15-17大题\\n\\n*：会做的——一道都不要错！——{应对}平时就做限时训练\\n2）争取分——{题型/策略}\\n题目类型：「争取拿到手的分数」，以总题数为19道的高考数学为例\\n11多选题的一个选项 + 14填空（考察思维） + 最后两大题步骤分\\n\\n*：保证读题与思考时间！——{策略}不放过+尽量多写步骤\\n"},{"locator":"第 27 页","text":"提分策略？\\n不同分数段提分策略——{ < 90 }\\n核心方法——【根据自己的分数段针对性刷题】\\n\\n关键：明确当下问题，进行「刻意训练」\\n\\n💡\\n【当下分数】低于 90 分\\n{这一分数段没有达到及格线}\\n\\n基础有问题、基本概念不清晰\\n（做题的“砖”尚未扎实，无法进行数学体系的搭建）\\n\\n｜｜牢固基础：\\n\\n将书上的知识点画出「思维导图」\\n只练基础题\\n\\n*：进行限时训练！——检验：直到前8道选择+前两道多选能够\\n【限时全对】，蒙住答案迅速反应思路\\n"},{"locator":"第 28 页","text":"提分策略？\\n不同分数段提分策略——{ 90 ~ 120 }\\n核心方法——【根据自己的分数段针对性刷题】\\n\\n关键：明确当下问题，进行「刻意训练」\\n\\n💡【2024河南省普通高中毕业班高考适应性测试】大题.17\\n\\n【当下分数】 90 ～ 120 分\\n{这一分数段达到及格线，但题型不熟练/考试速度上不去}\\n\\n√基础有问题、基本概念不清晰\\n× 题型掌握不熟练，考试时间分配不当，成绩不稳定\\n（做题的“砖”积累足够，数学体系的搭建方法不明确）\\n\\n｜｜熟练题型：\\n将基础题进一步强化「限时」——缩短5-10分钟训练\\n将中档题、压轴题做「熟」——蒙住答案迅速反应\\n\\n*压轴题往往：中档题的「组合」，更加复杂、计算更大—拆解！\\n中档题型熟练之后，留更多时间给压轴题——往往事半功倍\\n\\n\\n\\n\\n\\n\\nStep6:验证-\\n其他取值范围排除\\nStep1:明确问题-\\n导数求函数最值\\nStep2:步骤-\\n求导数\\nStep3:步骤-\\n明确单调性\\nStep4:步骤-\\n明确最值\\nStep5:步骤-\\n新设函数，解出参数\\n"},{"locator":"第 29 页","text":"提分策略？\\n不同分数段提分策略——{ 120+ }\\n核心方法——【根据自己的分数段针对性刷题】\\n\\n关键：明确当下问题，进行「刻意训练」\\n\\n💡【2024广州市普通高中毕业班综合测试】多选题.11\\n\\n\\n【当下分数】 120 分以上\\n{这一分数段基础+中档常规题型可以处理，但是压轴没思路}\\n\\n√题型熟练、考试速度尚可\\n× 题型未能找到最优解，压轴题吃力\\n（数学体系的搭建完成，解题策略需要提升）\\n\\n｜｜题型精进+找最优解：\\n将题型做「精」—— 从考试错题积累思路\\n\\n*：与老师沟通，针对性应对「最容易失分」的问题！\\n不满足于「做出来」——寻找多种解法、最优解\\nStep6:验证-\\n其他取值范围排除\\nStep1:明确问题-\\n导数求函数最值\\nStep2:步骤-\\n求导数\\nStep3:步骤-\\n明确单调性\\nStep4:步骤-\\n明确最值\\nStep5:步骤-\\n新设函数，解出参数\\n"},{"locator":"第 30 页","text":"提分策略？\\n\\n方法1:求切线\\n思路：联立求解\\n方法2：将参数转为未知常数\\n思路：构造新函数\\n化为‘方程的解’\\n计算简单数形结合大大提升做题速度\\n计算量略大\\n1）积累思路！多观察、思考题目的变形\\n2）牢记二级结论，大大简化做题步骤\\n\\n\\n\\n"},{"locator":"第 31 页","text":"Chapter-7\\n \\n如何刷题与训练基础题"},{"locator":"第 32 页","text":"题型难度分布？\\n以：19题的高考试卷为例\\n基础题占比最大\\n\\n中档题分值较大\\n\\n压轴题难度较大\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n"},{"locator":"第 33 页","text":"哪些是基础题？\\n\\n\\n\\n\\n\\n\\n以：19题的高考试卷为例\\n基础题占比最大\\n\\n中档题分值较大\\n\\n压轴题难度较大\\n\\n\\n\\n\\n\\n\\n\\n\\n牢记一个比例！\\n3:5:2——【 「基础题」、「中档题」、「压轴题」 】比例\\n分数低于90，先「只」刷基础；分数90以上，仍然要重视基础题「速度+正确率」——基础题是搞定数学分数的基础！！！\\n"},{"locator":"第 34 页","text":"哪些是基础题？\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n以：19题的高考试卷为例\\n单选1-7、\\n多选9-10，\\n填空12-13，\\n大题15-16\\n大题17-19（第一小问）\\n是基础题"},{"locator":"第 35 页","text":"哪些是基础题？\\n以：19题的高考试卷为例\\n单选1-7、\\n多选9-10，\\n填空12-13，\\n大题15-16\\n大题17-19（第一小问）\\n是基础题\\n\\n\\n\\n\\n\\n\\n\\n\\n"},{"locator":"第 36 页","text":"\\n哪些是基础题？基础题怎么刷？\\n以：19题的高考试卷为例\\n单选1-7、多选9-10，填空12-13，大题15-16、大题17-19（第一小问）是基础题\\n*学姐经验：刷题计划的核心是——“限时+高频+复盘+总结”\\n对于成绩暂时在90分以下的同学来说，只有不断地在基础题上夯实概念、熟悉方法、提高速度，才能在后期应对更综合或难度更高的题目\\n💡刷题训练：\\n1.方法： ①选择题与填空题的限时训练｜ ②大题（解答题）的限时训练\\n2.时间： ③每日、每周、每月刷题 ｜\\n3.表格：  ④一个学期的规划 ｜ ⑤寒暑假｜⑥刷题打卡表（示例模板）\\n①、②、③、④、⑤、⑥、⑦、⑧、⑨、⑩、⑪、⑫、⑬、⑭、⑮、⑯、⑰、⑱、⑲、⑳"},{"locator":"第 37 页","text":"①选择题与填空题的限时训练\\n\\n💡\\n限时方法：\\n\\n以单选、填空题为例：单选题：平均每题1~1.5分钟左右。\\n填空题：平均每题2~3分钟左右。\\n\\n举例：如果一次选取5道单选题和2道填空题，总时长可控制在15~20分钟内。可以进行计时，一旦时间到就停止作答，\\n未完成的题先标记出来。\\n\\n如何定时训练\\n选题范围\\n\\n\\n先从基础题（如新高考卷中的1-7单选题、9-10多选题、12-13填空题）入手。\\n\\n*建议一次选取【5~10道】此类基础题，难度以自己稍感吃力但经过努力能解决的题目为佳。\\n"},{"locator":"第 38 页","text":"①选择题与填空题的限时训练\\n如何定时训练\\n\\n💡\\n训练频率\\n\\n每日：\\n    建议每天进行一次小规模的选择-填空组合限时训练(5~10题)。\\n每周：\\n    可以安排一次集中训练（例如周末），选择15-20道题，限时40-50分钟完成，模拟考试环境。\\n\\n及时回顾：\\n训练结束后，先对照答案，找出【错题】、【不会的题】和【超时的题】\\n*先搞清楚“错在哪里”与“正确思路是什么”，再着重查漏补缺。\\n\\n错题本或错题卡：\\n将错误题目、解题思路、正确答案写在错题本上。\\n\\n二次做题：\\n复盘后【第二天】再重新做一遍这些错题，巩固记忆。\\n对于【同一类型题】反复出错，要深入分析是概念不熟还是解题方法不熟练，及时补强相关知识点。"},{"locator":"第 39 页","text":"②大题（解答题）的限时训练\\n\\n💡\\n限时方法：\\n\\n对于一道基础解答题，建议先给自己10~15分钟的思考和书写时间。若是两道基础解答题，整体控制在30分钟内完成。同样建议使用计时，严格在时间到后收笔，做标记。\\n\\n\\n如何定时训练\\n选题范围\\n\\n\\n从基础题或中档题开始，先确保自己能写全过程、能掌握常规解题方法。以新高考卷中15-16题为例（若这两题属于较基础或中档题），再慢慢延伸到更高难度的题目。"},{"locator":"第 40 页","text":"②大题（解答题）的限时训练\\n如何定时训练\\n\\n💡\\n训练频率\\n每日：\\n    可每天选取1道大题进行限时训练(10~15分钟)，先保量不求多。\\n每周：\\n    可在周末做一次集中强化，选择2-3道解答题，控制在40-60分钟内完成，模拟考试。\\n过程检查\\n*训练后立即回顾自己的解题过程：\\n是否看懂了题意？\\n是否使用了恰当的方法？\\n哪一步耗时最多？\\n关键步骤是否缺乏明确的思路？\\n\\n思路对比\\n*与标准答案或老师讲解的思路对比，看看自己漏了哪些关键步骤，或者有没有多余的步骤。\\n\\n记录与回看\\n错题本上要写明：该题考查的知识点、自己的思路、正确思路、典型解法或技巧。\\n定期(如每周或每月)翻看错题本，进行二次或三次巩固。"},{"locator":"第 41 页","text":"Chapter-8\\n \\n如何刷中档题\\n与压轴题"},{"locator":"第 42 页","text":"哪些是中档题？\\n以：19题的高考试卷为例\\n单选8、\\n多选11一个选项，\\n填空12-13，\\n大题17是中档题\\n\\n\\n\\n\\n\\n\\n\\n\\n"},{"locator":"第 43 页","text":"哪些是基础题？\\n\\n\\n\\n\\n\\n\\n以：19题的高考试卷为例\\n单选8、\\n多选11一个选项，\\n填空12-13，\\n大题17是中档题"},{"locator":"第 44 页","text":"\\n哪些是中档题？中档题怎么刷？\\n以：19题的高考试卷为例\\n单选8、多选11一个选项，填空12-13，大题17是中档题\\n*学姐经验：刷题计划的核心是——“限时+思路拆解”\\n对于成绩当前90~120分段最主要的提分点在于稳定基础分，同时提高中档题的正确率。保持解题速度，遇到中档题要多反思方法是否最优，灵活应用各类知识点。\\n💡刷题训练：\\n1.方法： ①选择题与填空题的限时训练｜ ②大题（解答题）的限时训练\\n2.时间： ③每日、每周、每月刷题 ｜\\n3.表格：  ④一个学期的规划 ｜ ⑤寒暑假｜⑥刷题打卡表（示例模板）\\n①、②、③、④、⑤、⑥、⑦、⑧、⑨、⑩、⑪、⑫、⑬、⑭、⑮、⑯、⑰、⑱、⑲、⑳"},{"locator":"第 45 页","text":"①选择题与填空题的限时训练\\n\\n💡\\n限时方法：\\n\\n对于基础题，平均1分钟/单选题、2分钟/填空题。\\n对于中档题（例如单选8、多选11部分），可适当增加到3.5~5分钟/题，但不宜过长，以保持一定压力和速度感。\\n\\n举例：一次训练：8道单选（含1道中档题）+ 2道多选（含1道中档题）+ 12道填空，共耗时20～25分钟。\\n如何定时训练\\n选题范围\\n\\n\\n基础题：单选1～7，多选9～10，填空12～13。\\n中档题：单选第8题，多选第11的一个选项。\\n\\n一次训练可以组合“基础题+中档题”一起做，让自己在熟悉的环境下不断适应稍高难度的题。"},{"locator":"第 46 页","text":"①选择题与填空题的限时训练\\n如何定时训练\\n\\n💡\\n训练频率\\n\\n每日：进行一次选择-填空的限时训练(约10~12题)。\\n每周：安排1~2次大规模的限时训练(15~20题，耗时40~50分钟)，模拟考试氛围。\\n及时回顾：\\n训练后立即核对答案，区分：哪些是“熟悉但粗心”导致的错误？哪些是“概念或方法不熟”导致的错误？\\n尤其关注中档题的错因，是否是解题思路不清晰、运算不熟练或知识点不牢固。\\n\\n错题本：\\n对于中档题，除了记录正确解法外，也要多角度思考：是否有其他简洁的方法？能否用坐标法、几何法、函数法等替代思路？\\n\\n二次做题：\\n一周后或数天后再重新做错题，检验是否真正掌握。若同一类型的题多次出错，务必进行专题复习（如函数、数列、三角、几何等）"},{"locator":"第 47 页","text":"②大题（解答题）的限时训练\\n\\n💡\\n限时方法：\\n\\n基础解答题：每题控制在10分钟以内。中档解答题：每题可适当放宽到12~15分钟，但仍要计时。\\n\\n示例：一次训练做2道大题(1道基础+1道中档)，总用时25~30分钟。\\n\\n如何定时训练\\n选题范围\\n\\n\\n基础解答题：如卷子15-16题(若相对容易)，可继续保持熟练。\\n中档解答题：如17题，18-19题的第一问。先从17题、18题的前半部分入手，保证思路清晰；再慢慢触及后半部分或更综合的问法。"},{"locator":"第 48 页","text":"②大题（解答题）的限时训练\\n如何定时训练\\n\\n💡\\n训练频率\\n每日：\\n    1道大题限时训练(含中档题或基础题混合)。\\n每周：\\n    集中做2~3道大题(1~2道中档+1道基础)，模拟考试节奏，耗时40~50分钟。\\n过程检查\\n*检查思路：读题是否准确，列式是否完整，关键步骤是否清晰。\\n*检查方法：对于中档题，常见的解题思路包括：方程法、几何法、函数法、向量法、数列递推等，要看自己是否熟练调用。\\n\\n思路对比\\n看标准答案或老师的讲解，比较自己的思路是否更繁琐、是否有更优解。\\n若有较大差异，要记录在错题本上，并尝试“再做一遍”或“换个方法做”。\\n\\n记录与回看\\n定期(如周末或月底)翻看错题，关注中档大题中反复出现的问题（如不等式求解、三角函数综合、圆锥曲线等），集中强化。"},{"locator":"第 49 页","text":"哪些是压轴题？\\n以：19题的高考试卷为例\\n多选11（全部选项），\\n填空14，\\n大题18-19（除了第一问）是压轴题\\n\\n\\n\\n\\n\\n\\n\\n\\n"},{"locator":"第 50 页","text":"哪些是压轴题？\\n\\n\\n\\n\\n\\n\\n\\n以：19题的高考试卷为例\\n多选11（全部选项），\\n填空14，\\n大题18-19（除了第一问）是压轴题"},{"locator":"第 51 页","text":"\\n哪些是压轴题？压轴题怎么刷？\\n以：19题的高考试卷为例\\n多选11（全部选项），填空14，大题18-19（除了第一问）是压轴题\\n*学姐经验：刷题计划的核心是——“高效限时+多解思路”\\n分数在120分以上，说明基础题和中档题大部分能拿下。目标是冲击140分乃至更高分。\\n必须熟练掌握“考场时间分配”策略：先稳拿前面分数，再根据难度和自身情况合理安排解题顺序，力争多拿压轴题分数。\\n💡刷题训练：\\n1.方法： ①选择题与填空题的限时训练｜ ②大题（解答题）的限时训练\\n2.时间： ③每日、每周、每月刷题 \\n①、②、③、④、⑤、⑥、⑦、⑧、⑨、⑩、⑪、⑫、⑬、⑭、⑮、⑯、⑰、⑱、⑲、⑳"},{"locator":"第 52 页","text":"①选择题与填空题的限时训练\\n\\n💡\\n限时方法：\\n\\n基础题：单选平均1分钟内完成，填空题2分钟左右。\\n多选第11（难选项）和填空14（难度较高）：适当放宽到2~3分钟/题，但仍要控制总时长。\\n\\n示例：一次训练可选10道题（含基础8道+2道难度较高的多选/填空），耗时20~25分钟。\\n如何定时训练\\n选题范围\\n\\n基础+中档：单选18，多选910，填空12~13等，确保不失分或少失分。\\n\\n压轴题涉及的多选：多选第11题可能存在较难的选项，要把它当成“中高难度”来做，进行针对性训练。\\n\\n压轴填空：如填空14。"},{"locator":"第 53 页","text":"①选择题与填空题的限时训练\\n如何定时训练\\n\\n💡\\n训练频率\\n\\n每日：1次快速限时训练（约10～12题），包括1～2道难度较高的多选或填空14。\\n每周：1～2次大规模限时训练(15～20题)，耗时40～50分钟，严格模拟考试节奏。\\n快速核对+精细分析\\n对于基础和中档题，错题要立即找出概念或运算失误；\\n对于难度较高的多选11、填空14等，要深入分析解题思路、可能的多种解法，以及在哪一步出现思路卡顿或运算困难。\\n\\n思维拓展\\n复盘时多问自己：“能否用其他方法？”“是否有更简洁的思路？”\\n特别是压轴多选题，可能存在不同的思维路径，要将这些方法记录在错题本或思维导图中，培养发散思维。\\n\\n错题回炉\\n针对难度较高的错题，要在1~2天后或一周后再次做一遍，确保理解彻底。\\n若是同一知识点反复出错，务必进行专题复习（如圆锥曲线综合、导数与函数综合、三角与向量综合等）。"},{"locator":"第 54 页","text":"②大题（解答题）的限时训练\\n\\n💡\\n限时方法：\\n\\n基础/中档题：每题8~10分钟左右。\\n压轴题：每道题（特别是后半部分）预留15~20分钟，但要注意整体效率，不可陷入无休止的“卡壳”。\\n\\n示例：一次训练做2道大题（含1道压轴18或19），总用时30~35分钟。\\n如何定时训练\\n选题范围\\n\\n\\n基础/中档解答题：如15~17题，仍需保持稳定拿分。\\n\\n压轴题：大题18和19，其中前面问法可能是中档，后面问法往往是压轴(难度最高)。\\n\\n在日常训练时，务必将后续问法或变形题也纳入练习范畴。"},{"locator":"第 55 页","text":"②大题（解答题）的限时训练\\n如何定时训练\\n\\n💡\\n训练频率\\n每日：\\n    1道大题（可以是中档或压轴），10~20分钟限时完成。\\n每周：\\n    2～3道大题强化(其中至少1道压轴)，耗时40～60分钟，模拟正式考场节奏。\\n深度拆解\\n对于压轴题18-19，先把整道题分成若干小模块：\\n分析题意、列出条件；\\n可能使用的数学工具（函数、几何、向量、导数等）；\\n关键转折或技巧（如定义新函数、巧用几何变换、引入参数等）。\\n逐步排查每个模块是否掌握清楚。\\n\\n比较多种解法\\n压轴题往往有多解思路：如向量法vs.坐标法，函数法vs.不等式法。\\n复盘时可查看参考资料或讨论与老师、同学的不同解法，并记录在案。\\n\\n总结规律\\n高考压轴题常有一定“套路”或“命题热点”（如圆锥曲线与数列结合、三角函数的最值、导数与不等式结合等）。\\n做完后要总结：“本题考察了哪些综合知识点？涉及哪种常用技巧？”，并与历年真题或类似题进行对比，形成知识网络。"},{"locator":"第 56 页","text":"Chapter-9\\n \\n刷题计划表与备考策略"},{"locator":"第 57 页","text":"每日、每周、每月刷题\\n学姐推荐：\\n按照周期刷题\\n及时总结+不断复盘！！！\\n\\n💡\\n每日计划：\\n早读/课间：快速回顾前一天的错题或难点。放学后/自习课：选择-填空限时训练：5-10题，15-20分钟。\\n立即对答案、标记错题，简要记下错因。\\n\\n晚自习/回家：大题限时训练：1道(10~15分钟)。\\n训练后快速对答案或参照解答思路，整理错题。\\n\\n睡前：用5分钟回想当天的错题或易错点，做好知识点巩固。\\n\\n\\n💡\\n每周计划：\\n周中（周三或周四）：安排一次稍大规模的选择填空训练：15-20题，限时40-50分钟。训练后深度复盘。\\n\\n周末：集中做2-3道大题，限时40-60分钟，模拟考试环境。\\n进行错题整理，对一周内反复出现的知识点进行查缺补漏。\\n可以做一份小测或阶段性测试卷（只做选择+填空或只做部分大题），检验一周学习效果。\\n💡\\n每月计划：\\n月初/月底：做一份完整的模拟卷(全卷)，限时120分钟，严格按照考试要求执行。\\n考后深度总结：对薄弱环节做专项补强。\\n\\n月度错题整理：将本月的错题再做一遍，并且将错题按知识点分类，形成专题整理。\\n针对薄弱章节(函数、三角、立体几何、解析几何等)，进行针对性的“回炉”训练。"},{"locator":"第 58 页","text":"①一个学期的规划\\n学姐经验：\\n不同年级侧重点不同\\n\\n💡\\n高一阶段：\\n重点：打牢代数与函数基础(一次函数、二次函数)、基本几何知识(三角形)、不等式等。\\n\\n训练节奏：\\n每日5~10道选择-填空 + 1道基础大题。\\n每周小测巩固(选择+填空或少量大题)。\\n每月做一次完整测评，关注函数与代数的熟练度。\\n\\n策略：多花时间在概念理解、公式记忆、基础运算与规范书写上。\\n\\n\\n💡\\n高二阶段：\\n重点：函数综合(指数、对数、三角函数)、解析几何(直线与圆锥曲线)、立体几何(空间向量)、数列等。\\n\\n训练节奏：\\n每日5~10道选择-填空 + 1道中档大题(含综合知识点)。\\n每周专项训练：解析几何或立体几何等较难板块，进行集中练习。\\n每月一套综合模拟题，全面检测。\\n\\n策略：在高一打牢基础的前提下，开始练习多知识点综合题，并留意解题方法的灵活运用。\\n💡\\n高三阶段：\\n重点：真题/模拟题综合演练，提升解题速度和准确率。\\n\\n训练节奏：\\n每日限时训练：选择-填空(10~15题) + 2道大题，严格计时。\\n每周或每半周进行一次全真模拟(完整卷)。\\n不断复盘错题，按专题强化(函数、数列、几何、导数、概率统计等)。\\n\\n策略：加强考场节奏把控、错题回炉、强化综合解题思路。"},{"locator":"第 59 页","text":"②寒暑假规划\\n寒假\\n\\n💡\\n不同年级\\n高一：\\n    预习70%，复习30%。\\n高二：\\n    当作“小高三”，联系真题。\\n高三：\\n    提分效率是关键——找到自己最薄弱处，专项训练\\n寒假\\n时间长度：一般2~3周左右的复习时间。\\n目标：查漏补缺 + 提前预习下学期关键知识点。\\n\\n计划：\\n每日：做1~2小时基础题(选择+填空) + 1小时大题专项训练。\\n每周：做一套模拟题或阶段测试卷。\\n重点复习：上一学期薄弱章节和错题集中区。\\n\\n"},{"locator":"第 60 页","text":"②寒暑假规划\\n寒假\\n\\n💡\\n不同年级\\n高一：\\n    预习70%，复习30%。\\n高二：\\n    当作“小高三”，联系真题。\\n高三：\\n    提分效率是关键——找到自己最薄弱处，专项训练\\n暑假\\n时间长度：通常约4~6周可自主安排。\\n目标：系统复习已学知识 + 提前预习新学期重点内容(特别是高二升高三的暑假极为关键)。\\n\\n分阶段：\\n第一阶段(前2周)：全面梳理上一学年的知识点，每日3小时左右刷题，兼顾复盘。\\n第二阶段(中2周)：专项突破薄弱环节，每日2小时左右做专题训练(函数、几何等)。\\n第三阶段(后2周)：做综合模拟卷，每周2~3套，计时+总结。\\n"},{"locator":"第 61 页","text":"刷题打卡表-每日\\n建议打印出来贴在书桌或用电子表格\\n\\n💡\\n使用方式：\\n\\n每日填写当天训练的题目数量、用时、正确率。\\n将错题对应到知识点，方便后续针对性复习。\\n记录当天复盘情况和心得，及时总结。\\n日期\\n选择/填空 (数量/用时)\\n正确率\\n大题 (数量/用时)\\n解题情况（耗时/正确率）\\n错题知识点\\n复盘完成(是/否)\\n备注/感想\\n3/10\\n8题/15分钟\\n6/8\\n1题/12分钟\\n1/1 正确\\n二次函数\\n是\\n需复习配方法\\n3/11\\n5题/10分钟\\n4/5\\n1题/10分钟\\n0/1 错\\n空间向量\\n否(待明日)\\n思路不熟\\n3/12\\n...\\n...\\n...\\n...\\n...\\n...\\n..."},{"locator":"第 62 页","text":"刷题打卡表-每周\\n建议打印出来贴在书桌或用电子表格\\n\\n💡\\n使用方式：\\n\\n周日或下周一汇总本周所有刷题情况，统计正确率、主要错题分布。\\n根据周测/模拟成绩检验复习效果，明确下周的改进重点。\\n周次\\n选择填空合计 (数量/正确率)\\n大题合计 (数量/正确率)\\n周测/模拟成绩\\n主要错题知识点\\n下周改进方向\\n第1周\\n40题 / 70%\\n5题 / 60%\\n85/150\\n函数、数列\\n加强函数基础\\n第2周\\n45题 / 75%\\n6题 / 66%\\n90/150\\n三角函数\\n三角公式巩固\\n第3周\\n...\\n...\\n...\\n...\\n...\\n\\n"},{"locator":"第 63 页","text":"\\n平时测试的心态与时间分配\\n心态准备\\n目标明确：平时测试的主要目的是检查阶段性学习成果、发现知识盲点、积累解题经验。\\n适度紧张：保持一定的紧张感有助于提升专注度，但不必过度焦虑。\\n培养考试习惯：平时测试要尽量模拟大考状态（限时、专注、答题顺序等），为大考做准备。\\n时间分配策略\\n\\n\\n\\n\\n#快速浏览：\\n    开考前1~2分钟，快速浏览试卷结构，了解题型和题量。\\n\\n\\n选择-填空：先易后难\\n    平均分配给每道选择题1～1.5分钟、填空题2～3分钟（视科目和难度略有调整）。\\n    先做容易、熟悉的题，保证基础分数，留下相对较难的题最后处理。\\n\\n💡"},{"locator":"第 64 页","text":"\\n平时测试的心态与时间分配\\n心态准备\\n目标明确：平时测试的主要目的是检查阶段性学习成果、发现知识盲点、积累解题经验。\\n适度紧张：保持一定的紧张感有助于提升专注度，但不必过度焦虑。\\n培养考试习惯：平时测试要尽量模拟大考状态（限时、专注、答题顺序等），为大考做准备。\\n时间分配策略\\n\\n\\n\\n\\n大题部分\\n    对大题进行快速定位：看清题干、分值和难度，合理分配时间。\\n    每道大题根据难度可预设8~15分钟不等的时间上限，时间到后若仍未解出，也要先标记并暂时放下，确保整体进度。\\n\\n\\n\\n留出检查时间\\n    在平时测试中，最好预留3～5分钟进行检查，尤其关注计算题、填空题是否有漏写或简单算错。\\n💡"},{"locator":"第 65 页","text":"\\n大考（如期末考、中考、高考）的心态与时间分配\\n考前准备\\n\\n调整作息：尽量在考前一周保持规律睡眠，避免熬夜刷题。\\n知识梳理：在最后阶段更注重查漏补缺和巩固主干知识，不要盲目海量刷新题。\\n心理暗示：适度给自己积极的心理暗示，如“我已经尽力准备”“只要稳住就能拿到理想成绩”。\\n物质准备：考试文具、准考证等提前检查；考前一天避免剧烈运动或情绪波动过大。\\n考中策略\\n\\n\\n\\n1.整体时间分配\\n\\n选择-填空：\\n快速扫题，先挑自己最有把握的题，稳拿分数。\\n对较难题目要合理分配时间，不可在单一题目上“死磕”太久。\\n\\n大题部分：\\n一般按分值高低及难度顺序分配时间。若总共有45道大题，可大致为每题1015分钟，具体视科目、分值而定。\\n遇到卡壳时，先记录已知条件、尝试列式或画图，若思路仍不清晰，就先跳过并在末尾时间回头再攻克。\\n\\n💡"},{"locator":"第 66 页","text":"\\n大考（如期末考、中考、高考）的心态与时间分配\\n考前准备\\n\\n调整作息：尽量在考前一周保持规律睡眠，避免熬夜刷题。\\n知识梳理：在最后阶段更注重查漏补缺和巩固主干知识，不要盲目海量刷新题。\\n心理暗示：适度给自己积极的心理暗示，如“我已经尽力准备”“只要稳住就能拿到理想成绩”。\\n物质准备：考试文具、准考证等提前检查；考前一天避免剧烈运动或情绪波动过大。\\n考中策略\\n\\n2.先易后难、理性取舍\\n\\n先易后难：\\n先做能拿稳分数的题，确保基本分；\\n难题或不确定的题留到后面。\\n\\n遇到不会的题：\\n先看是否能从已知条件中推导部分结论，哪怕只能写出一部分过程，也可能拿到步骤分；\\n切忌“钻牛角尖”浪费过多时间。\\n\\n分段限时：\\n可以在试卷上标注各部分完成时间节点，如：\\n选择填空尽量在前30~40分钟完成；大题1~2道在后20分钟完成；\\n整场考试结束前3～5分钟检查漏写、抄错。\\n若某道题超过了预设时间上限，要果断先跳过或做标记，避免影响后续所有题目。\\n\\n💡"},{"locator":"第 67 页","text":"Chapter-10\\n \\n错题本"},{"locator":"第 68 页","text":"数学错题本怎么做？\\n两个方面分别积累\\n\\n①按照【专题】——知识点\\n②按照自己的易错点——【一句话易错点】\\n\\n\\n\\n💡\\n【学姐数学错题本】详见附赠笔记\\n\\n{一共十个方面}\\n\\n*把错题✂️剪下来，黑笔写：解题步骤，红笔写：错因+知识点\\n\\n\\n\\n\\n｜｜订正一张卷子/一个练习：\\n\\n及时总结！绝不把今天的错题拖到明天！！！\\nPart 1\\nPart 2\\n\\n"},{"locator":"第 69 页","text":"Part1: 数学错题题型——怎么做？\\n剪下题目/简略抄写\\n黑笔写题\\n红笔总结\\n\\n💡\\n写出错误原因\\n\\n\\n①画图分析\\n②详细写出解题过程\\n③对比多解法\\n\\n\\n每一步都要做到清晰！\\n做完复盘后：能够蒙住\\n解题过程反应解题思路\\n使用活页本\\n\\n\\n"},{"locator":"第 70 页","text":"Part2: 按照易错点积累——怎么做？\\n\\ne.g.一句话易错点！\\n\\n💡\\n当在考试中遇到【自己容易错的地方】\\n按照题型整理完之后——「精」减成一句话！\\n\\n①“注意”***\\n\\n②“不要忘”***\\n\\n③“要看”***\\n\\n\\n考试易错点总结——重在精字！\\n{限制自己用一句话写出核心易错点，每一次考试之前不必翻阅完整错题，\\n直接反复看一句话易错点部分，将自己最容易错的点牢记}\\n使用活页本\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n"},{"locator":"第 71 页","text":"Chapter-11\\n \\n总结"},{"locator":"第 72 页","text":"\\n【优优学姐个人介绍】——高考裸分689/数学142\\n数学的分数是「熬」来的，刷题+理解才能不断进步\\n高考数学142\\n💡\\n优优 清华学姐/清华本硕 /高考四川省前50\\n英语146 数学142 物理满分\\n\\n\\n可以看出：（数学的问题性+解题思维）是我们学习的重点，需要注意数学掌握什么+考什么\\n想像优优学姐一样拥有好成绩——\\n「抓住学习方法+备考方法」才能百战百胜\\n\\n①、②、③、④、⑤、⑥、⑦、⑧、⑨、⑩、⑪、⑫、⑬、⑭、⑮、⑯、⑰、⑱、⑲、⑳\\n优优 清华学姐高考成绩查询页面\\n希望你也能收到这样的喜讯！\\n「带着问题学习+学会刷题」才能不断进步！"}],"parse_status":"completed"},{"id":"course-a280e71a227b70aa","title":"英语课程ppt.pptx","subspace":"产品课程","subject":"英语","relative_path":"英语/英语课程ppt.pptx","space_name":"清华优优 AI Wiki","doc_type":"document","uri":"https://northstar-copilot.com/product-courses/a280e71a227b70aa/英语课程ppt.pptx","size":32689750,"local_content":"第 1 页\\n\\n课程内容介绍Introduction\\n【努力也是一种天赋】\\n高考还远没有到拼天赋的程度，只有足够努力，才能不给自己找借口\\n1.优优学姐个人介绍\\n💡\\n高考裸分689——{分数与分数背后的故事}\\n英语分数——{146}\\n3.阅读\\n提高阅读速度——{小说/阅读做题}\\n3只笔——{学会学姐阅读英文文章的笔记方法}\\n2.背单词\\n方法——{谐音记忆/联想记忆/关联记忆/读音}\\n拼读背诵——{会拼就会背}\\n周期——{3+7+21}\\n提高英语背诵能力的方法——{1+1+1}\\n\\n第 2 页\\n\\n课程内容介绍Introduction\\n【努力也是一种天赋】\\n高考还远没有到拼天赋的程度，只有足够努力，才能不给自己找借口\\n4.完形填空\\n💡\\n填哪些——{挖坑类型}\\n怎么练——{方法/实战/总结}\\n例题\\n5.七选五\\n怎么选——{逻辑结构/关键词}\\n排除方法+选最优解\\n例题\\n6. 听力\\n方法——{学会精听+速记}\\n精听+速记——{用好音频与原文/速记方法学习}\\n\\n第 3 页\\n\\n课程内容介绍Introduction\\n【努力也是一种天赋】\\n高考还远没有到拼天赋的程度，只有足够努力，才能不给自己找借口\\n7.语法\\n💡\\n语法结构——{时态/学习语法方法/划分长难句}\\n一首歌学会英文时态——{Love story}\\n8.口语\\n如何提高英语口语——{跟读/美剧}\\n实战中提高口语能力——{英文歌/英语角}\\n9.作文\\n学会英语的万能展开大法——{总分总+万能展开}\\n针对续写——{思路/实践}\\n10.错题本\\n手把手教你整理错题——{题型怎么做？}\\n按板块梳理——{怎么针对自己的问题总结}\\n\\n第 4 页\\nChapter-1\\n \\n优优学姐个人介绍\\n\\n第 5 页\\n\\n【优优学姐个人介绍】——高考裸分689/英语146\\n英语的分数是「捡」来的，每一分都要重视\\n高考英语146\\n💡\\n优优 清华学姐/清华本硕 /高考四川省前50\\n英语146 数学142 物理满分\\n\\n\\n\\n\\n① 英语要掌握什么\\n可以看出：（英语的语言性+工具性）是我们学习的重点，需要注意英语学什么+考什么\\n想像优优学姐一样拥有好成绩——「抓住学习方法+备考方法」才能百战百胜\\n② 英语怎么学\\n注重词汇积累\\n强化听力训练\\n阅读理解提升\\n写作技能培养\\n语法知识掌握\\n\\n\\n+\\n\\n高效记忆法应用\\n提高口语表达\\n多元化学习资源\\n①、②、③、④、⑤、⑥、⑦、⑧、⑨、⑩、⑪、⑫、⑬、⑭、⑮、⑯、⑰、⑱、⑲、⑳\\n优优 清华学姐高考成绩查询页面\\n希望你也能收到这样的喜讯！\\n\\n第 6 页\\nChapter-2\\n \\n背单词\\n\\n第 7 页\\n\\n1+1+1的背诵方法：{人们对于自己表达的东西记忆最深}\\n「自己先背一遍」+「录音」\\n「睡前」听一遍录音\\n「第二天起床后」再背一遍\\n\\n\\n背什么？\\n💡\\n单词要背哪些？4个方法\\n\\n① 初中——中考考纲1600词\\n记忆方法：\\n按照「话题」速记\\n\\n②高中——高考考纲3500词\\n记忆方法：\\n按照「乱序」+「少量多次」重复记忆\\n\\n*每天20个，坚持一个月>一天50个，不坚持\\n\\n第 8 页\\n\\n可以看到；「谐音记忆」+「联想记忆」就是我们经常用的方法，是中文谐音+英文引申义的结合，很多单词在记忆时都可以采用这样的方法\\n\\n是一种非常高效形象的记忆方法\\n\\n背单词的方法\\n💡\\n单词要怎么背？4个方法\\n\\n① 谐音记忆\\nTedious 冗长的、啰嗦的、单调乏味的 [踢地而死]\\nEndow 捐赠、资助 [银到]\\nDisgruntle 使不满 [diss光头]\\n\\n②联想记忆 \\nHideous 丑恶的、可怕的 [hide+ous 躲藏+多-因为令人讨厌而躲藏]\\nCasualty 事故、急诊室、伤亡 [因为太casual随意-造成了（事故）-（伤亡）很多，送到了（急诊室）]\\n\\n第 9 页\\n\\n可以看到；「关联记忆」可以让我们从一个词扩充到相关的许多词，「读音记忆」可以让我们准确又快速记住，是读音+拼写的结合，可以说——会读就会背，而且不会拼错\\n\\n怎么快速拼读？\\n背单词的方法\\n💡\\n如果不好谐音/联想怎么办？ 千万不要死记硬背\\n\\n③关联记忆\\nPlodding 沉重的 [plod v.n. 辛勤工作/沉重步伐；沉重地走/辛勤地工作]\\n* +谐音记忆：Plod 辛勤工作、沉重地走 [破锣的]\\n\\n\\n④读音记忆 \\n按照读音分节背，会读就会背：Too th some/de li cate\\n\\n第 10 页\\n\\n快速拼读\\n遇到新单词不知道怎么读？\\n\\n在这一部分里，我们需要总结单词的相似/相同音节：\\n\\n记住：「会读就会背」，不用死记硬背音标——从自己的积累中去总结相同的发音\\nx…e就读x(字母的发音) ：Ride fade pipe delicate\\n{请你跟读}\\n\\n\\nck就读k： pack back clock\\n{请你跟读}\\n\\n\\ntion/sion就读[ʃ(e)n]：situation examination creation passion mission constitution\\n{请你跟读}\\n  \\n\\n第 11 页\\nChapter-3\\n \\n阅读\\n\\n第 12 页\\n\\n\\n【阅读分为两部分】：平时阅读+考试阅读\\nPart1. 平时阅读：\\n「特点」时间多但时间碎、阅读多但杂\\n\\n\\n「策略」重在“广”\\nPart2. 考试阅读：\\n「特点」时间少但时间集中、阅读目的——为了做题\\n\\n\\n「策略」重在“精”\\nPart1. 平时阅读\\nPart2. 考试阅读\\n\\n💡\\n💡\\n\\n第 13 页\\n1.平时阅读：\\n\\n读什么？\\n课内文章\\n英文原著小说\\n\\n课内怎么读？\\n课内文章：课后单词/背诵全文/跟读磁带\\ne.g. 学姐的亲身经历：初中时，每个单元课文1短对话+1长文章：全文背诵「理解所有生词表单词在文中的意思」+「被动式学习语法，因为背诵的课文中本身包含了很多语法结构、时态」+「跟读每篇课文7遍以上，做到语言流畅、和范文抑扬顿挫一致」\\n课内文章三个目的：生词/语法/口语——通过背诵形成肌肉记忆\\n\\n课外怎么读？\\n选一本「自己喜欢」的英文小说\\n每周读10-15页，「查单词」+「理解情节」\\n课外小说两个目的：养成查单词的好习惯/养成阅读习惯\\n\\n\\n第 14 页\\n1.平时阅读：\\n\\n学姐推荐的十本英文小说\\n\\nThe Great Gatsby – 《了不起的盖茨比》 (F. Scott Fitzgerald)\\nTo Kill a Mockingbird – 《杀死一只知更鸟》 (Harper Lee)\\nGone with the Wind – 《飘》 (Margaret Mitchell)\\nA Game of Thrones – 《冰与火之歌》 (George R.R. Martin)\\nThe Chronicles of Narnia – 《纳尼亚传奇》 (C.S. Lewis)\\n1984 – 《一九八四》 (George Orwell)\\nBrave New World – 《美丽新世界》 (Aldous Huxley)\\nThe Catcher in the Rye – 《麦田里的守望者》 (J.D. Salinger)\\nLord of the Flies – 《蝇王》 (William Golding)\\nFrankenstein – 《弗兰肯斯坦》 (Mary Shelley)\\n\\n这些原著小说都具有深刻的思想性和文学价值，适合初、高中生和小学生进行阅读和思考。\\n\\n\\n第 15 页\\n\\n2.考试阅读：\\n💡\\nStep1.通读全文，划分内容 [一划分]\\n拿到文章，把文章通读一遍，重在「精」\\n按照学姐的「一纵几点」的方法，划分文章为几部分\\n每个段落用{//}划出，在其后总结大意，并在原文「标出」相应中心句\\nStep2.定位原文 [二定位]\\n拿到题目，迅速定位原文位置\\n无非三种题目：词义猜测/段落理解/细节理解\\nStep3.找上下文+段落逻辑=解题\\n先回顾自己「//」后的段落总结\\n寻找上下句/上下段，判断逻辑+语义，选出准确选项\\n\\n【强调！】\\n\\n一定要牢记 「不要一味追求阅读速度」——先学会「精」读一篇，再逐渐增加速度\\n\\n第 16 页\\n\\n考试阅读示范：\\n范文：2024高考全国一卷\\n英语真题\\n1）划分\\n2）定位\\n3）解题\\n\\n💡\\n【如何划分】\\n\\n一篇文章往往可以划分为：\\n\\n「头」\\n「脖子」\\n「身体」\\n「尾」\\n\\n每个部分用//划分\\n在左边列出纵向结构\\n\\n\\n第 17 页\\n\\n考试阅读示范：\\n范文：2024高考全国一卷\\n英语真题\\n1）划分\\n2）定位\\n3）解题\\n\\n💡\\n【如何划分】\\n\\n一篇文章往往可以划分为：\\n\\n「头」\\n「脖子」\\n「身体」\\n「尾」\\n\\n每个部分用//划分\\n在文中//后写出段落主题，在文中用（）划出主题定位在哪里\\n\\n\\n\\n\\n\\n\\n\\n第 18 页\\n\\n考试阅读示范：\\n范文：2024高考英语全国一卷\\n真题\\n1）划分\\n2）定位\\n3）解题\\n\\n💡\\n【如何定位】\\n\\n这道题：词义猜测\\n定位到文中，寻找上下文，「print」材料更好用来学习-因为更容易看，对应D\\n\\n每个部分用//划分\\n//后的段落主题，\\n\\n在做题时会直接作为提示！！做题速度自然提升\\n\\n\\n\\n\\n\\n\\n\\n第 19 页\\n\\n考试阅读示范：\\n范文：2024高考全国一卷\\n英语真题\\n1）划分\\n2）定位\\n3）解题\\n\\n💡\\n【如何定位】\\n\\n这道题：段落理解\\n定位到文中，有这一内容的位置-shallowing hypothesis \\n找上下文，后文解释：less mental effort\\n对应A\\n\\n每个部分用//划分\\n//后的段落主题，与问的段落内容直接相关\\n\\n\\n\\n\\n\\n\\n\\n第 20 页\\n\\n考试阅读示范：\\n范文：2024高考全国一卷\\n英语真题\\n1）划分\\n2）定位\\n3）解题\\n\\n💡\\n【如何定位】\\n\\n这道题：细节理解\\n定位到文中「尾」提出新现象段，寻找上下文，这一细节「用新技术教学为什么」因为上文「feel more engaging」，对应A\\n\\n每个部分用//划分\\n//后的段落主题，\\n直接指示段落中现象、细节\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n第 21 页\\n\\n考试阅读示范：\\n范文：2024高考全国一卷\\n英语真题\\n1）划分\\n2）定位\\n3）解题\\n\\n💡\\n【如何定位】\\n\\n这道题：段落理解\\n定位到最后一段，直接看//后自己总结内容，多观点总结，对应C\\n\\n每个部分用//划分\\n//后的段落主题，\\n\\n在做题时会直接作为提示！！做题速度自然提升\\n\\n\\n\\n\\n\\n\\n\\n第 22 页\\n\\n考试阅读示范：\\n范文：2024高考全国一卷\\n英语真题\\n1）划分\\n2）定位\\n3）解题\\n\\n💡\\n【如何解题】\\n\\n1）细节理解\\n2）段落理解\\n3）词义猜测\\n\\n*无非就是三种题目\\n\\n直接用\\n「划分」+「定位」\\n所有题目都可以直接找到相应位置，节约时间\\n+\\n//后的总结帮助理解\\n\\n\\n\\n\\n\\n\\n\\n第 23 页\\n\\n考试阅读示范：\\n范文：2024高考全国一卷\\n英语真题\\n\\n做完+订正后干什么？\\n💡\\n【用好一篇阅读】\\n\\n1）查出生词\\n2）理解长难句\\n3）整理错题\\n\\n*精=用好每一篇文本！\\n\\n「积累生词」+\\n「分析长难句」\\n\\n直接帮助我们增加词汇量、积累语法\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n第 24 页\\nChapter-4\\n \\n完形填空\\n\\n第 25 页\\n\\n完形填空：\\n注意易错类型「排除+选最优解」\\n原则1-4:\\n先看一遍文章，划分+总结大意\\n用阅读方法：{纵向划分+//后总结大意}\\n选出适合选项，「瞻前顾后」\\n上文、下文「瞻前顾后」：{上下文语义、对象、搭配}\\n\\n学会「排除」\\n排除：对象/搭配/语义\\n大胆排除！\\n解决掉80%的题目\\n拿不准的选项，选最优解\\n#最容易失分的部分！往往有2个选项都比较适合，但是一定有一个最优！\\n秘诀：情感态度/搭配「最适合」的项\\n\\n\\n第 26 页\\n\\n考试完形填空示范：\\n范文：2024高考全国一卷\\n英语真题\\n1）通读\\n2）排除\\n3）选择最优解\\n\\n💡\\n【如何通读】\\n\\n通读文章，只读一遍：这一遍要用学姐在阅读中的「划分」方法直接套用\\n\\n{纵向：总分总结构\\n+\\n//后总结内容}\\n\\n\\n首段：主题「人+事」\\n后续：描述过程\\n\\n\\n第 27 页\\n\\n考试完形填空示范：\\n范文：2024高考全国一卷\\n英语真题\\n1）通读\\n2）排除\\n3）选择最优解\\n\\n💡\\n【开始做题】\\n\\n养成一个好习惯！\\n\\n\\n*确定了选项之后把单词「填入文中」\\n\\n\\n\\n再读一遍看是否通顺+与上下文是否匹配\\n\\n第 28 页\\n\\n考试完形填空示范：\\n范文：2024高考全国一卷\\n英语真题\\n1）通读\\n2）排除\\n3）选择最优解\\n\\n💡\\n【如何排除】\\n\\n这一步完成80%的题目！\\n\\n*不正确的选项：\\n\\n\\n搭配x\\n语义x\\n事实/对象x\\n\\n\\n\\n\\n\\n\\n第 29 页\\n\\n考试完形填空示范：\\n范文：2024高考全国一卷\\n英语真题\\n1）通读\\n2）排除\\n3）选择最优解\\n\\n💡\\n【如何解决纠结选项】\\n\\n20%让人纠结、最容易选错的题目！\\n\\n*牢记：选择最优解\\n\\n重点——即：\\n\\n\\n{情感态度}最优\\n+\\n{搭配}最优\\n\\n\\n【搭配最优】纠结「way 跑步的方式」还是「reason 跑步的原因」呢？\\n46.根据上下文，这句话在「段」尾进行总结与解释 + 后半「句」if一种设想的情况，reason「表达：解释原因」更加合适\\n\\n\\n第 30 页\\n\\n考试完形填空示范：\\n范文：2024高考全国一卷\\n英语真题\\n1）通读\\n2）排除\\n3）选择最优解\\n\\n💡\\n【如何解决纠结选项】\\n\\n20%让人纠结、最容易选错的题目！\\n\\n*牢记：选择最优解\\n\\n重点——即：\\n\\n\\n{情感态度}最优\\n+\\n{搭配}最优\\n\\n【情感态度最优】纠结「such events 这样的事情」还是「such challenges 这样的挑战」呢？\\n51. 这个词在「概括」“我”骑车的不顺利经历 ，events「表达：较为中性的态度」，challenges「表达：遇到挑战-不顺利-感到困难」——具有情感色彩、作者态度，所以更加合适\\n\\n\\n\\n第 31 页\\n\\n\\n完形填空：\\n总结如何快速+准确做题\\n原则1-4:\\n先看一遍文章，划分+总结大意\\n选出适合选项，「瞻前顾后」——填入选项\\n学会「排除」\\n拿不准的选项，选最优解\\n\\n\\n\\n上文、下文「瞻前顾后」：{上下文语义、对象、搭配}\\n\\n排除：对象/搭配/语义\\n大胆排除！\\n解决掉80%的题目\\n#最容易失分的部分！往往有2个选项都比较适合，但是一定有一个最优！\\n秘诀：情感态度/搭配「最适合」的项\\n\\n排除+最优解方法:\\n\\n第 32 页\\nChapter-5\\n \\n七选五\\n\\n第 33 页\\n\\n七选五：\\n💡\\nStep1.首段看主题\\n读首段，抓全文关键词「谁+什么事」\\n全文主题一定据此展开！！！\\nStep2.看文章，划分过程\\n按照「阅读」中的划分方法\\n//后概括每部分大意\\nStep3.联系选项与文章=解题\\n找填空位置：段首/段中/段尾\\n题目无非四种：\\n1）段落转换-对应段首/段尾；2）同义对应/ 3）对比转折/ 4）解释原因-对应段中\\n\\n【强调！】\\n\\n一定要先阅读全文 「不要零散看选项」——把握文章「划分」，和文中「逻辑词」是上分秘诀！！\\n\\n第 34 页\\n\\n考试完形填空示范：\\n范文：2024高考全国一卷\\n英语真题\\n1）首段看主题\\n2）全文划分\\n3）联系选项与文章\\n💡\\n【首段】\\n\\n人+事+怎么了\\n\\n*theme：\\n作家-写作-拼写文字问题\\n\\n重点——即：\\n\\n\\n{全文围绕主题}\\n\\n\\n第 35 页\\n\\n考试完形填空示范：\\n范文：2024高考全国一卷\\n英语真题\\n1）首段看主题\\n2）全文划分\\n3）联系选项与文章\\n💡\\n【全文划分】\\n\\n按照阅读中的划分方法\\n//后总结段落意思\\n\\n*全文结构：\\n提出主题——1\\n词典的作用1——2\\n词点的作用2——3\\n举例论证——4&5\\n\\n\\n{结构清晰+内容概括}\\n\\n\\n\\n\\n\\n第 36 页\\n\\n考试完形填空示范：\\n范文：2024高考全国一卷\\n英语真题\\n1）首段看主题\\n2）全文划分\\n3）联系选项与文章\\n💡\\n【联系】\\n\\n先看段首/段尾\\n\\n\\n①段落转换\\n1）上一段+这一段讲了什么\\n2）有「段落转换」的选项\\n\\n{E: but-逻辑转折 + not only…内容联系上一段}\\n\\n\\n\\n第 37 页\\n\\n考试完形填空示范：\\n范文：2024高考全国一卷\\n英语真题\\n1）首段看主题\\n2）全文划分\\n3）联系选项与文章\\n💡\\n【联系】\\n\\n再看段中\\n\\n\\n*36.在段中：\\n②同义对应\\n\\n往往有\\nWhich means, that means, in other words, it equals to…\\n等等提示词！\\n\\n\\n\\n第 38 页\\n\\n考试完形填空示范：\\n范文：2024高考全国一卷\\n英语真题\\n1）首段看主题\\n2）全文划分\\n3）联系选项与文章\\n💡\\n【联系】\\n\\n再看段中\\n\\n*37.在段中：\\n\\n③解释原因\\n{前文有现象/态度+\\n后文有解释}\\n\\n往往有\\nBecause， why， the reason for…\\n等等提示词！\\n\\n\\n①、②、③、④、⑤、⑥、⑦、⑧、⑨、⑩、⑪、⑫、⑬、⑭、⑮、⑯、⑰、⑱、⑲、⑳\\n\\n第 39 页\\n\\n考试完形填空示范：\\n范文：2024高考全国一卷\\n英语真题\\n1）首段看主题\\n2）全文划分\\n3）联系选项与文章\\n💡\\n【联系】\\n\\n再看段中\\n\\n*40.在段中：\\n\\n④对比转折\\n{前文有情感态度+\\n后文有另一个情感态度}\\n\\n往往有\\nBut， however， nevertheless, in contrast…\\n等等提示词！\\n\\n\\n\\n第 40 页\\nChapter-6\\n \\n听力\\n\\n第 41 页\\n\\n为什么听力容易出错？\\n1）不会听\\n在「听」里，我们把发音/文本对应起来：\\n\\n记住：「学会精听」，先听2-3遍音频，再打开文本，一字一句对照听！\\n直到每个单词都听清\\n2）不会记\\n在「记」里，我们学会速记：\\n\\n为什么要速记：一句很长的话，信息点只有几个！\\n学会速记方法——不遗漏要点+节省时间\\n\\n第 42 页\\n究竟要听什么？\\n信息需要充分判断和取舍\\n核心方法就睡——【抓关键词】\\n\\n关键词：主谓宾结构\\n\\n💡\\n【2024全国高考一卷】text 8\\n\\n{These days you can see traffic jams around schools at drop-off and pick-up times. But it’s hard to blame the parents. They have good reasons for driving their kids to school, mostly to do with safety and convenience.}\\n\\n提炼主干，缩减到不能再缩减\\n（不改变原义，不考虑语法结构）\\n\\n｜｜这句话缩减速记：\\n\\ntraffic jams （上+放学时） x to blame parents \\nBec. ( safety and convenience)\\n\\n第 43 页\\n\\n和学姐学会速记方法：\\n注意不同词速记方法不同\\n速记举例:\\n符号\\n箭头 表示：导致、结果原因等/ ( )表示：原因、解释、修饰…\\n缩写（逻辑词）\\nBec. =because / ∴=so / B.= but/ 1st =first, 2nd=second, 3rd=third,…\\n首字母（名词）\\nSch=school / info=information / uni = university\\nM=man / W=woman\\n \\n重点音节\\nCps=campus / ASAP= as soon as possible\\n中文\\n山=mountain / 火= fire / 童=children\\n\\n第 44 页\\nChapter-7\\n \\n语法\\n\\n第 45 页\\n\\n\\n\\n\\n\\n\\n怎么练语法？——例子！例子！例子！\\n\\n第 46 页\\n\\n怎么练语法？——例子！例子！例子！\\n1）从英语课文里学习\\n很多人说——要系统的学习语法？\\n\\n*学姐经验：把每篇课文都能够背诵，课文中的语法自然能够通过内容被记住！\\ne.g.对话中，A向B描述ta已经做完的事——用{现在完成时}而不是{一般过去时}\\n2）从考试错题里面学习\\n在「考试错题」里，应该怎么高效利用：\\n\\n*学姐经验：把每一篇考试「阅读」、「完形」、「短文改错」、「七选五」里面的\\n长难句——有较多从句/修饰/逻辑连词的句子进行{划分+理解}\\n\\n第 47 页\\n怎么用好考试错题？\\n无论这篇文章有没有出错\\n核心方法——【 「阅读」、「完形」、「短文改错」、「七选五」 】文本\\n\\n全部过一遍——理解长难句\\n\\n💡\\n【2024全国高考一卷】text 8\\n{These days you can see traffic jams around schools at drop-off and pick-up times. But it’s hard to blame the parents. They have good reasons for driving their kids to school, mostly to do with safety and convenience.}\\n\\n长难句怎么理解？\\n找出主谓宾\\n判断句式\\n框出所有从句\\n\\n｜｜长难句划分后：\\n\\ntraffic jams （上+放学时） x to blame parents \\nBec. ( safety and convenience)\\n\\n第 48 页\\n\\n怎么生活中学习语法？\\n多听英文歌\\n核心方法——【 「听歌曲」、「看歌词」、「想象画面」、「理解语法」 】\\n\\n多遍重复——歌词中的语法&时态，理解才能记住！\\n\\n💡\\n/Love story/\\n【一般过去时——描述过去的画面】\\nWe were both young when I first saw you\\n\\n【过去的画面开启】\\n【一般现在时——描述现在的心情】\\nI close my eyes and the flashback starts\\n【一般进行时——描述当时的场景】\\nI'm standing there on a balcony in summer air\\nSee the lights see the party the ball gowns\\nSee you make your way through the crow\\nAnd say hello\\n倒装句\\nLittle did I know\\n【一般过去时——描述过去的画面】\\nThat you were Romeo \\n【过去进行时——过去的男孩正在做什么】\\nyou were throwing pebbles\\nAnd my daddy said\\n祈使句\\nStay away from Juliet\\n【过去进行时——过去的我正在做什么】\\nAnd I was crying on the staircase\\nBegging you please don't go\\nAnd I said\\n祈使句\\nRomeo take me somewhere we can be alone\\n【将来进行时——对未来爱情的想象】\\nI'll be waiting all there's left to do is run\\nYou'll be the prince and I'll be the princess\\nIt's a love story baby just say yes\\n学姐建议加入歌单【循环播放的歌曲】\\nYesterday once more – 一般过去时\\n\\nLemon tree – 现在进行时\\n\\nMonsters – 一般将来时\\n\\nLove story – 过去进行时\\n\\nCounting stars – 现在完成时\\n\\n和小伙伴一起听起来！\\n\\n第 49 页\\nChapter-8\\n \\n口语怎么说好？\\n\\n第 50 页\\n\\n{口语}\\n不同情况可以提高口语：\\n无交流对象——【「跟读课文」、「看无字幕美剧」、「听英文新闻」】\\n有交流对象——【 「英语角」、「英文歌」】\\n\\n输出的本质 = 足够的输入 + 足量的模仿！\\n我们要怎么做：\\n1.用好自己的课本\\n\\n#学姐亲身经历：\\n初中时，每篇课文听【7】遍以上\\n做到全文背诵+默写\\n跟读，模仿语调、抑扬顿挫、停顿\\n带语音语调去自己说一遍\\n*利用上学/放学/午饭后30min，碎片化时间重复\\n💡\\n\\n第 51 页\\n\\n{口语}\\n不同情况可以提高口语：\\n无交流对象——【「跟读课文」、「看无字幕美剧」、「听英文新闻」】\\n有交流对象——【 「听歌曲」、「看歌词」、「想象画面」、「理解语法」 】\\n\\n输出的本质 = 足够的输入 + 足量的模仿！\\n我们要怎么做：\\n2.用好「美剧、新闻」等输入材料\\n\\n#学姐建议：\\n无字幕看美剧 + 听英文新闻\\n模仿发音和语调：模仿演员或主播的发音、语调和节奏——提升【口音和流利度】\\n扩展词汇和表达：【不同情境】下表达\\n提高反应速度：快速反应剧情或新闻内容，【锻炼思维速度 + 口语表达的自信】\\n*做到不看字幕就能理解剧情/新闻！\\n\\n💡\\n\\n第 52 页\\n看哪些？\\n学姐推荐\\n5部美剧 + 5个网站\\n不依赖字幕，磨耳朵！！！\\n\\n💡\\n10美剧/动画推荐：\\nFriends - 语言自然且充满日常对话\\n\\nThe Simpsons - 幽默风趣，俚语和日常对话\\n\\nStranger Things - 紧张刺激，贴近青少年生活\\n\\nThe Big Bang Theory - 丰富的学术和幽默词汇\\n\\nSherlock - 英式侦探剧，虽语言偏难，但能够提升推理能力和语言组织能力\\n\\n和小伙伴一起看起来！\\n\\n💡\\n5个英文新闻网站：\\nBBC News - 提供全球新闻，语言标准\\n\\nCNN - 全球新闻为主，提升词汇和时事了解\\n\\nThe New York Times - 深度报道，进阶学习：复杂句式\\n\\nReuters - 简洁直接的报道见长，适合初学\\n\\nThe Guardian - 国际新闻，语言多样：提高写作和表达\\n\\n\\n在家和爸爸妈妈一起听起来！\\n\\n第 53 页\\n\\n{口语}\\n不同情况可以提高口语：\\n无交流对象——【「跟读课文」、「看无字幕美剧」、「听英文新闻」】\\n有交流对象——【 「英语角」、「英文歌」】\\n\\n交流 = 输入 + 输出的实践！\\n我们要怎么做：\\n多讲！多讲！多讲！\\n\\n#学姐亲身经历：\\n初中{每周3小时}和小伙伴学一首新的英文歌\\n备考托福时{每周2小时}参加全英讨论，每周看一部英文电影，讨论「情节、手法、感受」\\n在交流时：\\n大胆讲！开口已经达到了80%的进步！\\n用输出刺激输入，每次逼自己用一个「新」的表达来表达同一意思\\n\\n*在讨论的时候，保证自己每次都有「3次」以上的发言！！！\\n💡\\n\\n第 54 页\\nChapter-9\\n \\n作文\\n\\n第 55 页\\n\\n独立写作-{写作纲领}\\n哪些体裁——{重视要点}：\\n信件/邮件 —— 对人【道歉、感谢、建议】\\n信件/邮件 —— 对事【申请、投诉、推荐】\\n议论——【倡议书、报道、正反观点对比】\\n介绍——【传统节日/地点/人物】\\n怎么写：\\n\\n#正确的体裁：\\n格式！\\n【文体】【人称】【时态】\\n\\n观点+理由\\n* 布局\\n模仿范文！\\n💡\\n\\n第 56 页\\n\\n独立写作-{写作纲领}\\n用好范文——\\n\\n好作文 = 清晰的骨架 + 丰富的血肉 ！\\n高分的基础：\\n\\n#字数和书写：\\n字数要达到要求！\\n【独立写作不少于100字】【续写不少于180字】\\n\\n\\n💡\\n每天练字\\n* 学姐在高中时\\n每天抄写2篇范文\\n【积累句式】【高级表达】+【练习书写！！！】\\n坚持！坚持！作文需要积累，量变才能质变\\n\\n第 57 页\\n\\n独立写作-{写作纲领}\\n学会英语的万能展开大法——{总分总+并列展开}：\\n总分总——【「开头」、「中间段首句」、「结尾」】\\n并列展开——【 用好「逻辑词」、「高级句式」】\\n\\n好作文 = 清晰的骨架 + 丰富的血肉 ！\\n💡\\n范文怎么用？\\n红笔勾出优秀表达\\n黑笔抄写全文，练习书写\\n\\n第 58 页\\n\\n{万能展开大法}\\n学会英语的万能展开大法——{总分总+并列展开}：\\n总分总——【「开头」、「中间段首句」、「结尾」】\\n并列展开——【 用好「逻辑词」、「高级句式」】\\n\\n高分的结构：\\n\\n#总分总【三部分】：\\n提出要解决的问题或观点/时间、地点、人物、事件\\n摆出事实或论据/事情发展的经过\\n得出结论或阐述理由/抒发态度/展望未来\\n\\n首段、尾段必用高级表达！\\n第二部分【不要漏要点】+【尽量多用高级句式】！\\n💡\\n\\n第 59 页\\n\\n\\n#总分总【三部分】：\\n提出要解决的问题或观点/时间、地点、人物、事件\\n摆出事实或论据/事情发展的经过\\n得出结论或阐述理由/抒发态度/展望未来\\n\\n首段、尾段必用高级表达！\\n第二部分【不要漏要点】+【尽量多用高级句式】！\\n💡\\n2024高考全国一/二卷      英语作文真题\\n#【主题】分享经历；【要点】1.作品 2.感想\\n3.展望未来\\n1.提出话题\\n2.发展经过\\n\\n第 60 页\\n\\n{万能展开大法}\\n学会英语的万能展开大法——{总分总+并列展开}：\\n总分总——【「开头」、「中间段首句」、「结尾」】\\n并列展开——【 用好「逻辑词」、「高级句式」】\\n\\n高分的[并列展开]如何进行：【并列展开】——即把两个/三个独立的【要素】或【句子】连接在一起！\\n怎么连？——靠{逻辑}+{句式}\\n\\n#【逻辑词】：\\n1.多用时间逻辑/因果逻辑/对比逻辑\\ne.g. 时间: Firstly/Besides/ In addition/ What’s more/ Moreover\\n因果: because/ the reason why/ since/ as/ \\n对比: however/ nevertheless/ nonetheless/ in contrast/ on the contrary/ instead\\n\\n#【高级句式】：\\n2. 把一般句【组合/换顺序/变从句】换成高级句\\ne.g. A句 and B句 not only, but also… / with A句信息（变从句），B句\\n\\n💡\\n\\n第 61 页\\n\\n\\n#【中间段】怎么展开？：\\n\\n①三个要素并列【状态、动作、对象】\\n②用大量【非谓语动词/介词】引导的解释部分\\n\\n\\n万能展开！！！\\n💡\\n2024高考全国一/二卷      英语作文真题\\n#【展开的重点】：描述发展经过的{中间段}!!!\\n2.发展经过\\n\\n①、②、③、④、⑤、⑥、⑦、⑧、⑨、⑩、⑪、⑫、⑬、⑭、⑮、⑯、⑰、⑱、⑲、⑳\\n①\\n②\\n③\\n\\n第 62 页\\n\\n读后续写-{写作纲领}\\n重视要点：\\n情绪\\n动作\\n场景\\n怎么写：\\n\\n#四步写：\\n三读\\n【原文最后段】【续写句1】【续写句2】\\n找3要素：\\n【人物、事件、情绪】\\n💡\\n【人物】我和Gunter\\n【事件】求助\\n【情绪】着急\\n\\n【人物】我和Gunter\\n【事件】应约返回\\n【情绪】感激\\n\\n第 63 页\\n\\n读后续写-{写作纲领}\\n怎么写：\\n\\n#四步写：\\n三读\\n【原文最后段】【续写句1】【续写句2】\\n找3要素：\\n【人物、事件、情绪】\\n*标记线索+关键句！！！\\n动作线+情绪线+场景线\\n丰富内容\\n高级表达【动词、情绪词、句式】升华=高分！\\n💡\\n【动作线】求助-帮助-解决\\n【情绪线】着急-感激-感动\\n【场景线】车站-上车-远去\\n\\n变换场景【介词短语】+连续动作【动词】\\n+用从句/插入语【情绪】融合在一句话\\n=\\n丰富的高分表达！\\n\\n\\n第 64 页\\nChapter-10\\n \\n错题本\\n\\n第 65 页\\n英语错题本怎么做？\\n两个方面分别积累\\n\\n①按照题型\\n②按照语法、短语、单词、作文——【分板块积累】\\n\\n\\n\\n💡\\n【学姐英语错题本】详见附赠笔记\\n\\n{一共十一个方面}\\n\\n*把错题✂️剪下来，黑笔写：解题步骤，红笔写：错因+知识点\\n\\n\\n\\n\\n｜｜订正一张卷子/一个练习：\\n\\n及时总结！绝不把今天的错题拖到明天！！！\\nPart 1\\nPart 2\\n\\n第 66 页\\nPart1: 英语错题题型——怎么做？\\n\\n黑笔写题\\n红笔总结\\n\\n💡\\n写出错误原因\\n\\n\\n①保留相关文段\\n②对比正确、错误选项\\n③红笔订正，尽量简略\\n\\n\\n\\n用小三角高亮自己的易错点！\\n使用活页本\\n\\n第 67 页\\nPart2: 按照板块积累——怎么做？\\n\\ne.g.积累生词/短语\\n\\n💡\\n当在考试中遇到【词义猜测】【文段生词】\\n不要放过——「精」查词典！\\n\\n①写出词性\\n\\n②写出【英文】释义\\n*英文释义——是这个词最准确的意思！\\n\\n③给自己写一个例句\\n\\n\\n考试重点总结——重在精字！\\n{每次考试都是宝贵的积累机会，每天积累一篇阅读里的\\n生词，都是在为最后的考试做准备}\\n使用活页本\\n\\n\\n\\n\\n第 68 页\\nChapter-11\\n \\n总结\\n\\n第 69 页\\n\\n【优优学姐个人介绍】——高考裸分689/英语146\\n英语的分数是「捡」来的，每一分都要重视\\n高考英语146\\n💡\\n优优 清华学姐/清华本硕 /高考四川省前50\\n英语146 数学142 物理满分\\n\\n\\n可以看出：（英语的语言性+工具性）是我们学习的重点，需要注意英语学什么+考什么\\n想像优优学姐一样拥有好成绩——\\n\\n①、②、③、④、⑤、⑥、⑦、⑧、⑨、⑩、⑪、⑫、⑬、⑭、⑮、⑯、⑰、⑱、⑲、⑳\\n优优 清华学姐高考成绩查询页面\\n希望你也能收到这样的喜讯！\\n「抓住学习方法+备考方法」才能百战百胜！","chunk_count":69,"analyzed":false,"imported_file":true,"sections":[{"locator":"第 1 页","text":"\\n课程内容介绍Introduction\\n【努力也是一种天赋】\\n高考还远没有到拼天赋的程度，只有足够努力，才能不给自己找借口\\n1.优优学姐个人介绍\\n💡\\n高考裸分689——{分数与分数背后的故事}\\n英语分数——{146}\\n3.阅读\\n提高阅读速度——{小说/阅读做题}\\n3只笔——{学会学姐阅读英文文章的笔记方法}\\n2.背单词\\n方法——{谐音记忆/联想记忆/关联记忆/读音}\\n拼读背诵——{会拼就会背}\\n周期——{3+7+21}\\n提高英语背诵能力的方法——{1+1+1}"},{"locator":"第 2 页","text":"\\n课程内容介绍Introduction\\n【努力也是一种天赋】\\n高考还远没有到拼天赋的程度，只有足够努力，才能不给自己找借口\\n4.完形填空\\n💡\\n填哪些——{挖坑类型}\\n怎么练——{方法/实战/总结}\\n例题\\n5.七选五\\n怎么选——{逻辑结构/关键词}\\n排除方法+选最优解\\n例题\\n6. 听力\\n方法——{学会精听+速记}\\n精听+速记——{用好音频与原文/速记方法学习}"},{"locator":"第 3 页","text":"\\n课程内容介绍Introduction\\n【努力也是一种天赋】\\n高考还远没有到拼天赋的程度，只有足够努力，才能不给自己找借口\\n7.语法\\n💡\\n语法结构——{时态/学习语法方法/划分长难句}\\n一首歌学会英文时态——{Love story}\\n8.口语\\n如何提高英语口语——{跟读/美剧}\\n实战中提高口语能力——{英文歌/英语角}\\n9.作文\\n学会英语的万能展开大法——{总分总+万能展开}\\n针对续写——{思路/实践}\\n10.错题本\\n手把手教你整理错题——{题型怎么做？}\\n按板块梳理——{怎么针对自己的问题总结}"},{"locator":"第 4 页","text":"Chapter-1\\n \\n优优学姐个人介绍"},{"locator":"第 5 页","text":"\\n【优优学姐个人介绍】——高考裸分689/英语146\\n英语的分数是「捡」来的，每一分都要重视\\n高考英语146\\n💡\\n优优 清华学姐/清华本硕 /高考四川省前50\\n英语146 数学142 物理满分\\n\\n\\n\\n\\n① 英语要掌握什么\\n可以看出：（英语的语言性+工具性）是我们学习的重点，需要注意英语学什么+考什么\\n想像优优学姐一样拥有好成绩——「抓住学习方法+备考方法」才能百战百胜\\n② 英语怎么学\\n注重词汇积累\\n强化听力训练\\n阅读理解提升\\n写作技能培养\\n语法知识掌握\\n\\n\\n+\\n\\n高效记忆法应用\\n提高口语表达\\n多元化学习资源\\n①、②、③、④、⑤、⑥、⑦、⑧、⑨、⑩、⑪、⑫、⑬、⑭、⑮、⑯、⑰、⑱、⑲、⑳\\n优优 清华学姐高考成绩查询页面\\n希望你也能收到这样的喜讯！"},{"locator":"第 6 页","text":"Chapter-2\\n \\n背单词"},{"locator":"第 7 页","text":"\\n1+1+1的背诵方法：{人们对于自己表达的东西记忆最深}\\n「自己先背一遍」+「录音」\\n「睡前」听一遍录音\\n「第二天起床后」再背一遍\\n\\n\\n背什么？\\n💡\\n单词要背哪些？4个方法\\n\\n① 初中——中考考纲1600词\\n记忆方法：\\n按照「话题」速记\\n\\n②高中——高考考纲3500词\\n记忆方法：\\n按照「乱序」+「少量多次」重复记忆\\n\\n*每天20个，坚持一个月>一天50个，不坚持"},{"locator":"第 8 页","text":"\\n可以看到；「谐音记忆」+「联想记忆」就是我们经常用的方法，是中文谐音+英文引申义的结合，很多单词在记忆时都可以采用这样的方法\\n\\n是一种非常高效形象的记忆方法\\n\\n背单词的方法\\n💡\\n单词要怎么背？4个方法\\n\\n① 谐音记忆\\nTedious 冗长的、啰嗦的、单调乏味的 [踢地而死]\\nEndow 捐赠、资助 [银到]\\nDisgruntle 使不满 [diss光头]\\n\\n②联想记忆 \\nHideous 丑恶的、可怕的 [hide+ous 躲藏+多-因为令人讨厌而躲藏]\\nCasualty 事故、急诊室、伤亡 [因为太casual随意-造成了（事故）-（伤亡）很多，送到了（急诊室）]"},{"locator":"第 9 页","text":"\\n可以看到；「关联记忆」可以让我们从一个词扩充到相关的许多词，「读音记忆」可以让我们准确又快速记住，是读音+拼写的结合，可以说——会读就会背，而且不会拼错\\n\\n怎么快速拼读？\\n背单词的方法\\n💡\\n如果不好谐音/联想怎么办？ 千万不要死记硬背\\n\\n③关联记忆\\nPlodding 沉重的 [plod v.n. 辛勤工作/沉重步伐；沉重地走/辛勤地工作]\\n* +谐音记忆：Plod 辛勤工作、沉重地走 [破锣的]\\n\\n\\n④读音记忆 \\n按照读音分节背，会读就会背：Too th some/de li cate"},{"locator":"第 10 页","text":"\\n快速拼读\\n遇到新单词不知道怎么读？\\n\\n在这一部分里，我们需要总结单词的相似/相同音节：\\n\\n记住：「会读就会背」，不用死记硬背音标——从自己的积累中去总结相同的发音\\nx…e就读x(字母的发音) ：Ride fade pipe delicate\\n{请你跟读}\\n\\n\\nck就读k： pack back clock\\n{请你跟读}\\n\\n\\ntion/sion就读[ʃ(e)n]：situation examination creation passion mission constitution\\n{请你跟读}\\n  "},{"locator":"第 11 页","text":"Chapter-3\\n \\n阅读"},{"locator":"第 12 页","text":"\\n\\n【阅读分为两部分】：平时阅读+考试阅读\\nPart1. 平时阅读：\\n「特点」时间多但时间碎、阅读多但杂\\n\\n\\n「策略」重在“广”\\nPart2. 考试阅读：\\n「特点」时间少但时间集中、阅读目的——为了做题\\n\\n\\n「策略」重在“精”\\nPart1. 平时阅读\\nPart2. 考试阅读\\n\\n💡\\n💡"},{"locator":"第 13 页","text":"1.平时阅读：\\n\\n读什么？\\n课内文章\\n英文原著小说\\n\\n课内怎么读？\\n课内文章：课后单词/背诵全文/跟读磁带\\ne.g. 学姐的亲身经历：初中时，每个单元课文1短对话+1长文章：全文背诵「理解所有生词表单词在文中的意思」+「被动式学习语法，因为背诵的课文中本身包含了很多语法结构、时态」+「跟读每篇课文7遍以上，做到语言流畅、和范文抑扬顿挫一致」\\n课内文章三个目的：生词/语法/口语——通过背诵形成肌肉记忆\\n\\n课外怎么读？\\n选一本「自己喜欢」的英文小说\\n每周读10-15页，「查单词」+「理解情节」\\n课外小说两个目的：养成查单词的好习惯/养成阅读习惯\\n"},{"locator":"第 14 页","text":"1.平时阅读：\\n\\n学姐推荐的十本英文小说\\n\\nThe Great Gatsby – 《了不起的盖茨比》 (F. Scott Fitzgerald)\\nTo Kill a Mockingbird – 《杀死一只知更鸟》 (Harper Lee)\\nGone with the Wind – 《飘》 (Margaret Mitchell)\\nA Game of Thrones – 《冰与火之歌》 (George R.R. Martin)\\nThe Chronicles of Narnia – 《纳尼亚传奇》 (C.S. Lewis)\\n1984 – 《一九八四》 (George Orwell)\\nBrave New World – 《美丽新世界》 (Aldous Huxley)\\nThe Catcher in the Rye – 《麦田里的守望者》 (J.D. Salinger)\\nLord of the Flies – 《蝇王》 (William Golding)\\nFrankenstein – 《弗兰肯斯坦》 (Mary Shelley)\\n\\n这些原著小说都具有深刻的思想性和文学价值，适合初、高中生和小学生进行阅读和思考。\\n"},{"locator":"第 15 页","text":"\\n2.考试阅读：\\n💡\\nStep1.通读全文，划分内容 [一划分]\\n拿到文章，把文章通读一遍，重在「精」\\n按照学姐的「一纵几点」的方法，划分文章为几部分\\n每个段落用{//}划出，在其后总结大意，并在原文「标出」相应中心句\\nStep2.定位原文 [二定位]\\n拿到题目，迅速定位原文位置\\n无非三种题目：词义猜测/段落理解/细节理解\\nStep3.找上下文+段落逻辑=解题\\n先回顾自己「//」后的段落总结\\n寻找上下句/上下段，判断逻辑+语义，选出准确选项\\n\\n【强调！】\\n\\n一定要牢记 「不要一味追求阅读速度」——先学会「精」读一篇，再逐渐增加速度"},{"locator":"第 16 页","text":"\\n考试阅读示范：\\n范文：2024高考全国一卷\\n英语真题\\n1）划分\\n2）定位\\n3）解题\\n\\n💡\\n【如何划分】\\n\\n一篇文章往往可以划分为：\\n\\n「头」\\n「脖子」\\n「身体」\\n「尾」\\n\\n每个部分用//划分\\n在左边列出纵向结构\\n"},{"locator":"第 17 页","text":"\\n考试阅读示范：\\n范文：2024高考全国一卷\\n英语真题\\n1）划分\\n2）定位\\n3）解题\\n\\n💡\\n【如何划分】\\n\\n一篇文章往往可以划分为：\\n\\n「头」\\n「脖子」\\n「身体」\\n「尾」\\n\\n每个部分用//划分\\n在文中//后写出段落主题，在文中用（）划出主题定位在哪里\\n\\n\\n\\n\\n\\n"},{"locator":"第 18 页","text":"\\n考试阅读示范：\\n范文：2024高考英语全国一卷\\n真题\\n1）划分\\n2）定位\\n3）解题\\n\\n💡\\n【如何定位】\\n\\n这道题：词义猜测\\n定位到文中，寻找上下文，「print」材料更好用来学习-因为更容易看，对应D\\n\\n每个部分用//划分\\n//后的段落主题，\\n\\n在做题时会直接作为提示！！做题速度自然提升\\n\\n\\n\\n\\n\\n"},{"locator":"第 19 页","text":"\\n考试阅读示范：\\n范文：2024高考全国一卷\\n英语真题\\n1）划分\\n2）定位\\n3）解题\\n\\n💡\\n【如何定位】\\n\\n这道题：段落理解\\n定位到文中，有这一内容的位置-shallowing hypothesis \\n找上下文，后文解释：less mental effort\\n对应A\\n\\n每个部分用//划分\\n//后的段落主题，与问的段落内容直接相关\\n\\n\\n\\n\\n\\n"},{"locator":"第 20 页","text":"\\n考试阅读示范：\\n范文：2024高考全国一卷\\n英语真题\\n1）划分\\n2）定位\\n3）解题\\n\\n💡\\n【如何定位】\\n\\n这道题：细节理解\\n定位到文中「尾」提出新现象段，寻找上下文，这一细节「用新技术教学为什么」因为上文「feel more engaging」，对应A\\n\\n每个部分用//划分\\n//后的段落主题，\\n直接指示段落中现象、细节\\n\\n\\n\\n\\n\\n\\n\\n"},{"locator":"第 21 页","text":"\\n考试阅读示范：\\n范文：2024高考全国一卷\\n英语真题\\n1）划分\\n2）定位\\n3）解题\\n\\n💡\\n【如何定位】\\n\\n这道题：段落理解\\n定位到最后一段，直接看//后自己总结内容，多观点总结，对应C\\n\\n每个部分用//划分\\n//后的段落主题，\\n\\n在做题时会直接作为提示！！做题速度自然提升\\n\\n\\n\\n\\n\\n"},{"locator":"第 22 页","text":"\\n考试阅读示范：\\n范文：2024高考全国一卷\\n英语真题\\n1）划分\\n2）定位\\n3）解题\\n\\n💡\\n【如何解题】\\n\\n1）细节理解\\n2）段落理解\\n3）词义猜测\\n\\n*无非就是三种题目\\n\\n直接用\\n「划分」+「定位」\\n所有题目都可以直接找到相应位置，节约时间\\n+\\n//后的总结帮助理解\\n\\n\\n\\n\\n\\n"},{"locator":"第 23 页","text":"\\n考试阅读示范：\\n范文：2024高考全国一卷\\n英语真题\\n\\n做完+订正后干什么？\\n💡\\n【用好一篇阅读】\\n\\n1）查出生词\\n2）理解长难句\\n3）整理错题\\n\\n*精=用好每一篇文本！\\n\\n「积累生词」+\\n「分析长难句」\\n\\n直接帮助我们增加词汇量、积累语法\\n\\n\\n\\n\\n\\n\\n\\n\\n"},{"locator":"第 24 页","text":"Chapter-4\\n \\n完形填空"},{"locator":"第 25 页","text":"\\n完形填空：\\n注意易错类型「排除+选最优解」\\n原则1-4:\\n先看一遍文章，划分+总结大意\\n用阅读方法：{纵向划分+//后总结大意}\\n选出适合选项，「瞻前顾后」\\n上文、下文「瞻前顾后」：{上下文语义、对象、搭配}\\n\\n学会「排除」\\n排除：对象/搭配/语义\\n大胆排除！\\n解决掉80%的题目\\n拿不准的选项，选最优解\\n#最容易失分的部分！往往有2个选项都比较适合，但是一定有一个最优！\\n秘诀：情感态度/搭配「最适合」的项\\n"},{"locator":"第 26 页","text":"\\n考试完形填空示范：\\n范文：2024高考全国一卷\\n英语真题\\n1）通读\\n2）排除\\n3）选择最优解\\n\\n💡\\n【如何通读】\\n\\n通读文章，只读一遍：这一遍要用学姐在阅读中的「划分」方法直接套用\\n\\n{纵向：总分总结构\\n+\\n//后总结内容}\\n\\n\\n首段：主题「人+事」\\n后续：描述过程\\n"},{"locator":"第 27 页","text":"\\n考试完形填空示范：\\n范文：2024高考全国一卷\\n英语真题\\n1）通读\\n2）排除\\n3）选择最优解\\n\\n💡\\n【开始做题】\\n\\n养成一个好习惯！\\n\\n\\n*确定了选项之后把单词「填入文中」\\n\\n\\n\\n再读一遍看是否通顺+与上下文是否匹配"},{"locator":"第 28 页","text":"\\n考试完形填空示范：\\n范文：2024高考全国一卷\\n英语真题\\n1）通读\\n2）排除\\n3）选择最优解\\n\\n💡\\n【如何排除】\\n\\n这一步完成80%的题目！\\n\\n*不正确的选项：\\n\\n\\n搭配x\\n语义x\\n事实/对象x\\n\\n\\n\\n\\n"},{"locator":"第 29 页","text":"\\n考试完形填空示范：\\n范文：2024高考全国一卷\\n英语真题\\n1）通读\\n2）排除\\n3）选择最优解\\n\\n💡\\n【如何解决纠结选项】\\n\\n20%让人纠结、最容易选错的题目！\\n\\n*牢记：选择最优解\\n\\n重点——即：\\n\\n\\n{情感态度}最优\\n+\\n{搭配}最优\\n\\n\\n【搭配最优】纠结「way 跑步的方式」还是「reason 跑步的原因」呢？\\n46.根据上下文，这句话在「段」尾进行总结与解释 + 后半「句」if一种设想的情况，reason「表达：解释原因」更加合适\\n"},{"locator":"第 30 页","text":"\\n考试完形填空示范：\\n范文：2024高考全国一卷\\n英语真题\\n1）通读\\n2）排除\\n3）选择最优解\\n\\n💡\\n【如何解决纠结选项】\\n\\n20%让人纠结、最容易选错的题目！\\n\\n*牢记：选择最优解\\n\\n重点——即：\\n\\n\\n{情感态度}最优\\n+\\n{搭配}最优\\n\\n【情感态度最优】纠结「such events 这样的事情」还是「such challenges 这样的挑战」呢？\\n51. 这个词在「概括」“我”骑车的不顺利经历 ，events「表达：较为中性的态度」，challenges「表达：遇到挑战-不顺利-感到困难」——具有情感色彩、作者态度，所以更加合适\\n\\n"},{"locator":"第 31 页","text":"\\n\\n完形填空：\\n总结如何快速+准确做题\\n原则1-4:\\n先看一遍文章，划分+总结大意\\n选出适合选项，「瞻前顾后」——填入选项\\n学会「排除」\\n拿不准的选项，选最优解\\n\\n\\n\\n上文、下文「瞻前顾后」：{上下文语义、对象、搭配}\\n\\n排除：对象/搭配/语义\\n大胆排除！\\n解决掉80%的题目\\n#最容易失分的部分！往往有2个选项都比较适合，但是一定有一个最优！\\n秘诀：情感态度/搭配「最适合」的项\\n\\n排除+最优解方法:"},{"locator":"第 32 页","text":"Chapter-5\\n \\n七选五"},{"locator":"第 33 页","text":"\\n七选五：\\n💡\\nStep1.首段看主题\\n读首段，抓全文关键词「谁+什么事」\\n全文主题一定据此展开！！！\\nStep2.看文章，划分过程\\n按照「阅读」中的划分方法\\n//后概括每部分大意\\nStep3.联系选项与文章=解题\\n找填空位置：段首/段中/段尾\\n题目无非四种：\\n1）段落转换-对应段首/段尾；2）同义对应/ 3）对比转折/ 4）解释原因-对应段中\\n\\n【强调！】\\n\\n一定要先阅读全文 「不要零散看选项」——把握文章「划分」，和文中「逻辑词」是上分秘诀！！"},{"locator":"第 34 页","text":"\\n考试完形填空示范：\\n范文：2024高考全国一卷\\n英语真题\\n1）首段看主题\\n2）全文划分\\n3）联系选项与文章\\n💡\\n【首段】\\n\\n人+事+怎么了\\n\\n*theme：\\n作家-写作-拼写文字问题\\n\\n重点——即：\\n\\n\\n{全文围绕主题}\\n"},{"locator":"第 35 页","text":"\\n考试完形填空示范：\\n范文：2024高考全国一卷\\n英语真题\\n1）首段看主题\\n2）全文划分\\n3）联系选项与文章\\n💡\\n【全文划分】\\n\\n按照阅读中的划分方法\\n//后总结段落意思\\n\\n*全文结构：\\n提出主题——1\\n词典的作用1——2\\n词点的作用2——3\\n举例论证——4&5\\n\\n\\n{结构清晰+内容概括}\\n\\n\\n\\n"},{"locator":"第 36 页","text":"\\n考试完形填空示范：\\n范文：2024高考全国一卷\\n英语真题\\n1）首段看主题\\n2）全文划分\\n3）联系选项与文章\\n💡\\n【联系】\\n\\n先看段首/段尾\\n\\n\\n①段落转换\\n1）上一段+这一段讲了什么\\n2）有「段落转换」的选项\\n\\n{E: but-逻辑转折 + not only…内容联系上一段}\\n\\n"},{"locator":"第 37 页","text":"\\n考试完形填空示范：\\n范文：2024高考全国一卷\\n英语真题\\n1）首段看主题\\n2）全文划分\\n3）联系选项与文章\\n💡\\n【联系】\\n\\n再看段中\\n\\n\\n*36.在段中：\\n②同义对应\\n\\n往往有\\nWhich means, that means, in other words, it equals to…\\n等等提示词！\\n\\n"},{"locator":"第 38 页","text":"\\n考试完形填空示范：\\n范文：2024高考全国一卷\\n英语真题\\n1）首段看主题\\n2）全文划分\\n3）联系选项与文章\\n💡\\n【联系】\\n\\n再看段中\\n\\n*37.在段中：\\n\\n③解释原因\\n{前文有现象/态度+\\n后文有解释}\\n\\n往往有\\nBecause， why， the reason for…\\n等等提示词！\\n\\n\\n①、②、③、④、⑤、⑥、⑦、⑧、⑨、⑩、⑪、⑫、⑬、⑭、⑮、⑯、⑰、⑱、⑲、⑳"},{"locator":"第 39 页","text":"\\n考试完形填空示范：\\n范文：2024高考全国一卷\\n英语真题\\n1）首段看主题\\n2）全文划分\\n3）联系选项与文章\\n💡\\n【联系】\\n\\n再看段中\\n\\n*40.在段中：\\n\\n④对比转折\\n{前文有情感态度+\\n后文有另一个情感态度}\\n\\n往往有\\nBut， however， nevertheless, in contrast…\\n等等提示词！\\n\\n"},{"locator":"第 40 页","text":"Chapter-6\\n \\n听力"},{"locator":"第 41 页","text":"\\n为什么听力容易出错？\\n1）不会听\\n在「听」里，我们把发音/文本对应起来：\\n\\n记住：「学会精听」，先听2-3遍音频，再打开文本，一字一句对照听！\\n直到每个单词都听清\\n2）不会记\\n在「记」里，我们学会速记：\\n\\n为什么要速记：一句很长的话，信息点只有几个！\\n学会速记方法——不遗漏要点+节省时间"},{"locator":"第 42 页","text":"究竟要听什么？\\n信息需要充分判断和取舍\\n核心方法就睡——【抓关键词】\\n\\n关键词：主谓宾结构\\n\\n💡\\n【2024全国高考一卷】text 8\\n\\n{These days you can see traffic jams around schools at drop-off and pick-up times. But it’s hard to blame the parents. They have good reasons for driving their kids to school, mostly to do with safety and convenience.}\\n\\n提炼主干，缩减到不能再缩减\\n（不改变原义，不考虑语法结构）\\n\\n｜｜这句话缩减速记：\\n\\ntraffic jams （上+放学时） x to blame parents \\nBec. ( safety and convenience)"},{"locator":"第 43 页","text":"\\n和学姐学会速记方法：\\n注意不同词速记方法不同\\n速记举例:\\n符号\\n箭头 表示：导致、结果原因等/ ( )表示：原因、解释、修饰…\\n缩写（逻辑词）\\nBec. =because / ∴=so / B.= but/ 1st =first, 2nd=second, 3rd=third,…\\n首字母（名词）\\nSch=school / info=information / uni = university\\nM=man / W=woman\\n \\n重点音节\\nCps=campus / ASAP= as soon as possible\\n中文\\n山=mountain / 火= fire / 童=children"},{"locator":"第 44 页","text":"Chapter-7\\n \\n语法"},{"locator":"第 45 页","text":"\\n\\n\\n\\n\\n\\n怎么练语法？——例子！例子！例子！"},{"locator":"第 46 页","text":"\\n怎么练语法？——例子！例子！例子！\\n1）从英语课文里学习\\n很多人说——要系统的学习语法？\\n\\n*学姐经验：把每篇课文都能够背诵，课文中的语法自然能够通过内容被记住！\\ne.g.对话中，A向B描述ta已经做完的事——用{现在完成时}而不是{一般过去时}\\n2）从考试错题里面学习\\n在「考试错题」里，应该怎么高效利用：\\n\\n*学姐经验：把每一篇考试「阅读」、「完形」、「短文改错」、「七选五」里面的\\n长难句——有较多从句/修饰/逻辑连词的句子进行{划分+理解}"},{"locator":"第 47 页","text":"怎么用好考试错题？\\n无论这篇文章有没有出错\\n核心方法——【 「阅读」、「完形」、「短文改错」、「七选五」 】文本\\n\\n全部过一遍——理解长难句\\n\\n💡\\n【2024全国高考一卷】text 8\\n{These days you can see traffic jams around schools at drop-off and pick-up times. But it’s hard to blame the parents. They have good reasons for driving their kids to school, mostly to do with safety and convenience.}\\n\\n长难句怎么理解？\\n找出主谓宾\\n判断句式\\n框出所有从句\\n\\n｜｜长难句划分后：\\n\\ntraffic jams （上+放学时） x to blame parents \\nBec. ( safety and convenience)"},{"locator":"第 48 页","text":"\\n怎么生活中学习语法？\\n多听英文歌\\n核心方法——【 「听歌曲」、「看歌词」、「想象画面」、「理解语法」 】\\n\\n多遍重复——歌词中的语法&时态，理解才能记住！\\n\\n💡\\n/Love story/\\n【一般过去时——描述过去的画面】\\nWe were both young when I first saw you\\n\\n【过去的画面开启】\\n【一般现在时——描述现在的心情】\\nI close my eyes and the flashback starts\\n【一般进行时——描述当时的场景】\\nI'm standing there on a balcony in summer air\\nSee the lights see the party the ball gowns\\nSee you make your way through the crow\\nAnd say hello\\n倒装句\\nLittle did I know\\n【一般过去时——描述过去的画面】\\nThat you were Romeo \\n【过去进行时——过去的男孩正在做什么】\\nyou were throwing pebbles\\nAnd my daddy said\\n祈使句\\nStay away from Juliet\\n【过去进行时——过去的我正在做什么】\\nAnd I was crying on the staircase\\nBegging you please don't go\\nAnd I said\\n祈使句\\nRomeo take me somewhere we can be alone\\n【将来进行时——对未来爱情的想象】\\nI'll be waiting all there's left to do is run\\nYou'll be the prince and I'll be the princess\\nIt's a love story baby just say yes\\n学姐建议加入歌单【循环播放的歌曲】\\nYesterday once more – 一般过去时\\n\\nLemon tree – 现在进行时\\n\\nMonsters – 一般将来时\\n\\nLove story – 过去进行时\\n\\nCounting stars – 现在完成时\\n\\n和小伙伴一起听起来！"},{"locator":"第 49 页","text":"Chapter-8\\n \\n口语怎么说好？"},{"locator":"第 50 页","text":"\\n{口语}\\n不同情况可以提高口语：\\n无交流对象——【「跟读课文」、「看无字幕美剧」、「听英文新闻」】\\n有交流对象——【 「英语角」、「英文歌」】\\n\\n输出的本质 = 足够的输入 + 足量的模仿！\\n我们要怎么做：\\n1.用好自己的课本\\n\\n#学姐亲身经历：\\n初中时，每篇课文听【7】遍以上\\n做到全文背诵+默写\\n跟读，模仿语调、抑扬顿挫、停顿\\n带语音语调去自己说一遍\\n*利用上学/放学/午饭后30min，碎片化时间重复\\n💡"},{"locator":"第 51 页","text":"\\n{口语}\\n不同情况可以提高口语：\\n无交流对象——【「跟读课文」、「看无字幕美剧」、「听英文新闻」】\\n有交流对象——【 「听歌曲」、「看歌词」、「想象画面」、「理解语法」 】\\n\\n输出的本质 = 足够的输入 + 足量的模仿！\\n我们要怎么做：\\n2.用好「美剧、新闻」等输入材料\\n\\n#学姐建议：\\n无字幕看美剧 + 听英文新闻\\n模仿发音和语调：模仿演员或主播的发音、语调和节奏——提升【口音和流利度】\\n扩展词汇和表达：【不同情境】下表达\\n提高反应速度：快速反应剧情或新闻内容，【锻炼思维速度 + 口语表达的自信】\\n*做到不看字幕就能理解剧情/新闻！\\n\\n💡"},{"locator":"第 52 页","text":"看哪些？\\n学姐推荐\\n5部美剧 + 5个网站\\n不依赖字幕，磨耳朵！！！\\n\\n💡\\n10美剧/动画推荐：\\nFriends - 语言自然且充满日常对话\\n\\nThe Simpsons - 幽默风趣，俚语和日常对话\\n\\nStranger Things - 紧张刺激，贴近青少年生活\\n\\nThe Big Bang Theory - 丰富的学术和幽默词汇\\n\\nSherlock - 英式侦探剧，虽语言偏难，但能够提升推理能力和语言组织能力\\n\\n和小伙伴一起看起来！\\n\\n💡\\n5个英文新闻网站：\\nBBC News - 提供全球新闻，语言标准\\n\\nCNN - 全球新闻为主，提升词汇和时事了解\\n\\nThe New York Times - 深度报道，进阶学习：复杂句式\\n\\nReuters - 简洁直接的报道见长，适合初学\\n\\nThe Guardian - 国际新闻，语言多样：提高写作和表达\\n\\n\\n在家和爸爸妈妈一起听起来！"},{"locator":"第 53 页","text":"\\n{口语}\\n不同情况可以提高口语：\\n无交流对象——【「跟读课文」、「看无字幕美剧」、「听英文新闻」】\\n有交流对象——【 「英语角」、「英文歌」】\\n\\n交流 = 输入 + 输出的实践！\\n我们要怎么做：\\n多讲！多讲！多讲！\\n\\n#学姐亲身经历：\\n初中{每周3小时}和小伙伴学一首新的英文歌\\n备考托福时{每周2小时}参加全英讨论，每周看一部英文电影，讨论「情节、手法、感受」\\n在交流时：\\n大胆讲！开口已经达到了80%的进步！\\n用输出刺激输入，每次逼自己用一个「新」的表达来表达同一意思\\n\\n*在讨论的时候，保证自己每次都有「3次」以上的发言！！！\\n💡"},{"locator":"第 54 页","text":"Chapter-9\\n \\n作文"},{"locator":"第 55 页","text":"\\n独立写作-{写作纲领}\\n哪些体裁——{重视要点}：\\n信件/邮件 —— 对人【道歉、感谢、建议】\\n信件/邮件 —— 对事【申请、投诉、推荐】\\n议论——【倡议书、报道、正反观点对比】\\n介绍——【传统节日/地点/人物】\\n怎么写：\\n\\n#正确的体裁：\\n格式！\\n【文体】【人称】【时态】\\n\\n观点+理由\\n* 布局\\n模仿范文！\\n💡"},{"locator":"第 56 页","text":"\\n独立写作-{写作纲领}\\n用好范文——\\n\\n好作文 = 清晰的骨架 + 丰富的血肉 ！\\n高分的基础：\\n\\n#字数和书写：\\n字数要达到要求！\\n【独立写作不少于100字】【续写不少于180字】\\n\\n\\n💡\\n每天练字\\n* 学姐在高中时\\n每天抄写2篇范文\\n【积累句式】【高级表达】+【练习书写！！！】\\n坚持！坚持！作文需要积累，量变才能质变"},{"locator":"第 57 页","text":"\\n独立写作-{写作纲领}\\n学会英语的万能展开大法——{总分总+并列展开}：\\n总分总——【「开头」、「中间段首句」、「结尾」】\\n并列展开——【 用好「逻辑词」、「高级句式」】\\n\\n好作文 = 清晰的骨架 + 丰富的血肉 ！\\n💡\\n范文怎么用？\\n红笔勾出优秀表达\\n黑笔抄写全文，练习书写"},{"locator":"第 58 页","text":"\\n{万能展开大法}\\n学会英语的万能展开大法——{总分总+并列展开}：\\n总分总——【「开头」、「中间段首句」、「结尾」】\\n并列展开——【 用好「逻辑词」、「高级句式」】\\n\\n高分的结构：\\n\\n#总分总【三部分】：\\n提出要解决的问题或观点/时间、地点、人物、事件\\n摆出事实或论据/事情发展的经过\\n得出结论或阐述理由/抒发态度/展望未来\\n\\n首段、尾段必用高级表达！\\n第二部分【不要漏要点】+【尽量多用高级句式】！\\n💡"},{"locator":"第 59 页","text":"\\n\\n#总分总【三部分】：\\n提出要解决的问题或观点/时间、地点、人物、事件\\n摆出事实或论据/事情发展的经过\\n得出结论或阐述理由/抒发态度/展望未来\\n\\n首段、尾段必用高级表达！\\n第二部分【不要漏要点】+【尽量多用高级句式】！\\n💡\\n2024高考全国一/二卷      英语作文真题\\n#【主题】分享经历；【要点】1.作品 2.感想\\n3.展望未来\\n1.提出话题\\n2.发展经过"},{"locator":"第 60 页","text":"\\n{万能展开大法}\\n学会英语的万能展开大法——{总分总+并列展开}：\\n总分总——【「开头」、「中间段首句」、「结尾」】\\n并列展开——【 用好「逻辑词」、「高级句式」】\\n\\n高分的[并列展开]如何进行：【并列展开】——即把两个/三个独立的【要素】或【句子】连接在一起！\\n怎么连？——靠{逻辑}+{句式}\\n\\n#【逻辑词】：\\n1.多用时间逻辑/因果逻辑/对比逻辑\\ne.g. 时间: Firstly/Besides/ In addition/ What’s more/ Moreover\\n因果: because/ the reason why/ since/ as/ \\n对比: however/ nevertheless/ nonetheless/ in contrast/ on the contrary/ instead\\n\\n#【高级句式】：\\n2. 把一般句【组合/换顺序/变从句】换成高级句\\ne.g. A句 and B句 not only, but also… / with A句信息（变从句），B句\\n\\n💡"},{"locator":"第 61 页","text":"\\n\\n#【中间段】怎么展开？：\\n\\n①三个要素并列【状态、动作、对象】\\n②用大量【非谓语动词/介词】引导的解释部分\\n\\n\\n万能展开！！！\\n💡\\n2024高考全国一/二卷      英语作文真题\\n#【展开的重点】：描述发展经过的{中间段}!!!\\n2.发展经过\\n\\n①、②、③、④、⑤、⑥、⑦、⑧、⑨、⑩、⑪、⑫、⑬、⑭、⑮、⑯、⑰、⑱、⑲、⑳\\n①\\n②\\n③"},{"locator":"第 62 页","text":"\\n读后续写-{写作纲领}\\n重视要点：\\n情绪\\n动作\\n场景\\n怎么写：\\n\\n#四步写：\\n三读\\n【原文最后段】【续写句1】【续写句2】\\n找3要素：\\n【人物、事件、情绪】\\n💡\\n【人物】我和Gunter\\n【事件】求助\\n【情绪】着急\\n\\n【人物】我和Gunter\\n【事件】应约返回\\n【情绪】感激"},{"locator":"第 63 页","text":"\\n读后续写-{写作纲领}\\n怎么写：\\n\\n#四步写：\\n三读\\n【原文最后段】【续写句1】【续写句2】\\n找3要素：\\n【人物、事件、情绪】\\n*标记线索+关键句！！！\\n动作线+情绪线+场景线\\n丰富内容\\n高级表达【动词、情绪词、句式】升华=高分！\\n💡\\n【动作线】求助-帮助-解决\\n【情绪线】着急-感激-感动\\n【场景线】车站-上车-远去\\n\\n变换场景【介词短语】+连续动作【动词】\\n+用从句/插入语【情绪】融合在一句话\\n=\\n丰富的高分表达！\\n"},{"locator":"第 64 页","text":"Chapter-10\\n \\n错题本"},{"locator":"第 65 页","text":"英语错题本怎么做？\\n两个方面分别积累\\n\\n①按照题型\\n②按照语法、短语、单词、作文——【分板块积累】\\n\\n\\n\\n💡\\n【学姐英语错题本】详见附赠笔记\\n\\n{一共十一个方面}\\n\\n*把错题✂️剪下来，黑笔写：解题步骤，红笔写：错因+知识点\\n\\n\\n\\n\\n｜｜订正一张卷子/一个练习：\\n\\n及时总结！绝不把今天的错题拖到明天！！！\\nPart 1\\nPart 2"},{"locator":"第 66 页","text":"Part1: 英语错题题型——怎么做？\\n\\n黑笔写题\\n红笔总结\\n\\n💡\\n写出错误原因\\n\\n\\n①保留相关文段\\n②对比正确、错误选项\\n③红笔订正，尽量简略\\n\\n\\n\\n用小三角高亮自己的易错点！\\n使用活页本"},{"locator":"第 67 页","text":"Part2: 按照板块积累——怎么做？\\n\\ne.g.积累生词/短语\\n\\n💡\\n当在考试中遇到【词义猜测】【文段生词】\\n不要放过——「精」查词典！\\n\\n①写出词性\\n\\n②写出【英文】释义\\n*英文释义——是这个词最准确的意思！\\n\\n③给自己写一个例句\\n\\n\\n考试重点总结——重在精字！\\n{每次考试都是宝贵的积累机会，每天积累一篇阅读里的\\n生词，都是在为最后的考试做准备}\\n使用活页本\\n\\n\\n"},{"locator":"第 68 页","text":"Chapter-11\\n \\n总结"},{"locator":"第 69 页","text":"\\n【优优学姐个人介绍】——高考裸分689/英语146\\n英语的分数是「捡」来的，每一分都要重视\\n高考英语146\\n💡\\n优优 清华学姐/清华本硕 /高考四川省前50\\n英语146 数学142 物理满分\\n\\n\\n可以看出：（英语的语言性+工具性）是我们学习的重点，需要注意英语学什么+考什么\\n想像优优学姐一样拥有好成绩——\\n\\n①、②、③、④、⑤、⑥、⑦、⑧、⑨、⑩、⑪、⑫、⑬、⑭、⑮、⑯、⑰、⑱、⑲、⑳\\n优优 清华学姐高考成绩查询页面\\n希望你也能收到这样的喜讯！\\n「抓住学习方法+备考方法」才能百战百胜！"}],"parse_status":"completed"}]`),ff={title:"国庆后收心：用三天把学习节奏拉回来",content:`直播主题：国庆后收心——用三天把学习节奏拉回来
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
直播后统计评论主题与有效问题；保存家长提问的去重版本。记录本场哪段互动最集中、哪份资料实际被引用；下次计划根据这些记录调整，不把案例中预设的问题数量当成本场真实表现。`},hf=`【原片拆解】
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
词卡、遮挡纸、手机录音、标准读音、两张时间卡；每个动作至少一个操作特写。此稿是结合课程整理的新稿，扩写部分不是雪梨老师原话，也不保证传播表现。`,mf={month:"2026-09",start:21e4,end:224e3,follows:16800,unfollows:2800},gf=[{topic:"开学适应与学习节奏",questions:126,videos:6,follows:5600,views:28e4},{topic:"月考复盘与错题管理",questions:98,videos:5,follows:4200,views:21e4},{topic:"英语背词与阅读",questions:76,videos:4,follows:3600,views:24e4},{topic:"亲子沟通与情绪",questions:64,videos:4,follows:2400,views:2e5},{topic:"校园生活",questions:18,videos:2,follows:1e3,views:1e5}],qa={live:ff,competitor:hf,followers:mf,topics:gf},_f="2026-09",yf=223977,bf=225254,wf=1569,kf=292,xf=1277,Sf=30,$f="视频号关注者增长详情数据.csv",Tf="./business-data/bf95dc5ff784ae87/视频号关注者增长详情数据.csv",Cf=3,Df={month:_f,start:yf,end:bf,follows:wf,unfollows:kf,net:xf,days:Sf,source:$f,uri:Tf,header_row:Cf},Af="指标与话题统计口径",Ef="净增粉丝=期末粉丝-期初粉丝=新增关注-取消关注。视频归因新增关注为视频带来的关注次数，不能直接当作账号净增粉丝。家长关心的话题以去重问题条数衡量，不代表所有家长的观点。播放转关注率=归因新增关注/播放次数。分析不证明因果。",Ka={title:Af,content:Ef},jo=["最近一个月涨了多少粉丝？","9月家长们最关心的话题是什么？我的视频中，哪种类型的话题涨粉最多？","@雪梨老师-英语背单词开窍.txt，拆解成爆款脚本给我，结合我过去英语讲课的知识，完成新的脚本","帮我生成下一次直播的脚本，关注10月国庆假期收心","把刚刚生成的脚本，加入到下周二晚的直播排期中"];function If(e){const n=i=>i.normalize("NFKC").replace(/\s+/g,"").replace(/(背单词开窍\.txt)(?:背单词开窍\.txt)+/g,"$1").replace(/[，,。.!！?？；;]/g,""),t=n(e),s=jo.find(i=>n(i)===t);return s?ll(s):null}function ll(e){return/热点|热搜|热门/.test(e)?"hotspots":/排期|排入|加入.*直播/.test(e)&&/脚本|刚刚|下周二/.test(e)?"schedule":/雪梨|竞品/.test(e)&&/拆|背单词|脚本/.test(e)?"competitor":/直播/.test(e)&&/收心|国庆|生成/.test(e)?"planning":/9月|九月/.test(e)&&/话题|关心|涨粉/.test(e)?"analysis":/最近一个月|上个月/.test(e)&&/粉|关注/.test(e)?"query":null}function co(e=new Date){const n=new Date(e.toLocaleString("en-US",{timeZone:"Asia/Shanghai"}));return n.setDate(n.getDate()-(n.getDay()+6)%7+8),n.getFullYear()+"-"+String(n.getMonth()+1).padStart(2,"0")+"-"+String(n.getDate()).padStart(2,"0")+"T20:00:00"}function Zi(e,n,t=[]){var s,i,o,r,a;if(e==="query"){const u=n.followers;return{text:`“最近一个月”使用数据覆盖的最近一个完整自然月：2026 年 9 月（9/1–9/30）。

净增粉丝 `+(u.follows-u.unfollows).toLocaleString()+` 人。
• 月初：`+u.start.toLocaleString()+` 人
• 月末：`+u.end.toLocaleString()+` 人
• 新增关注：`+u.follows.toLocaleString()+` 人
• 取消关注：`+u.unfollows.toLocaleString()+` 人

净增 = 月末 − 月初 = 新增关注 − 取消关注；两个计算结果一致。新增关注与净增是不同口径。[1]`,sources:[{number:1,title:"视频号关注者增长详情数据.csv",locator:"2026-09-01–2026-09-30 / 原始CSV第3行表头",uri:u.uri||"./cue-scenarios/followers.csv",text:JSON.stringify(u)}],summary:"已实际计算期末减期初，并用关注减取消关注交叉校验。"}}if(e==="analysis")return{text:`基于经营数据里的补充演示归因表，9月家长最关心的是“开学收心与适应”：共 386 次问题及评论提及，占 31.4%。其次是学习规划与时间管理（24.6%）和月考备考与错题复盘（19.0%）。[1]

涨粉最多的也是“开学收心与适应”：4 条视频共带来 486 个内容归因新增关注，占样本归因关注的 38.3%；播放关注率为 0.171%，在五类话题中最高。学习规划与时间管理排第二，归因新增关注 324 人。[1]

这份表是为产品演示补充的数据，不代表平台真实归因结果。账号9月实际新增关注仍以《视频号关注者增长详情数据.csv》的 1,569 人为准；演示表中的 1,269 人只表示可归因到这12条内容的关注样本。[2]`,sources:[{number:1,title:((s=n.topicAnalysis)==null?void 0:s.title)||"9月家长话题与视频涨粉归因（演示数据）.csv",locator:"话题归因 · 第2–7行",uri:(i=n.topicAnalysis)==null?void 0:i.uri,text:"开学收心与适应：提及386次，占31.4%；4条视频播放284,600，内容归因新增关注486，占38.3%，播放关注率0.171%。"},{number:2,title:((o=n.followerSource)==null?void 0:o.title)||"视频号关注者增长详情数据.csv",locator:"2026-09-01–2026-09-30",uri:(r=n.followerSource)==null?void 0:r.uri,text:"9月账号新增关注1,569人，取消关注292人，净增1,277人。"}],summary:"汇总演示归因表的家长关注占比、内容归因新增关注与播放关注率，并与账号总关注口径区分。"};if(e==="hotspots")return{text:`10月可以优先围绕国庆后学习节奏恢复做内容。[1]

建议三条连续选题：
1. 假期后第一晚：只整理明天必须完成的任务，减少同时启动的事项。
2. 开学后一周：从一份最近的错题找出具体卡点，用短练习回测。
3. 直播答疑：收集作息、作业启动、错题复盘三个方向的问题，现场演示三天行动表。

这些是结合节假日节点和课程资料的内容建议。官方日历可以核验节点，但不能证明它们是热搜榜第一，也不能预测涨粉效果。`,sources:[],summary:"将官方日历节点与知识库方法结合，区分可核验时间与内容选题建议。"};if(e==="planning"){const u=t.find(p=>p.subject==="数学"&&p.title==="数学课程ppt.pptx");return{text:n.live.content,draft:{...n.live,type:"live"},sources:u?[{number:1,title:u.title,locator:"产品课程 / 数学",uri:u.uri,text:(a=u.local_content)==null?void 0:a.slice(0,700)}]:[],artifacts:[{type:"script",label:"查看完整直播脚本"},{type:"document",label:"加入知识库"}],summary:"把收心主题拆成开场、判断卡点、三天行动、答疑与课程承接。"}}return e==="competitor"?{text:n.competitor,draft:{title:"背单词开窍：拼读与1+1+1复习",content:n.competitor,type:"video"},sources:[{number:1,title:"雪梨老师｜背单词开窍",locator:"用户录屏 / 0:00–0:05",uri:"https://northstar-copilot.com/competitor-videos/xueli-vocabulary.mp4",text:"第195集：只用这1招，让你背单词突然开窍；一找二切三拼；先找出元音字母（a e i o u）；元音前再找辅音。"},...t.filter(u=>{var p;return u.title==="英语课程ppt.pptx"&&((p=u.local_content)==null?void 0:p.trim())}).slice(0,1).map(u=>{var p;return{number:2,title:u.title,locator:"产品课程 / 英语原文",uri:u.uri,text:((p=u.sections)==null?void 0:p.filter(c=>c.locator==="第 1 页"||c.locator==="第 7 页").map(c=>c.locator+"："+c.text).join(`
`).slice(0,1400))||u.local_content.slice(0,900)}})],artifacts:[{type:"script",label:"查看脚本稿"},{type:"document",label:"加入知识库"}],summary:"已核验5秒录屏的主题与可见字幕，结合英语课程原文组织扩写稿。"}:null}const Mf={class:"cp-inner"},Of={class:"cue-head"},Rf=["disabled","title"],Pf={class:"cue-modes"},Lf=["onClick"],Nf={key:0,class:"cue-drawer-mini"},Ff=["onClick"],zf={key:0},Uf={key:1,class:"cue-drawer-mini"},jf={key:2,class:"script-preview"},Bf={key:0,class:"preview-error"},Vf=["disabled"],Xf=["data-message-index"],Wf={class:"role"},Hf={key:0,class:"route"},qf={key:1,class:"cue-process"},Kf={key:0},Gf={key:0},Yf={key:1},Qf={key:0,class:"mention-token"},Jf={key:3,class:"cue-source"},Zf=["title"],eh=["onClick"],nh=["href"],th={key:0},sh={key:4,class:"sent-attachments"},ih=["disabled","onClick"],lh={class:"message-toolbar"},oh=["onClick"],rh=["disabled","onClick"],ah=["aria-pressed","onClick"],uh=["aria-pressed","onClick"],ch=["onClick"],dh={key:6,class:"cue-actions"},ph=["onClick"],vh={key:7,class:"artifact-notice"},fh={key:0,class:"cp-msg ai"},hh={key:4,class:"latest-message-control"},mh={key:5,class:"message-notice",role:"status"},gh={class:"quick"},_h=["onClick"],yh={key:6,class:"question-waitlist","aria-live":"polite"},bh={key:0},wh=["onClick","aria-label"],kh=["onClick","aria-label"],xh={class:"attachment-list"},Sh=["src"],$h=["onClick"],Th={key:7,class:"upload-error"},Ch={class:"cp-input"},Dh=["disabled","title","aria-label"],Ah={class:"composer-actions"},Eh=["disabled","aria-expanded"],Ih={key:0},Mh={key:1,class:"upload-menu"},Oh={key:0,class:"mention-menu"},Rh=["onMousedown"],Ph={key:0,class:"mention-empty"},Ga="redcowork-replica-v2-cue-conversations",Lh={__name:"CopilotPanel",props:{mobile:{type:Boolean,default:!1}},setup(e){const n=K(!0),t=e,s=K(""),i=K(null),o=K(!1),r=K("analysis"),a=K(null),u=K([]),p=K([]),c=K(""),h=K([]),m=K(null),S=K(!1),M=K(""),A=K(!1),O=K(!1);function ee(T){m.value.accept=T?"image/png,image/jpeg,image/webp,image/gif,image/bmp":".xlsx,.xls,.pptx,.ppt,.csv,.tsv,.md,.txt,.pdf,.docx,.srt,.vtt",m.value.click(),A.value=!1}async function P(T){var I,fe;const x=[...((I=T.dataTransfer)==null?void 0:I.files)||T.target.files];T.dataTransfer||(T.target.value=""),O.value=!1,A.value=!1,M.value="",S.value=!0;try{for(const be of x){const Ze=/^image\/(png|jpeg|webp|gif|bmp)$/.test(be.type),Fe=Ze?"image":"file",ze=Ze?20:500;if(h.value.filter(pe=>pe.kind===Fe).length>=20){M.value+="最多20"+(Ze?"张图片":"个文件")+"；";continue}if(be.size>ze*1024*1024){M.value+=be.name+" 超过"+ze+" MB；";continue}if(!Ze&&!/\.(xlsx?|pptx?|csv|tsv|md|txt|pdf|docx|srt|vtt)$/i.test(be.name)){M.value+=be.name+" 格式暂不支持；";continue}try{let pe="",Se={};if(Ze){const ge=await createImageBitmap(be),Oe=Math.min(1,1600/Math.max(ge.width,ge.height)),Re=document.createElement("canvas");Re.width=Math.round(ge.width*Oe),Re.height=Math.round(ge.height*Oe),Re.getContext("2d").drawImage(ge,0,0,Re.width,Re.height),ge.close(),pe=Re.toDataURL("image/jpeg",.85)}else if(Se=await _l(be),!((fe=Se.local_content)!=null&&fe.trim()))throw new Error("没有提取到可读取内容");h.value.push({id:crypto.randomUUID(),kind:Fe,title:be.name,size:be.size,image:pe,local_content:Se.local_content||""})}catch(pe){M.value+=be.name+"："+pe.message+"；"}}}finally{S.value=!1}}let ne=!1;function ie(){try{return JSON.parse(localStorage.getItem(Ga)||"[]")}catch{return[]}}function Z(){if(g.authUser||ne||!g.chat.some(fe=>fe.role==="user"))return;a.value||(a.value="local-chat-"+crypto.randomUUID());const T=g.chat.find(fe=>fe.role==="user"),x={id:a.value,title:T.text.slice(0,48),mode:r.value,message_count:g.chat.length,updated_at:new Date().toISOString(),messages:JSON.parse(JSON.stringify(g.chat))},I=[x,...ie().filter(fe=>fe.id!==x.id)].slice(0,100);try{localStorage.setItem(Ga,JSON.stringify(I)),localStorage.setItem("redcowork-replica-v2-cue-active-chat",x.id),u.value=I}catch{Y.value="会话保存失败：本机存储空间不足，请复制重要内容"}}hn(()=>g.chat,Z,{deep:!0,flush:"sync"});const V=[{id:"demo-month-script",title:"11月短视频脚本.pdf",chunk_count:8},{id:"demo-live-review",title:"优优账号X直播记录【咨询+精讲课产品销售】.pdf",chunk_count:6},{id:"demo-live-sop",title:"直播SOP.pdf",chunk_count:7},{id:"demo-product-script",title:"精讲课塑品脚本.pdf",chunk_count:5},{id:"demo-wang",title:"汪舅舅-教育内容脚本转写.txt",chunk_count:4},{id:"demo-xueli",title:"雪梨老师-英语背单词开窍.txt",chunk_count:1}],E=K([...V]),z=K([]),G=K(null),W=K(null),q=ue(()=>[...new Map([...E.value,...g.demoKnowledgeDocuments,...g.courseDocuments,...g.businessDocuments].map(T=>[T.id,T])).values()]),he=K(0),xe=K(!1);function nn(T){T.key!=="Escape"&&(he.value=T.target.selectionStart??s.value.length,xe.value=!1)}const Je=ue(()=>{if(xe.value)return null;const T=s.value.slice(0,he.value),x=T.lastIndexOf("@");if(x<0)return null;const I=T.slice(x+1);return/[\n,，。]/.test(I)||q.value.some(fe=>I.trim()===fe.title)?null:{start:x,end:he.value,query:I.trim().toLowerCase()}}),ke=ue(()=>Je.value?q.value.filter(T=>T.title.toLowerCase().includes(Je.value.query)).slice(0,12):[]),Ee=ue(()=>q.value.filter(T=>s.value.includes("@"+T.title)));function Ie(T){const x=T.mentionedDocs||[T.mentionedDoc].filter(Boolean);if(!x.length)return[{text:T.text}];const I=[];let fe=T.text;for(;fe;){const be=x.map(Fe=>({title:Fe,index:fe.indexOf("@"+Fe)})).filter(Fe=>Fe.index>=0).sort((Fe,ze)=>Fe.index-ze.index);if(!be.length){I.push({text:fe});break}const Ze=be[0];Ze.index&&I.push({text:fe.slice(0,Ze.index)}),I.push({title:Ze.title}),fe=fe.slice(Ze.index+Ze.title.length+1)}return I}const We=[["analysis","分析"],["drilldown","下钻"],["breakdown","拆解"],["creative","创意"],["planning","排期"]],An={query:"analysis",analysis:"drilldown",competitor:"breakdown",planning:"creative",schedule:"planning",hotspots:"creative"},_n=ue(()=>g.activeView==="scripts"&&!!g.scriptContext),He=["本场直播内容总结？","和上一场数据对比，总结一下","这场直播画面如何？","人气高点、下单高点的话术如何沉淀为 SOP？","有什么风险点？"],En=ue(()=>_n.value?[]:g.activeView==="live-script"?Oo:g.activeView==="live-summary"?He:jo);function Ue(T){var x;return(x=T.steps)!=null&&x.length?T.steps:[{name:"处理记录 · execution_status",status:T.error?"failed":"done",execution:"记录状态",detail:T.routeLabel==="直播复盘分析"?"本地复盘结果；读取当前选择的直播记录及已有复盘资料。未调用服务端模型。":"此回答未附带详细执行日志。仅展示已有结果，不补造工具调用或耗时。"}]}function Mn(T){return T.sources||[]}function qe(T){return String(T||"").replace(/(?:Cue 暂时无法回答：\s*)?Failed to fetch|NetworkError[^\n]*|Load failed/gi,"连接暂时中断，问题和引用已保留。请点击重新生成重试。")}function kn(T){return T.error?qe(T.text):T.text}function On(T){return T.web?!1:/雪梨/.test(T.title||"")||!!T.document_id||/\.(pptx?|pdf|docx?|xlsx?|csv|txt|md)$/i.test(T.title||"")}function Fn(T){const x=/雪梨/.test(T.title||"");g.wikiDocumentRequest={id:x?"demo-xueli-video":T.document_id,title:x?"雪梨老师-英语背单词开窍.mp4":T.title,uri:T.uri},g.activeView="wiki"}const Y=K(""),U=K(JSON.parse(localStorage.getItem("redcowork-replica-v2-answer-feedback")||"{}"));function b(T){let x=0;for(const I of T.text||"")x=x*31+I.charCodeAt(0)|0;return String(x)}function D(T,x){const I=b(T);U.value[I]=U.value[I]===x?null:x,localStorage.setItem("redcowork-replica-v2-answer-feedback",JSON.stringify(U.value))}async function L(T){try{await navigator.clipboard.writeText(T.text||""),Y.value="已复制"}catch{Y.value="复制失败，请检查浏览器剪贴板权限"}setTimeout(()=>Y.value="",2500)}function $(T){const x=g.chat.slice(0,T).reverse().find(I=>I.role==="user");x&&!o.value&&bt(x.text)}async function w(T){if(o.value||!T.resumeRequest)return;o.value=!0,T.canContinue=!1;const x=T.resumeRequest;try{const I=await(g.authUser?aa:ua)(x.question,x.context,x.history,{...x.options,continuation:!0});g.chat.push({role:"ai",text:I.answer,routeLabel:I.route_label||C[I.route],sources:I.sources||[],steps:I.steps||[],artifacts:I.artifacts||[]})}catch(I){T.text="Cue 暂时无法回答："+I.message,T.canContinue=!!I.canContinue}finally{o.value=!1,ye()}}async function j(T){try{navigator.share?await navigator.share({title:"NorthStar · Cue 回答",text:T.text}):(await navigator.clipboard.writeText(`NorthStar · Cue 回答

`+T.text),Y.value="分享内容已复制，可粘贴发送")}catch(x){x.name!=="AbortError"&&(Y.value="分享失败，请使用复制")}setTimeout(()=>Y.value="",3e3)}const C={structured_query:"结构化数据查询",hybrid_analysis:"指标计算＋知识检索",hybrid_planning:"历史数据＋竞品内容＋脚本资料",competitor_rewrite:"竞品拆解＋账号定位＋脚本生成",source_lookup:"来源核验",creative_generation:"创意生成",content_breakdown:"竞品拆解",metric_drilldown:"指标下钻",knowledge_qa:"知识库检索"};function X(T,x="",I=null){const fe=T.title||"当前脚本",be=(T.points||[]).filter(Boolean),Ze=/1000|千字|10\s*分钟|十分钟|长稿|展开|详细|逐字/.test(x),Fe=I?`

资料引用：@${I.title}，可在知识库中继续核对和补充。`:"",ze=be[0]||"把家长的焦虑转成今天能做的一步";return Ze?`已按《${fe}》生成约 1000 字、10 分钟的可录制长稿。

【内容目标】让家长从“着急催促”转向“先判断问题、再陪孩子做一步”。核心观点：${ze}。

【标题 / 封面】
标题：${fe}
封面：别急着催，先把这 3 件事做对
副标题：把学习焦虑拆成今天就能完成的一步

【0:00–0:40｜冲突开场】
【口播】“孩子最近状态一波动，很多家长第一反应就是：是不是不够努力？是不是得赶紧补？可越急着催，孩子越容易把学习当成一场躲不过的追赶。今天不讲大道理，只讲一个回家就能做的办法。”
【画面】正面近景，手拿试卷；第一秒直视镜头。
【字幕】先看清问题，再决定怎么帮。

【0:40–2:00｜建立共鸣】
【口播】“你可能见过这样的场景：家长问‘怎么又错了’，孩子低头不说话；再问‘别人都会，为什么你不会’，孩子把本子一合。这个时候，他听到的不是帮助，而是‘我又让你失望了’。所以先把问题换成：这次最卡的是不会、会但错，还是做不完？”
【画面】试卷局部、错题本、亲子并坐的 B-roll。

【2:00–4:00｜解释原因】
【口播】“不会，说明知识点没有接上；会但错，往往是审题、步骤和检查习惯；做不完，更多是时间分配和题目顺序。把所有错题都叫成‘不认真’，孩子只会更乱。分清这三类，才知道第一步从哪儿开始。”
【字幕】不会 / 会但错 / 做不完。

【4:00–7:00｜三步执行】
【口播】“第一步，今晚花十分钟，把最近一张卷子里的典型错题标成三类，不要求全部订正。第二步，接下来七天每天只处理一类：今天只看会但错，写清楚是看漏条件、计算还是步骤。第三步，家长每天只问一句：今天哪类题比昨天少错一点？这个问题不是逼孩子报数字，而是让他看见自己在往前走。”
【画面】白板依次写：10 分钟分类、每天一类、一句复盘。

【7:00–8:40｜示范对话】
【口播】“你可以说：‘我不急着看总分，我们先找一题你明明会却做错的。你觉得是哪里断了？’如果孩子说不知道，就接着问：‘是没看见条件，还是算到一半乱了？’他能说出原因时，你只要说：‘好，今天我们就只练这个。’”
【字幕】不评价，先一起定位。

【8:40–9:30｜避坑提醒】
【口播】“尽量少说‘你怎么又这样’、‘别人都可以’、‘你就是不够努力’。替换成：‘我们先找一个能改的地方’、‘今天先把这一类做好’、‘明天再看下一步’。”

【9:30–10:00｜CTA】
【口播】“今晚就拿一张最近的作业或试卷，先做十分钟分类。想要七天复盘表，评论区回复‘复盘’，我把每天怎么问、怎么记整理给你。”
【字幕】回复「复盘」领取 7 天行动表。${Fe}`:`已把《${fe}》细化成可直接拍摄的 60 秒方案。

【先做判断】这条内容要让家长先认出自己的场景，再交付一个能马上执行的动作。核心观点是：${ze}。

【标题与封面】
标题：${fe}
封面主句：别急着催，先看清这 3 类问题
封面副句：把大焦虑变成小行动

【0–3 秒｜钩子】
口播：“孩子最近状态不稳，先别急着催。你可能不是没帮上忙，而是第一步就问错了。”
画面：正面近景、手持试卷。
字幕：先别催，先找对问题。

【3–12 秒｜场景】
口播：“很多家长一看到错题就问怎么又错，但孩子真正卡住的，可能是不会、会但错，或者根本做不完。”
画面：试卷局部依次高亮三类错因。
字幕：不会 / 会但错 / 做不完。

【12–35 秒｜方法】
口播：“今晚只做三步：第一，给错题分类；第二，未来七天每天只改一类；第三，每天只问一句——今天哪类题比昨天少错一点？”
画面：白板逐项出现。
字幕：10 分钟分类 → 每天一类 → 一句复盘。

【35–50 秒｜共情】
口播：“孩子需要的不是再听一次你要努力，而是知道今天具体从哪里开始。”
画面：家长和孩子一起圈出一题。
字幕：把焦虑变成第一步。

【50–60 秒｜行动】
口播：“今晚就试一次。想要七天复盘表，评论区回复‘复盘’，我把每天怎么做发给你。”
画面：回到正面镜头，手指评论区。
字幕：回复「复盘」领取行动表。${Fe}`}function F(T=""){const x=g.scriptContext;if(!x)return null;const I=F2(x);if(I)return I;const fe=X(x,T);return{text:fe,draft:{title:(x.title||"当前脚本")+" · 优化稿",content:fe},artifacts:[{type:"script",label:"查看优化稿并加入知识库"}],routeLabel:"当前脚本优化",sources:[{title:x.title||"当前脚本",locator:"当前打开的脚本",text:"基于当前标题、可见脚本和方法要点编辑。"}],steps:[{name:"意图路由",status:"done",execution:"本地执行",detail:"当前脚本优化"},{name:"读取当前脚本",status:"done",execution:"本地执行",detail:x.title||"当前脚本"},{name:"生成完整口播与分镜",status:"done",execution:"本地编辑模板 · 未调用远程模型",detail:"按 60 秒口播结构生成可直接拍摄的优化稿。"}],traceMode:"脚本编辑流程"}}function B(){!g.scriptContext||o.value||bt("优化当前脚本："+g.scriptContext.title+"。请忠于原主题，给出完整优化稿、具体修改理由、口播和分镜，不要只给通用建议。")}const ae=K(!1),le=K(null);function me(T){s.value=T,ae.value=!0,G.value=q.value.find(I=>T.includes("@"+I.title))||null;const x=ll(T);x&&(r.value=An[x]),Ut(()=>{var I,fe;(I=le.value)==null||I.focus(),he.value=s.value.length,(fe=le.value)==null||fe.setSelectionRange(he.value,he.value)})}const _e=K(null),Te=K(0);function ye(){Ut(()=>{const T=i.value;if(!T)return;const x=_e.value===null?null:T.querySelector('[data-message-index="'+_e.value+'"]');Te.value=0,x?T.scrollTop+=x.getBoundingClientRect().top-T.getBoundingClientRect().top-12:T.scrollTop=T.scrollHeight})}function Ne(){_e.value=null,Te.value=0,Ut(()=>{i.value&&i.value.scrollTo({top:i.value.scrollHeight,behavior:"smooth"})})}function Ce(){return g.authUser?!0:(g.loginOpen=!0,!1)}function je(T){return{role:T.role==="user"?"user":"ai",text:T.content,route:T.route,routeLabel:T.route_label||C[T.route],sources:T.sources||[],steps:T.steps||[],artifacts:T.artifacts||[]}}async function pn(){if(!g.authUser){await Io(),await Mo(),E.value=[...V,...g.courseDocuments,...g.businessDocuments,...g.demoKnowledgeDocuments];return}try{const[T,x,I]=await Promise.all([Hd(),Gd(),rc()]);u.value=T.conversations||[],p.value=x.tasks||[],E.value=[...V.filter(fe=>!(I.documents||I.files||[]).some(be=>be.title===fe.title)),...I.documents||I.files||[]],z.value=I.spaces||[]}catch{E.value=[...V]}}async function xn(){if(o.value){Y.value="正在生成回答，完成后可新建会话";return}try{if(!g.authUser)Z(),ne=!0,a.value=null,g.chat=[],localStorage.removeItem("redcowork-replica-v2-cue-active-chat");else{const T=await Kd({title:"新会话",mode:r.value});a.value=T.id,g.chat=[],await pn()}Rn.value=[],h.value=[],A.value=!1,M.value="",W.value=null,s.value="",c.value="",_e.value=null,Te.value=0,g.chat.push({role:"ai",text:"新会话已开始。你想分析什么，或生成什么内容？可以输入 @ 引用知识库资料。"}),Y.value="已新建会话",setTimeout(()=>Y.value="",2500),Ut(()=>{var T;(T=le.value)==null||T.focus(),i.value&&(i.value.scrollTop=0)})}catch(T){Y.value="新建会话失败："+T.message}finally{ne=!1}}async function zn(T){if(!o.value){if(!g.authUser){Z();const x=ie().find(I=>I.id===T);if(!x)return;ne=!0,a.value=T,r.value=x.mode,g.chat=x.messages,localStorage.setItem("redcowork-replica-v2-cue-active-chat",T),W.value=null,s.value="",c.value="",ne=!1,ye();return}if(Ce()){o.value=!0;try{const x=await qd(T);a.value=T,r.value=x.conversation.mode,g.chat=(x.messages||[]).map(je),c.value="",ye()}finally{o.value=!1}}}}function _t(){g.chat.length||g.chat.push({role:"ai",text:"我是 Cue。选择下方五个问题，查看意图路由、数据计算、知识检索、内容产物与排期执行。可展开回答中的过程记录，查看工具执行与来源引用。"})}function Sn(T){return JSON.stringify({current_script:g.activeView==="scripts"?g.scriptContext:null,competitor_comparison:g.benchAnalysisContext,current_live_script:g.activeView==="live-script"?g.liveScriptContext:null,current_live_review:g.activeView==="live-summary"?g.liveReviewContext:null,referenced_documents:(Array.isArray(T)?T:[T].filter(Boolean)).map(x=>({title:x.title,text:(x.local_content||"").slice(0,Math.min(16e3,Math.floor(26e3/Math.max(1,Array.isArray(T)?T.length:1))))})),account_kpis:(g.kpis||[]).map(x=>({label:x.label,value:x.value,delta:x.delta})),recent_live:(g.liveSessions||[]).slice(0,8).map(x=>({date:x.d,title:x.title,views:x.view,peak:x.peak,gmv:x.gmv})),planned_content:(g.planningTasks||[]).slice(0,16).map(x=>({title:x.title,planned_at:x.planned_at,type:x.type}))})}function tn(T){var x;(x=T.draft)!=null&&x.content&&localStorage.setItem("redcowork-replica-v2-latest-cue-script",JSON.stringify({...T.draft,document:T.knowledgeDocument||null}))}function yt(){const T=g.chat.slice(0,-2).slice().reverse().find(x=>{var I,fe;return!x.error&&(((I=x.draft)==null?void 0:I.content)||((fe=x.artifacts)==null?void 0:fe.some(be=>be.type==="script")))});if(T){const x=T.draft||{title:"Cue 生成脚本",content:T.text,type:"video"},I=T.knowledgeDocument;return I?{...x,title:I.title,content:I.local_content||x.content,document:I}:x}try{return JSON.parse(localStorage.getItem("redcowork-replica-v2-latest-cue-script")||"null")}catch{return null}}function $t(T){return T.document||g.demoKnowledgeDocuments.find(x=>x.title===T.title||x.local_content===T.content)}function xs(T){const x=$t(T);return(x?"@"+x.title+`

`:"")+((x==null?void 0:x.local_content)||T.content)}async function Gt(T,x){const I={query:"结构化数据查询",analysis:"指标分析",competitor:"竞品拆解",planning:"内容规划",schedule:"加入内容排期",hotspots:"热点规划"},fe={role:"ai",text:"",routeLabel:I[x],traceMode:"思考过程",steps:[],sources:[]};g.chat.push(fe);const be=g.chat[g.chat.length-1];o.value=!0,ye();const Ze=performance.now();async function Fe(ze,pe,Se="实际执行"){const ge={name:ze,status:"running",execution:Se,detail:""};be.steps.push(ge);const Oe=be.steps.length-1;await Ut(),ye();const Re=performance.now();try{const Ge=await pe();Object.assign(be.steps[Oe],{status:"done",detail:Ge,elapsed:Math.round(performance.now()-Re)})}catch(Ge){throw Object.assign(be.steps[Oe],{status:"failed",detail:Ge.message}),Ge}}try{await Fe("意图路由 · classify",()=>"本轮问题："+T+`
匹配任务：`+I[x]+"；打开的脚本不会覆盖本轮意图。");const ze={query:"解析统计月份 → 读取增长明细 → 只读SQL汇总 → 交叉核对 → 汇总答案与引用",analysis:"读取9月话题归因表 → 汇总关注占比与归因关注 → 联网核验开学期背景 → 区分内部演示数据与外部事实 → 汇总答案与引用",competitor:"定位@文件 → 核验原片字幕 → 检索英语课程 → 拆解钩子/演示/交付 → 编写新稿并绑定引用",planning:"解析月份与直播目标 → 联网核验节点 → 检索课程与既有资料 → 调用直播脚本技能 → 整理完整产物",schedule:"解析上一份脚本 → 解析北京时间 → 写入排期 → 查询任务核验",hotspots:"拆解热点需求 → 联网搜索官方节点 → 核验来源日期 → 检索账号课程 → 形成选题建议"};await Fe("任务规划 · planner",()=>ze[x],"规则规划");let pe;if(await Fe("脚本工具 · load_case",async()=>{if(pe=structuredClone(qa),x==="query"){const Se=await fetch("./business-data/metrics.json");if(!Se.ok)throw new Error("增长数据读取失败");pe.followers=await Se.json()}return x==="query"?"载入用户增长明细口径；接下来执行SQL汇总。":"读取当前任务对应的内容产物与资料索引。"}),x==="schedule"){const Se=q.value.find(Ge=>T.includes("@"+Ge.title)),ge=Se!=null&&Se.local_content?{title:Se.title,content:Se.local_content,document:Se,type:/直播/.test(T)?"live":"video"}:yt();await Fe("上下文工具 · resolve_artifact",()=>{if(!(ge!=null&&ge.content))throw new Error("还没有可引用的脚本。请先生成一份脚本，或 @ 选择知识库中的脚本文档。");return"引用最近生成的脚本："+ge.title+"；保留完整正文。"});const Oe=co();let Re;await Fe("排期工具 · save_planning",async()=>{var k;const Ge={type:/直播/.test(T)?"live":ge.type||"video",title:ge.title,planned_at:Oe,notes:xs(ge),document_id:(k=$t(ge))==null?void 0:k.id};return Re=g.authUser?{...await Eo(Ge),created:!0}:eo(Ge),(Re.created?"创建任务":"已存在相同任务，跳过重复创建")+"；时间 "+Oe.replace("T"," ")+"（北京时间）；"+(g.authUser?"保存到账户排期。":"写入本地持久排期。")}),await Fe("写入核验 · verify",()=>{if(!g.planningTasks.some(Ge=>Ge.id===Re.task.id))throw new Error("排期核验失败");return"任务 "+Re.task.id+" 已在排期列表，刷新后可恢复。"}),be.text="已把《"+ge.title+"》加入 "+Oe.slice(0,10)+`（下周二）20:00 的直播排期。

保存内容：完整直播脚本、直播类型、标题与时间。可在内容排期查看并修改。`,be.planningId=Re.task.id}else{let Se,ge,Oe;if((x==="analysis"||x==="planning"||x==="hotspots")&&await Fe("联网搜索 · websearch",async()=>{var k;const Re=x==="analysis"?"2026年9月 秋季开学 家长 适应期":"2026 10月 国庆 放假安排 收心",Ge=x==="analysis"?"./cue-scenarios/september-external.json":"./cue-scenarios/websearch.json";try{const y=await fetch("https://northstar-copilot.com/local-media/websearch?q="+encodeURIComponent(Re),{signal:AbortSignal.timeout(1e4)});if(!y.ok)throw new Error("实时搜索不可用");if(Oe=await y.json(),!((k=Oe.items)!=null&&k.length))throw new Error("实时搜索无结果")}catch(y){const re=await fetch(Ge);if(!re.ok)throw y;Oe=await re.json(),be.steps[be.steps.length-1].execution="已核验联网资料缓存"}return"查询："+Oe.query+`
来源：`+Oe.items.map(y=>y.title+`
`+y.uri).join(`
`)+`
读取方式：`+(Oe.mode==="live"?"本轮联网检索":"2026-10-10核验的官方资料缓存；不是实时热搜榜")}),x==="query"&&await Fe("数据API · SQL_query",async()=>{const Re=await fetch("https://northstar-copilot.com/local-media/query?month="+pe.followers.month);if(!Re.ok)return be.steps[be.steps.length-1].execution="已核验SQL计算结果","本轮SQL服务不可用，读取导入时已核验的30天统计："+JSON.stringify(pe.followers);const Ge=await Re.json();if(Ge.result.days!==30||Ge.result.net!==pe.followers.end-pe.followers.start)throw new Error("SQL汇总与月末月初余额不一致");return Object.assign(pe.followers,Ge.result),`只读SQLite查询：
`+Ge.sql+`
结果：`+JSON.stringify(Ge.result)}),x==="competitor"&&await Fe("来源核验 · resolve_video",async()=>{const Re=await fetch("./demo-docs/雪梨老师-英语背单词开窍.txt");if(!Re.ok)throw new Error("引用的字幕文件不可读取");return await Re.text()}),await Fe(x==="query"||x==="analysis"?"数据工具 · aggregate":"知识库工具 · retrieve",async()=>(await Io(),x==="query"?(Se=Zi(x,pe,g.courseDocuments),"筛选 month="+pe.followers.month+"；end-start="+(pe.followers.end-pe.followers.start)+"；follows-unfollows="+(pe.followers.follows-pe.followers.unfollows)+"。"):x==="analysis"?(await Mo(),pe.topicAnalysis=g.businessDocuments.find(Re=>Re.id==="business-demo-2026-09-topic-attribution"),pe.followerSource=g.businessDocuments.find(Re=>Re.title==="视频号关注者增长详情数据.csv"),Se=Zi(x,pe,g.courseDocuments),"读取经营数据 / "+pe.topicAnalysis.title+"：5类话题、1,229次问题与评论提及、12条视频、1,269个内容归因新增关注；同时读取账号9月新增关注口径。"):x==="hotspots"?"按假期节点与账号教学方向检索课程原文；避免把月考日期当作统一全国日程。":x==="competitor"?"已读取用户上传的雪梨背单词录屏（5.35秒）：9月28日，第195集，一找二切三拼、先找元音、再找辅音。检索产品课程 / 英语原文；扩写与原片字幕分开展示。":"检索 产品课程 / 数学课程ppt.pptx：限时训练、错题整理与刷题方法；读取原文件提取正文。")),(x==="query"||x==="analysis")&&await Fe("查知识库 · metric_definitions",async()=>{const Re=await fetch("./cue-scenarios/definitions.json");if(!Re.ok)throw new Error("指标口径资料读取失败");return ge=await Re.json(),ge.content}),Se||(Se=Zi(x,pe,g.courseDocuments)),ge){const Re=Se.sources.length+1;Se.sources.push({number:Re,title:ge.title,locator:"知识口径文档",uri:"./cue-scenarios/definitions.json",text:ge.content}),Se.text+=`

统计口径依据：[`+Re+"]。"}if(Oe){const Re=[];for(const Ge of Oe.items.slice(0,x==="analysis"?2:1)){const k=Se.sources.length+1;Re.push(k),Se.sources.push({number:k,title:Ge.title,locator:Oe.mode==="live"?"本轮联网检索":"已核验官方资料缓存",uri:Ge.uri,text:Ge.text})}x==="planning"&&(Se.text+=`

直播节点依据：[`+Re[0]+"]。"),x==="analysis"&&(Se.text+=`

外部背景核验：教育部将开学前后界定为教学准备和心理状态调试期，相关报道也把开学第一个月视为适应期。这支持“开学适应”作为9月内容背景，但不用于证明内部31.4%的占比；该比例仍只来自演示归因表。`+Re.map(Ge=>"["+Ge+"]").join("、")+"。")}(x==="planning"||x==="competitor"||x==="hotspots")&&await Fe("技能调用 · "+(x==="competitor"?"video_breakdown":x==="hotspots"?"topic_planning":"live_script"),()=>Se.summary+`
输出组织：`+(x==="competitor"?"原片可核验内容、课程依据、新稿口播与镜头。":"目标、开场、方法、示范、互动与执行。"),"本地内容模板"),await Fe("大模型 · summarize",()=>Se.summary,"预设生成结果 · 未调用 HY3"),await Fe("结果工具 · citations_and_artifact",()=>"绑定 "+Se.sources.length+" 个引用；"+(Se.draft?"生成完整直播脚本，可继续加入排期。":"输出与本轮任务对应的答案。")),Object.assign(be,Se),tn(be)}be.elapsed=Math.round(performance.now()-Ze)}catch(ze){be.text=ze.message,be.error=!0}finally{o.value=!1,ye()}}const Rn=K([]),Gn=K(!1);async function Ss(){if(!(Gn.value||o.value||!Rn.value.length)){Gn.value=!0;try{for(;Rn.value.length;){const T=Rn.value.shift();try{await Fs(T.text,T.attachments,T.context)}catch(x){g.chat.push({role:"ai",error:!0,text:"任务执行失败："+x.message,sources:[],steps:[]})}}}finally{Gn.value=!1}}}hn(o,T=>{T||Ut(Ss)});function bt(T){const x=(T||s.value).trim()||(h.value.length?"请分析上传的资料":"");if(!x||S.value)return;const I=h.value.slice(),fe=[...q.value.filter(be=>x.includes("@"+be.title)),...I.filter(be=>be.kind==="file")];Rn.value.push({id:crypto.randomUUID(),text:x,attachments:I,context:Sn(fe)}),h.value=[],s.value="",G.value=null,xe.value=!0,Ss()}hn(()=>g.cueRequest,T=>{T!=null&&T.question&&(bt(T.question),g.cueRequest=null)});async function Fs(T,x,I){var k,y,re,$e,Ke,vn,Be,R;A.value=!1,_e.value=ae.value?g.chat.length:null,ae.value=!1,Te.value=0;const fe=[...q.value.filter(J=>T.includes("@"+J.title)),...x.filter(J=>J.kind==="file")],be=fe[0],Ze=x.length?null:If(T),Fe=!!Ze;if(!Fe){for(const J of fe)if(!J.local_content&&/\.(txt|md)$/i.test(J.title||""))try{const de=await fetch(J.uri||"./demo-docs/"+encodeURIComponent(J.title));if(de.ok){const Ve=await de.text();/^\s*<!doctype html/i.test(Ve)||(J.local_content=Ve)}}catch{}}if(fe.length)try{const J=JSON.parse(I);J.referenced_documents=fe.map(de=>({title:de.title,text:(de.local_content||"").slice(0,16e3)})),I=JSON.stringify(J)}catch{}const ze=fe.reduce((J,de)=>J.replaceAll("@"+de.title,""),T).trim(),pe=/上一场|上场|对比/.test(ze)?1:/SOP|沉淀|话术.*流程/i.test(ze)?3:/风险|掉人|下滑/.test(ze)?4:/画面|光线|服装/.test(ze)?2:/总结|概括|内容摘要/.test(ze)?0:-1,Se=/时长|播了多久|直播多久|多长时间/.test(ze)?["直播时长","raw_duration"]:/观看人数|多少人看/.test(ze)?["观看人数","view"]:/峰值|最高在线/.test(ze)?["最高在线人数","peak"]:/成交额|成交金额|GMV/i.test(ze)?["成交金额","gmv"]:null,ge=pe>=0?He[pe]:ze,Oe=Ze||ll(T),Re=g.chat.slice(-10).filter(J=>!J.error).map(J=>({role:J.role==="user"?"user":"assistant",content:(J.text||"").slice(0,4e3)}));if(g.chat.push({role:"user",text:T,attachments:x.map(J=>({title:J.title,kind:J.kind})),mentionedDoc:be==null?void 0:be.title,mentionedDocs:fe.map(J=>J.title)}),g.activeView==="live-script"&&Oo.includes(T)&&!x.length){let J;try{J=JSON.parse(I).current_live_script}catch{}const de=D2(T,J);if(de!=null&&de.schedule){o.value=!0;try{const Ve={type:"live",title:de.title,planned_at:co(),notes:de.content},$n=g.authUser?await Eo(Ve):eo(Ve);if(!((k=$n.task)!=null&&k.id)||!g.planningTasks.some(lt=>lt.id===$n.task.id))throw new Error("未确认任务写入，请检查排期列表");g.chat.push({role:"ai",text:($n.local?"云端暂未同步，已在本地保存《":"已将《")+de.title+"》加入 "+Ve.planned_at.replace("T"," ")+"（北京时间）的直播排期。请到内容排期核对。",planningId:$n.task.id,routeLabel:"加入内容排期",sources:[de.source],steps:[{name:"读取当前直播脚本",status:"done",detail:de.title},{name:"保存并核对排期任务",status:"done",detail:$n.task.id}]})}catch(Ve){g.chat.push({role:"ai",error:!0,text:"排期未完成："+Ve.message,steps:[],sources:[de.source]})}finally{o.value=!1}}else de&&(g.chat.push({role:"ai",...de}),tn(de));ye();return}if(g.activeView==="live-summary"&&pe>=0&&!fe.length&&!x.length){let J;try{J=JSON.parse(I).current_live_review}catch{}const de=J==null?void 0:J.session;let Ve="请先选择一场直播。";if(de){const Cn="当前复盘："+de.d+" · "+de.title+`。

`,Jn=((y=de.visual)==null?void 0:y.replay_frames)||[];if(ge===He[0]){const yn=(((re=J.review)==null?void 0:re.script)||[]).map(ot=>ot.k+"："+ot.v).join(`
`);Ve=Cn+`**经营表现**
观看人数：`+de.view+"；在线峰值："+de.peak+"；成交金额："+de.gmv+`。[1]

**本场内容与关键节点**
`+(yn||"本场主题："+de.title+"。")+`

`+(Jn.length?Jn.map(ot=>"### "+ot.label+`
话题：`+ot.topic+`
`+(ot.quote?"已记录话术：“"+ot.quote+`”
`:"")+ot.analysis).join(`

`):"尚未绑定完整逐字稿或关键画面，不能仅凭经营表格还原所有讲解。")+`

**下一场可执行建议**
`+(Jn.length?"保留有明确阶段判断的方法讲解；用真实评论承接互动；缩短连续讲解，在卡点插入理解检查。":"补充逐字稿或关键截图后，核对表现变化附近的话题和互动。")+`

说明：节点是回看线索，不直接证明成交或掉人原因。在线曲线截图估读与原报表峰值应区分口径。`}else if(ge===He[1]){const yn=g.liveSessions.filter(Bn=>Bn.d<de.d).sort((Bn,at)=>at.d.localeCompare(Bn.d))[0],ot=Bn=>Bn==null||String(Bn).trim()===""?null:Number(String(Bn).replace(/[^\d.-]/g,"")),Us=(Bn,at)=>{const Nt=ot(de[at]),Ct=ot(yn[at]);if(!Number.isFinite(Nt)||!Number.isFinite(Ct))return Bn+"：本场 "+(de[at]??"未记录")+"；上一场 "+(yn[at]??"未记录")+"，缺失数据暂不计算变化。";const Vn=Nt-Ct;return Bn+"："+Ct.toLocaleString()+" → "+Nt.toLocaleString()+"，"+(Vn>0?"增加 ":Vn<0?"减少 ":"持平 ")+Math.abs(Vn).toLocaleString()+(Ct?"（"+(Vn>0?"+":"")+(Vn/Ct*100).toFixed(1)+"%）":"（上一场为0，不计算增长率）")};Ve=Cn+(yn?"对比上一场："+yn.d+" · "+yn.title+`。

`+[["观看人数","view"],["在线峰值","peak"],["成交金额（元）","gmv"]].map(([Bn,at])=>Us(Bn,at)).join(`
`)+`

以上为逐场数据对比，指标变化需要结合两场话题与直播时长进一步判断。`:"暂无更早场次，无法进行上一场对比。")}else ge===He[2]?Ve=Cn+(Jn.length?"已绑定本场关键画面："+Jn.map(yn=>yn.label+"；话题："+yn.topic).join(`
`)+`

画面采用正面书桌口播、暖色背景和纸笔道具，重点信息位于顶部；建议在手机预览中检查字幕与福利提示的遮挡。`:"这场尚未提供可核验的回放画面，请先补充本场截图。"):ge===He[3]?Ve=Cn+Jn.filter(yn=>yn.kind!=="audience_drop").map(yn=>yn.label+`
`+(yn.quote?"金句：“"+yn.quote+`”
`:"")+yn.analysis).join(`

`)+`

建议 SOP：提出具体学习问题 → 给出阶段判断和金句 → 回应观众问题 → 匹配产品内容 → 自然介绍适用范围 → 直播后核验成交与留存。`:Ve=Cn+((($e=Jn.find(yn=>yn.kind==="audience_drop"))==null?void 0:$e.analysis)||"本场没有绑定风险节点证据，暂无法判断具体掉人原因。")}const $n=ge===He[3];$n&&(r.value="creative");const lt=de?[{number:1,title:de.d+" 直播数据与复盘记录",locator:"当前选中场次",uri:de.source_uri,text:"观看 "+de.view+"；在线峰值 "+de.peak+"；成交 "+de.gmv},...(((Ke=de.visual)==null?void 0:Ke.replay_frames)||[]).map((Cn,Jn)=>({number:Jn+2,title:Cn.label,locator:"用户提供的本场截图",uri:Cn.url,text:Cn.topic+"；"+(Cn.quote||"")+"；"+Cn.analysis}))]:[];if(ge===He[1]&&de){const Cn=g.liveSessions.filter(Jn=>Jn.d<de.d).sort((Jn,yn)=>yn.d.localeCompare(Jn.d))[0];Cn&&lt.push({number:lt.length+1,title:Cn.d+" 上一场直播数据",locator:"上一场对比依据",uri:Cn.source_uri,text:"观看 "+Cn.view+"；峰值 "+Cn.peak+"；成交 "+Cn.gmv})}g.chat.push({role:"ai",text:Ve,routeLabel:$n?"创意 · SOP方案":"直播复盘分析",sources:lt,artifacts:$n?[{type:"script",label:"查看完整 SOP"},{type:"document",label:"加入知识库"}]:[],draft:$n?{title:(de==null?void 0:de.d)+" 直播互动与自然塑品 SOP",content:Ve,type:"document"}:void 0,steps:[{name:"场次定位 · resolve_session",status:"done",execution:"本地执行",detail:de?de.d+" · "+de.title:"未选择场次"},{name:ge===He[1]?"逐场指标计算 · compare":"复盘资料读取 · retrieve",status:"done",execution:"本地执行",detail:ge===He[1]?"按日期查找前一场，比较观看人数、在线峰值和成交金额；上一场为0时不计算增长率。":"读取当前场次复盘文本和已绑定截图节点。"},{name:"结果组织 · summarize",status:"done",execution:"本地模板 · 未调用模型",detail:"依据本场资料组织回答，保留缺失数据和统计口径说明。"}]}),ye();return}if(/请详细分析清华优优与.+的竞品差异/.test(T)&&!x.length){const J=(vn=T.match(/请详细分析清华优优与(.+?)的竞品差异/))==null?void 0:vn[1];if(J!=null&&J.includes("杨奇函")){r.value="analysis",g.chat.push({role:"ai",...Ha()}),ye();return}const de=I.competitor_comparison,Ve=((Be=de==null?void 0:de.peer)==null?void 0:Be.name)===J,$n=Ve?de.content_structure:null;r.value="analysis",g.chat.push({role:"ai",routeLabel:"竞品分析",text:`## 清华优优 × ${J}：竞品差异与下一步

**建议优先测试“明确问题 → 方法演示 → 可执行清单”，用家长配合与直播答疑形成自己的内容路径。**

### 资料事实与边界
清华优优在工作台中的定位是高中学习方法、家长沟通与直播答疑。${Ve?"当前对比页的数据为演示资料，不能作为已核验的真实经营成绩。":"当前没有与该账号名称一致的完整对比资料；不套用其他账号的数据或履历。"}
${Ve?de.comparison.map(lt=>`- ${lt[0]}：清华优优 ${lt[1]}；${J} ${lt[3]}（演示数据）`).join(`
`):""}

### 内容结构与可借鉴方法
${$n?`当前页面展示：清华优优采用“${$n.own}”；对标示例采用“${$n.peer}”。这是页面示例结构，仍需原片核验。`:"尚未核验该账号原片，不推断其具体话术、镜头或转化链路。"}
建议一条内容只解决一个具体卡点，用例题或任务卡演示方法，再用评论问题引出直播答疑。

### 差异化机会
把学生学习方法延展为“家长怎样配合”的第二视角：学生得到练习步骤，家长得到提问与检查方法。此结论为策略建议，需发布后验证。

### 下一步选题与排期草案
- 第一周：《月考后先抓住这三个失分点》，交付错题分类卡；直播做案例诊断。
- 第二周：《订正后为什么还会错》，展示一次同类回测；直播答疑常见卡点。
- 第三周：《家长检查作业该问什么》，交付三句提问；直播演示沟通。
- 第四周：复盘前三周的播放、关注转化与评论问题，选择有效结构继续迭代。

这些是可编辑建议，尚未写入排期。真实粉丝数、实时互动率与成交数据未核验。`,sources:Ve?[{number:1,title:`清华优优 vs ${J}｜当前对比资料`,locator:"工作台演示资料",text:de.data_note}]:[],steps:[{name:"核对当前对标账号",status:"done",detail:J},{name:"整理对比资料与来源边界",status:"done",detail:Ve?"使用当前页面对比快照；标记演示数据。":"账号资料不足，不套用其他账号。"},{name:"输出内容与行动建议",status:"done",detail:"返回预先整理的示例方案，未实时调用大模型。"}],artifacts:[{type:"document",label:"加入知识库"},{type:"planning",label:"加入内容排期"}]}),ye();return}if(/杨奇函/.test(T)&&/竞品|对比|差异|分析/.test(T)&&!x.length){r.value="analysis",g.chat.push({role:"ai",...Ha()}),ye();return}if(Fe){if(r.value=An[Oe]||"analysis",Oe==="schedule"){await Gt(T,Oe);return}performance.now();const J=Zi(Oe,{...qa,followers:Df},[...g.courseDocuments,...vf]);if(J){if(Oe==="query"||Oe==="analysis"){const $n=J.sources.length+1;J.sources.push({number:$n,title:Ka.title,locator:"预置指标口径",uri:"./cue-scenarios/definitions.json",text:Ka.content}),J.text+=`

统计口径依据：[`+$n+"]。"}const de={query:"结构化数据查询",analysis:"指标分析",competitor:"竞品拆解",planning:"内容规划"},Ve={role:"ai",...J,routeLabel:de[Oe],traceMode:"思考过程",steps:[{name:"识别问题与任务",status:"done",execution:"规则匹配",detail:"匹配固定示例问题，选择"+de[Oe]+"流程。"},{name:"定位资料与课程原文",status:"done",execution:"读取已解析资料快照",detail:J.sources.map($n=>$n.title+" · "+$n.locator).join(`
`)},{name:"整理分析与产物",status:"done",execution:"预设流程摘要",detail:J.summary+"；本轮复用已有结果，未重新调用模型或联网检索。"},{name:"绑定引用与后续操作",status:"done",execution:"结果整理",detail:"保留"+J.sources.length+"个来源及对应知识库、脚本或排期入口。"}]};g.chat.push(Ve),tn(Ve),ye();return}}if(/^优化当前脚本/.test(T)&&_n.value){const J=F(T);if(J){r.value="creative",g.chat.push({role:"ai",...J}),tn(J),ye();return}}o.value=!0,ye(),o.value=!0;try{const J=await Jd(ze,g.activeView);r.value=J.mode}catch{r.value=Oe?An[Oe]:"analysis"}finally{o.value=!1}if(n.value&&!x.length){if(g.activeView==="live-summary"&&Se&&pe<0&&!fe.length){const de=(R=g.liveReviewContext)==null?void 0:R.session,Ve=(de==null?void 0:de[Se[1]])??(Se[1]==="raw_duration"?de==null?void 0:de.dur:void 0);g.chat.push({role:"ai",routeLabel:"直播指标查询",text:de?"**本场"+Se[0]+"："+(Ve??"未记录")+`。**

`+de.d+" · "+de.title:"请先选择一场直播。",sources:de?[{number:1,title:"视频号直播历史数据.csv",locator:"第 "+de.source_page+" 行 · "+Se[0],uri:de.source_uri,text:Se[0]+"："+(Ve??"未记录")}]:[],steps:[{name:"定位当前场次",status:"done",detail:(de==null?void 0:de.d)||"未选择场次"},{name:"读取报表对应字段",status:"done",detail:Se[0]+"；不套用内容总结模板"}]}),ye();return}if(_n.value&&/^优化当前脚本/.test(T)){const de=F(T);if(de){r.value="creative",g.chat.push({role:"ai",...de}),tn(de),ye();return}}const J=ll(ze);if(J&&!fe.length&&(jo.includes(T)||J==="schedule")){await Gt(T,J);return}}const Ge={question:T,context:I,history:Re,options:{mode:r.value==="planning"?"creative":r.value,conversation_id:a.value,document_ids:fe.filter(J=>!x.includes(J)).map(J=>J.id).slice(0,20),images:x.filter(J=>J.kind==="image").map(J=>({title:J.title,url:J.image}))}};o.value=!0,ye();try{const J=await(g.authUser?aa:ua)(T,Ge.context,Re,Ge.options);/竞品差异/.test(T)&&(J.artifacts=[{type:"document",label:"加入知识库"},{type:"planning",label:"加入内容排期"}]),a.value=J.conversation_id||a.value,g.chat.push({role:"ai",text:J.answer,chart:J.chart,route:J.route,routeLabel:J.route_label||C[J.route],sources:J.sources||[],steps:J.steps||[],artifacts:J.artifacts||[],traceMode:"服务端执行记录"}),await pn()}catch(J){g.chat.push({role:"ai",text:"Cue 暂时无法回答："+(J.message||"请稍后重试"),error:!0,canContinue:!!J.canContinue,resumeRequest:Ge,sources:fe.map((de,Ve)=>({number:Ve+1,title:de.title,locator:"本轮指定资料 · 请求失败，尚未完成分析",uri:de.uri,text:"引用已保留，可点击重新生成重试。"})),steps:[{name:"请求模型回答",status:"failed",detail:J.message||"连接失败；没有生成结论"}]})}finally{o.value=!1,ye()}}function ds(T){const x=Je.value;x&&(s.value=s.value.slice(0,x.start)+"@"+T.title+" "+s.value.slice(x.end),G.value=T,he.value=x.start+T.title.length+2,xe.value=!0,Ut(()=>{var I,fe;(I=le.value)==null||I.focus(),(fe=le.value)==null||fe.setSelectionRange(he.value,he.value)}))}function zs(T){var x;s.value=s.value.replace("@"+T.title,""),((x=G.value)==null?void 0:x.id)===T.id&&(G.value=null),he.value=Math.min(he.value,s.value.length)}function Yt(){if(!W.value)return;const T=URL.createObjectURL(new Blob([W.value.content],{type:"text/markdown;charset=utf-8"})),x=document.createElement("a");x.href=T,x.download=W.value.title+".md",x.click(),URL.revokeObjectURL(T)}async function Qt(T,x){var be,Ze,Fe,ze,pe,Se,ge;if(x==="script"&&((be=T.draft)==null?void 0:be.type)==="document"){W.value={title:T.draft.title,content:T.draft.content,message:T,spaceId:((Ze=z.value[0])==null?void 0:Ze.id)||"",saved:!1};return}if(x==="document"){g.knowledgeSaveDraft={title:((Fe=T.draft)==null?void 0:Fe.title)||"Cue 分析",content:((ze=T.draft)==null?void 0:ze.content)||T.text,subspace:"内容生产",onSaved:Oe=>{T.knowledgeDocument=Oe,tn(T),pn()}};return}if(!g.authUser&&x==="planning"){eo({type:"video",title:"竞品分析后续选题",planned_at:co(),notes:T.text}),T.artifactNotice="已加入内容排期，可继续编辑。",g.activeView="planning";return}if(x!=="script"&&!Ce())return;const I=((pe=T.draft)==null?void 0:pe.title)||`${x==="script"?"脚本":x==="planning"?"排期":"分析文档"} · ${new Date().toLocaleDateString("zh-CN")}`,fe=((Se=T.draft)==null?void 0:Se.content)||T.text;if(x==="script"){W.value={title:I,content:fe,message:T,spaceId:((ge=z.value[0])==null?void 0:ge.id)||"",saved:!1};return}try{const Oe=await Qd({conversation_id:a.value,title:I,artifact_type:x,content:fe,sources:T.sources||[],save_to_knowledge:x==="document"||x==="script"});x==="planning"&&Oe.task&&(Array.isArray(g.planningTasks)||(g.planningTasks=[]),g.planningTasks.push(Oe.task),g.activeView="planning",T.artifactNotice="已加入未来四周内容排期，可在甘特图中继续修改。"),x==="document"&&Oe.document&&(g.activeView="wiki",T.artifactNotice="已保存到知识库。")}catch(Oe){T.artifactNotice="保存失败："+(Oe.message||"请稍后重试")}}async function Yn(){if(!(!W.value||W.value.saved)){const T=W.value;g.knowledgeSaveDraft={title:T.title,content:T.content,subspace:"短视频脚本",onSaved:x=>{T.message.knowledgeDocument=x,tn(T.message),T.saved=!0,T.message.artifactNotice="已保存到知识库。"}};return}}async function Tt(){if(!Ce())return;const T=s.value.trim()||"每周扫描教育类竞品公开内容，识别高潜选题并生成适合清华优优的脚本草稿";try{await Yd({title:"每周竞品爆款监控",prompt:T,cadence:"每周一 09:00"}),s.value="",await pn(),c.value="tasks"}catch{}}function Qn(){if(!g.authUser){u.value=ie();const T=u.value.find(x=>x.id===localStorage.getItem("redcowork-replica-v2-cue-active-chat"));T&&!g.chat.some(x=>x.role==="user")&&(ne=!0,a.value=T.id,r.value=T.mode,g.chat=T.messages,ne=!1)}_t(),pn()}return ti(Qn),hn(()=>{var T;return(T=g.authUser)==null?void 0:T.id},()=>{a.value=null,g.chat=[],Qn()}),(T,x)=>(d(),v("aside",{class:we(["copilot-panel",{collapsed:!se(g).copilotOpen&&!t.mobile,mobile:t.mobile}])},[t.mobile?H("",!0):(d(),v(Q,{key:0},[l("div",{class:"cp-toggle",onClick:x[0]||(x[0]=I=>se(g).copilotOpen=!se(g).copilotOpen)},f(se(g).copilotOpen?"◀":"▶"),1),x[20]||(x[20]=l("div",{class:"cp-collapsed-bar"},[l("span",{class:"vt"},"Cue · 分析与规划")],-1))],64)),l("div",Mf,[l("div",Of,[x[21]||(x[21]=l("div",null,[l("span",{class:"badge"},"✦"),l("b",null,"Cue")],-1)),l("div",null,[l("button",{onClick:xn,disabled:o.value,title:o.value?"正在生成回答":"新建会话","aria-label":"新建会话"},"＋",8,Rf),l("button",{onClick:x[1]||(x[1]=I=>c.value=c.value==="history"?"":"history")},"会话"),l("button",{onClick:x[2]||(x[2]=I=>c.value=c.value==="tasks"?"":"tasks")},"任务")])]),l("div",Pf,[(d(),v(Q,null,oe(We,I=>l("button",{key:I[0],class:we({active:r.value===I[0]}),onClick:fe=>r.value=I[0]},f(I[1]),11,Lf)),64))]),c.value==="history"?(d(),v("div",Nf,[l("header",null,[x[22]||(x[22]=l("b",null,"历史会话",-1)),l("button",{onClick:x[3]||(x[3]=I=>c.value="")},"×")]),(d(!0),v(Q,null,oe(u.value,I=>(d(),v("button",{key:I.id,class:"cue-list",onClick:fe=>zn(I.id)},[l("b",null,f(I.title),1),l("small",null,f(I.mode)+" · "+f(I.message_count)+" 条",1)],8,Ff))),128)),u.value.length?H("",!0):(d(),v("p",zf,"暂无历史会话"))])):H("",!0),c.value==="tasks"?(d(),v("div",Uf,[l("header",null,[x[23]||(x[23]=l("b",null,"定时任务",-1)),l("button",{onClick:x[4]||(x[4]=I=>c.value="")},"×")]),l("button",{class:"task-create",onClick:Tt},"＋ 创建每周竞品监控"),(d(!0),v(Q,null,oe(p.value,I=>(d(),v("article",{key:I.id},[l("b",null,f(I.title),1),l("small",null,f(I.cadence)+" · "+f(I.status),1),l("p",null,f(I.prompt),1)]))),128))])):H("",!0),W.value?(d(),v("div",jf,[l("header",null,[l("div",null,[l("small",null,"MARKDOWN SCRIPT · "+f(W.value.saved?"已保存到知识库":"预览草稿"),1),en(l("input",{"onUpdate:modelValue":x[5]||(x[5]=I=>W.value.title=I),"aria-label":"文件名称"},null,512),[[bn,W.value.title]])]),l("button",{onClick:x[6]||(x[6]=I=>W.value=null)},"×")]),l("pre",null,f(W.value.content),1),W.value.error?(d(),v("p",Bf,f(W.value.error),1)):H("",!0),l("footer",null,[l("button",{disabled:W.value.saved,onClick:Yn},f(W.value.saved?"已加入知识库":"加入知识库"),9,Vf),W.value.saved?(d(),v("button",{key:0,onClick:x[7]||(x[7]=I=>{se(g).activeView="wiki",W.value=null})},"查看知识库")):H("",!0),l("button",{onClick:x[8]||(x[8]=I=>Qt(W.value.message,"planning"))},"加入内容排期"),l("button",{class:"download",onClick:Yt},"下载 .md")])])):(d(),v("div",{key:3,class:"cp-body",ref_key:"bodyEl",ref:i},[(d(!0),v(Q,null,oe(se(g).chat,(I,fe)=>{var be,Ze,Fe,ze;return d(),v("div",{key:fe,"data-message-index":fe,class:we(["cp-msg",I.role])},[l("div",Wf,f(I.role==="user"?"你":"Cue"),1),I.routeLabel?(d(),v("div",Hf,f(I.routeLabel),1)):H("",!0),I.role!=="user"?(d(),v("details",qf,[l("summary",null,[Ae(f("思考过程")+" · "+f(Ue(I).length)+" 步",1),I.elapsed!==void 0?(d(),v("span",Kf," · "+f(I.elapsed)+" ms",1)):H("",!0)]),l("ol",null,[(d(!0),v(Q,null,oe(Ue(I),(pe,Se)=>(d(),v("li",{key:Se},[l("span",null,f(pe.status==="running"?"◌":pe.status==="failed"?"!":"✓"),1),l("div",null,[l("b",null,f(Se+1)+". "+f(pe.name),1),pe.execution?(d(),v("small",Gf,[Ae(f(pe.execution),1),pe.elapsed!==void 0?(d(),v(Q,{key:0},[Ae(" · "+f(pe.elapsed)+" ms",1)],64)):H("",!0)])):H("",!0),pe.detail?(d(),v("details",Yf,[x[24]||(x[24]=l("summary",null,"输入与结果",-1)),l("p",null,f(qe(pe.detail)),1)])):H("",!0)])]))),128))])])):H("",!0),l("div",{class:we(["bubble",{"cue-error":I.error}])},[I.role==="user"?(d(!0),v(Q,{key:0},oe(Ie(I),(pe,Se)=>(d(),v(Q,{key:Se},[pe.title?(d(),v("span",Qf,"▤ @"+f(pe.title),1)):(d(),v(Q,{key:1},[Ae(f(pe.text),1)],64))],64))),128)):(d(),v(Q,{key:1},[on(L2,{chart:I.chart||((Ze=(be=I.steps)==null?void 0:be.find(pe=>pe.chart))==null?void 0:Ze.chart)},null,8,["chart"]),on(Jv,{text:kn(I)},null,8,["text"])],64))],2),I.planningId?(d(),v("button",{key:2,class:"trace-plan-link",onClick:x[9]||(x[9]=pe=>se(g).activeView="planning")},"查看直播排期 →")):H("",!0),I.role!=="user"?(d(),v("details",Jf,[l("summary",null,"使用资料来源 · "+f(Mn(I).length),1),(d(!0),v(Q,null,oe(Mn(I),pe=>(d(),v("article",{key:pe.chunk_id||pe.number},[l("b",{title:pe.title+" · "+(pe.locator||"")},"["+f(pe.number)+"] "+f(pe.title)+" · "+f(pe.locator),9,Zf),l("p",null,f(pe.text),1),On(pe)?(d(),v("button",{key:0,class:"knowledge-source-link",onClick:Se=>Fn(pe)},"查看知识库文档 ↗",8,eh)):pe.uri?(d(),v("a",{key:1,class:we({"web-source-card":pe.web}),href:pe.uri,target:"_blank",rel:"noopener"},f(pe.web?"↗ 查看联网资料 · "+pe.title:"打开引用原文件 ↗"),11,nh)):H("",!0)]))),128)),Mn(I).length?H("",!0):(d(),v("p",th,"本条回答未提供可核验的资料引用。"))])):H("",!0),(Fe=I.attachments)!=null&&Fe.length?(d(),v("div",sh,[(d(!0),v(Q,null,oe(I.attachments,(pe,Se)=>(d(),v("span",{key:Se},f(pe.kind==="image"?"▧":"▤")+" "+f(pe.title),1))),128))])):H("",!0),I.canContinue?(d(),v("button",{key:5,class:"continue-answer",disabled:o.value,onClick:pe=>w(I)},f(o.value?"处理中…":"继续"),9,ih)):H("",!0),l("div",lh,[l("button",{onClick:pe=>L(I),title:"复制","aria-label":"复制"},[on(se(rf),{size:16})],8,oh),I.role==="ai"?(d(),v(Q,{key:0},[l("button",{disabled:o.value||!se(g).chat.slice(0,fe).some(pe=>pe.role==="user"),onClick:pe=>$(fe),title:"重新生成","aria-label":"重新生成"},[on(se(uf),{size:16})],8,rh),l("button",{class:we({chosen:U.value[b(I)]==="up"}),"aria-pressed":U.value[b(I)]==="up",onClick:pe=>D(I,"up"),title:"点赞","aria-label":"点赞"},[on(se(df),{size:16})],10,ah),l("button",{class:we({chosen:U.value[b(I)]==="down"}),"aria-pressed":U.value[b(I)]==="down",onClick:pe=>D(I,"down"),title:"点踩","aria-label":"点踩"},[on(se(pf),{size:16})],10,uh),l("button",{onClick:pe=>j(I),title:"分享","aria-label":"分享"},[on(se(cf),{size:16})],8,ch)],64)):H("",!0)]),I.role==="ai"&&((ze=I.artifacts)!=null&&ze.length)?(d(),v("div",dh,[(d(!0),v(Q,null,oe(I.artifacts,pe=>(d(),v("button",{key:pe.type,onClick:Se=>Qt(I,pe.type)},f(pe.label),9,ph))),128))])):H("",!0),I.artifactNotice?(d(),v("p",vh,f(I.artifactNotice),1)):H("",!0)],10,Xf)}),128)),o.value?(d(),v("div",fh,"正在路由任务、调用资料并生成回答…")):H("",!0)],512)),se(g).chat.some(I=>I.role==="user")?(d(),v("div",hh,[l("button",{title:"回到底部","aria-label":"回到底部，查看最新消息",onClick:Ne},[on(se(lf),{size:18})])])):H("",!0),Y.value?(d(),v("div",mh,f(Y.value),1)):H("",!0),l("div",gh,[_n.value?(d(),v("button",{key:0,class:"script-optimize",onClick:B},"优化当前脚本")):H("",!0),(d(!0),v(Q,null,oe(En.value,I=>(d(),v("button",{key:I,onClick:fe=>me(I)},f(I),9,_h))),128))]),Rn.value.length?(d(),v("div",yh,[l("header",null,[l("b",null,"待发送 · "+f(Rn.value.length),1),x[25]||(x[25]=l("small",null,"当前回答结束后依次发送",-1))]),(d(!0),v(Q,null,oe(Rn.value,(I,fe)=>(d(),v("div",{key:I.id},[l("span",null,[Ae(f(fe+1)+". "+f(I.text),1),I.attachments.length?(d(),v("small",bh," · "+f(I.attachments.length)+" 个附件",1)):H("",!0)]),l("button",{onClick:be=>Rn.value=Rn.value.filter(Ze=>Ze.id!==I.id),"aria-label":"移除排队问题 "+(fe+1)},"×",8,wh)]))),128))])):H("",!0),(d(!0),v(Q,null,oe(Ee.value,I=>(d(),v("div",{key:I.id,class:"mention-chip"},[Ae("@ "+f(I.title)+" ",1),l("button",{onClick:fe=>zs(I),"aria-label":"移除引用 "+I.title},"×",8,kh)]))),128)),l("div",xh,[(d(!0),v(Q,null,oe(h.value,I=>(d(),v("span",{key:I.id},[I.image?(d(),v("img",{key:0,src:I.image,alt:"图片附件"},null,8,Sh)):H("",!0),l("b",null,f(I.title),1),l("button",{onClick:fe=>h.value=h.value.filter(be=>be.id!==I.id),"aria-label":"移除附件"},"×",8,$h)]))),128))]),M.value?(d(),v("p",Th,f(M.value),1)):H("",!0),l("input",{ref_key:"uploadEl",ref:m,type:"file",multiple:"",accept:"image/png,image/jpeg,image/webp,image/gif,image/bmp,.xlsx,.xls,.pptx,.ppt,.csv,.tsv,.md,.txt,.pdf,.docx,.srt,.vtt",hidden:"",onChange:P},null,544),l("div",{class:we(["composer-wrap",{dragging:O.value}]),onDragover:x[17]||(x[17]=mn(I=>O.value=!0,["prevent"])),onDragleave:x[18]||(x[18]=mn(I=>O.value=!1,["prevent"])),onDrop:x[19]||(x[19]=mn(I=>!S.value&&P(I),["prevent"]))},[l("div",Ch,[en(l("textarea",{ref_key:"composerEl",ref:le,"onUpdate:modelValue":x[10]||(x[10]=I=>s.value=I),maxlength:"4000",rows:"2","aria-label":"Cue 问题输入框",placeholder:"输入问题，或拖拽图片和文件到这里；输入 @ 可引用知识库资料",onInput:nn,onClick:nn,onKeyup:nn,onKeydown:[x[11]||(x[11]=Ht(I=>xe.value=!0,["esc"])),x[12]||(x[12]=Ht(mn(I=>Je.value?ke.value[0]&&ds(ke.value[0]):bt(),["exact","prevent"]),["enter"]))]},null,544),[[bn,s.value]]),l("button",{class:"send",disabled:S.value||!s.value.trim()&&!h.value.length,title:o.value||Gn.value?"加入待发送队列":"发送","aria-label":o.value||Gn.value?"加入待发送队列":"发送",onClick:x[13]||(x[13]=I=>bt())},[o.value||Gn.value?(d(),It(se(af),{key:0,size:22})):(d(),It(se(of),{key:1,size:23,"stroke-width":2.5}))],8,Dh)]),l("div",Ah,[l("button",{class:"attach-plus",disabled:S.value,onClick:x[14]||(x[14]=I=>A.value=!A.value),"aria-label":"上传附件","aria-expanded":A.value},"＋",8,Eh),S.value?(d(),v("small",Ih,"解析附件中…")):H("",!0),A.value?(d(),v("div",Mh,[l("button",{onClick:x[15]||(x[15]=I=>ee(!0))},[...x[26]||(x[26]=[Ae("上传图片 ",-1),l("small",null,"最多20张 · 每张20 MB",-1)])]),l("button",{onClick:x[16]||(x[16]=I=>ee(!1))},[...x[27]||(x[27]=[Ae("上传文件 ",-1),l("small",null,"最多20个 · 每个500 MB",-1)])])])):H("",!0)]),Je.value?(d(),v("div",Oh,[(d(!0),v(Q,null,oe(ke.value,I=>(d(),v("button",{key:I.id,onMousedown:mn(fe=>ds(I),["prevent"])},[l("b",null,f(I.title),1),l("small",null,f(I.subspace||"文档")+" · "+f(I.chunk_count||0)+" 段",1)],40,Rh))),128)),ke.value.length?H("",!0):(d(),v("p",Ph,"没有匹配的知识库文档"))])):H("",!0)],34)])],2))}},Ya=Dn(Lh,[["__scopeId","data-v-3ca09a9f"]]),Nh={class:"auth-card"},Fh={class:"auth-tabs"},zh={class:"auth-field"},Uh={class:"auth-field"},jh={key:0,class:"auth-field"},Bh={key:1,class:"auth-err"},Vh=["disabled"],Xh={__name:"LoginPanel",setup(e){const n=K("login"),t=K(""),s=K(""),i=K(""),o=K(""),r=K(!1);async function a(){if(!r.value){if(o.value="",!t.value.trim()||!s.value){o.value="请填写用户名和密码";return}r.value=!0;try{const p=n.value==="login"?await Ed(t.value.trim(),s.value):await Id(t.value.trim(),s.value,i.value.trim());a2(p)}catch(p){o.value=p.message||"操作失败"}finally{r.value=!1}}}function u(){g.loginOpen=!1}return(p,c)=>(d(),v("div",{class:"auth-mask",onClick:mn(u,["self"])},[l("div",Nh,[c[8]||(c[8]=l("div",{class:"auth-logo"},"✦ 北极星 NorthStar",-1)),c[9]||(c[9]=l("p",{class:"auth-sub"},"盯住那一颗星 · 登录后多账号数据隔离",-1)),l("div",Fh,[l("button",{class:we({on:n.value==="login"}),onClick:c[0]||(c[0]=h=>n.value="login")},"登录",2),l("button",{class:we({on:n.value==="register"}),onClick:c[1]||(c[1]=h=>n.value="register")},"注册",2)]),l("div",zh,[c[5]||(c[5]=l("label",null,"用户名",-1)),en(l("input",{"onUpdate:modelValue":c[2]||(c[2]=h=>t.value=h),placeholder:"如 maggie",onKeydown:Ht(a,["enter"])},null,544),[[bn,t.value]])]),l("div",Uh,[c[6]||(c[6]=l("label",null,"密码",-1)),en(l("input",{"onUpdate:modelValue":c[3]||(c[3]=h=>s.value=h),type:"password",placeholder:"••••••••",onKeydown:Ht(a,["enter"])},null,544),[[bn,s.value]])]),n.value==="register"?(d(),v("div",jh,[c[7]||(c[7]=l("label",null,"显示名（可选）",-1)),en(l("input",{"onUpdate:modelValue":c[4]||(c[4]=h=>i.value=h),placeholder:"昵称",onKeydown:Ht(a,["enter"])},null,544),[[bn,i.value]])])):H("",!0),o.value?(d(),v("p",Bh,f(o.value),1)):H("",!0),l("button",{class:"auth-btn primary",disabled:r.value,onClick:a},f(r.value?"请稍候…":n.value==="login"?"登录":"注册并登录"),9,Vh),l("button",{class:"auth-btn ghost",onClick:u},"以游客身份进入（仅浏览内容数据）")])]))}},Wh=Dn(Xh,[["__scopeId","data-v-0814bac1"]]),Hh={class:"ch-card"},qh={class:"ch-head"},Kh={class:"ch-actions"},Gh=["onClick"],Yh={class:"ch-info"},Qh={class:"ch-name"},Jh={class:"pill outline"},Zh={class:"ch-meta"},em={key:0,style:{"white-space":"pre-wrap","font-size":"13px"}},nm=["onClick"],tm={key:0,class:"ch-empty"},sm={class:"ch-form"},im={class:"ch-field"},lm={class:"ch-field"},om={class:"ch-field"},rm=["disabled"],am={__name:"ChannelPanel",setup(e){const n=K("wechat"),t=K(""),s=K(""),i=K(""),o=K(!1),r={wechat:"视频号",xiaohongshu:"小红书"},a=ue(()=>g.channels.filter(h=>(h.platform||"wechat")===n.value));ti(Nl);async function u(){if(!o.value){o.value=!0;try{await d2(t.value,s.value,n.value,i.value)&&(t.value="",s.value="",i.value="")}finally{o.value=!1}}}function p(h){n.value=h,t.value="",s.value="",i.value=""}function c(h){window.confirm("解绑「"+h.name+"」？已导入的资料会保留。")&&p2(h.id)}return(h,m)=>(d(),v("div",{class:"ch-mask",onClick:m[5]||(m[5]=mn((...S)=>se(oi)&&se(oi)(...S),["self"]))},[l("div",Hh,[l("div",qh,[m[6]||(m[6]=l("div",null,[l("div",{class:"ch-eyebrow"},"NORTHSTAR ACCOUNTS"),l("div",{class:"ch-title"},"分平台管理账号"),l("p",{class:"ch-sub"},"登记账号资料，为内容经营建立清晰的来源。")],-1)),l("button",{class:"ch-close",onClick:m[0]||(m[0]=(...S)=>se(oi)&&se(oi)(...S))},"×")]),l("div",Kh,[(d(),v(Q,null,oe(r,(S,M)=>l("button",{key:M,class:"ch-sync",style:Pn(n.value===M?"background:#f6eaed;border-color:#a86979":""),onClick:A=>p(M)},f(S)+" · "+f(se(g).channels.filter(A=>(A.platform||"wechat")===M).length),13,Gh)),64))]),(d(!0),v(Q,null,oe(a.value,S=>(d(),v("div",{key:S.id,class:"ch-item"},[l("div",Yh,[l("div",Qh,[Ae(f(S.name)+" ",1),l("span",Jh,f(r[S.platform||"wechat"])+" · 已登记",1)]),l("div",Zh,f(S.finder_uin||"未填平台账号 ID"),1),S.profile?(d(),v("p",em,f(S.profile),1)):H("",!0)]),l("button",{class:"ch-unbind",onClick:M=>c(S)},"解绑",8,nm)]))),128)),a.value.length?H("",!0):(d(),v("div",tm,"尚未登记"+f(r[n.value])+"账号",1)),l("div",sm,[l("div",im,[l("label",null,f(r[n.value])+"账号名称",1),en(l("input",{"onUpdate:modelValue":m[1]||(m[1]=S=>t.value=S),maxlength:"100",placeholder:"填写平台上的昵称"},null,512),[[bn,t.value]])]),l("div",lm,[m[7]||(m[7]=l("label",null,"平台账号 ID（可选）",-1)),en(l("input",{"onUpdate:modelValue":m[2]||(m[2]=S=>s.value=S),placeholder:"填写视频号 ID 或小红书号"},null,512),[[bn,s.value]])]),l("div",om,[m[8]||(m[8]=l("label",null,"账号定位与目标（可选）",-1)),en(l("textarea",{"onUpdate:modelValue":m[3]||(m[3]=S=>i.value=S),class:"ch-textarea",maxlength:"2000",rows:"4",placeholder:"例如：家居博主，面向租房人群，希望提高收藏率；每周更新 3 条。"},null,512),[[bn,i.value]])]),l("button",{class:"ch-add",disabled:o.value||!t.value.trim(),onClick:u},f(o.value?"保存中…":"绑定"+r[n.value]+"账号"),9,rm)]),m[9]||(m[9]=l("p",{class:"ch-tip"},"绑定目前保存账号资料，不代表已授权连接平台后台。可从平台导出报表后导入；自动同步尚未验证。经营看板目前按 NorthStar 用户汇总，尚未按平台账号分开统计。",-1)),l("button",{class:"ch-sync",onClick:m[4]||(m[4]=S=>{se(oi)(),se(g).syncAssistantOpen=!0})},"查看报表导入入口")])]))}},um=Dn(am,[["__scopeId","data-v-ee400fc8"]]),cm={class:"sa-card"},dm={class:"sa-step"},pm={key:1,class:"qr"},vm=["src"],fm={key:1},hm={__name:"SyncAssistantPanel",setup(e){const n=K({login:{logged_in:!1},login_task:{running:!1},history_task:{status:"未开始"}}),t=K("");let s;async function i(){var r;if(n.value=await Ld(),(r=n.value.login_task)!=null&&r.running)try{const a=await Ud();t.value&&URL.revokeObjectURL(t.value),t.value=a}catch{}}ti(()=>{i(),s=setInterval(i,1800)}),Kt(()=>{clearInterval(s),t.value&&URL.revokeObjectURL(t.value)});const o=ue(()=>{var r;return(r=n.value.login_task)==null?void 0:r.running});return(r,a)=>(d(),v("div",{class:"sa-mask",onClick:a[2]||(a[2]=mn(u=>se(g).syncAssistantOpen=!1,["self"]))},[l("section",cm,[l("header",null,[a[3]||(a[3]=l("div",null,[l("h2",null,"数据导入助手"),l("p",null,"当前不具备视频号官方数据接口权限，不能承诺自动同步历史短视频或下载视频文件。")],-1)),l("button",{onClick:a[0]||(a[0]=u=>se(g).syncAssistantOpen=!1)},"×")]),a[13]||(a[13]=l("div",{class:"sa-note"},[l("strong",null,"当前可用方式"),l("span",null,"从视频号后台导出 CSV / XLSX 后导入：直播场次、成交与收入会写入真实数据；短视频报表会写入已验证视频列表。视频画面仍需你提供本地文件或公开链接。")],-1)),l("div",dm,[a[4]||(a[4]=l("b",null,"1",-1)),a[5]||(a[5]=l("div",null,[l("strong",null,"导入视频号后台报表"),l("span",null,"支持直播、商品、经营与短视频数据报表；无需扫码后再等待不确定的同步任务。")],-1)),l("button",{onClick:a[1]||(a[1]=u=>{se(g).syncAssistantOpen=!1,se(g).channelsOpen=!0})},"前往导入")]),H("",!0),o.value?(d(),v("div",pm,[t.value?(d(),v("img",{key:0,src:t.value,alt:"视频号登录二维码"},null,8,vm)):(d(),v("span",fm,"正在生成二维码…")),a[8]||(a[8]=l("span",null,"请用微信扫一扫完成授权",-1))])):H("",!0),H("",!0),H("",!0),H("",!0),H("",!0),a[14]||(a[14]=l("div",{class:"sa-note"},[l("strong",null,"不会再做的事"),l("span",null,"不会再显示“逐场采集回放”任务，也不会使用占位封面冒充已同步视频。")],-1))])]))}},mm=Dn(hm,[["__scopeId","data-v-09704b26"]]);function Ec(){return new Promise((e,n)=>{const t=indexedDB.open("redcowork-replica-v2-knowledge-files",1);t.onupgradeneeded=()=>t.result.createObjectStore("replacements",{keyPath:"id"}),t.onsuccess=()=>e(t.result),t.onerror=()=>n(t.error)})}async function Bo(e,n,t){const s=await Ec();try{await new Promise((i,o)=>{const r=s.transaction("replacements","readwrite");r.objectStore("replacements").put({id:e,file:n,parsed:t,title:n.name,file_type:n.type}),r.oncomplete=i,r.onerror=()=>o(r.error)})}finally{s.close()}}async function gm(){const e=await Ec();try{return await new Promise((n,t)=>{const s=e.transaction("replacements").objectStore("replacements").getAll();s.onsuccess=()=>n(s.result.map(i=>({...i.parsed,id:i.id,title:i.title,file_type:i.file_type,uri:URL.createObjectURL(i.file),parse_status:"completed",parse_error:""}))),s.onerror=()=>t(s.error)})}finally{e.close()}}const _m={class:"content-field"},ym={key:0,role:"alert"},bm=["disabled"],wm={__name:"KnowledgeSavePanel",setup(e){const n=K(!1),t=K(""),s=ue(()=>g.knowledgeSaveDraft),i=K({x:0,y:0}),o=K({w:430,h:520});let r=!1,a=!1,u=null;function p(A){A.target.closest("button,input,textarea,select")||(r=!0,u={x:A.clientX,y:A.clientY,px:i.value.x,py:i.value.y},window.addEventListener("pointermove",h),window.addEventListener("pointerup",m))}function c(A){A.preventDefault(),a=!0,u={x:A.clientX,y:A.clientY,w:o.value.w,h:o.value.h},window.addEventListener("pointermove",h),window.addEventListener("pointerup",m)}function h(A){r&&(i.value={x:u.px+A.clientX-u.x,y:u.py+A.clientY-u.y}),a&&(o.value={w:Math.max(360,u.w+A.clientX-u.x),h:Math.max(360,u.h+A.clientY-u.y)})}function m(){r=!1,a=!1,window.removeEventListener("pointermove",h),window.removeEventListener("pointerup",m)}function S(){g.knowledgeSaveDraft=null}async function M(){var O,ee;const A=s.value;if(!((O=A==null?void 0:A.title)!=null&&O.trim())||!((ee=A==null?void 0:A.content)!=null&&ee.trim()))return un("请填写标题和内容");if(!n.value){n.value=!0,t.value="";try{let P;g.authUser?P={...await ac({title:A.title.trim(),text:A.content,source:"Cue 生成 · "+(A.subspace||"内容生产")}),subspace:A.subspace||"内容生产",local_content:A.content,parse_status:"completed"}:(P={id:`shared-save-${Date.now()}`,title:A.title.trim(),subspace:A.subspace||"短视频脚本",space_name:"清华优优 AI Wiki",doc_type:"document",chunk_count:1,analyzed:!1,local_content:A.content,parse_status:"completed"},await Bo(P.id,new File([P.local_content],P.title,{type:"text/plain"}),P)),g.demoKnowledgeDocuments.unshift(P),A.onSaved&&A.onSaved(P),un(`《${A.title}》已保存到「${P.subspace}」`),S()}catch(P){t.value="保存失败："+P.message}finally{n.value=!1}}}return(A,O)=>s.value?(d(),v("section",{key:0,class:"knowledge-save-panel",style:Pn({transform:`translate(${i.value.x}px, ${i.value.y}px)`,width:`${o.value.w}px`,height:`${o.value.h}px`}),"aria-label":"保存到知识库"},[l("header",{onPointerdown:p},[O[3]||(O[3]=l("div",null,[l("span",null,"SAVE TO KNOWLEDGE"),l("h3",null,"保存到知识库"),l("small",null,"拖动此处移动卡片；右下角可调整大小")],-1)),l("button",{onClick:S},"×")],32),l("label",null,[O[4]||(O[4]=Ae("标题",-1)),en(l("input",{"onUpdate:modelValue":O[0]||(O[0]=ee=>s.value.title=ee)},null,512),[[bn,s.value.title]])]),l("label",_m,[O[5]||(O[5]=Ae("内容",-1)),en(l("textarea",{"onUpdate:modelValue":O[1]||(O[1]=ee=>s.value.content=ee)},null,512),[[bn,s.value.content]])]),l("label",null,[O[7]||(O[7]=Ae("存入子库",-1)),en(l("select",{"onUpdate:modelValue":O[2]||(O[2]=ee=>s.value.subspace=ee)},[...O[6]||(O[6]=[l("option",null,"短视频脚本",-1),l("option",null,"直播复盘",-1),l("option",null,"内容生产",-1),l("option",null,"转化变现",-1),l("option",null,"竞品研究",-1)])],512),[[ys,s.value.subspace]])]),t.value?(d(),v("p",ym,f(t.value),1)):H("",!0),l("footer",null,[l("button",{onClick:S},"取消"),l("button",{class:"save",disabled:n.value,onClick:M},f(n.value?"保存中…":"保存"),9,bm)]),l("i",{class:"resize-handle",onPointerdown:c},null,32)],4)):H("",!0)}},km=Dn(wm,[["__scopeId","data-v-96161c17"]]);function xm(e,n,t=0){const s=new Date(2026,8,1);s.setDate(s.getDate()-(s.getDay()+6)%7);const i=Math.round((s-n)/(7*864e5))-t*4;return e.map(o=>({...o,items:(o.items||[]).flatMap(r=>{const a=i+Number(r.s||0),u=i+Number(r.e??r.s??0);return u>=0&&a<4?[{...r,s:Math.max(0,a),e:Math.min(3,u),historical:!0}]:[]})}))}const Sm={9:["开学收心与适应","新学期时间规划","家长沟通与自律","第一次月考准备"],10:["国庆后收心：三天找回节奏","月考错题：定位真正薄弱点","期中复习：两周计划","考前焦虑：家长怎样陪伴"],11:["期中复盘：试卷诊断","英语背词：拼读与间隔复习","数学卡题：条件到公式","月底自检：调整学习节奏"],12:["期末复习：知识清单","易错题：同类变式训练","考前时间：主科优先级","年度复盘：寒假目标"]};function Ic(e,n,t=0){return xm(e,n,t).map((i,o)=>{const r=[...i.items],a=o===0?[0,1,2,3]:o===1?[0,1,3]:o===2?[0,2,3]:[0,1,3];for(const u of a){const p=new Date(n.getFullYear(),n.getMonth(),n.getDate()+(t*4+u)*7);if(p<new Date(2026,9,1)||p>=new Date(2027,0,1))continue;const c=Sm[p.getMonth()+1][Math.min(3,Math.floor((p.getDate()-1)/7))],h=c.split("：")[0],m=[c,h+"脚本",h+"（发布）",h+"专场",h+"开播"];r.push({name:m[o],s:u,e:o===2&&u===0?1:u,t:o===1?"draft":o>=3?"live":"video",notes:"内容生产计划草案。开场收集具体问题，结合知识库讲解一个可执行方法，结尾引导留言与答疑。"})}return{...i,items:r}})}const $m={class:"red-editorial-hero"},Tm={class:"red-hero-copy"},Cm={class:"actions-strip"},Dm={class:"tag"},Am={class:"title"},Em={class:"num"},Im={class:"body"},Mm={class:"northstar"},Om={class:"ns-head"},Rm={class:"ns-label"},Pm={class:"ns-value"},Lm={class:"ns-delta"},Nm={class:"ns-body"},Fm={class:"ns-goal"},zm={class:"ns-bar"},Um={class:"ns-switch"},jm=["onClick"],Bm={class:"card"},Vm={class:"card-h"},Xm={class:"gantt"},Wm={class:"gantt-head"},Hm={class:"weeks"},qm={style:{"font-weight":"400","font-size":"11px",color:"var(--text-mute)"}},Km={class:"lane"},Gm={class:"gantt-track"},Ym={class:"kpi-row"},Qm={class:"label"},Jm={class:"value"},Zm={class:"card"},eg={class:"card-h"},ng={style:{display:"flex",gap:"10px","align-items":"center"}},tg={class:"sub"},sg={class:"view-toggle"},ig=["innerHTML"],lg={key:1,class:"tbl-list"},og={class:"n"},rg={class:"r n"},ag={class:"r"},ug={class:"r"},cg={style:{display:"grid","grid-template-columns":"1fr 1fr 1fr",gap:"16px","margin-bottom":"16px"}},dg={class:"card-h"},pg={class:"view-toggle"},vg=["onClick"],fg=["onClick"],hg={class:"name"},mg={class:"bar"},gg={class:"val"},_g={key:1,class:"tbl-list"},yg={class:"n"},bg={class:"r n"},wg={class:"r"},kg={class:"r"},xg={class:"n",colspan:"2",style:{"font-weight":"600",background:"#FAFAFA"}},Sg={class:"card"},$g={key:0,class:"video-grid"},Tg={class:"thumb"},Cg=["src","alt"],Dg={class:"dur"},Ag={class:"meta"},Eg={class:"title"},Ig={class:"tag"},Mg={class:"stats"},Og={key:1,class:"video-grid video-placeholders"},Rg={class:"thumb"},Pg=["alt"],Lg={class:"meta"},Ng={class:"title"},Fg={__name:"DashboardView",setup(e){const n=ue(()=>{const Z=new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Shanghai",month:"numeric"}).format(new Date);return Number(Z)===10?[{num:1,tag:"下周",title:"下周该怎么做",body:"十月主线：国庆后恢复学习节奏、月考复盘与期中准备。优先从本月评论和直播提问中筛选痛点，再用播放、关注和留存数据验证选题。"},{num:2,tag:"下条",title:"下条视频怎么拍",body:"建议拍「月考后，先抓住这 3 个失分点」：区分知识漏洞、审题和计算失误，给出一周纠错安排。结尾邀请家长留言具体问题。"},{num:3,tag:"下场",title:"下场直播改什么话题",body:"建议讲「国庆后收心与期中备考」：先收集当前学习问题，再给出阶段判断与短步骤方法，穿插答疑。销售内容依据真实需求承接，直播后复盘留存与成交。"}]:g.actions||[]}),t=Ps({trend:"chart",portrait:{}}),s=Z=>t.portrait[Z]||"chart",i=ue(()=>g.northstar.find(Z=>Z.key===g.northStar)||g.northstar[0]||{}),o=ue(()=>Math.max(...g.trend.map(Z=>Z.v),1)),r=K(0),a=K(null);let u=!1;const p=ue(()=>{const Z=new Date,V=(Z.getDay()+6)%7;return new Date(Z.getFullYear(),Z.getMonth(),Z.getDate()-V)}),c=ue(()=>Array.from({length:12},(Z,V)=>{const E=new Date(p.value.getFullYear(),p.value.getMonth(),p.value.getDate()+V*7);return{t:V===0?"本周":`W${String(E.getMonth()+1).padStart(2,"0")}-${V+1}`,d:`${E.getMonth()+1}/${E.getDate()}`}}));function h(Z){return c.value.slice(Z*4,Z*4+4)}function m(Z){const V=new Date(String(Z.planned_at).replace(" ","T"));return Math.floor((new Date(V.getFullYear(),V.getMonth(),V.getDate())-p.value)/(7*864e5))}function S(Z){const V=Ic(g.gantt||[],p.value,Z);return g.planningTasks.forEach(E=>{const z=m(E)-Z*4,G=V[E.type==="live"?4:2];G&&z>=0&&z<4&&(G.items=G.items.filter(W=>!(W.s<=z&&W.e>=z)),G.items.push({name:E.title,s:z,e:z,t:E.type==="live"?"live":"video"}))}),V.map(E=>{const z=new Set;return{...E,items:E.items.filter(G=>{const W=Array.from({length:G.e-G.s+1},(q,he)=>G.s+he);return W.some(q=>z.has(q))?!1:(W.forEach(q=>z.add(q)),!0)})}})}function M(Z){r.value=Math.max(0,Math.min(2,r.value+Z))}function A(Z){Math.abs(Z.deltaX)<24||Math.abs(Z.deltaX)<Math.abs(Z.deltaY)||(Z.preventDefault(),!u&&(u=!0,M(Z.deltaX>0?1:-1),window.setTimeout(()=>{u=!1},280)))}function O(Z){var V;a.value=((V=Z.touches[0])==null?void 0:V.clientX)??null}function ee(Z){var E;if(a.value==null)return;const V=(((E=Z.changedTouches[0])==null?void 0:E.clientX)??a.value)-a.value;a.value=null,Math.abs(V)>=45&&M(V<0?1:-1)}function P(Z){const G=Math.max(...Z.map(ke=>ke.v))*1.15,W=ke=>28+ke*584/(Z.length-1),q=ke=>152-ke/G*124,he=Z.map((ke,Ee)=>`${W(Ee)},${q(ke.v)}`).join(" "),xe=`M${W(0)},152 L${he.split(" ").join(" L ")} L${W(Z.length-1)},152 Z`,nn=[0,.25,.5,.75,1].map(ke=>`<line x1="28" x2="612" y1="${152-ke*124}" y2="${152-ke*124}" stroke="#F1F1ED"/>`).join(""),Je=Z.map((ke,Ee)=>`<circle cx="${W(Ee)}" cy="${q(ke.v)}" r="3.5" fill="#191919"/><text x="${W(Ee)}" y="168" font-size="11" text-anchor="middle" fill="#9BA0A6">${ke.d}</text><text x="${W(Ee)}" y="${q(ke.v)-8}" font-size="10" text-anchor="middle" fill="#5F6368">${ke.v}</text>`).join("");return`<svg viewBox="0 0 640 180" style="width:100%;height:180px">${nn}<path d="${xe}" fill="#F4F4F1" fill-opacity=".9"/><polyline points="${he}" fill="none" stroke="#191919" stroke-width="2"/>${Je}</svg>`}function ne(Z){const V=Math.max(...Z.data.map(E=>E[1]),1);return Z.data.map(E=>({...E,w:Math.max(4,E[1]/V*100)}))}function ie(Z){return Z.data.reduce((V,E)=>V+E[1],0)}return(Z,V)=>(d(),v("div",null,[l("section",$m,[l("div",Tm,[V[9]||(V[9]=l("span",{class:"red-hero-eyebrow"},"小红书 × NORTHSTAR · 创作者工作台",-1)),V[10]||(V[10]=l("p",{class:"red-hero-kicker"},"你的下一步，从这里开始",-1)),V[11]||(V[11]=l("h2",null,[Ae("好内容，"),l("br"),Ae("每一场都有新方向。")],-1)),V[12]||(V[12]=l("p",{class:"red-hero-description"},[Ae("把数据里的发现，变成下一次创作的灵感。"),l("br"),Ae("和 Cue 一起，让每一份经验都值得被复用。")],-1)),l("button",{class:"red-hero-link",onClick:V[0]||(V[0]=E=>se(g).activeView="live-summary")},[...V[8]||(V[8]=[Ae("去看看这场直播 ",-1),l("span",null,"↗",-1)])])]),V[13]||(V[13]=vl('<div class="red-hero-art" aria-hidden="true" data-v-4009d967><div class="red-orbit" data-v-4009d967></div><span class="red-spark" data-v-4009d967>✦</span><div class="red-editorial-note" data-v-4009d967><small data-v-4009d967>NORTHSTAR / CREATOR NOTES</small><strong data-v-4009d967>每一次<br data-v-4009d967>都有收获。</strong><div class="red-note-line" data-v-4009d967></div><span data-v-4009d967>复盘 · 灵感 · 下一步</span><i data-v-4009d967>Make your next move.</i></div><span class="red-edition" data-v-4009d967>01 / 内容经营新日常</span></div><div class="red-hero-watermark" aria-hidden="true" data-v-4009d967>NEXT MOVE</div>',2))]),l("div",Cm,[(d(!0),v(Q,null,oe(n.value,E=>(d(),v("div",{key:E.num,class:"action-card"},[l("span",Dm,f(E.tag),1),l("div",Am,[l("span",Em,f(E.num),1),Ae(f(E.title),1)]),l("div",Im,f(E.body),1)]))),128))]),l("div",Mm,[l("div",Om,[l("div",Rm,"北极星指标 · "+f(i.value.label),1),l("div",Pm,f(i.value.value),1),l("div",Lm,f(i.value.delta),1)]),l("div",Nm,[l("div",Fm,[l("span",null,"目标 "+f(i.value.goal),1),l("span",null,"完成 "+f(i.value.pct)+"%",1)]),l("div",zm,[l("div",{class:"fill",style:Pn({width:i.value.pct+"%"})},null,4)])]),l("div",Um,[(d(!0),v(Q,null,oe(se(g).northstar,E=>(d(),v("button",{key:E.key,class:we({on:E.key===se(g).northStar}),onClick:z=>se(g).northStar=E.key},f(E.label),11,jm))),128))])]),l("div",Bm,[l("div",Vm,[V[14]||(V[14]=l("h3",null,"内容生产排期（未来 4 周）",-1)),l("a",{class:"sub",style:{cursor:"pointer"},onClick:V[1]||(V[1]=E=>se(g).activeView="planning")},"查看全量排期 ↗")]),l("div",{class:"gantt-carousel swipe-gantt home-gantt",onWheel:A,onTouchstart:O,onTouchend:ee},[l("div",{class:"gantt-slides",style:Pn({transform:`translateX(-${r.value*100}%)`})},[(d(),v(Q,null,oe(3,E=>l("div",{key:E,class:"gantt-slide"},[l("div",Xm,[l("div",Wm,[V[15]||(V[15]=l("div",{class:"lane"},"生产任务",-1)),l("div",Hm,[(d(!0),v(Q,null,oe(h(E-1),z=>(d(),v("div",{key:z.t,class:we(["w",{cur:z.t==="本周"}])},[l("div",null,f(z.t),1),l("div",qm,f(z.d),1)],2))),128))])]),(d(!0),v(Q,null,oe(S(E-1),z=>(d(),v("div",{key:z.lane,class:"gantt-row"},[l("div",Km,f(z.lane),1),l("div",Gm,[(d(!0),v(Q,null,oe(z.items,(G,W)=>(d(),v("div",{key:`${G.name}-${W}`,class:we(["gantt-bar",G.t]),style:Pn({gridColumn:G.s+1+" / "+(G.e+2)})},f(G.name),7))),128))])]))),128))])])),64))],4)],32),V[16]||(V[16]=vl('<div class="gantt-legend" data-v-4009d967><span class="lg" data-v-4009d967><span class="sw" style="background:var(--green-deep);" data-v-4009d967></span>短视频</span><span class="lg" data-v-4009d967><span class="sw" style="background:var(--text);" data-v-4009d967></span>直播</span><span class="lg" data-v-4009d967><span class="sw" style="background:#C9CBC2;" data-v-4009d967></span>脚本筹备</span></div>',1))]),l("div",Ym,[(d(!0),v(Q,null,oe(se(g).kpis,E=>(d(),v("div",{key:E.label,class:"kpi"},[l("div",Qm,f(E.label),1),l("div",Jm,f(E.value),1),l("div",{class:we(["delta",E.up?"up":E.warm?"warm":"down"])},f(E.delta),3)]))),128))]),l("div",Zm,[l("div",eg,[V[17]||(V[17]=l("h3",null,"近 7 日播放趋势",-1)),l("div",ng,[l("span",tg,"峰值 "+f(o.value)+" · 8/25",1),l("div",sg,[l("button",{class:we({on:t.trend==="chart"}),onClick:V[2]||(V[2]=E=>t.trend="chart")},"图表",2),l("button",{class:we({on:t.trend==="list"}),onClick:V[3]||(V[3]=E=>t.trend="list")},"列表",2)])])]),t.trend==="chart"?(d(),v("div",{key:0,innerHTML:P(se(g).trend)},null,8,ig)):(d(),v("table",lg,[V[18]||(V[18]=l("thead",null,[l("tr",null,[l("th",null,"日期"),l("th",{class:"r"},"播放量"),l("th",{class:"r"},"占比"),l("th",{class:"r"},"热力")])],-1)),l("tbody",null,[(d(!0),v(Q,null,oe(se(g).trend,E=>(d(),v("tr",{key:E.d},[l("td",og,f(E.d),1),l("td",rg,f(E.v.toLocaleString()),1),l("td",ag,f((E.v/o.value*100).toFixed(0))+"%",1),l("td",ug,f(E.v>=7500?"热":E.v>=6e3?"温":"冷"),1)]))),128))])]))]),l("div",cg,[(d(!0),v(Q,null,oe(se(g).portraits,E=>(d(),v("div",{key:E.title,class:"card"},[l("div",dg,[l("h3",null,f(E.title),1),l("div",pg,[l("button",{class:we({on:s(E.title)==="chart"}),onClick:z=>t.portrait[E.title]="chart"},"图表",10,vg),l("button",{class:we({on:s(E.title)==="list"}),onClick:z=>t.portrait[E.title]="list"},"列表",10,fg)])]),s(E.title)==="chart"?(d(!0),v(Q,{key:0},oe(ne(E),z=>(d(),v("div",{key:z[0],class:"bar-row"},[l("div",hg,f(z[0]),1),l("div",mg,[l("div",{class:"fill",style:Pn({width:z.w+"%"})},null,4)]),l("div",gg,f(z[1])+f(E.unit),1)]))),128)):(d(),v("table",_g,[V[20]||(V[20]=l("thead",null,[l("tr",null,[l("th",null,"分组"),l("th",{class:"r"},"占比"),l("th",{class:"r"},"人数估算"),l("th",{class:"r"},"条数")])],-1)),l("tbody",null,[(d(!0),v(Q,null,oe(E.data,z=>(d(),v("tr",{key:z[0]},[l("td",yg,f(z[0]),1),l("td",bg,f(z[1])+f(E.unit),1),l("td",wg,f(Math.round(z[1]/100*224e3).toLocaleString()),1),l("td",kg,f(Math.round(z[1]/100*187)),1)]))),128)),l("tr",null,[l("td",xg,"合计 "+f(E.data.length)+" 项 · "+f(ie(E).toFixed(2))+f(E.unit),1),V[19]||(V[19]=l("td",{class:"r",style:{background:"#FAFAFA"},colspan:"2"},"22.4w 粉 · 187 条视频",-1))])])]))]))),128))]),H("",!0),H("",!0),l("div",Sg,[V[29]||(V[29]=l("div",{class:"card-h"},[l("h3",null,"内容表现 TOP"),l("span",{class:"sub"},"历史内容 · 演示数据")],-1)),se(g).videos.length?(d(),v("div",$g,[(d(!0),v(Q,null,oe(se(g).videos,E=>(d(),v("div",{key:E.t,class:"video-card"},[l("div",Tg,[l("img",{src:E.cover,alt:E.t,loading:"lazy"},null,8,Cg),l("span",Dg,f(E.dur),1)]),l("div",Ag,[l("div",Eg,[l("span",Ig,f(E.tag),1),Ae(f(E.t),1)]),l("div",Mg,[l("span",null,"♡ "+f(E.like)+" · 播放",1)])])]))),128))])):(d(),v("div",Og,[(d(),v(Q,null,oe(["短视频截图占位 01","短视频截图占位 02","短视频截图占位 03"],E=>l("div",{key:E,class:"video-card placeholder-card"},[l("div",Rg,[l("img",{src:"./assets/live/demo-replay.svg",alt:E},null,8,Pg),V[26]||(V[26]=l("span",{class:"dur"},"待补充",-1))]),l("div",Lg,[l("div",Ng,[V[27]||(V[27]=l("span",{class:"tag"},"待导入",-1)),Ae(f(E),1)]),V[28]||(V[28]=l("div",{class:"stats"},[l("span",null,"上传视频号短视频报表、文件或公开链接后替换")],-1))])])),64))]))])]))}},Qa=Dn(Fg,[["__scopeId","data-v-4009d967"]]),zg={class:"confirm-body"},Ug={id:"confirm-title"},jg={id:"confirm-message"},Bg={__name:"ConfirmDialog",props:{open:Boolean,title:String,message:String,confirmLabel:{type:String,default:"确认"}},emits:["cancel","confirm"],setup(e,{emit:n}){const t=e,s=n,i=K(null),o=K(null);return hn(()=>t.open,async r=>{var a,u,p;await Ut(),r?((a=i.value)==null||a.showModal(),(u=o.value)==null||u.focus()):(p=i.value)==null||p.close()}),(r,a)=>(d(),It(L1,{to:"body"},[l("dialog",{ref_key:"dialog",ref:i,class:"redcowork-replica-v2-confirm","aria-labelledby":"confirm-title","aria-describedby":"confirm-message",onCancel:a[3]||(a[3]=mn(u=>s("cancel"),["prevent"])),onClick:a[4]||(a[4]=u=>{u.target===i.value&&s("cancel")})},[l("div",zg,[l("header",null,[a[5]||(a[5]=l("span",{class:"confirm-icon"},"!",-1)),l("button",{"aria-label":"关闭确认窗口",onClick:a[0]||(a[0]=u=>s("cancel"))},"×")]),l("h2",Ug,f(e.title),1),l("p",jg,f(e.message),1),l("footer",null,[l("button",{ref_key:"cancelButton",ref:o,onClick:a[1]||(a[1]=u=>s("cancel"))},"取消",512),l("button",{class:"confirm-primary",onClick:a[2]||(a[2]=u=>s("confirm"))},f(e.confirmLabel),1)])])],544)]))}},Vg=Dn(Bg,[["__scopeId","data-v-1cdf398a"]]),Xg={class:"plan-page"},Wg={class:"plan-hero"},Hg={class:"plan-summary"},qg={class:"plan-task-count",title:"统计所选月份内甘特图展示的全部排期卡片"},Kg={class:"card plan-create"},Gg={class:"plan-form"},Yg=["value"],Qg={class:"mention-wrap wide"},Jg={key:0,class:"mention-menu"},Zg=["onMousedown"],e5={key:0},n5=["disabled"],t5={class:"card"},s5={class:"card-h"},i5={class:"period-picker"},l5=["value"],o5={key:0,value:"september"},r5={key:1,value:"current"},a5=["value"],u5={class:"gantt full-gantt"},c5={class:"gantt-head"},d5={class:"weeks"},p5={style:{"font-weight":"400","font-size":"11px",color:"var(--text-mute)"}},v5={class:"lane"},f5={class:"gantt-track"},h5=["onClick"],m5={key:0,class:"additional-plans"},g5=["onClick"],_5={class:"gantt-footer"},y5={class:"gantt-toolbar"},b5={key:1,class:"plan-empty"},w5={key:2,class:"gantt-editor"},k5={class:"gantt-editor-head"},x5={class:"gantt-editor-grid"},S5=["value"],$5={class:"editor-notes"},T5={class:"gantt-mention-wrap"},C5=["value"],D5={key:0,class:"gantt-mention-menu"},A5=["onMousedown"],E5={key:0},I5={class:"gantt-editor-actions"},M5={__name:"PlanningView",setup(e){const n=K(!1),t=new Date,s=K(`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}`),i=Ps({type:"video",title:"",dateChoice:"0",planned_at:"",notes:""}),o=K(!1),r=K(null),a=K(!1),u=Ps({name:"",type:"video",lane:"",notes:""}),p=K(!1),c=K(""),h=K(!1),m=K(""),S=K(new Set(JSON.parse(localStorage.getItem("redcowork-replica-v2-hidden-planning-templates")||"[]"))),M=[{label:"知识库 / 清华优优 AI Wiki",kind:"知识库"},{label:"短视频脚本",kind:"子库"},{label:"直播复盘",kind:"子库"},{label:"内容生产",kind:"子库"},{label:"转化变现",kind:"子库"},{label:"竞品研究",kind:"子库"},{label:"短视频脚本 / 11月短视频脚本.pdf",kind:"文档"},{label:"直播复盘 / 优优账号X直播记录【咨询+精讲课产品销售】.pdf",kind:"文档"},{label:"内容生产 / 直播SOP.pdf",kind:"文档"},{label:"转化变现 / 精讲课塑品脚本.pdf",kind:"文档"},{label:"竞品研究 / 汪舅舅-教育内容脚本转写.txt",kind:"文档"},{label:"竞品研究 / 雪梨老师-英语学习内容脚本转写.txt",kind:"文档"}],A=ue(()=>[...M,...g.demoKnowledgeDocuments.map($=>({label:$.title,kind:"文档"}))]),O=ue(()=>{const $=c.value.trim().toLowerCase();return $?A.value.filter(w=>w.label.toLowerCase().includes($)):A.value}),ee=ue(()=>{const $=m.value.trim().toLowerCase();return $?A.value.filter(w=>w.label.toLowerCase().includes($)):A.value});function P(){const $=i.notes.lastIndexOf("@");p.value=$>=0,c.value=$>=0?i.notes.slice($+1).trim():""}function ne($){const w=i.notes.lastIndexOf("@");i.notes=w>=0?`${i.notes.slice(0,w)}@${$.label} `:`${i.notes} @${$.label} `,p.value=!1}function ie(){const $=u.notes.lastIndexOf("@");h.value=$>=0,m.value=$>=0?u.notes.slice($+1).trim():""}function Z($){const w=u.notes.lastIndexOf("@");u.notes=w>=0?`${u.notes.slice(0,w)}@${$.label} `:`${u.notes} @${$.label} `,h.value=!1}const V=K(0),E=K(null);let z=!1;const G=ue(()=>[...g.planningTasks].sort(($,w)=>String($.planned_at).localeCompare(String(w.planned_at)))),W=ue(()=>{const[$,w]=s.value.split("-").map(Number);if($===t.getFullYear()&&w===t.getMonth()+1){const X=(t.getDay()+6)%7;return new Date($,w-1,t.getDate()-X)}const C=(new Date($,w-1,1).getDay()+6)%7;return new Date($,w-1,1-C)});function q($){return`${$.getMonth()+1}/${$.getDate()}`}function he($){const w=new Date(String($.planned_at).replace(" ","T"));return Math.floor((new Date(w.getFullYear(),w.getMonth(),w.getDate())-W.value)/(7*864e5))}const xe=ue(()=>Array.from({length:12},($,w)=>{const j=new Date(W.value.getFullYear(),W.value.getMonth(),W.value.getDate()+w*7),C=new Date(t.getFullYear(),t.getMonth(),t.getDate()-(t.getDay()+6)%7);return{start:j,t:+j==+C?"本周":`W${String(j.getMonth()+1).padStart(2,"0")}-${w+1}`,d:q(j)}})),nn=ue(()=>Math.ceil(xe.value.length/4));function Je($){return xe.value.slice($*4,$*4+4)}const ke=ue(()=>Array.from({length:nn.value},($,w)=>{const j=xe.value[w*4],C=xe.value[w*4+3],X=new Date(C.start.getFullYear(),C.start.getMonth(),C.start.getDate()+6),F=new Date(t.getFullYear(),t.getMonth(),t.getDate()),B=X<F?"历史周期":j.start>F?"后续周期":"当前周期";return{value:w,label:`${B} · ${j.d} – ${q(X)}`}})),Ee=ue(()=>xe.value.slice(V.value*4,V.value*4+4).map(($,w)=>({value:String(V.value*4+w),label:$.t+" · "+$.d+" 起"})));hn(V,()=>{i.dateChoice=String(V.value*4)}),hn(s,()=>{V.value=0,i.dateChoice="0"});function Ie($){$==="september"?(s.value="2026-09",V.value=0):$==="current"?(s.value=`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}`,V.value=0):V.value=Number($)}function We($){const w=Ic(g.gantt||[],W.value,$).map((C,X)=>{const B=C.items.map(ae=>{const le=`${$}:${X}:${ae.name}:${ae.s}:${ae.e}`;return{...ae,...Y.value[le]||{},templateKey:le}}).map(ae=>({...ae,templateKey:ae.templateKey})).filter(ae=>!S.value.has(ae.templateKey));return{...C,items:B}}),j=G.value.filter(C=>{const X=he(C)-$*4;return X>=0&&X<4});for(const C of["video","live"]){const X=w[C==="live"?4:2],F=j.filter(B=>B.type===C);for(let B=0;B<4;B++){const ae=F.filter(le=>he(le)-$*4===B).at(-1);ae&&(X.items=X.items.filter(le=>!(le.s<=B&&le.e>=B)),X.items.push({taskId:ae.id,notes:ae.notes,document_id:ae.document_id,name:ae.title,s:B,e:B,t:C}))}}return w.map(C=>({...C,items:C.items.slice().sort((X,F)=>X.s-F.s)}))}const An=ue(()=>{const $=new Set(We(V.value).flatMap(w=>w.items.map(j=>j.taskId).filter(Boolean)));return G.value.filter(w=>he(w)>=V.value*4&&he(w)<V.value*4+4&&!$.has(w.id))}),_n=ue(()=>{var F,B;const[$,w]=s.value.split("-").map(Number),j=new Date($,w-1,1),C=new Date($,w,0,23,59,59,999);let X=0;for(let ae=0;ae<nn.value;ae++)for(const le of We(ae))for(const me of le.items||[]){const _e=(F=xe.value[ae*4+Number(me.s||0)])==null?void 0:F.start,Te=(B=xe.value[ae*4+Number(me.e??me.s??0)])==null?void 0:B.start;if(!_e||!Te)continue;const ye=new Date(Te.getFullYear(),Te.getMonth(),Te.getDate()+6,23,59,59,999);_e<=C&&ye>=j&&X++}return X});function He($){const w=Math.max(0,Math.min(nn.value-1,V.value+$));w!==V.value&&(V.value=w)}function En($){Math.abs($.deltaX)<24||Math.abs($.deltaX)<Math.abs($.deltaY)||($.preventDefault(),!z&&(z=!0,He($.deltaX>0?1:-1),window.setTimeout(()=>{z=!1},280)))}function Ue($){var w;E.value=((w=$.touches[0])==null?void 0:w.clientX)??null}function Mn($){var j;if(E.value==null)return;const w=(((j=$.changedTouches[0])==null?void 0:j.clientX)??E.value)-E.value;E.value=null,Math.abs(w)>=45&&He(w<0?1:-1)}function qe(){a.value=!a.value,r.value=null,un(a.value?"已进入编辑态，请选择一张排期卡片":"已退出编辑态")}function kn(){var $;($=document.querySelector(".plan-create"))==null||$.scrollIntoView({behavior:"smooth",block:"center"}),window.setTimeout(()=>{var w;return(w=document.querySelector(".plan-create input"))==null?void 0:w.focus()},350)}function On($){const w=r.value;return w?$.taskId||w.taskId?!!$.taskId&&$.taskId===w.taskId:!!$.templateKey&&$.templateKey===w.templateKey:!1}function Fn($,w){a.value=!0,r.value=$,u.name=$.name,u.type=$.t==="live"?"live":"video",u.lane=w;const j=g.demoKnowledgeDocuments.find(C=>C.id===$.document_id||C.title===$.name||C.local_content===$.notes);u.notes=j?"@"+j.title+`

`+j.local_content:$.notes||`内容任务：${w}。可补充脚本链接、拍摄要求或 @ 知识库资料。`}const Y=K(JSON.parse(localStorage.getItem("redcowork-replica-v2-planning-template-edits")||"{}"));function U(){var j;if(!r.value)return;const $=r.value,w=`内容任务：${u.lane}。拍摄时先用一句问题建立共鸣，再给出一个可执行步骤；可 @ 引用知识库资料。`;$.name=u.name.trim()||$.name,$.t=u.type,$.notes=u.notes.trim()||$.notes||w;for(const C of g.gantt||[]){const X=(j=C.items)==null?void 0:j.find(F=>F===$||F.name===$.name);X&&(X.name=$.name,X.t=$.t,X.notes=$.notes)}$.templateKey&&(Y.value={...Y.value,[$.templateKey]:{name:$.name,t:$.t,notes:$.notes}},localStorage.setItem("redcowork-replica-v2-planning-template-edits",JSON.stringify(Y.value))),$.taskId&&g2($.taskId,{title:$.name,type:$.t,notes:$.notes}),un("排期卡片已更新")}function b(){r.value&&(n.value=!0)}function D(){if(!r.value)return;const $=r.value;n.value=!1,$.taskId?_2($.taskId):$.templateKey&&(S.value=new Set([...S.value,$.templateKey]),localStorage.setItem("redcowork-replica-v2-hidden-planning-templates",JSON.stringify([...S.value]))),r.value=null,un("排期已删除")}async function L(){const $=xe.value[Number(i.dateChoice)],w=i.dateChoice==="custom"?i.planned_at:$?$.start.getFullYear()+"-"+String($.start.getMonth()+1).padStart(2,"0")+"-"+String($.start.getDate()).padStart(2,"0")+"T20:00":"";if(!i.title.trim()||!w){un("请填写标题，并选择计划日期");return}o.value=!0;const j=await Eo({type:i.type,title:i.title,planned_at:w,notes:i.notes});o.value=!1,j.ok&&(i.title="",i.planned_at="",i.notes="")}return($,w)=>{var j,C,X;return d(),v(Q,null,[l("div",Xg,[l("section",Wg,[w[17]||(w[17]=l("div",null,[l("span",{class:"pill green"},"清华优优"),l("h2",null,"内容生产排期"),l("p",null,"短视频与直播落到同一条生产线；左右滑动即可查看后续周期。")],-1)),l("div",Hg,[l("label",null,[w[15]||(w[15]=Ae("排期月份",-1)),en(l("input",{"onUpdate:modelValue":w[0]||(w[0]=F=>s.value=F),type:"month"},null,512),[[bn,s.value]])]),l("div",qg,[l("b",null,f(_n.value),1),w[16]||(w[16]=l("span",null,"本月排期任务",-1))])])]),l("section",Kg,[w[21]||(w[21]=l("div",{class:"card-h"},[l("h3",null,"新增内容"),l("span",{class:"sub"},"保存后立刻进入甘特与 Cue 提醒")],-1)),l("div",Gg,[en(l("select",{"onUpdate:modelValue":w[1]||(w[1]=F=>i.type=F),class:"plan-input"},[...w[18]||(w[18]=[l("option",{value:"video"},"短视频",-1),l("option",{value:"live"},"直播",-1)])],512),[[ys,i.type]]),en(l("select",{"onUpdate:modelValue":w[2]||(w[2]=F=>i.dateChoice=F),class:"plan-input"},[(d(!0),v(Q,null,oe(Ee.value,F=>(d(),v("option",{key:F.value,value:F.value},f(F.label),9,Yg))),128)),w[19]||(w[19]=l("option",{value:"custom"},"自选日期",-1))],512),[[ys,i.dateChoice]]),i.dateChoice==="custom"?en((d(),v("input",{key:0,"onUpdate:modelValue":w[3]||(w[3]=F=>i.planned_at=F),class:"plan-input",type:"date"},null,512)),[[bn,i.planned_at]]):H("",!0),en(l("input",{"onUpdate:modelValue":w[4]||(w[4]=F=>i.title=F),class:"plan-input wide",placeholder:"标题或直播主题"},null,512),[[bn,i.title]]),l("div",Qg,[en(l("input",{"onUpdate:modelValue":w[5]||(w[5]=F=>i.notes=F),class:"plan-input",placeholder:"输入 @ 引用知识库、子库或文档",onInput:P,onFocus:P,onKeydown:w[6]||(w[6]=Ht(F=>p.value=!1,["esc"]))},null,544),[[bn,i.notes]]),p.value?(d(),v("div",Jg,[w[20]||(w[20]=l("div",{class:"mention-head"},[Ae("引用知识库资料 "),l("small",null,"输入名称筛选")],-1)),(d(!0),v(Q,null,oe(O.value,F=>(d(),v("button",{key:F.label,type:"button",onMousedown:mn(B=>ne(F),["prevent"])},[l("span",null,f(F.label),1),l("em",null,f(F.kind),1)],40,Zg))),128)),O.value.length?H("",!0):(d(),v("p",e5,"没有匹配的知识库资料"))])):H("",!0)]),l("button",{class:"wiki-sum-btn",disabled:o.value,onClick:L},f(o.value?"保存中…":"加入排期"),9,n5)])]),l("section",t5,[l("div",s5,[w[23]||(w[23]=l("div",null,[l("h3",null,"全量内容排期"),l("span",{class:"sub"},"双指左右滑动甘特表切换周期；每次聚焦 4 周")],-1)),l("label",i5,[w[22]||(w[22]=l("span",null,"查看周期",-1)),l("select",{value:V.value,onChange:w[7]||(w[7]=F=>Ie(F.target.value))},[s.value!=="2026-09"?(d(),v("option",o5,"历史周期 · 九月（8/31 – 9/27）")):H("",!0),s.value==="2026-09"?(d(),v("option",r5,"当前周期 · 十月")):H("",!0),(d(!0),v(Q,null,oe(ke.value,F=>(d(),v("option",{key:F.value,value:F.value},f(F.label),9,a5))),128))],40,l5)])]),l("div",{class:"gantt-carousel swipe-gantt",onWheel:En,onTouchstart:Ue,onTouchend:Mn},[l("div",{class:"gantt-slides",style:Pn({transform:`translateX(-${V.value*100}%)`})},[(d(!0),v(Q,null,oe(ke.value,F=>(d(),v("div",{key:F.value,class:"gantt-slide"},[l("div",u5,[l("div",c5,[w[24]||(w[24]=l("div",{class:"lane"},"生产任务",-1)),l("div",d5,[(d(!0),v(Q,null,oe(Je(F.value),B=>(d(),v("div",{key:B.t,class:we(["w",{cur:B.t==="本周"}])},[l("div",null,f(B.t),1),l("div",p5,f(B.d),1)],2))),128))])]),(d(!0),v(Q,null,oe(We(F.value),B=>(d(),v("div",{key:B.lane,class:"gantt-row"},[l("div",v5,f(B.lane),1),l("div",f5,[(d(!0),v(Q,null,oe(B.items,(ae,le)=>(d(),v("button",{key:`${ae.name}-${le}`,type:"button",class:we(["gantt-bar",[ae.t,{muted:a.value&&!On(ae),"editing-card":a.value&&On(ae)}]]),style:Pn({gridColumn:ae.s+1+" / "+(ae.e+2)}),onClick:mn(me=>Fn(ae,B.lane),["stop"])},f(ae.name),15,h5))),128))])]))),128))])]))),128))],4)],32),An.value.length?(d(),v("div",m5,[w[25]||(w[25]=l("span",null,"同周期其他任务",-1)),(d(!0),v(Q,null,oe(An.value,F=>(d(),v("button",{key:F.id,onClick:B=>Fn({taskId:F.id,name:F.title,t:F.type,notes:F.notes},F.type==="live"?"直播 · 开播":"短视频 · 拍摄发布")},f(F.title),9,g5))),128))])):H("",!0),l("div",_5,[w[26]||(w[26]=vl('<div class="gantt-legend" data-v-e5a0f5a6><span class="lg" data-v-e5a0f5a6><span class="sw" style="background:var(--green-deep);" data-v-e5a0f5a6></span>短视频</span><span class="lg" data-v-e5a0f5a6><span class="sw" style="background:var(--text);" data-v-e5a0f5a6></span>直播</span><span class="lg" data-v-e5a0f5a6><span class="sw" style="background:#C9CBC2;" data-v-e5a0f5a6></span>脚本筹备</span></div>',1)),l("div",y5,[l("button",{type:"button",class:we({active:a.value}),onClick:qe},f(a.value?"完成编辑":"编辑"),3),l("button",{type:"button",onClick:kn},"＋ 新增内容")])]),G.value.length?H("",!0):(d(),v("div",b5,"上方还未添加真实任务；当前展示的是内容模板，新增任务会自动放到对应周与生产线。")),r.value?(d(),v("section",w5,[l("div",k5,[l("div",null,[w[27]||(w[27]=l("span",{class:"pill green"},"正在编辑",-1)),l("h3",null,f(u.lane),1)]),l("button",{type:"button",class:"editor-close",onClick:w[8]||(w[8]=F=>r.value=null)},"取消选择")]),l("div",x5,[l("label",null,[w[28]||(w[28]=Ae("内容标题",-1)),l("input",{value:u.name||((j=r.value)==null?void 0:j.name),onInput:w[9]||(w[9]=F=>u.name=F.target.value)},null,40,S5)]),l("label",null,[w[30]||(w[30]=Ae("内容类型",-1)),en(l("select",{"onUpdate:modelValue":w[10]||(w[10]=F=>u.type=F)},[...w[29]||(w[29]=[l("option",{value:"video"},"短视频",-1),l("option",{value:"live"},"直播",-1),l("option",{value:"script"},"脚本筹备",-1)])],512),[[ys,u.type]])]),l("label",$5,[w[32]||(w[32]=Ae("执行备注 / 资料引用",-1)),l("div",T5,[l("textarea",{value:u.notes||((C=r.value)==null?void 0:C.notes)||`内容任务：${u.lane}。拍摄时先用一句问题建立共鸣，再给出一个可执行步骤；可 @ 引用知识库资料。`,onInput:w[11]||(w[11]=F=>{u.notes=F.target.value,ie()}),placeholder:"可填写拍摄要求，或 @ 引用知识库资料",onFocus:ie,onKeydown:w[12]||(w[12]=Ht(F=>h.value=!1,["esc"]))},null,40,C5),h.value?(d(),v("div",D5,[w[31]||(w[31]=l("div",{class:"mention-head"},[Ae("引用知识库资料 "),l("small",null,"输入名称筛选")],-1)),(d(!0),v(Q,null,oe(ee.value,F=>(d(),v("button",{key:F.label,type:"button",onMousedown:mn(B=>Z(F),["prevent"])},[l("span",null,f(F.label),1),l("em",null,f(F.kind),1)],40,A5))),128)),ee.value.length?H("",!0):(d(),v("p",E5,"没有匹配的知识库资料"))])):H("",!0)])])]),l("div",I5,[l("button",{type:"button",class:"editor-delete",onClick:b},"删除排期"),l("div",null,[l("button",{type:"button",onClick:w[13]||(w[13]=F=>r.value=null)},"取消"),l("button",{type:"button",class:"editor-save",onClick:U},"保存修改")])])])):H("",!0)])]),on(Vg,{open:n.value,title:"删除这条排期？",message:"将从内容排期中移除「"+(((X=r.value)==null?void 0:X.name)||"")+"」。","confirm-label":"确认删除",onCancel:w[14]||(w[14]=F=>n.value=!1),onConfirm:D},null,8,["open","message"])],64)}}},O5=Dn(M5,[["__scopeId","data-v-e5a0f5a6"]]),R5={class:"knowledge-explorer"},P5={class:"graph-node-list"},L5=["onClick"],N5={key:0},F5=["aria-label"],z5={class:"graph-focus"},U5={key:0,class:"graph-branches"},j5=["onClick"],B5={key:0},V5={key:1},X5={key:0},W5={class:"graph-quote"},H5={key:0},q5=["onClick"],K5={key:1},G5={__name:"KnowledgeGraph",props:{graph:Object},emits:["open-document"],setup(e,{emit:n}){const t=e,s=n,i=K(""),o=K(""),r=ue(()=>{var S;return((S=t.graph)==null?void 0:S.nodes)||[]}),a=ue(()=>{var S;return(((S=t.graph)==null?void 0:S.edges)||[]).filter(M=>{var A;return(A=M.quote)==null?void 0:A.trim()})}),u=ue(()=>Object.fromEntries(r.value.map(S=>[S.id,S]))),p=ue(()=>r.value.filter(S=>S.label.toLowerCase().includes(i.value.toLowerCase())));hn(r,()=>{var S,M;u.value[o.value]||(o.value=((S=r.value.find(A=>A.label==="1+1+1复习法"))==null?void 0:S.id)||((M=r.value[0])==null?void 0:M.id)||"")},{immediate:!0});const c=ue(()=>u.value[o.value]),h=ue(()=>a.value.filter(S=>S.source===o.value||S.target===o.value)),m=ue(()=>[...new Set(h.value.map(S=>S.source===o.value?S.target:S.source))].map(S=>u.value[S]).filter(Boolean).slice(0,8).map((S,M)=>({...S,x:M%2?555:15,y:35+Math.floor(M/2)*100})));return(S,M)=>(d(),v("div",R5,[l("aside",null,[en(l("input",{"onUpdate:modelValue":M[0]||(M[0]=A=>i.value=A),placeholder:"搜索实体 / 概念","aria-label":"搜索图谱节点"},null,512),[[bn,i.value]]),l("div",P5,[(d(!0),v(Q,null,oe(p.value,A=>(d(),v("button",{key:A.id,class:we({active:A.id===o.value}),onClick:O=>o.value=A.id},[Ae(f(A.label),1),l("small",null,f(A.kind||"概念"),1)],10,L5))),128))])]),c.value?(d(),v("main",N5,[M[2]||(M[2]=l("p",{class:"graph-help"},"选中一个实体查看相邻关系；每条关系可展开核对原文。仅显示有引文的关系。",-1)),l("div",{class:"graph-diagram",role:"group","aria-label":c.value.label+"的关联关系"},[l("div",z5,f(c.value.label),1),m.value.length?(d(),v("div",U5,[(d(!0),v(Q,null,oe(m.value,A=>(d(),v("button",{key:A.id,class:"graph-neighbor-card",onClick:O=>o.value=A.id},[l("span",null,f(A.label),1),l("small",null,f(A.kind||"概念"),1)],8,j5))),128))])):H("",!0)],8,F5),h.value.length?(d(),v("p",V5,[Ae(f(h.value.length)+" 条有引文的关系",1),new Set(h.value.map(A=>A.source===o.value?A.target:A.source)).size>8?(d(),v("span",X5,"，图中展示前 8 个相邻节点；完整关系见下方。")):H("",!0)])):(d(),v("p",B5,"该实体暂无具备原文引文的关联关系。")),(d(!0),v(Q,null,oe(h.value,(A,O)=>{var ee,P;return d(),v("details",{key:O,class:"graph-evidence"},[l("summary",null,f((ee=u.value[A.source])==null?void 0:ee.label)+" → "+f(A.relation||"关联")+" → "+f((P=u.value[A.target])==null?void 0:P.label),1),l("p",W5,f(A.quote),1),l("small",null,[Ae(f(A.document_title||"当前文档"),1),A.chunk?(d(),v("span",H5," · 片段 "+f(A.chunk),1)):H("",!0),M[1]||(M[1]=Ae(" · 原文引用可核对，关系语义需结合上下文确认",-1))]),A.document_id?(d(),v("button",{key:0,class:"graph-source",onClick:ne=>s("open-document",{id:A.document_id,title:A.document_title})},"查看知识库文档 ↗",8,q5)):H("",!0)])}),128))])):(d(),v("p",K5,"尚无可展示的实体或概念。"))]))}},Ja=Dn(G5,[["__scopeId","data-v-b94ce37c"]]),Y5={class:"sheet-preview"},Q5={class:"sheet-caption"},J5={class:"sheet-scroll"},Z5={class:"sheet-tabs","aria-label":"工作表"},e3=["onClick"],n3={__name:"SpreadsheetPreview",props:{sheets:{type:Array,default:()=>[]}},setup(e){const n=e,t=K(0);hn(()=>n.sheets,()=>t.value=0);const s=ue(()=>n.sheets[t.value]||{rows:[]}),i=ue(()=>Math.max(1,...s.value.rows.map(r=>r.length)));function o(r){let a=r+1,u="";for(;a;)a--,u=String.fromCharCode(65+a%26)+u,a=Math.floor(a/26);return u}return(r,a)=>(d(),v("div",Y5,[l("div",Q5,[l("b",null,f(s.value.name),1),l("span",null,f(s.value.rows.length)+" 行 · "+f(i.value)+" 列",1),a[0]||(a[0]=l("span",null,"原始表格预览",-1))]),l("div",J5,[l("table",null,[l("thead",null,[l("tr",null,[a[1]||(a[1]=l("th",{class:"corner"},null,-1)),(d(!0),v(Q,null,oe(i.value,(u,p)=>(d(),v("th",{key:p},f(o(p)),1))),128))])]),l("tbody",null,[(d(!0),v(Q,null,oe(s.value.rows,(u,p)=>(d(),v("tr",{key:p},[l("th",null,f(p+1),1),(d(!0),v(Q,null,oe(i.value,(c,h)=>(d(),v("td",{key:h,class:we({heading:p===0,numeric:typeof u[h]=="number"})},f(u[h]??""),3))),128))]))),128))])])]),l("nav",Z5,[(d(!0),v(Q,null,oe(e.sheets,(u,p)=>(d(),v("button",{key:p,class:we({active:p===t.value}),onClick:c=>t.value=p},f(u.name),11,e3))),128))])]))}},t3=Dn(n3,[["__scopeId","data-v-dbd40008"]]),s3={class:"presentation-preview"},i3={key:0},l3={key:1,role:"alert"},o3=["href"],r3={class:"preview-caption"},a3=["href"],u3=["src","title"],c3={__name:"PresentationPreview",props:{uri:String,title:String},setup(e){const n=e,t=K(""),s=K(""),i=K(!1);let o=0;return hn(()=>n.uri,async r=>{const a=++o;if(t.value&&URL.revokeObjectURL(t.value),t.value="",s.value="",!!r){i.value=!0;try{const u=await fetch(r);if(!u.ok)throw Error("无法读取原始 PPT");const p=await fetch("https://northstar-copilot.com/local-media/presentation",{method:"POST",headers:{"X-File-Extension":/\.ppt$/i.test(n.title)?".ppt":".pptx"},body:await u.blob()});if(!p.ok)throw Error((await p.json()).error||"预览失败");const c=await p.blob();a===o&&(t.value=URL.createObjectURL(c))}catch(u){a===o&&(s.value=u.message)}finally{a===o&&(i.value=!1)}}},{immediate:!0}),Kt(()=>{o++,t.value&&URL.revokeObjectURL(t.value)}),(r,a)=>(d(),v("div",s3,[i.value?(d(),v("p",i3,"正在生成原始幻灯片预览，保留图片、公式和版式…")):s.value?(d(),v("p",l3,[Ae(f(s.value)+" ",1),l("a",{href:e.uri,target:"_blank"},"打开原文件 ↗",8,o3)])):t.value?(d(),v(Q,{key:2},[l("div",r3,[a[0]||(a[0]=Ae("原始幻灯片 · PDF 预览 ",-1)),l("a",{href:t.value,target:"_blank"},"放大查看 ↗",8,a3)]),l("iframe",{src:t.value,title:e.title+"幻灯片预览"},null,8,u3)],64)):H("",!0)]))}},d3=Dn(c3,[["__scopeId","data-v-749a1735"]]),p3={class:"real-kb"},v3={class:"kb-title"},f3={key:0,class:"kb-error"},h3={class:"kb-modal card"},m3={class:"subspace-editor"},g3=["placeholder"],_3=["onClick"],y3=["disabled","onClick"],b3={class:"kb-pages"},w3=["onClick"],k3=["aria-label","title"],x3={class:"kb-tooltip",role:"tooltip"},S3={key:1,class:"sync-alert","aria-label":"有同步失败"},$3={class:"kb-space-summary card"},T3={class:"kb-columns"},C3={class:"kb-subspaces card"},D3=["onClick"],A3={class:"kb-docs card"},E3={class:"index-switch"},I3={class:"doc-list-head"},M3=["placeholder"],O3={key:1,class:"batch-tools"},R3=["checked"],P3={key:0},L3={key:2,class:"batch-edit"},N3={key:3},F3=["onClick"],z3=["checked","onChange"],U3={class:"doc-main"},j3=["title"],B3=["onClick"],V3={key:0,class:"wiki-reading"},X3=["onClick"],W3={key:1,class:"wiki-reading"},H3={class:"upload-target"},q3=["onClick"],K3={key:0,class:"kb-queue"},G3=["onClick"],Y3=["placeholder"],Q3=["disabled"],J3={key:4,class:"card kb-inspect"},Z3=["href"],e4=["disabled"],n4=["src"],t4={class:"original-text"},s4={key:3,class:"pdf-text-fallback"},i4={class:"original-text"},l4=["src","title"],o4=["src","alt"],r4={key:5},a4={key:6,class:"original-text"},u4={key:7},c4={key:8},d4={key:1},p4={key:0},v4={class:"analysis-grid"},f4={key:3,class:"card tab-card"},h4={key:0},m4={key:0},g4={key:4,class:"card tab-card"},_4={class:"sync-filters"},y4=["onClick"],b4={class:"sync-progress"},w4=["onClick"],k4={key:0},x4={key:5,class:"card tab-card"},S4={key:6,class:"card tab-card"},$4={class:"inline-form"},T4={__name:"WikiView",setup(e){const n=[{id:"demo-month-script",title:"11月短视频脚本.pdf",subspace:"短视频脚本",space_name:"清华优优 AI Wiki",doc_type:"document",chunk_count:8,analyzed:!0,uri:"./demo-docs/11月短视频脚本.pdf"},{id:"demo-live-review",title:"优优账号X直播记录【咨询+精讲课产品销售】.pdf",subspace:"直播复盘",space_name:"清华优优 AI Wiki",doc_type:"document",chunk_count:6,analyzed:!0,uri:"./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf"},{id:"demo-live-sop",title:"直播SOP.pdf",subspace:"内容生产",space_name:"清华优优 AI Wiki",doc_type:"document",chunk_count:7,analyzed:!0,uri:"./demo-docs/直播SOP.pdf"},{id:"demo-product-script",title:"精讲课塑品脚本.pdf",subspace:"转化变现",space_name:"清华优优 AI Wiki",doc_type:"document",chunk_count:5,analyzed:!0,uri:"./demo-docs/精讲课塑品脚本.pdf"},{id:"demo-wang",title:"汪舅舅-教育内容脚本转写.txt",subspace:"竞品研究",space_name:"清华优优 AI Wiki",doc_type:"document",chunk_count:4,analyzed:!0,uri:"./demo-docs/汪舅舅-教育内容脚本转写-演示.txt"},{id:"demo-xueli-video",source_group:"xueli-vocabulary",title:"雪梨老师-英语背单词开窍.mp4",subspace:"竞品研究",space_name:"清华优优 AI Wiki",doc_type:"document",chunk_count:4,analyzed:!0,uri:"https://northstar-copilot.com/competitor-videos/xueli-vocabulary.mp4",media_type:"video",duration:5.35,parse_method:"录屏字幕核验",local_content:`[0:00–0:05] 第195集：只用这1招，让你背单词突然开窍。
画面可见：一找二切三拼；先找出元音字母（a e i o u）；元音前再找辅音。
录屏长5.35秒，仅保留这一片段已核实的字幕。`,parse_status:"completed"},{id:"demo-xueli",source_group:"xueli-vocabulary",title:"雪梨老师-英语背单词开窍.txt",subspace:"竞品研究",space_name:"清华优优 AI Wiki",doc_type:"transcript",chunk_count:1,analyzed:!1,uri:"./demo-docs/雪梨老师-英语背单词开窍.txt"}],t=[{id:"demo-source-1",name:"11月短视频脚本.pdf",uri:"已同步 · 短视频脚本",source_type:"upload",space_name:"清华优优 AI Wiki",status:"ready",document_count:1},{id:"demo-source-2",name:"优优账号X直播记录【咨询+精讲课产品销售】.pdf",uri:"已同步 · 直播复盘",source_type:"upload",space_name:"清华优优 AI Wiki",status:"ready",document_count:1},{id:"demo-source-3",name:"直播SOP.pdf",uri:"已同步 · 内容生产",source_type:"upload",space_name:"清华优优 AI Wiki",status:"completed",document_count:1},{id:"demo-source-4",name:"精讲课塑品脚本.pdf",uri:"已同步 · 转化变现",source_type:"upload",space_name:"清华优优 AI Wiki",status:"ready",document_count:1},{id:"demo-source-5",name:"竞品脚本转写",uri:"已同步 · 竞品研究",source_type:"paste",space_name:"清华优优 AI Wiki",status:"completed",document_count:2}],s={document_count:6,nodes:[{id:"g1",label:"月考复盘",kind:"概念"},{id:"g2",label:"错题分类",kind:"方法"},{id:"g3",label:"家长沟通",kind:"场景"},{id:"g4",label:"直播答疑",kind:"内容"},{id:"g5",label:"期中复习",kind:"选题"},{id:"g6",label:"精讲课转化",kind:"方法"},{id:"g7",label:"竞品钩子",kind:"概念"}],edges:[{source:"g1",target:"g2"},{source:"g1",target:"g3"},{source:"g2",target:"g5"},{source:"g3",target:"g4"},{source:"g4",target:"g6"},{source:"g7",target:"g1"}]},i={"demo-month-script":{body:"11 月可讲内容已按家长高频焦虑整理：月考后失分点、期中前复习节奏、家长如何看懂月考卷。每条可拆为 60 秒短视频，并在直播答疑承接评论区问题。",subspace:"短视频脚本"},"demo-live-review":{body:"这场咨询与精讲课产品销售直播中，高频问题集中在学习节奏、错题复盘和课程匹配。建议以问题收集、方法展示、案例证明、福利转化四段式复用。",subspace:"直播复盘"},"demo-live-sop":{body:"直播 SOP 覆盖预热、开场互动、核心讲解、评论区答疑和收尾转化。排期时可直接引用对应环节，形成选题到开播的执行清单。",subspace:"内容生产"},"demo-product-script":{body:"精讲课塑品脚本围绕目标人群、学习痛点、课程价值和行动引导展开，可用于直播中的产品介绍与短视频中的转化承接。",subspace:"转化变现"},"demo-wang":{body:"内容转写用于拆解教育内容的开场钩子、场景共鸣和方法交付结构，仅供内部竞品研究内部使用。",subspace:"竞品研究"},"demo-xueli":{body:"内容转写用于拆解英语学习内容的选题表达、步骤讲解和评论互动设计，仅供内部竞品研究内部使用。",subspace:"竞品研究"}};function o(k){const y=n.find($e=>$e.id===k),re=i[k]||{body:y.local_content||"",subspace:y.subspace};return{...y,source:"已入库资料",source_name:"清华优优",chunks:[{id:k+"-1",position:1,locator:y.title,text:re.body}],analysis:{subspace:re.subspace,catalog:["选题","方法","行动"],concepts:["月考复盘","学习节奏","家长沟通"],entities:[{name:"清华优优",type:"内容账号"}],summary:re.body,framework:"诊断 → 拆解 → 执行 → 复盘",hook:"先问家长最焦虑的具体问题。",body:re.body,cta:"评论区领取本周行动卡。",nodes:[{id:"d1",label:"月考复盘"},{id:"d2",label:"内容选题"}],edges:[{source:"d1",target:"d2"}]}}}const a=K([...[{id:"all",name:"全部文档",desc:"当前知识空间的全部资料"},{id:"经营数据",name:"经营数据",desc:"粉丝、视频、直播与成交报表"},{id:"短视频脚本",name:"短视频脚本",desc:"选题、钩子与口播稿"},{id:"直播复盘",name:"直播复盘",desc:"直播数据与画面复盘"},{id:"内容生产",name:"内容生产",desc:"排期、SOP 与执行清单"},{id:"转化变现",name:"转化变现",desc:"课程塑品与成交话术"},{id:"竞品研究",name:"竞品研究",desc:"竞品账号与爆款拆解"}],{id:"产品课程",name:"产品课程",desc:"数学、物理、英语、语文课程资料"}]),u=K("all"),p=K("全部");function c(k){return/^(demo-|local-|shared-save-|course-|business-)/.test(String(k))}function h(k){S.value=S.value.filter(y=>!k.includes(y.id)),g.demoKnowledgeDocuments=g.demoKnowledgeDocuments.filter(y=>!k.includes(y.id)),g.courseDocuments=g.courseDocuments.filter(y=>!k.includes(y.id)),g.businessDocuments=g.businessDocuments.filter(y=>!k.includes(y.id))}const m=K("space"),S=K([]),M=K([]),A=K([]),O=K([]),ee=K({nodes:[],edges:[]}),P=K(null),ne=K(""),ie=K(!1),Z=K(""),V=K(!1),E=K("file"),z=K([]),G=K(!1),W=K(null),q=K(""),he=K(""),xe=K("chunks"),nn=K(""),Je=K(""),ke=K(!1),Ee=K("index"),Ie=K({x:0,y:0});let We=null;function An(k){k.target.closest("button,input,select,textarea")||(k.preventDefault(),We={x:k.clientX,y:k.clientY,px:Ie.value.x,py:Ie.value.y},window.addEventListener("pointermove",_n),window.addEventListener("pointerup",He))}function _n(k){We&&(Ie.value={x:We.px+k.clientX-We.x,y:We.py+k.clientY-We.y})}function He(){We=null,window.removeEventListener("pointermove",_n),window.removeEventListener("pointerup",He)}Kt(He);const En=ue(()=>{var k,y;return/\.pdf(?:$|[?#])/i.test(((k=P.value)==null?void 0:k.uri)||"")||((y=P.value)==null?void 0:y.file_type)==="application/pdf"}),Ue=ue(()=>je.value.map(k=>({id:k.id,title:k.title,action:k.media_type==="video"?"视频上传":k.doc_type==="transcript"||k.subspace==="竞品研究"?"竞品转写":k.uri?"导入文件":"粘贴文本",kind:k.media_type==="video"?"video":k.doc_type==="transcript"||k.subspace==="竞品研究"?"transcript":k.uri?"file":"text",status:k.parse_status||"completed",message:k.parse_error,subspace:k.subspace}))),Mn=ue(()=>Ue.value.map(k=>({id:k.id,source_name:k.title,source_type:k.action,status:k.status,stage:k.status==="failed"?"解析失败":k.status==="pending"?"原件已保存，待文本解析":"已入库",progress:k.status==="completed"?100:0,message:k.message||""}))),qe=K("all"),kn=ue(()=>[...O.value,...Mn.value].sort((k,y)=>({failed:0,pending:1}[k.status]??2)-({failed:0,pending:1}[y.status]??2))),On=ue(()=>kn.value.filter(k=>qe.value==="all"||k.status===qe.value)),Fn=ue(()=>kn.value.some(k=>k.status==="failed")||z.value.some(k=>k.status==="failed")),Y=K(null),U=K(null);function b(k){U.value=k.id,Y.value.click()}async function D(k){const y=k.target.files[0];k.target.value="",y&&T(async()=>{var Ke;const re=await _l(y);if(!((Ke=re.local_content)!=null&&Ke.trim()))throw new Error("没有提取到文字，请提供可读取的文件");const $e=je.value.find(vn=>vn.id===U.value);$e&&(await Bo($e.id,y,re),Object.assign($e,re,{uri:URL.createObjectURL(y),parse_status:"completed",parse_error:"",title:y.name}),I($e.id),un("重新上传并解析成功"))})}hn(P,async k=>{var y;if(Je.value="",ke.value=!1,!(!k||k.local_content||!k.uri||!/\.(txt|md|csv|tsv|srt|vtt)(?:$|[?#])/i.test(k.uri))){ke.value=!0;try{const re=await fetch(k.uri);if(!re.ok)throw new Error("无法读取原文件");const $e=await re.text();((y=P.value)==null?void 0:y.id)===k.id&&(Je.value=$e)}catch(re){Z.value=re.message}finally{ke.value=!1}}});const L=K(!1),$=K(!1),w=K(null),j=K(""),C=K(new Set),X=K(""),F=[["space","知识空间"],["documents","文档"],["sources","数据源"],["sync","同步状态"],["graph","知识图谱"]],B={pending:"待上传",uploading:"正在解析",done:"已入库",failed:"失败",invalid:"无法上传",ready:"已同步",completed:"已完成",running:"进行中"},ae={documents:"文档是具体资料，如一份Excel、CSV、视频或脚本。这里查看原文件、解析正文与处理状态。",sources:"数据源是资料的来源，如上传文件、课程导入目录或连接的数据表。一个来源可以包含多份文档。"},le={upload:"文件 / 导入目录",paste:"粘贴文本",video:"视频"};function me(k){if(ie.value)return;const y=Array.from(k);if(z.value.length+y.length>50){Z.value="最多选择 50 个文件";return}for(const re of y){const $e=`${re.name}:${re.size}:${re.lastModified}`;if(z.value.some(Be=>Be.key===$e))continue;const Ke=/\.(mp4|mov|webm|m4v)$/i.test(re.name),vn=/\.(pdf|docx|xlsx|pptx|txt|md|csv|tsv|srt|vtt|mp4|mov|webm|m4v)$/i.test(re.name)?re.size>(Ke?200:50)*1024*1024?Ke?"视频超过 200 MB":"超过 50 MB":"":"不支持此格式";z.value.push({key:$e,file:re,status:vn?"invalid":"pending",message:vn})}}function _e(k){me(k.target.files),k.target.value=""}function Te(k){G.value=!1,me(k.dataTransfer.files)}const ye=ue(()=>z.value.some(k=>["pending","failed"].includes(k.status))),Ne=ue(()=>`${z.value.filter(k=>k.status==="done").length} / ${z.value.length}`),Ce=K("documents"),je=ue(()=>[...S.value.length?S.value:n,...g.demoKnowledgeDocuments||[],...g.courseDocuments||[],...g.businessDocuments||[]]);hn([()=>g.wikiDocumentRequest,je],([k,y])=>{if(!k)return;const re=y.find($e=>k.id&&$e.id===k.id)||y.find($e=>$e.title===k.title)||y.find($e=>k.uri&&$e.uri===k.uri);re&&(m.value="space",Ce.value="documents",Ee.value="index",u.value=re.subspace||"all",p.value="全部",ne.value="",I(re.id),xe.value="chunks",g.wikiDocumentRequest=null)},{flush:"post"});const pn=ue(()=>{const k=new Map;for(const y of je.value){const re=y.source_group||(y.imported_file&&y.subject?"course-"+y.subject:y.id);k.has(re)||k.set(re,{id:re,name:y.imported_file&&y.subject?y.subject+"课程导入目录":y.title,uri:y.imported_file&&y.subject?"精讲课 / "+y.subject:y.uri||"粘贴文本",source_type:y.media_type==="video"?"video":y.uri?"upload":"paste",space_name:y.space_name,document_count:0,status:"completed",titles:[]});const $e=k.get(re);$e.document_count++,$e.titles.push(y.title),y.parse_status==="failed"?$e.status="failed":y.parse_status==="pending"&&$e.status!=="failed"&&($e.status="pending")}return[...k.values()]}),xn=ue(()=>{var $e;const k=($e=ee.value.nodes)!=null&&$e.length?ee.value:s,y={...k,nodes:[...k.nodes||[]],edges:[...k.edges||[]]},re=je.value.find(Ke=>{var vn;return Ke.title==="英语课程ppt.pptx"&&((vn=Ke.sections)==null?void 0:vn.some(Be=>Be.text.includes("1+1+1")))});if(re){const Ke=re.sections.find(vn=>vn.text.includes("1+1+1的背诵方法"));if(Ke){const vn="course-method-111",Be="course-english-method-source";y.nodes.some(J=>J.label==="1+1+1复习法")||y.nodes.push({id:vn,label:"1+1+1复习法",kind:"实体",description:"先背诵并录音，睡前听录音，第二天起床后再背诵。"});const R=y.nodes.find(J=>J.label==="1+1+1复习法");y.nodes.some(J=>J.id===Be)||y.nodes.push({id:Be,label:"英语课程",kind:"课程"}),y.edges.push({source:Be,target:R.id,relation:"介绍背诵方法",quote:Ke.text,document_id:re.id,document_title:re.title,chunk:re.sections.indexOf(Ke)+1})}}return y}),zn=ue(()=>xn.value.nodes.map(k=>({id:`concept-${k.id}`,title:k.label,subspace:k.kind,doc_type:"concept",chunk_count:xn.value.edges.filter(y=>y.source===k.id||y.target===k.id).length,analyzed:!0,node:k}))),_t=ue(()=>pn.value.map(k=>({id:`source-${k.id}`,title:k.name,subspace:`${le[k.source_type]||k.source_type} · ${k.document_count} 份文档`,doc_type:"source",chunk_count:k.document_count,analyzed:!0,source:k}))),Sn=ue(()=>Ce.value==="concepts"?zn.value:Ce.value==="sources"?_t.value:je.value),tn=ue(()=>Sn.value.filter(k=>(Ce.value!=="documents"||u.value==="all"||k.subspace===u.value)&&(u.value!=="产品课程"||p.value==="全部"||k.subject===p.value)&&(k.title+" "+(k.relative_path||"")).toLowerCase().includes(ne.value.toLowerCase())));hn([tn,P,Ee,m],([k,y,re,$e])=>{$e==="space"&&re==="index"&&k.length&&!k.some(Ke=>Ke.id===(y==null?void 0:y.id))&&I(k[0].id)},{immediate:!0,flush:"post"});const yt=ue(()=>a.value.find(k=>k.id===u.value)||a.value[0]),$t=ue(()=>Ce.value==="concepts"?"实体 / 概念":Ce.value==="sources"?"数据源":yt.value.name);function xs(k){return k==="all"?je.value.length:je.value.filter(y=>y.subspace===k).length}function Gt(){$.value=!0,w.value=null,j.value=""}function Rn(k){w.value=k,j.value=(k==null?void 0:k.name)||""}function Gn(){const k=j.value.trim();if(k){if(w.value){const y=a.value.find(re=>re.id===w.value.id);y&&(y.name=k,y.desc="自定义知识子库",u.value===y.id&&(u.value=y.id))}else{const y=`local-subspace-${Date.now()}`;a.value.push({id:y,name:k,desc:"自定义知识子库"}),u.value=y}w.value=null,j.value=""}}function Ss(k){k.id!=="all"&&window.confirm(`删除子库「${k.name}」？资料不会被删除，会回到全部文档。`)&&(a.value=a.value.filter(y=>y.id!==k.id),u.value===k.id&&(u.value="all"))}function bt(){window.setTimeout(()=>{var k;return(k=document.querySelector(".kb-docs"))==null?void 0:k.scrollIntoView({behavior:"smooth",block:"start"})},0)}const Fs=ue(()=>m.value==="space"?Ce.value==="documents"?"space":Ce.value==="sources"?"sources":"concepts":m.value);function ds(){m.value="space",Ce.value="documents",u.value="all",P.value=null,bt()}function zs(){m.value="space",Ce.value="concepts",P.value=null,bt()}function Yt(){m.value="space",Ce.value="sources",P.value=null,bt()}function Qt(k){if(k==="space"){m.value="space",Ce.value="documents",P.value=null;return}if(k==="documents")return ds();if(k==="sources")return Yt();if(k==="graph"){m.value="graph",P.value=null;return}m.value=k}const Yn=ue(()=>tn.value.length>0&&tn.value.every(k=>C.value.has(k.id))),Tt=ue(()=>M.value[0]||null);async function Qn(){const k=await rc();S.value=[...n,...(k.documents||[]).filter(y=>!n.some(re=>re.id===y.id))],M.value=k.spaces||[],A.value=[...t,...(k.sources||[]).filter(y=>!t.some(re=>re.id===y.id))],O.value=k.sync_jobs||[],ee.value=k.graph&&k.graph.nodes&&k.graph.nodes.length?k.graph:s,V.value=k.ai_ready}async function T(k){if(!ie.value){ie.value=!0,Z.value="";try{await k()}catch(y){Z.value=y.message}finally{ie.value=!1}}}async function x(){var k;P.value=null,S.value=n,A.value=t,ee.value=s,Z.value="";try{await Promise.all([Io(),Mo()]);const y=await gm();for(const re of y){const $e=je.value.find(Ke=>Ke.id===re.id);$e?Object.assign($e,re):g.demoKnowledgeDocuments.push({...re,subspace:re.subspace||"竞品研究",space_name:"清华优优 AI Wiki",doc_type:"document",chunk_count:((k=re.sections)==null?void 0:k.length)||1})}}catch(y){console.warn("知识库本地资料加载失败，继续显示演示资料",y)}if(g.authUser)try{await Qn()}catch(y){V.value=!1,Z.value="",console.warn("知识库 AI 服务不可用，已使用本地演示资料",y)}}ti(x),hn(()=>{var k;return(k=g.authUser)==null?void 0:k.id},x);function I(k){var re,$e,Ke,vn;if(Ee.value="index",Z.value="",Ce.value==="concepts"){const Be=zn.value.find(R=>R.id===k);P.value={...Be,space_name:"清华优优 AI Wiki",source_name:"知识关系",chunks:[{id:`${k}-1`,position:1,locator:Be.subspace,text:((re=Be.node)==null?void 0:re.description)||`「${Be.title}」是清华优优内容资产中的${Be.subspace}，可查看关联原文。`}],analysis:{subspace:"实体 / 概念",catalog:["内容资产","关联文档"],concepts:[Be.title],entities:[{name:Be.title,type:Be.subspace}],summary:(($e=Be.node)==null?void 0:$e.description)||`${Be.title} 已关联 ${Be.chunk_count} 条知识关系。`,framework:"概念 → 内容场景 → 执行动作",hook:"从家长真实场景切入。",body:"结合已有文档形成可复用内容。",cta:"加入下一次脚本或排期。",nodes:[{id:"c1",label:Be.title}],edges:[]}},xe.value="analysis";return}if(Ce.value==="sources"){const Be=_t.value.find(J=>J.id===k),R=Be.source;P.value={...Be,space_name:R.space_name,source_name:R.uri,uri:R.source_type==="video"?R.uri:null,chunks:[{id:k+"-1",position:1,locator:"来源资料目录",text:R.titles.join(`
`)}],local_content:"来源："+R.uri+`
状态：`+(B[R.status]||R.status)+`
文档数：`+R.document_count+`

`+R.titles.join(`
`),analysis:null},xe.value="chunks";return}const y=je.value.find(Be=>Be.id===k);if(y!=null&&y.imported_file){P.value={...y,source_name:y.subject,chunks:(Ke=y.sections)!=null&&Ke.length?y.sections.map((Be,R)=>({id:k+"-"+R,position:R+1,...Be})):[{id:k+"-1",position:1,locator:y.relative_path,text:y.local_content}],analysis:y.analysis||null},xe.value="chunks";return}if(y!=null&&y.local_content||(vn=y==null?void 0:y.uri)!=null&&vn.startsWith("blob:")){P.value={...y,source:"本地保存",source_name:"清华优优",chunks:[{id:k+"-1",position:1,locator:y.title,text:y.local_content||""}],analysis:{subspace:y.subspace,catalog:["脚本","优化稿"],concepts:["脚本优化"],entities:[],summary:y.local_content,framework:"钩子 → 场景 → 方法 → CTA",hook:"可复用脚本钩子。",body:y.local_content,cta:"加入内容排期。",nodes:[],edges:[]}},xe.value="chunks";return}if(String(k).startsWith("demo-")||String(k).startsWith("local-")||String(k).startsWith("cue-")){P.value=o(k),xe.value="chunks";return}T(async()=>{P.value=await jd(k),xe.value="chunks"})}function fe(k,y=0){const re=new Date;return`${k}${y?` ${y}`:""} · ${re.getFullYear()}-${String(re.getMonth()+1).padStart(2,"0")}-${String(re.getDate()).padStart(2,"0")}`}function be(){T(async()=>{if(!g.authUser){const k=yt.value.name==="全部文档"?"短视频脚本":yt.value.name;if(E.value==="file"){if(!ye.value)throw new Error("请选择可上传的文件");for(const y of z.value)if(["pending","failed"].includes(y.status)){y.status="uploading";try{const re=await _l(y.file);g.demoKnowledgeDocuments.unshift({id:"local-"+Date.now()+"-"+y.file.name,title:y.file.name,subspace:k,space_name:"清华优优 AI Wiki",doc_type:"document",chunk_count:1,uri:URL.createObjectURL(y.file),file_type:y.file.type,parse_status:re.local_content?"completed":"pending",...re}),await Bo(g.demoKnowledgeDocuments[0].id,y.file,{...re,subspace:k,space_name:"清华优优 AI Wiki"}),y.status="done"}catch(re){y.status="failed",y.message=re.message;const $e="local-failed-"+y.key;g.demoKnowledgeDocuments.some(Ke=>Ke.id===$e)||g.demoKnowledgeDocuments.unshift({id:$e,title:y.file.name,subspace:k,space_name:"清华优优 AI Wiki",doc_type:"document",uri:URL.createObjectURL(y.file),file_type:y.file.type,parse_status:"failed",parse_error:re.message,chunk_count:0})}}if(z.value.some(y=>y.status==="failed"))throw new Error("部分文件未解析成功，失败原因见文件列表，可重试");z.value=[]}else{if(!he.value.trim())throw new Error("请粘贴资料正文");const y=q.value.trim()||fe(E.value==="transcript"?"内容转写":"粘贴资料"),re={id:`local-${Date.now()}`,title:y,subspace:k,space_name:"清华优优 AI Wiki",doc_type:E.value==="transcript"?"transcript":"document",chunk_count:Math.max(1,Math.ceil(he.value.length/300)),analyzed:!0,local_content:he.value.trim()};g.demoKnowledgeDocuments.unshift(re),P.value={...re,chunks:[{id:re.id+"-1",position:1,locator:re.title,text:re.local_content}],analysis:{subspace:k,catalog:["资料","内容"],concepts:[],entities:[],summary:re.local_content,framework:"导入 → 拆解 → 应用",hook:"从资料中提取可执行表达。",body:re.local_content,cta:"用于下一次脚本或排期。",nodes:[],edges:[]}}}xe.value="chunks",he.value="",q.value="",L.value=!1,un("资料已加入知识库");return}if(E.value==="file"){if(!ye.value)throw new Error("请选择可上传的文件");for(const k of z.value)if(["pending","failed"].includes(k.status)){k.status="uploading";try{P.value=await Wd(k.file),k.status="done"}catch(y){k.status="failed",k.message=y.message}}}else{if(!he.value.trim())throw new Error("请粘贴资料正文");const k=E.value==="transcript";P.value=await ac({title:q.value.trim()||fe(k?"竞品转写":"粘贴资料"),text:he.value.trim(),source:k?"竞品视频转写文本":"粘贴文本"})}await Qn(),xe.value="chunks",he.value="",q.value="",L.value=!1})}function Ze(){T(async()=>{if(c(P.value.id)){const k=P.value;k.analysis=lp({...k,local_content:k.local_content||Je.value}),k.analyzed=!0;const y=je.value.find(re=>re.id===k.id);y&&(y.analysis=k.analysis,y.analyzed=!0),xe.value="analysis";return}P.value=await Bd(P.value.id),xe.value="analysis",await Qn()})}function Fe(){if(!(!P.value||!window.confirm("删除这份文档和所有切片？"))){if(c(P.value.id)){h([P.value.id]),P.value=null,un("文档已删除");return}T(async()=>{await Jl(P.value.id),P.value=null,await Qn()})}}function ze(k,y){var re;if(window.confirm(`删除《${y}》及其所有切片？`)){if(c(k)){h([k]),((re=P.value)==null?void 0:re.id)===k&&(P.value=null),un("文档已删除");return}T(async()=>{var $e;await Jl(k),(($e=P.value)==null?void 0:$e.id)===k&&(P.value=null),await Qn(),un("文档已删除")})}}function pe(k){const y=new Set(C.value);y.has(k)?y.delete(k):y.add(k),C.value=y}function Se(){C.value=Yn.value?new Set:new Set(tn.value.map(k=>k.id))}function ge(){C.value=new Set,X.value=""}function Oe(){const k=[...C.value];if(!k.length||!window.confirm(`删除选中的 ${k.length} 份文档及其所有切片？`))return;const y=k.filter(c),re=k.filter($e=>!c($e));y.length&&h(y),re.length&&T(async()=>{await Promise.all(re.map($e=>Jl($e))),await Qn()}),P.value&&k.includes(P.value.id)&&(P.value=null),ge(),un(`已删除 ${k.length} 份文档`)}function Re(){const k=[...C.value],y=X.value.trim();if(!k.length||!y){Z.value="请先选择文档并输入新名称或名称前缀";return}const re=k.filter(c),$e=k.filter(Ke=>!c(Ke));re.forEach((Ke,vn)=>{const Be=je.value.find(R=>R.id===Ke);Be&&(Be.title=k.length===1?y:`${y} · ${vn+1}`)}),$e.length&&T(async()=>{await Promise.all($e.map((Ke,vn)=>Vd(Ke,{title:k.length===1?y:`${y} · ${vn+1}`}))),await Qn()}),ge(),un(`已重命名 ${k.length} 份文档`)}function Ge(){T(async()=>{if(!nn.value.trim())throw new Error("请输入知识空间名称");await Xd({name:nn.value.trim(),description:"独立知识空间",visibility:"private"}),nn.value="",await Qn(),un("知识空间已创建")})}return(k,y)=>{var re,$e,Ke,vn,Be;return d(),v("section",p3,[l("header",v3,[y[27]||(y[27]=l("div",null,[l("h2",null,"知识库"),l("p",null,"把手工 SOP、话术、复盘和经营报表沉淀为可检索、可引用的 AI Wiki。")],-1)),l("div",null,[l("span",{class:we(["pill",{green:V.value}])},f(V.value?"AI 已配置":"AI 未配置"),3)])]),Z.value?(d(),v("div",f3,f(Z.value),1)):H("",!0),$.value?(d(),v("div",{key:1,class:"kb-modal-backdrop",onClick:y[3]||(y[3]=mn(R=>$.value=!1,["self"]))},[l("section",h3,[l("header",null,[y[28]||(y[28]=l("div",null,[l("h3",null,"管理知识空间与子库"),l("p",null,"创建、重命名或删除子库；删除子库不会删除其中资料。")],-1)),l("button",{onClick:y[0]||(y[0]=R=>$.value=!1)},"×")]),l("div",m3,[en(l("input",{"onUpdate:modelValue":y[1]||(y[1]=R=>j.value=R),placeholder:w.value?"子库名称":"新子库名称"},null,8,g3),[[bn,j.value]]),l("button",{class:"send",onClick:Gn},f(w.value?"保存修改":"创建子库"),1),w.value?(d(),v("button",{key:0,onClick:y[2]||(y[2]=R=>{w.value=null,j.value=""})},"取消")):H("",!0)]),(d(!0),v(Q,null,oe(a.value,R=>(d(),v("div",{key:R.id,class:"manage-subspace"},[l("div",null,[l("b",null,f(R.name),1),l("small",null,f(R.desc),1)]),l("div",null,[l("button",{onClick:J=>Rn(R)},"编辑",8,_3),l("button",{disabled:R.id==="all",class:"doc-delete",onClick:J=>Ss(R)},"删除",8,y3)])]))),128))])])):H("",!0),l("nav",b3,[(d(),v(Q,null,oe(F,R=>l("button",{key:R[0],class:we({active:Fs.value===R[0]}),onClick:J=>Qt(R[0])},[Ae(f(R[1]),1),ae[R[0]]?(d(),v("span",{key:0,class:"kb-info",tabindex:"0","aria-label":ae[R[0]],title:ae[R[0]],onClick:y[4]||(y[4]=mn(()=>{},["stop"])),onKeydown:y[5]||(y[5]=mn(()=>{},["stop"]))},[y[29]||(y[29]=Ae("i",-1)),l("span",x3,f(ae[R[0]]),1)],40,k3)):H("",!0),R[0]==="sync"&&Fn.value?(d(),v("i",S3)):H("",!0)],10,w3)),64))]),m.value==="space"?(d(),v(Q,{key:2},[l("div",$3,[l("div",null,[y[30]||(y[30]=l("span",null,"当前知识空间",-1)),l("h3",null,f(((re=Tt.value)==null?void 0:re.name)||"清华优优 AI Wiki"),1),l("button",{class:"space-manage",onClick:Gt},"管理知识空间"),l("p",null,f((($e=Tt.value)==null?void 0:$e.description)||"学习方法、家长沟通与内容生产的知识资产。"),1)]),l("button",{class:"kb-stat",onClick:ds},[l("b",null,f(je.value.length),1),y[31]||(y[31]=l("small",null,"文档",-1))]),l("button",{class:"kb-stat",onClick:zs},[l("b",null,f(((Ke=xn.value.nodes)==null?void 0:Ke.length)||0),1),y[32]||(y[32]=l("small",null,"实体 / 概念",-1))]),l("button",{class:"kb-stat",onClick:Yt},[l("b",null,f(pn.value.length),1),y[33]||(y[33]=l("small",null,"资料来源",-1))])]),l("div",T3,[l("aside",C3,[l("div",{class:"subspace-head"},[y[34]||(y[34]=l("h3",null,"知识库子库",-1)),l("button",{title:"管理子库",onClick:Gt},"＋")]),(d(!0),v(Q,null,oe(a.value,R=>(d(),v("button",{key:R.id,class:we({active:u.value===R.id}),onClick:J=>{Ce.value="documents",u.value=R.id}},[l("span",null,[l("b",null,f(R.name),1),l("small",null,f(R.desc),1)]),l("em",null,f(xs(R.id)),1)],10,D3))),128))]),l("aside",A3,[l("div",E3,[l("button",{class:we({active:Ee.value==="index"}),onClick:y[6]||(y[6]=R=>Ee.value="index")},"☷ 索引",2),l("button",{class:we({active:Ee.value==="log"}),onClick:y[7]||(y[7]=R=>{Ee.value="log",P.value=null})},"◷ 日志",2)]),l("div",I3,[l("div",null,[l("h3",null,f($t.value),1),l("small",null,f(tn.value.length)+" "+f(Ce.value==="documents"?"份文档":"条记录"),1)])]),en(l("input",{"onUpdate:modelValue":y[8]||(y[8]=R=>ne.value=R),placeholder:`搜索${$t.value}`},null,8,M3),[[bn,ne.value]]),u.value==="产品课程"?en((d(),v("select",{key:0,"onUpdate:modelValue":y[9]||(y[9]=R=>p.value=R),"aria-label":"课程学科"},[(d(),v(Q,null,oe(["全部","数学","物理","英语","语文"],R=>l("option",{key:R},f(R),1)),64))],512)),[[ys,p.value]]):H("",!0),Ce.value==="documents"&&tn.value.length?(d(),v("div",O3,[l("label",null,[l("input",{type:"checkbox",checked:Yn.value,onChange:Se},null,40,R3),y[35]||(y[35]=Ae(" 全选",-1))]),C.value.size?(d(),v("span",P3,"已选 "+f(C.value.size),1)):H("",!0)])):H("",!0),Ce.value==="documents"&&C.value.size?(d(),v("div",L3,[en(l("input",{"onUpdate:modelValue":y[10]||(y[10]=R=>X.value=R),placeholder:"新名称 / 名称前缀"},null,512),[[bn,X.value]]),l("button",{onClick:Re},"批量重命名"),l("button",{class:"doc-delete",onClick:Oe},"批量删除"),l("button",{onClick:ge},"取消")])):H("",!0),tn.value.length?H("",!0):(d(),v("p",N3,"当前列表暂无内容。")),(d(!0),v(Q,null,oe(tn.value,R=>{var J;return d(),v("div",{key:R.id,class:we(["kb-document",{active:((J=P.value)==null?void 0:J.id)===R.id}]),onClick:de=>I(R.id)},[Ce.value==="documents"?(d(),v("input",{key:0,type:"checkbox",checked:C.value.has(R.id),title:"选择文档",onClick:y[11]||(y[11]=mn(()=>{},["stop"])),onChange:de=>pe(R.id)},null,40,z3)):H("",!0),l("div",U3,[l("b",{title:R.title},f(R.title),9,j3),l("small",null,f(R.subject||R.subspace||R.space_name||"默认子库")+" · "+f(R.doc_type==="concept"?"概念":R.doc_type==="source"?"数据源":R.doc_type==="dataset"?"数据表":"文档")+" · "+f(R.chunk_count)+" 条",1),l("em",null,f(R.analyzed?"已 AI 整理":"待整理"),1)]),Ce.value==="documents"?(d(),v("button",{key:1,class:"doc-delete",title:"删除文档",onClick:mn(de=>ze(R.id,R.title),["stop"])},"删除",8,B3)):H("",!0)],10,F3)}),128))]),l("main",null,[Ee.value==="log"?(d(),v("section",V3,[y[37]||(y[37]=l("h2",null,"知识库日志",-1)),(d(!0),v(Q,null,oe(Ue.value,R=>(d(),v("button",{key:R.id,class:"activity-row",onClick:J=>{Ce.value="documents",I(R.id)}},[l("span",{class:we(["source-label",R.kind])},f(R.action),3),l("div",null,[l("b",null,f(R.title),1),l("small",null,f(R.subspace),1)]),l("em",{class:we(["status",R.status])},f(R.status==="failed"?"失败":R.status==="pending"?"待解析":"成功"),3),y[36]||(y[36]=l("em",null,"查看正文 →",-1))],8,X3))),128))])):P.value?H("",!0):(d(),v("section",W3,[...y[38]||(y[38]=[l("p",null,"当前列表暂无内容，请添加资料。",-1)])])),Ce.value==="documents"&&!L.value?(d(),v("button",{key:2,class:"kb-upload-trigger",onClick:y[12]||(y[12]=R=>L.value=!0)},"＋ 添加资料")):H("",!0),Ce.value==="documents"&&L.value?(d(),v("div",{key:3,class:"card kb-upload",style:Pn({marginLeft:Ie.value.x+"px",marginTop:Ie.value.y+"px"})},[l("header",{onPointerdown:An},[y[39]||(y[39]=l("h3",null,"添加资料",-1)),l("button",{onClick:y[13]||(y[13]=R=>L.value=!1)},"×")],32),l("p",H3,"将资料加入「"+f(yt.value.name)+"」",1),l("nav",null,[(d(),v(Q,null,oe([{id:"file",label:"上传文件"},{id:"text",label:"粘贴文本"},{id:"transcript",label:"竞品转写"}],R=>l("button",{key:R.id,class:we({active:E.value===R.id}),onClick:J=>E.value=R.id},f(R.label),11,q3)),64))]),E.value==="file"?(d(),v(Q,{key:0},[l("div",{class:we(["kb-drop",{dragging:G.value}]),onDragover:y[15]||(y[15]=mn(R=>G.value=!ie.value,["prevent"])),onDragleave:y[16]||(y[16]=mn(R=>G.value=!1,["prevent"])),onDrop:mn(Te,["prevent"])},[y[40]||(y[40]=l("strong",null,"拖拽文件到这里，或多选文件",-1)),y[41]||(y[41]=l("p",null,"最多 50 个文件，每个最大 50 MB。支持 PDF、DOCX、XLSX、PPTX、TXT、MD、CSV、TSV、SRT、VTT，以及 MP4、MOV、WEBM、M4V 视频（视频最大 200 MB）。",-1)),l("button",{onClick:y[14]||(y[14]=R=>W.value.click())},"选择文件"),l("input",{ref_key:"fileInput",ref:W,type:"file",multiple:"",hidden:"",accept:".pdf,.docx,.xlsx,.pptx,.txt,.md,.csv,.tsv,.srt,.vtt,.mp4,.mov,.webm,.m4v",onChange:_e},null,544)],34),z.value.length?(d(),v("div",K3,[l("header",null,[l("span",null,"已选择 "+f(z.value.length)+" / 50 · 已入库 "+f(Ne.value),1),l("button",{onClick:y[17]||(y[17]=R=>z.value=[])},"清空")]),(d(!0),v(Q,null,oe(z.value,R=>(d(),v("div",{key:R.key,class:"kb-queue-item"},[l("div",null,[l("b",null,f(R.file.name),1),l("small",null,f(B[R.status])+" "+f(R.message),1)]),l("button",{onClick:J=>z.value=z.value.filter(de=>de.key!==R.key)},"移除",8,G3)]))),128))])):H("",!0)],64)):(d(),v(Q,{key:1},[en(l("input",{"onUpdate:modelValue":y[18]||(y[18]=R=>q.value=R),placeholder:"资料名称"},null,512),[[bn,q.value]]),en(l("textarea",{"onUpdate:modelValue":y[19]||(y[19]=R=>he.value=R),placeholder:E.value==="transcript"?"粘贴竞品视频字幕或转写…":"粘贴脚本、SOP、话术或复盘正文…"},null,8,Y3),[[bn,he.value]])],64)),l("button",{class:"send",disabled:ie.value||E.value==="file"&&!ye.value,onClick:be},f(ie.value?"处理中…":E.value==="file"?"批量解析 / 重试失败文件":"解析并入库"),9,Q3)],4)):H("",!0),P.value?(d(),v("div",J3,[l("header",null,[l("div",null,[l("h3",null,f(P.value.title),1),l("small",null,f(P.value.space_name)+" · "+f(P.value.chunks.length)+" 段 · "+f(P.value.source_name||P.value.source),1),P.value.uri?(d(),v("a",{key:0,href:P.value.uri,target:"_blank",class:"source-open"},"打开原文件 ↗",8,Z3)):H("",!0)]),l("div",null,[l("button",{disabled:ie.value||!V.value&&!P.value.local_content&&!Je.value,onClick:Ze},f(se(g).authUser?"AI 解析":"解析知识页"),9,e4),l("button",{onClick:Fe},"删除")])]),l("nav",null,[l("button",{class:we({active:xe.value==="chunks"}),onClick:y[20]||(y[20]=R=>xe.value="chunks")},"原始文件",2),l("button",{class:we({active:xe.value==="analysis"}),onClick:y[21]||(y[21]=R=>xe.value="analysis")},"AI 知识页",2),l("button",{class:we({active:xe.value==="graph"}),onClick:y[22]||(y[22]=R=>xe.value="graph")},"证据关系图",2)]),(d(),v("div",{class:"kb-inspect-body",key:P.value.id+":"+xe.value,role:"region","aria-label":"文档内容，独立滚动",tabindex:"0"},[xe.value==="chunks"?(d(),v(Q,{key:0},[/\.pptx?$/i.test(P.value.title||"")&&P.value.uri?(d(),It(d3,{key:0,uri:P.value.uri,title:P.value.title},null,8,["uri","title"])):(vn=P.value.sheets)!=null&&vn.length?(d(),It(t3,{key:1,sheets:P.value.sheets},null,8,["sheets"])):P.value.media_type==="video"?(d(),v(Q,{key:2},[l("video",{src:P.value.uri,controls:"",playsinline:"",preload:"metadata",class:"knowledge-video"},null,8,n4),l("p",null,f(P.value.parse_method||"视频原件"),1),l("pre",t4,f(P.value.local_content||P.value.parse_error||"暂无字幕，原片可播放。"),1)],64)):En.value?(d(),v("div",s4,[y[43]||(y[43]=l("b",null,"已提取正文",-1)),l("pre",i4,f(P.value.local_content||((Be=P.value.chunks)==null?void 0:Be.map(R=>R.text).join(`

`))||"原始文件已收录，暂无可展示的提取正文。"),1),l("details",null,[y[42]||(y[42]=l("summary",null,"查看 PDF 原件",-1)),l("iframe",{src:P.value.uri,class:"original-file",title:P.value.title+"原始文件"},null,8,l4)])])):/\.(png|jpe?g|webp)$/i.test(P.value.uri||"")?(d(),v("img",{key:4,src:P.value.uri,alt:P.value.title,style:{"max-width":"100%",height:"auto"}},null,8,o4)):P.value.imported_file&&!P.value.local_content?(d(),v("p",r4,"此文件已保留原件，可点击上方“打开原文件”查看。")):P.value.local_content||Je.value?(d(),v("pre",a4,f(P.value.local_content||Je.value),1)):ke.value?(d(),v("p",u4,"正在读取原文…")):P.value.uri?(d(),v("p",c4,"暂无可显示的原文，请主动点击上方链接下载原文件。")):(d(!0),v(Q,{key:9},oe(P.value.chunks,R=>(d(),v("article",{key:R.id,class:"kb-chunk"},[l("b",null,"#"+f(R.position)+" · "+f(R.locator),1),l("p",null,f(R.text),1)]))),128))],64)):P.value.analysis?xe.value==="analysis"?(d(),v(Q,{key:2},[P.value.analysis.extraction_method?(d(),v("p",p4,f(P.value.analysis.extraction_method),1)):H("",!0),l("div",v4,[l("article",null,[y[44]||(y[44]=l("span",null,"子库分类",-1)),l("b",null,f(P.value.analysis.subspace||"待确认"),1)]),l("article",null,[y[45]||(y[45]=l("span",null,"框架目录",-1)),l("b",null,f((P.value.analysis.catalog||[]).join(" / ")||"待确认"),1)]),l("article",null,[y[46]||(y[46]=l("span",null,"核心概念",-1)),l("b",null,f((P.value.analysis.concepts||[]).join(" · ")||"待确认"),1)]),l("article",null,[y[47]||(y[47]=l("span",null,"实体",-1)),l("b",null,f((P.value.analysis.entities||[]).map(R=>`${R.name}${R.type?`（${R.type}）`:""}`).join(" · ")||"待确认"),1)])]),(d(),v(Q,null,oe([{key:"summary",label:"摘要"},{key:"framework",label:"方法框架"},{key:"hook",label:"钩子"},{key:"body",label:"主体"},{key:"cta",label:"CTA"}],R=>l("article",{key:R.key,class:"kb-chunk"},[l("h4",null,f(R.label),1),l("p",null,f(P.value.analysis[R.key]||"—"),1)])),64))],64)):(d(),v(Q,{key:3},[y[48]||(y[48]=l("p",null,"关系只保留能回到原文连续引文的证据。",-1)),on(Ja,{graph:{nodes:P.value.analysis.nodes||[],edges:(P.value.analysis.edges||[]).map(R=>({...R,document_id:P.value.id,document_title:P.value.title}))},onOpenDocument:y[23]||(y[23]=R=>{Ce.value="documents",I(R.id)})},null,8,["graph"])],64)):(d(),v("p",d4,"尚未 AI 解析。配置模型后可提取摘要、子库分类、目录框架、实体、概念和内容结构。"))]))])):H("",!0)])])],64)):m.value==="sources"?(d(),v("section",f4,[l("header",null,[y[49]||(y[49]=l("div",null,[l("h3",null,"数据源"),l("p",null,"文件与粘贴文本统一登记；每一份资料都可追溯解析状态。")],-1)),l("button",{onClick:y[24]||(y[24]=R=>{m.value="space",E.value="file"})},"上传文件")]),y[50]||(y[50]=l("div",{class:"table-head"},[l("span",null,"名称"),l("span",null,"类型"),l("span",null,"知识空间"),l("span",null,"同步状态"),l("span",null,"文档数")],-1)),(d(!0),v(Q,null,oe(pn.value,R=>(d(),v("div",{key:R.id,class:"table-row"},[l("div",null,[l("b",null,f(R.name),1),l("small",null,f(R.uri||"本地导入"),1)]),l("span",null,f(le[R.source_type]||R.source_type),1),l("span",null,f(R.space_name),1),l("span",{class:we(["status",R.status])},[Ae(f(B[R.status]||R.status),1),R.error_message?(d(),v("small",h4,f(R.error_message),1)):H("",!0)],2),l("b",null,f(R.document_count),1)]))),128)),pn.value.length?H("",!0):(d(),v("p",m4,"暂无数据源。"))])):m.value==="sync"?(d(),v("section",g4,[l("input",{ref_key:"retryInput",ref:Y,type:"file",hidden:"",accept:".pdf,.pptx,.docx,.txt,.md,.mp4,.mov,.webm,.m4v",onChange:D},null,544),l("header",null,[y[51]||(y[51]=l("div",null,[l("h3",null,"同步状态"),l("p",null,"展示解析、索引和错误阶段，便于重试与排障。")],-1)),l("button",{onClick:x},"刷新")]),l("div",_4,[(d(),v(Q,null,oe([["all","全部"],["failed","失败"],["pending","待解析"],["completed","成功"]],R=>l("button",{key:R[0],class:we({active:qe.value===R[0]}),onClick:J=>qe.value=R[0]},f(R[1])+" · "+f(R[0]==="all"?kn.value.length:kn.value.filter(J=>J.status===R[0]).length),11,y4)),64))]),(d(!0),v(Q,null,oe(On.value,R=>(d(),v("div",{key:R.id,class:"sync-row"},[l("div",null,[l("b",null,f(R.source_name),1),l("small",null,f(R.source_type)+" · "+f(R.stage),1)]),l("div",b4,[l("i",{style:Pn({width:`${R.progress||0}%`})},null,4)]),l("span",{class:we(["status",R.status])},f(R.status==="failed"?"失败":R.status==="completed"?"成功":"待解析")+" · "+f(R.progress||0)+"%",3),l("p",null,f(R.message),1),R.status!=="completed"&&c(R.id)?(d(),v("button",{key:0,onClick:J=>b(R)},"重新上传",8,w4)):H("",!0)]))),128)),On.value.length?H("",!0):(d(),v("p",k4,"当前筛选下暂无同步任务。"))])):m.value==="graph"?(d(),v("section",x4,[l("header",null,[y[52]||(y[52]=l("div",null,[l("h3",null,"知识图谱"),l("p",null,"跨文档聚合实体、概念及其有证据的关系。")],-1)),l("span",null,f(xn.value.document_count||0)+" 份已解析文档",1)]),on(Ja,{graph:xn.value,onOpenDocument:y[25]||(y[25]=R=>{m.value="space",Ce.value="documents",u.value="all",p.value="全部",ne.value="",I(R.id)})},null,8,["graph"])])):(d(),v("section",S4,[y[53]||(y[53]=l("h3",null,"知识空间",-1)),y[54]||(y[54]=l("p",null,"按项目、账号或团队建立独立上下文。",-1)),(d(!0),v(Q,null,oe(M.value,R=>(d(),v("div",{key:R.id,class:"space-row"},[l("div",null,[l("b",null,f(R.name),1),l("small",null,f(R.description||"私有空间"),1)]),l("span",null,f(R.visibility==="team"?"团队":"私有")+" · "+f(R.document_count)+" 文档",1)]))),128)),l("div",$4,[en(l("input",{"onUpdate:modelValue":y[26]||(y[26]=R=>nn.value=R),placeholder:"新知识空间名称"},null,512),[[bn,nn.value]]),l("button",{onClick:Ge},"创建")])]))])}}},C4=Dn(T4,[["__scopeId","data-v-1d2fc7f4"]]),D4={class:"scripts-page"},A4={class:"src-line"},E4=["href"],I4={key:0,class:"video-grid script-grid"},M4=["onClick"],O4={class:"thumb"},R4=["src","alt"],P4={class:"dur"},L4={class:"meta"},N4={class:"title"},F4={class:"tag"},z4={class:"metrics"},U4={class:"stats"},j4={key:1,class:"script-workspace"},B4={class:"script-selected-panel"},V4={class:"selected-video-card"},X4={class:"thumb"},W4=["src","alt"],H4={class:"dur"},q4={class:"meta"},K4={class:"title"},G4={class:"tag"},Y4={class:"metrics"},Q4={class:"card script-detail"},J4={class:"detail-actions"},Z4={__name:"ScriptsView",setup(e){const n=K(null);Kt(()=>{g.scriptContext=null});const t=[{id:"demo-script-1",t:"高中生压力大，送给他这 3 句话",from:"视频号脚本",dur:"00:60",tag:"亲子沟通",cover:"./assets/covers/pressure-3sentences.png",hook:"月考卷先别急着收起来：这 3 类失分，决定孩子接下来一个月能不能追上来。",points:["先把错题按“不会、会但错、时间不够”分成三类","每天只回炉一类题，连续坚持 7 天","家长只问一个问题：今天哪一类错题更少了？"],cta:"评论区回复「月考」，领取 7 天错题复盘表。",views:"12.8w",comments:"1,286",likes:"9,642",shares:"2,118"},{id:"demo-script-2",t:"清华生活 vlog",from:"视频号脚本",dur:"00:50",tag:"清华生活",cover:"./assets/covers/qinghua-vlog.png",hook:"孩子考完只说“没发挥好”，家长看这 3 个位置，就知道问题到底在哪。",points:["看丢分分布：基础、计算还是综合题","看卷面痕迹：空白、涂改还是时间不足","把评价换成共同复盘：先问哪题最可惜"],cta:"收藏这条，下一次月考后照着问。",views:"8.7w",comments:"936",likes:"6,284",shares:"1,562"},{id:"demo-script-3",t:"英语上 140，有哪几个步骤",from:"视频号脚本",dur:"00:45",tag:"英语学习",cover:"./assets/covers/english-140.png",hook:"期中前一周最危险的不是题没刷够，而是每天都在重复低效努力。",points:["周一到周三：用错题定位知识漏洞","周四到周五：做两套限时小卷","周末：只复盘错因和时间分配，不再开新战线"],cta:"需要一周计划模板，在评论区打「节奏」。",views:"10.4w",comments:"1,053",likes:"7,891",shares:"1,846"},{id:"demo-script-4",t:"高一学生，是怎样毁掉自己的",from:"视频号脚本",dur:"00:55",tag:"高中学习",cover:"./assets/covers/gaoyi-mistakes.png",hook:"成绩一波动，家长最容易说的三句话，可能刚好让孩子更不想学习。",points:["不说“你怎么又退步了”","不说“隔壁谁谁考得多好”","把“你要努力”换成“我们一起找一个能改变的动作”"],cta:"转给需要的家长，下一条讲怎么开场。",views:"7.2w",comments:"824",likes:"5,376",shares:"1,204"}],s=ue(()=>g.scripts.length?g.scripts.filter(o=>o.from!=="Cue 生成"&&o.src!=="Cue 生成"):t);hn(n,o=>{g.scriptContext=o?{title:o.t,hook:o.hook||"从一个具体家长场景切入。",points:o.points||["建立共鸣","给出方法","引导行动"],cta:o.cta||"评论区回复关键词领取行动卡。",duration:o.dur,body:`# ${o.t}

## 0–3 秒｜钩子
${o.hook||"先从一个具体的家长焦虑场景切入，再给出当天能执行的一步。"}

## 3–12 秒｜建立共鸣
很多家长一看到分数就开始着急，但真正要先看的，是孩子这张卷子里的失分模式。镜头切到试卷局部，字幕突出：不是分数，是失分模式。

## 12–45 秒｜核心方法
${(o.points||["用具体场景建立共鸣","给出三步可执行的方法","用评论互动承接下一步"]).join(`
`)}

## 45–60 秒｜行动与 CTA
${o.cta||"评论区回复关键词，领取本周行动卡。"}`}:null});function i(){if(!n.value)return;const o=n.value;g.knowledgeSaveDraft={title:o.t,subspace:"短视频脚本",content:`# ${o.t}

## 0–3 秒｜钩子
${o.hook||"先从一个具体的家长焦虑场景切入，再给出当天能执行的一步。"}

## 12–45 秒｜核心方法
${(o.points||["用一个具体场景建立共鸣","给出三步可执行的方法","用评论互动承接下一步"]).map((r,a)=>`${a+1}. ${r}`).join(`
`)}

## 45–60 秒｜行动与 CTA
${o.cta||"评论区回复关键词，领取本周行动卡。"}`}}return(o,r)=>(d(),v("div",D4,[l("div",A4,[r[3]||(r[3]=l("span",null,"来源：",-1)),l("a",{href:se(Zd),target:"_blank"},"视频号脚本",8,E4),r[4]||(r[4]=l("span",{class:"src-tag"},"内容数据",-1))]),n.value?(d(),v("section",j4,[l("aside",B4,[l("button",{class:"back-to-library",onClick:r[0]||(r[0]=a=>n.value=null)},"‹ 返回脚本库"),l("div",V4,[l("div",X4,[l("img",{src:n.value.cover,alt:n.value.t},null,8,W4),l("span",H4,f(n.value.dur),1)]),l("div",q4,[l("div",K4,[l("span",G4,f(n.value.tag),1),Ae(f(n.value.t),1)]),l("div",Y4,[l("span",null,"▶ "+f(n.value.views),1),l("span",null,"◌ "+f(n.value.comments),1),l("span",null,"♥ "+f(n.value.likes),1),l("span",null,"↗ "+f(n.value.shares),1)]),r[6]||(r[6]=l("small",null,"已选视频卡片",-1))])])]),l("main",Q4,[l("header",null,[l("div",null,[r[7]||(r[7]=l("span",{class:"eyebrow"},"SHORT VIDEO SCRIPT · 脚本稿",-1)),l("h2",null,f(n.value.t),1),l("p",null,f(n.value.from)+" · "+f(n.value.dur)+" · 可直接用于拍摄",1)]),l("button",{class:"close",title:"返回脚本库",onClick:r[1]||(r[1]=a=>n.value=null)},"×")]),r[11]||(r[11]=l("div",{class:"script-info"},[l("div",null,[l("span",null,"目标"),l("b",null,"让家长获得一个当下就能执行的复盘动作，并承接评论区互动。")]),l("div",null,[l("span",null,"镜头"),l("b",null,"正面半身口播 + 手持月考卷 / 错题本 B-roll。")])],-1)),l("article",null,[r[8]||(r[8]=l("h3",null,"0–3 秒｜钩子",-1)),l("p",null,f(n.value.hook||"先从一个具体的家长焦虑场景切入，再给出当天能执行的一步。"),1)]),r[12]||(r[12]=l("article",null,[l("h3",null,"3–12 秒｜建立共鸣"),l("p",null,"“很多家长一看到分数就开始着急，但真正要先看的，是孩子这张卷子里的失分模式。”镜头切到试卷局部，字幕突出“不是分数，是失分模式”。")],-1)),l("article",null,[r[9]||(r[9]=l("h3",null,"12–45 秒｜核心方法",-1)),l("ol",null,[(d(!0),v(Q,null,oe(n.value.points||["用具体场景建立共鸣","给出三步可执行的方法","用评论互动承接下一步"],a=>(d(),v("li",{key:a},f(a),1))),128))])]),l("article",null,[r[10]||(r[10]=l("h3",null,"45–60 秒｜行动与 CTA",-1)),l("p",null,f(n.value.cta||"评论区回复关键词，领取本周行动卡。"),1)]),l("div",J4,[l("button",{class:"knowledge-action",onClick:i},"加入知识库"),l("button",{onClick:r[2]||(r[2]=a=>n.value=null)},"返回脚本卡片")])])])):(d(),v("section",I4,[(d(!0),v(Q,null,oe(s.value,a=>(d(),v("button",{key:a.id,class:"video-card script-card",onClick:u=>n.value=a},[l("div",O4,[l("img",{src:a.cover,alt:a.t},null,8,R4),l("span",P4,f(a.dur),1)]),l("div",L4,[l("div",N4,[l("span",F4,f(a.tag),1),Ae(f(a.t),1)]),l("div",z4,[l("span",null,"▶ "+f(a.views||"—"),1),l("span",null,"◌ "+f(a.comments||"—"),1),l("span",null,"♥ "+f(a.likes||"—"),1),l("span",null,"↗ "+f(a.shares||"—"),1)]),l("div",U4,[l("span",null,"来源："+f(a.from),1),r[5]||(r[5]=l("b",null,"查看完整脚本 →",-1))])])],8,M4))),128))]))]))}},e_=Dn(Z4,[["__scopeId","data-v-af94ddab"]]),po=[[0,5.1,0],[.0029,12.3,1],[.0058,23.6,1],[.0086,29.6,1],[.0115,33.4,1],[.0144,34.6,1],[.0173,34.9,1],[.0201,33.9,1],[.023,32.3,1],[.0259,31.2,1],[.0288,33.5,1],[.0316,37.5,1],[.0345,41.4,1],[.0374,44.6,1],[.0403,47.7,1],[.0431,52.2,1],[.046,57.8,1],[.0489,63.1,1],[.0518,66.8,1],[.0547,68.9,1],[.0575,69.8,1],[.0604,69.9,1],[.0633,69.2,1],[.0662,68.3,1],[.069,67.7,1],[.0719,67.4,1],[.0748,67.1,1],[.0777,67.6,1],[.0805,69.3,1],[.0834,71.3,1],[.0863,70.7,1],[.0892,67.6,1],[.092,65,1],[.0949,65.9,1],[.0978,70.1,1],[.1007,74.9,1],[.1035,80.3,1],[.1064,83.8,1],[.1093,86.5,1],[.1122,87.5,1],[.1151,87.7,1],[.1179,88.2,1],[.1208,89.5,1],[.1237,90.9,1],[.1266,91.8,1],[.1294,90.5,1],[.1323,88.7,1],[.1352,87.5,1],[.1381,89.9,1],[.1409,92.9,1],[.1438,94.4,1],[.1467,91.9,1],[.1496,88.7,1],[.1524,87.6,1],[.1553,90.6,1],[.1582,94.3,1],[.1611,97.9,1],[.164,100.2,1],[.1668,102.9,1],[.1697,106.5,1],[.1726,111.3,1],[.1755,115,1],[.1783,114.2,1],[.1812,111,1],[.1841,108.5,1],[.187,108.4,1],[.1898,109.2,1],[.1927,110.7,1],[.1956,113.3,1],[.1985,115.9,1],[.2013,118,1],[.2042,117.9,1],[.2071,117.5,1],[.21,117,1],[.2128,116.8,1],[.2157,116.3,1],[.2186,116.1,1],[.2215,116.8,1],[.2244,118.2,1],[.2272,120,1],[.2301,120.9,1],[.233,121.7,1],[.2359,121.9,1],[.2387,120.9,1],[.2416,119.1,1],[.2445,116.7,1],[.2474,114.8,1],[.2502,113.4,1],[.2531,113.1,1],[.256,113.4,1],[.2589,114.3,1],[.2617,115.6,1],[.2646,117.5,1],[.2675,119.8,1],[.2704,121.8,1],[.2733,123.6,1],[.2761,124.6,1],[.279,124.4,1],[.2819,123.4,1],[.2848,122.3,1],[.2876,122.1,1],[.2905,122.2,1],[.2934,122.9,1],[.2963,124.9,1],[.2991,128.2,1],[.302,130.7,1],[.3049,131,1],[.3078,131,1],[.3106,131,1],[.3135,130.7,1],[.3164,129.1,1],[.3193,127.4,1],[.3221,125.8,1],[.325,124.1,1],[.3279,123.2,1],[.3308,124.7,1],[.3337,127.3,1],[.3365,129.1,1],[.3394,124.7,1],[.3423,120.1,1],[.3452,117,1],[.348,117,1],[.3509,117,1],[.3538,117,1],[.3567,116.4,1],[.3595,115.7,1],[.3624,115,1],[.3653,114.8,1],[.3682,114.4,1],[.371,113.3,1],[.3739,111.3,1],[.3768,108.6,1],[.3797,106.1,9.2],[.3826,104,88.2],[.3854,102.1,202.1],[.3883,100.4,266.7],[.3912,99,336.4],[.3941,97.6,369.2],[.3969,95.8,369.2],[.3998,94.1,282.1],[.4027,91.8,24.6],[.4056,90,1],[.4084,88.3,1],[.4113,86.5,2.1],[.4142,84.7,31.8],[.4171,82.7,163.1],[.4199,81.4,200],[.4228,80.4,194.9],[.4257,79.8,82.1],[.4286,79.1,6.2],[.4314,77.8,1],[.4343,76.7,1],[.4372,76,1],[.4401,76,1],[.443,76,1],[.4458,76,10.3],[.4487,75.1,172.3],[.4516,0,572.3],[.4545,73.1,600],[.4573,0,530.3],[.4602,73.7,134.4],[.4631,73.8,4.1],[.466,72.2,1],[.4688,69.8,1],[.4717,68,9.2],[.4746,67.4,86.2],[.4775,67.1,196.9],[.4803,67.4,200],[.4832,69.5,144.6],[.4861,71.6,28.7],[.489,72.4,1],[.4919,70.6,1],[.4947,68.1,1],[.4976,66.4,1],[.5005,65.5,1],[.5034,65,1],[.5062,65,1],[.5091,65,1],[.512,65,1],[.5149,65,1],[.5177,64.6,1],[.5206,64.1,1],[.5235,63.8,1],[.5264,63.3,1],[.5292,63.1,1],[.5321,63.8,1],[.535,65.9,1],[.5379,67.5,1],[.5407,66.1,1],[.5436,63.9,1],[.5465,62.2,1],[.5494,62.5,1],[.5523,63.1,1],[.5551,64.3,1],[.558,65.6,1],[.5609,67.2,1],[.5638,67.8,1],[.5666,66.3,1],[.5695,64.4,1],[.5724,63.4,7.2],[.5753,65.5,81],[.5781,67.5,195.9],[.581,68.4,200],[.5839,66.9,179.5],[.5868,64.7,96.4],[.5896,64.4,55.4],[.5925,0,407.2],[.5954,0,596.9],[.5983,0,599],[.6012,0,390.8],[.604,64.9,70.8],[.6069,62,1],[.6098,58.6,1],[.6127,55.5,1],[.6155,54.9,1],[.6184,54.9,1],[.6213,54.9,1],[.6242,55.5,1],[.627,57.4,1],[.6299,59.4,1],[.6328,60.5,1],[.6357,60.9,1],[.6385,60.9,1],[.6414,60.8,1],[.6443,60.3,1],[.6472,60.2,1],[.65,60.4,1],[.6529,61.3,1],[.6558,61.9,1],[.6587,60.5,1],[.6616,58.9,1],[.6644,57.3,1],[.6673,57.9,1],[.6702,59.5,1],[.6731,61.3,1],[.6759,62.9,1],[.6788,64.4,1],[.6817,64.9,1],[.6846,64.1,1],[.6874,63.1,1],[.6903,61.6,1],[.6932,60.4,1],[.6961,59.5,1],[.6989,59.5,1],[.7018,61.3,1],[.7047,63.8,1],[.7076,65.2,1],[.7105,65.8,1],[.7133,65.9,1],[.7162,65.7,1],[.7191,64.4,1],[.722,62.8,1],[.7248,61.6,1],[.7277,60.9,1],[.7306,60.2,1],[.7335,59.6,1],[.7363,59,1],[.7392,58.3,1],[.7421,57.3,1],[.745,56.1,1],[.7478,55.3,1],[.7507,56.8,1],[.7536,59.1,1],[.7565,61.6,1],[.7593,61.4,1],[.7622,60.4,1],[.7651,59,1],[.768,56.5,1],[.7709,54.2,1],[.7737,53.1,1],[.7766,53.6,1],[.7795,54.6,1],[.7824,54.8,1],[.7852,54,1],[.7881,52.2,1],[.791,51.2,1],[.7939,52.9,1],[.7967,54.9,1],[.7996,55.5,21.5],[.8025,0,221.5],[.8054,0,366.2],[.8082,50.3,370.3],[.8111,0,304.6],[.814,0,218.5],[.8169,52.2,200],[.8198,52.4,200],[.8226,52.8,200],[.8255,53.8,200],[.8284,55.4,176.4],[.8313,56.7,27.7],[.8341,56.8,1],[.837,56.7,1],[.8399,56.2,1],[.8428,55.8,1],[.8456,55.4,1],[.8485,55.2,1],[.8514,55.6,1],[.8543,57.4,1],[.8571,59.5,1],[.86,60.8,1],[.8629,61.7,1],[.8658,61.9,1],[.8686,61.7,1],[.8715,61.5,1],[.8744,61,1],[.8773,63.2,1],[.8802,65.6,1],[.883,68,1],[.8859,67.8,1],[.8888,67.5,1],[.8917,66.9,17.4],[.8945,66.3,194.9],[.8974,0,587.7],[.9003,63.7,600],[.9032,0,526.2],[.906,60.3,86.2],[.9089,58.5,4.1],[.9118,56.6,1],[.9147,54.9,1],[.9175,54,1],[.9204,53.2,1],[.9233,53,1],[.9262,53,1],[.9291,53,1],[.9319,53,1],[.9348,53.2,1],[.9377,54.4,1],[.9406,57,1],[.9434,59.5,1],[.9463,62.5,1],[.9492,64.5,1],[.9521,63.8,1],[.9549,61.7,1],[.9578,59.7,1],[.9607,58.6,1],[.9636,58.5,1],[.9664,58,1],[.9693,56.7,1],[.9722,54.7,1],[.9751,53.2,1],[.9779,55,1],[.9808,57.2,1],[.9837,58.9,1],[.9866,59,1],[.9895,59,1],[.9923,59,1],[.9952,59.1,1],[.9981,59,1]],n_={class:"native-live-chart"},t_=["y1","y2"],s_=["y"],i_=["y"],l_=["d"],o_=["d"],r_=["d"],a_=["x"],u_={key:0},c_=["x1","x2"],d_=["cx","cy"],p_=["aria-label","onPointerenter","onFocus","onClick","onKeydown"],v_=["x1","x2","y1"],f_=["cx","cy"],h_=["x","y"],m_={key:0,class:"node-tooltip",role:"status"},g_={__name:"LiveTrendChart",setup(e){const n=K(null),t=K(null),s=[{id:"A",fraction:36/118,value:131,title:"峰值 131 人 · 高光话题",detail:"中档题的重要性",tip:"金句：“不要跨阶段刷题”"},{id:"B",fraction:70/118,value:140,title:"成交高峰 · 有效销售",detail:"成交额破 3000，与观众互动、自然塑品",tip:"建议沉淀为互动 → 匹配需求 → 自然塑品 SOP"},{id:"C",fraction:47/118,value:90,title:"迅速掉人 · 风险点",detail:"计算问题，讲解节奏拖沓",tip:"建议换话题或切入互动，拉回在线人数"}],i=c=>58+c[0]*884,o=(c,h)=>310-c/h*250,r=(c,h)=>po.map((m,S)=>(S?"L":"M")+i(m).toFixed(1)+","+o(m[c],h).toFixed(1)).join(" "),a=["20:22","20:32","20:42","20:52","21:02","21:12","21:22","21:32","21:42","21:52","22:02","22:12"];function u(c){const h=1222+Math.round(c[0]*118);return String(Math.floor(h/60)).padStart(2,"0")+":"+String(h%60).padStart(2,"0")}function p(c){const h=c.currentTarget.getBoundingClientRect(),m=Math.max(0,Math.min(1,((c.clientX-h.left)/h.width*1e3-58)/884));n.value=po[Math.round(m*(po.length-1))]}return(c,h)=>(d(),v("div",n_,[h[5]||(h[5]=vl('<header data-v-f68185fa><strong data-v-f68185fa>整场在线人数与成交金额趋势</strong><span data-v-f68185fa>2025-11-15 · 20:22 开播</span></header><div class="chart-metrics" data-v-f68185fa><span data-v-f68185fa>成交金额 <b data-v-f68185fa>¥3,729</b></span><span data-v-f68185fa>成交订单 <b data-v-f68185fa>11</b></span><span data-v-f68185fa>成交人数 <b data-v-f68185fa>10</b></span><span data-v-f68185fa>平均在线 <b data-v-f68185fa>75</b></span><span data-v-f68185fa>进房人数 <b data-v-f68185fa>3,449</b></span><span data-v-f68185fa>离开人数 <b data-v-f68185fa>3,423</b></span></div><div class="chart-legend" data-v-f68185fa><span data-v-f68185fa><i data-v-f68185fa></i>在线人数（人）</span><span data-v-f68185fa><i class="sale" data-v-f68185fa></i>成交金额（元，右轴）</span></div>',3)),(d(),v("svg",{viewBox:"0 0 1000 365",role:"img","aria-label":"直播在线人数和成交金额双轴曲线",onPointermove:p,onPointerleave:h[2]||(h[2]=m=>n.value=null)},[h[3]||(h[3]=l("defs",null,[l("linearGradient",{id:"live-area",x1:"0",y1:"0",x2:"0",y2:"1"},[l("stop",{offset:"0","stop-color":"#bd244a","stop-opacity":".5"}),l("stop",{offset:"1","stop-color":"#27161a","stop-opacity":".1"})])],-1)),(d(),v(Q,null,oe([0,20,40,60,80,100,120,140],m=>l("g",{key:m},[l("line",{x1:"58",x2:"942",y1:o(m,140),y2:o(m,140),stroke:"#35292c"},null,8,t_),l("text",{x:"47",y:o(m,140)+4,"text-anchor":"end"},f(m),9,s_)])),64)),(d(),v(Q,null,oe([0,100,200,300,400,500,600],m=>l("text",{key:"money"+m,x:"951",y:o(m,600)+4},"¥"+f(m),9,i_)),64)),l("path",{d:r(1,140)+" L942,310 L58,310 Z",fill:"url(#live-area)"},null,8,l_),l("path",{d:r(1,140),fill:"none",stroke:"#d82b56","stroke-width":"2.5","stroke-linejoin":"round"},null,8,o_),l("path",{d:r(2,600),fill:"none",stroke:"#e69bae","stroke-width":"2","stroke-linejoin":"round"},null,8,r_),(d(),v(Q,null,oe(a,(m,S)=>l("text",{key:m,x:58+S*10/118*884,y:"334","text-anchor":"middle"},f(m),9,a_)),64)),n.value?(d(),v("g",u_,[l("line",{x1:i(n.value),x2:i(n.value),y1:"60",y2:"310",stroke:"#775960","stroke-dasharray":"4 4"},null,8,c_),l("circle",{cx:i(n.value),cy:o(n.value[1],140),r:"4",fill:"#a9193d"},null,8,d_)])):H("",!0),(d(),v(Q,null,oe(s,m=>l("g",{key:m.id,class:"chart-node",role:"button",tabindex:"0","aria-label":m.id+"："+m.title,onPointerenter:S=>t.value=m,onPointerleave:h[0]||(h[0]=S=>t.value=null),onFocus:S=>t.value=m,onBlur:h[1]||(h[1]=S=>t.value=null),onClick:mn(S=>t.value=m,["stop"]),onKeydown:[Ht(S=>t.value=m,["enter"]),Ht(mn(S=>t.value=m,["prevent"]),["space"])]},[l("line",{x1:58+m.fraction*884,x2:58+m.fraction*884,y1:o(m.value,140),y2:"310",stroke:"#63172a","stroke-dasharray":"4 4",opacity:".4"},null,8,v_),l("circle",{cx:58+m.fraction*884,cy:o(m.value,140),r:"16",fill:"#63172a",stroke:"white","stroke-width":"3"},null,8,f_),l("text",{x:58+m.fraction*884,y:o(m.value,140)+5,"text-anchor":"middle",class:"node-letter"},f(m.id),9,h_)],40,p_)),64))],32)),t.value?(d(),v("div",m_,[l("b",null,f(t.value.id)+" · "+f(t.value.title),1),l("p",null,f(t.value.detail),1),l("span",null,f(t.value.tip),1)])):H("",!0),l("footer",null,[Ae(f(n.value?u(n.value)+" · 在线约 "+Math.round(n.value[1])+" 人 · 成交金额约 ¥"+Math.round(n.value[2]):"在线峰值 131 人 · 移动鼠标查看曲线节点"),1),h[4]||(h[4]=l("small",null,"曲线按后台截图提取，节点数值为截图估读；汇总指标沿用原始数据。",-1))])]))}},__=Dn(g_,[["__scopeId","data-v-f68185fa"]]),y_={"2025-05-27":{page:1,text:`Day1-5.27

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
`}},b_={class:"src-line"},w_=["href"],k_={class:"live-toolbar"},x_={class:"live-analysis-tabs",role:"tablist","aria-label":"直播分析维度"},S_={class:"month-control"},$_=["value"],T_=["value"],C_={key:0,class:"month-control"},D_=["value"],A_={class:"month-control session-picker"},E_=["value"],I_=["value"],M_={class:"live-count"},O_={key:0,class:"live-left analysis-panel"},R_={class:"live-analysis-card"},P_={class:"live-analysis-head"},L_={class:"analysis-total"},N_={class:"live-analysis-kpis"},F_={class:"analysis-section-title"},z_={class:"live-trend","aria-label":"直播观看人数趋势"},U_=["onClick"],j_={class:"live-trend-bar"},B_={class:"month-gmv-compare"},V_={key:1,class:"live-left"},X_={class:"live-table-body"},W_=["onClick"],H_={class:"live-info"},q_=["src"],K_={key:1,class:"thumb-mini thumb-empty"},G_={class:"t-title"},Y_={class:"t-sub"},Q_={class:"gmv"},J_={class:"src-line",style:{margin:"10px 14px","font-size":"11px"}},Z_={style:{color:"var(--text-mute)"}},ey={key:0,class:"live-pagination"},ny=["disabled"],ty=["disabled"],sy=["aria-valuenow"],iy={class:"live-right"},ly={class:"detail-block"},oy={class:"detail-cards"},ry={class:"d-k"},ay={class:"d-v"},uy={key:0,class:"d-t"},cy={key:0,class:"detail-remark"},dy={key:1,class:"ai-highlight"},py={key:2,class:"backend-shot"},vy={class:"bs-label"},fy=["src"],hy={class:"detail-block"},my={class:"detail-h"},gy={class:"right-tag"},_y={key:0,class:"pic-row"},yy=["src"],by={key:1,class:"replay-pending"},wy={class:"pic-feats"},ky={class:"feat-k"},xy={class:"feat-v"},Sy={key:1,class:"demo-evidence-note"},$y={class:"replay-trend-proof"},Ty={class:"proof-label"},Cy=["src"],Dy={key:2,class:"fallback-live-trend","aria-label":"依据该场峰值生成的简化趋势示意"},Ay={class:"fallback-bars"},Ey={key:2,class:"replay-frame-grid"},Iy=["src","alt"],My={class:"node-analysis"},Oy={key:0},Ry={key:3,class:"conversion-funnel"},Py={class:"detail-h"},Ly={class:"right-tag"},Ny={class:"funnel-grid"},Fy={class:"funnel-card-head"},zy={class:"funnel-step-label"},Uy={class:"funnel-bar"},jy={key:0},By={key:4,class:"vision-zone"},Vy={key:0,class:"vz-steps show"},Xy={key:0,class:"detail-block source-review"},Wy=["href"],Hy={style:{"white-space":"pre-wrap","line-height":"1.8"}},qy=["src","title"],Ky={key:1,class:"detail-block"},Gy={class:"detail-h"},Yy=["href"],Qy={class:"script-ul"},Jy={class:"li-k"},Zy={key:2,class:"detail-block detail-empty"},e9={key:3,class:"detail-block source-review"},n9=["href"],t9=["href"],s9={key:2},i9=["src","title"],l9={style:{"white-space":"pre-wrap","line-height":"1.8"}},o9="./demo-docs/优优账号X直播记录【咨询+精讲课产品销售】.pdf",vo=6,r9={__name:"LiveSummaryView",setup(e){var Fn;const n=ue(()=>{var Y;return y_[(Y=c.value)==null?void 0:Y.d]||null}),t=ue(()=>{var Y;return encodeURI(o9)+"#page="+(((Y=n.value)==null?void 0:Y.page)||1)}),s=K(Math.min(65,Math.max(35,Number(localStorage.getItem("redcowork-replica-v2-live-split"))||52))),i=K(null);function o(Y){var b;const U=(b=i.value)==null?void 0:b.getBoundingClientRect();U&&(s.value=Math.min(72,Math.max(28,(Y.clientX-U.left)/U.width*100)))}function r(){window.removeEventListener("pointermove",o),window.removeEventListener("pointerup",r),localStorage.setItem("redcowork-replica-v2-live-split",String(s.value))}function a(Y){Y.preventDefault(),window.addEventListener("pointermove",o),window.addEventListener("pointerup",r)}function u(Y){(Y.key==="ArrowLeft"||Y.key==="ArrowRight")&&(Y.preventDefault(),s.value=Math.min(72,Math.max(28,s.value+(Y.key==="ArrowRight"?2:-2))),localStorage.setItem("redcowork-replica-v2-live-split",String(s.value)))}Kt(r);const p=K(((Fn=g.liveSessions.find(Y=>Y.d==="2025-11-15"))==null?void 0:Fn.d)||(g.liveSessions[2]?g.liveSessions[2].d:g.liveSessions[0]?g.liveSessions[0].d:"")),c=ue(()=>g.liveSessions.find(Y=>Y.d===p.value)||g.liveSessions[0]),h=ue(()=>c.value?g.liveNotes[c.value.d]||(n.value?{script:[{k:"手动复盘原文",v:n.value.text}],source_uri:t.value,source_page:n.value.page}:null):null);hn([c,h],([Y,U])=>{g.liveReviewContext=Y?{session:Y,review:U}:null},{immediate:!0});const m=K(g.liveSessions.some(Y=>Y.d.startsWith("2025-11"))?"2025-11":""),S=K(""),M=K(1),A=K("month"),O=ue(()=>[...new Set(g.liveSessions.map(Y=>Y.d.slice(0,7)).filter(Boolean))].sort().reverse()),ee=ue(()=>g.liveSessions.filter(Y=>Y.d.startsWith(m.value))),P=ue(()=>Math.max(1,Math.ceil(ee.value.length/vo))),ne=ue(()=>ee.value.slice((M.value-1)*vo,M.value*vo));hn(O,Y=>{Y.includes(m.value)||(m.value=Y[0]||"")},{immediate:!0}),hn(m,()=>{var Y;M.value=1,p.value=((Y=ee.value[0])==null?void 0:Y.d)||""}),hn(M,()=>{var Y;ne.value.some(U=>U.d===p.value)||(p.value=((Y=ne.value[0])==null?void 0:Y.d)||"")});function ie(Y){m.value=Y.target.value}function Z(){M.value>1&&M.value--}function V(){M.value<P.value&&M.value++}function E(Y){p.value=Y}function z(Y){m.value=Y,A.value="week";const U=g.liveSessions.find(b=>b.d.startsWith(Y));U&&(p.value=U.d)}function G(Y){return Number(String(Y??"").replace(/[^\d.-]/g,""))||0}function W(Y){return Math.round(Y||0).toLocaleString("zh-CN")}function q(Y){return"¥"+W(Y)}function he(Y){const U=new Date(String(Y).slice(0,10)+"T12:00:00");if(Number.isNaN(U.getTime()))return"未知周";U.setHours(0,0,0,0),U.setDate(U.getDate()+3-(U.getDay()+6)%7);const b=new Date(U.getFullYear(),0,4),D=1+Math.round(((U-b)/864e5-3+(b.getDay()+6)%7)/7);return`${U.getFullYear()} W${String(D).padStart(2,"0")}`}function xe(Y,U){const b=U.reduce(($,w)=>$+G(w.view),0),D=U.reduce(($,w)=>$+G(w.gmv),0),L=U.map($=>G($.peak));return{label:Y,sessions:U.length,views:b,gmv:D,peak:L.length?Math.max(...L):0,average:U.length?Math.round(b/U.length):0}}function nn(Y){const U=new Map;return g.liveSessions.forEach(b=>{const D=Y(b);D&&(U.has(D)||U.set(D,[]),U.get(D).push(b))}),[...U.entries()].map(([b,D])=>xe(b,D)).sort((b,D)=>D.label.localeCompare(b.label))}const Je=ue(()=>nn(Y=>Y.d.slice(0,7))),ke=ue(()=>{const Y=new Map;return g.liveSessions.filter(U=>!m.value||U.d.startsWith(m.value)).forEach(U=>{const b=he(U.d);Y.has(b)||Y.set(b,[]),Y.get(b).push(U)}),[...Y.entries()].map(([U,b])=>xe(U,b)).sort((U,b)=>b.label.localeCompare(U.label))}),Ee=ue(()=>ke.value.map(Y=>Y.label));hn(Ee,Y=>{Y.includes(S.value)||(S.value=Y[0]||"")},{immediate:!0}),hn(S,Y=>{if(A.value==="week"){const U=g.liveSessions.find(b=>he(b.d)===Y);U&&(p.value=U.d)}});const Ie=ue(()=>A.value==="month"?Je.value:ke.value),We=ue(()=>Math.max(...Ie.value.map(Y=>Y.views),1)),An=ue(()=>A.value==="month"?"按月直播经营分析":"按周直播经营分析"),_n=ue(()=>Je.value.slice().reverse().map(Y=>({label:Y.label,gmv:Y.gmv,current:Y.label===m.value}))),He=ue(()=>Math.max(..._n.value.map(Y=>Y.gmv),1)),En=K([]);Kt(()=>{});const Ue=ue(()=>{var b,D,L,$,w,j,C,X,F,B;if(!c.value)return[];const Y=c.value,U=h.value;return U!=null&&U.visual?[{k:"光线",v:(((b=U.visual)==null?void 0:b.light)||"-")+" / 后台:"+(((D=U.visual)==null?void 0:D.setup)||"-")},{k:"服装",v:((L=U.visual)==null?void 0:L.body)||"-"},{k:"手势",v:(($=U.visual)==null?void 0:$.gesture)||"-"},{k:"角色",v:((w=U.visual)==null?void 0:w.role)||"-"}]:[{k:"光线",v:((j=Y.visual)==null?void 0:j.light)||"未绑定画面"},{k:"布场",v:((C=Y.visual)==null?void 0:C.setup)||"未绑定画面"},{k:"服装",v:((X=Y.visual)==null?void 0:X.body)||"未绑定画面"},{k:"手势",v:((F=Y.visual)==null?void 0:F.gesture)||"未绑定画面"},{k:"状态",v:((B=Y.visual)==null?void 0:B.energy)||"-"}]}),Mn=ue(()=>{var U,b,D;if(!c.value)return[];if((D=(b=(U=h.value)==null?void 0:U.data)==null?void 0:b.cards)!=null&&D.length)return h.value.data.cards;const Y=c.value;return[{k:"观看人数",v:Y.view??"未记录"},{k:"最高在线",v:Y.peak??"未记录"},{k:"总热度",v:Y.hot??"未记录"},{k:"成交金额",v:Y.gmv??"未记录"}]}),qe=ue(()=>{var Y;return((Y=c.value)==null?void 0:Y.visual)||{}}),kn=ue(()=>qe.value.trend_image||qe.value.demoTrendImage||null),On=ue(()=>{var U;const Y=Math.max(1,G((U=c.value)==null?void 0:U.peak));return[.18,.36,.52,.68,.84,1,.92,.78,.66,.72,.58,.63].map((b,D)=>({label:`${D*10}分`,value:Math.max(1,Math.round(Y*b))}))});return(Y,U)=>{var b,D,L,$,w,j;return d(),v("div",null,[l("div",b_,[U[5]||(U[5]=l("span",null,"来源：",-1)),l("a",{href:se(ca),target:"_blank",rel:"noopener"},"打开飞书直播复盘文档 ↗",8,w_),U[6]||(U[6]=l("span",null,"· 清华优优直播复盘记录",-1)),U[7]||(U[7]=l("span",{class:"src-tag"},"视频号",-1))]),l("div",k_,[l("div",x_,[l("button",{class:we({on:A.value==="month"}),onClick:U[0]||(U[0]=C=>A.value="month")},"按月",2),l("button",{class:we({on:A.value==="week"}),onClick:U[1]||(U[1]=C=>A.value="week")},"按周",2),l("button",{class:we({on:A.value==="session"}),onClick:U[2]||(U[2]=C=>A.value="session")},"按场次",2)]),l("div",S_,[U[8]||(U[8]=l("span",null,"直播月份",-1)),l("select",{value:m.value,onChange:ie},[(d(!0),v(Q,null,oe(O.value,C=>(d(),v("option",{key:C,value:C},f(C),9,T_))),128))],40,$_)]),A.value==="week"?(d(),v("div",C_,[U[9]||(U[9]=l("span",null,"直播周",-1)),en(l("select",{"onUpdate:modelValue":U[3]||(U[3]=C=>S.value=C)},[(d(!0),v(Q,null,oe(Ee.value,C=>(d(),v("option",{key:C,value:C},f(C),9,D_))),128))],512),[[ys,S.value]])])):H("",!0),l("div",A_,[U[10]||(U[10]=l("span",null,"具体场次",-1)),l("select",{value:p.value,onChange:U[4]||(U[4]=C=>E(C.target.value))},[(d(!0),v(Q,null,oe(ee.value,C=>(d(),v("option",{key:C.d,value:C.d},f(C.d)+" · "+f(C.title),9,I_))),128))],40,E_)]),l("span",M_,f(ee.value.length)+" 条复盘记录",1)]),l("div",{ref_key:"liveGrid",ref:i,class:we(["live-grid",{"analysis-layout":A.value!=="session"}]),style:Pn({"--live-left-weight":s.value+"fr","--live-right-weight":100-s.value+"fr"})},[A.value!=="session"?(d(),v("div",O_,[l("section",R_,[l("div",P_,[l("div",null,[l("h2",null,f(An.value),1),l("span",null,"来源：视频号直播历史数据.csv · "+f(se(g).liveSessions.length)+" 场（含测试场）",1)]),l("span",L_,f(Ie.value.length)+" 个"+f(A.value==="month"?"月度":"自然周")+"周期",1)]),l("div",N_,[l("div",null,[U[11]||(U[11]=l("span",null,"报表场次",-1)),l("strong",null,f(Ie.value.reduce((C,X)=>C+X.sessions,0)),1)]),l("div",null,[U[12]||(U[12]=l("span",null,"累计观看人次",-1)),l("strong",null,f(W(Ie.value.reduce((C,X)=>C+X.views,0))),1)]),l("div",null,[U[13]||(U[13]=l("span",null,"最高在线峰值",-1)),l("strong",null,f(W(Math.max(...Ie.value.map(C=>C.peak),0))),1)]),l("div",null,[U[14]||(U[14]=l("span",null,"累计成交",-1)),l("strong",null,f(q(Ie.value.reduce((C,X)=>C+X.gmv,0))),1)])]),l("div",F_,[l("strong",null,f(A.value==="month"?"按月累计观看人次":"按周累计观看人次"),1),U[15]||(U[15]=l("span",null,"同一观众跨场会重复累计 · 点击周期查看场次",-1))]),l("div",z_,[(d(!0),v(Q,null,oe(Ie.value.slice().reverse(),C=>(d(),v("button",{key:C.label,class:we(["live-trend-row",{drillable:A.value==="month"}]),onClick:X=>A.value==="month"&&z(C.label)},[l("span",null,f(C.label),1),l("div",j_,[l("i",{style:Pn({width:C.views/We.value*100+"%"})},null,4)]),l("b",null,f(W(C.views)),1)],10,U_))),128))]),l("div",B_,[U[16]||(U[16]=l("header",null,[l("span",null,"按月成交金额对比"),l("small",null,"单位：元 · CSV 成交金额合计")],-1)),(d(!0),v(Q,null,oe(_n.value,C=>(d(),v("div",{key:C.label,class:we([{current:C.current},"gmv-compare-row"])},[l("span",null,f(C.label),1),l("div",null,[l("i",{style:Pn({width:C.gmv/He.value*100+"%"})},null,4)]),l("b",null,"¥"+f(W(C.gmv)),1)],2))),128))])])])):(d(),v("div",V_,[U[17]||(U[17]=l("div",{class:"live-table-head"},[l("span",null,"直播信息"),l("span",null,"时长"),l("span",null,"观看"),l("span",null,"峰值"),l("span",null,"成交")],-1)),l("div",X_,[(d(!0),v(Q,null,oe(ne.value,C=>(d(),v("div",{key:C.d,class:we(["live-row",{on:p.value===C.d}]),onClick:X=>E(C.d)},[l("div",H_,[C.visual.thumb?(d(),v("img",{key:0,class:"thumb-mini",src:C.visual.thumb,alt:"直播封面"},null,8,q_)):(d(),v("span",K_,"待")),l("div",null,[l("div",G_,f(C.title),1),l("div",Y_,f(C.d),1)])]),l("span",null,f(C.dur),1),l("span",null,f(C.view),1),l("span",null,f(C.peak),1),l("span",Q_,f(C.gmv),1)],10,W_))),128))]),l("div",J_,[l("span",Z_,"共 "+f(ee.value.length)+" 场 · 当前筛选月份",1),P.value>1?(d(),v("div",ey,[l("button",{onClick:Z,disabled:M.value===1},"上一页",8,ny),l("span",null,f(M.value)+" / "+f(P.value),1),l("button",{onClick:V,disabled:M.value===P.value},"下一页",8,ty)])):H("",!0)])])),l("div",{class:"live-column-divider",role:"separator",tabindex:"0","aria-label":"调整直播经营分析与具体复盘宽度","aria-orientation":"vertical","aria-valuenow":Math.round(s.value),"aria-valuemin":"28","aria-valuemax":"72",onPointerdown:a,onKeydown:u},[...U[18]||(U[18]=[l("span",null,null,-1)])],40,sy),l("div",iy,[U[37]||(U[37]=l("div",{class:"live-detail-head"},[l("span",{class:"hint"},"选择具体场次查看完整复盘")],-1)),c.value?(d(),v(Q,{key:0},[l("div",ly,[U[20]||(U[20]=l("div",{class:"detail-h"},[l("span",{class:"bar"}),l("span",null,"数据")],-1)),l("div",oy,[(d(!0),v(Q,null,oe(Mn.value,C=>(d(),v("div",{key:C.k,class:"d-card"},[l("div",ry,f(C.k),1),l("div",ay,f(C.v),1),C.tip?(d(),v("div",uy,f(C.tip),1)):H("",!0)]))),128))]),(D=(b=h.value)==null?void 0:b.data)!=null&&D.remark?(d(),v("div",cy,f(h.value.data.remark),1)):H("",!0),($=(L=h.value)==null?void 0:L.data)!=null&&$.highlight?(d(),v("div",dy,[U[19]||(U[19]=l("span",{class:"ai-highlight-label"},"AI分析 · 金句高光",-1)),l("strong",null,"“"+f(h.value.data.highlight)+"”",1),l("p",null,f(h.value.data.aiAnalysis),1)])):H("",!0),qe.value.shot?(d(),v("div",py,[l("div",vy,"视频号助手 · 后台数据截图（"+f(c.value.d)+"）",1),l("img",{src:qe.value.shot,alt:"视频号助手后台数据"},null,8,fy)])):H("",!0)]),l("div",hy,[l("div",my,[U[21]||(U[21]=l("span",{class:"bar"},null,-1)),U[22]||(U[22]=l("span",null,"画面复盘",-1)),l("span",gy,"对应直播："+f(c.value.d),1)]),(w=qe.value.replay_frames)!=null&&w.length?H("",!0):(d(),v("div",_y,[qe.value.thumb?(d(),v("img",{key:0,class:"pic-frame",src:qe.value.thumb,alt:"该场直播回放画面"},null,8,yy)):(d(),v("div",by,[...U[23]||(U[23]=[l("div",{class:"replay-pending-icon"},"□",-1),l("strong",null,"该场尚无回放画面",-1),l("span",null,"完成视频号授权及逐场采集后显示",-1)])])),l("div",wy,[(d(!0),v(Q,null,oe(Ue.value,C=>(d(),v("div",{key:C.k,class:"feat"},[l("span",ky,f(C.k),1),l("span",xy,f(C.v),1)]))),128))])])),qe.value.isDemoVisual?(d(),v("div",Sy,"回放画面：尚未上传该场真实回放截图，不作为复盘证据。")):H("",!0),l("div",$y,[l("div",Ty,f(qe.value.trend_image?"该场直播趋势图 · 视频号后台证据":"趋势图 · 等待后台截图"),1),c.value.d==="2025-11-15"?(d(),It(__,{key:0})):kn.value?(d(),v("img",{key:1,src:kn.value,alt:"该场直播趋势图"},null,8,Cy)):(d(),v("div",Dy,[l("div",Ay,[(d(!0),v(Q,null,oe(On.value,C=>(d(),v("i",{key:C.label,style:Pn({height:C.value/Math.max(...On.value.map(X=>X.value),1)*100+"%"})},[l("span",null,f(C.value),1)],4))),128))]),l("p",null,"该场暂无逐分钟曲线截图；先依据真实报表峰值 "+f(c.value.peak||"未记录")+" 展示趋势示意，不作为逐分钟证据。",1)]))]),(j=qe.value.replay_frames)!=null&&j.length?(d(),v("div",Ey,[(d(!0),v(Q,null,oe(qe.value.replay_frames,C=>(d(),v("div",{key:C.kind,class:"replay-frame"},[l("span",null,f({online_peak:"A",gmv_peak:"B",audience_drop:"C"}[C.kind])+" · "+f((C.label||"回放画面").replace(/^\d+\s*·\s*/,"")),1),l("img",{src:C.url,alt:C.kind+" 回放证据"},null,8,Iy),l("div",My,[l("p",null,"话题："+f(C.topic),1),C.quote?(d(),v("strong",Oy,"金句：“"+f(C.quote)+"”",1)):H("",!0),l("p",null,[U[24]||(U[24]=l("b",null,"AI分析：",-1)),Ae(f(C.analysis),1)])])]))),128))])):H("",!0),qe.value.funnel?(d(),v("div",Ry,[l("div",Py,[U[25]||(U[25]=l("span",{class:"bar"},null,-1)),U[26]||(U[26]=l("span",null,"转化漏斗",-1)),l("span",Ly,"成交额 "+f(c.value.gmv),1)]),l("div",Ny,[(d(!0),v(Q,null,oe([qe.value.funnel.flow,qe.value.funnel.product],C=>(d(),v("div",{key:C.title,class:"funnel-card"},[l("div",Fy,[l("strong",null,f(C.title),1),l("span",null,"整体转化率 "+f(C.overall),1)]),(d(!0),v(Q,null,oe(C.steps,(X,F)=>(d(),v("div",{key:X.label,class:"funnel-step"},[l("div",zy,[l("span",null,f(X.label),1),l("b",null,f(X.value),1)]),l("div",Uy,[l("i",{style:Pn({width:Math.max(24,100-F*(C.steps.length===5?17:22))+"%"})},null,4)]),X.rate?(d(),v("small",jy,"→ "+f(X.rate),1)):H("",!0)]))),128))]))),128))])])):H("",!0),c.value.source_uri?H("",!0):(d(),v("div",By,[U[27]||(U[27]=l("div",{class:"vz-h"},[l("span",{class:"dot"}),Ae("回放采集状态")],-1)),U[28]||(U[28]=l("div",{class:"vz-row"},[l("span",{class:"vz-note"},"仅当该场授权后台回放可访问时，才会写入对应画面与语音证据。")],-1)),En.value.length?(d(),v("div",Vy,[(d(!0),v(Q,null,oe(En.value,(C,X)=>(d(),v("div",{key:X,class:we({ok:C.startsWith("已完成")})},f(C),3))),128))])):H("",!0)]))]),n.value?(d(),v("section",Xy,[U[30]||(U[30]=l("h3",null,"手动复盘 · 原始 PDF",-1)),l("a",{href:t.value,target:"_blank",rel:"noopener"},"查看手动复盘 PDF · 第 "+f(n.value.page)+" 页 ↗",9,Wy),l("pre",Hy,f(n.value.text),1),l("details",null,[U[29]||(U[29]=l("summary",null,"展开对应 PDF 页",-1)),l("iframe",{src:t.value,title:c.value.d+"手动复盘 PDF",style:{width:"100%",height:"540px",border:"1px solid #EDD6DC","margin-top":"12px"}},null,8,qy)])])):H("",!0),h.value&&!n.value?(d(),v("div",Ky,[l("div",Gy,[U[31]||(U[31]=l("span",{class:"bar"},null,-1)),U[32]||(U[32]=l("span",null,"脚本直播复盘",-1)),n.value?H("",!0):(d(),v("a",{key:0,class:"review-source-link",href:se(ca),target:"_blank",rel:"noopener"},"打开飞书复盘文档 ↗",8,Yy))]),l("ul",Qy,[(d(!0),v(Q,null,oe(h.value.script,C=>(d(),v("li",{key:C.k},[l("span",Jy,f(C.k)+"：",1),l("span",null,f(C.v),1)]))),128))])])):n.value?H("",!0):(d(),v("div",Zy,[...U[33]||(U[33]=[l("div",{class:"detail-empty-inner"},[l("div",{class:"big"},"·"),l("div",{class:"t"},"这场还没有手动复盘"),l("div",{class:"sub"},"从视频号复盘回看同步，AI 自动抽取峰谷画面与话术")],-1)])])),c.value.source_uri?(d(),v("section",e9,[U[36]||(U[36]=l("h3",null,"原始复盘记录与截图",-1)),/\.csv(?:$|[?#])/i.test(c.value.source_uri)?(d(),v("a",{key:0,href:c.value.source_uri,download:""},"下载原始 CSV",8,n9)):(d(),v("a",{key:1,href:c.value.source_uri,target:"_blank"},"打开对应复盘页 · 第 "+f(c.value.source_page)+" 页 ↗",9,t9)),/\.pdf(?:$|[?#])/i.test(c.value.source_uri)?(d(),v("details",s9,[U[34]||(U[34]=l("summary",null,"展开原始复盘页",-1)),l("iframe",{src:c.value.source_uri,title:c.value.d+"原始复盘",style:{width:"100%",height:"540px",border:"1px solid #EDD6DC","margin-top":"12px"}},null,8,i9)])):H("",!0),l("details",null,[U[35]||(U[35]=l("summary",null,"查看完整文字记录",-1)),l("pre",l9,f(c.value.source_text),1)])])):H("",!0)],64)):H("",!0)])],6)])}}},a9=Dn(r9,[["__scopeId","data-v-ac83c0b9"]]),u9={"新学期第一场·高中数学":{goal:"帮助高中生盘点暑期数学学习，并制定开学第一周可执行的学习安排。",sections:[["0–5 分钟｜开场互动",`口播：“新学期数学，不是买一本更难的练习册就能解决。先告诉我：你是高一、高二还是高三？暑假最卡的一章是什么？”
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
收尾：复述选书核对清单和第一周使用方法，购买与否由家庭需求决定。`]],qa:[["是否适合所有教材版本？","以商品页标明的版本为准，购买前核对，不能凭相似封面判断。"],["能保证提分吗？","不能保证分数，练习效果取决于匹配程度、执行与反馈。"]]}};function c9(e){return(e==null?void 0:e.draft)||u9[e==null?void 0:e.t]||null}const d9={class:"src-line"},p9=["href"],v9={class:"script-layout"},f9=["onClick"],h9={class:"head"},m9={class:"m"},g9={class:"pills"},_9={class:"pill"},y9={class:"pill green"},b9={class:"headline"},w9={key:0,class:"card preview"},k9={class:"qa"},x9={__name:"LiveScriptView",setup(e){const n=K(null),t=ue(()=>g.liveScripts.length?g.liveScripts:[{t:"新学期第一场·高中数学",d:"10-08",len:"60m",blocks:"开场互动(5m) → 暑期复盘(10m) → 新学期规划(20m) → Q&A(25m)"},{t:"高二数学答疑",d:"10-12",len:"60m",blocks:"痛点收集(5m) → 一轮复习节奏(20m) → 现场答疑(35m)"},{t:"暑假收心专场",d:"10-18",len:"48m",blocks:"互动开场(3m) → 收心方法(15m) → 家长答疑(30m)"},{t:"高一家长会·破冰",d:"10-23",len:"50m",blocks:"高一现状数据(10m) → 家长最关心的 3 件事(20m) → Q&A(20m)"},{t:"高三一轮启动·直播脚本",d:"10-29",len:"90m",blocks:"开场送福利(5m) → 一轮节奏(25m) → 高频考点串讲(30m) → 现场答疑(30m)"}]),s=ue(()=>c9(n.value));return hn([n,s],([i,o])=>{g.liveScriptContext=i?{...i,...o}:null},{immediate:!0}),(i,o)=>(d(),v("div",null,[l("div",d9,[o[1]||(o[1]=l("span",null,"来源：",-1)),l("a",{href:se(e2),target:"_blank"},"清华优优 · 直播脚本库",8,p9),o[2]||(o[2]=l("span",{class:"src-tag"},"内容数据",-1))]),l("div",v9,[l("section",null,[(d(!0),v(Q,null,oe(t.value,r=>{var a;return d(),v("button",{key:r.t,class:we(["node-card script-card",{on:((a=n.value)==null?void 0:a.t)===r.t}]),onClick:u=>n.value=r},[l("div",h9,[l("span",m9,f(r.t),1),l("span",g9,[l("span",_9,f(r.d),1),l("span",y9,f(r.len),1)])]),l("div",b9,f(r.blocks),1),o[3]||(o[3]=l("small",null,"点击查看完整直播脚本 →",-1))],10,f9)}),128))]),s.value?(d(),v("aside",w9,[l("header",null,[l("div",null,[o[4]||(o[4]=l("span",{class:"eyebrow"},"LIVE SCRIPT · 脚本稿",-1)),l("h2",null,f(n.value.t),1),l("p",null,f(s.value.goal),1)]),l("button",{onClick:o[0]||(o[0]=r=>n.value=null)},"×")]),(d(!0),v(Q,null,oe(s.value.sections,r=>(d(),v("article",{key:r[0]},[l("h3",null,f(r[0]),1),l("p",null,f(r[1]),1)]))),128)),l("div",k9,[o[5]||(o[5]=l("h3",null,"预设 Q&A",-1)),l("ul",null,[(d(!0),v(Q,null,oe(s.value.qa,r=>(d(),v("li",{key:r},[l("b",null,f(r[0]),1),l("p",null,f(r[1]),1)]))),128))])])])):H("",!0)])]))}},S9=Dn(x9,[["__scopeId","data-v-608ad4ea"]]),$9={class:"bench-summary card"},T9={class:"bench-tools"},C9=["disabled"],D9={style:{display:"flex","align-items":"center","justify-content":"space-between","margin-bottom":"16px"}},A9={style:{color:"var(--text-mute)","font-size":"12px"}},E9=["value"],I9={class:"ava"},M9=["src","alt"],O9={class:"body"},R9={class:"name"},P9={class:"stat"},L9={class:"actions"},N9=["onClick"],F9=["onClick"],z9=["onClick","disabled"],U9=["onClick","disabled"],j9={class:"ava"},B9=["src","alt"],V9={class:"body"},X9={class:"name"},W9={class:"stat"},H9={class:"actions"},q9=["onClick"],K9={class:"card bench-editor"},G9=["onUpdate:modelValue","type","min"],Y9={class:"video-grid"},Q9={class:"thumb"},J9=["src","alt"],Z9={class:"dur"},e6={class:"meta"},n6={class:"title"},t6={class:"stats"},s6=["onClick"],Za="redcowork-replica-v2_benchmark_accounts",i6={__name:"BenchView",setup(e){let n=null;try{n=JSON.parse(localStorage.getItem(Za)||"null")}catch{}const t=K(n||[...g.benchmarks]);hn(()=>g.benchmarks,G=>{!n&&!t.value.length&&(t.value=[...G])});const s=K("custom"),i=K(!1),o=K([]),r=K(null),a=K({}),u=K([{key:"name",label:"账号名称"},{key:"fans",label:"粉丝量（如32.1w）"},{key:"update",label:"最新视频日期 / 更新时间"},{key:"viral",label:"爆款条数"},{key:"note",label:"备注"}]);function p(G){return(parseFloat(String(G||"").replace(/,/g,""))||0)*(/w|万/i.test(G)?1e4:1)}function c(G){const W=String(G||""),q=Date.parse(W);if(!Number.isNaN(q))return q;if(/今日|今天/.test(W))return Date.now();if(/昨日|昨天/.test(W))return Date.now()-864e5;const he=parseFloat(W);return Number.isNaN(he)?0:Date.now()-he*864e5}function h(G){return G.slice().sort((W,q)=>s.value==="fans"?p(q.fans)-p(W.fans):s.value==="viral"?Number(q.viral||0)-Number(W.viral||0):s.value==="latest"?c(q.update)-c(W.update):0)}const m=ue(()=>h(t.value.filter(G=>G.state==="监控中"))),S=ue(()=>h(t.value.filter(G=>G.state==="AI 发现"))),M=ue(()=>t.value.slice().sort((G,W)=>Number(W.viral||0)-Number(G.viral||0))),A=ue(()=>[...new Set(g.virals.map(G=>G.t))].slice(0,3));function O(){n=t.value,localStorage.setItem(Za,JSON.stringify(t.value)),g.benchmarks=[...t.value]}function ee(G){g.benchCompare=G,rr("bench-compare")}function P(G){G.state="监控中",G.note=G.note||G.why,O(),un("已加入监控列表")}function ne(G=null){r.value=G||{},a.value=G?{...G}:{name:"",fans:"",update:"",viral:0,note:""}}function ie(){const G=String(a.value.name||"").trim();if(!G)return un("请输入账号名称");if(t.value.some(W=>W!==r.value&&W.name===G))return un("账号名称已存在");t.value.includes(r.value)?Object.assign(r.value,a.value,{name:G}):t.value.push({...a.value,name:G,state:"监控中",health:"green"}),O(),r.value=null}function Z(){o.value.length&&(t.value=t.value.filter(G=>!o.value.includes(G.name)),o.value=[],O())}function V(){o.value=o.value.length===m.value.length?[]:m.value.map(G=>G.name)}function E(G,W){const q=t.value.indexOf(G),he=q+W;he<0||he>=t.value.length||([t.value[q],t.value[he]]=[t.value[he],t.value[q]],s.value="custom",O())}function z(){const G=window.prompt("自定义字段名称");if(!(G!=null&&G.trim()))return;const W="custom_"+Date.now();u.value.push({key:W,label:G.trim()}),a.value[W]=""}return(G,W)=>(d(),v("div",null,[l("section",$9,[W[7]||(W[7]=l("h2",null,"AI 总结 · 竞品观察",-1)),l("p",null,"当前内容关注："+f(A.value.join("；")||"暂未收集到视频内容")+"。",1),l("ol",null,[(d(!0),v(Q,null,oe(M.value.slice(0,3),q=>(d(),v("li",{key:q.name},f(q.name)+"：已收集 "+f(q.viral||0)+" 条爆款，"+f(q.note||q.why||"可继续查看视频内容与脚本结构")+"。",1))),128))]),W[8]||(W[8]=l("small",null,"依据当前账号列表与视频条目整理；热度是否上升需比较连续更新记录。",-1))]),l("div",T9,[l("label",null,[W[10]||(W[10]=Ae("排序 ",-1)),en(l("select",{"onUpdate:modelValue":W[0]||(W[0]=q=>s.value=q)},[...W[9]||(W[9]=[l("option",{value:"custom"},"自定义顺序",-1),l("option",{value:"latest"},"最新视频日期",-1),l("option",{value:"fans"},"粉丝量",-1),l("option",{value:"viral"},"爆款条数",-1)])],512),[[ys,s.value]])]),l("button",{onClick:W[1]||(W[1]=q=>i.value=!i.value)},f(i.value?"完成编辑":"编辑账号"),1),i.value?(d(),v("button",{key:0,onClick:V},"全选 / 取消")):H("",!0),i.value?(d(),v("button",{key:1,disabled:!o.value.length,onClick:Z},"删除所选 "+f(o.value.length||""),9,C9)):H("",!0)]),l("div",D9,[l("span",A9,"监控中 "+f(m.value.length)+" · AI 发现 "+f(S.value.length),1),l("a",{style:{cursor:"pointer",color:"var(--text-link)","font-size":"13px"},onClick:W[2]||(W[2]=q=>ne())},"+ 添加对标")]),W[13]||(W[13]=l("div",{class:"section-h"},[l("h2",null,"监控中")],-1)),(d(!0),v(Q,null,oe(m.value,q=>(d(),v("div",{key:q.name,class:"acc-card"},[i.value&&q.state==="监控中"?en((d(),v("input",{key:0,type:"checkbox","onUpdate:modelValue":W[3]||(W[3]=he=>o.value=he),value:q.name,"aria-label":"选择账号"},null,8,E9)),[[sc,o.value]]):H("",!0),l("div",I9,[q.img?(d(),v("img",{key:0,src:q.img,alt:q.name},null,8,M9)):(d(),v(Q,{key:1},[Ae(f(q.name[0]),1)],64))]),l("div",O9,[l("div",R9,[Ae(f(q.name)+" ",1),l("span",{class:we(["pill",q.health==="green"?"green":"warn"])},f(q.health==="green"?"健康":"需关注"),3)]),l("div",P9,f(q.fans)+" 粉 · "+f(q.update)+"更新 · 爆款 "+f(q.viral)+" 条"+f(q.note?" · "+q.note:""),1)]),l("div",L9,[l("button",{onClick:he=>ee(q)},"对比",8,N9),i.value?(d(),v(Q,{key:0},[l("button",{onClick:he=>ne(q)},"编辑",8,F9),l("button",{onClick:he=>E(q,-1),disabled:t.value.indexOf(q)===0},"↑",8,z9),l("button",{onClick:he=>E(q,1),disabled:t.value.indexOf(q)===t.value.length-1},"↓",8,U9)],64)):H("",!0)])]))),128)),W[14]||(W[14]=l("div",{class:"section-h",style:{"margin-top":"24px"}},[l("h2",null,"AI 发现"),l("span",{class:"meta"},"基于选题相似度推荐")],-1)),(d(!0),v(Q,null,oe(S.value,q=>(d(),v("div",{key:q.name,class:"acc-card"},[l("div",j9,[q.img?(d(),v("img",{key:0,src:q.img,alt:q.name},null,8,B9)):(d(),v(Q,{key:1},[Ae(f(q.name[0]),1)],64))]),l("div",V9,[l("div",X9,[Ae(f(q.name)+" ",1),W[11]||(W[11]=l("span",{class:"pill green"},"AI 发现",-1))]),l("div",W9,f(q.fans)+" 粉 · "+f(q.update)+"更新 · 爆款 "+f(q.viral)+" 条"+f(q.why?" · "+q.why:""),1)]),l("div",H9,[l("span",{class:"pill",style:{cursor:"pointer"},onClick:he=>P(q)},"+ 监控",8,q9)])]))),128)),r.value?(d(),v("div",{key:0,class:"bench-overlay",onClick:W[6]||(W[6]=mn(q=>r.value=null,["self"]))},[l("section",K9,[l("header",null,[l("h2",null,f(t.value.includes(r.value)?"编辑账号":"添加对标"),1),l("button",{onClick:W[4]||(W[4]=q=>r.value=null)},"×")]),(d(!0),v(Q,null,oe(u.value,q=>(d(),v("label",{key:q.key},[Ae(f(q.label),1),en(l("input",{"onUpdate:modelValue":he=>a.value[q.key]=he,type:q.key==="viral"?"number":"text",min:q.key==="viral"?0:void 0},null,8,G9),[[ud,a.value[q.key]]])]))),128)),l("button",{onClick:z},"＋ 自定义字段"),l("footer",null,[l("button",{onClick:W[5]||(W[5]=q=>r.value=null)},"取消"),l("button",{onClick:ie},"保存")])])])):H("",!0),W[15]||(W[15]=l("div",{class:"section-h",style:{"margin-top":"24px"}},[l("h2",null,"爆款抓取"),l("span",{class:"meta"},"仅公开短视频 · 点赞/收藏 ≥ 2 万，或播放 ≥ 100 万")],-1)),l("div",Y9,[(d(!0),v(Q,null,oe(se(g).virals,q=>(d(),v("div",{key:q.t,class:"video-card"},[l("div",Q9,[l("img",{src:q.cover,alt:q.t,loading:"lazy"},null,8,J9),l("span",Z9,f(q.dur),1)]),l("div",e6,[l("div",n6,[W[12]||(W[12]=l("span",{class:"tag"},"爆款",-1)),Ae(f(q.t),1)]),l("div",t6,[l("span",null,"♡ "+f(q.like)+" · "+f(q.from),1),l("a",{class:"action",onClick:he=>se(m2)(q)},"拆脚本",8,s6)])])]))),128))])]))}},l6=Dn(i6,[["__scopeId","data-v-a4e3a561"]]),o6={class:"compare"},r6={class:"compare-hero"},a6={class:"compare-grid"},u6={class:"card"},c6={class:"account"},d6={class:"card analysis-card"},p6={class:"card"},v6={class:"data-table"},f6={class:"card"},h6={class:"content-cols"},m6={__name:"BenchCompareView",setup(e){const n=ue(()=>g.benchCompare||g.benchmarks[0]||{name:"清华杨奇函语文说",fans:"18.7w",viral:5}),t=ue(()=>[["粉丝规模","22.4w","清华优优","18.7w",n.value.name],["近 30 日发布","12","短视频 + 直播","9","短视频为主"],["平均观看","4.8w","以选题带动","6.2w","爆款集中"],["互动率","7.6%","评论提问引导","9.1%","强钩子结构"]]);function s(){g.benchAnalysisContext={peer:{...n.value},comparison:t.value,content_structure:{own:"痛点提问 → 错题分类 → 7天行动卡 → 直播答疑预告",peer:"反常识钩子 → 典型案例 → 3步方法 → 收藏口令"},data_note:"页面中的对比为演示资料，未核验数据不得当作真实经营结论。"},g.copilotOpen=!0,g.isMobile&&(g.copilotMobileOpen=!0),g.cueRequest={id:crypto.randomUUID(),question:`请详细分析清华优优与${n.value.name}的竞品差异，结合当前对比资料，给出账号定位、内容结构、可借鉴方法、差异化机会，以及下一步选题和内容排期建议。区分资料事实与建议；未核验数据明确标记。`}}return(i,o)=>(d(),v("div",o6,[l("button",{class:"back",onClick:o[0]||(o[0]=r=>se(rr)("bench"))},"← 返回对标账号"),l("section",r6,[o[1]||(o[1]=l("span",{class:"pill green"},"内容数据",-1)),l("h2",null,"清华优优 vs "+f(n.value.name),1),o[2]||(o[2]=l("p",null,"从账号定位、经营数据、内容结构和 AI 洞察四个维度，竞品分析如何进入下一步选题。",-1))]),l("section",a6,[l("article",u6,[o[4]||(o[4]=l("h3",null,"账号对比",-1)),o[5]||(o[5]=l("div",{class:"account"},[l("b",null,"清华优优"),l("span",null,"高中学习方法 · 家长沟通 · 直播答疑"),l("small",null,"22.4w 粉 · 月均 12 条内容 · 1 场直播/周")],-1)),l("div",c6,[l("b",null,f(n.value.name),1),o[3]||(o[3]=l("span",null,"语文学科方法 · 高分案例 · 结构化表达",-1)),l("small",null,f(n.value.fans)+" 粉 · 爆款 "+f(n.value.viral)+" 条 · 近 3 日更新",1)])]),l("article",d6,[o[7]||(o[7]=l("h3",null,"AI 分析结论",-1)),l("p",null,[o[6]||(o[6]=l("b",null,"可借鉴：",-1)),Ae(f(n.value.name)+" 的“问题钩子 → 方法步骤 → 可收藏清单”结构在高频焦虑题材上转化更稳定。",1)]),o[8]||(o[8]=l("p",null,[l("b",null,"差异化机会："),Ae("清华优优可把学科方法延展为“家长怎么配合”的第二视角，并用直播答疑承接评论区问题。")],-1)),l("div",{class:"analysis-footer"},[l("button",{class:"wiki-sum-btn",onClick:s},"查看 AI 详细分析 ↗")])])]),l("section",p6,[o[9]||(o[9]=l("h3",null,"数据对比",-1)),l("div",v6,[(d(!0),v(Q,null,oe(t.value,r=>(d(),v("div",{key:r[0]},[l("span",null,f(r[0]),1),l("b",null,f(r[1]),1),l("small",null,f(r[2]),1),l("b",null,f(r[3]),1),l("small",null,f(r[4]),1)]))),128))])]),l("section",f6,[o[14]||(o[14]=l("h3",null,"内容对比",-1)),l("div",h6,[o[13]||(o[13]=l("article",null,[l("h4",null,"清华优优"),l("b",null,"《月考后先抓住这 3 个失分点》"),l("p",null,"痛点提问 → 错题分类 → 7 天行动卡 → 直播答疑预告"),l("span",null,"优势：有后续服务路径；可补强前 3 秒钩子。")],-1)),l("article",null,[l("h4",null,f(n.value.name),1),o[10]||(o[10]=l("b",null,"《孩子语文总是 90 分，问题不在刷题》",-1)),o[11]||(o[11]=l("p",null,"反常识钩子 → 典型案例 → 3 步方法 → 收藏口令",-1)),o[12]||(o[12]=l("span",null,"优势：强情绪钩子；内容可沉淀为系列选题。",-1))])])])]))}},g6=Dn(m6,[["__scopeId","data-v-a282f9d7"]]),_6={key:0,class:"loading-box"},y6={key:1,class:"error-box"},b6=["aria-valuenow"],w6={class:"main"},k6={class:"workbench-head"},x6={class:"desc"},S6={class:"search-wrap"},$6={class:"search"},T6={key:0,class:"search-results"},C6=["onMousedown"],D6={key:0},A6={class:"auth-zone"},E6={class:"avatar"},I6={class:"uname"},M6={class:"content"},O6={key:3,class:"cue-drawer"},R6={class:"cd-head"},P6={class:"cd-body"},L6={class:"toast-host"},N6={key:0,class:"modal"},F6=["placeholder"],z6=["placeholder"],U6={class:"actions"},j6={__name:"App",setup(e){const n={dashboard:Qa,planning:O5,wiki:C4,scripts:e_,"live-summary":a9,"live-script":S9,bench:l6,"bench-compare":g6},t=ue(()=>n[g.activeView]||Qa),s=K(""),i=K(!1),o=K(Math.max(160,Math.min(360,Number(localStorage.getItem("redcowork-replica-v2_sidebar_width"))||210)));let r=!1;function a(V){const E=Math.max(160,Math.min(360,window.innerWidth-(g.copilotOpen?m.value:0)-420));o.value=Math.max(160,Math.min(E,V))}function u(V){r&&a(V.clientX)}function p(){r=!1,document.body.classList.remove("is-resizing-cue"),localStorage.setItem("redcowork-replica-v2_sidebar_width",String(Math.round(o.value))),window.removeEventListener("pointermove",u),window.removeEventListener("pointerup",p),window.removeEventListener("pointercancel",p)}function c(V){g.isMobile||(V.preventDefault(),r=!0,document.body.classList.add("is-resizing-cue"),window.addEventListener("pointermove",u),window.addEventListener("pointerup",p),window.addEventListener("pointercancel",p))}function h(V){["ArrowLeft","ArrowRight"].includes(V.key)&&(V.preventDefault(),a(o.value+(V.key==="ArrowRight"?10:-10)),localStorage.setItem("redcowork-replica-v2_sidebar_width",String(o.value)))}Kt(()=>{r&&p()});const m=K(Number(localStorage.getItem("redcowork-replica-v2_cue_width"))||360);let S=!1;function M(V){if(!S||g.isMobile||!g.copilotOpen)return;const E=Math.min(620,window.innerWidth-520);m.value=Math.max(280,Math.min(E,window.innerWidth-V.clientX))}function A(){S&&(S=!1,document.body.classList.remove("is-resizing-cue"),localStorage.setItem("redcowork-replica-v2_cue_width",String(Math.round(m.value))),window.removeEventListener("pointermove",M),window.removeEventListener("pointerup",A))}function O(V){g.isMobile||!g.copilotOpen||(V.preventDefault(),S=!0,document.body.classList.add("is-resizing-cue"),window.addEventListener("pointermove",M),window.addEventListener("pointerup",A))}const ee=ue(()=>{const V=s.value.trim().toLowerCase();return V?[...g.liveSessions.map(z=>({title:z.title,meta:z.d,view:"live-summary",kind:"直播复盘"})),...g.scripts.map(z=>({title:z.t,meta:z.from,view:"scripts",kind:"短视频脚本"})),...g.wikiFiles.map(z=>({title:z.name,meta:z.meta||"知识库",view:"wiki",kind:"知识库"})),...g.benchmarks.map(z=>({title:z.name,meta:z.note||"",view:"bench",kind:"对标账号"})),...g.planningTasks.map(z=>({title:z.title,meta:z.planned_at,view:"planning",kind:z.type==="live"?"直播排期":"短视频排期"}))].filter(z=>`${z.title} ${z.meta} ${z.kind}`.toLowerCase().includes(V)).slice(0,6):[]});function P(V){g.activeView=V.view,s.value="",i.value=!1}function ne(){ee.value[0]?P(ee.value[0]):un("没有找到已导入的真实内容")}ti(()=>{f2(),ie()}),Kt(A);async function ie(){await r2(),await xi()}async function Z(){await Md(),u2(),un("已退出登录")}return(V,E)=>(d(),v(Q,null,[se(g).loading?(d(),v("div",_6,[...E[11]||(E[11]=[l("div",{class:"spin"},null,-1),l("span",null,"正在加载数据…",-1)])])):se(g).error?(d(),v("div",y6,[l("span",null,"数据加载失败："+f(se(g).error),1),E[12]||(E[12]=l("span",{style:{"font-size":"12px",color:"var(--text-mute)"}},"请确认后端已启动（uvicorn app.main:app --port 8000）",-1)),l("button",{class:"wiki-sum-btn",onClick:E[0]||(E[0]=(...z)=>se(xi)&&se(xi)(...z))},"重试")])):(d(),v("div",{key:2,class:we(["app",{"is-mobile":se(g).isMobile}]),style:Pn({"--cue-width":`${m.value}px`,"--sidebar-width":`${o.value}px`})},[se(g).isMobile&&se(g).sidebarOpen?(d(),v("div",{key:0,class:"drawer-mask",onClick:E[1]||(E[1]=(...z)=>se(Ii)&&se(Ii)(...z))})):H("",!0),on(C2),se(g).isMobile?H("",!0):(d(),v("div",{key:1,class:"sidebar-resizer",role:"separator","aria-label":"调整左侧导航宽度","aria-orientation":"vertical","aria-valuenow":o.value,"aria-valuemin":"160","aria-valuemax":"360",tabindex:"0",onPointerdown:c,onKeydown:h},[...E[13]||(E[13]=[l("i",null,null,-1)])],40,b6)),l("main",w6,[l("div",k6,[se(g).isMobile?(d(),v("button",{key:0,class:"mb-menu",onClick:E[2]||(E[2]=(...z)=>se(va)&&se(va)(...z)),"aria-label":"菜单"},[...E[14]||(E[14]=[l("span",null,null,-1),l("span",null,null,-1),l("span",null,null,-1)])])):H("",!0),l("h1",null,f(se(n2)[se(g).activeView]),1),l("span",x6,f(se(t2)[se(g).activeView]),1),l("div",S6,[l("div",$6,[E[15]||(E[15]=l("span",{class:"ic"},null,-1)),en(l("input",{"onUpdate:modelValue":E[3]||(E[3]=z=>s.value=z),placeholder:"搜索复盘、知识库、排期",onFocus:E[4]||(E[4]=z=>i.value=!0),onKeyup:Ht(ne,["enter"])},null,544),[[bn,s.value]])]),i.value&&s.value?(d(),v("div",T6,[(d(!0),v(Q,null,oe(ee.value,(z,G)=>(d(),v("button",{key:`${z.kind}-${z.title}-${G}`,onMousedown:mn(W=>P(z),["prevent"])},[l("span",null,[l("b",null,f(z.title),1),l("small",null,f(z.meta),1)]),l("em",null,f(z.kind),1)],40,C6))),128)),ee.value.length?H("",!0):(d(),v("p",D6,"没有找到已导入的真实内容"))])):H("",!0)]),l("div",A6,[se(g).authUser?(d(),v("button",{key:0,class:"auth-link",onClick:E[5]||(E[5]=z=>se(g).channelsOpen=!0)},"账号管理")):H("",!0),se(g).authUser?(d(),v(Q,{key:1},[l("span",E6,f((se(g).authUser.display_name||se(g).authUser.username||"U").slice(0,1)),1),l("span",I6,f(se(g).authUser.display_name||se(g).authUser.username),1),l("button",{class:"auth-link",onClick:Z},"退出")],64)):H("",!0)]),se(g).isMobile?(d(),v("button",{key:1,class:"mb-cue",onClick:E[6]||(E[6]=(...z)=>se(fa)&&se(fa)(...z)),"aria-label":"Cue 助手"},"✦")):H("",!0)]),l("div",M6,[(d(),It(Y1(t.value)))])]),!se(g).isMobile&&se(g).copilotOpen?(d(),v("div",{key:2,class:"cue-resizer",role:"separator","aria-label":"调整 Cue 宽度","aria-orientation":"vertical",onPointerdown:O},[...E[16]||(E[16]=[l("i",null,null,-1)])],32)):H("",!0),on(Ya),se(g).isMobile&&se(g).copilotMobileOpen?(d(),v("div",O6,[l("div",R6,[E[17]||(E[17]=l("span",{class:"cd-badge"},"✦",-1)),E[18]||(E[18]=l("span",{class:"cd-title"},"Cue 助手",-1)),l("button",{class:"cd-close",onClick:E[7]||(E[7]=(...z)=>se(ha)&&se(ha)(...z))},"×")]),l("div",P6,[on(Ya,{mobile:!0})])])):H("",!0)],6)),on(km),se(g).loginOpen?(d(),It(Wh,{key:3})):H("",!0),se(g).channelsOpen?(d(),It(um,{key:4})):H("",!0),se(g).syncAssistantOpen?(d(),It(mm,{key:5})):H("",!0),l("div",L6,[(d(!0),v(Q,null,oe(se(g).toasts,z=>(d(),v("div",{key:z.id,class:"toast"},f(z.msg),1))),128))]),l("div",{class:we(["modal-bg",{open:se(g).modal}]),onClick:E[10]||(E[10]=mn((...z)=>se(Xs)&&se(Xs)(...z),["self"]))},[se(g).modal?(d(),v("div",N6,[l("h3",null,f(se(g).modal.title),1),(d(!0),v(Q,null,oe(se(g).modal.fields,z=>(d(),v("div",{class:"field",key:z.key},[l("label",null,f(z.label),1),z.type==="textarea"?(d(),v("textarea",{key:0,placeholder:z.placeholder},null,8,F6)):(d(),v("input",{key:1,placeholder:z.placeholder},null,8,z6))]))),128)),l("div",U6,[l("button",{onClick:E[8]||(E[8]=(...z)=>se(Xs)&&se(Xs)(...z))},"取消"),l("button",{class:"primary",onClick:E[9]||(E[9]=(...z)=>se(Xs)&&se(Xs)(...z))},"确认")])])):H("",!0)],2)],64))}},B6=Dn(j6,[["__scopeId","data-v-5b4ca15c"]]);md(B6).mount("#app");
