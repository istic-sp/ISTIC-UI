import React from 'react';
import clsx from 'clsx';

export interface LoaderProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
  width?: 'slim' | 'bold';
}

export const Loader = ({
  size = 'md',
  color = 'white',
  width = 'bold',
}: LoaderProps) => {
  const loaderClasses = clsx({
    ['w-4 h-4']: size === 'xs',
    ['w-5 h-5']: size === 'sm',
    ['w-6 h-6']: size === 'md',
    ['w-7 h-7']: size === 'lg',
    ['w-8 h-8']: size === 'xl',

    ['overflow-hidden']: true,

    [`border-${width === 'bold' ? '4' : '2'} border-solid rounded-full`]: true,
    [`border-${color}`]: true,
    ['border-b-transparent']: true,
    ['inline-block']: true,
    ['box-border']: true,
    ['animate-spin']: true,
    ['border-bottom-color:transparent']: true,
  });

  return <span className={loaderClasses} />;
};
