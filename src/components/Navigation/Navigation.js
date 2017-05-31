/* @flow */
import React from 'react';
import R from 'ramda';
import styled from 'styled-components';
import { Color } from '../../lib/constants';

type Props = {

};

/*
|-----------------------------------------------------------
| Navigation
|-----------------------------------------------------------
*/
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1.3rem;
`;

const Navigation = ({ children }: Object) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
};


/*
|-----------------------------------------------------------
| Navigation.Left
|-----------------------------------------------------------
*/
const WrapperLeft = styled.div`
  display: flex;
`;

Navigation.Left = ({ children }: Object) => {
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

Navigation.Right = ({ children }: Object) => {
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
  padding: .5rem;
  margin: .5rem;
  border-bottom: ${getBorderBottom};
  transition: all .5s;
`;

Navigation.Item = ({ children, active }: Object) => {
  return (
    <WrapperItem active={active}>
      {children}
    </WrapperItem>
  );
};


export default Navigation;
