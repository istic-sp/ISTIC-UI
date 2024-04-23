import React, { ReactElement, type ReactNode } from 'react';
import clsx from 'clsx';
import { Text } from '../Typography/Text';

export interface NavSubItem {
  label: string;
  path: string;
  icon: ReactElement;
  notification?: number;
}

export interface NavItem {
  title: string;
  subItems: NavSubItem[];
}
interface SubNav extends NavItem {
  activeItem: string;
}
export interface SideBarProps {
  logo: ReactNode;
  activeItem: string;
  items: NavItem[];
  footer?: ReactNode;
  width?: string;
}

const SubNav = ({ title, subItems, activeItem }: SubNav) => (
  <div className="flex flex-col gap-y-2">
    <Text size="xs" color="text-neutral600" weight="regular">
      {title}
    </Text>
    {subItems.map((subItem, index) => (
      <NavLink key={index} subItem={subItem} activeItem={activeItem} />
    ))}
  </div>
);

const NavLink = ({
  subItem,
  activeItem,
}: {
  subItem: NavSubItem;
  activeItem: string;
}) => {
  const isActive = activeItem === subItem.path;

  const linkClasses = clsx(
    'flex w-full flex-row items-center gap-x-2 p-2 rounded-[5px]',
    'transition-colors duration-150 ease-in-out',
    'hover:text-white hover:bg-brand500',
    {
      'bg-transparent text-neutral800': !isActive,
      'bg-brand500 text-white': isActive,
    },
  );

  return (
    <a className={linkClasses} href={subItem.path}>
      <div className="flex w-full flex-row items-center gap-x-2">
        {React.cloneElement(subItem.icon, { color: 'inherit' })}
        <Text size="sm" color="inherit" weight="regular">
          {subItem.label}
        </Text>
      </div>
      {!!subItem.notification && (
        <div className="rounded-full bg-error flex items-center justify-center px-[5px]">
          <Text size="xs" color="text-white">
            {subItem.notification}
          </Text>
        </div>
      )}
    </a>
  );
};

export const SideBar = ({
  logo,
  items,
  footer,
  activeItem,
  width = '250px',
}: SideBarProps): JSX.Element => {
  const sidebarClasses = clsx(
    'p-4 h-screen bg-white flex flex-col justify-between',
  );

  return (
    <div
      className={sidebarClasses}
      style={{
        width: width,
      }}
    >
      <div>
        <div className="flex justify-center items-center border-b-[0.5px] pb-4 mb-4">
          {logo}
        </div>
        <nav className="flex flex-col gap-y-2">
          {items.map((item, index) => (
            <SubNav key={index} {...item} activeItem={activeItem} />
          ))}
        </nav>
      </div>
      <footer>{footer}</footer>
    </div>
  );
};

export default SideBar;
