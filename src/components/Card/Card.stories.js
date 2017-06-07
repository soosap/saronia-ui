/* @flow */
import React from 'react';
import R from 'ramda';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
} from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered';

import { Card } from '.';
import { Title } from '../heading';
import { Icon } from '../Icon';
import { IconSVGPath } from '../../lib/constants';

const Wrapper = styled.div`
  width: 450px;
  display: flex;
  justify-content: center;
`;

const positionOptions = { LEFT: 'left', RIGHT: 'right', DEFAULT: undefined };
const isNotNil = R.both(
  R.complement(R.isNil),
  R.complement(R.equals('undefined')),
);

const stories = storiesOf('Card', module);
stories.addDecorator(withKnobs).addDecorator(centered);

stories
  .add('default', () => {
    const props = R.pickBy(isNotNil, {});

    return (
      <Wrapper>
        <Card {...props} onClick={action('clicked')}>
          <Card.Header>
            <Title size="4">New item</Title>
            <Icon svgPath={IconSVGPath.CLOSE} onClick={action('closed')} />
          </Card.Header>
          <Card.Image src="http://placehold.it/450x200" alt="logo" />
          <Card.Content>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
          </Card.Content>
          <Card.Footer>
            <div>Created 3 days ago...</div>
            <div>...by soosap</div>
          </Card.Footer>
        </Card>
      </Wrapper>
    );
  })
  .add('w/o image', () => {
    const props = R.pickBy(isNotNil, {});

    return (
      <Wrapper>
        <Card {...props} onClick={action('clicked')}>
          <Card.Header>
            <Title size="4">New item</Title>
            <Icon svgPath={IconSVGPath.CLOSE} onClick={action('closed')} />
          </Card.Header>
          <Card.Content>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
          </Card.Content>
          <Card.Footer>
            <div>Created 3 days ago...</div>
            <div>...by soosap</div>
          </Card.Footer>
        </Card>
      </Wrapper>
    );
  })
  .add('w/ image on the side', () => {
    const props = R.pickBy(isNotNil, {});
    const imagePosition = select(
      'Image: position',
      R.invertObj(positionOptions),
      'undefined',
    );
    const imageProps = R.pickBy(isNotNil, {
      position: imagePosition,
      src: imagePosition === 'undefined'
        ? 'http://placehold.it/450x200'
        : 'http://placehold.it/200x200',
    });

    return (
      <Wrapper>
        <Card {...props} onClick={action('clicked')}>
          <Card.Header>
            <Title size="4">New item</Title>
            <Icon svgPath={IconSVGPath.CLOSE} onClick={action('closed')} />
          </Card.Header>
          <Card.Image {...imageProps} alt="logo" />
          <Card.Content>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
          </Card.Content>
          <Card.Footer>
            <div>Created 3 days ago...</div>
            <div>...by soosap</div>
          </Card.Footer>
        </Card>
      </Wrapper>
    );
  })
  .add('w/ header and footer on edge', () => {
    const props = R.pickBy(isNotNil, {});
    const imagePosition = select(
      'Image: position',
      R.invertObj(positionOptions),
      'undefined',
    );
    const imageProps = R.pickBy(isNotNil, {
      position: imagePosition,
      src: imagePosition === 'undefined'
        ? 'http://placehold.it/450x200'
        : 'http://placehold.it/200x200',
    });

    return (
      <Wrapper>
        <Card {...props} onClick={action('clicked')}>
          <Card.Header>
            <Title size="4">New item</Title>
            <Icon svgPath={IconSVGPath.CLOSE} onClick={action('closed')} />
          </Card.Header>
          <Card.Image {...imageProps} alt="logo" />
          <Card.Content>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
          </Card.Content>
          <Card.Footer>
            <div>Created 3 days ago...</div>
            <div>...by soosap</div>
          </Card.Footer>
        </Card>
      </Wrapper>
    );
  });
