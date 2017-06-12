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

const isNotNil = R.both(
  R.complement(R.isNil),
  R.complement(R.equals('undefined')),
);

const stories = storiesOf('Image', module);
stories.addDecorator(withKnobs).addDecorator(centered);

stories.add('default', () => {
  const props = R.pickBy(isNotNil, {
    width: text('width', '100%'),
    height: text('height', '100%'),
  });

  return <Image {...props} onClick={action('clicked')} />;
});
