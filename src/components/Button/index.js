/* @flow */
import R from 'ramda';
import React from 'react';
import styled from 'styled-components';

import { colors, fonts, borders } from '../../assets/styles';

type Props = {
  inverted?: boolean | 'thin' | 'medium' | 'thick',
  accent?: boolean,
  secondary?: boolean,
};

const getBackgroundColor = R.cond([
  [R.prop('inverted'), R.always(colors.transparent)],
  [R.prop('secondary'), R.always(colors.secondary)],
  [R.T, R.always(colors.primary)],
]);

const getBackgroundHoverColor = R.cond([
  [R.prop('inverted'), R.always(colors.whiteDark)],
  [R.prop('secondary'), R.always(colors.secondaryDark)],
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
    R.both(R.prop('inverted'), R.prop('secondary')),
    R.always(colors.secondary),
  ],
  [R.prop('inverted'), R.always(colors.primary)],
  [R.T, R.always(undefined)],
]);

const getBorder = R.ifElse(
  props => R.isNil(getBorderColor(props)),
  R.always('none'),
  props => R.always(`${getBorderWidth(props)} solid ${getBorderColor(props)}`),
);

const getColor = R.cond([
  [R.both(R.prop('inverted'), R.prop('secondary')), R.always(colors.secondary)],
  [R.prop('secondary'), R.always(colors.ivoryDark)],
  [R.T, R.always(colors.black)],
]);

const Button = styled.button`
  padding: ${props => props.accent ? '0.65rem 1rem 0.35rem 1rem' : '0.5rem 1rem'};
  background-color: ${getBackgroundColor};
  font-size: 1.2rem;
  font-family: ${props => props.accent ? fonts.accent : fonts.system};
  color: ${getColor};
  transition-duration: 0.25s;

  border: ${getBorder};
  border-radius: ${borders.radius};

  &:hover {
    cursor: pointer;
    background-color: ${getBackgroundHoverColor};
  }

  &:focus {
    outline: none;
  }
`;

export default (props: Props) => <Button {...props} />;
