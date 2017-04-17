/* @flow */
import R from 'ramda';
import React from 'react';
import styled from 'styled-components';

import { storiesOf, action, linkTo } from '@kadira/storybook';
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
} from '@kadira/storybook-addon-knobs';

import { PositionEnum, SizeEnum, TypeEnum } from '../../assets/constants';

const positionOptions = R.invertObj(PositionEnum);
const sizeOptions = R.invertObj(SizeEnum);
const typeOptions = R.invertObj(TypeEnum);

import { Label } from '.';

const stories = storiesOf('Label', module);
stories.addDecorator(withKnobs);

stories
  .add('default', () => {
    const circular = boolean('circular', false);
    const props = {
      size: select('size', sizeOptions, 'medium'),
      type: select('type', typeOptions, undefined),
      inverted: boolean('inverted', false),
      children: text('children', 'MyLabel'),
      circular,
      radius: circular ? select('radius', sizeOptions, 'medium') : undefined,
    };

    return R.cond([
      [
        R.propEq('circular', true),
        R.always(
          <Label
            size={props.size}
            type={props.type}
            inverted={props.inverted}
            circular
            radius={props.radius || 'medium'}
          >
            {props.children}
          </Label>,
        ),
      ],
      [
        R.T,
        R.always(
          <Label size={props.size} type={props.type} inverted={props.inverted}>
            {props.children}
          </Label>,
        ),
      ],
    ])(props);
  })
  .add('arrow', () => {
    const props = {
      arrow: select('arrow', positionOptions, 'top'),
      size: select('size', sizeOptions, 'small'),
      type: select('type', typeOptions, undefined),
      inverted: boolean('inverted', false),
      children: text('children', 'Enter a value'),
    };

    const getFlexDirection = R.cond([
      [R.propEq('arrow', 'top'), R.always('column')],
      [R.propEq('arrow', 'bottom'), R.always('column-reverse')],
      [R.propEq('arrow', 'left'), R.always('row')],
      [R.propEq('arrow', 'right'), R.always('row-reverse')],
    ]);

    const Wrapper = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50%;
      height: 200px;
    	flex-direction: ${getFlexDirection(props)};
    `;

    const Segment = styled.div`
      flex: 1;
      background-color: pink;
      width: 150px;
      height: 100px;
    `;

    const ArrowLabel = styled(Label)`
      flex: none;
    `;

    return (
      <Wrapper>
        <Segment />
        <ArrowLabel
          size={props.size}
          arrow={props.arrow}
          type={props.type}
          inverted={props.inverted}
        >
          {props.children}
        </ArrowLabel>
      </Wrapper>
    );
  });
