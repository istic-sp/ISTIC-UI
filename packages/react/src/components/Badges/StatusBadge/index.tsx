import clsx from 'clsx';
import React from 'react';

export interface StatusBadgeProps {
  isActive: boolean;
  grow?: boolean;
  activeText?: string;
  inactiveText?: string;
}

export const StatusBadge = ({
  isActive,
  grow,
  activeText = 'Active',
  inactiveText = 'Inactive',
}: StatusBadgeProps) => {
  const statusBadgeClasses = clsx({
    ['px-2 py-1 bg-opacity-10 rounded flex justify-start items-center gap-2 inline-flex']:
      true,
    ['text-sm font-default font-regular']: true,
    ['bg-success text-success']: isActive,
    ['bg-neutral600 text-neutral600']: !isActive,
    ['w-full flex flex-row items-center justify-center']: grow,
  });
  const ellipsisClasses = clsx({
    ['w-[5px] h-[5px] rounded-full']: true,
    ['bg-success']: isActive,
    ['bg-neutral600']: !isActive,
  });

  return (
    <div className={statusBadgeClasses}>
      <div className={ellipsisClasses} />
      <div>{isActive ? activeText : inactiveText}</div>
    </div>
  );
};
