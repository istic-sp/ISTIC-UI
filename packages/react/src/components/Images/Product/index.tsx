import React from 'react';
import clsx from 'clsx';
import { Icon, icons } from '../../Icons';

interface ProductProps {
  image?: string | File;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  iconName?: keyof typeof icons;
}

const Product: React.FC<ProductProps> = ({
  image,
  size = 'sm',
  iconName = 'archive',
}) => {
  const productClasses = clsx('product', {
    'bg-neutral200 text-neutral600 rounded-[5px] flex items-center justify-center':
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

  const productStyle: React.CSSProperties = {
    backgroundImage: image
      ? `url(${typeof image === 'string' ? image : URL.createObjectURL(image)})`
      : 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
  };

  return (
    <div className={productClasses} style={productStyle}>
      {!image && <Icon name={iconName} {...iconProps} />}
    </div>
  );
};

Product.displayName = 'Product';
export { Product, ProductProps };
