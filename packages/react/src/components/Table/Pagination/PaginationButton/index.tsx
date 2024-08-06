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
    ['!text-neutral700']: disabled,
    [`text-white`]: active === true,

    [`text-neutral700 active:enabled:text-brand600 disabled:!text-neutral600`]:
      active === false,
  });

  const buttonClasses = clsx({
    [textClasses]: true,

    ['flex justify-center items-center text-center']: true,
    ['box-border rounded-[5px]']: true,
    ['disabled:cursor-not-allowed outline-none']: true,

    [`border border-transparent bg-brand500 hover:enabled:bg-brand400 active:enabled:!bg-brand600 disabled:bg-neutral100`]:
      active === true,
    ['border border-neutral600 hover:enabled:border-brand400  disabled:border-neutral400']:
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
