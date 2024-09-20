import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{r as p}from"./index-uubelm5h.js";import{t as d,N as o,P as n}from"./index-DPbnqWXa.js";const w={title:"STICK UI/Components/Core/Drawer",component:d,argTypes:{children:{description:"Conteúdo a ser exibido dentro do corpo do drawer."},title:{description:"Texto a ser exibido como título do drawer."},isOpen:{description:"Controla a visibilidade do drawer (true para abrir, false para fechar)."},onClose:{description:"Função a ser chamada quando o drawer for fechado (ex.: clicando fora ou no botão de fechar)."},className:{description:"String opcional para adicionar classes personalizadas ao container do drawer."},overlayClassName:{description:"String opcional para adicionar classes personalizadas à sobreposição do drawer."},contentClassName:{description:"String opcional para adicionar classes personalizadas à área de conteúdo do drawer."},ariaLabel:{description:"String opcional para descrever o conteúdo do drawer para acessibilidade."}}},r=()=>{const[l,a]=p.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(o,{label:"Open Drawer",onClick:()=>a(!0)}),e.jsxs(d,{isOpen:l,onClose:()=>{a(!1)},title:"Pretty Drawer",children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8,paddingBottom:16,width:"100%"},children:[e.jsx(n,{label:"Name",placeholder:"Type the name",grow:!0}),e.jsx(n,{label:"Description",placeholder:"Type the description",grow:!0})]}),e.jsx(o,{size:"xs",label:"Continue",grow:!0})]})]})};r.__docgenInfo={description:"",methods:[],displayName:"Default"};var t,s,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return <>
      <Button label="Open Drawer" onClick={() => setOpenDrawer(true)} />
      <Drawer isOpen={openDrawer} onClose={() => {
      setOpenDrawer(false);
    }} title={'Pretty Drawer'}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        paddingBottom: 16,
        width: '100%'
      }}>
          <TextInput label="Name" placeholder="Type the name" grow />
          <TextInput label="Description" placeholder="Type the description" grow />
        </div>

        <Button size="xs" label="Continue" grow />
      </Drawer>
    </>;
}`,...(i=(s=r.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const x=["Default"];export{r as Default,x as __namedExportsOrder,w as default};
