/* @flow */
import React from 'react';
import styled from 'styled-components';

import { Color, Breakpoint } from '../../../lib/constants';

type Props = {};

const Footer = styled.footer`
  grid-area: footer;
  color: ${Color.GRAY};
  background-color: ${Color.Black.LIGHT};
  padding: 1rem 1rem 2.5rem;
  font-weight: 400;
  line-height: 1.5;

  @media (min-width: ${Breakpoint.BIG_PHONE}) {
    padding: 1.5rem 1.5rem 3rem;
  }
`;

export default (props: Props) => <Footer {...props} />;
