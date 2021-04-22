/* eslint-disable no-unused-vars */


export const actualizarLocalStorage = () => {
    let newUser;
    obtenerUsuario().then((us) => { newUser=us} )
    console.log(newUser);
    localStorage.setItem('usuario', JSON.stringify(newUser))
};



export const obtenerUsuario = async () => {
    const usuario = JSON.parse(localStorage.getItem('usuario'))
    
    const response = await fetch(`https://devpro-back.herokuapp.com/usuario/usuario/${usuario.id}/`)
    const data = await response.json()     
    
    return data 
    
};
