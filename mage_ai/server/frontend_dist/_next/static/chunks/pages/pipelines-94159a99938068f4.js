(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1221],{52749:function(e,n,i){"use strict";var t=i(82394),r=i(82684),o=i(71180),u=i(55485),l=i(93369),c=i(7267),s=i(38276),d=i(30160),a=i(35576),p=i(17488),f=i(72473),h=i(4015),v=i(70515),m=i(81728),b=i(28598);function j(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function g(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?j(Object(i),!0).forEach((function(n){(0,t.Z)(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):j(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}n.Z=function(e){var n,i,t,j,x=e.createPipeline,Z=e.isLoading,w=e.onClose,P=(0,r.useRef)(null),C=(0,r.useState)(!1),y=C[0],_=C[1],I=(0,r.useState)({name:(0,m.Y6)()}),O=I[0],k=I[1];return(0,r.useEffect)((function(){var e;null===P||void 0===P||null===(e=P.current)||void 0===e||e.focus()}),[]),(0,b.jsxs)(h.Nk,{children:[(0,b.jsx)(h.I5,{children:(0,b.jsx)(u.ZP,{alignItems:"center",justifyContent:"center",children:(0,b.jsx)(f.AISparkle,{size:5*v.iI,warning:!0})})}),(0,b.jsx)(h.gI,{children:(0,b.jsxs)(s.Z,{py:1,children:[(0,b.jsx)(s.Z,{mb:1,children:(0,b.jsx)(d.ZP,{default:!0,children:"New pipeline"})}),(0,b.jsx)(d.ZP,{textOverflow:!0,children:"Using AI"})]})}),(0,b.jsxs)(h.gI,{children:[(0,b.jsx)(d.ZP,{default:!0,children:"Name"}),(0,b.jsx)(p.Z,{alignRight:!0,noBackground:!0,noBorder:!0,onChange:function(e){return k((function(n){return g(g({},n),{},{name:e.target.value})}))},paddingVertical:v.iI,placeholder:"Enter pipeline name...",value:(null===O||void 0===O?void 0:O.name)||""})]}),(0,b.jsx)(h.gI,{children:(0,b.jsxs)(u.ZP,{flexDirection:"column",fullWidth:!0,children:[(0,b.jsx)(s.Z,{mb:2,pt:1,children:(0,b.jsx)(d.ZP,{default:!0,children:"Describe what the pipeline should do"})}),(0,b.jsxs)(s.Z,{pb:1,pr:v.cd,children:[(0,b.jsx)(a.Z,{fullWidth:!0,onChange:function(e){return k((function(n){return g(g({},n),{},{llm:{request:{pipeline_description:e.target.value},use_case:c.z.GENERATE_PIPELINE_WITH_DESCRIPTION}})}))},placeholder:"Type the pipeline purpose...",ref:P,rows:8,value:(null===O||void 0===O||null===(n=O.llm)||void 0===n||null===(i=n.request)||void 0===i?void 0:i.pipeline_description)||""}),(Z||y)&&(0,b.jsx)(s.Z,{mt:1,children:(0,b.jsx)(d.ZP,{warning:!0,children:"Pipeline is being generated using AI based on your description above..."})})]})]})}),(0,b.jsx)(h.$b,{children:(0,b.jsxs)(u.ZP,{fullWidth:!0,children:[(0,b.jsx)(l.ZP,{bold:!0,centerText:!0,disabled:!(null!==O&&void 0!==O&&O.name)||!(null!==O&&void 0!==O&&null!==(t=O.llm)&&void 0!==t&&null!==(j=t.request)&&void 0!==j&&j.pipeline_description),loading:Z||y,onClick:function(){_(!0),x({pipeline:O}).then((function(){return _(!1)}))},primary:!0,tabIndex:0,uuid:"AIControlPanel/CreatePipeline",children:"Create pipeline"}),w&&(0,b.jsx)(s.Z,{ml:1,children:(0,b.jsx)(o.ZP,{onClick:w,tabIndex:0,children:"Cancel"})})]})})]})}},94629:function(e,n,i){"use strict";i.d(n,{Z:function(){return P}});var t=i(82394),r=i(21831),o=i(82684),u=i(50724),l=i(1402),c=i(97618),s=i(70613),d=i(31557),a=i(68899),p=i(28598);function f(e,n){var i=e.children,t=e.noPadding;return(0,p.jsx)(a.HS,{noPadding:t,ref:n,children:i})}var h=o.forwardRef(f),v=i(62547),m=i(82571),b=i(77417),j=i(46684),g=i(75375);function x(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function Z(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?x(Object(i),!0).forEach((function(n){(0,t.Z)(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):x(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function w(e,n){e.addProjectBreadcrumbToCustomBreadcrumbs;var i=e.after,t=e.afterHeader,o=e.afterHidden,f=e.afterWidth,x=e.afterWidthOverride,w=e.appendBreadcrumbs,P=e.before,C=e.beforeHeader,y=e.beforeWidth,_=e.breadcrumbs,I=e.children,O=e.contained,k=e.errors,A=e.headerMenuItems,T=e.headerOffset,S=e.hideAfterCompletely,E=e.mainContainerHeader,D=e.navigationItems,M=e.setAfterHidden,R=e.setAfterWidth,N=e.setBeforeWidth,B=e.setErrors,G=e.subheaderChildren,H=e.subheaderNoPadding,U=e.title,L=e.uuid,$=(0,g.Z)(L,{beforeResizeOffset:g.H,setWidthAfter:R,setWidthBefore:N,widthAfter:f,widthBefore:y,widthOverrideAfter:x}),W=$.mainContainerRef,F=$.mousedownActiveAfter,Y=$.mousedownActiveBefore,z=$.setMousedownActiveAfter,q=$.setMousedownActiveBefore,V=$.setWidthAfter,Q=$.setWidthBefore,K=$.widthAfter,X=$.widthBefore,J=(0,b.Z)().project,ee=[];return _&&ee.push.apply(ee,(0,r.Z)(_)),null!==_&&void 0!==_&&_.length&&!w||!J||null!==_&&void 0!==_&&_.length||ee.unshift({bold:!w,label:function(){return U}}),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(s.Z,{title:U}),(0,p.jsx)(d.Z,{breadcrumbs:ee,menuItems:A}),(0,p.jsxs)(a.Nk,{ref:n,children:[0!==(null===D||void 0===D?void 0:D.length)&&(0,p.jsx)(a.lm,{showMore:!0,children:(0,p.jsx)(m.Z,{navigationItems:D,showMore:!0})}),(0,p.jsx)(c.Z,{flex:1,flexDirection:"column",children:(0,p.jsxs)(v.Z,{after:i,afterHeader:t,afterHeightOffset:j.Mz,afterHidden:o,afterMousedownActive:F,afterWidth:K,before:P,beforeHeader:C,beforeHeightOffset:j.Mz,beforeMousedownActive:Y,beforeWidth:P?X:a.k1,contained:O,headerOffset:T,hideAfterCompletely:!i||S,leftOffset:P?a.k1:null,mainContainerHeader:E,mainContainerRef:W,setAfterHidden:M,setAfterMousedownActive:z,setAfterWidth:V,setBeforeMousedownActive:q,setBeforeWidth:Q,children:[G&&(0,p.jsx)(h,{noPadding:H,children:G}),I]})})]}),k&&(0,p.jsx)(u.Z,{disableClickOutside:!0,isOpen:!0,onClickOutside:function(){return null===B||void 0===B?void 0:B(null)},children:(0,p.jsx)(l.Z,Z(Z({},k),{},{onClose:function(){return null===B||void 0===B?void 0:B(null)}}))})]})}var P=o.forwardRef(w)},65458:function(e,n,i){"use strict";i.d(n,{d:function(){return d}});var t=i(13507),r=i(72473),o=i(57653),u=i(70515),l=i(81728),c=i(28598),s=1.5*u.iI,d=function(e,n){var i=[{beforeIcon:(0,c.jsx)(r.BatchPipeline,{}),label:function(){return"Standard (batch)"},onClick:function(){return e({pipeline:{name:(0,l.Y6)()}})},uuid:"Pipelines/NewPipelineMenu/standard"},{beforeIcon:(0,c.jsx)(r.DataIntegrationPipeline,{}),label:function(){return"Data integration"},onClick:function(){return e({pipeline:{name:(0,l.Y6)(),type:o.qL.INTEGRATION}})},uuid:"Pipelines/NewPipelineMenu/integration"},{beforeIcon:(0,c.jsx)(t.Z,{size:s}),label:function(){return"Streaming"},onClick:function(){return e({pipeline:{name:(0,l.Y6)(),type:o.qL.STREAMING}})},uuid:"Pipelines/NewPipelineMenu/streaming"}];return null!==n&&void 0!==n&&n.showBrowseTemplates&&i.push({beforeIcon:(0,c.jsx)(r.TemplateShapes,{}),label:function(){return"From a template"},onClick:function(){var e;return null===n||void 0===n||null===(e=n.showBrowseTemplates)||void 0===e?void 0:e.call(n)},uuid:"Pipelines/NewPipelineMenu/custom_template"}),null!==n&&void 0!==n&&n.showAIModal&&i.push({beforeIcon:(0,c.jsx)(r.AISparkle,{}),label:function(){return"Using AI (beta)"},onClick:function(){var e;return null===n||void 0===n||null===(e=n.showAIModal)||void 0===e?void 0:e.call(n)},uuid:"Pipelines/NewPipelineMenu/AI_modal"}),i}},8666:function(e,n,i){"use strict";var t;i.d(n,{b:function(){return t}}),function(e){e.BLOCK="block",e.PIPELINE="pipeline"}(t||(t={}))},55620:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return De}});var t=i(77837),r=i(75582),o=i(21831),u=i(82394),l=i(38860),c=i.n(l),s=i(12691),d=i.n(s),a=i(82684),p=i(69864),f=i(34376),h=i(52749),v=i(60523),m=i(71180),b=i(90299),j=i(31882),g=i(94629),x=i(97618),Z=i(55485),w=i(85854),P=i(93369),C=i(65956),y=i(38276),_=i(30160),I=i(35576),O=i(17488),k=i(28598);var A=function(e){var n=e.description,i=e.isLoading,t=e.maxWidth,r=e.minWidth,o=e.noEmptyValue,u=e.onClose,l=e.onSave,c=e.textArea,s=e.title,d=e.value,p=(0,a.useRef)(null),f=(0,a.useState)(d),h=f[0],v=f[1],b=c?I.Z:O.Z;return(0,a.useEffect)((function(){var e;null===p||void 0===p||null===(e=p.current)||void 0===e||e.focus()}),[]),(0,k.jsxs)(C.Z,{maxWidth:t,minWidth:r,children:[(0,k.jsx)(_.ZP,{bold:!0,children:s}),(0,k.jsx)(y.Z,{mt:1,children:(0,k.jsx)(b,{monospace:!0,onChange:function(e){return v(e.target.value)},ref:p,rows:c?7:null,value:h})}),n&&(0,k.jsx)(y.Z,{mt:2,children:(0,k.jsx)(_.ZP,{muted:!0,small:!0,children:n})}),(0,k.jsx)(y.Z,{mt:3,children:(0,k.jsxs)(Z.ZP,{children:[(0,k.jsx)(P.ZP,{bold:!0,inline:!0,loading:i,onClick:function(){h===d||o&&!h?u():l(h)},outline:!0,primary:!0,uuid:"Inputs/InputModal/SaveInput",children:"Save"}),(0,k.jsx)(y.Z,{ml:1}),(0,k.jsx)(m.ZP,{onClick:u,children:"Cancel"})]})})]})},T=i(48670),S=i(55072),E=i(57653),D=i(55729),M=i(93808),R=i(82359),N=i(44085),B=i(4190),G=i(75499),H=i(48381),U=i(69650),L=i(85544),$=i(35686),W=i(44897),F=i(77417),Y=i(42631),z=i(44425),q=i(72473),V=i(23780),Q=i(8666),K=i(46684),X=i(53808),J="pipeline_list_filters",ee="pipeline_list_group_bys",ne="pipeline_list_sort_column_index",ie="pipeline_list_sort_direction",te="pipeline_list_selected_tab_uuid";function re(e){return(0,X.t8)(J,e),e}function oe(e){return(0,X.t8)(ee,e),e}var ue=i(11498),le=i(32929),ce=i(44898),se=i(70515),de=i(30229),ae=i(81655),pe=i(31608),fe=i(81728),he=i(3917),ve=i(72619),me=i(69419),be=i(65458),je=i(15610),ge=i(42122),xe=i(95924),Ze=i(86735),we=i(70320),Pe=i(89538),Ce=i(44952);function ye(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function _e(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?ye(Object(i),!0).forEach((function(n){(0,u.Z)(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):ye(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}var Ie={Icon:q.Schedule,label:function(){return"Recently viewed"},uuid:"recent"},Oe={Icon:q.PipelineV3,label:function(e){return null!==e&&void 0!==e&&e.count?"All pipelines \u203a ".concat((null===e||void 0===e?void 0:e.count)||0):"All pipelines"},uuid:"all"},ke=[Oe,Ie],Ae="tab",Te=[E.$1.SEARCH],Se={borderRadius:"".concat(Y.BG,"px"),iconOnly:!0,noBackground:!0,noBorder:!0,outline:!0,padding:"4px"};function Ee(){var e,n=(0,f.useRouter)(),i=(0,a.useRef)(null),t=(0,a.useRef)(null),l=(0,a.useRef)(null),c=(0,a.useRef)(null),s=(0,F.Z)(),P=s.fetchProjects,I=s.project,O=(0,a.useState)(null),M=O[0],Y=O[1],ye=(0,a.useState)(null),Ee=ye[0],De=ye[1],Me=(0,a.useState)(null),Re=Me[0],Ne=Me[1],Be=(0,a.useCallback)((function(e){Ne(e),clearTimeout(c.current),c.current=setTimeout((function(){return(0,je.u)((0,u.Z)({},E.$1.SEARCH,e))}),500)}),[Ne]),Ge=(0,a.useState)({}),He=Ge[0],Ue=Ge[1],Le=(0,a.useState)(null),$e=Le[0],We=Le[1],Fe=(0,me.iV)(),Ye=_e({},(0,me.DQ)(Fe,[E.$1.SEARCH,E.$1.STATUS,E.$1.TAG,E.$1.TYPE].concat((0,o.Z)(ue.RG)))),ze=(0,a.useMemo)((function(){return null===Fe||void 0===Fe?void 0:Fe.tab}),[Fe]);(0,a.useEffect)((function(){var e;Y(null===i||void 0===i||null===(e=i.current)||void 0===e?void 0:e.getBoundingClientRect().height)}),[Fe,i]);var qe=(0,a.useMemo)((function(){var e;return(0,we.hY)(null===I||void 0===I||null===(e=I.features)||void 0===e?void 0:e[R.d.LOCAL_TIMEZONE])}),[null===I||void 0===I?void 0:I.features]),Ve=(0,a.useMemo)((function(){var e;return null===I||void 0===I||null===(e=I.features)||void 0===e?void 0:e[R.d.OPERATION_HISTORY]}),[I]),Qe=(0,a.useMemo)((function(){return qe?ae.O$:{}}),[qe]),Ke=$.ZP.pipelines.list(_e(_e({},Ye),{},{include_schedules:1}),{revalidateOnFocus:!1}),Xe=Ke.data,Je=Ke.mutate,en=(0,a.useMemo)((function(){return(null===Fe||void 0===Fe?void 0:Fe[E.$1.HISTORY_DAYS])||7}),[Fe]),nn=$.ZP.pipelines.list(_e(_e({},Ye),{},(e={},(0,u.Z)(e,E.$1.HISTORY_DAYS,(0,fe.HW)(en)?Number(en):en),(0,u.Z)(e,"include_schedules",1),e)),{},{pauseFetch:!Ve||!ze||Ie.uuid!==ze}),tn=nn.data,rn=nn.mutate,on=(0,a.useCallback)((function(e){return e}),[]),un=(0,a.useMemo)((function(){var e=on((null===Xe||void 0===Xe?void 0:Xe.pipelines)||[]);if(null!==Fe&&void 0!==Fe&&Fe[E.$1.TAG]){var n=Fe[E.$1.TAG];e=e.filter((function(e){var i=e.tags;return i.some((function(e){return n.includes(e)}))||0===i.length&&n.includes(E.$1.NO_TAGS)}))}return e}),[Xe,on,Fe]),ln=(0,a.useMemo)((function(){return on((null===tn||void 0===tn?void 0:tn.pipelines)||[])}),[tn,on]),cn=(0,a.useMemo)((function(){return[1,2,3,4,5,6,8,9]}),[]),sn=null===Fe||void 0===Fe?void 0:Fe[ae.lG.SORT_COL_IDX],dn=null===Fe||void 0===Fe?void 0:Fe[ae.lG.SORT_DIRECTION],an=(0,a.useMemo)((function(){return sn?{columnIndex:+sn,sortDirection:dn||ae.sh.ASC}:void 0}),[sn,dn]),pn=null===Fe||void 0===Fe?void 0:Fe[E.$1.GROUP],fn=(0,p.Db)((function(e){var n=e.pipelineUUID,i=e.filesOnly,t=void 0!==i&&i;return $.ZP.downloads.pipelines.useCreate(n)({download:{ignore_folder_structure:t}})}),{onSuccess:function(e){return(0,ve.wD)(e,{callback:function(){var n=e.data.download.token;(0,Ce.K)(n)},onErrorCallback:function(e,n){return We({errors:n,response:e})}})}}),hn=(0,r.Z)(fn,1)[0];(0,a.useEffect)((function(){null!==Ye&&void 0!==Ye&&Ye[E.$1.SEARCH]&&null===Re&&Ne(null===Ye||void 0===Ye?void 0:Ye[E.$1.SEARCH])}),[Ye,Re,Ne]),(0,a.useEffect)((function(){var e,n={};if(!sn){var i=(0,X.U2)(ne,null),t=(0,X.U2)(ie,ae.sh.ASC);null!==i&&(n[ae.lG.SORT_COL_IDX]=i,n[ae.lG.SORT_DIRECTION]=t)}Ve&&(ze?(0,X.t8)(te,ze):n.tab=(0,X.U2)(te,null===ke||void 0===ke||null===(e=ke[0])||void 0===e?void 0:e.uuid));if(pn)oe((0,u.Z)({},pn,!0));else{var o,l=(0,X.U2)(ee,{});l&&Object.entries(l).forEach((function(e){var n=(0,r.Z)(e,2),i=n[0],t=n[1];!o&&t&&(o=i)})),o&&(n[E.$1.GROUP]=o)}if((0,ge.Qr)(Ye)){var c=(0,u.Z)({},ue.$D.LIMIT,S.Q),s=(0,X.U2)(J,{});s&&Object.entries(s).forEach((function(e){var n=(0,r.Z)(e,2),i=n[0],t=n[1];"undefined"!==typeof t&&null!==t&&(ue.RG.includes(i)||Te.includes(i)?c[i]=t:(c[i]=[],Object.entries(t).forEach((function(e){var n=(0,r.Z)(e,2),t=n[0];n[1]&&c[i].push(t)}))))})),(0,ge.Qr)(c)||(n={},Object.entries(_e(_e({},n),c)||{}).forEach((function(e){var i=(0,r.Z)(e,2),t=i[0],o=i[1];"undefined"!==typeof o&&null!==o&&(n[t]=o)})))}else{var d={};Object.entries(Ye).forEach((function(e){var n=(0,r.Z)(e,2),i=n[0],t=n[1];d[i]={};var o,u=t;"undefined"!==typeof t&&null!==t&&(ue.RG.includes(i)||Te.includes(i)?d[i]=u:(Array.isArray(u)||(u=[u]),u&&Array.isArray(u)&&(null===(o=u)||void 0===o||o.forEach((function(e){d[i][e]=!0})))))})),re((0,ge.hB)(d))}(0,ge.Qr)(n)||(0,je.u)((0,ge.hB)(n),{pushHistory:!1})}),[pn,Ve,Ye,ze,cn,sn,dn]),(0,a.useEffect)((function(){(0,ve.bB)(Xe,We)}),[Xe]);var vn=function(e){return(0,p.Db)($.ZP.pipelines.useCreate(),{onSuccess:function(n){return(0,ve.wD)(n,{callback:function(n){var i=n.pipeline.uuid;null===e||void 0===e||e(i)},onErrorCallback:function(e,n){return We({errors:n,response:e})}})}})},mn=vn((function(e){return n.push("/pipelines/[pipeline]/edit","/pipelines/".concat(e,"/edit"))})),bn=(0,r.Z)(mn,2),jn=bn[0],gn=bn[1].isLoading,xn=vn((function(){null===Je||void 0===Je||Je(),null===rn||void 0===rn||rn()})),Zn=(0,r.Z)(xn,2),wn=Zn[0],Pn=Zn[1].isLoading,Cn=(0,p.Db)((function(e){return $.ZP.pipelines.useUpdate(e.uuid)({pipeline:e})}),{onSuccess:function(e){return(0,ve.wD)(e,{callback:function(e){var n=e.pipeline.uuid;Ue((function(e){return _e(_e({},e),{},(0,u.Z)({},n,!1))})),Je(),null===rn||void 0===rn||rn(),null===Mn||void 0===Mn||Mn(),De(null)},onErrorCallback:function(e,n){var i,t=null===e||void 0===e||null===(i=e.url_parameters)||void 0===i?void 0:i.pk;Ue((function(e){return _e(_e({},e),{},(0,u.Z)({},t,!1))})),We({errors:n,response:e})}})}}),yn=(0,r.Z)(Cn,2),_n=yn[0],In=yn[1].isLoading,On=(0,p.Db)((function(e){return $.ZP.pipelines.useDelete(e)()}),{onSuccess:function(e){return(0,ve.wD)(e,{callback:function(){null===Je||void 0===Je||Je(),null===rn||void 0===rn||rn()},onErrorCallback:function(e,n){return We({errors:n,response:e})}})}}),kn=(0,r.Z)(On,2),An=kn[0],Tn=kn[1].isLoading,Sn=(0,Pe.dd)((function(e){var n=e.pipeline,i=e.pipelineDescription,t=e.pipelineName;return(0,k.jsx)(A,{isLoading:In,minWidth:55*se.iI,noEmptyValue:!!t,onClose:Mn,onSave:function(e){var i=n||Ee;if(i){var r=i.uuid,o={uuid:r};t?o.name=e:o.description=e,Ue((function(e){return _e(_e({},e),{},(0,u.Z)({},r,!0))})),_n(o)}},textArea:!t,title:t?"Rename pipeline":"Edit description for ".concat(null===n||void 0===n?void 0:n.uuid),value:t||i})}),{},[In,Ee],{background:!0,uuid:"rename_pipeline_and_save"}),En=(0,r.Z)(Sn,2),Dn=En[0],Mn=En[1],Rn=(0,Pe.dd)((function(){return(0,k.jsx)(V.BC,{children:(0,k.jsx)(v.Z,{contained:!0,onClickCustomTemplate:function(e){jn({pipeline:{custom_template_uuid:null===e||void 0===e?void 0:e.template_uuid,name:(0,fe.Y6)()}}).then((function(){Gn()}))},showBreadcrumbs:!0,tabs:[le.A2]})})}),{},[jn],{background:!0,uuid:"browse_templates"}),Nn=(0,r.Z)(Rn,2),Bn=Nn[0],Gn=Nn[1],Hn=(0,Pe.dd)((function(e){var n=e.cancelButtonText,i=(e.header,e.onCancel),t=e.onSaveSuccess;return(0,k.jsx)(V.BC,{children:(0,k.jsx)(D.Z,{cancelButtonText:n,contained:!0,header:(0,k.jsx)(y.Z,{mb:se.HN,children:(0,k.jsxs)(C.Z,{children:[(0,k.jsx)(_.ZP,{warning:!0,children:"You need to add an OpenAI API key to your project before you can generate pipelines using AI."}),(0,k.jsx)(y.Z,{mt:1,children:(0,k.jsxs)(_.ZP,{warning:!0,children:["Read ",(0,k.jsx)(T.Z,{href:"https://help.openai.com/en/articles/4936850-where-do-i-find-my-secret-api-key",openNewWindow:!0,children:"OpenAI\u2019s documentation"})," to get your API key."]})})]})}),onCancel:function(){null===i||void 0===i||i(),$n()},onSaveSuccess:function(e){P(),$n(),null===t||void 0===t||t(e)}})})}),{},[P],{background:!0,uuid:"configure_project"}),Un=(0,r.Z)(Hn,2),Ln=Un[0],$n=Un[1],Wn=(0,Pe.dd)((function(){return(0,k.jsx)(V.BC,{children:(0,k.jsx)(h.Z,{createPipeline:jn,isLoading:gn,onClose:zn})})}),{},[jn,gn],{background:!0,disableClickOutside:!0,disableCloseButton:!0,uuid:"AI_modal"}),Fn=(0,r.Z)(Wn,2),Yn=Fn[0],zn=Fn[1],qn=(0,a.useMemo)((function(){return(0,be.d)(jn,{showAIModal:function(){null!==I&&void 0!==I&&I.openai_api_key?Yn():Ln({onSaveSuccess:function(){Yn()}})},showBrowseTemplates:Bn})}),[jn,I,Yn,Bn,Ln]),Vn=$.ZP.tags.list().data,Qn=(0,a.useMemo)((function(){return(0,Ze.YC)((null===Vn||void 0===Vn?void 0:Vn.tags)||[],(function(e){return e.uuid}))}),[Vn]),Kn=(0,a.useMemo)((function(){return(0,k.jsx)(L.Z,{addButtonProps:{isLoading:gn,label:"New",menuItems:qn},deleteRowProps:{confirmationMessage:"This is irreversible and will immediately delete everything associated           with the pipeline, including its blocks, triggers, runs, logs, and history.",isLoading:Tn,item:"pipeline",onDelete:function(){window.confirm("Are you sure you want to delete pipeline ".concat(null===Ee||void 0===Ee?void 0:Ee.uuid,"?"))&&An(null===Ee||void 0===Ee?void 0:Ee.uuid)}},extraActionButtonProps:{Icon:q.Clone,confirmationDescription:"Cloning the selected pipeline will create a new pipeline with the same           configuration and code blocks. The blocks use the same block files as the original pipeline.           Pipeline triggers, runs, backfills, and logs are not copied over to the new pipeline.",confirmationMessage:"Do you want to clone the pipeline ".concat(null===Ee||void 0===Ee?void 0:Ee.uuid,"?"),isLoading:Pn,onClick:function(){return wn({pipeline:{clone_pipeline_uuid:null===Ee||void 0===Ee?void 0:Ee.uuid}})},openConfirmationDialogue:!0,tooltip:"Clone pipeline"},filterOptions:{status:E.kA,tag:[E.$1.NO_TAGS].concat((0,o.Z)(Qn.map((function(e){return e.uuid})))),type:Object.values(E.qL)},filterValueLabelMapping:{status:E.kA.reduce((function(e,n){return _e(_e({},e),{},(0,u.Z)({},n,(0,fe.J3)((0,fe.kC)(n))))}),{}),tag:_e((0,u.Z)({},E.$1.NO_TAGS,"No tags"),Qn.reduce((function(e,n){var i=n.uuid;return _e(_e({},e),{},(0,u.Z)({},i,i))}),{})),type:E.G7},groupButtonProps:{groupByLabel:pn,menuItems:[{beforeIcon:pn===E.r0.STATUS?(0,k.jsx)(q.Check,{fill:W.Z.content.default,size:1.5*se.iI}):(0,k.jsx)(q.Circle,{muted:!0,size:1.5*se.iI}),label:function(){return(0,fe.kC)(E.r0.STATUS)},onClick:function(){var e=pn===E.r0.STATUS?null:E.r0.STATUS;e||oe({}),(0,je.u)((0,u.Z)({},E.$1.GROUP,e),{pushHistory:!0})},uuid:"Pipelines/GroupMenu/Status"},{beforeIcon:pn===E.r0.TAG?(0,k.jsx)(q.Check,{fill:W.Z.content.default,size:1.5*se.iI}):(0,k.jsx)(q.Circle,{muted:!0,size:1.5*se.iI}),label:function(){return(0,fe.kC)(E.r0.TAG)},onClick:function(){var e=pn===E.r0.TAG?null:E.r0.TAG;e||oe({}),(0,je.u)((0,u.Z)({},E.$1.GROUP,e),{pushHistory:!0})},uuid:"Pipelines/GroupMenu/Tag"},{beforeIcon:pn===E.r0.TYPE?(0,k.jsx)(q.Check,{fill:W.Z.content.default,size:1.5*se.iI}):(0,k.jsx)(q.Circle,{muted:!0,size:1.5*se.iI}),label:function(){return(0,fe.kC)(E.r0.TYPE)},onClick:function(){var e=pn===E.r0.TYPE?null:E.r0.TYPE;e||oe({}),(0,je.u)((0,u.Z)({},E.$1.GROUP,e),{pushHistory:!0})},uuid:"Pipelines/GroupMenu/Type"}]},moreActionsMenuItems:[{label:function(){return"Rename pipeline"},onClick:function(){return Dn({pipelineName:null===Ee||void 0===Ee?void 0:Ee.name})},uuid:"Pipelines/MoreActionsMenu/Rename"},{label:function(){return"Edit description"},onClick:function(){return Dn({pipeline:Ee,pipelineDescription:null===Ee||void 0===Ee?void 0:Ee.description})},uuid:"Pipelines/MoreActionsMenu/EditDescription"}],onClickFilterDefaults:function(){re({}),n.push("/pipelines")},onFilterApply:function(e,n){Object.values(n).every((function(e){return!(null!==e&&void 0!==e&&e.length)}))&&re({})},query:Ye,resetLimitOnFilterApply:!0,searchProps:{onChange:Be,value:Re},selectedRowId:null===Ee||void 0===Ee?void 0:Ee.uuid,setSelectedRow:De})}),[wn,An,pn,Pn,gn,Tn,qn,Ye,n,Re,Ee,Be,Dn,Qn]),Xn=(0,V.VI)(null,{},[],{uuid:"pipelines/list"}),Jn=(0,r.Z)(Xn,1)[0],ei=(0,p.Db)($.ZP.projects.useUpdate(null===I||void 0===I?void 0:I.name),{onSuccess:function(e){return(0,ve.wD)(e,{callback:function(){P()},onErrorCallback:function(e,n){return Jn({errors:n,response:e})}})}}),ni=(0,r.Z)(ei,2),ii=ni[0],ti=ni[1].isLoading,ri=(0,a.useCallback)((function(e){return ii({project:e})}),[ii]),oi=(0,Pe.dd)((function(){return(0,k.jsxs)(C.Z,{maxWidth:60*se.iI,children:[(0,k.jsx)(y.Z,{mb:1,children:(0,k.jsx)(w.Z,{children:"Help improve Mage"})}),(0,k.jsx)(y.Z,{mb:se.cd,children:(0,k.jsx)(_.ZP,{default:!0,children:"Please contribute usage statistics to help improve the developer experience for you and everyone in the community \ud83e\udd1d."})}),(0,k.jsx)(y.Z,{mb:se.cd,children:(0,k.jsx)(C.Z,{success:!0,children:(0,k.jsxs)(Z.ZP,{alignItems:"center",children:[(0,k.jsx)(q.Secrets,{size:5*se.iI,success:!0}),(0,k.jsx)(y.Z,{mr:1}),(0,k.jsx)(x.Z,{children:(0,k.jsx)(_.ZP,{children:"All usage statistics are completely anonymous. It\u2019s impossible for Mage to know which statistics belongs to whom."})})]})})}),(0,k.jsx)(y.Z,{mb:se.cd,children:(0,k.jsxs)(_.ZP,{default:!0,children:["By opting into sending usage statistics to ",(0,k.jsx)(T.Z,{href:"https://www.mage.ai",openNewWindow:!0,children:"Mage"}),", it\u2019ll help the team and community of contributors (",(0,k.jsx)(T.Z,{href:"https://www.mage.ai/chat",openNewWindow:!0,children:"Magers"}),") learn what\u2019s going wrong with the tool and what improvements can be made."]})}),(0,k.jsx)(y.Z,{mb:se.cd,children:(0,k.jsx)(_.ZP,{default:!0,children:"In addition to helping reduce potential errors, you\u2019ll help inform which features are useful and which need work."})}),(0,k.jsx)(y.Z,{mb:se.cd,children:(0,k.jsxs)(Z.ZP,{alignItems:"center",justifyContent:"space-between",children:[(0,k.jsx)(_.ZP,{bold:!0,children:"I want to help make Mage more powerful for everyone"}),(0,k.jsx)(y.Z,{mr:se.cd}),(0,k.jsx)(U.Z,{checked:!0,onCheck:function(){window.confirm("Are you sure you don\u2019t want to help everyone in the community?")&&ri({deny_improve_mage:!0,help_improve_mage:!1}).then((function(){return ci()}))}})]})}),ti&&(0,k.jsx)(y.Z,{mb:se.cd,children:(0,k.jsx)(B.Z,{inverted:!0})}),(0,k.jsx)(y.Z,{mb:se.cd,children:(0,k.jsxs)(_.ZP,{muted:!0,small:!0,children:["To learn more about how this works, please check out the ",(0,k.jsx)(T.Z,{href:"https://docs.mage.ai/contributing/statistics/overview",openNewWindow:!0,small:!0,children:"documentation"}),"."]})}),(0,k.jsx)(m.ZP,{onClick:function(){return ri({help_improve_mage:!0}).then((function(){return ci()}))},secondary:!0,children:"Close"})]})}),{},[I],{background:!0,hideCallback:function(){ri({help_improve_mage:!0})},uuid:"help_mage"}),ui=(0,r.Z)(oi,2),li=ui[0],ci=ui[1];(0,a.useEffect)((function(){I&&null===(null===I||void 0===I?void 0:I.help_improve_mage)&&li()}),[I,li]);var si=(0,a.useCallback)((function(e){var n={};null===e||void 0===e||e.forEach((function(e,i){var t=null===e||void 0===e?void 0:e[pn];if(E.r0.STATUS===pn){var r=(e||{}).schedules,o=void 0===r?[]:r,u=o.length;t=o.find((function(e){var n=e.status;return de.fq.ACTIVE===n}))?E.QK.ACTIVE:u>=1?E.QK.INACTIVE:E.QK.NO_SCHEDULES}else if(E.r0.TAG===pn){t=(null===e||void 0===e?void 0:e.tags)?(0,Ze.YC)(e.tags,(function(e){return e})).join(", "):""}n[t]||(n[t]=[]),n[t].push(i)}));var i=[],t=[];E.r0.STATUS===pn?Object.values(E.QK).forEach((function(e){i.push(n[e]),t.push((0,fe.vg)(e))})):E.r0.TAG===pn?(0,Ze.YC)(Object.keys(n),(function(e){return e})).forEach((function(e){i.push(n[e]),e?t.push(e.split(", ").map((function(e,n){return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("div",{style:{marginLeft:n>=1?4:0}},"".concat(e,"-").concat(n,"-spacing")),(0,k.jsx)(j.Z,{small:!0,children:(0,k.jsx)(_.ZP,{children:e})},"".concat(e,"-").concat(n))]})}))):t.push("No tags")})):E.r0.TYPE===pn&&Object.values(E.qL).forEach((function(e){i.push(n[e]),t.push(E.G7[e])}));var r=[],o=[];return null===i||void 0===i||i.forEach((function(e,n){"undefined"!==typeof e&&null!==e&&(null===e||void 0===e?void 0:e.length)>=1&&(o.push(e),r.push(null===t||void 0===t?void 0:t[n]))})),{rowGroupHeaders:r,rowsGroupedByIndex:o}}),[pn]),di=(0,a.useMemo)((function(){return si(un)}),[si,un]),ai=di.rowGroupHeaders,pi=di.rowsGroupedByIndex,fi=(0,a.useMemo)((function(){return si(ln)}),[si,ln]),hi=fi.rowGroupHeaders,vi=fi.rowsGroupedByIndex,mi=(0,a.useCallback)((function(e,i,r){return(0,k.jsx)(G.Z,{columnFlex:[null,null,null,2,null,null,null,1,null,null,null],columns:[{label:function(){return""},uuid:"action"},{uuid:(0,fe.kC)(E.r0.STATUS)},{uuid:"Name"},{uuid:"Description"},{uuid:(0,fe.kC)(E.r0.TYPE)},_e(_e({},Qe),{},{uuid:"Updated at"}),_e(_e({},Qe),{},{uuid:"Created at"}),{uuid:"Tags"},{uuid:"Blocks"},{uuid:"Triggers"},{center:!0,label:function(){return""},uuid:"Actions"}],isSelectedRow:function(n){var i;return(null===(i=e[n])||void 0===i?void 0:i.uuid)===(null===Ee||void 0===Ee?void 0:Ee.uuid)},localStorageKeySortColIdx:ne,localStorageKeySortDirection:ie,onClickRow:function(n){return De((function(i){var t=e[n];return(null===i||void 0===i?void 0:i.uuid)!==(null===t||void 0===t?void 0:t.uuid)?t:null}))},onDoubleClickRow:function(i){n.push("/pipelines/[pipeline]/edit","/pipelines/".concat(e[i].uuid,"/edit"))},ref:t,renderRightClickMenuItems:function(i){var t=e[i];return[{label:function(){return"Edit description"},onClick:function(){return Dn({pipeline:t,pipelineDescription:null===t||void 0===t?void 0:t.description})},uuid:"edit_description"},{label:function(){return"Rename"},onClick:function(){return Dn({pipeline:t,pipelineName:null===t||void 0===t?void 0:t.name})},uuid:"rename"},{label:function(){return"Clone"},onClick:function(){return wn({pipeline:{clone_pipeline_uuid:null===t||void 0===t?void 0:t.uuid}})},uuid:"clone"},{label:function(){return"Download (keep folder structure)"},onClick:function(){hn({filesOnly:!1,pipelineUUID:null===t||void 0===t?void 0:t.uuid})},uuid:"download_keep_folder_structure"},{label:function(){return"Download (without folder structure)"},onClick:function(){hn({filesOnly:!0,pipelineUUID:null===t||void 0===t?void 0:t.uuid})},uuid:"download_without_folder_structure"},{label:function(){return"Add/Remove tags"},onClick:function(){n.push("/pipelines/[pipeline]/settings","/pipelines/".concat(null===t||void 0===t?void 0:t.uuid,"/settings"))},uuid:"add_tags"},{label:function(){return"Create template"},onClick:function(){n.push("/templates?object_type=".concat(ce.R,"&new=1&pipeline_uuid=").concat(null===t||void 0===t?void 0:t.uuid))},uuid:"create_custom_template"},{label:function(){return"Create global data product"},onClick:function(){n.push("/global-data-products?object_type=".concat(Q.b.PIPELINE,"&new=1&object_uuid=").concat(null===t||void 0===t?void 0:t.uuid))},uuid:"create_global_data_product"},{label:function(){return"Delete"},onClick:function(){window.confirm("Are you sure you want to delete pipeline ".concat(null===t||void 0===t?void 0:t.uuid,"?"))&&An(null===t||void 0===t?void 0:t.uuid)},uuid:"delete"}]},rightClickMenuHeight:252,rightClickMenuWidth:30*se.iI,rowGroupHeaders:i,rows:null===e||void 0===e?void 0:e.map((function(e,i){var t=e.blocks,r=e.created_at,o=e.description,l=e.schedules,c=e.tags,s=e.type,a=e.updated_at,p=e.uuid,f=t.filter((function(e){var n=e.type;return z.tf.SCRATCHPAD!==n})).length,h=l.length,v=l.find((function(e){var n=e.status;return de.fq.ACTIVE===n})),b=s===E.ad,j=(0,k.jsx)("div",{children:(0,k.jsx)(H.Z,{tags:null===c||void 0===c?void 0:c.map((function(e){return{uuid:e}}))})},"pipeline_tags_".concat(i));return[h>=1||He[p]?(0,k.jsx)(m.ZP,{iconOnly:!0,loading:!!He[p],noBackground:!0,noBorder:!0,noPadding:!0,onClick:function(n){(0,xe.j)(n),Ue((function(e){return _e(_e({},e),{},(0,u.Z)({},p,!0))})),_n(_e(_e({},e),{},{status:v?de.fq.INACTIVE:de.fq.ACTIVE}))},children:v?(0,k.jsx)(q.Pause,{muted:!0,size:2*se.iI}):(0,k.jsx)(q.PlayButtonFilled,{default:!0,size:2*se.iI})}):null,(0,k.jsx)(_.ZP,{default:!v,monospace:!0,success:!!v,children:v?de.fq.ACTIVE:h>=1?de.fq.INACTIVE:"no schedules"},"pipeline_status_".concat(i)),(0,k.jsx)(d(),{as:"/pipelines/".concat(p),href:"/pipelines/[pipeline]",passHref:!0,children:(0,k.jsx)(T.Z,{sameColorAsText:!0,children:p})},"pipeline_name_".concat(i)),(0,k.jsx)(_.ZP,{default:!0,preWrap:!0,title:o,children:o},"pipeline_description_".concat(i)),(0,k.jsx)(_.ZP,{bold:b,danger:b,children:b?(0,fe.kC)(E.ad):E.G7[s]},"pipeline_type_".concat(i)),(0,k.jsx)(_.ZP,{monospace:!0,small:!0,title:a?(0,he._6)(a):null,children:a?(0,he.XG)((0,he.d$)(a,{includeSeconds:!0,utcFormat:!0}),qe):(0,k.jsx)(k.Fragment,{children:"\u2014"})},"pipeline_updated_at_".concat(i)),(0,k.jsx)(_.ZP,{monospace:!0,small:!0,title:r?(0,he._6)(r):null,children:r?(0,he.XG)(r.slice(0,19),qe):(0,k.jsx)(k.Fragment,{children:"\u2014"})},"pipeline_created_at_".concat(i)),j,(0,k.jsx)(_.ZP,{default:0===f,monospace:!0,children:f},"pipeline_block_count_".concat(i)),(0,k.jsx)(_.ZP,{default:0===h,monospace:!0,children:h},"pipeline_trigger_count_".concat(i)),(0,k.jsxs)(x.Z,{flex:1,justifyContent:"flex-end",children:[(0,k.jsx)(m.ZP,_e(_e({},Se),{},{onClick:function(){hn({pipelineUUID:p})},title:"Download (keep folder structure)",children:(0,k.jsx)(q.Save,{default:!0,size:2*se.iI})})),(0,k.jsx)(y.Z,{mr:1}),(0,k.jsx)(m.ZP,_e(_e({},Se),{},{onClick:function(){n.push("/pipelines/[pipeline]","/pipelines/".concat(p))},title:"Detail",children:(0,k.jsx)(q.Open,{default:!0,size:2*se.iI})})),(0,k.jsx)(y.Z,{mr:1}),(0,k.jsx)(m.ZP,_e(_e({},Se),{},{onClick:function(){n.push("/pipelines/[pipeline]/logs","/pipelines/".concat(p,"/logs"))},title:"Logs",children:(0,k.jsx)(q.File,{default:!0,size:2*se.iI})}))]},"chevron_icon_".concat(i))]})),rowsGroupedByIndex:r,sortableColumnIndexes:cn,sortedColumn:an,stickyHeader:!0,uuid:"pipelines_table"})}),[wn,An,hn,qe,He,n,Ee,Ue,De,Dn,cn,an,Qe,_n]),bi=(0,a.useMemo)((function(){return mi(un,ai,pi)}),[un,mi,ai,pi]),ji=(0,a.useMemo)((function(){return mi(ln,hi,vi)}),[ln,mi,hi,vi]),gi=(0,a.useMemo)((function(){return(null===un||void 0===un?void 0:un.length)||0}),[un]),xi=(0,a.useMemo)((function(){return(null===ln||void 0===ln?void 0:ln.length)||0}),[ln]),Zi=(0,a.useMemo)((function(){return(!Ve||Oe.uuid===ze)&&!gi||Ve&&Ie.uuid===ze&&!xi}),[Ve,gi,xi,ze]),wi=(0,a.useMemo)((function(){var e=null===Ye||void 0===Ye?void 0:Ye[ue.$D.LIMIT];return(0,k.jsxs)(Z.ZP,{alignItems:"center",children:[(0,k.jsx)(_.ZP,{muted:!0,small:!0,children:"Per page"}),(0,k.jsx)(y.Z,{mr:1}),(0,k.jsxs)(N.Z,{compact:!0,onChange:function(e){var n;return(0,je.u)((n={},(0,u.Z)(n,ue.$D.LIMIT,e.target.value),(0,u.Z)(n,ue.$D.OFFSET,0),n),{pushHistory:!0})},small:!0,value:e,children:[e&&(e>5*S.Q||e%S.Q)&&(0,k.jsx)("option",{value:e,children:e}),(0,Ze.w6)(5).map((function(e,n){var i=(n+1)*S.Q;return(0,k.jsx)("option",{value:i,children:i},i)}))]})]})}),[Ye]),Pi=(0,a.useMemo)((function(){var e,n,i=Xe;Ve&&Ie.uuid===ze&&(i=tn);var t=(null===(e=i)||void 0===e||null===(n=e.metadata)||void 0===n?void 0:n.count)||0,r=(null===Ye||void 0===Ye?void 0:Ye[ue.$D.LIMIT])||S.Q,o=(null===Ye||void 0===Ye?void 0:Ye[ue.$D.OFFSET])||0,l=Math.ceil(t/r);return(0,k.jsx)(y.Z,{p:se.cd,children:(0,k.jsx)(S.ZP,{maxPages:S.Et,onUpdate:function(e){var n=Number(e);(0,je.u)((0,u.Z)({},ue.$D.OFFSET,n*r))},page:Math.floor(o/r),totalPages:l})})}),[Xe,tn,Ve,Ye,ze]);return(0,k.jsxs)(g.Z,{errors:$e,setErrors:We,subheaderChildren:(0,k.jsxs)(Z.ZP,{alignItems:"center",justifyContent:"space-between",children:[Kn,wi]}),title:"Pipelines",uuid:"pipelines/index",children:[Ve&&(0,k.jsx)(y.Z,{px:se.cd,ref:i,children:(0,k.jsx)(b.Z,{noPadding:!0,onClickTab:function(e){var n,i=e.uuid;return(0,je.u)((n={},(0,u.Z)(n,Ae,i),(0,u.Z)(n,ue.$D.OFFSET,0),n),{pushHistory:!0})},regularSizeText:!0,selectedTabUUID:ze,tabs:ke.map((function(e){var n=e.Icon,i=e.label;return{Icon:n,label:function(){var e;return i({count:null===Xe||void 0===Xe||null===(e=Xe.metadata)||void 0===e?void 0:e.count})},uuid:e.uuid}})),underlineStyle:!0})}),Zi?(0,k.jsx)(y.Z,{p:se.Mq,children:Xe?(0,k.jsx)(_.ZP,{bold:!0,default:!0,monospace:!0,muted:!0,children:"No pipelines available"}):(0,k.jsx)(B.Z,{inverted:!0,large:!0})}):null,(0,k.jsxs)(pe.cl,{hide:Zi,includePadding:!!pn,maxHeight:"calc(100vh - ".concat(K.Mz+74+(M||44)+68,"px)"),children:[(!Ve||Oe.uuid===ze)&&bi,Ve&&Ie.uuid===ze&&ji]}),(0,k.jsx)("div",{ref:l,children:Pi})]})}Ee.getInitialProps=(0,t.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}),e)})));var De=(0,M.Z)(Ee)},79274:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pipelines",function(){return i(55620)}])},80022:function(e,n,i){"use strict";function t(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}i.d(n,{Z:function(){return t}})},15544:function(e,n,i){"use strict";function t(e){return t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(e)}i.d(n,{Z:function(){return t}})},13692:function(e,n,i){"use strict";i.d(n,{Z:function(){return r}});var t=i(61049);function r(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&(0,t.Z)(e,n)}},93189:function(e,n,i){"use strict";i.d(n,{Z:function(){return o}});var t=i(12539),r=i(80022);function o(e,n){if(n&&("object"===t(n)||"function"===typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return(0,r.Z)(e)}}},function(e){e.O(0,[1557,4241,523,2474,3548,9774,2888,179],(function(){return n=79274,e(e.s=n);var n}));var n=e.O();_N_E=n}]);