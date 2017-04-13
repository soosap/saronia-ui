/* @flow */
import React from 'react';
import renderer from 'react-test-renderer';

import Button from '.';

it('renders a button w/o crashing', () => {
  const tree = renderer.create(<Button>Hello</Button>).toJSON();
  expect(tree.type).toEqual('button');
});
