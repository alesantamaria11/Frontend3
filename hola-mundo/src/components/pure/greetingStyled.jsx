import React, { useState } from 'react';

//Definiendo estilos en constantes

// ? Estilo para usuario logueado
const loggedStyle = {
    color:'azure'
};

// ? Estilo para usuario no logueado
const unLoggedStyle = {
    color: 'tomato',
    fontWeight: 'bold'
}


const GreetingStyled = (props) => {
    //Generamos un estado para el componente
    //y así controlar si el estdo está o no loogueado
    const [logged, setLogged] = useState(false);

    
    return (
        <div style={ logged ? loggedStyle : unLoggedStyle }>
            <p>Hola, {props.name}</p>
            <button onClick={() =>{
                console.log('Botón pulsado');
                setLogged(!logged);
            }}>
                { logged ? 'Logout' : 'Login' }
            </button>

        </div>
    );
}

export default GreetingStyled;
