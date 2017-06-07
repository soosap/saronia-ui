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
import { Row, Column } from '../layout';
import { Icon } from '../Icon';
import { IconSVGPath } from '../../lib/constants';

const Wrapper = styled.div`
  width: 450px;
  display: flex;
  justify-content: center;
`;

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
  .add('w/ image on the left', () => {
    const props = R.pickBy(isNotNil, {});

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
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
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
    const props = R.pickBy(isNotNil, {});

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
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
              </Card.Content>
              <Card.Footer>
                <div>Created 3 days ago...</div>
                <div>...by soosap</div>
              </Card.Footer>
            </Column>
            <Card.Image src="http://placehold.it/150x300" alt="logo" />
          </Row>
        </Card>
      </Wrapper>
    );
  })
  .add('w/ nested structure', () => {
    const props = R.pickBy(isNotNil, {});

    return (
      <Wrapper>
        <Card {...props}>
          <Card.Header>
            <Title size="4">New item</Title>
            <Icon svgPath={IconSVGPath.CLOSE} onClick={action('closed')} />
          </Card.Header>
          <Card.Section>
            <Card.Image src="http://placehold.it/450x200" alt="logo" />
            <Card.Content>
              <div>Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
              <div>Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
              <div>Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
              <div>Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
            </Card.Content>
          </Card.Section>
          <Card.Footer>
            <div>Created 3 days ago...</div>
            <div>...by soosap</div>
          </Card.Footer>
        </Card>
      </Wrapper>
    );
  });
