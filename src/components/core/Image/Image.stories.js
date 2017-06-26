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

import { Image } from '../../core';

const isNotNil = R.both(
  R.complement(R.isNil),
  R.complement(R.equals('undefined')),
);

const stories = storiesOf('Image', module);
stories.addDecorator(withKnobs).addDecorator(centered);

stories.add('default', () => {
  const props = R.pickBy(isNotNil, {
    width: text('width', '200px'),
    height: text('height', 'inherit'),
    src: '/logo_wordmark.png',
    alt: 'logo',
  });

  return <Image {...props} />;
});
