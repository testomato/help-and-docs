"use strict";(self.webpackChunkhelp=self.webpackChunkhelp||[]).push([[8928],{54289:function(e,t,a){a.r(t),a.d(t,{assets:function(){return b},contentTitle:function(){return f},default:function(){return v},frontMatter:function(){return h},metadata:function(){return g},toc:function(){return k}});var i=a(87462),r=a(63366),s=(a(67294),a(3905)),o=a(38055),n=(a(47878),a(55878)),m=a(51663),p=a(98045),l=a(91795),c=a(18211),d=a(55985),u=a(85162),y=["components"],h={id:"get-project-users",title:"Get project users",description:"Return list of Users with access to the project",sidebar_label:"Get project users",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"Get project users",description:"Return list of Users with access to the project",security:[{ApiToken:[]}],tags:["Project"],responses:{200:{description:"Return array of User objects",content:{"application/json":{schema:{type:"array",items:{type:"object",properties:{email:{type:"string",description:"Main user email",example:"roman@testomato.com"},phone:{type:"string",format:"nullable",description:"A phone number (optional) and not required"},confirmTokenExpiration:{description:"Date and time when current common confirm token expires",type:"object",format:"nullable",properties:{date:{type:"string",format:"date-time",example:"2022-10-21 13:10:35.000000"},timezone_type:{type:"integer",format:"int32",example:3},timezone:{type:"string",example:"Europe/Prague"}}},name:{type:"string",description:"User name",example:"John Tomatoseeds"},confirmed:{description:"Was user email confirmed?",type:"boolean"},timezone:{type:"string",description:"User time zone name",example:"Europe/Prague"},reportPeriod:{type:"string",enum:["week"],example:"week"},notificationEmail:{type:"string",format:"nullable",example:"roman+notifications@testomato.com"},notificationDelay:{type:"integer",format:"int32",example:1},apiKey:{type:"string",description:"User API Key",example:"abcdef"},id:{type:"string",example:7},role:{type:"object",properties:{id:{type:"string",example:4},users_id:{type:"string",format:"nullable"},name:{type:"string",example:"project admin"},permissions:{type:"array",items:{type:"string",example:["read","run","editTests","edit","manageUsers","apiKey"]}},systemRole:{type:"boolean",example:!0},permissionsSwitches:{type:"object",description:"Project permissions for current user",properties:{read:{type:"boolean",description:"Can current user view results?"},run:{type:"boolean",description:"Can current user run checks?"},editTest:{type:"boolean"},edit:{type:"boolean",description:"Can current user edit project settings?"},manageUsers:{description:"Can current user manage others?",type:"boolean",default:!0},apiKey:{type:"boolean",description:"Can current user view apiKey?",default:!0},leave:{description:"Can current user leave project?",type:"boolean",default:!0}},title:"Permissions"}},title:"Role"},isPayer:{description:"Is user owner of the Project?",type:"boolean",example:!1},canBeRemoved:{type:"boolean",example:!0}},title:"User"}}}}}},parameters:[{name:"id",description:"A unique project ID",example:"5e9602e7a39e5a46428b457f",allowEmptyValue:!1,required:!0,in:"path",schema:{type:"string"}}],method:"get",path:"/project/{id}/users",servers:[{url:"https://testomato.com/api",description:"Testomato"}],securitySchemes:{ApiToken:{description:"The Testomato API Token can be obtained from the [User Profile](https://www.testomato.com/user/profile) \nor directly through the API by a `POST` request send to `/api/authenticate` visit \n[Get API token](/api/get-api-token) for more information.\n\nTestomato API token use [JWT schema](https://jwt.io/).\n",type:"http",scheme:"bearer",bearerFormat:"JWT"}},info:{title:"Testomato API",description:"If you would like to participate in the future development of our\nroadmap, please don't be shy! We'd love to hear your suggestions:\nsupport@testomato.com\n",termsOfService:"https://www.testomato.com/terms-of-service",version:"1.0.0",contact:{email:"support@testomato.com"}},postman:{name:"Get project users",description:{content:"Return list of Users with access to the project",type:"text/plain"},url:{path:["project",":id","users"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) A unique project ID",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"bearer",bearer:[{type:"any",value:"<Bearer Token>",key:"token"}]}}},sidebar_class_name:"get api-method",info_path:"api/testomato-api",custom_edit_url:null},f=void 0,g={unversionedId:"api/get-project-users",id:"api/get-project-users",title:"Get project users",description:"Return list of Users with access to the project",source:"@site/docs/api/get-project-users.api.mdx",sourceDirName:"api",slug:"/api/get-project-users",permalink:"/api/get-project-users",draft:!1,editUrl:null,tags:[],version:"current",lastUpdatedAt:1679578634,formattedLastUpdatedAt:"Mar 23, 2023",frontMatter:{id:"get-project-users",title:"Get project users",description:"Return list of Users with access to the project",sidebar_label:"Get project users",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"Get project users",description:"Return list of Users with access to the project",security:[{ApiToken:[]}],tags:["Project"],responses:{200:{description:"Return array of User objects",content:{"application/json":{schema:{type:"array",items:{type:"object",properties:{email:{type:"string",description:"Main user email",example:"roman@testomato.com"},phone:{type:"string",format:"nullable",description:"A phone number (optional) and not required"},confirmTokenExpiration:{description:"Date and time when current common confirm token expires",type:"object",format:"nullable",properties:{date:{type:"string",format:"date-time",example:"2022-10-21 13:10:35.000000"},timezone_type:{type:"integer",format:"int32",example:3},timezone:{type:"string",example:"Europe/Prague"}}},name:{type:"string",description:"User name",example:"John Tomatoseeds"},confirmed:{description:"Was user email confirmed?",type:"boolean"},timezone:{type:"string",description:"User time zone name",example:"Europe/Prague"},reportPeriod:{type:"string",enum:["week"],example:"week"},notificationEmail:{type:"string",format:"nullable",example:"roman+notifications@testomato.com"},notificationDelay:{type:"integer",format:"int32",example:1},apiKey:{type:"string",description:"User API Key",example:"abcdef"},id:{type:"string",example:7},role:{type:"object",properties:{id:{type:"string",example:4},users_id:{type:"string",format:"nullable"},name:{type:"string",example:"project admin"},permissions:{type:"array",items:{type:"string",example:["read","run","editTests","edit","manageUsers","apiKey"]}},systemRole:{type:"boolean",example:!0},permissionsSwitches:{type:"object",description:"Project permissions for current user",properties:{read:{type:"boolean",description:"Can current user view results?"},run:{type:"boolean",description:"Can current user run checks?"},editTest:{type:"boolean"},edit:{type:"boolean",description:"Can current user edit project settings?"},manageUsers:{description:"Can current user manage others?",type:"boolean",default:!0},apiKey:{type:"boolean",description:"Can current user view apiKey?",default:!0},leave:{description:"Can current user leave project?",type:"boolean",default:!0}},title:"Permissions"}},title:"Role"},isPayer:{description:"Is user owner of the Project?",type:"boolean",example:!1},canBeRemoved:{type:"boolean",example:!0}},title:"User"}}}}}},parameters:[{name:"id",description:"A unique project ID",example:"5e9602e7a39e5a46428b457f",allowEmptyValue:!1,required:!0,in:"path",schema:{type:"string"}}],method:"get",path:"/project/{id}/users",servers:[{url:"https://testomato.com/api",description:"Testomato"}],securitySchemes:{ApiToken:{description:"The Testomato API Token can be obtained from the [User Profile](https://www.testomato.com/user/profile) \nor directly through the API by a `POST` request send to `/api/authenticate` visit \n[Get API token](/api/get-api-token) for more information.\n\nTestomato API token use [JWT schema](https://jwt.io/).\n",type:"http",scheme:"bearer",bearerFormat:"JWT"}},info:{title:"Testomato API",description:"If you would like to participate in the future development of our\nroadmap, please don't be shy! We'd love to hear your suggestions:\nsupport@testomato.com\n",termsOfService:"https://www.testomato.com/terms-of-service",version:"1.0.0",contact:{email:"support@testomato.com"}},postman:{name:"Get project users",description:{content:"Return list of Users with access to the project",type:"text/plain"},url:{path:["project",":id","users"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) A unique project ID",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"bearer",bearer:[{type:"any",value:"<Bearer Token>",key:"token"}]}}},sidebar_class_name:"get api-method",info_path:"api/testomato-api",custom_edit_url:null},sidebar:"docs",previous:{title:"Get project groups",permalink:"/api/get-project-groups"},next:{title:"Add user to project",permalink:"/api/add-user-to-project"}},b={},k=[],x={toc:k},T="wrapper";function v(e){var t=e.components,a=(0,r.Z)(e,y);return(0,s.kt)(T,(0,i.Z)({},x,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{className:"openapi__heading"},"Get project users"),(0,s.kt)(n.Z,{method:"get",path:"/project/{id}/users",mdxType:"MethodEndpoint"}),(0,s.kt)("p",null,"Return list of Users with access to the project"),(0,s.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(p.Z,{className:"paramsItem",param:{name:"id",description:"A unique project ID",example:"5e9602e7a39e5a46428b457f",allowEmptyValue:!1,required:!0,in:"path",schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(o.Z,{mdxType:"ApiTabs"},(0,s.kt)(u.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Return array of User objects")),(0,s.kt)("div",null,(0,s.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(u.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(u.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(c.Z,{collapsible:!1,name:"email",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Main user email",example:"roman@testomato.com"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"phone",required:!1,schemaName:"nullable",qualifierMessage:void 0,schema:{type:"string",format:"nullable",description:"A phone number (optional) and not required"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"confirmTokenExpiration"),(0,s.kt)("span",{style:{opacity:"0.6"}}," nullable")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"Date and time when current common confirm token expires")),(0,s.kt)(c.Z,{collapsible:!1,name:"date",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",example:"2022-10-21 13:10:35.000000"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"timezone_type",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32",example:3},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"timezone",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Europe/Prague"},mdxType:"SchemaItem"})))),(0,s.kt)(c.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"User name",example:"John Tomatoseeds"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"confirmed",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{description:"Was user email confirmed?",type:"boolean"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"timezone",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"User time zone name",example:"Europe/Prague"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"reportPeriod",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`week`]",schema:{type:"string",enum:["week"],example:"week"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"notificationEmail",required:!1,schemaName:"nullable",qualifierMessage:void 0,schema:{type:"string",format:"nullable",example:"roman+notifications@testomato.com"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"notificationDelay",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32",example:1},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"apiKey",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"User API Key",example:"abcdef"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:7},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"role"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:4},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"users_id",required:!1,schemaName:"nullable",qualifierMessage:void 0,schema:{type:"string",format:"nullable"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"project admin"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"permissions",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string",example:["read","run","editTests","edit","manageUsers","apiKey"]}},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"systemRole",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",example:!0},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"permissionsSwitches"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"Project permissions for current user")),(0,s.kt)(c.Z,{collapsible:!1,name:"read",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"Can current user view results?"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"run",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"Can current user run checks?"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"editTest",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"edit",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"Can current user edit project settings?"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"manageUsers",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{description:"Can current user manage others?",type:"boolean",default:!0},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"apiKey",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"Can current user view apiKey?",default:!0},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"leave",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{description:"Can current user leave project?",type:"boolean",default:!0},mdxType:"SchemaItem"}))))))),(0,s.kt)(c.Z,{collapsible:!1,name:"isPayer",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{description:"Is user owner of the Project?",type:"boolean",example:!1},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"canBeRemoved",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",example:!0},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,s.kt)(u.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'[\n  {\n    "email": "roman@testomato.com",\n    "phone": "string",\n    "confirmTokenExpiration": {\n      "date": "2022-10-21 13:10:35.000000",\n      "timezone_type": 3,\n      "timezone": "Europe/Prague"\n    },\n    "name": "John Tomatoseeds",\n    "confirmed": true,\n    "timezone": "Europe/Prague",\n    "reportPeriod": "week",\n    "notificationEmail": "roman+notifications@testomato.com",\n    "notificationDelay": 1,\n    "apiKey": "abcdef",\n    "id": 7,\n    "role": {\n      "id": 4,\n      "users_id": "string",\n      "name": "project admin",\n      "permissions": [\n        [\n          "read",\n          "run",\n          "editTests",\n          "edit",\n          "manageUsers",\n          "apiKey"\n        ]\n      ],\n      "systemRole": true,\n      "permissionsSwitches": {\n        "read": true,\n        "run": true,\n        "editTest": true,\n        "edit": true,\n        "manageUsers": true,\n        "apiKey": true,\n        "leave": true\n      }\n    },\n    "isPayer": false,\n    "canBeRemoved": true\n  }\n]',language:"json",mdxType:"ResponseSamples"})))))))))))}v.isMDXComponent=!0}}]);