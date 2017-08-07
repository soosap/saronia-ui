/* @flow */
import React, { Children } from 'react';
import styled from 'styled-components';

import type { Breed } from '../../../lib/types';

type Props = {
  children: Children,
  name: string,
  breed?: Breed,
  inverted?: boolean,
  vertical?: boolean,
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: ${props => (props.vertical ? 'column' : 'row')};
  flex-wrap: wrap;
  margin-bottom: 1rem;
`;

const RadioGroup = (props: Props) => (
  <Wrapper {...props}>
    {React.Children.map(props.children, child =>
      React.cloneElement(child, {
        name: props.name,
        breed: props.breed,
        inverted: props.inverted,
        vertical: props.vertical,
      }),
    )}
  </Wrapper>
);

RadioGroup.defaultProps = {
  vertical: false,
  inverted: false,
};

export default RadioGroup;
