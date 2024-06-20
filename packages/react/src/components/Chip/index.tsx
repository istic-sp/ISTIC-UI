import React, { useState } from 'react';
import clsx from 'clsx';
import { Icon } from '../Icons';
import { Text } from '../Typography/Text';
import { ChipTooltip, ChipTooltipProps } from './ChipTooltip';

export interface ChipProps {
  label: string;
  value: string;
  variant?: 'filled' | 'outline';
  questionTooltip?: ChipTooltipProps;
  checkIcon?: boolean;
  badge?: number;
  onClick?: (value: string | null) => void;
}

export const Chip: React.FC<ChipProps> = ({
  label,
  value,
  variant = 'filled',
  badge,
  questionTooltip,
  checkIcon = true,
  onClick,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

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
    ['z-0']: true,
    ['relative']: true,
    ['whitespace-nowrap']: true,
    [filledChipClasses]: variant === 'filled',
    [outlineChipClasses]: variant === 'outline',
    ['animate-chipScaleRight']: isActive && checkIcon,
    ['transfrom-all ease-in-out duration-300']: true,
  });

  return (
    <div className="relative">
      <div
        className={chipClasses}
        onClick={() => {
          onClick && onClick(!isActive ? value : null);
          setIsActive(!isActive);
        }}
      >
        {isActive && checkIcon && (
          <div className={'animate-chipFadeIn'}>
            <Icon name="check" color={iconColor} />
          </div>
        )}
        {label !== '' ? (
          <label className="cursor-pointer">{label}</label>
        ) : null}
        {questionTooltip && (
          <div
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            className="cursor-pointer h-full flex items-center justify-center"
          >
            <Icon name="question" color={iconColor} />
          </div>
        )}
        {badge != undefined ? (
          badge > -1 ? (
            <div className="rounded-full bg-error flex items-center justify-center px-[5px]">
              <Text size="xs" color="text-white">
                {badge}
              </Text>
            </div>
          ) : null
        ) : null}
      </div>
      {showTooltip && (
        <ChipTooltip title={questionTooltip?.title ?? ''}>
          {questionTooltip?.children}
        </ChipTooltip>
      )}
    </div>
  );
};
