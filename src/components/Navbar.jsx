import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';
import Logo from './images/logo-devpro.gif';

function Navbar() {

    
 
  return (
    <>
      <section className="header sticky-top">
        <nav
          id="header"
          className="navbar navbar-expand-lg navbar-dark bg-black "
        >
          <div className="container">
            <a id="logo-header" className="navbar-brand" href="#">
              <img className="logo"  src={Logo} alt="Logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#hero">
                    Home<span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#proyectos">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#tecnologia">
                    Products
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#trabajo">
                    Store
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}

export default Navbar;