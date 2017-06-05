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
import centered from '@storybook/addon-centered';

import { Footer } from '.';
import { Wrapper } from '../Wrapper';

const isNotNil = R.both(
  R.complement(R.isNil),
  R.complement(R.equals('undefined')),
);

const Content = styled.div`

`;

const stories = storiesOf('Footer', module);
stories.addDecorator(withKnobs).addDecorator(centered);

stories.add('default', () => {
  const props = R.pickBy(isNotNil, {
    accent: boolean('accent', false),
  });

  return (
    <Wrapper>
      <Content>
        <div>Hello</div>
        <div>World</div>
      </Content>
      <Footer {...props}>
        Footer content
      </Footer>
    </Wrapper>
  );
});
