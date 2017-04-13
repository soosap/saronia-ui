/* @flow */
import React from 'react';
import renderer from 'react-test-renderer';
import { matcher, serializer } from 'jest-styled-components';

import Button from '.';

expect.addSnapshotSerializer(serializer);
expect.extend(matcher);

describe('<Button />', () => {
  const tree = renderer.create(<Button>Hello</Button>).toJSON();

  it('renders a button w/o crashing', () => {
    expect(tree.type).toEqual('button');
  });

  it('can render in an inverted style', () => {
    expect(tree).toMatchStyledComponentsSnapshot();
  });
});
