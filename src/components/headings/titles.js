/* @flow */
import React from 'react';
import R from 'ramda';
import styled from 'styled-components';
import { Font, FontSize } from '../../lib/constants';

type Props = {
  accent?: boolean,
  align?: 'left' | 'center' | 'right',
  size: '1' | '2' | '3' | '4' | '5' | '6',
  transform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase',
  decoration?: 'none' | 'underline' | 'overline' | 'line-through',
};

const getFontSize = R.cond([
  [R.propEq('size', '1'), R.always(FontSize.MASSIVE)],
  [R.propEq('size', '2'), R.always(FontSize.HUGE)],
  [R.propEq('size', '3'), R.always(FontSize.BIG)],
  [R.propEq('size', '4'), R.always(FontSize.LARGE)],
  [R.propEq('size', '5'), R.always(FontSize.MEDIUM)],
  [R.propEq('size', '6'), R.always(FontSize.SMALL)],
]);

/*
|-----------------------------------------------------------
| Helper methods
|-----------------------------------------------------------
*/
const getTextTransform = props =>
  props.transform ? props.transform : 'inherit';

const getTextDecoration = props =>
  props.decoration ? props.decoration : 'inherit';

const getTextAlign = R.cond([
  [R.propEq('align', 'left'), R.always('left')],
  [R.propEq('align', 'right'), R.always('right')],
  [R.T, R.always('center')],
]);

/*
|-----------------------------------------------------------
| <Title />
|-----------------------------------------------------------
*/
export const Title = (props: Props) => {
  const { accent, transform, decoration, ...rest } = props;

  const Title = styled.h1`
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

/*
|-----------------------------------------------------------
| <Subtitle />
|-----------------------------------------------------------
*/
export const Subtitle = (props: Props) => {
  const { accent, transform, decoration, ...rest } = props;

  const Subtitle = styled.h1.attrs({
    className: 'subtitle',
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
    color: grey;

    &:not(:last-child) {
      margin-bottom: 1.5rem;
    }
  `.withComponent(`h${props.size || '5'}`);

  return (
    <Subtitle
      accent={accent}
      transform={transform}
      decoration={decoration}
      {...rest}
    />
  );
};

Subtitle.defaultProps = {
  size: '5',
  align: 'center',
};
