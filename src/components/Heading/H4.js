/* @flow */
import React from 'react';
import styled from 'styled-components';
import { Font } from '../../assets/constants';

type Props = {
  accent?: boolean,
  transform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase',
  decoration?: 'none' | 'underline' | 'overline' | 'line-through',
};

const H4 = styled.h4`
  font-family: ${props => (props.accent ? Font.ACCENT : Font.SYSTEM)};
  font-weight: 400;
  text-transform: ${props => (props.transform ? props.transform : 'inherit')};
  text-decoration: ${props => (props.decoration ? props.decoration : 'inherit')};
  margin: .2rem 0;
`;

export default (props: Props) => <H4 {...props} />;
