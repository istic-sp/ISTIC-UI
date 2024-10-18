import React, { type ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';
import { Icon, icons } from '../../Icons';
import { Loader } from '../../Loader';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  variant?: 'filled' | 'outline' | 'subtle' | 'light';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  iconProps?: { iconName: keyof typeof icons; iconPosition: 'right' | 'left' };
  isLoading?: boolean;
  grow?: boolean;
}

const Button = ({
  label,
  variant = 'filled',
  size = 'md',
  grow = false,
  disabled = false,
  isLoading = false,
  iconProps,
  ...rest
}: ButtonProps): JSX.Element => {
  const textClasses = clsx({
    ['font-default font-medium leading-text']: true,

    ['text-button-filled-text-default']: variant === 'filled',
    ['text-button-outline-text-default']: variant === 'outline',
    ['text-button-subtle-text-default']: variant === 'subtle',
    ['text-button-light-text-default']: variant === 'light',

    ['hover:enabled:text-button-filled-text-hover']: variant === 'filled',
    ['hover:enabled:text-button-outline-text-hover']: variant === 'outline',
    ['hover:enabled:text-button-subtle-text-hover']: variant === 'subtle',
    ['hover:enabled:text-button-light-text-hover']: variant === 'light',

    ['active:enabled:text-button-filled-text-active']: variant === 'filled',
    ['active:enabled:text-button-outline-text-active']: variant === 'outline',
    ['active:enabled:text-button-subtle-text-active']: variant === 'subtle',
    ['active:enabled:text-button-light-text-active']: variant === 'light',

    ['disabled:text-button-filled-text-disabled']: variant === 'filled',
    ['disabled:text-button-outline-text-disabled']: variant === 'outline',
    ['disabled:text-button-subtle-text-disabled']: variant === 'subtle',
    ['disabled:text-button-light-text-disabled']: variant === 'light',

    ['text-button-xs']: size === 'xs',
    ['text-button-sm']: size === 'sm',
    ['text-button-md']: size === 'md',
    ['text-button-lg']: size === 'lg',
    ['text-button-xl']: size === 'xl',
  });

  const gapClasses = clsx({
    ['gap-1']: size === 'xs',
    ['gap-2']: size === 'sm' || size === 'md' || size === 'lg' || size === 'xl',
  });

  const buttonClasses = clsx({
    [textClasses]: true,

    ['flex justify-center items-center text-center h-auto']: true,
    ['box-border rounded-[5px]']: true,
    ['disabled:cursor-not-allowed outline-none']: true,
    ['relative']: true,
    ['overflow-hidden']: true,

    ['bg-button-filled-default']: variant === 'filled',
    ['bg-button-subtle-default']: variant === 'subtle',
    ['bg-button-light-default']: variant === 'light',

    ['hover:enabled:bg-button-filled-hover']: variant === 'filled',
    ['hover:enabled:bg-button-subtle-hover']: variant === 'subtle',
    ['hover:enabled:bg-button-light-hover']: variant === 'light',

    ['active:enabled:bg-button-filled-active']: variant === 'filled',
    ['active:enabled:bg-button-subtle-active']: variant === 'subtle',
    ['active:enabled:bg-button-light-active']: variant === 'light',

    ['disabled:bg-button-filled-disabled']: variant === 'filled',
    ['disabled:bg-button-outline-disabled']: variant === 'outline',
    ['disabled:bg-button-subtle-disabled']: variant === 'subtle',
    ['disabled:bg-button-light-disabled']: variant === 'light',

    ['border border-transparent']: variant === 'filled' || variant === 'subtle',
    ['border border-button-outline-default']: variant === 'outline',
    ['hover:enabled:border-button-outline-hover']: variant === 'outline',
    ['active:enabled:border-button-outline-active']: variant === 'outline',
    ['disabled:border-button-outline-disabled']: variant === 'outline',

    ['px-3 py-2']: size === 'xs' || size === 'sm',
    ['px-6 py-4']: size === 'md' || size === 'lg' || size === 'xl',
    [gapClasses]: true,

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
    <button
      {...rest}
      className={buttonClasses}
      disabled={disabled || isLoading}
    >
      {isLoading ? (
        <>
          <div className="animate-fadeInUp flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Loader
              color={
                variant === 'filled'
                  ? 'white'
                  : variant === 'light'
                    ? 'brand-500'
                    : variant === 'outline'
                      ? 'none'
                      : 'brand-500'
              }
              size={size}
            />
          </div>
          <div
            className={`animate-fadeOutUp transition-transform flex items-center justify-center opacity-0 ${gapClasses}`}
          >
            {iconProps && iconProps.iconPosition === 'left' && (
              <Icon name={iconProps.iconName} {...iconValues} />
            )}
            <div className="animate-fadeOutUp transition-transform whitespace-nowrap overflow-hidden">
              {label}
            </div>
            {iconProps && iconProps.iconPosition === 'right' && (
              <Icon name={iconProps.iconName} {...iconValues} />
            )}
          </div>
        </>
      ) : (
        <div
          className={`transition-transform flex items-center justify-center ${gapClasses}`}
        >
          {iconProps && iconProps.iconPosition === 'left' && (
            <Icon name={iconProps.iconName} {...iconValues} />
          )}
          <div className="whitespace-nowrap overflow-hidden">{label}</div>
          {iconProps && iconProps.iconPosition === 'right' && (
            <Icon name={iconProps.iconName} {...iconValues} />
          )}
        </div>
      )}
    </button>
  );
};

Button.displayName = 'Button';
export { Button, ButtonProps };
