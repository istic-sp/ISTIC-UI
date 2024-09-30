import clsx from 'clsx';
import React from 'react';
import { Icon, icons } from '../Icons';

interface Tab {
  id: string;
  title: string;
  iconProps?: { iconName: keyof typeof icons; position?: 'left' | 'right' };
  width?: string;
}

interface TabsProps {
  tabs: Tab[];
  grow?: boolean;
  value: string;
  onChange: (newActiveTabId: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ tabs, grow = true, value, onChange }) => {
  const tabsContainerClasses = clsx({
    [`w-full grid grid-flow-col auto-cols-fr`]: grow,
    ['flex']: !grow,
  });

  const tabClasses = (tab: Tab) =>
    clsx({
      ['flex items-center justify-center gap-2 cursor-pointer']: true,
      ['text-sm']: true,
      ['bg-none']: true,
      ['min-w-[5.313rem]']: !grow && !tab.width,
      ['py-3']: true,
      ['w-auto']: !tab.width,
    });

  const activeTabClasses = clsx({
    ['font-semibold']: true,
    ['text-brand500']: true,
    ['border-b-2 border-brand500']: true,
  });

  const inactiveTabClasses = clsx({
    ['text-neutral600']: true,
  });

  const handleTabClick = (tabId: string) => {
    onChange(tabId);
  };

  return (
    <div className={tabsContainerClasses}>
      {tabs.map((tab) => (
        <button
          type="button"
          key={tab.id}
          className={`${tabClasses(tab)} ${value === tab.id ? activeTabClasses : inactiveTabClasses}`}
          onClick={() => handleTabClick(tab.id)}
          style={{ width: tab.width }}
        >
          {tab.iconProps && tab.iconProps.position === 'left' && (
            <Icon
              name={tab.iconProps.iconName}
              size={20}
              color={value === tab.id ? 'text-brand500' : 'text-neutral600'}
            />
          )}

          {tab.title}

          {tab.iconProps &&
            (!tab.iconProps.position || tab.iconProps.position === 'right') && (
              <Icon
                name={tab.iconProps.iconName}
                size={20}
                color={value === tab.id ? 'text-brand500' : 'text-neutral600'}
              />
            )}
        </button>
      ))}
    </div>
  );
};

Tabs.displayName = 'Tabs';
export { Tabs, Tab, TabsProps };
