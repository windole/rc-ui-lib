import{j as e}from"./locales-548059eb.js";import{r as l}from"./react-libs-840bfe49.js";import{c as J}from"./rc-cli_site-mobile-demo-eaa39090.js";import{F as t}from"./Field-bf6f7ff1.js";import{C as s}from"./index-9549eced.js";import{T as u}from"./index-ec9d0b36.js";import{a as c}from"./index-9cdb6f61.js";import"./mobile-e0307386.js";import"./index-59db7e48.js";import"./unit-bb3e6514.js";import"./base-1da74170.js";import"./ConfigProviderContext-0f984393.js";import"./index-7a676a8e.js";import"./Popup-a2a0dcda.js";import"./Overlay-d703c016.js";import"./use-touch-76dedc34.js";import"./use-scroll-parent-a4dd715d.js";import"./CSSTransition-ea203202.js";import"./use-event-listener-721bbec6.js";import"./interceptor-35467a90.js";import"./PopupContext-0557b73d.js";import"./index-cffeb12c.js";import"./use-height-bc7f71cd.js";import"./get-rect-4dc7f7e4.js";import"./constant-7552c2aa.js";import"./render-38a34f7f.js";import"./scroll-e4e20d56.js";import"./raf-f0838b14.js";import"./number-b57f7cd4.js";import"./event-07a78c2b.js";import"./lock-click-c7a7fb0f.js";import"./Loading-c60598b2.js";const Ve=()=>{const{DemoBlock:r,DemoSection:i}=J,[p,d]=l.useState(""),[h,m]=l.useState(""),[x,j]=l.useState(""),[g,b]=l.useState(""),[v,C]=l.useState(""),[S,f]=l.useState(""),[y,V]=l.useState(""),[w,B]=l.useState(""),[I,k]=l.useState(""),[z,G]=l.useState(""),[T,D]=l.useState(""),[E,M]=l.useState(""),[q,F]=l.useState(""),[L,P]=l.useState(""),[R,A]=l.useState(""),[N,U]=l.useState(""),[W,H]=l.useState(""),n=o=>o.replace(/\d/g,""),a=l.useRef(null);return l.useEffect(()=>{console.log(a)},[a]),e.jsxs(i,{children:[e.jsx(r,{card:!0,title:"基础用法",children:e.jsx(t,{value:p,label:"文本",onChange:d,name:"123",placeholder:"请输入文本"})}),e.jsxs(r,{card:!0,title:"自定义类型",children:[e.jsx(t,{value:h,label:"文本",onChange:m,placeholder:"请输入文本"}),e.jsx(t,{value:x,type:"tel",label:"手机号",onChange:j,placeholder:"请输入手机号"}),e.jsx(t,{value:g,type:"digit",label:"整数",onChange:b,placeholder:"请输入整数"}),e.jsx(t,{value:v,type:"number",label:"数字",onChange:C,placeholder:"请输入数字"}),e.jsx(t,{value:S,type:"password",label:"密码",onChange:f,placeholder:"请输入密码"})]}),e.jsx(r,{card:!0,title:"禁用输入框",children:e.jsxs(s.Group,{children:[e.jsx(t,{label:"文本",value:"输入框只读",readonly:!0}),e.jsx(t,{label:"文本",value:"输入框已禁用",disabled:!0})]})}),e.jsx(r,{card:!0,title:"显示图标",children:e.jsxs(s.Group,{children:[e.jsx(t,{value:y,label:"文本",leftIcon:"shop-o",rightIcon:"warning-o",placeholder:"显示图标",onClickLeftIcon:()=>u.info("左侧图标点击"),onClickRightIcon:()=>u.info("右侧图标点击"),onChange:V}),e.jsx(t,{value:w,clearable:!0,label:"文本",leftIcon:"shop-o",placeholder:"显示清除图标",onBlur:()=>{console.log("onBlur")},onClear:()=>{console.log("onClear")},onChange:B})]})}),e.jsx(r,{card:!0,title:"提示信息",children:e.jsx(t,{label:"文本",placeholder:"请输入文本",tooltip:"success"})}),e.jsx(r,{card:!0,title:"错误提示",children:e.jsxs(s.Group,{children:[e.jsx(t,{value:I,error:!0,required:!0,label:"用户名",placeholder:"请输入用户名",onChange:k}),e.jsx(t,{value:z,required:!0,label:"手机号",placeholder:"请输入手机号",errorMessage:"手机号格式错误",onChange:G})]})}),e.jsx(r,{card:!0,title:"插入按钮",children:e.jsx(t,{value:T,center:!0,clearable:!0,label:"短信验证码",placeholder:"请输入短信验证码",onChange:D,button:e.jsx(c,{size:"small",type:"primary",children:"发送"})})}),e.jsxs(r,{card:!0,title:"格式化输入内容",children:[e.jsx(t,{value:E,label:"文本",formatter:n,placeholder:"在输入时执行格式化",onChange:M}),e.jsx(t,{value:q,label:"文本",formatter:n,formatTrigger:"onBlur",placeholder:"在失焦时执行格式化",onChange:F})]}),e.jsx(r,{card:!0,title:"高度自适应",children:e.jsx(t,{value:L,rows:1,autosize:!0,label:"留言",type:"textarea",placeholder:"请输入留言",onChange:P})}),e.jsx(r,{card:!0,title:"显示字数统计",children:e.jsx(t,{value:R,rows:2,autosize:!0,label:"留言",type:"textarea",maxlength:50,placeholder:"请输入留言",showWordLimit:!0,onChange:A})}),e.jsx(r,{card:!0,title:"输入框内容对齐",children:e.jsx(t,{value:N,label:"文本",placeholder:"输入框内容右对齐",inputAlign:"right",onChange:U})}),e.jsx(r,{card:!0,title:"调用方法",children:e.jsx(s.Group,{children:e.jsx(t,{center:!0,ref:a,value:W,label:"文本",onChange:H,button:e.jsx(c,{size:"small",onClick:()=>{var o;(o=a==null?void 0:a.current)==null||o.focus()},children:"聚焦"}),placeholder:"请输入文本"})})})]})};export{Ve as default};
