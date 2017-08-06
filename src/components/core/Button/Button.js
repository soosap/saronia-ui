/* @flow */
import React, { Children } from 'react';
import R from 'ramda';
import type { Theme, Size } from '../../../lib/types';

import RawButton from './RawButton';
import IconButton from './IconButton';

export type DefaultButtonProps = {
  accent?: boolean,
  circular?: false,
  compact?: false,
  inverted?: boolean,
  iconLeft?: string,
  iconRight?: string,
  onClick?: Function,
  pop?: 'active' | 'focus' | 'hover',
  size?: Size,
  theme?: Theme,
  children?: string | Children,
};

export type CircularButtonProps = {
  accent?: boolean,
  circular: true,
  compact?: false,
  inverted?: boolean,
  onClick?: Function,
  pop?: 'active' | 'focus' | 'hover',
  radius: Size,
  size?: Size,
  theme?: Theme,
  children?: string | Children,
};

export type Props = DefaultButtonProps | CircularButtonProps;

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
    [
      R.T,
      R.always(
        <RawButton {...props}>
          {React.Children.map(
            props.children,
            child =>
              React.isValidElement(child)
                ? React.cloneElement(child, {
                  accent: props.accent,
                  theme: props.theme,
                  inverted: !props.inverted,
                  size: props.size,
                })
                : child,
          )}
        </RawButton>,
      ),
    ],
  ])(props);
