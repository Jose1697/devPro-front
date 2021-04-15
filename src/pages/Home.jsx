import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'
import '../components/styles/home.css'
import {Link} from 'react-router-dom'



const Home = () => {
    return(
        <>
        <Navbar />
        <main id="main">
            <div id="carousel" className="carousel slide carousel-fade" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://ticec.cedia.org.ec/images/noticias/2020/Incubadora%20de%20proyectos.jpg" className="d-block w-100" alt="Hawaii"/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.sistemaimpulsa.com/blog/wp-content/uploads/2019/09/2-50-696x439.jpg" className="d-block w-100" alt="Hawaii 2"/>
                    </div>
                    <div className="carousel-item">
                        <img src="http://www.masisalab.com/wp-content/uploads/2019/04/2.jpeg" className="d-block w-100" alt="Hawaii 3"/>
                    </div>

                    <div className="overlay">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-6 offset-md-6 text-center text-md-right">
                                    <h1>DevPro</h1>
                                    <p className="d-none d-md-block">
                                    Somos una incubadora multisectorial 
                                    (emprendimientos digitales y tradicionales) 
                                    que busca que los emprendimientos sean innovadores, 
                                    dinámicos, escalables y socialmente responsables.
                                    </p>
                                    <Link className="btn btn-primary mr-3" to="">Ver Servicios</Link>
                                    <Link className="btn btn-success" to="/NewProyecto">Tengo un Proyecto</Link>
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
                        <img src="https://scontent.flim11-1.fna.fbcdn.net/v/t1.0-9/21270834_1137143106385559_5166847930771614384_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeG0Sf40fKMRLGVdp4kBqI9f21FKy3VI4_jbUUrLdUjj-C_iQ_fBPifOovJhDuxhfg5hO7uCLJUD-LYU6n_nqiL4&_nc_ohc=HqnT-XhbLqQAX-3jg8M&_nc_ht=scontent.flim11-1.fna&oh=1fc75af9a73d6974fa6796b9d9f79748&oe=607AE52F" className="card-img-top" alt="" />
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
                        <img src="https://scontent.flim11-1.fna.fbcdn.net/v/t1.0-9/10460703_917079641647355_6011686282165985158_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=174925&_nc_eui2=AeFvlRP39-_G242GgI_SRW6TiQw19-rYSEOJDDX36thIQweZbC_5G3xkYl3Vim0q4XCKkV1x39H5vDB6H_D6R_GL&_nc_ohc=rX5Zg9B16AgAX9fw-GZ&_nc_ht=scontent.flim11-1.fna&oh=c071b60bcd80986e53c1cfe32c4f33d4&oe=607A83FE" className="card-img-top" alt="" />
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
                        <img src="https://scontent.flim11-1.fna.fbcdn.net/v/t1.0-9/14469563_552907304894576_5290807454945662181_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeEJPL4RN2LsoM0KfS8ypxYuZtgPVvVu8ZBm2A9W9W7xkObnqam2oMV0J7PFhuWdDLx_M-hP0_eiDBcXjS0J5rfQ&_nc_ohc=xqn-be3rVbMAX99G5wx&_nc_ht=scontent.flim11-1.fna&oh=c9e4136de3943660789c1402c2fead0b&oe=607BB2B9" className="card-img-top" alt="" />
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
                        <img src="https://scontent.flim11-1.fna.fbcdn.net/v/t1.0-9/11329890_797641853666788_8350622817790537109_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeFWxIushsYZ7jhU2U6OYqhy8pHjakG6vvzykeNqQbq-_FA7MH0TAAwa2nNL9SWRwV9blG_Sf_3Dnppm0OWJbKgl&_nc_ohc=sfyE7Z51kLQAX9lVR4F&_nc_ht=scontent.flim11-1.fna&oh=79c514dbf593db7f816341245c2e491e&oe=607D95B1" className="card-img-top" alt="" />
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
                        <img src="https://scontent.flim11-1.fna.fbcdn.net/v/t1.0-9/12509261_928531563900806_7896935801315192693_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeFiDbv30zCwMjgrwSO5A_GLNN_lQo9hqBc03-VCj2GoF_0DN3Y8VKHk4I9tsSUID6TrqIu427_MPYcNelsAPIgc&_nc_ohc=1g9DEamsdzgAX_mc1er&_nc_ht=scontent.flim11-1.fna&oh=75dce9d7682727856db458a7fa3a08e3&oe=607AAD1B" className="card-img-top" alt="" />
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