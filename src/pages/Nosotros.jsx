import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Logo from '../components/images/logo-devpro.gif';
import '../components/styles/nosotros.css'

class Nosotros extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <br/>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="card mb-3">
                                <div className="row no-gutters">
                                    <div className="col-md-4 logo-img">
                                        <img src={Logo}  className="mt-3 logo-devPro" alt="DevPro" />
                                    </div>

                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">¿Qué es DevPro?</h5>

                                            <p className="card-text">
                                            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaassssssssssssssssssssssssss
                                            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaassssssssssssssssssssssssss
                                            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaassssssssssssssssssssssssss
                                            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaassssssssssssssssssssssssss
                                            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaassssssssssssssssssssssssss
                                            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaassssssssssssssssssssssssss.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                   

                
                    <div className="row">
                        <div className="col-6 mision-vision">
                            <div className="card" style={{width: '18rem'}}>
                                <img src="https://ilp-ala.org/wp-content/uploads/2018/07/iconoMISION-387.png" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Nuestra Misión</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>               
                        </div>
                        <div className="col-6 mision-vision">
                            <div className="card" style={{width: '18rem'}}>
                                <img src="https://ilp-ala.org/wp-content/uploads/2018/07/iconoVISION-387.png" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Nuestra Visión</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>

                <br/>

                <Footer/>
            </div>
        );
    }
}


export default Nosotros;