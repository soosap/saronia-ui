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

import { Input } from '.';

import { Field, Fields, FieldLabel } from '../Field';
import { IconSVGPath } from '../../../lib/constants';

const stories = storiesOf('Input', module);
stories.addDecorator(withKnobs).addDecorator(centered);

const isNotNil = R.both(
  R.complement(R.isNil),
  R.complement(R.equals('undefined')),
);

stories
  .add('default', () => {
    const props = R.pickBy(isNotNil, {
      placeholder: 'Enter your name...',
    });

    return (
      <div>
        <Field>
          <FieldLabel>First name</FieldLabel>
          <Input {...props} onClick={action('clicked')} />
        </Field>
        <Field>
          <FieldLabel>Last name</FieldLabel>
          <Input {...props} onClick={action('clicked')} />
        </Field>

        <Fields>
          <Field>
            <FieldLabel>First name</FieldLabel>
            <Input {...props} onClick={action('clicked')} />
          </Field>
          <Field>
            <FieldLabel>Last name</FieldLabel>
            <Input {...props} onClick={action('clicked')} />
          </Field>
        </Fields>

        <Fields>
          <Field>
            <FieldLabel>First name</FieldLabel>
            <Input {...props} onClick={action('clicked')} />
          </Field>
          <Field>
            <FieldLabel>Last name</FieldLabel>
            <Input {...props} onClick={action('clicked')} />
          </Field>
        </Fields>
      </div>
    );
  })
  .add('w/ icons', () => {
    const props = R.pickBy(isNotNil, {
      placeholder: 'Enter your name...',
      iconLeft: boolean('iconLeft', true) ? IconSVGPath.ADD : 'undefined',
      iconRight: boolean('iconRight', true) ? IconSVGPath.TRASH : 'undefined',
      onClick: action('clicked'),
    });

    return <Input {...props} />;
  });
