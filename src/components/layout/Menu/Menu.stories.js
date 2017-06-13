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

import { Link } from '../../core';
import { Menu } from '../../layout';

const isNotNil = R.both(
  R.complement(R.isNil),
  R.complement(R.equals('undefined')),
);

const stories = storiesOf('Menu', module);
stories.addDecorator(withKnobs).addDecorator(centered);

stories.add('default', () => {
  const props = R.pickBy(isNotNil, {
    accent: boolean('accent', false),
    vertical: boolean('vertical', true),
  });

  return (
    <Menu {...props} onClick={action('clicked')}>
      <Menu.Item>
        <Link href="https://ui.saronia.io">Settings</Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="https://saronia.com/feedback">Feedback</Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item>
        <Link>Logout</Link>
      </Menu.Item>
    </Menu>
  );
});
