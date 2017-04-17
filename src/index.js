/* @flow */
import { injectGlobal } from 'styled-components';
import { Font, FONT_URL } from './assets/constants';

import { Button, Buttons } from './components/Button';
import { Label } from './components/Label';
import { Segment } from './components/Segment';

export const generateAndInjectGlobalCSS = () => injectGlobal`
  @font-face {
    font-family: ${Font.SYSTEM};
    font-family: ${Font.ACCENT};
    src: url(${FONT_URL});
  }

	body {
    font-family: ${Font.SYSTEM};
		margin: 0;
	}
`;

export { Button, Buttons, Label, Segment };
