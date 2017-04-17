/* @flow */
import R from 'ramda';
import React from 'react';
import styled from 'styled-components';

import type { Size, Type } from '../../types';
import { Size, Color } from '../../assets/constants';
import { colors } from '../../assets/styles';

type Props = {
  icon: string,
  size?: Size,
  type?: Type,
};

const getFill = R.cond([
  [R.T, R.always()]
]);

const getWidth = R.cond([
  [R.propEq('size', Size.MINI), R.always('0.64rem')],
  [R.propEq('size', Size.TINY), R.always('0.72rem')],
  [R.propEq('size', Size.SMALL), R.always('0.84rem')],
  [R.propEq('size', Size.MEDIUM), R.always('1rem')],
  [R.propEq('size', Size.LARGE), R.always('1.3rem')],
  [R.propEq('size', Size.BIG), R.always('1.7rem')],
  [R.propEq('size', Size.HUGE), R.always('2.2rem')],
  [R.propEq('size', Size.MASSIVE), R.always('3rem')],
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
