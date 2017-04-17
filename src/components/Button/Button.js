/* @flow */
import R from 'ramda';
import React from 'react';
import styled from 'styled-components';
import type { Breed, Magnitude } from '../../types';
import {
  Animation,
  Border,
  BORDER_RADIUS,
  BreedEnum,
  Color,
  Font,
  FontSize,
  MagnitudeEnum,
} from '../../assets/constants';

type Props =
  | {|
      accent?: boolean,
      inverted?: boolean,
      onClick?: Function,
      pop?: 'active' | 'focus' | 'hover',
      breed?: Breed,
      size?: Magnitude,
    |}
  | {|
      circular: true,
      radius: Magnitude,
      accent?: boolean,
      inverted?: boolean,
      onClick?: Function,
      pop?: 'active' | 'focus' | 'hover',
      pulse?: boolean,
      breed?: Breed,
      size?: Magnitude,
    |};

const getBackgroundColor = R.cond([
  [R.propEq('inverted', true), R.always('transparent')],
  [R.propEq('breed', BreedEnum.SECONDARY), R.always(Color.SECONDARY)],
  [R.T, R.always(Color.PRIMARY)],
]);

const getBackgroundHoverColor = R.cond([
  [R.propEq('inverted', true), R.always(Color.WHITE_DARK)],
  [R.propEq('breed', BreedEnum.SECONDARY), R.always(Color.SECONDARY_DARK)],
  [R.T, R.always(Color.PRIMARY_DARK)],
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
  [(R.T, R.always('none'))],
]);

const getColor = R.cond([
  [
    R.both(R.propEq('inverted', true), R.propEq('breed', BreedEnum.SECONDARY)),
    R.always(Color.SECONDARY),
  ],
  [R.propEq('inverted', true), R.always(Color.PRIMARY_DARK)],
  [R.propEq('breed', BreedEnum.SECONDARY), R.always(Color.IVORY_DARK)],
  [R.T, R.always(Color.BLACK)],
]);

const getFontSize = props => FontSize[R.toUpper(R.prop('size', props))];

const getPadding = R.cond([
  [R.propEq('radius', MagnitudeEnum.MINI), R.always(0)],
  [R.T, R.always('0.2rem 0.5rem')],
]);

const getTransform = R.curry((pseudoState, props) =>
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

  ${/* flexbox */ ''}
  display: flex;
  justify-content: ${props => (props.circular ? 'center' : 'flex-start')};

  ${/* font */ ''}
  color: ${getColor};
  font-size: ${getFontSize};
  font-family: ${props => (props.accent ? Font.ACCENT : Font.SYSTEM)};

  ${/* border */ ''}
  border: ${getBorder};
  border-radius: ${props => (props.circular ? '50%' : BORDER_RADIUS)};

  ${/* transition */ ''}
  transition: all .3s, transform .4s ease-out;

  &:hover {
    cursor: pointer;
    background-color: ${getBackgroundHoverColor};
    transform: ${getTransform('hover')};
  }

  &:active {
    transform: ${getTransform('active')};
  }

  &:focus {
    transform: ${getTransform('focus')};
    outline: none;
  }
`;

const Pulse = styled.div`
  position: relative;
`;

const Overlay = styled(Button)`
  position: absolute;
  top: 0;
  left: 0;
  color: transparent;
  z-index: -1;
  animation-name: ${Animation.SCALE_UP_AND_FADE_OUT};
  animation-duration: 1.6s;
  animation-iteration-count: infinite;
  animation-delay: .2s;
`;

export default (props: Props) => {
  return R.cond([
    [
      R.propEq('pulse', true),
      R.always(
        <Pulse>
          <Button {...props} />
          <Overlay {...R.merge(props, { inverted: true })} />
        </Pulse>,
      ),
    ],
    [R.T, R.always(<Button {...props} />)],
  ])(props);
};
