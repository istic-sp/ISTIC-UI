import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { PasswordInput } from '@stick-ui/lib';

PasswordInput.displayName = 'PasswordInput';

const meta: Meta<typeof PasswordInput> = {
  title: 'STICK UI/Components/Core/Inputs/PasswordInput',
  component: PasswordInput,
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['xs', 'lg'],
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
export const Default: StoryObj = {
  args: {
    size: 'xs',
    label: 'label',
    placeholder: 'Password here',
    grow: true,
    disabled: false,
    required: true,
    error: { description: '' },
  },
};
