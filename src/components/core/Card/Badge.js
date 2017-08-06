/* @flow */
import React, { Children } from 'react';
import styled from 'styled-components';

import { PositionEnum, SizeSubsetEnum } from '../../../lib/constants';
import type { Position, SizeSubset } from '../../../lib/types';

type Props = {
  children: Children,
  position?: Position,
  size?: SizeSubset,
};

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  transform: translate(-50%, -50%);

  width: 50px;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  background-color: orange;
  border-radius: 25px;
`;

const Badge = ({ children, size, position }: Props) => {
  return (
    <Wrapper size={size} position={position}>
      {children}
    </Wrapper>
  );
};

Badge.defaultProps = {
  position: PositionEnum.TOP_RIGHT,
  size: SizeSubsetEnum.MEDIUM,
};

export default Badge;
