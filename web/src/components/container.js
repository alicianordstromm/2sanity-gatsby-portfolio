import React from "react";
import styled from "styled-components"

const PaddingLeftAndRightOfBothGrids = styled.div`
box-sizing: border-box;
max-width: 960px;
padding: 1.5em;
margin: 0 auto;

  @media (--media-min-small) {
  padding: 2em;
  }
`

const Container = ({ children }) => {
  return <PaddingLeftAndRightOfBothGrids>{children}</PaddingLeftAndRightOfBothGrids>;
};

export default Container;
