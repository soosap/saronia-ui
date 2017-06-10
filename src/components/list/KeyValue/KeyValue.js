/* @flow */
import React, { Children } from 'react';
import styled from 'styled-components';

import type { Breed } from '../../../lib/types';

type Props = {
  keyWidth?: string,
  children: Children,
  breed?: Breed,
};

const Wrapper = styled.div`
  padding-left: .35rem;

  .key-value-pair {
    margin-right: .35rem;
  }
`;

const KeyValue = (props: Props) => (
  <Wrapper {...props}>
    {React.Children.map(props.children, child =>
      React.cloneElement(child, {
        keyWidth: child.props.keyWidth ? child.props.keyWidth : props.keyWidth,
        breed: props.breed,
      }),
    )}
  </Wrapper>
);

KeyValue.defaultProps = {
  keyWidth: '90px',
};

export default KeyValue;
