/* @flow */
import React from 'react';
import R from 'ramda';
import styled, { keyframes } from 'styled-components';

import { Color } from '../../../lib/constants';
import type { Breed } from '../../../lib/types';

type Props = {
  breed: Breed,
};

const getBackgroundColor = R.cond([
  [R.propEq('breed', 'primary'), R.always(Color.PRIMARY)],
  [R.propEq('breed', 'secondary'), R.always(Color.SECONDARY)],
  [R.T, R.always(Color.BLACK)],
]);

const bounce = keyframes`
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1.0);
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  width: 70px;
  text-align: center;
`;

const Bounce = styled.div`
  width: 18px;
  height: 18px;
  background-color: ${getBackgroundColor};
  border-radius: 100%;
  display: inline-block;
  animation: ${bounce} 1.5s infinite ease-in-out both;
  animation-delay: ${props => props.animationDelay};
`;

const Spinner = (props: Props) => (
  <Wrapper {...props}>
    <Bounce {...props} animationDelay="-0.32s" />
    <Bounce {...props} animationDelay="-0.16s" />
    <Bounce {...props} />
  </Wrapper>
);

export default Spinner;
