import clsx from 'clsx';
import React from 'react';
import { Icon, icons } from '../Icons';

export interface Tab {
  title: string;
  iconProps: { iconName: keyof typeof icons };
  content: React.ReactNode;
}

export interface TabsProps {
  tabs: Tab[];
  grow?: boolean;
}

export const Tabs: React.FC<TabsProps> = ({ tabs, grow = false }) => {
  const [activeTab, setActiveTab] = React.useState(0);

  const tabsContainerClasses = clsx({
    [`grid grid-cols-${tabs.length}`]: grow,
    ['flex']: !grow,
  });

  const tabClasses = clsx({
    ['flex items-center justify-center gap-2 cursor-pointer']: true,
    ['text-sm']: true,
    ['bg-none']: true,
    ['w-[17.313rem]']: !grow,
    ['py-3']: true,
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
    setActiveTab(index);
  };

  return (
    <div>
      <div className={tabsContainerClasses}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`${tabClasses} ${activeTab === index ? activeTabClasses : inactiveTabClasses}`}
            onClick={() => handleTabClick(index)}
          >
            <Icon
              name={tab.iconProps.iconName}
              size={20}
              color={activeTab === index ? 'text-brand500' : 'text-neutral600'}
            />
            {tab.title}
          </button>
        ))}
      </div>
      <div className="tab-content">{tabs[activeTab].content}</div>
    </div>
  );
};
