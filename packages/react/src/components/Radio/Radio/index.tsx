import React from 'react';
import { RadioItem } from '../RadioItem';

interface RadioProps {
  value: string;
  onChange: (value: string) => void;
  items: { label: string; value: string; disabled?: boolean }[];
  direction?: 'row' | 'column';
}

const Radio: React.FC<RadioProps> = ({
  value,
  onChange,
  items = [],
  direction = 'column',
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div
      className="flex items-center gap-2"
      style={
        direction === 'column'
          ? { flexDirection: 'column' }
          : { flexDirection: 'row' }
      }
    >
      {items.map((item) => (
        <RadioItem
          key={item.value}
          label={item.label}
          value={item.value}
          disabled={item.disabled}
          checked={item.value === value}
          onChange={handleChange}
        />
      ))}
    </div>
  );
};

Radio.displayName = 'Radio';
export { Radio, RadioProps };
