/* @flow */
import React from 'react';
import R from 'ramda';
import styled from 'styled-components';

import { Image as RawImage } from '../Image';
import { BORDER_RADIUS, SizeEnum } from '../../../lib/constants';
import type { Size } from '../../../lib/types';

type Props = {
  src?: string,
  size?: Size,
};

const getWidth = R.cond([
  [R.propEq('size', SizeEnum.MINI), R.always('25px')],
  [R.propEq('size', SizeEnum.TINY), R.always('30px')],
  [R.propEq('size', SizeEnum.SMALL), R.always('40px')],
  [R.propEq('size', SizeEnum.MEDIUM), R.always('50px')],
  [R.propEq('size', SizeEnum.LARGE), R.always('75px')],
  [R.propEq('size', SizeEnum.BIG), R.always('100px')],
  [R.propEq('size', SizeEnum.HUGE), R.always('125px')],
  [R.propEq('size', SizeEnum.MASSIVE), R.always('150px')],
  [R.T, R.always('50px')],
]);

const Wrapper = styled.div.attrs({
  className: 'avatar',
})`
  width: ${getWidth};
  height: ${getWidth};
  border-radius: ${BORDER_RADIUS};
  background-color: #9BC866;
  position: relative;
`;

const Image = styled(RawImage)`
  position: absolute;
  left: 0;
  bottom: 0;
`;

const Avatar = (props: Props) =>
  <Wrapper {...props}>
    <Image src={props.src} alt="avatar" width="100%" />
  </Wrapper>;

Avatar.defaultProps = {
  src: '/avatar_dugorim.png',
};

export default Avatar;
