/* @flow */
import React, { Children } from 'react';
import styled from 'styled-components';

import type { Breed } from '../../../lib/types';

type Props = {
  children: Children,
  vertical?: boolean,
  breed?: Breed,
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: ${props => (props.vertical ? 'column' : 'row')};
  margin-bottom: 1rem;
`;

const Checkboxes = (props: Props) => (
  <Wrapper {...props}>
    {React.Children.map(props.children, child =>
      React.cloneElement(child, {
        breed: props.breed,
        vertical: props.vertical,
      }),
    )}
  </Wrapper>
);

Checkboxes.defaultProps = {
  vertical: false,
};

export default Checkboxes;
