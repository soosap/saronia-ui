/* @flow */
import React, { Component, Children } from 'react';
import R from 'ramda';
import styled from 'styled-components';

import {
  Color,
  BORDER_RADIUS,
  IntensitySubsetEnum,
} from '../../../lib/constants';
import type { Breed } from '../../../lib/types';

type Props = {
  children: Children,
  breed?: Breed,
};

const getColor = R.cond([
  [R.propEq('breed', 'primary'), R.always(Color.Black.LIGHT)],
  [R.propEq('breed', 'secondary'), R.always(Color.White.STRONG)],
  [R.T, R.always(Color.BLACK)],
]);

const getBorderColor = R.cond([
  [R.propEq('breed', 'primary'), R.always(Color.Primary.DARKER)],
  [R.propEq('breed', 'secondary'), R.always(Color.Secondary.DARKER)],
  [R.T, R.always(Color.Gray.LIGHT)],
]);

const getBackgroundColor = R.cond([
  [R.propEq('breed', 'primary'), R.always(Color.PRIMARY)],
  [R.propEq('breed', 'secondary'), R.always(Color.SECONDARY)],
  [R.T, R.always(Color.White.LIGHT)],
]);

const BoxShadow = {
  [IntensitySubsetEnum.LIGHT]: `
    0 0 0 1px rgba(16, 22, 26, 0.1),
    0 1px 1px rgba(16, 22, 26, 0.2),
    0 2px 6px rgba(16, 22, 26, 0.2)
  `,
  [IntensitySubsetEnum.MODERATE]: `
    0 0 0 1px rgba(16, 22, 26, 0.1),
    0 2px 4px rgba(16, 22, 26, 0.2),
    0 8px 24px rgba(16, 22, 26, 0.2)
  `,
  [IntensitySubsetEnum.STRONG]: `
    0 0 0 1px rgba(16, 22, 26, 0.1),
    0 4px 8px rgba(16, 22, 26, 0.2),
    0 18px 46px 6px rgba(16, 22, 26, 0.2)
  `,
};

const getBoxShadow = R.cond([
  [
    R.propEq('elevation', IntensitySubsetEnum.LIGHT),
    R.always(BoxShadow[IntensitySubsetEnum.LIGHT]),
  ],
  [
    R.propEq('elevation', IntensitySubsetEnum.MODERATE),
    R.always(BoxShadow[IntensitySubsetEnum.MODERATE]),
  ],
  [
    R.propEq('elevation', IntensitySubsetEnum.STRONG),
    R.always(BoxShadow[IntensitySubsetEnum.STRONG]),
  ],
  [
    R.T,
    R.always(`
      0 2px 3px rgba(10, 10, 10, 0.1),
      0 0 0 1px rgba(10, 10, 10, 0.1)
    `),
  ],
]);

const getInteractiveBoxShadow = R.ifElse(
  R.propEq('interactive', true),
  R.cond([
    [
      R.propEq('elevation', IntensitySubsetEnum.LIGHT),
      R.always(BoxShadow[IntensitySubsetEnum.MODERATE]),
    ],
    [
      R.propEq('elevation', IntensitySubsetEnum.MODERATE),
      R.always(BoxShadow[IntensitySubsetEnum.STRONG]),
    ],
    [
      R.propEq('elevation', IntensitySubsetEnum.STRONG),
      R.always(BoxShadow[IntensitySubsetEnum.STRONG]),
    ],
    [R.T, R.always(BoxShadow[IntensitySubsetEnum.MODERATE])],
  ]),
  R.always(''),
);

/*
|-----------------------------------------------------------
| Card.Footer
|-----------------------------------------------------------
*/
const CardFooterWrapper = styled.footer`
  border-top: 1px solid ${getBorderColor};
  display: flex;
  justify-content: space-between;

  * {
    padding: .5rem .75rem !important;
  }
`;

const CardFooter = (props: Object) => <CardFooterWrapper {...props} />;

/*
|-----------------------------------------------------------
| Card.Image
|-----------------------------------------------------------
*/
const CardImage = styled.img.attrs({
  className: 'image',
})`
  flex: none;
`;

/*
|-----------------------------------------------------------
| Card.Header
|-----------------------------------------------------------
*/
const CardHeaderWrapper = styled.header`
  box-shadow: 0 1px 2px rgba(10, 10, 10, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;

  .icon {
    padding: .5rem .75rem;
    margin-bottom: 0 !important;
  }

  .title,
  .subtitle {
    padding: .5rem .75rem .3rem .75rem;
    margin-bottom: 0 !important;
  }
`;

const CardHeader = (props: Object) => <CardHeaderWrapper {...props} />;

/*
|-----------------------------------------------------------
| Card.Content
|-----------------------------------------------------------
*/
const CardContent = styled.div`flex: 1;`;

/*
|-----------------------------------------------------------
| Card
|-----------------------------------------------------------
*/
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  color: ${getColor};
  background-color: ${getBackgroundColor};
  border-radius: ${BORDER_RADIUS};
  height: 100%;

  box-shadow: ${getBoxShadow};
  transition: transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9),
    box-shadow 200ms cubic-bezier(0.4, 1, 0.75, 0.9);

  /*
  |-----------------------------------------------------------
  | .icon
  |-----------------------------------------------------------
  */
  .icon {
    fill: ${getColor};
  }

  /*
  |-----------------------------------------------------------
  | .image
  |-----------------------------------------------------------
  */
  > .image {
    margin: 0 -1px 0 -1px;
  }

  > .row .image:first-child {
    margin: 0 -1px;
  }

  > .row:first-child {
    border-radius: ${BORDER_RADIUS};

    > .image:first-of-type {
      border-radius: ${BORDER_RADIUS} 0 0 ${BORDER_RADIUS};
      margin: -1px 0 0 -1px;
    }

    > .image:first-of-type:not(:first-child),
    > .image:last-of-type:not(:first-of-type) {
      border-radius: 0 ${BORDER_RADIUS} ${BORDER_RADIUS} 0;
      margin: -1px -1px 0 0;
    }
  }

  &:hover {
    box-shadow: ${getInteractiveBoxShadow};
    cursor: ${R.ifElse(
      R.propEq('interactive', true),
      R.always('pointer'),
      R.always('default'),
    )};
  }
`;

class Card extends Component<void, Props, void> {
  static Header = CardHeader;
  static Image = CardImage;
  static Content = CardContent;
  static Footer = CardFooter;

  render() {
    return (
      <Wrapper {...this.props}>
        {React.Children.map(this.props.children, child =>
          React.cloneElement(child, {
            breed: this.props.breed,
          }),
        )}
      </Wrapper>
    );
  }
}

export default Card;
