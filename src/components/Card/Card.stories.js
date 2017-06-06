/* @flow */
import React from 'react';
import R from 'ramda';
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

import { Card } from '.';
import { Title, Subtitle } from '../heading';
import { Icon } from '../Icon';
import { IconSVGPath } from '../../lib/constants';

const isNotNil = R.both(
  R.complement(R.isNil),
  R.complement(R.equals('undefined')),
);

const stories = storiesOf('Card', module);
stories.addDecorator(withKnobs).addDecorator(centered);

stories
  .add('default', () => {
    const props = R.pickBy(isNotNil, {
      accent: boolean('accent', false),
    });

    return (
      <Card {...props} onClick={action('clicked')}>
        <Card.Header>
          <Title size="4">New item</Title>
          <Icon svgPath={IconSVGPath.CLOSE} onClick={action('closed')} />
        </Card.Header>
        <Card.Image src="http://placehold.it/150x80" alt="logo" />
        <Card.Content>
          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        </Card.Content>
        <Card.Footer>
          <div>Created 3 days ago...</div>
          <div>...by soosap</div>
        </Card.Footer>
      </Card>
    );
  })
  .add('w/o image', () => {
    const props = R.pickBy(isNotNil, {
      accent: boolean('accent', false),
    });

    return (
      <Card {...props} onClick={action('clicked')}>
        <Card.Header>
          <Title size="4">New item</Title>
          <Icon svgPath={IconSVGPath.CLOSE} onClick={action('closed')} />
        </Card.Header>
        <Card.Content>
          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        </Card.Content>
        <Card.Footer>
          <div>Created 3 days ago...</div>
          <div>...by soosap</div>
        </Card.Footer>
      </Card>
    );
  });
