/* @flow */
import React, { Component, Children, Element } from 'react';
import styled from 'styled-components';
import RootCloseWrapper from 'react-overlays/lib/RootCloseWrapper';

import { Menu } from '../../layout';
import { BORDER_RADIUS, Color } from '../../../lib/constants';

type Placement =
  | 'topLeft'
  | 'topCenter'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomCenter'
  | 'bottomRight';

type DefaultProps = {
  placement: Placement,
};

type Props = {
  children: Children,
  overlay: Element<Menu>,
  trigger?: 'click' | 'hover',
  placement?: Placement,
};

type State = {
  visible: boolean,
};

const Wrapper = styled.div`
  position: relative;
  &:hover {
    cursor: pointer;
  }
`;

const Overlay = styled.div`
  position: absolute;
  right: 0;
  top: 100%;
  width: 100%;
  border-bottom-left-radius: ${BORDER_RADIUS};
  border-bottom-right-radius: ${BORDER_RADIUS};
  box-shadow: ${props =>
    props.visible &&
    `
    0 2px 3px rgba(10, 10, 10, 0.1),
    0 0 0 1px rgba(10, 10, 10, 0.1)
  `};
  border-bottom: ${props => props.visible && `3px solid ${Color.PRIMARY}`};

  .dropdown-menu {
    .menu-item, .menu-divider {
      display: ${props => (props.visible ? 'flex' : 'none')};
    }
  }
`;

const Target = styled.div``;

class Dropdown extends Component<DefaultProps, Props, State> {
  static defaultProps = {
    placement: 'bottomRight',
  };

  state = {
    visible: false,
  };

  toggleVisibility = () => {
    this.setState(prevState => ({ visible: !prevState.visible }));
  };

  hide = () => {
    this.setState({ visible: false });
  };

  render() {
    return (
      <RootCloseWrapper onRootClose={this.hide}>
        <Wrapper {...this.props}>
          <Overlay visible={this.state.visible}>
            {this.props.overlay}
          </Overlay>
          <Target onClick={this.toggleVisibility}>
            {this.props.children}
          </Target>
        </Wrapper>
      </RootCloseWrapper>
    );
  }
}

export default Dropdown;
