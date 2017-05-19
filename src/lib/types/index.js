/* @flow */
export type Position = 'top' | 'right' | 'bottom' | 'left';

export type Magnitude = 'mini' | 'tiny' | 'small' | 'medium' | 'large' | 'big' | 'huge' | 'massive';

// https://en.wikipedia.org/wiki/Mercalli_intensity_scale
export type Intensity =
  | 'weak'
  | 'light'
  | 'moderate'
  | 'strong'
  | 'very_strong'
  | 'severe'
  | 'violent'
  | 'extreme';

export type Breed = 'primary' | 'secondary';

export type Size = 'small' | 'medium' | 'large';

export type Context = 'danger' | 'warning' | 'success' | 'info';
