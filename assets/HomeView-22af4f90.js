import{c as l,a5 as n,a6 as o,a8 as t,F as d,aa as r,ab as a}from"./index-299965ce.js";const i={id:"home-announcement",style:{"text-align":"center",margin:"auto"}},c=t("h1",null,"社區公告",-1),u={style:{width:"100%",padding:"0 5%"}},_=t("thead",{style:{"background-color":"burlywood"}},[t("tr",null,[t("th",{style:{width:"20%"}},"日期"),t("th",{style:{width:"60%"}},"標題"),t("th",{style:{width:"20%"}},"分類")])],-1),h={style:{"background-color":"bisque"}},g={__name:"HomeView",setup(y){const s=l(()=>[{date:"10-5",title:"抬頭",kind:"一班"},{date:"10-5",title:"抬頭",kind:"一班"},{date:"10-5",title:"抬頭",kind:"一班"}]);return console.log(),(k,m)=>(n(),o("section",i,[c,t("table",u,[_,t("tbody",h,[(n(!0),o(d,null,r(s.value,e=>(n(),o("tr",{key:e.date},[t("td",null,a(e.date),1),t("td",null,a(e.title),1),t("td",null,a(e.kind),1)]))),128))])])]))}};export{g as default};