import React from 'react';
import Navbar from './Navbar';
import api from '../api';
import swal from 'sweetalert';
import { storage } from '../firebase';
import './styles/formProyecto.css';
class FormProyecto extends React.Component{
    constructor(props){
        super(props)
        this.state={
            photo:'',
            Proyecto: {
                id_cliente:'',
                nombre_proyecto:'',
                descripcion_proyecto:'',
                financiamiento_proyecto:'',
                photo:'',
              },  
        } 
        this.usuario = JSON.parse(localStorage.getItem('usuario'))
    }
  
    handleSave = (e) => {

        if(e.target.files[0]){
            const image = (e.target.files[0]);
            const uploadTask = storage.ref(`images/${image.name}`).put(image)
            uploadTask.on('state_changed',
                (snapshot) => {
                    console.log(snapshot);
                },
                (error) => {
                    console.log(error);
                },
                () => {
                    storage.ref('images').child(image.name).getDownloadURL().then(url => {
                        this.setState({photo:url});
                        this.state.Proyecto.photo=url;
                       
                    })
                }

            )

        }

    };
    handleChange = (e) => {
        this.setState({
         
          Proyecto: {
            ...this.state.Proyecto,
            [e.target.name]: e.target.value,
          }
        });
    }
    handleClick = async e => {
        e.preventDefault();
     
        try {
            this.state.Proyecto.id_cliente=this.usuario.id;
            
            
            console.log(this.state.Proyecto);
            await api.badges.create(this.state.Proyecto);
            swal("Registro Exitoso!", "You clicked the button!", "success");
         
         
          
        } catch (error) {
          this.setState({  error: error });
        }
      };   
   render(){
       return(
         <div>
             <Navbar /> 
             <div className="container" >
                   
                    <div className="row">
                        <div className="col-4">
                                    <h1 className="title-foto">Foto de proyecto</h1>
                                        <div className="form-foto">
                                                                               
                                                <div>
                                                    <input type="file" onChange={this.handleSave}/>
                                                </div>                                                                                             
                                               <img className="foto-cargada" src={`${this.state.photo}` || "https://image.flaticon.com/icons/png/512/16/16410.png"} alt="new-img" />
                                                                         
                                        </div>

                        </div>
                        <div className="col-8">            
                            <h1 className="Titulo">Empieza un Proyecto</h1>
                                <div className="form_expert">
                            
                                    <form className="form mt-10" style={{width: '95%'}}  >
                                        <div className="card-body form_Ex">   
                                    
                        
                                            <div className="form-group">
                                                <label className="dni">Nombre Proyecto</label>
                                                <input
                                                className="form-control"
                                                name="nombre_proyecto"
                                                type="text"
                                                onChange={this.handleChange}
                                                value={this.state.Proyecto.nombre_proyecto}
                                                />
                                            </div>
                                            
                                            <div className="form-group">
                                                <label className="Descripcion">Descripcion Proyecto</label>
                                                <textarea
                                                className="form-control"
                                                name="descripcion_proyecto"
                                                type="text"
                                                onChange={this.handleChange}
                                                value={this.state.Proyecto.descripcion_proyecto}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label className="Descripcion">Monto Alcanzar</label>
                                                <input
                                                className="form-control"
                                                name="financiamiento_proyecto"
                                                type="text"
                                                onChange={this.handleChange}
                                                value={this.state.Proyecto.financiamiento_proyecto}
                                                />
                                            </div>
                                        
                                            <div>
                                                
                                                <button  className="btn btn-primary btn-xs" onClick={this.handleClick}>
                                                    Aun Falta
                                                    
                                                </button>
                                            </div>
                                            
                                        </div>   
                                    </form>
                                </div>
			            </div>	
            </div>		
            </div>	
         </div>
       )
   }
}


export default FormProyecto;