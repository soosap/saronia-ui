/* @flow */
import React, { Component, Children } from 'react';
import R from 'ramda';
import styled from 'styled-components';

import { Color, BreedEnum } from '../../../lib/constants';
import type { Breed } from '../../../lib/types';

type Props = {
  children: Children,
  breed?: Breed,
  sticky?: boolean,
};

type State = {
  activeItem: ?string,
};

type NavigationCollectionProps = {
  children: Children,
  breed?: Breed,
  activeItem: ?string,
  selectItem: (item: string) => void,
};

type NavigationItemProps = NavigationCollectionProps & {
  name: string,
  breed?: Breed,
  initial?: string,
  onClick: Function,
};

const getColor = R.cond([
  [R.propEq('breed', 'primary'), R.always(Color.Black.TRANSPARENT)],
  [R.propEq('breed', 'secondary'), R.always(Color.WHITE)],
  [R.T, R.always(Color.BLACK)],
]);

const getBackgroundColor = R.cond([
  [R.propEq('breed', 'primary'), R.always(Color.PRIMARY)],
  [R.propEq('breed', 'secondary'), R.always(Color.SECONDARY)],
  [R.T, R.always(Color.WHITE)],
]);

const getBorderColor = R.cond([
  [R.propEq('breed', BreedEnum.PRIMARY), R.always(Color.Black.TRANSPARENT)],
  [R.propEq('breed', BreedEnum.SECONDARY), R.always(Color.WHITE)],
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
| Navigation.Collection
|-----------------------------------------------------------
*/
const WrapperCollection = styled.div`
  display: flex;
`;

const NavigationCollection = ({
  children,
  breed,
  selectItem,
  activeItem,
}: NavigationCollectionProps) =>
  <WrapperCollection>
    {React.Children.map(children, (child) => {
      if (child.type && child.type.name === 'NavigationItem') {
        return React.cloneElement(child, {
          selectItem,
          activeItem,
          breed,
        });
      }

      return React.cloneElement(child, {
        // Todo: Improve inverted and breed colors on primary or secondary bg
        // inverted: !child.props.breed && true,
        // breed: !child.props.breed && breed !== 'primary' && breed,
      });
    })}
  </WrapperCollection>;

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
      props.sticky &&
      `calc(
        ${`${NAVIGATION_HEIGHT}
        + ${PADDING_TOP_BOTTOM}
        + ${PADDING_TOP_BOTTOM}`}
      )`};
  }

  .image {
    height: 36px;
  }
`;

class Navigation extends Component<void, Props, State> {
  static Left = NavigationCollection;
  static Right = NavigationCollection;
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
            breed: this.props.breed,
          }),
        )}
      </Wrapper>
    );
  }
}

export default Navigation;
