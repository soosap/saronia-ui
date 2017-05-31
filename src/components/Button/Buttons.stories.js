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

import { Buttons, Button } from '.';
import { BreedEnum } from '../../lib/constants';

const breedOptions = R.invertObj(R.merge(BreedEnum, { DEFAULT: undefined }));
const isNotNil = R.both(
  R.complement(R.isNil),
  R.complement(R.equals('undefined')),
);

const stories = storiesOf('Buttons', module);
stories.addDecorator(withKnobs).addDecorator(centered);

stories.add('default', () => {
  const props = R.pickBy(isNotNil, {
    accent: boolean('accent', false),
    inverted: boolean('inverted', true),
    breed: select('breed', breedOptions, 'primary'),
  });

  return (
    <Buttons {...props} onClick={action('clicked')}>
      <Button>Login</Button>
      <Button>Do nothing</Button>
      <Button>Sign up</Button>
    </Buttons>
  );
});
