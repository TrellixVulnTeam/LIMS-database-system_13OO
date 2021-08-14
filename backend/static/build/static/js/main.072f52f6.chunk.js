(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{15:function(t,e,a){},35:function(t,e,a){},65:function(t,e,a){"use strict";a.r(e);a(35);var s=a(4),c=a(5),n=a(7),i=a(6),l=(a(15),a(1)),r=a(12),o=a(0),d=function(t){Object(n.a)(a,t);var e=Object(i.a)(a);function a(){return Object(s.a)(this,a),e.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(o.jsx)("div",{class:"App",children:Object(o.jsx)(r.a,{children:Object(o.jsx)("body",{class:"text-center text-white bg-dark",children:Object(o.jsxs)("div",{class:"main-page-config d-flex p-3 mx-auto flex-column",children:[Object(o.jsx)("header",{class:"mb-auto",children:Object(o.jsxs)("div",{children:[Object(o.jsx)("h5",{class:"float-md-start font-monospace",children:"Prof. Kitney's Lab"}),Object(o.jsxs)("nav",{class:"nav nav-masthead justify-content-center float-md-end",children:[Object(o.jsx)("a",{class:"nav-link active","aria-current":"page",href:"/",children:"Home"}),Object(o.jsx)("a",{class:"nav-link",href:"https://www.imperial.ac.uk/synthetic-biology",children:"Contact"})]})]})}),Object(o.jsxs)("main",{class:"px-4",children:[Object(o.jsx)("h1",{"float-sm-start":!0,children:"Laboratory Inventory Management System (LIMS)"}),Object(o.jsx)("p",{class:"lead",children:"LIMS is designed to track and organize the samples in the lab, considered as one of the most efficient platforms for experimental data recording and management."}),Object(o.jsx)("p",{class:"lead",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"row g-1",children:[Object(o.jsx)("div",{className:"col",children:Object(o.jsx)(r.b,{to:"/log",children:Object(o.jsx)("button",{class:"btn btn-outline-primary btn-lg",type:"button",children:"Log"})})}),Object(o.jsx)("div",{className:"col",children:Object(o.jsx)(r.b,{to:"/search",children:Object(o.jsx)("button",{className:"btn btn-outline-secondary btn-lg",type:"button",children:"Search"})})}),Object(o.jsx)("div",{className:"col",children:Object(o.jsx)(r.b,{to:"/check",children:Object(o.jsx)("button",{className:"btn btn-outline-success btn-lg",type:"button",children:"Check"})})}),Object(o.jsx)("div",{className:"col",children:Object(o.jsx)(r.b,{to:"/view-samples",children:Object(o.jsx)("button",{className:"btn btn-outline-danger btn-lg",type:"button",children:"View samples"})})}),Object(o.jsx)("div",{className:"col",children:Object(o.jsx)(r.b,{to:"/view-logs",children:Object(o.jsx)("button",{className:"btn btn-outline-warning btn-lg",type:"button",children:"View logs"})})})]})})})]}),Object(o.jsx)("footer",{class:"mt-auto text-white-50",children:Object(o.jsxs)("p",{children:["Home page from",Object(o.jsx)("a",{href:"https://getbootstrap.com/",class:"text-white",children:"Bootstrap"}),", by ",Object(o.jsx)("a",{href:"https://www.imperial.ac.uk",class:"text-white",children:"@imperial"}),"."]})})]})})})})}}]),a}(l.Component),b=a(13),u=a(17),h=a.n(u),j=function(t){Object(n.a)(a,t);var e=Object(i.a)(a);function a(t){var c;return Object(s.a)(this,a),(c=e.call(this,t)).handleInput=function(t){"inputSampleType"===t.target.id&&c.setState({inputType:t.target.value}),"inputSampleID"===t.target.id&&c.setState({inputID:t.target.value}),"inputLocation"===t.target.id&&c.setState({inputLoc:t.target.value}),"inputStatus"===t.target.id&&c.setState({inputStatus:t.target.value}),"inputQuantity"===t.target.id&&c.setState({inputQ:t.target.value}),"inputUnit"===t.target.id&&c.setState({inputUnit:t.target.value}),"inputCustodian"===t.target.id&&c.setState({inputCustodian:t.target.value})},c.onButtonClick=function(t){if("submitButton"===t.target.id){var e=Object(b.a)(c);h.a.post("/log",{sample_type:e.state.inputType,sample_ID:e.state.inputID,loc:e.state.inputLoc,status:e.state.inputStatus,Q:e.state.inputQ,unit:e.state.inputUnit,custodian:e.state.inputCustodian}).then((function(t){console.log(t.data),e.setState({outputData:t.data})})).catch((function(t){console.log(t)}))}else"closeButton"===t.target.id&&c.setState({inputType:"",inputID:"",inputLoc:"",inputStatus:"",inputQ:"",inputUnit:"",inputCustodian:"",outputData:""})},c.state={inputType:"",inputID:"",inputLoc:"",inputStatus:"",inputQ:"",inputUnit:"",inputCustodian:"",outputData:""},c.handleInput=c.handleInput.bind(Object(b.a)(c)),c.onButtonClick=c.onButtonClick.bind(Object(b.a)(c)),c}return Object(c.a)(a,[{key:"render",value:function(){return Object(o.jsx)("div",{children:Object(o.jsx)("body",{className:"d-flex text-left text-white bg-dark",children:Object(o.jsxs)("div",{className:"main-page-config d-flex p-3 mx-auto flex-column",children:[Object(o.jsx)("h4",{className:"float-md-start font-monospace",children:"Please log sample transaction\uff1a"}),Object(o.jsxs)("form",{children:[Object(o.jsxs)("div",{className:"mb-0",children:[Object(o.jsx)("label",{htmlFor:"inputSampleType",className:"Sample Type:",children:"Sample Type:"}),Object(o.jsx)("input",{type:"type",className:"form-control",id:"inputSampleType","aria-describedby":"typeHelp",onChange:this.handleInput}),Object(o.jsx)("div",{id:"typeHelp",className:"form-text",children:"e.g., blood, DNA, RNA, etc."})]}),Object(o.jsxs)("div",{className:"mb-1",children:[Object(o.jsx)("label",{htmlFor:"inputSampleID",className:"form-label",children:"Sample ID:"}),Object(o.jsx)("input",{type:"id",className:"form-control",id:"inputSampleID","aria-describedby":"idHelp",onChange:this.handleInput}),Object(o.jsx)("div",{id:"idHelp",className:"form-text",children:"e.g., blo001, DNA123, RNA024, etc."})]}),Object(o.jsxs)("div",{className:"mb-1",children:[Object(o.jsx)("label",{htmlFor:"inputLocation",className:"form-label",children:"Storage Location:"}),Object(o.jsx)("input",{type:"loc",className:"form-control",id:"inputLocation","aria-describedby":"locHelp",onChange:this.handleInput}),Object(o.jsx)("div",{id:"locHelp",className:"form-text",children:"e.g., f1, f5, f10, etc."})]}),Object(o.jsxs)("div",{className:"mb-1",children:[Object(o.jsx)("label",{htmlFor:"inputStatus",className:"form-label",children:"Status:"}),Object(o.jsx)("input",{type:"status",className:"form-control",id:"inputStatus","aria-describedby":"statusHelp",onChange:this.handleInput}),Object(o.jsx)("div",{id:"statusHelp",className:"form-text",children:"i.e., available, in use, booked."})]}),Object(o.jsxs)("div",{className:"mb-1",children:[Object(o.jsx)("label",{htmlFor:"inputQuantity",className:"form-label",children:"Quantity Variation:"}),Object(o.jsx)("input",{type:"q",className:"form-control",id:"inputQuantity","aria-describedby":"qHelp",onChange:this.handleInput}),Object(o.jsx)("div",{id:"qHelp",className:"form-text",children:"e.g., 10, -5, -1.5, etc."})]}),Object(o.jsxs)("div",{className:"mb-1",children:[Object(o.jsx)("label",{htmlFor:"inputUnit",className:"form-label",children:"Unit:"}),Object(o.jsx)("input",{type:"unit",className:"form-control",id:"inputUnit","aria-describedby":"unitHelp",onChange:this.handleInput}),Object(o.jsx)("div",{id:"unitHelp",className:"form-text",children:"e.g., ml, plate, tube, etc."})]}),Object(o.jsxs)("div",{className:"mb-1",children:[Object(o.jsx)("label",{htmlFor:"inputCustodian",className:"form-label",children:"Custodian:"}),Object(o.jsx)("input",{type:"custodian",className:"form-control",id:"inputCustodian","aria-describedby":"custodianHelp",onChange:this.handleInput}),Object(o.jsx)("div",{id:"custodianHelp",className:"form-text",children:"e.g., peter, helen, mary, etc."})]}),Object(o.jsx)("button",{type:"button",className:"btn btn-primary","data-bs-toggle":"modal","data-bs-target":"#staticBackdrop",id:"submitButton",onClick:this.onButtonClick,children:"Submit"}),Object(o.jsx)("div",{class:"modal fade",id:"staticBackdrop","data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true",children:Object(o.jsx)("div",{class:"modal-dialog",children:Object(o.jsxs)("div",{class:"modal-content",children:[Object(o.jsxs)("div",{class:"modal-header",children:[Object(o.jsx)("h5",{class:"modal-title text-dark",id:"staticBackdropLabel",children:"Notice"}),Object(o.jsx)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(o.jsx)("div",{class:"modal-body text-dark",children:"You have successfully submitted the sample log!"}),Object(o.jsx)("div",{class:"modal-footer",children:Object(o.jsx)("button",{type:"reset",class:"btn btn-primary","data-bs-dismiss":"modal",id:"closeButton",children:"Close"})})]})})})]})]})})})}}]),a}(l.Component),p=a(22),m=a.n(p),x=a(33),O=(l.Component,function(t){Object(n.a)(a,t);var e=Object(i.a)(a);function a(t){var c;return Object(s.a)(this,a),(c=e.call(this,t)).handleInput=function(t){"searchSampleType"===t.target.id&&c.setState({searchType:t.target.value}),"searchSampleID"===t.target.id&&c.setState({searchID:t.target.value}),"searchLocation"===t.target.id&&c.setState({searchLoc:t.target.value}),"searchStatus"===t.target.id&&c.setState({searchStatus:t.target.value}),"searchQuantity"===t.target.id&&c.setState({searchQ:t.target.value}),"searchUnit"===t.target.id&&c.setState({searchUnit:t.target.value}),"searchCustodian"===t.target.id&&c.setState({searchCustodian:t.target.value})},c.onButtonClick=function(t){"searchButton"===t.target.id?c.fun().then((function(t){return console.log(t)})):"closeButton"===t.target.id&&c.setState({searchType:"",searchID:"",searchLoc:"",searchStatus:"",searchQ:"",searchUnit:"",searchCustodian:"",outputData:""})},c.state={searchType:"",searchID:"",searchLoc:"",searchStatus:"",searchQ:"",searchUnit:"",searchCustodian:"",outputData:""},c.handleInput=c.handleInput.bind(Object(b.a)(c)),c.onButtonClick=c.onButtonClick.bind(Object(b.a)(c)),c}return Object(c.a)(a,[{key:"fun",value:function(){var t=Object(x.a)(m.a.mark((function t(){var e;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this,t.next=3,h.a.post("/search",{sample_type:e.state.searchType,sample_ID:e.state.searchID,loc:e.state.searchLoc,status:e.state.searchStatus,Q:e.state.searchQ,unit:e.state.searchUnit,custodian:e.state.searchCustodian}).then((function(t){e.setState({outputData:t.data})})).catch((function(t){console.log(t)}));case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(o.jsx)("div",{children:Object(o.jsx)("body",{className:"d-flex text-left text-white bg-dark",children:Object(o.jsxs)("div",{className:"main-page-config d-flex p-3 mx-auto flex-column",children:[Object(o.jsx)("h4",{className:"float-md-start font-monospace",children:"Please log sample transaction\uff1a"}),Object(o.jsxs)("form",{children:[Object(o.jsxs)("div",{className:"mb-0",children:[Object(o.jsx)("label",{htmlFor:"inputSampleType",className:"Sample Type:",children:"Sample Type:"}),Object(o.jsx)("input",{type:"type",className:"form-control",id:"searchSampleType","aria-describedby":"typeHelp",onChange:this.handleInput}),Object(o.jsx)("div",{id:"typeHelp",className:"form-text",children:"e.g., blood, DNA, RNA, etc."})]}),Object(o.jsxs)("div",{className:"mb-1",children:[Object(o.jsx)("label",{htmlFor:"inputSampleID",className:"form-label",children:"Sample ID:"}),Object(o.jsx)("input",{type:"id",className:"form-control",id:"searchSampleID","aria-describedby":"idHelp",onChange:this.handleInput}),Object(o.jsx)("div",{id:"idHelp",className:"form-text",children:"e.g., blo001, DNA123, RNA024, etc."})]}),Object(o.jsxs)("div",{className:"mb-1",children:[Object(o.jsx)("label",{htmlFor:"searchLocation",className:"form-label",children:"Storage Location:"}),Object(o.jsx)("input",{type:"loc",className:"form-control",id:"searchLocation","aria-describedby":"locHelp",onChange:this.handleInput}),Object(o.jsx)("div",{id:"locHelp",className:"form-text",children:"e.g., f1, f5, f10, etc."})]}),Object(o.jsxs)("div",{className:"mb-1",children:[Object(o.jsx)("label",{htmlFor:"searchStatus",className:"form-label",children:"Status:"}),Object(o.jsx)("input",{type:"status",className:"form-control",id:"searchStatus","aria-describedby":"statusHelp",onChange:this.handleInput}),Object(o.jsx)("div",{id:"statusHelp",className:"form-text",children:"i.e., available, in use, booked."})]}),Object(o.jsxs)("div",{className:"mb-1",children:[Object(o.jsx)("label",{htmlFor:"searchQuantity",className:"form-label",children:"Quantity Variation:"}),Object(o.jsx)("input",{type:"q",className:"form-control",id:"searchQuantity","aria-describedby":"qHelp",onChange:this.handleInput}),Object(o.jsx)("div",{id:"qHelp",className:"form-text",children:"e.g., 10, -5, -1.5, etc."})]}),Object(o.jsxs)("div",{className:"mb-1",children:[Object(o.jsx)("label",{htmlFor:"searchUnit",className:"form-label",children:"Unit:"}),Object(o.jsx)("input",{type:"unit",className:"form-control",id:"searchUnit","aria-describedby":"unitHelp",onChange:this.handleInput}),Object(o.jsx)("div",{id:"unitHelp",className:"form-text",children:"e.g., ml, plate, tube, etc."})]}),Object(o.jsxs)("div",{className:"mb-1",children:[Object(o.jsx)("label",{htmlFor:"searchCustodian",className:"form-label",children:"Custodian:"}),Object(o.jsx)("input",{type:"custodian",className:"form-control",id:"searchCustodian","aria-describedby":"custodianHelp",onChange:this.handleInput}),Object(o.jsx)("div",{id:"custodianHelp",className:"form-text",children:"e.g., peter, helen, mary, etc."})]}),Object(o.jsx)("button",{type:"button",className:"btn btn-primary","data-bs-toggle":"modal","data-bs-target":"#staticBackdrop",id:"searchButton",onClick:this.onButtonClick,children:"Search"}),Object(o.jsx)("div",{className:"modal fade",id:"staticBackdrop","data-bs-backdrop":"static","data-bs-keyboard":"false",tabIndex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true",children:Object(o.jsx)("div",{className:"modal-dialog",children:Object(o.jsxs)("div",{className:"modal-content",children:[Object(o.jsxs)("div",{className:"modal-header",children:[Object(o.jsx)("h5",{className:"modal-title text-dark",id:"staticBackdropLabel",children:"Notice"}),Object(o.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(o.jsx)("searchTable",{jsonData:JSON.stringify(this.state.outputData)}),Object(o.jsx)("div",{className:"modal-footer",children:Object(o.jsx)("button",{type:"reset",className:"btn btn-primary","data-bs-dismiss":"modal",id:"closeButton",children:"Close"})})]})})})]})]})})})}}]),a}(l.Component)),f=function(t){Object(n.a)(a,t);var e=Object(i.a)(a);function a(){return Object(s.a)(this,a),e.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(o.jsx)("div",{children:Object(o.jsx)("body",{className:"d-flex text-center text-white bg-dark",children:Object(o.jsx)("div",{className:"main-page-config d-flex p-3 mx-auto flex-column",children:Object(o.jsx)("h1",{children:"This is Check page!"})})})})}}]),a}(l.Component),g=function(t){Object(n.a)(a,t);var e=Object(i.a)(a);function a(){return Object(s.a)(this,a),e.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(o.jsx)("div",{children:Object(o.jsx)("body",{className:"d-flex text-center text-white bg-dark",children:Object(o.jsx)("div",{className:"main-page-config d-flex p-3 mx-auto flex-column",children:Object(o.jsx)("h1",{children:"This is View samples page!"})})})})}}]),a}(l.Component),y=function(t){Object(n.a)(a,t);var e=Object(i.a)(a);function a(){return Object(s.a)(this,a),e.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(o.jsx)("div",{children:Object(o.jsx)("body",{className:"d-flex text-center text-white bg-dark",children:Object(o.jsx)("div",{className:"main-page-config d-flex p-3 mx-auto flex-column",children:Object(o.jsx)("h1",{children:"This is View logs page!"})})})})}}]),a}(l.Component),v=a(34),N=a.n(v),S=a(2),C=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,66)).then((function(e){var a=e.getCLS,s=e.getFID,c=e.getFCP,n=e.getLCP,i=e.getTTFB;a(t),s(t),c(t),n(t),i(t)}))};N.a.render(Object(o.jsx)(r.a,{children:Object(o.jsxs)(S.c,{children:[Object(o.jsx)(S.a,{exact:!0,path:"/",component:d}),Object(o.jsx)(S.a,{path:"/log",component:j}),Object(o.jsx)(S.a,{path:"/search",component:O}),Object(o.jsx)(S.a,{path:"/check",component:f}),Object(o.jsx)(S.a,{path:"/view-samples",component:g}),Object(o.jsx)(S.a,{path:"/view-logs",component:y})]})}),document.getElementById("root")),C(),C()}},[[65,1,2]]]);
//# sourceMappingURL=main.072f52f6.chunk.js.map