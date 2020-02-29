/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import fontAwesome from "./fontAwesome"

import Header from "./header"
import "../styles/style.css"

// init FontAwesome
fontAwesome();

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
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="container">
        <main>{children}</main>
        <footer className="pt-16 pb-8 text-center">
          © {new Date().getFullYear()} Mullis Creative<br/>
          <small className="text-gray-500">
            Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
          </small>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
