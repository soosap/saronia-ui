/* @flow */
import React, { Children } from 'react';
import R from 'ramda';
import styled from 'styled-components';

import { Icon as RawIcon } from '../Icon';
import { BORDER_RADIUS, Color, IconSVGPath } from '../../lib/constants';
import type { Breed } from '../../lib/types';

type Props = {
  padded?: boolean,
  rounded?: boolean,
  onClose?: Function,
  breed?: Breed,
  children: Children,
};

const getColor = R.cond([
  [R.propEq('breed', 'primary'), R.always(Color.Black.TRANSPARENT)],
  [R.propEq('breed', 'secondary'), R.always(Color.White.MODERATE)],
  [R.T, R.always(Color.Black.TRANSPARENT)],
]);

const getBackgroundColor = R.cond([
  [R.propEq('breed', 'primary'), R.always(Color.Primary.DARKER)],
  [R.propEq('breed', 'secondary'), R.always(Color.Secondary.DARKER)],
  [R.T, R.always(Color.Gray.LIGHT)],
]);

const Wrapper = styled.span.attrs({
  className: 'tag',
})`
  display: inline-flex;
  min-width: 20px;
  padding: ${props => props.padded ? '5px 10px' : '2px 6px'};
  line-height: 16px;
  border-radius: ${props => props.rounded ? '10px' : BORDER_RADIUS};
  color: ${getColor};
  background-color: ${getBackgroundColor};
  font-weight: 400;
`;

const Icon = styled(RawIcon)`
  opacity: 0.8;
  height: 16px;
  padding-left: .5rem;
  fill: ${getColor};
`;

const Tag = (props: Props) =>
  <Wrapper {...props}>
    {props.children}
    {props.onClose &&
      <Icon
        svgPath={IconSVGPath.CLOSE}
        size="tiny"
        onClick={props.onClose}
        {...props}
      />}
  </Wrapper>;

Tag.defaultProps = {
  padded: false,
  rounded: false,
};

export default Tag;
