/* @flow */
import React from 'react';
import styled from 'styled-components';

type Props = {
  alt: string,
  src: string,
};

const Wrapper = styled.figure`

`;

const Image = (props: Props) => {
  return (
    <Wrapper {...props}>
      <img src={props.src} alt={props.alt} />
    </Wrapper>
  );
};

export default (props: Props) => <Image {...props} />;
