/* @flow */
import React, { Children, Component } from 'react';
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

const Wrapper = styled.div`
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
      border-top-right-radius: ${p => (p.vertical ? BORDER_RADIUS : 0)};
      border-bottom-left-radius: ${p => (p.vertical ? 0 : BORDER_RADIUS)};
    }

    &:last-child {
      border-top-right-radius: ${p => (p.vertical ? 0 : BORDER_RADIUS)};
      border-bottom-right-radius: ${BORDER_RADIUS};
      border-bottom-left-radius: ${p => (p.vertical ? BORDER_RADIUS : 0)};
    }
  }
`;

class Buttons extends Component<void, Props, void> {
  render() {
    return (
      <Wrapper {...this.props}>
        {React.Children.map(this.props.children, child =>
          React.cloneElement(child, {
            accent: this.props.accent,
            breed: this.props.breed,
            inverted: this.props.inverted,
            size: this.props.size,
          }),
        )}
      </Wrapper>
    );
  }
}

export default Buttons;
