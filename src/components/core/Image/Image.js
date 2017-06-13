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
  width: ${props => props.width ? props.width : 'auto'};
  height: ${props => props.height ? props.height : 'auto'};
`;

const Wrapper = styled.img``;

const Image = (props: Props) =>
  <Figure {...props}>
    <Wrapper {...props} />
  </Figure>;

export default (props: Props) => <Image {...props} />;
