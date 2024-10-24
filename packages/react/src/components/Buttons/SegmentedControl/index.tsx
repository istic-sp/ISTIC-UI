import React from 'react';
import { Button } from '../Button';

interface SegmentedControlsProps {
  value: string;
  onChange: (value: string) => void;
  data: { label: string; value: string }[];
  grow?: boolean;
}
const SegmentedControl = ({
  value,
  onChange,
  data,
  grow,
}: SegmentedControlsProps) => {
  return (
    <div
      className={`flex flex-row gap-1 p-1 bg-neutral-100 ${grow && 'w-full'}`}
    >
      {data.map((i, key) => (
        <Button
          grow
          type="button"
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
SegmentedControl.displayName = 'SegmentedControl';
export { SegmentedControl, SegmentedControlsProps };
