import React, { type InputHTMLAttributes } from 'react';
import clsx from 'clsx';

export interface TextInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  size?: 'xs' | 'lg';
  grow?: boolean;
  width?: string;
  error?: {
    description: string;
  };
}

export const TextInput = ({
  label,
  size = 'xs',
  grow = true,
  disabled = false,
  required = false,
  width,
  error,
  ...rest
}: TextInputProps): JSX.Element => {
  const inputClasses = clsx({
    ['border outline-none shadow-none rounded-[5px] justify-center items-center gap-2.5 inline-flex']:
      true,
    ['font-default font-regular text-neutral800 leading-text placeholder:text-neutral600']:
      true,
    [error ? 'border-error' : 'border-neutral400 focus:border-brand500']: true,
    [!disabled ? 'bg-white' : 'bg-neutral100']: true,
    ['text-xs px-3 py-2 h-[36px]']: size === 'xs',
    ['text-sm px-4 py-3 h-[44px]']: size === 'lg',
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
    ['font-default leading-text font-medium inline-flex gap-1 justify-start items-center align-middle']:
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

  return (
    <div className={wrapperClasses}>
      {label && (
        <label className={labelClasses}>
          {label}
          {required && <p className="text-error">*</p>}
        </label>
      )}
      <input
        {...rest}
        className={inputClasses}
        required={required}
        disabled={disabled}
        style={width ? { width } : {}}
      />
      {error && (
        <label className={errorLabelClasses}>{error.description}</label>
      )}
    </div>
  );
};
