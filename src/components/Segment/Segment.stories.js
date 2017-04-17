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
import { TypeEnum, DegreeEnum } from '../../assets/constants';
import { Segment } from '.';

const stories = storiesOf('Segment', module);
stories.addDecorator(withKnobs);

const typeOptions = R.invertObj(TypeEnum);
const paddingOptions = R.invertObj(DegreeEnum);

const emphasisOptions = {
  undefined: 'default',
  raised: 'raised',
  stacked: 'stacked',
  piled: 'piled',
};

stories.add('default', () => {
  const props = {
    basic: boolean('basic', false),
    type: select('type', typeOptions, undefined),
    inverted: boolean('inverted', false),
    padding: select('padding', paddingOptions, 'small'),
    compact: boolean('compact', false),
    emphasis: select('emphasis', emphasisOptions, undefined),
    children: text('children', 'This is a segment'),
  };

  return (
    <Segment
      basic={props.basic}
      inverted={props.inverted}
      type={props.type}
      padding={props.padding}
      compact={props.compact}
      emphasis={props.emphasis}
    >
      <p>{props.children}</p>
      <p>{props.children}</p>
      <p>{props.children}</p>
      <p>{props.children}</p>
    </Segment>
  );
});
