import { configure, setAddon, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import infoAddon from '@storybook/addon-info';
import backgroundColor from 'react-storybook-decorator-background';
import { Color } from '../constants';

import { generateAndInjectGlobalCSS } from '../src';

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

addDecorator(
  backgroundColor([
    Color.White.LIGHT,
    Color.WHITE,
    Color.CREME,
    Color.GRAY,
    Color.BLACK,
    Color.PRIMARY,
    Color.SECONDARY,
  ]),
);

configure(loadStories, module);
