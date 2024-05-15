import React, { type ButtonHTMLAttributes, type ReactNode } from 'react';
import clsx from 'clsx';

export interface HeadingProps extends ButtonHTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  color?: string;
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  weight?: 'regular' | 'medium' | 'bold';
}

export const Heading = ({
  level = 'h1',
  color = 'text-neutral700',
  weight = 'regular',
  ...rest
}: HeadingProps): JSX.Element => {
  const ElementType = level;

  const headingClasses = clsx({
    ['font-default leading-title']: true,
    ['text-title-h1']: level === 'h1',
    ['text-title-h2']: level === 'h2',
    ['text-title-h3']: level === 'h3',
    ['text-title-h4']: level === 'h4',
    ['text-title-h5']: level === 'h5',
    [color]: true,
    ['font-regular']: weight === 'regular',
    ['font-medium']: weight === 'medium',
    ['font-bold']: weight === 'bold',
  });

  return <ElementType {...rest} className={headingClasses} />;
};
Heading.displayName = 'Heading';
