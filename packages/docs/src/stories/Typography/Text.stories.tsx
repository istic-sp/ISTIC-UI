import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '@istic-ui/react';

const meta: Meta<typeof Text> = {
  title: 'ISTIC UI/Components/Core/Typography/Text',
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
        defaultValue: { summary: 'regular' },
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
    weight: 'regular',
    children: 'Text here',
  },
};
