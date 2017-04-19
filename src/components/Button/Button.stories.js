/* @flow */
import R from 'ramda';
import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
} from '@kadira/storybook-addon-knobs';

import { Button } from '.';
import { SizeEnum, MagnitudeEnum, BreedEnum } from '../../assets/constants';

const stories = storiesOf('Button', module);
const typeOptions = R.invertObj(R.merge(BreedEnum, { DEFAULT: undefined }));

stories.addDecorator(withKnobs);

const popOptions = R.invertObj({
  ACTIVE: 'active',
  FOCUS: 'focus',
  HOVER: 'hover',
  NONE: undefined,
});

stories.add('default', () => {
  const circular = boolean('circular', false);
  const children = text('children', 'Register');
  const props = R.pickBy(R.complement(R.isNil), {
    accent: boolean('accent', false),
    inverted: boolean('inverted', false),
    size: select('size', R.invertObj(MagnitudeEnum), 'medium'),
    circular,
    radius: circular
      ? select('radius', R.invertObj(MagnitudeEnum), 'large')
      : undefined,
    pop: select('pop', popOptions, undefined),
    pulse: circular ? boolean('pulse', false) : undefined,
    type: select('type', typeOptions, undefined),
  });

  return (
    <Button {...props} onClick={action('clicked')}>
      {children}
    </Button>
  );
});
