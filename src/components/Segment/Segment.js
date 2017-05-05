/* @flow */
import R from 'ramda';
import React from 'react';
import styled from 'styled-components';

import type { Position, Magnitude, Breed, Size } from '../../types';
import {
  Color,
  Font,
  Border,
  BORDER_RADIUS,
  BreedEnum,
  SizeEnum,
} from '../../assets/constants';

type Props =
  | {|
      basic?: false,
      padding?: Size,
      inverted?: boolean,
      type?: Breed,
      compact?: boolean,
      emphasis?: 'raised' | 'stacked' | 'piled',
    |}
  | {|
      basic: true,
      padding?: Size,
      type?: Breed,
      compact?: boolean,
    |};

const basicStyle = {
  background: 'transparent',
  'box-shadow': 'none',
  border: 'none',
  'border-radius': '0px',
};

const compactStyle = {
  display: 'table',
};

const raisedStyle = {
  'box-shadow': '0px 2px 4px 0px rgba(34, 36, 38, 0.12), 0px 2px 10px 0px rgba(34, 36, 38, 0.15)',
};

const stackedStyle = {
  'padding-bottom': '1.4em',
};

const stackedStyleBefore = {
  content: "''",
  position: 'absolute',
  bottom: '-3px',
  left: '0%',
  'border-top': '1px solid rgba(34, 36, 38, 0.15)',
  background: 'rgba(0, 0, 0, 0.03)',
  width: '100%',
  height: '6px',
  visibility: 'visible',
  display: 'none',
};

const stackedStyleAfter = {
  content: "''",
  position: 'absolute',
  bottom: '-3px',
  left: '0%',
  'border-top': '1px solid rgba(34, 36, 38, 0.15)',
  background: 'rgba(0, 0, 0, 0.03)',
  width: '100%',
  height: '6px',
  visibility: 'visible',
};

const piledStyle = {
   margin: '3em 0em',
   'box-shadow': "''",
   'z-index': 'auto',
};

const piledStyleBefore = {
   content: "''",
   position: 'absolute',
   left: '0px',
   'border': '1px solid rgba(34, 36, 38, 0.15)',
   'background-color': getBackgroundColor,
   width: '100%',
   height: '100%',
   visibility: 'visible',
   display: 'block',
   transform: 'rotate(-1deg)',
   top: '0',
   'z-index': '-2',
   'box-shadow': "''",
};
const piledStyleAfter = {
   content: "''",
   position: 'absolute',
   left: '0px',
   'border': '1px solid rgba(34, 36, 38, 0.15)',
   'background-color': getBackgroundColor,
   width: '100%',
   height: '100%',
   visibility: 'visible',
   display: 'block',
   transform: 'rotate(1deg)',
   top: '0',
   'z-index': '-1',
   'box-shadow': "''",
};

const getBackgroundColor = R.cond([
  [
    R.both(R.propEq('inverted', true), R.propEq('type', BreedEnum.SECONDARY)),
    R.always(Color.SECONDARY),
  ],
  [
    R.both(R.propEq('inverted', true), R.propEq('type', BreedEnum.PRIMARY)),
    R.always(Color.PRIMARY),
  ],
  [R.propEq('inverted', true), R.always(Color.BLACK)],
  [R.T, R.always(Color.WHITE)],
]);

const getColor = R.cond([
  [
    R.both(R.propEq('inverted', true), R.propEq('type', BreedEnum.PRIMARY)),
    R.always(Color.BLACK_TRANSPARENT_SEVERE),
  ],
  [
    R.both(R.propEq('inverted', true), R.propEq('type', BreedEnum.SECONDARY)),
    R.always(Color.BLACK_TRANSPARENT_SEVERE),
  ],
  [
    R.both(R.propEq('inverted', true), R.propEq('basic', true)),
    R.always(Color.BLACK),
  ],
  [R.propEq('inverted', true), R.always(Color.IVORY)],
  [R.propEq('type', 'primary'), R.always(Color.PRIMARY)],
  [R.propEq('type', 'secondary'), R.always(Color.SECONDARY)],
  [R.T, R.always(Color.BLACK)],
]);

const getPadding = R.cond([
  [R.propEq('padding', SizeEnum.SMALL), R.always('1em')],
  [R.propEq('padding', SizeEnum.MEDIUM), R.always('2em')],
  [R.propEq('padding', SizeEnum.LARGE), R.always('3em')],
]);

const Segment = styled.div`
  position: relative;
  background-color: ${getBackgroundColor};
  color: ${getColor};
  box-shadow: 0px 1px 2px 0 rgba(34, 36, 38, 0.15);
  padding: ${getPadding};
  border-radius: ${BORDER_RADIUS};
  border: 1px solid rgba(34, 36, 38, 0.15);

  &:first-child {
      ${props => (props.emphasis == 'piled' ? 'margin-left: 0' : null)}
  }
  &:last-child {
      ${props => (props.emphasis == 'piled' ? 'margin-bottom: 0' : null)}
  }

  ${props => (props.basic ? { ...basicStyle } : null)};
  ${props => (props.compact ? { ...compactStyle } : null)};
  ${props => (props.emphasis == 'raised' ? { ...raisedStyle } : null)}
  ${props => (props.emphasis == 'stacked' ? { ...stackedStyle } : null)};
  ${props => (props.emphasis == 'piled' ? { ...piledStyle } : null)};

  &:before {
    ${props => (props.emphasis == 'stacked' ? { ...stackedStyleBefore } : null)}
    ${props => (props.emphasis == 'piled' ? { ...piledStyleBefore } : null)}
  }

  &:after{
    ${props => (props.emphasis == 'stacked' ? { ...stackedStyleAfter } : null)}
    ${props => (props.emphasis == 'piled' ? { ...piledStyleAfter } : null)}
  }
`;

export default (props: Props) => <Segment {...props} />;
