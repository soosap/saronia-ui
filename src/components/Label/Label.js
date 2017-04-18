/* @flow */
import R from 'ramda';
import React from 'react';
import styled from 'styled-components';
import type { Position, Magnitude, Breed } from '../../types';

import {
  Color,
  Font,
  FontSize,
  Border,
  BorderWidth,
  BORDER_RADIUS,
  BreedEnum,
  MagnitudeEnum,
} from '../../assets/constants';

type Props =
  | {|
      circular?: false,
      size?: Magnitude,
      arrow?: Position,
      type?: Breed,
      inverted?: boolean,
    |}
  | {|
      circular: true,
      radius: Magnitude,
      size?: Magnitude,
      type?: Breed,
      inverted?: boolean,
    |};

const labelBefore = {
  'background-color': 'inherit',
  'background-image': 'inherit',
  'border-width': BorderWidth.SMALL,
  'border-style': 'solid',
  'border-color': 'inherit',
};

const arrowLabelBefore = {
  position: 'absolute',
  content: '""',
  transform: 'rotate(45deg)',
  'background-image': 'none',
  'z-index': '2',
  width: '0.6666em',
  height: '0.6666em',
};

const leftArrow = {
  'margin-top': '0',
  'margin-left': '0.5em',
};

const leftArrowBefore = {
  'border-width': '0px 0px 1px 1px',
  transform: 'translateX(-53%) translateY(-53%) rotate(45deg)',
  bottom: 'auto',
  right: 'auto',
  top: '50%',
  left: '0',
};

const rightArrow = {
  'margin-top': '0',
  'margin-right': '0.5em',
};

const rightArrowBefore = {
  'border-width': '1px 1px 0 0',
  transform: 'translateX(53%) translateY(-53%) rotate(45deg)',
  bottom: 'auto',
  right: '0',
  top: '50%',
  left: 'auto',
};

const topArrow = {
  'margin-top': '0.5em',
};

const topArrowBefore = {
  'border-width': '1px 0 0 1px',
  transform: 'translateX(-53%) translateY(-53%) rotate(45deg)',
  top: '0',
  left: '50%',
};

const bottomArrow = {
  'margin-top': '0',
  'margin-bottom': '0.5em',
};

const bottomArrowBefore = {
  'border-width': '0 1px 1px 0',
  transform: 'translateX(-47%) translateY(-47%) rotate(45deg)',
  top: '100%',
  left: '50%',
};

const getBackgroundColor = R.cond([
  [
    R.both(R.propEq('inverted', true), R.propEq('type', 'secondary')),
    R.always(Color.WHITE),
  ],
  [
    R.both(R.propEq('inverted', true), R.propEq('type', 'primary')),
    R.always(Color.WHITE),
  ],
  [R.propEq('inverted', true), R.always(Color.WHITE)],
  [R.propEq('type', 'primary'), R.always(Color.PRIMARY)],
  [R.propEq('type', 'secondary'), R.always(Color.SECONDARY)],
  [R.propEq('inverted', true), R.always(Color.WHITE)],
  [R.T, R.always(Color.GREY)],
]);

const getBorderColor = R.cond([
  [
    R.both(R.propEq('inverted', true), R.propEq('type', BreedEnum.PRIMARY)),
    R.always(Color.PRIMARY),
  ],
  [
    R.both(R.propEq('inverted', true), R.propEq('type', BreedEnum.SECONDARY)),
    R.always(Color.SECONDARY),
  ],
  [R.propEq('inverted', true), R.always(Color.GREY)],
  [R.T, R.always('transparent')],
]);

const getColor = R.cond([
  [
    R.both(R.propEq('inverted', true), R.propEq('type', BreedEnum.PRIMARY)),
    R.always(Color.PRIMARY),
  ],
  [
    R.both(R.propEq('inverted', true), R.propEq('type', BreedEnum.SECONDARY)),
    R.always(Color.SECONDARY),
  ],
  [R.T, R.always(Color.BLACK_TRANSPARENT_VERY_STRONG)],
]);

const getSize = R.cond([
  [R.propEq('size', 'mini'), R.always(FontSize.MINI)],
  [R.propEq('size', 'tiny'), R.always(FontSize.TINY)],
  [R.propEq('size', 'small'), R.always(FontSize.SMALL)],
  [R.propEq('size', 'medium'), R.always(FontSize.MEDIUM)],
  [R.propEq('size', 'large'), R.always(FontSize.LARGE)],
  [R.propEq('size', 'big'), R.always(FontSize.BIG)],
  [R.propEq('size', 'huge'), R.always(FontSize.HUGE)],
  [R.propEq('size', 'massive'), R.always(FontSize.MASSIVE)],
]);

const getWidth = R.cond([
  [R.propEq('radius', MagnitudeEnum.MINI), R.always('1rem')],
  [R.propEq('radius', MagnitudeEnum.TINY), R.always('1.3rem')],
  [R.propEq('radius', MagnitudeEnum.SMALL), R.always('1.5rem')],
  [R.propEq('radius', MagnitudeEnum.MEDIUM), R.always('1.8rem')],
  [R.propEq('radius', MagnitudeEnum.LARGE), R.always('2.1rem')],
  [R.propEq('radius', MagnitudeEnum.BIG), R.always('2.5rem')],
  [R.propEq('radius', MagnitudeEnum.HUGE), R.always('3rem')],
  [R.propEq('radius', MagnitudeEnum.MASSIVE), R.always('3.5rem')],
  [R.T, R.always('inherit')],
]);

const getPadding = R.cond([[R.T, R.always('0.2rem')]]);

const Label = styled.label`
  display: ${props => (props.circular ? 'flex' : 'inline-block')};
  justify-content: ${props => (props.circular ? 'center' : undefined)};
  align-items: ${props => (props.circular ? 'center' : undefined)};
  overflow: ${props => (props.circular ? 'hidden' : undefined)};
  padding: ${props => (props.circular ? getPadding : '0.5833em 0.833em')};
  width: ${props => (props.circular ? getWidth : undefined)};
  height: ${props => (props.circular ? getWidth : undefined)};
  margin-left: ${props => (props.arrow == 'left' ? '0.5em !important' : undefined)};
  margin-right: ${props => (props.arrow == 'right' ? '0.5em !important' : undefined)};
  background-color: ${getBackgroundColor};
  color: ${getColor};
  font-size: ${getSize};
  font-family: ${Font.SYSTEM};
  border: ${Border.DEFAULT} solid ${getBorderColor};
  border-radius: ${props => (props.circular ? '50%' : BORDER_RADIUS)};
  text-align: center;
  background-image: none;
  text-transform: none;
  vertical-align: baseline;
  line-height: 1em;
  font-weight: bold;

   &:first-child {
       margin-left: 0;
   }
   &:last-child {
       margin-right: 0;
   }

   ${props => (props.arrow ? 'position: relative' : null)};
   ${props => (props.arrow == 'left' ? { ...leftArrow } : null)};
   ${props => (props.arrow == 'right' ? { ...rightArrow } : null)};
   ${props => (props.arrow == 'top' ? { ...topArrow } : null)};
   ${props => (props.arrow == 'bottom' ? { ...bottomArrow } : null)};

   &:before {
      ${props => (props.arrow ? { ...labelBefore } : null)};
      ${props => (props.arrow ? { ...arrowLabelBefore } : null)};
      ${props => (props.arrow == 'left' ? { ...leftArrowBefore } : null)};
      ${props => (props.arrow == 'right' ? { ...rightArrowBefore } : null)};
      ${props => (props.arrow == 'top' ? { ...topArrowBefore } : null)};
      ${props => (props.arrow == 'bottom' ? { ...bottomArrowBefore } : null)};
   }
`;

export default (props: Props) => <Label {...props} />;
