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
  onClick: () => void;
  disabled?: boolean;
}

interface DropdownMenuProps {
  mainItem: ReactElement<{ onClick: () => void }>;
  items: DropdownMenuItem[];
}

const DropdownMenu = ({ mainItem, items }: DropdownMenuProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

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
    'flex w-full p-2 gap-2 rounded-[5px] border border-neutral100 justify-start items-center text-center h-auto box-border disabled:cursor-not-allowed outline-none',
    {
      ['font-default font-medium leading-text text-sm']: true,
      [`text-neutral800 hover:enabled:text-brand400 active:enabled:text-white disabled:text-neutral400`]:
        true,
      [`border border-transparent bg-white hover:enabled:bg-brand0 active:enabled:!bg-brand600 disabled:bg-neutral100`]:
        true,
    },
  );

  return (
    <div className="relative">
      <div
        ref={dropdownRef}
        className="absolute right-[100%] top-1/2 transform -translate-y-1/2"
        style={{ width: 150 }}
      >
        {isOpen && (
          <ul className="bg-white p-2 rounded-[5px] w-auto list-none">
            {items.map((item, index) => (
              <li key={index}>
                <button
                  className={buttonClasses}
                  disabled={item.disabled}
                  onClick={item.onClick}
                >
                  <Icon name={item.iconName} color="inherit" />
                  <div className="whitespace-nowrap overflow-hidden">
                    {item.label}
                  </div>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div>{React.cloneElement(mainItem, { onClick: toggleDropdown })}</div>
    </div>
  );
};

export { DropdownMenu, DropdownMenuProps };
