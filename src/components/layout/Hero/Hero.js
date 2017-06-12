/* @flow */
import React from 'react';
import R from 'ramda';
import styled from 'styled-components';

import { Color, Font } from '../../../lib/constants';

type Props = {
  backgroundImage?: string,
};

const getHeight = R.cond([
  [R.T, R.always('100px')],
]);

const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: contain;
  background-color: ${Color.White.STRONG};
  z-index: -1;
  position: fixed;
  left: 0;
  right: 0;
  height: ${getHeight};
  top: 0;
  font-family: ${props => props.accent ? Font.ACCENT : Font.SYSTEM};

  + * {
    position: relative;
    margin-top: 160px;
    background-color: white;
  }
`;

const Hero = (props: Props) => <Wrapper {...props} />;

Hero.defaultProps = {};

export default Hero;
