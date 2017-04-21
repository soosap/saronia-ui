/* @flow */
import { injectGlobal } from 'styled-components';
import { Font, FONT_URL } from './assets/constants';

import { Button, Buttons } from './components/Button';
import { Icon } from './components/Icon';
import { Label } from './components/Label';
import { Segment } from './components/Segment';
import { H1, H2, H3, H4, H5, H6 } from './components/Heading';

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

export { Button, Buttons, Label, Segment, Icon, H1, H2, H3, H4, H5, H6 };
