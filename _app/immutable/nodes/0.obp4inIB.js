import"../chunks/disclose-version.Bg9kRutz.js";import{A as ie,E as V,J as se,a1 as C,av as oe,B as ne,L as ce,aJ as le,aK as de,al as Z,e as fe,w as q,aL as ve,a6 as ue,aM as pe,a3 as B,W as R,a4 as _e,am as he,a2 as me,p as ee,a as te,c as x,r as g,i as m,s as S,t as L,k as O,q as J,aq as K,f as ge}from"../chunks/index-client.DIM_p7Le.js";import{l as we,o as be,w as ae,a as k,t as z,s as U}from"../chunks/render.B5vJge2G.js";import{p as xe}from"../chunks/index.BxKr0xwg.js";import"../chunks/legacy.kkaBD5aU.js";import{e as X,I as W,a as Y,i as D,s as I,t as ye,c as $e}from"../chunks/Icon.Bt68gqSq.js";import{b as M}from"../chunks/entry.BPJBbGqb.js";import{i as G,a as H}from"../chunks/props.B3jVO84Q.js";function Fe(t,e,...a){var i=t,s=C,r;ie(()=>{s!==(s=e())&&(r&&(oe(r),r=null),r=se(()=>s(i,...a)))},V),ne&&(i=ce)}const Te=()=>performance.now(),F={tick:t=>requestAnimationFrame(t),now:()=>Te(),tasks:new Set};function re(){const t=F.now();F.tasks.forEach(e=>{e.c(t)||(F.tasks.delete(e),e.f())}),F.tasks.size!==0&&F.tick(re)}function Ee(t){let e;return F.tasks.size===0&&F.tick(re),{promise:new Promise(a=>{F.tasks.add(e={c:t,f:a})}),abort(){F.tasks.delete(e)}}}function N(t,e){t.dispatchEvent(new CustomEvent(e))}function ke(t){if(t==="float")return"cssFloat";if(t==="offset")return"cssOffset";if(t.startsWith("--"))return t;const e=t.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(a=>a[0].toUpperCase()+a.slice(1)).join("")}function Q(t){const e={},a=t.split(";");for(const i of a){const[s,r]=i.split(":");if(!s||r===void 0)break;const c=ke(s.trim());e[c]=r.trim()}return e}const ze=t=>t;function je(t,e,a,i){var s=(t&pe)!==0,r="both",c,_=e.inert,f,l;function o(){var n=_e,h=q;B(null),R(null);try{return c??(c=a()(e,(i==null?void 0:i())??{},{direction:r}))}finally{B(n),R(h)}}var v={is_global:s,in(){e.inert=_,N(e,"introstart"),f=P(e,o(),l,1,()=>{N(e,"introend"),f==null||f.abort(),f=c=void 0})},out(n){e.inert=!0,N(e,"outrostart"),l=P(e,o(),f,0,()=>{N(e,"outroend"),n==null||n()})},stop:()=>{f==null||f.abort(),l==null||l.abort()}},p=q;if((p.transitions??(p.transitions=[])).push(v),we){var y=s;if(!y){for(var u=p.parent;u&&u.f&V;)for(;(u=u.parent)&&!(u.f&le););y=!u||(u.f&de)!==0}y&&Z(()=>{fe(()=>v.in())})}}function P(t,e,a,i,s){var r=i===1;if(ve(e)){var c,_=!1;return ue(()=>{if(!_){var h=e({direction:r?"in":"out"});c=P(t,h,a,i,s)}}),{abort:()=>{_=!0,c==null||c.abort()},deactivate:()=>c.deactivate(),reset:()=>c.reset(),t:()=>c.t()}}if(a==null||a.deactivate(),!(e!=null&&e.duration))return s(),{abort:C,deactivate:C,reset:C,t:()=>i};const{delay:f=0,css:l,tick:o,easing:v=ze}=e;var p=[];if(r&&a===void 0&&(o&&o(0,1),l)){var y=Q(l(0,1));p.push(y,y)}var u=()=>1-i,n=t.animate(p,{duration:f});return n.onfinish=()=>{var h=(a==null?void 0:a.t())??1-i;a==null||a.abort();var d=i-h,T=e.duration*Math.abs(d),w=[];if(T>0){if(l)for(var A=Math.ceil(T/16.666666666666668),b=0;b<=A;b+=1){var $=h+d*v(b/A),j=l($,1-$);w.push(Q(j))}u=()=>{var E=n.currentTime;return h+d*v(E/T)},o&&Ee(()=>{if(n.playState!=="running")return!1;var E=u();return o(E,1-E),!0})}n=t.animate(w,{duration:T,fill:"forwards"}),n.onfinish=()=>{u=()=>i,o==null||o(i,1-i),s()}},{abort:()=>{n&&(n.cancel(),n.effect=null,n.onfinish=C)},deactivate:()=>{s=C},reset:()=>{i===0&&(o==null||o(1,0))},t:()=>u()}}function Ae(t,e,a=e){var i=t==="x",s=()=>ae(()=>{r=!0,clearTimeout(c),c=setTimeout(_,100),a(window[i?"scrollX":"scrollY"])});addEventListener("scroll",s,{passive:!0});var r=!1,c,_=()=>{r=!1},f=!0;he(()=>{var l=e();f?f=!1:!r&&l!=null&&(r=!0,clearTimeout(c),scrollTo(window.scrollX,l),c=setTimeout(_,100))}),Z(s),me(()=>{removeEventListener("scroll",s)})}function Ce(t,e){be(window,["resize"],()=>ae(()=>e(window[t])))}const Se=!0,Ne="always",tt=Object.freeze(Object.defineProperty({__proto__:null,prerender:Se,trailingSlash:Ne},Symbol.toStringTag,{value:"Module"}));function Le(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function Oe(t){const e=t-1;return e*e*e+1}function Me(t,{delay:e=0,duration:a=400,easing:i=Oe,axis:s="y"}={}){const r=getComputedStyle(t),c=+r.opacity,_=s==="y"?"height":"width",f=parseFloat(r[_]),l=s==="y"?["top","bottom"]:["left","right"],o=l.map(d=>`${d[0].toUpperCase()}${d.slice(1)}`),v=parseFloat(r[`padding${o[0]}`]),p=parseFloat(r[`padding${o[1]}`]),y=parseFloat(r[`margin${o[0]}`]),u=parseFloat(r[`margin${o[1]}`]),n=parseFloat(r[`border${o[0]}Width`]),h=parseFloat(r[`border${o[1]}Width`]);return{delay:e,duration:a,easing:i,css:d=>`overflow: hidden;opacity: ${Math.min(d*20,1)*c};${_}: ${d*f}px;padding-${l[0]}: ${d*v}px;padding-${l[1]}: ${d*p}px;margin-${l[0]}: ${d*y}px;margin-${l[1]}: ${d*u}px;border-${l[0]}-width: ${d*n}px;border-${l[1]}-width: ${d*h}px;`}}var We=z('<p class="bg-accent flex items-center h-9 rounded-r-md text-white"><span class="px-3"> </span></p>'),Ie=z('<a class="flex items-center text-white svelte-1pd13z2"><div class="flex items-center justify-center whitespace-nowrap h-9 w-9 rounded-md bg-secondary"><!></div> <!></a>'),Pe=z('<div class="flex gap-3 items-center"></div>'),qe=z('<a><div><!> <p class="text-xs font-semibold"> </p></div></a>'),Be=z('<div class="z-50 fixed bottom-0 left-0 right-0 h-20 bg-accent border-border border-t px-4 py-4 grid grid-cols-4 grid-rows-1 gap-0.5 place-items-center"></div>'),Re=z('<nav class="text-white ml-auto"><!></nav>');function Je(t,e){ee(e,!0);const a=v=>{var p=Pe();X(p,21,()=>r,D,(u,n)=>{var h=Ie(),d=x(h),T=x(d);W(T,{get icon(){return m(n).icon},width:"16",height:"16"}),g(d);var w=S(d,2);{var A=b=>{var $=We(),j=x($),E=x(j,!0);g(j),g($),L(()=>U(E,m(n).page)),je(3,$,()=>Me,()=>({axis:"x",duration:300,easing:Le})),k(b,$)};G(w,b=>{c(m(n).path)&&b(A)})}g(h),L(()=>Y(h,"href",M+m(n).path)),k(u,h)}),g(p),k(v,p)},i=v=>{var p=Be();X(p,21,()=>r,D,(u,n)=>{let h=()=>m(n).page,d=()=>m(n).path,T=()=>m(n).icon;var w=qe();I(w,"grid place-items-center  rounded-md h-14 w-full transition-colors duration-300 svelte-1pd13z2");const A=O(()=>c(d()));var b=x(w);I(b,"flex flex-col items-center justify-center gap-1");var $=x(b);W($,{get icon(){return T()}});var j=S($,2),E=x(j,!0);g(j),g(b),g(w),L(()=>{Y(w,"href",M+d()),ye(w,"active",m(A)),U(E,h())}),k(u,w)}),g(p),k(v,p)};let s=O(()=>M+xe.url.pathname);const r=[{page:"Explore",path:"/",icon:"lucide:compass"},{page:"Projects",path:"/projects",icon:"lucide:blocks"},{page:"Career",path:"/career",icon:"lucide:briefcase"},{page:"About",path:"/about",icon:"lucide:user"}];function c(v){return v===m(s)}var _=Re(),f=x(_);{var l=v=>{a(v)},o=v=>{i(v)};G(f,v=>{e.mobile?v(o,!1):v(l)})}g(_),k(t,_),te()}var Ke=z('<header><div class="content flex justify-start items-center gap-4"><div class="size-10 grid place-items-center">N</div> <div class="leading-5 transition-all duration-500 min-w-max opacity-100 h-full flex justify-center flex-col"><h1 class="font-semibold text-white">Noel Aczel</h1> <h3 class="text-text font-semibold text-xs">Developer/Security</h3></div> <!> <a href="#" class="flex items-center justify-center whitespace-nowrap h-9 w-9 rounded-md text-white bg-secondary"><!></a></div></header>');function Ue(t){let e=K(0),a=K(0),i=O(()=>m(e)>0&&m(a)<900);var s=Ke(),r=x(s),c=S(x(r),4),_=O(()=>m(a)<900);Je(c,{get mobile(){return m(_)}});var f=S(c,2),l=x(f);W(l,{icon:"lucide:send",width:"16",height:"16"}),g(f),g(r),g(s),L(()=>I(s,$e(m(i)?"minimize":""),"svelte-1bbixoh")),Ae("y",()=>m(e),o=>J(e,H(o))),Ce("outerWidth",o=>J(a,H(o))),k(t,s)}var Xe=z("<!> <!>",1);function at(t,e){ee(e,!0);var a=Xe(),i=ge(a);Ue(i);var s=S(i,2);Fe(s,()=>e.children),k(t,a),te()}export{at as component,tt as universal};