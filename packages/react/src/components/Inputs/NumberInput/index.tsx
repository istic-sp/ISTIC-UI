import React, {
  forwardRef,
  useState,
  useEffect,
  ChangeEvent,
  InputHTMLAttributes,
} from 'react';
import clsx from 'clsx';

interface NumberInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> {
  label?: string;
  size?: 'xs' | 'lg';
  grow?: boolean;
  width?: string;
  withAsterisk?: boolean;
  error?: {
    description?: string;
  };
  value?: number;
  onChange: (value?: number) => void;
  decimalSeparator?: '.' | ',';
  maxValue?: number;
  isInteger?: boolean;
}

const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
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
      value,
      onChange,
      decimalSeparator = '.',
      maxValue,
      isInteger = false,
      ...rest
    },
    ref,
  ) => {
    const [inputValue, setInputValue] = useState<string>(
      value !== undefined
        ? value.toString().replace('.', decimalSeparator)
        : '',
    );

    useEffect(() => {
      if (value !== undefined) {
        const limitedValue =
          maxValue !== undefined ? Math.min(value, maxValue) : value;
        setInputValue(limitedValue.toString().replace('.', decimalSeparator));
      } else {
        setInputValue('');
      }
    }, [value, decimalSeparator, maxValue]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const rawValue = event.target.value;

      if (rawValue === '') {
        setInputValue('');
        onChange(undefined);
        return;
      }

      const regex = isInteger
        ? /^\d*$/
        : new RegExp(`^\\d*(\\${decimalSeparator}\\d*)?$`);

      if (regex.test(rawValue)) {
        setInputValue(rawValue);

        const normalizedValue = isInteger
          ? parseInt(rawValue)
          : parseFloat(rawValue.replace(decimalSeparator, '.'));

        if (!isNaN(normalizedValue)) {
          const boundedValue =
            maxValue !== undefined
              ? Math.min(normalizedValue, maxValue)
              : normalizedValue;
          if (boundedValue !== normalizedValue) {
            setInputValue(
              boundedValue.toString().replace('.', decimalSeparator),
            );
          }
          onChange(boundedValue);
        } else {
          onChange(undefined);
        }
      }
    };

    const inputClasses = clsx({
      ['border outline-none shadow-none justify-center items-center gap-2.5 inline-flex']:
        true,
      ['font-default font-regular text-neutral-800 leading-text placeholder:text-neutral-600']:
        true,
      [`rounded-input-${size}`]: true,
      [error?.description
        ? 'border-error'
        : 'border-neutral-400 focus:primary-border']: true,
      [!disabled ? 'bg-white' : 'bg-neutral-100']: true,
      ['text-xs px-3 py-2 h-[36px]']: size === 'xs',
      ['text-sm px-4 py-3 h-[44px]']: size === 'lg',
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

    return (
      <div className={wrapperClasses}>
        {label && (
          <label className={labelClasses}>
            {label}
            {(required || withAsterisk) && <p className="text-error">*</p>}
          </label>
        )}
        <input
          {...rest}
          ref={ref}
          type="text"
          value={inputValue}
          onChange={handleChange}
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

NumberInput.displayName = 'NumberInput';

export { NumberInput, NumberInputProps };
