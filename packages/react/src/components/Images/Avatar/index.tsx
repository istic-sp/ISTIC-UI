import React from 'react';
import clsx from 'clsx';
import { Icon, icons } from '../../Icons';

interface AvatarProps {
  image?: string | File;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  iconName?: keyof typeof icons;
}

const Avatar: React.FC<AvatarProps> = ({
  image,
  size = 'sm',
  iconName = 'user',
}) => {
  const avatarClasses = clsx('avatar', {
    'bg-neutral-200 text-neutral-800 rounded-full flex items-center justify-center':
      true,
    'w-9 h-9': size === 'xs',
    'w-12 h-12': size === 'sm',
    'w-16 h-16': size === 'md',
    'w-24 h-24': size === 'lg',
  });

  const iconProps = {
    color: 'inherit',
    size: size === 'xs' || size === 'sm' ? 16 : size === 'md' ? 24 : 32,
  };

  const avatarStyle: React.CSSProperties = {
    backgroundImage: image
      ? `url(${typeof image === 'string' ? image : URL.createObjectURL(image)})`
      : 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
  };

  return (
    <div className={avatarClasses} style={avatarStyle}>
      {!image && <Icon name={iconName} {...iconProps} />}
    </div>
  );
};

Avatar.displayName = 'Avatar';
export { Avatar, AvatarProps };
