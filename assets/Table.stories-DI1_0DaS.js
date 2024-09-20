import{j as n}from"./jsx-runtime-QvZ8i92b.js";import{U as o,$ as t,r as d,z as g}from"./index-DPbnqWXa.js";import"./index-uubelm5h.js";o.displayName="Avatar";const u={title:"STICK UI/Components/Core/Table",component:t,tags:["autodocs"],argTypes:{minHeight:{control:{type:"number"},description:"Altura mínima do tbody",table:{defaultValue:{summary:"undefined"}}},height:{control:{type:"number"},description:"Altura do tbody",table:{defaultValue:{summary:"undefined"}}}},decorators:[a=>n.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:n.jsx(a,{})})]},e={args:{isLoading:!1,minHeight:300,height:100,pagination:{total:10,pageCurrent:6,onPaginate:()=>null},columns:[{index:"name",label:"Name",width:"200px",render:a=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,width:"100%"},children:[n.jsx(o,{size:"xs"}),a.name]})},{index:"region",label:"Region"},{index:"age",label:"Age",align:"end"},{index:"age",label:"Age",align:"end"},{index:"age",label:"Age",align:"end"},{index:"actions",label:"",width:"30px",render:()=>n.jsx(d,{mainItem:n.jsx(g,{variant:"subtle",iconName:"settings",size:"xs"}),items:[{iconName:"account-circle",label:"Profile",onClick:()=>null},{iconName:"account-circle",label:"Profile",onClick:()=>null},{iconName:"account-circle",label:"Profile",onClick:()=>null}]})}],data:[{name:"Marcos",age:19,region:"Brazil"},{name:"Pedro Rony",age:25,region:"Argentina"},{name:"Eduardo",age:32,region:"França"},{name:"Eduardo",age:32,region:"França"},{name:"Eduardo",age:32,region:"França"},{name:"Eduardo",age:32,region:"França"}]}};var i,r,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    isLoading: false,
    minHeight: 300,
    height: 100,
    pagination: {
      total: 10,
      pageCurrent: 6,
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
      align: 'end'
    }, {
      index: 'age',
      label: 'Age',
      align: 'end'
    }, {
      index: 'age',
      label: 'Age',
      align: 'end'
    }, {
      index: 'actions',
      label: '',
      width: '30px',
      render: () => {
        return <DropdownMenu mainItem={<ActionIcon variant="subtle" iconName="settings" size="xs" />} items={[{
          iconName: 'account-circle',
          label: 'Profile',
          onClick: () => null
        }, {
          iconName: 'account-circle',
          label: 'Profile',
          onClick: () => null
        }, {
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
      name: 'Eduardo',
      age: 32,
      region: 'França'
    }, {
      name: 'Eduardo',
      age: 32,
      region: 'França'
    }, {
      name: 'Eduardo',
      age: 32,
      region: 'França'
    }]
  }
}`,...(l=(r=e.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const x=["Default"];export{e as Default,x as __namedExportsOrder,u as default};
