/* @flow */
import { keyframes } from 'styled-components';

const scaleUpAndFadeOut = keyframes`
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
  scaleUpAndFadeOut,
};
