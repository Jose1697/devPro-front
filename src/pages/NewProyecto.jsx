import React from 'react';
import Navbar from '../components/Navbar'
import './styles/expert.css';
import { Link } from 'react-router-dom';
import Glyphicon from '@strongdm/glyphicon'
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
                               <Glyphicon glyph='chevron-right'/>
                                
                        </Link>
                    </article>
   
  </div>
</div>

        
             
						
         </div>
       )
   }
}


export default NewProyecto;