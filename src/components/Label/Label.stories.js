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

import Label from '.';

const stories = storiesOf('Label', module);
stories.addDecorator(withKnobs);

stories
  .add('default', () => {
    const size = select('size', sizeOptions, 'small');
    const type = select('type', typeOptions, undefined);
    const inverted = boolean('inverted', false);
    const children = text('children', 'MyLabel');

    return (
      <Label size={size} type={type} inverted={inverted}>
        {children}
      </Label>
    );
  })
  .add('arrow', () => {
    const props = {
      arrow: select('arrow', positionOptions, 'top'),
      size:  select('size', sizeOptions, 'small'),
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
    const Segment2 = styled.div`
    flex: none;
    `;
    return (
      <Wrapper>
        <Segment></Segment>
        <Segment2>
          <Label size={props.size} arrow={props.arrow} type={props.type} inverted={props.inverted}>
            {props.children}
          </Label>
        </Segment2>
      </Wrapper>
    );
  });
