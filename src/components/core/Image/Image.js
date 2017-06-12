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
`;

const Wrapper = styled.img`
  width: ${props => props.width ? props.width : 'inherit'};
  height: ${props => props.height ? props.height : 'inherit'};
`;

const Image = (props: Props) =>
  <Figure {...props}>
    <Wrapper {...props} />
  </Figure>;

export default (props: Props) => <Image {...props} />;
