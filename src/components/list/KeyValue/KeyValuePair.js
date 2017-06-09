/* @flow */
import React from 'react';
import styled from 'styled-components';

type Props = {};

const Wrapper = styled.div`

`;

const KeyValuePair = (props: Props) => <Wrapper {...props} />;

KeyValuePair.defaultProps = {
  outline: false,
};

export default KeyValuePair;
