"use strict";(self.webpackChunkhelp=self.webpackChunkhelp||[]).push([[9562],{33685:function(e,t,a){a.r(t),a.d(t,{assets:function(){return b},contentTitle:function(){return y},default:function(){return v},frontMatter:function(){return g},metadata:function(){return f},toc:function(){return k}});var i=a(87462),r=a(63366),s=(a(67294),a(3905)),o=a(38055),p=(a(47878),a(55878)),n=a(51663),m=a(98045),c=a(91795),l=a(18211),d=a(55985),u=a(85162),h=["components"],g={id:"project-groups",title:"Project groups",description:"Return list of project groups/areas",sidebar_label:"Project groups",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"Project groups",description:"Return list of project groups/areas",security:[{ApiToken:[]}],tags:["Project","Group"],responses:{200:{description:"List of project areas/groups",content:{"application/json":{schema:{type:"array",items:{type:"object",description:"A group of tests",properties:{id:{type:"string",description:"A unique Areas/Group ID",example:"54c0fe237c3391ac488b4567"},projectId:{type:"string",description:"A unique parent Project ID",example:"50a9f72f14db3be812000233"},name:{type:"string",description:"Name of group",example:"Public"},public:{description:"Are the Test target URLs in the Group accessible without password protected or HTTP authentication?\n\n* `true` means they are freely accessible\n* `false` means yes, they are protected.\n",type:"boolean",default:!0},rules:{description:"Group rules that are applied to all tests in the **Group**. This is mostly empty array.",type:"array",example:[],items:{type:"array",items:{type:"object",properties:{type:{type:"string",default:"text",description:"Type of check",enum:["text html status header location title meta-description meta-og:title meta-og:description meta-og:image meta-og:image meta-og:image meta-og:type meta-og:url meta-og:site_name meta-og:locale meta-og:updated_time meta-og:logo meta-article:modified_time meta-article:published_time meta-article:publisher meta-article:section meta-article:tag meta-twitter:title meta-twitter:image meta-twitter:image meta-twitter:description meta-twitter:card meta-twitter:site meta-twitter:creator meta-itemprop:name meta-itemprop:author meta-itemprop:description meta-itemprop:image"],example:"text"},op:{type:"string",enum:["eq","sub","!sub","match","!match","xpath"],example:"sub",description:"Operators can be: `eq` is equal to, `sub` contains, `!sub` does not contains,  `match` for exact match, `!match` for does not match and `xpath` for Xpath checks.\n"},val:{type:"string",example:123456,description:"Value that will be used for check"},origin:{type:"string",example:"check",description:"Original of the check"},templateId:{type:"string",description:"Optional parameter if check use a Template"},order:{type:"integer",description:"Order of the check"}},title:"Rule"}}},form:{type:"object",description:"HTML Form",properties:{checksum:{type:"string"},enabled:{type:"boolean"},action:{type:"string"},originalAction:{type:"string"},relativeAction:{type:"string"},method:{type:"string"},params:{type:"string"},html:{type:"string"},baseUrl:{type:"string"},identifier:{type:"string"}},title:"Form"},httpAuth:{type:"object",required:!1,description:"Password-protected areas may have a saved HTTP auth authentications",example:{user:"nice",password:"test",url:"https://www.testomato.com/httpauth"},properties:{user:{type:"string"},password:{description:"HTTP",type:"string"},url:{description:"HTTP Auth URL address",type:"string"}}},period:{type:"string",description:"Check period interval as string (mostly se to `true` - same as parent Project)",enum:["5 minutes","30 minutes","1 hour","8 hours","1 day","7 days",!0],default:!0},result:{type:"object",description:"Response object (optional) show only when some some **Rules** are evaluated as an error",default:null,properties:{prop:{type:"string"}}},options:{type:"object",properties:{w:{type:"string",description:"Extra HTTP headers",default:""}}},nextRun:{type:"integer",description:"Next run in seconds (Can be negative if we don't have new results yet)",example:150},periodInt:{type:"integer",description:"Period of automatic startup in seconds",example:300}},title:"Area"}}}}}},parameters:[{name:"id",description:"A unique project ID",example:"5e9602e7a39e5a46428b457f",allowEmptyValue:!1,required:!0,in:"path",schema:{type:"string"}}],method:"get",path:"/project/{id}/areas",servers:[{url:"https://testomato.com/api",description:"Testomato"}],securitySchemes:{ApiToken:{description:"The Testomato API Token can be obtained from the [User Profile](https://www.testomato.com/user/profile) \nor directly through the API by a `POST` request send to `/api/authenticate` visit \n[Get API token](/api/get-api-token) for more information.\n\nTestomato API token use [JWT schema](https://jwt.io/).\n",type:"http",scheme:"bearer",bearerFormat:"JWT"}},info:{title:"Testomato API",description:"If you would like to participate in the future development of our\nroadmap, please don't be shy! We'd love to hear your suggestions:\nsupport@testomato.com\n",termsOfService:"https://www.testomato.com/terms-of-service",version:"1.0.0",contact:{email:"support@testomato.com"}},postman:{name:"Project groups",description:{content:"Return list of project groups/areas",type:"text/plain"},url:{path:["project",":id","areas"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) A unique project ID",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"bearer",bearer:[{type:"any",value:"<Bearer Token>",key:"token"}]}}},sidebar_class_name:"get api-method",info_path:"api/testomato-api",custom_edit_url:null},y=void 0,f={unversionedId:"api/project-groups",id:"api/project-groups",title:"Project groups",description:"Return list of project groups/areas",source:"@site/docs/api/project-groups.api.mdx",sourceDirName:"api",slug:"/api/project-groups",permalink:"/api/project-groups",draft:!1,editUrl:null,tags:[],version:"current",lastUpdatedAt:1680180689,formattedLastUpdatedAt:"Mar 30, 2023",frontMatter:{id:"project-groups",title:"Project groups",description:"Return list of project groups/areas",sidebar_label:"Project groups",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"Project groups",description:"Return list of project groups/areas",security:[{ApiToken:[]}],tags:["Project","Group"],responses:{200:{description:"List of project areas/groups",content:{"application/json":{schema:{type:"array",items:{type:"object",description:"A group of tests",properties:{id:{type:"string",description:"A unique Areas/Group ID",example:"54c0fe237c3391ac488b4567"},projectId:{type:"string",description:"A unique parent Project ID",example:"50a9f72f14db3be812000233"},name:{type:"string",description:"Name of group",example:"Public"},public:{description:"Are the Test target URLs in the Group accessible without password protected or HTTP authentication?\n\n* `true` means they are freely accessible\n* `false` means yes, they are protected.\n",type:"boolean",default:!0},rules:{description:"Group rules that are applied to all tests in the **Group**. This is mostly empty array.",type:"array",example:[],items:{type:"array",items:{type:"object",properties:{type:{type:"string",default:"text",description:"Type of check",enum:["text html status header location title meta-description meta-og:title meta-og:description meta-og:image meta-og:image meta-og:image meta-og:type meta-og:url meta-og:site_name meta-og:locale meta-og:updated_time meta-og:logo meta-article:modified_time meta-article:published_time meta-article:publisher meta-article:section meta-article:tag meta-twitter:title meta-twitter:image meta-twitter:image meta-twitter:description meta-twitter:card meta-twitter:site meta-twitter:creator meta-itemprop:name meta-itemprop:author meta-itemprop:description meta-itemprop:image"],example:"text"},op:{type:"string",enum:["eq","sub","!sub","match","!match","xpath"],example:"sub",description:"Operators can be: `eq` is equal to, `sub` contains, `!sub` does not contains,  `match` for exact match, `!match` for does not match and `xpath` for Xpath checks.\n"},val:{type:"string",example:123456,description:"Value that will be used for check"},origin:{type:"string",example:"check",description:"Original of the check"},templateId:{type:"string",description:"Optional parameter if check use a Template"},order:{type:"integer",description:"Order of the check"}},title:"Rule"}}},form:{type:"object",description:"HTML Form",properties:{checksum:{type:"string"},enabled:{type:"boolean"},action:{type:"string"},originalAction:{type:"string"},relativeAction:{type:"string"},method:{type:"string"},params:{type:"string"},html:{type:"string"},baseUrl:{type:"string"},identifier:{type:"string"}},title:"Form"},httpAuth:{type:"object",required:!1,description:"Password-protected areas may have a saved HTTP auth authentications",example:{user:"nice",password:"test",url:"https://www.testomato.com/httpauth"},properties:{user:{type:"string"},password:{description:"HTTP",type:"string"},url:{description:"HTTP Auth URL address",type:"string"}}},period:{type:"string",description:"Check period interval as string (mostly se to `true` - same as parent Project)",enum:["5 minutes","30 minutes","1 hour","8 hours","1 day","7 days",!0],default:!0},result:{type:"object",description:"Response object (optional) show only when some some **Rules** are evaluated as an error",default:null,properties:{prop:{type:"string"}}},options:{type:"object",properties:{w:{type:"string",description:"Extra HTTP headers",default:""}}},nextRun:{type:"integer",description:"Next run in seconds (Can be negative if we don't have new results yet)",example:150},periodInt:{type:"integer",description:"Period of automatic startup in seconds",example:300}},title:"Area"}}}}}},parameters:[{name:"id",description:"A unique project ID",example:"5e9602e7a39e5a46428b457f",allowEmptyValue:!1,required:!0,in:"path",schema:{type:"string"}}],method:"get",path:"/project/{id}/areas",servers:[{url:"https://testomato.com/api",description:"Testomato"}],securitySchemes:{ApiToken:{description:"The Testomato API Token can be obtained from the [User Profile](https://www.testomato.com/user/profile) \nor directly through the API by a `POST` request send to `/api/authenticate` visit \n[Get API token](/api/get-api-token) for more information.\n\nTestomato API token use [JWT schema](https://jwt.io/).\n",type:"http",scheme:"bearer",bearerFormat:"JWT"}},info:{title:"Testomato API",description:"If you would like to participate in the future development of our\nroadmap, please don't be shy! We'd love to hear your suggestions:\nsupport@testomato.com\n",termsOfService:"https://www.testomato.com/terms-of-service",version:"1.0.0",contact:{email:"support@testomato.com"}},postman:{name:"Project groups",description:{content:"Return list of project groups/areas",type:"text/plain"},url:{path:["project",":id","areas"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) A unique project ID",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"bearer",bearer:[{type:"any",value:"<Bearer Token>",key:"token"}]}}},sidebar_class_name:"get api-method",info_path:"api/testomato-api",custom_edit_url:null},sidebar:"docs",previous:{title:"Project results",permalink:"/api/project-results"},next:{title:"Project users",permalink:"/api/project-users"}},b={},k=[],T={toc:k},x="wrapper";function v(e){var t=e.components,a=(0,r.Z)(e,h);return(0,s.kt)(x,(0,i.Z)({},T,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{className:"openapi__heading"},"Project groups"),(0,s.kt)(p.Z,{method:"get",path:"/project/{id}/areas",mdxType:"MethodEndpoint"}),(0,s.kt)("p",null,"Return list of project groups/areas"),(0,s.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(m.Z,{className:"paramsItem",param:{name:"id",description:"A unique project ID",example:"5e9602e7a39e5a46428b457f",allowEmptyValue:!1,required:!0,in:"path",schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(o.Z,{mdxType:"ApiTabs"},(0,s.kt)(u.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"List of project areas/groups")),(0,s.kt)("div",null,(0,s.kt)(n.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(u.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(u.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(l.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"A unique Areas/Group ID",example:"54c0fe237c3391ac488b4567"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"projectId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"A unique parent Project ID",example:"50a9f72f14db3be812000233"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Name of group",example:"Public"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"public",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{description:"Are the Test target URLs in the Group accessible without password protected or HTTP authentication?\n\n* `true` means they are freely accessible\n* `false` means yes, they are protected.\n",type:"boolean",default:!0},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"rules",required:!1,schemaName:"array[]",qualifierMessage:void 0,schema:{description:"Group rules that are applied to all tests in the **Group**. This is mostly empty array.",type:"array",example:[],items:{type:"array",items:{type:"object",properties:{type:{type:"string",default:"text",description:"Type of check",enum:["text html status header location title meta-description meta-og:title meta-og:description meta-og:image meta-og:image meta-og:image meta-og:type meta-og:url meta-og:site_name meta-og:locale meta-og:updated_time meta-og:logo meta-article:modified_time meta-article:published_time meta-article:publisher meta-article:section meta-article:tag meta-twitter:title meta-twitter:image meta-twitter:image meta-twitter:description meta-twitter:card meta-twitter:site meta-twitter:creator meta-itemprop:name meta-itemprop:author meta-itemprop:description meta-itemprop:image"],example:"text"},op:{type:"string",enum:["eq","sub","!sub","match","!match","xpath"],example:"sub",description:"Operators can be: `eq` is equal to, `sub` contains, `!sub` does not contains,  `match` for exact match, `!match` for does not match and `xpath` for Xpath checks.\n"},val:{type:"string",example:123456,description:"Value that will be used for check"},origin:{type:"string",example:"check",description:"Original of the check"},templateId:{type:"string",description:"Optional parameter if check use a Template"},order:{type:"integer",description:"Order of the check"}},title:"Rule"}}},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"form"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"HTML Form")),(0,s.kt)(l.Z,{collapsible:!1,name:"checksum",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"enabled",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"action",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"originalAction",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"relativeAction",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"method",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"params",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"html",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"baseUrl",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"identifier",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"httpAuth"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"Password-protected areas may have a saved HTTP auth authentications")),(0,s.kt)(l.Z,{collapsible:!1,name:"user",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"password",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"HTTP",type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"HTTP Auth URL address",type:"string"},mdxType:"SchemaItem"})))),(0,s.kt)(l.Z,{collapsible:!1,name:"period",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`5 minutes`, `30 minutes`, `1 hour`, `8 hours`, `1 day`, `7 days`, `true`]",schema:{type:"string",description:"Check period interval as string (mostly se to `true` - same as parent Project)",enum:["5 minutes","30 minutes","1 hour","8 hours","1 day","7 days",!0],default:!0},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"result"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"Response object (optional) show only when some some ",(0,s.kt)("strong",{parentName:"p"},"Rules")," are evaluated as an error")),(0,s.kt)(l.Z,{collapsible:!1,name:"prop",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"options"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"w",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Extra HTTP headers",default:""},mdxType:"SchemaItem"})))),(0,s.kt)(l.Z,{collapsible:!1,name:"nextRun",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"Next run in seconds (Can be negative if we don't have new results yet)",example:150},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"periodInt",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"Period of automatic startup in seconds",example:300},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,s.kt)(u.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(c.Z,{responseExample:'[\n  {\n    "id": "54c0fe237c3391ac488b4567",\n    "projectId": "50a9f72f14db3be812000233",\n    "name": "Public",\n    "public": true,\n    "rules": [],\n    "form": {\n      "checksum": "string",\n      "enabled": true,\n      "action": "string",\n      "originalAction": "string",\n      "relativeAction": "string",\n      "method": "string",\n      "params": "string",\n      "html": "string",\n      "baseUrl": "string",\n      "identifier": "string"\n    },\n    "httpAuth": {\n      "user": "nice",\n      "password": "test",\n      "url": "https://www.testomato.com/httpauth"\n    },\n    "period": true,\n    "result": {\n      "prop": "string"\n    },\n    "options": {\n      "w": "string"\n    },\n    "nextRun": 150,\n    "periodInt": 300\n  }\n]',language:"json",mdxType:"ResponseSamples"})))))))))))}v.isMDXComponent=!0}}]);