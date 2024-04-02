import{j as e,c as N}from"./locales-548059eb.js";import{r as a}from"./react-libs-840bfe49.js";import{c as P}from"./rc-cli_site-mobile-demo-eaa39090.js";import{C as S}from"./ConfigProviderContext-0f984393.js";import{a as O}from"./index-9cdb6f61.js";import"./mobile-e0307386.js";import"./index-59db7e48.js";import"./unit-bb3e6514.js";import"./base-1da74170.js";import"./Loading-c60598b2.js";import"./constant-7552c2aa.js";const y=r=>{const{prefixCls:x,createNamespace:h}=a.useContext(S),[u]=h("water-mark",x),{width:s,height:l,zIndex:B,content:j,image:d,rotate:k,fullPage:R,gapX:g,gapY:p,textColor:v,opacity:U,children:b}=r,[f,C]=a.useState(""),w=a.useRef(),[m,L]=a.useState(""),$=()=>{const n={transformOrigin:"center",transform:`rotate(${k}deg)`},i=()=>d&&!b?e.jsx("image",{href:f,xlinkHref:f,x:"0",y:"0",width:s,height:l,style:n}):e.jsx("foreignObject",{x:"0",y:"0",width:s,height:l,children:e.jsx("div",{xmlns:"http://www.w3.org/1999/xhtml",style:n,children:b||e.jsx("span",{style:{color:v},children:j})})}),t=s+g,o=l+p;return e.jsx("svg",{viewBox:`0 0 ${t} ${o}`,width:t,height:o,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",style:{padding:`0 ${g}px ${p}px 0`,opacity:U,display:"none"},children:i()})},E=n=>{const i=document.createElement("canvas"),t=new Image;t.crossOrigin="anonymous",t.referrerPolicy="no-referrer",t.onload=()=>{i.width=t.naturalWidth,i.height=t.naturalHeight;const o=i.getContext("2d");o==null||o.drawImage(t,0,0),C(i.toDataURL())},t.src=n},I=n=>{const i=new Blob([n],{type:"image/svg+xml"});return URL.createObjectURL(i)};return a.useEffect(()=>{w.current&&(m&&URL.revokeObjectURL(m),L(I(w.current.innerHTML)))},[f,g,p,j,v,s,l,k]),a.useEffect(()=>{d&&E(d)},[d]),a.useEffect(()=>()=>{m&&URL.revokeObjectURL(m)},[]),e.jsx("div",{className:N(u({full:R})),style:{zIndex:B,backgroundImage:`url(${m})`,backgroundSize:`${g+s}px ${p+l}px `},children:e.jsx("div",{ref:w,children:$()})})};y.defaultProps={width:100,height:100,zIndex:100,rotate:-22,fullPage:!1,gapX:0,gapY:0,textColor:"#dcdee0"};const c=y;const G=()=>{const{DemoBlock:r,DemoSection:x}=P,[h,u]=a.useState(!1);return e.jsxs(x,{children:[e.jsx(r,{title:"文字水印",children:e.jsx("div",{className:"demo-watermark-wrapper",children:e.jsx(c,{content:"rc-ui-lib"})})}),e.jsx(r,{title:"图片水印",children:e.jsx("div",{className:"demo-watermark-wrapper",children:e.jsx(c,{image:"https://rancui.github.io/rc-ui-lib/rc-ui-lib.png",opacity:.2})})}),e.jsx(r,{title:"自定义间隔",children:e.jsx("div",{className:"demo-watermark-wrapper",children:e.jsx(c,{image:"https://rancui.github.io/rc-ui-lib/rc-ui-lib.png",gapX:30,gapY:10})})}),e.jsx(r,{title:"自定义倾斜角度",children:e.jsx("div",{className:"demo-watermark-wrapper",children:e.jsx(c,{image:"https://rancui.github.io/rc-ui-lib/rc-ui-lib.png",rotate:"22",opacity:.2})})}),e.jsxs(r,{title:"显示范围",children:[e.jsx(O,{type:"primary",onClick:()=>u(s=>!s),children:"切换"}),e.jsx("div",{className:"demo-watermark-wrapper",children:e.jsx(c,{image:"https://rancui.github.io/rc-ui-lib/rc-ui-lib.png",fullPage:h})})]}),e.jsx(r,{title:"HTML 水印",children:e.jsx("div",{className:"demo-watermark-wrapper",children:e.jsx(c,{width:150,children:e.jsx("div",{style:{background:"linear-gradient(45deg, #000 0, #000 50%, #fff 50%)"},children:e.jsx("p",{style:{mixBlendMode:"difference",color:"#fff"},children:"rc watermark"})})})})})]})};export{G as default};
