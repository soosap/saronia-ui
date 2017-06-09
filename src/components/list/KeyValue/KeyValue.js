/* @flow */
import React, { Children } from 'react';
import styled from 'styled-components';

type Props = {
  keyWidth?: string,
  children: Children,
};

const Wrapper = styled.div`
  background-color: yellow;
  width: 90%;
  padding-left: .2rem;

  .key-value-pair {
    margin-right: .2rem;
  }
`;

const KeyValue = (props: Props) => (
  <Wrapper {...props}>
    {React.Children.map(props.children, child =>
      React.cloneElement(child, {
        keyWidth: child.props.keyWidth ? child.props.keyWidth : props.keyWidth,
      }),
    )}
  </Wrapper>
);

KeyValue.defaultProps = {
  keyWidth: '90px',
};

export default KeyValue;
