/* @flow */
import React from 'react';
import R from 'ramda';
import styled from 'styled-components';
import { BORDER_RADIUS, Color, ContextEnum } from '../../../lib/constants';

import type { Context } from '../../../lib/types';

type Props = {
  context: Context,
  contextMessage?: string,
};

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

const Input = styled.input`
  height: 2rem;
  border: ${getBorderWidth} solid ${getBorderColor};
  border-radius: ${BORDER_RADIUS};
  font-size: 1rem;
  padding-left: .5rem;
  margin-bottom: .2rem;
`;

const renderInputWithContextMessage = (props: Props) => {
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
  `;

  const ContextMessage = styled.div`
    color: ${props => Color.Context[R.toUpper(props.context)]};
    font-size: .7rem;
    margin-bottom: .2rem;
    margin-left: .1rem;
  `;

  return (
    <Wrapper>
      <Input {...props} />
      <ContextMessage context={props.context}>
        *{props.contextMessage}
      </ContextMessage>
    </Wrapper>
  );
};

export default (props: Props) =>
  R.cond([
    [R.prop('contextMessage'), renderInputWithContextMessage],
    [R.T, R.always(<Input {...props} />)],
  ])(props);
