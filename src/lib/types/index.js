/* @flow */
export type Position =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'center-left'
  | 'center-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

export type PositionEdgesOnly = 'top' | 'right' | 'bottom' | 'left';

export type PositionCornersOnly =
  | 'top-right'
  | 'bottom-right'
  | 'bottom-left'
  | 'top-left';

export type Size =
  | 'mini'
  | 'tiny'
  | 'small'
  | 'medium'
  | 'large'
  | 'big'
  | 'huge'
  | 'massive';

export type SizeSubset = 'small' | 'medium' | 'large';

export type Intensity =
  | 'minor'
  | 'light'
  | 'moderate'
  | 'strong'
  | 'major'
  | 'great';

export type IntensitySubset = 'light' | 'moderate' | 'strong';

export type Theme = 'primary' | 'secondary';

export type Context = 'danger' | 'warning' | 'success' | 'info';
