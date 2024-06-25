import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ActionIcon, Avatar, Table } from '@stick-ui/lib';

Avatar.displayName = 'Avatar';

const meta: Meta<typeof Table> = {
  title: 'STICK UI/Components/Core/Table',
  component: Table,
  tags: ['autodocs'],
  argTypes: {
    height: {
      control: {
        type: 'number',
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
    isLoading: false,
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
        render: (data) => {
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
      {
        index: 'actions',
        label: '',
        width: '30px',
        render: () => {
          return <ActionIcon variant="subtle" iconName="settings" size="xs" />;
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
