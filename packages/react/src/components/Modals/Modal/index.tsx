import React, { ReactNode } from 'react';
import clsx from 'clsx'; // Import clsx
import { Text } from '../../Typography/Text';
import { Icon } from '../../Icons';

interface ModalProps {
  children: ReactNode;
  title: string;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  overlayClassName?: string;
  contentClassName?: string;
  ariaLabel?: string;
  contentWidth?: string | number;
}

const Modal: React.FC<ModalProps> = ({
  children,
  title,
  isOpen,
  onClose,
  className,
  overlayClassName,
  contentClassName,
  ariaLabel,
  contentWidth,
}) => {
  const colorCloseTitle = 'text-neutral-800';

  const modalClasses = clsx(
    'fixed z-50 inset-0 overflow-hidden',
    className,
    isOpen ? '' : 'hidden',
  );

  const overlayClasses = clsx(
    'flex items-center justify-center h-[100vh] w-[100vw]',
    overlayClassName,
  );

  const contentClasses = clsx(
    'relative bg-white rounded-lg p-4',
    contentClassName,
  );

  if (!isOpen) return null;

  return (
    <div
      className={modalClasses}
      role="dialog"
      aria-modal="true"
      aria-labelledby={ariaLabel}
    >
      <div className={overlayClasses}>
        <div className="fixed inset-0 bg-black opacity-40" onClick={onClose} />
        <div className={contentClasses} style={{ width: contentWidth }}>
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

Modal.displayName = 'Modal';
export { Modal, ModalProps };
