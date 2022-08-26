import React, { useState } from 'react';
import '../../styles/clock.scss';

const Clock = () => {

    // Fecha inicial
    const fechaInicial = {
        fecha: new Date(),
        edad: 0,
        nombre: 'Martín',
        apellidos: 'San José'
    }

    const [fecha, setFecha] = useState(fechaInicial);

    function actualizarFecha(){
        setFecha(
            {
                fecha: new Date(),
                edad: +1,
                nombre: 'Alejandra',
                apellidos: 'Santamaría Peña'
            }
        )
    }

    // componentDidMount() {
    //     const timerID = setInterval [(timerID.tick(), 1000)]
    // }
    
    // componentWillUnmount() {
    //     const interval = clearInterval (timerID);
    // }

    return (
        <div>
            <h2>
            Hora Actual: {fecha.fecha}
            </h2>
            <h3>Nombre: {fecha.nombre} {fecha.apellidos}</h3>
            <h1>Edad: {fecha.edad}</h1>
            <button onClick={actualizarFecha}>Actualizar fecha</button>
        </div>
    );
}

export default Clock;