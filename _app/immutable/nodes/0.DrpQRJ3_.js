import"../chunks/disclose-version.Bg9kRutz.js";import{A as re,E as Q,J as ie,a1 as C,av as se,B as oe,L as ne,aJ as ce,aK as de,al as V,e as le,w as P,aL as ve,a6 as fe,aM as ue,a3 as q,W as B,a4 as pe,am as _e,a2 as he,p as Z,a as ee,c as x,r as g,i as m,s as N,t as L,k as O,q as R,aq as J,f as me}from"../chunks/index-client.DIM_p7Le.js";import{l as ge,o as we,w as te,a as k,t as z,s as K}from"../chunks/render.B5vJge2G.js";import{p as be}from"../chunks/index.BorrR6Tk.js";import"../chunks/legacy.kkaBD5aU.js";import{e as U,I as M,a as X,i as Y,s as W,t as xe,c as ye}from"../chunks/Icon.Bt68gqSq.js";import{i as D,a as G}from"../chunks/props.B3jVO84Q.js";function $e(t,e,...a){var i=t,s=C,r;re(()=>{s!==(s=e())&&(r&&(se(r),r=null),r=ie(()=>s(i,...a)))},Q),oe&&(i=ne)}const Fe=()=>performance.now(),F={tick:t=>requestAnimationFrame(t),now:()=>Fe(),tasks:new Set};function ae(){const t=F.now();F.tasks.forEach(e=>{e.c(t)||(F.tasks.delete(e),e.f())}),F.tasks.size!==0&&F.tick(ae)}function Te(t){let e;return F.tasks.size===0&&F.tick(ae),{promise:new Promise(a=>{F.tasks.add(e={c:t,f:a})}),abort(){F.tasks.delete(e)}}}function S(t,e){t.dispatchEvent(new CustomEvent(e))}function Ee(t){if(t==="float")return"cssFloat";if(t==="offset")return"cssOffset";if(t.startsWith("--"))return t;const e=t.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(a=>a[0].toUpperCase()+a.slice(1)).join("")}function H(t){const e={},a=t.split(";");for(const i of a){const[s,r]=i.split(":");if(!s||r===void 0)break;const c=Ee(s.trim());e[c]=r.trim()}return e}const ke=t=>t;function ze(t,e,a,i){var s=(t&ue)!==0,r="both",c,_=e.inert,v,d;function o(){var n=pe,h=P;q(null),B(null);try{return c??(c=a()(e,(i==null?void 0:i())??{},{direction:r}))}finally{q(n),B(h)}}var f={is_global:s,in(){e.inert=_,S(e,"introstart"),v=I(e,o(),d,1,()=>{S(e,"introend"),v==null||v.abort(),v=c=void 0})},out(n){e.inert=!0,S(e,"outrostart"),d=I(e,o(),v,0,()=>{S(e,"outroend"),n==null||n()})},stop:()=>{v==null||v.abort(),d==null||d.abort()}},p=P;if((p.transitions??(p.transitions=[])).push(f),ge){var y=s;if(!y){for(var u=p.parent;u&&u.f&Q;)for(;(u=u.parent)&&!(u.f&ce););y=!u||(u.f&de)!==0}y&&V(()=>{le(()=>f.in())})}}function I(t,e,a,i,s){var r=i===1;if(ve(e)){var c,_=!1;return fe(()=>{if(!_){var h=e({direction:r?"in":"out"});c=I(t,h,a,i,s)}}),{abort:()=>{_=!0,c==null||c.abort()},deactivate:()=>c.deactivate(),reset:()=>c.reset(),t:()=>c.t()}}if(a==null||a.deactivate(),!(e!=null&&e.duration))return s(),{abort:C,deactivate:C,reset:C,t:()=>i};const{delay:v=0,css:d,tick:o,easing:f=ke}=e;var p=[];if(r&&a===void 0&&(o&&o(0,1),d)){var y=H(d(0,1));p.push(y,y)}var u=()=>1-i,n=t.animate(p,{duration:v});return n.onfinish=()=>{var h=(a==null?void 0:a.t())??1-i;a==null||a.abort();var l=i-h,T=e.duration*Math.abs(l),w=[];if(T>0){if(d)for(var A=Math.ceil(T/16.666666666666668),b=0;b<=A;b+=1){var $=h+l*f(b/A),j=d($,1-$);w.push(H(j))}u=()=>{var E=n.currentTime;return h+l*f(E/T)},o&&Te(()=>{if(n.playState!=="running")return!1;var E=u();return o(E,1-E),!0})}n=t.animate(w,{duration:T,fill:"forwards"}),n.onfinish=()=>{u=()=>i,o==null||o(i,1-i),s()}},{abort:()=>{n&&(n.cancel(),n.effect=null,n.onfinish=C)},deactivate:()=>{s=C},reset:()=>{i===0&&(o==null||o(1,0))},t:()=>u()}}function je(t,e,a=e){var i=t==="x",s=()=>te(()=>{r=!0,clearTimeout(c),c=setTimeout(_,100),a(window[i?"scrollX":"scrollY"])});addEventListener("scroll",s,{passive:!0});var r=!1,c,_=()=>{r=!1},v=!0;_e(()=>{var d=e();v?v=!1:!r&&d!=null&&(r=!0,clearTimeout(c),scrollTo(window.scrollX,d),c=setTimeout(_,100))}),V(s),he(()=>{removeEventListener("scroll",s)})}function Ae(t,e){we(window,["resize"],()=>te(()=>e(window[t])))}const Ce=!0,Ve=Object.freeze(Object.defineProperty({__proto__:null,prerender:Ce},Symbol.toStringTag,{value:"Module"}));function Ne(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function Se(t){const e=t-1;return e*e*e+1}function Le(t,{delay:e=0,duration:a=400,easing:i=Se,axis:s="y"}={}){const r=getComputedStyle(t),c=+r.opacity,_=s==="y"?"height":"width",v=parseFloat(r[_]),d=s==="y"?["top","bottom"]:["left","right"],o=d.map(l=>`${l[0].toUpperCase()}${l.slice(1)}`),f=parseFloat(r[`padding${o[0]}`]),p=parseFloat(r[`padding${o[1]}`]),y=parseFloat(r[`margin${o[0]}`]),u=parseFloat(r[`margin${o[1]}`]),n=parseFloat(r[`border${o[0]}Width`]),h=parseFloat(r[`border${o[1]}Width`]);return{delay:e,duration:a,easing:i,css:l=>`overflow: hidden;opacity: ${Math.min(l*20,1)*c};${_}: ${l*v}px;padding-${d[0]}: ${l*f}px;padding-${d[1]}: ${l*p}px;margin-${d[0]}: ${l*y}px;margin-${d[1]}: ${l*u}px;border-${d[0]}-width: ${l*n}px;border-${d[1]}-width: ${l*h}px;`}}var Oe=z('<p class="bg-accent flex items-center h-9 rounded-r-md text-white"><span class="px-3"> </span></p>'),Me=z('<a class="flex items-center text-white svelte-1pd13z2"><div class="flex items-center justify-center whitespace-nowrap h-9 w-9 rounded-md bg-secondary"><!></div> <!></a>'),We=z('<div class="flex gap-3 items-center"></div>'),Ie=z('<a><div><!> <p class="text-xs font-semibold"> </p></div></a>'),Pe=z('<div class="z-50 fixed bottom-0 left-0 right-0 h-20 bg-accent border-border border-t px-4 py-4 grid grid-cols-4 grid-rows-1 gap-0.5 place-items-center"></div>'),qe=z('<nav class="text-white ml-auto"><!></nav>');function Be(t,e){Z(e,!0);const a=f=>{var p=We();U(p,21,()=>r,Y,(u,n)=>{var h=Me(),l=x(h),T=x(l);M(T,{get icon(){return m(n).icon},width:"16",height:"16"}),g(l);var w=N(l,2);{var A=b=>{var $=Oe(),j=x($),E=x(j,!0);g(j),g($),L(()=>K(E,m(n).page)),ze(3,$,()=>Le,()=>({axis:"x",duration:300,easing:Ne})),k(b,$)};D(w,b=>{c(m(n).path)&&b(A)})}g(h),L(()=>X(h,"href",m(n).path)),k(u,h)}),g(p),k(f,p)},i=f=>{var p=Pe();U(p,21,()=>r,Y,(u,n)=>{let h=()=>m(n).page,l=()=>m(n).path,T=()=>m(n).icon;var w=Ie();W(w,"grid place-items-center  rounded-md h-14 w-full transition-colors duration-300 svelte-1pd13z2");const A=O(()=>c(l()));var b=x(w);W(b,"flex flex-col items-center justify-center gap-1");var $=x(b);M($,{get icon(){return T()}});var j=N($,2),E=x(j,!0);g(j),g(b),g(w),L(()=>{X(w,"href",l()),xe(w,"active",m(A)),K(E,h())}),k(u,w)}),g(p),k(f,p)};let s=O(()=>be.url.pathname);const r=[{page:"Explore",path:"/",icon:"lucide:compass"},{page:"Projects",path:"/projects",icon:"lucide:blocks"},{page:"Career",path:"/career",icon:"lucide:briefcase"},{page:"About",path:"/about",icon:"lucide:user"}];function c(f){return f===m(s)}var _=qe(),v=x(_);{var d=f=>{a(f)},o=f=>{i(f)};D(v,f=>{e.mobile?f(o,!1):f(d)})}g(_),k(t,_),ee()}var Re=z('<header><div class="content flex justify-start items-center gap-4"><div class="size-10 grid place-items-center">N</div> <div class="leading-5 transition-all duration-500 min-w-max opacity-100 h-full flex justify-center flex-col"><h1 class="font-semibold text-white">Noel Aczel</h1> <h3 class="text-text font-semibold text-xs">Developer/Security</h3></div> <!> <a href="#" class="flex items-center justify-center whitespace-nowrap h-9 w-9 rounded-md text-white bg-secondary"><!></a></div></header>');function Je(t){let e=J(0),a=J(0),i=O(()=>m(e)>0&&m(a)<900);var s=Re(),r=x(s),c=N(x(r),4),_=O(()=>m(a)<900);Be(c,{get mobile(){return m(_)}});var v=N(c,2),d=x(v);M(d,{icon:"lucide:send",width:"16",height:"16"}),g(v),g(r),g(s),L(()=>W(s,ye(m(i)?"minimize":""),"svelte-1bbixoh")),je("y",()=>m(e),o=>R(e,G(o))),Ae("outerWidth",o=>R(a,G(o))),k(t,s)}var Ke=z("<!> <!>",1);function Ze(t,e){Z(e,!0);var a=Ke(),i=me(a);Je(i);var s=N(i,2);$e(s,()=>e.children),k(t,a),ee()}export{Ze as component,Ve as universal};
