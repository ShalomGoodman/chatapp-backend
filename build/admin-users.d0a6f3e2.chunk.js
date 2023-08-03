"use strict";(self.webpackChunkchatapp=self.webpackChunkchatapp||[]).push([[5199],{54920:(S,d,e)=>{e.d(d,{R:()=>r});var t=e(57993),l=e(88767);function r(o={},u={}){var a;const{id:s="",...E}=o,{get:g}=(0,t.kY)(),{data:n,isError:D,isLoading:C,refetch:R}=(0,l.useQuery)(["users",s,E],async()=>{const{data:{data:h}}=await g(`/admin/users/${s}`,{params:E});return h},u);let p=[];return s&&n?p=[n]:Array.isArray(n==null?void 0:n.results)&&(p=n.results),{users:p,pagination:(a=n==null?void 0:n.pagination)!=null?a:null,isLoading:C,isError:D,refetch:R}}},71359:(S,d,e)=>{e.d(d,{Z:()=>n});var t=e(67294),l=e(41580),r=e(29728),o=e(57993),u=e(89597),a=e(45697),s=e.n(a),E=e(86896);const g=({displayedFilters:D})=>{const[C,R]=(0,t.useState)(!1),{formatMessage:p}=(0,E.Z)(),h=(0,t.useRef)(),W=()=>{R(O=>!O)};return t.createElement(t.Fragment,null,t.createElement(l.x,{paddingTop:1,paddingBottom:1},t.createElement(r.z,{variant:"tertiary",ref:h,startIcon:t.createElement(u.Z,null),onClick:W,size:"S"},p({id:"app.utils.filters",defaultMessage:"Filters"})),C&&t.createElement(o.J5,{displayedFilters:D,isVisible:C,onToggle:W,source:h})),t.createElement(o.W$,{filtersSchema:D}))};g.propTypes={displayedFilters:s().arrayOf(s().shape({name:s().string.isRequired,metadatas:s().shape({label:s().string}),fieldSchema:s().shape({type:s().string})})).isRequired};const n=g},61611:(S,d,e)=>{e.d(d,{W:()=>pe,Z:()=>Ze});var t=e(67294),l=e(185),r=e(53979),o=e(36989),u=e(49066),a=e(57993),s=e(80129),E=e.n(s),g=e(86896),n=e(88767),D=e(86706),C=e(16550),R=e(54920),p=e(80902),h=e(36364),W=e(71359),O=e(29728),Z=e(23293),ne=e(45697),m=e.n(ne);const ee=({onClick:i})=>{const{formatMessage:f}=(0,g.Z)();return t.createElement(O.z,{onClick:i,startIcon:t.createElement(Z.Z,null),size:"S"},f({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"}))};ee.propTypes={onClick:m().func.isRequired};var le=e(15234),F=e(79031),J=e(37909),re=e(92155),b=e(75515),j=e(11047),te=e(12028),M=e(41580),Me=e(4585),fe=e(20022),oe=e(25804);const ie=({canDelete:i,headers:f,entriesToDelete:L,onClickDelete:w,onSelectRow:V,withMainAction:z,withBulkActions:K,rows:U})=>{const{push:A,location:{pathname:H}}=(0,C.k6)(),{formatMessage:T}=(0,g.Z)();return t.createElement(le.p,null,U.map(c=>{const $=L.findIndex(I=>I===c.id)!==-1;return t.createElement(F.Tr,{key:c.id,...(0,a.X7)({fn:()=>A(`${H}/${c.id}`),condition:K})},z&&t.createElement(J.Td,{...a.UW},t.createElement(re.C,{"aria-label":T({id:"app.component.table.select.one-entry",defaultMessage:"Select {target}"},{target:(0,oe.Pp)(c.firstname,c.lastname)}),checked:$,onChange:()=>{V({name:c.id,value:!$})}})),f.map(({key:I,cellFormatter:Y,name:x,...N})=>t.createElement(J.Td,{key:I},typeof Y=="function"?Y(c,{key:I,name:x,formatMessage:T,...N}):t.createElement(b.Z,{textColor:"neutral800"},c[x]||"-"))),K&&t.createElement(J.Td,null,t.createElement(j.k,{justifyContent:"end"},t.createElement(te.h,{onClick:()=>A(`${H}/${c.id}`),label:T({id:"app.component.table.edit",defaultMessage:"Edit {target}"},{target:(0,oe.Pp)(c.firstname,c.lastname)}),noBorder:!0,icon:t.createElement(Me.Z,null)}),i&&t.createElement(M.x,{paddingLeft:1,...a.UW},t.createElement(te.h,{onClick:()=>w(c.id),label:T({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:(0,oe.Pp)(c.firstname,c.lastname)}),noBorder:!0,icon:t.createElement(fe.Z,null)})))))}))};ie.defaultProps={canDelete:!1,entriesToDelete:[],onClickDelete(){},onSelectRow(){},rows:[],withBulkActions:!1,withMainAction:!1},ie.propTypes={canDelete:m().bool,entriesToDelete:m().array,headers:m().array.isRequired,onClickDelete:m().func,onSelectRow:m().func,rows:m().array,withBulkActions:m().bool,withMainAction:m().bool};const ve=ie;var Pe=e(42866),ye=e(24969),he=e(59946),me=e(11276),ce=e(67819),Ae=e(36856),De=e(63321),Ce=e(36773),Oe=e(41054),Te=e(30164),Le=e(85078),k=e(87561);const ue={firstname:"",lastname:"",email:"",roles:[]},Re=[],Ue=[[{intlLabel:{id:"Auth.form.firstname.label",defaultMessage:"First name"},name:"firstname",placeholder:{id:"Auth.form.firstname.placeholder",defaultMessage:"e.g. Kai"},type:"text",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},name:"lastname",placeholder:{id:"Auth.form.lastname.placeholder",defaultMessage:"e.g. Doe"},type:"text",size:{col:6,xs:12}}],[{intlLabel:{id:"Auth.form.email.label",defaultMessage:"Email"},name:"email",placeholder:{id:"Auth.form.email.placeholder",defaultMessage:"e.g. kai.doe@strapi.io"},type:"email",size:{col:6,xs:12},required:!0}]],Ie=k.Ry().shape({firstname:k.Z_().trim().required(a.I0.required),lastname:k.Z_(),email:k.Z_().email(a.I0.email).required(a.I0.required),roles:k.IX().min(1,a.I0.required).required(a.I0.required)}),Be={create:{buttonSubmitLabel:{id:"app.containers.Users.ModalForm.footer.button-success",defaultMessage:"Invite user"},isDisabled:!1,next:"magic-link"},"magic-link":{buttonSubmitLabel:{id:"global.finish",defaultMessage:"Finish"},isDisabled:!0,next:null}},Ee=({onSuccess:i,onToggle:f})=>{const[L,w]=(0,t.useState)("create"),[V,z]=(0,t.useState)(!1),[K,U]=(0,t.useState)(null),{formatMessage:A}=(0,g.Z)(),H=(0,a.lm)(),{lockApp:T,unlockApp:c}=(0,a.o1)(),{post:$}=(0,a.kY)(),I=(0,p.c)(Re,async()=>(await e.e(9329).then(e.bind(e,99329))).ROLE_LAYOUT,{combine(P,B){return[...P,B]},defaultValue:[]}),Y=(0,p.c)(ue,async()=>(await e.e(9329).then(e.bind(e,99329))).FORM_INITIAL_VALUES,{combine(P,B){return{...P,...B}},defaultValue:ue}),x=(0,p.c)(Te.A,async()=>(await e.e(566).then(e.bind(e,20566))).MagicLinkEE),N=(0,n.useMutation)(P=>$("/admin/users",P),{async onSuccess({data:P}){U(P.data.registrationToken),await i(),se(),z(!1)},onError(P){throw z(!1),H({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}}),P},onSettled(){c()}}),_=A({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"}),ae=async(P,{setErrors:B})=>{var X,G;T(),z(!0);try{await N.mutateAsync(P)}catch(y){c(),((G=(X=y==null?void 0:y.response)==null?void 0:X.data)==null?void 0:G.error.message)==="Email already taken"&&B({email:y.response.data.error.message})}},se=()=>{v?w(v):f()},{buttonSubmitLabel:q,isDisabled:Q,next:v}=Be[L],Fe=L==="create"?t.createElement(O.z,{type:"submit",loading:V},A(q)):t.createElement(O.z,{type:"button",loading:V,onClick:f},A(q));return x?t.createElement(Pe.P,{onClose:f,labelledBy:"title"},t.createElement(ye.x,null,t.createElement(De.O,{label:_},t.createElement(Ce.$,{isCurrent:!0},_))),t.createElement(Oe.J9,{enableReinitialize:!0,initialValues:Y,onSubmit:ae,validationSchema:Ie,validateOnChange:!1},({errors:P,handleChange:B,values:X})=>t.createElement(a.l0,null,t.createElement(he.f,null,t.createElement(j.k,{direction:"column",alignItems:"stretch",gap:6},L!=="create"&&t.createElement(x,{registrationToken:K}),t.createElement(M.x,null,t.createElement(b.Z,{variant:"beta",as:"h2"},A({id:"app.components.Users.ModalCreateBody.block-title.details",defaultMessage:"User details"})),t.createElement(M.x,{paddingTop:4},t.createElement(j.k,{direction:"column",alignItems:"stretch",gap:1},t.createElement(me.r,{gap:5},Ue.map(G=>G.map(y=>t.createElement(ce.P,{key:y.name,...y.size},t.createElement(a.jm,{...y,disabled:Q,error:P[y.name],onChange:B,value:X[y.name]})))))))),t.createElement(M.x,null,t.createElement(b.Z,{variant:"beta",as:"h2"},A({id:"global.roles",defaultMessage:"User's role"})),t.createElement(M.x,{paddingTop:4},t.createElement(me.r,{gap:5},t.createElement(ce.P,{col:6,xs:12},t.createElement(Le.Z,{disabled:Q,error:P.roles,onChange:B,value:X.roles})),I.map(G=>G.map(y=>t.createElement(ce.P,{key:y.name,...y.size},t.createElement(a.jm,{...y,disabled:Q,onChange:B,value:X[y.name]}))))))))),t.createElement(Ae.m,{startActions:t.createElement(O.z,{variant:"tertiary",onClick:f,type:"button"},A({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:Fe})))):null};Ee.propTypes={onToggle:m().func.isRequired,onSuccess:m().func.isRequired};const Se=Ee,de=({pagination:i})=>t.createElement(M.x,{paddingTop:4},t.createElement(j.k,{alignItems:"flex-end",justifyContent:"space-between"},t.createElement(a.v4,null),t.createElement(a.tU,{pagination:i})));de.defaultProps={pagination:{pageCount:0,pageSize:10,total:0}},de.propTypes={pagination:m().shape({page:m().number,pageCount:m().number,pageSize:m().number,total:m().number})};const We=de,Ke=[{name:"firstname",metadatas:{label:"Firstname"},fieldSchema:{type:"string"}},{name:"lastname",metadatas:{label:"Lastname"},fieldSchema:{type:"string"}},{name:"email",metadatas:{label:"Email"},fieldSchema:{type:"email"}},{name:"username",metadatas:{label:"Username"},fieldSchema:{type:"string"}},{name:"isActive",metadatas:{label:"Active user"},fieldSchema:{type:"boolean"}}],xe=[{name:"firstname",key:"firstname",metadatas:{label:{id:"Settings.permissions.users.firstname",defaultMessage:"Firstname"},sortable:!0}},{name:"lastname",key:"lastname",metadatas:{label:{id:"Settings.permissions.users.lastname",defaultMessage:"Lastname"},sortable:!0}},{key:"email",name:"email",metadatas:{label:{id:"Settings.permissions.users.email",defaultMessage:"Email"},sortable:!0}},{key:"roles",name:"roles",metadatas:{label:{id:"Settings.permissions.users.roles",defaultMessage:"Roles"},sortable:!1},cellFormatter({roles:i},{formatMessage:f}){return t.createElement(b.Z,{textColor:"neutral800"},i.map(L=>f({id:`Settings.permissions.users.${L.code}`,defaultMessage:L.name})).join(`,
`))}},{key:"username",name:"username",metadatas:{label:{id:"Settings.permissions.users.username",defaultMessage:"Username"},sortable:!0}},{key:"isActive",name:"isActive",metadatas:{label:{id:"Settings.permissions.users.user-status",defaultMessage:"User status"},sortable:!1},cellFormatter({isActive:i},{formatMessage:f}){return t.createElement(j.k,null,t.createElement(a.qb,{isActive:i,variant:i?"success":"danger"}),t.createElement(b.Z,{textColor:"neutral800"},f({id:i?"Settings.permissions.users.active":"Settings.permissions.users.inactive",defaultMessage:i?"Active":"Inactive"})))}}],ge=["ee","license-limit-info"],pe=()=>{const{post:i}=(0,a.kY)(),{formatAPIError:f}=(0,a.So)(),[L,w]=(0,t.useState)(!1),V=(0,D.v9)(h._),{allowedActions:{canCreate:z,canDelete:K,canRead:U}}=(0,a.ss)(V.settings.users),A=(0,n.useQueryClient)(),H=(0,a.lm)(),{formatMessage:T}=(0,g.Z)(),{search:c}=(0,C.TH)();(0,a.go)();const{users:$,pagination:I,isError:Y,isLoading:x,refetch:N}=(0,R.R)(E().parse(c,{ignoreQueryPrefix:!0}),{enabled:U}),_=(0,p.c)(ee,async()=>(await e.e(5833).then(e.bind(e,85833))).CreateActionEE),ae=xe.map(v=>({...v,metadatas:{...v.metadatas,label:T(v.metadatas.label)}})),se=T({id:"global.users",defaultMessage:"Users"}),q=()=>{w(v=>!v)},Q=(0,n.useMutation)(async v=>{await i("/admin/users/batch-delete",{ids:v})},{async onSuccess(){await N(),await A.refetchQueries(ge)},onError(v){H({type:"warning",message:{id:"notification.error",message:f(v),defaultMessage:"An error occured"}})}});return _?t.createElement(l.o,{"aria-busy":x},t.createElement(a.SL,{name:"Users"}),t.createElement(r.T,{primaryAction:z&&t.createElement(_,{onClick:q}),title:se,subtitle:T({id:"Settings.permissions.users.listview.header.subtitle",defaultMessage:"All the users who have access to the Strapi admin panel"})}),U&&t.createElement(o.Z,{startActions:t.createElement(t.Fragment,null,t.createElement(a.m,{label:T({id:"app.component.search.label",defaultMessage:"Search for {target}"},{target:se})}),t.createElement(W.Z,{displayedFilters:Ke}))}),t.createElement(u.D,{canRead:U},!U&&t.createElement(a.ZF,null),Y&&t.createElement("div",null,"TODO: An error occurred"),U&&t.createElement(t.Fragment,null,t.createElement(a.tM,{contentType:"Users",isLoading:x,onConfirmDeleteAll:Q.mutateAsync,onConfirmDelete:v=>Q.mutateAsync([v]),headers:ae,rows:$,withBulkActions:!0,withMainAction:K},t.createElement(ve,{canDelete:K,headers:ae,rows:$,withBulkActions:!0,withMainAction:K})),I&&t.createElement(We,{pagination:I}))),L&&t.createElement(Se,{onSuccess:async()=>{await N(),await A.refetchQueries(ge)},onToggle:q})):null},Ze=()=>{const i=(0,p.c)(pe,async()=>(await e.e(5481).then(e.bind(e,17403))).UserListPageEE);return i?t.createElement(i,null):null}},87901:(S,d,e)=>{e.r(d),e.d(d,{default:()=>s});var t=e(67294),l=e(57993),r=e(86706),o=e(36364),u=e(61611);const s=()=>{const E=(0,r.v9)(o._);return t.createElement(l.O4,{permissions:E.settings.users.main},t.createElement(u.Z,null))}},6324:(S,d,e)=>{e.d(d,{Z:()=>g});var t=e(67294),l=e(12028),r=e(57993),o=e(65186),u=e(45697),a=e.n(u),s=e(86896);const E=({children:n,target:D})=>{const C=(0,r.lm)(),{formatMessage:R}=(0,s.Z)(),{copy:p}=(0,r.VP)(),h=R({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"}),W=async()=>{await p(D)&&C({type:"info",message:{id:"notification.link-copied"}})};return t.createElement(r.Y_,{endAction:t.createElement(l.h,{label:h,noBorder:!0,icon:t.createElement(o.Z,null),onClick:W}),title:D,titleEllipsis:!0,subtitle:n,icon:t.createElement("span",{style:{fontSize:32}},"\u2709\uFE0F"),iconBackground:"neutral100"})};E.propTypes={children:a().oneOfType([a().element,a().string]).isRequired,target:a().string.isRequired};const g=E},30164:(S,d,e)=>{e.d(d,{A:()=>s});var t=e(67294),l=e(45697),r=e.n(l),o=e(86896),u=e(95651),a=e(6324);const s=({registrationToken:E})=>{const{formatMessage:g}=(0,o.Z)(),n=`${window.location.origin}${u.Z}auth/register?registrationToken=${E}`;return t.createElement(a.Z,{target:n},g({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"}))};s.defaultProps={registrationToken:""},s.propTypes={registrationToken:r().string}},85078:(S,d,e)=>{e.d(d,{Z:()=>W});var t=e(67294),l=e(40619),r=e(82562),o=e(57993),u=e(86647),a=e(45697),s=e.n(a),E=e(86896),g=e(88767),n=e(88972);const D=(0,n.F4)`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,C=n.ZP.div`
  animation: ${D} 2s infinite linear;
`,R=()=>t.createElement(C,null,t.createElement(u.Z,null)),p=async()=>{const{get:O}=(0,o.tg)(),{data:Z}=await O("/admin/roles");return Z.data},h=({disabled:O,error:Z,onChange:ne,value:m})=>{const{status:ee,data:le}=(0,g.useQuery)(["roles"],p,{staleTime:5e4}),{formatMessage:F}=(0,E.Z)(),J=Z?F({id:Z,defaultMessage:Z}):"",re=F({id:"app.components.Users.ModalCreateBody.block-title.roles",defaultMessage:"User's roles"}),b=F({id:"app.components.Users.ModalCreateBody.block-title.roles.description",defaultMessage:"A user can have one or several roles"}),j=F({id:"app.components.Select.placeholder",defaultMessage:"Select"}),te=ee==="loading"?t.createElement(R,null):void 0;return t.createElement(l.P,{id:"roles",disabled:O,error:J,hint:b,label:re,name:"roles",onChange:M=>{ne({target:{name:"roles",value:M}})},placeholder:j,multi:!0,startIcon:te,value:m.map(M=>M.toString()),withTags:!0,required:!0},(le||[]).map(M=>t.createElement(r.W,{key:M.id,value:M.id.toString()},F({id:`global.${M.code}`,defaultMessage:M.name}))))};h.defaultProps={disabled:!1,error:void 0},h.propTypes={disabled:s().bool,error:s().string,onChange:s().func.isRequired,value:s().array.isRequired};const W=h},36989:(S,d,e)=>{e.d(d,{Z:()=>r});var t=e(85893),l=e(11047);const r=({startActions:o,endActions:u})=>!o&&!u?null:(0,t.jsxs)(l.k,{justifyContent:"space-between",alignItems:"flex-start",paddingBottom:4,paddingLeft:10,paddingRight:10,children:[(0,t.jsx)(l.k,{gap:2,wrap:"wrap",children:o}),(0,t.jsx)(l.k,{gap:2,shrink:0,wrap:"wrap",children:u})]})},23293:(S,d,e)=>{e.d(d,{Z:()=>r});var t=e(85893);const l=o=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...o,children:[(0,t.jsx)("path",{fill:"#32324D",d:"M0 2.8A.8.8 0 0 1 .8 2h22.4a.8.8 0 0 1 .8.8v2.71a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V2.8Z"}),(0,t.jsx)("path",{fill:"#32324D",d:"M1.922 7.991C.197 6.675 0 6.252 0 5.289h23.953c.305 1.363-1.594 2.506-2.297 3.125-1.953 1.363-6.253 4.36-7.828 5.45-1.575 1.09-3.031.455-3.562 0-2.063-1.41-6.62-4.557-8.344-5.873ZM22.8 18H1.2c-.663 0-1.2.471-1.2 1.053v1.894C0 21.529.537 22 1.2 22h21.6c.663 0 1.2-.471 1.2-1.053v-1.894c0-.582-.537-1.053-1.2-1.053Z"}),(0,t.jsx)("path",{fill:"#32324D",d:"M0 9.555v10.972h24V9.554c-2.633 1.95-8.367 6.113-9.96 7.166-1.595 1.052-3.352.438-4.032 0L0 9.555Z"})]}),r=l}}]);
