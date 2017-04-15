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

import Button from '.';

const stories = storiesOf('Button', module);
stories.addDecorator(withKnobs);

stories.add('default', () => {
  const secondary = boolean('secondary', false);
  const accent = boolean('accent', false);
  const inverted = boolean('inverted', false);
  const size = select('size', R.invertObj(SizeEnum), 'medium');
  const display = text('Display', 'Register');
  const circularOption = select('circular', ['yes', 'no', 'custom'], 'yes');
  const circleSize = circularOption === 'custom'
    ? select('radius', R.invertObj(SizeEnum), 'mini')
    : null;
  const circular = R.cond([
    [R.equals('custom'), R.always(circleSize)],
    [R.equals('yes'), R.always(true)],
    [R.T, R.always(false)],
  ])(circularOption);

  return (
    <Button
      onClick={action('clicked')}
      accent={accent}
      circular={circular}
      inverted={inverted}
      secondary={secondary}
      size={size}
    >
      {display}
    </Button>
  );
});
