(self.webpackChunkchatapp=self.webpackChunkchatapp||[]).push([[2282],{8884:(y,x,e)=>{"use strict";e.r(x),e.d(x,{ProvidersPage:()=>le,default:()=>Ue});var t=e(67294),r=e(14087),i=e(17034),s=e(185),d=e(53979),u=e(49066),n=e(38939),l=e(8060),f=e(79031),p=e(37909),E=e(75515),h=e(63237),c=e(15234),b=e(12028),a=e(57993),m=e(4585),P=e(18721),j=e.n(P),z=e(11700),W=e.n(z),K=e(86896),N=e(88767),me=e(42866),ge=e(24969),fe=e(59946),ve=e(11047),pe=e(11276),he=e(67819),be=e(36856),ne=e(29728),ye=e(63321),xe=e(36773),Ee=e(41054),Pe=e(45697),o=e.n(Pe),Me=e(93127),Le=e(16364);const V=({description:v,disabled:B,intlLabel:R,error:U,name:T,onChange:S,placeholder:C,providerToEditName:I,type:F,value:M})=>{const{formatMessage:Z}=(0,K.Z)(),D=T==="noName"?`${window.strapi.backendURL}/api/connect/${I}/callback`:M,$=Z({id:R.id,defaultMessage:R.defaultMessage},{provider:I,...R.values}),A=v?Z({id:v.id,defaultMessage:v.defaultMessage},{provider:I,...v.values}):"";if(F==="bool")return t.createElement(Me.s,{"aria-label":T,checked:M,disabled:B,hint:A,label:$,name:T,offLabel:Z({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:Z({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:_=>{S({target:{name:T,value:_.target.checked}})}});const q=C?Z({id:C.id,defaultMessage:C.defaultMessage},{...C.values}):"",G=U?Z({id:U,defaultMessage:U}):"";return t.createElement(Le.o,{"aria-label":T,disabled:B,error:G,label:$,name:T,onChange:S,placeholder:q,type:F,value:D})};V.defaultProps={description:null,disabled:!1,error:"",placeholder:null,value:""},V.propTypes={description:o().shape({id:o().string.isRequired,defaultMessage:o().string.isRequired,values:o().object}),disabled:o().bool,error:o().string,intlLabel:o().shape({id:o().string.isRequired,defaultMessage:o().string.isRequired,values:o().object}).isRequired,name:o().string.isRequired,onChange:o().func.isRequired,placeholder:o().shape({id:o().string.isRequired,defaultMessage:o().string.isRequired,values:o().object}),providerToEditName:o().string.isRequired,type:o().string.isRequired,value:o().oneOfType([o().bool,o().string])};const Be=V,J=({headerBreadcrumbs:v,initialData:B,isSubmiting:R,layout:U,isOpen:T,onSubmit:S,onToggle:C,providerToEditName:I})=>{const{formatMessage:F}=(0,K.Z)();return T?t.createElement(me.P,{onClose:C,labelledBy:"title"},t.createElement(ge.x,null,t.createElement(ye.O,{label:v.join(", ")},v.map((M,Z,D)=>t.createElement(xe.$,{isCurrent:Z===D.length-1,key:M},M)))),t.createElement(Ee.J9,{onSubmit:M=>S(M),initialValues:B,validationSchema:U.schema,validateOnChange:!1},({errors:M,handleChange:Z,values:D})=>t.createElement(a.l0,null,t.createElement(fe.f,null,t.createElement(ve.k,{direction:"column",alignItems:"stretch",gap:1},t.createElement(pe.r,{gap:5},U.form.map($=>$.map(A=>t.createElement(he.P,{key:A.name,col:A.size,xs:12},t.createElement(Be,{...A,error:M[A.name],onChange:Z,value:D[A.name],providerToEditName:I}))))))),t.createElement(be.m,{startActions:t.createElement(ne.z,{variant:"tertiary",onClick:C,type:"button"},F({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:t.createElement(ne.z,{type:"submit",loading:R},F({id:"global.save",defaultMessage:"Save"}))})))):null};J.defaultProps={initialData:null,providerToEditName:null},J.propTypes={headerBreadcrumbs:o().arrayOf(o().string).isRequired,initialData:o().object,layout:o().shape({form:o().arrayOf(o().array),schema:o().object}).isRequired,isOpen:o().bool.isRequired,isSubmiting:o().bool.isRequired,onSubmit:o().func.isRequired,onToggle:o().func.isRequired,providerToEditName:o().string};const Oe=J;var ae=e(84419),L=e(42722);const Te=async v=>{try{const{get:B}=(0,a.tg)(),{data:R}=await B((0,L.Gc)("providers"));return R}catch{throw v({type:"warning",message:{id:"notification.error"}}),new Error("error")}},Re=v=>{const{put:B}=(0,a.tg)();return B((0,L.Gc)("providers"),v)};var je=e(89734),Ce=e.n(je);const Ze=v=>Ce()(Object.keys(v).reduce((B,R)=>{const{icon:U,enabled:T,subdomain:S}=v[R],C=U==="envelope"?["fas","envelope"]:["fab",U];return S!==void 0?B.push({name:R,icon:C,enabled:T,subdomain:S}):B.push({name:R,icon:C,enabled:T}),B},[]),"name");var g=e(87561);const re={id:(0,L.OB)("PopUpForm.Providers.redirectURL.front-end.label"),defaultMessage:"The redirect URL to your front-end app"},se={id:"http://www.client-app.com",defaultMessage:"http://www.client-app.com"},Y={id:(0,L.OB)("PopUpForm.Providers.enabled.description"),defaultMessage:"If disabled, users won't be able to use this provider."},w={id:(0,L.OB)("PopUpForm.Providers.enabled.label"),defaultMessage:"Enable"},ie={id:(0,L.OB)("PopUpForm.Providers.key.label"),defaultMessage:"Client ID"},oe={id:(0,L.OB)("PopUpForm.Providers.redirectURL.label"),defaultMessage:"The redirect URL to add in your {provider} application configurations"},H={id:(0,L.OB)("PopUpForm.Providers.key.placeholder"),defaultMessage:"TEXT"},de={id:(0,L.OB)("PopUpForm.Providers.secret.label"),defaultMessage:"Client Secret"},k={email:{form:[[{intlLabel:w,name:"enabled",type:"bool",description:Y,size:6}]],schema:g.Ry().shape({enabled:g.Xg().required(a.I0.required)})},providers:{form:[[{intlLabel:w,name:"enabled",type:"bool",description:Y,size:6,validations:{required:!0}}],[{intlLabel:ie,name:"key",type:"text",placeholder:H,size:12,validations:{required:!0}}],[{intlLabel:de,name:"secret",type:"text",placeholder:H,size:12,validations:{required:!0}}],[{intlLabel:re,placeholder:se,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:oe,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:g.Ry().shape({enabled:g.Xg().required(a.I0.required),key:g.Z_().when("enabled",{is:!0,then:g.Z_().required(a.I0.required),otherwise:g.Z_()}),secret:g.Z_().when("enabled",{is:!0,then:g.Z_().required(a.I0.required),otherwise:g.Z_()}),callback:g.Z_().when("enabled",{is:!0,then:g.Z_().required(a.I0.required),otherwise:g.Z_()})})},providersWithSubdomain:{form:[[{intlLabel:w,name:"enabled",type:"bool",description:Y,size:6,validations:{required:!0}}],[{intlLabel:ie,name:"key",type:"text",placeholder:H,size:12,validations:{required:!0}}],[{intlLabel:de,name:"secret",type:"text",placeholder:H,size:12,validations:{required:!0}}],[{intlLabel:{id:(0,L.OB)({id:"PopUpForm.Providers.jwksurl.label"}),defaultMessage:"JWKS URL"},name:"jwksurl",type:"text",placeholder:H,size:12,validations:{required:!1}}],[{intlLabel:{id:(0,L.OB)("PopUpForm.Providers.subdomain.label"),defaultMessage:"Host URI (Subdomain)"},name:"subdomain",type:"text",placeholder:{id:(0,L.OB)("PopUpForm.Providers.subdomain.placeholder"),defaultMessage:"my.subdomain.com"},size:12,validations:{required:!0}}],[{intlLabel:re,placeholder:se,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:oe,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:g.Ry().shape({enabled:g.Xg().required(a.I0.required),key:g.Z_().when("enabled",{is:!0,then:g.Z_().required(a.I0.required),otherwise:g.Z_()}),secret:g.Z_().when("enabled",{is:!0,then:g.Z_().required(a.I0.required),otherwise:g.Z_()}),subdomain:g.Z_().when("enabled",{is:!0,then:g.Z_().required(a.I0.required),otherwise:g.Z_()}),callback:g.Z_().when("enabled",{is:!0,then:g.Z_().required(a.I0.required),otherwise:g.Z_()})})}},le=()=>{const{formatMessage:v}=(0,K.Z)();(0,a.go)();const{notifyStatus:B}=(0,r.G)(),R=(0,N.useQueryClient)(),{trackUsage:U}=(0,a.rS)(),T=(0,t.useRef)(U),[S,C]=(0,t.useState)(!1),[I,F]=(0,t.useState)(!1),[M,Z]=(0,t.useState)(null),D=(0,a.lm)(),{lockApp:$,unlockApp:A}=(0,a.o1)(),{isLoading:q,allowedActions:{canUpdate:G}}=(0,a.ss)({update:ae._.updateProviders}),{isLoading:_,data:X,isFetching:Ae}=(0,N.useQuery)("get-providers",()=>Te(D),{onSuccess(){B(v({id:(0,L.OB)("Providers.data.loaded"),defaultMessage:"Providers have been loaded"}))},initialData:{}}),Se=_||Ae,Fe=(0,N.useMutation)(Re,{async onSuccess(){await R.invalidateQueries("get-providers"),D({type:"info",message:{id:(0,L.OB)("notification.success.submit")}}),T.current("didEditAuthenticationProvider"),F(!1),ee(),A()},onError(){D({type:"warning",message:{id:"notification.error"}}),A(),F(!1)},refetchActive:!1}),Q=(0,t.useMemo)(()=>Ze(X),[X]),De=Q.length,ue=(0,t.useMemo)(()=>{if(!M)return!1;const O=Q.find(te=>te.name===M);return j()(O,"subdomain")},[Q,M]),ze=v({id:(0,L.OB)("HeaderNav.link.providers"),defaultMessage:"Providers"}),Ie=(0,t.useMemo)(()=>M==="email"?k.email:ue?k.providersWithSubdomain:k.providers,[M,ue]),ee=()=>{C(O=>!O)},ce=O=>{G&&(Z(O.name),ee())},We=async O=>{F(!0),$(),T.current("willEditAuthenticationProvider");const te={...X,[M]:O};Fe.mutate({providers:te})};return t.createElement(i.A,null,t.createElement(a.SL,{name:ze}),t.createElement(s.o,null,t.createElement(d.T,{title:v({id:(0,L.OB)("HeaderNav.link.providers"),defaultMessage:"Providers"})}),Se||q?t.createElement(a.dO,null):t.createElement(u.D,null,t.createElement(n.i,{colCount:3,rowCount:De+1},t.createElement(l.h,null,t.createElement(f.Tr,null,t.createElement(p.Th,null,t.createElement(E.Z,{variant:"sigma",textColor:"neutral600"},v({id:"global.name",defaultMessage:"Name"}))),t.createElement(p.Th,null,t.createElement(E.Z,{variant:"sigma",textColor:"neutral600"},v({id:(0,L.OB)("Providers.status"),defaultMessage:"Status"}))),t.createElement(p.Th,null,t.createElement(E.Z,{variant:"sigma"},t.createElement(h.T,null,v({id:"global.settings",defaultMessage:"Settings"})))))),t.createElement(c.p,null,Q.map(O=>t.createElement(f.Tr,{key:O.name,...(0,a.X7)({fn:()=>ce(O),condition:G})},t.createElement(p.Td,{width:"45%"},t.createElement(E.Z,{fontWeight:"semiBold",textColor:"neutral800"},O.name)),t.createElement(p.Td,{width:"65%"},t.createElement(E.Z,{textColor:O.enabled?"success600":"danger600","data-testid":`enable-${O.name}`},O.enabled?v({id:"global.enabled",defaultMessage:"Enabled"}):v({id:"global.disabled",defaultMessage:"Disabled"}))),t.createElement(p.Td,{...a.UW},G&&t.createElement(b.h,{onClick:()=>ce(O),noBorder:!0,icon:t.createElement(m.Z,null),label:"Edit"})))))))),t.createElement(Oe,{initialData:X[M],isOpen:S,isSubmiting:I,layout:Ie,headerBreadcrumbs:[v({id:(0,L.OB)("PopUpForm.header.edit.providers"),defaultMessage:"Edit Provider"}),W()(M)],onToggle:ee,onSubmit:We,providerToEditName:M}))},Ue=()=>t.createElement(a.O4,{permissions:ae._.readProviders},t.createElement(le,null))},42722:(y,x,e)=>{"use strict";e.d(x,{YX:()=>s,Gc:()=>n,OB:()=>l.Z});var t=e(41609),r=e.n(t);const s=f=>Object.keys(f).reduce((p,E)=>{const h=f[E].controllers,c=Object.keys(h).reduce((b,a)=>(r()(h[a])||(b[a]=h[a]),b),{});return r()(c)||(p[E]={controllers:c}),p},{});var d=e(83086);const n=f=>`/${d.Z}/${f}`;var l=e(97961)},89881:(y,x,e)=>{var t=e(47816),r=e(99291),i=r(t);y.exports=i},69199:(y,x,e)=>{var t=e(89881),r=e(98612);function i(s,d){var u=-1,n=r(s)?Array(s.length):[];return t(s,function(l,f,p){n[++u]=d(l,f,p)}),n}y.exports=i},82689:(y,x,e)=>{var t=e(29932),r=e(97786),i=e(67206),s=e(69199),d=e(71131),u=e(7518),n=e(85022),l=e(6557),f=e(1469);function p(E,h,c){h.length?h=t(h,function(m){return f(m)?function(P){return r(P,m.length===1?m[0]:m)}:m}):h=[l];var b=-1;h=t(h,u(i));var a=s(E,function(m,P,j){var z=t(h,function(W){return W(m)});return{criteria:z,index:++b,value:m}});return d(a,function(m,P){return n(m,P,c)})}y.exports=p},71131:y=>{function x(e,t){var r=e.length;for(e.sort(t);r--;)e[r]=e[r].value;return e}y.exports=x},26393:(y,x,e)=>{var t=e(33448);function r(i,s){if(i!==s){var d=i!==void 0,u=i===null,n=i===i,l=t(i),f=s!==void 0,p=s===null,E=s===s,h=t(s);if(!p&&!h&&!l&&i>s||l&&f&&E&&!p&&!h||u&&f&&E||!d&&E||!n)return 1;if(!u&&!l&&!h&&i<s||h&&d&&n&&!u&&!l||p&&d&&n||!f&&n||!E)return-1}return 0}y.exports=r},85022:(y,x,e)=>{var t=e(26393);function r(i,s,d){for(var u=-1,n=i.criteria,l=s.criteria,f=n.length,p=d.length;++u<f;){var E=t(n[u],l[u]);if(E){if(u>=p)return E;var h=d[u];return E*(h=="desc"?-1:1)}}return i.index-s.index}y.exports=r},99291:(y,x,e)=>{var t=e(98612);function r(i,s){return function(d,u){if(d==null)return d;if(!t(d))return i(d,u);for(var n=d.length,l=s?n:-1,f=Object(d);(s?l--:++l<n)&&u(f[l],l,f)!==!1;);return d}}y.exports=r},89734:(y,x,e)=>{var t=e(21078),r=e(82689),i=e(5976),s=e(16612),d=i(function(u,n){if(u==null)return[];var l=n.length;return l>1&&s(u,n[0],n[1])?n=[]:l>2&&s(n[0],n[1],n[2])&&(n=[n[0]]),r(u,t(n,1),[])});y.exports=d},49066:(y,x,e)=>{"use strict";e.d(x,{D:()=>i});var t=e(85893),r=e(41580);const i=({children:s})=>(0,t.jsx)(r.x,{paddingLeft:10,paddingRight:10,children:s})},53979:(y,x,e)=>{"use strict";e.d(x,{T:()=>p});var t=e(85893),r=e(67294),i=e(88972);const s=c=>{const b=(0,r.useRef)(null),[a,m]=(0,r.useState)(!0),P=([j])=>{m(j.isIntersecting)};return(0,r.useEffect)(()=>{const j=b.current,z=new IntersectionObserver(P,c);return j&&z.observe(b.current),()=>{j&&z.disconnect()}},[b,c]),[b,a]};var d=e(79698);const u=(c,b)=>{const a=(0,d.W)(b);(0,r.useLayoutEffect)(()=>{const m=new ResizeObserver(a);return Array.isArray(c)?c.forEach(P=>{P.current&&m.observe(P.current)}):c.current&&m.observe(c.current),()=>{m.disconnect()}},[c,a])};var n=e(41580),l=e(11047),f=e(75515);const p=c=>{const b=(0,r.useRef)(null),[a,m]=(0,r.useState)(null),[P,j]=s({root:null,rootMargin:"0px",threshold:0});return u(P,()=>{P.current&&m(P.current.getBoundingClientRect())}),(0,r.useEffect)(()=>{b.current&&m(b.current.getBoundingClientRect())},[b]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{style:{height:a==null?void 0:a.height},ref:P,children:j&&(0,t.jsx)(h,{ref:b,...c})}),!j&&(0,t.jsx)(h,{...c,sticky:!0,width:a==null?void 0:a.width})]})};p.displayName="HeaderLayout";const E=(0,i.ZP)(n.x)`
  width: ${({width:c})=>c?`${c/16}rem`:void 0};
  z-index: ${({theme:c})=>c.zIndices[1]};
`,h=r.forwardRef(({navigationAction:c,primaryAction:b,secondaryAction:a,subtitle:m,title:P,sticky:j,width:z,...W},K)=>{const N=typeof m=="string";return j?(0,t.jsx)(E,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:z,"data-strapi-header-sticky":!0,children:(0,t.jsxs)(l.k,{justifyContent:"space-between",children:[(0,t.jsxs)(l.k,{children:[c&&(0,t.jsx)(n.x,{paddingRight:3,children:c}),(0,t.jsxs)(n.x,{children:[(0,t.jsx)(f.Z,{variant:"beta",as:"h1",...W,children:P}),N?(0,t.jsx)(f.Z,{variant:"pi",textColor:"neutral600",children:m}):m]}),a?(0,t.jsx)(n.x,{paddingLeft:4,children:a}):null]}),(0,t.jsx)(l.k,{children:b?(0,t.jsx)(n.x,{paddingLeft:2,children:b}):void 0})]})}):(0,t.jsxs)(n.x,{ref:K,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:c?6:8,background:"neutral100","data-strapi-header":!0,children:[c?(0,t.jsx)(n.x,{paddingBottom:2,children:c}):null,(0,t.jsxs)(l.k,{justifyContent:"space-between",children:[(0,t.jsxs)(l.k,{minWidth:0,children:[(0,t.jsx)(f.Z,{as:"h1",variant:"alpha",...W,children:P}),a?(0,t.jsx)(n.x,{paddingLeft:4,children:a}):null]}),b]}),N?(0,t.jsx)(f.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:m}):m]})})},17034:(y,x,e)=>{"use strict";e.d(x,{A:()=>u});var t=e(85893),r=e(88972),i=e(41580);const s=(0,r.ZP)(i.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:n})=>n?"auto 1fr":"1fr"};
`,d=(0,r.ZP)(i.x)`
  overflow-x: hidden;
`,u=({sideNav:n,children:l})=>(0,t.jsxs)(s,{hasSideNav:!!n,children:[n,(0,t.jsx)(d,{paddingBottom:10,children:l})]})},185:(y,x,e)=>{"use strict";e.d(x,{o:()=>d});var t=e(85893),r=e(88972),i=e(41580);const s=(0,r.ZP)(i.x)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,d=({labelledBy:u="main-content-title",...n})=>(0,t.jsx)(s,{"aria-labelledby":u,as:"main",id:"main-content",tabIndex:-1,...n})}}]);
