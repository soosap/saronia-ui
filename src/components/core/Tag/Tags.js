/* @flow */
import React from 'react';
import styled from 'styled-components';

type Props = {};

const Wrapper = styled.div`
  .tag {
    margin: 0 .5rem .5rem 0;
  }
`;

const Tags = (props: Props) => <Wrapper {...props} />;

export default Tags;
