"use strict";(self.webpackChunkhelp=self.webpackChunkhelp||[]).push([[2185],{86577:function(e,t,a){a.r(t),a.d(t,{assets:function(){return h},contentTitle:function(){return k},default:function(){return A},frontMatter:function(){return u},metadata:function(){return g},toc:function(){return I}});var r=a(87462),i=a(63366),n=(a(67294),a(3905)),p=a(26389),o=a(94891),s=a(74933),l=a(47507),c=a(24310),y=a(63303),d=(a(75035),a(85162)),m=["components"],u={id:"regenerate-api-key",title:"Regenerate API Key",description:"Regenerate project API key",sidebar_label:"Regenerate API Key",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"Regenerate API Key",description:"Regenerate project API key",tags:["Project"],security:[{ApiKey:[]}],parameters:[{description:"Project ID",in:"path",name:"id",required:!0,schema:{type:"string"}}],responses:{200:{description:"Successfully regenerated Project API key",content:{"application/json":{schema:{properties:{apiKey:{type:"string",example:123456,description:"New API key"}}}}}}},method:"post",path:"/project/{id}/regenerateApiKey",servers:[{url:"https://testomato.com/api/",description:"Testomato"}],securitySchemes:{ApiKey:{description:"Project or User API key",type:"apiKey",name:"apiKey",in:"query"}},info:{title:"Testomato API",description:"### Authenticate\n\nIf you would like to participate in the future development of our\nroadmap, please don't be shy! We'd love to hear your suggestions:\nsupport@testomato.com\n",version:"1.0.0",contact:{email:"support@testomato.com"}},postman:{name:"Regenerate API Key",description:{content:"Regenerate project API key",type:"text/plain"},url:{path:["project",":id","regenerateApiKey"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Project ID",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"POST",auth:{type:"apikey",apikey:[{type:"any",value:"apiKey",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"query",key:"in"}]}}},sidebar_class_name:"post api-method",info_path:"docs/api/testomato-api"},k=void 0,g={unversionedId:"api/regenerate-api-key",id:"api/regenerate-api-key",title:"Regenerate API Key",description:"Regenerate project API key",source:"@site/docs/api/regenerate-api-key.api.mdx",sourceDirName:"api",slug:"/api/regenerate-api-key",permalink:"/api/regenerate-api-key",draft:!1,editUrl:"https://github.com/testomato/help.testomato.com/edit/master/docs/api/regenerate-api-key.api.mdx",tags:[],version:"current",lastUpdatedAt:1665671661,formattedLastUpdatedAt:"Oct 13, 2022",frontMatter:{id:"regenerate-api-key",title:"Regenerate API Key",description:"Regenerate project API key",sidebar_label:"Regenerate API Key",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"Regenerate API Key",description:"Regenerate project API key",tags:["Project"],security:[{ApiKey:[]}],parameters:[{description:"Project ID",in:"path",name:"id",required:!0,schema:{type:"string"}}],responses:{200:{description:"Successfully regenerated Project API key",content:{"application/json":{schema:{properties:{apiKey:{type:"string",example:123456,description:"New API key"}}}}}}},method:"post",path:"/project/{id}/regenerateApiKey",servers:[{url:"https://testomato.com/api/",description:"Testomato"}],securitySchemes:{ApiKey:{description:"Project or User API key",type:"apiKey",name:"apiKey",in:"query"}},info:{title:"Testomato API",description:"### Authenticate\n\nIf you would like to participate in the future development of our\nroadmap, please don't be shy! We'd love to hear your suggestions:\nsupport@testomato.com\n",version:"1.0.0",contact:{email:"support@testomato.com"}},postman:{name:"Regenerate API Key",description:{content:"Regenerate project API key",type:"text/plain"},url:{path:["project",":id","regenerateApiKey"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Project ID",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"POST",auth:{type:"apikey",apikey:[{type:"any",value:"apiKey",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"query",key:"in"}]}}},sidebar_class_name:"post api-method",info_path:"docs/api/testomato-api"},sidebar:"docs",previous:{title:"Get Project results",permalink:"/api/get-project-results"},next:{title:"Starting Project Group",permalink:"/api/starting-project-group"}},h={},I=[{value:"Regenerate API Key",id:"regenerate-api-key",level:2}],P={toc:I};function A(e){var t=e.components,a=(0,i.Z)(e,m);return(0,n.kt)("wrapper",(0,r.Z)({},P,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"regenerate-api-key"},"Regenerate API Key"),(0,n.kt)("p",null,"Regenerate project API key"),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Path Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(s.Z,{className:"paramsItem",param:{description:"Project ID",in:"path",name:"id",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,n.kt)("div",null,(0,n.kt)(p.Z,{mdxType:"ApiTabs"},(0,n.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Successfully regenerated Project API key")),(0,n.kt)("div",null,(0,n.kt)(o.Z,{groupId:"mime-type",mdxType:"MimeTabs"},(0,n.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(y.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,n.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(c.Z,{collapsible:!1,name:"apiKey",required:!1,schemaDescription:"New API key",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(l.Z,{responseExample:'{\n  "apiKey": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}A.isMDXComponent=!0}}]);