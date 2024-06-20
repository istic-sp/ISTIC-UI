import clsx from 'clsx';
import React from 'react';
import { Icon, icons } from '../Icons';

// Step 1: Extend the Tab Interface
export interface Tab {
  title: string;
  iconProps: { iconName: keyof typeof icons };
  width?: string; // Optional width property
}

export interface TabsProps {
  tabs: Tab[];
  grow?: boolean;
  value: number;
  onChange: (newActiveTab: number) => void;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  grow = true,
  value,
  onChange,
}) => {
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

  const handleTabClick = (index: number) => {
    onChange(index);
  };

  return (
    <div className={tabsContainerClasses}>
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`${tabClasses(tab)} ${value === index ? activeTabClasses : inactiveTabClasses}`}
          onClick={() => handleTabClick(index)}
          style={{ width: tab.width }}
        >
          <Icon
            name={tab.iconProps.iconName}
            size={20}
            color={value === index ? 'text-brand500' : 'text-neutral600'}
          />
          {tab.title}
        </button>
      ))}
    </div>
  );
};
