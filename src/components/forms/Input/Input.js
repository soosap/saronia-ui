/* @flow */
import React from 'react';
import styled from 'styled-components';
import { BORDER_RADIUS, Color } from '../../../lib/constants';

import type { Context } from '../../../lib/types';

type Props = {
  context: Context,
};

const Input = styled.input`
  height: 2rem;
  border: 1px solid ${props => (props.invalid ? Color.Context.DANGER : 'black')};
  border-radius: ${BORDER_RADIUS};
  font-size: 1rem;
  padding-left: .3rem;
  margin-bottom: .2rem;
`;

export default (props: Props) => <Input {...props} />;
