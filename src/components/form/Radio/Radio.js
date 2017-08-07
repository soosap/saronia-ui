/* @flow */
import React, { Children } from 'react';
import R from 'ramda';
import styled from 'styled-components';

import { Color, BreedEnum } from '../../../lib/constants';
import type { Breed } from '../../../lib/types';

type Props = {
  children: Children,
  name?: string,
  breed?: Breed,
  disabled?: boolean,
  inverted?: boolean,
};

const getBackgroundColor = R.cond([
  [R.propEq('inverted', true), R.always(Color.Black.LIGHT)],
  [R.propEq('breed', BreedEnum.PRIMARY), R.always(Color.PRIMARY)],
  [R.propEq('breed', BreedEnum.SECONDARY), R.always(Color.SECONDARY)],
  [R.T, R.always(Color.WHITE)],
]);

const getInnerCircleFillColor = R.cond([
  [
    R.both(R.propEq('breed', BreedEnum.PRIMARY), R.propEq('inverted', true)),
    R.always(Color.Primary.DARK),
  ],
  [
    R.both(R.propEq('breed', BreedEnum.SECONDARY), R.propEq('inverted', true)),
    R.always(Color.SECONDARY),
  ],
  [R.propEq('inverted', true), R.always(Color.WHITE)],
  [R.T, R.always(Color.Black.LIGHT)],
]);

const getInnerCircleFillColorHover = R.cond([
  [
    R.both(R.propEq('breed', BreedEnum.PRIMARY), R.propEq('inverted', true)),
    R.always(Color.Primary.DARKER),
  ],
  [
    R.both(R.propEq('breed', BreedEnum.SECONDARY), R.propEq('inverted', true)),
    R.always(Color.Secondary.DARKER),
  ],
  [R.propEq('inverted', true), R.always(Color.White.STRONG)],
  [R.T, R.always(Color.Black.STRONG)],
]);

const Wrapper = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  margin-bottom: .5rem;
  margin-right: ${props => (props.vertical ? '0' : '1.2rem')};

  &:hover {
    .radio-label::before {
      border: ${props => `2px solid ${getInnerCircleFillColorHover(props)}`};
    }
  }
`;

const Input = styled.input`
  opacity: 0;
  position: absolute;
  cursor: pointer;

  &:checked {
    + .radio-label {
      &::before {
        background-color: ${getInnerCircleFillColor};
        box-shadow: ${props => `inset 0 0 0 3px ${getBackgroundColor(props)}`};
      }
    }
  }

  &:focus {
    + .radio-label {
      &::before {
        outline: none;
      }
    }
  }

  &:disabled {
    cursor: initial;

    + .radio-label {
      &::before {
        box-shadow: inset 0 0 0 3px ${Color.Gray.MINOR};
        border-color: ${Color.Gray.MODERATE};
        background: ${Color.Gray.LIGHT};
      }
    }
  }

  &:hover {
    &:checked {
      + .radio-label {
        &::before {
          background-color: ${getInnerCircleFillColorHover};
        }
      }
    }
  }
`;

const Text = styled.span.attrs({
  className: 'radio-label',
})`
  display: flex;
  align-items: center;
  color: ${props => (props.disabled ? Color.Gray.MAJOR : Color.BLACK)};

  &::before {
    content: '';
    background-color: ${getBackgroundColor};
    border-radius: 500rem;
    border: ${props => `2px solid ${getInnerCircleFillColor(props)}`};
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: ${props => (props.vertical ? '0.5rem' : '0.4rem')};
    vertical-align: bottom;
    text-align: center;
    cursor: ${props => (props.disabled ? 'default' : 'pointer')};
    transition: all 250ms ease;
  }

  &:empty {
    &::before {
      margin-right: 0;
    }
  }
`;

const Radio = (props: Props) =>
  <Wrapper {...props}>
    <Input
      type="radio"
      {...R.pick(['name', 'value', 'breed', 'inverted', 'disabled'])(props)}
    />
    <Text {...R.pick(['breed', 'inverted', 'disabled'])(props)}>
      {props.children}
    </Text>
  </Wrapper>;

Radio.defaultProps = {
  disabled: false,
  inverted: false,
};

export default Radio;
