import{j as a}from"./jsx-runtime-QvZ8i92b.js";import{r as l}from"./index-uubelm5h.js";import{I as o}from"./index-DPbnqWXa.js";o.displayName="DateInput";const f={title:"STICK UI/Components/Core/Inputs/DateInput",component:o,argTypes:{label:{description:"Texto a ser exibido como rótulo do input."},size:{description:"Tamanho do campo de input."},grow:{description:"O input deve ocupar toda a largura do seu contêiner."},width:{description:"Define a largura do input."},error:{description:"Objeto de erro contendo a descrição do erro."},value:{description:"O valor atual do input."},defaultValue:{description:"O valor padrão do input."},onDateChange:{description:"Função de callback chamada quando a data é alterada."},required:{description:"Indica se o input é obrigatório."},disabled:{description:"Indica se o input está desabilitado."},clearable:{description:"Indica se o valor do input pode ser limpo."},style:{description:"Estilos personalizados para o input."}}},e=t=>{const[p,c]=l.useState(t.defaultValue||"");return a.jsx(a.Fragment,{children:a.jsx(o,{value:p,clearable:!0,onDateChange:r=>{var n;c(r),(n=t.onDateChange)==null||n.call(t,r)}})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};var d,i,s;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`(args: DateInputProps) => {
  const [selectedDate, setSelectedDate] = useState<string | undefined>(args.defaultValue || '');
  return <>
      <DateInput value={selectedDate} clearable onDateChange={date => {
      setSelectedDate(date);
      args.onDateChange?.(date);
    }} />
    </>;
}`,...(s=(i=e.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const g=["Default"];export{e as Default,g as __namedExportsOrder,f as default};
