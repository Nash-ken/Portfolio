const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.TM31_xWN.js","../chunks/disclose-version.Bg9kRutz.js","../chunks/runtime.DoOFioAD.js","../chunks/index.DIeogL5L.js","../chunks/template.Bfay8Rl8.js","../chunks/snippet.B_HZakzb.js","../chunks/client.CPectOkK.js","../chunks/entry.CpIonosQ.js","../chunks/paths.PBZ18TVy.js","../chunks/utils.BiX7ZKEE.js","../chunks/index-client.BfrlO_jC.js","../chunks/legacy.kkaBD5aU.js","../chunks/Icon.CPDoHlgc.js","../chunks/props.CaEaekMf.js","../chunks/render.CiiGWrjL.js","../chunks/lifecycle.DNOXLLpC.js","../chunks/class.4SL9URhA.js","../chunks/index.DvWYqG5u.js","../assets/0.BkSvsLRC.css","../nodes/1.Dz1rKZ6u.js","../nodes/2.BbSkLEKb.js","../chunks/projects.DNy1QAIy.js","../nodes/3.CbhVzYK4.js","../chunks/Button.CRh-WF32.js","../nodes/4.xbRJbMv0.js","../assets/4.uI5tMGfa.css","../nodes/5.eDU4ZueR.js","../nodes/6.DRPXNSvZ.js","../nodes/7.CRRk_T3q.js"])))=>i.map(i=>d[i]);
var X=e=>{throw TypeError(e)};var Z=(e,t,r)=>t.has(e)||X("Cannot "+r);var c=(e,t,r)=>(Z(e,t,"read from private field"),r?r.call(e):t.get(e)),N=(e,t,r)=>t.has(e)?X("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),z=(e,t,r,i)=>(Z(e,t,"write to private field"),i?i.call(e,r):t.set(e,r),r);import{h as p,C as ct,b as ut,E as lt,d as ft,g as dt,R as mt,an as _t,ao as ht,m as vt,ac as gt,S as Et,i as h,a7 as yt,J as U,ap as Pt,ab as Rt,W as bt,p as kt,u as Ot,k as At,aq as Lt,f as O,s as Tt,a as wt,ar as H,c as xt,r as St,t as Ct,j}from"../chunks/runtime.DoOFioAD.js";import{h as jt,m as Dt,u as It,s as Vt}from"../chunks/render.CiiGWrjL.js";import"../chunks/disclose-version.Bg9kRutz.js";import{p as B,b as qt,i as F}from"../chunks/props.CaEaekMf.js";import{a as E,t as et,c as w,d as Bt}from"../chunks/template.Bfay8Rl8.js";import{o as Ft}from"../chunks/index-client.BfrlO_jC.js";function D(e,t,r){p&&ct();var i=e,n,o;ut(()=>{n!==(n=t())&&(o&&(mt(o),o=null),n&&(o=ft(()=>r(i,n))))},lt),p&&(i=dt)}function $(e,t){return e===t||(e==null?void 0:e[Et])===t}function I(e={},t,r,i){return _t(()=>{var n,o;return ht(()=>{n=o,o=[],vt(()=>{e!==r(...o)&&(t(e,...o),n&&$(r(...n),e)&&t(null,...n))})}),()=>{gt(()=>{o&&$(r(...o),e)&&t(null,...o)})}}),e}function Ut(e){return class extends Wt{constructor(t){super({component:e,...t})}}}var y,f;class Wt{constructor(t){N(this,y);N(this,f);var o;var r=new Map,i=(a,s)=>{var u=bt(s);return r.set(a,u),u};const n=new Proxy({...t.props||{},$$events:{}},{get(a,s){return h(r.get(s)??i(s,Reflect.get(a,s)))},has(a,s){return s===yt?!0:(h(r.get(s)??i(s,Reflect.get(a,s))),Reflect.has(a,s))},set(a,s,u){return U(r.get(s)??i(s,u),u),Reflect.set(a,s,u)}});z(this,f,(t.hydrate?jt:Dt)(t.component,{target:t.target,anchor:t.anchor,props:n,context:t.context,intro:t.intro??!1,recover:t.recover})),(!((o=t==null?void 0:t.props)!=null&&o.$$host)||t.sync===!1)&&Pt(),z(this,y,n.$$events);for(const a of Object.keys(c(this,f)))a==="$set"||a==="$destroy"||a==="$on"||Rt(this,a,{get(){return c(this,f)[a]},set(s){c(this,f)[a]=s},enumerable:!0});c(this,f).$set=a=>{Object.assign(n,a)},c(this,f).$destroy=()=>{It(c(this,f))}}$set(t){c(this,f).$set(t)}$on(t,r){c(this,y)[t]=c(this,y)[t]||[];const i=(...n)=>r.call(this,...n);return c(this,y)[t].push(i),()=>{c(this,y)[t]=c(this,y)[t].filter(n=>n!==i)}}$destroy(){c(this,f).$destroy()}}y=new WeakMap,f=new WeakMap;const Yt="modulepreload",Gt=function(e,t){return new URL(e,t).href},tt={},R=function(t,r,i){let n=Promise.resolve();if(r&&r.length>0){const a=document.getElementsByTagName("link"),s=document.querySelector("meta[property=csp-nonce]"),u=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));n=Promise.allSettled(r.map(d=>{if(d=Gt(d,i),d in tt)return;tt[d]=!0;const P=d.endsWith(".css"),V=P?'[rel="stylesheet"]':"";if(!!i)for(let b=a.length-1;b>=0;b--){const A=a[b];if(A.href===d&&(!P||A.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${d}"]${V}`))return;const v=document.createElement("link");if(v.rel=P?"stylesheet":Yt,P||(v.as="script"),v.crossOrigin="",v.href=d,u&&v.setAttribute("nonce",u),document.head.appendChild(v),P)return new Promise((b,A)=>{v.addEventListener("load",b),v.addEventListener("error",()=>A(new Error(`Unable to preload CSS for ${d}`)))})}))}function o(a){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=a,window.dispatchEvent(s),!s.defaultPrevented)throw a}return n.then(a=>{for(const s of a||[])s.status==="rejected"&&o(s.reason);return t().catch(o)})},se={};var Jt=et('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),Nt=et("<!> <!>",1);function zt(e,t){kt(t,!0);let r=B(t,"components",23,()=>[]),i=B(t,"data_0",3,null),n=B(t,"data_1",3,null),o=B(t,"data_2",3,null);Ot(()=>t.stores.page.set(t.page)),At(()=>{t.stores,t.page,t.constructors,r(),t.form,i(),n(),o(),t.stores.page.notify()});let a=H(!1),s=H(!1),u=H(null);Ft(()=>{const l=t.stores.page.subscribe(()=>{h(a)&&(U(s,!0),Lt().then(()=>{U(u,qt(document.title||"untitled page"))}))});return U(a,!0),l});const d=j(()=>t.constructors[2]);var P=Nt(),V=O(P);{var K=l=>{var g=w();const x=j(()=>t.constructors[0]);var S=O(g);D(S,()=>h(x),(k,L)=>{I(L(k,{get data(){return i()},get form(){return t.form},children:(m,Mt)=>{var M=w(),rt=O(M);{var st=T=>{var C=w();const W=j(()=>t.constructors[1]);var Y=O(C);D(Y,()=>h(W),(G,J)=>{I(J(G,{get data(){return n()},get form(){return t.form},children:(_,Qt)=>{var Q=w(),nt=O(Q);D(nt,()=>h(d),(ot,it)=>{I(it(ot,{get data(){return o()},get form(){return t.form}}),q=>r()[2]=q,()=>{var q;return(q=r())==null?void 0:q[2]})}),E(_,Q)},$$slots:{default:!0}}),_=>r()[1]=_,()=>{var _;return(_=r())==null?void 0:_[1]})}),E(T,C)},at=T=>{var C=w();const W=j(()=>t.constructors[1]);var Y=O(C);D(Y,()=>h(W),(G,J)=>{I(J(G,{get data(){return n()},get form(){return t.form}}),_=>r()[1]=_,()=>{var _;return(_=r())==null?void 0:_[1]})}),E(T,C)};F(rt,T=>{t.constructors[2]?T(st):T(at,!1)})}E(m,M)},$$slots:{default:!0}}),m=>r()[0]=m,()=>{var m;return(m=r())==null?void 0:m[0]})}),E(l,g)},v=l=>{var g=w();const x=j(()=>t.constructors[0]);var S=O(g);D(S,()=>h(x),(k,L)=>{I(L(k,{get data(){return i()},get form(){return t.form}}),m=>r()[0]=m,()=>{var m;return(m=r())==null?void 0:m[0]})}),E(l,g)};F(V,l=>{t.constructors[1]?l(K):l(v,!1)})}var b=Tt(V,2);{var A=l=>{var g=Jt(),x=xt(g);{var S=k=>{var L=Bt();Ct(()=>Vt(L,h(u))),E(k,L)};F(x,k=>{h(s)&&k(S)})}St(g),E(l,g)};F(b,l=>{h(a)&&l(A)})}E(e,P),wt()}const ae=Ut(zt),ne=[()=>R(()=>import("../nodes/0.TM31_xWN.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]),import.meta.url),()=>R(()=>import("../nodes/1.Dz1rKZ6u.js"),__vite__mapDeps([19,1,11,3,2,14,4,15,17,6,7,8,9,10]),import.meta.url),()=>R(()=>import("../nodes/2.BbSkLEKb.js"),__vite__mapDeps([20,21,8,2,3,9,1,4,5]),import.meta.url),()=>R(()=>import("../nodes/3.CbhVzYK4.js"),__vite__mapDeps([22,1,11,3,2,4,12,13,9,14,15,10,23,16,6,7,8]),import.meta.url),()=>R(()=>import("../nodes/4.xbRJbMv0.js"),__vite__mapDeps([24,1,11,3,4,2,25]),import.meta.url),()=>R(()=>import("../nodes/5.eDU4ZueR.js"),__vite__mapDeps([26,1,11,3]),import.meta.url),()=>R(()=>import("../nodes/6.DRPXNSvZ.js"),__vite__mapDeps([27,1,11,3,2,4,12,13,9,14,15,10,21,8,23,16,17,6,7]),import.meta.url),()=>R(()=>import("../nodes/7.CRRk_T3q.js"),__vite__mapDeps([28,1,2,3,14,4,13,9,12,11,15,10,21,8]),import.meta.url)],oe=[],ie={"/":[3],"/about":[4],"/career":[5],"/projects":[6,[2]],"/projects/[slug]":[7,[2]]},Ht={handleError:({error:e})=>{console.error(e)},reroute:()=>{},transport:{}},Kt=Object.fromEntries(Object.entries(Ht.transport).map(([e,t])=>[e,t.decode])),ce=!1,ue=(e,t)=>Kt[e](t);export{ue as decode,Kt as decoders,ie as dictionary,ce as hash,Ht as hooks,se as matchers,ne as nodes,ae as root,oe as server_loads};
