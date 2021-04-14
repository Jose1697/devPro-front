import React from 'react';
import {Link} from 'react-router-dom';
import '../components/styles/Register.css';
import swal from 'sweetalert';


class Register extends React.Component{

    state = {
        form:{first_name:'', last_name:'' ,email:'',password:'', tipo_usuario:'',photo:'https://i.ibb.co/9T8WF8B/user-icon.png'}
    }

    constructor(props){
        super(props)
        this.state = {
            form:{first_name:'', last_name:'' ,email:'',password:'', tipo_usuario:'',photo:'https://i.ibb.co/9T8WF8B/user-icon.png'}
        }
        this.newUser=null
    }

    

    handleInput = event => {
        const formulario = this.state.form;
        formulario[event.target.name] = event.target.value;
        this.setState({form: formulario});
    }


    handleSubmit = async(event) => {
        event.preventDefault()
        // if(this.state.form.tipo_usuario === 'Inversionista'){
        //     await this.setState({
        //         form:{...this.state.form,
        //             last_name:'Inversionista'
        //         }
        //     }) 
        // }
        console.log(this.state.form.last_name);
        
        await fetch('https://devpro-2021.herokuapp.com/usuario/usuario/register/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.state.form)
        }).then((data) => { return data.json()} )
          .then((user) => this.newUser = user.id)

        console.log(this.newUser);

          

        if(this.state.form.tipo_usuario === 'Cliente'){
            const cliente = {
                "id":this.newUser,
                "usuario":this.newUser,
            }
            
            await fetch('http://localhost:8000/core/cliente/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(cliente)
            })

        }else if(this.state.form.tipo_usuario === 'Experto'){
            const experto = {   
                "id":this.newUser,
                "usuario": this.newUser  
            }
            await fetch('https://devpro-2021.herokuapp.com/core/experto/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(experto)
            })

        }else if(this.state.form.tipo_usuario === 'Inversionista'){
            const inversionista = {
                "id": this.newUser,
                "usuario": this.newUser
            }
            await fetch('https://devpro-2021.herokuapp.com/core/inversionista/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(inversionista)
            }).then((data) => { return data.json()})
            .then((user) => console.log(user))

        }
                
        console.log(this.state.form);
        await swal("Usuario Creado!", "You clicked the button!", "success");
        this.props.history.push('/login')
    }

    handleClick = (e) =>{
        console.log("Button was clicked")
    }

    render() {
        return(
            <section className="register">
                <div className="register__container">
                    
                    <h2>Regístrate</h2>
                    <hr/>
                    <form className="register__container--form" onSubmit={this.handleSubmit}>
                        <div className="form-check">          
                            <label className="form-check-label" >
                                <input className="form-check-input" value="Cliente" name="tipo_usuario" type="radio"  onChange={this.handleInput}/>
                                Cliente
                            </label>
                        </div>

                        <div className="form-check">
                            <label className="form-check-label" >
                                <input className="form-check-input" value="Experto" name="tipo_usuario" type="radio" onChange={this.handleInput}/>
                                Experto
                            </label>
                        </div>
                        <div className="form-check">           
                            <label className="form-check-label" >
                                <input className="form-check-input" value="Inversionista" name="tipo_usuario" type="radio" onChange={this.handleInput}  />
                                Inversionista
                            </label>
                        </div>
                        
                           
                        <input
                            name="first_name"
                            className="input"  
                            type="text" 
                            placeholder="Nombre"
                            onChange={this.handleInput}
                        />
                        
                            
                        <input
                            name="last_name"
                            className="input"  
                            type="text" 
                            placeholder="Apellido"
                            onChange={this.handleInput}
                        /> 
                        
                        
                        <input
                            name="email" 
                            className="input"  
                            type="text" 
                            placeholder="Correo"
                            onChange={this.handleInput}
                        />
                        <input
                            name="password" 
                            className="input"  
                            type="password" 
                            placeholder="Contraseña"
                            onChange={this.handleInput}
                        />

                        <button onClick={()=>{this.handleClick()}} className="button">Registrarme</button>
                        
                    </form>
                    

                    <p className="register__container--sesion">
                        <Link to="/login">
                            Iniciar Sesión
                        </Link>
                    </p>
                    
                </div>

            </section>
        )

    }
};

export default Register;