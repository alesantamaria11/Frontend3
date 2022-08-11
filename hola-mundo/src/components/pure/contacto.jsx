import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';

const ContactoComponent = ({ contacto }) => {
    return (
        <div>
            <h3>
                Nombre: { contacto.nombre }
            </h3>
            <h3>
                Apellido: { contacto.apellido }
            </h3>
            <h3>
                Email: { contacto.email }
            </h3>
            <h3>
                Conectado: { contacto.conectado ? 'Contacto en línea':'Contacto no disponible' }
            </h3>
        </div>
    );
};

ContactoComponent.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
};

export default ContactoComponent;