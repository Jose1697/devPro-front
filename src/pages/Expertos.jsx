import React from 'react';
import Navbar from '../components/Navbar'
import './styles/expert.css';
import ExpertoList from '../components/ExpertoList'
class Expertos extends React.Component{
   render(){
       return(
        <div>   
        <Navbar />      
        <div >
            <img    className="Expertos__container"    
                src="https://www.unir.net/wp-content/uploads/2017/12/International_Mentoring_Program-1.jpg"             
              />
            </div>
            <div class="texto-encima">
                Red de Mentores</div>
         
        <div>
        <ExpertoList/>
        </div>
         </div>
       )
   }
}


export default Expertos;