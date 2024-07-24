import React from 'react';
import clsx from 'clsx';
import { Icon } from '../Icons';
import { Text } from '../Typography/Text';
import { Tooltip } from '../Tooltip';
import { Heading } from '../Typography/Heading';
export interface ChipTooltipProps {
  children: React.ReactNode;
  title: string;
  position?: 'left' | 'right';
  align?: 'top' | 'bottom' | 'center';
}

export interface ChipProps {
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

export const Chip: React.FC<ChipProps> = ({
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
  const iconColor =
    variant === 'filled'
      ? active
        ? 'text-white'
        : 'text-neutral600'
      : active
        ? 'text-brand500'
        : 'text-neutral600';

  const filledChipClasses = clsx({
    ['bg-brand500 text-white']: active,
    ['bg-neutral0 text-neutral600']: !active,
  });

  const outlineChipClasses = clsx({
    ['border-solid border border-brand500 text-brand500']: active,
    ['border-solid border border-neutral300 text-neutral600']: !active,
  });

  const chipClasses = clsx({
    ['px-2 py-1 rounded-full text-sm']: true,
    ['flex items-center justify-between gap-2']: true,
    ['select-none']: true,
    ['z-0']: true,
    ['relative']: true,
    ['whitespace-nowrap']: true,
    [filledChipClasses]: variant === 'filled',
    [outlineChipClasses]: variant === 'outline',
    ['animate-chipScaleRight']: active && checkIcon,
    ['transfrom-all ease-in-out duration-300']: true,
    ['cursor-pointer']: !disabled,
    ['cursor-default']: disabled,
  });
  const showTooltip = !!questionTooltip?.title || !!questionTooltip?.children;
  return (
    <div className="relative">
      <div
        className={chipClasses}
        onClick={() => {
          disabled ? null : onClick && onClick(!active ? value : null);
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

        {showTooltip && (
          <Tooltip
            align={questionTooltip.align || 'top'}
            position={questionTooltip.position || 'right'}
            onHoverItem={
              <div className="animate-chipFadeIn flex flex-col gap-2 w-96 whitespace-normal bg-white text-neutral700 text-sm shadow-sm rounded-lg p-6">
                <Heading level="h5" weight="bold" color="text-neutral800">
                  {questionTooltip?.title}
                </Heading>
                {questionTooltip?.children}
              </div>
            }
          >
            <div>
              <Icon name="question" color={iconColor} />
            </div>
          </Tooltip>
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
    </div>
  );
};
