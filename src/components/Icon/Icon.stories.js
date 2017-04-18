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
  IconSVGPath,
  MagnitudeEnum,
  BreedEnum,
} from '../../assets/constants';

const stories = storiesOf('Icon', module);
const iconOptions = R.invertObj(IconSVGPath);
const sizeOptions = R.invertObj(MagnitudeEnum);
const typeOptions = R.invertObj(R.merge(BreedEnum, { DEFAULT: undefined }));

stories.addDecorator(withKnobs);

stories.add('default', () => {
  const props = {
    svgPath: select('icon', iconOptions, IconSVGPath.TWITTER),
    size: select('size', sizeOptions, MagnitudeEnum.MEDIUM),
    type: select('type', typeOptions, undefined),
  };

  return <Icon {...props} />;
});
