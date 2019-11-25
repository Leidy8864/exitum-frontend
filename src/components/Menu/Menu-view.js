
import React from 'react';
import { NavLink } from 'react-router-dom'
import './style.css';

function View(props) {
    const {
        selectOne,
        selectTwo,
        selectThree
    } = props;

    return (
        <div className="Menu">
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
                <li>
                    <NavLink to="/events" id="link-1" onClick={selectThree}>
                        <img src={require("../../public/images/svg/empleo.svg")} alt="svg" />
                        <span>Eventos</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}
export default View;
