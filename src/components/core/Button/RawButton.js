/* @flow */
import R from 'ramda';
import styled from 'styled-components';

import {
  Border,
  BORDER_RADIUS,
  BreedEnum,
  Color,
  Font,
  FontSize,
  SizeEnum,
} from '../../../lib/constants';

const getBackgroundColor = R.cond([
  [R.propEq('inverted', true), R.always('transparent')],
  [R.propEq('breed', BreedEnum.PRIMARY), R.always(Color.PRIMARY)],
  [R.propEq('breed', BreedEnum.SECONDARY), R.always(Color.SECONDARY)],
  [R.T, R.always(Color.Gray.LIGHT)],
]);

export const getBackgroundColorHover = R.cond([
  [R.propEq('inverted', true), R.always(Color.White.MODERATE)],
  [R.propEq('breed', BreedEnum.PRIMARY), R.always(Color.Primary.DARK)],
  [R.propEq('breed', BreedEnum.SECONDARY), R.always(Color.Secondary.DARK)],
  [R.T, R.always(Color.Gray.MODERATE)],
]);

export const getBackgroundColorActive = R.cond([
  [R.propEq('inverted', true), R.always(Color.White.STRONG)],
  [R.propEq('breed', BreedEnum.PRIMARY), R.always(Color.Primary.DARKER)],
  [R.propEq('breed', BreedEnum.SECONDARY), R.always(Color.Secondary.DARKER)],
  [R.T, R.always(Color.Gray.STRONG)],
]);

const getBorder = R.cond([
  [
    R.both(R.propEq('inverted', true), R.propEq('breed', BreedEnum.PRIMARY)),
    R.always(Border.PRIMARY),
  ],
  [
    R.both(R.propEq('inverted', true), R.propEq('breed', BreedEnum.SECONDARY)),
    R.always(Border.SECONDARY),
  ],
  [R.propEq('inverted', true), R.always(Border.DEFAULT)],
  [R.T, R.always('none')],
]);

export const getColor = R.cond([
  [
    R.both(R.propEq('inverted', true), R.propEq('breed', BreedEnum.PRIMARY)),
    R.always(Color.PRIMARY),
  ],
  [
    R.both(R.propEq('inverted', true), R.propEq('breed', BreedEnum.SECONDARY)),
    R.always(Color.SECONDARY),
  ],
  [R.propEq('inverted', true), R.always(Color.BLACK)],
  [R.propEq('breed', BreedEnum.PRIMARY), R.always(Color.Black.TRANSPARENT)],
  [R.propEq('breed', BreedEnum.SECONDARY), R.always(Color.White.LIGHT)],
  [R.T, R.always(Color.Black.TRANSPARENT)],
]);

export const getColorHover = R.cond([
  [
    R.both(R.propEq('inverted', true), R.propEq('breed', BreedEnum.PRIMARY)),
    R.always(Color.PRIMARY),
  ],
  [
    R.both(R.propEq('inverted', true), R.propEq('breed', BreedEnum.SECONDARY)),
    R.always(Color.SECONDARY),
  ],
  [R.propEq('breed', BreedEnum.PRIMARY), R.always(Color.Black.TRANSPARENT)],
  [R.propEq('breed', BreedEnum.SECONDARY), R.always(Color.White.LIGHT)],
  [R.T, R.always(Color.Black.MODERATE)],
]);

export const getColorActive = R.cond([
  [
    R.both(R.propEq('inverted', true), R.propEq('breed', BreedEnum.PRIMARY)),
    R.always(Color.Primary.DARKER),
  ],
  [
    R.both(R.propEq('inverted', true), R.propEq('breed', BreedEnum.SECONDARY)),
    R.always(Color.SECONDARY),
  ],
  [R.propEq('breed', BreedEnum.PRIMARY), R.always(Color.Black.TRANSPARENT)],
  [R.propEq('breed', BreedEnum.SECONDARY), R.always(Color.White.MODERATE)],
  [R.T, R.always(Color.Black.MODERATE)],
]);

const getFontSize = (props) => {
  const size = R.prop('size', props);

  return size ? FontSize[R.toUpper(size)] : FontSize.MEDIUM;
};

const getPadding = R.cond([
  [R.propEq('radius', SizeEnum.MINI), R.always(0)],
  [R.propEq('size', SizeEnum.MINI), R.always('.2rem .3rem')],
  [R.propEq('size', SizeEnum.TINY), R.always('.2rem .3rem')],
  [R.propEq('size', SizeEnum.SMALL), R.always('.2rem .4rem')],
  [R.propEq('size', SizeEnum.MEDIUM), R.always('.25rem .5rem')],
  [R.propEq('size', SizeEnum.LARGE), R.always('.3rem .7rem')],
  [R.propEq('size', SizeEnum.BIG), R.always('.35rem .75rem')],
  [R.propEq('size', SizeEnum.HUGE), R.always('.4rem .9rem')],
  [R.propEq('size', SizeEnum.MASSIVE), R.always('.5rem 1.2rem')],
  [R.T, R.always(R.always('.3rem .7rem'))],
]);

const getTransform = R.curry((pseudoState, props) => {
  const transform = R.cond([
    [R.propEq('pop', pseudoState), R.always('scale(1.13)')],
    [R.T, R.always('none')],
  ])(props);

  return transform;
});

const getWidth = R.cond([
  [R.propEq('radius', SizeEnum.MINI), R.always('1.5rem')],
  [R.propEq('radius', SizeEnum.TINY), R.always('2rem')],
  [R.propEq('radius', SizeEnum.SMALL), R.always('2.5rem')],
  [R.propEq('radius', SizeEnum.MEDIUM), R.always('3rem')],
  [R.propEq('radius', SizeEnum.LARGE), R.always('4.5rem')],
  [R.propEq('radius', SizeEnum.BIG), R.always('6rem')],
  [R.propEq('radius', SizeEnum.HUGE), R.always('9rem')],
  [R.propEq('radius', SizeEnum.MASSIVE), R.always('12rem')],
  [R.T, R.always('inherit')],
]);

const RawButton = styled.button`
  background-color: ${getBackgroundColor};
  width: ${getWidth};
  height: ${getWidth};
  padding: ${getPadding};
  overflow: hidden;

  display: inline-flex;
  justify-content: ${props => (props.circular ? 'center' : 'flex-start')};
  align-items: center;

  color: ${getColor};
  font-size: ${getFontSize};
  font-family: ${props => (props.accent ? Font.ACCENT : Font.SYSTEM)};

  border: ${getBorder};
  border-radius: ${props => (props.circular ? '50%' : BORDER_RADIUS)};

  transition: transform .4s ease-out, all .3s;

  &:hover {
    cursor: pointer;
    background-color: ${getBackgroundColorHover};
    transform: ${getTransform('hover')};
    color: ${getColorHover};
  }

  &:active {
    transform: ${getTransform('active')};
    background-color: ${getBackgroundColorActive};
    color: ${getColorActive};
  }

  &:focus {
    transform: ${getTransform('focus')};
    outline: none;
  }
`;

export default RawButton;
