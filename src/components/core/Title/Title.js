/* @flow */
import React from 'react';
import R from 'ramda';
import styled from 'styled-components';
import { Font, Color } from '../../../lib/constants';

type Props = {
  accent?: boolean,
  align?: 'left' | 'center' | 'right',
  size: '1' | '2' | '3' | '4' | '5' | '6',
  transform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase',
  decoration?: 'none' | 'underline' | 'overline' | 'line-through',
};

/*
|-----------------------------------------------------------
| Helper methods
|-----------------------------------------------------------
*/
export const getTextTransform = (props: Props) =>
  props.transform ? props.transform : 'inherit';

export const getTextDecoration = (props: Props) =>
  props.decoration ? props.decoration : 'inherit';

export const getTextAlign = R.cond([
  [R.propEq('align', 'left'), R.always('left')],
  [R.propEq('align', 'right'), R.always('right')],
  [R.T, R.always('center')],
]);

export const getFontSize = R.cond([
  [R.propEq('size', '1'), R.always('3rem')],
  [R.propEq('size', '2'), R.always('2.4rem')],
  [R.propEq('size', '3'), R.always('2rem')],
  [R.propEq('size', '4'), R.always('1.6rem')],
  [R.propEq('size', '5'), R.always('1.3rem')],
  [R.propEq('size', '6'), R.always('1rem')],
]);

const Title = (props: Props) => {
  const { accent, transform, decoration, ...rest } = props;

  const Title = styled.h1.attrs({
    className: 'title',
  })`
    font-family: ${props => (props.accent ? Font.ACCENT : Font.SYSTEM)};
    font-weight: 300;
    font-size: ${getFontSize};
    text-transform: ${getTextTransform};
    text-decoration: ${getTextDecoration};
    text-align: ${getTextAlign};
    margin: 0;
    padding: 0;
    line-height: 1.125;
    word-break: break-word;
    color: ${Color.BLACK};

    &:not(:last-child) {
      margin-bottom: 1.5rem;
    }

    + .subtitle {
      margin-top: -1.25rem;
    }
  `.withComponent(`h${props.size || '3'}`);

  return (
    <Title
      accent={accent}
      transform={transform}
      decoration={decoration}
      {...rest}
    />
  );
};

Title.defaultProps = {
  size: '3',
  align: 'center',
};

export default Title;
