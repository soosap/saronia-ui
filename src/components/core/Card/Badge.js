/* @flow */
import React, { Children } from 'react';
import R from 'ramda';
import styled from 'styled-components';

import { PositionEnum, SizeSubsetEnum } from '../../../lib/constants';
import type { Position, SizeSubset } from '../../../lib/types';

type Props = {
  children: Children,
  position?: Position,
  size?: SizeSubset,
};

const getTopPosition = R.cond([
  [
    R.propSatisfies(
      R.contains(R.__, [
        PositionEnum.TOP_LEFT,
        PositionEnum.TOP_CENTER,
        PositionEnum.TOP_RIGHT,
      ]),
      'position',
    ),
    R.always('0'),
  ],
  [
    R.propSatisfies(
      R.contains(R.__, [PositionEnum.CENTER_LEFT, PositionEnum.CENTER_RIGHT]),
      'position',
    ),
    R.always('50%'),
  ],
  [
    R.propSatisfies(
      R.contains(R.__, [
        PositionEnum.BOTTOM_LEFT,
        PositionEnum.BOTTOM_CENTER,
        PositionEnum.BOTTOM_RIGHT,
      ]),
      'position',
    ),
    R.always('100%'),
  ],
  [R.T, R.always(0)],
]);

const getLeftPosition = R.cond([
  [
    R.propSatisfies(
      R.contains(R.__, [
        PositionEnum.TOP_LEFT,
        PositionEnum.CENTER_LEFT,
        PositionEnum.BOTTOM_LEFT,
      ]),
      'position',
    ),
    R.always('0'),
  ],
  [
    R.propSatisfies(
      R.contains(R.__, [PositionEnum.TOP_CENTER, PositionEnum.BOTTOM_CENTER]),
      'position',
    ),
    R.always('50%'),
  ],
  [
    R.propSatisfies(
      R.contains(R.__, [
        PositionEnum.TOP_RIGHT,
        PositionEnum.CENTER_RIGHT,
        PositionEnum.BOTTOM_RIGHT,
      ]),
      'position',
    ),
    R.always('100%'),
  ],
  [R.T, R.always(0)],
]);

const Wrapper = styled.div`
  position: absolute;
  top: ${getTopPosition};
  left: ${getLeftPosition};

  transform: translate(-50%, -50%);

  width: 50px;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  background-color: orange;
  border-radius: 25px;
`;

const Badge = ({ children, size, position }: Props) => {
  return (
    <Wrapper size={size} position={position}>
      {children}
    </Wrapper>
  );
};

Badge.defaultProps = {
  position: PositionEnum.TOP_RIGHT,
  size: SizeSubsetEnum.MEDIUM,
};

export default Badge;