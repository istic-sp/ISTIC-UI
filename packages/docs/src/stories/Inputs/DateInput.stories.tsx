import { DateInput } from '@stick-ui/lib';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof DateInput> = {
  title: 'STICK UI/Components/Core/Inputs/DateInput',
  component: DateInput,
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
    error: { description: '' },
  },
};
