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

import { Title, Subtitle } from '../../core';
import { Hero, Segment } from '../../layout';
import { BreedEnum, SizeSubsetEnum } from '../../../lib/constants';

const Wrapper = styled.div`
  text-align: center;
  background-color: white;
`;

const breedOptions = R.invertObj(R.merge(BreedEnum, { DEFAULT: undefined }));
const sizeOptions = R.invertObj(
  R.merge(SizeSubsetEnum, { DEFAULT: undefined }),
);
const isNotNil = R.both(
  R.complement(R.isNil),
  R.complement(R.equals('undefined')),
);

const stories = storiesOf('Hero', module);
stories.addDecorator(withKnobs);

stories.add('default', () => {
  const props = R.pickBy(isNotNil, {
    accent: boolean('accent', false),
    breed: select('breed', breedOptions, 'undefined'),
    size: select('size', sizeOptions, 'undefined'),
    sticky: boolean('sticky', false),
  });

  return (
    <Wrapper>
      <Hero {...props} onClick={action('clicked')}>
        <Title size="4">Create wordbank</Title>
        <Subtitle size="2" accent>Wildlife animals</Subtitle>
      </Hero>
      <Segment>
        {R.times(() => <div>Hello world. Hello saronia. Hello you.</div>, 40)}
      </Segment>
    </Wrapper>
  );
});
