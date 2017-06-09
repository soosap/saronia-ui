/* @flow */
import React from 'react';
import R from 'ramda';
import styled from 'styled-components';

import { IntensityEnum, BORDER_RADIUS } from '../../../lib/constants';
import type { Intensity } from '../../../lib/types';

type Props = {
  padded?: boolean | Intensity,
  outline?: boolean,
};

const getPadding = R.cond([
  [R.propEq('padded', IntensityEnum.MINOR), R.always('.5rem')],
  [R.propEq('padded', IntensityEnum.LIGHT), R.always('.75rem')],
  [R.propEq('padded', IntensityEnum.MODERATE), R.always('1rem')],
  [R.propEq('padded', IntensityEnum.STRONG), R.always('1.5rem')],
  [R.propEq('padded', IntensityEnum.MAJOR), R.always('2rem')],
  [R.propEq('padded', IntensityEnum.GREAT), R.always('3rem')],
  [R.propEq('padded', false), R.always('0')],
  [R.T, R.always('1.5rem')],
]);

const Wrapper = styled.div`
  display: block;
  position: relative;
  padding: ${getPadding};
  font-size: 1rem;
  border-radius: ${props => props.outline ? BORDER_RADIUS : '0'};
  box-shadow: ${props => props.outline ? `
    0 2px 3px rgba(10, 10, 10, 0.1),
    0 0 0 1px rgba(10, 10, 10, 0.1)
  ` : 'none'};

  &:last-child {
    margin-bottom: 0;
  }
`;

const Segment = (props: Props) => <Wrapper {...props} />;

Segment.defaultProps = {
  outline: false,
};

export default Segment;
