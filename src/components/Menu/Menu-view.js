
import React from 'react';
import './style.css';

function View(props){
    const {
        obtenerIdseleccionado,
        classInicio,
        classEmpleo,
    } = props;

    return(
        <div className="Menu"> 
            <div className={classInicio} id="inicio_element" onClick ={obtenerIdseleccionado}>
                <span id="inicio"><img  src={require("../../public/images/svg/proyecto.svg")} alt="svg"/></span>
                <span id="inicio_"><img  src={require("../../public/images/svg/proyecto_.svg")} alt="svg"/></span>
                Inicio
            </div>
            <div className={classEmpleo} id="empleo_element" onClick ={obtenerIdseleccionado}>
                <span id="empleo"><img  src={require("../../public/images/svg/empleo.svg")} alt="svg"/></span>
                <span id="empleo_"><img  src={require("../../public/images/svg/empleo_.svg")} alt="svg"/></span>
                Anuncios
            </div>
        </div>
    );
}
export default View;
