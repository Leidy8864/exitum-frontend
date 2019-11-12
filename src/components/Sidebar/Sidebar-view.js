
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
                <div className="user-sidebar mt-4 text-center">
                    <img width="100" src={photo}/>
                    <div className="sidebar-info-user">
                        <h3 className="text-center name-perfil-sidebar mt-3">Ana Sanchez</h3>
                    </div>
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
