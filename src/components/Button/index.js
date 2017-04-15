/* @flow */
import R from 'ramda';
import React from 'react';
import styled from 'styled-components';
import type { Size } from '../../types';

import { colors, fonts, borders } from '../../assets/styles';

type Props = {|
  accent?: boolean,
  inverted?: boolean | 'thin' | 'medium' | 'thick',
  onClick?: Function,
  secondary?: boolean,
  size?: Size,
|} | {|
  circular: true,
  radius: Size,
  accent?: boolean,
  inverted?: boolean | 'thin' | 'medium' | 'thick',
  onClick?: Function,
  secondary?: boolean,
  size?: Size,
|};

const getBackgroundColor = R.cond([
  [R.propEq('inverted', true), R.always(colors.transparent)],
  [R.propEq('secondary', true), R.always(colors.secondary)],
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

const getFontSize = (props) => fonts.sizes[R.prop('size', props)];

const getPadding = R.cond([
  [R.propEq('radius', 'mini'), R.always(0)],
  [R.T, R.always('0.2rem 0.5rem')],
]);

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
  font-size: ${getFontSize};
  font-family: ${props => props.accent ? fonts.accent : fonts.system};
  color: ${getColor};
  transition-duration: 0.25s;

  border: ${getBorder};
  border-radius: ${props => props.circular ? '50%' : borders.radius};

  display: flex;
  justify-content: ${props => props.circular ? 'center' : 'flex-start'};
  width: ${getWidth};
  height: ${getWidth};
  overflow: hidden;
  padding: ${getPadding};

  &:hover {
    cursor: pointer;
    background-color: ${getBackgroundHoverColor};
  }

  &:focus {
    outline: none;
  }
`;

export default (props: Props) => {
  // console.log('props', props);

  return R.cond([
    // [R.propEq('pulse', true), R.always(<div>Hello</div>)],
    [R.T, R.always(<Button {...props} />)],
  ])(props);
}
