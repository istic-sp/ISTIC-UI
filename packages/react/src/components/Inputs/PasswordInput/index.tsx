import React, { InputHTMLAttributes, useState } from 'react';
import clsx from 'clsx';

import { RiEyeLine, RiEyeCloseLine } from 'react-icons/ri';

export interface PasswordInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  size?: 'xs' | 'lg';
  grow?: boolean;
  disabled?: boolean;
  required?: boolean;
  width?: string;
  error?: {
    description: string;
  };
}

export const PasswordInput = ({
  label,
  size = 'xs',
  grow = true,
  disabled = false,
  required = false,
  width,
  error,
  ...rest
}: PasswordInputProps): JSX.Element => {
  const [onFocus, setOnFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const inputAndIconWrapperClasses = clsx({
    [!disabled ? 'bg-white' : 'bg-neutral100']: true,
    ['inline-flex border rounded-[5px]']: true,
    [error
      ? 'border-error'
      : onFocus
        ? 'border-brand500'
        : 'border-neutral400 active:!border-neutral400']: true,
  });

  const inputClasses = clsx({
    ['outline-none shadow-none justify-center rounded-[5px] items-center gap-2.5 inline-flex']:
      true,
    ['font-default font-regular text-neutral800 leading-text placeholder:text-neutral600']:
      true,
    ['text-xs pl-3 py-2 h-[36px]']: size === 'xs',
    ['text-sm pl-4 py-3 h-[44px]']: size === 'lg',
    ['w-full']: grow,
    ['input:-webkit-autofill']: {
      '-webkit-text-fill-color': 'currentColor',
      '-webkit-box-shadow': '0 0 0px 1000px transparent inset',
      transition: 'background-color 5000s ease-in-out 0s',
    },
  });

  const wrapperClasses = clsx({
    ['flex flex-col']: true,
    ['w-full']: grow,
  });

  const labelClasses = clsx({
    ['font-default text-xs leading-text font-medium inline-flex gap-1 justify-start items-center align-middle']:
      true,
  });

  const errorLabelClasses = clsx({
    ['font-default text-xs leading-text font-regular text-error inline-flex justify-start items-center align-middle']:
      true,
  });

  const togglePasswordIconClasses = clsx({
    ['flex items-center px-3 focus:outline-none']: true,
  });

  const iconStyle = clsx({
    ['text-xs']: size === 'xs',
    ['text-lg']: size === 'lg',
    ['text-error']: error,
    ['text-neutral600']: disabled,
  });

  return (
    <div className={wrapperClasses}>
      {label && (
        <label className={labelClasses}>
          {label}
          {required && <p className="text-error">*</p>}
        </label>
      )}
      <div className={inputAndIconWrapperClasses}>
        <input
          {...rest}
          type={showPassword ? 'text' : 'password'}
          className={inputClasses}
          onFocus={() => setOnFocus(true)}
          onBlur={() => setOnFocus(false)}
          required={required}
          disabled={disabled}
          style={width ? { width } : {}}
        />
        <button
          type="button"
          disabled={disabled}
          className={togglePasswordIconClasses}
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <RiEyeCloseLine className={iconStyle} />
          ) : (
            <RiEyeLine className={iconStyle} />
          )}
        </button>
      </div>
      {error && (
        <label className={errorLabelClasses}>{error.description}</label>
      )}
    </div>
  );
};
