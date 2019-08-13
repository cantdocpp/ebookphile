import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div className="header__inner">
      <div className="logo">
        <Link to="/">ebookphilia</Link>
      </div>
      <div className="navigation">
        <Link to="/" className="order-menu">order now</Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `ebookphilia`,
}

export default Header
