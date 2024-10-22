import React, { type ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';
import { Icon, icons } from '../../Icons';

interface ActionIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'filled' | 'outline' | 'subtle' | 'light';
  size?: 'xs' | 'lg';
  iconName: keyof typeof icons;
}

const ActionIcon = ({
  variant = 'filled',
  size = 'xs',
  disabled = false,
  iconName,
  ...rest
}: ActionIconProps): JSX.Element => {
  const buttonClasses = clsx({
    ['font-default font-medium leading-text']: true,

    ['flex justify-center items-center text-center']: true,
    ['box-border rounded-[5px]']: true,
    ['disabled:cursor-not-allowed outline-none']: true,

    [`btn-${variant}`]: true,
    [`btn-${size}`]: true,

    ['!text-neutral-700']: disabled,

    ['border border-transparent']: variant === 'filled' || variant === 'subtle',
    ['border']: variant === 'outline',

    ['text-[18px]']: size === 'xs',
    ['text-[24px]']: size === 'lg',
    ['p-3 gap-1']: size === 'xs',
    ['p-6 gap-2']: size === 'lg',
  });

  return (
    <button {...rest} className={buttonClasses} disabled={disabled}>
      <Icon
        name={iconName}
        color={rest.color || 'inherit'}
        size={size === 'xs' ? 18 : 24}
      />
    </button>
  );
};

ActionIcon.displayName = 'ActionIcon';

export { ActionIcon, ActionIconProps };
