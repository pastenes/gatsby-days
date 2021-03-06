/** @jsx jsx */
import { jsx, Layout as StyledLayout, Container, Main } from "theme-ui"
import Header from "./Header.js"
import Footer from "./Footer.js"
import { Global } from "@emotion/core"
import { GlobalStyles } from "../styles/GlobalStyles"
import { Grommet } from "grommet"
import theme from "../gatsby-plugin-theme-ui"
import "../styles/scss/styles.scss"

const Layout = ({ children }) => (
  <Grommet theme={theme}>
    <Global styles={GlobalStyles} />
    <StyledLayout>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </StyledLayout>
  </Grommet>
)

export default Layout
