/* @flow */
import React from 'react';
import R from 'ramda';
import styled from 'styled-components';

import type { Magnitude, Breed } from '../../lib/types';
import { MagnitudeEnum, BreedEnum, Color } from '../../lib/constants';

type Props = {
  inverted?: boolean,
  size?: Magnitude,
  svgPath: string,
  type?: Breed,
  viewBox?: string,
  onClick?: Function,
};

const getFill = R.cond([
  [
    R.both(R.propEq('type', BreedEnum.PRIMARY), R.propEq('inverted', true)),
    R.always(Color.Black.TRANSPARENT),
  ],
  [
    R.both(R.propEq('type', BreedEnum.SECONDARY), R.propEq('inverted', true)),
    R.always(Color.White.LIGHT),
  ],
  [R.propEq('type', BreedEnum.PRIMARY), R.always(Color.PRIMARY)],
  [R.propEq('type', BreedEnum.SECONDARY), R.always(Color.SECONDARY)],
  [R.T, R.always(Color.BLACK)],
]);

const getWidth = R.cond([
  [R.propEq('size', MagnitudeEnum.MINI), R.always('0.64rem')],
  [R.propEq('size', MagnitudeEnum.TINY), R.always('0.72rem')],
  [R.propEq('size', MagnitudeEnum.SMALL), R.always('.9rem')],
  [R.propEq('size', MagnitudeEnum.MEDIUM), R.always('1.1rem')],
  [R.propEq('size', MagnitudeEnum.LARGE), R.always('1.4rem')],
  [R.propEq('size', MagnitudeEnum.BIG), R.always('1.8rem')],
  [R.propEq('size', MagnitudeEnum.HUGE), R.always('2.1rem')],
  [R.propEq('size', MagnitudeEnum.MASSIVE), R.always('2.6rem')],
  [R.T, R.always('1rem')],
]);

const getCursor = R.cond([
  [R.prop('onClick'), R.always('pointer')],
  [R.T, R.always('inherit')],
]);

const Wrapper = styled.svg.attrs({
  className: 'icon',
})`
  display: inline-block;
  vertical-align: middle;
  width: ${getWidth};
  fill: ${getFill};
  cursor: ${getCursor};
`;

const Icon = (props: Props) => (
  <Wrapper {...R.omit(['svgPath'], props)}>
    <path d={props.svgPath} />
  </Wrapper>
);

Icon.defaultProps = {
  // Todo for later...
  // svgPath: 'path of saronia logo',
  viewBox: '0 0 100 100'
};

export default (props: Props) => <Icon {...props} />;
