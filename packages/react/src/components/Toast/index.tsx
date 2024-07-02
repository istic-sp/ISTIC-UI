import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { Icon } from '../Icons';
import { Text } from '../Typography/Text';

interface ToastProps {
  title?: string;
  message?: string;
  type?: 'success' | 'error' | 'info' | 'warning';
  durationInMs?: number;
  position?:
    | 'top-left'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-right'
    | 'top-center'
    | 'bottom-center';
  onClose?: () => void;
  index?: number;
}

const Toast: React.FC<ToastProps> = ({
  title,
  message,
  type = 'info',
  durationInMs = 3000,
  position = 'top-right',
  onClose,
  index = 0,
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose?.();
    }, durationInMs);

    return () => clearTimeout(timer);
  }, [durationInMs, onClose]);

  const positionStyles = {
    'top-left': { top: `${2 + index * 6}rem`, left: '1rem' },
    'top-right': { top: `${2 + index * 6}rem`, right: '1rem' },
    'bottom-left': { bottom: `${2 + index * 6}rem`, left: '1rem' },
    'bottom-right': { bottom: `${2 + index * 6}rem`, right: '1rem' },
    'top-center': {
      top: `${4 + index * 6}rem`,
      left: '50%',
      transform: 'translateX(-50%)',
    },
    'bottom-center': {
      bottom: `${4 + index * 6}rem`,
      left: '50%',
      transform: 'translateX(-50%)',
    },
  };

  const toastClasses = clsx(
    'fixed rounded-[5px] shadow-sm flex flex-col bg-white',
    {
      'text-success': type === 'success',
      'text-error': type === 'error',
      'text-info': type === 'info',
      'text-warning': type === 'warning',
      hidden: !visible,
      'flex transition-display duration-300': visible,
    },
  );

  const progressBarWrapperClasses = clsx(
    'relative rounded-b-[5px] h-1 w-full overflow-hidden',
  );

  const progressBarClasses = clsx(
    'absolute top-0 left-0 h-1 animate-progressBar',
    {
      'bg-success': type === 'success',
      'bg-error': type === 'error',
      'bg-info': type === 'info',
      'bg-warning': type === 'warning',
    },
  );

  return (
    <div className={toastClasses} style={positionStyles[position]}>
      <div className="flex flex-row items-center p-4 gap-8">
        <div className="flex flex-row items-center gap-2">
          <Icon
            size={24}
            name={
              type === 'success'
                ? 'check-circle'
                : type === 'error'
                  ? 'close-circle'
                  : type === 'info'
                    ? 'notification-3'
                    : 'question'
            }
            color="currentColor"
          />
          <div>
            <Text size="sm" color="text-neutral700">
              {title}
            </Text>
            <Text size="xs" color="text-neutral600">
              {message}
            </Text>
          </div>
        </div>
        {onClose && (
          <button
            onClick={() => {
              setVisible(false);
              onClose?.();
            }}
            className="ml-auto"
          >
            <Icon size={20} name="close" color="text-neutral700" />
          </button>
        )}
      </div>
      <div className={progressBarWrapperClasses} style={{ width: '100%' }}>
        <div
          className={progressBarClasses}
          style={{ animationDuration: `${durationInMs}ms` }}
        />
      </div>
    </div>
  );
};

export { Toast, ToastProps };
