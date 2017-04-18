/* @flow */
import R from 'ramda';
import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
} from '@kadira/storybook-addon-knobs';

import { Icon } from '.';
import {
  Icon as IconPath,
  MagnitudeEnum,
  BreedEnum,
} from '../../assets/constants';

const stories = storiesOf('Icon', module);
const iconOptions = R.invertObj(IconPath);
const sizeOptions = R.invertObj(MagnitudeEnum);
const typeOptions = R.invertObj(R.merge(BreedEnum, { DEFAULT: undefined }));

stories.addDecorator(withKnobs);

stories.add('default', () => {
  const props = {
    icon: select('icon', iconOptions, IconPath.TWITTER),
    size: select('size', sizeOptions, MagnitudeEnum.MEDIUM),
    type: select('type', typeOptions, undefined),
  };

  return <Icon {...props} />;
});
