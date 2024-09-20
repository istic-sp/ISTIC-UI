import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '@istic-ui/react';

Checkbox.displayName = 'Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'ISTIC UI/Components/Core/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {},
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
    disabled: false,
    checked: false,
    label: 'Title',
  },
};
