/* @flow */
import React from 'react';
import styled from 'styled-components';
import R from 'ramda';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import { Title } from '.';

const stories = storiesOf('Title', module);
stories.addDecorator(withKnobs);

const isNotNil = R.both(
  R.complement(R.isNil),
  R.complement(R.equals('undefined')),
);

const LoremIpsum = styled.div`
  text-align: ${props => props.centered ? 'center' : 'left'};
  margin-bottom: 2rem;
`;

stories.add('default', () => {
  const props = R.pickBy(isNotNil, {
    accent: boolean('accent', false),
    centered: boolean('centered', false),
  });

  return (
    <div>
      <Title {...props} size="1">Title 1: Dugorim returns</Title>
      <LoremIpsum {...props}>
        Normal text underneath.<br />
        Normal text underneath.<br />
        Normal text underneath.
      </LoremIpsum>

      <Title {...props} size="2">Title 2: {'Seetha\'s'} empire</Title>
      <LoremIpsum {...props}>
        Normal text underneath.<br />
        Normal text underneath.<br />
        Normal text underneath.
      </LoremIpsum>

      <Title {...props} size="3">Title 3: {'Sapiras\''} revenge</Title>
      <LoremIpsum {...props}>
        Normal text underneath.<br />
        Normal text underneath.<br />
        Normal text underneath.
      </LoremIpsum>

      <Title {...props}>Title 3 (default)</Title>
      <LoremIpsum {...props}>
        Normal text underneath.<br />
        Normal text underneath.<br />
        Normal text underneath.
      </LoremIpsum>

      <Title {...props} size="4">Title 4: Uniting forces</Title>
      <LoremIpsum {...props}>
        Normal text underneath.<br />
        Normal text underneath.<br />
        Normal text underneath.
      </LoremIpsum>

      <Title {...props} size="5">Title 5: SARONIA strikes back</Title>
      <LoremIpsum {...props}>
        Normal text underneath.<br />
        Normal text underneath.<br />
        Normal text underneath.
      </LoremIpsum>

      <Title {...props} size="6">Title 6: New adventures</Title>
      <LoremIpsum {...props}>
        Normal text underneath.<br />
        Normal text underneath.<br />
        Normal text underneath.
      </LoremIpsum>
    </div>
  );
});
