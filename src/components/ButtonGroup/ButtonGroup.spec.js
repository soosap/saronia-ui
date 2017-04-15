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

  it('matches styled component snapshot', () => {
    expect(tree).toMatchStyledComponentsSnapshot();
  });
});
