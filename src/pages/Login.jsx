import React, {useState}from 'react';
import '../components/styles/Login.css'
import {Link} from 'react-router-dom';


const Login = (props) => {

    const [form, setValues] = useState({
        email:'',
    })

    const handleInput = event => {
        setValues({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log(form);
        props.history.push('/')

    }

    return (
        <section className="login">
        <div className="login__container">
            
            <h2 className="title">Inicia Sesión</h2>
            
            <form className="login__container--form" onSubmit={handleSubmit}>
                <input 
                    name="email"
                    className="input"  
                    type="text" 
                    placeholder="Correo"
                    onChange={handleInput}
                />

                <input 
                    email="password"
                    className="input"  
                    type="password" 
                    placeholder="Contraseña"
                    onChange={handleInput}
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

export default Login;