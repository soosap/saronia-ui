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

import { Input, InputWithIcons, InputWithAddons } from '.';
import { Icon } from '../../Icon';
import { Field, Fields, FieldLabel } from '../Field';
import { Form } from '../Form';
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
      accent: boolean('accent', false),
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
  .add('wrapped w/ Form', () => {
    const props = R.pickBy(isNotNil, {
      accent: boolean('accent', false),
      placeholder: 'Enter your name...',
    });

    return (
      <Form>
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
      </Form>
    );
  })
  .add('w/ icons', () => {
    const props = R.pickBy(isNotNil, {
      accent: boolean('accent', false),
      placeholder: 'Enter your name...',
    });

    return (
      <InputWithIcons onClick={action('clicked')}>
        <Icon svgPath={IconSVGPath.ADD} />
        <Input {...props} />
        <Icon svgPath={IconSVGPath.TRASH} />
      </InputWithIcons>
    );
  })
  .add('w/ addons', () => {
    const props = R.pickBy(isNotNil, {
      accent: boolean('accent', false),
      placeholder: 'Enter your name...',
    });

    return (
      <InputWithAddons onClick={action('clicked')}>
        <Icon svgPath={IconSVGPath.ADD} />
        <Input {...props} />
        <Icon svgPath={IconSVGPath.TRASH} />
      </InputWithAddons>
    );
  });
