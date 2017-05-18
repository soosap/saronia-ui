/* @flow */
import R from 'ramda';
import React from 'react';
import styled from 'styled-components';
import {
  Color,
  FontSize,
  BreedEnum,
  MagnitudeEnum,
} from '../../lib/constants';
import type { Magnitude, Breed } from '../../types';

type Props =
  | {
      // default
      children?: any,
      gap?: Magnitude,
      timeline?: false,
      type?: Breed,
    }
  | {
      // timeline
      children?: any,
      gap?: Magnitude,
      labelBottom?: string,
      labelTop?: string,
      marginLeft?: string,
      timeline: true,
      type?: Breed,
    };

const getColor = R.cond([
  [R.propEq('type', BreedEnum.PRIMARY), R.always(Color.PRIMARY)],
  [R.propEq('type', BreedEnum.SECONDARY), R.always(Color.SECONDARY)],
  [R.T, R.always(Color.GREY_SEVERE)],
]);

const getMarginTopBottom = R.cond([
  [R.propEq('gap', MagnitudeEnum.MINI), R.always('15px')],
  [R.propEq('gap', MagnitudeEnum.TINY), R.always('20px')],
  [R.propEq('gap', MagnitudeEnum.SMALL), R.always('25px')],
  [R.propEq('gap', MagnitudeEnum.MEDIUM), R.always('30px')],
  [R.propEq('gap', MagnitudeEnum.LARGE), R.always('35px')],
  [R.propEq('gap', MagnitudeEnum.BIG), R.always('40px')],
  [R.propEq('gap', MagnitudeEnum.HUGE), R.always('45px')],
  [R.propEq('gap', MagnitudeEnum.MASSIVE), R.always('50px')],
  [R.T, R.always('30px')],
]);

const Wrapper = styled.li`
  display: flex;
  margin: ${getMarginTopBottom} 0;
  position: relative;
  padding-left: 1rem;
`;

const Content = styled.div`

`;

const renderTimelineItem = (props: Props) => {
  const VerticalLine = styled.span`
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    border: 1px solid ${Color.GREY_SEVERE};

    &::before {
      content: '';
      position: absolute;
      width: 6px;
      height: 6px;
      border: 2px solid ${getColor};
      border-radius: 6px;
      background-color: ${Color.WHITE};
      top: -2px;
      left: -5px;
    }

    &::after {
      content: '';
      position: absolute;
      width: 6px;
      height: 6px;
      border: 2px solid ${getColor};
      border-radius: 6px;
      background-color: ${Color.WHITE};
      bottom: -2px;
      left: -5px;
    }
  `;

  const Label = styled.span`
    position: absolute;
    left: -${R.propOr('75px', 'marginLeft')};
    width: ${R.propOr('75px', 'marginLeft')};
    text-align: right;
    font-size: ${FontSize.MINI};
    color: ${Color.GREY_VIOLENT};
  `;

  const LabelTop = styled(Label)`
    top: -3px;
  `;

  const LabelBottom = styled(Label)`
    bottom: -5px;
  `;

  return (
    <Wrapper {...props}>
      <VerticalLine type={props.type} />
      <LabelTop {...R.pick(['marginLeft'], props)}>
        {R.prop('labelTop', props)}&nbsp;&nbsp;&nbsp;
      </LabelTop>
      <LabelBottom {...R.pick(['marginLeft'], props)}>
        {R.prop('labelBottom', props)}&nbsp;&nbsp;&nbsp;
      </LabelBottom>
      <Content {...props}>{props.children}</Content>
    </Wrapper>
  );
};

export default (props: Props) => {
  return R.cond([
    [R.prop('timeline'), renderTimelineItem],
    [R.T, R.always(<Content {...props} />)],
  ])(props);
};
