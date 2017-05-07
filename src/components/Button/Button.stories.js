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

import { Button } from '.';
import {
  SizeEnum,
  MagnitudeEnum,
  BreedEnum,
  IconSVGPath,
} from '../../assets/constants';

const stories = storiesOf('Button', module);
stories.addDecorator(withKnobs);

// Todo: Add this as description
// ### Button
//
// #### circular | radius
// ```js
// <Button circular radius='huge'>Register</Button>
// ```
// Renders a circular button whose radius can be controlled by a separate prop.
//
// #### icon | iconPosition
// ```js
// <Button icon={XYZ} iconPosition='right'>Subscribe</Button>
// ```
// Renders the default button with an icon attached. The position of the icon can be controlled via a separate prop.

const typeOptions = R.invertObj(R.merge(BreedEnum, { DEFAULT: undefined }));
const iconOptions = R.invertObj(IconSVGPath);
const iconPositionOptions = R.invertObj({ LEFT: 'left', RIGHT: 'right' });
const popOptions = R.invertObj({
  ACTIVE: 'active',
  FOCUS: 'focus',
  HOVER: 'hover',
  NONE: undefined,
});
const isNotNil = R.both(
  R.complement(R.isNil),
  R.complement(R.equals('undefined')),
);

stories
  .add('default', () => {
    const circular = boolean('circular', false);
    const children = text('children', 'Register');
    const props = R.pickBy(isNotNil, {
      accent: boolean('accent', false),
      inverted: boolean('inverted', false),
      size: select('size', R.invertObj(MagnitudeEnum), 'medium'),
      circular,
      radius: circular
        ? select('radius', R.invertObj(MagnitudeEnum), 'large')
        : undefined,
      pop: select('pop', popOptions, undefined),
      pulse: circular ? boolean('pulse', false) : undefined,
      type: select('type', typeOptions, undefined),
    });

    return (
      <Button {...props} onClick={action('clicked')}>
        {children}
      </Button>
    );
  })
  .add('icon', () => {
    const children = text('children', 'Register');
    const props = R.pickBy(isNotNil, {
      accent: boolean('accent', false),
      icon: select('icon', iconOptions, IconSVGPath.TWITTER),
      iconPosition: select('icon position', iconPositionOptions, 'left'),
      inverted: boolean('inverted', false),
      size: select('size', R.invertObj(MagnitudeEnum), 'medium'),
      pop: select('pop', popOptions, undefined),
      type: select('type', typeOptions, undefined),
    });

    return (
      <Button {...props} onClick={action('clicked')}>
        {children}
      </Button>
    );
  });
