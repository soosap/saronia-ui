/* @flow */
import styled from 'styled-components';
import { darken } from 'polished';

import { Color } from '../../lib/constants';

const Link = styled.a`
  color: ${darken(0.07, Color.PRIMARY)};
  text-decoration: underline;
  cursor: pointer;
`;

export default Link;
