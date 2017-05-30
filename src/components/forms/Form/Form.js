/* @flow */
import React from 'react';
import styled from 'styled-components';

type Props = {};

const Form = styled.form`
  .field {
    &:last-of-type {
      margin-bottom: .3rem;
    }
  }

`;

export default (props: Props) => <Form {...props} />;
