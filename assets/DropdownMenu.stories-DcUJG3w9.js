import{j as t}from"./jsx-runtime-QvZ8i92b.js";import{r as a,z as l}from"./index-DPbnqWXa.js";import"./index-uubelm5h.js";const s={title:"STICK UI/Components/Core/DropdownMenu",component:a,argTypes:{mainItem:{description:"The main item that triggers the dropdown."},items:{description:"Array of dropdown menu items."},position:{description:'"right" or "left", Position of the dropdown menu relative to the main item.',defaultValue:{summary:"left"}},align:{description:'"center", "top" or "bottom", Alignment of the dropdown menu relative to the main item.',defaultValue:{summary:"center"}}}},e=()=>t.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100vw",height:"100vh"},children:t.jsx(a,{mainItem:t.jsx(l,{variant:"filled",size:"lg",iconName:"more-2"}),items:[{id:"edit",iconName:"edit-box",label:"Edit",onClick:()=>null,disabled:!0},{id:"inactivate",iconName:"lock",label:"Inactivate",onClick:()=>null},{id:"exclude",iconName:"trash",label:"Exclude",onClick:()=>null}],position:"left",align:"bottom"})});e.__docgenInfo={description:"",methods:[],displayName:"Default"};var n,i,o;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100vw',
  height: '100vh'
}}>
    <DropdownMenu mainItem={<ActionIcon variant="filled" size="lg" iconName="more-2" />} items={[{
    id: 'edit',
    iconName: 'edit-box',
    label: 'Edit',
    onClick: () => null,
    disabled: true
  }, {
    id: 'inactivate',
    iconName: 'lock',
    label: 'Inactivate',
    onClick: () => null
  }, {
    id: 'exclude',
    iconName: 'trash',
    label: 'Exclude',
    onClick: () => null
  }]} position="left" align="bottom" />
  </div>`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const c=["Default"];export{e as Default,c as __namedExportsOrder,s as default};
