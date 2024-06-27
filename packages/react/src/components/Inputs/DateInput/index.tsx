import React, { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';
import { ActionIcon } from '../../Buttons/ActionIcon';
import { Text } from '../../Typography/Text';
import { Icon } from '../../Icons';

interface StyleProps {
  main?: React.CSSProperties;
  input?: React.CSSProperties;
  datePicker?: React.CSSProperties;
  label?: React.CSSProperties;
  errorLabel?: React.CSSProperties;
}

export interface DateInputProps {
  label?: string;
  size?: 'xs' | 'lg';
  grow?: boolean;
  width?: string;
  error?: {
    description?: string;
  };
  selectedDate?: string;
  value?: string;
  defaultValue?: string;
  onDateChange?: (date: string) => void;
  required?: boolean;
  disabled?: boolean;
  style?: StyleProps;
}

export const DateInput: React.FC<DateInputProps> = ({
  label,
  size = 'xs',
  grow = true,
  error,
  value,
  defaultValue,
  onDateChange,
  required = false,
  disabled = false,
  style,
}) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const dateInputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dateInputRef.current &&
        !dateInputRef.current.contains(event.target as Node)
      ) {
        setShowDatePicker(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const formatDate = (date: Date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const handleChange = (date: Date) => {
    const formattedDate = formatDate(date);
    onDateChange?.(formattedDate);
    setShowDatePicker(false);
  };

  const handleDateClick = (date: number, isCurrentMonth: boolean) => {
    if (isCurrentMonth) {
      const newDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        date,
      );
      handleChange(newDate);
    }
  };

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  const inputClasses = clsx(
    'border outline-none shadow-none rounded-[5px] flex justify-between items-center gap-2.5 px-3 cursor-pointer',
    {
      'font-sans font-normal text-neutral-800 leading-5 placeholder-neutral-600':
        true,
      'border-error': !!error?.description,
      'border-neutral-400 focus:border-brand-500': !error?.description,
      'bg-white': !disabled,
      'bg-neutral-100': disabled,
      'text-xs py-2 h-[36px]': size === 'xs',
      'text-sm py-3 h-[44px]': size === 'lg',
      'w-full': grow,
    },
  );

  const wrapperClasses = clsx('flex flex-col gap-1', {
    'w-full': grow,
  });

  const labelClasses = clsx(
    'font-sans text-xs leading-5 font-medium flex gap-1 justify-start items-center',
  );

  const errorLabelClasses = clsx(
    'font-sans leading-5 font-normal text-error flex justify-start items-center',
    {
      'text-xs': size === 'xs',
      'text-sm': size === 'lg',
    },
  );

  const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];

  const generateCalendar = () => {
    const startOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1,
    );
    const endOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0,
    );

    const daysInMonth: { date: number; isCurrentMonth: boolean }[] = [];
    const prevMonthDays: { date: number; isCurrentMonth: boolean }[] = [];
    const nextMonthDays: { date: number; isCurrentMonth: boolean }[] = [];

    const prevMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 1,
      1,
    );
    const prevMonthEnd = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0,
    );
    for (
      let i = prevMonthEnd.getDate() - startOfMonth.getDay() + 1;
      i <= prevMonthEnd.getDate();
      i++
    ) {
      prevMonthDays.push({ date: i, isCurrentMonth: false });
    }

    for (let i = 1; i <= endOfMonth.getDate(); i++) {
      daysInMonth.push({ date: i, isCurrentMonth: true });
    }

    const nextMonthStartDay = endOfMonth.getDay();
    for (let i = 1; i < 7 - nextMonthStartDay; i++) {
      nextMonthDays.push({ date: i, isCurrentMonth: false });
    }

    return [...prevMonthDays, ...daysInMonth, ...nextMonthDays];
  };

  const calendarDays = generateCalendar();

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1),
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1),
    );
  };

  const formatHeaderDate = (date: Date) => {
    return date
      .toLocaleDateString('pt-BR', { year: 'numeric', month: 'long' })
      .replace(/^\w/, (c) => c.toUpperCase());
  };

  const isSelectedDate = (date: number) => {
    const selected = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      date,
    );
    return formatDate(selected) === value;
  };

  return (
    <div className={wrapperClasses} style={style?.main}>
      {label && (
        <label className={labelClasses} style={style?.label}>
          {label}
          {required && <span className="text-error">*</span>}
        </label>
      )}
      <div className="relative">
        <div
          className={inputClasses}
          onClick={toggleDatePicker}
          style={style?.input}
        >
          {value || defaultValue || 'Selecionar data'}
          <Icon name="calendar" color="text-brand500" />
        </div>
        {showDatePicker && (
          <div
            ref={dateInputRef}
            className="bg-white border max-w-64 border-neutral-400 rounded-[5px] shadow-lg mt-1 p-4"
            style={style?.datePicker}
          >
            <div className="flex justify-between items-center mb-2">
              <ActionIcon
                onClick={handlePrevMonth}
                variant="subtle"
                iconName="arrow-left-s"
              />
              <Text size="sm">{formatHeaderDate(currentDate)}</Text>
              <ActionIcon
                onClick={handleNextMonth}
                variant="subtle"
                iconName="arrow-right-s"
              />
            </div>
            <div className="flex justify-around">
              {daysOfWeek.map((day, index) => (
                <Text key={index} size="sm" color="text-neutral500">
                  {day}
                </Text>
              ))}
            </div>
            <div className="grid grid-cols-7">
              {calendarDays.map(({ date, isCurrentMonth }, index) => (
                <div
                  key={index}
                  onClick={() => handleDateClick(date, isCurrentMonth)}
                  className={`justify-center flex items-center font-sans text-sm p-2 cursor-pointer ${
                    isCurrentMonth
                      ? 'text-neutral-800 hover:bg-blue-500 h-8 w-8 hover:text-white rounded-sm'
                      : 'text-neutral-400'
                  } ${isCurrentMonth && isSelectedDate(date) ? 'bg-blue-500 text-white' : ''}`}
                >
                  {date}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      {error?.description && (
        <span className={errorLabelClasses} style={style?.errorLabel}>
          {error.description}
        </span>
      )}
    </div>
  );
};

DateInput.displayName = 'DateInput';
