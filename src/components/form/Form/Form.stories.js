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

import { Form } from '.';
import { Field, Fields, FieldLabel } from '../Field';
import { Input } from '../Input';
import { Button } from '../../Button';
import { Icon } from '../../Icon';
import { IconSVGPath } from '../../../lib/constants';

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
  const props = R.pickBy(isNotNil, {
    compact: boolean('compact', false),
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
