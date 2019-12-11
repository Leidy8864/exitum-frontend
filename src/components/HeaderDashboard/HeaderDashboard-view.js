
import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom'

function View(props) {

    const {
        name,
        lastname,
        photo,
        logOut,
        goProfile
    } = props

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light dashboard-header">
            <div className="container-fluid">

                <div className="content-user">
                    <div class="dropleft">
                        <button className="perfil-pick dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img className="img-usuario" src={photo || require('../../public/img/fresita_.png')} alt="svg" />
                            <span>{name || "Usuario"} {lastname || "Invitado"}</span>
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <NavLink className="dropdown-item" data-toggle="pill" to="/my-profile" 
                            onClick={goProfile}
                            >
                                <i className="far fa-user"></i>
                                <p>Mi Perfil</p>
                            </NavLink>
                            <NavLink className="dropdown-item" to="/" 
                            onClick={logOut}
                            >
                                <i className="far fa-arrow-alt-circle-left"></i>
                                <p>Cerrar Sesion</p>
                            </NavLink>
                        </div>
                    </div>

                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="navbar-toggler-icon icon-bar"></span>
                    <span className="navbar-toggler-icon icon-bar"></span>
                    <span className="navbar-toggler-icon icon-bar"></span>
                </button>
            </div>
        </nav>
    );
}
export default View;
