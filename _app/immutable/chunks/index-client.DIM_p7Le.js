import{l as J,t as Qt}from"./index.DIeogL5L.js";const nt=!1;var tn=Array.isArray,jn=Array.from,Bn=Object.defineProperty,Et=Object.getOwnPropertyDescriptor,nn=Object.getOwnPropertyDescriptors,Un=Object.prototype,Gn=Array.prototype,rn=Object.getPrototypeOf;function Vn(t){return typeof t=="function"}const $n=()=>{};function Kn(t){return t()}function en(t){for(var n=0;n<t.length;n++)t[n]()}const y=2,At=4,B=8,ut=16,T=32,W=64,rt=128,O=256,$=512,d=1024,A=2048,b=4096,N=8192,P=16384,sn=32768,gt=65536,Zn=1<<17,ln=1<<19,xt=1<<20,yt=Symbol("$state"),zn=Symbol("legacy props"),Jn=Symbol("");function It(t){return t===this.v}function an(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function Rt(t){return!an(t,this.v)}function un(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function on(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function fn(t){throw new Error("https://svelte.dev/e/effect_orphan")}function _n(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Wn(){throw new Error("https://svelte.dev/e/hydration_failed")}function Xn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Qn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function tr(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function cn(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function vn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}const nr=1,rr=2,er=4,sr=8,lr=16,ar=1,ur=2,or=4,ir=8,fr=16,_r=4,cr=1,vr=2,pn="[",hn="[!",dn="]",St={},pr=Symbol();function ot(t,n){var r={f:0,v:t,reactions:null,equals:It,version:0};return r}function hr(t){return Ot(ot(t))}function En(t,n=!1){var e;const r=ot(t);return n||(r.equals=Rt),J&&o!==null&&o.l!==null&&((e=o.l).s??(e.s=[])).push(r),r}function dr(t,n=!1){return Ot(En(t,n))}function Ot(t){return i!==null&&i.f&y&&(m===null?Dn([t]):m.push(t)),t}function Er(t,n){return it(t,tt(()=>ht(t))),n}function it(t,n){return i!==null&&pt()&&i.f&(y|ut)&&(m===null||!m.includes(t))&&vn(),yn(t,n)}function yn(t,n){return t.equals(n)||(t.v,t.v=n,t.version=Kt(),Dt(t,A),pt()&&u!==null&&u.f&d&&!(u.f&T)&&(h!==null&&h.includes(t)?(w(u,A),Q(u)):x===null?kn([t]):x.push(t))),n}function Dt(t,n){var r=t.reactions;if(r!==null)for(var e=pt(),s=r.length,l=0;l<s;l++){var a=r[l],f=a.f;f&A||!e&&a===u||(w(a,n),f&(d|O)&&(f&y?Dt(a,b):Q(a)))}}function kt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let C=!1;function yr(t){C=t}let g;function q(t){if(t===null)throw kt(),St;return g=t}function wr(){return q(F(g))}function mr(t){if(C){if(F(g)!==null)throw kt(),St;g=t}}function Tr(){for(var t=0,n=g;;){if(n.nodeType===8){var r=n.data;if(r===dn){if(t===0)return n;t-=1}else(r===pn||r===hn)&&(t+=1)}var e=F(n);n.remove(),n=e}}var wt,Nt,Ct;function Ar(){if(wt===void 0){wt=window;var t=Element.prototype,n=Node.prototype;Nt=Et(n,"firstChild").get,Ct=Et(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function et(t=""){return document.createTextNode(t)}function st(t){return Nt.call(t)}function F(t){return Ct.call(t)}function gr(t,n){if(!C)return st(t);var r=st(g);if(r===null)r=g.appendChild(et());else if(n&&r.nodeType!==3){var e=et();return r==null||r.before(e),q(e),e}return q(r),r}function xr(t,n){if(!C){var r=st(t);return r instanceof Comment&&r.data===""?F(r):r}return g}function Ir(t,n=1,r=!1){let e=C?g:t;for(var s;n--;)s=e,e=F(e);if(!C)return e;var l=e==null?void 0:e.nodeType;if(r&&l!==3){var a=et();return e===null?s==null||s.after(a):e.before(a),q(a),a}return q(e),e}function Rr(t){t.textContent=""}function wn(t){var n=y|A;u===null?n|=O:u.f|=xt;var r=i!==null&&i.f&y?i:null;const e={children:null,ctx:o,deps:null,equals:It,f:n,fn:t,reactions:null,v:null,version:0,parent:r??u};return r!==null&&(r.children??(r.children=[])).push(e),e}function Sr(t){const n=wn(t);return n.equals=Rt,n}function bt(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&y?ft(e):S(e)}}}function mn(t){for(var n=t.parent;n!==null;){if(!(n.f&y))return n;n=n.parent}return null}function Pt(t){var n,r=u;z(mn(t));try{bt(t),n=Zt(t)}finally{z(r)}return n}function Ft(t){var n=Pt(t),r=(R||t.f&O)&&t.deps!==null?b:d;w(t,r),t.equals(n)||(t.v=n,t.version=Kt())}function ft(t){bt(t),j(t,0),w(t,P),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Lt(t){u===null&&i===null&&fn(),i!==null&&i.f&O&&on(),vt&&un()}function Tn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function L(t,n,r,e=!0){var s=(t&W)!==0,l=u,a={ctx:o,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|A,first:null,fn:n,last:null,next:null,parent:s?null:l,prev:null,teardown:null,transitions:null,version:0};if(r){var f=D;try{mt(!0),U(a),a.f|=sn}catch(c){throw S(a),c}finally{mt(f)}}else n!==null&&Q(a);var _=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&xt)===0;if(!_&&!s&&e&&(l!==null&&Tn(a,l),i!==null&&i.f&y)){var p=i;(p.children??(p.children=[])).push(a)}return a}function Or(t){const n=L(B,null,!1);return w(n,d),n.teardown=t,n}function An(t){Lt();var n=u!==null&&(u.f&T)!==0&&o!==null&&!o.m;if(n){var r=o;(r.e??(r.e=[])).push({fn:t,effect:u,reaction:i})}else{var e=Mt(t);return e}}function Dr(t){return Lt(),_t(t)}function kr(t){const n=L(W,t,!0);return(r={})=>new Promise(e=>{r.outro?In(n,()=>{S(n),e(void 0)}):(S(n),e(void 0))})}function Mt(t){return L(At,t,!1)}function Nr(t,n){var r=o,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=_t(()=>{t(),!e.ran&&(e.ran=!0,it(r.l.r2,!0),tt(n))})}function Cr(){var t=o;_t(()=>{if(ht(t.l.r2)){for(var n of t.l.r1){var r=n.effect;r.f&d&&w(r,b),M(r)&&U(r),n.ran=!1}t.l.r2.v=!1}})}function _t(t){return L(B,t,!0)}function br(t){return gn(t)}function gn(t,n=0){return L(B|ut|n,t,!0)}function Pr(t,n=!0){return L(B|T,t,!0,n)}function qt(t){var n=t.teardown;if(n!==null){const r=vt,e=i;Tt(!0),Z(null);try{n.call(null)}finally{Tt(r),Z(e)}}}function Ht(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)ft(n[r])}}function Yt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;S(r,n),r=e}}function xn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&T||S(n),n=r}}function S(t,n=!0){var r=!1;if((n||t.f&ln)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var l=e===s?null:F(e);e.remove(),e=l}r=!0}Yt(t,n&&!r),Ht(t),j(t,0),w(t,P);var a=t.transitions;if(a!==null)for(const _ of a)_.stop();qt(t);var f=t.parent;f!==null&&f.first!==null&&jt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function jt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function In(t,n){var r=[];Bt(t,r,!0),Rn(r,()=>{S(t),n&&n()})}function Rn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function Bt(t,n,r){if(!(t.f&N)){if(t.f^=N,t.transitions!==null)for(const a of t.transitions)(a.is_global||r)&&n.push(a);for(var e=t.first;e!==null;){var s=e.next,l=(e.f&gt)!==0||(e.f&T)!==0;Bt(e,n,l?r:!1),e=s}}}function Fr(t){Ut(t,!0)}function Ut(t,n){if(t.f&N){M(t)&&U(t),t.f^=N;for(var r=t.first;r!==null;){var e=r.next,s=(r.f&gt)!==0||(r.f&T)!==0;Ut(r,s?n:!1),r=e}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&l.in()}}let K=!1,lt=[];function Gt(){K=!1;const t=lt.slice();lt=[],en(t)}function Lr(t){K||(K=!0,queueMicrotask(Gt)),lt.push(t)}function Sn(){K&&Gt()}function ct(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}const Vt=0,On=1;let G=!1,V=Vt,H=!1,Y=null,D=!1,vt=!1;function mt(t){D=t}function Tt(t){vt=t}let I=[],k=0;let i=null;function Z(t){i=t}let u=null;function z(t){u=t}let m=null;function Dn(t){m=t}let h=null,E=0,x=null;function kn(t){x=t}let $t=1,R=!1,o=null;function Kt(){return++$t}function pt(){return!J||o!==null&&o.l===null}function M(t){var p;var n=t.f;if(n&A)return!0;if(n&b){var r=t.deps,e=(n&O)!==0;if(r!==null){var s,l,a=(n&$)!==0,f=e&&u!==null&&!R,_=r.length;if(a||f){for(s=0;s<_;s++)l=r[s],(a||!((p=l==null?void 0:l.reactions)!=null&&p.includes(t)))&&(l.reactions??(l.reactions=[])).push(t);a&&(t.f^=$)}for(s=0;s<_;s++)if(l=r[s],M(l)&&Ft(l),l.version>t.version)return!0}(!e||u!==null&&!R)&&w(t,d)}return!1}function Nn(t,n){for(var r=n;r!==null;){if(r.f&rt)try{r.fn(t);return}catch{r.f^=rt}r=r.parent}throw G=!1,t}function Cn(t){return(t.f&P)===0&&(t.parent===null||(t.parent.f&rt)===0)}function X(t,n,r,e){if(G){if(r===null&&(G=!1),Cn(n))throw t;return}r!==null&&(G=!0);{Nn(t,n);return}}function Zt(t){var dt;var n=h,r=E,e=x,s=i,l=R,a=m,f=o,_=t.f;h=null,E=0,x=null,i=_&(T|W)?null:t,R=!D&&(_&O)!==0,m=null,o=t.ctx;try{var p=(0,t.fn)(),c=t.deps;if(h!==null){var v;if(j(t,E),c!==null&&E>0)for(c.length=E+h.length,v=0;v<h.length;v++)c[E+v]=h[v];else t.deps=c=h;if(!R)for(v=E;v<c.length;v++)((dt=c[v]).reactions??(dt.reactions=[])).push(t)}else c!==null&&E<c.length&&(j(t,E),c.length=E);return p}finally{h=n,E=r,x=e,i=s,R=l,m=a,o=f}}function bn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&y&&(h===null||!h.includes(n))&&(w(n,b),n.f&(O|$)||(n.f^=$),j(n,0))}function j(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)bn(t,r[e])}function U(t){var n=t.f;if(!(n&P)){w(t,d);var r=u,e=o;u=t;try{n&ut?xn(t):Yt(t),Ht(t),qt(t);var s=Zt(t);t.teardown=typeof s=="function"?s:null,t.version=$t;var l=t.deps,a;nt&&Qt&&t.f&A}catch(f){X(f,t,r,e||t.ctx)}finally{u=r}}}function zt(){if(k>1e3){k=0;try{_n()}catch(t){if(Y!==null)X(t,Y,null);else throw t}}k++}function Jt(t){var n=t.length;if(n!==0){zt();var r=D;D=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&d||(s.f^=d);var l=[];Wt(s,l),Pn(l)}}finally{D=r}}}function Pn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(P|N)))try{M(e)&&(U(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?jt(e):e.fn=null))}catch(s){X(s,e,null,e.ctx)}}}function Fn(){if(H=!1,k>1001)return;const t=I;I=[],Jt(t),H||(k=0,Y=null)}function Q(t){V===Vt&&(H||(H=!0,queueMicrotask(Fn))),Y=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(W|T)){if(!(r&d))return;n.f^=d}}I.push(n)}function Wt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,l=(s&T)!==0,a=l&&(s&d)!==0,f=r.next;if(!a&&!(s&N))if(s&B){if(l)r.f^=d;else try{M(r)&&U(r)}catch(v){X(v,r,null,r.ctx)}var _=r.first;if(_!==null){r=_;continue}}else s&At&&e.push(r);if(f===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var p=v.next;if(p!==null){r=p;continue t}v=v.parent}}r=f}for(var c=0;c<e.length;c++)_=e[c],n.push(_),Wt(_,n)}function Xt(t){var n=V,r=I;try{zt();const s=[];V=On,I=s,H=!1,Jt(r);var e=t==null?void 0:t();return Sn(),(I.length>0||s.length>0)&&Xt(),k=0,Y=null,e}finally{V=n,I=r}}async function Mr(){await Promise.resolve(),Xt()}function ht(t){var c;var n=t.f,r=(n&y)!==0;if(r&&n&P){var e=Pt(t);return ft(t),e}if(i!==null){m!==null&&m.includes(t)&&cn();var s=i.deps;h===null&&s!==null&&s[E]===t?E++:h===null?h=[t]:h.push(t),x!==null&&u!==null&&u.f&d&&!(u.f&T)&&x.includes(t)&&(w(u,A),Q(u))}else if(r&&t.deps===null)for(var l=t,a=l.parent,f=l;a!==null;)if(a.f&y){var _=a;f=_,a=_.parent}else{var p=a;(c=p.deriveds)!=null&&c.includes(f)||(p.deriveds??(p.deriveds=[])).push(f);break}return r&&(l=t,M(l)&&Ft(l)),t.v}function tt(t){const n=i;try{return i=null,t()}finally{i=n}}const Ln=~(A|b|d);function w(t,n){t.f=t.f&Ln|n}function qr(t,n=1){var r=ht(t),e=n===1?r++:r--;return it(t,r),e}function Hr(t,n=!1,r){o={p:o,c:null,e:null,m:!1,s:t,x:null,l:null},J&&!n&&(o.l={s:null,u:null,r1:[],r2:ot(!1)})}function Yr(t){const n=o;if(n!==null){const a=n.e;if(a!==null){var r=u,e=i;n.e=null;try{for(var s=0;s<a.length;s++){var l=a[s];z(l.effect),Z(l.reaction),Mt(l.fn)}}finally{z(r),Z(e)}}o=n.p,n.m=!0}return{}}function jr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(yt in t)at(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&yt in r&&at(r)}}}function at(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{at(t[e],n)}catch{}const r=rn(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=nn(r);for(let s in e){const l=e[s].get;if(l)try{l.call(t)}catch{}}}}}function Mn(t){o===null&&ct(),J&&o.l!==null?Hn(o).m.push(t):An(()=>{const n=tt(t);if(typeof n=="function")return n})}function Br(t){o===null&&ct(),Mn(()=>()=>tt(t))}function qn(t,n,{bubbles:r=!1,cancelable:e=!1}={}){return new CustomEvent(t,{detail:n,bubbles:r,cancelable:e})}function Ur(){const t=o;return t===null&&ct(),(n,r,e)=>{var l;const s=(l=t.s.$$events)==null?void 0:l[n];if(s){const a=tn(s)?s.slice():[s],f=qn(n,r,e);for(const _ of a)_.call(t.x,f);return!f.defaultPrevented}return!0}}function Hn(t){var n=t.l;return n.u??(n.u={a:[],b:[],m:[]})}export{Sr as $,gn as A,C as B,wr as C,Tr as D,gt as E,q as F,yr as G,hn as H,Fr as I,Pr as J,In as K,g as L,Xn as M,qr as N,Zn as O,ur as P,or as Q,Rt as R,yt as S,T,pr as U,W as V,z as W,ar as X,ir as Y,fr as Z,zn as _,Yr as a,En as a0,$n as a1,Or as a2,Z as a3,i as a4,Bn as a5,Lr as a6,et as a7,st as a8,cr as a9,sr as aA,Jn as aB,nn as aC,Br as aD,Nr as aE,Cr as aF,Er as aG,dr as aH,Ur as aI,ut as aJ,sn as aK,Vn as aL,_r as aM,an as aN,vr as aa,Ar as ab,pn as ac,F as ad,St as ae,dn as af,kt as ag,Wn as ah,Rr as ai,jn as aj,kr as ak,Mt as al,_t as am,Xt as an,Mn as ao,Mr as ap,hr as aq,N as ar,yn as as,Bt as at,Rn as au,S as av,rr as aw,er as ax,nr as ay,lr as az,An as b,gr as c,o as d,tt as e,xr as f,Kn as g,en as h,ht as i,jr as j,wn as k,Gn as l,ot as m,Qn as n,Un as o,Hr as p,it as q,mr as r,Ir as s,br as t,Dr as u,Et as v,u as w,tr as x,rn as y,tn as z};
