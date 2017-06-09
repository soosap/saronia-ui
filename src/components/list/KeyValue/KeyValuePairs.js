/* @flow */
import React from 'react';
import styled from 'styled-components';

type Props = {};

const Wrapper = styled.div`

`;

const KeyValuePairs = (props: Props) => <Wrapper {...props} />;

KeyValuePairs.defaultProps = {
  outline: false,
};

export default KeyValuePairs;
