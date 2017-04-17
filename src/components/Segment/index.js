/* @flow */
import R from 'ramda';
import React from 'react';
import styled from 'styled-components';

import type { Position, Size, Type, Degree } from '../../types';
import { colors, fonts, borders } from '../../assets/styles';

type Props = {
  basic?: boolean,
  inverted?: boolean,
  type?: Type,
  padding?: Degree,
  compact?: boolean,
  emphasis?: 'raised' | 'stacked' | 'piled',
};

const basicStyle = {
  background: 'none transparent',
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
const getBackgroundColor = R.cond([
  [
    R.both(R.propEq('inverted', true), R.propEq('type', 'secondary')),
    R.always(colors.secondary),
  ],
  [
    R.both(R.propEq('inverted', true), R.propEq('type', 'primary')),
    R.always(colors.primary),
  ],
  [R.propEq('inverted', true), R.always(colors.black)],
  [R.T, R.always(colors.white)],
]);

const getColor = R.cond([
  [
    R.both(R.propEq('inverted', true), R.propEq('type', 'primary')),
    R.always(colors.blackTransparent),
  ],
  [
    R.both(R.propEq('inverted', true), R.propEq('type', 'secondary')),
    R.always(colors.blackTransparent),
  ],
  [
    R.both(R.propEq('inverted', true), R.propEq('basic', true)),
    R.always(colors.black),
  ],
  [R.propEq('inverted', true), R.always(colors.ivory)],
  [R.propEq('type', 'primary'), R.always(colors.primary)],
  [R.propEq('type', 'secondary'), R.always(colors.secondary)],
  [R.T, R.always(colors.black)],
]);

const getPadding = R.cond([
  [R.propEq('padding', 'small'), R.always('1em')],
  [R.propEq('padding', 'medium'), R.always('2em')],
  [R.propEq('padding', 'large'), R.always('3em')],
]);

const Segment = styled.div`
  position: relative;
  background: ${getBackgroundColor};
  color: ${getColor};
  box-shadow: 0px 1px 2px 0 rgba(34, 36, 38, 0.15);
  padding: ${getPadding};
  border-radius: ${borders.radius};
  border: 1px solid rgba(34, 36, 38, 0.15);

  ${props => props.basic ? { ...basicStyle } : null};
  ${props => props.padded ? { ...paddedStyle } : null};
  ${props => props.compact ? { ...compactStyle } : null};
  ${props => props.emphasis == 'raised' ? {...raisedStyle} : null}
  ${props => props.emphasis == 'stacked' ? { ...stackedStyle } : null};

  &:before {
    ${props => props.emphasis == 'stacked' ? {...stackedStyleBefore} : null}
  }
  &:after{
    ${props => props.emphasis == 'stacked' ? {...stackedStyleAfter} : null}
  }
`;

export default (props: Props) => <Segment {...props} />;
