import React from "react";
import "./navbar.css";

import RinoexpertsLogo from '../../assets/img/logo.png';

import { Link } from 'react-router-dom';

const Narvbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand p-3">
        <img src={RinoexpertsLogo} className="img-logo-navbar" alt="Responsive image" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-item nav-link active" to="/">
            Inicio
          </Link>
          <Link className="nav-item nav-link" to="/1">
            Features
          </Link>
          <Link className="nav-item nav-link" to="/2">
            Pricing
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Narvbar;
