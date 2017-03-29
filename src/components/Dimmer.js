/* @flow */
import React from 'react';
import styled from 'styled-components';

import { borders, colors } from '../assets/styles';

const Dimmer = styled.div`
  position: absolute;
  top: 0; right: 0; left: 0; bottom: 0;
  transition: opacity 0.5s;
  background: rgba(0,0,0, .65);
  border-radius: ${borders.radius};
  opacity: 0;
  color: ${colors.white};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    opacity: 1;
  }
`;

export default Dimmer;
