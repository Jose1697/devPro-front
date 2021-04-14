import React from 'react';
import Navbar from '../components/Navbar'
import FormProyecto from '../components/FormProyecto'
import './styles/expert.css';
class NewProyecto extends React.Component{
   render(){
       return(
         <div>
            
            <Navbar />
                <div >
                    Convierte ....en realidad
                     <br/>
                    <a class="btn btn-primary" href="/newPro" role="button">Empieza Un Proyecto</a>
                </div>
             
						
         </div>
       )
   }
}


export default NewProyecto;