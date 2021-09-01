import { Link } from "gatsby";
import React from "react";
import ProjectPreview from "./project-preview";
import styled from "styled-components"

const Root = styled.div`
margin: 2em 0 4em;
`

const LatestProjects = styled.h2`
font-size: 14pt;
line-height: var(--font-micro-line-height);
font-weight: 500;
text-transform: uppercase;
letter-spacing: 0.5px;
margin: 2rem 0;
`

const BrowseMore = styled.div`
margin-top: 1rem;
text-align: right;

  a {
  display: inline-block;
  padding: 0.5rem 0;
  color: inherit;
  text-decoration: none;

    @media (hover: hover) {
    &:hover {
    color: var(--color-accent);
    text-decoration: underline;
    }}}
`

const Grid = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: grid;
grid-template-columns: 1fr;
grid-gap: 2em;

  @media (min-width: 768px) {
  grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1024px) {
  grid-template-columns: 1fr 1fr 1fr;
  }
  
`

function ProjectPreviewGrid(props) {
  return (
    <Root>
      {props.title && <LatestProjects hidden>{props.title}</LatestProjects>}
      <Grid>
        {props.nodes &&
          props.nodes.map(node => (
            <li key={node.id}>
              <ProjectPreview {...node} />
            </li>
          ))}
      </Grid>
      {props.browseMoreHref && (
        <BrowseMore>
          <Link to={props.browseMoreHref}>Browse more</Link>
        </BrowseMore>
      )}
    </Root>
  );
}

ProjectPreviewGrid.defaultProps = {
  title: "",
  nodes: [],
  browseMoreHref: ""
};

export default ProjectPreviewGrid;
