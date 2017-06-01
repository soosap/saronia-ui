/* @flow */
import React, { Children } from 'react';
import styled from 'styled-components';
import { BORDER_RADIUS, Border } from '../../lib/constants';
import type { Breed, Magnitude } from '../../lib/types';

type Props = {
  accent?: boolean,
  breed?: Breed,
  children: Children,
  inverted?: boolean,
  size?: Magnitude,
  vertical?: boolean,
};

const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: ${props => (props.vertical && 'column') || 'row'};

  * {
    border-radius: 0;

    &:not(:first-child):not(:last-child) {
      border-left: ${p => (p.vertical ? '1px solid' : 'none')};
      border-right: ${p => (p.vertical ? '1px solid' : 'none')};
      border-top: ${p => (p.vertical ? 'none' : '1px solid')};
      border-bottom: ${p => (p.vertical ? 'none' : '1px solid')};
      border-radius: 0;
    }

    &:first-child {
      border-top-left-radius: ${BORDER_RADIUS};
      border-top-right-radius: ${p => (p.vertical ? BORDER_RADIUS : 0)};
      border-bottom-left-radius: ${p => (p.vertical ? 0 : BORDER_RADIUS)};
      border-bottom-right-radius: 0;
    }

    &:last-child {
      border-top-right-radius: ${p => (p.vertical ? 0 : BORDER_RADIUS)};
      border-top-left-radius: 0;
      border-bottom-right-radius: ${BORDER_RADIUS};
      border-bottom-left-radius: ${p => (p.vertical ? BORDER_RADIUS : 0)};
    }
  }
`;

const Buttons = (props: Props) => (
  <Wrapper {...props}>
    {React.Children.map(props.children, child =>
      React.cloneElement(child, {
        accent: props.accent,
        breed: props.breed,
        inverted: props.inverted,
        size: props.size,
      }),
    )}
  </Wrapper>
);

export default Buttons;
