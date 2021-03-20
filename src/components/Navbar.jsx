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
                  <a className="nav-link" href="/">
                  <FontAwesomeIcon icon={faHome} />
                    Home<span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  
                  <Link className="nav-link" to="/Nosotros">
                    Nosotros
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Emprendedor">
                    Emprendedores
                  </Link>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown">
                    Empresas y Entidades
                  </a>
                 
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="#Formulacion">Formulacion de Proyectos</a>
                    <a class="dropdown-item" href="#Talleres">Talleres y cursos de Innovacion</a>
                    <a class="dropdown-item" href="#Talleres">Talleres y cursos de Innovacion</a>
                    <a class="dropdown-item" href="#Talleres">Talleres y cursos de Innovacion</a>
                    <a class="dropdown-item" href="#Talleres">Talleres y cursos de Innovacion</a>
                   
                  </div>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Proyectos">
                    Proyectos
                  </Link>
                </li>
               
                <li className="nav-item">
                  <Link className="nav-link" to="/Expertos">
                    Expertos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Contacto">
                    Contacto
                  </Link>
                </li>
                <li className="sesion">
                  <Link  class="btn btn-success" to="/login">Iniciar Sesion</Link>
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