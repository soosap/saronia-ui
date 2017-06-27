/* @flow */
import { injectGlobal } from 'styled-components';
import { Font, FONT_URL } from './lib/constants';

export const generateAndInjectGlobalCSS = () => injectGlobal`
  @import url(${FONT_URL});

  body {
    font-family: ${Font.SYSTEM};
    margin: 0;
  }
`;

export * from './components/core';
export * from './components/form';
export * from './components/layout';
export * from './components/list';
