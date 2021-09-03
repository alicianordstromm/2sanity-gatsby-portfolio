import { format, distanceInWords, differenceInDays } from "date-fns";
import React from "react";
import { Link } from "gatsby";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import BlockContent from "./block-content";
import Container from "./container";
import RoleList from "./role-list";
import styled from "styled-components"

const MainImage = styled.div`
position: relative;
background: #4F3F37;
padding-bottom: calc(9 / 16 * 100%);

  img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  vertical-align: top;
  object-fit: cover;
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

const PulishedAt = styled.div`
margin: 1.5rem 0 3rem;
color: #ffffff;
`

const Categories = styled.div`
border-top: 1px solid var(--color-very-light-gray);
margin: 2rem 0 3rem;

  ul {
  list-style: none;
  margin: 0.75rem 0;
  padding: 0;
  }

  ul li {
  padding: 0.25rem 0;
  }
`

const CategoriesHeadline = styled.h3`
margin: 0.5rem 0 0;
`

const RelatedProjects = styled.div`
border-top: 1px solid var(--color-very-light-gray);
margin: 2rem 0 3rem;

  ul {
  list-style: none;
  margin: 0.75rem 0;
  padding: 0;
  }

  a {
  display: inline-block;
  color: inherit;
  text-decoration: none;
  padding: 0.25rem 0;

    @media (hover: hover) {
    &:hover {
    text-decoration: underline;
    }}
  }
`

const RelatedProjectsHeadline = styled.h3`
margin: 0.5rem 0 0;
`

const Root = styled.article`
`

const Title = styled.h1`
`

const MetaContent = styled.aside`
`

function Project(props) {
  const { _rawBody, title, categories, mainImage, members, publishedAt, relatedProjects } = props;
  console.log(publishedAt)
  return (
    <Root>
      {props.mainImage && mainImage.asset && (
        <MainImage>
          <img
            src={imageUrlFor(buildImageObj(mainImage))
              .width(1200)
              .height(Math.floor((9 / 16) * 1200))
              .fit("crop")
              .url()}
            alt={mainImage.alt}
          />
        </MainImage>
      )}
      <Container>
        <GridProject>
          <MainContent>
            <Title>{title}</Title>
            {_rawBody && <BlockContent blocks={_rawBody || []} />}
          </MainContent>
          <MetaContent>
            {publishedAt && (
              <PulishedAt>
                {differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? distanceInWords(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), "MMMM Do YYYY")}
              </PulishedAt>
            )}
            {members && members.length > 0 && <RoleList items={members} title="Artist" />}
            {categories && categories.length > 0 && (
              <Categories>
                <CategoriesHeadline>Categories</CategoriesHeadline>
                <ul>
                  {categories.map(category => (
                    <li key={category._id}>{category.title}</li>
                  ))}
                </ul>
              </Categories>
            )}
            {relatedProjects && relatedProjects.length > 0 && (
              <RelatedProjects>
                <RelatedProjectsHeadline>Related projects</RelatedProjectsHeadline>
                <ul>
                  {relatedProjects.map(project => (
                    <li key={`related_${project._id}`}>
                      {project.slug ? (
                        <Link to={`/project/${project.slug.current}`}>{project.title}</Link>
                      ) : (
                        <span>{project.title}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </RelatedProjects>
            )}
          </MetaContent>
        </GridProject>
      </Container>
    </Root>
  );
}

export default Project;
