/* @flow */
import React from 'react';
import R from 'ramda';
import styled from 'styled-components';
import { Font, Color } from '../../../lib/constants';

type Props = {
  accent?: boolean,
  centered?: boolean,
  size: '1' | '2' | '3' | '4' | '5' | '6',
  transform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase',
  decoration?: 'none' | 'underline' | 'overline' | 'line-through',
};

/*
|-----------------------------------------------------------
| Helper methods
|-----------------------------------------------------------
*/
export const getFontSize = R.cond([
  [R.propEq('size', '1'), R.always('3rem')],
  [R.propEq('size', '2'), R.always('2.6rem')],
  [R.propEq('size', '3'), R.always('2.2rem')],
  [R.propEq('size', '4'), R.always('1.8rem')],
  [R.propEq('size', '5'), R.always('1.4rem')],
  [R.propEq('size', '6'), R.always('1.1rem')],
]);

export const getMarginBottom = R.cond([
  [R.propEq('size', '1'), R.always('1.4rem')],
  [R.propEq('size', '2'), R.always('1.2rem')],
  [R.propEq('size', '3'), R.always('1.1rem')],
  [R.propEq('size', '4'), R.always('1rem')],
  [R.propEq('size', '5'), R.always('0.7rem')],
  [R.propEq('size', '6'), R.always('0.5rem')],
  [R.T, R.always('1.1rem')],
]);

const Title = (props: Props) => {
  const Title = styled.h1.attrs({
    className: 'title',
  })`
    font-family: ${props => (props.accent ? Font.ACCENT : Font.SYSTEM)};
    font-size: ${getFontSize};
    font-weight: ${props => (props.size === '6' ? 'bold' : '400')};
    text-align: ${props => (props.centered ? 'center' : 'left')};
    margin: 0;
    padding: 0;
    line-height: 1.125;
    word-break: break-word;
    color: ${Color.BLACK};
    margin-bottom: ${getMarginBottom};

    + .subtitle {
      margin-top: ${props => `calc(-${getMarginBottom(props)} + 0.15rem)`};
    }
  `.withComponent(`h${props.size || '3'}`);

  return (
    <Title {...props} />
  );
};

Title.defaultProps = {
  size: '3',
  centered: false,
};

export default Title;
