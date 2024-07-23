import React from 'react';
import { Heading } from '../../Typography/Heading';

export interface ChipTooltipProps {
  children: React.ReactNode;
  title: string;
}

export const ChipTooltip: React.FC<ChipTooltipProps> = ({
  children,
  title,
}) => {
  return (
    <div className="w-0 absolute top-0 left-[105%] z-50">
      <div className="animate-chipFadeIn flex flex-col gap-2 w-96 whitespace-normal bg-white text-neutral700 text-sm shadow-sm rounded-lg p-6">
        <Heading level="h5" weight="bold" color="text-neutral800">
          {title}
        </Heading>
        {children}
      </div>
    </div>
  );
};
