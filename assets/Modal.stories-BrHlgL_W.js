import{j as o}from"./jsx-runtime-QvZ8i92b.js";import{r as c}from"./index-uubelm5h.js";import{e as a,N as r,P as i}from"./index-DPbnqWXa.js";a.displayName="Modal";const x={title:"STICK UI/Components/Core/Modals/Modal",component:a,argTypes:{children:{description:"Conteúdo a ser exibido dentro do corpo do modal."},contentWidth:{description:'Define a largura inicial da área de conteúdo do modal. Pode ser um valor em string, como "600px", ou um número sem unidade representando pixels.'},title:{description:"Texto a ser exibido como título do modal."},isOpen:{description:"Controla a visibilidade do modal (true para abrir, false para fechar)."},onClose:{description:"Função a ser chamada quando o modal é fechado (por exemplo, ao clicar fora ou no botão de fechar)."},className:{description:"String opcional para adicionar classes personalizadas ao contêiner do modal."},overlayClassName:{description:"String opcional para adicionar classes personalizadas à sobreposição do modal."},contentClassName:{description:"String opcional para adicionar classes personalizadas à área de conteúdo do modal."},ariaLabel:{description:"String opcional para descrever o conteúdo do modal para acessibilidade."}}},e=()=>{const[d,n]=c.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(r,{label:"Abrir Modal",onClick:()=>n(!0)}),o.jsxs(a,{contentWidth:300,isOpen:d,onClose:()=>{n(!1)},title:"Modal Bonito",children:[o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8,paddingBottom:16,width:"100%"},children:[o.jsx(i,{label:"Nome",placeholder:"Digite o nome",grow:!0}),o.jsx(i,{label:"Descrição",placeholder:"Digite a descrição",grow:!0})]}),o.jsx(r,{size:"xs",label:"Continuar",grow:!0})]})]})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};var t,s,l;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  const [openModal, setOpenModal] = useState(false);
  return <>
      <Button label="Abrir Modal" onClick={() => setOpenModal(true)} />

      <Modal contentWidth={300} isOpen={openModal} onClose={() => {
      setOpenModal(false);
    }} title={'Modal Bonito'}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        paddingBottom: 16,
        width: '100%'
      }}>
          <TextInput label="Nome" placeholder="Digite o nome" grow />
          <TextInput label="Descrição" placeholder="Digite a descrição" grow />
        </div>

        <Button size="xs" label="Continuar" grow />
      </Modal>
    </>;
}`,...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const g=["Default"];export{e as Default,g as __namedExportsOrder,x as default};
