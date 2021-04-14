import React from 'react';
import Navbar from '../components/Navbar'
import FormProyecto from '../components/FormProyecto'
import './styles/expert.css';
import Glyphicon from '@strongdm/glyphicon'
import { Link } from 'react-router-dom';
class NewProyecto extends React.Component{
   render(){
       return(
         <div>
            
            <Navbar />
            <div className="wrapper bgded overlay" >
                <div id="pageintro" className="hoc"> 
                
                    <article>
                        <p>Mauris placerat sem hendrerit</p>
                        <h3 className="heading">Convierte tu proyecto creativo en realidad.</h3>
                        <p>Eu elit lacinia porta in eget risus duis pretium tellus ac odio</p>
                   
                        <Link class="btn btn-primary" to="/newPro" role="button" >
                            Empieza un 
                               Proyecto
                                <span className="glyphicon glyphicon-chevron-right"></span>  
                        </Link>
                    </article>
   
  </div>
</div>

        
             
						
         </div>
       )
   }
}


export default NewProyecto;