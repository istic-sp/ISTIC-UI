import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{d as s,S as r,Z as a}from"./index-DPbnqWXa.js";import"./index-uubelm5h.js";const c={title:"STICK UI/Components/Core/Tooltip",component:s,tags:["autodocs"],argTypes:{children:{description:"The main item that triggers the item to display."},onHoverItem:{description:"The displayed item on hover."},position:{description:'"right" or "left", Position of the displayed item  relative to the main item.',defaultValue:{summary:"left"}},align:{description:'"center", "top" or "bottom", Alignment of the displayed item relative to the main item.',defaultValue:{summary:"center"}}}},t=()=>e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100vw",height:"30vh"},children:e.jsx(s,{onHoverItem:e.jsx("div",{className:"bg-black p-3",children:e.jsx(r,{color:"text-white",children:"Displayed item"})}),position:"left",align:"center",children:e.jsx("div",{children:e.jsx(a,{name:"question",size:50})})})});t.__docgenInfo={description:"",methods:[],displayName:"Default"};var i,o,n;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100vw',
  height: '30vh'
}}>
    <Tooltip onHoverItem={<div className="bg-black p-3">
          <Text color="text-white">Displayed item</Text>
        </div>} position="left" align="center">
      <div>
        <Icon name="question" size={50} />
      </div>
    </Tooltip>
  </div>`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const p=["Default"];export{t as Default,p as __namedExportsOrder,c as default};
