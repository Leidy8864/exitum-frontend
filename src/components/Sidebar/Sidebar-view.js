
import React from 'react';
import './style.css';
import { Link } from 'react-router-dom'

function View(props) {
    const {
        menu,
        logOut
    } = props;
    return (
        <div className="sidebar">
            <div className="cabecera">
                <div className="text-logo pt-4">
                    <button className="boton-sidebar"><span><i className="fas fa-ellipsis-v"></i></span></button>
                    <img src={require('../../public/images/svg/logo-azul.svg')} alt="img"/>
                </div>
            </div>
            {menu}
            <div className="exit-dashboard">
                <Link to="/" onClick={logOut}><img src={require('../../public/img/exit.png')} alt="img"/></Link>
            </div>
        </div>
    );
}
export default View;
