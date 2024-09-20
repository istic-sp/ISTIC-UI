import React, { useState } from 'react';
import { Button, Drawer, TextInput } from '@istic-ui/react';
import { Meta } from '@storybook/react';

const meta: Meta<typeof Drawer> = {
  title: 'ISTIC UI/Components/Core/Drawer',
  component: Drawer,

  argTypes: {
    children: {
      description: 'Conteúdo a ser exibido dentro do corpo do drawer.',
    },
    title: {
      description: 'Texto a ser exibido como título do drawer.',
    },
    isOpen: {
      description:
        'Controla a visibilidade do drawer (true para abrir, false para fechar).',
    },
    onClose: {
      description:
        'Função a ser chamada quando o drawer for fechado (ex.: clicando fora ou no botão de fechar).',
    },
    className: {
      description:
        'String opcional para adicionar classes personalizadas ao container do drawer.',
    },
    overlayClassName: {
      description:
        'String opcional para adicionar classes personalizadas à sobreposição do drawer.',
    },
    contentClassName: {
      description:
        'String opcional para adicionar classes personalizadas à área de conteúdo do drawer.',
    },
    ariaLabel: {
      description:
        'String opcional para descrever o conteúdo do drawer para acessibilidade.',
    },
  },
};
export const Default = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Button label="Open Drawer" onClick={() => setOpenDrawer(true)} />
      <Drawer
        isOpen={openDrawer}
        onClose={() => {
          setOpenDrawer(false);
        }}
        title={'Pretty Drawer'}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
            paddingBottom: 16,
            width: '100%',
          }}
        >
          <TextInput label="Name" placeholder="Type the name" grow />
          <TextInput
            label="Description"
            placeholder="Type the description"
            grow
          />
        </div>

        <Button size="xs" label="Continue" grow />
      </Drawer>
    </>
  );
};

export default meta;
