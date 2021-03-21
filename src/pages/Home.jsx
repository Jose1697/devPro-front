import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'
import Logo from '../components/images/logo-devpro.gif'
import '../components/styles/home.css'

const Home = () => {
    return(
        <>
        <Navbar />
        <div className="home">
            
            
            <div>
                <img src={Logo} alt=""/>
            </div>
            <div>
                <img src={Logo} alt=""/>
            </div>
            <div>
                <img src={Logo} alt=""/>
            </div>
            <div>
                <img src={Logo} alt=""/>
            </div>
            
            
        </div>
        </>
    )
}

export default Home;