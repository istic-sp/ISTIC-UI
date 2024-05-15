import React from 'react';
import clsx from 'clsx'; // Import clsx
import { Icon } from '../../Icons';
import { Text } from '../../Typography/Text';

interface RadioItemProps {
  label: string;
  value: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioItem: React.FC<RadioItemProps> = ({
  label,
  value,
  checked = false,
  disabled = false,
  onChange,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(event);
  };
  const radioItemClasses = clsx(
    'h-[16px] w-[16px] flex items-center justify-center rounded-full border',
    {
      'bg-neutral200 border-neutral400': disabled,
      'bg-brand600 border-brand500': checked && !disabled,
      'border-neutral400': !checked && !disabled,
    },
  );
  return (
    <label className="inline-flex items-center gap-2">
      <input
        type="radio"
        className="hidden"
        value={value}
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
      />
      <span className={radioItemClasses}>
        {disabled ? (
          <Icon size={10} name={'substract'} color="text-neutral400" />
        ) : (
          checked && <Icon size={10} name={'check'} color="text-white" />
        )}
      </span>
      <Text weight="medium" color="text-neutral700" size="xs">
        {label}
      </Text>
    </label>
  );
};

export { RadioItem, RadioItemProps };
