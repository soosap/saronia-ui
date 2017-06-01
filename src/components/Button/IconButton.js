/* @flow */
import React from 'react';
import R from 'ramda';
import styled from 'styled-components';

import type { Breed, Magnitude } from '../../lib/types';
import { BreedEnum, MagnitudeEnum, Color } from '../../lib/constants';
import Button from './Button';
import { Icon } from '../Icon';

type Props = {
  accent?: boolean,
  circular?: false,
  compact?: false,
  icon: string,
  iconPosition?: 'left' | 'right',
  inverted?: boolean,
  onClick?: Function,
  pop?: 'active' | 'focus' | 'hover',
  size?: Magnitude,
  breed?: Breed,
};

const getPadding = R.cond([
  [R.propEq('radius', MagnitudeEnum.MINI), R.always(0)],
  [R.propEq('size', MagnitudeEnum.MINI), R.always('.2rem .3rem')],
  [R.propEq('size', MagnitudeEnum.TINY), R.always('.2rem .3rem')],
  [R.propEq('size', MagnitudeEnum.SMALL), R.always('.2rem .4rem')],
  [R.propEq('size', MagnitudeEnum.MEDIUM), R.always('.25rem .5rem')],
  [R.propEq('size', MagnitudeEnum.LARGE), R.always('.3rem .7rem')],
  [R.propEq('size', MagnitudeEnum.BIG), R.always('.35rem .75rem')],
  [R.propEq('size', MagnitudeEnum.HUGE), R.always('.4rem .9rem')],
  [R.propEq('size', MagnitudeEnum.MASSIVE), R.always('.5rem 1.2rem')],
  [R.T, R.always(R.always('.3rem .7rem'))],
]);

const getIconBackgroundColor = R.cond([
  [
    R.both(R.propEq('inverted', true), R.propEq('breed', BreedEnum.PRIMARY)),
    R.always(Color.PRIMARY),
  ],
  [
    R.both(R.propEq('inverted', true), R.propEq('breed', BreedEnum.SECONDARY)),
    R.always(Color.SECONDARY),
  ],
  [R.propEq('breed', BreedEnum.PRIMARY), R.always(Color.PRIMARY_DARKER)],
  [R.propEq('breed', BreedEnum.SECONDARY), R.always(Color.SECONDARY_DARKER)],
  [R.T, R.always(Color.GREY_STRONG)],
]);

const getIconFill = R.cond([
  [
    R.both(R.propEq('inverted', true), R.propEq('breed', BreedEnum.PRIMARY)),
    R.always(Color.WHITE),
  ],
  [
    R.both(R.propEq('inverted', true), R.propEq('breed', BreedEnum.SECONDARY)),
    R.always(Color.WHITE),
  ],
]);

const getIconFillHover = R.cond([
  [
    R.both(R.propEq('inverted', true), R.propEq('breed', BreedEnum.PRIMARY)),
    R.always(Color.WHITE_DARK),
  ],
  [
    R.both(R.propEq('inverted', true), R.propEq('breed', BreedEnum.SECONDARY)),
    R.always(Color.WHITE_DARK),
  ],
]);

const getIconFillActive = R.cond([
  [
    R.both(R.propEq('inverted', true), R.propEq('breed', BreedEnum.PRIMARY)),
    R.always(Color.IVORY_DARK),
  ],
  [
    R.both(R.propEq('inverted', true), R.propEq('breed', BreedEnum.SECONDARY)),
    R.always(Color.IVORY_DARK),
  ],
]);

const Wrapper = styled(Button)`
  padding: 0;
  align-items: stretch;

  svg {
    fill: ${getIconFill};
  }

  &:hover {
    svg {
      fill: ${getIconFillHover};
    }
  }

  &:active {
    svg {
      fill: ${getIconFillActive};
    }
  }
`;

const IconWrapper = styled.div`
  background-color: ${getIconBackgroundColor};
  padding: ${getPadding};
  display: flex;
  justify-content: center;
  align-items: center;
  order: ${props => (props.iconPosition === 'right' ? 1 : 0)};
`;

const TextWrapper = styled.div`
  padding: ${getPadding};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconButton = (props: Props) => (
  <Wrapper {...props}>
    <IconWrapper {...props}>
      <Icon
        {...R.merge(props, {
          svgPath: props.icon,
          inverted: !props.inverted,
        })}
      />
    </IconWrapper>
    <TextWrapper {...props}>
      {R.prop('children', props)}
    </TextWrapper>
  </Wrapper>
);

export default IconButton;
