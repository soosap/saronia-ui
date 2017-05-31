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

import { Title, Subtitle } from '.';

const stories = storiesOf('Subtitle', module);
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
      <Subtitle {...props} size="3">Subtitle 3</Subtitle>

      <Title {...props} size="2">Title 2</Title>
      <Subtitle {...props} size="4">Subtitle 4</Subtitle>

      <Title {...props} size="3">Title 3</Title>
      <Subtitle {...props} size="5">Subtitle 5</Subtitle>

      <Title {...props}>Title 3 (default)</Title>
      <Subtitle {...props}>Subtitle 5 (default)</Subtitle>

      <Title {...props} size="4">Title 4</Title>
      <Subtitle {...props} size="6">Subtitle 6</Subtitle>
    </div>
  );
});
