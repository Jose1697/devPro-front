import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../components/styles/contacto.css'

class Contacto extends React.Component {
    render() {
        return (
            <>
                <Navbar/>
                <div className="fondo">
                    <br/>
                    <br/>
                    <br/>
                <div className="container contacto">
                    <div className="title">
                        <h3>Centro de Empredimiento e Innovación de DevPro</h3>
                        <h1>EMPRENDE DEV-PRO</h1>
                    </div>

                    <div className="form mt-5" style={{width: '70%'}}>
                        <div className="card-body formulario">
                            <h5 className="card-title mb-5 mt-2 form-title">FORMULARIO DE CONTACTO</h5>
                           
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Nombres y apellidos</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Juan Perez"/>
                            </div>

                    
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="name@example.com"/>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Celular</label>
                                <input type="text" className="form-control" id="exampleFormControlInput3" placeholder="987 654 321"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Mensaje</label>
                                <textarea className="form-control" id="exampleFormControlTextarea4" rows="3"></textarea>
                            </div>

                        
                            <button type="button send" className="btn btn-primary">Enviar</button>
                            
                            

                        </div>

                        
                    </div>

                    
                </div>
                <br/>
                <br/>
                <br/>
                </div>
                
                
                <Footer/>
            </>
        )
    }
}

export default Contacto