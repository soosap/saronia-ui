/* @flow */
import R from 'ramda';
import React from 'react';
import styled from 'styled-components';
import { Color, FontSize, BreedEnum, SizeEnum } from '../../../lib/constants';
import type { Size, Breed } from '../../../lib/types';

type Props = {
  children?: any,
  gap?: Size,
  labelBottom?: string,
  labelTop?: string,
  marginLeft?: string,
  type?: Breed,
};

const getColor = R.cond([
  [R.propEq('type', BreedEnum.PRIMARY), R.always(Color.PRIMARY)],
  [R.propEq('type', BreedEnum.SECONDARY), R.always(Color.SECONDARY)],
  [R.T, R.always(Color.Gray.STRONG)],
]);

const getMarginTopBottom = R.cond([
  [R.propEq('gap', SizeEnum.MINI), R.always('15px')],
  [R.propEq('gap', SizeEnum.TINY), R.always('20px')],
  [R.propEq('gap', SizeEnum.SMALL), R.always('25px')],
  [R.propEq('gap', SizeEnum.MEDIUM), R.always('30px')],
  [R.propEq('gap', SizeEnum.LARGE), R.always('35px')],
  [R.propEq('gap', SizeEnum.BIG), R.always('40px')],
  [R.propEq('gap', SizeEnum.HUGE), R.always('45px')],
  [R.propEq('gap', SizeEnum.MASSIVE), R.always('50px')],
  [R.T, R.always('30px')],
]);

const Wrapper = styled.li`
  margin: ${getMarginTopBottom} 0;
  position: relative;
  padding-left: 1rem;
`;

const VerticalLine = styled.span`
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    border: 1px solid ${Color.Gray.STRONG};

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
    color: ${Color.Black.LIGHT};
  `;

const LabelTop = Label.extend`
    top: -3px;
  `;

const LabelBottom = Label.extend`
    bottom: -5px;
  `;

const TimelineEvent = (props: Props) =>
  <Wrapper {...props}>
    <VerticalLine type={props.type} />
    <LabelTop {...R.pick(['marginLeft'], props)}>
      {R.prop('labelTop', props)}&nbsp;&nbsp;&nbsp;
    </LabelTop>
    <LabelBottom {...R.pick(['marginLeft'], props)}>
      {R.prop('labelBottom', props)}&nbsp;&nbsp;&nbsp;
    </LabelBottom>
    {props.children}
  </Wrapper>;

export default TimelineEvent;
