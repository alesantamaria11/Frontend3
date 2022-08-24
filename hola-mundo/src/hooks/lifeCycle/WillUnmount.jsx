/**
 * Ejemplo de uso del método componentWillUnmount en componente clase y uso de hook
 * en componente funcional
 * 
 * Cuando el componente va a desaparecer
 */

import React, { Component, useEffect } from 'react'

export class WillUnmount extends Component {

    componentWillUnmount(){
        console.log('Comportamiento antes de que el componente desaparezca');
    }

    render() {
        return (
            <div>
                <h1>WillUnmount</h1>
            </div>
        );
    }
}

export const WillUnmountHook = () => {

    useEffect(() => {
        //Acá no se pone nada
        return () => {
            console.log('Comportamiento antes de que el componente desaparezca');
        };
    }, []);
    //Le quitamos el [input] para que no tenga límites y se ejecute cada vez que haya algún cambio
    //en el estado o en los props.
    //Cuando los corchetes se dejan vacíos solo se ejecuta una vez.

    return (
        <div>
            <h1>WillUnmountHook</h1>
        </div>
    );
}