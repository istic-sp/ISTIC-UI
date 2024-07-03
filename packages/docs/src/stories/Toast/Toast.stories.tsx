import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from '@stick-ui/lib';

const meta: Meta<typeof Toast> = {
  title: 'STICK UI/Components/Core/Toast',
  component: Toast,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Título do toast',
      type: { name: 'string', required: false },
      defaultValue: '',
    },
    message: {
      control: 'text',
      description: 'Conteúdo da mensagem do toast',
      type: { name: 'string', required: false },
      defaultValue: '',
    },
    type: {
      control: 'radio',
      options: ['success', 'error', 'info', 'warning'],
      description: 'Tipo do toast para estilização',
      type: { name: 'string', required: false },
      defaultValue: { summary: 'info' },
    },
    durationInMs: {
      control: 'number',
      description: 'Duração em milissegundos antes do toast desaparecer',
      type: { name: 'number', required: false },
      defaultValue: { summary: 3000 },
    },
    position: {
      control: 'radio',
      options: [
        'top-left',
        'top-right',
        'bottom-left',
        'bottom-right',
        'top-center',
        'bottom-center',
      ],
      description: 'Posição do toast na tela',
      type: { name: 'string', required: false },
      defaultValue: { summary: 'top-right' },
    },
    onClose: {
      control: 'function',
      description: 'Função a ser chamada quando o toast é fechado',
      type: { name: 'function', required: false },
    },
    index: {
      control: 'number',
      description: 'Índice do toast, usado para empilhar múltiplos toasts',
      type: { name: 'number', required: false },
      defaultValue: 0,
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 200,
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;
export const Default: StoryObj = {
  args: {
    title: 'Esse é o título do Toast',
    message: 'Esse é o conteúdo do Toast',
    type: 'success',
    durationInMs: 200000,
    position: 'top-right',
    onClose: () => null,
  },
};
