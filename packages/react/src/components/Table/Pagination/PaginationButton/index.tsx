import clsx from 'clsx';
import React from 'react';
import { Icon, icons } from '../../../Icons';

interface PaginationButtonProps {
  onClick: () => void;
  label?: string;
  iconName?: keyof typeof icons;
  active?: boolean;
  disabled?: boolean;
}

const PaginationButton: React.FC<PaginationButtonProps> = ({
  onClick,
  label,
  iconName,
  active = false,
  disabled = false,
}) => {
  const textClasses = clsx({
    ['font-default font-regular text-center leading-text text-xs']: true,
    ['!text-neutral-700']: disabled,
    [`text-white`]: active === true,

    [`text-neutral-700 active:enabled:text-brand-600 disabled:!text-neutral-600`]:
      active === false,
  });

  const buttonClasses = clsx({
    [textClasses]: true,

    ['flex justify-center items-center text-center']: true,
    ['box-border rounded-[5px]']: true,
    ['disabled:cursor-not-allowed outline-none']: true,

    [`border border-transparent bg-brand-500 hover:enabled:bg-brand-400 active:enabled:!bg-brand-600 disabled:bg-neutral-100`]:
      active === true,
    ['border border-neutral-600 hover:enabled:border-brand-400  disabled:border-neutral-400']:
      active === false,

    ['px-2 py-1']: label,
    ['p-1']: iconName,
  });

  return (
    <button disabled={disabled} className={buttonClasses} onClick={onClick}>
      {label && <p color="inherit">{label}</p>}
      {iconName && <Icon size={18} color="inherit" name={iconName} />}
    </button>
  );
};

PaginationButton.displayName = 'PaginationButton';
export { PaginationButton, PaginationButtonProps };
