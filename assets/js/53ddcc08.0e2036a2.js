"use strict";(self.webpackChunkhelp=self.webpackChunkhelp||[]).push([[7162],{67218:function(e,t,s){s.r(t),s.d(t,{assets:function(){return k},contentTitle:function(){return f},default:function(){return v},frontMatter:function(){return d},metadata:function(){return h},toc:function(){return g}});var a=s(87462),i=s(63366),o=(s(67294),s(3905)),p=s(26389),r=s(94891),n=s(74933),l=s(47507),m=s(24310),c=s(63303),u=(s(75035),s(85162)),y=["components"],d={id:"get-project-status-simplify",title:"Get Project status - simplify",description:"Get simplify Project status",sidebar_label:"Get Project status - simplify",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"Get Project status - simplify",description:"Get simplify Project status",tags:["Project"],security:[{ApiKey:[]}],parameters:[{description:"Project ID",in:"path",name:"id",required:!0,schema:{type:"string"}}],responses:{200:{description:"Successful response - simplify project status",content:{"application/json":{schema:{properties:{tests:{type:"array",items:{type:"object",properties:{name:{type:"string"},url:{type:"string"},status:{type:"string",enum:["OK","Error message"]}}},example:[{name:"Homepage",url:"https://www.testomato.com",status:"OK"},{name:"Contact",url:"https://www.testomato.com/contact",status:'Missing "example" in Website TEXT'}]},total:{description:"Total count of checks",type:"integer",example:2},failed:{description:"Count of failing checks",example:1}}}}}}},method:"get",path:"/project/{id}/simple-status",servers:[{url:"https://testomato.com/api/",description:"Testomato"}],securitySchemes:{ApiKey:{description:"Project or User API key",type:"apiKey",name:"apiKey",in:"query"}},info:{title:"Testomato API",description:"",version:"1.0.0",contact:{email:"support@testomato.com"}},postman:{name:"Get Project status - simplify",description:{content:"Get simplify Project status",type:"text/plain"},url:{path:["project",":id","simple-status"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Project ID",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"apikey",apikey:[{type:"any",value:"apiKey",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"query",key:"in"}]}}},sidebar_class_name:"get api-method",info_path:"docs/api/testomato-api"},f=void 0,h={unversionedId:"api/get-project-status-simplify",id:"api/get-project-status-simplify",title:"Get Project status - simplify",description:"Get simplify Project status",source:"@site/docs/api/get-project-status-simplify.api.mdx",sourceDirName:"api",slug:"/api/get-project-status-simplify",permalink:"/api/get-project-status-simplify",draft:!1,editUrl:"https://github.com/testomato/help.testomato.com/edit/master/docs/api/get-project-status-simplify.api.mdx",tags:[],version:"current",lastUpdatedAt:1665667103,formattedLastUpdatedAt:"Oct 13, 2022",frontMatter:{id:"get-project-status-simplify",title:"Get Project status - simplify",description:"Get simplify Project status",sidebar_label:"Get Project status - simplify",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"Get Project status - simplify",description:"Get simplify Project status",tags:["Project"],security:[{ApiKey:[]}],parameters:[{description:"Project ID",in:"path",name:"id",required:!0,schema:{type:"string"}}],responses:{200:{description:"Successful response - simplify project status",content:{"application/json":{schema:{properties:{tests:{type:"array",items:{type:"object",properties:{name:{type:"string"},url:{type:"string"},status:{type:"string",enum:["OK","Error message"]}}},example:[{name:"Homepage",url:"https://www.testomato.com",status:"OK"},{name:"Contact",url:"https://www.testomato.com/contact",status:'Missing "example" in Website TEXT'}]},total:{description:"Total count of checks",type:"integer",example:2},failed:{description:"Count of failing checks",example:1}}}}}}},method:"get",path:"/project/{id}/simple-status",servers:[{url:"https://testomato.com/api/",description:"Testomato"}],securitySchemes:{ApiKey:{description:"Project or User API key",type:"apiKey",name:"apiKey",in:"query"}},info:{title:"Testomato API",description:"",version:"1.0.0",contact:{email:"support@testomato.com"}},postman:{name:"Get Project status - simplify",description:{content:"Get simplify Project status",type:"text/plain"},url:{path:["project",":id","simple-status"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Project ID",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"apikey",apikey:[{type:"any",value:"apiKey",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"query",key:"in"}]}}},sidebar_class_name:"get api-method",info_path:"docs/api/testomato-api"},sidebar:"docs",previous:{title:"Get Project status",permalink:"/api/get-project-status"},next:{title:"Starting Project",permalink:"/api/starting-project"}},k={},g=[{value:"Get Project status - simplify",id:"get-project-status---simplify",level:2}],j={toc:g};function v(e){var t=e.components,s=(0,i.Z)(e,y);return(0,o.kt)("wrapper",(0,a.Z)({},j,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"get-project-status---simplify"},"Get Project status - simplify"),(0,o.kt)("p",null,"Get simplify Project status"),(0,o.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"Path Parameters")),(0,o.kt)("div",null,(0,o.kt)("ul",null,(0,o.kt)(n.Z,{className:"paramsItem",param:{description:"Project ID",in:"path",name:"id",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,o.kt)("div",null,(0,o.kt)(p.Z,{mdxType:"ApiTabs"},(0,o.kt)(u.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Successful response - simplify project status")),(0,o.kt)("div",null,(0,o.kt)(r.Z,{groupId:"mime-type",mdxType:"MimeTabs"},(0,o.kt)(u.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,o.kt)(c.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,o.kt)(u.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{textAlign:"left"}},(0,o.kt)("strong",null,"Schema")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,o.kt)("details",{style:{}},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"tests"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,o.kt)("div",{style:{marginLeft:"1rem"}},(0,o.kt)(m.Z,{collapsible:!1,name:"name",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(m.Z,{collapsible:!1,name:"url",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(m.Z,{collapsible:!1,name:"status",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`OK`, `Error message`]",defaultValue:void 0,mdxType:"SchemaItem"})))),(0,o.kt)(m.Z,{collapsible:!1,name:"total",required:!1,schemaDescription:"Total count of checks",schemaName:"integer",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(m.Z,{collapsible:!1,name:"failed",required:!1,schemaDescription:"Count of failing checks",schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,o.kt)(u.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,o.kt)(l.Z,{responseExample:'{\n  "tests": [\n    {\n      "name": "string",\n      "url": "string",\n      "status": "OK"\n    }\n  ],\n  "total": 0\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}v.isMDXComponent=!0}}]);