
import React from 'react';
import './style.css';

function View(props){
    const { 
        name, 
        lastname,
        photo,
    } = props

    return(
        <div className="Header-dashboard"> 
            <div className="logo">
                <span><img src={require("../../public/images/svg/logo-azul.svg")} alt="svg"/></span>
            </div>
            <div className="user">
                <span><img src={photo || require("../../public/img/favicon.png")} alt="svg"/></span>
                {name || "Usuario"} {lastname || "Invitado"}
            </div>
        </div>
    );
}
export default View;
