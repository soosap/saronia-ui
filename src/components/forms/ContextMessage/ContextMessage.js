/* @flow */
import React from 'react';
import R from 'ramda';
import styled from 'styled-components';

import { Color, ContextEnum } from '../../../lib/constants';
import type { Context } from '../../../lib/types';

type Props = {
  context: Context,
};

const ContextMessage = styled.div`
  color: ${props => Color.Context[R.toUpper(props.context)]};
  font-size: .7rem;
  margin-bottom: .2rem;
  margin-left: .1rem;
`;

export default (props: Props) => <ContextMessage {...props} />;
