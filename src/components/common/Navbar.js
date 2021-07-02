import React, { Fragment } from "react";
import Logo from "../../images/gharsewa_logo.png";
import { Link } from "react-router-dom";
import "../../style/navbar.css";

const Navbar = () => {
  return (
    <Fragment>
      <nav
        className="navbar navbar-expand-lg navbar-light  "
        style={background}
      >
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="Ghar sewa logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/blog">
                Blog
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Our Services
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/">
                  Plumber
                </Link>
                <Link className="dropdown-item" to="/">
                  Electrician
                </Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="/">
                  Something else here
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                Search By Location &nbsp;
                <i class="fa fa-map-marker" aria-hidden="true"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login &nbsp;
                <i className="fa fa-user-circle" aria-hidden="true"></i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};
const background = {
  background: "#254e58",
};

export default Navbar;
