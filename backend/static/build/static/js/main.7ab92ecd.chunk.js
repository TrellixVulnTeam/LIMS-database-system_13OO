(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{15:function(t,e,a){},33:function(t,e,a){},62:function(t,e,a){"use strict";a.r(e);a(33);var n=a(8),c=a(9),s=a(11),i=a(10),l=(a(15),a(1)),o=a(12),r=a(0),d=function(t){Object(s.a)(a,t);var e=Object(i.a)(a);function a(){return Object(n.a)(this,a),e.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(r.jsx)("div",{class:"App",children:Object(r.jsx)(o.a,{children:Object(r.jsx)("body",{class:"text-center text-white bg-dark",children:Object(r.jsxs)("div",{class:"main-page-config d-flex p-3 mx-auto flex-column",children:[Object(r.jsx)("header",{class:"mb-auto",children:Object(r.jsxs)("div",{children:[Object(r.jsx)("h5",{class:"float-md-start font-monospace",children:"Prof. Kitney's Lab"}),Object(r.jsxs)("nav",{class:"nav nav-masthead justify-content-center float-md-end",children:[Object(r.jsx)("a",{class:"nav-link active","aria-current":"page",href:"/",children:"Home"}),Object(r.jsx)("a",{class:"nav-link",href:"https://www.imperial.ac.uk/synthetic-biology",children:"Contact"})]})]})}),Object(r.jsxs)("main",{class:"px-4",children:[Object(r.jsx)("h1",{"float-sm-start":!0,children:"Laboratory Inventory Management System (LIMS)"}),Object(r.jsx)("p",{class:"lead",children:"LIMS is designed to track and organize the samples in the lab, considered as one of the most efficient platforms for experimental data recording and management."}),Object(r.jsx)("p",{class:"lead",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"row g-1",children:[Object(r.jsx)("div",{className:"col-3",children:Object(r.jsx)(o.b,{to:"/log",children:Object(r.jsx)("button",{class:"btn btn-outline-primary btn-lg",type:"button",children:"Log"})})}),Object(r.jsx)("div",{className:"col-3",children:Object(r.jsx)(o.b,{to:"/search",children:Object(r.jsx)("button",{className:"btn btn-outline-secondary btn-lg",type:"button",children:"Search"})})}),Object(r.jsx)("div",{className:"col-3",children:Object(r.jsx)(o.b,{to:"/check",children:Object(r.jsx)("button",{className:"btn btn-outline-success btn-lg",type:"button",children:"Check"})})}),Object(r.jsx)("div",{className:"col-3",children:Object(r.jsx)(o.b,{to:"/view",children:Object(r.jsx)("button",{className:"btn btn-outline-danger btn-lg",type:"button",children:"View"})})})]})})})]}),Object(r.jsx)("footer",{class:"mt-auto text-white-50",children:Object(r.jsxs)("p",{children:["Home page from",Object(r.jsx)("a",{href:"https://getbootstrap.com/",class:"text-white",children:"Bootstrap"}),", by ",Object(r.jsx)("a",{href:"https://www.imperial.ac.uk",class:"text-white",children:"@imperial"}),"."]})})]})})})})}}]),a}(l.Component),b=a(14),j=a(31),u=a.n(j),p=function(t){Object(s.a)(a,t);var e=Object(i.a)(a);function a(t){var c;return Object(n.a)(this,a),(c=e.call(this,t)).handleInput=function(t){"inputSampleType"===t.target.id&&c.setState({inputType:t.target.value}),"inputSampleID"===t.target.id&&c.setState({inputID:t.target.value}),"inputLocation"===t.target.id&&c.setState({inputLoc:t.target.value}),"inputStatus"===t.target.id&&c.setState({inputStatus:t.target.value}),"inputQuantity"===t.target.id&&c.setState({inputQ:t.target.value}),"inputUnit"===t.target.id&&c.setState({inputUnit:t.target.value}),"inputCustodian"===t.target.id&&c.setState({inputCustodian:t.target.value})},c.onButtonClick=function(t){if("submitButton"===t.target.id){var e=Object(b.a)(c);u.a.post("/log",{sample_type:e.state.inputType,sample_ID:e.state.inputID,loc:e.state.inputLoc,status:e.state.inputStatus,Q:e.state.inputQ,unit:e.state.inputUnit,custodian:e.state.inputCustodian}).then((function(t){console.log(t.data),this.setState({outputData:t.data})})).catch((function(t){console.log(t)}))}else"closeButton"===t.target.id&&c.setState({inputType:"",inputID:"",inputLoc:"",inputStatus:"",inputQ:"",inputUnit:"",inputCustodian:"",outputData:""})},c.state={inputType:"",inputID:"",inputLoc:"",inputStatus:"",inputQ:"",inputUnit:"",inputCustodian:"",outputData:""},c.handleInput=c.handleInput.bind(Object(b.a)(c)),c.onButtonClick=c.onButtonClick.bind(Object(b.a)(c)),c}return Object(c.a)(a,[{key:"render",value:function(){return Object(r.jsx)("div",{children:Object(r.jsx)("body",{className:"d-flex text-left text-white bg-dark",children:Object(r.jsxs)("div",{className:"main-page-config d-flex p-3 mx-auto flex-column",children:[Object(r.jsx)("h4",{className:"float-md-start font-monospace",children:"Please log sample transaction\uff1a"}),Object(r.jsxs)("form",{children:[Object(r.jsxs)("div",{className:"mb-0",children:[Object(r.jsx)("label",{htmlFor:"inputSampleType",className:"Sample Type:",children:"Sample Type:"}),Object(r.jsx)("input",{type:"type",className:"form-control",id:"inputSampleType","aria-describedby":"typeHelp",onChange:this.handleInput}),Object(r.jsx)("div",{id:"typeHelp",className:"form-text",children:"e.g., blood, DNA, RNA, etc."})]}),Object(r.jsxs)("div",{className:"mb-1",children:[Object(r.jsx)("label",{htmlFor:"inputSampleID",className:"form-label",children:"Sample ID:"}),Object(r.jsx)("input",{type:"id",className:"form-control",id:"inputSampleID","aria-describedby":"idHelp",onChange:this.handleInput}),Object(r.jsx)("div",{id:"idHelp",className:"form-text",children:"e.g., blo001, DNA123, RNA024, etc."})]}),Object(r.jsxs)("div",{className:"mb-1",children:[Object(r.jsx)("label",{htmlFor:"inputLocation",className:"form-label",children:"Storage Location:"}),Object(r.jsx)("input",{type:"loc",className:"form-control",id:"inputLocation","aria-describedby":"locHelp",onChange:this.handleInput}),Object(r.jsx)("div",{id:"locHelp",className:"form-text",children:"e.g., f1, f5, f10, etc."})]}),Object(r.jsxs)("div",{className:"mb-1",children:[Object(r.jsx)("label",{htmlFor:"inputStatus",className:"form-label",children:"Status:"}),Object(r.jsx)("input",{type:"status",className:"form-control",id:"inputStatus","aria-describedby":"statusHelp",onChange:this.handleInput}),Object(r.jsx)("div",{id:"statusHelp",className:"form-text",children:"i.e., available, in use, booked."})]}),Object(r.jsxs)("div",{className:"mb-1",children:[Object(r.jsx)("label",{htmlFor:"inputQuantity",className:"form-label",children:"Quantity Variation:"}),Object(r.jsx)("input",{type:"q",className:"form-control",id:"inputQuantity","aria-describedby":"qHelp",onChange:this.handleInput}),Object(r.jsx)("div",{id:"qHelp",className:"form-text",children:"e.g., 10, -5, -1.5, etc."})]}),Object(r.jsxs)("div",{className:"mb-1",children:[Object(r.jsx)("label",{htmlFor:"inputUnit",className:"form-label",children:"Unit:"}),Object(r.jsx)("input",{type:"unit",className:"form-control",id:"inputUnit","aria-describedby":"unitHelp",onChange:this.handleInput}),Object(r.jsx)("div",{id:"unitHelp",className:"form-text",children:"e.g., ml, plate, tube, etc."})]}),Object(r.jsxs)("div",{className:"mb-1",children:[Object(r.jsx)("label",{htmlFor:"inputCustodian",className:"form-label",children:"Custodian:"}),Object(r.jsx)("input",{type:"custodian",className:"form-control",id:"inputCustodian","aria-describedby":"custodianHelp",onChange:this.handleInput}),Object(r.jsx)("div",{id:"custodianHelp",className:"form-text",children:"e.g., peter, helen, mary, etc."})]}),Object(r.jsx)("button",{type:"button",className:"btn btn-primary","data-bs-toggle":"modal","data-bs-target":"#staticBackdrop",id:"submitButton",onClick:this.onButtonClick,children:"Submit"}),Object(r.jsx)("div",{class:"modal fade",id:"staticBackdrop","data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true",children:Object(r.jsx)("div",{class:"modal-dialog",children:Object(r.jsxs)("div",{class:"modal-content",children:[Object(r.jsxs)("div",{class:"modal-header",children:[Object(r.jsx)("h5",{class:"modal-title text-dark",id:"staticBackdropLabel",children:"Notice"}),Object(r.jsx)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(r.jsx)("div",{class:"modal-body text-dark",children:"You have successfully submitted the sample log!"}),Object(r.jsx)("div",{class:"modal-footer",children:Object(r.jsx)("button",{type:"reset",class:"btn btn-primary","data-bs-dismiss":"modal",id:"closeButton",children:"Close"})})]})})})]})]})})})}}]),a}(l.Component),h=function(t){Object(s.a)(a,t);var e=Object(i.a)(a);function a(){return Object(n.a)(this,a),e.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(r.jsx)("div",{children:Object(r.jsx)("body",{className:"d-flex text-center text-white bg-dark",children:Object(r.jsx)("div",{className:"main-page-config d-flex p-3 mx-auto flex-column",children:Object(r.jsx)("h1",{children:"This is Search page!"})})})})}}]),a}(l.Component),m=function(t){Object(s.a)(a,t);var e=Object(i.a)(a);function a(){return Object(n.a)(this,a),e.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(r.jsx)("div",{children:Object(r.jsx)("body",{className:"d-flex text-center text-white bg-dark",children:Object(r.jsx)("div",{className:"main-page-config d-flex p-3 mx-auto flex-column",children:Object(r.jsx)("h1",{children:"This is Check page!"})})})})}}]),a}(l.Component),x=function(t){Object(s.a)(a,t);var e=Object(i.a)(a);function a(){return Object(n.a)(this,a),e.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(r.jsx)("div",{children:Object(r.jsx)("body",{className:"d-flex text-center text-white bg-dark",children:Object(r.jsx)("div",{className:"main-page-config d-flex p-3 mx-auto flex-column",children:Object(r.jsx)("h1",{children:"This is View page!"})})})})}}]),a}(l.Component),O=a(32),f=a.n(O),g=a(2),y=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,63)).then((function(e){var a=e.getCLS,n=e.getFID,c=e.getFCP,s=e.getLCP,i=e.getTTFB;a(t),n(t),c(t),s(t),i(t)}))};f.a.render(Object(r.jsx)(o.a,{children:Object(r.jsxs)(g.c,{children:[Object(r.jsx)(g.a,{exact:!0,path:"/",component:d}),Object(r.jsx)(g.a,{path:"/log",component:p}),Object(r.jsx)(g.a,{path:"/search",component:h}),Object(r.jsx)(g.a,{path:"/check",component:m}),Object(r.jsx)(g.a,{path:"/view",component:x})]})}),document.getElementById("root")),y(),y()}},[[62,1,2]]]);
//# sourceMappingURL=main.7ab92ecd.chunk.js.map