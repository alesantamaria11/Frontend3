/**
 * Ejemplo de uso de:
 * -useState() -->
 * -useRef() --> Referenciar elementos dentro de la vista.
 * -useEffect() --> Controlar cambios en la vista.
 */

import React, {useState, useRef, useEffect} from 'react';

const Ejemplo2 = () => {

    //Vamos a crear 2 contadores distintos, cada uno en un estado diferente.
    const [contador1, setcontador1] = useState(0);
    const [contador2, setcontador2] = useState(0);

    //Vamos a crear una referencia con useRef() para asociar una variable con
    //un elemento del DOM del componente (vista HTML)

    const miRef = useRef();

    function incrementar1(){
        setcontador1(contador1 + 1);
    }

    function incrementar2(){
        setcontador2(contador2 + 1);
    }

    /**
     * Trabajar con useEffect
     */

    /**
     * ? Caso 1: Ejecutar siempre un snippet de código
     * Cada vez que haya un cambio en el estado del componente, se ejecuta aquello
     * que esté dentro el useEffect
     */

    // useEffect(() => {
    //     console.log('CAMBIO EN EL ESTATO DEL COMPONENTE');
    //     console.log('Mostrando referencia a elemento del DOM');
    //     console.log(miRef);
    // })

     /**
     * ? Caso 2: Ejecutar solo cuando cambie el contador1
     * Cada vez que haya un cambio en el contador1, se ejecuta lo que
     * diga el useEffect. En caso de que cambie el contador2 no habrá ejecución
     */

    // useEffect(() => {
    //     console.log('CAMBIO EN EL ESTATO DEL CONTADO 1');
    //     console.log('Mostrando referencia a elemento del DOM');
    //     console.log(miRef);
    // }, [contador1]);

      /**
     * ? Caso 2: Ejecutar solo cuando cambie el contador1 o contador2
     * Cada vez que haya un cambio en el contador1, se ejecuta lo que
     * diga el useEffect.
     * Cada vez que haya un cambio en el contador2, se ejecuta lo que
     * diga el useEffect.
     */

       useEffect(() => {
        console.log('CAMBIO EN EL ESTATO DEL CONTADO 1 / CONTADOR 2');
        console.log('Mostrando referencia a elemento del DOM');
        console.log(miRef);
    }, [contador1, contador2]);

    return (
        <div>
            <h1>***Ejemplo de useState(), useRef() y useEffect()***</h1>
            <h2>CONTADOR 1: {contador1}</h2>
            <h2>CONTADOR 2: {contador2}</h2>
            {/* Elemento referenciado */}
            <h4 ref={miRef}>
                Ejemplo de elemento referenciado
            </h4>
            {/* Botones para cambiar losd contadores */}
            <div>
            <button onClick={incrementar1}>Incrementar contador 1</button>
            <button onClick={incrementar2}>Incrementar contador 2</button>
            </div>

            
        </div>
    );
}

export default Ejemplo2;
