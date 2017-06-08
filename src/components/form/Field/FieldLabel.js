/* @flow */
import React from 'react';
import styled from 'styled-components';

type Props = {};

export const FONT_SIZE = '.92rem';

const FieldLabel = styled.div.attrs({
  className: 'field-label',
})`
  font-weight: 400;
  font-size: ${FONT_SIZE};
  margin-bottom: .25rem;
`;

export default (props: Props) => <FieldLabel {...props} />;
