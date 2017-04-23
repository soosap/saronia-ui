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
  marginLeft?: Magnitude,
  type?: Breed,
};

export const getMarginLeft = R.cond([
  [R.propEq('marginLeft', MagnitudeEnum.MINI), R.always('30px')],
  [R.propEq('marginLeft', MagnitudeEnum.TINY), R.always('45px')],
  [R.propEq('marginLeft', MagnitudeEnum.SMALL), R.always('60px')],
  [R.propEq('marginLeft', MagnitudeEnum.MEDIUM), R.always('75px')],
  [R.propEq('marginLeft', MagnitudeEnum.LARGE), R.always('90px')],
  [R.propEq('marginLeft', MagnitudeEnum.BIG), R.always('105px')],
  [R.propEq('marginLeft', MagnitudeEnum.HUGE), R.always('120px')],
  [R.propEq('marginLeft', MagnitudeEnum.MASSIVE), R.always('135px')],
  [R.T, R.always('75px')],
]);

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
  margin-left: ${getMarginLeft};

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

const List = (props: Props) => {
  return (
    <Wrapper {...props}>
      {props.children.map(child =>
        React.cloneElement(child, {
          timeline: props.timeline,
          type: props.type,
          gap: props.gap,
          labelWidth: props.marginLeft,
        }),
      )}
    </Wrapper>
  );
};

export default List;
