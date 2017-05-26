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
    accent: boolean('accent', false),
    placeholder: 'Enter your name...',
  });

  return (
    <Form>
      <Input {...props} />
      <TextArea {...props} />
    </Form>
  );
});
