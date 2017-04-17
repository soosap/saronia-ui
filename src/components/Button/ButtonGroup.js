/* @flow */
import React from 'react';
import styled from 'styled-components';
import { borders } from '../../assets/styles';

type Props = {
  vertical?: boolean,
};

const ButtonGroup = styled.div`
  display: inline-flex;
  flex-direction: ${props => props.vertical && 'column' || 'row'};

  button {
    border-radius: 0;

    &:first-child {
      border-top-left-radius: ${borders.radius};
      border-top-right-radius: ${props => props.vertical ? borders.radius : 0};
      border-bottom-left-radius: ${props => props.vertical ? 0 : borders.radius};
    }

    &:last-child {
      border-top-right-radius: ${props => props.vertical ? 0 : borders.radius};
      border-bottom-right-radius: ${borders.radius};
      border-bottom-left-radius: ${props => props.vertical ? borders.radius : 0};
    }
  }
`;

export default (props: Props) => <ButtonGroup {...props} />;
