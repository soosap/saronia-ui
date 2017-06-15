/* @flow */
import React from 'react';
import R from 'ramda';
import styled from 'styled-components';

import { IntensityEnum } from '../../../lib/constants';

type Props = {
  compact?: boolean,
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

const Wrapper = styled.form`
  flex-grow: 1;
  position: relative;
  padding: ${getPadding};

  .field {
    margin-bottom: ${props => props.compact ? '.6rem' : '1.2rem'};
  }

  .field-label {
    font-size: ${props => props.compact ? '.88rem' : '.92rem'};
  }
`;

const Form = (props: Props) => <Wrapper {...props} />;

Form.defaultProps = {
  compact: false,
};

export default Form;
