import React, { useState } from 'react';
import { SegmentedControl } from '@istic-ui/react';
import { Meta } from '@storybook/react';

const meta: Meta<typeof SegmentedControl> = {
  title: 'ISTIC UI/Componentes/Core/Buttons/SegmentedControl',
  component: SegmentedControl,

  argTypes: {},
};
export const Default = () => {
  const [value, setValue] = useState('1');
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        height: '100vh',
      }}
    >
      <SegmentedControl
        data={[
          { value: '1', label: 'Value 1' },
          { value: '2', label: 'Value 2' },
          { value: '3', label: 'Value 3' },
        ]}
        grow
        value={value}
        onChange={function (value: string): void {
          setValue(value);
        }}
      />
    </div>
  );
};

export default meta;
