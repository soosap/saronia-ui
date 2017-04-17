/* @flow */
import { keyframes } from 'styled-components';

const SCALE_UP_AND_FADE_OUT = keyframes`
  from {
    transform: scale(1.0);
    opacity: 1;
  }

  to {
    transform: scale(1.2);
    opacity: 0;
  }
`;

export default {
  SCALE_UP_AND_FADE_OUT,
};
