
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
                    <img width="100" src="https://scontent.flim1-1.fna.fbcdn.net/v/t1.0-1/p160x160/76652265_3020671151491348_4142212806978043904_n.jpg?_nc_cat=104&_nc_oc=AQkKJ24_lfvVPaUBfwVVyM-AFDe0nfBoBLLwj3jQPbqym-EHnOsnyun-FhqxJai2dYWRs3DydbWsNfjqzM0eCKZa&_nc_ht=scontent.flim1-1.fna&oh=a0c172241527a620b68b54cf8c84c2f1&oe=5E62E90F" />
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
