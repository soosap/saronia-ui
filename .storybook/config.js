import { configure, setAddon, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import infoAddon from '@storybook/addon-info';
import backgrounds from '@storybook/addon-backgrounds';

import { generateAndInjectGlobalCSS } from '../src';
import { Color } from '../src/lib/constants';

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

addDecorator(backgrounds([
  { name: 'White.LIGHT', value: Color.White.LIGHT, default: true },
  { name: 'WHITE', value: Color.WHITE },
  { name: 'CREME', value: Color.CREME },
  { name: 'GRAY', value: Color.GRAY },
  { name: 'BLACK', value: Color.BLACK },
  { name: 'PRIMARY', value: Color.PRIMARY },
  { name: 'SECONDARY', value: Color.SECONDARY },
]));

configure(loadStories, module);
