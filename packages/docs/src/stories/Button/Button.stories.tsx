import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@stick-ui/lib';

const meta: Meta<typeof Button> = {
  title: 'STICK UI/Components/Core/Buttons/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'md' },
      },
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
    iconProps: {
      iconPosition: 'left',
      iconName: 'add',
    },
    variant: 'filled',
    size: 'md',
    label: 'Text Button',
    grow: false,
    disabled: false,
    isLoading: false,
  },
};
export const Outline: StoryObj = {
  args: {
    variant: 'outline',
    size: 'md',
    label: 'Text Button',
    grow: false,
    disabled: false,
    isLoading: false,
  },
};
export const Subtle: StoryObj = {
  args: {
    variant: 'subtle',
    size: 'md',
    label: 'Text Button',
    grow: false,
    disabled: false,
    isLoading: false,
  },
};
export const Light: StoryObj = {
  args: {
    variant: 'light',
    size: 'md',
    label: 'Text Button',
    grow: false,
    disabled: false,
    isLoading: false,
  },
};
