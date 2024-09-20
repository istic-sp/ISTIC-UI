import React, { useState } from 'react';
import { Button, Modal, TextInput } from '@istic-ui/react';
import { Meta } from '@storybook/react';

Modal.displayName = 'Modal';
const meta: Meta<typeof Modal> = {
  title: 'ISTIC UI/Components/Core/Modals/Modal',
  component: Modal,

  argTypes: {
    children: {
      description: 'Conteúdo a ser exibido dentro do corpo do modal.',
    },
    contentWidth: {
      description:
        'Define a largura inicial da área de conteúdo do modal. Pode ser um valor em string, como "600px", ou um número sem unidade representando pixels.',
    },
    title: {
      description: 'Texto a ser exibido como título do modal.',
    },
    isOpen: {
      description:
        'Controla a visibilidade do modal (true para abrir, false para fechar).',
    },
    onClose: {
      description:
        'Função a ser chamada quando o modal é fechado (por exemplo, ao clicar fora ou no botão de fechar).',
    },
    className: {
      description:
        'String opcional para adicionar classes personalizadas ao contêiner do modal.',
    },
    overlayClassName: {
      description:
        'String opcional para adicionar classes personalizadas à sobreposição do modal.',
    },
    contentClassName: {
      description:
        'String opcional para adicionar classes personalizadas à área de conteúdo do modal.',
    },
    ariaLabel: {
      description:
        'String opcional para descrever o conteúdo do modal para acessibilidade.',
    },
  },
};

export const Default = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Button label="Abrir Modal" onClick={() => setOpenModal(true)} />

      <Modal
        contentWidth={300}
        isOpen={openModal}
        onClose={() => {
          setOpenModal(false);
        }}
        title={'Modal Bonito'}
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
          <TextInput label="Nome" placeholder="Digite o nome" grow />
          <TextInput label="Descrição" placeholder="Digite a descrição" grow />
        </div>

        <Button size="xs" label="Continuar" grow />
      </Modal>
    </>
  );
};

export default meta;
