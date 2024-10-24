import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Dropzone, DropzoneProps, Icon } from '@istic-ui/react';

const meta: Meta<typeof Dropzone> = {
  title: 'ISTIC UI/Componentes/Core/Dropzone',
  component: Dropzone,
  argTypes: {
    onFileUpload: {
      action: 'fileUploaded',
      description: 'Função chamada quando um arquivo é carregado',
      table: {
        type: { summary: 'function' },
      },
    },
    accept: {
      control: {
        type: 'text',
      },
      description: 'Tipos de arquivo aceitos (ex: .step,.stl,.jpg)',
      table: {
        defaultValue: { summary: '.step,.stp,.stl' },
      },
    },
    multiple: {
      control: 'boolean',
      description: 'Permite selecionar múltiplos arquivos',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    description: {
      control: 'text',
      description: 'Texto descritivo para a área de upload',
      table: {
        defaultValue: {
          summary: 'Arraste e solte o arquivo aqui ou clique para carregar',
        },
      },
    },
    acceptedFormats: {
      control: 'text',
      description: 'Texto dos formatos de arquivo aceitos exibido na interface',
      table: {
        defaultValue: { summary: 'STEP, STP, STL' },
      },
    },
    highlightText: {
      control: 'text',
      description: 'Texto destacado (em azul) dentro da descrição',
      table: {
        defaultValue: { summary: 'clique para carregar' },
      },
    },
    icon: {
      control: 'text',
      description: 'Ícone personalizado exibido acima da descrição',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    className: {
      control: 'text',
      description: 'Classes CSS personalizadas para o estilo da dropzone',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100vh',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;

export const Default: StoryObj<DropzoneProps> = {
  args: {
    onFileUpload: (file) => console.log(file.name),
    accept: '.step,.stp,.stl',
    multiple: false,
    description: 'Arraste e solte o arquivo aqui ou clique para carregar',
    acceptedFormats: 'STEP, STP, STL',
    highlightText: 'clique para carregar',
    icon: <Icon name="upload-cloud-2-line" />,
  },
};

export const CustomDescription: StoryObj<DropzoneProps> = {
  args: {
    onFileUpload: (file) => console.log(file.name),
    accept: '.jpg,.png,.pdf',
    multiple: true,
    description: 'Envie seus documentos aqui',
    acceptedFormats: 'JPG, PNG, PDF',
    highlightText: 'selecione um arquivo',
  },
};

export const WithCustomIcon: StoryObj<DropzoneProps> = {
  args: {
    onFileUpload: (file) => console.log(file.name),
    accept: '.docx,.pdf',
    multiple: true,
    description: 'Envie seus relatórios aqui',
    acceptedFormats: 'DOCX, PDF',
    highlightText: 'envie agora',
    icon: <Icon name="upload-cloud-2-line" />,
  },
};
