import React from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { storage } from '../firebase';
import Experto from '../components/FormExperto';
import api from '../api';
import swal from 'sweetalert';
// import { actualizarLocalStorage } from '../services/services'

class EditProfile extends React.Component {

    constructor(props){
        super(props)
        this.state={
            photo:'' ,
            Experto: {
                usuario:'',
                id_tipo:'',
                codigo_experto:'',
                descripcion_experto:'',
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
                    })
                }

            )

        }

    };

    handleSubmit = async () => {
        // event.preventDefault()
    
        await fetch(`https://devpro-2021.herokuapp.com/usuario/usuario/${this.usuario.id}/`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.state)
        })

        const response = await fetch(`https://devpro-2021.herokuapp.com/usuario/usuario/${this.usuario.id}/`)
        const data = await  response.json() 
        await localStorage.setItem('usuario', JSON.stringify(data))
        await this.props.history.push('/')
   
    }


    handleChange = e => {
        this.setState({

            Experto: {
                ...this.state.Experto,
                [e.target.name]: e.target.value,
              },  
          
        });
      };
    
      handleSubmit1 = async e => {
        e.preventDefault();
     
        try {
            this.state.Experto.usuario=this.usuario.id;
            //por mientras
            this.state.Experto.id_tipo= 1;
            
            console.log(this.state.Experto);
            await api.badges.create(this.state.Experto);
            swal("Registro Exitoso!", "You clicked the button!", "success");
         
         
          
        } catch (error) {
          this.setState({  error: error });
        }
      };

      handleSubmit2 = async e => {
        e.preventDefault();
        
        try {
            
         
         
          
        } catch (error) {
          this.setState({  error: error });
        }
      };


    render(){
        return(
            <>
                <Navbar/>

                    <div className="container">
                        <div>
                            <input type="file" onChange={this.handleSave}/>
                        </div>
                        
                        <div>
                            <img src={`${this.state.photo}` || "https://image.flaticon.com/icons/png/512/16/16410.png"} alt="new-img" />
                        </div>
                        
                        

                        <button onClick={() => {this.handleSubmit()}} className="btn btn-primary" >Guardar</button>
                    </div>
                    
                    
                    <div>
                            {this.usuario.tipo_usuario === 'Experto'
                                    ? <Experto
                                        onChange={this.handleChange}
                                        onClick={this.handleSubmit1}
                                        onClick1={this.handleSubmit2}
                                        formValues={this.state.Experto}
                                        formValues1={this.usuario}
                                      />
                                    : []
                            }
                    </div>
                
                
                <Footer/>
            </>
        )

    }

    

};

export default EditProfile;