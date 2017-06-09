/* @flow */
import React from 'react';
import R from 'ramda';
import styled from 'styled-components';
import { Breakpoint } from '../../../lib/constants';

type Props = {
  keyWidth?: string,
};

const Wrapper = styled.div.attrs({
  className: 'key-value-pair',
})`
  display: grid;
  grid-template-columns: ${R.prop('keyWidth')} 1fr;
  margin-bottom: .2rem;
  font-size: .9rem;

  @media (min-width: ${Breakpoint.TABLET}) {
      font-size: 1rem;
  }

  > *:first-child {
    background-color: orange;
  }

  > *:last-child {
    background-color: green;
  }
`;

const KeyValuePair = (props: Props) => <Wrapper {...props} />;

export default KeyValuePair;
