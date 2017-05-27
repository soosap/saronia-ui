/* @flow */
import React from 'react';
import styled from 'styled-components';

import { BORDER_RADIUS, Color } from '../../../lib/constants';
import type { Context } from '../../../lib/types';

type Props = {
  context?: Context,
};

const Input = styled.input`
  display: inline-flex;
  font-size: 1rem;
  padding: 0 .5rem;
  margin-bottom: .5rem;
  height: 2rem;
  line-height: 2rem;
  vertical-align: middle;
  outline: none;
  border: 1px solid transparent;
  border-radius: ${BORDER_RADIUS};
  border-color: #dbdbdb;
  box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.1);
  transition: box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);

  &::placeholder {
    color: ${Color.GREY_VERY_STRONG};
  }

  &:hover {
    border-color: #b5b5b5;
  }

  &:active, &:focus {
    border-color: ${Color.PRIMARY};
  }
`;

export default (props: Props) => <Input {...props} />;
