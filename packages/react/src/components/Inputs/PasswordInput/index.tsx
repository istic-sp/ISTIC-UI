import React, { InputHTMLAttributes, forwardRef, useState } from 'react';
import clsx from 'clsx';

import { RiEyeLine, RiEyeCloseLine } from 'react-icons/ri';

interface PasswordInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  size?: 'xs' | 'lg';
  grow?: boolean;
  disabled?: boolean;
  withAsterisk?: boolean;
  required?: boolean;
  width?: string;
  error?: {
    description?: string;
  };
}

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  (
    {
      label,
      size = 'xs',
      grow = true,
      disabled = false,
      withAsterisk = false,
      required = false,
      width,
      error,
      ...rest
    },
    ref,
  ) => {
    const [onFocus, setOnFocus] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const inputAndIconWrapperClasses = clsx({
      [!disabled ? 'bg-white' : 'bg-neutral-100']: true,
      ['inline-flex border']: true,
      [`rounded-input-${size}`]: true,
      [error?.description
        ? 'border-error'
        : onFocus
          ? 'primary-border'
          : 'border-neutral-400 active:!border-neutral-400']: true,
    });

    const inputClasses = clsx({
      ['outline-none shadow-none justify-center  items-center gap-2.5 inline-flex']:
        true,
      ['font-default font-regular text-neutral-800 leading-text placeholder:text-neutral-600']:
        true,
      [`rounded-input-${size}`]: true,
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
      ['flex flex-col gap-1 ']: true,
      ['w-full']: grow,
    });

    const labelClasses = clsx({
      ['font-default text-xs leading-text font-medium inline-flex gap-1 justify-start items-center align-middle']:
        true,
    });

    const errorLabelClasses = clsx({
      ['font-default leading-text font-regular text-error inline-flex justify-start items-center align-middle']:
        true,
      ['text-xs']: size === 'xs',
      ['text-sm']: size === 'lg',
    });

    const togglePasswordIconClasses = clsx({
      ['flex items-center px-3 focus:outline-none']: true,
    });

    const iconStyle = clsx({
      ['text-xs']: size === 'xs',
      ['text-lg']: size === 'lg',
      ['text-error']: error?.description,
      ['text-neutral-600']: disabled,
    });

    return (
      <div className={wrapperClasses}>
        {label && (
          <label className={labelClasses}>
            {label}
            {(required || withAsterisk) && <p className="text-error">*</p>}
          </label>
        )}
        <div className={inputAndIconWrapperClasses}>
          <input
            {...rest}
            ref={ref}
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
        {error?.description && (
          <label className={errorLabelClasses}>{error.description}</label>
        )}
      </div>
    );
  },
);
PasswordInput.displayName = 'PasswordInput';
export { PasswordInput, PasswordInputProps };
