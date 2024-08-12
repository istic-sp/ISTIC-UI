import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '@stick-ui/lib';

Select.displayName = 'Select';

const meta: Meta<typeof Select> = {
  title: 'STICK UI/Components/Core/Inputs/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    pickerHeight: {
      description: 'Altura máxima do seletor.',
      control: {
        type: 'text',
      },
      defaultValue: {
        summary: '30dvh',
      },
    },
    isLoading: {
      defaultValue: {
        summary: 'false',
      },
    },
    required: {
      defaultValue: {
        summary: 'false',
      },
    },
    disabled: {
      defaultValue: {
        summary: 'false',
      },
    },
    grow: {
      defaultValue: {
        summary: 'true',
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
    searchable: true,
    clearable: false,
    onType: (a) => console.log(a),
    filterBySearchable: false,
    label: 'label',
    placeholder: 'Text here',
    grow: true,
    disabled: false,
    isLoading: false,
    required: true,
    error: { description: '' },
    pickerHeight: '30dvh',
    options: [
      { label: 'Value 1', value: 1 },
      { label: 'Value 2', value: 2 },
      { label: 'Value 3', value: 3 },
    ],
  },
};
