/* @flow */
import React, { Children } from 'react';
import R from 'ramda';
import styled from 'styled-components';

import type { Breed } from '../../../lib/types';

type Props = {
  children: Children,
  name?: string,
  breed?: Breed,
};

const Wrapper = styled.label`
  display: flex;
`;

const RadioWrapper = styled.div`

`;

const Input = styled.input`

`;

const Circle = styled.div`
  border-radius: 100%;
`;

const Text = styled.span``;

const Radio = (props: Props) =>
  <Wrapper {...props}>
    <RadioWrapper>
      <Input type="radio" {...R.pick(['name', 'value', 'breed'])(props)} />
      <Circle />
    </RadioWrapper>
    <Text>{props.children}</Text>
  </Wrapper>;

export default Radio;
