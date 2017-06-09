/* @flow */
import React from 'react';
import R from 'ramda';
import styled from 'styled-components';
import { Breakpoint, Color, BORDER_RADIUS } from '../../../lib/constants';

type Props = {
  keyWidth?: string,
};

const Wrapper = styled.div.attrs({
  className: 'key-value-pair',
})`
  display: grid;
  grid-template-columns: ${R.prop('keyWidth')} 1fr;
  margin-bottom: .35rem;
  font-size: .9rem;
  border: 1px solid ${Color.GRAY};
  border-radius: ${BORDER_RADIUS};
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.08);

  @media (min-width: ${Breakpoint.TABLET}) {
      font-size: 1rem;
  }

  > * {
    padding: .3rem .5rem;
  }

  > *:first-child {
    background: linear-gradient(to bottom, ${Color.White
      .MODERATE} 0%, #f6f6f6 47%, #ededed 100%);
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
    text-shadow: 0px 1px 0px #fff;
  }

  > *:last-child {

  }
`;

const KeyValuePair = (props: Props) => <Wrapper {...props} />;

export default KeyValuePair;
