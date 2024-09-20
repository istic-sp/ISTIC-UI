import{j as t}from"./jsx-runtime-QvZ8i92b.js";import{r as i}from"./index-uubelm5h.js";import{B as o}from"./index-DPbnqWXa.js";const v={title:"STICK UI/Components/Core/Buttons/SegmentedControl",component:o,argTypes:{}},e=()=>{const[r,s]=i.useState("1");return t.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100vw",height:"100vh"},children:t.jsx(o,{data:[{value:"1",label:"Value 1"},{value:"2",label:"Value 2"},{value:"3",label:"Value 3"}],grow:!0,value:r,onChange:function(u){s(u)}})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};var n,a,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  const [value, setValue] = useState('1');
  return <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100vw',
    height: '100vh'
  }}>
      <SegmentedControl data={[{
      value: '1',
      label: 'Value 1'
    }, {
      value: '2',
      label: 'Value 2'
    }, {
      value: '3',
      label: 'Value 3'
    }]} grow value={value} onChange={function (value: string): void {
      setValue(value);
    }} />
    </div>;
}`,...(l=(a=e.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};const p=["Default"];export{e as Default,p as __namedExportsOrder,v as default};
