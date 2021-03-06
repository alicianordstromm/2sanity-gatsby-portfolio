import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { getGatsbyImageData } from "gatsby-source-sanity";
import clientConfig from "../../client-config";
import styled from "styled-components";

export function Figure({ node }) {
  if (!node.asset) {
    return null;
  }

const RootFigure = styled.figure`
margin: 2rem 0;

  figcaption {
  font-size: var(--font-small-size);
  line-height: var(--font-small-line-height);
  margin: 0.5rem 0 0;
  }
`

  const imageData = getGatsbyImageData(node.asset, { maxWidth: 675 }, clientConfig.sanity);

  return (
    <RootFigure>
      <GatsbyImage image={imageData} alt={node.alt} />
      {node.caption && <figcaption>{node.caption}</figcaption>}
    </RootFigure>
  );
}
