/* @flow */
import React from 'react';
import styled from 'styled-components';

import { Font, Color } from '../../../lib/constants';
import {
  getTextTransform,
  getFontSize,
  getTextAlign,
  getTextDecoration,
} from '../Title/Title';

type Props = {
  accent?: boolean,
  align?: 'left' | 'center' | 'right',
  size: '1' | '2' | '3' | '4' | '5' | '6',
  transform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase',
  decoration?: 'none' | 'underline' | 'overline' | 'line-through',
};

const Subtitle = (props: Props) => {
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
    color: ${Color.Black.LIGHT};

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

export default Subtitle;
