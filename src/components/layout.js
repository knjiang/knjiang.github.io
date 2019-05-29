/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import { Link } from "gatsby"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
          <footer style = {{
            textAlign: 'center', }}
            >
          <a
          href="https://drive.google.com/file/d/1GQjAN0pmEjKCi3BaTsfRN08PZMxLk6Z0/view?usp=sharing"
          style={{
            color: `#0d7373`,
            textDecoration: `none`,
            fontSize: 20,
          }}
        >
        resume&nbsp;
        </a>
        -
        <a
          href="https://github.com/knjiang"
          style={{
            color: `#0d7373`,
            textDecoration: `none`,
            fontSize: 20,
          }}
        >
        &nbsp;github&nbsp;
        </a>
        -
        <a href="https://www.linkedin.com/in/kjiang2000/"
          style={{
            color: `#0d7373`,
            textDecoration: `none`,
            fontSize: 20,
          }}
        >
          &nbsp;linkedin
        </a>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
