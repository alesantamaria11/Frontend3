/**
 * Ejemplo de componente de tipo clase que contiene los métodos de
 * ciclo de vida
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

class componentName extends Component {
    constructor(props) {
        super(props)
        console.log('CONSTRUCTOR: Cuando se instancia el componente');
    }

    componentWillMount(){

    }

    componentDidMount(){
    
    }


    componentDidUpdate(){

    }
}