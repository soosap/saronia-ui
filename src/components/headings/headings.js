/* @flow */
import React from 'react';
import R from 'ramda';
import styled from 'styled-components';

type Props = {
  align: 'left' | 'center' | 'right',
};

const getTextAlign = R.cond([
  [R.propEq('align', 'left'), R.always('left')],
  [R.propEq('align', 'right'), R.always('right')],
  [R.T, R.always('center')],
]);

const Headings = styled.div`
  text-align: ${getTextAlign};
  margin-bottom: 1.5rem;
`;

Headings.defaultPros = {
  align: 'center',
};

export default (props: Props) => <Headings {...props} />;
