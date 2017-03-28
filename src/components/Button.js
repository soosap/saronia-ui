/* @flow */
import styled from 'styled-components';

import { colors, fonts } from '../assets/styles';

type Props = {
  active: boolean,
  inverted: boolean,
  accent: boolean,
};

const Button = styled.button`
  padding: ${props => props.accent ? '0.65rem 1rem 0.35rem 1rem' : '0.5rem 1rem'};
  background-color: ${props => props.inverted ? colors.secondary : colors.primary};
  border-radius: 3px;
  border: none;
  font-size: 1.2rem;
  font-family: ${props => props.accent ? fonts.accent : fonts.system};

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;

export default Button;
