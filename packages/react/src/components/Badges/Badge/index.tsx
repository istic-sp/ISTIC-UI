import React from 'react';

interface BadgeProps {
  label: string;
}

export const Badge = ({ label }: BadgeProps) => {
  return (
    <span
      className={`inline-block px-2 py-1 text-xs font-medium text-brand500 bg-brand0 rounded-lg`}
    >
      {label}
    </span>
  );
};
