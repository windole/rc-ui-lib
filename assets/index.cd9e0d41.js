import{r as s,a as r,j as t}from"./react-libs.513007de.js";import{c as d}from"./rc-cli_site-mobile-demo.b5ca414e.js";import"./index.04a2bc9a.js";import{p as i,I as m}from"./Uploader.d47e3eda.js";import"./index.b2a8bc00.js";import{a as h}from"./index.c6871036.js";import{T as p,P as f}from"./index.f78b1094.js";import"./index.6309d016.js";import"./constant.382f3d18.js";import"./Rate.4ef94079.js";import"./TextEllipsis.263e4d6b.js";import"./index.666defff.js";import"./ConfigProviderContext.ed273b22.js";import"./locales.fc745e15.js";import"./mobile.881f5661.js";import"./use-event-listener.b568d872.js";import"./use-touch.89e2aa83.js";const g=["https://img.yzcdn.cn/vant/apple-1.jpg","https://img.yzcdn.cn/vant/apple-2.jpg","https://img.yzcdn.cn/vant/apple-3.jpg","https://img.yzcdn.cn/vant/apple-4.jpg","https://img.yzcdn.cn/vant/apple-5.jpg","https://img.yzcdn.cn/vant/apple-6.jpg","https://img.yzcdn.cn/vant/apple-7.jpg","https://img.yzcdn.cn/vant/apple-8.jpg"],E=["#ace0ff","#bcffbd","#e4fabd","#ffcfac"],n=E.map((e,u)=>t(i.Item,{children:t("div",{onClick:()=>{p.info(`\u4F60\u70B9\u51FB\u4E86\u5361\u7247 ${u+1}`)},children:u+1})},e)),O=()=>{const{DemoBlock:e,DemoSection:u}=d,[a,l]=s.exports.useState(!1);return r(u,{children:[t(e,{title:"\u57FA\u7840\u7528\u6CD5",children:t(i,{autoplayInterval:5e3,defaultIndex:1,children:n})}),t(e,{title:"\u61D2\u52A0\u8F7D",children:t(i,{children:g.map(c=>t(i.Item,{children:t(m,{src:c})},c))})}),t(e,{title:"\u76D1\u542ConIndexChange\u4E8B\u4EF6",children:t(i,{onIndexChange:c=>p(`\u5F53\u524D\u7D22\u5F15${c}`),children:n})}),t(e,{title:"\u7EB5\u5411\u6EDA\u52A8",children:t(i,{autoplayInterval:5e3,direction:"vertical",style:{height:150},children:n})}),t(e,{title:"\u81EA\u5B9A\u4E49\u6ED1\u5757\u5927\u5C0F",children:t(i,{slideSize:80,children:n})}),t(e,{title:"\u6ED1\u5757\u5C45\u4E2D",children:t(i,{slideSize:80,trackOffset:10,children:n})}),t(e,{title:"\u7EB5\u5411\u6ED1\u5757\u5C45\u4E2D",children:t(i,{style:{height:150},direction:"vertical",slideSize:80,trackOffset:10,children:n})}),t(e,{title:"\u81EA\u5B9A\u4E49\u6307\u793A\u5668",children:t(i,{indicator:(c,o)=>r("div",{className:"custom-indicator",children:[o+1,"/",c]}),children:n})}),r(e,{title:"Popup\u4E2D\u5C55\u793A",children:[t("div",{className:"p-default",children:t(h,{block:!0,round:!0,type:"primary",onClick:()=>l(!0),children:"Popup\u4E2D\u5C55\u793A\u8F6E\u64AD\u56FE"})}),t(f,{className:"demo-swipe-popup",visible:a,onClose:()=>l(!1),style:{width:"100%"},children:t(i,{autoplayInterval:3e3,children:n})})]})]})};export{O as default};