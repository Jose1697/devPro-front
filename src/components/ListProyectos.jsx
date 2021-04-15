import React from 'react';
import { Link } from 'react-router-dom';
import './styles/proyectList.css'

class ListItaProyecto extends React.Component {
    render() {
      return (
        <div >
          <img
            className="BadgesListItem__avatar1"
            src={this.props.badge.avatarUrl}
            alt=""
          />
  
          <div>
            <strong>
              {this.props.badge.firstName} {this.props.badge.lastName}
            </strong>
            <br />@{this.props.badge.twitter}
            <br />
            {this.props.badge.jobTitle}
          </div>
        </div>
      );
    }
  }
class ListProyectos extends React.Component{
  
   render(){
       return(
        <>
        <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        
        <br/>
        <br/>
        <h1 className="titulo">Lista de Proyectos</h1> 
        {/* <h1 className="titulo2"></h1>   */}
        </div>
        <section className="carrusel" >
         <div className="carrusel__container">
          {this.props.lista.map(badge => {
            return (
              <div id="carousel-item" key={badge.id}>
                
                <Link to="/Proyectos/1">  {/* Cambiar el 8 por el id del proyecto */}
                  <ListItaProyecto badge={badge} />
                </Link>
                
              </div>
            );
          })}
         </div>
      </section>
      </>
       )
   }
}


export default ListProyectos;