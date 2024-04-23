import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SearchInput } from '@stick-ui/lib';

SearchInput.displayName = 'SearchInput';

const meta: Meta<typeof SearchInput> = {
  title: 'STICK UI/Components/Core/Inputs/SearchInput',
  component: SearchInput,
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
    placeholder: 'Search here',
    grow: true,
    disabled: false,
    required: true,
  },
};
