/* @flow */
export type Position = 'top' | 'right' | 'bottom' | 'left';

export type Size =
  | 'mini'
  | 'tiny'
  | 'small'
  | 'medium'
  | 'large'
  | 'big'
  | 'huge'
  | 'massive';

export type SizeSubset =
  | 'small'
  | 'medium'
  | 'large';

export type Intensity =
  | 'minor'
  | 'light'
  | 'moderate'
  | 'strong'
  | 'major'
  | 'great';

export type IntensitySubset =
  | 'light'
  | 'moderate'
  | 'strong';

export type Theme = 'primary' | 'secondary';



export type Context = 'danger' | 'warning' | 'success' | 'info';
