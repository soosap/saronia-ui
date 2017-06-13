/* @flow */
import React, { Children, Component } from 'react';
import styled from 'styled-components';

import { Color, BORDER_RADIUS } from '../../../lib/constants';
import type { Breed } from '../../../lib/types';

type Props = {
  children: Children,
  breed?: Breed,
  vertical?: boolean,
  selectedKeys?: Array<string>,
};

type DefaultProps = {};
type State = {};

const Wrapper = styled.ul.attrs({
  className: 'dropdown-menu',
})`
  list-style-type: none;
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: ${props => props.vertical ? 'column' : 'row'};

  .menu-item:last-of-type {
    margin-bottom: .15rem;
  }
`;

const Item = styled.li.attrs({
  className: 'menu-item',
})`
  display: flex;

  a {
    flex: 1;
    padding: .3rem .75rem;
    color: ${Color.Black.LIGHT};
    text-decoration: none;
    border-radius: ${BORDER_RADIUS};
    transition: none 86ms ease-out;

    &:hover {
      background-color: ${Color.White.STRONG};
      color: ${Color.Black.STRONG};
    }
  }
`;

const ItemGroup = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: ${props => props.vertical ? 'column' : 'row'};
`;

const SubMenu = styled.div``;

const Divider = styled.div.attrs({
  className: 'menu-divider',
})`
  height: 1px;
  overflow: hidden;
  border-bottom: 1px solid ${Color.GRAY};
  margin-top: .1rem;
  margin-bottom: .1rem;
`;

class Menu extends Component<DefaultProps, Props, State> {
  static defaultProps = {
    vertical: false,
    selectedKeys: [],
  };

  static Divider = Divider;
  static Item = Item;
  static SubMenu = SubMenu;
  static ItemGroup = ItemGroup;

  state = {
    selectedKeys: [],
  };

  render() {
    return (
      <Wrapper {...this.props}>
        {React.Children.map(this.props.children, child =>
          React.cloneElement(child, {
            // selectItem: this.handleItemSelection,
            // activeItem: this.state.activeItem,
            breed: this.props.breed,
          }),
        )}
      </Wrapper>
    );
  }
}

export default Menu;
