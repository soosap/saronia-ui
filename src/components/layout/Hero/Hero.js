/* @flow */
import React from 'react';
import R from 'ramda';
import styled from 'styled-components';

import { Color, Font, SizeSubsetEnum } from '../../../lib/constants';
import type { Breed, SizeSubset } from '../../../lib/types';

type Props = {
  breed?: Breed,
  size?: SizeSubset,
};

const getBackgroundColor = R.cond([
  [R.propEq('breed', 'primary'), R.always(Color.PRIMARY)],
  [R.propEq('breed', 'secondary'), R.always(Color.SECONDARY)],
  [R.T, R.always(Color.White.STRONG)],
]);

const getPadding = R.cond([
  [R.propEq('size', SizeSubsetEnum.SMALL), R.always('1.5rem')],
  [R.propEq('size', SizeSubsetEnum.LARGE), R.always('5rem 1.5rem')],
  [R.T, R.always('3rem 1.5rem')],
]);

const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: contain;
  background-color: ${getBackgroundColor};
  z-index: -1;
  position: fixed;
  left: 0;
  right: 0;
  padding: ${getPadding};
  top: 0;
  font-family: ${props => (props.accent ? Font.ACCENT : Font.SYSTEM)};

  + * {
    position: relative;
    margin-top: 160px;
  }
`;

const Hero = (props: Props) => <Wrapper {...props} />;

Hero.defaultProps = {};

export default Hero;
