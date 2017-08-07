/* @flow */
import React from 'react';
import R from 'ramda';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered';

import { Flipper } from '.';
import { Card, Title, Icon } from '../../core';
import {
  Color,
  IconSVGPath,
  BreedEnum,
  IntensitySubsetEnum,
} from '../../../lib/constants';

const Wrapper = styled.div`
  width: 450px;
  display: flex;
  justify-content: center;
`;

const breedOptions = R.invertObj(R.merge(BreedEnum, { DEFAULT: undefined }));
const intensitiySubsetOptions = R.invertObj(
  R.merge(IntensitySubsetEnum, { DEFAULT: undefined }),
);

const isNotNil = R.both(
  R.complement(R.isNil),
  R.complement(R.equals('undefined')),
);

const stories = storiesOf('Flipper', module);
stories.addDecorator(withKnobs).addDecorator(centered);

stories.add('default', () => {
  const props = R.pickBy(isNotNil, {
    breed: select('breed', breedOptions, 'undefined'),
    elevation: select('elecation', intensitiySubsetOptions, 'undefined'),
    interactive: boolean('interactive', false),
  });

  return (
    <Wrapper>
      <Card {...props} onClick={action('clicked')}>
        <Card.Header>
          <Title size="4">New item</Title>
          <Icon svgPath={IconSVGPath.CLOSE} onClick={action('closed')} />
        </Card.Header>
        <Card.Image src="http://placehold.it/450x200" alt="logo" />
        <Card.Content padded={false}>
          <Flipper padded>
            <Flipper.Front breed={BreedEnum.PRIMARY} background={Color.PRIMARY}>
              Front content... hover me!
            </Flipper.Front>
            <Flipper.Back background={Color.SECONDARY}>
              Back content
            </Flipper.Back>
          </Flipper>
        </Card.Content>
        <Card.Footer>
          <div>Created 3 days ago...</div>
          <div>...by soosap</div>
        </Card.Footer>
      </Card>
    </Wrapper>
  );
});
