import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `transparent`,
      position: `fixed`,
      textAlign: `left`,
      zIndex: `9`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0.8rem 1.0875rem`,
      }}
    >
      <h2 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `rgba(0,0,0, 0.4)`,
            fontSize: `16px`,
            textDecoration: `none`,
          }}
        >
          Incurable <span style={{ fontWeight: `700` }}>Talents</span>
        </Link>
      </h2>
    </div>
  </header>
)

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
