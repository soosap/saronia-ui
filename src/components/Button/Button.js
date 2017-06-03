/* @flow */
import React from 'react';
import R from 'ramda';

import RawButton from './RawButton';
import IconButton from './IconButton';

import type { Breed, Magnitude } from '../../lib/types';

export type Props =
  | {
      // default
      accent?: boolean,
      circular?: false,
      compact?: false,
      inverted?: boolean,
      iconLeft?: string,
      iconRight?: string,
      onClick?: Function,
      pop?: 'active' | 'focus' | 'hover',
      size?: Magnitude,
      breed?: Breed,
    }
  | {
      // circular
      accent?: boolean,
      circular: true,
      compact?: false,
      iconLeft?: false,
      iconRight?: false,
      inverted?: boolean,
      onClick?: Function,
      pop?: 'active' | 'focus' | 'hover',
      radius: Magnitude,
      size?: Magnitude,
      breed?: Breed,
    };

export default (props: Props) =>
  R.cond([
    [
      R.prop('iconLeft'),
      R.always(<IconButton {...R.omit(['iconRight'], props)} />),
    ],
    [
      R.prop('iconRight'),
      R.always(<IconButton {...R.omit(['iconLeft'], props)} />),
    ],
    [R.T, R.always(<RawButton {...props} />)],
  ])(props);
