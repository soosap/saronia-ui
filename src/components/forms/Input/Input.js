/* @flow */
import React from 'react';
import styled from 'styled-components';

import { getBoxShadow, getBoxShadowOnFocus } from './utils';
import { BORDER_RADIUS, Color } from '../../../lib/constants';
import type { Context } from '../../../lib/types';

type Props = {
  context?: Context,
};

const Input = styled.input`
  height: 2rem;
  outline: none;
  border: none;
  line-height: 2rem;
  vertical-align: middle;
  border-radius: ${BORDER_RADIUS};
  font-size: 1rem;
  padding: 0 .5rem;
  margin-bottom: .2rem;

  box-shadow: ${getBoxShadow};
  transition: box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);

  &::placeholder {
    color: ${Color.GREY_VERY_STRONG};
  }

  &:hover {
    border-color: #b5b5b5;
  }

  &:focus {
    box-shadow: ${getBoxShadowOnFocus};
  }
`;

export default (props: Props) => <Input {...props} />;
