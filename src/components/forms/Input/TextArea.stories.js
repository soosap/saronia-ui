/* @flow */
import React from 'react';
import R from 'ramda';
import styled from 'styled-components';
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

import { Input, TextArea } from '.';
import { Field, FieldLabel } from '../Field';

const stories = storiesOf('TextArea', module);
stories.addDecorator(withKnobs).addDecorator(centered);

const isNotNil = R.both(
  R.complement(R.isNil),
  R.complement(R.equals('undefined')),
);

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

stories.add('default', () => {
  const props = R.pickBy(isNotNil, {
    placeholder: 'Enter your email...',
  });

  return (
    <Form>
      <Field>
        <FieldLabel>Email</FieldLabel>
        <Input {...props} />
      </Field>
      <Field>
        <FieldLabel>Description</FieldLabel>
        <TextArea {...props} placeholder="Tell us about you." />
      </Field>
    </Form>
  );
});
