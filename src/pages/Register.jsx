import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import '../components/styles/Register.css'


const Register = (props) => {

    const [form, setValues] = useState({
        email:'',
        name:'',
        password:'',
    })

    const handleInput= event => {
        setValues({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault()
        console.log(form);
        props.history.push('/')
    }

    return(
        <section className="register">
            <div className="register__container">
                
                <h2>Regístrate</h2>
                
                <form className="register__container--form" onSubmit={handleSubmit}>
                    <input
                        name="name"
                        className="input"  
                        type="text" 
                        placeholder="Nombre"
                        onChange={handleInput}
                    />
                    <input
                        name="email" 
                        className="input"  
                        type="text" 
                        placeholder="Correo"
                        onChange={handleInput}
                    />
                    <input
                        name="password" 
                        className="input"  
                        type="password" 
                        placeholder="Contraseña"
                        onChange={handleInput}
                    />

                    <button className="button">Registrarme</button>
                    
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

export default Register;