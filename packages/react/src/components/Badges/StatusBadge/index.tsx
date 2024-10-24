import clsx from 'clsx';
import React from 'react';

interface StatusBadgeProps {
  isActive: boolean;
  grow?: boolean;
  activeText?: string;
  inactiveText?: string;
}

const StatusBadge = ({
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
    ['bg-neutral-600 text-neutral-600']: !isActive,
    ['w-full flex flex-row items-center justify-center']: grow,
  });
  const ellipsisClasses = clsx({
    ['w-[5px] h-[5px] rounded-full']: true,
    ['bg-success']: isActive,
    ['bg-neutral-600']: !isActive,
  });

  return (
    <div className={statusBadgeClasses}>
      <div className={ellipsisClasses} />
      <div>{isActive ? activeText : inactiveText}</div>
    </div>
  );
};
StatusBadge.displayName = 'StatusBadge';

export { StatusBadge, StatusBadgeProps };
