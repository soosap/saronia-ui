/* @flow */
import React from 'react';
import styled from 'styled-components';

import { FONT_SIZE } from '../Field/FieldLabel';
import { MARGIN_BOTTOM } from '../Field/Field';

type Props = {
  compact?: boolean,
};

const Wrapper = styled.form`
  flex-grow: 1;
  position: relative;
  padding-left: 1rem;
  padding-right: 1rem;

  .field {
    margin-bottom: ${props => props.compact ? '.6rem' : MARGIN_BOTTOM};
  }

  .field-label {
    font-size: ${props => props.compact ? '.88rem' : FONT_SIZE};
  }
`;

const Form = (props: Props) => <Wrapper {...props} />;

Form.defaultProps = {
  compact: false,
};

export default Form;
