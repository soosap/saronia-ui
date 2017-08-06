/* @flow */
import React, { Children } from 'react';
import R from 'ramda';
import styled from 'styled-components';

import { NAVIGATION_HEIGHT } from '../Navigation/Navigation';
import { Color, Font, SizeSubsetEnum } from '../../../lib/constants';
import type { Theme, SizeSubset } from '../../../lib/types';

type Props = {
  theme?: Theme,
  size?: SizeSubset,
  sticky?: boolean,
  children: Children,
  hasNavigation?: boolean,
};

const getBackgroundColor = R.cond([
  [R.propEq('theme', 'primary'), R.always(Color.PRIMARY)],
  [R.propEq('theme', 'secondary'), R.always(Color.SECONDARY)],
  [R.T, R.always(Color.White.STRONG)],
]);

const getHeight = R.cond([
  [R.propEq('size', SizeSubsetEnum.SMALL), R.always('7.5rem')],
  [R.propEq('size', SizeSubsetEnum.LARGE), R.always('15rem')],
  [R.T, R.always('11.25rem')],
]);

const getStickyTop = R.cond([
  [R.propEq('hasNavigation', true), R.always(NAVIGATION_HEIGHT)],
  [R.T, R.always('0')],
]);

const Wrapper = styled.header`
  grid-area: header;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: contain;
  background-color: ${getBackgroundColor};
  position: ${props => (props.sticky ? 'sticky' : 'inherit')};
  height: ${getHeight};
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  top: ${getStickyTop};
  font-family: ${props => (props.accent ? Font.ACCENT : Font.SYSTEM)};
  z-index: 0;
`;

const Hero = (props: Props) => <Wrapper {...props} />;

Hero.defaultProps = {
  hasNavigation: false,
};

export default Hero;
