import React from "react";
import Header from "./header";
import styled from "styled-components"
import "../styles/layout.css";

const SiteInfoCompanys = styled.div`
text-align: center;
font-size: var(--font-small-size);
line-height: var(--font-small-line-height);
`

const BottomPage = styled.footer`
border-top: 1px solid var(--color-very-light-gray);

  a {
  color: inherit;
  text-decoration: none;

  @media (hover: hover) {
    &:hover {
    text-decoration: underline;
    }
  }
}
`

const BottomPageWrapper = styled.div`
box-sizing:border-box;
max-width: 1440px;
padding: 4.5em 1.5em 1.5em;
margin: 0 auto;

  @media (--media-min-small) {
  padding: 6em 2em 2em;
  }


`

const Content = styled.div`
background:var(--color-white);
min-height: calc(100% - 73px - 120px);

  @media (--media-min-small) {
  min-height: calc(100% - 88px - 150px);
  }
`



const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle, categories }) => (
  <>
    <Header 
      siteTitle={siteTitle} 
      onHideNav={onHideNav} 
      onShowNav={onShowNav} 
      showNav={showNav} 
      categories={categories}
      />
    <Content>{children}</Content>
    <BottomPage>
      <BottomPageWrapper>
        <SiteInfoCompanys>
          © {new Date().getFullYear()}, Built with <a href="https://www.sanity.io">Sanity</a> &amp;
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </SiteInfoCompanys>
      </BottomPageWrapper>
    </BottomPage>
  </>
);

export default Layout;
