/* @flow */
import React from 'react';
import styled from 'styled-components';

import { Font, Color } from '../../../lib/constants';
import { getFontSize } from '../Title/Title';

type Props = {
  accent?: boolean,
  centered?: boolean,
  size: '1' | '2' | '3' | '4' | '5' | '6',
};

const Subtitle = (props: Props) => {
  const Subtitle = styled.h1.attrs({
    className: 'subtitle',
  })`
    font-family: ${props => (props.accent ? Font.ACCENT : Font.SYSTEM)};
    font-weight: 300;
    font-size: ${getFontSize};
    text-decoration: ${props => (props.size === '6' ? 'underline' : 'none')};
    text-align: ${props => (props.centered ? 'center' : 'left')};
    margin: 0;
    padding: 0;
    line-height: 1.125;
    word-break: break-word;
    color: ${Color.Black.LIGHT};

    &:not(:last-child) {
      margin-bottom: 1.5rem;
    }
  `.withComponent(`h${props.size || '5'}`);

  return <Subtitle {...props} />;
};

Subtitle.defaultProps = {
  size: '5',
  centered: false,
};

export default Subtitle;
