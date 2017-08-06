/* @flow */
import React, { Component, Children } from 'react';
import R from 'ramda';
import styled from 'styled-components';

import { Color, ThemeEnum } from '../../../lib/constants';
import type { Theme } from '../../../lib/types';

type Props = {
  children: Children,
  theme?: Theme,
  sticky?: boolean,
};

type State = {
  activeItem: ?string,
};

type NavigationCollectionProps = {
  children: Children,
  theme?: Theme,
  activeItem: ?string,
  selectItem: (item: string) => void,
};

type NavigationItemProps = NavigationCollectionProps & {
  name: string,
  theme?: Theme,
  initial?: string,
  onClick: Function,
};

const getColor = R.cond([
  [R.propEq('theme', ThemeEnum.PRIMARY), R.always(Color.Black.TRANSPARENT)],
  [R.propEq('theme', ThemeEnum.SECONDARY), R.always(Color.WHITE)],
  [R.T, R.always(Color.BLACK)],
]);

const getBackgroundColor = R.cond([
  [R.propEq('theme', ThemeEnum.PRIMARY), R.always(Color.PRIMARY)],
  [R.propEq('theme', ThemeEnum.SECONDARY), R.always(Color.SECONDARY)],
  [R.T, R.always(Color.WHITE)],
]);

const getBorderColor = R.cond([
  [R.propEq('theme', ThemeEnum.PRIMARY), R.always(Color.Black.TRANSPARENT)],
  [R.propEq('theme', ThemeEnum.SECONDARY), R.always(Color.WHITE)],
  [R.T, R.always(Color.PRIMARY)],
]);

/*
|-----------------------------------------------------------
| Navigation.Item
|-----------------------------------------------------------
*/
const WrapperItem = styled.div`
  padding-bottom: .2rem;
  border-bottom: ${props =>
    props.active && `2px solid ${getBorderColor(props)}`};
  color: ${getColor};

  a {
    color: ${getColor};
    text-decoration: none;
  }

  * {
    padding: .4rem .6rem;
  }

  &:hover {
    cursor: pointer;
  }
`;

const NavigationItem = (props: NavigationItemProps) => {
  const { children, name, initial, activeItem, selectItem, onClick } = props;

  return (
    <WrapperItem
      {...props}
      active={(activeItem || (initial && name)) === name}
      onClick={() => {
        if (onClick) onClick();
        selectItem(name);
      }}
    >
      {children}
    </WrapperItem>
  );
};

/*
|-----------------------------------------------------------
| Navigation.Menu
|-----------------------------------------------------------
*/
const WrapperMenu = styled.div`
  display: flex;
`;

const NavigationMenu = ({
  children,
  theme,
  selectItem,
  activeItem,
}: NavigationCollectionProps) =>
  <WrapperMenu>
    {React.Children.map(children, (child) => {
      if (child.type && child.type.name === 'NavigationItem') {
        return React.cloneElement(child, {
          selectItem,
          activeItem,
          theme,
        });
      }

      return child;
    })}
  </WrapperMenu>;

/*
|-----------------------------------------------------------
| Navigation
|-----------------------------------------------------------
*/
const NAVIGATION_HEIGHT_INNER = '36px';
const PADDING_TOP_BOTTOM = '0.3rem';
export const NAVIGATION_HEIGHT = `calc(
  ${`${NAVIGATION_HEIGHT_INNER}
  + ${PADDING_TOP_BOTTOM}
  + ${PADDING_TOP_BOTTOM} - 1px`}
)`;

const Wrapper = styled.nav.attrs({
  className: 'navigation',
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${NAVIGATION_HEIGHT_INNER};
  padding: ${PADDING_TOP_BOTTOM} 1rem;
  font-size: 1.15rem;
  position: ${props => (props.sticky ? 'sticky' : 'inherit')};
  top: ${props => props.sticky && 0};
  background-color: ${getBackgroundColor};
  z-index: 10;
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1);
`;

class Navigation extends Component<void, Props, State> {
  static Menu = NavigationMenu;
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
            theme: this.props.theme,
          }),
        )}
      </Wrapper>
    );
  }
}

export default Navigation;
