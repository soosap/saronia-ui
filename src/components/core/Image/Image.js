/* @flow */
import React from 'react';
import styled from 'styled-components';

type Props = {
  alt: string,
  src: string,
  height?: string,
  width?: string,
};

const Figure = styled.figure.attrs({
  className: 'image',
})`
  margin: 0;
  width: ${props => props.width ? props.width : 'inherit'};
  height: ${props => props.height ? props.height : 'inherit'};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.img`
  height: 100%;
`;

const Image = (props: Props) =>
  <Figure {...props}>
    <Wrapper {...props} />
  </Figure>;

export default (props: Props) => <Image {...props} />;
