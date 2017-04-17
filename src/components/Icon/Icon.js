/* @flow */
import R from 'ramda';
import React from 'react';
import styled from 'styled-components';

import type { Size, Type } from '../../types';
import { SizeEnum } from '../../assets/constants';

type Props = {
  icon: string,
  size?: Size,
  type?: Type,
};

const getWidth = R.cond([
  [R.propEq('size', SizeEnum.MINI), R.always('0.64rem')],
  [R.propEq('size', SizeEnum.TINY), R.always('0.72rem')],
  [R.propEq('size', SizeEnum.SMALL), R.always('0.84rem')],
  [R.propEq('size', SizeEnum.MEDIUM), R.always('1rem')],
  [R.propEq('size', SizeEnum.LARGE), R.always('1.3rem')],
  [R.propEq('size', SizeEnum.BIG), R.always('1.7rem')],
  [R.propEq('size', SizeEnum.HUGE), R.always('2.2rem')],
  [R.propEq('size', SizeEnum.MASSIVE), R.always('3rem')],
  [R.T, R.always('1rem')],
]);

const Wrapper = styled.svg`
  display: inline-block;
  vertical-align: middle;
  width: ${getWidth};
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
