import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'
import Logo from '../components/images/logo-devpro.gif'
import '../components/styles/home.css'
import {Link} from 'react-router-dom'



const Home = () => {
    return(
        <>
        <Navbar />
        <main id="main">
            <div id="carousel" class="carousel slide carousel-fade" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://ticec.cedia.org.ec/images/noticias/2020/Incubadora%20de%20proyectos.jpg" class="d-block w-100" alt="Hawaii"/>
                    </div>
                    <div class="carousel-item">
                        <img src="https://www.sistemaimpulsa.com/blog/wp-content/uploads/2019/09/2-50-696x439.jpg" class="d-block w-100" alt="Hawaii 2"/>
                    </div>
                    <div class="carousel-item">
                        <img src="http://www.masisalab.com/wp-content/uploads/2019/04/2.jpeg" class="d-block w-100" alt="Hawaii 3"/>
                    </div>

                    <div class="overlay">
                        <div class="container">
                            <div class="row align-items-center">
                                <div class="col-md-6 offset-md-6 text-center text-md-right">
                                    <h1>DevPro</h1>
                                    <p class="d-none d-md-block">
                                    Insertar un spitch Insertar un spitch Insertar un spitch
                                    Insertar un spitch Insertar un spitch Insertar un spitch
                                    Insertar un spitch Insertar un spitch Insertar un spitch
                                    Insertar un spitch Insertar un spitch Insertar un spitch
                                    Insertar un spitch Insertar un spitch Insertar un spitch
                                    </p>
                                    <Link class="btn btn-primary mr-3">Ver Servicios</Link>
                                    <Link class="btn btn-success">Tengo un Proyecto</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <section id="speakers" className="mt-4">
            <div className="container">
                <div className="row">
                    <div className="col text-center text-uppercase">
                        <small>Conoce a los integrantes del</small>
                        <h2>Equipo</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4  mb-4">
                        <div className="card">
                        <img src="" className="card-img-top" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">Juan Bernilla</h5>
                            <p className="card-text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                            a type specimen book.
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4  mb-4">
                        <div className="card">
                        <img src="" className="card-img-top" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">Angel Cayatopa</h5>
                            <p className="card-text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                            a type specimen book.
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4  mb-4">
                        <div className="card">
                        <img src="" className="card-img-top" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">Valentin Antunez</h5>
                            <p className="card-text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                            a type specimen book.
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4  mb-4">
                        <div className="card">
                        <img src="" className="card-img-top" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">Jose Luis Artica</h5>
                            <p className="card-text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                            a type specimen book.
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4  mb-4">
                        <div className="card">
                        <img src="" className="card-img-top" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">Miguel Alderete</h5>
                            <p className="card-text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                            a type specimen book.
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>



        <Footer/>
        </>
    )
}

export default Home;