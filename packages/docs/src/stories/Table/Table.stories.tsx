import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ActionIcon, Avatar, DropdownMenu, Table } from '@istic-ui/react';

Avatar.displayName = 'Avatar';

const meta: Meta<typeof Table> = {
  title: 'ISTIC UI/Componentes/Core/Table',
  component: Table,
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
export const Default: StoryObj = {
  args: {
    classNames: {
      headCell: ' text-neutral-800 px-2 py-4  bg-brand-500',
      bodyCell: 'px-2 py-4 text-neutral-800',
      bodyRow: ' px-2 py-4 hover:bg-brand-700',
    },
    isLoading: false,
    minHeight: 300,
    height: 100,
    paddingInline: 16,
    pagination: {
      total: 10,
      pageCurrent: 6,
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
      { index: 'age', label: 'Age', align: 'end' },
      { index: 'age', label: 'Age', align: 'end' },
      { index: 'age', label: 'Age', align: 'end' },
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
                  id: '1',
                  iconName: 'account-circle',
                  label: 'Profile',
                  onClick: () => null,
                },
                {
                  id: '2',
                  iconName: 'account-circle',
                  label: 'Profile',
                  onClick: () => null,
                },
                {
                  id: '3',
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
      {
        name: 'Pedro Rony',
        age: 25,

        region: 'Argentina',
      },
      { name: 'Eduardo', age: 32, region: 'França' },
    ],
  },
};
