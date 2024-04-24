import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ActionIcon, Avatar, Table } from '@stick-ui/lib';

Table.displayName = 'Table';

const meta: Meta<typeof Table> = {
  title: 'STICK UI/Components/Core/Table',
  component: Table,
  tags: ['autodocs'],
  argTypes: {},
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
    data: [],
  },
};
