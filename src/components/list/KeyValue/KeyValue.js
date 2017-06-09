/* @flow */
import React from 'react';
import styled from 'styled-components';

type Props = {};

const Wrapper = styled.div`

`;

const KeyValue = (props: Props) => <Wrapper {...props} />;

KeyValue.defaultProps = {
  outline: false,
};

export default KeyValue;
