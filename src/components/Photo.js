/* @flow */
import React from 'react';
import R from 'ramda';
import styled from 'styled-components';

import { borders, colors } from '../assets/styles';

type Props = {
  overlay?: string | React$Element<*>,
  src: string,
  alt: string,
  cta?: React$Element<*>,
};

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  overflow: hidden;
  background-color: yellow;
  border-radius: ${borders.radius};
`;

const Image = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0; right: 0; left: 0; bottom: 0;
  transition: opacity 0.5s;
  background: rgba(0,0,0, .65);
  border-radius: ${borders.radius};
  opacity: 0;
  color: ${colors.white};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    opacity: 1;
  }
`;

const CallToAction = styled.div`
  margin-top: 1rem;
`;

const renderCTA = R.ifElse(
  R.has('cta'),
  props => <CallToAction>{props.cta}</CallToAction>,
  R.always(null),
);

const Photo = (props: Props) => (
  <Wrapper>
    <Image src={props.src} alt={props.alt} />
    <Overlay>{props.overlay}{renderCTA(props)}</Overlay>
  </Wrapper>
);

export default Photo;
