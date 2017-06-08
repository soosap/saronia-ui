import { configure, setAddon, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import infoAddon from '@storybook/addon-info';
// import backgrounds from 'react-storybook-addon-backgrounds';

import { generateAndInjectGlobalCSS } from '../src';
// import { Color } from '../src/lib/constants';

generateAndInjectGlobalCSS();

const req = require.context('../src', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

setAddon(infoAddon);

setOptions({
  name: 'saronia-ui',
  url: 'https://ui.saronia.io',
});

// addDecorator(
//   backgroundColor([
//     Color.White.LIGHT,
//     Color.WHITE,
//     Color.CREME,
//     Color.GRAY,
//     Color.BLACK,
//     Color.PRIMARY,
//     Color.SECONDARY,
//   ]),
// );

// addDecorator(backgrounds([
//   { name: 'Color.White.LIGHT', value: Color.White.LIGHT, default: true },
//   { name: 'Color.WHITE', value: Color.WHITE },
//   { name: 'Color.CREME', value: Color.CREME },
//   { name: 'Color.GRAY', value: Color.GRAY },
//   { name: 'Color.BLACK', value: Color.BLACK },
//   { name: 'Color.PRIMARY', value: Color.PRIMARY },
//   { name: 'Color.SECONDARY', value: Color.SECONDARY },
// ]));

configure(loadStories, module);
