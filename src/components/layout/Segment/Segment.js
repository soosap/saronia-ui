/* @flow */
import React from 'react';
import R from 'ramda';
import styled from 'styled-components';

import { IntensityEnum } from '../../../lib/constants';
import type { Intensity } from '../../../lib/types';

type Props = {
  padded?: boolean | Intensity,
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

const Segment = styled.div`
  display: block;
  padding: ${getPadding};
`;

export default (props: Props) => <Segment {...props} />;
