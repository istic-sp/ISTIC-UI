import React from 'react';
import { Text } from '../Typography/Text';
import { Icon } from '../Icons';

interface CheckboxProps {
  label: string;
  checked?: boolean;
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked = false,
  disabled = false,
  onChange,
}) => {
  return (
    <label className="inline-flex items-center gap-2">
      <input
        type="checkbox"
        className="hidden"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <span
        className={`h-[18px] w-[18px] flex items-center justify-center rounded-[3px] border ${
          disabled
            ? 'bg-neutral200 border-neutral400'
            : checked
              ? 'bg-brand600 border-brand500'
              : 'border-neutral400'
        }`}
      >
        {disabled ? (
          <Icon size={10} name={'substract'} color="text-neutral400" />
        ) : (
          checked && <Icon size={10} name={'check'} color="text-white" />
        )}
      </span>
      <Text color="text-neutral700" size="xs">
        {label}
      </Text>
    </label>
  );
};

export { Checkbox, CheckboxProps };
