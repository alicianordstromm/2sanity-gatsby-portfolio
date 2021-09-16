import { format, distanceInWords, differenceInDays } from "date-fns";
import React from "react";
import { Link } from "gatsby";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import BlockContent from "./block-content";
import RoleList from "./role-list";
import styled from "styled-components"
import Layout from "../containers/layout";

const MainImage = styled.div`
  display:flex;
  width: 50%;

  img {
  width: 100%;
  height: auto;
  vertical-align: top;
  object-fit: cover;
  }

  @media (max-width: 768px) {
  display: block;
  width: 100%;
  }
`
const FlexBox = styled.div`
  display: flex;
  padding-top: 10em;
  padding-left: 4em;
  padding-right: 4em;

  @media (max-width: 768px) {
  display: block;
  }
`

const TextContainer = styled.div`
  display: block;
  box-sizing: border-box;
  width: 50%;
  padding-left: 4em;
  margin: 0 auto;

@media (max-width: 768px) {
  width: 100%;
  padding-top: 2em; 
  padding-left: 0;
  }

`

const GridProject = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-column-gap: 2em;

  @media (--media-min-medium) {
  grid-template-columns: 3fr 1fr;
  }
`

const MainContent = styled.div`
a {
color: var(--color-accent);

  @media (hover: hover) {
  &:hover {
  color: inherit;
  }}
}
`

const Root = styled.article`
`

const Title = styled.h1`
font-size: 30pt;
padding-bottom: 20px;
`

const MetaContent = styled.div`
`

function Project(props) {
  const { _rawBody, title, categories, mainImage, members, publishedAt, relatedProjects } = props;
  console.log(publishedAt)
  return (
    <Root>
      <FlexBox>
      {props.mainImage && mainImage.asset && (
        <MainImage>
          <img
            src={imageUrlFor(buildImageObj(mainImage))
              .url()}
            alt={mainImage.alt}
          />
        </MainImage>
      )}
      <TextContainer>
        <GridProject>
          <MainContent>
            <Title>{title}</Title>
            {_rawBody && <BlockContent blocks={_rawBody || []} />}
          </MainContent>
          <MetaContent>
            {members && members.length > 0 && <RoleList items={members} title="Artist" />}
          </MetaContent>
        </GridProject>
      </TextContainer>
      </FlexBox>    
    </Root>
  );
}

export default Project;
