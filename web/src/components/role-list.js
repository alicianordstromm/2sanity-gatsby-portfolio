import React from "react";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import { ucfirst } from "../lib/string-utils";
import styled from "styled-components"

const RootBody = styled.div`
margin: 2rem 0 3rem;
border-top: 1px solid var(--color-very-light-gray);
`

const H2Main = styled.h2`
composes: base from './typography.module.css';
margin: 0.5rem 0 0;
`

const List = styled.ul`
list-style:none;
margin: 0;
padding: 0;
`

const ListItem = styled.li`
font-size: var(--font-small-size);
margin: 1rem 0;
display: flex;
justify-content: center;
align-items: center;

  & > div:last-child {
  flex: 1;
  margin-left: 0.75rem;
  }
`

const ImagesMain = styled.div`
position: relative;
width: 3em;
height: 3em;
background: #4F3F37;
border-radius: 50%;
overflow: hidden;

  img {
  width: 100%;
  height: 100%;
  vertical-align: top;
  object-fit: cover;
  }
`


function RoleList({ items, title }) {
  return (
    <RootBody>
      <H2Main>{title}</H2Main>
      <List>
        {items.map(item => (
          <ListItem>
            <div>
              <ImagesMain>
                {item.person && item.person.image && item.person.image.asset && (
                  <img
                    src={imageUrlFor(buildImageObj(item.person.image))
                      .width(100)
                      .height(100)
                      .fit("crop")
                      .url()}
                    alt="art"
                  />
                )}
              </ImagesMain>
            </div>
            <div>
              <div>
                <strong>{(item.person && item.person.name) || <em>Missing name</em>}</strong>
              </div>
              {item.roles && (
                <div>
                  {item.roles.map((role, idx) => {
                    switch (true) {
                      case idx === 0:
                        return <span key={role}>{ucfirst(role)}</span>;
                      case idx === item.roles.length - 1:
                        return <span key={role}> & {role}</span>;
                      default:
                        return <span key={role}>, {role}</span>;
                    }
                  })}
                </div>
              )}
            </div>
          </ListItem>
        ))}
      </List>
    </RootBody>
  );
}

export default RoleList;
