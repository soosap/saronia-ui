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
import { IconEnum, SizeEnum, TypeEnum } from '../../assets/constants';

const stories = storiesOf('Icon', module);
const iconOptions = R.invertObj(IconEnum);
const sizeOptions = R.invertObj(SizeEnum);
const typeOptions = R.invertObj(TypeEnum);

stories.addDecorator(withKnobs);

stories.add('default', () => {
  const props = {
    icon: select('icon', iconOptions, IconEnum.TWITTER),
    size: select('size', sizeOptions, SizeEnum.MEDIUM),
    type: select('type', typeOptions, TypeEnum.DEFAULT),
  };

  return <Icon {...props} />;
});
