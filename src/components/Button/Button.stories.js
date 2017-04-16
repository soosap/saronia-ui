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
stories.addDecorator(story => (
  <div style={{ margin: '50px' }}>
    {story()}
  </div>
));

stories.add('default', () => {
  const circular = boolean('circular', false);
  const props = {
    secondary: boolean('secondary', false),
    accent: boolean('accent', false),
    inverted: boolean('inverted', false),
    size: select('size', R.invertObj(SizeEnum), 'medium'),
    children: text('children', 'Register'),
    circular,
    radius: circular
      ? select('radius', R.invertObj(SizeEnum), 'large')
      : undefined,
    pulse: circular ? boolean('pulse', false) : undefined,
  };

  return R.cond([
    [
      R.propEq('circular', true),
      R.always(
        <Button
          accent={props.accent}
          circular
          inverted={props.inverted}
          onClick={action('clicked')}
          pulse={props.pulse}
          radius={props.radius || 'mini'}
          secondary={props.secondary}
          size={props.size}
        >
          {props.children}
        </Button>,
      ),
    ],
    [
      R.T,
      R.always(
        <Button
          accent={props.accent}
          inverted={props.inverted}
          onClick={action('clicked')}
          secondary={props.secondary}
          size={props.size}
        >
          {props.children}
        </Button>,
      ),
    ],
  ])(props);
});
