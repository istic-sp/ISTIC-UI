import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from '@stick-ui/lib';

Chip.displayName = 'Chip';

const meta: Meta<typeof Chip> = {
  title: 'STICK UI/Components/Core/Chip',
  component: Chip,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['filled', 'outline'],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'filled' },
      },
    },
    notification: {
      control: { type: 'number' },
      table: {
        defaultValue: { summary: 0 },
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
export const Default: StoryObj = {
  args: {
    label: 'Chip',
  },
};
