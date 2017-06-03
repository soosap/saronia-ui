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

import { Field, Fields, FieldLabel } from '.';
import { Input } from '../Input';

const isNotNil = R.both(
  R.complement(R.isNil),
  R.complement(R.equals('undefined')),
);

const stories = storiesOf('Fields', module);
stories.addDecorator(withKnobs).addDecorator(centered);

stories.add('default', () => {
  const props = R.pickBy(isNotNil, {
    vertical: boolean('vertical', false),
  });

  return (
    <div>
      <Fields {...props}>
        <Field>
          <FieldLabel>First name</FieldLabel>
          <Input placeholder="Enter something..." onClick={action('clicked')} />
        </Field>
        <Field>
          <FieldLabel>Last name</FieldLabel>
          <Input placeholder="Enter something..." onClick={action('clicked')} />
        </Field>
      </Fields>
      <Fields {...props}>
        <Field>
          <FieldLabel>First name</FieldLabel>
          <Input placeholder="Enter something..." onClick={action('clicked')} />
        </Field>
        <Field>
          <FieldLabel>Last name</FieldLabel>
          <Input placeholder="Enter something..." onClick={action('clicked')} />
        </Field>
        <Field>
          <FieldLabel>Last name</FieldLabel>
          <Input placeholder="Enter something..." onClick={action('clicked')} />
        </Field>
      </Fields>
    </div>
  );
});
