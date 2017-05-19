/* @flow */
import React from 'react';
import styled from 'styled-components';
import { BORDER_RADIUS, Color } from '../../lib/constants';

type Props = {};

const Input = styled.input`
  height: 2rem;
  border: 1px solid ${props => (props.invalid ? Color.SECONDARY_DARKER : 'black')};
  border-radius: ${BORDER_RADIUS};
  font-size: 1rem;
  padding-left: .3rem;
  margin-bottom: .2rem;
`;

export default (props: Props) => <Input {...props} />;
