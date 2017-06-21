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

import { Checkbox, Checkboxes } from '.';
import { BreedEnum } from '../../../lib/constants';

const breedOptions = R.invertObj(R.merge(BreedEnum, { DEFAULT: undefined }));
const isNotNil = R.both(
  R.complement(R.isNil),
  R.complement(R.equals('undefined')),
);

const stories = storiesOf('Checkbox', module);
stories.addDecorator(withKnobs).addDecorator(centered);

stories.add('default', () => {
  const props = R.pickBy(isNotNil, {
    breed: select('breed', breedOptions, 'undefined'),
    vertical: boolean('vertical', true),
  });

  return (
    <Checkboxes {...props}>
      <Checkbox>தமிழ்</Checkbox>
      <Checkbox>हिंदी</Checkbox>
      <Checkbox>മലയാളം</Checkbox>
      <Checkbox>తెలుగు</Checkbox>
    </Checkboxes>
  );
});
