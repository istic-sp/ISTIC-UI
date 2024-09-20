import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Icon, icons } from '@istic-ui/react';

Icon.displayName = 'Icon';

const meta: Meta<typeof Icon> = {
  title: 'ISTIC UI/Components/Core/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    name: {
      options: [...Object.keys(icons).map((i) => i)],
      control: { type: 'select' },
    },
    size: { control: { type: 'number', min: 1 } },
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
    size: 20,
    name: Object.keys(icons)[0],
  },
};
