/* @flow */
import React, { Children } from 'react';
import styled from 'styled-components';

import type { Breed } from '../../../lib/types';

type Props = {
  keyWidth?: string,
  children: Children,
  breed?: Breed,
  compact?: boolean,
};

const Wrapper = styled.div``;

const KeyValue = (props: Props) => (
  <Wrapper {...props}>
    {React.Children.map(props.children, child =>
      React.cloneElement(child, {
        keyWidth: child.props.keyWidth ? child.props.keyWidth : props.keyWidth,
        breed: props.breed,
        compact: props.compact,
      }),
    )}
  </Wrapper>
);

KeyValue.defaultProps = {
  keyWidth: '90px',
};

export default KeyValue;
