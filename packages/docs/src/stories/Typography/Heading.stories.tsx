import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from '@stick-ui/lib';

Heading.displayName = 'Heading';

const meta: Meta<typeof Heading> = {
  title: 'STICK UI/Components/Core/Typography/Heading',
  component: Heading,
  tags: ['autodocs'],
  argTypes: {
    level: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5'],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'h2' },
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
    level: 'h2',
    color: 'text-neutral700',
    children: 'Text here',
  },
};
