import { Link } from "gatsby";
import React from "react";
import Icon from "./icon";
import styled from "styled-components"
import { cn } from "../lib/helpers";


const RootHeader = styled.div`
position: fixed;
z-index: 100;
`

const Wrapper = styled.div`
box-sizing: border-box;
margin: 0 auto;
width: 100%;
padding: 3em;
display: flex;
justify-content: space-between;

  @media (--media-min-small) {
  padding: 1.5em 1.5em;
  }
`

const LinkMainPage = styled.div`
font-weight: 600;
flex: 1;

  a {
  display: inline-block;
  padding: 0.5em;
  color: inherit;
  font-size: 20pt;
  text-decoration: none;
   
    @media (hover: hover) {
      &:hover {
      text-decoration: underline;
      }
    }
  }
`

const MenuButton = styled.button`
appearance: none;
font-size: 25px;
border: none;
background: none;
margin: 0;
padding: calc(14 / 17 / 2 * 1rem);
color: inherit;

  svg {
  display: block;
  fill: inherit;
  }
  @media (min-width: 768px) {
    display: none;
  }
  
`

const ListHamburger = styled.nav`
display: none;

  ul {
  margin: 0;
  padding: 0;
  }

  ul li a {
  display: block;
  color: inherit;
  text-decoration: none;
  }

  @media (hover: hover) {
     ul li a:hover {
    text-decoration: underline;
    }
  }

  @media (--media-max-small) {
  position: absolute;
  background: var(--color-white);
  color: var(--color-black);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  left: 0;
  right: 0;
  top: 4.3rem;

    ul {
    padding: 1rem 0;
    }

    ul li a {
    padding: 0.5rem 1.5rem;
    }
  }

  @media (--media-min-small) {
  display: block;

    ul {
    list-style: none;
    display: flex;
    justify-content: flex-end;
    }

    ul li a {
    padding: 0.5rem;
    }
  }
`


const Header = ({ onHideNav, onShowNav, showNav, siteTitle }) => (
  <RootHeader>
    <Wrapper>
      <LinkMainPage>
        <Link to="/">{siteTitle}</Link>
      </LinkMainPage>

      <MenuButton onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol="hamburger" />
      </MenuButton>

      <ListHamburger>
        <ul>
          <li>
            <Link to="/archive/">Archive</Link>
          </li>
        </ul>
      </ListHamburger>
    </Wrapper>
  </RootHeader>
);

export default Header;
