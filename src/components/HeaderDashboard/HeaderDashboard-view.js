
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
            <div className="container-fluid">
                    <div className="content-user">
                    <span><img src={photo || "http://25.media.tumblr.com/cac78f96a22b28f0278f2ba694b698dd/tumblr_mowvw27hmi1sntwj3o1_500.jpg"} alt="svg" /></span>
                    {name || "Usuario"} {lastname || "Invitado"}
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
