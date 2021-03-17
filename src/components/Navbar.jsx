import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';
import Logo from './images/logo-devpro.gif';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
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
                  <a className="nav-link" href="Home">
                  <FontAwesomeIcon icon={faHome} />
                    Home<span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="Nosotros">
                    Nosotros
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="Empresas">
                    Empresas y Entidades
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="Proyectos">
                    Proyectos
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="Expertos">
                    Expertos
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="Contacto">
                    Contacto
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