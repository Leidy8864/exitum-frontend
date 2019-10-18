
import React, { Fragment } from 'react';
import './style.css';
import { Link } from 'react-router-dom'

function View(props) {

    const { role,chikoinfo, cherry } = props
    return (
        <Fragment>
            <div className="Cherry">
                <a href="#id01">{ role === 'entrepreneur' ? chikoinfo : null }</a>
                <a href="#id02">{ role === 'employee' ? cherry : null }</a>
            </div>
            <div id="id01" className="message">
            <div className="modal-message">
                <div className="message-content">
                <header className="container-message">
                    <img src={require('../../public/images/svg/Fresita.svg')} alt="Informacion" />
                </header>
                <div className="container-message">
                    <p>Hola soy tu asistente personal, Listo para ayudarte en todo lo que necesites, recuerda postular a varios anuncios
                        para tener mas oportunidades de cojer un proyecto
                    </p>
                </div>
                <div className="closecherry">
                        <a href="#" className="closebtn">Entendido</a>
                    </div>
                </div>
            </div>
            </div>
        </Fragment>
    );
}
export default View;
