import{r as c,a as i,j as u}from"./react-libs.513007de.js";import{c as a}from"./rc-cli_site-mobile-demo.b5ca414e.js";import"./index.04a2bc9a.js";import{q as e}from"./Uploader.d47e3eda.js";import{a as o}from"./index.b2a8bc00.js";import"./index.c6871036.js";import{C as t}from"./index.f78b1094.js";import{F as m}from"./index.6309d016.js";import"./constant.382f3d18.js";import"./Rate.4ef94079.js";import"./TextEllipsis.263e4d6b.js";import"./index.666defff.js";import"./ConfigProviderContext.ed273b22.js";import"./locales.fc745e15.js";import"./mobile.881f5661.js";import"./use-event-listener.b568d872.js";import"./use-touch.89e2aa83.js";const j=()=>{const{DemoBlock:s,DemoSection:n}=a,[l,r]=c.exports.useState(!1);return i(n,{className:"demo-notify",children:[u(s,{card:!0,title:"\u57FA\u7840\u7528\u6CD5",children:u(t,{title:"\u57FA\u7840\u7528\u6CD5",isLink:!0,onClick:()=>e.show("\u901A\u77E5\u5185\u5BB9")})}),i(s,{card:!0,title:"\u901A\u77E5\u7C7B\u578B",children:[u(t,{title:"\u4E3B\u8981\u901A\u77E5",isLink:!0,onClick:()=>e.show({type:"primary",message:"\u901A\u77E5\u5185\u5BB9"})}),u(t,{title:"\u6210\u529F\u901A\u77E5",isLink:!0,onClick:()=>e.show({type:"success",message:"\u901A\u77E5\u5185\u5BB9"})}),u(t,{title:"\u5371\u9669\u901A\u77E5",isLink:!0,onClick:()=>e.show({type:"danger",message:"\u901A\u77E5\u5185\u5BB9"})}),u(t,{title:"\u8B66\u544A\u901A\u77E5",isLink:!0,onClick:()=>e.show({type:"warning",message:"\u901A\u77E5\u5185\u5BB9"})})]}),i(s,{card:!0,title:"\u81EA\u5B9A\u4E49\u914D\u7F6E",children:[u(t,{title:"\u81EA\u5B9A\u4E49\u989C\u8272",isLink:!0,onClick:()=>e.show({message:"\u81EA\u5B9A\u4E49\u989C\u8272",color:"#ad0000",background:"#ffe1e1"})}),u(t,{title:"\u81EA\u5B9A\u4E49\u65F6\u957F",isLink:!0,onClick:()=>e.show({message:"\u81EA\u5B9A\u4E49\u65F6\u957F",duration:1e3})})]}),i(s,{card:!0,title:"\u7EC4\u4EF6\u8C03\u7528",children:[u(t,{title:"\u7EC4\u4EF6\u8C03\u7528",isLink:!0,onClick:()=>r(!0)}),u(e,{visible:l,type:"success",children:i(m,{style:{width:"100%"},align:"center",justify:"between",children:[u("div",{}),i("div",{children:[u(o,{name:"bell",style:{marginRight:4}}),u("span",{children:"\u901A\u77E5\u5185\u5BB9"})]}),u(o,{name:"close",onClick:()=>r(!1)})]})})]})]})};export{j as default};