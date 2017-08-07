/* @flow */
import React from 'react';
import R from 'ramda';
import styled from 'styled-components';

import RawButton, {
  getBackgroundColorActive,
  getBackgroundColorHover,
  getColor,
  getColorHover,
  getColorActive,
} from './RawButton';
import { Icon } from '../Icon';
import { BreedEnum, SizeEnum, Color } from '../../../lib/constants';
import type { Props } from './Button';

const getPadding = R.cond([
  [R.propEq('radius', SizeEnum.MINI), R.always(0)],
  [R.propEq('size', SizeEnum.MINI), R.always('.2rem .3rem')],
  [R.propEq('size', SizeEnum.TINY), R.always('.2rem .3rem')],
  [R.propEq('size', SizeEnum.SMALL), R.always('.2rem .4rem')],
  [R.propEq('size', SizeEnum.MEDIUM), R.always('.25rem .5rem')],
  [R.propEq('size', SizeEnum.LARGE), R.always('.3rem .7rem')],
  [R.propEq('size', SizeEnum.BIG), R.always('.35rem .75rem')],
  [R.propEq('size', SizeEnum.HUGE), R.always('.4rem .9rem')],
  [R.propEq('size', SizeEnum.MASSIVE), R.always('.5rem 1.2rem')],
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

const Wrapper = RawButton.extend`
  padding: 0;
  align-items: stretch;
  transition: all .6s;

  svg {
    fill: ${getColor};
  }

  &:hover {
    svg {
      fill: ${getColorHover};
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
      fill: ${getColorActive};
    }
  }
`;

const IconWrapper = styled.span`
  transition: all .6s;
  background-color: ${getIconBackgroundColor};
  padding: ${getPadding};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextWrapper = styled.span`
  transition: all .6s;
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
          <Icon
            svgPath={R.prop('iconLeft', props)}
            inverted={!props.inverted}
          />
        </IconWrapper>}
      <TextWrapper {...passthroughProps}>
        {R.prop('children', props)}
      </TextWrapper>
      {props.iconRight &&
        <IconWrapper {...passthroughProps}>
          <Icon
            svgPath={R.prop('iconRight', props)}
            inverted={!props.inverted}
          />
        </IconWrapper>}
    </Wrapper>
  );
};

export default IconButton;
