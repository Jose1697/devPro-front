import React from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import './styles/suscripcion.css'

class Suscripcion extends React.Component{
    render(){
        return(
            <>
                <Navbar/>
                <div className="suscripcion mt-5 mb-5">
                    <div className="suscripcion-content container">
                        <h1>COMPRA TU PLAN PREMIUM</h1>

                        <div className="card mt-4">
                            <img src="https://image.freepik.com/vector-gratis/icono-vector-plano-servicio-premium_9206-135.jpg" className="card-img-top" alt="..." />

                            <div className="card-body">
                                <h5 className="card-title">Plan Premium</h5>
                                <p className="card-text">
                                    <ul>
                                        <li type="disc">Podras publicar tus proyectos.</li>
                                        <li type="disc">Tendras asesoria de parte de los expertos de DevPro</li>
                                        <li type="disc">Tendras financiamiento de parte de los inversionistas afiliados a DevPro</li>
                                        <li type="disc">Contaras con todo nuestro contenido exclusivo</li>
                                    </ul>
                                </p>
                                <div className="button">
                                    <a href="#" className="btn btn-primary">Comprar</a>
                                </div>
                                
                            </div>
                        </div>



                    </div>
                    
                </div>
                <Footer/>
            </>

        )
    }
}

export default Suscripcion;