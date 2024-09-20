import type { Meta, StoryObj } from '@storybook/react';
import { NumberInput } from '@istic-ui/react';

const meta: Meta<typeof NumberInput> = {
  title: 'ISTIC UI/Components/Core/Inputs/NumberInput',
  component: NumberInput,
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['xs', 'lg'],
      control: { type: 'select' },
    },
    decimalSeparator: {
      options: ['.', ','],

      table: {
        defaultValue: { summary: '.' },
      },
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
    decimalSeparator: '.',
    size: 'xs',
    label: 'label',
    placeholder: 'Text here',
    grow: true,
    disabled: false,
    maxValue: 100,
    required: true,
    error: { description: '' },
  },
};
