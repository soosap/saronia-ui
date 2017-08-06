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
import { ThemeEnum } from '../../../lib/constants';

const themeOptions = R.invertObj(R.merge(ThemeEnum, { DEFAULT: undefined }));
const isNotNil = R.both(
  R.complement(R.isNil),
  R.complement(R.equals('undefined')),
);

const stories = storiesOf('Checkbox', module);
stories.addDecorator(withKnobs).addDecorator(centered);

stories.add('default', () => {
  const props = R.pickBy(isNotNil, {
    theme: select('theme', themeOptions, 'undefined'),
    vertical: boolean('vertical', true),
  });

  return (
    <Checkboxes {...props}>
      <Checkbox value="tamil">தமிழ்</Checkbox>
      <Checkbox value="hindi">हिंदी</Checkbox>
      <Checkbox value="malayalam">മലയാളം</Checkbox>
      <Checkbox value="telugu">తెలుగు</Checkbox>
    </Checkboxes>
  );
});
