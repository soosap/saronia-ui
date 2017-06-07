/* @flow */
import React from 'react';
import R from 'ramda';
import styled from 'styled-components';

import type { Size } from '../../lib/types';
import { SizeEnum } from '../../lib/constants';

type Props = {
  wordmark: boolean,
  size: Size,
};

const getWidth = R.cond([
  [
    R.both(R.propEq('wordmark', true), R.propEq('size', SizeEnum.MASSIVE)),
    R.always('48rem'),
  ],
  [
    R.both(R.propEq('wordmark', true), R.propEq('size', SizeEnum.HUGE)),
    R.always('36rem'),
  ],
  [
    R.both(R.propEq('wordmark', true), R.propEq('size', SizeEnum.BIG)),
    R.always('24rem'),
  ],
  [
    R.both(R.propEq('wordmark', true), R.propEq('size', SizeEnum.LARGE)),
    R.always('20.692rem'),
  ],
  [
    R.both(R.propEq('wordmark', true), R.propEq('size', SizeEnum.MEDIUM)),
    R.always('13.795rem'),
  ],
  [
    R.both(R.propEq('wordmark', true), R.propEq('size', SizeEnum.SMALL)),
    R.always('11.498rem'),
  ],
  [
    R.both(R.propEq('wordmark', true), R.propEq('size', SizeEnum.TINY)),
    R.always('9.2rem'),
  ],
  [
    R.both(R.propEq('wordmark', true), R.propEq('size', SizeEnum.MINI)),
    R.always('6.9rem'),
  ],
  [R.propEq('wordmark', true), R.always('13.795rem')],
  [R.propEq('size', SizeEnum.MASSIVE), R.always('16rem')],
  [R.propEq('size', SizeEnum.HUGE), R.always('12rem')],
  [R.propEq('size', SizeEnum.BIG), R.always('8rem')],
  [R.propEq('size', SizeEnum.LARGE), R.always('4.5rem')],
  [R.propEq('size', SizeEnum.MEDIUM), R.always('3rem')],
  [R.propEq('size', SizeEnum.SMALL), R.always('2.5rem')],
  [R.propEq('size', SizeEnum.TINY), R.always('2rem')],
  [R.propEq('size', SizeEnum.MINI), R.always('1.5rem')],
  [R.T, R.always('3rem')],
]);

const getImageSrc = R.cond([
  [
    R.both(
      R.propEq('wordmark', true),
      R.propSatisfies(
        R.contains(R.__, [
          SizeEnum.LARGE,
          SizeEnum.BIG,
          SizeEnum.HUGE,
          SizeEnum.MASSIVE,
        ]),
        'size',
      ),
    ),
    R.always('/wordmark@2x.png'),
  ],
  [R.propEq('wordmark', true), R.always('/wordmark.png')],
  [
    R.propSatisfies(
      R.contains(R.__, [
        SizeEnum.BIG,
        SizeEnum.HUGE,
        SizeEnum.MASSIVE,
      ]),
      'size',
    ),
    R.always('/logo@2x.png'),
  ],
  [R.T, R.always('/logo.png')],
]);

const Wrapper = styled.div`
  width: ${getWidth};
  display: flex;
  justify-content: center;
`;
const Image = styled.img`
  width:100%;
  height:100%;
`;

const Logo = (props: Props) =>
  <Wrapper {...props}>
    <Image src={getImageSrc(props)} alt="logo" />
  </Wrapper>;

export default Logo;
