import React  from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.scss';
import Logo from './images/logo-devpro.gif';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";


class Navbar extends React.Component {

  constructor(props){
    super(props)
    this.usuario = JSON.parse(localStorage.getItem('usuario'))
  }

  handleClick = event => {
    localStorage.removeItem("usuario")
  }
  render(){
      return (
        <>
          <section className="header sticky-top">
            <nav
              id="header"
              className="navbar navbar-expand-lg navbar-dark bg-black "
            >
              <div className="container">
                <Link id="logo-header" className="navbar-brand" to="/">
                  <img className="logo"  src={Logo} alt="Logo" />
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
                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link className="nav-link" to="/">
                      <FontAwesomeIcon icon={faHome} />
                        Home<span className="sr-only">(current)</span>
                      </Link>
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
                    <li className="nav-item dropdown">
                      <Link className="nav-link dropdown-toggle" to="/" id="navbardrop" data-toggle="dropdown">
                        Empresas y Entidades
                      </Link>
                    
                      <div className="dropdown-menu">
                        <Link className="dropdown-item" to="#Formulacion">Formulacion de Proyectos</Link>
                        <Link className="dropdown-item" to="#Talleres">Talleres y cursos de Innovacion</Link>
                        <Link className="dropdown-item" to="#Talleres">Talleres y cursos de Innovacion</Link>
                        <Link className="dropdown-item" to="#Talleres">Talleres y cursos de Innovacion</Link>
                        <Link className="dropdown-item" to="#Talleres">Talleres y cursos de Innovacion</Link>
                      
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
                    {/*  */}
                    {this.usuario != null ? 
                      <div className="header__menu">
                          <div className="header__menu--profile">
                              
                              <p>{this.usuario.first_name}</p>                  

                              <img className="fotoperfil" src={this.usuario.photo} alt="User"/>
     
                          </div>
                    
                          <ul className="opciones">
                              <li><Link  to="/profile" >Cuenta</Link></li>
                              <li><Link onClick={this.handleClick}  to="/login">Cerrar Sesión</Link></li>
                          </ul>
                      </div> :

                      
                      <Link className="btn btn-success" to="login">Iniciar Sesion</Link>
                      
                  
                    }
                    

                    
                  </ul>
                </div>
              </div>
            </nav>
          </section>
        </>
      );
  }
};

export default Navbar;