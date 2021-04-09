import React from 'react';

class FormExperto extends React.Component{
handleClick = e => {
  

    };
    
   render(){
       return(
        <div className="form_expert">
        <h1>Informacion Personal</h1>

            <form className="form mt-5" style={{width: '70%'}} >
                <div className="card-body form_Ex">   
                   


                   
                    <div className="form-group">
                        <label>Dni Experto</label>
                        <input
                        onChange={this.props.onChange}
                        className="form-control"
                        type="text"
                        name="codigo_experto"
                         value={this.props.formValues.codigo_experto}
                        />
                    </div>
                    
                    <div className="form-group">
                        <label>Descripcion</label>
                        <input
                        onChange={this.props.onChange}
                        className="form-control"
                        type="text"
                        name="descripcion_experto"
                        value={this.props.formValues.descripcion_experto}
                        />
                    </div>
                 
                   <div>
                        
                        <button onClick={this.props.onClick1}  className="btn btn-success">
                               Actualizar Información
                        </button>
                   </div>
                    
                </div>   
            </form>
      </div>
       )
   }
}


export default FormExperto;