import { Link } from "gatsby";
import React, { useState } from 'react';
import Icon from "./icon";
import styled from "styled-components"
import { cn } from "../lib/helpers";


const RootHeader = styled.div`
position: fixed;
z-index: 100;
width:100%;
`

const Wrapper = styled.div`
box-sizing: border-box;
margin: 0 auto;
width: 100%;
padding-left: 2em;
padding-right: 2em;
padding-top: 1.5em;
padding-bottom: 4em;
max-width: 1440px;
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
padding: 0.5em;
color: inherit;

  svg {
  display: block;
  fill: inherit;
  }
  @media (min-width: 769px) {
  display: none;
  }
  
`

const ListHeader = styled.nav`
  @media (max-width: 768px) {
  display: none;
  }

  @media (min-width: 768px) {
  display: block;
  
    ul {
    margin: 0;
    padding-top: 1.5em;
    padding-right: 1em;
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
    list-style: none;
    }

    ul li a {
    margin-left: 1rem;
    display: block;
    color: inherit;
    text-decoration: none;
    }

    @media (hover: hover) {
      ul li a:hover {
      text-decoration: underline;
      }
    }}
`

const ListHamburger = styled.nav`
  @media (min-width: 768px) {
  display: none;
  }

  @media (max-width: 768px) {
  position: absolute;
  background: var(--color-white);
  color: var(--color-black);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  right: 0;
  top: 4.3rem;
  width: 170px;
  display: flex;
  

    ul {
    padding: 1rem 0;
    flex-direction: column;
    list-style: none;
    }

    ul li a {
    padding: 0.5rem 1.5rem;
    display: block;
    color: inherit;
    text-decoration: none;
     }

    @media (hover: hover) {
      ul li a:hover {
      text-decoration: underline;
      }
    }
  }
`

const Header = ({ onHideNav, onShowNav, showNav, siteTitle, categories }) => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <RootHeader>
      <Wrapper>
        <LinkMainPage>
          <Link to="/">{siteTitle}</Link>
        </LinkMainPage>

        <MenuButton onClick={() => setShowMenu(!showMenu)}>
          <Icon symbol="hamburger" />
        </MenuButton> 
        <ListHeader>
            <ul>
            {categories.map(c => (
              <li>
                < Link to="/archive/">{c.title}</Link>
              </li>
            ))}
            </ul>
        </ListHeader>
        {showMenu && 
         (<ListHamburger>
            <ul>
            {categories.map(c => (
              <li>
                < Link to="/archive/">{c.title}</Link>
              </li>
            ))}
            </ul>
          </ListHamburger>)}
        </Wrapper>
      </RootHeader>
    );
  };
export default Header;
