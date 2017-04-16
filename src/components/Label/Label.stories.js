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
  .add('default', () => {
    const size = select('size', sizeOptions, 'medium');
    const primary = boolean('primary', false);
    const secondary = boolean('secondary', false);
    const inverted = boolean('inverted', false);

    return (
      <Label
        size={size}
        primary={primary}
        secondary={secondary}
        inverted={inverted}
      >
        {text('display', 'MyLabel')}
      </Label>
    );
  })
  .add('arrow', () => {
    const arrow = select('arrow', positionOptions, 'top');
    const size = select('size', sizeOptions, 'small');
    const primary = boolean('primary', false);
    const secondary = boolean('secondary', false);
    const inverted = boolean('inverted', false);

    return (
      <Wrapper>
        <Segment />
        <Label
          arrow={arrow}
          size={size}
          primary={primary}
          secondary={secondary}
          inverted={inverted}
        >
          {text('display', 'Enter a value')}
        </Label>
      </Wrapper>
    );
  });
