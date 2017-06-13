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

import { Link, Avatar, Icon } from '../../core';
import { Dropdown, Menu } from '../../layout';
import { IconSVGPath } from '../../../lib/constants';

const isNotNil = R.both(
  R.complement(R.isNil),
  R.complement(R.equals('undefined')),
);

const stories = storiesOf('Dropdown', module);
stories.addDecorator(withKnobs).addDecorator(centered);

stories.add('default', () => {
  const overlay = (
    <Menu vertical>
      <Menu.Item>
        <Link href="https://saronia.com">Settings</Link>
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

  const User = styled.div`
      display: inline-flex;
      justify-content: center;
      align-items: center;
      padding-right: .5rem;
      font-size: 1.3rem;

      *:first-child {
        margin-right: .6rem;
      }

      *:nth-child(2) {
        margin-right: .15rem;
      }
    `;

  const props = R.pickBy(isNotNil, {
    overlay,
  });

  return (
    <Dropdown {...props} onClick={action('clicked')}>
      <User>
        <Avatar size="tiny" />
        <span>soosap</span>
        <Icon svgPath={IconSVGPath.CARET_DOWN} />
      </User>
    </Dropdown>
  );
});
