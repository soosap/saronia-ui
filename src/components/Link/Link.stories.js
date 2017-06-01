/* @flow */
import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
} from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered';

import { Link } from '.';

const stories = storiesOf('Link', module);
stories.addDecorator(withKnobs).addDecorator(centered);

stories.add('default', () => {
  return <Link onClick={action('clicked')}>Sign up</Link>;
});
