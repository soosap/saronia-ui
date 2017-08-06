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

import { ThemeEnum } from '../../../lib/constants';
import { Tag, Tags } from '.';

const themeOptions = R.invertObj(R.merge(ThemeEnum, { DEFAULT: undefined }));
const isNotNil = R.both(
  R.complement(R.isNil),
  R.complement(R.equals('undefined')),
);

const stories = storiesOf('Tag', module);
stories.addDecorator(withKnobs).addDecorator(centered);

stories.add('default', () => {
  const props = R.pickBy(isNotNil, {
    children: text('children', 'wildlife'),
    theme: select('theme', themeOptions, 'undefined'),
    padded: boolean('padded', false),
    rounded: boolean('rounded', false),
    onClose: boolean('onClose', true) && action('closed'),
  });

  return (
    <Tags>
      <Tag {...props} onClick={action('clicked')} />
      <Tag {...props} onClick={action('clicked')}>123</Tag>
      <Tag {...props} onClick={action('clicked')}>noun</Tag>
    </Tags>
  );
});
