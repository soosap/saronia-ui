/* @flow */
import React from 'react';
import { shallow } from 'enzyme';

import Button from '.';

it('renders w/o crashing', () => {
  expect(shallow(<Button />).exists()).toBeTruthy();
});
