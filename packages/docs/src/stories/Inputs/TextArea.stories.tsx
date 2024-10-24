import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TextArea } from '@istic-ui/react';

TextArea.displayName = 'TextArea';

const meta: Meta<typeof TextArea> = {
  title: 'ISTIC UI/Componentes/Core/Inputs/TextArea',
  component: TextArea,
  tags: ['autodocs'],
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
    label: 'label',
    placeholder: 'Text here',
    grow: true,
    disabled: false,
    required: true,
    error: { description: '' },
  },
};
