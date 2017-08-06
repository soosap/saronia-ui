/* @flow */
import R from 'ramda';
import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
} from '@storybook/addon-knobs';

import {
  PositionEnum,
  SizeEnum,
  ThemeEnum,
  Color,
} from '../../../lib/constants';

import { Label } from '.';

const positionOptions = R.invertObj(PositionEnum);
const sizeOptions = R.invertObj(SizeEnum);
const typeOptions = R.invertObj(R.merge({ DEFAULT: undefined }, ThemeEnum));
const isNotNil = R.both(
  R.complement(R.isNil),
  R.complement(R.equals('undefined')),
);

const stories = storiesOf('Label', module);
stories.addDecorator(withKnobs);

stories
  .add('default', () => {
    const circular = boolean('circular', false);
    const children = text('children', '22');

    const props = R.pickBy(isNotNil, {
      size: select('size', sizeOptions, 'medium'),
      type: select('type', typeOptions, undefined),
      inverted: boolean('inverted', false),
      circular,
      radius: circular ? select('radius', sizeOptions, 'medium') : undefined,
    });

    return (
      <Label {...props}>
        {children}
      </Label>
    );
  })
  .add('arrow', () => {
    const children = text('children', 'MyLabel');

    const props = R.pickBy(isNotNil, {
      arrow: select('arrow', positionOptions, 'top'),
      size: select('size', sizeOptions, 'medium'),
      type: select('type', typeOptions, undefined),
      inverted: boolean('inverted', false),
    });

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
      background-color: ${Color.PRIMARY};
      width: 150px;
      height: 100px;
    `;

    const ArrowLabel = styled(Label)`
      flex: none;
    `;

    return (
      <Wrapper>
        <Segment />
        <ArrowLabel {...props}>
          {children}
        </ArrowLabel>
      </Wrapper>
    );
  });
