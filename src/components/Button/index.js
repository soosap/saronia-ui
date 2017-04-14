/* @flow */
import R from 'ramda';
import React from 'react';
import styled from 'styled-components';
import type { Size } from '../../types';

import { colors, fonts, borders } from '../../assets/styles';

type Props = {
  accent?: boolean,
  circular?: boolean | Size,
  inverted?: boolean | 'thin' | 'medium' | 'thick',
  secondary?: boolean,
};

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

const getBorderWidth = R.cond([
  [R.propEq('inverted', 'thin'), R.always(borders.width.thin)],
  [R.propEq('inverted', 'medium'), R.always(borders.width.medium)],
  [R.propEq('inverted', 'thick'), R.always(borders.width.thick)],
  [R.T, R.always(borders.width.thin)],
]);

const getBorderColor = R.cond([
  [
    R.both(R.propEq('inverted', true), R.propEq('secondary', true)),
    R.always(colors.secondary),
  ],
  [R.propEq('inverted', true), R.always(colors.primary)],
  [R.T, R.always(undefined)],
]);

const getBorder = R.ifElse(
  props => R.isNil(getBorderColor(props)),
  R.always('none'),
  props => R.always(`${getBorderWidth(props)} solid ${getBorderColor(props)}`),
);

const getColor = R.cond([
  [
    R.both(R.propEq('inverted', true), R.propEq('secondary', true)),
    R.always(colors.secondary),
  ],
  [R.propEq('inverted', true), R.always(colors.primaryDark)],
  [R.propEq('secondary', true), R.always(colors.ivoryDark)],
  [R.T, R.always(colors.black)],
]);

const getWidth = R.cond([
  [R.propEq('circular', true), R.always('5rem')],
  [R.propEq('circular', 'mini'), R.always('1.5rem')],
  [R.propEq('circular', 'tiny'), R.always('2.5rem')],
  [R.propEq('circular', 'small'), R.always('3rem')],
  [R.propEq('circular', 'medium'), R.always('4rem')],
  [R.propEq('circular', 'large'), R.always('6rem')],
  [R.propEq('circular', 'big'), R.always('8rem')],
  [R.propEq('circular', 'huge'), R.always('10rem')],
  [R.propEq('circular', 'massive'), R.always('12rem')],
  [R.T, R.always('inherit')],
]);

// padding logic must be improved
// show circular-size conditionally in story
const getPadding = (props) => R.tap(console.log, R.cond([
  [R.both(R.prop('circular'), R.propEq('accent', true)), R.always('0.2rem')],
  [R.propEq('circular', 'mini'), R.always(0)],
  [R.propEq('accent', true), R.always('0.65rem 1rem 0.35rem 1rem')],
  [R.T, R.always('0.3rem 0.6rem')],
])(props));

const Button = styled.button`
  background-color: ${getBackgroundColor};
  font-size: 1.2rem;
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

export default (props: Props) => (
  <Button {...props} onClick={() => console.log(props)} />
);
