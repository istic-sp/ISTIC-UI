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

    [`text-white`]: variant === 'filled',
    [`text-neutral-700 active:enabled:text-brand-600 disabled:!text-neutral-500`]:
      variant === 'outline',
    [`text-brand-500 hover:enabled:text-brand-400 active:enabled:text-brand-600`]:
      variant === 'subtle',
    [`text-brand-500 active:enabled:text-white`]: variant === 'light',
    ['!text-neutral-700']: disabled,

    ['text-[18px]']: size === 'xs',
    ['text-[24px]']: size === 'lg',
  });

  const buttonClasses = clsx({
    [textClasses]: true,

    ['flex justify-center items-center text-center']: true,
    ['box-border rounded-[5px]']: true,
    ['disabled:cursor-not-allowed outline-none']: true,

    [`border border-transparent  bg-brand-500 hover:enabled:bg-brand-400 active:enabled:!bg-brand-600 disabled:bg-neutral-100`]:
      variant === 'filled',
    ['border border-neutral-600 hover:enabled:border-brand-400 disabled:border-neutral-400 disabled:bg-neutral-100']:
      variant === 'outline',
    ['border border-transparent ']: variant === 'subtle',
    [`border border-transparent bg-brand-50 hover:enabled:bg-brand-200 active:enabled:!bg-brand-600  disabled:!bg-neutral-100`]:
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
