import React from 'react';
import Navbar from '../components/Navbar'
import Buscador from '../components/Buscador'
import './styles/proyect.css'

class Proyecto extends React.Component{
   render(){
       return(
        <div>
            
        <Navbar />
        <div className="Fondo1">
          < Buscador/>
        </div>
         </div>
       )
   }
}


export default Proyecto;