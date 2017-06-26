/* @flow */
import React from 'react';
import R from 'ramda';

import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';

import { Logo } from '.';
import { SizeEnum } from '../../../lib/constants';

const isNotNil = R.both(
  R.complement(R.isNil),
  R.complement(R.equals('undefined')),
);

const stories = storiesOf('Logo', module);
stories.addDecorator(withKnobs);

stories.add('symbol', () => {
  const props = R.pickBy(isNotNil, {
    wordmark: boolean('wordmark', false),
    black: boolean('black', false),
    size: select('size', R.invertObj(SizeEnum), 'medium'),
  });

  return <Logo {...props} />;
});
