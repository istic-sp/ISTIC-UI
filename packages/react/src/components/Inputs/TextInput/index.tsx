import React, { type InputHTMLAttributes } from 'react';
import clsx from 'clsx';

export interface TextInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label: string;
  size?: 'xs' | 'lg';
  grow?: boolean;
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
  error,
  ...rest
}: TextInputProps): JSX.Element => {
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
      />
      {error && (
        <label className={errorLabelClasses}>{error.description}</label>
      )}
    </div>
  );
};
