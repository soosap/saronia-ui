/* @flow */
import React from 'react';
import styled from 'styled-components';

type Props = {
  vertical?: boolean,
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: ${props => (props.vertical ? 'column' : 'row')};
  justify-content: space-between;
`;

const Checkboxes = (props: Props) => <Wrapper {...props} />;

Checkboxes.defaultProps = {
  vertical: false,
};

export default Checkboxes;
