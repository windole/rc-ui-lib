import{r,a as l,j as e}from"./react-libs.062f9f01.js";import{c as g}from"./rc-cli_site-mobile-demo.b358fe5c.js";import"./index.483752f3.js";import{b as u}from"./FloatingBubble.4f93ec54.js";import"./index.d2bf0b7d.js";import{a as h}from"./index.ec4206e1.js";import{T as s,C as o}from"./index.ab191a9b.js";import"./index.0cdaad61.js";import"./constant.9dbab6d8.js";import"./Rate.6170480d.js";import"./TextEllipsis.4b81e148.js";import"./index.ca81ce20.js";import"./ConfigProviderContext.d6331488.js";import"./locales.1fb249cc.js";import"./mobile.93c0648b.js";import"./use-event-listener.944117f2.js";import"./use-touch.ac5722b5.js";const B="https://img.yzcdn.cn/vant/user-active.png",x="https://img.yzcdn.cn/vant/user-inactive.png",L=()=>{const{DemoBlock:c,DemoSection:m}=g,i=r.exports.useRef(null),[p,C]=r.exports.useState(["a"]),[n,a]=r.exports.useState([]),[k,D]=r.exports.useState(!1),[E,b]=r.exports.useState(!1),d=t=>{const A=n.includes(t)?n.filter(f=>f!==t):[...n,t];a(A)};return l(m,{children:[e(c,{title:"\u57FA\u7840\u7528\u6CD5",children:e(u,{checked:k,onChange:D,children:"\u590D\u9009\u6846"})}),l(c,{title:"\u7981\u7528\u72B6\u6001",children:[e(u,{defaultChecked:!0,disabled:!0,children:"\u590D\u9009\u6846"}),e(u,{disabled:!0,children:"\u590D\u9009\u6846"})]}),e(c,{title:"\u81EA\u5B9A\u4E49\u5F62\u72B6",children:e(u,{defaultChecked:!0,shape:"square",children:"\u81EA\u5B9A\u4E49\u5F62\u72B6"})}),e(c,{title:"\u81EA\u5B9A\u4E49\u989C\u8272",children:e(u,{defaultChecked:!0,checkedColor:"#ee0a24",children:"\u81EA\u5B9A\u4E49\u989C\u8272"})}),e(c,{title:"\u81EA\u5B9A\u4E49\u5927\u5C0F",children:e(u,{defaultChecked:!0,iconSize:"24px",children:"\u81EA\u5B9A\u4E49\u5927\u5C0F"})}),e(c,{title:"\u81EA\u5B9A\u4E49\u56FE\u6807",children:e(u,{defaultChecked:!0,iconRender:({checked:t})=>e("img",{alt:"",src:t?B:x}),children:"\u81EA\u5B9A\u4E49\u56FE\u6807"})}),e(c,{title:"\u7981\u6B62\u6587\u672C\u70B9\u51FB",children:e(u,{defaultChecked:!0,labelDisabled:!0,children:"\u590D\u9009\u6846"})}),e(c,{title:"\u52A8\u6001\u66F4\u65B0",children:e(u,{checked:E,onChange:t=>{s.loading({forbidClick:!0,duration:0}),setTimeout(()=>{s.clear(),b(t)},500)},children:"\u590D\u9009\u6846"})}),e(c,{title:"\u590D\u9009\u6846\u7EC4",children:l(u.Group,{onChange:t=>console.log(t),defaultValue:["a","b"],children:[e(u,{name:"a",children:"\u590D\u9009\u6846a"}),e(u,{name:"b",children:"\u590D\u9009\u6846b"}),e(u,{name:"c",children:"\u590D\u9009\u6846c"})]})}),e(c,{title:"\u6C34\u5E73\u6392\u5217",children:l(u.Group,{defaultValue:[],direction:"horizontal",children:[e(u,{name:"a",children:"\u590D\u9009\u6846a"}),e(u,{name:"b",children:"\u590D\u9009\u6846b"})]})}),e(c,{title:"\u9650\u5236\u6700\u5927\u53EF\u9009\u6570",children:l(u.Group,{defaultValue:[],max:2,children:[e(u,{name:"a",children:"\u590D\u9009\u6846a"}),e(u,{name:"b",children:"\u590D\u9009\u6846b"}),e(u,{name:"c",children:"\u590D\u9009\u6846c"})]})}),l(c,{title:"\u5168\u9009\u4E0E\u53CD\u9009",children:[l(u.Group,{ref:i,value:p,onChange:C,children:[e(u,{name:"a",children:"\u590D\u9009\u6846a"}),e(u,{name:"b",children:"\u590D\u9009\u6846b"}),e(u,{name:"c",children:"\u590D\u9009\u6846c"})]}),l("div",{className:"demo-checkbox-buttons",children:[e(h,{type:"primary",onClick:()=>{var t;return(t=i.current)==null?void 0:t.toggleAll(!0)},children:"\u5168\u9009"}),e(h,{type:"primary",onClick:()=>{var t;return(t=i.current)==null?void 0:t.toggleAll()},children:"\u53CD\u9009"})]})]}),e(c,{title:"\u642D\u914D\u5355\u5143\u683C\u7EC4\u4EF6\u4F7F\u7528",children:e(u.Group,{value:n,onChange:a,children:l(o.Group,{children:[e(o,{clickable:!0,title:"\u5355\u9009\u68461",icon:"shop-o",onClick:()=>d("a"),rightIcon:e(u,{name:"a"})}),e(o,{clickable:!0,title:"\u5355\u9009\u68462",icon:"shop-o",onClick:()=>d("b"),rightIcon:e(u,{name:"b"})})]})})})]})};export{L as default};
