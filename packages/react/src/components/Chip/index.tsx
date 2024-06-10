import React from 'react';
import clsx from 'clsx';
import { Icon } from '../Icons';
import { Text } from '../Typography/Text';

export interface ChipProps {
  label: string;
  value: string;
  variant?: 'filled' | 'outline';
  notification?: number;
  onClick?: (value: string | null) => void;
}

export const Chip: React.FC<ChipProps> = ({
  label,
  value = 'a',
  variant = 'filled',
  notification,
  onClick,
}) => {
  const [isActive, setIsActive] = React.useState(false);

  const iconColor =
    variant === 'filled'
      ? isActive
        ? 'text-white'
        : 'text-neutral600'
      : isActive
        ? 'text-brand500'
        : 'text-neutral600';

  const filledChipClasses = clsx({
    ['bg-brand500 text-white']: isActive,
    ['bg-neutral0 text-neutral600']: !isActive,
  });

  const outlineChipClasses = clsx({
    ['border-solid border border-brand500 text-brand500']: isActive,
    ['border-solid border border-neutral300 text-neutral600']: !isActive,
  });

  const chipClasses = clsx({
    ['px-2 py-1 rounded-full cursor-pointer text-sm']: true,
    ['flex items-center justify-between gap-2']: true,
    ['select-none']: true,
    [filledChipClasses]: variant === 'filled',
    [outlineChipClasses]: variant === 'outline',
  });

  return (
    <div
      className={chipClasses}
      onClick={() => {
        onClick && onClick(!isActive ? value : null);
        setIsActive(!isActive);
      }}
    >
      {isActive && <Icon name="check" color={iconColor} />}
      {label !== '' ? <label className="cursor-pointer">{label}</label> : null}
      <Icon name="question" color={iconColor} />
      {notification != undefined ? (
        notification > -1 ? (
          <div className="rounded-full bg-error flex items-center justify-center px-[5px]">
            <Text size="xs" color="text-white">
              {notification}
            </Text>
          </div>
        ) : null
      ) : null}
    </div>
  );
};
