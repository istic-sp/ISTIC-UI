import React, { type ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';
import { Icon, icons } from '../../Icons';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  variant?: 'filled' | 'outline' | 'subtle' | 'light';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  iconProps?: { iconName: keyof typeof icons; iconPosition: 'right' | 'left' };
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
    [`text-neutral700 active:enabled:text-brand600 disabled:!text-neutral600`]:
      variant === 'outline',
    [`text-brand500 hover:enabled:text-brand400 active:enabled:text-brand600`]:
      variant === 'subtle',
    [`text-brand500 active:enabled:text-white`]: variant === 'light',
    ['!text-neutral700']: disabled,

    ['text-button-xs']: size === 'xs',
    ['text-button-sm']: size === 'sm',
    ['text-button-md']: size === 'md',
    ['text-button-lg']: size === 'lg',
    ['text-button-xl']: size === 'xl',
  });

  const buttonClasses = clsx({
    [textClasses]: true,

    ['flex justify-center items-center text-center h-auto']: true,
    ['box-border rounded-[5px]']: true,
    ['disabled:cursor-not-allowed outline-none']: true,

    [`border border-transparent bg-brand500 hover:enabled:bg-brand400 active:enabled:!bg-brand600 disabled:bg-neutral100`]:
      variant === 'filled',
    ['border border-neutral400 hover:enabled:border-brand400  disabled:border-neutral600 ']:
      variant === 'outline',
    ['border border-transparent ']: variant === 'subtle',
    [`border border-transparent bg-brand0 hover:enabled:bg-brand200 active:enabled:!bg-brand600 disabled:!bg-neutral100`]:
      variant === 'light',

    ['px-3 py-2']: size === 'xs' || size === 'sm',
    ['px-6 py-4']: size === 'md' || size === 'lg' || size === 'xl',
    ['gap-1']: size === 'xs',
    ['gap-2']: size === 'sm' || size === 'md' || size === 'lg' || size === 'xl',

    ['w-full']: grow,
  });
  const iconValues = {
    color: 'inherit',
    size:
      size === 'xs'
        ? 18
        : size === 'sm' || size === 'md'
          ? 20
          : size === 'lg'
            ? 24
            : 32,
  };

  return (
    <button {...rest} className={buttonClasses} disabled={disabled}>
      {iconProps && iconProps.iconPosition === 'left' && (
        <Icon name={iconProps.iconName} {...iconValues} />
      )}
      <div className="whitespace-nowrap overflow-hidden">{label}</div>
      {iconProps && iconProps.iconPosition === 'right' && (
        <Icon name={iconProps.iconName} {...iconValues} />
      )}
    </button>
  );
};
