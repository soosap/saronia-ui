/* @flow */
import React from 'react';
import R from 'ramda';
import styled from 'styled-components';

type Props = {
  wordmark: boolean,
};

const Wrapper = styled.div``;
const Image = styled.img`

`;

const getImageSrc = R.cond([
  [R.propEq('wordmark', true), R.always('/wordmark')],
  [R.T, R.always('/logo.png')],
]);

const Logo = (props: Props) => {
  return (
    <Wrapper>
      <Image src={getImageSrc(props)} alt="logo" />
    </Wrapper>
  );
};

export default Logo;
