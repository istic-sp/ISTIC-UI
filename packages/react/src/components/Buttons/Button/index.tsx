import React, { type ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';
import { Icon, icons } from '../../Icons';
import { Loader } from '../../Loader';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  variant?: 'filled' | 'outline' | 'subtle' | 'light';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  iconProps?: { iconName: keyof typeof icons; iconPosition: 'right' | 'left' };
  isLoading?: boolean;
  grow?: boolean;
}

export const Button = ({
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

    [`text-white`]: variant === 'filled',
    [`text-neutral700 active:enabled:text-brand600 disabled:!text-neutral500`]:
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

    [`border border-transparent bg-brand500 hover:enabled:bg-brand400 active:enabled:!bg-brand600 ${!isLoading ? 'disabled:bg-neutral100' : ''}`]:
      variant === 'filled',
    [`border border-neutral600 hover:enabled:border-brand400 ${!isLoading ? 'disabled:border-neutral400' : ''}`]:
      variant === 'outline',
    ['border border-transparent ']: variant === 'subtle',
    [`border border-transparent bg-brand0 hover:enabled:bg-brand200 active:enabled:!bg-brand600 ${!isLoading ? 'disabled:!bg-neutral100' : ''}`]:
      variant === 'light',

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
    <button {...rest} className={buttonClasses} disabled={disabled || isLoading}>
      {isLoading ? 
      <>
        <div className='animate-fadeInUp flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <Loader color={variant === 'filled' ? 'white' : variant === 'light' ? 'brand500' : variant === 'outline' ? 'none' : 'brand500'} size={size}/>
        </div>
        <div className={`animate-fadeOutUp transition-transform flex items-center justify-center opacity-0 ${gapClasses}`}>
          {iconProps && iconProps.iconPosition === 'left' && (
            <Icon name={iconProps.iconName} {...iconValues} />
          )}
          <div className="animate-fadeOutUp transition-transform whitespace-nowrap overflow-hidden">{label}</div>
          {iconProps && iconProps.iconPosition === 'right' && (
            <Icon name={iconProps.iconName} {...iconValues} />
          )}
        </div>
      </>
       : 
      (<div className={`animate-fadeInDown transition-transform flex items-center justify-center ${gapClasses}`}>
        {iconProps && iconProps.iconPosition === 'left' && (
          <Icon name={iconProps.iconName} {...iconValues} />
        )}
        <div className="whitespace-nowrap overflow-hidden">{label}</div>
        {iconProps && iconProps.iconPosition === 'right' && (
          <Icon name={iconProps.iconName} {...iconValues} />
          
        )}
      </div>)
    }
    </button>
  );
};
Button.displayName = 'Button';
