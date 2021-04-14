import React from 'react';

class FormCliente extends React.Component{
    render(){
        return(
         <div className="form_expert">
         <h1>Informacion Personal</h1>
 
             <form className="form mt-5" style={{width: '70%'}} >
                 <div className="card-body form_Ex">   
                    
 
 
                    
                     <div className="form-group">
                         <label>Descripcion</label>
                         <input
                           className="form-control"
                         
                         />
                     </div>
                     
                     
                    <div>
                         <button   className="btn btn-primary">
                                Agregar 
                         </button>
                         
                    </div>
                     
                 </div>   
             </form>
       </div>
        )
    }
}


export default FormCliente;