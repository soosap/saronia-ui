/* @flow */
import React from 'react';
import renderer from 'react-test-renderer';
import { matcher, serializer } from 'jest-styled-components';

import ButtonGroup from '.';
import Button from '../Button';

expect.addSnapshotSerializer(serializer);
expect.extend(matcher);

describe('<ButtonGroup />', () => {
  it('renders a div w/o crashing', () => {
    const tree = renderer.create(
      <ButtonGroup>
        <Button>Left</Button>
        <Button>Right</Button>
      </ButtonGroup>,
    ).toJSON();

    expect(tree.type).toEqual('div');
  });
});

describe('<ButtonGroup horizontal />', () => {
  const tree = renderer.create(
    <ButtonGroup>
      <Button>Left</Button>
      <Button>Middle</Button>
      <Button>Right</Button>
    </ButtonGroup>,
  ).toJSON();

  it('first button has no border-radius on right corners', () => {
    expect(tree).toMatchStyledComponentsSnapshot();
  });

  it('last button has no border-radius on left corners');

  it('in-between buttons have no border-radius in any corner');
});

// describe('<ButtonGroup vertical />', () => {
//   it('has no border-radius on right corners of first button');
//
//   it('has no border-radius on left corners of last button');
//
//   it('in-between buttons have no border-radius in any corner');
// });
