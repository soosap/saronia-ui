/* @flow */
import React from 'react';
import R from 'ramda';
import styled from 'styled-components';

type Props = {
  trigger?: 'click' | 'hover',
  visible?: boolean,
  placement?:
    | 'topLeft'
    | 'topCenter'
    | 'topRight'
    | 'bottomLeft'
    | 'bottomCenter'
    | 'bottomRight',
};

const Wrapper = styled.div``;

const Dropdown = (props: Props) => <Wrapper {...props} />;

Dropdown.defaultProps = {};

export default Dropdown;
