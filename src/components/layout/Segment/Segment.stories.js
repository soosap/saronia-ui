/* @flow */
import R from 'ramda';
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
} from '@storybook/addon-knobs';

import { BreedEnum, SizeEnum } from '../../../lib/constants';
import { Segment } from '.';

const stories = storiesOf('Segment', module);
stories.addDecorator(withKnobs);

const typeOptions = R.invertObj(R.merge(BreedEnum, { DEFAULT: undefined }));
const paddingOptions = R.invertObj(SizeEnum);
const emphasisOptions = R.invertObj({
  DEFAULT: undefined,
  RAISED: 'raised',
  STACKED: 'stacked',
  PILED: 'piled',
});

stories.add('default', () => {
  const children = text(
    'children',
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  );

  const props = {
    basic: boolean('basic', false),
    type: select('type', typeOptions, undefined),
    inverted: boolean('inverted', false),
    padding: select('padding', paddingOptions, 'medium'),
    compact: boolean('compact', false),
    emphasis: select('emphasis', emphasisOptions, undefined),
  };

  return (
    <Segment {...props}>
      {children}
    </Segment>
  );
});
