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
  const circularOption = select('circular', ['yes', 'no', 'custom'], 'yes');
  const circleSize = circularOption === 'custom'
    ? select('circle_size', R.invertObj(SizeEnum), 'mini')
    : select('circle_size', ['n/a'], 'n/a');
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
    >
      {text('Display', 'Register')}
    </Button>
  );
});
