import React, { type ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';
import { Icon, icons } from '../../Icons';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: 'filled' | 'outline' | 'subtle' | 'light';
  size?: 'xs' | 'lg';
  iconName: keyof typeof icons;
}

export const ActionIcon = ({
  variant = 'filled',
  size = 'xs',
  disabled = false,
  iconName,
  ...rest
}: ButtonProps): JSX.Element => {
  const textClasses = clsx({
    ['font-default font-medium leading-text']: true,

    [`text-white`]: variant === 'filled',
    [`text-neutral700 active:enabled:text-brand600 disabled:!text-neutral600`]:
      variant === 'outline',
    [`text-brand500 hover:enabled:text-brand400 active:enabled:text-brand600`]:
      variant === 'subtle',
    [`text-brand500 active:enabled:text-white`]: variant === 'light',
    ['!text-neutral700']: disabled,

    ['text-[18px]']: size === 'xs',
    ['text-[24px]']: size === 'lg',
  });

  const buttonClasses = clsx({
    [textClasses]: true,

    ['flex justify-center items-center text-center']: true,
    ['box-border rounded-[5px]']: true,
    ['disabled:cursor-not-allowed outline-none']: true,

    [`bg-brand500 hover:enabled:bg-brand400 active:enabled:!bg-brand600 disabled:bg-neutral100`]:
      variant === 'filled',
    ['border border-neutral400 hover:enabled:border-brand400  disabled:border-neutral600 ']:
      variant === 'outline',
    [`bg-brand0 hover:enabled:bg-brand200 active:enabled:!bg-brand600  disabled:!bg-neutral100`]:
      variant === 'light',

    ['p-3 gap-1']: size === 'xs',
    ['p-6 gap-2']: size === 'lg',
  });

  return (
    <button {...rest} className={buttonClasses} disabled={disabled}>
      <Icon name={iconName} color="inherit" size={size === 'xs' ? 18 : 24} />
    </button>
  );
};