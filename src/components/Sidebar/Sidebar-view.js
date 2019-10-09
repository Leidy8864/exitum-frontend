
import React from 'react';
import './style.css';
import { Link } from 'react-router-dom'

function View(props) {
    const {
        menu
    } = props;
    return (
        <div className="sidebar">
            <div className="cabecera">
                <div className="text-logo pt-4">
                    <button className="boton-sidebar"><span><i className="fas fa-ellipsis-v"></i></span></button>
                    <img src={require('../../public/images/svg/logo-azul.svg')}/>
                </div>
            </div>
            {menu}
            <div className="exit-dashboard">
                <Link to="/"><img src={require('../../public/img/exit.png')} /></Link>
            </div>
        </div>
    );
}
export default View;
