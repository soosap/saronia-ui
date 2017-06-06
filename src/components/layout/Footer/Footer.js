/* @flow */
import styled from 'styled-components';

import { Color } from '../../../lib/constants';

const Footer = styled.footer`
  color: ${Color.WHITE};
  background-color: ${Color.Black.LIGHT};
  padding: 2rem;
  grid-row: [footer-start] / [footer-end];
`;

export default Footer;
