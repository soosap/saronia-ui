/* @flow */
import React from 'react';
import R from 'ramda';

import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';

import { Logo } from '.';

import { MagnitudeEnum } from '../../lib/constants';

const isNotNil = R.both(
  R.complement(R.isNil),
  R.complement(R.equals('undefined')),
);

const stories = storiesOf('Logo', module);
stories.addDecorator(withKnobs);

stories.add('symbol', () => {
  const props = R.pickBy(isNotNil, {
    wordmark: boolean('wordmark', false),
    size: select('size', R.invertObj(MagnitudeEnum), 'medium'),
  });

  return <Logo {...props} />;
});
