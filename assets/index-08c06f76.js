import{j as r}from"./locales-548059eb.js";import{r as m,R as x}from"./react-libs-840bfe49.js";import{c as j}from"./rc-cli_site-mobile-demo-eaa39090.js";import{C as h,I as g}from"./ConfigProviderContext-0f984393.js";import{F as i}from"./Field-bf6f7ff1.js";import{R as a}from"./Rate-09fd3016.js";import{S as p}from"./Slider-3d73e7e4.js";import{a as c}from"./index-9cdb6f61.js";import"./mobile-e0307386.js";import"./index-59db7e48.js";import"./unit-bb3e6514.js";import"./base-1da74170.js";import"./index-9549eced.js";import"./constant-7552c2aa.js";import"./index-7a676a8e.js";import"./Popup-a2a0dcda.js";import"./Overlay-d703c016.js";import"./use-touch-76dedc34.js";import"./use-scroll-parent-a4dd715d.js";import"./CSSTransition-ea203202.js";import"./use-event-listener-721bbec6.js";import"./interceptor-35467a90.js";import"./PopupContext-0557b73d.js";import"./index-cffeb12c.js";import"./use-height-bc7f71cd.js";import"./get-rect-4dc7f7e4.js";import"./render-38a34f7f.js";import"./scroll-e4e20d56.js";import"./raf-f0838b14.js";import"./number-b57f7cd4.js";import"./event-07a78c2b.js";import"./use-merged-state-79e14435.js";import"./use-refs-92151253.js";import"./usePassiveHandler-330dfdb1.js";import"./Loading-c60598b2.js";function v(o){return o.replace(/([A-Z])/g,"-$1").toLowerCase().replace(/^-/,"")}function C(o){const e={};return Object.keys(o).forEach(t=>{e[`--rc-${v(t)}`]=o[t]}),e}const u=({className:o,style:e,themeVars:t,tag:n,children:s,...l})=>{const f=m.useMemo(()=>t?{...e,...C(t)}:e,[t]);return r.jsx(h.Provider,{value:{...g,...l},children:x.createElement(n,{className:o,style:f},s)})};u.defaultProps={tag:"div"};const d=u;const b={rateIconFullColor:"#ffcc56",sliderBarHeight:"4px",sliderButtonWidth:"20px",sliderButtonHeight:"20px",sliderActiveBackgroundColor:"#951fff",buttonPrimaryBorderColor:"#951fff",buttonPrimaryBackgroundColor:"#951fff"},er=()=>{const{DemoBlock:o,DemoSection:e}=j,[t,n]=m.useState(4),[s,l]=m.useState(50);return r.jsxs(e,{className:"demo-config-prodiver",children:[r.jsxs(o,{title:"默认主题",children:[r.jsx(i,{label:"评分",children:r.jsx(a,{value:t,onChange:n})}),r.jsx(i,{label:"滑块",children:r.jsx(p,{value:s,onChange:l})}),r.jsx("div",{style:{margin:16},children:r.jsx(c,{block:!0,round:!0,type:"primary",children:"提交"})})]}),r.jsx(o,{title:"定制主题",children:r.jsxs(d,{themeVars:b,children:[r.jsx(i,{label:"评分",children:r.jsx(a,{value:t,onChange:n})}),r.jsx(i,{label:"滑块",children:r.jsx(p,{value:s,onChange:l})}),r.jsx("div",{style:{margin:16},children:r.jsx(c,{block:!0,round:!0,type:"primary",children:"提交"})})]})}),r.jsx(o,{title:"Icon替换",children:r.jsxs(d,{iconPrefix:"iconfont",children:[r.jsx(i,{label:"评分",children:r.jsx(a,{icon:"emojifill",voidIcon:"emojilight"})}),r.jsx("div",{style:{margin:16},children:r.jsx(c,{icon:"1111",block:!0,round:!0,type:"primary",children:"提交"})})]})})]})};export{er as default};
