/**
 * Ejemplo de uso del hook useState
 * 
 * Crear un componente de tipo función y acceder a su estado privado a trvés de un hook
 * y adermás poder modificarlo.
 */

import React, { useState } from 'react';

const Ejemplo1 = () => {

    // Valor inicial para un contador
    const valorInicial = 0;

    // Valor inicial para una persona
    const personaInicial = {
        nombre: 'Juan',
        email: 'juan@gmail.com'
    }

    /**
     * Queremos que el valor inicial y persona inicial sean parte del estado del
     * componente para asi poder gestionar su cambio y que este se vea refglejado 
     * en la vista del componente. Es decir, que si se canbia se refleje automática-
     * mente en el htmnl.
     * 
     * const [nombreVariable, funcionParaCambiar] = useState(valorInicial)
     */

    const [contador, setcontador] = useState(valorInicial);
    const [persona, setpersona] = useState(personaInicial);

    /**
     * Funcion para actualizar el estado privado que contiene el contador
     */

    function incrementarContador() {
        // ? funcionParaCambiar(nuevoValor)
        setcontador(contador + 1);
    }

    function actualizarPersona(){
        setpersona(
            {
                nombre: 'Alejandra',
                email: 'ale@gmail.com'
                
            }
        )
    }

    return (
        <div>
            <h1>***Ejemplo de useState()***</h1>
            <h2>CONTADOR: {contador}</h2>
            <h2>DATOS DE LA PERSONA:</h2>
            <h3>NOMBRE: {persona.nombre}</h3>
            <h3>EMAIL: {persona.email}</h3>
            {/* Bloque de botones para actualizar el estado */}
            <button onClick={incrementarContador}>Incrementar contador</button>
            <button onClick={actualizarPersona}>Actualizar persona</button>
        </div>
    );
}

export default Ejemplo1;
