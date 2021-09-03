import React from "react";
import styled from "styled-components"

const PaddingLeftAndRightOfBothGrids = styled.div`
box-sizing: border-box;
max-width: 1440px;
padding: 3em;
padding-top: 7em;
margin: 0 auto;

  @media (--media-min-small) {
  padding: 2em;
  }
`

const Container = ({ children }) => {
  return <PaddingLeftAndRightOfBothGrids>{children}</PaddingLeftAndRightOfBothGrids>;
};

export default Container;
