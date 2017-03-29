import { configure } from '@kadira/storybook';
import '../src/assets/styles/global';

const req = require.context('../src/stories', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
