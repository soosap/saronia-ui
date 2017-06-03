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

import { Form } from '.';
import { Field, Fields, FieldLabel } from '../Field';
import { Input } from '../Input';

const isNotNil = R.both(
  R.complement(R.isNil),
  R.complement(R.equals('undefined')),
);

const stories = storiesOf('Form', module);
stories.addDecorator(withKnobs);

stories
  .add('default', () => {
    const props = R.pickBy(isNotNil, {
      accent: boolean('accent', false),
    });

    return (
      <Form>
        <Fields {...props}>
          <Field>
            <FieldLabel>First name</FieldLabel>
            <Input
              placeholder="Enter something..."
              onClick={action('clicked')}
            />
          </Field>
          <Field>
            <FieldLabel>Last name</FieldLabel>
            <Input
              placeholder="Enter something..."
              onClick={action('clicked')}
            />
          </Field>
        </Fields>
        <Fields {...props}>
          <Field>
            <FieldLabel>First name</FieldLabel>
            <Input
              placeholder="Enter something..."
              onClick={action('clicked')}
            />
          </Field>
          <Field>
            <FieldLabel>Last name</FieldLabel>
            <Input
              placeholder="Enter something..."
              onClick={action('clicked')}
            />
          </Field>
          <Field>
            <FieldLabel>Last name</FieldLabel>
            <Input
              placeholder="Enter something..."
              onClick={action('clicked')}
            />
          </Field>
        </Fields>
      </Form>
    );
  })
  .add('w/o Form', () => {
    const props = R.pickBy(isNotNil, {
      accent: boolean('accent', false),
    });

    return (
      <div>
        <Fields {...props}>
          <Field>
            <FieldLabel>First name</FieldLabel>
            <Input
              placeholder="Enter something..."
              onClick={action('clicked')}
            />
          </Field>
          <Field>
            <FieldLabel>Last name</FieldLabel>
            <Input
              placeholder="Enter something..."
              onClick={action('clicked')}
            />
          </Field>
        </Fields>
        <Fields {...props}>
          <Field>
            <FieldLabel>First name</FieldLabel>
            <Input
              placeholder="Enter something..."
              onClick={action('clicked')}
            />
          </Field>
          <Field>
            <FieldLabel>Last name</FieldLabel>
            <Input
              placeholder="Enter something..."
              onClick={action('clicked')}
            />
          </Field>
          <Field>
            <FieldLabel>Last name</FieldLabel>
            <Input
              placeholder="Enter something..."
              onClick={action('clicked')}
            />
          </Field>
        </Fields>
      </div>
    );
  });
