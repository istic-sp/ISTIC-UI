import React, { useState, useEffect, useRef, forwardRef } from 'react';
import clsx from 'clsx';
import { Icon, icons } from '../../Icons';
import { Loader } from '../../Loader';

interface Option {
  label: string;
  value: string;
  disabled?: boolean;
  iconName?: keyof typeof icons;
}

interface SelectProps {
  options: Option[];
  onSelect: (option?: { label: string; value: string }) => void;
  label?: string;
  grow?: boolean;
  withAsterisk?: boolean;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
  error?: {
    description?: string;
  };
  rightSection?: React.ReactNode;
  searchable?: boolean;
  clearable?: boolean;
  defaultValue?: string;
  isLoading?: boolean;
  pickerHeight?: string;
}

const Select = forwardRef<HTMLInputElement, SelectProps>(
  (
    {
      label,
      grow = true,
      disabled = false,
      placeholder,
      options = [],
      rightSection,
      withAsterisk = false,
      required = false,
      searchable = false,
      clearable = false,
      onSelect,
      error,
      defaultValue,
      isLoading,
      pickerHeight = '30dvh',
      ...rest
    },
    ref,
  ) => {
    const getDefaultLabel = (value: string | undefined) => {
      const selectedOption = options.find((option) => option.value === value);
      return selectedOption ? selectedOption.label : '';
    };

    const [searchQuery, setSearchQuery] = useState(
      getDefaultLabel(defaultValue),
    );
    const [showOptions, setShowOptions] = useState(false);
    const selectRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);

    useEffect(() => {
      setSearchQuery(getDefaultLabel(defaultValue));
    }, [defaultValue, options]);

    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setShowOptions(false);
      }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(event.target.value);
    };

    const toggleOptions = () => {
      setShowOptions(!showOptions);
    };

    const clearSelect = (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    ) => {
      event.stopPropagation();
      setSearchQuery('');
      if (onSelect) onSelect(undefined);
    };

    const handleOptionClick = (value: Option) => {
      setSearchQuery(value.label);
      if (onSelect) onSelect(value);
      setShowOptions(false);
    };

    const filteredOptions = searchable
      ? options.filter((option) =>
          option.label.toLowerCase().includes(searchQuery.toLowerCase()),
        )
      : options;

    const wrapperClasses = clsx('relative flex flex-col gap-1', {
      'w-full': grow,
    });

    const labelClasses =
      'font-default text-xs leading-text font-medium inline-flex gap-1 justify-start items-center align-middle';

    const errorLabelClasses =
      'font-default text-sm leading-text font-regular text-error inline-flex justify-start items-center align-middle';

    const buttonClasses = clsx(
      'flex w-full p-2 gap-2 rounded-[5px] border border-neutral100 justify-start items-center text-center h-auto box-border disabled:cursor-not-allowed outline-none',
      {
        ['font-default font-medium leading-text text-sm']: true,
        [`text-neutral800 hover:enabled:text-brand400 active:enabled:text-white disabled:text-neutral400`]:
          true,
        [`border border-transparent bg-white hover:enabled:bg-brand0 active:enabled:!bg-brand600 disabled:bg-neutral100`]:
          true,
      },
    );

    const inputWrapperClasses = clsx(
      'border outline-none shadow-none rounded-[5px] inline-flex',
      {
        'font-default font-regular text-neutral800 leading-text placeholder:text-neutral600':
          true,
        [error?.description
          ? 'border-error'
          : 'border-neutral400 focus:border-brand500']: true,
        'bg-neutral100': disabled,
        'bg-white': !disabled,
        'text-sm h-[44px]': true,
      },
    );

    const inputClasses = clsx(
      'w-full outline-none border-transparent shadow-none rounded-[5px] gap-2.5 inline-flex',
      {
        'font-default font-regular text-neutral800 leading-text placeholder:text-neutral600':
          true,
        'bg-neutral100': disabled,
        'bg-white': !disabled,
        'text-sm py-3 pl-3 h-full': true,
      },
    );

    const rightSectionClasses = clsx(
      'flex items-center justify-center h-full pr-3',
    );

    const pickerStyles: React.CSSProperties = {
      maxHeight: pickerHeight,
      overflowY: 'auto' as 'scroll' | 'auto' | 'visible' | 'hidden' | undefined,
      scrollbarWidth: 'none',
    };

    const pickerClasses = clsx(
      'absolute mt-1 flex flex-col w-full top-full z-50',
    );

    const iconProps = { size: 18, color: 'text-brand500' };

    return (
      <div ref={selectRef} className={wrapperClasses}>
        {label && (
          <label className={labelClasses}>
            {label}
            {(required || withAsterisk) && <p className="text-error">*</p>}
          </label>
        )}
        <div className={inputWrapperClasses}>
          <input
            {...rest}
            ref={ref}
            type="text"
            value={searchQuery}
            onChange={handleInputChange}
            placeholder={placeholder}
            disabled={disabled}
            className={inputClasses}
            readOnly={!searchable}
            onClick={toggleOptions}
          />
          <div
            className={rightSectionClasses}
            onClick={() => setShowOptions(!showOptions)}
          >
            {rightSection ? (
              rightSection
            ) : isLoading ? (
              <Loader size="xs" color="border-brand500" width="slim" />
            ) : clearable && searchQuery.length ? (
              <button onClick={(e) => clearSelect(e)}>
                <Icon name={'close'} {...iconProps} />
              </button>
            ) : (
              <Icon name="arrow-down-s" {...iconProps} />
            )}
          </div>
        </div>
        {showOptions && !isLoading && filteredOptions.length > 0 && (
          <div className={pickerClasses}>
            <ul
              className="bg-white border border-neutral400 p-2 rounded-[5px] w-auto list-none"
              style={pickerStyles}
            >
              {filteredOptions.map((option, index) => (
                <li key={option.value + index}>
                  <button
                    className={buttonClasses}
                    disabled={option.disabled}
                    onClick={() => handleOptionClick(option)}
                  >
                    {option.iconName && (
                      <Icon name={option.iconName} color="inherit" />
                    )}
                    <div className="whitespace-nowrap overflow-hidden">
                      {option.label}
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
        {error?.description && (
          <div className={errorLabelClasses}>{error.description}</div>
        )}
      </div>
    );
  },
);

export { Select, SelectProps, Option };
