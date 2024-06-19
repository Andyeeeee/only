import{i as X,p as b,g as E,c,a as R,d as Te,b as we,e as tt,f as nt,h as at,j as v,F as ee,u as j,m as T,k as D,l as V,n as q,o as te,t as _,q as B,r as ne,s as st,v as $e,w as lt,x as ae,y as se,z as it,A as Ne,B as Re,C as ot,D as ze,E as rt,G as ut,H as ct,I as Ae,J as dt,K as vt,L as ft,M as mt,N as k,O as gt,P as K,Q as le,R as ht,S as yt,T as bt,U as Ct,V as _t,W as St,X as kt,Y as xt,Z as pe,_ as wt,$ as pt,a0 as Ve,a1 as Vt,a2 as Bt,a3 as It,a4 as Lt,a5 as Pt,a6 as Et,a7 as Tt,a8 as $t,a9 as p,aa as ie,ab as N}from"./index-e7e71963.js";import{m as z}from"./tag-23511644.js";const Nt=["top","bottom"],Rt=["start","end","left","right"];function zt(e,t){let[n,a]=e.split(" ");return a||(a=X(Nt,n)?"start":X(Rt,n)?"top":"center"),{side:Be(n,t),align:Be(a,t)}}function Be(e,t){return e==="start"?t?"right":"left":e==="end"?t?"left":"right":e}const oe=b({border:[Boolean,Number,String]},"border");function re(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:E();return{borderClasses:c(()=>{const a=R(e)?e.value:e.border,s=[];if(a===!0||a==="")s.push(`${t}--border`);else if(typeof a=="string"||a===0)for(const l of String(a).split(" "))s.push(`border-${l}`);return s})}}const At=[null,"default","comfortable","compact"],ue=b({density:{type:String,default:"default",validator:e=>At.includes(e)}},"density");function ce(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:E();return{densityClasses:c(()=>`${t}--density-${e.density}`)}}const de=b({elevation:{type:[Number,String],validator(e){const t=parseInt(e);return!isNaN(t)&&t>=0&&t<=24}}},"elevation");function ve(e){return{elevationClasses:c(()=>{const n=R(e)?e.value:e.elevation,a=[];return n==null||a.push(`elevation-${n}`),a})}}const fe=b({rounded:{type:[Boolean,Number,String],default:void 0},tile:Boolean},"rounded");function me(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:E();return{roundedClasses:c(()=>{const a=R(e)?e.value:e.rounded,s=R(e)?e.value:e.tile,l=[];if(a===!0||a==="")l.push(`${t}--rounded`);else if(typeof a=="string"||a===0)for(const o of String(a).split(" "))l.push(`rounded-${o}`);else(s||a===!1)&&l.push("rounded-0");return l})}}function ge(e){return Te(()=>{const t=[],n={};if(e.value.background)if(we(e.value.background)){if(n.backgroundColor=e.value.background,!e.value.text&&tt(e.value.background)){const a=nt(e.value.background);if(a.a==null||a.a===1){const s=at(a);n.color=s,n.caretColor=s}}}else t.push(`bg-${e.value.background}`);return e.value.text&&(we(e.value.text)?(n.color=e.value.text,n.caretColor=e.value.text):t.push(`text-${e.value.text}`)),{colorClasses:t,colorStyles:n}})}function J(e,t){const n=c(()=>({text:R(e)?e.value:t?e[t]:null})),{colorClasses:a,colorStyles:s}=ge(n);return{textColorClasses:a,textColorStyles:s}}function Mt(e,t){const n=c(()=>({background:R(e)?e.value:t?e[t]:null})),{colorClasses:a,colorStyles:s}=ge(n);return{backgroundColorClasses:a,backgroundColorStyles:s}}const Ot=["elevated","flat","tonal","outlined","text","plain"];function Dt(e,t){return v(ee,null,[e&&v("span",{key:"overlay",class:`${t}__overlay`},null),v("span",{key:"underlay",class:`${t}__underlay`},null)])}const Me=b({color:String,variant:{type:String,default:"elevated",validator:e=>Ot.includes(e)}},"variant");function Gt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:E();const n=c(()=>{const{variant:l}=j(e);return`${t}--variant-${l}`}),{colorClasses:a,colorStyles:s}=ge(c(()=>{const{variant:l,color:o}=j(e);return{[["elevated","flat"].includes(l)?"background":"text"]:o}}));return{colorClasses:a,colorStyles:s,variantClasses:n}}const Oe=b({baseColor:String,divided:Boolean,...oe(),...T(),...ue(),...de(),...fe(),...z(),...D(),...Me()},"VBtnGroup"),Ie=V()({name:"VBtnGroup",props:Oe(),setup(e,t){let{slots:n}=t;const{themeClasses:a}=q(e),{densityClasses:s}=ce(e),{borderClasses:l}=re(e),{elevationClasses:o}=ve(e),{roundedClasses:r}=me(e);te({VBtn:{height:"auto",baseColor:_(e,"baseColor"),color:_(e,"color"),density:_(e,"density"),flat:!0,variant:_(e,"variant")}}),B(()=>v(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},a.value,l.value,s.value,o.value,r.value,e.class],style:e.style},n))}}),De=b({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),Ht=b({value:null,disabled:Boolean,selectedClass:String},"group-item");function Wt(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const a=ne("useGroupItem");if(!a)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const s=st();$e(Symbol.for(`${t.description}:id`),s);const l=lt(t,null);if(!l){if(!n)return l;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`)}const o=_(e,"value"),r=c(()=>!!(l.disabled.value||e.disabled));l.register({id:s,value:o,disabled:r},a),ae(()=>{l.unregister(s)});const u=c(()=>l.isSelected(s)),g=c(()=>l.items.value[0].id===s),C=c(()=>l.items.value[l.items.value.length-1].id===s),m=c(()=>u.value&&[l.selectedClass.value,e.selectedClass]);return se(u,i=>{a.emit("group:selected",{value:i})},{flush:"sync"}),{id:s,isSelected:u,isFirst:g,isLast:C,toggle:()=>l.select(s,!u.value),select:i=>l.select(s,i),selectedClass:m,value:o,disabled:r,group:l}}function Ge(e,t){let n=!1;const a=it([]),s=Ne(e,"modelValue",[],i=>i==null?[]:He(a,rt(i)),i=>{const f=Ut(a,i);return e.multiple?f:f[0]}),l=ne("useGroup");function o(i,f){const h=i,d=Symbol.for(`${t.description}:id`),S=ut(d,l==null?void 0:l.vnode).indexOf(f);j(h.value)==null&&(h.value=S,h.useIndexAsValue=!0),S>-1?a.splice(S,0,h):a.push(h)}function r(i){if(n)return;u();const f=a.findIndex(h=>h.id===i);a.splice(f,1)}function u(){const i=a.find(f=>!f.disabled);i&&e.mandatory==="force"&&!s.value.length&&(s.value=[i.id])}Re(()=>{u()}),ae(()=>{n=!0}),ot(()=>{for(let i=0;i<a.length;i++)a[i].useIndexAsValue&&(a[i].value=i)});function g(i,f){const h=a.find(d=>d.id===i);if(!(f&&(h!=null&&h.disabled)))if(e.multiple){const d=s.value.slice(),y=d.findIndex(I=>I===i),S=~y;if(f=f??!S,S&&e.mandatory&&d.length<=1||!S&&e.max!=null&&d.length+1>e.max)return;y<0&&f?d.push(i):y>=0&&!f&&d.splice(y,1),s.value=d}else{const d=s.value.includes(i);if(e.mandatory&&d)return;s.value=f??!d?[i]:[]}}function C(i){if(e.multiple,s.value.length){const f=s.value[0],h=a.findIndex(S=>S.id===f);let d=(h+i)%a.length,y=a[d];for(;y.disabled&&d!==h;)d=(d+i)%a.length,y=a[d];if(y.disabled)return;s.value=[a[d].id]}else{const f=a.find(h=>!h.disabled);f&&(s.value=[f.id])}}const m={register:o,unregister:r,selected:s,select:g,disabled:_(e,"disabled"),prev:()=>C(a.length-1),next:()=>C(1),isSelected:i=>s.value.includes(i),selectedClass:c(()=>e.selectedClass),items:c(()=>a),getItemIndex:i=>Ft(a,i)};return $e(t,m),m}function Ft(e,t){const n=He(e,[t]);return n.length?e.findIndex(a=>a.id===n[0]):-1}function He(e,t){const n=[];return t.forEach(a=>{const s=e.find(o=>ze(a,o.value)),l=e[a];(s==null?void 0:s.value)!=null?n.push(s.id):l!=null&&n.push(l.id)}),n}function Ut(e,t){const n=[];return t.forEach(a=>{const s=e.findIndex(l=>l.id===a);if(~s){const l=e[s];n.push(l.value!=null?l.value:s)}}),n}const he=Symbol.for("vuetify:v-btn-toggle"),qt=b({...Oe(),...De()},"VBtnToggle");V()({name:"VBtnToggle",props:qt(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const{isSelected:a,next:s,prev:l,select:o,selected:r}=Ge(e,he);return B(()=>{const u=Ie.filterProps(e);return v(Ie,ct({class:["v-btn-toggle",e.class]},u,{style:e.style}),{default:()=>{var g;return[(g=n.default)==null?void 0:g.call(n,{isSelected:a,next:s,prev:l,select:o,selected:r})]}})}),{next:s,prev:l,select:o}}});function We(){const e=Ae(!1);return Re(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:c(()=>e.value?void 0:{transition:"none !important"}),isBooted:dt(e)}}const Yt=b({baseColor:String,bgColor:String,color:String,grow:Boolean,mode:{type:String,validator:e=>!e||["horizontal","shift"].includes(e)},height:{type:[Number,String],default:56},active:{type:Boolean,default:!0},...oe(),...T(),...ue(),...de(),...fe(),...vt({name:"bottom-navigation"}),...z({tag:"header"}),...De({selectedClass:"v-btn--selected"}),...D()},"VBottomNavigation"),Xt=V()({name:"VBottomNavigation",props:Yt(),emits:{"update:active":e=>!0,"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const{themeClasses:a}=ft(),{borderClasses:s}=re(e),{backgroundColorClasses:l,backgroundColorStyles:o}=Mt(_(e,"bgColor")),{densityClasses:r}=ce(e),{elevationClasses:u}=ve(e),{roundedClasses:g}=me(e),{ssrBootStyles:C}=We(),m=c(()=>Number(e.height)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0)),i=Ne(e,"active",e.active),{layoutItemStyles:f,layoutIsReady:h}=mt({id:e.name,order:c(()=>parseInt(e.order,10)),position:c(()=>"bottom"),layoutSize:c(()=>i.value?m.value:0),elementSize:m,active:i,absolute:_(e,"absolute")});return Ge(e,he),te({VBtn:{baseColor:_(e,"baseColor"),color:_(e,"color"),density:_(e,"density"),stacked:c(()=>e.mode!=="horizontal"),variant:"text"}},{scoped:!0}),B(()=>v(e.tag,{class:["v-bottom-navigation",{"v-bottom-navigation--active":i.value,"v-bottom-navigation--grow":e.grow,"v-bottom-navigation--shift":e.mode==="shift"},a.value,l.value,s.value,r.value,u.value,g.value,e.class],style:[o.value,f.value,{height:k(m.value)},C.value,e.style]},{default:()=>[n.default&&v("div",{class:"v-bottom-navigation__content"},[n.default()])]})),h}});const jt=b({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),Y=V(!1)({name:"VDefaultsProvider",props:jt(),setup(e,t){let{slots:n}=t;const{defaults:a,disabled:s,reset:l,root:o,scoped:r}=gt(e);return te(a,{reset:l,root:o,scoped:r,disabled:s}),()=>{var u;return(u=n.default)==null?void 0:u.call(n)}}});const Kt=["x-small","small","default","large","x-large"],ye=b({size:{type:[String,Number],default:"default"}},"size");function be(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:E();return Te(()=>{let n,a;return X(Kt,e.size)?n=`${t}--size-${e.size}`:e.size&&(a={width:k(e.size),height:k(e.size)}),{sizeClasses:n,sizeStyles:a}})}const Jt=b({color:String,disabled:Boolean,start:Boolean,end:Boolean,icon:K,...T(),...ye(),...z({tag:"i"}),...D()},"VIcon"),P=V()({name:"VIcon",props:Jt(),setup(e,t){let{attrs:n,slots:a}=t;const s=le(),{themeClasses:l}=q(e),{iconData:o}=ht(c(()=>s.value||e.icon)),{sizeClasses:r}=be(e),{textColorClasses:u,textColorStyles:g}=J(_(e,"color"));return B(()=>{var i,f;const C=(i=a.default)==null?void 0:i.call(a);C&&(s.value=(f=yt(C).filter(h=>h.type===bt&&h.children&&typeof h.children=="string")[0])==null?void 0:f.children);const m=!!(n.onClick||n.onClickOnce);return v(o.value.component,{tag:e.tag,icon:o.value.icon,class:["v-icon","notranslate",l.value,r.value,u.value,{"v-icon--clickable":m,"v-icon--disabled":e.disabled,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[r.value?void 0:{fontSize:k(e.size),height:k(e.size),width:k(e.size)},g.value,e.style],role:m?"button":void 0,"aria-hidden":!m,tabindex:m?e.disabled?-1:0:void 0},{default:()=>[C]})}),{}}});function Qt(e,t){const n=le(),a=Ae(!1);if(Ct){const s=new IntersectionObserver(l=>{e==null||e(l,s),a.value=!!l.find(o=>o.isIntersecting)},t);ae(()=>{s.disconnect()}),se(n,(l,o)=>{o&&(s.unobserve(o),a.value=!1),l&&s.observe(l)},{flush:"post"})}return{intersectionRef:n,isIntersecting:a}}const Zt=b({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...T(),...ye(),...z({tag:"div"}),...D()},"VProgressCircular"),en=V()({name:"VProgressCircular",props:Zt(),setup(e,t){let{slots:n}=t;const a=20,s=2*Math.PI*a,l=le(),{themeClasses:o}=q(e),{sizeClasses:r,sizeStyles:u}=be(e),{textColorClasses:g,textColorStyles:C}=J(_(e,"color")),{textColorClasses:m,textColorStyles:i}=J(_(e,"bgColor")),{intersectionRef:f,isIntersecting:h}=Qt(),{resizeRef:d,contentRect:y}=_t(),S=c(()=>Math.max(0,Math.min(100,parseFloat(e.modelValue)))),I=c(()=>Number(e.width)),G=c(()=>u.value?Number(e.size):y.value?y.value.width:Math.max(I.value,32)),A=c(()=>a/(1-I.value/G.value)*2),H=c(()=>I.value/G.value*A.value),$=c(()=>k((100-S.value)/100*s));return St(()=>{f.value=l.value,d.value=l.value}),B(()=>v(e.tag,{ref:l,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":h.value,"v-progress-circular--disable-shrink":e.indeterminate==="disable-shrink"},o.value,r.value,g.value,e.class],style:[u.value,C.value,e.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:S.value},{default:()=>[v("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${A.value} ${A.value}`},[v("circle",{class:["v-progress-circular__underlay",m.value],style:i.value,fill:"transparent",cx:"50%",cy:"50%",r:a,"stroke-width":H.value,"stroke-dasharray":s,"stroke-dashoffset":0},null),v("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:a,"stroke-width":H.value,"stroke-dasharray":s,"stroke-dashoffset":$.value},null)]),n.default&&v("div",{class:"v-progress-circular__content"},[n.default({value:S.value})])]})),{}}}),Ce=b({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function _e(e){return{dimensionStyles:c(()=>{const n={},a=k(e.height),s=k(e.maxHeight),l=k(e.maxWidth),o=k(e.minHeight),r=k(e.minWidth),u=k(e.width);return a!=null&&(n.height=a),s!=null&&(n.maxHeight=s),l!=null&&(n.maxWidth=l),o!=null&&(n.minHeight=o),r!=null&&(n.minWidth=r),u!=null&&(n.width=u),n})}}const Le={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},tn=b({location:String},"location");function nn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=arguments.length>2?arguments[2]:void 0;const{isRtl:a}=kt();return{locationStyles:c(()=>{if(!e.location)return{};const{side:l,align:o}=zt(e.location.split(" ").length>1?e.location:`${e.location} center`,a.value);function r(g){return n?n(g):0}const u={};return l!=="center"&&(t?u[Le[l]]=`calc(100% - ${r(l)}px)`:u[l]=0),o!=="center"?t?u[Le[o]]=`calc(100% - ${r(o)}px)`:u[o]=0:(l==="center"?u.top=u.left="50%":u[{top:"left",bottom:"left",left:"top",right:"top"}[l]]="50%",u.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[l]),u})}}const an=b({loading:[Boolean,String]},"loader");function sn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:E();return{loaderClasses:c(()=>({[`${t}--loading`]:e.loading}))}}const ln=["static","relative","fixed","absolute","sticky"],on=b({position:{type:String,validator:e=>ln.includes(e)}},"position");function rn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:E();return{positionClasses:c(()=>e.position?`${t}--${e.position}`:void 0)}}function un(){const e=ne("useRoute");return c(()=>{var t;return(t=e==null?void 0:e.proxy)==null?void 0:t.$route})}function cn(e,t){var g,C;const n=xt("RouterLink"),a=c(()=>!!(e.href||e.to)),s=c(()=>(a==null?void 0:a.value)||pe(t,"click")||pe(e,"click"));if(typeof n=="string"||!("useLink"in n))return{isLink:a,isClickable:s,href:_(e,"href")};const l=c(()=>({...e,to:_(()=>e.to||"")})),o=n.useLink(l.value),r=c(()=>e.to?o:void 0),u=un();return{isLink:a,isClickable:s,route:(g=r.value)==null?void 0:g.route,navigate:(C=r.value)==null?void 0:C.navigate,isActive:c(()=>{var m,i,f;return r.value?e.exact?u.value?((f=r.value.isExactActive)==null?void 0:f.value)&&ze(r.value.route.value.query,u.value.query):((i=r.value.isExactActive)==null?void 0:i.value)??!1:((m=r.value.isActive)==null?void 0:m.value)??!1:!1}),href:c(()=>{var m;return e.to?(m=r.value)==null?void 0:m.route.value.href:e.href})}}const dn=b({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");function vn(e,t){se(()=>{var n;return(n=e.isActive)==null?void 0:n.value},n=>{e.isLink.value&&n&&t&&wt(()=>{t(!0)})},{immediate:!0})}const Q=Symbol("rippleStop"),fn=80;function Pe(e,t){e.style.transform=t,e.style.webkitTransform=t}function Z(e){return e.constructor.name==="TouchEvent"}function Fe(e){return e.constructor.name==="KeyboardEvent"}const mn=function(e,t){var m;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=0,s=0;if(!Fe(e)){const i=t.getBoundingClientRect(),f=Z(e)?e.touches[e.touches.length-1]:e;a=f.clientX-i.left,s=f.clientY-i.top}let l=0,o=.3;(m=t._ripple)!=null&&m.circle?(o=.15,l=t.clientWidth/2,l=n.center?l:l+Math.sqrt((a-l)**2+(s-l)**2)/4):l=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const r=`${(t.clientWidth-l*2)/2}px`,u=`${(t.clientHeight-l*2)/2}px`,g=n.center?r:`${a-l}px`,C=n.center?u:`${s-l}px`;return{radius:l,scale:o,x:g,y:C,centerX:r,centerY:u}},U={show(e,t){var f;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((f=t==null?void 0:t._ripple)!=null&&f.enabled))return;const a=document.createElement("span"),s=document.createElement("span");a.appendChild(s),a.className="v-ripple__container",n.class&&(a.className+=` ${n.class}`);const{radius:l,scale:o,x:r,y:u,centerX:g,centerY:C}=mn(e,t,n),m=`${l*2}px`;s.className="v-ripple__animation",s.style.width=m,s.style.height=m,t.appendChild(a);const i=window.getComputedStyle(t);i&&i.position==="static"&&(t.style.position="relative",t.dataset.previousPosition="static"),s.classList.add("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--visible"),Pe(s,`translate(${r}, ${u}) scale3d(${o},${o},${o})`),s.dataset.activated=String(performance.now()),setTimeout(()=>{s.classList.remove("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--in"),Pe(s,`translate(${g}, ${C}) scale3d(1,1,1)`)},0)},hide(e){var l;if(!((l=e==null?void 0:e._ripple)!=null&&l.enabled))return;const t=e.getElementsByClassName("v-ripple__animation");if(t.length===0)return;const n=t[t.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const a=performance.now()-Number(n.dataset.activated),s=Math.max(250-a,0);setTimeout(()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout(()=>{var r;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((r=n.parentNode)==null?void 0:r.parentNode)===e&&e.removeChild(n.parentNode)},300)},s)}};function Ue(e){return typeof e>"u"||!!e}function M(e){const t={},n=e.currentTarget;if(!(!(n!=null&&n._ripple)||n._ripple.touched||e[Q])){if(e[Q]=!0,Z(e))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(t.center=n._ripple.centered||Fe(e),n._ripple.class&&(t.class=n._ripple.class),Z(e)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{U.show(e,n,t)},n._ripple.showTimer=window.setTimeout(()=>{var a;(a=n==null?void 0:n._ripple)!=null&&a.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)},fn)}else U.show(e,n,t)}}function Ee(e){e[Q]=!0}function x(e){const t=e.currentTarget;if(t!=null&&t._ripple){if(window.clearTimeout(t._ripple.showTimer),e.type==="touchend"&&t._ripple.showTimerCommit){t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,t._ripple.showTimer=window.setTimeout(()=>{x(e)});return}window.setTimeout(()=>{t._ripple&&(t._ripple.touched=!1)}),U.hide(t)}}function qe(e){const t=e.currentTarget;t!=null&&t._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let O=!1;function Ye(e){!O&&(e.keyCode===Ve.enter||e.keyCode===Ve.space)&&(O=!0,M(e))}function Xe(e){O=!1,x(e)}function je(e){O&&(O=!1,x(e))}function Ke(e,t,n){const{value:a,modifiers:s}=t,l=Ue(a);if(l||U.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=l,e._ripple.centered=s.center,e._ripple.circle=s.circle,pt(a)&&a.class&&(e._ripple.class=a.class),l&&!n){if(s.stop){e.addEventListener("touchstart",Ee,{passive:!0}),e.addEventListener("mousedown",Ee);return}e.addEventListener("touchstart",M,{passive:!0}),e.addEventListener("touchend",x,{passive:!0}),e.addEventListener("touchmove",qe,{passive:!0}),e.addEventListener("touchcancel",x),e.addEventListener("mousedown",M),e.addEventListener("mouseup",x),e.addEventListener("mouseleave",x),e.addEventListener("keydown",Ye),e.addEventListener("keyup",Xe),e.addEventListener("blur",je),e.addEventListener("dragstart",x,{passive:!0})}else!l&&n&&Je(e)}function Je(e){e.removeEventListener("mousedown",M),e.removeEventListener("touchstart",M),e.removeEventListener("touchend",x),e.removeEventListener("touchmove",qe),e.removeEventListener("touchcancel",x),e.removeEventListener("mouseup",x),e.removeEventListener("mouseleave",x),e.removeEventListener("keydown",Ye),e.removeEventListener("keyup",Xe),e.removeEventListener("dragstart",x),e.removeEventListener("blur",je)}function gn(e,t){Ke(e,t,!1)}function hn(e){delete e._ripple,Je(e)}function yn(e,t){if(t.value===t.oldValue)return;const n=Ue(t.oldValue);Ke(e,t,n)}const bn={mounted:gn,unmounted:hn,updated:yn},Cn=b({active:{type:Boolean,default:void 0},baseColor:String,symbol:{type:null,default:he},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:K,appendIcon:K,block:Boolean,readonly:Boolean,slim:Boolean,stacked:Boolean,ripple:{type:[Boolean,Object],default:!0},text:String,...oe(),...T(),...ue(),...Ce(),...de(),...Ht(),...an(),...tn(),...on(),...fe(),...dn(),...ye(),...z({tag:"button"}),...D(),...Me({variant:"elevated"})},"VBtn"),F=V()({name:"VBtn",props:Cn(),emits:{"group:selected":e=>!0},setup(e,t){let{attrs:n,slots:a}=t;const{themeClasses:s}=q(e),{borderClasses:l}=re(e),{densityClasses:o}=ce(e),{dimensionStyles:r}=_e(e),{elevationClasses:u}=ve(e),{loaderClasses:g}=sn(e),{locationStyles:C}=nn(e),{positionClasses:m}=rn(e),{roundedClasses:i}=me(e),{sizeClasses:f,sizeStyles:h}=be(e),d=Wt(e,e.symbol,!1),y=cn(e,n),S=c(()=>{var w;return e.active!==void 0?e.active:y.isLink.value?(w=y.isActive)==null?void 0:w.value:d==null?void 0:d.isSelected.value}),I=c(()=>{var L,W;return{color:(d==null?void 0:d.isSelected.value)&&(!y.isLink.value||((L=y.isActive)==null?void 0:L.value))||!d||((W=y.isActive)==null?void 0:W.value)?e.color??e.baseColor:e.baseColor,variant:e.variant}}),{colorClasses:G,colorStyles:A,variantClasses:H}=Gt(I),$=c(()=>(d==null?void 0:d.disabled.value)||e.disabled),Qe=c(()=>e.variant==="elevated"&&!(e.disabled||e.flat||e.border)),Ze=c(()=>{if(!(e.value===void 0||typeof e.value=="symbol"))return Object(e.value)===e.value?JSON.stringify(e.value,null,0):e.value});function et(w){var L;$.value||y.isLink.value&&(w.metaKey||w.ctrlKey||w.shiftKey||w.button!==0||n.target==="_blank")||((L=y.navigate)==null||L.call(y,w),d==null||d.toggle())}return vn(y,d==null?void 0:d.select),B(()=>{const w=y.isLink.value?"a":e.tag,L=!!(e.prependIcon||a.prepend),W=!!(e.appendIcon||a.append),Se=!!(e.icon&&e.icon!==!0);return Vt(v(w,{type:w==="a"?void 0:"button",class:["v-btn",d==null?void 0:d.selectedClass.value,{"v-btn--active":S.value,"v-btn--block":e.block,"v-btn--disabled":$.value,"v-btn--elevated":Qe.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--readonly":e.readonly,"v-btn--slim":e.slim,"v-btn--stacked":e.stacked},s.value,l.value,G.value,o.value,u.value,g.value,m.value,i.value,f.value,H.value,e.class],style:[A.value,r.value,C.value,h.value,e.style],"aria-busy":e.loading?!0:void 0,disabled:$.value||void 0,href:y.href.value,tabindex:e.loading||e.readonly?-1:void 0,onClick:et,value:Ze.value},{default:()=>{var ke;return[Dt(!0,"v-btn"),!e.icon&&L&&v("span",{key:"prepend",class:"v-btn__prepend"},[a.prepend?v(Y,{key:"prepend-defaults",disabled:!e.prependIcon,defaults:{VIcon:{icon:e.prependIcon}}},a.prepend):v(P,{key:"prepend-icon",icon:e.prependIcon},null)]),v("span",{class:"v-btn__content","data-no-activator":""},[!a.default&&Se?v(P,{key:"content-icon",icon:e.icon},null):v(Y,{key:"content-defaults",disabled:!Se,defaults:{VIcon:{icon:e.icon}}},{default:()=>{var xe;return[((xe=a.default)==null?void 0:xe.call(a))??e.text]}})]),!e.icon&&W&&v("span",{key:"append",class:"v-btn__append"},[a.append?v(Y,{key:"append-defaults",disabled:!e.appendIcon,defaults:{VIcon:{icon:e.appendIcon}}},a.append):v(P,{key:"append-icon",icon:e.appendIcon},null)]),!!e.loading&&v("span",{key:"loader",class:"v-btn__loader"},[((ke=a.loader)==null?void 0:ke.call(a))??v(en,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,width:"2"},null)])]}}),[[bn,!$.value&&!!e.ripple,"",{center:!!e.icon}]])}),{group:d}}});const _n=b({...T(),...Ce(),...Bt()},"VLayout"),Sn=V()({name:"VLayout",props:_n(),setup(e,t){let{slots:n}=t;const{layoutClasses:a,layoutStyles:s,getLayoutItem:l,items:o,layoutRef:r}=It(e),{dimensionStyles:u}=_e(e);return B(()=>v("div",{ref:r,class:[a.value,e.class],style:[u.value,s.value,e.style]},[v(Lt,null,{default:()=>{var g;return[v(ee,null,[(g=n.default)==null?void 0:g.call(n)])]}})])),{getLayoutItem:l,items:o}}});const kn=b({scrollable:Boolean,...T(),...Ce(),...z({tag:"main"})},"VMain"),xn=V()({name:"VMain",props:kn(),setup(e,t){let{slots:n}=t;const{dimensionStyles:a}=_e(e),{mainStyles:s,layoutIsReady:l}=Pt(),{ssrBootStyles:o}=We();return B(()=>v(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[s.value,o.value,a.value,e.style]},{default:()=>{var r,u;return[e.scrollable?v("div",{class:"v-main__scroller"},[(r=n.default)==null?void 0:r.call(n)]):(u=n.default)==null?void 0:u.call(n)]}})),l}}),wn=ie("section",{class:"layout-title-pic text-center"},"the-word ",-1),pn=ie("span",null,"設施",-1),Vn=ie("span",null,"登入",-1),Ln={__name:"FrontLayout",setup(e){return(t,n)=>{const a=Et("router-view");return Tt(),$t(ee,null,[wn,v(xn,{style:{"margin-bottom":"56px"}},{default:p(()=>[v(a)]),_:1}),v(Sn,{class:"overflow-visible",style:{height:"56px",position:"fixed",width:"100%",bottom:"0%"}},{default:p(()=>[v(Xt,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=s=>t.value=s),color:"primary",active:""},{default:p(()=>[v(F,{to:"/"},{default:p(()=>[v(P,null,{default:p(()=>[N("mdi-home")]),_:1}),N(" 首頁 ")]),_:1}),v(F,{to:"movie"},{default:p(()=>[v(P,null,{default:p(()=>[N("mdi-movie")]),_:1}),N(" 電影 ")]),_:1}),v(F,{to:"store"},{default:p(()=>[v(P,null,{default:p(()=>[N("mdi-store-alert-outline")]),_:1}),pn]),_:1}),v(F,{to:"login"},{default:p(()=>[v(P,null,{default:p(()=>[N("mdi-account")]),_:1}),Vn]),_:1})]),_:1},8,["modelValue"])]),_:1})],64)}}};export{Ln as default};
