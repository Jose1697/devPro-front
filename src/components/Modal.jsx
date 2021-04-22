import React from 'react'
import ReactDOM from 'react-dom'
import './styles/Modal.css'

function Modal(props){

    const [ donacion, setDonacion] = React.useState(0)
    

    function handleInput (event) {
        setDonacion(event.target.value);
    }
    
    async function actualizarAcumulado(){
        const nuevoValor ={
            acumulado: parseInt(donacion) + parseInt(props.project.acumulado)
        } 

        await fetch(`https://devpro-back.herokuapp.com/core/proyecto/${props.project.id}/`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(nuevoValor)
        })

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
                
                <div className="input mt-3">
                    <input className="form-check-input" name="donacion" type="number"  onChange={handleInput}/>
                </div>   
                    
                <div className="button">
                    <button onClick={actualizarAcumulado} type="button" href="/Proyectos" className="btn btn-primary">Aceptar</button>  
                </div>

            </div>
        </div>,
        document.getElementById('modal')

    );

}

export default Modal;