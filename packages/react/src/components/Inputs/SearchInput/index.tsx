import React, { InputHTMLAttributes, useState } from 'react';
import clsx from 'clsx';
import { Icon } from '../../Icons';

export interface SearchInputProps
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

export const SearchInput = ({
  label,
  size = 'xs',
  grow = true,
  disabled = false,
  required = false,
  width,
  error,
  ...rest
}: SearchInputProps): JSX.Element => {
  const [onFocus, setOnFocus] = useState(false);

  const inputAndIconWrapperClasses = clsx({
    [!disabled ? 'bg-white' : 'bg-neutral100']: true,
    ['font-default font-regular leading-text placeholder:text-neutral600']:
      true,
    ['inline-flex border rounded-[5px]']: true,
    [error
      ? 'border-error'
      : onFocus
        ? 'border-brand500'
        : 'border-neutral400 active:!border-neutral400']: true,
  });

  const inputClasses = clsx({
    ['outline-none shadow-none justify-center rounded-[5px] text-sm disabled:text-neutral600 items-center gap-2.5 inline-flex']:
      true,

    ['pl-3 py-2 h-[36px]']: size === 'xs',
    ['pl-4 py-3 h-[44px]']: size === 'lg',
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

  const iconClasses = clsx({
    ['flex items-center px-3 focus:outline-none']: true,
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
          type={'text'}
          className={inputClasses}
          onFocus={() => setOnFocus(true)}
          onBlur={() => setOnFocus(false)}
          required={required}
          disabled={disabled}
          style={width ? { width } : {}}
        />
        <div className={iconClasses}>
          <Icon
            name="search"
            size={18}
            color={!disabled ? 'inherit' : 'text-neutral600'}
          />
        </div>
      </div>
      {error && (
        <label className={errorLabelClasses}>{error.description}</label>
      )}
    </div>
  );
};
