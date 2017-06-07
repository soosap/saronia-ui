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

import { Segment } from '.';
import { IntensityEnum } from '../../../lib/constants';

const intensityOptions = R.invertObj(
  R.merge(IntensityEnum, { FALSE: false, TRUE: true }),
);
const isNotNil = R.both(
  R.complement(R.isNil),
  R.complement(R.equals('undefined')),
);

const stories = storiesOf('Segment', module);
stories.addDecorator(withKnobs);

stories.add('default', () => {
  const padded = select('size', intensityOptions, 'moderate');
  const props = R.pickBy(isNotNil, {
    padded: padded === 'true' ? true : padded === 'false' ? false : padded,
  });

  return (
    <Segment {...props} onClick={action('clicked')}>
      Hey I am a Segment!
    </Segment>
  );
});
