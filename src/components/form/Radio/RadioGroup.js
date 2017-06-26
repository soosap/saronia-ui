/* @flow */
import React, { Children } from 'react';
import styled from 'styled-components';

import type { Breed } from '../../../lib/types';

type Props = {
  children: Children,
  name: string,
  vertical?: boolean,
  breed?: Breed,
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
        vertical: props.vertical,
      }),
    )}
  </Wrapper>
);

RadioGroup.defaultProps = {
  vertical: false,
};

export default RadioGroup;
