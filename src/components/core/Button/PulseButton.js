/* @flow */
import React from 'react';
import R from 'ramda';
import styled from 'styled-components';

import { Animation } from '../../../lib/constants';
import RawButton from './RawButton';
import type { Props } from './Button';

const Pulse = styled.div`
  position: relative;
`;

const Overlay = RawButton.extend`
  position: absolute;
  top: 0;
  left: 0;
  color: transparent;
  z-index: -1;
  animation-name: ${Animation.SCALE_UP_AND_FADE_OUT};
  animation-duration: 1.6s;
  animation-iteration-count: infinite;
  animation-delay: .2s;
`;

const PulseButton = (props: Props) =>
  <Pulse>
    <RawButton {...props} />
    <Overlay {...R.merge(props, { inverted: true })} />
  </Pulse>;

export default PulseButton;
