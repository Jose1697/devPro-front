import React  from 'react';
import Logo from './images/logo-devpro.gif';
import  './styles/Footer.scss'


const Footer = () => {
    return(
        <>
        <section className="footer">
            <div className="container foot">
                <div className="copyright">
                    <p className="m-0">© 2021 DevPro</p>
                </div>
                <div className="frase-footer">
                    <div>
                        <p className="m-0">Footer</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Footer;