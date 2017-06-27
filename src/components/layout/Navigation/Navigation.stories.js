/* @flow */
import React from 'react';
import R from 'ramda';
import styled from 'styled-components';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';

import { Navigation, Segment } from '../../layout';
import { Buttons, Button, Link, Logo } from '../../core';
import { BreedEnum } from '../../../lib/constants';

const breedOptions = R.invertObj(R.merge(BreedEnum, { DEFAULT: undefined }));
const isNotNil = R.both(
  R.complement(R.isNil),
  R.complement(R.equals('undefined')),
);

const stories = storiesOf('Navigation', module);
stories.addDecorator(withKnobs);

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
          <Navigation.Menu key="left">
            {props.breed
              ? <Logo black wordmark size="tiny" />
              : <Logo wordmark size="tiny" />}
          </Navigation.Menu>
          <Navigation.Menu key="right">
            <Navigation.Item name="login" initial onClick={action('clicked')}>
              <span>Login</span>
            </Navigation.Item>
            <Navigation.Item name="signup" onClick={action('clicked')}>
              <span>Signup</span>
            </Navigation.Item>
          </Navigation.Menu>
        </Navigation>
        <Segment>
          {R.times(
            index =>
              <div key={index}>Hello world. Hello saronia. Hello you.</div>,
            40,
          )}
        </Segment>
      </Wrapper>
    );
  })
  .add('links', () => {
    const props = R.pickBy(isNotNil, {
      sticky: boolean('sticky', false),
      breed: BreedEnum.PRIMARY,
    });

    return (
      <Wrapper>
        <Navigation {...props}>
          <Navigation.Menu key="left">
            <Logo black wordmark size="tiny" />
          </Navigation.Menu>
          <Navigation.Menu key="right">
            <Navigation.Item name="login" initial onClick={action('clicked')}>
              <Link>Login</Link>
            </Navigation.Item>
            <Navigation.Item name="signup" onClick={action('clicked')}>
              <Link>Signup</Link>
            </Navigation.Item>
          </Navigation.Menu>
        </Navigation>
        <Segment>
          {R.times(
            index =>
              <div key={index}>Hello world. Hello saronia. Hello you.</div>,
            40,
          )}
        </Segment>
      </Wrapper>
    );
  })
  .add('buttons', () => {
    const props = R.pickBy(isNotNil, {
      sticky: boolean('sticky', false),
      breed: BreedEnum.SECONDARY,
    });

    return (
      <Wrapper>
        <Navigation {...props}>
          <Navigation.Menu key="left">
            <Logo black wordmark size="tiny" />
          </Navigation.Menu>
          <Navigation.Menu key="right">
            <Buttons breed="secondary">
              <Button>Login</Button>
              <Button>Sign up</Button>
            </Buttons>
          </Navigation.Menu>
        </Navigation>
        <Segment>
          {R.times(
            index =>
              <div key={index}>Hello world. Hello saronia. Hello you.</div>,
            40,
          )}
        </Segment>
      </Wrapper>
    );
  });
