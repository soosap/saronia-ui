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

import { PositionEnum, SizeEnum, TypeEnum } from '../../assets/constants';

const positionOptions = R.invertObj(PositionEnum);
const sizeOptions = R.invertObj(SizeEnum);
const typeOptions = R.invertObj(TypeEnum);

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
    const size = select('size', sizeOptions, 'small');
    const type = select('type', typeOptions, undefined);
    const inverted = boolean('inverted', false);
    const children = text('children', 'MyLabel');

    return (
      <Label size={size} type={type} inverted={inverted}>
        {children}
      </Label>
    );
  })
  .add('arrow', () => {
    const arrow = select('arrow', positionOptions, 'top');
    const size = select('size', sizeOptions, 'small');
    const type = select('type', typeOptions, undefined);
    const inverted = boolean('inverted', false);
    const children = text('children', 'Enter a value');

    return (
      <Wrapper>
        <Segment />
        <Label size={size} arrow={arrow} type={type} inverted={inverted}>
          {children}
        </Label>
      </Wrapper>
    );
  });
