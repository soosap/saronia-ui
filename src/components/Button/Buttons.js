/* @flow */
import React, { Children } from 'react';
import styled from 'styled-components';
import { BORDER_RADIUS } from '../../lib/constants';
import type { Breed, Magnitude } from '../../lib/types';

type Props = {
  accent?: boolean,
  breed?: Breed,
  children: Children,
  inverted?: boolean,
  size?: Magnitude,
  vertical?: boolean,
};

const Buttons = styled.div`
  display: inline-flex;
  flex-direction: ${props => (props.vertical && 'column') || 'row'};

  button {
    border-radius: 0;

    &:not(:first-child):not(:last-child) {
      border-left: none;
      border-right: none;
    }

    &:first-child {
      border-top-left-radius: ${BORDER_RADIUS};
      border-top-right-radius: ${
        props => (props.vertical ? BORDER_RADIUS : 0)
      };
      border-bottom-left-radius: ${
        props => (props.vertical ? 0 : BORDER_RADIUS)
      };
    }

    &:last-child {
      border-top-right-radius: ${
        props => (props.vertical ? 0 : BORDER_RADIUS)
      };
      border-bottom-right-radius: ${BORDER_RADIUS};
      border-bottom-left-radius: ${
        props => (props.vertical ? BORDER_RADIUS : 0)
      };
    }
  }
`;

export default (props: Props) =>
  <Buttons {...props}>
    {React.Children.map(props.children, child =>
      React.cloneElement(child, {
        accent: props.accent,
        breed: props.breed,
        inverted: props.inverted,
        size: props.size,
      }),
    )}
  </Buttons>;
