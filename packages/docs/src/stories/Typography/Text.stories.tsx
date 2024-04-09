import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '@stick-ui/lib';

Text.displayName = 'Text';

const meta: Meta<typeof Text> = {
  title: 'STICK UI/Components/Core/Typography/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'xs' },
      },
    },
    weight: {
      options: ['regular', 'medium', 'bold'],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'medium' },
      },
    },
    color: {
      options: [
        'text-success',
        'text-error',
        'text-info',
        'text-warning',
        'text-neutral700',
      ],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'text-neutral700' },
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
    size: 'md',
    weight: 'medium',
    color: 'text-neutral700',
    children: 'Text here',
  },
};
