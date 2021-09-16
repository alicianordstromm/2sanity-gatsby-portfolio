import React from "react";
import styled from "styled-components";

const PaddingLeftAndRightOfBothGrids = styled.div`
box-sizing: border-box;
min-width: 200px;
padding: 4em;
padding-top: 8em;
margin: 0 auto;
`

const Container = ({ children }) => {
  return <PaddingLeftAndRightOfBothGrids>{children}</PaddingLeftAndRightOfBothGrids>;
};

export default Container;
