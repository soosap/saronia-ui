/* @flow */
import R from 'ramda';
import React from 'react';
import styled from 'styled-components';

import type { Magnitude, Breed } from '../../types';
import { MagnitudeEnum, Color } from '../../assets/constants';

type Props = {
  icon: string,
  size?: Magnitude,
  type?: Breed,
};

const getFill = R.cond([
  [R.T, R.always(Color.BLACK)]
]);

const getWidth = R.cond([
  [R.propEq('size', MagnitudeEnum.MINI), R.always('0.64rem')],
  [R.propEq('size', MagnitudeEnum.TINY), R.always('0.72rem')],
  [R.propEq('size', MagnitudeEnum.SMALL), R.always('0.84rem')],
  [R.propEq('size', MagnitudeEnum.MEDIUM), R.always('1rem')],
  [R.propEq('size', MagnitudeEnum.LARGE), R.always('1.3rem')],
  [R.propEq('size', MagnitudeEnum.BIG), R.always('1.7rem')],
  [R.propEq('size', MagnitudeEnum.HUGE), R.always('2.2rem')],
  [R.propEq('size', MagnitudeEnum.MASSIVE), R.always('3rem')],
  [R.T, R.always('1rem')],
]);

const Wrapper = styled.svg`
  display: inline-block;
  vertical-align: middle;
  width: ${getWidth};
  fill: ${getFill};
`;

const Icon = ({ icon, size }: Props) => {

  return (
    <Wrapper viewBox='0 0 1024 1024' size={size}>
      <path d={icon} />
    </Wrapper>
  )
};

Icon.defaultProps = {

};

export default (props: Props) => <Icon {...props} />;
