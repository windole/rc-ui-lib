import{j as e,d,c as i}from"./locales-548059eb.js";import{r as m,u as l}from"./react-libs-840bfe49.js";import{r as x}from"./mobile-e0307386.js";const h=(o,t)=>{const{title:c,card:s}=o;return e.jsxs("div",{className:"vant-doc-demo-block",ref:t,children:[c&&e.jsx("h2",{className:"vant-doc-demo-block__title",children:c}),s?e.jsx("div",{className:"vant-doc-demo-block__card",children:o.children}):e.jsx(e.Fragment,{children:o.children})]})},u=m.forwardRef(h);const f=o=>{const{children:t}=o,{pathname:c}=l(),s=m.useMemo(()=>{const n=x.find(r=>r.path===c),a=n&&n.meta&&n.meta.name||"";return a?`demo-${d(a)}`:""},[c]);return e.jsx("section",{className:i("vant-doc-demo-section",s),children:t})},p={DemoBlock:u,DemoSection:f};export{p as c};