import React from 'react';
import {Link} from 'react-router-dom';
import '../components/styles/Register.css';


class Register extends React.Component{

    state = {
        form:{first_name:'', last_name:'cliente' ,email:'',password:'', tipo:''}
    }

    

    handleInput = event => {
        const formulario = this.state.form;
        formulario[event.target.name] = event.target.value;
        this.setState({form: formulario});
    }


    handleSubmit = event => {
        event.preventDefault()
        fetch('https://devpro-2021.herokuapp.com/usuario/usuario/register/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.state.form)
        })
        console.log(this.state.form);
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
                                <input className="form-check-input" value="Cliente" name="tipo" type="radio"  onChange={this.handleInput}/>
                                Cliente
                            </label>
                        </div>

                        <div className="form-check">
                            <label className="form-check-label" >
                                <input className="form-check-input" value="Experto" name="tipo" type="radio" onChange={this.handleInput}/>
                                Experto
                            </label>
                        </div>
                        <div className="form-check">           
                            <label className="form-check-label" >
                                <input className="form-check-input" value="Empresa" name="tipo" type="radio" onChange={this.handleInput}  />
                                Empresa
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

                        <button onClick={this.handleClick} className="button">Registrarme</button>
                        
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