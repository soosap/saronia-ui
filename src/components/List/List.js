/* @flow */
import R from 'ramda';
import React from 'react';
import styled from 'styled-components';
import { Color, MagnitudeEnum } from '../../assets/constants';
import type { Magnitude, Breed } from '../../types';

type Props = {
  children: any,
  gap?: Magnitude,
  timeline?: boolean,
  marginLeft?: string,
  type?: Breed,
};

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
  margin-left: ${R.propOr('75px', 'marginLeft')};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    border: 1px dashed ${Color.GREY_STRONG};
  }
`;

const Content = styled.div`

`;

const renderTimeline = (props: Props) => {
  return (
    <Wrapper {...props}>
      {props.children.map((child, index) =>
        React.cloneElement(child, {
          timeline: props.timeline,
          type: props.type,
          gap: props.gap,
          marginLeft: props.marginLeft,
          key: index,
        }),
      )}
    </Wrapper>
  );
};

export default (props: Props) => {
  return R.cond([
    [R.prop('timeline'), renderTimeline],
    [R.T, R.always(<Content {...props} />)],
  ])(props);
};
