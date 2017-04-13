/* @flow */
import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import {
  withKnobs,
  text,
  boolean,
  number,
} from '@kadira/storybook-addon-knobs';

import ButtonGroup from '.';
import Button from '../Button';

const stories = storiesOf('ButtonGroup', module);
stories.addDecorator(withKnobs);

stories
  .add('default', () => (
    <ButtonGroup>
      <Button>Left</Button>
      <Button>Middle</Button>
      <Button>Right</Button>
    </ButtonGroup>
  ))
  .add('veritcal', () => (
    <ButtonGroup vertical>
      <Button>Left</Button>
      <Button>Middle</Button>
      <Button>Right</Button>
    </ButtonGroup>
  ))
