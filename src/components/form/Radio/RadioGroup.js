/* @flow */
import React, { Children } from 'react';
import styled from 'styled-components';

import type { Theme } from '../../../lib/types';

type Props = {
  children: Children,
  name: string,
  theme?: Theme,
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
        theme: props.theme,
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
