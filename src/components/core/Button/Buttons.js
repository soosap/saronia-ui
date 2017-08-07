/* @flow */
import React, { Children } from 'react';
import R from 'ramda';
import styled from 'styled-components';
import {
  BORDER_RADIUS,
  BreedEnum,
  SizeEnum,
  Color,
} from '../../../lib/constants';
import type { Breed, Size } from '../../../lib/types';

type Props = {
  accent?: boolean,
  breed?: Breed,
  children: Children,
  inverted?: boolean,
  size?: Size,
  vertical?: boolean,
};

const getButtonPadding = R.cond([
  [R.propEq('radius', SizeEnum.MINI), R.always(0)],
  [R.propEq('size', SizeEnum.MINI), R.always('.25rem .8rem .25rem .4rem')],
  [R.propEq('size', SizeEnum.TINY), R.always('.3rem .9rem .3rem .5rem')],
  [R.propEq('size', SizeEnum.SMALL), R.always('.35rem 1rem .35rem .6rem')],
  [R.propEq('size', SizeEnum.MEDIUM), R.always('.4rem 1.1rem .4rem .7rem')],
  [R.propEq('size', SizeEnum.LARGE), R.always('.45rem 1.1rem .45rem .7rem')],
  [R.propEq('size', SizeEnum.BIG), R.always('.5rem 1.15rem .5rem .75rem')],
  [R.propEq('size', SizeEnum.HUGE), R.always('.55rem 1.3rem .55rem .9rem')],
  [R.propEq('size', SizeEnum.MASSIVE), R.always('.6rem 1.5rem .6rem 1.2rem')],
  [R.T, R.always(R.always('.3rem .7rem'))],
]);

const getBorderColor = R.cond([
  [
    R.both(R.propEq('breed', BreedEnum.PRIMARY), R.propEq('inverted', true)),
    R.always(Color.PRIMARY),
  ],
  [
    R.both(R.propEq('breed', BreedEnum.PRIMARY), R.propEq('inverted', false)),
    R.always(Color.Black.TRANSPARENT),
  ],
  [
    R.both(R.propEq('breed', BreedEnum.SECONDARY), R.propEq('inverted', true)),
    R.always(Color.SECONDARY),
  ],
  [
    R.both(R.propEq('breed', BreedEnum.SECONDARY), R.propEq('inverted', false)),
    R.always(Color.White.STRONG),
  ],
  [R.T, R.always(Color.BLACK)],
]);

const getBorder = R.cond([
  [
    R.allPass([
      R.propEq('child', 'first'),
      R.propEq('inverted', true),
      R.propSatisfies(
        R.contains(R.__, ['top', 'right', 'bottom', 'left']),
        'position',
      ),
    ]),
    R.always('1px solid'),
  ],
  [
    R.allPass([
      R.propEq('child', 'middle'),
      R.propEq('inverted', true),
      R.propEq('vertical', true),
      R.propSatisfies(
        R.contains(R.__, ['right', 'bottom', 'left']),
        'position',
      ),
    ]),
    R.always('1px solid'),
  ],
  [
    R.allPass([
      R.propEq('child', 'middle'),
      R.propEq('inverted', true),
      R.propEq('vertical', false),
      R.propSatisfies(R.contains(R.__, ['top', 'right', 'bottom']), 'position'),
    ]),
    R.always('1px solid'),
  ],
  [
    R.allPass([
      R.propEq('child', 'last'),
      R.propEq('inverted', true),
      R.propEq('vertical', true),
      R.propSatisfies(
        R.contains(R.__, ['right', 'bottom', 'left']),
        'position',
      ),
    ]),
    R.always('1px solid'),
  ],
  [
    R.allPass([
      R.propEq('child', 'last'),
      R.propEq('inverted', true),
      R.propEq('vertical', false),
      R.propSatisfies(R.contains(R.__, ['top', 'right', 'bottom']), 'position'),
    ]),
    R.always('1px solid'),
  ],
  [
    R.allPass([
      R.propEq('child', 'middle'),
      R.propEq('inverted', false),
      R.propEq('vertical', true),
      R.propSatisfies(R.contains(R.__, ['top']), 'position'),
    ]),
    R.always('1px solid'),
  ],
  [
    R.allPass([
      R.propEq('child', 'last'),
      R.propEq('inverted', false),
      R.propEq('vertical', true),
      R.propSatisfies(R.contains(R.__, ['top']), 'position'),
    ]),
    R.always('1px solid'),
  ],
  [
    R.allPass([
      R.propEq('child', 'middle'),
      R.propEq('inverted', false),
      R.propEq('vertical', false),
      R.propSatisfies(R.contains(R.__, ['left']), 'position'),
    ]),
    R.always('1px solid'),
  ],
  [
    R.allPass([
      R.propEq('child', 'last'),
      R.propEq('inverted', false),
      R.propEq('vertical', false),
      R.propSatisfies(R.contains(R.__, ['left']), 'position'),
    ]),
    R.always('1px solid'),
  ],
]);

const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: ${props => (props.vertical && 'column') || 'row'};

  .link {
    text-decoration: none;
  }

  .button {
    padding: ${getButtonPadding};
  }

  > * {
    border: none;
    border-radius: 0;
    text-decoration: none;

    &:not(:first-child):not(:last-child) {
      border-radius: 0;
      border-top: ${props =>
        `${getBorder({
          child: 'middle',
          position: 'top',
          inverted: props.inverted,
          vertical: props.vertical,
        })} ${getBorderColor({
          inverted: props.inverted,
          breed: props.breed,
        })}`};
      border-right: ${props =>
        `${getBorder({
          child: 'middle',
          position: 'right',
          inverted: props.inverted,
          vertical: props.vertical,
        })} ${getBorderColor({
          inverted: props.inverted,
          breed: props.breed,
        })}`};
      border-bottom: ${props =>
        `${getBorder({
          child: 'middle',
          position: 'bottom',
          inverted: props.inverted,
          vertical: props.vertical,
        })} ${getBorderColor({
          inverted: props.inverted,
          breed: props.breed,
        })}`};
      border-left: ${props =>
        `${getBorder({
          child: 'middle',
          position: 'left',
          inverted: props.inverted,
          vertical: props.vertical,
        })} ${getBorderColor({
          inverted: props.inverted,
          breed: props.breed,
        })}`};
    }

    &:first-child {
      border-top-left-radius: ${BORDER_RADIUS};
      border-top-right-radius: ${p => (p.vertical ? BORDER_RADIUS : 0)};
      border-bottom-left-radius: ${p => (p.vertical ? 0 : BORDER_RADIUS)};
      border-bottom-right-radius: 0;
      border-top: ${props =>
        `${getBorder({
          child: 'first',
          position: 'top',
          inverted: props.inverted,
          vertical: props.vertical,
        })} ${getBorderColor({
          inverted: props.inverted,
          breed: props.breed,
        })}`};
      border-right: ${props =>
        `${getBorder({
          child: 'first',
          position: 'right',
          inverted: props.inverted,
          vertical: props.vertical,
        })} ${getBorderColor({
          inverted: props.inverted,
          breed: props.breed,
        })}`};
      border-bottom: ${props =>
        `${getBorder({
          child: 'first',
          position: 'bottom',
          inverted: props.inverted,
          vertical: props.vertical,
        })} ${getBorderColor({
          inverted: props.inverted,
          breed: props.breed,
        })}`};
      border-left: ${props =>
        `${getBorder({
          child: 'first',
          position: 'left',
          inverted: props.inverted,
          vertical: props.vertical,
        })} ${getBorderColor({
          inverted: props.inverted,
          breed: props.breed,
        })}`};
    }

    &:last-child {
      border-top-right-radius: ${p => (p.vertical ? 0 : BORDER_RADIUS)};
      border-top-left-radius: 0;
      border-bottom-right-radius: ${BORDER_RADIUS};
      border-bottom-left-radius: ${p => (p.vertical ? BORDER_RADIUS : 0)};
      border-top: ${props =>
        `${getBorder({
          child: 'last',
          position: 'top',
          inverted: props.inverted,
          vertical: props.vertical,
        })} ${getBorderColor({
          inverted: props.inverted,
          breed: props.breed,
        })}`};
      border-right: ${props =>
        `${getBorder({
          child: 'last',
          position: 'right',
          inverted: props.inverted,
          vertical: props.vertical,
        })} ${getBorderColor({
          inverted: props.inverted,
          breed: props.breed,
        })}`};
      border-bottom: ${props =>
        `${getBorder({
          child: 'last',
          position: 'bottom',
          inverted: props.inverted,
          vertical: props.vertical,
        })} ${getBorderColor({
          inverted: props.inverted,
          breed: props.breed,
        })}`};
      border-left: ${props =>
        `${getBorder({
          child: 'last',
          position: 'left',
          inverted: props.inverted,
          vertical: props.vertical,
        })} ${getBorderColor({
          inverted: props.inverted,
          breed: props.breed,
        })}`};
    }
  }
`;

const Buttons = (props: Props) =>
  <Wrapper {...props}>
    {React.Children.map(props.children, child =>
      React.cloneElement(child, {
        accent: props.accent,
        breed: props.breed,
        inverted: props.inverted,
        size: props.size,
      }),
    )}
  </Wrapper>;

Buttons.defaultProps = {
  vertical: false,
};

export default Buttons;
