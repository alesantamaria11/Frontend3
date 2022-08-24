/**
 * Ejemplo hooks:
 * -useState()
 * -useContext() --> Para trabajar con datos
 */

import React, {useState, useContext} from 'react';

/**
 * 
 * @returns Componente 1
 * Dispone de un contexto que va a tener un valor que recibe desde el padre
 */

//Inicializamos un estado vacío que va a rellenarse con los datos del
    //contexto del padre
    const miContexto = React.createContext(null)

const Componente1 = () => {

    const state = useContext(miContexto);

    return (
        <div>
            <h1>
                El token es: {state.token}
            </h1>
            {/* Pintamos el componente 2 */}
            <Componente2></Componente2>
        </div>
    );
}

const Componente2 = () => {

    const state = useContext(miContexto);
    return (
        <div>
            <h2>
                La sesión es: {state.sesion}
            </h2>
        </div>
    );
}

export default function MiComponenteConContexto() {

    const estadoInicial = {
        token: '12345',
        sesion: 1
    }

    //Creamos el estado de este componente
    const [sessionData, setsessionData] = useState(estadoInicial);

    function actualizarSesion(){
        setsessionData(
            {
                token: 'JWTDL1458',
                sesion: sessionData.sesion +1
            }
        );
    }

    return (
        <miContexto.Provider value={sessionData}>
            {/* Todo lo que está aqwuí adentro uede leer los datas de sessionData,
            Además, si se actualiza, los componentes aquí, también lo actualizan */}
            <h1>***Ejemplo de useState() y useContext()</h1>
            <Componente1></Componente1>
            <button onClick={actualizarSesion}>Actualizar Sesión</button>
        </miContexto.Provider>
    )
}