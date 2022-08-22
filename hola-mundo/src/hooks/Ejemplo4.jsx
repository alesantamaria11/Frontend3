/**
 * Ejemplo para entender el uso de props.children
 */

import React from 'react';

const Ejemplo4 = (props) => {
    return (
        //Cualquier contenido que este dentro de nuestra etiqueta de apertura y de cierre
        //de nuestro componente será tomado como props.chldren
        <div>
            <h1>***Ejemplo de children props***</h1>
            <h2>
                Nombre: { props.nombre}
            </h2>
            {/* props.children va a renderizar por defecto aquello
            que se encuentre entre las etiquetas de apertura y cierre de este 
            componente desde el componente de orden superior*/}
            {props.children}
        </div>
    );
}

export default Ejemplo4;
