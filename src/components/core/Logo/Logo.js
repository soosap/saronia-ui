/* @flow */
import React from 'react';
import R from 'ramda';

import { Image } from '../../core';
import type { Size } from '../../../lib/types';
import { SizeEnum } from '../../../lib/constants';

type Props = {
  wordmark: boolean,
  size: Size,
  black?: boolean,
};

const getWidth = R.cond([
  [
    R.both(R.propEq('wordmark', true), R.propEq('size', SizeEnum.MASSIVE)),
    R.always('725px'),
  ],
  [
    R.both(R.propEq('wordmark', true), R.propEq('size', SizeEnum.HUGE)),
    R.always('580px'),
  ],
  [
    R.both(R.propEq('wordmark', true), R.propEq('size', SizeEnum.BIG)),
    R.always('464px'),
  ],
  [
    R.both(R.propEq('wordmark', true), R.propEq('size', SizeEnum.LARGE)),
    R.always('348px'),
  ],
  [
    R.both(R.propEq('wordmark', true), R.propEq('size', SizeEnum.MEDIUM)),
    R.always('290px'),
  ],
  [
    R.both(R.propEq('wordmark', true), R.propEq('size', SizeEnum.SMALL)),
    R.always('232px'),
  ],
  [
    R.both(R.propEq('wordmark', true), R.propEq('size', SizeEnum.TINY)),
    R.always('174px'),
  ],
  [
    R.both(R.propEq('wordmark', true), R.propEq('size', SizeEnum.MINI)),
    R.always('116px'),
  ],
  [R.propEq('wordmark', true), R.always('174px')],
  [R.propEq('size', SizeEnum.MASSIVE), R.always('150px')],
  [R.propEq('size', SizeEnum.HUGE), R.always('120px')],
  [R.propEq('size', SizeEnum.BIG), R.always('96px')],
  [R.propEq('size', SizeEnum.LARGE), R.always('72px')],
  [R.propEq('size', SizeEnum.MEDIUM), R.always('60px')],
  [R.propEq('size', SizeEnum.SMALL), R.always('48px')],
  [R.propEq('size', SizeEnum.TINY), R.always('36px')],
  [R.propEq('size', SizeEnum.MINI), R.always('24px')],
  [R.T, R.always('60px')],
]);

const getImageSrc = R.cond([
  [
    R.allPass([
      R.propEq('black', true),
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
    ]),
    R.always('/logo_wordmark_black@2x.png'),
  ],
  [
    R.allPass([
      R.propEq('black', true),
      R.propSatisfies(
        R.contains(R.__, [
          SizeEnum.LARGE,
          SizeEnum.BIG,
          SizeEnum.HUGE,
          SizeEnum.MASSIVE,
        ]),
        'size',
      ),
    ]),
    R.always('/logo_symbol_black@2x.png'),
  ],
  [
    R.both(
      R.propEq('black', true),
      R.propEq('wordmark', true),
    ),
    R.always('/logo_wordmark_black.png'),
  ],
  [R.propEq('black', true), R.always('/logo_symbol_black.png')],
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
    R.always('/logo_wordmark@2x.png'),
  ],
  [R.propEq('wordmark', true), R.always('/logo_wordmark.png')],
  [
    R.propSatisfies(
      R.contains(R.__, [SizeEnum.BIG, SizeEnum.HUGE, SizeEnum.MASSIVE]),
      'size',
    ),
    R.always('/logo_symbol@2x.png'),
  ],
  [R.T, R.always('/logo_symbol.png')],
]);

const Logo = (props: Props) =>
  <Image
    {...props}
    alt="logo"
    src={getImageSrc(props)}
    width={getWidth(props)}
  />;

export default Logo;
