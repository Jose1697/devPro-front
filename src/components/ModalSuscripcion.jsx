import React from 'react'
import ReactDOM from 'react-dom'
import './styles/Modal.css'
import swal from 'sweetalert';

function ModalSuscripcion(props){

    async function actualizarUsuario(){
        const nuevoValor ={
            suscripcion: "activo"
        } 

        await fetch(`https://devpro-back.herokuapp.com/core/cliente/${props.usuario.id}/`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(nuevoValor)
        })
        
        const response = await fetch(`https://devpro-back.herokuapp.com/core/cliente/${props.usuario.id}/`)
        const data = await  response.json() 
        await localStorage.setItem('cliente', JSON.stringify(data))

        props.onClose()
        await swal("Felicitaciones eres Premium!", "You clicked the button!", "success");

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
                    <button onClick={actualizarUsuario} type="button" href="/Home" className="btn btn-primary">Confirmar</button>  
                </div>

            </div>
        </div>,
        document.getElementById('modal')

    );

}

export default ModalSuscripcion;