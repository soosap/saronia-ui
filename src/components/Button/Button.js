/* @flow */
import R from 'ramda';
import styled from 'styled-components';

import type { Breed, Magnitude } from '../../lib/types';
import {
  Border,
  BORDER_RADIUS,
  BreedEnum,
  Color,
  Font,
  FontSize,
  MagnitudeEnum,
} from '../../lib/constants';

type Props =
  | {
      // default
      accent?: boolean,
      circular?: false,
      compact?: false,
      inverted?: boolean,
      onClick?: Function,
      pop?: 'active' | 'focus' | 'hover',
      size?: Magnitude,
      breed?: Breed,
    }
  | {
      // circular
      accent?: boolean,
      circular: true,
      compact?: false,
      icon?: false,
      inverted?: boolean,
      onClick?: Function,
      pop?: 'active' | 'focus' | 'hover',
      radius: Magnitude,
      size?: Magnitude,
      breed?: Breed,
    };

const getBackgroundColor = R.cond([
  [R.propEq('inverted', true), R.always('transparent')],
  [R.propEq('breed', BreedEnum.PRIMARY), R.always(Color.PRIMARY)],
  [R.propEq('breed', BreedEnum.SECONDARY), R.always(Color.SECONDARY)],
  [R.T, R.always(Color.GREY_LIGHT)],
]);

const getBackgroundColorHover = R.cond([
  [R.propEq('inverted', true), R.always(Color.WHITE_DARK)],
  [R.propEq('breed', BreedEnum.PRIMARY), R.always(Color.PRIMARY_DARK)],
  [R.propEq('breed', BreedEnum.SECONDARY), R.always(Color.SECONDARY_DARK)],
  [R.T, R.always(Color.GREY_MODERATE)],
]);

const getBackgroundColorActive = R.cond([
  [R.propEq('inverted', true), R.always(Color.IVORY_DARK)],
  [R.propEq('breed', BreedEnum.PRIMARY), R.always(Color.PRIMARY_DARKER)],
  [R.propEq('breed', BreedEnum.SECONDARY), R.always(Color.SECONDARY_DARKER)],
  [R.T, R.always(Color.GREY_STRONG)],
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

const getColor = R.cond([
  [
    R.both(R.propEq('inverted', true), R.propEq('breed', BreedEnum.SECONDARY)),
    R.always(Color.SECONDARY),
  ],
  [
    R.both(R.propEq('inverted', true), R.propEq('breed', BreedEnum.PRIMARY)),
    R.always(Color.PRIMARY),
  ],
  [R.propEq('inverted', true), R.always(Color.BLACK)],
  [
    R.propEq('breed', BreedEnum.PRIMARY),
    R.always(Color.BLACK_TRANSPARENT_SEVERE),
  ],
  [R.propEq('breed', BreedEnum.SECONDARY), R.always(Color.IVORY_DARK)],
  [R.T, R.always(Color.BLACK)],
]);

const getFontSize = (props: Props) => {
  const size = R.prop('size', props);

  return size ? FontSize[R.toUpper(size)] : FontSize.MEDIUM;
};

const getPadding = R.cond([
  [R.propEq('radius', MagnitudeEnum.MINI), R.always(0)],
  [R.propEq('size', MagnitudeEnum.MINI), R.always('.2rem .3rem')],
  [R.propEq('size', MagnitudeEnum.TINY), R.always('.2rem .3rem')],
  [R.propEq('size', MagnitudeEnum.SMALL), R.always('.2rem .4rem')],
  [R.propEq('size', MagnitudeEnum.MEDIUM), R.always('.25rem .5rem')],
  [R.propEq('size', MagnitudeEnum.LARGE), R.always('.3rem .7rem')],
  [R.propEq('size', MagnitudeEnum.BIG), R.always('.35rem .75rem')],
  [R.propEq('size', MagnitudeEnum.HUGE), R.always('.4rem .9rem')],
  [R.propEq('size', MagnitudeEnum.MASSIVE), R.always('.5rem 1.2rem')],
  [R.T, R.always(R.always('.3rem .7rem'))],
]);

const getTransform = R.curry(pseudoState =>
  R.when(R.propEq('pop', pseudoState), R.always('scale(1.13)')),
);

const getWidth = R.cond([
  [R.propEq('radius', MagnitudeEnum.MINI), R.always('1.5rem')],
  [R.propEq('radius', MagnitudeEnum.TINY), R.always('2rem')],
  [R.propEq('radius', MagnitudeEnum.SMALL), R.always('2.5rem')],
  [R.propEq('radius', MagnitudeEnum.MEDIUM), R.always('3rem')],
  [R.propEq('radius', MagnitudeEnum.LARGE), R.always('4.5rem')],
  [R.propEq('radius', MagnitudeEnum.BIG), R.always('6rem')],
  [R.propEq('radius', MagnitudeEnum.HUGE), R.always('9rem')],
  [R.propEq('radius', MagnitudeEnum.MASSIVE), R.always('12rem')],
  [R.T, R.always('inherit')],
]);

const Button = styled.button`
  background-color: ${getBackgroundColor};
  width: ${getWidth};
  height: ${getWidth};
  padding: ${getPadding};
  overflow: hidden;

  display: flex;
  justify-content: ${props => (props.circular ? 'center' : 'flex-start')};
  align-items: center;

  color: ${getColor};
  font-size: ${getFontSize};
  font-family: ${props => (props.accent ? Font.ACCENT : Font.SYSTEM)};

  border: ${getBorder};
  border-radius: ${props => (props.circular ? '50%' : BORDER_RADIUS)};

  transition: all .3s, transform .4s ease-out;

  &:hover {
    cursor: pointer;
    background-color: ${getBackgroundColorHover};
    transform: ${getTransform('hover')};
  }

  &:active {
    transform: ${getTransform('active')};
    background-color: ${getBackgroundColorActive};
  }

  &:focus {
    transform: ${getTransform('focus')};
    outline: none;
  }
`;

export default Button;
