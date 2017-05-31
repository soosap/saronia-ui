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

const ImageContainer = styled.div`
  width: 150px;
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;;
`;

stories
  .add('welcome', () => {
    const props = R.pickBy(isNotNil, {
      accent: boolean('accent', false),
    });

    return (
      <Navigation {...props} onClick={action('clicked')}>
        <Navigation.Left>
          <ImageContainer>
            <Image src="/wordmark.png" alt="logo" />
          </ImageContainer>
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
