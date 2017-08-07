/* @flow */
const PositionEnum = Object.freeze({
  TOP_LEFT: 'top-left',
  TOP_CENTER: 'top-center',
  TOP_RIGHT: 'top-right',
  CENTER_RIGHT: 'center-right',
  CENTER_LEFT: 'center-left',
  BOTTOM_LEFT: 'bottom-left',
  BOTTOM_CENTER: 'bottom-center',
  BOTTOM_RIGHT: 'bottom-right',
});

const PositionEdgesOnlyEnum = Object.freeze({
  TOP: 'top',
  RIGHT: 'right',
  BOTTOM: 'bottom',
  LEFT: 'left',
});

const PositionCornersOnlyEnum = Object.freeze({
  TOP_LEFT: 'top-left',
  TOP_RIGHT: 'top-right',
  BOTTOM_LEFT: 'bottom-left',
  BOTTOM_RIGHT: 'bottom-right',
});

export { PositionEnum, PositionEdgesOnlyEnum, PositionCornersOnlyEnum };
