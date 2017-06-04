/* @flow */
import Color from './color';

export const BORDER_RADIUS = '3px';
export const BorderWidth = {
  SMALL: '1px',
  MEDIUM: '2px',
  LARGE: '3px',
};

export default {
  DEFAULT: `1px solid ${Color.BLACK}`,
  PRIMARY: `1px solid ${Color.Primary.DARKER}`,
  SECONDARY: `1px solid ${Color.SECONDARY}`,
};
