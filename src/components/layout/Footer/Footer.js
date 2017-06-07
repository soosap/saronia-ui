/* @flow */
import React from 'react';
import styled from 'styled-components';

import { Color } from '../../../lib/constants';

type Props = {};

const Footer = styled.footer`
  color: ${Color.WHITE};
  background-color: ${Color.Black.LIGHT};
  padding: 2rem;
  grid-row: [footer-start] / [footer-end];
`;

export default (props: Props) => <Footer {...props} />;
