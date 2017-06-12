/* @flow */
import React, { Component, Children } from 'react';
import R from 'ramda';
import styled from 'styled-components';

import { Color } from '../../../lib/constants';
import type { Breed } from '../../../lib/types';

type Props = {
  children: Children,
  breed?: Breed,
  sticky?: boolean,
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

const getBackgroundColor = R.cond([
  [R.propEq('breed', 'primary'), R.always(Color.Primary.DARK)],
  [R.propEq('breed', 'secondary'), R.always(Color.Secondary.DARK)],
  [R.T, R.always(Color.White.LIGHT)],
]);

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
}: ItemContainer) =>
  <WrapperItem
    active={(activeItem || (initial && name)) === name}
    onClick={() => {
      if (onClick) onClick();
      selectItem(name);
    }}
  >
    {children}
  </WrapperItem>;

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
}: NavigationContainer) =>
  <WrapperLeft>
    {React.Children.map(children, (child) => {
      if (child.type && child.type.name === 'NavigationItem') {
        return React.cloneElement(child, {
          selectItem,
          activeItem,
        });
      }

      return child;
    })}
  </WrapperLeft>;

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
}: NavigationContainer) =>
  <WrapperRight>
    {React.Children.map(children, (child) => {
      if (child.type && child.type.name === 'NavigationItem') {
        return React.cloneElement(child, {
          selectItem,
          activeItem,
        });
      }

      return child;
    })}
  </WrapperRight>;

/*
|-----------------------------------------------------------
| Navigation
|-----------------------------------------------------------
*/
const NAVIGATION_HEIGHT = '36px';
const PADDING_TOP_BOTTOM = '0.3rem';

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${NAVIGATION_HEIGHT};
  padding: ${PADDING_TOP_BOTTOM} 1rem;
  font-size: 1.3rem;
  position: ${props => (props.sticky ? 'fixed' : 'inherit')};
  left: ${props => props.sticky && 0};
  right: ${props => props.sticky && 0};
  top: ${props => props.sticky && 0};
  background-color: ${getBackgroundColor};
  z-index: 1;

  + * {
    margin-top: ${props =>
      props.sticky && `calc(
        ${`${NAVIGATION_HEIGHT}
        + ${PADDING_TOP_BOTTOM}
        + ${PADDING_TOP_BOTTOM}`}
      )`
    };
  }

  .image {
    height: 36px;
  }
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
      <Wrapper {...this.props}>
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
