"use strict";(self.webpackChunkhelp=self.webpackChunkhelp||[]).push([[2489],{91954:function(e,t,a){a.r(t),a.d(t,{assets:function(){return g},contentTitle:function(){return h},default:function(){return b},frontMatter:function(){return y},metadata:function(){return k},toc:function(){return j}});var r=a(87462),i=a(63366),s=(a(67294),a(3905)),o=a(26389),n=a(94891),p=a(74933),c=a(47507),l=a(24310),u=a(63303),d=(a(75035),a(85162)),m=["components"],y={id:"starting-project",title:"Starting Project",description:"Start all checks in project",sidebar_label:"Starting Project",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"Starting Project",description:"Start all checks in project",tags:["Project"],security:[{ApiKey:[]}],parameters:[{description:"Project ID",in:"path",name:"id",required:!0,schema:{type:"string"}},{name:"tests",description:"Array of",in:"query",required:!1,schema:{type:"array"}}],responses:{200:{description:"Job starts successfully",content:{"application/json":{schema:{properties:{projectId:{type:"string",description:"A unique Project ID",example:"5e95ddf7a39e5a44428b4581"},jobId:{type:"string",description:"A unique ID for each Job",example:"5e9602e7a39e5a46428b457f"},start:{type:"string",description:"Value `ok` means your tests have successfully started",example:"ok"},results:{type:"string",description:"The URL where you can view your results",example:"https://www.testomato.com/api/project/5e95ddf7a39e5a44428b4581/job/5e9602e7a39e5a46428b457f/results?apikey=4PJAOwTK"}}}}}}},method:"get",path:"/project/{id}/start",servers:[{url:"https://testomato.com/api/",description:"Testomato"}],securitySchemes:{ApiKey:{description:"Project or User API key",type:"apiKey",name:"apiKey",in:"query"}},info:{title:"Testomato API",description:"### Authenticate\n\nIf you would like to participate in the future development of our\nroadmap, please don't be shy! We'd love to hear your suggestions:\nsupport@testomato.com\n",version:"1.0.0",contact:{email:"support@testomato.com"}},postman:{name:"Starting Project",description:{content:"Start all checks in project",type:"text/plain"},url:{path:["project",":id","start"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Array of",type:"text/plain"},key:"tests",value:""}],variable:[{disabled:!1,description:{content:"(Required) Project ID",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"apikey",apikey:[{type:"any",value:"apiKey",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"query",key:"in"}]}}},sidebar_class_name:"get api-method",info_path:"docs/api/testomato-api"},h=void 0,k={unversionedId:"api/starting-project",id:"api/starting-project",title:"Starting Project",description:"Start all checks in project",source:"@site/docs/api/starting-project.api.mdx",sourceDirName:"api",slug:"/api/starting-project",permalink:"/api/starting-project",draft:!1,editUrl:"https://github.com/testomato/help.testomato.com/edit/master/docs/api/starting-project.api.mdx",tags:[],version:"current",lastUpdatedAt:1665671661,formattedLastUpdatedAt:"Oct 13, 2022",frontMatter:{id:"starting-project",title:"Starting Project",description:"Start all checks in project",sidebar_label:"Starting Project",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"Starting Project",description:"Start all checks in project",tags:["Project"],security:[{ApiKey:[]}],parameters:[{description:"Project ID",in:"path",name:"id",required:!0,schema:{type:"string"}},{name:"tests",description:"Array of",in:"query",required:!1,schema:{type:"array"}}],responses:{200:{description:"Job starts successfully",content:{"application/json":{schema:{properties:{projectId:{type:"string",description:"A unique Project ID",example:"5e95ddf7a39e5a44428b4581"},jobId:{type:"string",description:"A unique ID for each Job",example:"5e9602e7a39e5a46428b457f"},start:{type:"string",description:"Value `ok` means your tests have successfully started",example:"ok"},results:{type:"string",description:"The URL where you can view your results",example:"https://www.testomato.com/api/project/5e95ddf7a39e5a44428b4581/job/5e9602e7a39e5a46428b457f/results?apikey=4PJAOwTK"}}}}}}},method:"get",path:"/project/{id}/start",servers:[{url:"https://testomato.com/api/",description:"Testomato"}],securitySchemes:{ApiKey:{description:"Project or User API key",type:"apiKey",name:"apiKey",in:"query"}},info:{title:"Testomato API",description:"### Authenticate\n\nIf you would like to participate in the future development of our\nroadmap, please don't be shy! We'd love to hear your suggestions:\nsupport@testomato.com\n",version:"1.0.0",contact:{email:"support@testomato.com"}},postman:{name:"Starting Project",description:{content:"Start all checks in project",type:"text/plain"},url:{path:["project",":id","start"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Array of",type:"text/plain"},key:"tests",value:""}],variable:[{disabled:!1,description:{content:"(Required) Project ID",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"apikey",apikey:[{type:"any",value:"apiKey",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"query",key:"in"}]}}},sidebar_class_name:"get api-method",info_path:"docs/api/testomato-api"},sidebar:"docs",previous:{title:"Get Project status - simplify",permalink:"/api/get-project-status-simplify"},next:{title:"Starting Project Group",permalink:"/api/starting-project-group"}},g={},j=[{value:"Starting Project",id:"starting-project",level:2}],f={toc:j};function b(e){var t=e.components,a=(0,i.Z)(e,m);return(0,s.kt)("wrapper",(0,r.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"starting-project"},"Starting Project"),(0,s.kt)("p",null,"Start all checks in project"),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(p.Z,{className:"paramsItem",param:{description:"Project ID",in:"path",name:"id",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Query Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(p.Z,{className:"paramsItem",param:{name:"tests",description:"Array of",in:"query",required:!1,schema:{type:"array"}},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)(o.Z,{mdxType:"ApiTabs"},(0,s.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Job starts successfully")),(0,s.kt)("div",null,(0,s.kt)(n.Z,{groupId:"mime-type",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(u.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"projectId",required:!1,schemaDescription:"A unique Project ID",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"jobId",required:!1,schemaDescription:"A unique ID for each Job",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"start",required:!1,schemaDescription:"Value `ok` means your tests have successfully started",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"results",required:!1,schemaDescription:"The URL where you can view your results",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(c.Z,{responseExample:'{\n  "projectId": "string",\n  "jobId": "string",\n  "start": "string",\n  "results": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);