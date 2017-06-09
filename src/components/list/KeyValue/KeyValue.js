/* @flow */
import React from 'react';
import styled from 'styled-components';

type Props = {};

const Wrapper = styled.div`
  background-color: yellow;
  width: 90%;
  padding-left: .2rem;

  .key-value-pair {
    margin-right: .2rem;
  }
`;

const KeyValue = (props: Props) => <Wrapper {...props} />;

KeyValue.defaultProps = {
  outline: false,
};

export default KeyValue;
