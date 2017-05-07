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


// Todo: Add this as description
// ### Icon
//
// In order to add new icons to the application, determine the icon's svg path and add it to `src/assets/constants/icon`;
// You can then use the icon component like this:
//
// ```js
// <Icon svgPath={IconSVGPath.TWITTER} size='massive' type='primary' />
// ```
// To make the icons available to the user of the library we export both, the component itself and the paths object. Alternatively, you could only import the the component and pass it a special svg path that is unique to the application being developed.
//
// ```js
// import { Icon } from '@saronia/saronia-ui';
// import { IconSVGPath } from '@saronia/saronia-ui/constants';
// ```


import { Icon } from '.';
import { IconSVGPath, MagnitudeEnum, BreedEnum } from '../../assets/constants';

const stories = storiesOf('Icon', module);
const iconOptions = R.invertObj(IconSVGPath);
const sizeOptions = R.invertObj(MagnitudeEnum);
const typeOptions = R.invertObj(R.merge(BreedEnum, { DEFAULT: undefined }));
const isNotNil = R.both(
  R.complement(R.isNil),
  R.complement(R.equals('undefined')),
);

stories.addDecorator(withKnobs);

stories.add('default', () => {
  const props = R.pickBy(isNotNil, {
    svgPath: select('icon', iconOptions, IconSVGPath.TWITTER),
    size: select('size', sizeOptions, MagnitudeEnum.MEDIUM),
    type: select('type', typeOptions, undefined),
    inverted: boolean('inverted', false),
  });

  return <Icon {...props} />;
});
