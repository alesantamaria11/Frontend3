/**
 * Ejemplo de componente de tipo clase que contiene los métodos de
 * ciclo de vida
 */

import React, { Component } from 'react'
// import PropTypes from 'prop-types'

class LifeCycleExample extends Component {
    constructor(props) {
        super(props)
        console.log('CONSTRUCTOR: Cuando se instancia el componente');
    }

    componentWillMount(){
        console.log('WILLMOUNT: Antes del montaje del componente');
    }

    componentDidMount(){
        console.log('DIDMOUNT: Justo al acabar el monbtaje del componente, antes de renderizarlo');
    }

    componentWillReceiveProps(nextProps){
        console.log('WILLRECEIVEPROPS: Si va a recibir nuevas props');
    }

    shouldComponentUpdate(nextProps, nextState){
        /**
         * Comprobar si el componente o no debe actualizarse
         */
        //Return true o false
    }

    componentWillUpdate(nextProps, nextState){
        console.log('WILLUPDATE: Justo antes de actualizarse');
    }

    componentDidUpdate(prevProps, prevStates){
        console.log('DIDUPDATE: Justo después de actualizarse');
    }

    componentWillUnmount(){
        console.log('WILLUNMOUNT: Justo antes de desaparecer');
    }

    render(){
        return(
            <div>

            </div>
        )
    }
}

LifeCycleExample.propTypes = {

}