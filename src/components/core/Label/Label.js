/* @flow */
import React from 'react';
import R from 'ramda';
import styled from 'styled-components';
import type { PositionEdgesOnly, Size, Theme } from '../../../lib/types';

import {
  Color,
  Font,
  FontSize,
  BorderWidth,
  BORDER_RADIUS,
  ThemeEnum,
  SizeEnum,
} from '../../../lib/constants';

type Props =
  | {|
      circular?: false,
      size?: Size,
      arrowPositionPosition?: PositionEdgesOnly,
      theme?: Theme,
      inverted?: boolean,
    |}
  | {|
      circular: true,
      radius: Size,
      size?: Size,
      theme?: Theme,
      inverted?: boolean,
    |};

const labelBefore = {
  'background-color': 'inherit',
  'background-image': 'inherit',
  'border-width': BorderWidth.SMALL,
  'border-style': 'solid',
  'border-color': 'inherit',
};

const arrowPositionLabelBefore = {
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
    R.both(R.propEq('inverted', true), R.propEq('theme', ThemeEnum.SECONDARY)),
    R.always(Color.WHITE),
  ],
  [
    R.both(R.propEq('inverted', true), R.propEq('theme', ThemeEnum.PRIMARY)),
    R.always(Color.WHITE),
  ],
  [R.propEq('inverted', true), R.always(Color.WHITE)],
  [R.propEq('theme', ThemeEnum.PRIMARY), R.always(Color.PRIMARY)],
  [R.propEq('theme', ThemeEnum.SECONDARY), R.always(Color.SECONDARY)],
  [R.propEq('inverted', true), R.always(Color.WHITE)],
  [R.T, R.always(Color.GRAY)],
]);

const getBorderColor = R.cond([
  [
    R.both(R.propEq('inverted', true), R.propEq('theme', ThemeEnum.PRIMARY)),
    R.always(Color.PRIMARY),
  ],
  [
    R.both(R.propEq('inverted', true), R.propEq('theme', ThemeEnum.SECONDARY)),
    R.always(Color.SECONDARY),
  ],
  [R.propEq('inverted', true), R.always(Color.Gray.STRONG)],
  [R.T, R.always('transparent')],
]);

const getColor = R.cond([
  [
    R.both(R.propEq('inverted', true), R.propEq('theme', ThemeEnum.PRIMARY)),
    R.always(Color.PRIMARY),
  ],
  [
    R.both(R.propEq('inverted', true), R.propEq('theme', ThemeEnum.SECONDARY)),
    R.always(Color.SECONDARY),
  ],
  [R.T, R.always(Color.Black.TRANSPARENT)],
]);

const getSize = R.cond([
  [R.propEq('size', SizeEnum.MINI), R.always(FontSize.MINI)],
  [R.propEq('size', SizeEnum.TINY), R.always(FontSize.TINY)],
  [R.propEq('size', SizeEnum.SMALL), R.always(FontSize.SMALL)],
  [R.propEq('size', SizeEnum.MEDIUM), R.always(FontSize.MEDIUM)],
  [R.propEq('size', SizeEnum.LARGE), R.always(FontSize.LARGE)],
  [R.propEq('size', SizeEnum.BIG), R.always(FontSize.BIG)],
  [R.propEq('size', SizeEnum.HUGE), R.always(FontSize.HUGE)],
  [R.propEq('size', SizeEnum.MASSIVE), R.always(FontSize.MASSIVE)],
]);

const getWidth = R.cond([
  [R.propEq('radius', SizeEnum.MINI), R.always('1rem')],
  [R.propEq('radius', SizeEnum.TINY), R.always('1.3rem')],
  [R.propEq('radius', SizeEnum.SMALL), R.always('1.5rem')],
  [R.propEq('radius', SizeEnum.MEDIUM), R.always('1.8rem')],
  [R.propEq('radius', SizeEnum.LARGE), R.always('2.1rem')],
  [R.propEq('radius', SizeEnum.BIG), R.always('2.5rem')],
  [R.propEq('radius', SizeEnum.HUGE), R.always('3rem')],
  [R.propEq('radius', SizeEnum.MASSIVE), R.always('3.5rem')],
  [R.T, R.always('inherit')],
]);

const getPadding = R.cond([[R.T, R.always('0.2rem')]]);

const Label = styled.span`
  display: ${props => (props.circular ? 'flex' : 'inline-block')};
  justify-content: ${props => (props.circular ? 'center' : undefined)};
  align-items: ${props => (props.circular ? 'center' : undefined)};
  overflow: ${props => (props.circular ? 'hidden' : undefined)};
  padding: ${props => (props.circular ? getPadding : '0.5833em 0.833em')};
  width: ${props => (props.circular ? getWidth : undefined)};
  height: ${props => (props.circular ? getWidth : undefined)};
  margin-left: ${props =>
    props.arrowPosition === 'left' ? '0.5em !important' : undefined};
  margin-right: ${props =>
    props.arrowPosition === 'right' ? '0.5em !important' : undefined};
  background-color: ${getBackgroundColor};
  color: ${getColor};
  font-size: ${getSize};
  font-family: ${Font.SYSTEM};
  border: ${BorderWidth.SMALL} solid ${getBorderColor};
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

  ${props => (props.arrowPosition ? 'position: relative' : null)};
  ${props => (props.arrowPosition === 'left' ? { ...leftArrow } : null)};
  ${props => (props.arrowPosition === 'right' ? { ...rightArrow } : null)};
  ${props => (props.arrowPosition === 'top' ? { ...topArrow } : null)};
  ${props => (props.arrowPosition === 'bottom' ? { ...bottomArrow } : null)};

  &:before {
    ${props => (props.arrowPosition ? { ...labelBefore } : null)};
    ${props => (props.arrowPosition ? { ...arrowPositionLabelBefore } : null)};
    ${props =>
      props.arrowPosition === 'left' ? { ...leftArrowBefore } : null};
    ${props =>
      props.arrowPosition === 'right' ? { ...rightArrowBefore } : null};
    ${props => (props.arrowPosition === 'top' ? { ...topArrowBefore } : null)};
    ${props =>
      props.arrowPosition === 'bottom' ? { ...bottomArrowBefore } : null};
  }
`;

export default (props: Props) => <Label {...props} />;
