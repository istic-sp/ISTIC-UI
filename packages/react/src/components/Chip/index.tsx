import React, { useState } from 'react';
import clsx from 'clsx';
import { Icon } from '../Icons';
import { Text } from '../Typography/Text';

interface ChipTooltipProps {
  children: React.ReactNode;
  title: string;
  position?: 'left' | 'right';
  align?: 'top' | 'bottom' | 'center';
}

interface ChipProps {
  label: string;
  active: boolean;
  value: string;
  variant?: 'filled' | 'outline';
  questionTooltip?: ChipTooltipProps;
  checkIcon?: boolean;
  badge?: number;
  disabled?: boolean;
  onClick?: (value: string | null) => void;
}

const Chip: React.FC<ChipProps> = ({
  label,
  value,
  variant = 'filled',
  badge,
  questionTooltip,
  checkIcon = true,
  active,
  onClick,
  disabled,
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const iconColor =
    variant === 'filled'
      ? active
        ? 'text-white'
        : 'text-neutral-600'
      : active
        ? 'text-brand-500'
        : 'text-neutral-600';

  const filledChipClasses = clsx({
    ['bg-brand-500 text-white']: active,
    ['bg-neutral-50 text-neutral-600']: !active,
  });

  const outlineChipClasses = clsx({
    ['border-solid border border-brand-500 text-brand-500']: active,
    ['border-solid border border-neutral-300 text-neutral-600']: !active,
  });

  const chipClasses = clsx({
    ['px-2 py-1 rounded-full text-sm']: true,
    ['flex items-center justify-between gap-2']: true,
    ['select-none']: true,
    ['whitespace-nowrap']: true,
    [filledChipClasses]: variant === 'filled',
    [outlineChipClasses]: variant === 'outline',
    ['cursor-pointer']: !disabled,
    ['cursor-default']: disabled,
  });

  // Tooltip positioning
  const tooltipPositionClasses = clsx({
    // Common tooltip styles
    ['absolute']: true,
    // Position based on the 'position' prop
    ['left-full ml-2']: questionTooltip?.position === 'left',
    ['right-full mr-2']: questionTooltip?.position === 'right',
    // Vertical alignment based on the 'align' prop
    ['top-1/2 transform -translate-y-1/2']: questionTooltip?.align === 'center',
    ['bottom-full mt-2']: questionTooltip?.align === 'top',
    ['top-full mb-2']: questionTooltip?.align === 'bottom',
  });

  return (
    <div
      className={chipClasses}
      onClick={() => {
        if (!disabled) onClick && onClick(!active ? value : null);
      }}
    >
      {active && checkIcon && (
        <div className={'animate-chipFadeIn'}>
          <Icon name="check" color={iconColor} />
        </div>
      )}
      {label !== '' ? (
        <label className={disabled ? 'cursor-default' : 'cursor-pointer'}>
          {label}
        </label>
      ) : null}

      {questionTooltip && (
        <div
          className="relative flex items-center" // Apply relative positioning here
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <Icon name="question" color={iconColor} />

          {showTooltip && (
            <div className={tooltipPositionClasses}>
              {questionTooltip.children}
            </div>
          )}
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
  );
};

Chip.displayName = 'Chip';
export { Chip, ChipProps, ChipTooltipProps };
