/* @flow */
import React from 'react';
import R from 'ramda';
import styled from 'styled-components';
import { Breakpoint, Color, BORDER_RADIUS } from '../../../lib/constants';
import type { Breed } from '../../../lib/types';

type Props = {
  keyWidth?: string,
  breed?: Breed,
  compact?: boolean,
};

const getKeyColor = R.cond([
  [R.propEq('breed', 'primary'), R.always(Color.Black.TRANSPARENT)],
  [R.propEq('breed', 'secondary'), R.always(Color.BLACK)],
  [R.T, R.always(Color.Creme.LIGHT)],
]);

const getKeyBackgroundColor = R.cond([
  [R.propEq('breed', 'primary'), R.always(Color.PRIMARY)],
  [R.propEq('breed', 'secondary'), R.always(Color.SECONDARY)],
  [R.T, R.always(Color.White.TRANSPARENT)],
]);

const getKeyBackgroundColorDark = R.cond([
  [R.propEq('breed', 'primary'), R.always(Color.Primary.DARK)],
  [R.propEq('breed', 'secondary'), R.always(Color.Secondary.DARK)],
  [R.T, R.always(Color.White.TRANSPARENT)],
]);

const getPadding = R.cond([
  [R.propEq('compact', true), R.always('.2rem .4rem')],
  [R.T, R.always('.3rem .5rem')],
]);

const Wrapper = styled.div.attrs({
  className: 'key-value-pair',
})`
  display: grid;
  grid-template-columns: ${R.prop('keyWidth')} 1fr;
  margin-bottom: .5rem;
  font-size: .9rem;
  border: 2px solid ${getKeyBackgroundColor};
  border-radius: ${BORDER_RADIUS};
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.08);

  @media (min-width: ${Breakpoint.TABLET}) {
    font-size: 1rem;
  }

  > * {
    padding: ${getPadding};
  }

  > *:first-child {
    background: linear-gradient(
      to bottom,
      ${getKeyBackgroundColorDark} 0%,
      ${getKeyBackgroundColor} 47%,
      ${getKeyBackgroundColorDark} 100%);
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
    color: ${getKeyColor};
  }

  > *:last-child {

  }
`;

const KeyValuePair = (props: Props) => <Wrapper {...props} />;

export default KeyValuePair;
