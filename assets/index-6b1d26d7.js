import{j as o}from"./locales-548059eb.js";import{r as u}from"./react-libs-840bfe49.js";import{c as b}from"./rc-cli_site-mobile-demo-eaa39090.js";import{N as l}from"./NumberKeyboard-4a435183.js";import{C as i}from"./index-9549eced.js";import{F as f}from"./Field-bf6f7ff1.js";import{T as m}from"./index-ec9d0b36.js";import"./mobile-e0307386.js";import"./Popup-a2a0dcda.js";import"./index-59db7e48.js";import"./unit-bb3e6514.js";import"./base-1da74170.js";import"./ConfigProviderContext-0f984393.js";import"./Overlay-d703c016.js";import"./use-touch-76dedc34.js";import"./use-scroll-parent-a4dd715d.js";import"./CSSTransition-ea203202.js";import"./use-event-listener-721bbec6.js";import"./interceptor-35467a90.js";import"./PopupContext-0557b73d.js";import"./Loading-c60598b2.js";import"./event-07a78c2b.js";import"./use-click-away-fbf72a4b.js";import"./constant-7552c2aa.js";import"./index-7a676a8e.js";import"./index-9cdb6f61.js";import"./index-cffeb12c.js";import"./use-height-bc7f71cd.js";import"./get-rect-4dc7f7e4.js";import"./render-38a34f7f.js";import"./scroll-e4e20d56.js";import"./raf-f0838b14.js";import"./number-b57f7cd4.js";import"./lock-click-c7a7fb0f.js";const ee=()=>{const{DemoSection:c,DemoBlock:a}=b,[n,s]=u.useState(""),[x,p]=u.useState(""),r=t=>{s(t)},d=t=>{p(D=>D+t)},B=()=>{p(t=>t.slice(0,t.length-1))},e={onClose:()=>{m.info("closed"),s("")},onInput:t=>{m.info(t)},onDelete:()=>{m.info("delete")},onBlur:()=>{s("")}},j=o.jsx("span",{children:"titleLeft"});return o.jsxs(c,{children:[o.jsxs(a,{card:!0,title:"基础用法",children:[o.jsx(i,{onClick:()=>r("default"),children:"弹出默认键盘"}),o.jsx(i,{onClick:()=>r("custom"),children:"弹出带右侧栏的键盘"}),o.jsx(i,{onClick:()=>r("extraKey"),children:"弹出身份证号键盘"}),o.jsx(i,{onClick:()=>r("title"),children:"弹出带标题的键盘"}),o.jsx(i,{onClick:()=>r("multiExtraKey"),children:"弹出配置多个按键的键盘"}),o.jsx(i,{onClick:()=>r("randomKeyOrder"),children:"弹出配置随机数字的键盘"}),o.jsx(f,{onClick:()=>r("bindValue"),label:"绑定值",value:x,placeholder:"点此输入"})]}),o.jsx(l,{visible:n==="default",onClose:e.onClose,onInput:e.onInput,onDelete:e.onDelete,onBlur:e.onBlur}),o.jsx(l,{visible:n==="custom",closeButtonText:"完成",theme:"custom",extraKey:".",onInput:e.onInput,onDelete:e.onDelete,onBlur:e.onBlur}),o.jsx(l,{visible:n==="extraKey",closeButtonText:"完成",extraKey:"X",onInput:e.onInput,onDelete:e.onDelete,onBlur:e.onBlur}),o.jsx(l,{visible:n==="title",title:"自定义标题",closeButtonText:"完成",titleLeft:j,extraKey:".",onInput:e.onInput,onDelete:e.onDelete,onBlur:e.onBlur}),o.jsx(l,{visible:n==="multiExtraKey",closeButtonText:"完成",theme:"custom",extraKey:["00","."],onInput:e.onInput,onDelete:e.onDelete,onBlur:e.onBlur}),o.jsx(l,{visible:n==="randomKeyOrder",randomKeyOrder:!0,onInput:e.onInput,onDelete:e.onDelete,onBlur:e.onBlur}),o.jsx(l,{visible:n==="bindValue",onInput:d,onDelete:B,onBlur:e.onBlur})]})};export{ee as default};