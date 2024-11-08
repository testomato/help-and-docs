"use strict";(self.webpackChunkhelp=self.webpackChunkhelp||[]).push([[3610],{49570:(e,i,a)=>{a.r(i),a.d(i,{assets:()=>k,contentTitle:()=>b,default:()=>Q,frontMatter:()=>v,metadata:()=>t,toc:()=>w});const t=JSON.parse('{"id":"api/verify-api-token","title":"Verify API token","description":"By calling this API endpoint you can verify the validity of your token.","source":"@site/docs/api/verify-api-token.api.mdx","sourceDirName":"api","slug":"/api/verify-api-token","permalink":"/api/verify-api-token","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","lastUpdatedAt":1722945166000,"frontMatter":{"id":"verify-api-token","title":"Verify API token","description":"By calling this API endpoint you can verify the validity of your token.","sidebar_label":"Verify API token","hide_title":true,"hide_table_of_contents":true,"api":"eJzNVd9zGjcQ/ldUvcSewYBJ4nh4ijtNM85Ma0/B9QMwg7hbOMV3kirp+DEM/3t3VyQcxk38WD8YkFa73+5+++1WWgdeRW3NbS778m/wer4RN/e3ItonMLIlcwiZ145M0ODXjchUWWqzELHQgS3B5M5qE8XG1nhrxDJ5iQWIpSp1ruNG2Dld++S2PTZ/QXDWBBCZNVFpE0QdwAtt5tZXDEiU+gnEFCqly6lQJk8WU51P8T0ii2oRZH8kb2qMZKLOVAQ5ackAWe0xJt5t5Y3TQ86kP5rs8NLv4+LLrex1u/RxnOKgzjIIYV6X5Uaohm+x0rE4qg1hx1vyoZwryQp9dL4GcrSVISsQPX1znuocdQqrc/ofNw4wHBYOFuBPKv1Ayd7+huewVpUr0fZy15JGVdB4HaLHXrz8mE0bz+UXWxgxhBAtVthK9MbFfaW7ZNv0R/34yMftzFbsb+1ekdqntdOJdCKnnjVTvO69v37X/dC7Qm/xqFD/gY27K3ROXZprjnZACD1YXS7edtclodMqvojuEP3q6rr74d3b3tVJFOTymByMpTjTIdSQCxXPRVYqXR2iByZ91BXgrVgVOiv45MvjUKxUGJv0tC3EkKYnvaaRmQGxO0dmiRwi+Eob4JdqATQ7eydEfCLBbP5SYV6dB76nPIyNGBgHDn6USLI4TmZs/ngYDMWfd0NCrnBgXET0aCiQ6jQ+iIjBpr+WrCAWliRmARGhOhUL/NFpzpek0fUoHoEnt/bITFnE6EK/04nfaEtU6yinT4lwIHZDBAY0g2nsDlLwfOSpKt+f84QnVu07Y2ekUJSftxWXYMQTce/tXJcwOfsGcrVatY+B0oh0XLI7F2ODBcq1hyyWpI/e1otUU4o5Q7kR0/u7wXAqPPxToyMRUFyJFFNK+ahaU7HUQUf0OfoM8SBLkzM2xTJf4OcFn51zZypqY0NgsT9jc5w2WxMTxYgomwTskN/XVWxr2znf62+iH11S67jQ+HsGyvNYpS+/czhSn8ehJCYQAmavjjyjRwhOunrLe0OsbF3maSOgoVOopZl2JMracAHndawxvRyWUFpXYZVobHDjjI23Kq+UawmcDYWp5da8IeKLUGx+EY/wBh3bJTsuEHLaU6FeLBAYggj9sQm1c9bHj0fNTUXAWQ138wESV2fQIOwpF9j0ws4vwt64JYnsKc/Ldrfd3a8UlbFO7cVZvhicS+lsiJViQqe98NMFvj3srP/XLk9cirCOHYdSxDLHCrDda8VIqmd7vsDs6Xy7nWFbH3y529ExDo6n3Y9fl8prNSOW4fLHB6ByZCaJyxOgibxh4aI+qLKm+CdbnKTku3R9/jREW4LRUN9ndGfv+ytlNg3fCJMtWFoQamsPIvVpN0GZ/Bf/e1J4","sidebar_class_name":"get api-method","info_path":"api/testomato-api","custom_edit_url":null},"sidebar":"docs","previous":{"title":"Get API token","permalink":"/api/get-api-token"},"next":{"title":"New project","permalink":"/api/new-project"}}');var n=a(74848),s=a(28453),r=a(63847),o=a.n(r),l=(a(17611),a(10709)),d=a.n(l),c=(a(92765),a(28785)),p=a.n(c),m=(a(46528),a(8985)),h=a.n(m),f=a(92225),x=a.n(f),y=a(22218),u=a.n(y),g=(a(5752),a(14794)),j=(a(45434),a(53632));const v={id:"verify-api-token",title:"Verify API token",description:"By calling this API endpoint you can verify the validity of your token.",sidebar_label:"Verify API token",hide_title:!0,hide_table_of_contents:!0,api:"eJzNVd9zGjcQ/ldUvcSewYBJ4nh4ijtNM85Ma0/B9QMwg7hbOMV3kirp+DEM/3t3VyQcxk38WD8YkFa73+5+++1WWgdeRW3NbS778m/wer4RN/e3ItonMLIlcwiZ145M0ODXjchUWWqzELHQgS3B5M5qE8XG1nhrxDJ5iQWIpSp1ruNG2Dld++S2PTZ/QXDWBBCZNVFpE0QdwAtt5tZXDEiU+gnEFCqly6lQJk8WU51P8T0ii2oRZH8kb2qMZKLOVAQ5ackAWe0xJt5t5Y3TQ86kP5rs8NLv4+LLrex1u/RxnOKgzjIIYV6X5Uaohm+x0rE4qg1hx1vyoZwryQp9dL4GcrSVISsQPX1znuocdQqrc/ofNw4wHBYOFuBPKv1Ayd7+huewVpUr0fZy15JGVdB4HaLHXrz8mE0bz+UXWxgxhBAtVthK9MbFfaW7ZNv0R/34yMftzFbsb+1ekdqntdOJdCKnnjVTvO69v37X/dC7Qm/xqFD/gY27K3ROXZprjnZACD1YXS7edtclodMqvojuEP3q6rr74d3b3tVJFOTymByMpTjTIdSQCxXPRVYqXR2iByZ91BXgrVgVOiv45MvjUKxUGJv0tC3EkKYnvaaRmQGxO0dmiRwi+Eob4JdqATQ7eydEfCLBbP5SYV6dB76nPIyNGBgHDn6USLI4TmZs/ngYDMWfd0NCrnBgXET0aCiQ6jQ+iIjBpr+WrCAWliRmARGhOhUL/NFpzpek0fUoHoEnt/bITFnE6EK/04nfaEtU6yinT4lwIHZDBAY0g2nsDlLwfOSpKt+f84QnVu07Y2ekUJSftxWXYMQTce/tXJcwOfsGcrVatY+B0oh0XLI7F2ODBcq1hyyWpI/e1otUU4o5Q7kR0/u7wXAqPPxToyMRUFyJFFNK+ahaU7HUQUf0OfoM8SBLkzM2xTJf4OcFn51zZypqY0NgsT9jc5w2WxMTxYgomwTskN/XVWxr2znf62+iH11S67jQ+HsGyvNYpS+/czhSn8ehJCYQAmavjjyjRwhOunrLe0OsbF3maSOgoVOopZl2JMracAHndawxvRyWUFpXYZVobHDjjI23Kq+UawmcDYWp5da8IeKLUGx+EY/wBh3bJTsuEHLaU6FeLBAYggj9sQm1c9bHj0fNTUXAWQ138wESV2fQIOwpF9j0ws4vwt64JYnsKc/Ldrfd3a8UlbFO7cVZvhicS+lsiJViQqe98NMFvj3srP/XLk9cirCOHYdSxDLHCrDda8VIqmd7vsDs6Xy7nWFbH3y529ExDo6n3Y9fl8prNSOW4fLHB6ByZCaJyxOgibxh4aI+qLKm+CdbnKTku3R9/jREW4LRUN9ndGfv+ytlNg3fCJMtWFoQamsPIvVpN0GZ/Bf/e1J4",sidebar_class_name:"get api-method",info_path:"api/testomato-api",custom_edit_url:null},b=void 0,k={},w=[];function N(e){const i={code:"code",p:"p",...(0,s.R)(),...e.components},{Details:a}=i;return a||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(g.default,{as:"h1",className:"openapi__heading",children:"Verify API token"}),"\n",(0,n.jsx)(d(),{method:"get",path:"/authenticate"}),"\n",(0,n.jsxs)(i.p,{children:["By calling this API endpoint you can verify the validity of your token.\nResponse contains user information like ",(0,n.jsx)(i.code,{children:"email"})," and user ",(0,n.jsx)(i.code,{children:"id"}),"."]}),"\n",(0,n.jsx)("div",{children:(0,n.jsx)("div",{children:(0,n.jsx)(o(),{label:void 0,id:void 0,children:(0,n.jsxs)(j.default,{label:"200",value:"200",children:[(0,n.jsx)("div",{children:(0,n.jsx)(i.p,{children:"Successfully authenticate with API token"})}),(0,n.jsx)("div",{children:(0,n.jsx)(p(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,n.jsx)(j.default,{label:"application/json",value:"application/json",children:(0,n.jsxs)(u(),{className:"openapi-tabs__schema",children:[(0,n.jsx)(j.default,{label:"Schema",value:"Schema",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,n.jsx)("strong",{children:(0,n.jsx)(i.p,{children:"Schema"})})}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,n.jsx)(x(),{collapsible:!1,name:"id",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"User ID",example:1}}),(0,n.jsx)(x(),{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"User name",example:"John Testomato"}}),(0,n.jsx)(x(),{collapsible:!1,name:"email",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"User email",example:"user@email.com"}}),(0,n.jsx)(x(),{collapsible:!1,name:"exp",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"Expiration date",example:1825840726}}),(0,n.jsx)(x(),{collapsible:!1,name:"tid",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Token identifier",example:"e2ew1g30xl"}}),(0,n.jsx)(x(),{collapsible:!1,name:"iat",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",example:1668074326,description:'The "iat" (issued at) claim identifies the time at which the JWT was\nissued.  This claim can be used to determine the age of the JWT.\n'}}),(0,n.jsx)(x(),{collapsible:!1,name:"nbf",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:1668074326,description:'The "nbf" (not before) claim identifies the time before which the JWT\nMUST NOT be accepted for processing.\n'}})]})]})}),(0,n.jsx)(j.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,n.jsx)(h(),{responseExample:'{\n  "id": 1,\n  "name": "John Testomato",\n  "email": "user@email.com",\n  "exp": 1825840726,\n  "tid": "e2ew1g30xl",\n  "iat": 1668074326,\n  "nbf": 1668074326\n}',language:"json"})})]})})})})]})})})})]})}function Q(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(N,{...e})}):N(e)}}}]);