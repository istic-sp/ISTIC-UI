import React from 'react';
import { Button } from '../Button';

interface SegmentedControlsProps {
  value: string;
  onChange: (value: string) => void;
  data: { label: string; value: string }[];
}
const SegmentedControl = ({
  value,
  onChange,
  data,
}: SegmentedControlsProps) => {
  return (
    <div className="flex flex-row gap-1 p-1 bg-neutral100">
      {data.map((i, key) => (
        <Button
          size="xs"
          key={key}
          variant={value === i.value ? 'filled' : 'light'}
          label={i.label}
          onClick={() => onChange(i.value)}
        />
      ))}
    </div>
  );
};
export { SegmentedControl, SegmentedControlsProps };
