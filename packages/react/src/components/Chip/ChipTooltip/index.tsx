import React from 'react';

export interface ChipTooltipProps {
  children: React.ReactNode;
  title: string;
}

export const ChipTooltip: React.FC<ChipTooltipProps> = ({
  children,
  title,
}) => {
  return (
    <div className="w-0 absolute top-0 left-[105%] z-20">
      <div className="animate-chipFadeIn flex flex-col gap-2 w-96 whitespace-normal bg-white text-neutral-700 text-sm shadow-lg rounded-lg p-6">
        <h3 className="font-bold text-neutral-800 text-lg">{title}</h3>
        {children}
      </div>
    </div>
  );
};
