/* @flow */
import R from 'ramda';
import React from 'react';
import styled from 'styled-components';

import type { Magnitude, Breed } from '../../types';
import { MagnitudeEnum, BreedEnum, Color } from '../../assets/constants';

type Props = {
  inverted?: boolean,
  size?: Magnitude,
  svgPath: string,
  type?: Breed,
};

const getFill = R.cond([
  [
    R.both(R.propEq('type', BreedEnum.PRIMARY), R.propEq('inverted', true)),
    R.always(Color.BLACK_TRANSPARENT_SEVERE),
  ],
  [
    R.both(R.propEq('type', BreedEnum.SECONDARY), R.propEq('inverted', true)),
    R.always(Color.IVORY_DARK),
  ],
  [R.propEq('inverted', true), R.always(Color.WHITE)],
  [R.propEq('type', BreedEnum.PRIMARY), R.always(Color.PRIMARY)],
  [R.propEq('type', BreedEnum.SECONDARY), R.always(Color.SECONDARY)],
  [R.T, R.always(Color.BLACK)],
]);

const getWidth = R.cond([
  [R.propEq('size', MagnitudeEnum.MINI), R.always('0.64rem')],
  [R.propEq('size', MagnitudeEnum.TINY), R.always('0.72rem')],
  [R.propEq('size', MagnitudeEnum.SMALL), R.always('0.84rem')],
  [R.propEq('size', MagnitudeEnum.MEDIUM), R.always('1rem')],
  [R.propEq('size', MagnitudeEnum.LARGE), R.always('1.6rem')],
  [R.propEq('size', MagnitudeEnum.BIG), R.always('2.4rem')],
  [R.propEq('size', MagnitudeEnum.HUGE), R.always('3.2rem')],
  [R.propEq('size', MagnitudeEnum.MASSIVE), R.always('4.5rem')],
  [R.T, R.always('1rem')],
]);

const Wrapper = styled.svg`
  display: inline-block;
  vertical-align: middle;
  width: ${getWidth};
  fill: ${getFill};
`;

const Icon = ({ svgPath, size, type, inverted }: Props) => {
  return (
    <Wrapper
      viewBox="0 0 1024 1024"
      size={size}
      type={type}
      inverted={inverted}
    >
      <path d={svgPath} />
    </Wrapper>
  );
};

// Icon.defaultProps = {
//   svgPath: 'path of saronia logo'
// };

export default (props: Props) => <Icon {...props} />;
