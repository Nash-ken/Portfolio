import{l as lt,t as Xt}from"./index.DIeogL5L.js";const Q=!1;var Ln=Array.isArray,qn=Array.from,Mn=Object.defineProperty,dt=Object.getOwnPropertyDescriptor,Qt=Object.getOwnPropertyDescriptors,Hn=Object.prototype,Yn=Array.prototype,tn=Object.getPrototypeOf;function jn(t){return typeof t=="function"}const nn=()=>{};function Bn(t){return t()}function rn(t){for(var n=0;n<t.length;n++)t[n]()}const y=2,mt=4,B=8,at=16,A=32,J=64,tt=128,D=256,K=512,d=1024,g=2048,P=4096,C=8192,F=16384,en=32768,At=65536,Un=1<<17,sn=1<<19,gt=1<<20,Et=Symbol("$state"),Gn=Symbol("legacy props"),Vn=Symbol("");function It(t){return t===this.v}function ln(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function Rt(t){return!ln(t,this.v)}function an(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function un(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function on(t){throw new Error("https://svelte.dev/e/effect_orphan")}function fn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Kn(){throw new Error("https://svelte.dev/e/hydration_failed")}function $n(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Zn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function zn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function _n(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function cn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}const Jn=1,Wn=2,Xn=4,Qn=8,tr=16,nr=1,rr=2,er=4,sr=8,lr=16,ar=4,ur=1,or=2,vn="[",pn="[!",hn="]",St={},ir=Symbol();function ut(t,n){var r={f:0,v:t,reactions:null,equals:It,version:0};return r}function fr(t){return xt(ut(t))}function dn(t,n=!1){var e;const r=ut(t);return n||(r.equals=Rt),lt&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function _r(t,n=!1){return xt(dn(t,n))}function xt(t){return o!==null&&o.f&y&&(m===null?xn([t]):m.push(t)),t}function cr(t,n){return ot(t,pt(()=>vt(t))),n}function ot(t,n){return o!==null&&ct()&&o.f&(y|at)&&(m===null||!m.includes(t))&&cn(),En(t,n)}function En(t,n){return t.equals(n)||(t.v,t.v=n,t.version=Kt(),Ot(t,g),ct()&&u!==null&&u.f&d&&!(u.f&A)&&(h!==null&&h.includes(t)?(T(u,g),X(u)):I===null?On([t]):I.push(t))),n}function Ot(t,n){var r=t.reactions;if(r!==null)for(var e=ct(),s=r.length,l=0;l<s;l++){var a=r[l],i=a.f;i&g||!e&&a===u||(T(a,n),i&(d|D)&&(i&y?Ot(a,P):X(a)))}}function Dt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let x=!1;function vr(t){x=t}let w;function M(t){if(t===null)throw Dt(),St;return w=t}function pr(){return M(N(w))}function hr(t){if(x){if(N(w)!==null)throw Dt(),St;w=t}}function dr(t=1){if(x){for(var n=t,r=w;n--;)r=N(r);w=r}}function Er(){for(var t=0,n=w;;){if(n.nodeType===8){var r=n.data;if(r===hn){if(t===0)return n;t-=1}else(r===vn||r===pn)&&(t+=1)}var e=N(n);n.remove(),n=e}}var yt,Nt,bt;function yr(){if(yt===void 0){yt=window;var t=Element.prototype,n=Node.prototype;Nt=dt(n,"firstChild").get,bt=dt(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function nt(t=""){return document.createTextNode(t)}function rt(t){return Nt.call(t)}function N(t){return bt.call(t)}function wr(t,n){if(!x)return rt(t);var r=rt(w);if(r===null)r=w.appendChild(nt());else if(n&&r.nodeType!==3){var e=nt();return r==null||r.before(e),M(e),e}return M(r),r}function Tr(t,n){if(!x){var r=rt(t);return r instanceof Comment&&r.data===""?N(r):r}return w}function mr(t,n=1,r=!1){let e=x?w:t;for(var s;n--;)s=e,e=N(e);if(!x)return e;var l=e==null?void 0:e.nodeType;if(r&&l!==3){var a=nt();return e===null?s==null||s.after(a):e.before(a),M(a),a}return M(e),e}function Ar(t){t.textContent=""}function yn(t){var n=y|g;u===null?n|=D:u.f|=gt;var r=o!==null&&o.f&y?o:null;const e={children:null,ctx:f,deps:null,equals:It,f:n,fn:t,reactions:null,v:null,version:0,parent:r??u};return r!==null&&(r.children??(r.children=[])).push(e),e}function gr(t){const n=yn(t);return n.equals=Rt,n}function kt(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&y?it(e):O(e)}}}function wn(t){for(var n=t.parent;n!==null;){if(!(n.f&y))return n;n=n.parent}return null}function Ct(t){var n,r=u;z(wn(t));try{kt(t),n=$t(t)}finally{z(r)}return n}function Pt(t){var n=Ct(t),r=(S||t.f&D)&&t.deps!==null?P:d;T(t,r),t.equals(n)||(t.v=n,t.version=Kt())}function it(t){kt(t),j(t,0),T(t,F),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Ft(t){u===null&&o===null&&on(),o!==null&&o.f&D&&un(),_t&&an()}function Tn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function L(t,n,r,e=!0){var s=(t&J)!==0,l=u,a={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|g,first:null,fn:n,last:null,next:null,parent:s?null:l,prev:null,teardown:null,transitions:null,version:0};if(r){var i=b;try{wt(!0),U(a),a.f|=en}catch(c){throw O(a),c}finally{wt(i)}}else n!==null&&X(a);var _=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&gt)===0;if(!_&&!s&&e&&(l!==null&&Tn(a,l),o!==null&&o.f&y)){var p=o;(p.children??(p.children=[])).push(a)}return a}function Ir(t){const n=L(B,null,!1);return T(n,d),n.teardown=t,n}function Rr(t){Ft();var n=u!==null&&(u.f&A)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:u,reaction:o})}else{var e=Lt(t);return e}}function Sr(t){return Ft(),ft(t)}function xr(t){const n=L(J,t,!0);return(r={})=>new Promise(e=>{r.outro?gn(n,()=>{O(n),e(void 0)}):(O(n),e(void 0))})}function Lt(t){return L(mt,t,!1)}function Or(t,n){var r=f,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=ft(()=>{t(),!e.ran&&(e.ran=!0,ot(r.l.r2,!0),pt(n))})}function Dr(){var t=f;ft(()=>{if(vt(t.l.r2)){for(var n of t.l.r1){var r=n.effect;r.f&d&&T(r,P),q(r)&&U(r),n.ran=!1}t.l.r2.v=!1}})}function ft(t){return L(B,t,!0)}function Nr(t){return mn(t)}function mn(t,n=0){return L(B|at|n,t,!0)}function br(t,n=!0){return L(B|A,t,!0,n)}function qt(t){var n=t.teardown;if(n!==null){const r=_t,e=o;Tt(!0),Z(null);try{n.call(null)}finally{Tt(r),Z(e)}}}function Mt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)it(n[r])}}function Ht(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;O(r,n),r=e}}function An(t){for(var n=t.first;n!==null;){var r=n.next;n.f&A||O(n),n=r}}function O(t,n=!0){var r=!1;if((n||t.f&sn)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var l=e===s?null:N(e);e.remove(),e=l}r=!0}Ht(t,n&&!r),Mt(t),j(t,0),T(t,F);var a=t.transitions;if(a!==null)for(const _ of a)_.stop();qt(t);var i=t.parent;i!==null&&i.first!==null&&Yt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Yt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function gn(t,n){var r=[];jt(t,r,!0),In(r,()=>{O(t),n&&n()})}function In(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function jt(t,n,r){if(!(t.f&C)){if(t.f^=C,t.transitions!==null)for(const a of t.transitions)(a.is_global||r)&&n.push(a);for(var e=t.first;e!==null;){var s=e.next,l=(e.f&At)!==0||(e.f&A)!==0;jt(e,n,l?r:!1),e=s}}}function kr(t){Bt(t,!0)}function Bt(t,n){if(t.f&C){q(t)&&U(t),t.f^=C;for(var r=t.first;r!==null;){var e=r.next,s=(r.f&At)!==0||(r.f&A)!==0;Bt(r,s?n:!1),r=e}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&l.in()}}let $=!1,et=[];function Ut(){$=!1;const t=et.slice();et=[],rn(t)}function Cr(t){$||($=!0,queueMicrotask(Ut)),et.push(t)}function Rn(){$&&Ut()}const Gt=0,Sn=1;let G=!1,V=Gt,H=!1,Y=null,b=!1,_t=!1;function wt(t){b=t}function Tt(t){_t=t}let R=[],k=0;let o=null;function Z(t){o=t}let u=null;function z(t){u=t}let m=null;function xn(t){m=t}let h=null,E=0,I=null;function On(t){I=t}let Vt=1,S=!1,f=null;function Kt(){return++Vt}function ct(){return!lt||f!==null&&f.l===null}function q(t){var p;var n=t.f;if(n&g)return!0;if(n&P){var r=t.deps,e=(n&D)!==0;if(r!==null){var s,l,a=(n&K)!==0,i=e&&u!==null&&!S,_=r.length;if(a||i){for(s=0;s<_;s++)l=r[s],(a||!((p=l==null?void 0:l.reactions)!=null&&p.includes(t)))&&(l.reactions??(l.reactions=[])).push(t);a&&(t.f^=K)}for(s=0;s<_;s++)if(l=r[s],q(l)&&Pt(l),l.version>t.version)return!0}(!e||u!==null&&!S)&&T(t,d)}return!1}function Dn(t,n){for(var r=n;r!==null;){if(r.f&tt)try{r.fn(t);return}catch{r.f^=tt}r=r.parent}throw G=!1,t}function Nn(t){return(t.f&F)===0&&(t.parent===null||(t.parent.f&tt)===0)}function W(t,n,r,e){if(G){if(r===null&&(G=!1),Nn(n))throw t;return}r!==null&&(G=!0);{Dn(t,n);return}}function $t(t){var ht;var n=h,r=E,e=I,s=o,l=S,a=m,i=f,_=t.f;h=null,E=0,I=null,o=_&(A|J)?null:t,S=!b&&(_&D)!==0,m=null,f=t.ctx;try{var p=(0,t.fn)(),c=t.deps;if(h!==null){var v;if(j(t,E),c!==null&&E>0)for(c.length=E+h.length,v=0;v<h.length;v++)c[E+v]=h[v];else t.deps=c=h;if(!S)for(v=E;v<c.length;v++)((ht=c[v]).reactions??(ht.reactions=[])).push(t)}else c!==null&&E<c.length&&(j(t,E),c.length=E);return p}finally{h=n,E=r,I=e,o=s,S=l,m=a,f=i}}function bn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&y&&(h===null||!h.includes(n))&&(T(n,P),n.f&(D|K)||(n.f^=K),j(n,0))}function j(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)bn(t,r[e])}function U(t){var n=t.f;if(!(n&F)){T(t,d);var r=u,e=f;u=t;try{n&at?An(t):Ht(t),Mt(t),qt(t);var s=$t(t);t.teardown=typeof s=="function"?s:null,t.version=Vt;var l=t.deps,a;Q&&Xt&&t.f&g}catch(i){W(i,t,r,e||t.ctx)}finally{u=r}}}function Zt(){if(k>1e3){k=0;try{fn()}catch(t){if(Y!==null)W(t,Y,null);else throw t}}k++}function zt(t){var n=t.length;if(n!==0){Zt();var r=b;b=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&d||(s.f^=d);var l=[];Jt(s,l),kn(l)}}finally{b=r}}}function kn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(F|C)))try{q(e)&&(U(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Yt(e):e.fn=null))}catch(s){W(s,e,null,e.ctx)}}}function Cn(){if(H=!1,k>1001)return;const t=R;R=[],zt(t),H||(k=0,Y=null)}function X(t){V===Gt&&(H||(H=!0,queueMicrotask(Cn))),Y=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(J|A)){if(!(r&d))return;n.f^=d}}R.push(n)}function Jt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,l=(s&A)!==0,a=l&&(s&d)!==0,i=r.next;if(!a&&!(s&C))if(s&B){if(l)r.f^=d;else try{q(r)&&U(r)}catch(v){W(v,r,null,r.ctx)}var _=r.first;if(_!==null){r=_;continue}}else s&mt&&e.push(r);if(i===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var p=v.next;if(p!==null){r=p;continue t}v=v.parent}}r=i}for(var c=0;c<e.length;c++)_=e[c],n.push(_),Jt(_,n)}function Wt(t){var n=V,r=R;try{Zt();const s=[];V=Sn,R=s,H=!1,zt(r);var e=t==null?void 0:t();return Rn(),(R.length>0||s.length>0)&&Wt(),k=0,Y=null,e}finally{V=n,R=r}}async function Pr(){await Promise.resolve(),Wt()}function vt(t){var c;var n=t.f,r=(n&y)!==0;if(r&&n&F){var e=Ct(t);return it(t),e}if(o!==null){m!==null&&m.includes(t)&&_n();var s=o.deps;h===null&&s!==null&&s[E]===t?E++:h===null?h=[t]:h.push(t),I!==null&&u!==null&&u.f&d&&!(u.f&A)&&I.includes(t)&&(T(u,g),X(u))}else if(r&&t.deps===null)for(var l=t,a=l.parent,i=l;a!==null;)if(a.f&y){var _=a;i=_,a=_.parent}else{var p=a;(c=p.deriveds)!=null&&c.includes(i)||(p.deriveds??(p.deriveds=[])).push(i);break}return r&&(l=t,q(l)&&Pt(l)),t.v}function pt(t){const n=o;try{return o=null,t()}finally{o=n}}const Pn=~(g|P|d);function T(t,n){t.f=t.f&Pn|n}function Fr(t,n=1){var r=vt(t),e=n===1?r++:r--;return ot(t,r),e}function Lr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},lt&&!n&&(f.l={s:null,u:null,r1:[],r2:ut(!1)})}function qr(t){const n=f;if(n!==null){const a=n.e;if(a!==null){var r=u,e=o;n.e=null;try{for(var s=0;s<a.length;s++){var l=a[s];z(l.effect),Z(l.reaction),Lt(l.fn)}}finally{z(r),Z(e)}}f=n.p,n.m=!0}return{}}function Mr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(Et in t)st(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&Et in r&&st(r)}}}function st(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{st(t[e],n)}catch{}const r=tn(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Qt(r);for(let s in e){const l=e[s].get;if(l)try{l.call(t)}catch{}}}}}function Hr(t,n,r){if(t==null)return n(void 0),nn;const e=pt(()=>t.subscribe(n,r));return e.unsubscribe?()=>e.unsubscribe():e}export{rr as $,nt as A,rt as B,u as C,or as D,At as E,pr as F,M as G,Hn as H,Yn as I,ut as J,Zn as K,ot as L,dt as M,zn as N,tn as O,pn as P,Er as Q,vr as R,Et as S,ur as T,ir as U,kr as V,gn as W,Ir as X,dn as Y,$n as Z,Fr as _,qr as a,Un as a0,er as a1,Rt as a2,A as a3,J as a4,z as a5,nr as a6,sr as a7,lr as a8,Gn as a9,In as aA,Qn as aB,tr as aC,Qt as aD,Vn as aE,Or as aF,Dr as aG,cr as aH,_r as aI,at as aJ,en as aK,jn as aL,ar as aM,gr as aa,Z as ab,o as ac,Mn as ad,Cr as ae,yr as af,vn as ag,N as ah,St as ai,hn as aj,Dt as ak,Kn as al,Ar as am,qn as an,xr as ao,Lt as ap,ft as aq,Wt as ar,Pr as as,fr as at,Xn as au,C as av,Jn as aw,En as ax,Wn as ay,jt as az,mn as b,wr as c,br as d,O as e,Tr as f,w as g,x as h,vt as i,yn as j,Rr as k,f as l,pt as m,nn as n,Bn as o,Lr as p,rn as q,hr as r,mr as s,Nr as t,Sr as u,Mr as v,dr as w,Ln as x,Hr as y,ln as z};