/* @flow */
import R from 'ramda';
import React from 'react';
import styled from 'styled-components';

import { storiesOf, action, linkTo } from '@kadira/storybook';
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
} from '@kadira/storybook-addon-knobs';

import Segment from '.';

const stories = storiesOf('Segment', module);
stories.addDecorator(withKnobs);

stories.add('default', () => {
    const props = {
      inverted: boolean('inverted', false),
      children: text('children', 'This is a segment'),
    };

    return (
        <Segment
          inverted={props.inverted}
        >
          <p>{props.children}</p>
          <p>{props.children}</p>
          <p>{props.children}</p>
          <p>{props.children}</p>
        </Segment>
    );
  });
