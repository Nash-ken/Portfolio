import{ae as Re,A as ot,b as $e,au as He,h as T,G as $,F as X,z as ct,an as ze,P as at,Q as he,R as Y,g as O,av as H,V as Ve,d as re,W as lt,C as ge,aw as se,ax as ve,ay as ie,az as ft,am as ut,aA as dt,e as Qe,B as N,aj as pt,ac as ht,aB as gt,Y as vt,J as ye,aC as yt,ah as qe,ak as mt,ai as bt,aD as _t,O as xt,aE as It,p as wt,aF as kt,aG as Et,f as me,a as Tt,L as be,i as w,aH as K,aI as D,v as St,c as At,r as Ct,t as _e,_ as Ot}from"./utils.BR-QKrHv.js";import"./disclose-version.Bg9kRutz.js";import"./legacy.kkaBD5aU.js";import{b as xe,e as Pt,c as Ie,a as R,n as Lt,t as jt}from"./template.DixT9Ian.js";import{l as Ft,i as we}from"./props.BulB88fb.js";import{i as Nt,c as Mt,d as Dt,n as Rt,a as $t}from"./render.DdPa8rwS.js";import{i as Ht}from"./lifecycle.D4DpwFHI.js";import{o as zt,a as Vt,c as Qt}from"./index-client.bjde9Q4U.js";function qt(e,t){if(t){const n=document.body;e.autofocus=!0,Re(()=>{document.activeElement===n&&e.focus()})}}function ur(e,t){return t}function Bt(e,t,n,s){for(var r=[],i=t.length,o=0;o<i;o++)ft(t[o].e,r,!0);var c=i>0&&r.length===0&&n!==null;if(c){var a=n.parentNode;ut(a),a.append(n),s.clear(),C(e,t[0].prev,t[i-1].next)}dt(r,()=>{for(var d=0;d<i;d++){var f=t[d];c||(s.delete(f.k),C(e,f.prev,f.next)),Qe(f.e,!c)}})}function dr(e,t,n,s,r,i=null){var o=e,c={flags:t,items:new Map,first:null},a=(t&He)!==0;if(a){var d=e;o=T?$(N(d)):d.appendChild(ot())}T&&X();var f=null,g=!1;$e(()=>{var y=n(),p=ct(y)?y:y==null?[]:ze(y),m=p.length;if(g&&m===0)return;g=m===0;let v=!1;if(T){var I=o.data===at;I!==(m===0)&&(o=he(),$(o),Y(!1),v=!0)}if(T){for(var u=null,l,_=0;_<m;_++){if(O.nodeType===8&&O.data===pt){o=O,v=!0,Y(!1);break}var x=p[_],b=s(x,_);l=Be(O,c,u,null,x,b,_,r,t),c.items.set(b,l),u=l}m>0&&$(he())}if(!T){var h=ht;Ut(p,c,o,r,t,(h.f&H)!==0,s)}i!==null&&(m===0?f?Ve(f):f=re(()=>i(o)):f!==null&&lt(f,()=>{f=null})),v&&Y(!0),n()}),T&&(o=O)}function Ut(e,t,n,s,r,i,o,c){var le,fe,ue,de;var a=(r&gt)!==0,d=(r&(se|ie))!==0,f=e.length,g=t.items,y=t.first,p=y,m,v=null,I,u=[],l=[],_,x,b,h;if(a)for(h=0;h<f;h+=1)_=e[h],x=o(_,h),b=g.get(x),b!==void 0&&((le=b.a)==null||le.measure(),(I??(I=new Set)).add(b));for(h=0;h<f;h+=1){if(_=e[h],x=o(_,h),b=g.get(x),b===void 0){var k=p?p.e.nodes_start:n;v=Be(k,t,v,v===null?t.first:v.next,_,x,h,s,r),g.set(x,v),u=[],l=[],p=v.next;continue}if(d&&Gt(b,_,h,r),b.e.f&H&&(Ve(b.e),a&&((fe=b.a)==null||fe.unfix(),(I??(I=new Set)).delete(b))),b!==p){if(m!==void 0&&m.has(b)){if(u.length<l.length){var S=l[0],E;v=S.prev;var A=u[0],U=u[u.length-1];for(E=0;E<u.length;E+=1)ke(u[E],S,n);for(E=0;E<l.length;E+=1)m.delete(l[E]);C(t,A.prev,U.next),C(t,v,A),C(t,U,S),p=S,v=U,h-=1,u=[],l=[]}else m.delete(b),ke(b,p,n),C(t,b.prev,b.next),C(t,b,v===null?t.first:v.next),C(t,v,b),v=b;continue}for(u=[],l=[];p!==null&&p.k!==x;)(i||!(p.e.f&H))&&(m??(m=new Set)).add(p),l.push(p),p=p.next;if(p===null)continue;b=p}u.push(b),v=b,p=b.next}if(p!==null||m!==void 0){for(var L=m===void 0?[]:ze(m);p!==null;)(i||!(p.e.f&H))&&L.push(p),p=p.next;var G=L.length;if(G>0){var it=r&He&&f===0?n:null;if(a){for(h=0;h<G;h+=1)(ue=L[h].a)==null||ue.measure();for(h=0;h<G;h+=1)(de=L[h].a)==null||de.fix()}Bt(t,L,it,g)}}a&&Re(()=>{var pe;if(I!==void 0)for(b of I)(pe=b.a)==null||pe.apply()}),ge.first=t.first&&t.first.e,ge.last=v&&v.e}function Gt(e,t,n,s){s&se&&ve(e.v,t),s&ie?ve(e.i,n):e.i=n}function Be(e,t,n,s,r,i,o,c,a,d){var f=(a&se)!==0,g=(a&yt)===0,y=f?g?vt(r):ye(r):r,p=a&ie?ye(o):o,m={i:p,v:y,k:i,a:null,e:null,prev:n,next:s};try{return m.e=re(()=>c(e,y,p),T),m.e.prev=n&&n.e,m.e.next=s&&s.e,n===null?t.first=m:(n.next=m,n.e.next=m.e),s!==null&&(s.prev=m,s.e.prev=m.e),m}finally{}}function ke(e,t,n){for(var s=e.next?e.next.e.nodes_start:n,r=t?t.e.nodes_start:n,i=e.e.nodes_start;i!==s;){var o=qe(i);r.before(i),i=o}}function C(e,t,n){t===null?e.first=n:(t.next=n,t.e.next=n&&n.e),n!==null&&(n.prev=t,n.e.prev=t&&t.e)}function Yt(e,t,n,s,r){var i=e,o="",c;$e(()=>{if(o===(o=t()??"")){T&&X();return}c!==void 0&&(Qe(c),c=void 0),o!==""&&(c=re(()=>{if(T){O.data;for(var a=X(),d=a;a!==null&&(a.nodeType!==8||a.data!=="");)d=a,a=qe(a);if(a===null)throw mt(),bt;xe(O,d),i=$(a);return}var f=o+"";n&&(f=`<svg>${f}</svg>`);var g=Pt(f);if((n||s)&&(g=N(g)),xe(N(g),g.lastChild),n||s)for(;N(g);)i.before(N(g));else i.before(g)}))})}function Ue(e){var t,n,s="";if(typeof e=="string"||typeof e=="number")s+=e;else if(typeof e=="object")if(Array.isArray(e)){var r=e.length;for(t=0;t<r;t++)e[t]&&(n=Ue(e[t]))&&(s&&(s+=" "),s+=n)}else for(n in e)e[n]&&(s&&(s+=" "),s+=n);return s}function Kt(){for(var e,t,n=0,s="",r=arguments.length;n<r;n++)(e=arguments[n])&&(t=Ue(e))&&(s&&(s+=" "),s+=t);return s}function Wt(e){return typeof e=="object"?Kt(e):e??""}function Jt(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Xt(e,t,n,s){var r=e.__attributes??(e.__attributes={});T&&(r[t]=e.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&e.nodeName==="LINK")||r[t]!==(r[t]=n)&&(t==="style"&&"__styles"in e&&(e.__styles={}),t==="loading"&&(e[_t]=n),n==null?e.removeAttribute(t):typeof n!="string"&&Ge(e).includes(t)?e[t]=n:e.setAttribute(t,n))}function Ee(e,t,n,s,r=!1,i=!1,o=!1){var c=t||{},a=e.tagName==="OPTION";for(var d in t)d in n||(n[d]=null);n.class&&(n.class=Wt(n.class));var f=Ge(e),g=e.__attributes??(e.__attributes={});for(const u in n){let l=n[u];if(a&&u==="value"&&l==null){e.value=e.__value="",c[u]=l;continue}var y=c[u];if(l!==y){c[u]=l;var p=u[0]+u[1];if(p!=="$$"){if(p==="on"){const _={},x="$$"+u;let b=u.slice(2);var m=$t(b);if(Nt(b)&&(b=b.slice(0,-7),_.capture=!0),!m&&y){if(l!=null)continue;e.removeEventListener(b,c[x],_),c[x]=null}if(l!=null)if(m)e[`__${b}`]=l,Dt([b]);else{let h=function(k){c[u].call(this,k)};c[x]=Mt(b,e,h,_)}else m&&(e[`__${b}`]=void 0)}else if(u==="style"&&l!=null)e.style.cssText=l+"";else if(u==="autofocus")qt(e,!!l);else if(u==="__value"||u==="value"&&l!=null)e.value=e[u]=e.__value=l;else if(u==="selected"&&a)Jt(e,l);else{var v=u;r||(v=Rt(v));var I=v==="defaultValue"||v==="defaultChecked";if(l==null&&!i&&!I)if(g[u]=null,v==="value"||v==="checked"){let _=e;if(v==="value"){let x=_.defaultValue;_.removeAttribute(v),_.defaultValue=x}else{let x=_.defaultChecked;_.removeAttribute(v),_.defaultChecked=x}}else e.removeAttribute(u);else I||f.includes(v)&&(i||typeof l!="string")?e[v]=l:typeof l!="function"&&(T&&(v==="src"||v==="href"||v==="srcset")||Xt(e,v,l))}u==="style"&&"__styles"in e&&(e.__styles={})}}}return c}var Te=new Map;function Ge(e){var t=Te.get(e.nodeName);if(t)return t;Te.set(e.nodeName,t=[]);for(var n,s=e,r=Element.prototype;r!==s;){n=It(s);for(var i in n)n[i].set&&t.push(i);s=xt(s)}return t}const Ye=/^[a-z0-9]+(-[a-z0-9]+)*$/,q=(e,t,n,s="")=>{const r=e.split(":");if(e.slice(0,1)==="@"){if(r.length<2||r.length>3)return null;s=r.shift().slice(1)}if(r.length>3||!r.length)return null;if(r.length>1){const c=r.pop(),a=r.pop(),d={provider:r.length>0?r[0]:s,prefix:a,name:c};return t&&!z(d)?null:d}const i=r[0],o=i.split("-");if(o.length>1){const c={provider:s,prefix:o.shift(),name:o.join("-")};return t&&!z(c)?null:c}if(n&&s===""){const c={provider:s,prefix:"",name:i};return t&&!z(c,n)?null:c}return null},z=(e,t)=>e?!!((t&&e.prefix===""||e.prefix)&&e.name):!1,Ke=Object.freeze({left:0,top:0,width:16,height:16}),Q=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),B=Object.freeze({...Ke,...Q}),Z=Object.freeze({...B,body:"",hidden:!1});function Zt(e,t){const n={};!e.hFlip!=!t.hFlip&&(n.hFlip=!0),!e.vFlip!=!t.vFlip&&(n.vFlip=!0);const s=((e.rotate||0)+(t.rotate||0))%4;return s&&(n.rotate=s),n}function Se(e,t){const n=Zt(e,t);for(const s in Z)s in Q?s in e&&!(s in n)&&(n[s]=Q[s]):s in t?n[s]=t[s]:s in e&&(n[s]=e[s]);return n}function en(e,t){const n=e.icons,s=e.aliases||Object.create(null),r=Object.create(null);function i(o){if(n[o])return r[o]=[];if(!(o in r)){r[o]=null;const c=s[o]&&s[o].parent,a=c&&i(c);a&&(r[o]=[c].concat(a))}return r[o]}return Object.keys(n).concat(Object.keys(s)).forEach(i),r}function tn(e,t,n){const s=e.icons,r=e.aliases||Object.create(null);let i={};function o(c){i=Se(s[c]||r[c],i)}return o(t),n.forEach(o),Se(e,i)}function We(e,t){const n=[];if(typeof e!="object"||typeof e.icons!="object")return n;e.not_found instanceof Array&&e.not_found.forEach(r=>{t(r,null),n.push(r)});const s=en(e);for(const r in s){const i=s[r];i&&(t(r,tn(e,r,i)),n.push(r))}return n}const nn={provider:"",aliases:{},not_found:{},...Ke};function W(e,t){for(const n in t)if(n in e&&typeof e[n]!=typeof t[n])return!1;return!0}function Je(e){if(typeof e!="object"||e===null)return null;const t=e;if(typeof t.prefix!="string"||!e.icons||typeof e.icons!="object"||!W(e,nn))return null;const n=t.icons;for(const r in n){const i=n[r];if(!r||typeof i.body!="string"||!W(i,Z))return null}const s=t.aliases||Object.create(null);for(const r in s){const i=s[r],o=i.parent;if(!r||typeof o!="string"||!n[o]&&!s[o]||!W(i,Z))return null}return t}const Ae=Object.create(null);function rn(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:new Set}}function P(e,t){const n=Ae[e]||(Ae[e]=Object.create(null));return n[t]||(n[t]=rn(e,t))}function Xe(e,t){return Je(t)?We(t,(n,s)=>{s?e.icons[n]=s:e.missing.add(n)}):[]}function sn(e,t,n){try{if(typeof n.body=="string")return e.icons[t]={...n},!0}catch{}return!1}let M=!1;function Ze(e){return typeof e=="boolean"&&(M=e),M}function on(e){const t=typeof e=="string"?q(e,!0,M):e;if(t){const n=P(t.provider,t.prefix),s=t.name;return n.icons[s]||(n.missing.has(s)?null:void 0)}}function cn(e,t){const n=q(e,!0,M);if(!n)return!1;const s=P(n.provider,n.prefix);return t?sn(s,n.name,t):(s.missing.add(n.name),!0)}function an(e,t){if(typeof e!="object")return!1;if(typeof t!="string"&&(t=e.provider||""),M&&!t&&!e.prefix){let r=!1;return Je(e)&&(e.prefix="",We(e,(i,o)=>{cn(i,o)&&(r=!0)})),r}const n=e.prefix;if(!z({provider:t,prefix:n,name:"a"}))return!1;const s=P(t,n);return!!Xe(s,e)}const et=Object.freeze({width:null,height:null}),tt=Object.freeze({...et,...Q}),ln=/(-?[0-9.]*[0-9]+[0-9.]*)/g,fn=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function Ce(e,t,n){if(t===1)return e;if(n=n||100,typeof e=="number")return Math.ceil(e*t*n)/n;if(typeof e!="string")return e;const s=e.split(ln);if(s===null||!s.length)return e;const r=[];let i=s.shift(),o=fn.test(i);for(;;){if(o){const c=parseFloat(i);isNaN(c)?r.push(i):r.push(Math.ceil(c*t*n)/n)}else r.push(i);if(i=s.shift(),i===void 0)return r.join("");o=!o}}function un(e,t="defs"){let n="";const s=e.indexOf("<"+t);for(;s>=0;){const r=e.indexOf(">",s),i=e.indexOf("</"+t);if(r===-1||i===-1)break;const o=e.indexOf(">",i);if(o===-1)break;n+=e.slice(r+1,i).trim(),e=e.slice(0,s).trim()+e.slice(o+1)}return{defs:n,content:e}}function dn(e,t){return e?"<defs>"+e+"</defs>"+t:t}function pn(e,t,n){const s=un(e);return dn(s.defs,t+s.content+n)}const hn=e=>e==="unset"||e==="undefined"||e==="none";function gn(e,t){const n={...B,...e},s={...tt,...t},r={left:n.left,top:n.top,width:n.width,height:n.height};let i=n.body;[n,s].forEach(v=>{const I=[],u=v.hFlip,l=v.vFlip;let _=v.rotate;u?l?_+=2:(I.push("translate("+(r.width+r.left).toString()+" "+(0-r.top).toString()+")"),I.push("scale(-1 1)"),r.top=r.left=0):l&&(I.push("translate("+(0-r.left).toString()+" "+(r.height+r.top).toString()+")"),I.push("scale(1 -1)"),r.top=r.left=0);let x;switch(_<0&&(_-=Math.floor(_/4)*4),_=_%4,_){case 1:x=r.height/2+r.top,I.unshift("rotate(90 "+x.toString()+" "+x.toString()+")");break;case 2:I.unshift("rotate(180 "+(r.width/2+r.left).toString()+" "+(r.height/2+r.top).toString()+")");break;case 3:x=r.width/2+r.left,I.unshift("rotate(-90 "+x.toString()+" "+x.toString()+")");break}_%2===1&&(r.left!==r.top&&(x=r.left,r.left=r.top,r.top=x),r.width!==r.height&&(x=r.width,r.width=r.height,r.height=x)),I.length&&(i=pn(i,'<g transform="'+I.join(" ")+'">',"</g>"))});const o=s.width,c=s.height,a=r.width,d=r.height;let f,g;o===null?(g=c===null?"1em":c==="auto"?d:c,f=Ce(g,a/d)):(f=o==="auto"?a:o,g=c===null?Ce(f,d/a):c==="auto"?d:c);const y={},p=(v,I)=>{hn(I)||(y[v]=I.toString())};p("width",f),p("height",g);const m=[r.left,r.top,a,d];return y.viewBox=m.join(" "),{attributes:y,viewBox:m,body:i}}const vn=/\sid="(\S+)"/g,yn="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let mn=0;function bn(e,t=yn){const n=[];let s;for(;s=vn.exec(e);)n.push(s[1]);if(!n.length)return e;const r="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(i=>{const o=typeof t=="function"?t(i):t+(mn++).toString(),c=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+c+')([")]|\\.[a-z])',"g"),"$1"+o+r+"$3")}),e=e.replace(new RegExp(r,"g"),""),e}const ee=Object.create(null);function _n(e,t){ee[e]=t}function te(e){return ee[e]||ee[""]}function oe(e){let t;if(typeof e.resources=="string")t=[e.resources];else if(t=e.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:e.random===!0,index:e.index||0,dataAfterTimeout:e.dataAfterTimeout!==!1}}const ce=Object.create(null),j=["https://api.simplesvg.com","https://api.unisvg.com"],V=[];for(;j.length>0;)j.length===1||Math.random()>.5?V.push(j.shift()):V.push(j.pop());ce[""]=oe({resources:["https://api.iconify.design"].concat(V)});function xn(e,t){const n=oe(t);return n===null?!1:(ce[e]=n,!0)}function ae(e){return ce[e]}const In=()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}};let Oe=In();function wn(e,t){const n=ae(e);if(!n)return 0;let s;if(!n.maxURL)s=0;else{let r=0;n.resources.forEach(o=>{r=Math.max(r,o.length)});const i=t+".json?icons=";s=n.maxURL-r-n.path.length-i.length}return s}function kn(e){return e===404}const En=(e,t,n)=>{const s=[],r=wn(e,t),i="icons";let o={type:i,provider:e,prefix:t,icons:[]},c=0;return n.forEach((a,d)=>{c+=a.length+1,c>=r&&d>0&&(s.push(o),o={type:i,provider:e,prefix:t,icons:[]},c=a.length),o.icons.push(a)}),s.push(o),s};function Tn(e){if(typeof e=="string"){const t=ae(e);if(t)return t.path}return"/"}const Sn=(e,t,n)=>{if(!Oe){n("abort",424);return}let s=Tn(t.provider);switch(t.type){case"icons":{const i=t.prefix,c=t.icons.join(","),a=new URLSearchParams({icons:c});s+=i+".json?"+a.toString();break}case"custom":{const i=t.uri;s+=i.slice(0,1)==="/"?i.slice(1):i;break}default:n("abort",400);return}let r=503;Oe(e+s).then(i=>{const o=i.status;if(o!==200){setTimeout(()=>{n(kn(o)?"abort":"next",o)});return}return r=501,i.json()}).then(i=>{if(typeof i!="object"||i===null){setTimeout(()=>{i===404?n("abort",i):n("next",r)});return}setTimeout(()=>{n("success",i)})}).catch(()=>{n("next",r)})},An={prepare:En,send:Sn};function Cn(e){const t={loaded:[],missing:[],pending:[]},n=Object.create(null);e.sort((r,i)=>r.provider!==i.provider?r.provider.localeCompare(i.provider):r.prefix!==i.prefix?r.prefix.localeCompare(i.prefix):r.name.localeCompare(i.name));let s={provider:"",prefix:"",name:""};return e.forEach(r=>{if(s.name===r.name&&s.prefix===r.prefix&&s.provider===r.provider)return;s=r;const i=r.provider,o=r.prefix,c=r.name,a=n[i]||(n[i]=Object.create(null)),d=a[o]||(a[o]=P(i,o));let f;c in d.icons?f=t.loaded:o===""||d.missing.has(c)?f=t.missing:f=t.pending;const g={provider:i,prefix:o,name:c};f.push(g)}),t}function nt(e,t){e.forEach(n=>{const s=n.loaderCallbacks;s&&(n.loaderCallbacks=s.filter(r=>r.id!==t))})}function On(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;const t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let n=!1;const s=e.provider,r=e.prefix;t.forEach(i=>{const o=i.icons,c=o.pending.length;o.pending=o.pending.filter(a=>{if(a.prefix!==r)return!0;const d=a.name;if(e.icons[d])o.loaded.push({provider:s,prefix:r,name:d});else if(e.missing.has(d))o.missing.push({provider:s,prefix:r,name:d});else return n=!0,!0;return!1}),o.pending.length!==c&&(n||nt([e],i.id),i.callback(o.loaded.slice(0),o.missing.slice(0),o.pending.slice(0),i.abort))})}))}let Pn=0;function Ln(e,t,n){const s=Pn++,r=nt.bind(null,n,s);if(!t.pending.length)return r;const i={id:s,icons:t,callback:e,abort:r};return n.forEach(o=>{(o.loaderCallbacks||(o.loaderCallbacks=[])).push(i)}),r}function jn(e,t=!0,n=!1){const s=[];return e.forEach(r=>{const i=typeof r=="string"?q(r,t,n):r;i&&s.push(i)}),s}var Fn={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function Nn(e,t,n,s){const r=e.resources.length,i=e.random?Math.floor(Math.random()*r):e.index;let o;if(e.random){let h=e.resources.slice(0);for(o=[];h.length>1;){const k=Math.floor(Math.random()*h.length);o.push(h[k]),h=h.slice(0,k).concat(h.slice(k+1))}o=o.concat(h)}else o=e.resources.slice(i).concat(e.resources.slice(0,i));const c=Date.now();let a="pending",d=0,f,g=null,y=[],p=[];typeof s=="function"&&p.push(s);function m(){g&&(clearTimeout(g),g=null)}function v(){a==="pending"&&(a="aborted"),m(),y.forEach(h=>{h.status==="pending"&&(h.status="aborted")}),y=[]}function I(h,k){k&&(p=[]),typeof h=="function"&&p.push(h)}function u(){return{startTime:c,payload:t,status:a,queriesSent:d,queriesPending:y.length,subscribe:I,abort:v}}function l(){a="failed",p.forEach(h=>{h(void 0,f)})}function _(){y.forEach(h=>{h.status==="pending"&&(h.status="aborted")}),y=[]}function x(h,k,S){const E=k!=="success";switch(y=y.filter(A=>A!==h),a){case"pending":break;case"failed":if(E||!e.dataAfterTimeout)return;break;default:return}if(k==="abort"){f=S,l();return}if(E){f=S,y.length||(o.length?b():l());return}if(m(),_(),!e.random){const A=e.resources.indexOf(h.resource);A!==-1&&A!==e.index&&(e.index=A)}a="completed",p.forEach(A=>{A(S)})}function b(){if(a!=="pending")return;m();const h=o.shift();if(h===void 0){if(y.length){g=setTimeout(()=>{m(),a==="pending"&&(_(),l())},e.timeout);return}l();return}const k={status:"pending",resource:h,callback:(S,E)=>{x(k,S,E)}};y.push(k),d++,g=setTimeout(b,e.rotate),n(h,t,k.callback)}return setTimeout(b),u}function rt(e){const t={...Fn,...e};let n=[];function s(){n=n.filter(c=>c().status==="pending")}function r(c,a,d){const f=Nn(t,c,a,(g,y)=>{s(),d&&d(g,y)});return n.push(f),f}function i(c){return n.find(a=>c(a))||null}return{query:r,find:i,setIndex:c=>{t.index=c},getIndex:()=>t.index,cleanup:s}}function Pe(){}const J=Object.create(null);function Mn(e){if(!J[e]){const t=ae(e);if(!t)return;const n=rt(t),s={config:t,redundancy:n};J[e]=s}return J[e]}function Dn(e,t,n){let s,r;if(typeof e=="string"){const i=te(e);if(!i)return n(void 0,424),Pe;r=i.send;const o=Mn(e);o&&(s=o.redundancy)}else{const i=oe(e);if(i){s=rt(i);const o=e.resources?e.resources[0]:"",c=te(o);c&&(r=c.send)}}return!s||!r?(n(void 0,424),Pe):s.query(t,r,n)().abort}function Le(){}function Rn(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,On(e)}))}function $n(e){const t=[],n=[];return e.forEach(s=>{(s.match(Ye)?t:n).push(s)}),{valid:t,invalid:n}}function F(e,t,n){function s(){const r=e.pendingIcons;t.forEach(i=>{r&&r.delete(i),e.icons[i]||e.missing.add(i)})}if(n&&typeof n=="object")try{if(!Xe(e,n).length){s();return}}catch(r){console.error(r)}s(),Rn(e)}function je(e,t){e instanceof Promise?e.then(n=>{t(n)}).catch(()=>{t(null)}):t(e)}function Hn(e,t){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(t).sort():e.iconsToLoad=t,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{e.iconsQueueFlag=!1;const{provider:n,prefix:s}=e,r=e.iconsToLoad;if(delete e.iconsToLoad,!r||!r.length)return;const i=e.loadIcon;if(e.loadIcons&&(r.length>1||!i)){je(e.loadIcons(r,s,n),f=>{F(e,r,f)});return}if(i){r.forEach(f=>{const g=i(f,s,n);je(g,y=>{const p=y?{prefix:s,icons:{[f]:y}}:null;F(e,[f],p)})});return}const{valid:o,invalid:c}=$n(r);if(c.length&&F(e,c,null),!o.length)return;const a=s.match(Ye)?te(n):null;if(!a){F(e,o,null);return}a.prepare(n,s,o).forEach(f=>{Dn(n,f,g=>{F(e,f.icons,g)})})}))}const zn=(e,t)=>{const n=jn(e,!0,Ze()),s=Cn(n);if(!s.pending.length){let a=!0;return t&&setTimeout(()=>{a&&t(s.loaded,s.missing,s.pending,Le)}),()=>{a=!1}}const r=Object.create(null),i=[];let o,c;return s.pending.forEach(a=>{const{provider:d,prefix:f}=a;if(f===c&&d===o)return;o=d,c=f,i.push(P(d,f));const g=r[d]||(r[d]=Object.create(null));g[f]||(g[f]=[])}),s.pending.forEach(a=>{const{provider:d,prefix:f,name:g}=a,y=P(d,f),p=y.pendingIcons||(y.pendingIcons=new Set);p.has(g)||(p.add(g),r[d][f].push(g))}),i.forEach(a=>{const d=r[a.provider][a.prefix];d.length&&Hn(a,d)}),t?Ln(t,s,i):Le};function Vn(e,t){const n={...e};for(const s in t){const r=t[s],i=typeof r;s in et?(r===null||r&&(i==="string"||i==="number"))&&(n[s]=r):i===typeof n[s]&&(n[s]=s==="rotate"?r%4:r)}return n}const Qn=/[\s,]+/;function qn(e,t){t.split(Qn).forEach(n=>{switch(n.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}function Bn(e,t=0){const n=e.replace(/^-?[0-9.]*/,"");function s(r){for(;r<0;)r+=4;return r%4}if(n===""){const r=parseInt(e);return isNaN(r)?0:s(r)}else if(n!==e){let r=0;switch(n){case"%":r=25;break;case"deg":r=90}if(r){let i=parseFloat(e.slice(0,e.length-n.length));return isNaN(i)?0:(i=i/r,i%1===0?s(i):0)}}return t}function Un(e,t){let n=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const s in t)n+=" "+s+'="'+t[s]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+e+"</svg>"}function Gn(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function Yn(e){return"data:image/svg+xml,"+Gn(e)}function Kn(e){return'url("'+Yn(e)+'")'}const Fe={...tt,inline:!1},Wn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},Jn={display:"inline-block"},ne={"background-color":"currentColor"},st={"background-color":"transparent"},Ne={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},Me={"-webkit-mask":ne,mask:ne,background:st};for(const e in Me){const t=Me[e];for(const n in Ne)t[e+"-"+n]=Ne[n]}function Xn(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}function Zn(e,t){const n=Vn(Fe,t),s=t.mode||"svg",r=s==="svg"?{...Wn}:{};e.body.indexOf("xlink:")===-1&&delete r["xmlns:xlink"];let i=typeof t.style=="string"?t.style:"";for(let u in t){const l=t[u];if(l!==void 0)switch(u){case"icon":case"style":case"onLoad":case"mode":case"ssr":break;case"inline":case"hFlip":case"vFlip":n[u]=l===!0||l==="true"||l===1;break;case"flip":typeof l=="string"&&qn(n,l);break;case"color":i=i+(i.length>0&&i.trim().slice(-1)!==";"?";":"")+"color: "+l+"; ";break;case"rotate":typeof l=="string"?n[u]=Bn(l):typeof l=="number"&&(n[u]=l);break;case"ariaHidden":case"aria-hidden":l!==!0&&l!=="true"&&delete r["aria-hidden"];break;default:if(u.slice(0,3)==="on:")break;Fe[u]===void 0&&(r[u]=l)}}const o=gn(e,n),c=o.attributes;if(n.inline&&(i="vertical-align: -0.125em; "+i),s==="svg"){Object.assign(r,c),i!==""&&(r.style=i);let u=0,l=t.id;return typeof l=="string"&&(l=l.replace(/-/g,"_")),{svg:!0,attributes:r,body:bn(o.body,l?()=>l+"ID"+u++:"iconifySvelte")}}const{body:a,width:d,height:f}=e,g=s==="mask"||(s==="bg"?!1:a.indexOf("currentColor")!==-1),y=Un(a,{...c,width:d+"",height:f+""}),m={"--svg":Kn(y)},v=u=>{const l=c[u];l&&(m[u]=Xn(l))};v("width"),v("height"),Object.assign(m,Jn,g?ne:st);let I="";for(const u in m)I+=u+": "+m[u]+";";return r.style=I+i,{svg:!1,attributes:r}}Ze(!0);_n("",An);if(typeof document<"u"&&typeof window<"u"){const e=window;if(e.IconifyPreload!==void 0){const t=e.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof t=="object"&&t!==null&&(t instanceof Array?t:[t]).forEach(s=>{try{(typeof s!="object"||s===null||s instanceof Array||typeof s.icons!="object"||typeof s.prefix!="string"||!an(s))&&console.error(n)}catch{console.error(n)}})}if(e.IconifyProviders!==void 0){const t=e.IconifyProviders;if(typeof t=="object"&&t!==null)for(let n in t){const s="IconifyProviders["+n+"] is invalid.";try{const r=t[n];if(typeof r!="object"||!r||r.resources===void 0)continue;xn(n,r)||console.error(s)}catch{console.error(s)}}}}function er(e,t,n,s,r){function i(){t.loading&&(t.loading.abort(),t.loading=null)}if(typeof e=="object"&&e!==null&&typeof e.body=="string")return t.name="",i(),{data:{...B,...e}};let o;if(typeof e!="string"||(o=q(e,!1,!0))===null)return i(),null;const c=on(o);if(!c)return n&&(!t.loading||t.loading.name!==e)&&(i(),t.name="",t.loading={name:e,abort:zn([o],s)}),null;i(),t.name!==e&&(t.name=e,r&&!t.destroyed&&r(e));const a=["iconify"];return o.prefix!==""&&a.push("iconify--"+o.prefix),o.provider!==""&&a.push("iconify--"+o.provider),{data:c,classes:a}}function De(e,t){return e?Zn({...B,...e},t):null}var tr=Lt("<svg><!></svg>"),nr=jt("<span></span>");function pr(e,t){const n=Ft(t,["children","$$slots","$$events","$$legacy"]);wt(t,!1);const s=D({name:"",loading:null,destroyed:!1});let r=D(!1),i=D(0),o=D();const c=y=>{typeof n.onLoad=="function"&&n.onLoad(y),Qt()("load",{icon:y})};function a(){Ot(i)}zt(()=>{be(r,!0)}),Vt(()=>{K(s,w(s).destroyed=!0),w(s).loading&&(w(s).loading.abort(),K(s,w(s).loading=null))}),kt(()=>(w(i),St(n),w(r),w(s),w(o),De),()=>{w(i);const y=!!n.ssr||w(r),p=er(n.icon,w(s),y,a,c);be(o,p?De(p.data,n):null),w(o)&&p.classes&&K(o,w(o).attributes.class=(typeof n.class=="string"?n.class+" ":"")+p.classes.join(" "))}),Et(),Ht();var d=Ie(),f=me(d);{var g=y=>{var p=Ie(),m=me(p);{var v=u=>{var l=tr();let _;var x=At(l);Yt(x,()=>w(o).body,!0,!1),Ct(l),_e(()=>_=Ee(l,_,{...w(o).attributes},void 0,!0)),R(u,l)},I=u=>{var l=nr();let _;_e(()=>_=Ee(l,_,{...w(o).attributes})),R(u,l)};we(m,u=>{w(o).svg?u(v):u(I,!1)})}R(y,p)};we(f,y=>{w(o)&&y(g)})}R(e,d),Tt()}export{pr as I,Wt as c,dr as e,Yt as h,ur as i,Xt as s};
