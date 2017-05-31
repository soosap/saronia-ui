/* @flow */
import React from 'react';
import styled from 'styled-components';

type Props = {

};

const FieldLabel = styled.div`
  font-weight: 400;
  font-size: .9rem;
  margin-left: .1rem;
  margin-bottom: .25rem;
`;

export default (props: Props) => <FieldLabel {...props} />;