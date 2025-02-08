import{j as e}from"./jsx-runtime-D_zvdyIk.js";const s=()=>e.jsx("button",{type:"button",className:"storybook-button",children:"Button"});s.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"Button"};const b={title:"Preview",component:s,tags:["autodocs"]},t={parameters:{layout:"centered"}},a={parameters:{layout:"fullscreen"},render:r=>e.jsxs("div",{className:"sbpst-scheme_preview",children:[e.jsx("div",{className:"sbpst-light",children:e.jsx(s,{...r})}),e.jsx("div",{className:"sbpst-dark",children:e.jsx(s,{...r})})]})},o={parameters:{layout:"fullscreen"},render:r=>e.jsxs("div",{className:"sbpst-scheme_preview sbpst-row",children:[e.jsx("div",{className:"sbpst-light",children:e.jsx(s,{...r})}),e.jsx("div",{className:"sbpst-dark",children:e.jsx(s,{...r})})]})};var c,i,n;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered'
  }
}`,...(n=(i=t.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};var d,m,l;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: args => <div className="sbpst-scheme_preview">
            <div className="sbpst-light">
                <Button {...args} />
            </div>
            <div className="sbpst-dark">
                <Button {...args} />
            </div>
        </div>
}`,...(l=(m=a.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var p,u,v;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: args => <div className="sbpst-scheme_preview sbpst-row">
            <div className="sbpst-light">
                <Button {...args} />
            </div>
            <div className="sbpst-dark">
                <Button {...args} />
            </div>
        </div>
}`,...(v=(u=o.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};const w=["Preview","SchemesPreviewColumn","SchemesPreviewRow"];export{t as Preview,a as SchemesPreviewColumn,o as SchemesPreviewRow,w as __namedExportsOrder,b as default};
