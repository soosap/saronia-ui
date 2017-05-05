/* @flow */
import React from 'react';
import renderer from 'react-test-renderer';
import { matcher, serializer } from 'jest-styled-components';

import { Segment } from '.';

expect.addSnapshotSerializer(serializer);
expect.extend(matcher);

describe('<Segment />', () => {
  const tree = renderer.create(<Segment>Hello</Segment>).toJSON();

  it('renders a segment w/o crashing', () => {
    expect(tree.type).toEqual('div');
  });

  it('matches styled component snapshot', () => {
    expect(tree).toMatchStyledComponentsSnapshot();
  });
});
