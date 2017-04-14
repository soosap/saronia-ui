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
import { SizeEnum } from '../../assets/constants';
// console.log('SizeEnum', R.invertObj(SizeEnum));

import Button from '.';

const stories = storiesOf('Button', module);
stories.addDecorator(withKnobs);

stories
  .add('default', () => (
    <Button
      onClick={action('clicked')}
      accent={boolean('accent', false)}
      circular={select('circular', R.invertObj(SizeEnum), false)}
      inverted='hey'
      secondary={boolean('secondary', false)}
    >
      {text('Display', 'Register')}
    </Button>
  ));
