import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, Table } from '@stick-ui/lib';

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
        render: (data) => {
          return (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              <Avatar size="xs" />
              {data.name}
            </div>
          );
        },
      },
      { index: 'age', label: 'Age' },
      { index: 'region', label: 'Region' },
    ],
    data: [
      { name: 'Marcos', age: 19, region: 'Brazil' },
      {
        name: 'Pedro Rony',
        age: 25,
        region: 'Argentina',
      },
      { name: 'Sergito', age: 32, region: 'Uruguay' },
    ],
  },
};
