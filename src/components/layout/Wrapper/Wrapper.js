/* @flow */
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;

  grid-template-areas:
    "content"
    "footer"

  grid-template-rows:
    [main-content-start] 1fr
    [main-content-end footer-start] auto
    [footer-end]
`;

export default Wrapper;
