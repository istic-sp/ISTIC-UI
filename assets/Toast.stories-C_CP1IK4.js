import{j as t}from"./jsx-runtime-QvZ8i92b.js";import{c as n}from"./index-DPbnqWXa.js";import"./index-uubelm5h.js";const u={title:"STICK UI/Components/Core/Toast",component:n,tags:["autodocs"],argTypes:{title:{control:"text",description:"Título do toast",type:{name:"string",required:!1},defaultValue:""},message:{control:"text",description:"Conteúdo da mensagem do toast",type:{name:"string",required:!1},defaultValue:""},type:{control:"radio",options:["success","error","info","warning"],description:"Tipo do toast para estilização",type:{name:"string",required:!1},defaultValue:{summary:"info"}},durationInMs:{control:"number",description:"Duração em milissegundos antes do toast desaparecer",type:{name:"number",required:!1},defaultValue:{summary:3e3}},position:{control:"radio",options:["top-left","top-right","bottom-left","bottom-right","top-center","bottom-center"],description:"Posição do toast na tela",type:{name:"string",required:!1},defaultValue:{summary:"top-right"}},onClose:{control:"function",description:"Função a ser chamada quando o toast é fechado",type:{name:"function",required:!1}},index:{control:"number",description:"Índice do toast, usado para empilhar múltiplos toasts",type:{name:"number",required:!1},defaultValue:0}},decorators:[r=>t.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:200},children:t.jsx(r,{})})]},e={args:{title:"Esse é o título do Toast",message:"Esse é o conteúdo do Toast",type:"success",durationInMs:2e5,position:"top-right",onClose:()=>null}};var o,s,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    title: 'Esse é o título do Toast',
    message: 'Esse é o conteúdo do Toast',
    type: 'success',
    durationInMs: 200000,
    position: 'top-right',
    onClose: () => null
  }
}`,...(a=(s=e.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const p=["Default"];export{e as Default,p as __namedExportsOrder,u as default};
