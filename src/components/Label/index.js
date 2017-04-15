/* @flow */
import R from 'ramda';
import styled from 'styled-components';
import type { Position, Size } from '../../types';

import { colors, fonts, borders } from '../../assets/styles';

type Props = {
  tag?: boolean,
  arrow?: Position,
  size?: Size,
};

const getBackgroundColor = R.cond([
  [R.prop('tag'), R.always(colors.grey)],
  [R.T, R.always(colors.grey)],
]);

const getSize = R.cond([
  [R.propEq('size', 'mini'), R.always(fonts.sizes.mini)],
  [R.propEq('size', 'tiny'), R.always(fonts.sizes.tiny)],
  [R.propEq('size', 'small'), R.always(fonts.sizes.small)],
  [R.propEq('size', 'medium'), R.always(fonts.sizes.medium)],
  [R.propEq('size', 'large'), R.always(fonts.sizes.large)],
  [R.propEq('size', 'big'), R.always(fonts.sizes.big)],
  [R.propEq('size', 'huge'), R.always(fonts.sizes.huge)],
  [R.propEq('size', 'massive'), R.always(fonts.sizes.massive)],
]);

const Label = styled.label`
  padding:  0px 6px;
  display: inline-block;
  position: relative;
  background-color: ${getBackgroundColor};
  font-size: ${getSize};
  font-family: ${fonts.system};
  color: ${colors.black};
  border: none;
  border-radius: ${borders.radius};

  &:focus {
    outline: none;
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: ${props => props.arrow == 'right' ? '100%' : 0};
    height: 0;
    width: 0;
    border-width: ${props => props.arrow == 'right' ? fonts.sizes.small : 0};
    border-style: solid;
    border-color: ${getBackgroundColor};
    border-top-color:transparent;
    border-bottom-color:transparent;
    border-right-color:transparent;
 }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: ${props => props.arrow == 'left' ? '100%' : 0};
    height: 0;
    width: 0;
    border-width: ${props => props.arrow == 'left' ? '0.5rem' : 0};
    border-style: solid;
    border-color: ${getBackgroundColor};
    border-top-color:transparent;
    border-bottom-color:transparent;
    border-left-color:transparent;
  }
`;

export default Label;
