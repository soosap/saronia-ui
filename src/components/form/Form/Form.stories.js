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

import { Button, Icon } from '../../core';
import { Form, Field, Fields, FieldLabel, Input } from '../../form';
import { IconSVGPath, IntensityEnum } from '../../../lib/constants';

const intensityOptions = R.invertObj(
  R.merge(IntensityEnum, { FALSE: false, TRUE: true }),
);
const isNotNil = R.both(
  R.complement(R.isNil),
  R.complement(R.equals('undefined')),
);

const CloseIcon = styled.div`
  position: absolute;
  right: 0;
  top: -1rem;

  &:hover {
    cursor: pointer;
  }
`;

const stories = storiesOf('Form', module);
stories.addDecorator(withKnobs).addDecorator(centered);

stories.add('default', () => {
  const padded = select('padded', intensityOptions, 'moderate');
  const props = R.pickBy(isNotNil, {
    compact: boolean('compact', false),
    padded: padded === 'true' ? true : padded === 'false' ? false : padded,
  });

  return (
    <Form {...props}>
      <CloseIcon><Icon svgPath={IconSVGPath.CLOSE} /></CloseIcon>
      <Fields>
        <Field>
          <FieldLabel>First name</FieldLabel>
          <Input placeholder="Enter something..." />
        </Field>
        <Field>
          <FieldLabel>Last name</FieldLabel>
          <Input placeholder="Enter something..." />
        </Field>
      </Fields>
      <Fields>
        <Field>
          <FieldLabel>First name</FieldLabel>
          <Input placeholder="Enter something..." />
        </Field>
        <Field>
          <FieldLabel>Last name</FieldLabel>
          <Input placeholder="Enter something..." />
        </Field>
        <Field>
          <FieldLabel>Last name</FieldLabel>
          <Input placeholder="Enter something..." />
        </Field>
      </Fields>
      <Fields>
        <Button>Submit</Button>
      </Fields>
    </Form>
  );
});
