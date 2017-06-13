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

import { Avatar } from '../../core';
import { SizeEnum } from '../../../lib/constants';

const sizeOptions = R.invertObj(R.merge(SizeEnum, { DEFAULT: undefined }));
const isNotNil = R.both(
  R.complement(R.isNil),
  R.complement(R.equals('undefined')),
);

const stories = storiesOf('Avatar', module);
stories.addDecorator(withKnobs).addDecorator(centered);

stories
  .add('default', () => {
    const props = R.pickBy(isNotNil, {
      size: select('size', sizeOptions, 'undefined'),
    });

    return <Avatar {...props} />;
  })
  .add('w/ onClick handler', () => {
    const props = R.pickBy(isNotNil, {
      size: select('size', sizeOptions, 'undefined'),
      onClick: action('avatar-click'),
    });

    return <Avatar {...props} />;
  });
