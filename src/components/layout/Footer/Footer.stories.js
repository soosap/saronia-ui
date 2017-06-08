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
import { Segment } from '../Segment';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;

  grid-template-areas:
    "content"
    "footer";

  grid-template-rows:
    [content-start] 1fr
    [content-end footer-start] auto
    [footer-end]
`;

const Content = styled.div`
  grid-area: content;
`;

const isNotNil = R.both(
  R.complement(R.isNil),
  R.complement(R.equals('undefined')),
);

const stories = storiesOf('Footer', module);
stories.addDecorator(withKnobs).addDecorator(centered);

stories.add('default', () => {
  const props = R.pickBy(isNotNil, {
    accent: boolean('accent', false),
  });

  return (
    <Wrapper>
      <Content>
        <Segment>
          <ul>
            <li>Footer is a layout component.</li>
            <li>
              All layout components in saronia-ui are constrolled by data-grid.
            </li>
            <li>
              A Footer component has a grid-area value of
              {' '}<strong>footer</strong> applied by
              default.
            </li>
          </ul>
        </Segment>
      </Content>
      <Footer {...props}>
        Footer content
      </Footer>
    </Wrapper>
  );
});
