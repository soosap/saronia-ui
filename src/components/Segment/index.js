/* @flow */
import R from 'ramda';
import React from 'react';
import styled from 'styled-components';

import type { Position, Size, Type } from '../../types';
import { colors, fonts, borders } from '../../assets/styles';

type Props = {
  inverted?: boolean,
};

const invertedStyle = {
  'background-color': colors.black,
  'color': colors.whiteDark,
};

const Segment = styled.div`
  position: relative;
  background: ${colors.white};
  box-shadow: 0px 1px 2px 0 rgba(34, 36, 38, 0.15);
  margin: 1rem 0em;
  padding: 1em 1em;
  border-radius: ${borders.radius};
  border: 1px solid rgba(34, 36, 38, 0.15);

  ${props => props.inverted ? { ...invertedStyle } : null};


`;

export default (props: Props) => <Segment {...props} />;
