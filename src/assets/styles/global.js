/* @flow */
import { injectGlobal } from 'styled-components';
import fonts from './fonts';

export default injectGlobal`
  @font-face {
    font-family: ${fonts.system};
    font-family: ${fonts.accent};
    src: url(fonts.url);
  }

	body {
    font-family: ${fonts.system};
		margin: 0;
	}
`;
