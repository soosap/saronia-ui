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

const Wrapper = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:not(:last-of-type) {
    margin-bottom: .3rem;
    margin-right: ${props => (props.vertical ? '0' : '1.2rem')}
  }

  &:hover {
    .radio-label::before {
      border: 1px solid ${Color.Primary.DARKER};
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
        background-color: ${Color.PRIMARY};
        box-shadow: inset 0 0 0 3px ${Color.WHITE};
      }
    }
  }

  &:focus {
    + .radio-label {
      &::before {
        outline: none;
        border-color: ${Color.Primary.DARKER};
      }
    }
  }

  &:disabled {
    + .radio-label {
      &::before {
        box-shadow: inset 0 0 0 3px ${Color.Gray.LIGHT};
        border-color: ${Color.Gray.STRONG};
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
  color: ${props => (props.disabled ? Color.Gray.STRONG : Color.BLACK)};

  &::before {
    content: '';
    background-color: ${Color.WHITE};
    border-radius: 500rem;
    border: 1px solid ${Color.Primary.LIGHT};
    display: inline-block;
    width: calc(1rem - 2px);
    height: calc(1rem - 2px);
    margin-right: ${props => (props.vertical ? '0.5rem' : '0.4rem')};
    vertical-align: bottom;
    text-align: center;
    cursor: pointer;
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
    <Text {...R.pick(['disabled'])(props)}>{props.children}</Text>
  </Wrapper>;

Radio.defaultProps = {
  disabled: false,
};

export default Radio;
