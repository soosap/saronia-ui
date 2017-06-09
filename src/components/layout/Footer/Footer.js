/* @flow */
import React from 'react';
import styled from 'styled-components';

import { Color } from '../../../lib/constants';

type Props = {};

const Footer = styled.footer`
  grid-area: footer;
  color: ${Color.GRAY};
  background-color: ${Color.Black.LIGHT};
  padding: 1.5rem 1.5rem 3rem;
  font-weight: 400;
  line-height: 1.5;
`;

export default (props: Props) => <Footer {...props} />;
