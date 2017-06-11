/* @flow */
import React from 'react';
import styled from 'styled-components';

type Props = {
  width: number,
  height: number,
};

const Wrapper = styled.svg`
  path {
    fill: none;
    stroke-width: 5;
  }
`;

const BigCircle = styled.path`
  stroke: #ddd;
`;

const SmallCircle = styled.path`
  fill: yellow;

  stroke: orange;
`;

const Success = styled.path`
  stroke: green;
`;

const Error = styled.path`
  stroke: red;
`;

const Spinner = ({ width, height }: Props) => (
  <Wrapper width={`${width}`} height={`${height}`}>
    <BigCircle d={'M 60 60 m 0 -50 a 50 50 0 0 1 0 100 a 50 50 0 0 1 0 -100'} />
    <SmallCircle d={'M 60 60 m 0 -30 a 30 30 0 0 1 0 60 a 30 30 0 0 1 0 -60'} />
    <Success d={'M 60 10 A 50 50 0 0 1 100 30 L 60 70 L 50 60'} />
    <Error d={'M 60 10 A 50 50 0 0 1 95 24 L 50 80'} />
    <Error d={'M 60 30 A 30 30 0 0 1 84 78 L 50 50'} />
  </Wrapper>
);

Spinner.defaultProps = {
  width: 120,
  height: 120,
};

export default Spinner;
