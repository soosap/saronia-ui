/* @flow */
import React, { Children } from 'react';
import styled from 'styled-components';
import { Breakpoint } from '../../../lib/constants';

type Props = {
  pairs?: number,
  keyWidth?: string,
  children: Children,
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto;

  @media (min-width: ${Breakpoint.BIG_PHONE}) {
    grid-template-columns: ${props => '1fr '.repeat(props.pairs - 1)};
  }

  @media (min-width: ${Breakpoint.TABLET}) {
    grid-template-columns: ${props => '1fr '.repeat(props.pairs)};
  }
`;

const KeyValuePairs = (props: Props) => (
  <Wrapper {...props}>
    {React.Children.map(props.children, child =>
      React.cloneElement(child, {
        keyWidth: child.props.keyWidth ? child.props.keyWidth : props.keyWidth,
      }),
    )}
  </Wrapper>
);

KeyValuePairs.defaultProps = {
  pairs: 2,
};

export default KeyValuePairs;
