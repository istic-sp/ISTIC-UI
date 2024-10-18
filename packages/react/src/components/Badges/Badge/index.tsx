import React from 'react';

interface BadgeProps {
  label: string;
}

const Badge = ({ label }: BadgeProps) => {
  return (
    <span
      className={`inline-block px-2 py-1 text-xs font-medium text-brand-500 bg-brand-50 rounded-lg`}
    >
      {label}
    </span>
  );
};
Badge.displayName = 'Badge';
export { Badge, BadgeProps };
