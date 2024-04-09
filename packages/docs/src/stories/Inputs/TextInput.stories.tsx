import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TextInput } from '@stick-ui/lib';

TextInput.displayName = 'TextInput';

const meta: Meta<typeof TextInput> = {
  title: 'STICK UI/Components/Core/Inputs/TextInput',
  component: TextInput,
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
    placeholder: 'Text here',
    grow: true,
    disabled: false,
    required: true,
  },
};
