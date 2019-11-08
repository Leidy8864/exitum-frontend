
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
                    <img src={require('../../public/images/svg/logo-azul.svg')} alt="img"/>
                </div>
                <div className="user-sidebar mt-4 text-center">
                    <img width="100" src="http://25.media.tumblr.com/cac78f96a22b28f0278f2ba694b698dd/tumblr_mowvw27hmi1sntwj3o1_500.jpg" />
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
