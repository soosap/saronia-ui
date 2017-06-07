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

import { Buttons, Button, LinkButton } from '.';
import { BreedEnum, SizeEnum } from '../../lib/constants';

const breedOptions = R.invertObj(R.merge(BreedEnum, { DEFAULT: undefined }));
const isNotNil = R.both(
  R.complement(R.isNil),
  R.complement(R.equals('undefined')),
);

const stories = storiesOf('Buttons', module);
stories.addDecorator(withKnobs).addDecorator(centered);

stories
  .add('default', () => {
    const props = R.pickBy(isNotNil, {
      accent: boolean('accent', false),
      breed: select('breed', breedOptions, 'primary'),
      inverted: boolean('inverted', true),
      vertical: boolean('vertical', false),
      size: select('size', R.invertObj(SizeEnum), 'medium'),
    });

    return (
      <Buttons {...props} onClick={action('clicked')}>
        <Button>Login</Button>
        <Button>Do nothing</Button>
        <Button>Sign up</Button>
      </Buttons>
    );
  })
  .add('two items only', () => {
    const props = R.pickBy(isNotNil, {
      accent: boolean('accent', false),
      breed: select('breed', breedOptions, 'primary'),
      inverted: boolean('inverted', true),
      vertical: boolean('vertical', false),
      size: select('size', R.invertObj(SizeEnum), 'medium'),
    });

    return (
      <Buttons {...props} onClick={action('clicked')}>
        <Button>Login</Button>
        <Button>Sign up</Button>
      </Buttons>
    );
  })
  .add('links', () => {
    /*
    |-----------------------------------------------------------
    | Whitelisting props
    |-----------------------------------------------------------
    |
    | Currently, all props are passed to the underlying HTML
    | element. This will throw an error as an <a> tag receives
    | unknown props 'accent', 'breed', etc. There is currently
    | no official solution via styled-components. It's being
    | worked on and it'll probably land in v3.0.
    |
    */
    const props = R.pickBy(isNotNil, {
      accent: boolean('accent', false),
      breed: select('breed', breedOptions, 'primary'),
      inverted: boolean('inverted', true),
      vertical: boolean('vertical', false),
      size: select('size', R.invertObj(SizeEnum), 'medium'),
    });

    return (
      <Buttons {...props} onClick={action('clicked')}>
        <LinkButton href="https://saronia.com/login">Login</LinkButton>
        <LinkButton>Do nothing</LinkButton>
        <LinkButton href="https://saronia.com/signup">Sign up</LinkButton>
      </Buttons>
    );
  });
