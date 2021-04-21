import React from 'react'
import './styles/services.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

class Services extends React.Component{
    render(){
        return(
            <>
                <Navbar/>
                <div className="services pt-5">
                    
                    <div className="container">
                        <div className="row">
                            <div className="col etapa">                             
                                <img src="https://emprendeup.pe/wp-content/uploads/2018/04/icon-1.png" alt=".."/>
                                <h1>PRE INCUBACION</h1>
                                <p>¿Tienes una idea de negocio?  <br/>  
                                    Postula a nuestro programa para recibir 
                                    capacitación, asesoría y mentoría con expertos 
                                    para que puedas validarla y llevarla al mercado.
                                </p>
                            </div>
                            <div className="col etapa">  
                                <img src="https://emprendeup.pe/wp-content/uploads/2018/04/icon-2.png" alt=".."/>
                                <h1>INCUBACION</h1>
                                <p>¿Tienes un producto mínimo viable o ya estás dando tus primeros pasos al mercado?  <br/>
                                    Accede a los mejores mentores con experiencia 
                                    en emprendimiento y tu industria, una amplia 
                                    red de contactos, asesorías personalizados 
                                    espacios de coworking y mucho más.
                                </p>
                            </div>
                            <div className="col etapa">
                                <img src="https://emprendeup.pe/wp-content/uploads/2018/04/icon-3.png" alt=".."/>
                                <h1>ACELERADORA</h1>
                                <p>Ofrecemos el servicio de asesoramiento 
                                    y acompañamiento para emprendimientos que 
                                    ya estén operando y busquen crecer ya sea en 
                                    su mercado actual o abrir nuevos.
                                </p>
                            </div>
                        </div>
                    </div>
                    

                </div>
                <Footer/>
                
            </>
        )
    }
};

export default Services;