/* @flow */
import R from 'ramda';
import { transparentize } from 'polished';

import { Color } from '../../../lib/constants';

export const getBoxShadow = R.cond([
  [
    R.prop('context'),
    props => `
    0 0 0 0 rgba(19, 124, 189, 0),
    0 0 0 0 rgba(19, 124, 189, 0),
    inset 0 0 0 1px ${Color.Context[R.toUpper(props.context)]},
    inset 0 0 0 1px rgba(16, 22, 26, 0.15),
    inset 0 1px 1px rgba(16, 22, 26, 0.2);
  `,
  ],
  [
    R.T,
    R.always(`
    0 0 0 0 rgba(19, 124, 189, 0),
    0 0 0 0 rgba(19, 124, 189, 0),
    inset 0 0 0 1px rgba(16, 22, 26, 0.15),
    inset 0 1px 1px rgba(16, 22, 26, 0.2);
  `),
  ],
]);

export const getBoxShadowOnFocus = R.cond([
  [
    R.prop('context'),
    props => `
    0 0 0 1px ${Color.Context[R.toUpper(props.context)]},
    0 0 0 3px ${transparentize(0.7, Color.Context[props.context.toUpperCase()])},
    inset 0 1px 1px rgba(16, 22, 26, 0.2);
  `,
  ],
  [
    R.T,
    R.always(`
    0 0 0 1px ${Color.PRIMARY},
    0 0 0 3px ${transparentize(0.7, Color.PRIMARY)},
    inset 0 1px 1px rgba(16, 22, 26, 0.2);
  `),
  ],
]);
