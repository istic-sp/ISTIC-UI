import React from 'react';
import { Icon, Text, icons } from '@stick-ui/lib';

export const IconItems: React.FC = () => {
  const iconItems = Object.keys(icons).map((key) => {
    return (
      <div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <div>
            <Text>{key}</Text>
          </div>
          <Icon size={48} name={key} />
        </div>
      </div>
    );
  });

  return (
    <div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <Text weight="bold" color="text-neutral200">
          Name
        </Text>
        <Text weight="bold" color="text-neutral200">
          Icon
        </Text>
      </div>
      {iconItems}
    </div>
  );
};
