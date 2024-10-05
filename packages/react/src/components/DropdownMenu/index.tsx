import React, {
  ReactElement,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import { Icon, icons } from '../Icons';
import clsx from 'clsx';

interface DropdownMenuItem {
  label: string;
  iconName: keyof typeof icons;
  onClick: (event: React.MouseEvent) => void;
  disabled?: boolean;
  id: string;
}

type DropdownMenuProps =
  | {
      mainItem: ReactElement<{ onClick: (event: React.MouseEvent) => void }>;
      items: DropdownMenuItem[];
      children?: never;
      position?: 'left' | 'right' | 'center';
      align?: 'full-top' | 'top' | 'bottom' | 'center' | 'full-bottom';
    }
  | {
      mainItem: ReactElement<{ onClick: (event: React.MouseEvent) => void }>;
      children: React.ReactNode;
      items?: never;
      position?: 'left' | 'right' | 'center';
      align?: 'full-top' | 'top' | 'bottom' | 'center' | 'full-bottom';
    };

const DropdownMenu = ({
  mainItem,
  items = [],
  children = null,
  position = 'left',
  align = 'center',
}: DropdownMenuProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = useCallback((event: React.MouseEvent) => {
    event.stopPropagation();
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }, []);

  const handleOutsideClick = useCallback((event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [handleOutsideClick]);

  const buttonClasses = clsx(
    'flex w-full p-2 gap-2 rounded-[5px] border border-neutral100 justify-start items-center text-center h-auto box-border disabled:cursor-not-allowed outline-none font-default font-medium leading-text text-sm',
    {
      'text-neutral800 hover:enabled:text-brand400 active:enabled:text-white disabled:text-neutral400':
        true,
      'border border-transparent bg-white hover:enabled:bg-brand0 active:enabled:!bg-brand600 disabled:bg-neutral100':
        true,
    },
  );

  const renderDropdownItems = () => {
    if (children) return children;

    return (
      <ul className="bg-white border border-neutral400 p-2 rounded-[5px] w-auto list-none">
        {items.map((item, index) => (
          <li key={item.iconName + index}>
            <button
              type="button"
              className={buttonClasses}
              disabled={item.disabled}
              onClick={(event) => {
                event.stopPropagation();
                item.onClick(event);
              }}
              id={item.id}
            >
              <Icon name={item.iconName} color="inherit" />
              <div className="whitespace-nowrap overflow-hidden">
                {item.label}
              </div>
            </button>
          </li>
        ))}
      </ul>
    );
  };

  const positionClasses = clsx({
    ['right-full mr-1']: position === 'left',
    ['left-full ml-1']: position === 'right',
    ['left-1/2 -translate-x-1/2 ']: position === 'center',

    ['top-1/2 -translate-y-1/2']: align === 'center',
    ['bottom-0']: align === 'top',
    ['top-0']: align === 'bottom',
    ['bottom-full mb-1']: align === 'full-top',
    ['top-full mt-1']: align === 'full-bottom',
  });

  return (
    <div className="relative">
      <div
        ref={dropdownRef}
        className={`absolute z-30 ${positionClasses} transform `}
      >
        {isOpen && renderDropdownItems()}
      </div>
      {React.cloneElement(mainItem, { onClick: toggleDropdown })}
    </div>
  );
};
DropdownMenu.displayName = 'DropdownMenu';

export { DropdownMenu, DropdownMenuItem, DropdownMenuProps };
