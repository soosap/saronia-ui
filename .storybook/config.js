import { configure, setAddon } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import infoAddon from '@storybook/addon-info';

import { generateAndInjectGlobalCSS } from '../src';

generateAndInjectGlobalCSS();

const req = require.context('../src/components', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

setAddon(infoAddon);

setOptions({
  name: 'saronia-ui',
  url: 'https://ui.saronia.io'
});

configure(loadStories, module);
