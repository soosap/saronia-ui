/* @flow */
import React from 'react';
import R from 'ramda';
import styled from 'styled-components';
import { Font, FontSize } from '../../lib/constants';

type Props = {
  accent?: boolean,
  size: '1' | '2' | '3' | '4' | '5' | '6',
  transform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase',
  decoration?: 'none' | 'underline' | 'overline' | 'line-through',
};

const getFontSize = R.cond([
  [R.propEq('size', '1'), R.always(FontSize.MASSIVE)],
  [R.propEq('size', '2'), R.always(FontSize.HUGE)],
  [R.propEq('size', '3'), R.always(FontSize.BIG)],
  [R.propEq('size', '4'), R.always(FontSize.LARGE)],
  [R.propEq('size', '5'), R.always(FontSize.MEDIUM)],
  [R.propEq('size', '6'), R.always(FontSize.SMALL)],
]);

const getTextTransform = props =>
  props.transform ? props.transform : 'inherit';

const getTextDecoration = props =>
  props.decoration ? props.decoration : 'inherit';

const Heading = styled.h1`
  font-family: ${props => (props.accent ? Font.ACCENT : Font.SYSTEM)};
  font-weight: 300;
  font-size: ${getFontSize};
  text-transform: ${getTextTransform};
  text-decoration: ${getTextDecoration};
  margin: 0;
  margin-bottom: 1.5rem;
  line-height: 1.125;
  word-break: break-word;
`;

Heading.defaultProps = {
  size: '3',
};

export default (props: Props) => {
  console.log('props', props);
  const { accent, transform, decoration, ...rest } = props;

  const Title = Heading.withComponent(`h${props.size || '3'}`);
  return (
    <Title
      accent={accent}
      transform={transform}
      decoration={decoration}
      {...rest}
    />
  );
};
