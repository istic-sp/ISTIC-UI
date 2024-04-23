import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '@stick-ui/lib';

Badge.displayName = 'Badge';

const meta: Meta<typeof Badge> = {
  title: 'STICK UI/Components/Core/Badges/Badge',
  component: Badge,
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
    label: 'Badge',
  },
};
