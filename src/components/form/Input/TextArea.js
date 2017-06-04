/* @flow */
import React from 'react';
import styled from 'styled-components';

import { BORDER_RADIUS, Color } from '../../../lib/constants';

type Props = {
  rows?: string,
  cols?: string,
};

const TextArea = styled.textarea`
  display: inline-flex;
  outline: none;
  border: 1px solid transparent;
  line-height: 2rem;
  vertical-align: middle;
  border-radius: ${BORDER_RADIUS};
  font-size: 1rem;
  padding: 0 .5rem;
  margin-bottom: .2rem;
  box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.1);
  border-color: #dbdbdb;
  transition: box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);

  &::placeholder {
    color: ${Color.Gray.STRONG};
  }

  &:hover {
    border-color: #b5b5b5;
  }

  &:active, &:focus {
    border-color: ${Color.PRIMARY};
  }
`;

TextArea.defaultProps = {
  rows: '3',
};

export default (props: Props) => <TextArea {...props} />;
