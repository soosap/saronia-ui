/* @flow */
import React from 'react';
import renderer from 'react-test-renderer';
import { matcher, serializer } from 'jest-styled-components';

import { Icon } from '.';
import { IconSVGPath } from '../../lib/constants';

expect.addSnapshotSerializer(serializer);
expect.extend(matcher);

describe('<Icon />', () => {
  const tree = renderer.create(<Icon svgPath={IconSVGPath.TWITTER} />).toJSON();

  it('renders an icon w/o crashing', () => {
    expect(tree.type).toEqual('svg');
  });

  // it('matches styled component snapshot', () => {
  //   expect(tree).toMatchStyledComponentsSnapshot();
  // });
});
