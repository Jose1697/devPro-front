import React from 'react';
import './styles/buscar.css'


class Proyecto extends React.Component{
    state = {
        busqueda:'',
    };

onChange1=async e=>{
        e.persist();
        await this.setState({busqueda: e.target.value});
        this.filtrarElementos();
    }
   
    filtrarElementos=()=>{
        var search=this.props.lista.filter(item => {
            console.log(this.state.busqueda)
            if(item.id_cliente.usuario.first_name.toString().toUpperCase().includes(this.state.busqueda.toUpperCase()) 
            ){
               
               
                return item;
          }
          if(item.nombre_proyecto.toString().toUpperCase().includes(this.state.busqueda.toUpperCase()) 
            ){
               
               
                return item;
          }
        
          
       
       });
       console.log(search)
       this.props.handler(search);
     }
   
   render(){
       return(
        <div  >
            
       
       
            <section className="container-buscador">
                    <form className="container-buscador1" action="" method="">		    
                        <input 
                        placeholder="Search..."
                        type="text"
                        id="searchterm"
                        placeholder="Buscar"
                        className=""
                        value={this.state.busqueda}
                        onChange={this.onChange1}
                        />		    	
                        <button>Search</button>
                    </form>
            </section>
           
         </div>
       )
   }
}


export default Proyecto;