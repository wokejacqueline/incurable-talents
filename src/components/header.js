import { Link } from "gatsby"
import PropTypes from "prop-types"
import style from "./layout.module.scss"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className={style.header}>
    <div className={style.headerContent}>
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
