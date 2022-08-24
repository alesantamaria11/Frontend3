import React, { useEffect } from 'react';

const AllCycles = () => {

    useEffect(() => {
        console.log('Componente creado');

        const intervalID = setInterval(() =>{
            console.log('Actualización del componente');
        }, 1000);
        
        return () => {
            console.log('Componente va a desaparecer');
        };
    }, [input]);

    return (
        <div>
            
        </div>
    );
}

export default AllCycles;
