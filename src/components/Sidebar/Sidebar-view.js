
import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom'
import logo from '../../public/img/favicon.png'

function View(props) {
    const {
        selectOne,
        selectTwo
    } = props;
    return (
        <div className="sidebar">
            <div className="cabecera">
                <div className="text-logo pt-4">
                    <button className="boton-sidebar"><span><i className="fas fa-ellipsis-v"></i></span></button>
                    <p>EXITUM</p>
                </div>
            </div>
            <div className="navegacion">
                <ul>
                    <li>
                        <NavLink to="/dashboard" id="link" onClick={selectOne}>
                            <img className="rocket" src={require("../../public/images/svg/proyecto.svg")} alt="svg" />
                            <span className="home">Inicio</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/advertisement" id="link-1" onClick={selectTwo}>
                            <img src={require("../../public/images/svg/empleo.svg")} alt="svg" />
                            <span>Anuncios</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default View;
