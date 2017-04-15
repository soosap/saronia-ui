/* @flow */
import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
} from '@kadira/storybook-addon-knobs';

import Label from '.';

const stories = storiesOf('Label', module);
stories.addDecorator(withKnobs);
stories.addDecorator(story => (
  <div style={{ margin: '50px' }}>
    {story()}
  </div>
));

const arrowOptions = {
  left: 'Left',
  right: 'Right',
  top: 'Top',
  bottom: 'Bottom',
};

const labelSizes = {
  mini: 'Mini',
  tiny: 'Tiny',
  small: 'Small',
  medium: 'Medium',
  large: 'Large',
  big: 'Big',
  huge: 'Huge',
  massive: 'Massive',
};

const labelColor = {
  primary: 'Primary',
  secondary: 'Secondary',
  olive: 'Olive',
  green: 'Green',
  grey: 'Grey',
};

stories
  .add('default', () => (
    <Label
      size={select('Size', labelSizes, 'medium')}
      primary={boolean('Primary', false)}
      secondary={boolean('Secondary', false)}
      inverted={boolean('Inverted', false)}
    >
      MyLabel
    </Label>
  ))
  .add('arrow', () => (
    <Label
      arrow={select('Arrow', arrowOptions, 'right')}
      size={select('Size', labelSizes, 'medium')}
      primary={boolean('Primary', false)}
      secondary={boolean('Secondary', false)}
      inverted={boolean('Inverted', false)}
    >
      {text('Display', 'Enter a value')}
    </Label>
  ));
