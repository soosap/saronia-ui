/* @flow */
import React from 'react';
import styled from 'styled-components';
import { BORDER_RADIUS } from '../../lib/constants';

type Props = {
  vertical?: boolean,
};

const Buttons = styled.div`
  display: inline-flex;
  flex-direction: ${props => (props.vertical && 'column') || 'row'};

  button {
    border-radius: 0;

    &:not(:first-child):not(:last-child) {
      border-left: none;
      border-right: none;
    }

    &:first-child {
      border-top-left-radius: ${BORDER_RADIUS};
      border-top-right-radius: ${props => (props.vertical ? BORDER_RADIUS : 0)};
      border-bottom-left-radius: ${props => (props.vertical ? 0 : BORDER_RADIUS)};
    }

    &:last-child {
      border-top-right-radius: ${props => (props.vertical ? 0 : BORDER_RADIUS)};
      border-bottom-right-radius: ${BORDER_RADIUS};
      border-bottom-left-radius: ${props => (props.vertical ? BORDER_RADIUS : 0)};
    }
  }
`;

export default (props: Props) => <Buttons {...props} />;
