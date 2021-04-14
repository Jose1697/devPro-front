import React from 'react';
import Navbar from './Navbar'
class FormProyecto extends React.Component{
   render(){
       return(
         <div>
             <Navbar /> 
              
             <h1 className="Titulo">Empieza un Proyecto</h1>
             <div className="form_expert">
        

            <form className="form mt-10" style={{width: '95%'}}  >
                <div className="card-body form_Ex">   
                   


                   
                    <div className="form-group">
                        <label className="dni">Nombre Proyecto</label>
                        <input
                         className="form-control"
                        />
                    </div>
                    
                    <div className="form-group">
                        <label className="Descripcion">Descripcion Proyecto</label>
                        <input
                         className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label className="Descripcion">Financiamiento Proyecto</label>
                        <input
                         className="form-control"
                        />
                    </div>
                 
                    <div>
                        
                        <button  className="btn btn-primary btn-xs">
                             <div className="botonR">Aun Falta
                               </div>  
                        </button>
                    </div>
                    
                </div>   
            </form>
      </div>
						
         </div>
       )
   }
}


export default FormProyecto;