/* @flow */
import React from 'react';
import R from 'ramda';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
} from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { Icon } from '.';
import { IconSVGPath, SizeEnum, ThemeEnum } from '../../../lib/constants';

const stories = storiesOf('Icon', module);
const iconOptions = R.invertObj(IconSVGPath);
const sizeOptions = R.invertObj(SizeEnum);
const typeOptions = R.invertObj(R.merge(ThemeEnum, { DEFAULT: undefined }));
const isNotNil = R.both(
  R.complement(R.isNil),
  R.complement(R.equals('undefined')),
);

stories.addDecorator(withKnobs);

stories
  .add('default', () => {
    const props = R.pickBy(isNotNil, {
      svgPath: select('icon', iconOptions, IconSVGPath.ADD),
      size: select('size', sizeOptions, SizeEnum.MEDIUM),
      type: select('type', typeOptions, undefined),
      inverted: boolean('inverted', false),
    });

    return <Icon {...props} />;
  })
  .add('w/ onClick handler', () => {
    const props = R.pickBy(isNotNil, {
      svgPath: select('icon', iconOptions, IconSVGPath.ADD),
      size: select('size', sizeOptions, SizeEnum.MEDIUM),
      type: select('type', typeOptions, undefined),
      inverted: boolean('inverted', false),
      onClick: action('icon-click'),
    });

    return <Icon {...props} />;
  });
