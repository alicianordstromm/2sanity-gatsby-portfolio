import { Link } from "gatsby";
import React from "react";
import { cn, buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import BlockText from "./block-text";
import styled from "styled-components"
import { responsiveTitle3 } from "./typography.module.css";

const PreviewLink = styled(Link)`
display: block;
color: inherit;
text-decoration: none;
`

const ImageTitle = styled.div`
position: relative;
padding-bottom: 66.666%;
background: #eee;

  img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  }
`
const Title = styled.h3`
@media (hover: hover) {
.root:hover & {
color: var(--color-accent);
text-decoration: underline;
}}
`

const Excerpt = styled.div`
p {
  margin: 0.5em 0;
  }
strong {
  font-weight: 600;
  }
`


function ProjectPreview(props) {
  return (
    <PreviewLink to={`/project/${props.slug.current}`}>
      <ImageTitle>
        {props.mainImage && props.mainImage.asset && (
          <img
            src={imageUrlFor(buildImageObj(props.mainImage))
              .width(600)
              .height(Math.floor((9 / 16) * 600))
              .url()}
            alt={props.mainImage.alt}
          />
        )}
      </ImageTitle>
      <Title>{props.title}</Title>
      {props._rawExcerpt && (
        <Excerpt>
        <BlockText blocks={props._rawExcerpt} />
      </Excerpt>
      )}
    </PreviewLink>
  );
}

export default ProjectPreview;
