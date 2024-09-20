import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ActionIcon, icons } from '@istic-ui/react';

const meta: Meta<typeof ActionIcon> = {
  title: 'ISTIC UI/Componentes/Core/Buttons/ActionIcon',
  component: ActionIcon,
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['xs', 'lg'],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'xs' },
      },
    },
    iconName: {
      options: [...Object.keys(icons).map((i) => i)],
      control: { type: 'select' },
    },
    variant: {
      options: ['filled', 'outline', 'light', 'subtle'],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'filled' },
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
export const Filled: StoryObj = {
  args: {
    variant: 'filled',
    size: 'xs',
    iconName: 'archive',
    disabled: false,
  },
};
export const Outline: StoryObj = {
  args: {
    variant: 'outline',
    size: 'xs',
    iconName: 'archive',
    disabled: false,
  },
};
export const Subtle: StoryObj = {
  args: {
    variant: 'subtle',
    size: 'xs',
    iconName: 'archive',
    disabled: false,
  },
};
export const Light: StoryObj = {
  args: {
    variant: 'light',
    size: 'xs',
    iconName: 'archive',
    disabled: false,
  },
};
