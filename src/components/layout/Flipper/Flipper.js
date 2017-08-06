/* @flow */
import React, { Component, Children } from 'react';
import R from 'ramda';
import styled from 'styled-components';

import { Segment } from '../Segment';
import type { Breed } from '../../../lib/types';
import { getPadding } from '../Segment/Segment';

type Props = {
  children: Children,
  breed?: Breed,
};

const getTotalHeight = R.cond([[R.T, R.always('210px')]]);

const Wrapper = styled(Segment).attrs({ padded: false })`
  perspective: 1000px;
  width: calc(100% - ${getPadding} - ${getPadding});
  height: calc(${getTotalHeight} - ${getPadding} - ${getPadding});
  background-color: yellow;

  &:hover .flipper {
    transform: rotateX(180deg);
  }
`;

const WrapperInner = styled.div.attrs({ className: 'flipper' })`
  position: relative;
  transition: 0.6s;
  transform-style: preserve-3d;
  transform-origin: 100% ${getTotalHeight}/2;
  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1.000);
  width: 100%;
  height: 100%;
`;

/* front pane, placed above back */
const FrontView = styled.div`
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100% - ${getPadding} - ${getPadding});
  height: calc(${getTotalHeight} - ${getPadding} - ${getPadding});
  background-color: purple;

  z-index: 2;
  /* for firefox 31 */
  transform: rotateX(0deg);
`;

/* back, initially hidden pane */
const BackView = styled.div`
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100% - ${getPadding} - ${getPadding});
  height: calc(${getTotalHeight} - ${getPadding} - ${getPadding});
  background-color: green;
  z-index: 3;

  transform: rotateX(180deg);
`;

class Flipper extends Component<void, Props, void> {
  static Front = FrontView;
  static Back = BackView;

  render() {
    return (
      <Wrapper {...this.props}>
        <WrapperInner {...this.props}>
          <div>
            {React.Children.map(this.props.children, (child) => {
              console.log('child.type', child.type);

              return child.type
                ? React.cloneElement(child, {
                  breed: this.props.breed,
                  padded: this.props.padded || false,
                })
                : child;
            })}
          </div>
        </WrapperInner>
      </Wrapper>
    );
  }
}

export default Flipper;
