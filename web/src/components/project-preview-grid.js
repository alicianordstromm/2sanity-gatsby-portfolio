import { Link } from "gatsby";
import React from "react";
import ProjectPreview from "./project-preview";
import styled from "styled-components";

const Root = styled.div`
margin: 2em 0 4em;
`

const LatestProjects = styled.h2`
font-size: 14pt;
line-height: var(--font-micro-line-height);
font-weight: 500;
text-transform: uppercase;
letter-spacing: 0.5px;
margin: 5rem 0;
`

const Grid = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: grid;
grid-template-columns: 1fr;
grid-gap: 2em;

  @media (min-width: 768px) {
  grid-template-columns: 1fr;
  }

  @media (min-width: 900px) {
  grid-template-columns: 1fr 1fr;
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
    </Root>
  );
}


export default ProjectPreviewGrid;
