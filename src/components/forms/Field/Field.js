/* @flow */
import React from 'react';
import styled from 'styled-components';

type Props = {
  inline: boolean,
};

const Field = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: .6rem;
`;

Field.defaulProps = {
  inline: false,
};

export default (props: Props) => <Field {...props} />;
