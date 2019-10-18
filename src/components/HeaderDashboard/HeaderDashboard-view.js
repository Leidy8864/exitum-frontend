
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
                    <div className="user">
                        <span><img src={photo || require("../../public/img/favicon.png")} alt="svg" /></span>
                        {name || "Usuario"} {lastname || "Invitado"}
                    </div>
        </nav>
    );
}
export default View;
