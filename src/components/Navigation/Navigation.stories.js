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

import { Navigation } from '.';

const stories = storiesOf('Navigation', module);
stories
  .addDecorator(withKnobs);

const isNotNil = R.both(
  R.complement(R.isNil),
  R.complement(R.equals('undefined')),
);

stories
  .add('default', () => {
    const props = R.pickBy(isNotNil, {
      accent: boolean('accent', false),
    });

    return (
      <Navigation {...props} onClick={action('clicked')}>
        <Navigation.Left>
          <Navigation.Item>
            Logo
          </Navigation.Item>
        </Navigation.Left>
        <Navigation.Right>
          <Navigation.Item active>
            Login
          </Navigation.Item>
          <Navigation.Item>
            Signup
          </Navigation.Item>
        </Navigation.Right>
      </Navigation>
    );
  });
