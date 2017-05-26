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

import Spinner from './Spinner';

const isNotNil = R.both(
  R.complement(R.isNil),
  R.complement(R.equals('undefined')),
);

const stories = storiesOf('Spinner', module);
stories.addDecorator(withKnobs);

stories.add('default', () => {
  const props = R.pickBy(isNotNil, { accent: boolean('accent', false) });
  return <Spinner {...props} onClick={action('clicked')} />;
});
