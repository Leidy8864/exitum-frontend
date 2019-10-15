
import React, { Fragment } from 'react';
import './style.css';
import { Link } from 'react-router-dom'

function View(props) {

    const { chikoinfo, cherry, showCherry } = props

    return (
        <Fragment>
            <div className="Cherry">
                <a href="#id01">{showCherry ? chikoinfo : cherry}</a>
            </div>
            <div id="id01" class="modal">
            <div class="modal-dialog">
                <div class="modal-content">
                <header class="container">
                    <img src={require('../../public/images/svg/Fresita.svg')} alt="Informacion" />
                </header>
                <div class="container">
                    <p>Hola soy tu asistente personal, Listo para ayudarte en todo lo que necesites, recuerda postular a varios anuncios
                        para tener mas oportunidades de cojer un proyecto
                    </p>
                </div>
                <div className="closecherry">
                        <a href="#" class="closebtn">Entendido</a>
                    </div>
                </div>
            </div>
            </div>
        </Fragment>
    );
}
export default View;
