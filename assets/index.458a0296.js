import{r as a,a as s,j as e}from"./react-libs.062f9f01.js";import{c as V}from"./rc-cli_site-mobile-demo.b358fe5c.js";import"./index.483752f3.js";import{S as t}from"./FloatingBubble.4f93ec54.js";import"./index.d2bf0b7d.js";import"./index.ec4206e1.js";import{T as B}from"./index.ab191a9b.js";import"./index.0cdaad61.js";import"./constant.9dbab6d8.js";import"./Rate.6170480d.js";import"./TextEllipsis.4b81e148.js";import"./index.ca81ce20.js";import"./ConfigProviderContext.d6331488.js";import"./locales.1fb249cc.js";import"./mobile.93c0648b.js";import"./use-event-listener.944117f2.js";import"./use-touch.ac5722b5.js";const K=()=>{const{DemoBlock:u,DemoSection:i}=V,[c,m]=a.exports.useState(10),[p,d]=a.exports.useState([10,50]),[h,v]=a.exports.useState(10),[g,C]=a.exports.useState(10),[x,S]=a.exports.useState(10),[n,A]=a.exports.useState(10),[D,E]=a.exports.useState(50),[F,f]=a.exports.useState([20,50]),o=r=>B.info(`\u5F53\u524D\u503C\uFF1A${r}`);return s(i,{className:"demo-slider",children:[e(u,{title:"\u57FA\u7840\u7528\u6CD5",children:e(t,{value:c,onChange:m,onChangeAfter:o})}),e(u,{title:"\u53CC\u6ED1\u5757",children:e(t,{range:!0,value:p,onChange:d,onChangeAfter:o})}),e(u,{title:"\u6307\u5B9A\u9009\u62E9\u8303\u56F4",children:e(t,{value:h,onChange:v,onChangeAfter:o,min:-50,max:50})}),e(u,{title:"\u7981\u7528",children:e(t,{value:10,disabled:!0})}),e(u,{title:"\u6307\u5B9A\u6B65\u957F",children:e(t,{value:g,onChange:C,onChangeAfter:o,step:10})}),e(u,{title:"\u81EA\u5B9A\u4E49\u6837\u5F0F",children:e(t,{value:x,onChange:S,onChangeAfter:o,barHeight:4,activeColor:"#ee0a24"})}),e(u,{title:"\u81EA\u5B9A\u4E49\u6309\u94AE",children:e(t,{value:n,onChange:A,onChangeAfter:o,activeColor:"#ee0a24",button:e("div",{className:"custom-button",children:n})})}),e(u,{title:"\u5782\u76F4\u65B9\u5411",children:s("div",{style:{height:150,paddingLeft:30},children:[e(t,{vertical:!0,style:{marginRight:100},value:D,onChange:E,onChangeAfter:o,onDragStart:(r,l)=>console.log("onDragStart",l),onDragEnd:(r,l)=>console.log("onDragEnd",l)}),e(t,{range:!0,vertical:!0,value:F,onChange:f,onChangeAfter:o})]})})]})};export{K as default};
