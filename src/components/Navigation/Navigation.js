/* @flow */
import React, { Component, Children } from 'react';
import R from 'ramda';
import styled from 'styled-components';
import { Color } from '../../lib/constants';

/*
|-----------------------------------------------------------
| Navigation.Left
|-----------------------------------------------------------
*/
const WrapperLeft = styled.div`
  display: flex;
`;

const NavigationLeft = ({ children }: Object) => {
  return (
    <WrapperLeft>
      {children}
    </WrapperLeft>
  );
};

/*
|-----------------------------------------------------------
| Navigation.Right
|-----------------------------------------------------------
*/
const WrapperRight = styled.div`
  display: flex;
`;

const NavigationRight = ({ children }: Object) => {
  return (
    <WrapperRight>
      {children}
    </WrapperRight>
  );
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
  padding: .5rem .6rem;
  margin-top: .25rem;
  margin-bottom: .25rem;
  border-bottom: ${getBorderBottom};
  transition: all .5s;

  &:hover {
    background-color:
  }
`;

const NavigationItem = ({ children, active }: Object) => {
  return (
    <WrapperItem active={active}>
      {children}
    </WrapperItem>
  );
};

/*
|-----------------------------------------------------------
| Navigation
|-----------------------------------------------------------
*/
type Props = {
  children: any,
};

type State = {
  activeItem?: string,
  something: number,
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1.3rem;
`;

const Navigation = class Navigation extends Component<void, Props, State> {
  static Left = NavigationLeft;
  static Right = NavigationRight;
  static Item = NavigationItem;

  state = {
    activeItem: undefined,
    something: 22,
  };

  render() {
    return (
      <Wrapper>
        {this.props.children}
      </Wrapper>
    );
  }
};

export default Navigation;
