/* @flow */
import React from 'react';
import styled from 'styled-components';

type Props = {
  vertical?: boolean,
};

const Fields = styled.label.attrs({
  className: 'fields',
})`
  display: flex;
  flex-grow: 1;

  .field {
    &:not(:last-of-type) {
      margin-right: 1rem;      
    }
  }
`;

Fields.defaultProps = {
  vertical: false,
};

export default (props: Props) => <Fields {...props} />;
