import React from 'react'
import ReactDOM from 'react-dom'
import './styles/Modal.css'

function Modal(props){
    if(!props.isOpen){
        return null
    }
    return ReactDOM.createPortal(
        <div className="Modal">
            <div className="Modal__container">
                <button onClick={props.onClose} className="Modal__close-button">X</button>
                {props.children}
                
                <div className="input mt-3">
                    <input type="number"/>
                </div>   
                    
                <div className="button">
                    <button type="button" className="btn btn-primary">Aceptar</button>  
                </div>

            </div>
        </div>,
        document.getElementById('modal')

    );

}

export default Modal;