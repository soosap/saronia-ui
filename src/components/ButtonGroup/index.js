/* @flow */
import React from 'react';
import styled from 'styled-components';
import { borders } from '../../assets/styles';

const ButtonGroup = styled.div`
  display: inline-flex;

  button {
    border-radius: 0;
    
    &:first-child {
      border-top-left-radius: ${borders.radius};
      border-bottom-left-radius: ${borders.radius};
    }

    &:last-child {
      border-top-right-radius: ${borders.radius};
      border-bottom-right-radius: ${borders.radius};
    }
  }
`;

export default ButtonGroup;
