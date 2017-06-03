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
  flex-direction: ${p => p.vertical ? 'column' : 'row'};
  margin-bottom: 1.5rem;

  .field {
    &:not(:last-of-type) {
      margin-right: ${p => p.vertical ? '0' : '1rem'};
    }
  }
`;

Fields.defaultProps = {
  vertical: false,
};

export default (props: Props) => <Fields {...props} />;
