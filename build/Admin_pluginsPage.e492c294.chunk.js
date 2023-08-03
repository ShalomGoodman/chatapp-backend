"use strict";(self.webpackChunkchatapp=self.webpackChunkchatapp||[]).push([[3677],{67975:(y,i,t)=>{t.r(i),t.d(i,{default:()=>B});var e=t(67294),n=t(57993),r=t(64593),d=t(86896),m=t(86706),E=t(36364),o=t(14087),u=t(17034),f=t(185),T=t(53979),C=t(49066),x=t(38939),L=t(8060),h=t(79031),g=t(37909),c=t(75515),A=t(15234),I=t(88767);const O=async()=>{const{get:l}=(0,n.tg)(),{data:a}=await l("/admin/plugins");return a},Z=l=>{const a=(0,n.lm)();return(0,I.useQuery)("list-enabled-plugins",()=>O(),{onSuccess(){l&&l()},onError(){a({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}})},D=()=>{var l,a;const{formatMessage:s}=(0,d.Z)(),{notifyStatus:N}=(0,o.G)();(0,n.go)();const p=s({id:"global.plugins",defaultMessage:"Plugins"}),j=()=>{N(s({id:"app.utils.notify.data-loaded",defaultMessage:"The {target} has loaded"},{target:p}))},{status:M,data:v}=Z(j);return M!=="success"&&M!=="error"?e.createElement(u.A,null,e.createElement(f.o,{"aria-busy":!0},e.createElement(n.dO,null))):e.createElement(u.A,null,e.createElement(f.o,null,e.createElement(T.T,{title:p,subtitle:s({id:"app.components.ListPluginsPage.description",defaultMessage:"List of the installed plugins in the project."})}),e.createElement(C.D,null,e.createElement(x.i,{colCount:2,rowCount:(a=(l=v==null?void 0:v.plugins)==null?void 0:l.length)!=null?a:0+1},e.createElement(L.h,null,e.createElement(h.Tr,null,e.createElement(g.Th,null,e.createElement(c.Z,{variant:"sigma",textColor:"neutral600"},s({id:"global.name",defaultMessage:"Name"}))),e.createElement(g.Th,null,e.createElement(c.Z,{variant:"sigma",textColor:"neutral600"},s({id:"global.description",defaultMessage:"description"}))))),e.createElement(A.p,null,v.plugins.map(({name:P,displayName:S,description:W})=>e.createElement(h.Tr,{key:P},e.createElement(g.Td,null,e.createElement(c.Z,{textColor:"neutral800",variant:"omega",fontWeight:"bold"},s({id:`global.plugins.${P}`,defaultMessage:S}))),e.createElement(g.Td,null,e.createElement(c.Z,{textColor:"neutral800"},s({id:`global.plugins.${P}.description`,defaultMessage:W}))))))))))},B=()=>{const{formatMessage:l}=(0,d.Z)(),a=(0,m.v9)(E._);return e.createElement(n.O4,{permissions:a.marketplace.main},e.createElement(r.q,{title:l({id:"global.plugins",defaultMessage:"Plugins"})}),e.createElement(D,null))}},17034:(y,i,t)=>{t.d(i,{A:()=>E});var e=t(85893),n=t(88972),r=t(41580);const d=(0,n.ZP)(r.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:o})=>o?"auto 1fr":"1fr"};
`,m=(0,n.ZP)(r.x)`
  overflow-x: hidden;
`,E=({sideNav:o,children:u})=>(0,e.jsxs)(d,{hasSideNav:!!o,children:[o,(0,e.jsx)(m,{paddingBottom:10,children:u})]})}}]);
