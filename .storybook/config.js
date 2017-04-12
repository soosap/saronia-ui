import { configure } from '@kadira/storybook';
import '../src/assets/styles/global';

const req = require.context('../src/components', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
