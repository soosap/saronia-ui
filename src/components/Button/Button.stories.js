/* @flow */
import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import {
  withKnobs,
  text,
  boolean,
  number,
} from '@kadira/storybook-addon-knobs';

import Button from '.';

const stories = storiesOf('Button', module);
stories.addDecorator(withKnobs);

stories
  .add('default', () => (
    <Button
      onClick={action('clicked')}
      accent={boolean('accent', false)}
      circular={boolean('circular', false)}
      inverted={boolean('inverted', false)}
      secondary={boolean('secondary', false)}
    >
      {text('Display', 'Register')}
    </Button>
  ));
