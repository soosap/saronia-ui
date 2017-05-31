/* @flow */
import React, { Component, Children } from 'react';
import R from 'ramda';
import styled from 'styled-components';
import { Color } from '../../lib/constants';

type Props = {
  children: Children,
};

type State = {
  activeItem: ?string,
};

type NavigationContainer = {
  children: Children,
  activeItem: ?string,
  selectItem: (item: string) => void,
};

type ItemContainer = NavigationContainer & {
  name: string,
  initial?: string,
  onClick: Function,
};

/*
|-----------------------------------------------------------
| Navigation.Item
|-----------------------------------------------------------
*/
const getBorderBottom = R.cond([
  [R.propEq('active', true), R.always(`3px solid ${Color.PRIMARY}`)],
]);

const WrapperItem = styled.div`
  border-bottom: ${getBorderBottom};

  a {
    color: ${Color.BLACK};
    text-decoration: none;
  }

  * {
    padding: .4rem .6rem;
  }

  &:hover {
    cursor: pointer;
  }
`;

const NavigationItem = ({
  children,
  name,
  initial,
  activeItem,
  selectItem,
  onClick,
}: ItemContainer) => (
  <WrapperItem
    active={(activeItem || (initial && name)) === name}
    onClick={() => {
      if (onClick) onClick();
      selectItem(name);
    }}
  >
    {children}
  </WrapperItem>
);

/*
|-----------------------------------------------------------
| Navigation.Left
|-----------------------------------------------------------
*/
const WrapperLeft = styled.div`
  display: flex;
`;

const NavigationLeft = ({
  children,
  selectItem,
  activeItem,
}: NavigationContainer) => (
  <WrapperLeft>
    {React.Children.map(children, child =>
      React.cloneElement(child, {
        selectItem,
        activeItem,
      }),
    )}
  </WrapperLeft>
);

/*
|-----------------------------------------------------------
| Navigation.Right
|-----------------------------------------------------------
*/
const WrapperRight = styled.div`
  display: flex;
`;

const NavigationRight = ({
  children,
  selectItem,
  activeItem,
}: NavigationContainer) => (
  <WrapperRight>
    {React.Children.map(children, child =>
      React.cloneElement(child, {
        selectItem,
        activeItem,
      }),
    )}
  </WrapperRight>
);

/*
|-----------------------------------------------------------
| Navigation
|-----------------------------------------------------------
*/
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: .6rem;
  margin-bottom: .6rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1.3rem;
`;

class Navigation extends Component<void, Props, State> {
  static Left = NavigationLeft;
  static Right = NavigationRight;
  static Item = NavigationItem;

  state = {
    activeItem: undefined,
  };

  handleItemSelection = (activeItem: string) => {
    this.setState({ activeItem });
  };

  render() {
    return (
      <Wrapper>
        {React.Children.map(this.props.children, child =>
          React.cloneElement(child, {
            selectItem: this.handleItemSelection,
            activeItem: this.state.activeItem,
          }),
        )}
      </Wrapper>
    );
  }
}

export default Navigation;
