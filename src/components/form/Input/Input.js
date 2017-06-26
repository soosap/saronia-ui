/* @flow */
import React from 'react';
import R from 'ramda';
import styled from 'styled-components';

import { Icon } from '../../core';
import { BORDER_RADIUS, Color } from '../../../lib/constants';
import type { Context } from '../../../lib/types';

type Props = {
  context?: Context,
  iconLeft?: string,
  iconRight?: string,
};

const getBorderColor = R.cond([
  [R.propEq('context', 'danger'), R.always(Color.Context.DANGER)],
  [R.propEq('context', 'warning'), R.always(Color.Context.WARNING)],
  [R.T, R.always('#dbdbdb')],
]);

const Input = styled.input`
  flex-grow: 1;
  display: inline-flex;
  justify-content: flex-start;
  position: relative;
  font-size: 1rem;
  padding: 0 .5rem;
  height: 2rem;
  line-height: 2rem;
  vertical-align: middle;
  outline: none;
  border: 1px solid transparent;
  border-radius: ${BORDER_RADIUS};
  box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.1);
  border-color: ${getBorderColor};
  transition: box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);

  &::placeholder {
    color: ${Color.Gray.MODERATE};
  }

  &:hover {
    border-color: #b5b5b5;
  }

  &:active, &:focus {
    border-color: ${Color.PRIMARY};
  }
`;

const Wrapper = styled.p.attrs({
  className: 'input',
})`
  display: flex;
  position: relative;
  padding: 0;
  margin: 0;

  input {
    &:focus {
      ~ .icon {
        fill: ${Color.Gray.STRONG};
      }
    }
  }

  .icon {
    position: absolute;
    top: .37rem;
    width: 1.5rem;
    fill: ${Color.Gray.MODERATE};
    z-index: 4;
    pointer-events: none;
  }
`;

const WrapperIconLeft = Wrapper.extend`
  input {
    padding-left: 2.25rem;
  }

  .icon {
    &:first-of-type {
      left: .3rem;
    }
  }
`;

const WrapperIconRight = Wrapper.extend`
  input {
    padding-right: 2.25rem;
  }

  .icon {
    &:last-of-type {
      right: .3rem;
    }
  }
`;

const WrapperIconBothSides = Wrapper.extend`
  input {
    padding-left: 2.25rem;
    padding-right: 2.25rem;
  }

  .icon {
    &:first-of-type {
      left: .3rem;
    }

    &:last-of-type {
      right: .3rem;
    }
  }
`;

export default (props: Props) =>
  R.cond([
    [
      R.both(R.prop('iconRight'), R.prop('iconLeft')),
      R.always(
        <WrapperIconBothSides>
          <Input {...props} />
          <Icon svgPath={R.prop('iconLeft', props)} />
          <Icon svgPath={R.prop('iconRight', props)} />
        </WrapperIconBothSides>,
      ),
    ],
    [
      R.prop('iconLeft'),
      R.always(
        <WrapperIconLeft>
          <Input {...props} />
          <Icon svgPath={R.prop('iconLeft', props)} />
        </WrapperIconLeft>,
      ),
    ],
    [
      R.prop('iconRight'),
      R.always(
        <WrapperIconRight>
          <Input {...props} />
          <Icon svgPath={R.prop('iconRight', props)} />
        </WrapperIconRight>,
      ),
    ],
    [R.T, R.always(<Wrapper><Input {...props} /></Wrapper>)],
  ])(props);
