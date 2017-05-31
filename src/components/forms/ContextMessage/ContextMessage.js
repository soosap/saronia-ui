/* @flow */
import React from 'react';
import R from 'ramda';
import styled from 'styled-components';

import { Color } from '../../../lib/constants';
import type { Context } from '../../../lib/types';

type Props = {
  context: Context,
};

const ContextMessage = styled.div.attrs({
  className: 'context-message',
})`
  color: ${props => (props.context ?
    Color.Context[R.toUpper(props.context)] : 'inherit')};
  font-size: .7rem;
  margin-bottom: .2rem;
  margin-left: .05rem;
`;

export default (props: Props) => <ContextMessage {...props} />;
