import React from 'react';
import Navbar from '../components/Navbar'
import ListProyectos from '../components/ListProyectos'

class Proyecto extends React.Component{
   render(){
       return(
        <div>
            
        <Navbar />
        <div className="Fondo1">
          < ListProyectos/>
        </div>
         </div>
       )
   }
}


export default Proyecto;