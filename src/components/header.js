import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo-hero.svg"
import bg from "../images/bg.svg"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Header = ({ siteTitle }) => (
  <header
    className="h-screen flex justify-center items-center relative"
  >
    <div className="absolute inset-0">
      <img className="w-full h-full object-cover" src={ bg } alt="" />
    </div>
    <div className="z-10">
      <div className="w-full max-w-sm mx-auto">
        <h1 className="">
          <img
            src={ logo }
            alt={ siteTitle }
            className="w-full h-auto"
          />
        </h1>
      </div>
      <div className="text-center">
        <span className="text-lg font-bold">Graphic Design, Web Design, Wordpress Consulting</span>
        <br/>
        Based in Lawrence, KS
      </div>
    </div>
    <div className="absolute bottom-0 w-full text-center text-2xl">
      {/* <i class="fad fa-arrow-down" /> */}
      <a href="#content">
        <FontAwesomeIcon icon={["fal", "arrow-down"]} />
      </a>
    </div> s
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
