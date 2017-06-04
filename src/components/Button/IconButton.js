/* @flow */
import React from 'react';
import R from 'ramda';
import styled from 'styled-components';

import RawButton, {
  getBackgroundColorActive,
  getBackgroundColorHover,
} from './RawButton';
import { Icon } from '../Icon';
import { BreedEnum, MagnitudeEnum, Color } from '../../lib/constants';
import type { Props } from './Button';

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
  [R.propEq('breed', BreedEnum.PRIMARY), R.always(Color.Primary.DARK)],
  [R.propEq('breed', BreedEnum.SECONDARY), R.always(Color.Secondary.DARK)],
  [R.T, R.always(Color.Gray.MODERATE)],
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

const Wrapper = RawButton.withComponent('div').extend`
  padding: 0;
  align-items: stretch;

  svg {
    fill: ${getIconFill};
  }

  &:hover {
    svg {
      fill: ${getIconFillHover};
    }

    span {
      background-color: ${getBackgroundColorHover};
    }
  }

  &:active {
    span {
      background-color: ${getBackgroundColorActive};
    }

    svg {
      fill: ${getIconFillActive};
    }
  }
`;

const IconWrapper = styled.span`
  background-color: ${getIconBackgroundColor};
  padding: ${getPadding};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextWrapper = styled.span`
  padding: ${getPadding};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconButton = (props: Props) => {
  const passthroughProps = R.omit(['onClick', 'iconLeft', 'iconRight'], props);

  return (
    <Wrapper {...props}>
      {props.iconLeft &&
        <IconWrapper {...passthroughProps}>
          <Icon svgPath={props.iconLeft} inverted={!props.inverted} />
        </IconWrapper>}
      <TextWrapper {...passthroughProps}>
        {R.prop('children', props)}
      </TextWrapper>
      {props.iconRight &&
        <IconWrapper {...passthroughProps}>
          <Icon svgPath={props.iconRight} inverted={!props.inverted} />
        </IconWrapper>}
    </Wrapper>
  );
};

export default IconButton;
