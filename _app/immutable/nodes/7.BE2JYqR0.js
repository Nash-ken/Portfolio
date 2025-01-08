import"../chunks/disclose-version.Bg9kRutz.js";import{p as ee,t as l,a as te,s as r,c as e,r as t,w as V,i as k}from"../chunks/utils.cr9LTUxf.js";import{s as n}from"../chunks/render.BOHAeo-T.js";import{i as $}from"../chunks/props.BJoLtm2o.js";import{s as S,e as C,I as q,i as P}from"../chunks/Icon.BvxM5jLI.js";import{a as c,t as v}from"../chunks/template.okVCGe4B.js";import{g as re}from"../chunks/projects.ZFVnRDtm.js";import{b as ie}from"../chunks/paths.yE9OuoEk.js";const oe=({params:f})=>{const{slug:x}=f;return{id:x}},he=Object.freeze(Object.defineProperty({__proto__:null,load:oe},Symbol.toStringTag,{value:"Module"}));var ae=v('<div class="flex gap-1"> </div>'),se=v('<a class="block w-full" target="_blank"><button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary border-borderalt border shadow hover:opacity-[0.64] transition-all duration-300 h-9 px-4 py-2 w-full">Preview</button></a>'),de=v('<a class="block w-full" target="_blank"><button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary border-primary border shadow-sm hover:bg-secondary/80 transition-all duration-300 h-9 px-4 py-2 w-full">Source</button></a>'),le=v('<div class="flex gap-3 border-l-2 border-primary px-3"><p class="text-white"></p> <p> </p></div>'),ne=v('<div class="flex gap-3 px-3 border-l-2 border-primary"><p class="text-white"></p> <p> </p></div>'),ce=v('<div class="content pb-24 pt-6 flex flex-col gap-4"><a class="text-white">&leftarrow; All Projects</a> <h3 class="text-4xl lg:text-5xl text-white font-semibold"> </h3> <p class="text-text font-medium"> </p> <div class="flex text-sm gap-1 font-semibold"><p></p> <!></div> <div class="w-full grid place-items-center aspect-video overflow-hidden rounded-md relative h-96 border-border border"><img src="" alt="Coming Soon"></div> <div class="bg-accent border border-border rounded-md p-6 flex flex-col desktop:flex-row w-full desktop:justify-between items-center desktop:gap-0 gap-4"><div class="w-full"><p class="text-sm text-white">Preview & Source</p> <p class="text-text font-medium text-xs">Want to see the Project and how it was made?</p></div> <div class="flex flex-col text-white w-full desktop:flex-row items-center gap-2 desktop:gap-3"><!> <!></div></div> <p class="text-white"><strong>Challenge</strong></p> <!> <p class="text-white"><strong>Solution</strong></p> <!> <div class="flex flex-col gap-1 mt-3"><p class="text-white"><strong>Outcome</strong></p> <p class="text-text"> </p></div> <div class="grid grid-cols-1 desktop:grid-cols-2 gap-6 mt-6"><div class="rounded-xl border border-border bg-accent text-text shadow w-full"><div class="p-6 space-y-6 relative overflow-hidden z-20"><div class="size-10 rounded-full bg-primary border border-border text-white flex items-center justify-center"><!></div> <div><h3 class="font-medium text-lg text-white">Experience</h3> <p class=" text-text font-medium text-xs">View my Career History.</p></div> <a href="/career" class="inline-flex items-center justify-center whitespace-nowrap font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary border-borderalt border text-white shadow hover:opacity-[0.64] transition-all duration-300 h-8 rounded-md px-3 text-xs">Experience</a></div></div> <div class="rounded-xl border border-border bg-accent text-text shadow w-full"><div class="p-6 space-y-6 relative overflow-hidden z-20"><div class="size-10 rounded-full bg-primary border border-border text-white flex items-center justify-center"><!></div> <div><h3 class="font-medium text-lg text-white">About Me</h3> <p class=" text-text font-medium text-xs">Want to know more about me?</p></div> <a href="/about" class="inline-flex items-center justify-center whitespace-nowrap font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary border-borderalt border text-white shadow hover:opacity-[0.64] transition-all duration-300 h-8 rounded-md px-3 text-xs">About</a></div></div></div></div>');function we(f,x){ee(x,!0);let o=re(x.data.id);const F=new Date(o.date).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"});var b=ce(),z=e(b);S(z,"href",`${ie}/projects`);var m=r(z,2),J=e(m,!0);t(m);var g=r(m,2),K=e(g,!0);t(g);var h=r(g,2),A=e(h);A.textContent=F;var N=r(A,2);C(N,17,()=>o.tools,P,(i,a)=>{var d=ae(),s=e(d);t(d),l(()=>n(s,`• 
        ${k(a)??""}`)),c(i,d)}),t(h);var w=r(h,4),D=r(e(w),2),O=e(D);{var Q=i=>{var a=se();l(()=>S(a,"href",o.preview)),c(i,a)};$(O,i=>{o.preview&&i(Q)})}var R=r(O,2);{var U=i=>{var a=de();l(()=>S(a,"href",o.source)),c(i,a)};$(R,i=>{o.source&&i(U)})}t(D),t(w);var E=r(w,4);C(E,17,()=>o.challenges,P,(i,a,d)=>{var s=le(),p=e(s);p.textContent=d+1;var u=r(p,2),j=e(u,!0);t(u),t(s),l(()=>n(j,k(a))),c(i,s)});var I=r(E,4);C(I,17,()=>o.solutions,P,(i,a,d)=>{var s=ne(),p=e(s);p.textContent=d+1;var u=r(p,2),j=e(u,!0);t(u),t(s),l(()=>n(j,k(a))),c(i,s)});var _=r(I,2),M=r(e(_),2),X=e(M,!0);t(M),t(_);var W=r(_,2),y=e(W),B=e(y),G=e(B),Y=e(G);q(Y,{icon:"lucide:briefcase"}),t(G),V(4),t(B),t(y);var H=r(y,2),L=e(H),T=e(L),Z=e(T);q(Z,{icon:"lucide:user"}),t(T),V(4),t(L),t(H),t(W),t(b),l(()=>{n(J,o.name),n(K,o.description),n(X,o.outcome)}),c(f,b),te()}export{we as component,he as universal};
