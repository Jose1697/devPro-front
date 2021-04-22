import React  from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.scss';
import Logo from './images/logo-devpro.gif';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";


class Navbar extends React.Component {
  

  constructor(props){
    super(props)
    
    this.state= {
      usuario: JSON.parse(localStorage.getItem('usuario')),
      cliente: JSON.parse(localStorage.getItem('cliente'))
    }
  }

  componentDidMount(){
    console.log('3. componentDidMount');
    this.setState({
      usuario: JSON.parse(localStorage.getItem('usuario'))
    })
  }

  handleClick = event => {
    localStorage.removeItem("usuario")
    if(this.state.cliente != null){
      localStorage.removeItem("cliente")
    }
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
                      
                      <Link className="nav-link" to="/Nosotros">
                        Nosotros
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/Emprendedor">
                        Emprendedores
                      </Link>
                    </li>
                    {(this.state.usuario != null) && (this.state.cliente != null) ? 
                        
                        (this.state.usuario.tipo_usuario === 'Cliente') && (this.state.cliente.suscripcion === "activo") ?
                          <li className="nav-item">
                            <Link className="nav-link" to="/NewProyecto">
                              Empieza un Proyecto
                            </Link>
                          </li> :
                          []

                        :
                        []
                    }

                    
                    
                    {
                      this.state.usuario != null ? 
                      (this.state.usuario.tipo_usuario === 'Cliente') || (this.state.usuario.tipo_usuario === 'Experto')?
                        
                        <li className="nav-item">
                          <Link className="nav-link" to="/Proyectos">
                            Mis proyectos
                          </Link>
                        </li> : [] 
                      : 
                      []
                      
                    }

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
                    {this.state.usuario != null ? 
                      <div className="header__menu">
                          <div className="header__menu--profile">
                              
                              <p>{this.state.usuario.first_name}</p>                  

                              <img className="fotoperfil" src={this.state.usuario.photo} alt="User"/>
     
                          </div>
                    
                          <ul className="opciones">
                              <li><Link  to="/profile" >Cuenta</Link></li>
                              <li><Link  to="/suscripcion" >Suscripcion</Link></li>
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