
import React from 'react';
import './style.css';
import { Link } from 'react-router-dom'

function View(props) {
    const {
        menu,
        logOut,
        photo
    } = props;
    return (
        <div className="sidebar">
            <div className="cabecera">
                <div className="text-logo pt-4">
                    <img src={require('../../public/images/svg/logo-azul.svg')} alt="img"/>
                </div>
            </div>
            {menu}
            <div className="exit-dashboard">
                <Link to="/" onClick={logOut}><i className="far fa-arrow-alt-circle-left"></i></Link>
            </div>
        </div>
    );
}
export default View;
