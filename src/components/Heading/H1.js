/* @flow */
import React from 'react';
import styled from 'styled-components';
import { Font } from '../../lib/constants';

type Props = {
  accent?: boolean,
  transform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase',
  decoration?: 'none' | 'underline' | 'overline' | 'line-through',
};

const H1 = styled.h1`
  font-family: ${props => (props.accent ? Font.ACCENT : Font.SYSTEM)};
  font-weight: 400;
  text-transform: ${props => (props.transform ? props.transform : 'inherit')};
  text-decoration: ${props => (props.decoration ? props.decoration : 'inherit')};
  margin: 1rem 0;
`;

export default (props: Props) => <H1 {...props} />;
