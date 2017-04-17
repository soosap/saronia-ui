/* @flow */
import R from 'ramda';
import React from 'react';
import styled from 'styled-components';
import type { Breed as BreedType, Magnitude as MagnitudeType } from '../../types';
import { Animation, Color, Font, Border, Breed, Magnitude } from '../../assets/constants';

type Props =
  | {|
      accent?: boolean,
      inverted?: boolean,
      onClick?: Function,
      pop?: 'active' | 'focus' | 'hover',
      breed?: BreedType,
      size?: MagnitudeType,
    |}
  | {|
      circular: true,
      radius: MagnitudeType,
      accent?: boolean,
      inverted?: boolean,
      onClick?: Function,
      pop?: 'active' | 'focus' | 'hover',
      pulse?: boolean,
      breed?: BreedType,
      size?: MagnitudeType,
    |};

const getBackgroundColor = R.cond([
  [R.propEq('inverted', true), R.always('transparent')],
  [R.propEq('breed', Breed.SECONDARY), R.always(Color.SECONDARY)],
  [R.T, R.always(colors.primary)],
]);

const getBackgroundHoverColor = R.cond([
  [R.propEq('inverted', true), R.always(colors.whiteDark)],
  [R.propEq('secondary', true), R.always(colors.secondaryDark)],
  [R.T, R.always(colors.primaryDark)],
]);

const getBorder = R.ifElse(
  props => R.isNil(getBorderColor(props)),
  R.always('none'),
  props => R.always(`${getBorderWidth(props)} solid ${getBorderColor(props)}`),
);

const getBorderColor = R.cond([
  [
    R.both(R.propEq('inverted', true), R.propEq('secondary', true)),
    R.always(colors.secondary),
  ],
  [R.propEq('inverted', true), R.always(colors.primary)],
  [R.T, R.always(undefined)],
]);

const getBorderWidth = R.cond([
  [R.propEq('inverted', 'thin'), R.always(borders.width.thin)],
  [R.propEq('inverted', 'medium'), R.always(borders.width.medium)],
  [R.propEq('inverted', 'thick'), R.always(borders.width.thick)],
  [R.T, R.always(borders.width.thin)],
]);

const getColor = R.cond([
  [
    R.both(R.propEq('inverted', true), R.propEq('secondary', true)),
    R.always(colors.secondary),
  ],
  [R.propEq('inverted', true), R.always(colors.primaryDark)],
  [R.propEq('secondary', true), R.always(colors.ivoryDark)],
  [R.T, R.always(colors.black)],
]);

const getFontSize = props => fonts.sizes[R.prop('size', props)];

const getPadding = R.cond([
  [R.propEq('radius', 'mini'), R.always(0)],
  [R.T, R.always('0.2rem 0.5rem')],
]);

const getTransform = R.curry((pseudoState, props) =>
  R.when(R.propEq('pop', pseudoState), R.always('scale(1.13)')),
);

const getWidth = R.cond([
  [R.propEq('radius', 'mini'), R.always('1.5rem')],
  [R.propEq('radius', 'tiny'), R.always('2rem')],
  [R.propEq('radius', 'small'), R.always('2.5rem')],
  [R.propEq('radius', 'medium'), R.always('3rem')],
  [R.propEq('radius', 'large'), R.always('4.5rem')],
  [R.propEq('radius', 'big'), R.always('6rem')],
  [R.propEq('radius', 'huge'), R.always('9rem')],
  [R.propEq('radius', 'massive'), R.always('12rem')],
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
  font-family: ${props => (props.accent ? fonts.accent : fonts.system)};

  ${/* border */ ''}
  border: ${getBorder};
  border-radius: ${props => (props.circular ? '50%' : borders.radius)};

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
  animation-name: ${animations.scaleUpAndFadeOut};
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
