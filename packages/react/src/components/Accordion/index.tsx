import React, { useState } from 'react';
import clsx from 'clsx';
import { Text } from '../Typography/Text';
import { Icon } from '../Icons';

interface StyleProps {
  main?: React.CSSProperties;
  title?: React.CSSProperties;
  content?: React.CSSProperties;
}

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  open?: boolean;
  setOpen?: (open: boolean) => void;
  style?: StyleProps;
  grow?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  open: controlledOpen,
  setOpen: setControlledOpen,
  style,
  grow = false,
}) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false);

  const isOpen =
    controlledOpen !== undefined ? controlledOpen : uncontrolledOpen;

  const toggleOpen = () => {
    if (setControlledOpen) {
      setControlledOpen(!isOpen);
    } else {
      setUncontrolledOpen(!uncontrolledOpen);
    }
  };

  return (
    <div
      className={clsx('bg-neutral-50 rounded-lg ', { 'w-full': grow })}
      style={style?.main}
    >
      <div
        className={clsx(
          'flex flex-row items-center p-4 justify-between cursor-pointer gap-4',
          style?.title,
        )}
        onClick={() => toggleOpen()}
      >
        <Text
          className={clsx('text-neutral-700 font-medium')}
          style={style?.title}
          weight="medium"
          size="sm"
        >
          {title}
        </Text>
        <Icon
          name={isOpen ? 'arrow-down-s' : 'arrow-right-s'}
          size={20}
          color="text-brand-500"
        />
      </div>
      {isOpen && (
        <div
          className={clsx('px-4 pb-4', { 'w-full': grow })}
          style={style?.content}
        >
          {children}
        </div>
      )}
    </div>
  );
};
Accordion.displayName = 'Accordion';

export { Accordion, AccordionProps };
