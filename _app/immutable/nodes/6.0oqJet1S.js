import"../chunks/disclose-version.Bg9kRutz.js";import"../chunks/legacy.kkaBD5aU.js";import{p as b,c as a,s as m,r as s,t as u,a as h,f as j,i as _}from"../chunks/utils.BR-QKrHv.js";import{a as v,t as x}from"../chunks/template.DixT9Ian.js";import{s as d,e as w,i as P}from"../chunks/Icon.D0vMqo31.js";import{s as y,a as k}from"../chunks/props.BulB88fb.js";import{p as z}from"../chunks/projects.BN6JL8La.js";import"../chunks/Button.DFkYfg0B.js";import{s as n}from"../chunks/render.DdPa8rwS.js";import{b as S}from"../chunks/entry.6FWxrjhg.js";import{p as q}from"../chunks/index.DqrPpDFU.js";var A=x('<a class="flex flex-col h-64 rounded-lg border border-border overflow-hidden"><div class="overflow-hidden relative flex-grow flex items-center justify-center"><img class="flex-grow h-full w-full object-cover"> <div class="absolute z-10 bottom-3 left-3 px-3 py-1 border border-border rounded-lg"> </div></div> <div class="basis-1/3 bg-accent flex items-center px-6"><p class="text-text-muted font-semibold"> </p></div></a>');function B(c,t){b(t,!0);var e=A(),r=a(e),o=a(r),i=m(o,2),l=a(i,!0);s(i),s(r);var p=m(r,2),f=a(p),g=a(f,!0);s(f),s(p),s(e),u(()=>{d(e,"href",`${S}${q.url.pathname}/${t.project.id}`),d(o,"src",t.project.image),d(o,"alt",t.project.id),n(l,t.project.tools[0]),n(g,t.project.name)}),v(c,e),h()}var C=x('<div class="content flex flex-col gap-1 mt-6"><h1 class="text-4xl text-white lg:text-5xl font-semibold">Projects</h1> <p class="text-text">See my creations come to life.</p></div> <div class="content pb-24 mt-12 grid grid-cols-1 gap-6 desktop:grid-cols-2"></div>',1);function O(c){const t=y(),e=()=>k(z,"$Projects",t);var r=C(),o=m(j(r),2);w(o,5,e,P,(i,l)=>{B(i,{get project(){return _(l)}})}),s(o),v(c,r)}export{O as component};
