"use strict";(self.webpackChunkchatapp=self.webpackChunkchatapp||[]).push([[4409],{28104:(We,T,t)=>{t.r(T),t.d(T,{default:()=>ge});var e=t(67294),i=t(57993),g=t(86706),I=t(36364),b=t(29728),p=t(11047),q=t(77197),y=t(75515),_=t(85018),E=t(41054),ee=t(36968),te=t.n(ee),oe=t(86896),se=t(88767),ne=t(16550),le=t(92686),ae=t(79194),re=t(7761),L=t(11984),m=t(43390),c=t(38705),ie=t(68997),de=t(85230),r=t(86978),ce=t(52258),A=t(3848),ue=t(66578);function fe(){var v;const{workflowId:D}=(0,ne.UO)(),me=(0,g.v9)(I._),{formatMessage:l}=(0,oe.Z)(),k=(0,g.I0)(),{put:ve}=(0,i.kY)(),{formatAPIError:we}=(0,i.So)(),W=(0,i.lm)(),{isLoading:O,meta:d,workflows:S,status:R,refetch:he}=(0,ce.n)(),{collectionTypes:pe,singleTypes:ye,isLoading:Ee}=(0,le.G)(),{status:ke,clientState:{currentWorkflow:{data:a,isDirty:Se,hasDeletedServerStages:x}}}=(0,g.v9)(o=>{var n;return(n=o==null?void 0:o[r.sN])!=null?n:A.E}),{allowedActions:{canDelete:Ce,canUpdate:C}}=(0,i.ss)(me.settings["review-workflows"]),[w,h]=e.useState({}),{getFeature:Me,isLoading:F}=(0,re.q5)(),[V,u]=e.useState(!1),[Te,Z]=e.useState(null),j=S.find(o=>o.id===parseInt(D,10)),X=S.filter(o=>o.id!==parseInt(D,10)).flatMap(o=>o.contentTypes),{mutateAsync:Ie,isLoading:Y}=(0,se.useMutation)(async({workflow:o})=>{const{data:{data:n}}=await ve(`/admin/review-workflows/workflows/${o.id}`,{data:o});return n},{onSuccess(){W({type:"success",message:{id:"notification.success.saved",defaultMessage:"Saved"}})}}),Le=async o=>{var n,B,H,N,P,U,J,Q,G;Z(null);try{return await Ie({workflow:o})}catch(f){return((B=(n=f.response.data)==null?void 0:n.error)==null?void 0:B.name)==="ValidationError"&&((U=(P=(N=(H=f.response.data)==null?void 0:H.error)==null?void 0:N.details)==null?void 0:P.errors)==null?void 0:U.length)>0&&Z((G=(Q=(J=f.response.data)==null?void 0:J.error)==null?void 0:Q.details)==null?void 0:G.errors.reduce(($,K)=>(te()($,K.path,K.message),$),{})),W({type:"warning",message:we(f)}),null}},z=async()=>{await Le(a),await he(),h({})},Ae=async()=>{await z()},De=()=>{h({})},M=(0,E.TA)({enableReinitialize:!0,initialErrors:Te,initialValues:a,async onSubmit(){const o=a.contentTypes.some(n=>X.includes(n));s!=null&&s[r.Ef]&&(d==null?void 0:d.workflowCount)>parseInt(s[r.Ef],10)?u("workflow"):s!=null&&s[r._X]&&a.stages.length>parseInt(s[r._X],10)?u("stage"):x||o?(x&&h(n=>({...n,hasDeletedServerStages:!0})),o&&h(n=>({...n,hasReassignedContentTypes:!0}))):z()},validate(o){return(0,ue.V)({values:o,formatMessage:l})}});(0,ae.v)(r.sN,A.I);const s=Me("review-workflows");return e.useEffect(()=>(k((0,L.fC)({status:R,data:j})),()=>{k((0,L.Js)())}),[R,j,k]),e.useEffect(()=>{!O&&!F&&(s!=null&&s[r.Ef]&&(d==null?void 0:d.workflowCount)>parseInt(s[r.Ef],10)?u("workflow"):s!=null&&s[r._X]&&a.stages.length>parseInt(s[r._X],10)&&u("stage"))},[a.stages.length,F,O,s,d==null?void 0:d.workflowCount,d.workflowsTotal]),e.createElement(e.Fragment,null,e.createElement(m.lx,null),e.createElement(E.Hy,{value:M},e.createElement(E.l0,{onSubmit:M.handleSubmit},e.createElement(m.h4,{navigationAction:e.createElement(m.eJ,{href:"/settings/review-workflows"}),primaryAction:e.createElement(b.z,{startIcon:e.createElement(_.Z,null),type:"submit",size:"M",disabled:!Se||!C,loading:!Object.keys(w).length>0&&Y},l({id:"global.save",defaultMessage:"Save"})),subtitle:a.stages.length>0&&l({id:"Settings.review-workflows.page.subtitle",defaultMessage:"{count, plural, one {# stage} other {# stages}}"},{count:a.stages.length}),title:a.name}),e.createElement(m.fC,null,Ee||ke==="loading"?e.createElement(p.k,{justifyContent:"center"},e.createElement(q.a,null,l({id:"Settings.review-workflows.page.isLoading",defaultMessage:"Workflow is loading"}))):e.createElement(p.k,{alignItems:"stretch",direction:"column",gap:7},e.createElement(de.Y,{canUpdate:C,contentTypes:{collectionTypes:pe,singleTypes:ye},currentWorkflow:a,workflows:S}),e.createElement(ie.U,{canDelete:Ce,canUpdate:C,stages:(v=M.values)==null?void 0:v.stages}))))),e.createElement(i.QH.Root,{isConfirmButtonLoading:Y,isOpen:Object.keys(w).length>0,onToggleDialog:De,onConfirm:Ae},e.createElement(i.QH.Body,null,e.createElement(p.k,{direction:"column",gap:5},w.hasDeletedServerStages&&e.createElement(y.Z,{textAlign:"center",variant:"omega"},l({id:"Settings.review-workflows.page.delete.confirm.stages.body",defaultMessage:"All entries assigned to deleted stages will be moved to the previous stage."})),w.hasReassignedContentTypes&&e.createElement(y.Z,{textAlign:"center",variant:"omega"},l({id:"Settings.review-workflows.page.delete.confirm.contentType.body",defaultMessage:"{count} {count, plural, one {content-type} other {content-types}} {count, plural, one {is} other {are}} already mapped to {count, plural, one {another workflow} other {other workflows}}. If you save changes, {count, plural, one {this} other {these}} {count, plural, one {content-type} other {{count} content-types}} will no more be mapped to the {count, plural, one {another workflow} other {other workflows}} and all corresponding information will be removed."},{count:X.filter(o=>a.contentTypes.includes(o)).length})),e.createElement(y.Z,{textAlign:"center",variant:"omega"},l({id:"Settings.review-workflows.page.delete.confirm.confirm",defaultMessage:"Are you sure you want to save?"}))))),e.createElement(c.fC,{isOpen:V==="workflow",onClose:()=>u(!1)},e.createElement(c.Dx,null,l({id:"Settings.review-workflows.edit.page.workflows.limit.title",defaultMessage:"You\u2019ve reached the limit of workflows in your plan"})),e.createElement(c.uT,null,l({id:"Settings.review-workflows.edit.page.workflows.limit.body",defaultMessage:"Delete a workflow or contact Sales to enable more workflows."}))),e.createElement(c.fC,{isOpen:V==="stage",onClose:()=>u(!1)},e.createElement(c.Dx,null,l({id:"Settings.review-workflows.edit.page.stages.limit.title",defaultMessage:"You have reached the limit of stages for this workflow in your plan"})),e.createElement(c.uT,null,l({id:"Settings.review-workflows.edit.page.stages.limit.body",defaultMessage:"Try deleting some stages or contact Sales to enable more stages."}))))}function ge(){const v=(0,g.v9)(I._);return e.createElement(i.O4,{permissions:v.settings["review-workflows"].main},e.createElement(fe,null))}}}]);
