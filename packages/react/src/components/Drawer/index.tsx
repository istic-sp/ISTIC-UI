import React, { ReactNode } from 'react';
import clsx from 'clsx';
import { Text } from '../Typography/Text';
import { Icon } from '../Icons';

export interface DrawerProps {
  children: ReactNode;
  title: string;
  isOpen: boolean;
  onClose: () => void;
  position?: 'right' | 'left';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  overlayClassName?: string;
  contentClassName?: string;
  ariaLabel?: string;
}

const Drawer: React.FC<DrawerProps> = ({
  children,
  title,
  isOpen,
  onClose,
  position = 'right',
  size = 'md',
  className,
  overlayClassName,
  contentClassName,
  ariaLabel,
}) => {
  const sizes = {
    sm: 'w-64 h-full',
    md: 'w-96 h-full',
    lg: 'w-1/2 h-full',
    xl: 'w-2/3 h-full',
  };

  const colorCloseTitle = 'text-neutral800';

  const drawerClasses = clsx(
    'fixed z-50 inset-0 overflow-hidden',
    className,
    isOpen ? '' : 'hidden',
  );

  const overlayClasses = clsx(
    'flex items-center h-[100vh] w-[100vw]',
    position === 'left' ? 'justify-start' : 'justify-end',
    overlayClassName,
  );

  const contentClasses = clsx(
    'relative bg-white p-4',
    sizes[size],
    position === 'right'
      ? 'rounded-l-lg animate-fadeInRight'
      : 'rounded-r-lg animate-fadeInLeft',
    contentClassName,
  );

  return (
    <div className={drawerClasses} role="dialog" aria-labelledby={ariaLabel}>
      <div className={overlayClasses}>
        <div
          className="fixed inset-0 bg-black opacity-40 animate-fadeIn"
          onClick={onClose}
        />
        <div className={contentClasses}>
          <div className="flex items-center flex-row w-full justify-between pb-2">
            <Text size="lg" weight="medium" color={colorCloseTitle}>
              {title}
            </Text>
            <button onClick={onClose}>
              <Icon name={'close'} color={colorCloseTitle} />
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export { Drawer };
