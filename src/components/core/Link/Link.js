/* @flow */
import styled from 'styled-components';
import R from 'ramda';

import { Color } from '../../../lib/constants';

const getColor = R.cond([
  [R.propEq('breed', 'primary'), R.always(Color.PRIMARY)],
  [R.propEq('breed', 'secondary'), R.always(Color.Secondary.LIGHT)],
  [R.T, R.always(Color.BLACK)],
]);

const getColorHover = R.cond([
  [R.propEq('breed', 'primary'), R.always(Color.Primary.DARKER)],
  [R.propEq('breed', 'secondary'), R.always(Color.Secondary.DARKER)],
  [R.T, R.always(Color.Black.STRONG)],
]);

const Link = styled.a.attrs({
  className: 'link',
})`
  color: ${getColor};
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: ${getColorHover};
  }
`;

export default Link;
