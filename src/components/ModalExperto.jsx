import React from 'react'
import ReactDOM from 'react-dom'
import './styles/Modal.css'

function ModalExperto(props){
    async function mentorizar(){
        

        props.onClose()
        

        window.location.reload();


    }
    
    if(!props.isOpen){
        return null
    }
    return ReactDOM.createPortal(
        <div className="Modal">
            <div className="Modal__container">
                <button onClick={props.onClose} className="Modal__close-button">X</button>
                {props.children}
                
                    
                <div className="button">
                    <button onClick={mentorizar} type="button" href="/Proyectos" className="btn btn-primary">Confirmar</button>  
                </div>

            </div>
        </div>,
        document.getElementById('modal')

    );

}

export default ModalExperto;