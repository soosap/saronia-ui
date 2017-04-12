/* @flow */
import R from 'ramda';
import styled from 'styled-components';

import { colors, fonts } from '../../assets/styles';

type Props = {
  inverted?: boolean,
  accent?: boolean,
  secondary?: boolean,
};

const getBackgroundColor = R.cond([
  [
    R.both(
      R.propEq('secondary', true),
      R.propEq('inverted', true)
    ),
    R.always(colors.secondaryInverted),
  ],
  [
    R.propEq('secondary', true),
    R.always(colors.secondary)
  ],
  [
    R.both(
      R.propEq('primary', true),
      R.propEq('inverted', true)
    ),
    R.always(colors.primaryInverted),
  ],
  [R.T, R.always(colors.primary)],
]);

const getBackgroundHoverColor = R.cond([
  [R.propEq('secondary', true), R.always(colors.secondaryDark)],
  [R.T, R.always(colors.primaryDark)],
]);

const Button = styled.button`
  padding: ${props => props.accent ? '0.65rem 1rem 0.35rem 1rem' : '0.5rem 1rem'};
  background-color: ${getBackgroundColor};
  border-radius: 3px;
  border: none;
  font-size: 1.2rem;
  font-family: ${props => props.accent ? fonts.accent : fonts.system};
  color: ${props => props.secondary ? colors.white : colors.black};
  transition-duration: 0.5s;

  &:hover {
    cursor: pointer;
    background-color: ${getBackgroundHoverColor};
  }

  &:focus {
    outline: none;
  }
`;

export default Button;
