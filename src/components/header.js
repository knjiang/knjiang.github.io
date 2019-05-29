import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
      maxHeight:70,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        textAlign: 'right',
      }}
    >
      <h1 style={{ margin: 0
          }}>
        <Link
          to="/"
          style={{
            color: `#0d7373`,
            textDecoration: `none`,
            fontSize: 30,
            paddingRight: 682,
          }}
        >
        ken jiang
        </Link>
        <Link
          to="/projects"
          style={{
            color: `#0d7373`,
            textDecoration: `none`,
            fontSize: 30,
          }}
        >
          projects
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
