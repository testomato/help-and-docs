"use strict";(self.webpackChunkhelp=self.webpackChunkhelp||[]).push([[9532],{29035:function(e,t,a){a.r(t),a.d(t,{assets:function(){return b},contentTitle:function(){return h},default:function(){return v},frontMatter:function(){return y},metadata:function(){return f},toc:function(){return g}});var i=a(87462),r=a(63366),o=(a(67294),a(3905)),s=a(26389),n=a(94891),p=a(74933),c=a(47507),l=a(24310),m=a(63303),d=(a(75035),a(85162)),u=["components"],y={id:"get-project",title:"Get project",description:"Retrieve project by ID",sidebar_label:"Get project",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"Get project",description:"Retrieve project by ID",security:[{ApiToken:[]}],tags:["Project"],responses:{200:{description:"Successful operation",content:{"application/json":{schema:{allOf:[{type:"object",properties:{id:{description:"Project ID",example:"50a9f72f14db3be812000233",type:"string"},title:{description:"Project title",type:"string"},url:{description:"Project base URL",example:"https://testomato.com",type:"string"},period:{description:"Period of test checking - `false` means never check Test automatically.",default:"5 minutes",enum:["5 minutes","30 minutes","1 hour","8 hours","1 day","7 days",!1],type:"string"},uptimeUrl:{description:"Uptime URL",type:"string"},uptimeEnabled:{description:"Uptime period in seconds - `false` means uptime is disabled",type:"string",enum:[!1,15,30,60]},apiKey:{description:"apiKey that can be used for the project operations",example:123456,type:"string"},payerId:{description:"Identification of the project owner.",type:"integer"},location:{description:"Project check location",type:"string",enum:["eu","de","gb","ca","us","tx","dc","sg","hk"]},checkDefaultErrors:{type:"boolean",default:!0},created:{description:"Date and time of project creation",type:"string",format:"date-time"},userAgent:{description:"User agent",default:"Testomatobot/1.0 (Linux x86_64; +https://www.testomato.com/testomatobot) minicrawler/5.2.2",type:"string"},timeout:{description:"Cumulated project timeout in seconds",type:"integer",default:3},delay:{description:"Bulk request delay in miliseconds",type:"integer",format:"int64",default:50},userIds:{type:"array",description:"Array of users ID's with access to the project",items:{type:"integer"}},name:{description:"Project name was replaced by Project title",type:"string",deprecated:!0}}},{type:"object",properties:{permissions:{type:"object",description:"Project permissions for current user",properties:{read:{type:"boolean",description:"Can current user view results?"},run:{type:"boolean",description:"Can current user run checks?"},editTest:{type:"boolean"},edit:{type:"boolean",description:"Can current user edit project settings?"},manageUsers:{description:"Can current user manage others?",type:"boolean",default:!0},apiKey:{type:"boolean",description:"Can current user view apiKey?",default:!0},leave:{description:"Can current user leave project?",type:"boolean",default:!0}}}}}]}}}},404:{description:"Object not found error",content:{"application/json":{schema:{properties:{message:{description:"Error message text",default:"Object not found",type:"string"},code:{description:"Error code number",default:404,type:"integer"},ok:{type:"boolean",default:!1},error:{type:"boolean",default:!0}}}}}}},parameters:[{name:"id",description:"A unique project ID",example:"5e9602e7a39e5a46428b457f",allowEmptyValue:!1,required:!0,in:"path",schema:{type:"string"}}],method:"get",path:"/project/{id}",servers:[{url:"https://testomato.com/api/",description:"Testomato"}],securitySchemes:{ApiToken:{description:"The Testomato API Token can be obtained from the [User Profile](https://www.testomato.com/user/profile) \nor directly through the API by a `POST` request send to `/api/authenticate` visit \n[Get API token](/api/get-api-token) for more information.\n\nTestomato API token use [JWT schema](https://jwt.io/).\n",type:"http",scheme:"bearer",bearerFormat:"JWT"}},info:{title:"Testomato API",description:"If you would like to participate in the future development of our\nroadmap, please don't be shy! We'd love to hear your suggestions:\nsupport@testomato.com\n",termsOfService:"https://www.testomato.com/terms-of-service",version:"1.0.0",contact:{email:"support@testomato.com"}},postman:{name:"Get project",description:{content:"Retrieve project by ID",type:"text/plain"},url:{path:["project",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) A unique project ID",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"bearer",bearer:[{type:"any",value:"<Bearer Token>",key:"token"}]}}},sidebar_class_name:"get api-method",info_path:"api/testomato-api"},h=void 0,f={unversionedId:"api/get-project",id:"api/get-project",title:"Get project",description:"Retrieve project by ID",source:"@site/docs/api/get-project.api.mdx",sourceDirName:"api",slug:"/api/get-project",permalink:"/api/get-project",draft:!1,editUrl:"https://github.com/testomato/help.testomato.com/edit/master/docs/api/get-project.api.mdx",tags:[],version:"current",lastUpdatedAt:1669654757,formattedLastUpdatedAt:"Nov 28, 2022",frontMatter:{id:"get-project",title:"Get project",description:"Retrieve project by ID",sidebar_label:"Get project",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"Get project",description:"Retrieve project by ID",security:[{ApiToken:[]}],tags:["Project"],responses:{200:{description:"Successful operation",content:{"application/json":{schema:{allOf:[{type:"object",properties:{id:{description:"Project ID",example:"50a9f72f14db3be812000233",type:"string"},title:{description:"Project title",type:"string"},url:{description:"Project base URL",example:"https://testomato.com",type:"string"},period:{description:"Period of test checking - `false` means never check Test automatically.",default:"5 minutes",enum:["5 minutes","30 minutes","1 hour","8 hours","1 day","7 days",!1],type:"string"},uptimeUrl:{description:"Uptime URL",type:"string"},uptimeEnabled:{description:"Uptime period in seconds - `false` means uptime is disabled",type:"string",enum:[!1,15,30,60]},apiKey:{description:"apiKey that can be used for the project operations",example:123456,type:"string"},payerId:{description:"Identification of the project owner.",type:"integer"},location:{description:"Project check location",type:"string",enum:["eu","de","gb","ca","us","tx","dc","sg","hk"]},checkDefaultErrors:{type:"boolean",default:!0},created:{description:"Date and time of project creation",type:"string",format:"date-time"},userAgent:{description:"User agent",default:"Testomatobot/1.0 (Linux x86_64; +https://www.testomato.com/testomatobot) minicrawler/5.2.2",type:"string"},timeout:{description:"Cumulated project timeout in seconds",type:"integer",default:3},delay:{description:"Bulk request delay in miliseconds",type:"integer",format:"int64",default:50},userIds:{type:"array",description:"Array of users ID's with access to the project",items:{type:"integer"}},name:{description:"Project name was replaced by Project title",type:"string",deprecated:!0}}},{type:"object",properties:{permissions:{type:"object",description:"Project permissions for current user",properties:{read:{type:"boolean",description:"Can current user view results?"},run:{type:"boolean",description:"Can current user run checks?"},editTest:{type:"boolean"},edit:{type:"boolean",description:"Can current user edit project settings?"},manageUsers:{description:"Can current user manage others?",type:"boolean",default:!0},apiKey:{type:"boolean",description:"Can current user view apiKey?",default:!0},leave:{description:"Can current user leave project?",type:"boolean",default:!0}}}}}]}}}},404:{description:"Object not found error",content:{"application/json":{schema:{properties:{message:{description:"Error message text",default:"Object not found",type:"string"},code:{description:"Error code number",default:404,type:"integer"},ok:{type:"boolean",default:!1},error:{type:"boolean",default:!0}}}}}}},parameters:[{name:"id",description:"A unique project ID",example:"5e9602e7a39e5a46428b457f",allowEmptyValue:!1,required:!0,in:"path",schema:{type:"string"}}],method:"get",path:"/project/{id}",servers:[{url:"https://testomato.com/api/",description:"Testomato"}],securitySchemes:{ApiToken:{description:"The Testomato API Token can be obtained from the [User Profile](https://www.testomato.com/user/profile) \nor directly through the API by a `POST` request send to `/api/authenticate` visit \n[Get API token](/api/get-api-token) for more information.\n\nTestomato API token use [JWT schema](https://jwt.io/).\n",type:"http",scheme:"bearer",bearerFormat:"JWT"}},info:{title:"Testomato API",description:"If you would like to participate in the future development of our\nroadmap, please don't be shy! We'd love to hear your suggestions:\nsupport@testomato.com\n",termsOfService:"https://www.testomato.com/terms-of-service",version:"1.0.0",contact:{email:"support@testomato.com"}},postman:{name:"Get project",description:{content:"Retrieve project by ID",type:"text/plain"},url:{path:["project",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) A unique project ID",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"bearer",bearer:[{type:"any",value:"<Bearer Token>",key:"token"}]}}},sidebar_class_name:"get api-method",info_path:"api/testomato-api"},sidebar:"docs",previous:{title:"Create project",permalink:"/api/create-project"},next:{title:"Update project",permalink:"/api/update-project"}},b={},g=[{value:"Get project",id:"get-project",level:2}],k={toc:g};function v(e){var t=e.components,a=(0,r.Z)(e,u);return(0,o.kt)("wrapper",(0,i.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"get-project"},"Get project"),(0,o.kt)("p",null,"Retrieve project by ID"),(0,o.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"Path Parameters")),(0,o.kt)("div",null,(0,o.kt)("ul",null,(0,o.kt)(p.Z,{className:"paramsItem",param:{name:"id",description:"A unique project ID",example:"5e9602e7a39e5a46428b457f",allowEmptyValue:!1,required:!0,in:"path",schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,o.kt)("div",null,(0,o.kt)(s.Z,{mdxType:"ApiTabs"},(0,o.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Successful operation")),(0,o.kt)("div",null,(0,o.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,o.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,o.kt)(m.Z,{mdxType:"SchemaTabs"},(0,o.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{textAlign:"left"}},(0,o.kt)("strong",null,"Schema")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(l.Z,{collapsible:!1,name:"id",required:!1,schemaDescription:"Project ID",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"title",required:!1,schemaDescription:"Project title",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"url",required:!1,schemaDescription:"Project base URL",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"period",required:!1,schemaDescription:"Period of test checking - `false` means never check Test automatically.",schemaName:"string",qualifierMessage:"**Possible values:** [`5 minutes`, `30 minutes`, `1 hour`, `8 hours`, `1 day`, `7 days`, `false`]",defaultValue:"5 minutes",mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"uptimeUrl",required:!1,schemaDescription:"Uptime URL",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"uptimeEnabled",required:!1,schemaDescription:"Uptime period in seconds - `false` means uptime is disabled",schemaName:"string",qualifierMessage:"**Possible values:** [`false`, `15`, `30`, `60`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"apiKey",required:!1,schemaDescription:"apiKey that can be used for the project operations",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"payerId",required:!1,schemaDescription:"Identification of the project owner.",schemaName:"integer",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"location",required:!1,schemaDescription:"Project check location",schemaName:"string",qualifierMessage:"**Possible values:** [`eu`, `de`, `gb`, `ca`, `us`, `tx`, `dc`, `sg`, `hk`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"checkDefaultErrors",required:!1,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:!0,mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"created",required:!1,schemaDescription:"Date and time of project creation",schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"userAgent",required:!1,schemaDescription:"User agent",schemaName:"string",qualifierMessage:void 0,defaultValue:"Testomatobot/1.0 (Linux x86_64; +https://www.testomato.com/testomatobot) minicrawler/5.2.2",mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"timeout",required:!1,schemaDescription:"Cumulated project timeout in seconds",schemaName:"integer",qualifierMessage:void 0,defaultValue:3,mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"delay",required:!1,schemaDescription:"Bulk request delay in miliseconds",schemaName:"int64",qualifierMessage:void 0,defaultValue:50,mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"userIds",required:!1,schemaDescription:"Array of users ID's with access to the project",schemaName:"integer[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"name",required:!1,schemaDescription:"Project name was replaced by Project title",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,o.kt)("details",{style:{}},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"permissions"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object")),(0,o.kt)("div",{style:{marginLeft:"1rem"}},(0,o.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,o.kt)("p",null,"Project permissions for current user")),(0,o.kt)(l.Z,{collapsible:!1,name:"read",required:!1,schemaDescription:"Can current user view results?",schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"run",required:!1,schemaDescription:"Can current user run checks?",schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"editTest",required:!1,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"edit",required:!1,schemaDescription:"Can current user edit project settings?",schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"manageUsers",required:!1,schemaDescription:"Can current user manage others?",schemaName:"boolean",qualifierMessage:void 0,defaultValue:!0,mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"apiKey",required:!1,schemaDescription:"Can current user view apiKey?",schemaName:"boolean",qualifierMessage:void 0,defaultValue:!0,mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"leave",required:!1,schemaDescription:"Can current user leave project?",schemaName:"boolean",qualifierMessage:void 0,defaultValue:!0,mdxType:"SchemaItem"}))))))),(0,o.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,o.kt)(c.Z,{responseExample:'{\n  "id": "50a9f72f14db3be812000233",\n  "title": "string",\n  "url": "https://testomato.com",\n  "period": "5 minutes",\n  "uptimeUrl": "string",\n  "uptimeEnabled": false,\n  "apiKey": 123456,\n  "payerId": 0,\n  "location": "eu",\n  "checkDefaultErrors": true,\n  "created": "2022-11-28",\n  "userAgent": "Testomatobot/1.0 (Linux x86_64; +https://www.testomato.com/testomatobot) minicrawler/5.2.2",\n  "timeout": 3,\n  "delay": 50,\n  "userIds": [\n    0\n  ],\n  "permissions": {\n    "read": true,\n    "run": true,\n    "editTest": true,\n    "edit": true,\n    "manageUsers": true,\n    "apiKey": true,\n    "leave": true\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,o.kt)(d.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Object not found error")),(0,o.kt)("div",null,(0,o.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,o.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,o.kt)(m.Z,{mdxType:"SchemaTabs"},(0,o.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{textAlign:"left"}},(0,o.kt)("strong",null,"Schema")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(l.Z,{collapsible:!1,name:"message",required:!1,schemaDescription:"Error message text",schemaName:"string",qualifierMessage:void 0,defaultValue:"Object not found",mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"code",required:!1,schemaDescription:"Error code number",schemaName:"integer",qualifierMessage:void 0,defaultValue:404,mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"ok",required:!1,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:!1,mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"error",required:!1,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:!0,mdxType:"SchemaItem"})))),(0,o.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,o.kt)(c.Z,{responseExample:'{\n  "message": "Object not found",\n  "code": 404,\n  "ok": false,\n  "error": true\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}v.isMDXComponent=!0}}]);