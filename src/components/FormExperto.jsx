import React from 'react';

class FormExperto extends React.Component{
handleClick = e => {
  

    };
    
   render(){
       return(
           <>
        <h1 className="Titulo">Informacion Personal</h1>
        <div className="form_expert">
        

            <form className="form mt-10" style={{width: '95%'}}  >
                <div className="card-body form_Ex">   
                   


                   
                    <div className="form-group">
                        <label className="dni">Dni Experto</label>
                        <input
                        onChange={this.props.onChange}
                        className="form-control"
                        type="text"
                        name="codigo_experto"
                         value={this.props.formValues.codigo_experto}
                        />
                    </div>
                    
                    <div className="form-group">
                        <label className="Descripcion">Descripcion</label>
                        <input
                        onChange={this.props.onChange}
                        className="form-control"
                        type="text"
                        name="descripcion_experto"
                        value={this.props.formValues.descripcion_experto}
                        />
                    </div>
                 
                   <div>
                        
                        <button onClick={this.props.onClick1}  className="btn btn-primary btn-xs">
                             <div className="botonR">Actualizar 
                               Información</div>  
                        </button>
                   </div>
                    
                </div>   
            </form>
      </div>
      </>
       )
   }

}


export default FormExperto;