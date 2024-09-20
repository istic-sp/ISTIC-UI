import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from '@istic-ui/react';

Chip.displayName = 'Chip';

const meta: Meta<typeof Chip> = {
  title: 'ISTIC UI/Componentes/Core/Chip',
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
    badge: {
      control: { type: 'number' },
      table: {
        defaultValue: { summary: 0 },
      },
    },
    checkIcon: {
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: true },
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
        <Story />
        <Story />
        <Story />
      </div>
    ),
  ],
};

export default meta;
export const Default: StoryObj = {
  args: {
    active: true,
    checkIcon: true,
    disabled: false,
    label: 'Chip',
    questionTooltip: {
      title: 'Title Example',
      children: (
        <div className="bg-white text-neutral700 text-sm shadow-sm rounded-lg p-2">
          Text Example
        </div>
      ),
      position: 'right',
      align: 'center',
    },
  },
};
