/* eslint-disable no-lone-blocks */
import React, { Component } from 'react';
import PropTypes from 'prop-types';


{/* Las props son información que le vamos a pasar por atributos */}
{/* State es una información privada del componente que sirve para gestionarse, mostrar contenido, hacer una lógica, etc. Algo así como propiedades de la clase. */}

class Greeting extends Component {
    constructor(props){
        super(props);
        this.state = {
            age : 27
        }
    }


    render() {
        return (
            <div>
                <h1>
                ¡Hola { this.props.name}!
                </h1>
                <h2>
                    Tu edad es de { this.state.age } años
                </h2>
            </div>
        );
    }


    birthday = () => {
        this.setState((prevState) => (
            {
                age: prevState.age + 1
            } 
        ))
}


Greeting.propTypes = {
    name: PropTypes.string, 
};


export default Greeting;