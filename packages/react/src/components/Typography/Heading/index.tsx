import React, { type ButtonHTMLAttributes, type ReactNode } from 'react';
import clsx from 'clsx';

export interface HeadingProps extends ButtonHTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
}

export const Heading = ({
  level = 'h1',
  ...rest
}: HeadingProps): JSX.Element => {
  const ElementType = level;

  const headingClasses = clsx({
    ['font-default leading-title']: true,
    ['title-h1']: level === 'h1',
    ['title-h2']: level === 'h2',
    ['title-h3']: level === 'h3',
    ['title-h4']: level === 'h4',
    ['title-h5']: level === 'h5',
  });

  return <ElementType {...rest} className={headingClasses} />;
};
