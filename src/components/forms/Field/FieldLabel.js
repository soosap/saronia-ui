/* @flow */
import React from 'react';
import styled from 'styled-components';

type Props = {

};

const FieldLabel = styled.div`
  font-weight: 600;
  font-size: .85rem;
  margin-left: .2rem;
  margin-bottom: .15rem;
`;

export default (props: Props) => <FieldLabel {...props} />;
