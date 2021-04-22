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

    handleSubmit = async(event) => {
        event.preventDefault()
        const data = await fetch('https://devpro-back.herokuapp.com/usuario/usuario/login/', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(this.state.form)
        })
        const user = await data.json()
        console.log(user);
        if(user.Usuario){
            localStorage.setItem('usuario', JSON.stringify(user.Usuario))
            
            if(user.Usuario.tipo_usuario === "Cliente"){
                const data1 = await fetch(`https://devpro-back.herokuapp.com/core/cliente/${user.Usuario.id}`)
                const cliente = await data1.json()
                console.log(cliente);
                localStorage.setItem('cliente', JSON.stringify(cliente))
                
            }
            this.props.history.push('/')
        }else{
            swal('El email o contraseña son incorrectos', "You clicked the button!", "error");
        }

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