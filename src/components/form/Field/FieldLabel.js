/* @flow */
import React from 'react';
import styled from 'styled-components';

type Props = {};

const FieldLabel = styled.div.attrs({
  className: 'field-label',
})`
  font-weight: 400;
  font-size: .92rem;
  margin-bottom: .25rem;
`;

export default (props: Props) => <FieldLabel {...props} />;
