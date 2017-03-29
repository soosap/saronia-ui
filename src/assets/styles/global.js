/* @flow */
import { injectGlobal } from 'styled-components';

export default injectGlobal`
  @font-face {
    font-family: 'Satisfy', cursive;
    font-family: 'PT Sans', sans-serif;
    src: url('https://fonts.googleapis.com/css?family=PT+Sans|Satisfy');
  }

	body {
    font-family: 'PT Sans', sans-serif;
		margin: 0;
	}
`;
