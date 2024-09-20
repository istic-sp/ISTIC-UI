import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from '@istic-ui/react';

const meta: Meta<typeof Heading> = {
  title: 'ISTIC UI/Componentes/Core/Typography/Heading',
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
    level: 'h2',
    weight: 'regular',
    children: 'Text here',
  },
};
