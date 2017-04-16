/* @flow */
import React from 'react';
import R from 'ramda';
import styled from 'styled-components';

import { storiesOf, action, linkTo } from '@kadira/storybook';
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
} from '@kadira/storybook-addon-knobs';

import { PositionEnum, SizeEnum } from '../../assets/constants';
const positionOptions = R.invertObj(PositionEnum);
const sizeOptions = R.invertObj(SizeEnum);

import Label from '.';

const stories = storiesOf('Label', module);
stories.addDecorator(withKnobs);

const Wrapper = styled.div`
  display: flex-inline;
  flex-direction: column;
  width: 250px;
`;
const Segment = styled.div`
height: 50px;
  background-color: red;
`;

stories
  .add('default', () => (
    <Label
      size={select('size', sizeOptions, 'medium')}
      primary={boolean('primary', false)}
      secondary={boolean('secondary', false)}
      inverted={boolean('inverted', false)}
    >
      MyLabel
    </Label>
  ))
  .add('arrow', () => (
    <Wrapper>
      <Segment></Segment>
      <Label
        arrow={select('arrow', positionOptions, 'right')}
        size={select('size', sizeOptions, 'medium')}
        primary={boolean('primary', false)}
        secondary={boolean('secondary', false)}
        inverted={boolean('inverted', false)}
      >
        {text('display', 'Enter a value')}
      </Label>
    </Wrapper>
  ));
