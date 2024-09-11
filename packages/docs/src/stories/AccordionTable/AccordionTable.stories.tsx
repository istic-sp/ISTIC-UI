import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AccordionTable, AccordionTableProps } from '@stick-ui/lib';
import { Avatar, ActionIcon, DropdownMenu } from '@stick-ui/lib';

Avatar.displayName = 'Avatar';

const meta: Meta<typeof AccordionTable> = {
  title: 'STICK UI/Components/Core/AccordionTable',
  component: AccordionTable,
  tags: ['autodocs'],
  argTypes: {
    minHeight: {
      control: {
        type: 'number',
      },
      description: 'Altura mínima do tbody',
      table: {
        defaultValue: { summary: 'undefined' },
      },
    },
    height: {
      control: {
        type: 'number',
      },
      description: 'Altura do tbody',
      table: {
        defaultValue: { summary: 'undefined' },
      },
    },
    isLoading: {
      control: {
        type: 'boolean',
      },
      description: 'Indica se a tabela está carregando',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    pagination: {
      control: {
        type: 'object',
      },
      description: 'Propriedades de paginação',
    },
    columns: {
      control: {
        type: 'object',
      },
      description: 'Colunas da tabela',
    },
    data: {
      control: {
        type: 'object',
      },
      description: 'Dados a serem exibidos na tabela',
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;

export const Default: StoryObj<AccordionTableProps<any>> = {
  args: {
    isLoading: false,
    minHeight: '300',
    height: '400',
    pagination: {
      total: 10,
      pageCurrent: 1,
      onPaginate: () => null,
    },
    columns: [
      {
        index: 'name',
        label: 'Name',
        width: '200px',
        render: (data: any) => {
          return (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                width: '100%',
              }}
            >
              <Avatar size="xs" />
              {data.name}
            </div>
          );
        },
      },
      { index: 'region', label: 'Region' },
      { index: 'age', label: 'Age', align: 'right' },
      {
        index: 'actions',
        label: '',
        width: '30px',
        render: () => {
          return (
            <DropdownMenu
              mainItem={
                <ActionIcon variant="subtle" iconName="settings" size="xs" />
              }
              items={[
                {
                  id: '',
                  iconName: 'account-circle',
                  label: 'Profile',
                  onClick: () => null,
                },
                {
                  id: '',
                  iconName: 'account-circle',
                  label: 'Profile',
                  onClick: () => null,
                },
                {
                  id: '',
                  iconName: 'account-circle',
                  label: 'Profile',
                  onClick: () => null,
                },
              ]}
            />
          );
        },
      },
    ],
    data: [
      { name: 'Marcos', age: 19, region: 'Brazil' },
      { name: 'Pedro Rony', age: 25, region: 'Argentina' },
      { name: 'Eduardo', age: 32, region: 'França' },
      { name: 'Alice', age: 27, region: 'Canadá' },
    ],
  },
};
