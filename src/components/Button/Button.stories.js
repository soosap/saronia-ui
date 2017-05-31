/* @flow */
import R from 'ramda';
import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  text,
  boolean,
  select,
} from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered';

import { Button } from '.';
import {
  MagnitudeEnum,
  BreedEnum,
  IconSVGPath,
} from '../../lib/constants';

const stories = storiesOf('Button', module);
stories.addDecorator(withKnobs).addDecorator(centered);

const breedOptions = R.invertObj(R.merge(BreedEnum, { DEFAULT: undefined }));
const iconOptions = R.invertObj(IconSVGPath);
const iconPositionOptions = R.invertObj({ LEFT: 'left', RIGHT: 'right' });
const popOptions = R.invertObj({
  ACTIVE: 'active',
  FOCUS: 'focus',
  HOVER: 'hover',
  NONE: undefined,
});
const isNotNil = R.both(
  R.complement(R.isNil),
  R.complement(R.equals('undefined')),
);

stories
  .add('default', () => {
    const circular = boolean('circular', false);
    const children = text('children', 'Register');
    const props = R.pickBy(isNotNil, {
      accent: boolean('accent', false),
      inverted: boolean('inverted', false),
      size: select('size', R.invertObj(MagnitudeEnum), 'medium'),
      circular,
      radius: circular
        ? select('radius', R.invertObj(MagnitudeEnum), 'large')
        : undefined,
      pop: select('pop', popOptions, undefined),
      pulse: circular ? boolean('pulse', false) : undefined,
      breed: select('breed', breedOptions, 'primary'),
    });

    return (
      <Button {...props} onClick={action('clicked')}>
        {children}
      </Button>
    );
  })
  .add('icon', () => {
    const children = text('children', 'Register');
    const props = R.pickBy(isNotNil, {
      accent: boolean('accent', false),
      icon: select('icon', iconOptions, IconSVGPath.TWITTER),
      iconPosition: select('icon position', iconPositionOptions, 'left'),
      inverted: boolean('inverted', false),
      size: select('size', R.invertObj(MagnitudeEnum), 'medium'),
      pop: select('pop', popOptions, undefined),
      breed: select('breed', breedOptions, 'primary'),
    });

    return (
      <Button {...props} onClick={action('clicked')}>
        {children}
      </Button>
    );
  });
