import { create } from '@storybook/theming/create';
import { version } from '../utils/version';

export default create({
  brandTitle: `ISTIC UI - ${version || '0.0.0'}v`,

  brandTarget: '_self',
});
