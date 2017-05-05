import { configure } from '@kadira/storybook';
import { setOptions } from '@kadira/storybook-addon-options';
import { generateAndInjectGlobalCSS } from '../src';

generateAndInjectGlobalCSS();

const req = require.context('../src/components', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

setOptions({
  name: 'saronia-ui',
  url: 'https://ui.saronia.io'
});

configure(loadStories, module);
