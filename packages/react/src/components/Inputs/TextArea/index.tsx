import React, { TextareaHTMLAttributes } from 'react';
import clsx from 'clsx';

export interface TextAreaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  label: string;
  size?: 'xs' | 'lg';
  grow?: boolean;
  error?: {
    description: string;
  };
}

export const TextArea = ({
  label,
  grow = true,
  disabled = false,
  required = false,
  error,
  ...rest
}: TextAreaProps): JSX.Element => {
  const inputClasses = clsx({
    ['border outline-none shadow-none rounded-[5px] justify-center items-center gap-2.5 inline-flex p-3']:
      true,
    ['font-default font-regular text-sm text-neutral800 leading-text placeholder:text-neutral600']:
      true,
    [error ? 'border-error' : 'border-neutral400 focus:border-brand500']: true,
    [!disabled ? 'bg-white' : 'bg-neutral100']: true,
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
    ['font-default leading-text font-medium inline-flex gap-1 justify-start items-center align-middle text-sm']:
      true,
  });
  const errorLabelClasses = clsx({
    ['font-default leading-text font-regular text-error inline-flex justify-start items-center align-middle']:
      true,
  });

  return (
    <div className={wrapperClasses}>
      {label && (
        <label className={labelClasses}>
          {label}
          {required && <p className="text-error">*</p>}
        </label>
      )}
      <textarea
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
