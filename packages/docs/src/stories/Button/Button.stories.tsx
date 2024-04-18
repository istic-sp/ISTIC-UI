import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@stick-ui/lib';

Button.displayName = 'Button';

const meta: Meta<typeof Button> = {
  title: 'STICK UI/Components/Core/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'select' },
    },
    variant: {
      options: ['filled', 'outline', 'light', 'subtle'],
      control: { type: 'select' },
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
    size: 'md',
    label: 'Text Button',
    grow: false,
    disabled: false,
  },
};
export const Outline: StoryObj = {
  args: {
    variant: 'outline',
    size: 'md',
    label: 'Text Button',
    grow: false,
    disabled: false,
  },
};
export const Subtle: StoryObj = {
  args: {
    variant: 'subtle',
    size: 'md',
    label: 'Text Button',
    grow: false,
    disabled: false,
  },
};
export const Light: StoryObj = {
  args: {
    variant: 'light',
    size: 'md',
    label: 'Text Button',
    grow: false,
    disabled: false,
  },
};