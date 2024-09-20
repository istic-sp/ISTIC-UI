import{j as n}from"./jsx-runtime-QvZ8i92b.js";import{U as t,G as l,r as d,z as s}from"./index-DPbnqWXa.js";import"./index-uubelm5h.js";t.displayName="Avatar";const p={title:"STICK UI/Components/Core/AccordionTable",component:l,tags:["autodocs"],argTypes:{minHeight:{control:{type:"number"},description:"Altura mínima do tbody",table:{defaultValue:{summary:"undefined"}}},height:{control:{type:"number"},description:"Altura do tbody",table:{defaultValue:{summary:"undefined"}}},isLoading:{control:{type:"boolean"},description:"Indica se a tabela está carregando",table:{defaultValue:{summary:"false"}}},pagination:{control:{type:"object"},description:"Propriedades de paginação"},columns:{control:{type:"object"},description:"Colunas da tabela"},data:{control:{type:"object"},description:"Dados a serem exibidos na tabela"},renderExpandedContent:{control:{type:"object"},description:"Função que renderiza o conteúdo expandido"}},decorators:[e=>n.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:n.jsx(e,{})})]},a={args:{isLoading:!1,minHeight:"300",height:"400",pagination:{total:10,pageCurrent:1,onPaginate:()=>null},columns:[{index:"name",label:"Name",width:"200px",render:e=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,width:"100%"},children:[n.jsx(t,{size:"xs"}),e.name]})},{index:"region",label:"Region"},{index:"age",label:"Age",align:"right"},{index:"actions",label:"",width:"30px",render:()=>n.jsx(d,{mainItem:n.jsx(s,{variant:"subtle",iconName:"settings",size:"xs"}),items:[{id:"",iconName:"account-circle",label:"Profile",onClick:()=>null},{id:"",iconName:"account-circle",label:"Profile",onClick:()=>null},{id:"",iconName:"account-circle",label:"Profile",onClick:()=>null}]})}],data:[{name:"Marcos",age:19,region:"Brazil"},{name:"Pedro Rony",age:25,region:"Argentina"},{name:"Eduardo",age:32,region:"França"},{name:"Alice",age:27,region:"Canadá"}],renderExpandedContent(e){return n.jsxs("div",{children:[n.jsxs("p",{children:[n.jsx("strong",{children:"Nome:"})," ",e.name]}),n.jsxs("p",{children:[n.jsx("strong",{children:"Idade:"})," ",e.age]}),n.jsxs("p",{children:[n.jsx("strong",{children:"Região:"})," ",e.region]})]})}}};var i,o,r;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    isLoading: false,
    minHeight: '300',
    height: '400',
    pagination: {
      total: 10,
      pageCurrent: 1,
      onPaginate: () => null
    },
    columns: [{
      index: 'name',
      label: 'Name',
      width: '200px',
      render: (data: any) => {
        return <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          width: '100%'
        }}>
              <Avatar size="xs" />
              {data.name}
            </div>;
      }
    }, {
      index: 'region',
      label: 'Region'
    }, {
      index: 'age',
      label: 'Age',
      align: 'right'
    }, {
      index: 'actions',
      label: '',
      width: '30px',
      render: () => {
        return <DropdownMenu mainItem={<ActionIcon variant="subtle" iconName="settings" size="xs" />} items={[{
          id: '',
          iconName: 'account-circle',
          label: 'Profile',
          onClick: () => null
        }, {
          id: '',
          iconName: 'account-circle',
          label: 'Profile',
          onClick: () => null
        }, {
          id: '',
          iconName: 'account-circle',
          label: 'Profile',
          onClick: () => null
        }]} />;
      }
    }],
    data: [{
      name: 'Marcos',
      age: 19,
      region: 'Brazil'
    }, {
      name: 'Pedro Rony',
      age: 25,
      region: 'Argentina'
    }, {
      name: 'Eduardo',
      age: 32,
      region: 'França'
    }, {
      name: 'Alice',
      age: 27,
      region: 'Canadá'
    }],
    renderExpandedContent(row) {
      return <div>
          <p>
            <strong>Nome:</strong> {row.name}
          </p>
          <p>
            <strong>Idade:</strong> {row.age}
          </p>
          <p>
            <strong>Região:</strong> {row.region}
          </p>
        </div>;
    }
  }
}`,...(r=(o=a.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const u=["Default"];export{a as Default,u as __namedExportsOrder,p as default};
