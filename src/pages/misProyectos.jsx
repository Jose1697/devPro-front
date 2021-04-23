import React from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import './styles/misProyectos.css'

class misProyectos extends React.Component{
    state = {
        usuario: JSON.parse(localStorage.getItem('usuario'))
    }

    render(){
        return(
            <>
                <Navbar/>

                <div className="myproject pt-5 pb-5">
                    <div className="container">
                        <div className="card">
                            <div className="card-header">
                                Nota del instructor
                            </div>
                            <div className="card-body">
                                <blockquote className="blockquote mb-0">
                                <p>Bienvenido al desrrollo de su proyecto donde guiaremos en base a multiples sesiones para hacer realidad dicho proyecto!!</p>

                                </blockquote>
                            </div>
                        </div>

                        <div className="card mt-4">
                            <div className="card-header">
                                Semana 1
                            </div>
                            <div className="card-body">
                                <blockquote className="blockquote mb-0">
                                    <img className="img"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Light_green_check.svg/600px-Light_green_check.svg.png" alt=".."/>
                                </blockquote>
                                {this.state.usuario.tipo_usuario === "Experto" ?
                                <button type="button" className="btn btn-success">Subir Archivos</button> : []
                                }
                            </div>
                        </div>

                        <div className="card mt-4">
                            <div className="card-header">
                                Semana 2
                            </div>
                            <div className="card-body">
                                <blockquote className="blockquote mb-0">
                                <img className="img"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Light_green_check.svg/600px-Light_green_check.svg.png" alt=".."/>
                                </blockquote>
                                {this.state.usuario.tipo_usuario === "Experto" ?
                                <button type="button" className="btn btn-success">Subir Archivos</button> : []
                                }
                            </div>
                        </div>

                        <div className="card mt-4">
                            <div className="card-header">
                                Semana 3
                            </div>
                            <div className="card-body">
                                <blockquote className="blockquote mb-0">
                                <img className="img"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Light_green_check.svg/600px-Light_green_check.svg.png" alt=".."/>
                                </blockquote>
                                {this.state.usuario.tipo_usuario === "Experto" ?
                                <button type="button" className="btn btn-success">Subir Archivos</button> : []
                                }
                            </div>
                        </div>

                        <div className="card mt-4">
                            <div className="card-header">
                                Semana 4
                            </div>
                            <div className="card-body">
                                <blockquote className="blockquote mb-0">
                                <img className="img"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Light_green_check.svg/600px-Light_green_check.svg.png" alt=".."/>
                                </blockquote>
                                {this.state.usuario.tipo_usuario === "Experto" ?
                                <button type="button" className="btn btn-success">Subir Archivos</button> : []
                                }
                            </div>
                        </div>

                        <div className="card mt-4">
                            <div className="card-header">
                                Semana 5
                            </div>
                            <div className="card-body">
                                <blockquote className="blockquote mb-0">
                                <img className="img"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Light_green_check.svg/600px-Light_green_check.svg.png" alt=".."/>
                                </blockquote>
                                {this.state.usuario.tipo_usuario === "Experto" ?
                                <button type="button" className="btn btn-success">Subir Archivos</button> : []
                                }
                            </div>
                        </div>

                        <div className="card mt-4">
                            <div className="card-header">
                                Semana 6
                            </div>
                            <div className="card-body">
                                <blockquote className="blockquote mb-0">
                                <img className="img"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Light_green_check.svg/600px-Light_green_check.svg.png" alt=".."/>
                                </blockquote>
                                {this.state.usuario.tipo_usuario === "Experto" ?
                                <button type="button" className="btn btn-success">Subir Archivos</button> : []
                                }
                            </div>
                        </div>

                        <div className="card mt-4">
                            <div className="card-header">
                                Semana 7
                            </div>
                            <div className="card-body">
                                <blockquote className="blockquote mb-0">
                                <img className="img"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Light_green_check.svg/600px-Light_green_check.svg.png" alt=".."/>
                                </blockquote>
                                {this.state.usuario.tipo_usuario === "Experto" ?
                                <button type="button" className="btn btn-success">Subir Archivos</button> : []
                                }
                            </div>
                        </div>

                        <div className="card mt-4">
                            <div className="card-header">
                                Semana 8
                            </div>
                            <div className="card-body">
                                <blockquote className="blockquote mb-0">
                                <img className="img"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Red_check.svg/1200px-Red_check.svg.png" alt=".."/>
                                </blockquote>
                                {this.state.usuario.tipo_usuario === "Experto" ?
                                <button type="button" className="btn btn-success">Subir Archivos</button> : []
                                }
                            </div>
                        </div>

                        <div className="card mt-4">
                            <div className="card-header">
                                Semana 9
                            </div>
                            <div className="card-body">
                                <blockquote className="blockquote mb-0">
                                <img className="img"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Red_check.svg/1200px-Red_check.svg.png" alt=".."/>
                                </blockquote>
                                {this.state.usuario.tipo_usuario === "Experto" ?
                                <button type="button" className="btn btn-success">Subir Archivos</button> : []
                                }
                            </div>
                        </div>

                        <div className="card mt-4">
                            <div className="card-header">
                                Semana 10
                            </div>
                            <div className="card-body">
                                <blockquote className="blockquote mb-0">
                                <img className="img"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Red_check.svg/1200px-Red_check.svg.png" alt=".."/>
                                </blockquote>
                                {this.state.usuario.tipo_usuario === "Experto" ?
                                <button type="button" className="btn btn-success">Subir Archivos</button> : []
                                }
                            </div>
                        </div>

                        <div className="card mt-4">
                            <div className="card-header">
                                Semana 11
                            </div>
                            <div className="card-body">
                                <blockquote className="blockquote mb-0">
                                <img className="img"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Red_check.svg/1200px-Red_check.svg.png" alt=".."/>
                                </blockquote>
                                {this.state.usuario.tipo_usuario === "Experto" ?
                                <button type="button" className="btn btn-success">Subir Archivos</button> : []
                                }
                            </div>
                        </div>

                    </div>

                    

                </div>

                <Footer/>



            </>
        )
    }



};

export default misProyectos;

