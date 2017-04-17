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
import { SizeEnum } from '../../assets/constants';

const stories = storiesOf('Button', module);

stories.addDecorator(withKnobs);
stories.addDecorator(story => (
  <div style={{ margin: '50px' }}>
    {story()}
  </div>
));

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
    secondary: boolean('secondary', false),
    accent: boolean('accent', false),
    inverted: boolean('inverted', false),
    size: select('size', R.invertObj(SizeEnum), 'medium'),
    circular,
    radius: circular
      ? select('radius', R.invertObj(SizeEnum), 'large')
      : undefined,
    pop: select('pop', popOptions, undefined),
    pulse: circular ? boolean('pulse', false) : undefined,
  });

  return (
    <Button {...props} onClick={action('clicked')}>
      {children}
    </Button>
  );
});
