import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { StatusBadge } from '@stick-ui/lib';

StatusBadge.displayName = 'StatusBadge';

const meta: Meta<typeof StatusBadge> = {
  title: 'STICK UI/Components/Core/Badges/StatusBadge',
  component: StatusBadge,
  tags: ['autodocs'],
  argTypes: {
    activeText: {
      table: {
        defaultValue: { summary: 'Active' },
      },
    },
    inactiveText: {
      table: {
        defaultValue: { summary: 'Inactive' },
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
export const Active: StoryObj = {
  args: {
    grow: false,
    isActive: true,
    activeText: 'Active',
    inactiveText: 'Inactive',
  },
};
export const Inactive: StoryObj = {
  args: {
    grow: false,
    isActive: false,
    activeText: 'Active',
    inactiveText: 'Inactive',
  },
};
