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
  const textClasses = clsx({
    ['font-default font-medium leading-text']: true,
    ['text-button-filled-text-default hover:enabled:text-button-filled-text-hover active:enabled:text-button-filled-text-active']:
      variant === 'filled',
    ['text-button-outline-text-default hover:enabled:text-button-outline-text-hover active:enabled:text-button-outline-text-active']:
      variant === 'outline',
    ['text-button-subtle-text-default hover:enabled:text-button-subtle-text-hover active:enabled:text-button-subtle-text-active']:
      variant === 'subtle',
    ['text-button-light-text-default hover:enabled:text-button-light-text-hover active:enabled:text-button-light-text-active']:
      variant === 'light',
    ['!text-neutral-700']: disabled,

    ['text-[18px]']: size === 'xs',
    ['text-[24px]']: size === 'lg',
  });

  const buttonClasses = clsx({
    [textClasses]: true,

    ['flex justify-center items-center text-center']: true,
    ['box-border rounded-[5px]']: true,
    ['disabled:cursor-not-allowed outline-none']: true,

    ['bg-button-filled-default hover:enabled:bg-button-filled-hover active:enabled:bg-button-filled-active disabled:bg-button-filled-disabled']:
      variant === 'filled',
    ['border border-button-outline-default hover:enabled:border-button-outline-hover disabled:border-button-outline-disabled']:
      variant === 'outline',
    ['bg-button-subtle-default hover:enabled:bg-button-subtle-hover active:enabled:bg-button-subtle-active disabled:bg-button-subtle-disabled']:
      variant === 'subtle',
    ['bg-button-light-default hover:enabled:bg-button-light-hover active:enabled:bg-button-light-active disabled:bg-button-light-disabled']:
      variant === 'light',

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
