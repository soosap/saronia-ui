/* @flow */
import React, { Children } from 'react';
import R from 'ramda';
import styled, { keyframes } from 'styled-components';

import { BORDER_RADIUS, Color } from '../../../lib/constants';
import type { Theme } from '../../../lib/types';

type Props = {
  children: Children,
  theme?: Theme,
  vertical?: boolean,
  value?: string,
};

const WIDTH = 20;

const getBackgroundColor = R.cond([
  [R.propEq('theme', 'primary'), R.always(Color.PRIMARY)],
  [R.propEq('theme', 'secondary'), R.always(Color.SECONDARY)],
  [R.T, R.always(Color.BLACK)],
]);

const getCheckmarkColor = R.cond([
  [R.propEq('theme', 'primary'), R.always(Color.Black.TRANSPARENT)],
  [R.propEq('theme', 'secondary'), R.always(Color.WHITE)],
  [R.T, R.always(Color.WHITE)],
]);

const checking = keyframes`
  0% {
    width: 0;
    height: 0;
    transform: translate(0,0) rotate(45deg);
  }
  33% {
    width: 3px:
    height: 0;
    transform: translate(0,0) rotate(45deg);
  }
  100% {
    width: 3px;
    height: 8px;
    transform: translate(0, -90%) rotate(45deg);
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
  margin-bottom: ${props => props.vertical ? '.5rem' : '0'};
  margin-right: ${props => (props.vertical ? '0' : '1.2rem')};

  &:hover {
    cursor: pointer;
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
  opacity: 0;

  &:checked + .square {
    border: ${WIDTH * 0.5}px solid ${getBackgroundColor};
    animation: ${bounce} 250ms;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 4px;
      border-right: 3px solid transparent;
      border-bottom: 3px solid transparent;
      transform-origin: 0% 100%;
      transform: rotate(45deg);
      border-color: ${getCheckmarkColor};
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
  border: 2px solid ${Color.BLACK};
  margin-right: .5rem;
  box-sizing: border-box;
  transition: all 0.3s;
`;

const Text = styled.span`
  display: flex;
  align-items: center;
`;

const Checkbox = (props: Props) =>
  <Wrapper {...props}>
    <CheckboxWrapper>
      <Input theme={props.theme} value={props.value} type="checkbox" />
      <Square />
    </CheckboxWrapper>
    <Text>{props.children}</Text>
  </Wrapper>;

export default Checkbox;
