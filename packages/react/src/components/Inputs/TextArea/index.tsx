import React, { TextareaHTMLAttributes, forwardRef } from 'react';
import clsx from 'clsx';

interface TextAreaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  label?: string;
  grow?: boolean;
  width?: string;
  withAsterisk?: boolean;
  error?: {
    description?: string;
  };
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      label,
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
    const inputClasses = clsx({
      ['border outline-none shadow-none rounded-[5px] justify-center items-center gap-2.5 inline-flex p-3']:
        true,
      ['font-default font-regular text-sm text-neutral-800 leading-text placeholder:text-neutral-600']:
        true,
      [error?.description
        ? 'border-error'
        : 'border-neutral-400 focus:primary-border']: true,
      [!disabled ? 'bg-white' : 'bg-neutral-100']: true,
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
      ['font-default text-xs leading-text font-regular text-error inline-flex justify-start items-center align-middle']:
        true,
    });

    return (
      <div className={wrapperClasses}>
        {label && (
          <label className={labelClasses}>
            {label}
            {(required || withAsterisk) && <p className="text-error">*</p>}
          </label>
        )}
        <textarea
          {...rest}
          ref={ref}
          className={inputClasses}
          required={required}
          disabled={disabled}
          style={width ? { width } : {}}
        />
        {error?.description && (
          <label className={errorLabelClasses}>{error.description}</label>
        )}
      </div>
    );
  },
);
TextArea.displayName = 'TextArea';
export { TextArea, TextAreaProps };
