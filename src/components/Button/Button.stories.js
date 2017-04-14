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
  const circularOption = select('circular', ['yes', 'no', 'custom'], 'yes');
  const circleSize = circularOption === 'custom' ? select('circle_size', R.invertObj(SizeEnum), 'mini') : null;
  const circular = R.cond([
    [R.equals('custom'), R.always(circleSize)],
    [R.equals('yes'), R.always(true)],
    [R.T, R.always(false)],
  ])(circularOption);

  console.log('circular', circular);

  return (
    <Button
      onClick={action('clicked')}
      accent={boolean('accent', false)}
      circular={circular}
      inverted={boolean('inverted', false)}
      secondary={boolean('secondary', false)}
    >
      {text('Display', 'Register')}
    </Button>
  );
});
