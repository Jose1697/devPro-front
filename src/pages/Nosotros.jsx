import React from 'react';
import Navbar from '../components/Navbar'

class Nosotros extends React.Component{
   render(){
       return(
        <div>
            
        <Navbar />
        <div id="columnas" >
            <li className="list-unstyled">
                <div className="Centrado">
                    <h1 >Integrantes</h1>
                    
                </div>
            </li>
            <li className="list-unstyled">
              <img  className="Expertos__container"    
                src="https://www.confiep.org.pe/wp-content/uploads/2019/06/team-3373638_1280-940x430.jpg"             
              />
            </li>
           
         </div>
         <hr></hr>
         <div id="columnas" >
            <li className="list-unstyled">
                <div className="Centrado">
                    <h1 >Nuestra Visión</h1>
                    
                </div>
            </li>
           
            <li className="list-unstyled">
              <div className="Centrado">
                    <h1 >Nuestra Misión</h1>
                    
                </div>
            </li>
           
         </div>
         </div>
       )
   }
}


export default Nosotros;