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

import { Navigation, Segment } from '../../layout';
import { Buttons, Button, Link, Image } from '../../core';
import { BreedEnum } from '../../../lib/constants';

const stories = storiesOf('Navigation', module);
stories.addDecorator(withKnobs);

const breedOptions = R.invertObj(R.merge(BreedEnum, { DEFAULT: undefined }));
const isNotNil = R.both(
  R.complement(R.isNil),
  R.complement(R.equals('undefined')),
);

const Wrapper = styled.div`
  text-align: center;
`;

stories
  .add('text', () => {
    const props = R.pickBy(isNotNil, {
      sticky: boolean('sticky', false),
      breed: select('breed', breedOptions, 'undefined'),
    });

    return (
      <Wrapper>
        <Navigation {...props}>
          <Navigation.Left>
            <Image src="/wordmark.png" alt="logo" height="36px" />
          </Navigation.Left>
          <Navigation.Right>
            <Navigation.Item name="login" initial onClick={action('clicked')}>
              <span>Login</span>
            </Navigation.Item>
            <Navigation.Item name="signup" onClick={action('clicked')}>
              <span>Signup</span>
            </Navigation.Item>
          </Navigation.Right>
        </Navigation>
        <Segment>
          {R.times(() => <div>Hello world. Hello saronia. Hello you.</div>, 40)}
        </Segment>
      </Wrapper>
    );
  })
  .add('links', () => {
    const props = R.pickBy(isNotNil, {
      sticky: boolean('sticky', false),
      breed: select('breed', breedOptions, 'undefined'),
    });

    return (
      <Wrapper>
        <Navigation {...props}>
          <Navigation.Left>
            <Image src="/wordmark.png" alt="logo" height="36px" />
          </Navigation.Left>
          <Navigation.Right>
            <Navigation.Item name="login" initial onClick={action('clicked')}>
              <Link>Login</Link>
            </Navigation.Item>
            <Navigation.Item name="signup" onClick={action('clicked')}>
              <a>Signup</a>
            </Navigation.Item>
          </Navigation.Right>
        </Navigation>
        <Segment>
          {R.times(() => <div>Hello world. Hello saronia. Hello you.</div>, 40)}
        </Segment>
      </Wrapper>
    );
  })
  .add('buttons', () => {
    const props = R.pickBy(isNotNil, {
      sticky: boolean('sticky', false),
      breed: select('breed', breedOptions, 'undefined'),
    });

    return (
      <Wrapper>
        <Navigation {...props}>
          <Navigation.Left>
            <Image src="/wordmark.png" alt="logo" height="36px" />
          </Navigation.Left>
          <Navigation.Right>
            <Buttons>
              <Button>Login</Button>
              <Button>Sign up</Button>
            </Buttons>
          </Navigation.Right>
        </Navigation>
        <Segment>
          {R.times(() => <div>Hello world. Hello saronia. Hello you.</div>, 40)}
        </Segment>
      </Wrapper>
    );
  });
