"use strict";(self.webpackChunkhelp=self.webpackChunkhelp||[]).push([[7294],{54720:function(e,t,a){a.r(t),a.d(t,{assets:function(){return b},contentTitle:function(){return g},default:function(){return T},frontMatter:function(){return h},metadata:function(){return f},toc:function(){return k}});var r=a(87462),o=a(63366),s=(a(67294),a(3905)),i=a(38055),n=(a(47878),a(55878)),p=a(51663),c=a(98045),l=a(91795),m=a(18211),u=a(55985),d=a(85162),y=["components"],h={id:"starting-project-group",title:"Starting project group",description:"Starting only specific group of Tests from project",sidebar_label:"Starting project group",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"Starting project group",description:"Starting only specific group of Tests from project",tags:["Project","Group"],security:[{ApiToken:[]}],parameters:[{name:"keep-alive",description:"Maintain the connection after starting the tests",required:!1,example:!1,in:"query",schema:{type:"boolean"}},{name:"continue",description:"Send the partial result and move on?",required:!1,example:!1,in:"query",schema:{type:"boolean"}},{name:"tests",description:"Array of selected Test IDs to run",required:!1,in:"query",schema:{type:"array",example:["6123aa3f136d2ab8038b4587","51e6541cbd96e7f173000029"],items:{type:"string"}}},{name:"ProjectId",description:"A unique project ID",example:"5e9602e7a39e5a46428b457f",allowEmptyValue:!1,required:!0,in:"path",schema:{type:"string"}},{name:"AreaId",description:"A unique area/group ID",example:"55ae166c25b395537a8b6029",allowEmptyValue:!1,required:!0,in:"path",schema:{type:"string"}}],responses:{200:{description:"Job starts successfully",content:{"application/json":{schema:{properties:{projectId:{type:"string",description:"A unique Project ID",example:"5e95ddf7a39e5a44428b4581"},jobId:{type:"string",description:"A unique ID for each Job",example:"5e9602e7a39e5a46428b457f"},start:{type:"string",description:"Value `ok` means your tests have successfully started",example:"ok"},results:{type:"string",description:"The URL where you can view your results",example:"https://www.testomato.com/api/project/5e95ddf7a39e5a44428b4581/job/5e9602e7a39e5a46428b457f/results?apikey=4PJAOwTK"}}}}}}},method:"get",path:"/project/{ProjectId}/start/area/{AreaId}",servers:[{url:"https://testomato.com/api",description:"Testomato"}],securitySchemes:{ApiToken:{description:"The Testomato API Token can be obtained from the [User Profile](https://www.testomato.com/user/profile) \nor directly through the API by a `POST` request send to `/api/authenticate` visit \n[Get API token](/api/get-api-token) for more information.\n\nTestomato API token use [JWT schema](https://jwt.io/).\n",type:"http",scheme:"bearer",bearerFormat:"JWT"}},info:{title:"Testomato API",description:"If you would like to participate in the future development of our\nroadmap, please don't be shy! We'd love to hear your suggestions:\nsupport@testomato.com\n",termsOfService:"https://www.testomato.com/terms-of-service",version:"1.0.0",contact:{email:"support@testomato.com"}},postman:{name:"Starting project group",description:{content:"Starting only specific group of Tests from project",type:"text/plain"},url:{path:["project",":ProjectId","start","area",":AreaId"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Maintain the connection after starting the tests",type:"text/plain"},key:"keep-alive",value:""},{disabled:!1,description:{content:"Send the partial result and move on?",type:"text/plain"},key:"continue",value:""},{disabled:!1,description:{content:"Array of selected Test IDs to run",type:"text/plain"},key:"tests",value:""}],variable:[{disabled:!1,description:{content:"(Required) A unique project ID",type:"text/plain"},type:"any",value:"",key:"ProjectId"},{disabled:!1,description:{content:"(Required) A unique area/group ID",type:"text/plain"},type:"any",value:"",key:"AreaId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"bearer",bearer:[{type:"any",value:"<Bearer Token>",key:"token"}]}}},sidebar_class_name:"get api-method",info_path:"api/testomato-api",custom_edit_url:null},g=void 0,f={unversionedId:"api/starting-project-group",id:"api/starting-project-group",title:"Starting project group",description:"Starting only specific group of Tests from project",source:"@site/docs/api/starting-project-group.api.mdx",sourceDirName:"api",slug:"/api/starting-project-group",permalink:"/api/starting-project-group",draft:!1,editUrl:null,tags:[],version:"current",lastUpdatedAt:1679578634,formattedLastUpdatedAt:"Mar 23, 2023",frontMatter:{id:"starting-project-group",title:"Starting project group",description:"Starting only specific group of Tests from project",sidebar_label:"Starting project group",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"Starting project group",description:"Starting only specific group of Tests from project",tags:["Project","Group"],security:[{ApiToken:[]}],parameters:[{name:"keep-alive",description:"Maintain the connection after starting the tests",required:!1,example:!1,in:"query",schema:{type:"boolean"}},{name:"continue",description:"Send the partial result and move on?",required:!1,example:!1,in:"query",schema:{type:"boolean"}},{name:"tests",description:"Array of selected Test IDs to run",required:!1,in:"query",schema:{type:"array",example:["6123aa3f136d2ab8038b4587","51e6541cbd96e7f173000029"],items:{type:"string"}}},{name:"ProjectId",description:"A unique project ID",example:"5e9602e7a39e5a46428b457f",allowEmptyValue:!1,required:!0,in:"path",schema:{type:"string"}},{name:"AreaId",description:"A unique area/group ID",example:"55ae166c25b395537a8b6029",allowEmptyValue:!1,required:!0,in:"path",schema:{type:"string"}}],responses:{200:{description:"Job starts successfully",content:{"application/json":{schema:{properties:{projectId:{type:"string",description:"A unique Project ID",example:"5e95ddf7a39e5a44428b4581"},jobId:{type:"string",description:"A unique ID for each Job",example:"5e9602e7a39e5a46428b457f"},start:{type:"string",description:"Value `ok` means your tests have successfully started",example:"ok"},results:{type:"string",description:"The URL where you can view your results",example:"https://www.testomato.com/api/project/5e95ddf7a39e5a44428b4581/job/5e9602e7a39e5a46428b457f/results?apikey=4PJAOwTK"}}}}}}},method:"get",path:"/project/{ProjectId}/start/area/{AreaId}",servers:[{url:"https://testomato.com/api",description:"Testomato"}],securitySchemes:{ApiToken:{description:"The Testomato API Token can be obtained from the [User Profile](https://www.testomato.com/user/profile) \nor directly through the API by a `POST` request send to `/api/authenticate` visit \n[Get API token](/api/get-api-token) for more information.\n\nTestomato API token use [JWT schema](https://jwt.io/).\n",type:"http",scheme:"bearer",bearerFormat:"JWT"}},info:{title:"Testomato API",description:"If you would like to participate in the future development of our\nroadmap, please don't be shy! We'd love to hear your suggestions:\nsupport@testomato.com\n",termsOfService:"https://www.testomato.com/terms-of-service",version:"1.0.0",contact:{email:"support@testomato.com"}},postman:{name:"Starting project group",description:{content:"Starting only specific group of Tests from project",type:"text/plain"},url:{path:["project",":ProjectId","start","area",":AreaId"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Maintain the connection after starting the tests",type:"text/plain"},key:"keep-alive",value:""},{disabled:!1,description:{content:"Send the partial result and move on?",type:"text/plain"},key:"continue",value:""},{disabled:!1,description:{content:"Array of selected Test IDs to run",type:"text/plain"},key:"tests",value:""}],variable:[{disabled:!1,description:{content:"(Required) A unique project ID",type:"text/plain"},type:"any",value:"",key:"ProjectId"},{disabled:!1,description:{content:"(Required) A unique area/group ID",type:"text/plain"},type:"any",value:"",key:"AreaId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"bearer",bearer:[{type:"any",value:"<Bearer Token>",key:"token"}]}}},sidebar_class_name:"get api-method",info_path:"api/testomato-api",custom_edit_url:null},sidebar:"docs",previous:{title:"Starting project",permalink:"/api/starting-project"},next:{title:"Get project results",permalink:"/api/get-project-results"}},b={},k=[],I={toc:k},j="wrapper";function T(e){var t=e.components,a=(0,o.Z)(e,y);return(0,s.kt)(j,(0,r.Z)({},I,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{className:"openapi__heading"},"Starting project group"),(0,s.kt)(n.Z,{method:"get",path:"/project/{ProjectId}/start/area/{AreaId}",mdxType:"MethodEndpoint"}),(0,s.kt)("p",null,"Starting only specific group of Tests from project"),(0,s.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(c.Z,{className:"paramsItem",param:{name:"ProjectId",description:"A unique project ID",example:"5e9602e7a39e5a46428b457f",allowEmptyValue:!1,required:!0,in:"path",schema:{type:"string"}},mdxType:"ParamsItem"}),(0,s.kt)(c.Z,{className:"paramsItem",param:{name:"AreaId",description:"A unique area/group ID",example:"55ae166c25b395537a8b6029",allowEmptyValue:!1,required:!0,in:"path",schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Query Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(c.Z,{className:"paramsItem",param:{name:"keep-alive",description:"Maintain the connection after starting the tests",required:!1,example:!1,in:"query",schema:{type:"boolean"}},mdxType:"ParamsItem"}),(0,s.kt)(c.Z,{className:"paramsItem",param:{name:"continue",description:"Send the partial result and move on?",required:!1,example:!1,in:"query",schema:{type:"boolean"}},mdxType:"ParamsItem"}),(0,s.kt)(c.Z,{className:"paramsItem",param:{name:"tests",description:"Array of selected Test IDs to run",required:!1,in:"query",schema:{type:"array",example:["6123aa3f136d2ab8038b4587","51e6541cbd96e7f173000029"],items:{type:"string"}}},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(i.Z,{mdxType:"ApiTabs"},(0,s.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Job starts successfully")),(0,s.kt)("div",null,(0,s.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(u.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!1,name:"projectId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"A unique Project ID",example:"5e95ddf7a39e5a44428b4581"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"jobId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"A unique ID for each Job",example:"5e9602e7a39e5a46428b457f"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"start",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Value `ok` means your tests have successfully started",example:"ok"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"results",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The URL where you can view your results",example:"https://www.testomato.com/api/project/5e95ddf7a39e5a44428b4581/job/5e9602e7a39e5a46428b457f/results?apikey=4PJAOwTK"},mdxType:"SchemaItem"})))),(0,s.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'{\n  "projectId": "5e95ddf7a39e5a44428b4581",\n  "jobId": "5e9602e7a39e5a46428b457f",\n  "start": "ok",\n  "results": "https://www.testomato.com/api/project/5e95ddf7a39e5a44428b4581/job/5e9602e7a39e5a46428b457f/results?apikey=4PJAOwTK"\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}T.isMDXComponent=!0}}]);