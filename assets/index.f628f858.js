import{c}from"./rc-cli_site-mobile-demo.b358fe5c.js";import"./index.483752f3.js";import{T as e}from"./FloatingBubble.4f93ec54.js";import"./index.d2bf0b7d.js";import"./index.ec4206e1.js";import{T as r}from"./index.ab191a9b.js";import"./index.0cdaad61.js";import"./constant.9dbab6d8.js";import"./Rate.6170480d.js";import"./TextEllipsis.4b81e148.js";import"./index.ca81ce20.js";import{a as o,j as l}from"./react-libs.062f9f01.js";import"./ConfigProviderContext.d6331488.js";import"./locales.1fb249cc.js";import"./mobile.93c0648b.js";import"./use-event-listener.944117f2.js";import"./use-touch.ac5722b5.js";const D=()=>{const{DemoBlock:i,DemoSection:t}=c;return o(t,{children:[l(i,{title:"\u57FA\u7840\u7528\u6CD5",children:l(e,{onClickTab:u=>console.log(u),children:[1,2,3,4].map(u=>o(e.TabPane,{title:`\u6807\u7B7E${u}`,children:["\u5185\u5BB9 ",u]},u))})}),l(i,{title:"\u901A\u8FC7\u540D\u79F0\u5339\u914D",children:l(e,{active:"c",onClickTab:u=>console.log(u),children:["a","b","c"].map((u,n)=>o(e.TabPane,{title:`\u6807\u7B7E${n+1}`,name:u,children:["\u5185\u5BB9 ",n+1]},u))})}),l(i,{title:"\u6807\u7B7E\u680F\u6EDA\u52A8",children:l(e,{onClickTab:u=>console.log(u),children:[1,2,3,4,5,6,7,8].map(u=>o(e.TabPane,{title:`\u6807\u7B7E${u}`,children:["\u5185\u5BB9 ",u]},u))})}),l(i,{title:"\u7981\u7528\u6807\u7B7E",children:o(e,{onClickTab:u=>console.log(u),children:[l(e.TabPane,{title:"\u6807\u7B7E1",children:"\u5185\u5BB91"}),l(e.TabPane,{title:"\u6807\u7B7E2",disabled:!0,children:"\u5185\u5BB92"}),l(e.TabPane,{title:"\u6807\u7B7E3",children:"\u5185\u5BB93"})]})}),l(i,{title:"\u6837\u5F0F\u98CE\u683C",children:l(e,{type:"card",onClickTab:u=>console.log(u),children:[1,2,3].map(u=>o(e.TabPane,{title:`\u6807\u7B7E${u}`,children:["\u5185\u5BB9 ",u]},u))})}),l(i,{title:"\u70B9\u51FB\u4E8B\u4EF6",onClickTab:u=>console.log(u),children:o(e,{onClick:(u,n)=>r(n),children:[l(e.TabPane,{title:"\u6807\u7B7E1",children:"\u5185\u5BB91"}),l(e.TabPane,{title:"\u6807\u7B7E2",children:"\u5185\u5BB92"})]})}),l(i,{title:"\u7C98\u6027\u5E03\u5C40",children:l(e,{active:2,sticky:!0,onClickTab:u=>console.log(u),children:[1,2,3,4].map(u=>l(e.TabPane,{title:`\u6807\u7B7E${u}`,children:o("div",{style:{height:"50vh"},children:["\u5185\u5BB9 ",u]})},u))})}),l(i,{title:"\u6EDA\u52A8\u5BFC\u822A",children:l(e,{sticky:!0,scrollspy:{autoFocusLast:!0,reachBottomThreshold:50},onChange:u=>console.log("change",u),onClickTab:u=>console.log(u),children:[1,2,3,4,5,6,7,8].map(u=>l(e.TabPane,{title:`\u6807\u7B7E${u}`,children:o("div",{style:{height:"50vh"},children:["\u5185\u5BB9 ",u]})},u))})})]})};export{D as default};
