import React, { type ButtonHTMLAttributes, type ReactNode } from 'react';
import clsx from 'clsx';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: 'filled' | 'outline' | 'subtle' | 'light';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  iconProps?: { icon: ReactNode; iconPosition: 'right' | 'left' };
  grow?: boolean;
}

export const Button = ({
  label,
  variant = 'filled',
  size = 'md',
  grow = false,
  disabled = false,
  iconProps,
  ...rest
}: ButtonProps): JSX.Element => {
  const textClasses = clsx({
    ['font-default font-medium leading-text']: true,

    [`text-white`]: variant === 'filled',
    [`text-neutral700 active:text-brand600`]: variant === 'outline',
    [`text-brand500 hover:text-brand400 active:text-brand600`]:
      variant === 'subtle',
    [`text-brand500 active:text-white`]: variant === 'light',
    ['!text-neutral700']: disabled,

    ['text-button-xs']: size === 'xs',
    ['text-button-sm']: size === 'sm',
    ['text-button-md']: size === 'md',
    ['text-button-lg']: size === 'lg',
    ['text-button-xl']: size === 'xl',
  });

  const buttonClasses = clsx({
    [textClasses]: true,

    ['flex justify-center items-center text-center']: true,
    ['box-border rounded-[5px]']: true,
    ['disabled:cursor-not-allowed outline-none']: true,

    [`bg-brand500 hover:enabled:bg-brand400 active:enabled:!bg-brand600 disabled:bg-neutral100`]:
      variant === 'filled',
    ['bg-neutral400 border border-neutral400 hover:enabled:border-brand400  disabled:border-neutral600 ']:
      variant === 'outline',
    [`bg-brand0 hover:bg-brand200 active:!bg-brand600`]: variant === 'light',

    ['px-3 py-2 gap-1']: size === 'xs' || size === 'sm',
    ['px-6 py-4 gap-2']: size === 'md' || size === 'lg' || size === 'xl',

    ['w-full']: grow,
  });

  return (
    <button {...rest} className={buttonClasses} disabled={disabled}>
      {iconProps && iconProps.iconPosition === 'left' && iconProps.icon}
      <div>{label}</div>
      {iconProps && iconProps.iconPosition === 'right' && iconProps.icon}
    </button>
  );
};
