/* @flow */
import React from 'react';
import R from 'ramda';

import { storiesOf, action, linkTo } from '@kadira/storybook';
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
} from '@kadira/storybook-addon-knobs';

import { PositionEnum, SizeEnum } from '../../assets/constants';
const positionOptions = R.invertObj(PositionEnum);
const sizeOptions = R.invertObj(SizeEnum);

import Label from '.';

const stories = storiesOf('Label', module);
stories.addDecorator(withKnobs);
stories.addDecorator(story => (
  <div style={{ margin: '50px' }}>
    {story()}
  </div>
));

stories
  .add('default', () => (
    <Label
      size={select('size', sizeOptions, 'medium')}
      primary={boolean('primary', false)}
      secondary={boolean('secondary', false)}
      inverted={boolean('inverted', false)}
    >
      MyLabel
    </Label>
  ))
  .add('arrow', () => (
    <Label
      arrow={select('arrow', positionOptions, 'right')}
      size={select('size', sizeOptions, 'medium')}
      primary={boolean('primary', false)}
      secondary={boolean('secondary', false)}
      inverted={boolean('inverted', false)}
    >
      {text('display', 'Enter a value')}
    </Label>
  ));
