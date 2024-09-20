import type { Meta, StoryObj } from '@storybook/react';
import { TextInput } from '@istic-ui/react';

const meta: Meta<typeof TextInput> = {
  title: 'ISTIC UI/Componentes/Core/Inputs/TextInput',
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
    error: { description: '' },
  },
};
