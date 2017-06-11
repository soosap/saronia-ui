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
import { Buttons, Button, Link } from '../../core';

const stories = storiesOf('Navigation', module);
stories.addDecorator(withKnobs);

const isNotNil = R.both(
  R.complement(R.isNil),
  R.complement(R.equals('undefined')),
);

const Wrapper = styled.div`
  text-align: center;
`;

const ImageContainer = styled.div`
  width: 150px;
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;;
`;

stories
  .add('text', () => {
    const props = R.pickBy(isNotNil, {
      sticky: boolean('sticky', false),
    });

    return (
      <Wrapper>
        <Navigation {...props}>
          <Navigation.Left>
            <ImageContainer>
              <Image src="/wordmark.png" alt="logo" />
            </ImageContainer>
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
        {R.times(() => <div>Hello world. Hello saronia. Hello you.</div>, 40)}
      </Wrapper>
    );
  })
  .add('links', () =>
    <Navigation>
      <Navigation.Left>
        <ImageContainer>
          <Image src="/wordmark.png" alt="logo" />
        </ImageContainer>
      </Navigation.Left>
      <Navigation.Right>
        <Navigation.Item name="login" initial onClick={action('clicked')}>
          <Link>Login</Link>
        </Navigation.Item>
        <Navigation.Item name="signup" onClick={action('clicked')}>
          <a>Signup</a>
        </Navigation.Item>
      </Navigation.Right>
    </Navigation>,
  )
  .add('buttons', () =>
    <Navigation>
      <Navigation.Left>
        <ImageContainer>
          <Image src="/wordmark.png" alt="logo" />
        </ImageContainer>
      </Navigation.Left>
      <Navigation.Right>
        <Buttons breed="primary">
          <Button>Login</Button>
          <Button>Sign up</Button>
        </Buttons>
      </Navigation.Right>
    </Navigation>,
  );
