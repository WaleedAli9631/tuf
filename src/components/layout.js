/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider} from "styled-components";
import styled from "styled-components";
import Header from "./header"
import "./layout.css"
import Footer from "./footer";
import Logo from "../images/tuf_icon.svg";
import { Box, Image } from "rebass";


const theme = {
  breakpoints: ["40em", "52em", "64em"],
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    sans: "system-ui, sans-serif"
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 46],
  colors: {
    grey: "#999",
    black: "#1a1a1a",
    red: "#e61428",
    primary: "#ec6e15",
    seconday: "#999"
  }, 
};

const LogoStyled = styled(Image)`
  position: fixed;
  @media (max-width: 700px)
  {
      display: none;
  }
`
const MainWrapper = styled.div`
  margin-left: 50px;
  padding: 0px 10px;
  @media (max-width: 700px)
  {
      margin-left: 0px;
      margin-bottom: 10px;

  } 
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <div>
          <LogoStyled src={Logo} alt="Logo" height={40} />
            <MainWrapper>
            <Header/>
              {children}
            </MainWrapper>
            <Footer/>
          </div>
        </React.Fragment>
      </ThemeProvider>

    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
