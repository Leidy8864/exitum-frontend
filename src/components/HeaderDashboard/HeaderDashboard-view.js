
import React from 'react';
import './style.css';

function View(props) {

    const { 
        name, 
        lastname,
        photo,
    } = props
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light dashboard-header">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <button className="boton-sidebar-cell"><span><i className="fas fa-ellipsis-v"></i></span></button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <div className="user">
                        <span><img src={photo || require("../../public/img/favicon.png")} alt="svg" /></span>
                        {name || "Usuario"} {lastname || "Invitado"}
                    </div>
                </ul>
            </div>
        </nav>
    );
}
export default View;
