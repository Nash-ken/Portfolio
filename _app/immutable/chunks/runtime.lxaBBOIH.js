var kn=Array.isArray,On=Array.from,In=Object.defineProperty,_t=Object.getOwnPropertyDescriptor,Kt=Object.getOwnPropertyDescriptors,Nn=Object.prototype,Pn=Array.prototype,$t=Object.getPrototypeOf;const bn=()=>{};function Cn(t){return t()}function Zt(t){for(var n=0;n<t.length;n++)t[n]()}const E=2,dt=4,Z=8,st=16,m=32,W=64,tt=128,k=256,V=512,y=1024,R=2048,M=4096,N=8192,b=16384,Wt=32768,yt=65536,Fn=1<<17,zt=1<<19,Et=1<<20,ct=Symbol("$state"),qn=Symbol("legacy props");function wt(t){return t===this.v}function Jt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function mt(t){return!Jt(t,this.v)}function Qt(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Xt(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function tn(t){throw new Error("https://svelte.dev/e/effect_orphan")}function nn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Ln(){throw new Error("https://svelte.dev/e/hydration_failed")}function Yn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Mn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function jn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function rn(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function en(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let z=!1;function Un(){z=!0}const Hn=1,Bn=2,Vn=4,Gn=8,Kn=16,$n=1,Zn=2,ln="[",sn="[!",un="]",Tt={},Wn=Symbol();function ut(t,n){var r={f:0,v:t,reactions:null,equals:wt,version:0};return r}function zn(t){return an(ut(t))}function Jn(t,n=!1){var e;const r=ut(t);return n||(r.equals=mt),z&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function an(t){return o!==null&&o.f&E&&(w===null?mn([t]):w.push(t)),t}function Qn(t,n){return o!==null&&it()&&o.f&(E|st)&&(w===null||!w.includes(t))&&en(),on(t,n)}function on(t,n){return t.equals(n)||(t.v,t.v=n,t.version=jt(),gt(t,R),it()&&a!==null&&a.f&y&&!(a.f&m)&&(h!==null&&h.includes(t)?(g(a,R),X(a)):A===null?Tn([t]):A.push(t))),n}function gt(t,n){var r=t.reactions;if(r!==null)for(var e=it(),l=r.length,s=0;s<l;s++){var u=r[s],i=u.f;i&R||!e&&u===a||(g(u,n),i&(y|k)&&(i&E?gt(u,M):X(u)))}}function At(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let P=!1;function Xn(t){P=t}let T;function F(t){if(t===null)throw At(),Tt;return T=t}function tr(){return F(C(T))}function nr(t){if(P){if(C(T)!==null)throw At(),Tt;T=t}}function rr(){for(var t=0,n=T;;){if(n.nodeType===8){var r=n.data;if(r===un){if(t===0)return n;t-=1}else(r===ln||r===sn)&&(t+=1)}var e=C(n);n.remove(),n=e}}var vt,Rt,xt;function er(){if(vt===void 0){vt=window;var t=Element.prototype,n=Node.prototype;Rt=_t(n,"firstChild").get,xt=_t(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function nt(t=""){return document.createTextNode(t)}function rt(t){return Rt.call(t)}function C(t){return xt.call(t)}function lr(t,n){if(!P)return rt(t);var r=rt(T);if(r===null)r=T.appendChild(nt());else if(n&&r.nodeType!==3){var e=nt();return r==null||r.before(e),F(e),e}return F(r),r}function sr(t,n){if(!P){var r=rt(t);return r instanceof Comment&&r.data===""?C(r):r}return T}function ur(t,n=1,r=!1){let e=P?T:t;for(var l;n--;)l=e,e=C(e);if(!P)return e;var s=e==null?void 0:e.nodeType;if(r&&s!==3){var u=nt();return e===null?l==null||l.after(u):e.before(u),F(u),u}return F(e),e}function ar(t){t.textContent=""}function fn(t){var n=E|R;a===null?n|=k:a.f|=Et;var r=o!==null&&o.f&E?o:null;const e={children:null,ctx:f,deps:null,equals:wt,f:n,fn:t,reactions:null,v:null,version:0,parent:r??a};return r!==null&&(r.children??(r.children=[])).push(e),e}function or(t){const n=fn(t);return n.equals=mt,n}function Dt(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&E?at(e):S(e)}}}function _n(t){for(var n=t.parent;n!==null;){if(!(n.f&E))return n;n=n.parent}return null}function St(t){var n,r=a;$(_n(t));try{Dt(t),n=Ut(t)}finally{$(r)}return n}function kt(t){var n=St(t),r=(D||t.f&k)&&t.deps!==null?M:y;g(t,r),t.equals(n)||(t.v=n,t.version=jt())}function at(t){Dt(t),Y(t,0),g(t,b),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Ot(t){a===null&&o===null&&tn(),o!==null&&o.f&k&&Xt(),ot&&Qt()}function cn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function j(t,n,r,e=!0){var l=(t&W)!==0,s=a,u={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|R,first:null,fn:n,last:null,next:null,parent:l?null:s,prev:null,teardown:null,transitions:null,version:0};if(r){var i=O;try{pt(!0),Q(u),u.f|=Wt}catch(c){throw S(u),c}finally{pt(i)}}else n!==null&&X(u);var _=r&&u.deps===null&&u.first===null&&u.nodes_start===null&&u.teardown===null&&(u.f&Et)===0;if(!_&&!l&&e&&(s!==null&&cn(u,s),o!==null&&o.f&E)){var p=o;(p.children??(p.children=[])).push(u)}return u}function ir(t){Ot();var n=a!==null&&(a.f&m)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:a,reaction:o})}else{var e=It(t);return e}}function fr(t){return Ot(),vn(t)}function _r(t){const n=j(W,t,!0);return(r={})=>new Promise(e=>{r.outro?dn(n,()=>{S(n),e(void 0)}):(S(n),e(void 0))})}function It(t){return j(dt,t,!1)}function vn(t){return j(Z,t,!0)}function cr(t){return pn(t)}function pn(t,n=0){return j(Z|st|n,t,!0)}function vr(t,n=!0){return j(Z|m,t,!0,n)}function Nt(t){var n=t.teardown;if(n!==null){const r=ot,e=o;ht(!0),K(null);try{n.call(null)}finally{ht(r),K(e)}}}function Pt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)at(n[r])}}function bt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;S(r,n),r=e}}function hn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&m||S(n),n=r}}function S(t,n=!0){var r=!1;if((n||t.f&zt)&&t.nodes_start!==null){for(var e=t.nodes_start,l=t.nodes_end;e!==null;){var s=e===l?null:C(e);e.remove(),e=s}r=!0}bt(t,n&&!r),Pt(t),Y(t,0),g(t,b);var u=t.transitions;if(u!==null)for(const _ of u)_.stop();Nt(t);var i=t.parent;i!==null&&i.first!==null&&Ct(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Ct(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function dn(t,n){var r=[];Ft(t,r,!0),yn(r,()=>{S(t),n&&n()})}function yn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var l of t)l.out(e)}else n()}function Ft(t,n,r){if(!(t.f&N)){if(t.f^=N,t.transitions!==null)for(const u of t.transitions)(u.is_global||r)&&n.push(u);for(var e=t.first;e!==null;){var l=e.next,s=(e.f&yt)!==0||(e.f&m)!==0;Ft(e,n,s?r:!1),e=l}}}function pr(t){qt(t,!0)}function qt(t,n){if(t.f&N){U(t)&&Q(t),t.f^=N;for(var r=t.first;r!==null;){var e=r.next,l=(r.f&yt)!==0||(r.f&m)!==0;qt(r,l?n:!1),r=e}if(t.transitions!==null)for(const s of t.transitions)(s.is_global||n)&&s.in()}}let G=!1,et=[];function Lt(){G=!1;const t=et.slice();et=[],Zt(t)}function hr(t){G||(G=!0,queueMicrotask(Lt)),et.push(t)}function En(){G&&Lt()}const Yt=0,wn=1;let H=!1,B=Yt,q=!1,L=null,O=!1,ot=!1;function pt(t){O=t}function ht(t){ot=t}let x=[],I=0;let o=null;function K(t){o=t}let a=null;function $(t){a=t}let w=null;function mn(t){w=t}let h=null,d=0,A=null;function Tn(t){A=t}let Mt=1,D=!1,f=null;function jt(){return++Mt}function it(){return!z||f!==null&&f.l===null}function U(t){var p;var n=t.f;if(n&R)return!0;if(n&M){var r=t.deps,e=(n&k)!==0;if(r!==null){var l,s,u=(n&V)!==0,i=e&&a!==null&&!D,_=r.length;if(u||i){for(l=0;l<_;l++)s=r[l],(u||!((p=s==null?void 0:s.reactions)!=null&&p.includes(t)))&&(s.reactions??(s.reactions=[])).push(t);u&&(t.f^=V)}for(l=0;l<_;l++)if(s=r[l],U(s)&&kt(s),s.version>t.version)return!0}(!e||a!==null&&!D)&&g(t,y)}return!1}function gn(t,n){for(var r=n;r!==null;){if(r.f&tt)try{r.fn(t);return}catch{r.f^=tt}r=r.parent}throw H=!1,t}function An(t){return(t.f&b)===0&&(t.parent===null||(t.parent.f&tt)===0)}function J(t,n,r,e){if(H){if(r===null&&(H=!1),An(n))throw t;return}r!==null&&(H=!0);{gn(t,n);return}}function Ut(t){var ft;var n=h,r=d,e=A,l=o,s=D,u=w,i=f,_=t.f;h=null,d=0,A=null,o=_&(m|W)?null:t,D=!O&&(_&k)!==0,w=null,f=t.ctx;try{var p=(0,t.fn)(),c=t.deps;if(h!==null){var v;if(Y(t,d),c!==null&&d>0)for(c.length=d+h.length,v=0;v<h.length;v++)c[d+v]=h[v];else t.deps=c=h;if(!D)for(v=d;v<c.length;v++)((ft=c[v]).reactions??(ft.reactions=[])).push(t)}else c!==null&&d<c.length&&(Y(t,d),c.length=d);return p}finally{h=n,d=r,A=e,o=l,D=s,w=u,f=i}}function Rn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var l=r.length-1;l===0?r=n.reactions=null:(r[e]=r[l],r.pop())}}r===null&&n.f&E&&(h===null||!h.includes(n))&&(g(n,M),n.f&(k|V)||(n.f^=V),Y(n,0))}function Y(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)Rn(t,r[e])}function Q(t){var n=t.f;if(!(n&b)){g(t,y);var r=a,e=f;a=t;try{n&st?hn(t):bt(t),Pt(t),Nt(t);var l=Ut(t);t.teardown=typeof l=="function"?l:null,t.version=Mt;var s=t.deps,u}catch(i){J(i,t,r,e||t.ctx)}finally{a=r}}}function Ht(){if(I>1e3){I=0;try{nn()}catch(t){if(L!==null)J(t,L,null);else throw t}}I++}function Bt(t){var n=t.length;if(n!==0){Ht();var r=O;O=!0;try{for(var e=0;e<n;e++){var l=t[e];l.f&y||(l.f^=y);var s=[];Vt(l,s),xn(s)}}finally{O=r}}}function xn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(b|N)))try{U(e)&&(Q(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Ct(e):e.fn=null))}catch(l){J(l,e,null,e.ctx)}}}function Dn(){if(q=!1,I>1001)return;const t=x;x=[],Bt(t),q||(I=0,L=null)}function X(t){B===Yt&&(q||(q=!0,queueMicrotask(Dn))),L=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(W|m)){if(!(r&y))return;n.f^=y}}x.push(n)}function Vt(t,n){var r=t.first,e=[];t:for(;r!==null;){var l=r.f,s=(l&m)!==0,u=s&&(l&y)!==0,i=r.next;if(!u&&!(l&N))if(l&Z){if(s)r.f^=y;else try{U(r)&&Q(r)}catch(v){J(v,r,null,r.ctx)}var _=r.first;if(_!==null){r=_;continue}}else l&dt&&e.push(r);if(i===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var p=v.next;if(p!==null){r=p;continue t}v=v.parent}}r=i}for(var c=0;c<e.length;c++)_=e[c],n.push(_),Vt(_,n)}function Gt(t){var n=B,r=x;try{Ht();const l=[];B=wn,x=l,q=!1,Bt(r);var e=t==null?void 0:t();return En(),(x.length>0||l.length>0)&&Gt(),I=0,L=null,e}finally{B=n,x=r}}async function dr(){await Promise.resolve(),Gt()}function yr(t){var c;var n=t.f,r=(n&E)!==0;if(r&&n&b){var e=St(t);return at(t),e}if(o!==null){w!==null&&w.includes(t)&&rn();var l=o.deps;h===null&&l!==null&&l[d]===t?d++:h===null?h=[t]:h.push(t),A!==null&&a!==null&&a.f&y&&!(a.f&m)&&A.includes(t)&&(g(a,R),X(a))}else if(r&&t.deps===null)for(var s=t,u=s.parent,i=s;u!==null;)if(u.f&E){var _=u;i=_,u=_.parent}else{var p=u;(c=p.deriveds)!=null&&c.includes(i)||(p.deriveds??(p.deriveds=[])).push(i);break}return r&&(s=t,U(s)&&kt(s)),t.v}function Er(t){const n=o;try{return o=null,t()}finally{o=n}}const Sn=~(R|M|y);function g(t,n){t.f=t.f&Sn|n}function wr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},z&&!n&&(f.l={s:null,u:null,r1:[],r2:ut(!1)})}function mr(t){const n=f;if(n!==null){const u=n.e;if(u!==null){var r=a,e=o;n.e=null;try{for(var l=0;l<u.length;l++){var s=u[l];$(s.effect),K(s.reaction),It(s.fn)}}finally{$(r),K(e)}}f=n.p,n.m=!0}return{}}function Tr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ct in t)lt(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&ct in r&&lt(r)}}}function lt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{lt(t[e],n)}catch{}const r=$t(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Kt(r);for(let l in e){const s=e[l].get;if(s)try{s.call(t)}catch{}}}}}export{Qn as $,_r as A,nt as B,vr as C,wr as D,P as E,mr as F,pn as G,ln as H,yt as I,bn as J,S as K,fr as L,Zt as M,yr as N,Cn as O,Tr as P,fn as Q,cr as R,lr as S,nr as T,$n as U,Zn as V,ct as W,Nn as X,Pn as Y,ut as Z,Mn as _,Er as a,_t as a0,Wn as a1,jn as a2,$t as a3,sn as a4,rr as a5,pr as a6,dn as a7,It as a8,vn as a9,hr as aa,Yn as ab,Fn as ac,Vn as ad,mt as ae,m as af,W as ag,Hn as ah,Bn as ai,Gn as aj,qn as ak,or as al,Jn as am,Kn as an,Gt as ao,dr as ap,zn as aq,Jt as ar,K as b,f as c,In as d,Un as e,sr as f,$ as g,o as h,kn as i,a as j,er as k,z as l,rt as m,C as n,Tt as o,Xn as p,F as q,tr as r,ur as s,T as t,ir as u,un as v,At as w,Ln as x,ar as y,On as z};
