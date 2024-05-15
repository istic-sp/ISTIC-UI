import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from '@stick-ui/lib';

const meta: Meta<typeof Radio> = {
  title: 'STICK UI/Components/Core/Radio',
  component: Radio,
  argTypes: {},
  decorators: [
    () => {
      const [value, setValue] = useState('1');

      return (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Radio
            value={value}
            onChange={setValue}
            items={[
              { label: 'Option 1', value: '1' },
              { label: 'Option 2', value: '2' },
              { label: 'Option 3', value: '3' },
            ]}
          />
        </div>
      );
    },
  ],
};

export default meta;
export const Default: StoryObj = {};
