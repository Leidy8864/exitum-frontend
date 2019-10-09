
import React from 'react';
import './style.css';
import { Link } from 'react-router-dom'
import logo from '../../public/img/favicon.png'

function View(props) {
    const {
        selectOne,
        selectTwo
    } = props;
    return (
        <div className="sidebar">
            <div className="img-sidebar">

            </div>
            <div className="cabecera">
                <div className="text-logo pt-4">
                    <span className="text-abrv"><img src={logo} alt="img"/></span>
                    <p>EXITUM</p>
                </div>
            </div>
            <div className="navegacion">
                <div className="nav flex-column nav-pills p-4" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <Link to="/dashboard" onClick={selectOne} className="nav-link active mt-3" id="v-pills-profile-tab" role="tab"
                        data-toggle="pill"
                        aria-controls="v-pills-profile" aria-selected="false"><i className="fas fa-home"></i><p>Inicio</p></Link>
                    <Link to="/advertisement" onClick={selectTwo}  className="nav-link mt-3" id="v-pills-profile-tab" role="tab"
                        data-toggle="pill"
                        aria-controls="v-pills-profile" aria-selected="false"><i className="fas fa-box"></i><p>Anuncios</p></Link>
                    <Link to="/obras"  className="nav-link mt-3" id="v-pills-messages-tab" role="tab"
                        data-toggle="pill" aria-controls="v-pills-messages" aria-selected="false"><i className="fas fa-building"></i><p>Emprendedores</p></Link>
                    <Link to="/usuarios" className="nav-link mt-3" id="v-pills-settings-tab"
                        data-toggle="pill" role="tab"><i className="fas fa-users"></i><p>Impulsores</p></Link>
                </div>
            </div>
        </div>
    );
}
export default View;
