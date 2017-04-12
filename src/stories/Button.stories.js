/* @flow */
import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import {
  withKnobs,
  text,
  boolean,
  number,
} from '@kadira/storybook-addon-knobs';

import Button from '../components/Button';

const stories = storiesOf('Button', module);
stories.addDecorator(withKnobs);

stories
  .add('default', () => (
    <Button
      onClick={action('clicked')}
      accent={boolean('Accent', false)}
      inverted={boolean('Inverted', false)}
    >
      {text('Display', 'Register')}
    </Button>
  ))
  .add('secondary', () => (
    <Button
      onClick={action('clicked')}
      accent={boolean('Accent', false)}
      inverted={boolean('Inverted', false)}
      secondary
    >
      {text('Display', 'Register')}
    </Button>
  ));
