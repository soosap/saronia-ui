/* @flow */
import styled from 'styled-components';

import { Color } from '../../../lib/constants';

const Link = styled.a.attrs({
  className: 'link',
})`
  color: ${Color.PRIMARY};
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: ${Color.Primary.DARK};
  }
`;

export default Link;
