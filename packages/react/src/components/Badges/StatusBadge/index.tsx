import clsx from 'clsx';
import React from 'react';

interface StatusBadgeProps {
  isActive: boolean;
  activeText?: string;
  inactiveText?: string;
}

export const StatusBadge = ({
  isActive,
  activeText = 'Active',
  inactiveText = 'Inactive',
}: StatusBadgeProps) => {
  const statusBadgeClasses = clsx({
    ['px-2 py-1 bg-opacity-10 rounded flex justify-start items-center gap-2 inline-flex']:
      true,
    ['text-sm font-default font-regular']: true,
    ['bg-success text-success']: isActive,
    ['bg-error text-error']: !isActive,
  });
  const ellipsisClasses = clsx({
    ['w-[5px] h-[5px] rounded-full']: true,
    ['bg-success']: isActive,
    ['bg-error']: !isActive,
  });

  return (
    <div className={statusBadgeClasses}>
      <div className={ellipsisClasses} />
      <div>{isActive ? activeText : inactiveText}</div>
    </div>
  );
};
