/* @flow */
import React, { Children } from 'react';
import styled, { keyframes } from 'styled-components';

import { BORDER_RADIUS, Color } from '../../../lib/constants';

type Props = {
  children: Children,
};

const WIDTH = 20;

const checking = keyframes`
  0% {
    width: 0:
    height: 0;
    border-color: #212121;
    transform: translate(0,0) rotate(45deg);
  }
  33% {
    width: 3px:
    height: 0;
    border-color: #212121;
    transform: translate(0,0) rotate(45deg);
  }
  100% {
    width: 3px;
    height: 8px;
    border-color: #212121;
    transform: translate(0,-8px) rotate(45deg);
  }
`;

const bounce = keyframes`
  0% {
    transform: scale(1);
  }
  33% {
    transform: scale(.7);
  }
  100% {
    transform: scale(1);
  }
`;

const Wrapper = styled.label`
  display: flex;
  align-items: stretch;
  &:not(:last-of-type) {
    margin-bottom: ${props => props.vertical ? '.3rem' : '0'};
    margin-right: ${props => props.vertical ? '0' : '.8rem'}
  }
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const Input = styled.input`
  margin: 0;
  width: 0;
  height: 0;

  &:checked + .square {
    border: ${WIDTH * 0.5}px solid ${Color.PRIMARY};
    animation: ${bounce} 250ms;

    &::before {
      content: '';
      position: absolute;
      top: 9px;
      left: 4px;
      border-right: 3px solid transparent;
      border-bottom: 3px solid transparent;
      transform: rotate(45deg);
      transform-origin: 0% 100%;
      animation: ${checking} 125ms 250ms forwards;
    }
  };
`;

const Square = styled.span.attrs({
  className: 'square',
})`
  display: flex;
  justify-content: center;
  width: ${WIDTH}px;
  height: ${WIDTH}px;
  border-radius: ${BORDER_RADIUS};
  border: 2px solid black;
  margin-right: .3rem;
  box-sizing: border-box;
  transition: all 0.3s;
`;

const Text = styled.span``;

const Checkbox = (props: Props) =>
  <Wrapper>
    <CheckboxWrapper>
      <Input type="checkbox" />
      <Square />
    </CheckboxWrapper>
    <Text>{props.children}</Text>
  </Wrapper>;

export default Checkbox;
