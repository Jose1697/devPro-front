import React from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { storage } from '../firebase';
import Experto from '../components/FormExperto';
// import { actualizarLocalStorage } from '../services/services'

class EditProfile extends React.Component {

    constructor(props){
        super(props)
        this.state={
            photo:''   
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

    handleSubmit = () => {
        // event.preventDefault()
    
        fetch(`https://devpro-2021.herokuapp.com/usuario/usuario/${this.usuario.id}/`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.state)
        })
        console.log(this.state);
        this.actualizarLocalStorage()
        console.log("storage actualizado");
        console.log(JSON.parse(localStorage.getItem('usuario')));
        console.log("verifico storage");
        
        console.log("ya cambie de pagina");
    }

    // actualizarLocalStorage = () => {
    //     let newUser;
    //     this.obtenerUsuario().then((us) => { newUser = us} )
    //     console.log(newUser);
        
    // };
    
    
    
    actualizarLocalStorage = async() => {
        console.log("actualizando storage");
        const response = await fetch(`https://devpro-2021.herokuapp.com/usuario/usuario/${this.usuario.id}/`)
        const data = await  response.json()   
        console.log(data);
        console.log("verifico la data que ira al storage");
        localStorage.setItem('usuario', JSON.stringify(data))
        this.props.history.push('/')
        
        
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
                        
                        

                        <button onClick={this.handleSubmit} className="btn btn-primary" >Guardar</button>
                    </div>
                    
                    
                    <div>
                            {this.usuario.tipo_usuario === 'Experto'
                                    ? <Experto  />
                                    : []
                            }
                    </div>
                <Footer/>
            </>
        )

    }

    

};

export default EditProfile;