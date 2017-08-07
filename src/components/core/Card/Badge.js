/* @flow */
import React, { Children } from 'react';
import R from 'ramda';
import styled from 'styled-components';

import {
  PositionEnum,
  SizeEnum,
  Color,
  BreedEnum,
} from '../../../lib/constants';
import type { Position, Size, Breed } from '../../../lib/types';

type Props = {
  children: Children,
  position?: Position,
  size?: Size,
  breed?: Breed,
  inverted?: boolean,
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

const getWidth = R.cond([
  [R.propEq('size', SizeEnum.MINI), R.always('10px')],
  [R.propEq('size', SizeEnum.TINY), R.always('20px')],
  [R.propEq('size', SizeEnum.SMALL), R.always('25px')],
  [R.propEq('size', SizeEnum.MEDIUM), R.always('30px')],
  [R.propEq('size', SizeEnum.LARGE), R.always('45px')],
  [R.propEq('size', SizeEnum.BIG), R.always('60px')],
  [R.propEq('size', SizeEnum.HUGE), R.always('75px')],
  [R.propEq('size', SizeEnum.MASSIVE), R.always('100px')],
  [R.T, R.always('50px')],
]);

const getBackgroundColor = R.cond([
  [R.propEq('breed', BreedEnum.PRIMARY), R.always(Color.White.STRONG)],
  [R.propEq('breed', BreedEnum.SECONDARY), R.always(Color.White.STRONG)],
  [R.T, R.always(Color.WHITE)],
]);

const getBorder = R.cond([
  [
    R.propEq('breed', BreedEnum.PRIMARY),
    R.always(`2px solid ${Color.Primary.DARKER}`),
  ],
  [
    R.propEq('breed', BreedEnum.SECONDARY),
    R.always(`2px solid ${Color.Secondary.DARKER}`),
  ],
  [R.propEq('inverted', true), R.always(`2px solid ${Color.Gray.LIGHT}`)],
  [R.T, R.always(`1px solid ${Color.Gray.LIGHT}`)],
]);

const getBorderRadiusCorrection = R.cond([
  [R.propEq('breed', BreedEnum.PRIMARY), R.always('4px')],
  [R.propEq('breed', BreedEnum.SECONDARY), R.always('4px')],
  [R.T, R.always('2px')],
]);

const Wrapper = styled.div`
  position: absolute;
  top: ${getTopPosition};
  left: ${getLeftPosition};
  z-index: 2;

  transform: translate(-50%, -50%);

  width: ${getWidth};
  height: ${getWidth};
  color: ${Color.BLACK};
  background-color: ${getBackgroundColor};
  border: ${getBorder};
  border-radius: calc((${getWidth} + ${getBorderRadiusCorrection})/2);

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Badge = ({ children, size, position, breed, inverted }: Props) => {
  return (
    <Wrapper size={size} position={position} breed={breed} inverted={inverted}>
      {children}
    </Wrapper>
  );
};

Badge.defaultProps = {
  position: PositionEnum.TOP_RIGHT,
  size: SizeEnum.MEDIUM,
};

export default Badge;
