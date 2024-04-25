import tailwindConfig from '../../../tailwind.config';
import { ColorPalette, ColorItem } from '@storybook/blocks';
import React from 'react';

export const colors = tailwindConfig.theme.extend.colors;

interface ClickableColorItemProps
  extends React.ComponentProps<typeof ColorItem> {
  hexValue: string;
}

const ClickableColorItem: React.FC<ClickableColorItemProps> = ({
  hexValue,
  ...rest
}) => {
  const handleClick = () => {
    // Create a temporary input element to copy the hex value to the clipboard
    const input = document.createElement('input');
    input.value = hexValue;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
  };

  return (
    <div onClick={handleClick} style={{ cursor: 'pointer' }}>
      <ColorItem {...rest} />
    </div>
  );
};

export const ColorItems: React.FC = () => {
  const colorItems = Object.entries(colors).map(([colorName, colorShade]) => {
    const hexValue = Array.isArray(colorShade) ? colorShade[0] : colorShade;
    return (
      <ClickableColorItem
        key={colorName}
        title={colorName}
        colors={[colorShade]}
        subtitle={`-${colorName}`}
        hexValue={hexValue}
      />
    );
  });

  return <ColorPalette>{colorItems}</ColorPalette>;
};
