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

import { Title } from '.';

const stories = storiesOf('Title', module);
stories.addDecorator(withKnobs);

const isNotNil = R.both(
  R.complement(R.isNil),
  R.complement(R.equals('undefined')),
);

stories.add('default', () => {
  const props = R.pickBy(isNotNil, {
    accent: boolean('accent', false),
  });

  return (
    <div>
      <Title {...props} size="1">Title 1</Title>
      <Title {...props} size="2">Title 2</Title>
      <Title {...props} size="3">Title 3</Title>
      <Title {...props}>Title 3 (default)</Title>
      <Title {...props} size="4">Title 4</Title>
      <Title {...props} size="5">Title 5</Title>
      <Title {...props} size="6">Title 6</Title>
    </div>
  );
});
