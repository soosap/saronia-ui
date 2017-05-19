/* @flow */
import React from 'react';
import styled from 'styled-components';

import { getBoxShadow, getBoxShadowOnFocus } from './utils';
import { BORDER_RADIUS } from '../../../lib/constants';

type Props = {
  rows?: string,
  cols?: string,
};

const TextArea = styled.textarea`
  outline: none;
  border: none;

  line-height: 1.6rem;
  vertical-align: middle;
  border-radius: ${BORDER_RADIUS};
  font-size: 1rem;
  padding: .25rem .5rem;
  margin-bottom: .2rem;

  box-shadow: ${getBoxShadow};
  transition: box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);

  &:focus {
    box-shadow: ${getBoxShadowOnFocus};
  }
`;

export default (props: Props) => <TextArea {...props} />;
