import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from '@istic-ui/react';

const meta: Meta<typeof Accordion> = {
  title: 'ISTIC UI/Componentes/Core/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    grow: {
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    children: {
      description: 'ReactNode',
    },
    open: {
      description: 'boolean',
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: 'undefined' },
      },
    },
    setOpen: { description: 'function', control: { type: 'function' } },
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
    grow: false,
    title: 'Accordion',
    children: 'Accordion Content',
  },
};
