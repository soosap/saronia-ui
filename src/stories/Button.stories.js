/* @flow */
import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { withKnobs, text, boolean, number } from '@kadira/storybook-addon-knobs';

import Button from '../components/Button';

const stories = storiesOf('Button', module);

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories.addDecorator(withKnobs);

stories
  .add('default', () => (
    <Button onClick={action('clicked')}>{text('Display', 'Register')}</Button>
  ))
  .add('accent', () => (
    <Button accent onClick={action('clicked')}>{text('Display', 'Subscribe')}</Button>
  ))
