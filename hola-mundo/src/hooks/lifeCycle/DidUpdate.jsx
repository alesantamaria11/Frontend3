/**
 * Ejemplo de uso del método componentDidUpdate en componente clase y uso de hook
 * en componente funcional
 */

import React, { Component, useEffect } from 'react'

export class DidUpdate extends Component {

    componentDidUpdate(){
        console.log('Comportamiento cuando el componente recibe nuevos props o cambios en su estado privado');
    }

    render() {
        return (
            <div>
                <h1>DidUpdate</h1>
            </div>
        );
    }
}

export const DidUpdateHook = () => {

    useEffect(() => {
        console.log('Comportamiento antes de que el componente sea añadido al DOM(Se renderice)')
    });
    //Le quitamos el [input] para que no tenga límites y se ejecute cada vez que haya algún cambio
    //en el estado o en los props.
    //Cuando los corchetes se dejan vacíos solo se ejecuta una vez.

    return (
        <div>
            <h1>DidUpdate</h1>
        </div>
    );
}