import React from 'react';
import Layout from "../containers/layout";
import styled from "styled-components";
import { graphql } from "gatsby";
import { imageUrlFor } from "../lib/image-url";
import {
    mapEdgesToNodes,
    filterOutDocsWithoutSlugs,
    filterOutDocsPublishedInTheFuture
  } from "../lib/helpers";
  import ProjectPreviewGrid from "../components/project-preview-grid";

export const query = graphql`
  query CategoryPageQuery {
    projects: allSanitySampleProject(
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          categories {
              id
              title
          }
          mainImage {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
            }
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`;

const Container = styled.div`
box-sizing: border-box;
min-width: 200px;
padding: 4em;
padding-top: 8em;
margin: 0 auto;

  @media (--media-min-small) {
  padding: 2em;
  }
`


const CategoryTemplate = props => {
    const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }


  const projectNodes = (data || {}).projects
    ? mapEdgesToNodes(data.projects)
        .filter(filterOutDocsWithoutSlugs)
        .filter(filterOutDocsPublishedInTheFuture)
    : [];

    const result = projectNodes.filter(project => project.categories[0].id === props.pageContext.edge.id);

console.log(result)
  return (
        <Layout markedCategory = {props.pageContext.edge.id}>
            <Container>
                <h1 hidden>{props.pageContext.edge.title}</h1>
                {projectNodes && (
                    <ProjectPreviewGrid
                        title="Latest projects"
                        nodes={result}
                    />
                )}
            </Container>
        </Layout>
  );
};
 
export default CategoryTemplate;