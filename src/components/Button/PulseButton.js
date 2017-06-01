/* @flow */
import React from 'react';
import R from 'ramda';
import styled from 'styled-components';

import { Animation } from '../../lib/constants';
import type { Breed, Magnitude } from '../../lib/types';
import Button from './Button';

type Props = {
  accent?: boolean,
  circular: true,
  compact?: false,
  icon?: false,
  inverted?: boolean,
  onClick?: Function,
  pop?: 'active' | 'focus' | 'hover',
  radius: Magnitude,
  size?: Magnitude,
  breed?: Breed,
};

const Pulse = styled.div`
  position: relative;
`;

const Overlay = styled(Button)`
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

const PulseButton = (props: Props) => (
  <Pulse>
    <Button {...props} />
    <Overlay {...R.merge(props, { inverted: true })} />
  </Pulse>
);

export default PulseButton;
