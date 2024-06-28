import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import { DateInput, DateInputProps } from '@stick-ui/lib';

DateInput.displayName = 'DateInput';

const meta: Meta<typeof DateInput> = {
  title: 'STICK UI/Components/Core/Inputs/DateInput',
  component: DateInput,

  argTypes: {
    label: {
      description: 'Text to be displayed as the label of the input.',
    },
    size: {
      description: 'Size of the input field.',
    },
    grow: {
      description: 'Should the input take the full width of its container.',
    },
    width: {
      description: 'Sets the width of the input.',
    },
    error: {
      description: 'Error object containing the description of the error.',
    },
    value: {
      description: 'The current value of the input.',
    },
    defaultValue: {
      description: 'The default value of the input.',
    },
    onDateChange: {
      description: 'Callback function called when the date changes.',
    },
    required: {
      description: 'Is the input required.',
    },
    disabled: {
      description: 'Is the input disabled.',
    },
    clearable: {
      description: 'Is the input value clearable.',
    },
    style: {
      description: 'Custom styles for the input.',
    },
  },
};
export const Default = (args: DateInputProps) => {
  const [selectedDate, setSelectedDate] = useState<string | undefined>(
    args.defaultValue || '',
  );

  return (
    <>
      <DateInput
        value={selectedDate}
        clearable
        onDateChange={(date) => {
          setSelectedDate(date);
          args.onDateChange?.(date);
        }}
      />
    </>
  );
};

export default meta;
