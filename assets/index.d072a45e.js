import{r as a,a as p,j as u}from"./react-libs.513007de.js";import{c as x}from"./rc-cli_site-mobile-demo.b5ca414e.js";import"./index.04a2bc9a.js";import{F as A,r as l}from"./Uploader.d47e3eda.js";import"./index.b2a8bc00.js";import"./index.c6871036.js";import{C as r,T as s}from"./index.f78b1094.js";import"./index.6309d016.js";import"./constant.382f3d18.js";import"./Rate.4ef94079.js";import"./TextEllipsis.263e4d6b.js";import"./index.666defff.js";import"./ConfigProviderContext.ed273b22.js";import"./locales.fc745e15.js";import"./mobile.881f5661.js";import"./use-event-listener.b568d872.js";import"./use-touch.89e2aa83.js";const q=()=>{const{DemoSection:m,DemoBlock:B}=x,[t,i]=a.exports.useState(""),[d,c]=a.exports.useState(""),n=o=>{i(o)},D=o=>{c(C=>C+o)},F=()=>{c(o=>o.slice(0,o.length-1))},e={onClose:()=>{s.info("closed"),i("")},onInput:o=>{s.info(o)},onDelete:()=>{s.info("delete")},onBlur:()=>{i("")}},E=u("span",{children:"titleLeft"});return p(m,{children:[p(B,{card:!0,title:"\u57FA\u7840\u7528\u6CD5",children:[u(r,{onClick:()=>n("default"),children:"\u5F39\u51FA\u9ED8\u8BA4\u952E\u76D8"}),u(r,{onClick:()=>n("custom"),children:"\u5F39\u51FA\u5E26\u53F3\u4FA7\u680F\u7684\u952E\u76D8"}),u(r,{onClick:()=>n("extraKey"),children:"\u5F39\u51FA\u8EAB\u4EFD\u8BC1\u53F7\u952E\u76D8"}),u(r,{onClick:()=>n("title"),children:"\u5F39\u51FA\u5E26\u6807\u9898\u7684\u952E\u76D8"}),u(r,{onClick:()=>n("multiExtraKey"),children:"\u5F39\u51FA\u914D\u7F6E\u591A\u4E2A\u6309\u952E\u7684\u952E\u76D8"}),u(r,{onClick:()=>n("randomKeyOrder"),children:"\u5F39\u51FA\u914D\u7F6E\u968F\u673A\u6570\u5B57\u7684\u952E\u76D8"}),u(A,{onClick:()=>n("bindValue"),label:"\u7ED1\u5B9A\u503C",value:d,placeholder:"\u70B9\u6B64\u8F93\u5165"})]}),u(l,{visible:t==="default",onClose:e.onClose,onInput:e.onInput,onDelete:e.onDelete,onBlur:e.onBlur}),u(l,{visible:t==="custom",closeButtonText:"\u5B8C\u6210",theme:"custom",extraKey:".",onInput:e.onInput,onDelete:e.onDelete,onBlur:e.onBlur}),u(l,{visible:t==="extraKey",closeButtonText:"\u5B8C\u6210",extraKey:"X",onInput:e.onInput,onDelete:e.onDelete,onBlur:e.onBlur}),u(l,{visible:t==="title",title:"\u81EA\u5B9A\u4E49\u6807\u9898",closeButtonText:"\u5B8C\u6210",titleLeft:E,extraKey:".",onInput:e.onInput,onDelete:e.onDelete,onBlur:e.onBlur}),u(l,{visible:t==="multiExtraKey",closeButtonText:"\u5B8C\u6210",theme:"custom",extraKey:["00","."],onInput:e.onInput,onDelete:e.onDelete,onBlur:e.onBlur}),u(l,{visible:t==="randomKeyOrder",randomKeyOrder:!0,onInput:e.onInput,onDelete:e.onDelete,onBlur:e.onBlur}),u(l,{visible:t==="bindValue",onInput:D,onDelete:F,onBlur:e.onBlur})]})};export{q as default};