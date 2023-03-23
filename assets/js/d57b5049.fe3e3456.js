"use strict";(self.webpackChunkhelp=self.webpackChunkhelp||[]).push([[9109],{94689:function(e,t,o){o.r(t),o.d(t,{assets:function(){return k},contentTitle:function(){return f},default:function(){return w},frontMatter:function(){return y},metadata:function(){return b},toc:function(){return g}});var a=o(87462),i=o(63366),n=(o(67294),o(3905)),s=o(38055),p=(o(47878),o(55878)),r=o(51663),l=o(98045),c=o(91795),m=o(18211),d=o(55985),u=o(85162),h=["components"],y={id:"update-notifications",title:"Update notifications",description:"Update Project notifications settings for current user",sidebar_label:"Update notifications",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"Update notifications",description:"Update Project notifications settings for current user",tags:["Project"],security:[{ApiToken:[]}],responses:{200:{description:"Notification settings response",content:{"application/json":{schema:{type:"object",properties:{severity:{type:"integer",format:"int32",default:1,example:1,description:"* `1` - only errors (default)\n* `3` - error and timeouts\n"},email:{type:"boolean",example:!0,description:"Send email notifications or not"},pagerduty:{type:"boolean",example:!0,description:"Send [PagerDuty](https://www.pagerduty.com/) notifications"},pushover:{type:"boolean",example:!0,description:"Send [PushHover](https://pushover.net/) notifications"},pushbullet:{type:"boolean",example:!0,description:"Send [PushBullet](https://www.pushbullet.com/) notifications"},slack:{type:"boolean",example:!0,description:"Send [Slack](https://slack.com/) notifications"}},title:"Notifications"}}}}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{severity:{type:"integer",format:"int32",default:1,example:1,description:"* `1` - only errors (default)\n* `3` - error and timeouts\n"},email:{type:"boolean",example:!0,description:"Send email notifications or not"},pagerduty:{type:"boolean",example:!0,description:"Send [PagerDuty](https://www.pagerduty.com/) notifications"},pushover:{type:"boolean",example:!0,description:"Send [PushHover](https://pushover.net/) notifications"},pushbullet:{type:"boolean",example:!0,description:"Send [PushBullet](https://www.pushbullet.com/) notifications"},slack:{type:"boolean",example:!0,description:"Send [Slack](https://slack.com/) notifications"}},title:"Notifications"}}}},parameters:[{name:"id",description:"A unique project ID",example:"5e9602e7a39e5a46428b457f",allowEmptyValue:!1,required:!0,in:"path",schema:{type:"string"}}],method:"post",path:"/project/{id}/notifications",servers:[{url:"https://testomato.com/api",description:"Testomato"}],securitySchemes:{ApiToken:{description:"The Testomato API Token can be obtained from the [User Profile](https://www.testomato.com/user/profile) \nor directly through the API by a `POST` request send to `/api/authenticate` visit \n[Get API token](/api/get-api-token) for more information.\n\nTestomato API token use [JWT schema](https://jwt.io/).\n",type:"http",scheme:"bearer",bearerFormat:"JWT"}},jsonRequestBodyExample:{severity:1,email:!0,pagerduty:!0,pushover:!0,pushbullet:!0,slack:!0},info:{title:"Testomato API",description:"If you would like to participate in the future development of our\nroadmap, please don't be shy! We'd love to hear your suggestions:\nsupport@testomato.com\n",termsOfService:"https://www.testomato.com/terms-of-service",version:"1.0.0",contact:{email:"support@testomato.com"}},postman:{name:"Update notifications",description:{content:"Update Project notifications settings for current user",type:"text/plain"},url:{path:["project",":id","notifications"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) A unique project ID",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"bearer",bearer:[{type:"any",value:"<Bearer Token>",key:"token"}]}}},sidebar_class_name:"post api-method",info_path:"api/testomato-api",custom_edit_url:null},f=void 0,b={unversionedId:"api/update-notifications",id:"api/update-notifications",title:"Update notifications",description:"Update Project notifications settings for current user",source:"@site/docs/api/update-notifications.api.mdx",sourceDirName:"api",slug:"/api/update-notifications",permalink:"/api/update-notifications",draft:!1,editUrl:null,tags:[],version:"current",lastUpdatedAt:1679578634,formattedLastUpdatedAt:"Mar 23, 2023",frontMatter:{id:"update-notifications",title:"Update notifications",description:"Update Project notifications settings for current user",sidebar_label:"Update notifications",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"Update notifications",description:"Update Project notifications settings for current user",tags:["Project"],security:[{ApiToken:[]}],responses:{200:{description:"Notification settings response",content:{"application/json":{schema:{type:"object",properties:{severity:{type:"integer",format:"int32",default:1,example:1,description:"* `1` - only errors (default)\n* `3` - error and timeouts\n"},email:{type:"boolean",example:!0,description:"Send email notifications or not"},pagerduty:{type:"boolean",example:!0,description:"Send [PagerDuty](https://www.pagerduty.com/) notifications"},pushover:{type:"boolean",example:!0,description:"Send [PushHover](https://pushover.net/) notifications"},pushbullet:{type:"boolean",example:!0,description:"Send [PushBullet](https://www.pushbullet.com/) notifications"},slack:{type:"boolean",example:!0,description:"Send [Slack](https://slack.com/) notifications"}},title:"Notifications"}}}}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{severity:{type:"integer",format:"int32",default:1,example:1,description:"* `1` - only errors (default)\n* `3` - error and timeouts\n"},email:{type:"boolean",example:!0,description:"Send email notifications or not"},pagerduty:{type:"boolean",example:!0,description:"Send [PagerDuty](https://www.pagerduty.com/) notifications"},pushover:{type:"boolean",example:!0,description:"Send [PushHover](https://pushover.net/) notifications"},pushbullet:{type:"boolean",example:!0,description:"Send [PushBullet](https://www.pushbullet.com/) notifications"},slack:{type:"boolean",example:!0,description:"Send [Slack](https://slack.com/) notifications"}},title:"Notifications"}}}},parameters:[{name:"id",description:"A unique project ID",example:"5e9602e7a39e5a46428b457f",allowEmptyValue:!1,required:!0,in:"path",schema:{type:"string"}}],method:"post",path:"/project/{id}/notifications",servers:[{url:"https://testomato.com/api",description:"Testomato"}],securitySchemes:{ApiToken:{description:"The Testomato API Token can be obtained from the [User Profile](https://www.testomato.com/user/profile) \nor directly through the API by a `POST` request send to `/api/authenticate` visit \n[Get API token](/api/get-api-token) for more information.\n\nTestomato API token use [JWT schema](https://jwt.io/).\n",type:"http",scheme:"bearer",bearerFormat:"JWT"}},jsonRequestBodyExample:{severity:1,email:!0,pagerduty:!0,pushover:!0,pushbullet:!0,slack:!0},info:{title:"Testomato API",description:"If you would like to participate in the future development of our\nroadmap, please don't be shy! We'd love to hear your suggestions:\nsupport@testomato.com\n",termsOfService:"https://www.testomato.com/terms-of-service",version:"1.0.0",contact:{email:"support@testomato.com"}},postman:{name:"Update notifications",description:{content:"Update Project notifications settings for current user",type:"text/plain"},url:{path:["project",":id","notifications"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) A unique project ID",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"bearer",bearer:[{type:"any",value:"<Bearer Token>",key:"token"}]}}},sidebar_class_name:"post api-method",info_path:"api/testomato-api",custom_edit_url:null},sidebar:"docs",previous:{title:"Project notifications",permalink:"/api/project-notifications"},next:{title:"Response times",permalink:"/api/response-times"}},k={},g=[],v={toc:g},x="wrapper";function w(e){var t=e.components,o=(0,i.Z)(e,h);return(0,n.kt)(x,(0,a.Z)({},v,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{className:"openapi__heading"},"Update notifications"),(0,n.kt)(p.Z,{method:"post",path:"/project/{id}/notifications",mdxType:"MethodEndpoint"}),(0,n.kt)("p",null,"Update Project notifications settings for current user"),(0,n.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Path Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(l.Z,{className:"paramsItem",param:{name:"id",description:"A unique project ID",example:"5e9602e7a39e5a46428b457f",allowEmptyValue:!1,required:!0,in:"path",schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,n.kt)(r.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,n.kt)(u.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Request Body")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(m.Z,{collapsible:!1,name:"severity",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32",default:1,example:1,description:"* `1` - only errors (default)\n* `3` - error and timeouts\n"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"email",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",example:!0,description:"Send email notifications or not"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"pagerduty",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",example:!0,description:"Send [PagerDuty](https://www.pagerduty.com/) notifications"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"pushover",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",example:!0,description:"Send [PushHover](https://pushover.net/) notifications"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"pushbullet",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",example:!0,description:"Send [PushBullet](https://www.pushbullet.com/) notifications"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"slack",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",example:!0,description:"Send [Slack](https://slack.com/) notifications"},mdxType:"SchemaItem"}))))),(0,n.kt)("div",null,(0,n.kt)("div",null,(0,n.kt)(s.Z,{mdxType:"ApiTabs"},(0,n.kt)(u.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Notification settings response")),(0,n.kt)("div",null,(0,n.kt)(r.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(u.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,n.kt)(u.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(m.Z,{collapsible:!1,name:"severity",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32",default:1,example:1,description:"* `1` - only errors (default)\n* `3` - error and timeouts\n"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"email",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",example:!0,description:"Send email notifications or not"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"pagerduty",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",example:!0,description:"Send [PagerDuty](https://www.pagerduty.com/) notifications"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"pushover",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",example:!0,description:"Send [PushHover](https://pushover.net/) notifications"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"pushbullet",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",example:!0,description:"Send [PushBullet](https://www.pushbullet.com/) notifications"},mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"slack",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",example:!0,description:"Send [Slack](https://slack.com/) notifications"},mdxType:"SchemaItem"})))),(0,n.kt)(u.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(c.Z,{responseExample:'{\n  "severity": 1,\n  "email": true,\n  "pagerduty": true,\n  "pushover": true,\n  "pushbullet": true,\n  "slack": true\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}w.isMDXComponent=!0}}]);