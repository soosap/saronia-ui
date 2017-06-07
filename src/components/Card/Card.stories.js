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
import { Row, Column, Segment } from '../layout';
import { Icon } from '../Icon';
import { Image } from '../Image';
import { IconSVGPath, BreedEnum } from '../../lib/constants';

const Wrapper = styled.div`
  width: 450px;
  display: flex;
  justify-content: center;
`;

const breedOptions = R.invertObj(R.merge(BreedEnum, { DEFAULT: undefined }));
const isNotNil = R.both(
  R.complement(R.isNil),
  R.complement(R.equals('undefined')),
);

const stories = storiesOf('Card', module);
stories.addDecorator(withKnobs).addDecorator(centered);

stories
  .add('default', () => {
    const props = R.pickBy(isNotNil, {
      breed: select('breed', breedOptions, 'undefined'),
    });

    return (
      <Wrapper>
        <Card {...props} onClick={action('clicked')}>
          <Card.Header>
            <Title size="4">New item</Title>
            <Icon svgPath={IconSVGPath.CLOSE} onClick={action('closed')} />
          </Card.Header>
          <Card.Image src="http://placehold.it/450x200" alt="logo" />
          <Card.Content>
            <Segment>
              <div>Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
              <div>Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
              <div>Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
              <div>Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
            </Segment>
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
    const props = R.pickBy(isNotNil, {
      breed: select('breed', breedOptions, 'undefined'),
    });

    return (
      <Wrapper>
        <Card {...props} onClick={action('clicked')}>
          <Card.Header>
            <Title size="4">New item</Title>
            <Icon svgPath={IconSVGPath.CLOSE} onClick={action('closed')} />
          </Card.Header>
          <Card.Content>
            <Segment>
              <div>Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
              <div>Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
              <div>Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
              <div>Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
            </Segment>
          </Card.Content>
          <Card.Footer>
            <div>Created 3 days ago...</div>
            <div>...by soosap</div>
          </Card.Footer>
        </Card>
      </Wrapper>
    );
  })
  .add('w/ image on the left', () => {
    const props = R.pickBy(isNotNil, {
      breed: select('breed', breedOptions, 'undefined'),
    });

    return (
      <Wrapper>
        <Card {...props}>
          <Row>
            <Card.Image src="http://placehold.it/150x300" alt="logo" />
            <Column>
              <Card.Header>
                <Title size="4">New item</Title>
                <Icon svgPath={IconSVGPath.CLOSE} onClick={action('closed')} />
              </Card.Header>
              <Card.Content>
                <Segment padded="light">
                  <div>Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
                  <div>Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
                  <div>Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
                  <div>Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
                </Segment>
              </Card.Content>
              <Card.Footer>
                <div>Created 3 days ago...</div>
                <div>...by soosap</div>
              </Card.Footer>
            </Column>
          </Row>
        </Card>
      </Wrapper>
    );
  })
  .add('w/ image on the right', () => {
    const props = R.pickBy(isNotNil, {
      breed: select('breed', breedOptions, 'undefined'),
    });

    return (
      <Wrapper>
        <Card {...props}>
          <Row>
            <Column>
              <Card.Header>
                <Title size="4">New item</Title>
                <Icon svgPath={IconSVGPath.CLOSE} onClick={action('closed')} />
              </Card.Header>
              <Card.Content>
                <Segment padded="light">
                  <div>Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
                  <div>Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
                  <div>Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
                  <div>Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
                </Segment>
              </Card.Content>
              <Card.Footer>
                <div>Created 3 days ago...</div>
                <div>...by soosap</div>
              </Card.Footer>
            </Column>
            <Card.Image src="http://placehold.it/150x240" alt="logo" />
          </Row>
        </Card>
      </Wrapper>
    );
  })
  .add('w/ image on both sides', () => {
    const props = R.pickBy(isNotNil, {
      breed: select('breed', breedOptions, 'undefined'),
    });

    return (
      <Wrapper>
        <Card {...props}>
          <Row>
            <Card.Image src="http://placehold.it/80x240" alt="logo" />
            <Column>
              <Card.Header>
                <Title size="4">New item</Title>
                <Icon svgPath={IconSVGPath.CLOSE} onClick={action('closed')} />
              </Card.Header>
              <Card.Content>
                <Segment padded="light">
                  <div>Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
                  <div>Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
                  <div>Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
                  <div>Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
                </Segment>
              </Card.Content>
              <Card.Footer>
                <div>Created 3 days ago...</div>
                <div>...by soosap</div>
              </Card.Footer>
            </Column>
            <Card.Image src="http://placehold.it/80x240" alt="logo" />
          </Row>
        </Card>
      </Wrapper>
    );
  })
  .add('w/ nested structure', () => {
    const props = R.pickBy(isNotNil, {
      breed: select('breed', breedOptions, 'undefined'),
    });

    return (
      <Wrapper>
        <Card {...props}>
          <Card.Header>
            <Title size="4">New item</Title>
            <Icon svgPath={IconSVGPath.CLOSE} onClick={action('closed')} />
          </Card.Header>
          <Row>
            <Card.Image src="http://placehold.it/125x200" alt="logo" />
            <Card.Content>
              <Segment padded="light">
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
              </Segment>
            </Card.Content>
          </Row>
          <Card.Footer>
            <div>Created 3 days ago...</div>
            <div>...by soosap</div>
          </Card.Footer>
        </Card>
      </Wrapper>
    );
  });
