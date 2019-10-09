
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
            <div className="user">
                <span><img src={require("../../public/img/favicon.png")} alt="svg"/></span>
                {name || "Usuario"} {lastname || "Invitado"}
            </div>
        </div>
    );
}
export default View;
