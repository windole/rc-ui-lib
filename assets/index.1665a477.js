import{r as c,a,j as e}from"./react-libs.513007de.js";import{c as n}from"./rc-cli_site-mobile-demo.b5ca414e.js";import"./index.04a2bc9a.js";import{j as u,g as s}from"./Uploader.d47e3eda.js";import"./index.b2a8bc00.js";import"./index.c6871036.js";import{C as d}from"./index.f78b1094.js";import"./index.6309d016.js";import"./constant.382f3d18.js";import"./Rate.4ef94079.js";import"./TextEllipsis.263e4d6b.js";import"./index.666defff.js";import"./ConfigProviderContext.ed273b22.js";import"./locales.fc745e15.js";import"./mobile.881f5661.js";import"./use-event-listener.b568d872.js";import"./use-touch.89e2aa83.js";const z=()=>{const{DemoBlock:t,DemoSection:i}=n,[r,l]=c.exports.useState(!1);return a(i,{children:[e(t,{title:"\u57FA\u7840\u7528\u6CD5",children:e(u,{defaultChecked:!0,onChange:o=>console.log(`switch to ${o}`)})}),e(t,{title:"\u7981\u7528\u72B6\u6001",children:e(u,{disabled:!0,defaultChecked:!0})}),e(t,{title:"\u52A0\u8F7D\u72B6\u6001",children:e(u,{loading:!0,defaultChecked:!0})}),e(t,{title:"\u81EA\u5B9A\u4E49\u5927\u5C0F",children:e(u,{size:"24px",defaultChecked:!0})}),e(t,{title:"\u81EA\u5B9A\u4E49\u989C\u8272",children:e(u,{activeColor:"#ee0a24",inactiveColor:"#dcdee0",defaultChecked:!0})}),e(t,{title:"\u5F02\u6B65\u63A7\u5236",children:e(u,{checked:r,onChange:o=>{s.confirm({title:"\u63D0\u9192",message:"\u662F\u5426\u5207\u6362\u5F00\u5173\uFF1F"}).then(()=>{l(o)})}})}),e(t,{title:"\u642D\u914D\u5355\u5143\u683C\u4F7F\u7528",children:e(d,{center:!0,title:"\u6807\u9898",rightIcon:e(u,{size:24,defaultChecked:!0,onChange:o=>console.log(`switch to ${o}`)})})})]})};export{z as default};