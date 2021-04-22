import React from 'react';
import '../components/styles/Login.css'
import {Link} from 'react-router-dom';
import swal from 'sweetalert';


class Login extends React.Component{

    state = {
        form:{email:'', password:''}
    }

    handleInput = event => {
        const formulario = this.state.form;
        formulario[event.target.name] = event.target.value;
        this.setState({form: formulario});
    }

    handleSubmit = event => {
        event.preventDefault()
        fetch('https://devpro-back.herokuapp.com/usuario/usuario/login/', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(this.state.form)
        })
        .then( data => data.json())
        .then( data => {
            if(data.Usuario){
                // swal(`${data.Usuario.first_name} se ha logueado correctamente`, "You clicked the button!", "success");
                // alert(`${data.Usuario.first_name} se ha logueado correctamente`)
                localStorage.setItem('usuario', JSON.stringify(data.Usuario))
                this.props.history.push('/')
            }else{
                swal('El email o contraseña son incorrectos', "You clicked the button!", "error");
                // alert('El email o contraseña son incorrectos')
            }
        })
        //console.log(this.state.form);
        // this.props.history.push('/')

    }

    render() {

        return (
            <section className="login">
            <div className="login__container">
                
                <h2 className="title">Inicia Sesión</h2>
                
                <form className="login__container--form" onSubmit={this.handleSubmit}>
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
                    <button className="button">Iniciar sesión</button>
                    <div className="login__container--remember">
                        <label>
                            <input type="checkbox" name="" id="cbox1" value="checkbox"/>Recuérdame
                        </label>
                        <Link to="">Olvidé mi contraseña</Link>
                    </div>
                </form>
                
                <p className="login__container--register">No tienes ninguna cuenta 
                    <Link to="/register">
                        Registrate
                    </Link>
                    
                </p>
            </div>

        </section>
        );
    }
};

export default Login;