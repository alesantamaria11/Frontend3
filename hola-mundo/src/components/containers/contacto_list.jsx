import React from 'react';
// import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';
import ContactoComponent from '../pure/contacto';



const ContactoListComponent = () => {

    const ejemploDeContacto = new Contacto('Ale', 'Santamaria', 'ale@gmail.com', true);


    return (
        <div>
            <div>
                <h2>
                Contactos:
                </h2>
            </div>
            {/*ToDo: Aplicar un For/Map para renderizar una lista*/}
            <ContactoComponent contacto={ ejemploDeContacto }></ContactoComponent>
        </div>
    );
};


ContactoListComponent.propTypes = {

};


export default ContactoListComponent;