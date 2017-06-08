/* @flow */
import React from 'react';
import styled from 'styled-components';

type Props = {
  inline?: boolean,
};

const Field = styled.label.attrs({
  className: 'field',
})`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  margin-bottom: 1rem;

  .context-message {
    margin-top: -.25rem;
  }
`;

Field.defaulProps = {
  inline: false,
};

export default (props: Props) => <Field {...props} />;
