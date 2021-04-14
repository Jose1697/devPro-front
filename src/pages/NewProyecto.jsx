import React from 'react';
import Navbar from '../components/Navbar'
import FormProyecto from '../components/FormProyecto'
import './styles/expert.css';
class NewProyecto extends React.Component{
   render(){
       return(
         <div>
            
                <Navbar />
               <div>
               <FormProyecto />
               </div>
						
         </div>
       )
   }
}


export default NewProyecto;