/* @flow */
import React from 'react';
import R from 'ramda';
import styled from 'styled-components';
import { transparentize } from 'polished';
import { BORDER_RADIUS, Color, ContextEnum } from '../../../lib/constants';

type Props = {};

const getBorderColor = R.cond([
  [R.propEq('context', ContextEnum.DANGER), R.always(Color.Context.DANGER)],
  [R.propEq('context', ContextEnum.WARNING), R.always(Color.Context.WARNING)],
  [R.propEq('context', ContextEnum.SUCCESS), R.always(Color.Context.SUCCESS)],
  [R.propEq('context', ContextEnum.INFO), R.always(Color.Context.INFO)],
  [R.T, R.always('black')],
]);

const getBorderWidth = R.cond([
  [R.propEq('context', ContextEnum.DANGER), R.always('2px')],
  [R.T, R.always('1px')],
]);

const getBoxShadow = R.cond([
  [R.prop('context'), R.always(`
    0 0 0 1px ${Color.Context.DANGER},
    0 0 0 3px ${transparentize(.7, Color.Context.DANGER)},
    inset 0 1px 1px rgba(16, 22, 26, 0.2);
  `)],
  [R.T, R.always(`
    0 0 0 0 rgba(19, 124, 189, 0),
    0 0 0 0 rgba(19, 124, 189, 0),
    inset 0 0 0 1px rgba(16, 22, 26, 0.15),
    inset 0 1px 1px rgba(16, 22, 26, 0.2);
  `)],
]);

const Input = styled.input`
  outline: none;
  border: none;
  height: 2rem;
  line-height: 2rem;
  vertical-align: middle;
  border-radius: ${BORDER_RADIUS};
  font-size: 1rem;
  padding: 0 .5rem;
  margin-bottom: .2rem;

  box-shadow: ${getBoxShadow};
  transition: box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);

  &:focus {
    box-shadow:
      0 0 0 1px ${Color.PRIMARY},
      0 0 0 3px ${transparentize(.7, Color.PRIMARY)},
      inset 0 1px 1px rgba(16, 22, 26, 0.2);
  }
`;

export default (props: Props) => <Input {...props} />;
