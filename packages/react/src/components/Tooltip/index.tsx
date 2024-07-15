import React, { ReactElement, ReactNode, useRef } from 'react';
import clsx from 'clsx';

interface TooltipProps {
  onHoverItem: ReactNode;
  children: ReactElement;
  position?: 'left' | 'right';
  align?: 'top' | 'bottom' | 'center';
}

const Tooltip = ({
  onHoverItem,
  children,
  position = 'left',
  align = 'center',
}: TooltipProps) => {
  const tooltipRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (tooltipRef.current) {
      tooltipRef.current.style.display = 'block';
    }
  };

  const handleMouseLeave = () => {
    if (tooltipRef.current) {
      tooltipRef.current.style.display = 'none';
    }
  };

  const positionClasses = clsx({
    ['right-full mr-1']: position === 'left',
    ['left-full ml-1']: position === 'right',
    ['top-1/2 -translate-y-1/2']: align === 'center',
    ['bottom-0']: align === 'top',
    ['top-0']: align === 'bottom',
  });

  const childrenWithHandlers = React.cloneElement(children, {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
  });

  return (
    <div className="relative" ref={containerRef}>
      <div
        ref={tooltipRef}
        className={`absolute z-[100] ${positionClasses} transform`}
        style={{ display: 'none' }}
      >
        {onHoverItem}
      </div>
      {childrenWithHandlers}
    </div>
  );
};

Tooltip.displayName = 'Tooltip';

export { Tooltip, TooltipProps };
