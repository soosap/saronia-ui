/* @flow */
import React from 'react';
import { shallow } from 'enzyme';

import Link from '.';

it('renders w/o crashing', () => {
  expect(shallow(<Link />).exists()).toBeTruthy();
});
