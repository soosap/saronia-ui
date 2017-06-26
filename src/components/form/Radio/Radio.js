/* @flow */
import React, { Children } from 'react';
import R from 'ramda';
import styled from 'styled-components';

import { Color } from '../../../lib/constants';
import type { Breed } from '../../../lib/types';

type Props = {
  children: Children,
  name?: string,
  breed?: Breed,
  disabled?: boolean,
};

const getInnerCircleFillColor = R.cond([
  [R.propEq('breed', 'primary'), R.always(Color.Primary.DARK)],
  [R.propEq('breed', 'secondary'), R.always(Color.SECONDARY)],
  [R.T, R.always(Color.Black.LIGHT)],
]);

const getBorder = R.cond([
  [R.propEq('breed', 'primary'), R.always(`2px solid ${Color.Primary.DARK}`)],
  [R.propEq('breed', 'secondary'), R.always(`2px solid ${Color.SECONDARY}`)],
  [R.T, R.always(`2px solid ${Color.Black.LIGHT}`)],
]);

const getBorderHover = R.cond([
  [R.propEq('breed', 'primary'), R.always(`2px solid ${Color.Primary.DARKER}`)],
  [
    R.propEq('breed', 'secondary'),
    R.always(`2px solid ${Color.Secondary.DARKER}`),
  ],
  [R.T, R.always(`2px solid ${Color.Black.STRONG}`)],
]);

const Wrapper = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  cursor: ${props => props.disabled ? 'default' : 'pointer'};
  margin-bottom: .5rem;
  margin-right: ${props => (props.vertical ? '0' : '1.2rem')};

  &:hover {
    .radio-label::before {
      border: ${getBorderHover};
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
        box-shadow: inset 0 0 0 3px ${Color.WHITE};
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
`;

const Text = styled.span.attrs({
  className: 'radio-label',
})`
  display: flex;
  align-items: center;
  color: ${props => (props.disabled ? Color.Gray.MAJOR : Color.BLACK)};

  &::before {
    content: '';
    background-color: transparent;
    border-radius: 500rem;
    border: ${getBorder};
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: ${props => (props.vertical ? '0.5rem' : '0.4rem')};
    vertical-align: bottom;
    text-align: center;
    cursor: ${props => props.disabled ? 'default' : 'pointer'};
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
      {...R.pick(['name', 'value', 'breed', 'disabled'])(props)}
    />
    <Text {...R.pick(['breed', 'disabled'])(props)}>{props.children}</Text>
  </Wrapper>;

Radio.defaultProps = {
  disabled: false,
};

export default Radio;
