'use client';
import React, { useState } from 'react';
import clsx from 'clsx';

import { RiEyeLine, RiEyeCloseLine } from 'react-icons/ri';

export interface PasswordInputProps {
  label: string;
  size?: 'xs' | 'lg';
  grow?: boolean;
  disabled?: boolean;
  required?: boolean;
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
  error,
  ...rest
}: PasswordInputProps): JSX.Element => {
  const [showPassword, setShowPassword] = useState(false);

  const inputClasses = clsx({
    ['border outline-none rounded-[5px] justify-center items-center gap-2.5 inline-flex']:
      true,
    ['font-default font-regular text-neutral800 leading-text placeholder:text-neutral600']:
      true,
    [error
      ? 'border-error'
      : 'border-neutral400 active:!border-neutral400 focus:border-brand500']:
      true,
    [!disabled ? 'bg-white' : 'bg-neutral100']: true,
    ['text-xs px-3 py-2']: size === 'xs',
    ['text-sm px-4 py-3']: size === 'lg',
    ['w-full']: grow,
  });

  const wrapperClasses = clsx({
    ['flex flex-col']: true,
    ['w-full']: grow,
  });

  const labelClasses = clsx({
    ['font-default leading-text font-bold inline-flex gap-1 justify-start items-center align-middle']:
      true,
    ['text-xs']: size === 'xs',
    ['text-sm']: size === 'lg',
  });

  const errorLabelClasses = clsx({
    ['font-default leading-text font-regular text-error inline-flex justify-start items-center align-middle']:
      true,
    ['text-xs']: size === 'xs',
    ['text-sm']: size === 'lg',
  });
  const togglePasswordIconClasses = clsx({
    ['absolute inset-y-0 right-0 flex items-center pl-2 pr-3 m-1 focus:outline-none']:
      true,
    [!disabled ? 'bg-white' : 'bg-neutral100']: true,
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
      <div className="relative">
        <input
          {...rest}
          type={showPassword ? 'text' : 'password'}
          className={inputClasses}
          required={required}
          disabled={disabled}
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
