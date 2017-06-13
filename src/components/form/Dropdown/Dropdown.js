/* @flow */
import React from 'react';
import R from 'ramda';
import styled from 'styled-components';

type Props = {};

const Wrapper = styled.div``;

const Dropdown = (props: Props) => {
  return (
    <Wrapper>
      I am a Dropdown
    </Wrapper>
  );
};

Dropdown.defaultProps = {};

export default Dropdown;
