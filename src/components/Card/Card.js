/* @flow */
import React, { Component } from 'react';
import styled from 'styled-components';

import { Color, BORDER_RADIUS, Breakpoint } from '../../lib/constants';

type Props = {};

/*
|-----------------------------------------------------------
| Card.Footer
|-----------------------------------------------------------
*/
const CardFooterWrapper = styled.footer`
  border-top: 1px solid ${Color.Gray.LIGHT};
  display: flex;
  justify-content: space-between;

  * {
    padding: .5rem .75rem !important;
  }
`;

const CardFooter = (props: Object) => (
  <CardFooterWrapper {...props} />
);

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

  .title, .subtitle {
    padding: .5rem .75rem .3rem .75rem;
    margin-bottom: 0 !important;
  }
`;

const CardHeader = (props: Object) => (
  <CardHeaderWrapper {...props} />
);


/*
|-----------------------------------------------------------
| Card.Content
|-----------------------------------------------------------
*/
const CardContentWrapper = styled.div`
  flex: 1;
  padding: .75rem;

  @media (min-width: ${Breakpoint.BIG_PHONE}) {
    padding: 1rem;
  }

  @media (min-width: ${Breakpoint.TABLET}) {
    padding: 1.5rem;
  }
`;

const CardContent = (props: Object) => (
  <CardContentWrapper {...props} />
);

/*
|-----------------------------------------------------------
| Card
|-----------------------------------------------------------
*/
const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  box-shadow:
    0 2px 3px rgba(10, 10, 10, 0.1),
    0 0 0 1px rgba(10, 10, 10, 0.1);
  color: ${Color.BLACK};
  border-radius: ${BORDER_RADIUS};
  height: 100%;

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
`;

class Card extends Component<void, Props, void> {
  static Header = CardHeader;
  static Image = CardImage;
  static Content = CardContent;
  static Footer = CardFooter;

  render() {
    return (
      <Wrapper>
        {React.Children.map(this.props.children, child =>
          React.cloneElement(child, {}),
        )}
      </Wrapper>
    );
  }
}

export default Card;
