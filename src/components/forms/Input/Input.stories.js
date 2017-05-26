/* @flow */
import React from 'react';
import R from 'ramda';
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

import { Input, TextArea } from '.';

const stories = storiesOf('Input', module);
stories.addDecorator(withKnobs).addDecorator(centered);

const isNotNil = R.both(
  R.complement(R.isNil),
  R.complement(R.equals('undefined')),
);

stories.add('default', () => {
  const props = R.pickBy(isNotNil, {
    accent: boolean('accent', false),
  });

  return <Input {...props} onClick={action('clicked')} />;
});
